import { TestBed } from '@angular/core/testing';

import { GetCocktailsService } from './get-cocktails.service';

describe('GetCocktailsService', () => {
  let service: GetCocktailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCocktailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
