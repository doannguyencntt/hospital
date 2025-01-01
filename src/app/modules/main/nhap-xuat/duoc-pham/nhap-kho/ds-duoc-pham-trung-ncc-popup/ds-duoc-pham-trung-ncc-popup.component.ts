import { Component, OnInit, TemplateRef, ViewChild, Inject, Input } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
  selector: 'app-ds-duoc-pham-trung-ncc-popup',
  templateUrl: './ds-duoc-pham-trung-ncc-popup.component.html',
  styleUrls: ['./ds-duoc-pham-trung-ncc-popup.component.scss']
})
export class DsDuocPhamTrungNccPopupComponent implements OnInit {

  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  groups: GroupDescriptor[] = [{ field: 'NhomDisplay' }];
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('gridDuocPhamNCC', { static: true }) gridDuocPhamNCC: GridComponent;
  @ViewChild('giaTemplate', { static: true }) giaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTruocVatTemplate', { static: true }) thanhTienTruocVatTemplate: TemplateRef<any>;
  @ViewChild('thanhTienSauVatTemplate', { static: true }) thanhTienSauVatTemplate: TemplateRef<any>;
  icClose = icClose;
  documentType = DocumentType.NhapKhoDuocPham;

  gridColumns: any[] = [];
  gridDataSource: any = {
    data: [],
    total: 0
  }
  constructor(
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.gridColumns = [
      { Field: "NhomDisplay", Title: "Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "NhaThauDisplay", Title: "NCC", Width: 120, ShowTooltip: true, Sortable: false },
      { Field: "HopDongThauDisplay", Title: "Hợp Đồng Thầu", ShowTooltip: true, Width: 50, Sortable: false },
      { Field: "DuocPhamDisplay", Title: "Dược Phẩm", Width: 100, Sortable: false },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 30, Sortable: false },
      { Field: "DVT", Title: "ĐVT", Width: 30, Sortable: false },
      { Field: "LoaiDisplay", Title: "Loại", Width: 30, Sortable: false, ShowTooltip: true },
      { Field: "Solo", Title: "Số Lô", Width: 50, Sortable: false },
      { Field: "HanSuDungDisplay", Title: "Hạn Sử Dụng", Width: 60, Sortable: false, ShowTooltip: true },
      { Field: "SoLuongNhapDisplay", Title: "SL", Width: 30, Sortable: false },
      { Field: "DonGiaNhap", Title: "Đơn Giá", Width: 80, Sortable: false, Template: this.giaTemplate },
      { Field: "ThanhTienTruocVat", Title: "Thành tiền (trước VAT)", Width: 120, Sortable: false, Template: this.thanhTienTruocVatTemplate},
      { Field: "VAT", Title: "VAT(%)", Width: 30, Sortable: false },
      { Field: "ThanhTienSauVat", Title: "Thanh toán", Width: 120, Sortable: false, Template: this.thanhTienSauVatTemplate,},
      { Field: "MaRef", Title: "Mã REF", Width: 30, Sortable: false, ShowTooltip: true },
      { Field: "MaVach", Title: "Mã Vạch", Width: 30, Sortable: false, ShowTooltip: true },
      { Field: "TiLeBHYTThanhToan", Title: "TL BH Thanh Toán(%)", Width: 40, Sortable: false, ShowTooltip: true },
      { Field: "TenKhoNhapSauKhiDuyet", Title: "Xuất về kho", Width: 40, Sortable: false, ShowTooltip: true },
      { Field: "TenNguoiNhapSauKhiDuyet", Title: "Người nhận", Width: 40, Sortable: false, ShowTooltip: true },
    ]
    // setTimeout(function () {
    //   this.setDataSourceGrid();
    // }, 100);
    this.setDataSourceGrid()
  }

  setDataSourceGrid() {
    this.gridDataSource = {
      data: this.data,
      total: this.data.length
    }
    if (this.gridDuocPhamNCC != undefined) {
      this.gridDuocPhamNCC.gridDataSource = this.gridDataSource;
      // this.gridDuocPhamNCC.setDataSource();
    }
  }


}
