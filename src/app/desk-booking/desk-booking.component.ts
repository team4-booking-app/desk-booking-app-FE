import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desk-booking',
  templateUrl: './desk-booking.component.html',
  styleUrls: ['./desk-booking.component.scss'],
})
export class DeskBookingComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
