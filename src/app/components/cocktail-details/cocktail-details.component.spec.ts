import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CocktailDetailsComponent } from './cocktail-details.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('CocktailDetailsComponent', () => {
  let component: CocktailDetailsComponent;
  let fixture: ComponentFixture<CocktailDetailsComponent>;
  let mockActivatedRoute: any;
// TODO this test fail , need to fix it
  beforeEach(waitForAsync(() => {
    // Mock ActivatedRoute
    mockActivatedRoute = {
      data: of({
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
      }),
    };

    TestBed.configureTestingModule({
      imports: [CocktailDetailsComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get correct data from the route data', (done) => {
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
      done();
    });
  });
});
