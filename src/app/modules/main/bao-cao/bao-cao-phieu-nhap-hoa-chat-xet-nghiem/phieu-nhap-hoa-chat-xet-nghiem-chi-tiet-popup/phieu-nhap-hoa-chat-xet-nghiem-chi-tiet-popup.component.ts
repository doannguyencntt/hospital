import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { BaoCaoTonKhoSearch } from '../phieu-nhap-hoa-chat-xet-nghiem.model';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { AuthService } from 'src/app/core/services/auth.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
declare var jQuery: any;

@Component({
  selector: 'app-phieu-nhap-hoa-chat-xet-nghiem-chi-tiet-popup',
  templateUrl: './phieu-nhap-hoa-chat-xet-nghiem-chi-tiet-popup.component.html',
  styleUrls: ['./phieu-nhap-hoa-chat-xet-nghiem-chi-tiet-popup.component.scss']
})

export class PhieuNhapHoaChatXetNghiemChiTietPopupComponent implements OnInit {
  baoCaoSearch: BaoCaoTonKhoSearch = new BaoCaoTonKhoSearch();
  additionalSearchString: string = "";
  @Input() heightToolbar: number = 140;
  height: number;
  documentType: DocumentType;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  dataSource: any = { data: [], total: 0 };
  public gridView: GridDataResult;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  skip = 0;
  take: number;
  pageSize = 50;
  icClose = icClose;
  gridColumns: any;

  @ViewChild('baoCaoGrid', { static: true }) baoCaoGrid: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private dialog: MatDialog,
    private apiService: ApiService, private authService: AuthService, private notificationService: NotificationService,
  ) { }
  ngOnInit() {
    this.documentType = DocumentType.BaoCaoXNPhieuNhapHoaChat;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;

    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;

    this.gridColumns = [
      { Field: "TenDuocPham", Title: "Tên Hóa Chất", Width: 150, Sortable: true },
      { Field: "NgayNhapDisplay", Title: "Ngày nhập", Width: 150, Sortable: true },
      { Field: "SoLo", Title: "Lô", Width: 150, Sortable: true },
      { Field: "HanDungDisplay", Title: "Hạn dùng", Width: 150, Sortable: true },
      { Field: "LuongNhap", Title: "Lượng nhập (lọ/hộp)", Width: 150, Sortable: true },
      { Field: "NguoiLinhTuKhoGoc", Title: "Người lĩnh từ kho gốc", Width: 150, Sortable: true },
      { Field: "NguoiNhap", Title: "Người nhập", Width: 150, Sortable: true },
    ];

    if (this.data.Model != undefined && this.data.Model != null) {
      this.baoCaoSearch.DenNgay = this.data.Model.DenNgay;
      this.baoCaoSearch.TuNgay = this.data.Model.TuNgay;
      this.baoCaoSearch.KhoId = this.data.Model.KhoId;
      this.baoCaoSearch.DuocPhamId = this.data.Model.DuocPhamId;

      this.baoCaoSearch.Skip = 0;
      this.baoCaoSearch.Take = (this.pageSize * this.skip) + this.pageSize;

      this.showDataXetNghiem(this.baoCaoSearch);
    }
  }

  private showDataXetNghiem(baoCaoSearch: any) {
    this._isLoading = true;
    this._isLoadingTotalPage = true;

    this.apiService.post<any>("BaoCao/GetDataPhieuNhapHoaChatChiTietForGrid", baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };

        this.gridView = this.dataSource;

        this._isLoading = false;
        this._isLoadingTotalPage = false;
      }
    });
  }

  exportExcel() {
    if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    if (!this.baoCaoSearch.KhoId) {
      this.notificationService.showError("Vui lòng chọn tủ hóa chất");
      return;
    }

    if (this.baoCaoSearch.DuocPhamId === undefined || this.baoCaoSearch.DuocPhamId === null) {
      this.notificationService.showError("Vui lòng chọn dược phẩm");
      return;
    }


    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      let loading = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      this.apiService.postExportExcel<any>("BaoCao/ExportPhieuNhapHoaChat", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "PhieuNhapHoaChat" + dateTimeNow.getFullYear() + ".xlsx");
          loading.close();
        }
          , err => {
            this.notificationService.showError(err.Message);
            loading.close();
          });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  getFieldColumn(index: number) {
    return this.gridColumns[index].Field;
  }

  getTitleColumn(index: number) {
    return this.gridColumns[index].Title;
  }

  getWidthColumn(index: number) {
    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
  }

  getMinWidthColumn(minWidth: number) {
    var widthParent = jQuery("#baoCaoGrid").parent().width();
    var widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
    var totalWidth = this.gridColumns.filter((item) => {
      return item.Width != null;
    }).reduce((sum, item) => sum + item.Width, 0);
    if ((widthScreen < totalWidth + minWidth + 100)) {
      return minWidth;
    }
    else {
      return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
    }
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    if (this.dataSource.data.length == 0) {
      this.showDataXetNghiem(this.baoCaoSearch);
    } else {
      this.skip, 
      this.skip + this.pageSize

      this.baoCaoSearch.Skip = this.skip;
      this.baoCaoSearch.Take = (this.pageSize * this.skip) + this.pageSize;

      this.showDataXetNghiem(this.baoCaoSearch);
    }
  }

  reFresh() {
    this.skip = 0;
    this.showDataXetNghiem(this.baoCaoSearch);
  }

  close() {
    this.dialog.closeAll();
  }

}
