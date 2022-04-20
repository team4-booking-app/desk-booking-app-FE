import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeskBookingComponent } from './desk-booking/desk-booking.component';
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent, canActivate:[AuthGuard] },
  { path: 'booking', component: DeskBookingComponent, canActivate:[AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
