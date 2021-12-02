import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';

import { Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

import { FieldType } from '@ngx-formly/material';

@Component({
  selector: 'formly-field-autocomplete',
  template: `
    <input
      type="text"
      matInput
      [matAutocomplete]="auto"
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
    <mat-autocomplete #auto="matAutocomplete">
      <mat-option *ngFor="let value of filter | async" [value]="value">
        {{ value }}
      </mat-option>
    </mat-autocomplete>
  `,
})
export class FormlyFieldAutocomplete
  extends FieldType
  implements OnInit, AfterViewInit
{
  @ViewChild(MatInput) formFieldControl!: MatInput;
  @ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;

  formControl!: FormControl;
  filter = new Observable<any>();

  ngOnInit() {
    super.ngOnInit();
    this.filter = this.formControl.valueChanges.pipe(
      startWith(''),
      switchMap((term) => this.to.filter(term)),
    );
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    (<any>this.autocomplete)._formField = this.formField;
  }
}
