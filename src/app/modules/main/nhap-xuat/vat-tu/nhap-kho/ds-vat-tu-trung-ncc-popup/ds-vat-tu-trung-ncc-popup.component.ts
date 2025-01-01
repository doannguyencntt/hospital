import { Component, OnInit, TemplateRef, ViewChild, Inject, Input } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
  selector: 'app-ds-vat-tu-trung-ncc-popup',
  templateUrl: './ds-vat-tu-trung-ncc-popup.component.html',
  styleUrls: ['./ds-vat-tu-trung-ncc-popup.component.scss']
})
export class DsVatTuTrungNccPopupComponent implements OnInit {
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  groups: GroupDescriptor[] = [{ field: 'LoaiSuDungDisplay' }];
  @ViewChild('nhomDisplayGroupHeaderTemplate', { static: true }) nhomDisplayGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('gridVatTuNCC', { static: true }) gridVatTuNCC: GridComponent;
  @ViewChild('giaTemplate', { static: true }) giaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTruocVatTemplate', { static: true }) thanhTienTruocVatTemplate: TemplateRef<any>;
  @ViewChild('thanhTienSauVatTemplate', { static: true }) thanhTienSauVatTemplate: TemplateRef<any>;
  icClose = icClose;
  gridColumns: any[] = [];
  gridDataSource: any = {
    data: [],
    total: 0
  }
  documentType = DocumentType.NhapKhoVatTu;

  constructor(
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.gridColumns = [
      { Field: "LoaiSuDungDisplay", Title: "Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomDisplayGroupHeaderTemplate },
      { Field: "NhaThauDisplay", Title: "NCC", Width: 120, ShowTooltip: true, Sortable: false },
      { Field: "HopDongThauDisplay", Title: "Hợp Đồng Thầu", ShowTooltip: true, Width: 50, Sortable: false },
      { Field: "VatTuDisplay", Title: "Vật Tư", Width: 100, Sortable: false },
      { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false },
      { Field: "LoaiDisplay", Title: "Loại", Width: 40, Sortable: false, ShowTooltip: true },
      { Field: "Solo", Title: "Số Lô", Width: 40, Sortable: false },
      { Field: "HanSuDungDisplay", Title: "Hạn Sử Dụng", Width: 80, Sortable: false, ShowTooltip: true },
      { Field: "SoLuongNhapDisplay", Title: "SL", Width: 40, Sortable: false },
      { Field: "DonGiaNhap", Title: "Đơn Giá", Width: 100, Sortable: false, Template: this.giaTemplate },
      { Field: "ThanhTienTruocVat", Title: "Thành tiền (trước VAT)", Width: 100, Sortable: false, Template: this.thanhTienTruocVatTemplate },
      { Field: "VAT", Title: "VAT(%)", Width: 40, Sortable: false },
      { Field: "ThanhTienSauVat", Title: "Thanh toán", Width: 100, Sortable: false, Template: this.thanhTienSauVatTemplate },
      { Field: "MaRef", Title: "Mã REF", Width: 40, Sortable: false },
      { Field: "MaVach", Title: "Mã Vạch", Width: 40, Sortable: false },
      { Field: "TiLeBHYTThanhToan", Title: "TL BH Thanh Toán(%)", Width: 40, Sortable: false },
      { Field: "TenKhoNhapSauKhiDuyet", Title: "Xuất về kho", Width: 40, Sortable: false, ShowTooltip: true },
      { Field: "TenNguoiNhapSauKhiDuyet", Title: "Người nhận", Width: 40, Sortable: false, ShowTooltip: true },
    ];
    this.setDataSourceGrid()

  }
  setDataSourceGrid() {
    this.gridDataSource = {
      data: this.data,
      total: this.data.length
    }
    if (this.gridVatTuNCC != undefined) {
      this.gridVatTuNCC.gridDataSource = this.gridDataSource;
      // this.gridVatTuNCC.setDataSource();
    }
  }
}
