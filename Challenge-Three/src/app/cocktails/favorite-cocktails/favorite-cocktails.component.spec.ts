import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCocktailsComponent } from './favorite-cocktails.component';

describe('FavoriteCocktailsComponent', () => {
  let component: FavoriteCocktailsComponent;
  let fixture: ComponentFixture<FavoriteCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteCocktailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
