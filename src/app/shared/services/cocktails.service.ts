import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Cocktail} from '../interfaces/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  private httpClient = inject(HttpClient);
  private BASE_URL = '/cockails';

  getAllCocktails(): Observable<Cocktail[]> {
    return this.httpClient.get<Cocktail[]>(this.BASE_URL);
  }

  getCocktailById(id: string): Observable<Cocktail> {
    return this.httpClient.get<Cocktail>(`${this.BASE_URL}/${id}`);
  }

}
