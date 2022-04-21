import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  private desksURL =
    'https://team4-backend-stage-app.herokuapp.com/api/v1/available';

  loadDesks(reservationDate: any) {
    //kaip referencint i ta forma
    return (
      this.http.get<Desks[]>(this.desksURL) +
      reservationDate.startDate +
      reservationDate.endDate
    );
  }
}
