import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe(`AppComponent`, () => {
  // ?this is to check that our tools work as expected
  // it('should pass sanity test', () => {
  //   expect(true).toBeTruthy()
  // });

  // !real stuff going here :D
  beforeEach(() => {
    // !crucial thing is this TestBed, it creates a testing module
    TestBed.configureTestingModule({
      // declarations: [AppComponent],
      // !since AppComponent is a standalone one it wont work with declarations
      imports: [AppComponent],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents(); // !this method inlines our HTML and CSS, however Angular does this for us
  });

  it('should create the App', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
