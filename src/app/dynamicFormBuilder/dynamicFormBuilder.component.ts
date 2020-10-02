import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-form-builder',
  template:`
    <form (ngSubmit)="validateForm(this.form.value)" [formGroup]="form">
      <div *ngFor="let field of fields">
          <form-builder style="margin:5px;padding:5px" [field]="field" [form]="form"></form-builder>
      </div>
        <div style="margin: 10px;
        display: flex;
        justify-content: center;">
          <button type="submit" mat-raised-button color="primary" [disabled]="!form.valid">Save</button>         
        </div>
     
    </form>
  `,
})
export class DynamicFormBuilderComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  form: FormGroup;
  constructor() {
      console.log('inside synamic form builder')
      console.log(this.fields)
   }

  ngOnInit() {
    let fieldsCtrls = {};
    for (let f of this.fields) {
      if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required)
      } else {
        let opts = {};
        for (let opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts)
      }
    }
    this.form = new FormGroup(fieldsCtrls);
    console.log(this.form)
  }

  validateForm(value:any){
      console.log(this.form.valid)
      console.log(value)

  }
}
