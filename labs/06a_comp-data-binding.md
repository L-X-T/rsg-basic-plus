# Angular Components Data Binding

- [Angular Components Data Binding](#angular-components)
  - [FlightCardComponent](#flightcardcomponent)
  - [FlightStatusToggleComponent \*](#flightstatustogglecomponent-)

## Components Data Binding

In this exercise, you will first create the FlightCardComponent shown. Then you will create your own component with the knowledge you have built up in a bonus exercise. For the sake of experience we'll not use the `ng generate` command and instead create the component manually.

### FlightCardComponent

1. Create a new component `flight-card` in the folder `flight-booking`, which consists of a sub-folder `flight-card` with the following files:

- `flight-card.component.html`
- `flight-card.component.ts`

2. Open the file `flight-card.component.ts` and add the following members:

   ```typescript
   @Component({
     selector: 'app-flight-card',
     templateUrl: './flight-card.component.html',
   })
   export class FlightCardComponent {
     protected readonly item = input.required<Flight>();
     protected readonly selected = model(false);

     select(): void {
       this.selected.set(true);
     }

     deselect(): void {
       this.selected.set(false);
     }
   }
   ```

   Note that the **required input** does not need an initial value.

3. Open the template of this component (`flight-card.component.html`). Expand this file so that the map is displayed:

   ```html
   <div class="card" [class.selected]="selected()">
     <div class="header">
       <h2 class="title">{{ item().from }} - {{ item().to }}</h2>
     </div>

     <div class="content">
       <p>Flight-No.: #{{ item().id }}</p>
       <p>Date: {{ item().date | date: 'dd.MM.yyyy HH:mm' }}</p>
       <p>
         @if (!selected()) {
         <button class="btn btn-default" (click)="select()">Select</button>
         } @else {
         <button class="btn btn-default" (click)="deselect()">Deselect</button>
         }
       </p>
     </div>
   </div>
   ```

   Note the data binding expressions in this template. Also, make sure to import either the `DatePipe` or the `CommonModule` (which includes the `DatePipe`) into your `FlightCard` (by adding it to the component's imports array).

4. Open the stylesheet of this component (`flight-card.component.css`). Add this `selected` styling:

   ```css
   .selected {
     background-color: rgb(204, 197, 185);
   }
   ```

5. Open the file _flight-search.component.ts_ and add the one property _basket_:

   ```typescript
   export class FlightSearchComponent {
     protected from = '';
     protected to = '';
     protected flights: Flight[] = [];
     protected selectedFlight?: Flight;

     protected readonly basket: { [id: number]: boolean } = { // <-- new attribute
       3: true,
       5: true
     };

     […]
   }
   ```

6. Open the file _flight-search.component.html_. Comment out the tabular output of the flights found.

7. Instead of the table, use the new element `flight-card` to display the flights found. To do this, create an explicit binding for the properties `item`, `selected` and the event `selectedChange`.

   <details>
   <summary>Show source</summary>
   <p>

   ```html
   <div class="row">
     @for (flight of flights; track flight.id) {
     <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
       <app-flight-card [item]="flight" [selected]="basket[flight.id]" (selectedChange)="basket[flight.id] = $event" />
     </div>
     }
   </div>
   ```

   </p>
   </details>

8. Make sure that the new `FlightCardComponent` is imported into the `FlightSearchComponent`.

9. At the end of the template, also update the shopping cart so that the new property `basket` is output here instead of `selectedFlight`.

   <details>
   <summary>Show source</summary>
   <p>

   ```html
   <div class="card">
     <div class="content">
       <pre>{{ basket | json }}</pre>
     </div>
   </div>
   ```

   </p>
   </details>

10. Test your solution.

11. When calling the `FlightCardComponent`, use a two-way binding using the "Banana-in-a-Box syntax" instead of the bindings for _selected_ and _selectedChanged_.

    <details>
    <summary>Show source</summary>
    <p>

    ```html
    <div class="row">
      @for (flight of flights; track flight.id) {
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <app-flight-card [item]="flight" [(selected)]="basket[flight.id]" />
      </div>
      }
    </div>
    ```

    </p>
    </details>

12. Test your solution.

### Bonus: FlightStatusToggleComponent \*

Create a _FlightStatusToggleComponent_ that receives the delayed flag of a flight via two-way binding and displays it as a link. Each time you click on this link, the status should be changed. The component should be able to be called in the template of the FlightCardComponent as follows:

```html
<app-flight-status-toggle [(delayed)]="item.delayed" />
```
