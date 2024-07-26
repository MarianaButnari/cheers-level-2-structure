import {Component, inject, Input} from '@angular/core';
import {Cocktail} from '../../shared/interfaces/cocktail';
import {CommonModule} from '@angular/common';
import {BeverageStatusDirective} from '../../shared/directives/beverage-status.directive';
import {LocalStorageService} from '../../shared/services/local-storage.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cocktail-item',
  standalone: true,
  imports: [CommonModule, BeverageStatusDirective, RouterLink],
  templateUrl: './cocktail-item.component.html',
  styleUrl: './cocktail-item.component.scss'
})
export class CocktailItemComponent {
  private localStorageService = inject(LocalStorageService);
  @Input({required: true}) cocktail: Cocktail;

  toggleFavorite(cocktailId: string) {
    this.localStorageService.setItem(cocktailId);
  }

  isFavorite(cocktailId: string) {
    return this.localStorageService.getFavouriteCocktails().includes(cocktailId);
  }

}
