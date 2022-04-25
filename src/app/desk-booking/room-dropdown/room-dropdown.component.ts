import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-room-dropdown',
  templateUrl: './room-dropdown.component.html',
  styleUrls: ['./room-dropdown.component.scss'],
})
export class RoomDropdownComponent implements OnInit {
  selectedRoom: number;

  @Output() redirectRoom: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.selectedRoom = 0;
  }

  ngOnInit(): void {}

  selectRoomChangeHandler(event: any) {
    this.selectedRoom = event.target.value;
    this.redirectRoom.emit(this.selectedRoom);
  }

  getSelectedRoom() {
    return this.selectedRoom;
  }









  



  



}
