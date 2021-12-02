import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldInput } from '@ngx-formly/material/input';
import { FormlyFieldTextArea } from '@ngx-formly/material/textarea';
import { FormlyFieldCheckbox } from '@ngx-formly/material/checkbox';
import { FormlyFieldRadio } from '@ngx-formly/material/radio';
import { FormlyFieldSelect } from '@ngx-formly/material/select';

import { FormlyFormGroup } from '@custom-formly/formly-form-group.component';
import { FormlyFieldFile } from '@custom-formly/formly-field-file.component';
import { FormlyFieldAutocomplete } from '@custom-formly/formly-field-autocomplete.component';
import { LabelWrapperComponent } from '@custom-formly/formly-label-wrapper.component';
import { DateRangeWrapperComponent } from '@custom-formly/formly-date-range-wrapper.component';

export const formlyModuleConfig: ConfigOption = {
  types: [
    {
      name: 'form-group',
      component: FormlyFormGroup,
    },
    {
      name: 'input',
      component: FormlyFieldInput,
      wrappers: ['label-wrapper', 'form-field'],
    },
    {
      name: 'textarea',
      component: FormlyFieldTextArea,
      wrappers: ['label-wrapper', 'form-field'],
    },
    {
      name: 'checkbox',
      component: FormlyFieldCheckbox,
      wrappers: ['label-wrapper', 'form-field'],
    },
    {
      name: 'radio',
      component: FormlyFieldRadio,
      wrappers: ['label-wrapper', 'form-field'],
    },
    {
      name: 'select',
      component: FormlyFieldSelect,
      wrappers: ['label-wrapper', 'form-field'],
    },
    {
      name: 'file',
      component: FormlyFieldFile,
      wrappers: ['label-wrapper', 'form-field'],
    },
    {
      name: 'autocomplete',
      component: FormlyFieldAutocomplete,
      wrappers: ['label-wrapper', 'form-field'],
    },
  ],
  wrappers: [
    { name: 'label-wrapper', component: LabelWrapperComponent },
    { name: 'date-range-wrapper', component: DateRangeWrapperComponent },
  ],
  validationMessages: [{ name: 'required', message: 'This field is required' }],
  extras: { lazyRender: true },
};
