import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';

import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    selector: 'app-dich-vu-khuyen-mai-popup',
    templateUrl: './dich-vu-khuyen-mai-popup.component.html',
    styleUrls: ['./dich-vu-khuyen-mai-popup.component.scss']
})

export class DichVuKhuyenMaiPopupComponent implements OnInit {
    gridColumns: any[] = [];
    gridColumnsDetail: any[] = [];
    additionalSearchString: string = null;
    icClose = icClose;
    documentType: DocumentType;
    sort: SortDescriptor[] = [
      {
        field: "Ten",
        dir: "asc",
      },
    ];
    urlGetData: string = 'TiepNhanBenhNhan/GetDataForGridAsyncDichVuKhuyenMai';
    urlGetTotalData: string = 'TiepNhanBenhNhan/GetTotalPageForGridAsyncDichVuKhuyenMai';
    urlGetDataChild: string = 'TiepNhanBenhNhan/GetDataForGridAsyncDichVuKhuyenMaiChild';
    urlGetTotalDataChild: string = 'TiepNhanBenhNhan/GetTotalPageForGridAsyncDichVuKhuyenMaiChild';
  
    @ViewChild('tenGoiTemplate', { static: true }) tenGoiTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('donGiaCKTemplate', { static: true }) donGiaCKTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  
    groups: GroupDescriptor[] = [{ field: 'Nhom' }];
    sortChild: SortDescriptor[] = [{
      field: 'NhomId',
      dir: 'asc'
    }];
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<DichVuKhuyenMaiPopupComponent>
    ) { }
  
    ngOnInit() {
      this.additionalSearchString = this.data.BenhNhanId;
      this.documentType = this.data.DocumentType;
      this.gridColumns = [
        { Field: "Ten", Title: "Tên Gói", Width: 600, Sortable: false, Template: this.tenGoiTemplate }
      ];
  
      this.gridColumnsDetail = [
        { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
        { Field: "Ten", Title: "Tên dịch vụ", Width: 70, Sortable: false, ShowTooltip: true },
        { Field: "NhomId", Title: "Nhóm Id", Width: 50, Sortable: true, Hidden: true },
        { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
        { Field: "LoaiGia", Title: "Loại giá", Width: 50, Sortable: false },
        { Field: "SoLan", Title: "SL", Width: 30, Sortable: false },
        { Field: "DonGia", Title: "Đơn giá", Width: 80, Sortable: false, Template: this.donGiaTemplate },
        { Field: "DonGiaKhuyenMai", Title: "Đơn giá KM", Width: 80, Sortable: false, Template: this.donGiaCKTemplate },
        { Field: "ThanhTien", Title: "Thành tiền", Width: 100, Sortable: false, Template: this.thanhTienTemplate },
        { Field: "GhiChu", Title: "Ghi chú", Width: 100, Sortable: false, ShowTooltip: true },
        { Field: "HanSuDung", Title: "Hạn Sử Dụng", Width: 100, Sortable: false, ShowTooltip: true },
        { Field: "SoLanDaDung", Title: "SL Đã Sử Dụng", Width: 70, Sortable: false },
  
      ]
    }
}
