import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Reservation} from "../shared/reservation";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private httpClient: HttpClient) {}
  private rawToken = localStorage.getItem('auth');
  private helper = new JwtHelperService();
  private reservationsUrl = new URL('https://team4-backend-stage-app.herokuapp.com/api/v1/reservations');

  loadReservations(): Observable<Reservation[]> {
    this.reservationsUrl.searchParams.delete('userEmail');
    this.reservationsUrl.searchParams.append('userEmail',this.helper.decodeToken(this.rawToken!).sub);
    return this.httpClient.get<Reservation[]>(this.reservationsUrl.href);
  }
}
