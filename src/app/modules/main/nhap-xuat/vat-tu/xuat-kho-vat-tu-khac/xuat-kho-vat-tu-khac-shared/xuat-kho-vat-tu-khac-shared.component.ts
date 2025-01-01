import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icRight from '@iconify/icons-ic/chevron-right';
import icRightLast from '@iconify/icons-ic/last-page';
import icLeft from '@iconify/icons-ic/chevron-left';
import icLeftLast from '@iconify/icons-ic/first-page';
import icSearch from '@iconify/icons-ic/twotone-search';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icInfo from '@iconify/icons-ic/baseline-info';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { XuatKhoKhacGridDaDuyet, XuatKhoVatTuKhac, YeuCauXuatKhoVatTuChiTiet, YeuCauXuatKhoVatTuChiTietVoSearch, YeuCauXuatKhoVatTuGridVo } from '../xuat-kho-vat-tu-khac.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { EnumLoaiKho } from 'src/app/shared/enum/loai-kho.enum';

@Component({
  selector: 'app-xuat-kho-vat-tu-khac-shared',
  templateUrl: './xuat-kho-vat-tu-khac-shared.component.html',
  styleUrls: ['./xuat-kho-vat-tu-khac-shared.component.scss']
})
export class XuatKhoVatTuKhacSharedComponent implements OnInit {
  documentType: DocumentType;
  yeuCauXuatKhoKhac: XuatKhoVatTuKhac = new XuatKhoVatTuKhac();
  yeuCauXuatKhoVatTuChiTietVoSearch: YeuCauXuatKhoVatTuChiTietVoSearch = new YeuCauXuatKhoVatTuChiTietVoSearch();
  lstXuatKhoSearch: YeuCauXuatKhoVatTuGridVo[] = new Array<YeuCauXuatKhoVatTuGridVo>();
  lstXuatKho: YeuCauXuatKhoVatTuGridVo[] = new Array<YeuCauXuatKhoVatTuGridVo>();
  xuatKhoKhacGridDaDuyet: XuatKhoKhacGridDaDuyet = new XuatKhoKhacGridDaDuyet();
  disabled: boolean = false;
  popupLoadingData: any = null;
  yeuCauXuatKhacVatTuId: number = 0;
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
  gridDataSourceVatTuKhac: any = {
    data: [],
    total: 0
  }
  sort: SortDescriptor[] = [{
    field: 'Ten',
    dir: 'desc'
  }];
  sLTonThucTe: number = 0;
  urlGetData = "XuatKhoVatTuKhac/GetDataForGridAsyncVatTuDaChon";
  urlGetTotal = "XuatKhoVatTuKhac/GetTotalPageForGridAsyncVatTuDaChon";

  urlGetDataDaDuyet = "XuatKhoVatTuKhac/GetDataForGridChildAsyncDaDuyet";
  urlGetTotalDaDuyet = "XuatKhoVatTuKhac/GetTotalPageForGridChildAsyncDaDuyet";

  groups: GroupDescriptor[] = [{ field: 'TenNhom' }];

  @ViewChild('gridVatTuXuat', { read: GridComponent, static: false }) gridVatTuXuat: GridComponent;
  @ViewChild('gridResult', { read: GridComponent, static: false }) gridResult: GridComponent;
  @ViewChild('gridVatTuXuatDaDuyet', { read: GridComponent, static: false }) gridVatTuXuatDaDuyet: GridComponent;

  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('tenNhom2GroupHeaderTemplate', { static: true }) tenNhom2GroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('transferTemplate', { static: true }) transferTemplate: TemplateRef<any>;
  @ViewChild('transferTemplate2', { static: true }) transferTemplate2: TemplateRef<any>;
  @ViewChild('soLuongXuatGrid1Template', { static: true }) soLuongXuatGrid1Template: TemplateRef<any>;
  @ViewChild('soLuongXuatGrid2Template', { static: true }) soLuongXuatGrid2Template: TemplateRef<any>;
  @ViewChild('soLuongXuatDaDuyetTemplate', { static: true }) soLuongXuatDaDuyetTemplate: TemplateRef<any>;
  @ViewChild('hsdTemplate', { static: true }) hsdTemplate: TemplateRef<any>;
  @ViewChild('slTonThucTeTemplate', { static: true }) slTonThucTeTemplate: TemplateRef<any>;
  @ViewChild('sLTonTemplate', { static: true }) sLTonTemplate: TemplateRef<any>;

