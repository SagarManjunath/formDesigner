import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {CustomMaterialModule} from '../custom-material.module';
// components
import { DynamicFormBuilderComponent } from './dynamicFormBuilder.component';
import { FormBuilderComponent } from './fieldBuilder/formBuilder.component';
import { TextBoxComponent } from './elements/textbox';
import { DropDownComponent } from './elements/dropdown';
import { CheckBoxComponent } from './elements/checkbox';
import { TextAreaComponent} from './elements/textarea';
import {MultiSelectComponent}from './elements/multiselect'


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  declarations: [
    DynamicFormBuilderComponent,
    FormBuilderComponent,
    TextBoxComponent,
    DropDownComponent,
    CheckBoxComponent,
    TextAreaComponent,
    MultiSelectComponent
  ],
  schemas:[NO_ERRORS_SCHEMA],
  exports: [DynamicFormBuilderComponent],
  providers: []
})
export class DynamicFormBuilderModule { }
