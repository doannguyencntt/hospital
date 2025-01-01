import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import icSearch from '@iconify/icons-ic/twotone-search';
import icRight from '@iconify/icons-ic/chevron-right';
import icRightLast from '@iconify/icons-ic/last-page';
import icLeft from '@iconify/icons-ic/chevron-left';
import icLeftLast from '@iconify/icons-ic/first-page';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { XuatKhoKhac, XuatKhoKhacGridDaDuyet, YeuCauXuatKhoDuocPhamChiTiet, YeuCauXuatKhoDuocPhamChiTietVoSearch, YeuCauXuatKhoDuocPhamGridVo } from '../xuat-kho-khac.model';
import icInfo from '@iconify/icons-ic/baseline-info';
import { EnumLoaiKho } from 'src/app/shared/enum/loai-kho.enum';

@Component({
  selector: 'app-xuat-kho-khac-shared',
  templateUrl: './xuat-kho-khac-shared.component.html',
  styleUrls: ['./xuat-kho-khac-shared.component.scss']
})
export class XuatKhoKhacSharedComponent implements OnInit {
  documentType: DocumentType;
  yeuCauXuatKhoKhac: XuatKhoKhac = new XuatKhoKhac();
  yeuCauXuatKhoDuocPhamChiTietVoSearch: YeuCauXuatKhoDuocPhamChiTietVoSearch = new YeuCauXuatKhoDuocPhamChiTietVoSearch();
  lstXuatKhoSearch: YeuCauXuatKhoDuocPhamGridVo[] = new Array<YeuCauXuatKhoDuocPhamGridVo>();
  lstXuatKho: YeuCauXuatKhoDuocPhamGridVo[] = new Array<YeuCauXuatKhoDuocPhamGridVo>();
  xuatKhoKhacGridDaDuyet: XuatKhoKhacGridDaDuyet = new XuatKhoKhacGridDaDuyet();

  disabled: boolean = false;
  popupLoadingData: any = null;
  yeuCauXuatKhacDuocPhamId: number = 0;
  icRight = icRight;
  icLeft = icLeft;
  icInfo = icInfo;
  icRightLast = icRightLast;
  icLeftLast = icLeftLast;
  lstXuatKhoTheoNhom: any[] = [];
  addtionStringDefault: string = null;
  searchString: string = null;
  searchString2: string;
  searchCtrl = new FormControl;
  icSearch = icSearch;
  gridColumns: any[] = [];
  gridResultColumns: any[] = [];
  gridResultDaDuyetColumns: any[] = [];
  gridDataSource: any;
  additionalSearchString: string = null;
  gridDataSourceThuocKhac: any = {
    data: [],
    total: 0
  }
  sort: SortDescriptor[] = [{
    field: 'Ten',
    dir: 'desc'
  }];
  format = "n2";
  sLTonThucTe: number = 0;
  urlGetData = "XuatKhoDuocPhamKhac/GetDataForGridAsyncDuocPhamDaChon";
  urlGetTotal = "XuatKhoDuocPhamKhac/GetTotalPageForGridAsyncDuocPhamDaChon";

  urlGetDataDaDuyet = "XuatKhoDuocPhamKhac/GetDataForGridChildAsyncDaDuyet";
  urlGetTotalDaDuyet = "XuatKhoDuocPhamKhac/GetTotalPageForGridChildAsyncDaDuyet";

  groups: GroupDescriptor[] = [{ field: 'TenNhom' }];

  @ViewChild('gridDuocPhamXuat', { read: GridComponent, static: false }) gridDuocPhamXuat: GridComponent;
  @ViewChild('gridResult', { read: GridComponent, static: false }) gridResult: GridComponent;
  @ViewChild('gridDuocPhamXuatDaDuyet', { read: GridComponent, static: false }) gridDuocPhamXuatDaDuyet: GridComponent;

  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('tenNhom2GroupHeaderTemplate', { static: true }) tenNhom2GroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  @ViewChild('transferTemplate', { static: true }) transferTemplate: TemplateRef<any>;
  @ViewChild('transferTemplate2', { static: true }) transferTemplate2: TemplateRef<any>;
  @ViewChild('soLuongXuatGrid1Template', { static: true }) soLuongXuatGrid1Template: TemplateRef<any>;
  @ViewChild('soLuongXuatGrid2Template', { static: true }) soLuongXuatGrid2Template: TemplateRef<any>;
  @ViewChild('soLuongXuatDaDuyetTemplate', { static: true }) soLuongXuatDaDuyetTemplate: TemplateRef<any>;
  @ViewChild('sLTonTemplate', { static: true }) sLTonTemplate: TemplateRef<any>;

