import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkSelectComponent } from './drink-select.component';

describe('DrinkSelectComponent', () => {
  let component: DrinkSelectComponent;
  let fixture: ComponentFixture<DrinkSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
