import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskBookingListComponent } from './desk-booking-list.component';

describe('DeskBookingListComponent', () => {
  let component: DeskBookingListComponent;
  let fixture: ComponentFixture<DeskBookingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskBookingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskBookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
