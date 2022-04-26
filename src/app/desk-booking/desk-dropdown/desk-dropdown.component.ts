import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  forwardRef,
  OnDestroy,
} from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { BookingService } from '../booking.service';
import { DateTimePickerComponent } from '../date-time-picker/date-time-picker.component';
import { RoomDropdownComponent } from '../room-dropdown/room-dropdown.component';
import {
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormBuilder,
  ControlValueAccessor,
  FormControl
} from '@angular/forms';


export interface Desks {
  deskId: number;
  deskName: string;
  roomId: number;
}

@Component({
  selector: 'app-desk-dropdown',
  templateUrl: './desk-dropdown.component.html',
  styleUrls: ['./desk-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DeskDropdownComponent),
      multi: true
    }]
})
export class DeskDropdownComponent implements OnInit, OnChanges, ControlValueAccessor, OnDestroy {
  deskDropdownForm: FormGroup;
  filteredDesks: any;
  selectedDesk: number;
  subscriptions: Subscription[] = [];

  @Input() desks: any[];
  @Input() roomOpt: any;
  value: any;

  constructor(private formBuilder: FormBuilder) {
    this.deskDropdownForm = this.formBuilder.group({
      deskId: Number
    })

    this.selectedDesk = 0;
    this.desks = [];
    this.filteredDesks = [];

    this.subscriptions.push(
      this.deskDropdownForm.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(value: any) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.deskDropdownForm.reset();
    }
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.filteredDesks = this.desks.filter(
      (desk) => desk.roomId == this.roomOpt
    );
  }

  selectDeskChangeHandler(event: any) {
    this.selectedDesk = event.target.value;
    console.log(this.selectedDesk);
  }

  getSelectedDesk() {
    return this.selectedDesk;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }


}




