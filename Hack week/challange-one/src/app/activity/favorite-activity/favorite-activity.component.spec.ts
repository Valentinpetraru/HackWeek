import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteActivityComponent } from './favorite-activity.component';

describe('FavoriteActivityComponent', () => {
  let component: FavoriteActivityComponent;
  let fixture: ComponentFixture<FavoriteActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
