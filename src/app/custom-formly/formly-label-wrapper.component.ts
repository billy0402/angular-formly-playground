import { Component } from '@angular/core';

import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-label',
  template: `
    <div
      class="label-wrapper"
      [class.label-wrapper-vertical]="to.flexDirection === 'vertical'"
    >
      <label
        [style.width]="to.label ? '100px' : 'unset'"
        [style.padding-bottom]="to.isNotInput ? 'unset' : '2.5em'"
      >
        {{ to.label }}
      </label>
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
          color: gray;
          font-size: 15px;
        }

        ::ng-deep formly-wrapper-mat-form-field {
          width: 100%;
        }

        &.label-wrapper-vertical {
          align-items: start;
          flex-direction: column;

          label {
            padding-bottom: unset;
          }
        }
      }
    `,
  ],
})
export class LabelWrapperComponent extends FieldWrapper {}
