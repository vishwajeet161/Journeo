import { Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
//   { path: 'train', loadComponent: () => import('./modules/train-ticket/train-ticket.component').then(m => m.TrainTicketComponent) },
//   { path: 'bus', loadComponent: () => import('./modules/bus-ticket/bus-ticket.component').then(m => m.BusTicketComponent) },
//   { path: 'flight', loadComponent: () => import('./modules/flight-ticket/flight-ticket.component').then(m => m.FlightTicketComponent) },
//   { path: 'login', loadComponent: () => import('./modules/login/login.component').then(m => m.LoginComponent) },
  { path: '**', redirectTo: '' }
];
