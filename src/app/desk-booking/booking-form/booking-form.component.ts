import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent implements OnInit {
  bookingForm: FormGroup = new FormGroup({});

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
