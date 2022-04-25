import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookingService } from '../booking.service';
import { DateTimePickerComponent } from '../date-time-picker/date-time-picker.component';
import { RoomDropdownComponent } from '../room-dropdown/room-dropdown.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogBoxComponent } from '../confirmation-dialog-box/confirmation-dialog-box.component';

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
  filteredDesks: any;
  selectedDesk: number;

  @Input() desks: any[];
  @Input() roomOpt: any;

  constructor(private modalService: NgbModal) {
    this.selectedDesk = 0;
    this.desks = [];
    this.filteredDesks = [];
  }

  ngOnInit(): void {
    this.filteredDesks = this.desks.filter(
      (desk) => desk.roomId == this.roomOpt
    );
  }

  selectDeskChangeHandler(event: any) {
    this.selectedDesk = event.target.value;
  }

  getSelectedDesk() {
    return this.selectedDesk;
  }

  openModal() {
    this.modalService.open(ConfirmationDialogBoxComponent);
 
  }
}