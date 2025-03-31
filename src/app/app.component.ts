import { Component } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppService } from './app.service';

interface person {
  name: {
    firstname: string;
    lastname: string;
  };
  age: number;
}
type employee = {
  name: {
    firstname: string;
    lastname: string;
  };
  department: string;
};

enum DateFormatEnum {
  'EUR' = 'EUR',
  'USA' = 'USA',
  'ISO' = 'ISO',
}
type DateFormat = 'EUR' | 'USA' | 'ISO';

interface person {
  department?: string;
}

@Component({
  imports: [SidebarComponent, NavbarComponent],
  selector: 'app-flight-app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly title = '';
  protected readonly description = 'This is a simple Angular application.';

  protected readonly otherNumber?: number;
  protected readonly isBoolean = false;

  // private readonly appService: AppService;

  constructor(private readonly appService: AppService) {
    // this.appService = appService;
    this.otherNumber = 100;

    const hugo: person = {
      name: {
        firstname: 'Hugo',
        lastname: 'Boss',
      },
      age: 25,
    };

    const hugo2 = hugo as unknown as employee;

    const hugo3 = { ...hugo2, department: 'IT' };

    console.log(hugo);
    console.log(hugo2);
    console.log(hugo3);
    console.log(hugo2.department);

    console.log((hugo3 as unknown as person).age);

    const myDate: DateFormatEnum = DateFormatEnum.EUR;

    const otherDate: DateFormat = 'EUR';
  }
}
