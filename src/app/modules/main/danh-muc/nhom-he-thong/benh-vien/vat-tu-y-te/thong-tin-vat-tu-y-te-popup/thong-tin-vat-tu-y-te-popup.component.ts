import { Component, Inject, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import { ThongTinError } from '../vat-tu-y-te.model';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-thong-tin-vat-tu-y-te-popup',
  templateUrl: './thong-tin-vat-tu-y-te-popup.component.html',
  styleUrls: ['./thong-tin-vat-tu-y-te-popup.component.scss']
})
export class ThongTinVatTuYTePopupComponent implements OnInit {
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
      { Field: "Ten", Title: "Tên vật tư", Width: 60 },
      { Field: "Error", Title: "Thông tin lỗi", Width: 300 }
    ];
  }
}
