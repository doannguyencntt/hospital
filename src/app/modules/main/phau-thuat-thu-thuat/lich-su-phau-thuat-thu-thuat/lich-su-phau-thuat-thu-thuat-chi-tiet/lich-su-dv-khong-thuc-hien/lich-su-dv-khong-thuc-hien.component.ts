import { Component, OnInit, Inject } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-lich-su-dv-khong-thuc-hien',
  templateUrl: './lich-su-dv-khong-thuc-hien.component.html',
  styleUrls: ['./lich-su-dv-khong-thuc-hien.component.scss']
})
export class LichSuDvKhongThucHienComponent implements OnInit {
  icClose = icClose;
  gridColumns: any[] = [];
  urlGetDataGrid: string = "PhauThuatThuThuat/GetDataForGridAsyncLichSuDVPTTTKhongThucHien";
  urlGetTotalPageGrid: string = "PhauThuatThuThuat/GetTotalPageForGridAsyncLichSuDVPTTTKhongThucHien";
  constructor(
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log("data Input: ", this.data)
    this.gridColumns = [
      { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 250 },
      { Field: "LyDo", Title: "Lý do hủy", Width: 200 },
      { Field: "HoTenBacSiHuy", Title: "Người hủy", Width: 150 },
    ];
  }

  close() {
    this.dialog.closeAll();
  }
}
