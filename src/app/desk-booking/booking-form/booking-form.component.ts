import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { BookingService } from '../booking.service';

export interface Desks {
  deskId: number;
  deskName: string;
  roomId: number;
}

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent implements OnInit {
  bookingForm: FormGroup = new FormGroup({});
  isShown: boolean = false;
  deskData: any;
  roomData: any;
  constructor(private router: Router, private route: ActivatedRoute, private bookingService: BookingService) {}

  ngOnInit(): void {}

  toggleShow() {
    this.isShown = false;
    this.isShown = !this.isShown;
  }

  roomDropdown = true;

  createBooking() {
    this.bookingService.createBooking(this.bookingForm.value).subscribe(
      (data) => {
         console.log('Form submitted successfully');                           
      },

  );
}
  
}