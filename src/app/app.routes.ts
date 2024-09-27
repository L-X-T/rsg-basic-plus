import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'airports',
    title: 'Airports',
    // component: AirportsComponent,
    loadComponent: () => import('./components/airports/airports.component'),
  },
  {
    path: 'home',
    title: 'Home',
    // component: HomeComponent,
    loadComponent: () => import('./components/home/home.component'),
  },

  {
    path: 'flight-booking',
    title: 'Flight Booking',
    // children: flightBookingRoutes,
    loadChildren: () => import('./flight-booking/flight-booking.routes'),
  },

  /*{
    path: '**',
    redirectTo: '',
  },*/
];
