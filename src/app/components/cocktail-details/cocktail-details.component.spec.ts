import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CocktailDetailsComponent } from './cocktail-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CocktailDetailsComponent', () => {
  let component: CocktailDetailsComponent;
  let fixture: ComponentFixture<CocktailDetailsComponent>;

  beforeEach(waitForAsync(() => {
    const mockActivatedRoute = {
      data: of({
        cocktail: {
          id: '17141',
          name: 'Smut',
          isAlcoholic: 'Alcoholic',
          imageUrl:
            'https://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg',
          instructions: 'Throw it all together and serve real cold.',
          ingredients: [
            'Red wine',
            'Peach schnapps',
            'Pepsi Cola',
            'Orange juice',
          ],
        },
      }),
    };

    TestBed.configureTestingModule({
      imports: [CocktailDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CocktailDetailsComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get correct data from the route data', waitForAsync(async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    component.cocktail$.subscribe((cocktail) => {
      expect(cocktail).toEqual({
        id: '17141',
        name: 'Smut',
        isAlcoholic: 'Alcoholic',
        imageUrl:
          'https://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg',
        instructions: 'Throw it all together and serve real cold.',
        ingredients: [
          'Red wine',
          'Peach schnapps',
          'Pepsi Cola',
          'Orange juice',
        ],
      });
    });
  }));
});
