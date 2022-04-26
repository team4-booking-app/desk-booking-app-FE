import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-room-dropdown',
  templateUrl: './room-dropdown.component.html',
  styleUrls: ['./room-dropdown.component.scss'],
})
export class RoomDropdownComponent implements OnInit {
 roomDropdownForm: FormGroup;
  selectedRoom: number;


  @Output() redirectRoom: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.selectedRoom = 0;
    this.roomDropdownForm = this.formBuilder.group({
      roomName: ['']
    })
  }

  ngOnInit(): void {}

  selectRoomChangeHandler(event: any) {
    this.selectedRoom = event.target.value;
    this.redirectRoom.emit(this.selectedRoom);
    console.log(this.selectedRoom)
  }

  getSelectedRoom() {
    return this.selectedRoom;
  }


  

  



  



}
