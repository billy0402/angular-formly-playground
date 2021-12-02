import { Component } from '@angular/core';

import { FieldType } from '@ngx-formly/core';
import { FormlyFieldInput } from '@ngx-formly/material/input';

@Component({
  selector: 'formly-form-group',
  template: `
    <formly-field *ngFor="let f of field.fieldGroup" [field]="f">
    </formly-field>
  `,
})
export class FormlyFormGroup extends FieldType {
  f!: FormlyFieldInput;
}
