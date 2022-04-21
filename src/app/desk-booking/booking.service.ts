import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Desks {
  deskId: number;
  deskName: string;
  roomId: number;
}
@Injectable({
  providedIn: 'root',
})
export class BookingServiceService {
  constructor(private http: HttpClient) {}
  private desksURL =
    'https://team4-backend-stage-app.herokuapp.com/api/v1/available';
  getDesks() {
    return this.http.get<Desks>(this.desksURL);
  }
}
