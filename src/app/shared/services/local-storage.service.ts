import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(cocktailID: string): void {
    let storedCocktails = this.getFavouriteCocktails();
    storedCocktails.includes(cocktailID)
      ? (storedCocktails = storedCocktails.filter(id => id !== cocktailID))
      : storedCocktails.push(cocktailID);
    localStorage.setItem('favorite', JSON.stringify(storedCocktails));
  }

  getFavouriteCocktails(): string[] {
    const favouriteCocktails = localStorage.getItem('favorite');
    return favouriteCocktails ? JSON.parse(favouriteCocktails) : [];
  }

}
