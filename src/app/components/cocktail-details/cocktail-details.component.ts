import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, of, switchMap} from 'rxjs';
import {Cocktail} from '../../shared/interfaces/cocktail';
import {BeverageStatusDirective} from '../../shared/directives/beverage-status.directive';
import {CommonModule, Location} from '@angular/common';
import {LocalStorageService} from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [
    CommonModule,
    BeverageStatusDirective,
  ],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss'
})
export class CocktailDetailsComponent implements OnInit {
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);
  private localStorageService = inject(LocalStorageService);
  protected cocktail$: Observable<Cocktail>;

  ngOnInit(): void {
    this.cocktail$ = this.activatedRoute.data.pipe(
      switchMap(data => of(data['cocktail']))
    )
  }

  protected goBack() {
    this.location.back();
  }

  toggleFavorite(cocktailId: string) {
    this.localStorageService.setItem(cocktailId);
  }

  isFavorite(cocktailId: string) {
    return this.localStorageService.getFavouriteCocktails().includes(cocktailId);
  }

}
