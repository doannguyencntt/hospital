import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-message-khong-co-dich-vu-vu-in',
  templateUrl: './popup-message-khong-co-dich-vu-vu-in.component.html',
  styleUrls: ['./popup-message-khong-co-dich-vu-vu-in.component.scss']
})
export class PopupMessageKhongCoDichVuVuInComponent implements OnInit {
  showMessage:number = 1;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  ngOnInit() {
   this.showMessage = this.data.Model;
  }
 close(){
   this.dialog.closeAll();
 }
}
