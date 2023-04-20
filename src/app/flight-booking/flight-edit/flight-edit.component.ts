import { Component, DestroyRef, inject, input, OnChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { Flight } from '../../entities/flight';
import { FlightService } from '../shared/services/flight.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
  imports: [ReactiveFormsModule],
})
export class FlightEditComponent implements OnChanges {
  readonly flight = input<Flight | null>(null);

  private readonly destroyRef = inject(DestroyRef);
  private readonly flightService = inject(FlightService);

  protected editForm = inject(FormBuilder).group({
    id: [0],
    from: [''],
    to: [''],
    date: [''],
  });

  protected message = '';

  private readonly valueChangesLogger = this.editForm.valueChanges.pipe(takeUntilDestroyed()).subscribe((value) => {
    console.log(value);
  });

  ngOnChanges(): void {
    if (this.flight()) {
      this.editForm.patchValue(this.flight() as Flight);
    }
  }

  protected onSave(): void {
    this.flightService
      .save(this.editForm.value as Flight)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (flight) => {
          this.message = 'Success!';
        },
        error: (err: HttpErrorResponse) => {
          console.error('Error', err);
          this.message = 'Error!';
        },
      });
  }
}
