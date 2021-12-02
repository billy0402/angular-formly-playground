import { Component } from '@angular/core';

import { FieldType } from '@ngx-formly/core';
import { FormlyFieldInput } from '@ngx-formly/material/input';

@Component({
  selector: 'formly-form-group',
  template: `
    <div [class.form-group-horizontal]="to.flexDirection === 'horizontal'">
      <formly-field *ngFor="let f of field.fieldGroup" [field]="f">
      </formly-field>
    </div>
  `,
  styles: [
    `
      .form-group-horizontal {
        display: flex;
      }
    `,
  ],
})
export class FormlyFormGroup extends FieldType {
  f!: FormlyFieldInput;
}
