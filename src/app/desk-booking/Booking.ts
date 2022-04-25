export interface Booking {
    _id: string;
    userEmail: string;
    roomId: number;
    deskId: number;
    reservationStart: string;
    reservationEnd: string;
}