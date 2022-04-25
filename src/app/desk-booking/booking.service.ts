import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Booking } from './Booking';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface Desks {
  deskId: number;
  deskName: string;
  roomId: number;
}
@Injectable({
  providedIn: 'root',
})
export class BookingService {

  private token = localStorage.getItem('auth');
  private helper = new JwtHelperService();
  private decodedToken = this.helper.decodeToken(this.token!);

  private resUrl = 'https://team4-backend-stage-app.herokuapp.com/api/v1/reservations';
  
  private desksURL = new URL(
    'https://team4-backend-stage-app.herokuapp.com/api/v1/desks/available'
  );



  constructor(private http: HttpClient, ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: this.decodedToken.sub,
    })
  };

  loadDesks(reservationStart: any, reservationEnd: any): Observable<Desks[]> {
    this.desksURL.searchParams.delete('reservationStart');
    this.desksURL.searchParams.delete('reservationEnd');
    this.desksURL.searchParams.append('reservationStart', reservationStart);

    this.desksURL.searchParams.append('reservationEnd', reservationEnd);
    return this.http.get<Desks[]>(this.desksURL.href);
  }

  createBooking(data: any): Observable<any> {
    console.log(this.decodedToken)
      return this.http.post<any>(this.resUrl, data, this.httpOptions);
  }





}
