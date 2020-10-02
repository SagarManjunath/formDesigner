import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// text,email,tel,textarea,password, 
@Component({
    selector: 'textarea',
    template: `
      <div [formGroup]="form">        
        <input matInput [attr.type]="field.type" [formControlName]="field.name" [id]="field.name"
        rows="9" class="form-control" [placeholder]="field.placeholder">
      </div> 
    
    `
})
export class TextAreaComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
  
    constructor() {

    }
}