import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  private desksURL = new URL(
    'https://team4-backend-stage-app.herokuapp.com/api/v1/desks/available'
  );
  private resUrl = 'https://team4-backend-stage-app.herokuapp.com/api/v1/reservations';

  private helper = new JwtHelperService();
  private token = localStorage.getItem('auth');
  private decodedToken = this.helper.decodeToken(this.token!);


  constructor(private http: HttpClient) {}

  loadDesks(reservationDate: any): Observable<Desks[]> {
    this.desksURL.searchParams.append(
      'reservationStart',
      reservationDate.startDate
    );

    this.desksURL.searchParams.append(
      'reservationEnd',
      reservationDate.endDate
    );
    return this.http.get<Desks[]>(this.desksURL.href);
  }

  createBooking(data: any): Observable<any> {
    this.decodedToken;
  return this.http.post<any>(this.resUrl, data
 )


}







}



