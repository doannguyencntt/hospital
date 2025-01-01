import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GridQueryInfo } from 'src/app/shared/component/grid/grid.model';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoNguoiBenhDenLamDvktTimKiemNangCao } from '../bao-cao-nguoi-benh-den-lam-dvkt.model';
declare var jQuery: any;
@Component({
  selector: 'app-bao-cao-nguoi-benh-den-lam-dvkt-list',
  templateUrl: './bao-cao-nguoi-benh-den-lam-dvkt-list.component.html',
  styleUrls: ['./bao-cao-nguoi-benh-den-lam-dvkt-list.component.scss']
})
export class BaoCaoNguoiBenhDenLamDvktListComponent implements OnInit {

  minDateTuNgay: any;
  baoCaoSearch: BaoCaoNguoiBenhDenLamDvktTimKiemNangCao = new BaoCaoNguoiBenhDenLamDvktTimKiemNangCao();
  documentType: DocumentType;
  public pageSize = 50;
  public skip = 0;
  take: number;
  height: number;
  gridColumns: any[];
  dataSource: any = {
    data: [],
    total: 0
  };
  gridDataSource: any = {
    data: [],
    total: 0
  };
  ishowView: boolean;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean = true;
  queryInfo :GridQueryInfo;
  constructor(
    private authService: AuthService, 
    private apiService: ApiService, 
    private notificationService: NotificationService, 
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoNguoiBenhDenLamDVKT;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 70 }, //0
      { Field: "MaYeuCauTiepNhan", Title: "Mã y tế", Width: 120 }, //1
      { Field: "_", Title: "Thời gian khám", Width: 500 }, //2
      { Field: "ThoiGianTiepNhanDisplay", Title: "Thời gian tiếp nhận", Width: 125 }, //3
      { Field: "ThoiGianBatDauKhamDisplay", Title: "Thời gian bắt đầu DVKT", Width: 125 }, //4
      { Field: "ThoiGianKetThucKhamDisplay", Title: "Thời gian kết thúc DVKT", Width: 125 }, //5
      { Field: "NgayKhamDisplay", Title: "Ngày", Width: 125 }, //6
      { Field: "TenNguoiBenh", Title: "Tên người bệnh", Width: 190 }, //7
      { Field: "SoDienThoai", Title: "Số điện thoại", Width: 100 }, //8
      { Field: "DoiTuong", Title: "Đối tượng", Width: 100 }, //9
      { Field: "GioiTinh", Title: "Giới tính", Width: 70 }, //10
      { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 100 }, //11
      { Field: "DiaChi", Title: "Địa chỉ", Width: 160 }, //12
      { Field: "BacSiKham", Title: "Người thực hiện", Width: 170 }, //13
      { Field: "DichVuThucHien", Title: "Dịch vụ thực hiện", Width: 300 }, //14
      { Field: "KetQua", Title: "Kết quả", Width: 400 }, //15
      { Field: "HuongGiaiQuyet", Title: "Hướng giải quyết", Width: 160 }, //16
      { Field: "NgayHenTaiKhamDisplay", Title: "Ngày hẹn tái khám", Width: 160 }, //17
      { Field: "NguoiGioiThieu", Title: "Người giới thiệu", Width: 160 } //18
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
      this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
    }
  }

  public pageChange(event): void {
    this.skip = event.skip;
    this.XemBaoCao(true);
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

  XemBaoCao(isChagePage: boolean = false) {
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    if (!isChagePage) {
      this.skip = 0;
    }

    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");

    this.baoCaoSearch.FromDate = tuNgay;
    this.baoCaoSearch.ToDate = denNgay;
    let searchText = this.getSearchText();
    this.queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: JSON.stringify(this.baoCaoSearch), sort: null, lazyLoadPage: false };
    this.apiService.post<any>("BaoCao/GetDataBaoCaoNguoiBenhDenLamDVKTForGrid", this.queryInfo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.gridDataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        this._isLoading = false;

        this.apiService.post<any>("BaoCao/GetTotalBaoCaoNguoiBenhDenLamDVKTForGrid", this.queryInfo).subscribe(resultDataTotal => {
          if (resultDataTotal !== undefined && resultDataTotal != null) {
            this.gridDataSource.total = resultDataTotal.TotalRowCount;
            this._isLoadingTotalPage = false;
          }
        },
          () => {
            this._isLoadingTotalPage = false;
          });
      }
    });
  }

  getSearchText() {
    let searchText = this.baoCaoSearch.SearchString != undefined ? this.baoCaoSearch.SearchString : '';
    searchText = CommonService.convertSpecialXML(searchText);
    searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
    searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
    return searchText;
  }

  exportExcel() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
      this.baoCaoSearch.FromDate = tuNgay;
      this.baoCaoSearch.ToDate = denNgay;
      let searchText = this.getSearchText();
      this.queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: JSON.stringify(this.baoCaoSearch), sort: null, lazyLoadPage: false };
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoNguoiBenhDenLamDVKT", this.queryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoNguoiBenhDenLamDVKT" + dateTimeNow.getFullYear() + ".xlsx");
          this.dialog.closeAll();
        }
          , err => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
          });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
