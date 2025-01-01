import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TiepNhanBenhNhanViewModel } from '../tiep-nhan-benh-nhan.model';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-tiep-nhan-benh-nhan-popup-het-hieu-luc',
  templateUrl: './tiep-nhan-benh-nhan-popup-het-hieu-luc.component.html',
  styleUrls: ['./tiep-nhan-benh-nhan-popup-het-hieu-luc.component.scss']
})
export class TiepNhanBenhNhanPopupHetHieuLucComponent implements OnInit {

  icClose=icClose;
  constructor(@Inject(MAT_DIALOG_DATA) public data: TiepNhanBenhNhanViewModel
  , private dialog: MatDialog, public dialogRef: MatDialogRef<TiepNhanBenhNhanPopupHetHieuLucComponent>) { }

  ngOnInit() {
    //console.log("TiepNhanBenhNhanPopupHetHieuLucComponent = ", this.data)
  }

  close(){
    //this.dialog.closeAll();
    this.dialogRef.close(1);
  }

  khamKhongBHYT(){
    this.dialog.closeAll();
  }

  huy(){
    this.dialogRef.close(1);
  }

  chapNhanBHYTNhapTay(){
    this.dialogRef.close(2);
  }
}
