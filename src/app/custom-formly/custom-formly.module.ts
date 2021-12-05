import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';

import { MaterialModule } from '@modules/material.module';

import { FormlyFormGroup } from './formly-form-group.component';
import { FormlyFieldFile } from './formly-field-file.component';
import { FormlyFieldAutocomplete } from './formly-field-autocomplete.component';
import { FormlyFieldPlainText } from './formly-field-plain-text.component';
import { FormlyFieldLinks } from './formly-field-links.component';
import { FormlyFieldTable } from './formly-field-table.component';
import { LabelWrapperComponent } from './formly-label-wrapper.component';
import { DateRangeWrapperComponent } from './formly-date-range-wrapper.component';
import { FileValueAccessor } from './file-value-accessor.directive';

@NgModule({
  declarations: [
    FormlyFormGroup,
    FormlyFieldFile,
    FormlyFieldAutocomplete,
    FormlyFieldPlainText,
    FormlyFieldLinks,
    FormlyFieldTable,
    LabelWrapperComponent,
    DateRangeWrapperComponent,
    FileValueAccessor,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    MaterialModule,
  ],
  exports: [
    FormlyFormGroup,
    FormlyFieldFile,
    FormlyFieldAutocomplete,
    FormlyFieldPlainText,
    FormlyFieldLinks,
    FormlyFieldTable,
    LabelWrapperComponent,
    DateRangeWrapperComponent,
  ],
})
export class CustomFormlyModule {}