  @ViewChild('hsdTemplate', { static: true }) hsdTemplate: TemplateRef<any>;

  @ViewChild('slTonThucTeTemplate', { static: true }) slTonThucTeTemplate: TemplateRef<any>;
  @ViewChild('mayXetNghiemTemplate', { static: true }) mayXetNghiemTemplate: TemplateRef<any>;

  @Input() isCreate: boolean;
  @Input() validationErrors: any[] = [];
  @Input() trangThaiVo: any;

  id: number = 0;
  tinhTrang: number = 0;
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private authService: AuthService,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.XuatKhoDuocPhamKhac;
    this.route.queryParams.subscribe(param => {
      this.id = param['Id'];
      this.tinhTrang = param['F'];
      if (!this.isCreate) {
        if (this.tinhTrang == 1) {
          this.xuatKhoKhacGridDaDuyet.XuatKhoDuocPhamId = this.id;
          var queryString = JSON.stringify(this.xuatKhoKhacGridDaDuyet);
          this.addtionStringDefault = queryString;
          this.getById(this.id, true);
        } else {
          this.getById(this.id, false);
        }
      }
    });

    this.getCurrentUser();
    this.gridColumns = [
      { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
      { Field: "Ma", Title: "Mã", Width: 40, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
      // { Field: "Loai", Title: "Loại", Width: 70, Sortable: false },
      { Field: "SoLuongTon", Title: "SL tồn", Width: 70, Sortable: false, Template: this.sLTonTemplate },
      {
        Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: true,
        Template: this.soLuongXuatGrid1Template
      },
      { Field: "Id", Title: "", Width: 30, Sortable: true, Template: this.transferTemplate },

    ];

    this.gridResultColumns = [
      { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhom2GroupHeaderTemplate },
      { Field: "Id", Title: "", Width: 30, Sortable: false, Template: this.transferTemplate2 },
      { Field: "Ma", Title: "Mã", Width: 40, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
      // { Field: "Loai", Title: "Loại", Width: 70, Sortable: false },
      { Field: "SoLuongTon", Title: "SL tồn", Width: 70, Sortable: false, Template: this.slTonThucTeTemplate },
      {
        Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: false,
        Template: this.soLuongXuatGrid2Template
      },
      { Field: "", Title: "Máy XN", Width: 150, Sortable: false, Template: this.mayXetNghiemTemplate },
    ];

    this.gridResultDaDuyetColumns = [
      { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ma", Title: "Mã", Width: 40, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
      { Field: "SoLuongXuat", Title: "SL Xuất", Width: 150, Sortable: false },
      { Field: "SoPhieu", Title: "Số phiếu", Width: 150, Sortable: false },

      //Máy xét nghiệm
      //{ Field: "", Title: "Máy XN", Width: 150, Sortable: false, Template: this.mayXetNghiemTemplate },
    ];
  }

  getCurrentUser() {
    if (this.isCreate) {
      this.yeuCauXuatKhoKhac.NgayXuat = new Date();
      this.apiService.get<any>("YeuCauLinhDuocPham/GetCurrentUser").subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.yeuCauXuatKhoKhac.NguoiXuatId = resultData.NhanVienYeuCauId;
            this.yeuCauXuatKhoKhac.TenNguoiXuat = resultData.HoTen;
          }
        });
    }
  }

  khoNhapChangeChange() {
    this.validationErrors = []
  }

  onKeyGrid1(event: any) {
    if (event.key == "Enter") {
      this.TimkiemNangCao();
    }
  }

  onKeyGrid2(event: any) {
    if (event.key == "Enter") {
      this.timKiemGrid2();
    }
  }

