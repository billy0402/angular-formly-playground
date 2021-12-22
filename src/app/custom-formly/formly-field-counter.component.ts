import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-counter',
  template: `
    <div class="counter">
      <button type="button" mat-button (click)="minus()">-</button>
      <ng-container #fieldComponent=""></ng-container>
      <button type="button" mat-button (click)="plus()">+</button>
    </div>
  `,
  styles: [
    `
      .counter {
        display: flex;
        flex-direction: row;

        button {
          margin-bottom: 2.5em;
        }
      }
    `,
  ],
})
export class CounterWrapperComponent extends FieldWrapper {
  formControl!: FormControl;

  plus(): void {
    this.formControl.setValue(this.formControl.value + 1);
  }

  minus(): void {
    this.formControl.setValue(this.formControl.value - 1);
  }
}
