import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    endTime: new FormControl('2022-04-21T17:00:00'),
  });

  @Output() redirectDesks: EventEmitter<any> = new EventEmitter();

  constructor(private bookingService: BookingService) {}

  Desks$: Observable<Desks[]> = of();

  ngOnInit() {}

  selectReservationDate() {
    this.dateTimeForm.value.startDate =
      this.dateTimeForm.value.startDate.replace('T', ' ');
    this.dateTimeForm.value.endTime = this.dateTimeForm.value.endTime.replace(
      'T',
      ' '
    );

    console.log(this.dateTimeForm.value);
    this.Desks$ = this.bookingService.loadDesks(this.dateTimeForm.value);
    this.Desks$.subscribe((deskList) => {
      this.redirectDesks.emit(deskList);
    });
  }

  getReservationDate() {
    return this.dateTimeForm.value;
  }
}
