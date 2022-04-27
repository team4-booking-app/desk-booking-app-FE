import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DeskBookingComponent} from './desk-booking/desk-booking.component';
import {AuthGuard} from "./auth/auth.guard";
import {DeskBookingListComponent} from "./desk-booking-list/desk-booking-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent, canActivate:[AuthGuard] },
  { path: 'booking', component: DeskBookingComponent, canActivate:[AuthGuard] },
  { path: 'cancellation' , component: DeskBookingListComponent, canActivate:[AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
