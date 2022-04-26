import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  bookingForm!: FormGroup;
  isShown: boolean = false;
  deskData: any;
  roomData: any;
  constructor(private router: Router, private route: ActivatedRoute, private bookingService: BookingService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      time: [],
      roomDropdown: [],
      deskDropdown: []

      
    });
  }

  toggleShow() {
    this.isShown = false;
    this.isShown = !this.isShown;
  }


  createBooking() {
    console.log(this.bookingForm.value);  
    this.bookingService.createBooking(this.bookingForm.value).subscribe(
        () => {
          this.router.navigate(['/confirmation'], {
            queryParams: { reservation: 'success' },
          });
        },

  );
}
  
}
