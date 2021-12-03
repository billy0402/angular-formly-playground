import { Component } from '@angular/core';

import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-plain-text',
  template: `<p class="plain-text">{{ to.label }}</p>`,
  styles: [
    `
      .plain-text {
        margin-left: 100px;
        color: gray;
      }
    `,
  ],
})
export class FormlyFieldPlainText extends FieldType {}
