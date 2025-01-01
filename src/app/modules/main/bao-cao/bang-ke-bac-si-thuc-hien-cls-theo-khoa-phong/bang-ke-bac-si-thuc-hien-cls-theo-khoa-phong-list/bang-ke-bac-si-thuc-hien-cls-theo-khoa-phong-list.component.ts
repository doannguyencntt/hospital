import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BangKeBacSiThucHienClsTheoKhoaPhongTimKiemNangCao } from '../bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong.model';
import { GridQueryInfo } from 'src/app/shared/component/grid/grid.model';
import { ApiError } from "src/app/shared/models/api-error.model";
declare var jQuery: any;

@Component({
  selector: 'app-bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list',
  templateUrl: './bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component.html',
  styleUrls: ['./bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component.scss']
})
export class BangKeBacSiThucHienClsTheoKhoaPhongListComponent implements OnInit {

  baoCaoSearch: BangKeBacSiThucHienClsTheoKhoaPhongTimKiemNangCao = new BangKeBacSiThucHienClsTheoKhoaPhongTimKiemNangCao();
  documentType: DocumentType;

  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;

  height: number;
  gridColumnsDefault: any[];
  gridColumnsKhoaPhong: any[];
  dataSource: any = {
    data: [],
    total: 0
  };
  gridDataSource: any = {
    data: [],
    total: 0
  };
  public pageSize = 50;
  public skip = 0;
  take: number;
  ishowView: boolean;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  queryInfo :GridQueryInfo;

  popupLoadingData: any;

  // @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoHoatDongKhamBenhTheoKhoaPhong;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;

    this.gridColumnsDefault = [
      { Field: "STT", Title: "STT", Width: 30 },
      { Field: "NoiDung", Title: "", Width: 250 },
      { Field: "TongSo", Title: "Tổng số", Width: 80 }
    ];

    this.ganThoiGianTimKiemMacDinh();
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
      //this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
      let searchText = this.getSearchText();
      this.queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: JSON.stringify(this.baoCaoSearch), sort: null, lazyLoadPage: false };
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoHoatDongKhamBenhTheoKhoaPhong", this.queryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoHoatDongKhamBenhTheoKhoaPhong" + dateTimeNow.getFullYear() + ".xlsx");
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

  XemBaoCao() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    this.showPopupLoadingData();
    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
    this.baoCaoSearch.FromDate = tuNgay;
    this.baoCaoSearch.ToDate = denNgay;
    //this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
    let searchText = this.getSearchText();
    this.queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: JSON.stringify(this.baoCaoSearch), sort: null, lazyLoadPage: false };
    this.apiService.post<any>("BaoCao/GetDataBaoCaoHoatDongKhamBenhTheoKhoaPhongForGrid", this.queryInfo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.gridColumnsKhoaPhong = [];
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };

        // xử lý khoa phòng
        if (this.dataSource.data.length > 0) {
          let gridColumnsKhoaPhongTemp = [];
          this.dataSource.data.forEach(noiDung => {
            noiDung.ThongTinKhamTheoPhongs.forEach(element => {
              var index = gridColumnsKhoaPhongTemp.findIndex(x => x.Field == element.PhongBenhVienId);
              if (index == -1) {
                gridColumnsKhoaPhongTemp.push(
                  { Field: element.PhongBenhVienId, Title: element.TenPhongBenhVien, Width: 100 }
                );
              }
            });
          });
          this.gridColumnsKhoaPhong = gridColumnsKhoaPhongTemp.sort((a, b) => {
            return a.Title.localeCompare(b.Title);
          });
        }

        let gridData = this.dataSource.data.slice(0, 50);
        this.gridDataSource = {
          data: gridData,
          total: resultData.TotalRowCount
        };


        this._isLoading = false;
        this._isLoadingTotalPage = false;
      }
      this.closePopupLoadingData();
    },
    (err: ApiError) => {
        if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
    });
  }

  ganThoiGianTimKiemMacDinh(xoaThoiGianMacDinh: boolean = false) {
    if (xoaThoiGianMacDinh) {
      this.baoCaoSearch.TuNgayFormat = null;
      this.baoCaoSearch.DenNgayFormat = null;
    }
    else {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.minDateTuNgay.setDate(1);

      if (this.baoCaoSearch.TuNgayFormat == null) {
        this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
      }
      if (this.baoCaoSearch.DenNgayFormat == null) {
        this.baoCaoSearch.DenNgayFormat = new Date();
      }
    }
  }

  getFieldColumn(index: number, laGridColumnsDefault: boolean = true) {
    if (laGridColumnsDefault) {
      return this.gridColumnsDefault[index].Field;
    }
    return this.gridColumnsKhoaPhong[index].Field;
  }
  getTitleColumn(index: number, laGridColumnsDefault: boolean = true) {
    if (laGridColumnsDefault) {
      return this.gridColumnsDefault[index].Title;
    }
    return this.gridColumnsKhoaPhong[index].Title;
  }

  // nếu có dùng minWidth thì bổ sung thêm function xử lý minWith
  getWidthColumn(index: number, laGridColumnsDefault: boolean = true) {
    if (laGridColumnsDefault) {
      return this.gridColumnsDefault[index].Width;
    }
    return this.gridColumnsKhoaPhong[index].Width;
  }

  getDataSoLuongTheoKhoaPhong(khoaPhongId: number, dataItem)
  {
    var khoaPhongChiTiets = dataItem.ThongTinKhamTheoPhongs.filter(x => x.PhongBenhVienId == khoaPhongId);
    if(khoaPhongChiTiets.length == 0)
    {
      return 0;
    }
    return khoaPhongChiTiets.reduce((sum: number, item: { SoLuong: number; }) => sum + item.SoLuong, 0);
  }

  getSearchText() {
    let searchText = this.baoCaoSearch.SearchString != undefined ? this.baoCaoSearch.SearchString : '';
    searchText = CommonService.convertSpecialXML(searchText);
    searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
    searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
    return searchText;
  }

  showPopupLoadingData() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });
  }
  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }
}
