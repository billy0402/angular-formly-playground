import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { formlyModuleConfig } from '@options/formly.option';

import { MaterialModule } from '@modules/material.module';
import { CustomFormlyModule } from '@custom-formly/custom-formly.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular modules
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,

    // Third party modules
    FormlyModule.forRoot(formlyModuleConfig),
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    FormlyMatToggleModule,

    // Shared modules
    MaterialModule,
    CustomFormlyModule,

    // App's modules
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
