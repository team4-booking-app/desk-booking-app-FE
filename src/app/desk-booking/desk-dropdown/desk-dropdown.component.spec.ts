import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskDropdownComponent } from './desk-dropdown.component';

describe('DeskDropdownComponent', () => {
  let component: DeskDropdownComponent;
  let fixture: ComponentFixture<DeskDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
