import { FormlyFieldConfig } from '@ngx-formly/core';

export class FormlyHelper {
  // https://stackoverflow.com/questions/15523514/find-by-key-deep-in-a-nested-array
  static getField(
    fields: FormlyFieldConfig[] | FormlyFieldConfig,
    key: string,
  ): FormlyFieldConfig | null {
    let result = null;
    if (fields instanceof Array) {
      for (const field of fields) {
        result = FormlyHelper.getField(field, key);
        if (result) {
          break;
        }
      }
    } else {
      if (fields.key === key) {
        result = fields;
      }
      if (fields.fieldGroup) {
        result = FormlyHelper.getField(fields.fieldGroup, key);
      }
    }
    return result;
  }

  static disabled(
    fields: FormlyFieldConfig[] | FormlyFieldConfig,
    excludes: string[] = [],
  ): void {
    if (fields instanceof Array) {
      for (const field of fields) {
        FormlyHelper.disabled(field, excludes);
      }
    } else {
      if (!excludes.includes(<string>fields.key)) {
        if (fields.templateOptions) {
          fields.templateOptions.disabled = true;
        } else {
          fields.templateOptions = {
            disabled: true,
          };
        }
      }
      if (fields.fieldGroup) {
        FormlyHelper.disabled(fields.fieldGroup, excludes);
      }
    }
  }
}
