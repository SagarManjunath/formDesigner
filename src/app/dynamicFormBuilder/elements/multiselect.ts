import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'multiselect',
    template: `
      <div [formGroup]="form">
        <select class="form-control" [id]="field.name" [formControlName]="field.name" multiple>
          <option *ngFor="let opt of field.options" [value]="opt.key">{{opt.label}}</option>
        </select>
      </div> 
    `
})
export class MultiSelectComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;

    constructor() {
        console.log('insde check box');
        console.log(this.field)
    }
}