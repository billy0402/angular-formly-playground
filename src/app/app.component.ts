import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { FormlyHelper } from '@utils/formly-helper.util';

import { AppFormlyService } from './app-formly.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-formly-playground';

  constructor(public formlyService: AppFormlyService) {}

  ngOnInit(): void {}

  updateModel(): void {
    this.formlyService.model = {
      ...this.formlyService.model,
      inputPlainText: 'Test',
    };
  }

  changePlainText(): void {
    const field = FormlyHelper.getField(this.formlyService.fields, 'plainText');
    console.log(field);
    field!.templateOptions!.label = 'Test';
  }

  disabledForm(): void {
    FormlyHelper.disabled(this.formlyService.fields, ['file']);
  }

  onSubmit(): void {
    console.log(this.formlyService.model);
  }
}
