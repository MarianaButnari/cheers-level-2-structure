import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { debounceTime, map, switchMap } from 'rxjs';
import { CocktailsService } from '../../shared/services/cocktails.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CocktailItemComponent } from '../cocktail-item/cocktail-item.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CocktailItemComponent],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailListComponent implements OnInit {
  private cocktailsService = inject(CocktailsService);
  private destroyRef = inject(DestroyRef);

  protected title = `Cocktail name`;
  protected searchInput = new FormControl<string | null>(null);

  private cocktails$ = this.cocktailsService.getAllCocktails();
  protected filtered$ = this.cocktails$;

  ngOnInit(): void {
    this.filter();
  }

  private filter() {
    this.searchInput.valueChanges
      .pipe(
        // debounceTime(500),
        takeUntilDestroyed(this.destroyRef),
        switchMap((value: string | null) => {
          return (this.filtered$ = this.cocktails$.pipe(
            map((cocktails) =>
              cocktails.filter((cocktail) =>
                value
                  ? cocktail.name.toLowerCase().includes(value.toLowerCase())
                  : cocktail
              )
            )
          ));
        })
      )
      .subscribe();
  }
}
