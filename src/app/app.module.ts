import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDesignerComponent } from './form-designer/form-designer.component';
import { AddUpdateComponent } from './add-update/add-update.component';
import { PreviewComponent } from './preview/preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from '../app/custom-material.module';
import { FormsModule } from '@angular/forms';
import {DynamicFormBuilderModule} from './dynamicFormBuilder/dynamicFormBuilder.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FormDesignerComponent,
    AddUpdateComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormBuilderModule
  ],
  providers: [],
  entryComponents:[
    PreviewComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
