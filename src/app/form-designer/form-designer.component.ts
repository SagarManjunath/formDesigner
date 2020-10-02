import {  Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PreviewComponent } from '../preview/preview.component';

export interface PeriodicElement {
  Order: number;
  Label: string;
  Type: string;
  IsVisible: boolean;
  IsRequired:boolean;
}


@Component({
  selector: 'app-form-designer',
  templateUrl: './form-designer.component.html',
  styleUrls: ['./form-designer.component.css']
})
export class FormDesignerComponent implements OnInit {
  ShowAdd:boolean=false;
  messageFromChild: any;
  listRecords:any = [
    {   
      order:1,
      label:'Name',
      type:'text',
      hidden:true,
      required:true
    },
    {   
      order:2,
      label:'Select Country',
      type:'dropdown',
      hidden:true,
      required:true,
      options:[
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' }
      ]
    }
    ,
    {   
      order:3,
      label:'Hobbies',
      type:'checkbox',
      hidden:true,
      required:true,
      options: [
        { key: 'r', label: 'Reading' },
        { key: 'w', label: 'Writing' }
      ]
    },
    {   
      order:4,
      label:'Address',
      type:'textarea',
      hidden:true,
      required:true
    },
    {   
      order:5,
      label:'Select Colleges',
      type:'multiselect',
      hidden:true,
      required:true,
      options:[
        { key: 'iit', label: 'IIIT-Bangalore' },
        { key: 'rv', label: 'RV College' },
        { key: 'pes', label: 'PESIT' }
      ]
    }
  ];
 
  displayedColumns: string[] = ['Order', 'Label', 'Type', 'IsVisible','IsRequired'];

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
   
  }

  parentWillTakeAction(message){
    this.messageFromChild = message;
    console.log('parent received msg')
    console.log(this.messageFromChild)
    this.listRecords.push(this.messageFromChild);
    this.listRecords = [...this.listRecords];
    //this.dataSource.push(this.messageFromChild)
    console.log(this.listRecords);
    
  }

  Preview() {
    const dialogRef = this.dialog.open(PreviewComponent, {
      data: {record: this.listRecords },
      width:'30%'
    });
  }
  displayAddComponent(){
    console.log(this.ShowAdd)
    this.ShowAdd=true;
  }
  HideChild(){
    this.ShowAdd=false;
  }
 

}
