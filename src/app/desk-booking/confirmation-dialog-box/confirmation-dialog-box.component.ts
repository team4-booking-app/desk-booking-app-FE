import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from '../booking.service';
import { Booking } from './Booking';

@Component({
  selector: 'app-confirmation-dialog-box',
  templateUrl: './confirmation-dialog-box.component.html',
  styleUrls: ['./confirmation-dialog-box.component.scss'],
})
export class ConfirmationDialogBoxComponent implements OnInit {
  closeResult: string = '';

public data!: Booking;

  public userEmail!: string;
  public deskId!: number;
  public roomId!: number;
  public reservationStart!: string;
  public reservationEnd!: string;

  constructor(
    private modalService: NgbModal,
    private bookingService: BookingService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  openModal(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  createBooking() {
    this.bookingService.createBooking(this.userEmail, this.deskId, this.roomId, this.reservationStart, this.reservationEnd)
  }

  



}


