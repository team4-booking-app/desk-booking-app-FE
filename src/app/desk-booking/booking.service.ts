import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './confirmation-dialog-box/Booking';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private resUrl = 'https://team4-backend-stage-app.herokuapp.com/api/v1/reservations';

  private helper = new JwtHelperService();
  private token = localStorage.getItem('auth');
  private decodedToken = this.helper.decodeToken(this.token!);


  constructor(private http: HttpClient) {}


  createBooking(userEmail: string, deskId: number, roomId :number, reservationStart: string, reservationEnd: string) {
    this.decodedToken;
  return this.http.post<Booking[]>(this.resUrl, {
    userEmail, deskId, roomId, reservationStart, reservationEnd
  })
}







}



