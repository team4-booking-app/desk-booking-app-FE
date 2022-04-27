import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { BookingService, Desks } from '../booking.service';

@Component({
  selector: 'app-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent implements OnDestroy, ControlValueAccessor  {
  subscriptions: Subscription[] = [];
  dateTimeForm: FormGroup = new FormGroup({
    startDate: new FormControl('2022-05-02'),
    startTime: new FormControl('09:00:00'),
    endTime: new FormControl('17:00:00'),
  });

  @Output() redirectDesks: EventEmitter<any> = new EventEmitter();

  constructor(private bookingService: BookingService) {
    this.reservationStart = '';
    this.reservationEnd = '';
  }

  reservationStart: string;
  reservationEnd: string;
  Desks$: Observable<Desks[]> = of();

  ngOnInit() {}

  selectReservationDate() {
    this.reservationStart =
      this.dateTimeForm.value.startDate +
      ' ' +
      this.dateTimeForm.value.startTime.substring(0,5) + ':00';

    this.reservationEnd =
      this.dateTimeForm.value.startDate + ' ' + this.dateTimeForm.value.endTime.substring(0,5) + ':00';
    this.Desks$ = this.bookingService.loadDesks(
      this.reservationStart,
      this.reservationEnd
    );
    this.Desks$.subscribe((deskList) => {
      this.redirectDesks.emit(deskList);
    });
  }

  getReservationDate() {
    return this.dateTimeForm.value;
  }
}