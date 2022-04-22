import { Component, OnInit } from '@angular/core';
import {Observable, of, tap} from "rxjs";
import {Reservation} from "../shared/reservation";
import {ReservationsService} from "../services/reservations.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-desk-booking-list',
  templateUrl: './desk-booking-list.component.html',
  styleUrls: ['./desk-booking-list.component.scss']
})
export class DeskBookingListComponent implements OnInit {
  reservationsList$: Observable<Reservation[]> = of();
  constructor(private reservationService: ReservationsService) { }

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservationsList$ = this.reservationService.loadReservations().pipe();
  }

}
