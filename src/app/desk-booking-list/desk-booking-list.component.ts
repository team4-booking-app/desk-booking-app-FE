import {Component, OnInit} from '@angular/core';
import {Observable, of, tap} from "rxjs";
import {Reservation} from "../shared/reservation";
import {ReservationsService} from "../services/reservations.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-desk-booking-list',
  templateUrl: './desk-booking-list.component.html',
  styleUrls: ['./desk-booking-list.component.scss']
})
export class DeskBookingListComponent implements OnInit {
  reservationsList$: Observable<Reservation[]> = of();
  closeResult = '';
  isLoading: boolean = true;
  isEmpty: boolean = false;

  constructor(private modalService: NgbModal, private reservationService: ReservationsService) {
  }

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.isLoading = true;
    this.isEmpty=false;
    this.reservationsList$ = this.reservationService.loadReservations().pipe(tap(Response => {
      if (Response) {
        this.isLoading = false;
      }
    },
      error => {this.isLoading=false; this.isEmpty=true;}));
  }

  deleteReservation(id: string): void {
    this.reservationService.deleteReservation(id).subscribe(() => {
      this.loadReservations();
    });
  }

  open(content: any, id: any) {
    console.warn(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 'Delete reservation') {
        this.deleteReservation(id);
      }
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${DeskBookingListComponent.getDismissReason(reason)}`;
    });
  }

  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
