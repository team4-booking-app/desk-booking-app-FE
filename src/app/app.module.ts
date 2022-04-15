import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  AlertModule,
  PopoverModule,
  DatepickerModule,
  TimepickerModule,
} from 'ngx-bootstrap/alert';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OverviewComponent } from './overview/overview.component';
import { DeskBookingComponent } from './desk-booking/desk-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    OverviewComponent,
    DeskBookingComponent,
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
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
