import { Component, Inject, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import { ThongTinError } from '../duoc-pham.model';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-thong-tin-duoc-pham-popup',
  templateUrl: './thong-tin-duoc-pham-popup.component.html',
  styleUrls: ['./thong-tin-duoc-pham-popup.component.scss']
})
export class ThongTinDuocPhamPopupComponent implements OnInit {
  icClose = icClose;
  icClear = icClear;
  total: number;
  gridErrorColumns: any;
  ThongTinError: ThongTinError[] = [];
  dataSource: any = {
    data: [],
    total: 0
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.ThongTinError = this.data.thongTin;
    this.dataSource.data = this.ThongTinError;
    this.total = this.ThongTinError[0].TotalThanhCong;

    this.gridErrorColumns = [
      { Field: "Ten", Title: "Tên dược phẩm", Width: 60 },
      { Field: "Error", Title: "Thông tin lỗi", Width: 150 }
    ];
  }
}
