import {Timestamp} from "rxjs";

export interface Reservation {
  reservationId: number;
  userEmail: string;
  deskId: number;
  deskName: string;
  roomId: number;
  roomName: string;
  reservationStart: string;
  reservationEnd: string;
}
