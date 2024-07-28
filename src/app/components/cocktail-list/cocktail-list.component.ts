import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {debounceTime} from 'rxjs';
import {CocktailsService} from '../../shared/services/cocktails.service';
import {Cocktail} from '../../shared/interfaces/cocktail';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {CocktailItemComponent} from '../cocktail-item/cocktail-item.component';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CocktailItemComponent,],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent implements OnInit {
  private cocktailsService = inject(CocktailsService);
  protected searchInput = new FormControl<string | null>(null);
  protected filtered: Cocktail[];
  private cocktails: Cocktail[];

  ngOnInit(): void {
    this.initData();
    this.searchInput.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      value ? this.filtered = this.cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(value)) :
        this.filtered = this.cocktails
    });
  }

  private initData() {
    this.cocktailsService.getAllCocktails().subscribe((response: Cocktail[]) => {
      this.cocktails = response;
      this.filtered = this.cocktails;
    })
  }

}
