import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookingService } from '../booking.service';
import { DateTimePickerComponent } from '../date-time-picker/date-time-picker.component';
import { RoomDropdownComponent } from '../room-dropdown/room-dropdown.component';

export interface Desks {
  deskId: number;
  deskName: string;
  roomId: number;
}

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
  ) {
    this.SelectedRoom$ = 0;
    this.SelectedDesks = [];
  }

  // Desks$: Observable<Desks[]> = of();
  SelectedRoom$: number;
  SelectedDesks: Desks[];

  ngOnInit(): void {
    // this.Desks$ = this.bookingService.loadDesks(
    //   this.dateTimePicker.getReservationDate()
    // );
    // this.SelectedRoom$ = this.roomPicker.getSelectedRoom();
  }
}
