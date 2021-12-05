import { Component } from '@angular/core';

import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-tabble',
  template: `
    <table>
      <tr>
        <th *ngFor="let header of to.headers">{{ header }}</th>
      </tr>
      <tr *ngFor="let item of to.data">
        <td *ngFor="let key of to.body">{{ item[key] }}</td>
        <!-- <td *ngFor="let i of item | keyvalue">{{ i.value }}</td> -->
      </tr>
    </table>
  `,
  styles: [
    `
      :host {
        flex: 1;

        table {
          width: 100%;
          text-align: left;
        }
      }
    `,
  ],
})
export class FormlyFieldTable extends FieldType {}
