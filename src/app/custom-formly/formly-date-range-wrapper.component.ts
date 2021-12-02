import { Component } from '@angular/core';

import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-date-range',
  template: `
    <div class="date-range">
      <formly-field [field]="field.fieldGroup![0]"></formly-field>
      <label>~</label>
      <formly-field [field]="field.fieldGroup![1]"></formly-field>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
      }

      .date-range {
        display: flex;
        align-items: center;

        formly-field {
          display: flex;
          flex: 1;
        }

        label {
          padding: 0 10px 2.5em 10px;
        }
      }
    `,
  ],
})
export class DateRangeWrapperComponent extends FieldWrapper {}
