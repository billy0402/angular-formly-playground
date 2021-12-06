import { of } from 'rxjs';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { valueChangeHookConfig } from '@utils/formly-helper.util';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas'];

function filterStates(name: string): string[] {
  return states.filter(
    (state) => state.toLowerCase().indexOf(name.toLowerCase()) === 0,
  );
}

export const appFields: FormlyFieldConfig[] = [
  {
    type: 'form-group',
    // templateOptions: { flexDirection: 'horizontal' },
    fieldGroup: [
      {
        key: 'input',
        type: 'input',
        templateOptions: {
          label: 'Input',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
          flexDirection: 'vertical',
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
        wrappers: ['label-wrapper', 'date-range-wrapper'],
        templateOptions: { label: 'Date Range' },
        fieldGroup: [
          {
            key: 'start',
            type: 'datepicker',
            templateOptions: {
              placeholder: 'Placeholder',
              description: 'Description',
              required: true,
            },
          },
          {
            key: 'end',
            type: 'datepicker',
            templateOptions: {
              placeholder: 'Placeholder',
              description: 'Description',
              required: true,
            },
          },
        ],
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
      {
        key: 'autocomplete',
        type: 'autocomplete',
        templateOptions: {
          label: 'Autocomplete',
          placeholder: 'Placeholder',
          required: true,
          filter: (term: string) =>
            of(term ? filterStates(term) : states.slice()),
        },
      },
      {
        key: 'plainText',
        type: 'plain-text',
        defaultValue: 'Plain Text',
        templateOptions: {
          label: 'Plain Text',
          isNotInput: true,
          color: 'gray',
        },
        hooks: valueChangeHookConfig,
      },
      {
        key: 'inputPlainText',
        type: 'input',
        wrappers: ['label-wrapper'],
        defaultValue: 'Input Plain Text',
        className: 'input-plain-text',
        templateOptions: {
          label: 'Input',
          isNotInput: true,
          disabled: true,
        },
      },
      {
        key: 'links',
        type: 'links',
        templateOptions: {
          label: 'Links',
          isNotInput: true,
          links: [
            { name: 'Apple', path: 'https://www.apple.com/tw/' },
            { name: 'Google', path: 'https://www.google.com.tw/' },
          ],
        },
      },
      {
        key: 'table',
        type: 'table',
        templateOptions: {
          label: 'Table',
          isNotInput: true,
          headers: ['Company', 'Contact', 'Country'],
          body: ['company', 'contact', 'country'],
          data: [
            {
              company: 'Alfreds Futterkiste',
              contact: 'Maria Anders',
              country: 'Germany',
            },
            {
              company: 'Centro comercial Moctezuma',
              contact: 'Francisco Chang',
              country: 'Mexico',
            },
            {
              company: 'Ernst Handel',
              contact: 'Roland Mendel',
              country: 'Austria',
            },
          ],
        },
      },
      {
        key: 'formArray',
        type: 'form-array',
        defaultValue: [{}],
        fieldArray: {
          type: 'form-group',
          wrappers: ['label-wrapper'],
          templateOptions: {
            label: 'Form Array',
            flexDirection: 'horizontal',
          },
          fieldGroup: [
            {
              key: 'name',
              type: 'input',
              templateOptions: {
                label: 'Name',
                placeholder: 'Placeholder',
                description: 'Description',
              },
            },
            {
              key: 'email',
              type: 'input',
              templateOptions: {
                type: 'email',
                label: 'Email',
                placeholder: 'Placeholder',
                description: 'Description',
                required: true,
              },
            },
            {
              key: 'age',
              type: 'input',
              templateOptions: {
                type: 'number',
                label: 'Age',
                placeholder: 'Placeholder',
                description: 'Description',
                required: true,
              },
            },
          ],
        },
      },
    ],
  },
];
