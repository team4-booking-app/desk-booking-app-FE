import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Desks {
  deskId: number;
  deskName: string;
  roomId: number;
}
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient) {}

  private desksURL = new URL(
    'https://team4-backend-stage-app.herokuapp.com/api/v1/desks/available'
  );

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
}
