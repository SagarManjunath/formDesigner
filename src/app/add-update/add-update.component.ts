import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {
  @Output() informParent = new EventEmitter();
  @Output() ShowMe = new EventEmitter();
  userData = {   
    order: '',
    label: '',
    type:'',
    hidden: '',
    required: '',
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form,formData) {
    console.log('submitted formdata',formData);  
    this.informParent.emit(formData);
    this.ShowMe.emit(false);
  //  alert('Form submitted successfully');
    
   // form.reset();
   this.userData={
    order: '',
    label: '',
    type:'',
    hidden: '',
    required: '',
   }
  }

}
