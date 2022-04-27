import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BookingService } from '../booking.service';
import {Observable, of} from "rxjs";
import {Reservation} from "../../shared/reservation";
import {ReservationsService} from "../../services/reservations.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

export interface Desks {
  deskId: number;
  deskName: string;
  roomId: number;
}

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent implements OnInit {
  bookingForm!: FormGroup;
  isShown: boolean = false;
  deskData: any;
  roomData: any;
  closeResult = '';
  reservationsList$: Observable<Reservation[]> = of();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private formBuilder: FormBuilder,
    private reservationService: ReservationsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      userEmail: ['', Validators.required],
      deskId: ['', Validators.required],
      reservationStart: ['', Validators.required],
      reservationEnd: ['', Validators.required],
    });

    this.bookingForm.controls['userEmail'].setValue(
      this.bookingService.getUserEmail()
    );
    this.reservationsList$ = this.reservationService.loadReservations().pipe();
  }

  roomDropdown = false;
  showRoomDropdown() {
    if (this.bookingForm.value.reservationEnd !== null) {
      this.roomDropdown = true;
    }
  }

  toggleShow() {
    this.isShown = false;
    this.isShown = !this.isShown;
  }

  createBooking() {
    this.bookingService.createBooking(this.bookingForm.value).subscribe(() => {
      this.router.navigate(['/confirmation'], {
        queryParams: { reservation: 'success' },
      });
    });
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${BookingFormComponent.getDismissReason(reason)}`;
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
