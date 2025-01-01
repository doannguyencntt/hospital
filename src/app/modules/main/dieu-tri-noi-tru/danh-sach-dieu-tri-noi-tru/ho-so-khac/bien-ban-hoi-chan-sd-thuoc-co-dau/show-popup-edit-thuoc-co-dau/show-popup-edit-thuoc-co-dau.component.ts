import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { ThuocCoDau } from '../bien-ban-hoi-chan-sd-thuoc-co-dau.model';

@Component({
  selector: 'app-show-popup-edit-thuoc-co-dau',
  templateUrl: './show-popup-edit-thuoc-co-dau.component.html',
  styleUrls: ['./show-popup-edit-thuoc-co-dau.component.scss']
})
export class ShowPopupEditThuocCoDauComponent implements OnInit {
  lyDo:string=null;
  hamLuong:string=null;
  thuocCoDaus:string[]=[];
  hostingName: string;
  modelPrint: any;
  src = '';
  icClose = icClose;
  thuocCoDau = new ThuocCoDau();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private dialog: MatDialog, private dialogRef: MatDialogRef<any>) {
    this.thuocCoDaus.push(data.Id)  
    this.thuocCoDau = data;
  }

  ngOnInit() {
  }
  Ok(){
    this.thuocCoDaus.forEach(element => {
      this.thuocCoDau.Id = element;
    });
    this.dialogRef.close(this.thuocCoDau);
  }
  close() {
    this.dialogRef.close();
	}
  isItemSelected(dataItem: any): boolean {
    return this.thuocCoDaus.some(item => item == dataItem.KeyId);
  }
}
