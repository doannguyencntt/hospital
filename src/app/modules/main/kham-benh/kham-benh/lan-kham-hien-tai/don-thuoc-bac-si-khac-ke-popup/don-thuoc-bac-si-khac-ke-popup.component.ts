import { Component, OnInit, TemplateRef, ViewChild, Inject, Input } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { GroupDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-don-thuoc-bac-si-khac-ke-popup',
  templateUrl: './don-thuoc-bac-si-khac-ke-popup.component.html',
  styleUrls: ['./don-thuoc-bac-si-khac-ke-popup.component.scss']
})
export class DonThuocBacSiKhacKePopupComponent implements OnInit {
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('sangTemplate', { static: true }) sangTemplate: TemplateRef<any>;
  @ViewChild('truaTemplate', { static: true }) truaTemplate: TemplateRef<any>;
  @ViewChild('chieuTemplate', { static: true }) chieuTemplate: TemplateRef<any>;
  @ViewChild('toiTemplate', { static: true }) toiTemplate: TemplateRef<any>;
  @ViewChild('thoiDiemTiepNhanTemplate', { static: true }) thoiDiemTiepNhanTemplate: TemplateRef<any>;

  icClose = icClose;
  yeuCauKhamBenhId: number = null;
  gridColumns: any[] = [];
  urlGetDataGridDonThuocBacSiKhac: string = "KhamBenh/GetDonThuocBacSiKhacDataForGridAsync";
  urlGetTotalPageGridDonThuocBacSiKhac: string = "KhamBenh/GetDonThuocBacSiKhacTotalPageForGridAsync";

  gridColumnsDetail: any[] = [];
  urlGetDataGridToaThuoc: string = "KhamBenh/GetDonThuocBacSiKhacDataForGridAsyncDetail";
  urlGetTotalPageGridToaThuoc: string = "KhamBenh/GetDonThuocBacSiKhacTotalPageForGridAsyncDetail";

  groupNhomThuoc: GroupDescriptor[] = [{ field: 'NhomThuocLSKT' }];

  constructor(
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.yeuCauKhamBenhId = this.data.Model;
    this.gridColumns = [
      { Field: "MaTN", Title: "Mã TN", Width: 120, Sortable: true },
      { Field: "ChuanDoanICD", Title: "Chẩn đoán ICD", minWidth: 400, Sortable: true },
      { Field: "BacSiKham", Title: "Bác sĩ khám", Width: 200 },
    ];

    this.gridColumnsDetail = [
      { Field: "STT", Title: "#", Width: 45, Sortable: true },
      { Field: "Ten", Title: "DƯỢC PHẨM", Width: 100, Sortable: true, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 100, Sortable: true, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 60, Sortable: true },
      { Field: "NhomThuocLSKT", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "SangDisplay", Title: "Sáng", Width: 60, Sortable: true, Template: this.sangTemplate, ShowTooltip: true },
      { Field: "TruaDisplay", Title: "Trưa", Width: 60, Sortable: true, Template: this.truaTemplate, ShowTooltip: true },
      { Field: "ChieuDisplay", Title: "Chiều", Width: 60, Sortable: true, Template: this.chieuTemplate, ShowTooltip: true },
      { Field: "ToiDisplay", Title: "Tối", Width: 60, Sortable: true, Template: this.toiTemplate, ShowTooltip: true },
      { Field: "SoNgayDung", Title: "Số ngày", Width: 80, Sortable: true },
      { Field: "SoLuong", Title: "SL", Width: 50, Sortable: true },
      { Field: "TenDuongDung", Title: "Đường dùng", Width: 110, Sortable: true, ShowTooltip: true },
    ];
  }


  close() {
    this.dialog.closeAll();
  }
}
