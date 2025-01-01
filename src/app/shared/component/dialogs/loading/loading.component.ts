import { Component, Optional, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent { 
  icClose = icClose;
  Title:string="Đang tải dữ liệu...";
  
  constructor(private dialogRef: MatDialogRef<LoadingComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      if(data.Title!=null)
      {
        this.Title=data.Title;
      }
      
  }
}
