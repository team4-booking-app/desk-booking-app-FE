import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './room-dropdown.component.html',
  styleUrls: ['./room-dropdown.component.scss'],
})
export class RoomDropdownComponent implements OnInit {
  selectedRoom: number;

  constructor() {
    this.selectedRoom = 0;
  }

  ngOnInit(): void {}

  selectRoomChangeHandler(event: any) {
    this.selectedRoom = event.target.value;
  }

  getSelectedRoom() {
    return this.selectedRoom;
  }
}
