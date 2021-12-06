import { Component } from '@angular/core';

import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-form-array',
  template: `
    <div
      class="form-array"
      *ngFor="let field of field.fieldGroup; let index = index; let last = last"
    >
      <formly-field [field]="field"></formly-field>
      <div class="buttons">
        <button
          type="button"
          mat-flat-button
          color="primary"
          (click)="add()"
          *ngIf="last"
        >
          +
        </button>
        <button
          type="button"
          mat-flat-button
          color="warn"
          (click)="remove(index)"
          *ngIf="!last"
        >
          -
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .form-array {
        display: flex;
        align-items: center;
      }

      .buttons {
        margin-left: 20px;
        padding-bottom: 2.5em;
      }
    `,
  ],
})
export class FormlyFormArray extends FieldArrayType {}
