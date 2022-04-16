import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskBookingComponent } from './desk-booking.component';

describe('DeskBookingComponent', () => {
  let component: DeskBookingComponent;
  let fixture: ComponentFixture<DeskBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
