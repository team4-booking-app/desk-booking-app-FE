import { Component, OnInit, Input } from '@angular/core';
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
  selectedDesk: number;

  @Input() data: any[];
  constructor() {
    // private roomPicker: RoomDropdownComponent // private dateTimePicker: DateTimePickerComponent, // private bookingService: BookingService,
    this.selectedDesk = 0;
    this.data = [];
    // this.SelectedRoom$ = 0;
    // this.SelectedDesks = [];
  }

  // Desks$: Observable<Desks[]> = of();
  // SelectedRoom$: number;
  // SelectedDesks: Desks[];

  ngOnInit(): void {
    // this.Desks$ = this.bookingService.loadDesks(
    //   this.dateTimePicker.getReservationDate()
    // );
    // this.SelectedRoom$ = this.roomPicker.getSelectedRoom();
    // console.log(this.data.deskName);
  }

  selectDeskChangeHandler(event: any) {
    this.selectedDesk = event.target.value;
  }

  getSelectedDesk() {
    return this.selectedDesk;
  }
}
