import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import { ThongTinError } from '../dich-vu-ky-thuat.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-thong-tin-dich-vu-ky-thuat-popup',
  templateUrl: './thong-tin-dich-vu-ky-thuat-popup.component.html',
  styleUrls: ['./thong-tin-dich-vu-ky-thuat-popup.component.scss']
})
export class ThongTinDichVuKyThuatPopupComponent implements OnInit {
  icClose = icClose;
  icClear = icClear;
  total: number;
  griErrorColumns: any;
  ThongTinError: ThongTinError[] = [];
  dataSource: any = {
    data: [],
    total: 0
  }
  constructor(
    private dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
  ) { }

  ngOnInit() {
    this.ThongTinError = this.data.thongTin;
    this.dataSource.data = this.ThongTinError;
    this.total = this.ThongTinError[0].TotalThanhCong;
    this.griErrorColumns = [
      { Field: "Ma", Title: "Mã", Width: 60 },
      { Field: "Error", Title: "Thông tin lỗi", Width: 150 }
    ];
  }
}
