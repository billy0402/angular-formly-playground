import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { FormlyHelper } from '@utils/formly-helper.util';

import { appFields } from './app.formly';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-formly-playground';
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = appFields;

  ngOnInit(): void {}

  changePlainText(): void {
    const field = FormlyHelper.getField(this.fields, 'plainText');
    console.log(field);
    field!.templateOptions!.label = 'Test';

    // this.model = {
    //   ...this.model,
    //   plainText: 'Test',
    // };
  }

  disabledForm(): void {
    FormlyHelper.disabled(this.fields, ['file']);
  }

  onSubmit(): void {
    console.log(this.model);
  }
}
