import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { appFields } from './app.formly';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-formly-playground';
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = appFields;

  onSubmit(): void {
    console.log(this.model);
  }
}
