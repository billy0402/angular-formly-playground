import { FormlyFieldConfig } from '@ngx-formly/core';

export const appFields: FormlyFieldConfig[] = [
  {
    type: 'form-group',
    fieldGroup: [
      {
        key: 'input',
        type: 'input',
        templateOptions: {
          label: 'Input',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
        },
      },
      {
        key: 'textarea',
        type: 'textarea',
        templateOptions: {
          label: 'Textarea',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
          rows: 5,
        },
      },
      {
        key: 'checkbox',
        type: 'checkbox',
        templateOptions: {
          label: 'Accept terms',
          description: 'In order to proceed, please accept terms',
          pattern: 'true',
          required: true,
        },
        validation: {
          messages: {
            pattern: 'Please accept the terms',
          },
        },
      },
      {
        key: 'radio',
        type: 'radio',
        templateOptions: {
          label: 'Radio',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
          options: [
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
            { value: 4, label: 'Option 4', disabled: true },
          ],
        },
      },
      {
        key: 'select',
        type: 'select',
        templateOptions: {
          label: 'Select',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
          options: [
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
            { value: 4, label: 'Option 4', disabled: true },
          ],
        },
      },
      {
        key: 'selectMulti',
        type: 'select',
        templateOptions: {
          label: 'Select Multiple',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
          multiple: true,
          selectAllOption: 'Select All',
          options: [
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
            { value: 4, label: 'Option 4', disabled: true },
          ],
        },
      },
      {
        key: 'datepicker',
        type: 'datepicker',
        wrappers: ['label-wrapper', 'form-field'],
        templateOptions: {
          label: 'Datepicker',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
        },
      },
      {
        key: 'toggle',
        type: 'toggle',
        wrappers: ['label-wrapper', 'form-field'],
        templateOptions: {
          label: 'Toggle label',
          description: 'Toggle Description',
          required: true,
        },
      },
      {
        key: 'file',
        type: 'file',
        templateOptions: {
          label: 'File',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
          multiple: true,
        },
      },
    ],
  },
];
