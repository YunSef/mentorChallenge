import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickAddsComponent } from './pick-adds.component';

describe('PickAddsComponent', () => {
  let component: PickAddsComponent;
  let fixture: ComponentFixture<PickAddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickAddsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
