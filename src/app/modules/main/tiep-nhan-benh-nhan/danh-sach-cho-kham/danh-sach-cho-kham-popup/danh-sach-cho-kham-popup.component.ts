import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { TiepNhanBenhNhanViewModel } from '../../tiep-nhan-benh-nhan.model';

@Component({
  selector: 'app-danh-sach-cho-kham-popup',
  templateUrl: './danh-sach-cho-kham-popup.component.html',
  styleUrls: ['./danh-sach-cho-kham-popup.component.scss']
})
export class DanhSachChoKhamPopupComponent implements OnInit {

  icClose=icClose;
  constructor(@Inject(MAT_DIALOG_DATA) public data: TiepNhanBenhNhanViewModel
  , private dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.data);
  }

  close(){
    this.dialog.closeAll();
  }

}
