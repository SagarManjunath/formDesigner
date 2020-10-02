import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
public form: FormGroup;
listOfItems:any;
unsubcribe: any
  constructor(
    public dialogRef: MatDialogRef<PreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { 
      console.log('inside preview');
      console.log(data)
      this.listOfItems=data.record;
   //   this.listOfItems.sort((a,b)=> a.Order>b.Order ? 1:-1);
      console.log('after sorting');
      console.log(this.listOfItems);
      this.form = new FormGroup({
        fields: new FormControl(JSON.stringify(this.listOfItems))
      })
      this.unsubcribe = this.form.valueChanges.subscribe((update) => {
        console.log(update);
        this.listOfItems = JSON.parse(update.fields);
      });
    }

  ngOnInit() {
  }

  getFields() {
    return this.listOfItems;
  }

  ngDistroy() {
    this.unsubcribe();
  }

}
