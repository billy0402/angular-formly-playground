import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-file',
  template: `
    <input
      type="file"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [multiple]="to.multiple"
    />
  `,
})
export class FormlyFieldFile extends FieldType {
  formControl!: FormControl;
}
