import { Component, OnInit, Inject } from '@angular/core';
import { TiepNhanBenhNhanViewModel } from '../../tiep-nhan-benh-nhan.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-popup-het-hieu-luc',
  templateUrl: './popup-het-hieu-luc.component.html',
  styleUrls: ['./popup-het-hieu-luc.component.scss']
})
export class PopupHetHieuLucComponent implements OnInit {

  icClose = icClose;

  constructor(@Inject(MAT_DIALOG_DATA) public data: TiepNhanBenhNhanViewModel
  , private dialog: MatDialog, public dialogRef: MatDialogRef<PopupHetHieuLucComponent>) { }

  ngOnInit() {
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
