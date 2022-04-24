import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { BookingService, Desks } from '../booking.service';

@Component({
  selector: 'app-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent implements OnInit {
  dateTimeForm: FormGroup = new FormGroup({
    startDate: new FormControl('2022-04-21T09:00:00'),
    endDate: new FormControl('2022-04-21T17:00:00'),
  });

  constructor(private bookingService: BookingService) {}

  Desks$: Observable<Desks[]> = of();
  ngOnInit() {}

  selectReservationDate() {
    this.dateTimeForm.value.startDate =
      this.dateTimeForm.value.startDate.replace('T', ' ');
    this.dateTimeForm.value.endDate = this.dateTimeForm.value.endDate.replace(
      'T',
      ' '
    );
    this.Desks$ = this.bookingService.loadDesks(this.dateTimeForm.value);
    this.Desks$.subscribe((T) => console.log(T));
  }

  getReservationDate() {
    return this.dateTimeForm.value;
  }
}
