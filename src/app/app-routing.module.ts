import { ConfirmationPageComponent } from './desk-booking/confirmation-page/confirmation-page.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DeskBookingComponent} from './desk-booking/desk-booking.component';
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent, canActivate:[AuthGuard] },
  { path: 'booking', component: DeskBookingComponent, canActivate:[AuthGuard] },
  { path: 'confirmation', component: ConfirmationPageComponent, canActivate:[AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
