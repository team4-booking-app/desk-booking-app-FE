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

  @Input() desks: any[];
  @Input() roomOpt: any;

  constructor() {
    this.selectedDesk = 0;
    this.desks = [];
  }

  ngOnInit(): void {
    console.log(this.roomOpt);
    console.log(this.desks);
  }

  selectDeskChangeHandler(event: any) {
    this.selectedDesk = event.target.value;
  }

  getSelectedDesk() {
    return this.selectedDesk;
  }
}
