import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  forwardRef,
  OnDestroy,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-room-dropdown',
  templateUrl: './room-dropdown.component.html',
  styleUrls: ['./room-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RoomDropdownComponent),
      multi: true,
    },
  ],
})
export class RoomDropdownComponent
  implements OnInit, ControlValueAccessor, OnDestroy
{
  roomDropdownForm: FormGroup;
  selectedRoom: number;
  subscriptions: Subscription[] = [];

  @Output() redirectRoom: EventEmitter<any> = new EventEmitter();
  value: any;

  constructor(private formBuilder: FormBuilder) {
    this.selectedRoom = 0;
    this.roomDropdownForm = this.formBuilder.group({
      roomId: [],
    });

    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.roomDropdownForm.valueChanges.subscribe((value) => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
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
      this.roomDropdownForm.reset();
    }
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  ngOnInit(): void {}

  selectRoomChangeHandler(event: any) {
    this.selectedRoom = event.target.value;
    this.redirectRoom.emit(this.selectedRoom);
  }

  getSelectedRoom() {
    return this.selectedRoom;
  }
}
