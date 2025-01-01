import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { XetNghiemCovid } from '../tiep-nhan-benh-nhan.model';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-xn-covid-popup',
  templateUrl: './xn-covid-popup.component.html',
  styleUrls: ['./xn-covid-popup.component.scss']
})
export class XnCovidPopupComponent implements OnInit {
  xetNghiemCovid = new XetNghiemCovid();

  icClose = icClose;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<XnCovidPopupComponent>,) { }
  loaiMauXetNghiemText :string =null;

  ngOnInit() {
    this.xetNghiemCovid.LoaiBenhPham =this.data.LoaiMauXetNghiemText;
  }
  save(){
    this.dialogRef.close(this.xetNghiemCovid);
  }
  close(){
    this.dialogRef.close();
  }
}
