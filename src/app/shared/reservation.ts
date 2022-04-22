import {Timestamp} from "rxjs";

export interface Reservation {
  reservationId: number;
  userEmail: string;
  roomId: number;
  deskId: number;
  reservationStart: string;
  reservationEnd: string;
}