  @Input() isCreate: boolean;
  @Input() validationErrors: any[] = [];
  @Input() trangThaiVo: any;

  id: number = 0;
  tinhTrang: number = 0;
  format = "n2";


  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private authService: AuthService,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.XuatKhoVatTuKhac;
    this.route.queryParams.subscribe(param => {
      this.id = param['Id'];
      this.tinhTrang = param['F'];
      if (!this.isCreate) {
        if (this.tinhTrang == 1) {
          this.xuatKhoKhacGridDaDuyet.XuatKhoVatTuId = this.id;
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
      { Field: "Ten", Title: "Vật tư", Width: 100, Sortable: false, ShowTooltip: true },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
      { Field: "SoLuongTon", Title: "SL tồn", Width: 70, Sortable: false, Template: this.sLTonTemplate },
      { Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: true, Template: this.soLuongXuatGrid1Template },
      { Field: "Id", Title: "", Width: 30, Sortable: true, Template: this.transferTemplate },
    ];
    this.gridResultColumns = [
      { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhom2GroupHeaderTemplate },
      { Field: "Id", Title: "", Width: 30, Sortable: false, Template: this.transferTemplate2 },
      { Field: "Ma", Title: "Mã", Width: 40, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "Vật tư", Width: 100, Sortable: false, ShowTooltip: true },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
      { Field: "SoLuongTon", Title: "SL tồn", Width: 70, Sortable: false, Template: this.slTonThucTeTemplate },
      { Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: false, Template: this.soLuongXuatGrid2Template },
    ];

    this.gridResultDaDuyetColumns = [
      { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ma", Title: "Mã", Width: 40, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
      { Field: "SoLuongXuat", Title: "SL Xuất", Width: 150, Sortable: false },
      { Field: "SoPhieu", Title: "Số phiếu", Width: 150, Sortable: false },
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

  dieuChuyenTungVatTuGrid1(dataItem: any) {
    this.validationErrors = [];
    this.yeuCauXuatKhoVatTuChiTietVoSearch.VatTuBenhViens.push(dataItem);
    this.lstXuatKhoSearch.push(dataItem);
    this.lstXuatKho.push(dataItem);
    this.timKiemGrid2();
  }

  dieuChuyenTungVatTuGrid2(dataItem: any) {
    this.validationErrors = [];
    this.lstXuatKho = this.lstXuatKho.filter(o => o != dataItem);
    this.lstXuatKhoSearch = this.lstXuatKhoSearch.filter(o => o != dataItem);
    this.yeuCauXuatKhoVatTuChiTietVoSearch.VatTuBenhViens.splice(this.yeuCauXuatKhoVatTuChiTietVoSearch.VatTuBenhViens.findIndex((x: any) => x == dataItem), 1);
    this.timKiemGrid2();
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

  getById(id: number, trangThai: boolean) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.addingPage();
      if (trangThai) {
        self.apiService.get<any>("XuatKhoVatTuKhac/GetXuatKhoVatTuKhac?id=" + id).subscribe(
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
        self.apiService.get<any>("XuatKhoVatTuKhac/GetYeuCauXuatKhoVatTuKhac?id=" + id).subscribe(
          resultData => {
            if (resultData != undefined && resultData != null) {
              self.disabled = true;
              self.closepopupLoadingData();
              self.yeuCauXuatKhoKhac = resultData;
              resultData.YeuCauXuatKhoVatTuChiTietHienThis.forEach(element => {
                this.lstXuatKhoSearch.push(element);
                this.lstXuatKho.push(element);
                this.yeuCauXuatKhoVatTuChiTietVoSearch.VatTuBenhViens.push(element);
              });
              if (self.yeuCauXuatKhoKhac.TraNCC == true) {
                self.yeuCauXuatKhoVatTuChiTietVoSearch.TraNCC = self.yeuCauXuatKhoKhac.TraNCC;
                self.yeuCauXuatKhoVatTuChiTietVoSearch.NhaThauId = self.yeuCauXuatKhoKhac.NhaThauId;
                self.yeuCauXuatKhoVatTuChiTietVoSearch.SoChungTu = self.yeuCauXuatKhoKhac.SoChungTu;
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
    this.gridDataSourceVatTuKhac = [];
    let dataGrid = this.lstXuatKhoSearch;
    this.gridDataSourceVatTuKhac = {
      data: dataGrid,
      total: dataGrid.length,
    }
    if (this.gridDataSourceVatTuKhac.data.length > 0) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
    this.refreshGrid();

  }

  TimkiemNangCao() {
    this.yeuCauXuatKhoVatTuChiTietVoSearch.KhoXuatId = this.yeuCauXuatKhoKhac.KhoXuatId;
    if (this.yeuCauXuatKhoVatTuChiTietVoSearch.KhoXuatId == undefined || this.yeuCauXuatKhoVatTuChiTietVoSearch.KhoXuatId == null) {
      this.timKiemGrid2();
    }
    var queryString = JSON.stringify(this.yeuCauXuatKhoVatTuChiTietVoSearch);
    if (this.gridVatTuXuat != undefined && this.gridVatTuXuat != null) {
      this.gridVatTuXuat._additionalSearchString = queryString;
      this.gridVatTuXuat.search();
    }
  }

  refreshGrid() {
    if (this.gridResult != undefined) {
      this.gridResult.setDataSource();
    }
  }

  dieuChuyenVatTuTheoNhomGrid(dataItem: any, gridNumber: number) {
    let model = {
      YeuCauXuatKhoVatTuChiTiets: dataItem.items
    };
    this.addingPage();
    this.apiService.post<any>("XuatKhoVatTuKhac/XuatVatTuTheoNhom", model).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          resultData.YeuCauXuatKhoVatTuChiTiets.forEach((element: any) => {
            if (gridNumber == 1) {
              this.lstXuatKhoSearch.push(element);
              this.lstXuatKho.push(element);
              this.yeuCauXuatKhoVatTuChiTietVoSearch.VatTuBenhViens.push(element);
            }
            else {
              this.lstXuatKho.splice(this.lstXuatKho.findIndex((x: any) =>
                x.VatTuBenhVienId == element.VatTuBenhVienId
                && x.Ten == element.Ten
                && x.Ma == element.Ma
                && x.DVT == element.DVT
                && x.LaVatTuBHYT == element.LaVatTuBHYT
                && x.HanSuDung == element.HanSuDung
              ), 1);
              this.lstXuatKhoSearch.splice(this.lstXuatKhoSearch.findIndex((x: any) => x.VatTuBenhVienId == element.VatTuBenhVienId
                && x.Ten == element.Ten
                && x.Ma == element.Ma
                && x.DVT == element.DVT
                && x.LaVatTuBHYT == element.LaVatTuBHYT
                && x.HanSuDung == element.HanSuDung
              ), 1);
              this.yeuCauXuatKhoVatTuChiTietVoSearch.VatTuBenhViens.splice(this.yeuCauXuatKhoVatTuChiTietVoSearch.VatTuBenhViens.findIndex((x: any) => x.VatTuBenhVienId == element.VatTuBenhVienId
                && x.Ten == element.Ten
                && x.Ma == element.Ma
                && x.DVT == element.DVT
                && x.LaVatTuBHYT == element.LaVatTuBHYT
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
    this.xuatKhoKhacGridDaDuyet.XuatKhoVatTuId = this.id;
    var queryString = JSON.stringify(this.xuatKhoKhacGridDaDuyet);
    if (this.gridVatTuXuatDaDuyet != undefined && this.gridVatTuXuatDaDuyet != null) {
      this.gridVatTuXuatDaDuyet._additionalSearchString = queryString;
      this.gridVatTuXuatDaDuyet.search();
    }
  }
  clearValidator() {
    this.validationErrors = [];
  }

  TooltipCustom(dataItem: any) {
    this.apiService.post<any>("XuatKhoVatTuKhac/GetSoLuongTonThucTe", dataItem).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.sLTonThucTe = resultData;
        }
      }
    );
  }

  khoXuatSelectChange(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.yeuCauXuatKhoKhac.LoaiKho = dataItem.LoaiKho;
      this.yeuCauXuatKhoVatTuChiTietVoSearch.KhoXuatId = dataItem.KeyId;
    } else {
      this.yeuCauXuatKhoKhac.LoaiKho = null
      this.yeuCauXuatKhoVatTuChiTietVoSearch.KhoXuatId = null;
    }
    var queryString = JSON.stringify(this.yeuCauXuatKhoVatTuChiTietVoSearch);
    if (this.gridVatTuXuat != undefined && this.gridVatTuXuat != null) {
      this.gridVatTuXuat._additionalSearchString = queryString;
      this.gridVatTuXuat.search();
    }
  }

  khoXuatModelChange(dataItem: number) {
    if (dataItem != undefined && dataItem != null) {
      this.yeuCauXuatKhoVatTuChiTietVoSearch.KhoXuatId = dataItem;
      this.apiService.get<any>("XuatKhoDuocPhamKhac/GetLoaiKho?khoId=" + dataItem).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            if (resultData != undefined && resultData != null) {
              if (this.yeuCauXuatKhoKhac.LoaiKho != EnumLoaiKho.KhoTongVTYTCap1
                && this.yeuCauXuatKhoKhac.LoaiKho != EnumLoaiKho.KhoTongDuocPhamCap2
                && this.yeuCauXuatKhoKhac.LoaiKho != EnumLoaiKho.KhoTongVTYTCap2
                && this.yeuCauXuatKhoKhac.LoaiKho != EnumLoaiKho.NhaThuoc
              ) {
                this.yeuCauXuatKhoKhac.LoaiKho = resultData;
              }
            }
          }
        }
      );
    } else {
      this.yeuCauXuatKhoKhac.LoaiKho = null
      this.yeuCauXuatKhoVatTuChiTietVoSearch.KhoXuatId = null;
    }
    var queryString = JSON.stringify(this.yeuCauXuatKhoVatTuChiTietVoSearch);
    if (this.gridVatTuXuat != undefined && this.gridVatTuXuat != null) {
      this.gridVatTuXuat._additionalSearchString = queryString;
      this.gridVatTuXuat.search();
    }
  }

  traNCCChange(event: any) {
    if (event != true) {
      this.yeuCauXuatKhoKhac.NhaThauId = null;
      this.yeuCauXuatKhoVatTuChiTietVoSearch.NhaThauId = this.yeuCauXuatKhoKhac.NhaThauId;
      this.yeuCauXuatKhoVatTuChiTietVoSearch.SoChungTu = null;
      var queryString = JSON.stringify(this.yeuCauXuatKhoVatTuChiTietVoSearch);
      if (this.gridVatTuXuat != undefined && this.gridVatTuXuat != null) {
        this.gridVatTuXuat._additionalSearchString = queryString;
        this.gridVatTuXuat.search();
      }
    }
  }

  nhaThauChange() {
    this.yeuCauXuatKhoKhac.NhapKhoVatTuId = null;
  }

  soHoaDonChange(data: any) {
    this.yeuCauXuatKhoVatTuChiTietVoSearch.TraNCC = this.yeuCauXuatKhoKhac.TraNCC;
    this.yeuCauXuatKhoVatTuChiTietVoSearch.NhaThauId = this.yeuCauXuatKhoKhac.NhaThauId;
    if (data != undefined && data != null) {
      this.yeuCauXuatKhoVatTuChiTietVoSearch.SoChungTu = data.DisplayName;
      this.yeuCauXuatKhoKhac.SoChungTu = data.DisplayName;
    } else {
      this.yeuCauXuatKhoVatTuChiTietVoSearch.SoChungTu = null;
      this.yeuCauXuatKhoKhac.SoChungTu = null;
    }
    var queryString = JSON.stringify(this.yeuCauXuatKhoVatTuChiTietVoSearch);
    if (this.gridVatTuXuat != undefined && this.gridVatTuXuat != null) {
      this.gridVatTuXuat._additionalSearchString = queryString;
      this.gridVatTuXuat.search();
    }
  }

  getSharedData() {
    this.yeuCauXuatKhoKhac.YeuCauXuatKhoVatTuChiTiets = new Array<YeuCauXuatKhoVatTuChiTiet>();
    this.lstXuatKho.forEach(element => {
      let yeuCauXuatKhoKhacChiTiet = new YeuCauXuatKhoVatTuChiTiet();
      yeuCauXuatKhoKhacChiTiet.Id = element.Id;
      yeuCauXuatKhoKhacChiTiet.VatTuBenhVienId = element.VatTuBenhVienId;
      yeuCauXuatKhoKhacChiTiet.LaVatTuBHYT = element.LaVatTuBHYT;
      yeuCauXuatKhoKhacChiTiet.SoLuongXuat = element.SoLuongXuat;
      yeuCauXuatKhoKhacChiTiet.KhoXuatId = this.yeuCauXuatKhoKhac.KhoXuatId;
      yeuCauXuatKhoKhacChiTiet.SoLo = element.SoLo;
      yeuCauXuatKhoKhacChiTiet.Ma = element.Ma;
      yeuCauXuatKhoKhacChiTiet.HanSuDung = element.HanSuDung;
      this.yeuCauXuatKhoKhac.YeuCauXuatKhoVatTuChiTiets.push(yeuCauXuatKhoKhacChiTiet);
    });
    return this.yeuCauXuatKhoKhac;
  }

}
