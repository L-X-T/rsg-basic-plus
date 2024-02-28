import { Component } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AirportsComponent } from './airports/airports.component';
import { FlightLookaheadComponent } from './flight-lookahead/flight-lookahead.component';

@Component({
  imports: [SidebarComponent, NavbarComponent, AirportsComponent, FlightLookaheadComponent],
  selector: 'app-flight-app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly title = 'Hello World!';
}
