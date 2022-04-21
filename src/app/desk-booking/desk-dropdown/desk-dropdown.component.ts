import { Component, OnInit } from '@angular/core';
import { BookingService, Desks } from '../booking.service';
import { Observable, of } from 'rxjs';
import { DateTimePickerComponent } from '../date-time-picker/date-time-picker.component';
import { RoomDropdownComponent } from '../room-dropdown/room-dropdown.component';

@Component({
  selector: 'app-desk-dropdown',
  templateUrl: './desk-dropdown.component.html',
  styleUrls: ['./desk-dropdown.component.scss'],
})
export class DeskDropdownComponent implements OnInit {
  constructor(
    private bookingService: BookingService,
    private dateTimePicker: DateTimePickerComponent,
    private roomPicker: RoomDropdownComponent
  ) {}

  Desks$: Observable<Desks[]> = of();

  ngOnInit(): void {
    this.Desks$ = this.bookingService.loadDesks(
      this.dateTimePicker.getReservationDate()
    );
  }
}
