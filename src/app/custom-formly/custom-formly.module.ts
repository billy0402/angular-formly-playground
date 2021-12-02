import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';

import { FormlyFormGroup } from './formly-form-group.component';
import { FormlyFieldFile } from './formly-field-file.component';
import { LabelWrapperComponent } from './formly-label-wrapper.component';
import { DateRangeWrapperComponent } from './formly-date-range-wrapper.component';
import { FileValueAccessor } from './file-value-accessor.directive';

@NgModule({
  declarations: [
    FormlyFormGroup,
    FormlyFieldFile,
    LabelWrapperComponent,
    DateRangeWrapperComponent,
    FileValueAccessor,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormlyModule.forChild()],
  exports: [
    FormlyFormGroup,
    FormlyFieldFile,
    LabelWrapperComponent,
    DateRangeWrapperComponent,
  ],
})
export class CustomFormlyModule {}
