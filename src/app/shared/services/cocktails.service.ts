import { inject, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { catchError, map, Observable, of, retry, tap, throwError } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {
  private httpClient = inject(HttpClient);
  private BASE_URL = '/cockails';

  getAllCocktails(): Observable<Cocktail[]> {
    return this.httpClient.get<Cocktail[]>(this.BASE_URL).pipe(
      map((cocktails: Cocktail[]) => {
        return cocktails;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  getCocktailById(id: string): Observable<Cocktail> {
    return this.httpClient.get<Cocktail>(`${this.BASE_URL}/${id}`).pipe(
      map((cocktail: Cocktail) => {
        return cocktail;
      }),
      retry(2),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    switch (error.status) {
      case HttpStatusCode.BadRequest:
        console.error(`Bad Request: ${error.error}`);
        break;
      // !add more errors
      default:
        console.error(`Unknown error: ${error.error}`);
    }
    return throwError(() => error);
  }
}
