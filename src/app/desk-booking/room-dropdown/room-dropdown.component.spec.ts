import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDropdownComponent } from './room-dropdown.component';

describe('DropdownComponent', () => {
  let component: RoomDropdownComponent;
  let fixture: ComponentFixture<RoomDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
