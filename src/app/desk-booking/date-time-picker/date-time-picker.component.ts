import {
  Component,
  Output,
  EventEmitter,
  forwardRef,
  OnDestroy,
  Input,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  Validators,
} from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { BookingService, Desks } from '../booking.service';

@Component({
  selector: 'app-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateTimePickerComponent),
      multi: true,
    },
  ],
})
export class DateTimePickerComponent
  implements OnDestroy, ControlValueAccessor
{
  subscriptions: Subscription[] = [];
  isShown: boolean = false;

  dateTimeForm: FormGroup = new FormGroup({
    startDate: new FormControl('2022-05-02', Validators.required),
    startTime: new FormControl('09:00:00', Validators.required),
    endTime: new FormControl('17:00:00', Validators.required),
  });

  onChange: any = () => {};
  onTouched: any = () => {};

  @Input() bookingForm!: FormGroup;
  @Output() redirectDesks: EventEmitter<any> = new EventEmitter();
  value: any;

  constructor(
    private bookingService: BookingService,
    private formBuilder: FormBuilder
  ) {
    this.reservationStart = '';
    this.reservationEnd = '';

    this.subscriptions.push(
      this.dateTimeForm.valueChanges.subscribe((value) => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  reservationStart: string;
  reservationEnd: string;
  Desks$: Observable<Desks[]> = of();

  getReservationDate() {
    return this.dateTimeForm.value;
  }

  selectReservationDate() {
    this.reservationStart =
      this.dateTimeForm.value.startDate +
      ' ' +
      this.dateTimeForm.value.startTime.substring(0, 5) +
      ':00';

    this.reservationEnd =
      this.dateTimeForm.value.startDate +
      ' ' +
      this.dateTimeForm.value.endTime.substring(0, 5) +
      ':00';
    this.Desks$ = this.bookingService.loadDesks(
      this.reservationStart,
      this.reservationEnd
    );
    this.bookingForm?.controls['reservationStart'].setValue(
      this.reservationStart
    );
    this.bookingForm?.controls['reservationEnd'].setValue(this.reservationEnd);
    this.Desks$.subscribe((deskList) => {
      this.redirectDesks.emit(deskList);
    });
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.dateTimeForm.reset();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  showMessage() {
    this.isShown = false;
    this.isShown = !this.isShown;
    setTimeout(() => {
      this.isShown = !this.isShown;
    }, 5000);
  }
}
