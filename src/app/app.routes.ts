import { Route } from '@angular/router';

import { AirportsComponent } from './flight-booking/airports/airports.component';
import { HomeComponent } from './components/home/home.component';

import flightBookingRoutes from './flight-booking/flight-booking.routes';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'airports',
    title: 'Airports',
    component: AirportsComponent,
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },

  {
    path: 'flight-booking',
    title: 'Flight Booking',
    children: flightBookingRoutes,
    // loadChildren: () => import('./flights/flights.routes').then((f) => f.flightBookingRoutes),
  },

  /*{
    path: '**',
    redirectTo: '',
  },*/
];