  TimkiemNangCao() {
    this.yeuCauXuatKhoDuocPhamChiTietVoSearch.KhoXuatId = this.yeuCauXuatKhoKhac.KhoXuatId;
    if (this.yeuCauXuatKhoDuocPhamChiTietVoSearch.KhoXuatId == undefined || this.yeuCauXuatKhoDuocPhamChiTietVoSearch.KhoXuatId == null) {
      this.timKiemGrid2();
    }
    var queryString = JSON.stringify(this.yeuCauXuatKhoDuocPhamChiTietVoSearch);
    if (this.gridDuocPhamXuat != undefined && this.gridDuocPhamXuat != null) {
      this.gridDuocPhamXuat._additionalSearchString = queryString;
      this.gridDuocPhamXuat.search();
    }

  }

  clearSearchGrid2(event: any) {
    if (event != undefined && (event == null || event == "")) {
      if (this.searchString2 == "" || this.searchString2 == null) {
        this.lstXuatKhoSearch = JSON.parse(JSON.stringify(this.lstXuatKho));
        this.setDataXuatKho();
      }
    }
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.TimkiemNangCao();
    }
  }

  dieuChuyenTungDuocPhamGrid1(dataItem: any) {
    this.validationErrors = [];
    this.yeuCauXuatKhoDuocPhamChiTietVoSearch.DuocPhamBenhViens.push(dataItem);
    this.lstXuatKhoSearch.push(dataItem);
    this.lstXuatKho.push(dataItem);
    this.timKiemGrid2();
  }

  dieuChuyenTungDuocPhamGrid2(dataItem: any) {
    this.validationErrors = [];
    this.lstXuatKho = this.lstXuatKho.filter(o => o != dataItem);
    this.lstXuatKhoSearch = this.lstXuatKhoSearch.filter(o => o != dataItem);
    this.yeuCauXuatKhoDuocPhamChiTietVoSearch.DuocPhamBenhViens.splice(this.yeuCauXuatKhoDuocPhamChiTietVoSearch.DuocPhamBenhViens.findIndex((x: any) => x == dataItem), 1);
    this.timKiemGrid2();
  }

  timKiemGrid2() {
    if (this.searchString2 == undefined || this.searchString2 == null) {
      this.setDataXuatKho();
    }
    else {
      let search = this.searchString2.toLowerCase().trim();
      this.lstXuatKhoSearch = this.lstXuatKho.filter(o =>
        o.Ten.toLowerCase().trim().indexOf(search) != -1
        || o.Ma.toLowerCase().trim().indexOf(search) != -1);
      this.setDataXuatKho();
    }
  }

  setDataXuatKho() {  
    this.TimkiemNangCao();
    this.gridDataSourceThuocKhac = [];
    let dataGrid = this.lstXuatKhoSearch;
    this.gridDataSourceThuocKhac = {
      data: dataGrid,
      total: dataGrid.length,
    }
    if (this.gridDataSourceThuocKhac.data.length > 0) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
    this.refreshGrid();

  }

  refreshGrid() {
    if (this.gridResult != undefined) {
      this.gridResult.setDataSource();
    }
  }

  addingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closepopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  dieuChuyenDuocPhamTheoNhomGrid(dataItem: any, gridNumber: number) {
    let model = {
      YeuCauXuatKhoDuocPhamChiTiets: dataItem.items
    };
    this.addingPage();
    this.apiService.post<any>("XuatKhoDuocPhamKhac/XuatDuocPhamTheoNhom", model).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          resultData.YeuCauXuatKhoDuocPhamChiTiets.forEach((element: any) => {
            if (gridNumber == 1) {
              this.lstXuatKhoSearch.push(element);
              this.lstXuatKho.push(element);
              this.yeuCauXuatKhoDuocPhamChiTietVoSearch.DuocPhamBenhViens.push(element);
            }
            else {
              this.lstXuatKho.splice(this.lstXuatKho.findIndex((x: any) =>
                x.DuocPhamBenhVienId == element.DuocPhamBenhVienId
                && x.Ten == element.Ten
                && x.Ma == element.Ma
                && x.SoDangKy == element.SoDangKy
                && x.DVT == element.DVT
                && x.LaDuocPhamBHYT == element.LaDuocPhamBHYT
                && x.HanSuDung == element.HanSuDung
              ), 1);
              this.lstXuatKhoSearch.splice(this.lstXuatKhoSearch.findIndex((x: any) => x.DuocPhamBenhVienId == element.DuocPhamBenhVienId
                && x.Ten == element.Ten
                && x.Ma == element.Ma
                && x.SoDangKy == element.SoDangKy
                && x.DVT == element.DVT
                && x.LaDuocPhamBHYT == element.LaDuocPhamBHYT
                && x.HanSuDung == element.HanSuDung
              ), 1);
              this.yeuCauXuatKhoDuocPhamChiTietVoSearch.DuocPhamBenhViens.splice(this.yeuCauXuatKhoDuocPhamChiTietVoSearch.DuocPhamBenhViens.findIndex((x: any) => x.DuocPhamBenhVienId == element.DuocPhamBenhVienId
                && x.Ten == element.Ten
                && x.Ma == element.Ma
                && x.SoDangKy == element.SoDangKy
                && x.DVT == element.DVT
                && x.LaDuocPhamBHYT == element.LaDuocPhamBHYT
                && x.HanSuDung == element.HanSuDung
              ), 1);

            }
          });
          this.closepopupLoadingData();
          this.timKiemGrid2();
        }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closepopupLoadingData();
      });

  }

  getById(id: number, trangThai: boolean) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.addingPage();
      if (trangThai) {
        self.apiService.get<any>("XuatKhoDuocPhamKhac/GetXuatKhoDuocPhamKhac?id=" + id).subscribe(
          resultData => {
            if (resultData != undefined && resultData != null) {
              self.disabled = true;
              self.closepopupLoadingData();
              self.yeuCauXuatKhoKhac = resultData;
            }
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
            self.closepopupLoadingData();
          });
      } else {
        self.apiService.get<any>("XuatKhoDuocPhamKhac/GetYeuCauXuatKhoDuocPhamKhac?id=" + id).subscribe(
          resultData => {
            if (resultData != undefined && resultData != null) {
              self.disabled = true;
              self.closepopupLoadingData();
              self.yeuCauXuatKhoKhac = resultData;
              resultData.YeuCauXuatKhoDuocPhamChiTietHienThis.forEach(element => {
                self.lstXuatKhoSearch.push(element);
                self.lstXuatKho.push(element);
                self.yeuCauXuatKhoDuocPhamChiTietVoSearch.DuocPhamBenhViens.push(element);
              });
              if (self.yeuCauXuatKhoKhac.TraNCC == true) {
                self.yeuCauXuatKhoDuocPhamChiTietVoSearch.TraNCC = self.yeuCauXuatKhoKhac.TraNCC;
                self.yeuCauXuatKhoDuocPhamChiTietVoSearch.NhaThauId = self.yeuCauXuatKhoKhac.NhaThauId;
                self.yeuCauXuatKhoDuocPhamChiTietVoSearch.SoChungTu = self.yeuCauXuatKhoKhac.SoChungTu;
              }
              self.timKiemGrid2()
            }
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
            self.closepopupLoadingData();
          });
      }

    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  onKeyGrid3(event: any) {
    if (event.key == "Enter") {
      this.timKiem3();
    }
  }

  searchChanges3(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.timKiem3();
    }
  }

  timKiem3() {
    this.xuatKhoKhacGridDaDuyet.XuatKhoDuocPhamId = this.id;
    var queryString = JSON.stringify(this.xuatKhoKhacGridDaDuyet);
    if (this.gridDuocPhamXuatDaDuyet != undefined && this.gridDuocPhamXuatDaDuyet != null) {
      this.gridDuocPhamXuatDaDuyet._additionalSearchString = queryString;
      this.gridDuocPhamXuatDaDuyet.search();
    }
  }
  clearValidator() {
    this.validationErrors = [];
  }

  TooltipCustom(dataItem: any) {
    this.apiService.post<any>("XuatKhoDuocPhamKhac/GetSoLuongTonThucTe", dataItem).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.sLTonThucTe = resultData;
        }
      }
    );
  }

  khoXuatModelChange(dataItem: number) {
    if (dataItem != undefined && dataItem != null) {
      this.yeuCauXuatKhoDuocPhamChiTietVoSearch.KhoXuatId = dataItem;
      this.apiService.get<any>("XuatKhoDuocPhamKhac/GetLoaiKho?khoId=" + dataItem).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            if (this.yeuCauXuatKhoKhac.LoaiKho != EnumLoaiKho.KhoTongDuocPhamCap1
              && this.yeuCauXuatKhoKhac.LoaiKho != EnumLoaiKho.KhoTongDuocPhamCap2
              && this.yeuCauXuatKhoKhac.LoaiKho != EnumLoaiKho.KhoTongVTYTCap2
              && this.yeuCauXuatKhoKhac.LoaiKho != EnumLoaiKho.NhaThuoc
            ) {
              this.yeuCauXuatKhoKhac.LoaiKho = resultData;
            }
          }
        }
      );
    } else {
      this.yeuCauXuatKhoKhac.LoaiKho = null
      this.yeuCauXuatKhoDuocPhamChiTietVoSearch.KhoXuatId = null;
    }
    var queryString = JSON.stringify(this.yeuCauXuatKhoDuocPhamChiTietVoSearch);
    if (this.gridDuocPhamXuat != undefined && this.gridDuocPhamXuat != null) {
      this.gridDuocPhamXuat._additionalSearchString = queryString;
      this.gridDuocPhamXuat.search();
    }
  } 

  nhaThauChange() {
    this.yeuCauXuatKhoKhac.NhapKhoDuocPhamId = null;
  }

  soHoaDonChange(data: any) {
    this.yeuCauXuatKhoDuocPhamChiTietVoSearch.TraNCC = this.yeuCauXuatKhoKhac.TraNCC;
    this.yeuCauXuatKhoDuocPhamChiTietVoSearch.NhaThauId = this.yeuCauXuatKhoKhac.NhaThauId;
    if (data != undefined && data != null) {
      this.yeuCauXuatKhoDuocPhamChiTietVoSearch.SoChungTu = data.DisplayName;
      this.yeuCauXuatKhoKhac.SoChungTu = data.DisplayName;
    } else {
      this.yeuCauXuatKhoDuocPhamChiTietVoSearch.SoChungTu = null;
      this.yeuCauXuatKhoKhac.SoChungTu = null;
    }
    var queryString = JSON.stringify(this.yeuCauXuatKhoDuocPhamChiTietVoSearch);
    if (this.gridDuocPhamXuat != undefined && this.gridDuocPhamXuat != null) {
      this.gridDuocPhamXuat._additionalSearchString = queryString;
      this.gridDuocPhamXuat.search();
    }
  }

  traNCCChange(event: any) {
    if (event != true) {
      this.yeuCauXuatKhoKhac.NhaThauId = null;
      this.yeuCauXuatKhoDuocPhamChiTietVoSearch.NhaThauId = this.yeuCauXuatKhoKhac.NhaThauId;
      this.yeuCauXuatKhoDuocPhamChiTietVoSearch.SoChungTu = null;
      var queryString = JSON.stringify(this.yeuCauXuatKhoDuocPhamChiTietVoSearch);
      if (this.gridDuocPhamXuat != undefined && this.gridDuocPhamXuat != null) {
        this.gridDuocPhamXuat._additionalSearchString = queryString;
        this.gridDuocPhamXuat.search();
      }
    }
  }

  getSharedData() {
    this.yeuCauXuatKhoKhac.YeuCauXuatKhoDuocPhamChiTiets = new Array<YeuCauXuatKhoDuocPhamChiTiet>();
    this.lstXuatKho.forEach(element => {
      let yeuCauXuatKhoKhacChiTiet = new YeuCauXuatKhoDuocPhamChiTiet();
      yeuCauXuatKhoKhacChiTiet.Id = element.Id;
      yeuCauXuatKhoKhacChiTiet.DuocPhamBenhVienId = element.DuocPhamBenhVienId;
      yeuCauXuatKhoKhacChiTiet.LaDuocPhamBHYT = element.LaDuocPhamBHYT;
      yeuCauXuatKhoKhacChiTiet.SoLuongXuat = element.SoLuongXuat;
      yeuCauXuatKhoKhacChiTiet.KhoXuatId = this.yeuCauXuatKhoKhac.KhoXuatId;
      yeuCauXuatKhoKhacChiTiet.SoLo = element.SoLo;
      yeuCauXuatKhoKhacChiTiet.Ma = element.Ma;
      yeuCauXuatKhoKhacChiTiet.HanSuDung = element.HanSuDung;
      yeuCauXuatKhoKhacChiTiet.MayXetNghiemId = element.XetNghiemIdDauTienMayXetNghiem;
      this.yeuCauXuatKhoKhac.YeuCauXuatKhoDuocPhamChiTiets.push(yeuCauXuatKhoKhacChiTiet);
    });
    return this.yeuCauXuatKhoKhac;
  }

}
