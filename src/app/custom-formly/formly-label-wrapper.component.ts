import { Component } from '@angular/core';

import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-label',
  template: `
    <div class="label-wrapper">
      <label>{{ to.label }}</label>
      <ng-container #fieldComponent=""></ng-container>
    </div>
  `,
  styles: [
    `
      @import 'src/scss/material-form-field.scss';

      .label-wrapper {
        display: flex;
        align-items: center;
        flex-direction: row;

        label {
          padding-bottom: 2.5em;
          width: 100px;
          color: gray;
          font-size: 15px;
        }

        ::ng-deep formly-wrapper-mat-form-field {
          width: 100%;
        }
      }
    `,
  ],
})
export class LabelWrapperComponent extends FieldWrapper {}
