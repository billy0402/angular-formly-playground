import { Component } from '@angular/core';

import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-plain-text',
  template: `
    <p
      class="plain-text"
      [style.color]="to.color"
      [style.margin-left]="to.label ? 'unset' : '100px'"
    >
      {{ to.value }}
    </p>
  `,
  styles: [
    `
      .plain-text {
        margin: 0;
      }
    `,
  ],
})
export class FormlyFieldPlainText extends FieldType {}
