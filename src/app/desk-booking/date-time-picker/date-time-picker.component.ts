import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverDirective } from 'ngx-bootstrap/popover';
import { DateTime } from '../DateTime';

@Component({
  selector: 'app-desk-booking',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent implements OnInit {
  dateTimeForm: FormGroup = new FormGroup({
    startDate: new FormControl('2018-06-08T00:00'),
    endDate: new FormControl(''),
  });

  constructor(private router: Router, private route: ActivatedRoute) {
    this.date = this.time = new Date();
  }

  @ViewChild('popoverRef') private _popoverRef!: PopoverDirective;
  time: Date;
  date: Date;
  isDateVisible: boolean = true;
  isMeridian: boolean = false;
  dateTime = new Date();

  ngOnInit() {
    if (this.dateTime) {
      this.time = this.date = this.dateTime;
      this.time.setMinutes(0, 0);
      return;
    }
    this.date = this.time = new Date();
  }

  getStartDate() {
    console.log(this.dateTimeForm.value);
  }

  dateSelectionDone() {
    this.isDateVisible = false;
  }

  updateDate() {
    if (this.date) {
      this.dateTime = DateTime.getDateTime(this.date, this.time);
    }
    if (!this.time) {
      this.time = this.date;
    }
  }

  updateTime() {
    if (this.time) {
      this.dateTime = DateTime.getDateTime(this.date, this.time);
      this.dateTime = DateTime.setTimeToZero(this.time);
    }
  }

  showDate() {
    this.isDateVisible = true;
  }

  showTime() {
    this.isDateVisible = false;
  }

  close() {
    this._popoverRef.hide();
  }

  now() {
    this.dateTime = DateTime.now(this.date);

    this.time = this.dateTime;
  }

  today() {
    this.date = this.time = new Date();

    this.dateTime = DateTime.now(this.date);
  }

  // Dropdown appears when button is pressed:
  dropdown = false;
  dropdownAppear() {
    this.dropdown = true;
  }
}
