import { TestBed } from '@angular/core/testing';

import { GetskillsService } from './getskills.service';

describe('GetskillsService', () => {
  let service: GetskillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetskillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
