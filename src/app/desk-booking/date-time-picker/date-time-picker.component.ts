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
    endDate: new FormControl('2022-04-21T17:00:00'),
  });

  @Output() redirect: EventEmitter<any> = new EventEmitter();

  constructor(private bookingService: BookingService) {
    this.text = 'bandom';
  }

  Desks$: Observable<Desks[]> = of();
  text: string;
  listas: Desks[] = [];
  ngOnInit() {}

  selectReservationDate() {
    this.dateTimeForm.value.startDate =
      this.dateTimeForm.value.startDate.replace('T', ' ');
    this.dateTimeForm.value.endDate = this.dateTimeForm.value.endDate.replace(
      'T',
      ' '
    );

    this.Desks$ = this.bookingService.loadDesks(this.dateTimeForm.value);
    this.Desks$.subscribe((deskList) => console.log(deskList));

    this.redirect.emit(this.text);
  }

  getReservationDate() {
    return this.dateTimeForm.value;
  }
}
