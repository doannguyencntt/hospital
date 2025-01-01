import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { XetNghiemCovid } from '../../kham-benh.model';

@Component({
  selector: 'app-xn-sars-cov2-popup',
  templateUrl: './xn-sars-cov2-popup.component.html',
  styleUrls: ['./xn-sars-cov2-popup.component.scss']
})
export class XnSarsCov2PopupComponent implements OnInit {
  xetNghiemCovid = new XetNghiemCovid();

  icClose = icClose;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<XnSarsCov2PopupComponent>,) { }
  loaiMauXetNghiemText :string =null;XnSarsCov2PopupComponent

  ngOnInit() {
    this.xetNghiemCovid.BieuHienLamSang = this.data.BieuHienLamSang;
    this.xetNghiemCovid.DichTeSarsCoV2 = this.data.DichTeSarsCoV2;
    this.xetNghiemCovid.LoaiBenhPham =this.data.LoaiMauXetNghiemText;
  }
  save(){
    this.dialogRef.close(this.xetNghiemCovid);
  }
  close(){
    this.dialogRef.close();
  }
}

