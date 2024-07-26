import {ActivatedRouteSnapshot, ResolveFn} from '@angular/router';
import {Cocktail} from '../interfaces/cocktail';
import {inject} from '@angular/core';
import {CocktailsService} from '../services/cocktails.service';

export const cocktailDetailsResolver: ResolveFn<Cocktail> = (route: ActivatedRouteSnapshot) => {
  const cocktailsService = inject(CocktailsService);
  const cocktailId = route.paramMap.get('cocktailId')!;
  return cocktailsService.getCocktailById(cocktailId)
}
