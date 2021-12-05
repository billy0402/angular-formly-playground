import { Component } from '@angular/core';

import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-links',
  template: `
    <ul>
      <li *ngFor="let link of to.links">
        <a [href]="link.path" target="_blank">{{ link.name }}</a>
      </li>
    </ul>
  `,
  styles: [
    `
      ul {
        padding-left: 20px;
      }
    `,
  ],
})
export class FormlyFieldLinks extends FieldType {}
