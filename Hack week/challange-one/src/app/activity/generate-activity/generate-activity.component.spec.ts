import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateActivityComponent } from './generate-activity.component';

describe('GenerateActivityComponent', () => {
  let component: GenerateActivityComponent;
  let fixture: ComponentFixture<GenerateActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
