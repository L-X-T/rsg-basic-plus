import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DatePipe } from '@angular/common';

import { Flight } from '../../entities/flight';

@Component({
  imports: [DatePipe],
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {
  private debug = true;

  // @Input({required: true}) item!: Flight;
  readonly item = input.required<Flight>();
  // @Input() selected = false;
  readonly selected = input(false);

  private readonly elementRef = inject(ElementRef);
  private readonly ngZone = inject(NgZone);

  constructor() {
    this.debugInputs('constructor');
  }

  ngOnChanges(): void {
    this.debugInputs('ngOnChanges');
  }

  ngOnInit(): void {
    this.debugInputs('ngOnInit');
  }

  ngOnDestroy(): void {
    this.debugInputs('ngOnDestroy');
  }

  private debugInputs(method: string): void {
    if (this.debug) {
      console.warn('[FlightCardComponent - ' + method + '()]');
      console.debug('flight', this.item);
      console.debug('selected', this.selected);
    }
  }

  blink(): void {
    // Dirty Hack used to visualize the change detector
    // let originalColor = this.elementRef.nativeElement.firstChild.style.backgroundColor;
    this.elementRef.nativeElement.firstChild.style.backgroundColor = 'crimson';
    //              ^----- DOM-Element

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.elementRef.nativeElement.firstChild.style.backgroundColor = this.selected() ? 'rgb(204, 197, 185)' : '';
      }, 1000);
    });
  }
}
