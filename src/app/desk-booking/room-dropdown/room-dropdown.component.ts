import { ConfirmationDialogBoxComponent } from './../confirmation-dialog-box/confirmation-dialog-box.component';
import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-room-dropdown',
  templateUrl: './room-dropdown.component.html',
  styleUrls: ['./room-dropdown.component.scss'],
})

export class RoomDropdownComponent implements OnInit {
  selectedRoom: number;

  constructor(private modalService: NgbModal) {
    this.selectedRoom = 0;
  }

  ngOnInit(): void {}

  selectRoomChangeHandler(event: any) {
    this.selectedRoom = event.target.value;
    console.log(this.selectedRoom);
  }

  getSelectedRoom() {
    return this.selectedRoom;
  }



  



  



}
