import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desk-booking',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent implements OnInit {
  dateTimeForm: FormGroup = new FormGroup({
    startDate: new FormControl('2022-04-21T09:00'),
    endDate: new FormControl('2022-04-21T17:00'),
  });

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  getReservationDate() {
    this.dateTimeForm.value.startDate =
      this.dateTimeForm.value.startDate.replace('T', ' ');
    this.dateTimeForm.value.endDate = this.dateTimeForm.value.endDate.replace(
      'T',
      ' '
    );
    this.dateTimeForm.value.startDate =
      this.dateTimeForm.value.startDate + ':00';

    this.dateTimeForm.value.endDate = this.dateTimeForm.value.endDate + ':00';

    console.log(this.dateTimeForm.value);
    return this.dateTimeForm.value;
  }
}
