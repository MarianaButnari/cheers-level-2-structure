import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {cocktailDetailsResolver} from './shared/utils/cocktail-details.resolver';

export const routes: Routes = [
  {
    path: 'cocktails',
    loadComponent: () =>
      import('./components/cocktail-list/cocktail-list.component').then(
        (m) => m.CocktailListComponent,
      ),
  },
  {
    path: 'cocktails/:cocktailId',
    loadComponent: () => import('./components/cocktail-details/cocktail-details.component').then(m => m.CocktailDetailsComponent),
    resolve: {
      cocktail: cocktailDetailsResolver
    }
  },
  {path: '', redirectTo: '/cocktails', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
