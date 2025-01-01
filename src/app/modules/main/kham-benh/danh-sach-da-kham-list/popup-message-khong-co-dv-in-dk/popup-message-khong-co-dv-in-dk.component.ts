import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-message-khong-co-dv-in-dk',
  templateUrl: './popup-message-khong-co-dv-in-dk.component.html',
  styleUrls: ['./popup-message-khong-co-dv-in-dk.component.scss']
})
export class PopupMessageKhongCoDvInDkComponent implements OnInit {
  showMessage:number = 1;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  ngOnInit() {
   this.showMessage = this.data.Model;
  }
 close(){
   this.dialog.closeAll();
 }
}
