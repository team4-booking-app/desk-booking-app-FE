import { DeskDropdownComponent } from './desk-booking/desk-dropdown/desk-dropdown.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OverviewComponent } from './overview/overview.component';
import { RoomDropdownComponent } from './desk-booking/room-dropdown/room-dropdown.component';
import { ConfirmationPageComponent } from './desk-booking/confirmation-page/confirmation-page.component';
import { CountdownModule } from "ngx-countdown";
import { DateTimePickerComponent } from './desk-booking/date-time-picker/date-time-picker.component';
import { BookingFormComponent } from './desk-booking/booking-form/booking-form.component';
import {DeskBookingListComponent} from "./desk-booking-list/desk-booking-list.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    OverviewComponent,
    RoomDropdownComponent,
    ConfirmationPageComponent,
    DateTimePickerComponent,
    BookingFormComponent,
    DeskDropdownComponent
    DeskBookingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    AlertModule.forRoot(),
    PopoverModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    CountdownModule           
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
