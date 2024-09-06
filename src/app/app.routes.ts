import { Routes } from '@angular/router';
import { TurfListComponent } from './components/turf-list/turf-list.component';
import { TurfDetailsComponent } from './components/turf-details/turf-details.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';

export const routes: Routes = [
  { path: '', component: TurfListComponent },
  { path: 'turf/:id', component: TurfDetailsComponent },
  { path: 'book/:id', component: BookingFormComponent },
];
