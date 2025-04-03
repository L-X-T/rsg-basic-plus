# Angular Components Content Projection

- [Angular Components Content Projection](#angular-components-content-projection)
  - [Create your first Content Projection \*](#create-your-first-content-projection-)

## Create your first Content Projection \*

In this exercise you create the possibility of expanding the display of the `FlightCardComponent` by transferring additional HTML to be displayed when it is called.

1. Open the file flight-search.component.html and transfer additional HTML to the*FlightCardComponent*:

   ```html
   <app-flight-card […]>
     <pre>{{ flight | json }}</pre>
   </app-flight-card>
   ```

2. Place the _ng-content_ element in the **Template** of the **FlightCardComponent** to indicate where the passed content should be displayed:

   ```html
   […]
   <div class="content">
     <p>Flight-No.: #{{ item().id }}</p>
     <p>Date: {{ item().date | date: 'dd.MM.yyyy HH:mm' }}</p>

     […]

     <p>
       <ng-content>No content</ng-content>
     </p>
   </div>
   […]
   ```

3. Test your solution.

4. Now move all actions (buttons) to the parent component (`flight-search.component.html`). Update the code as needed:

   <details>
   <summary>Show source</summary>
   <p>

   ```html
   <app-flight-card [item]="flight" [selected]="basket[flight.id]">
     <button class="btn btn-default" (click)="basket[flight.id] = !basket[flight.id]">
       {{ basket[flight.id] ? 'Deselect' : 'Select' }}
     </button>
     
     <!-- if you've implemented the FlightStatusToggleComponent -->
     <app-flight-status-toggle style="margin-left: 10px" [(delayed)]="flight.delayed" />
   </app-flight-card>
   ```

   </p>
   </details>
   
5. Test your solution.

6. Add to the template so that it now uses the _ng-content_ element twice - once in the upper area and once in the lower area of the component:

   ```html
   […]
   <div class="content">
     <p>Flight-No.: #{{ item().id }}</p>
     <p>Date: {{ item().date | date:'dd.MM.yyyy HH:mm' }}</p>

     <ng-content select=".bottom"></ng-content>
   </div>
   […]
   ```

   In order to show Angular what has to be inserted into the individual placeholders defined with _ng-content_, they receive a CSS selector via the property _select_, which addresses part of the transferred markup. For example, the _.top_ selector searches the markup for an element with the _top_ class and inserts it into the respective _ng-content_ element.

7. Open the file _flight-search.component.html_. When calling the _flight-card_ elements, pass the two defined placeholders:

   ```html
   <app-flight-card [...]>
     <h3 class="top">Flight</h3>
     <ng-container class="bottom">
       <button class="btn btn-default" (click)="basket[flight.id] = !basket[flight.id]">
         {{ basket[flight.id] ? 'Deselect' : 'Select' }}
       </button>
     
       <!-- if you've implemented the FlightStatusToggleComponent -->
       <app-flight-status-toggle style="margin-left: 10px" [(delayed)]="flight.delayed" />
     </ng-container>
   </app-flight-card>
   ```

8. Test your solution.
