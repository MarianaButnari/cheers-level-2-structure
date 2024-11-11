import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(cocktailID: string): void {
    let storedCocktails = this.getFavoriteCocktails();
    storedCocktails.includes(cocktailID)
      ? (storedCocktails = storedCocktails.filter(id => id !== cocktailID))
      : storedCocktails.push(cocktailID);
    localStorage.setItem('favorite', JSON.stringify(storedCocktails));
  }

  getFavoriteCocktails(): string[] {
    const favoriteCocktails = localStorage.getItem('favorite');
    return favoriteCocktails ? JSON.parse(favoriteCocktails) : [];
  }

}
