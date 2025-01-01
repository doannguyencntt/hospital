import { Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { DieuChuyenDuocPhamGridVo, DuocPhamBenhVienTheoNhom, YeuCauDieuChuyenDuocPham, YeuCauDieuChuyenDuocPhamChiTiet, YeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch } from '../dieu-chuyen-kho-noi-bo-duoc-pham.model';
import icRight from '@iconify/icons-ic/chevron-right';
import icRightLast from '@iconify/icons-ic/last-page';
import icLeft from '@iconify/icons-ic/chevron-left';
import icLeftLast from '@iconify/icons-ic/first-page';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

@Component({
  selector: 'app-dieu-chuyen-kho-noi-bo-duoc-pham-shared',
  templateUrl: './dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.html',
  styleUrls: ['./dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.scss']
})
export class DieuChuyenKhoNoiBoDuocPhamSharedComponent implements OnInit {
  yeuCauDieuChuyenDuocPham: YeuCauDieuChuyenDuocPham;
  duocPhamBenhVienTheoNhom: DuocPhamBenhVienTheoNhom = new DuocPhamBenhVienTheoNhom();

  icRight = icRight;
  icLeft = icLeft;
  icRightLast = icRightLast;
  icLeftLast = icLeftLast;
  icDelete = icDelete;
  icSearch = icSearch;
  searchCtrl = new FormControl;
  searchCtrl3 = new FormControl;

  yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch: YeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch = new YeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch();
  urlGetData = "XuatKhoDieuChuyenKhoNoiBoDuocPham/GetDataForGridAsyncDuocPhamDaChon";
  urlGetTotal = "XuatKhoDieuChuyenKhoNoiBoDuocPham/GetTotalPageForGridAsyncDuocPhamDaChon";
  additionalSearchString: string = null;
  urlGetDataDaTaoYeuCau = "XuatKhoDieuChuyenKhoNoiBoDuocPham/GetDataForGridAsyncDaTaoYeuCau";
  urlGetTotalDaTaoYeuCau = "XuatKhoDieuChuyenKhoNoiBoDuocPham/GetTotalPageForGridAsyncDaTaoYeuCau";
  lstXuatKhoSearch: DieuChuyenDuocPhamGridVo[] = new Array<DieuChuyenDuocPhamGridVo>();
  lstXuatKho: DieuChuyenDuocPhamGridVo[] = new Array<DieuChuyenDuocPhamGridVo>();
  lstXuatKhoTheoNhom: any[] = [];
  disabled: boolean = false;
  groups: GroupDescriptor[] = [{ field: 'TenNhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  // @ViewChild('gridDuocPhamDieuChuyen', { static: true }) gridDuocPhamDieuChuyen: GridComponent;
  // @ViewChild('gridResult', { static: true }) gridResult: GridComponent;
  @ViewChild('gridDuocPhamDieuChuyen', { read: GridComponent, static: false }) gridDuocPhamDieuChuyen: GridComponent;
  @ViewChild('gridResult', { read: GridComponent, static: false }) gridResult: GridComponent;

  @ViewChild('gridDuocPhamDieuChuyenDaTaoYeuCau', { read: GridComponent, static: false }) gridDuocPhamDieuChuyenDaTaoYeuCau: GridComponent;

  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('tenNhom2GroupHeaderTemplate', { static: true }) tenNhom2GroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  @ViewChild('soLuongXuatGrid2Template', { static: true }) soLuongXuatGrid2Template: TemplateRef<any>;
  @ViewChild('transferTemplate', { static: true }) transferTemplate: TemplateRef<any>;
  @ViewChild('transferTemplate2', { static: true }) transferTemplate2: TemplateRef<any>;
  @ViewChild('hsdTemplate', { static: true }) hsdTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterGrid1Template', { static: true }) thanhTienFooterGrid1Template: TemplateRef<any>;
  @ViewChild('thanhTienFooterGrid2Template', { static: true }) thanhTienFooterGrid2Template: TemplateRef<any>;
  @ViewChild('thanhTienFooterGrid3Template', { static: true }) thanhTienFooterGrid3Template: TemplateRef<any>;


  @ViewChild('soLuongXuatGrid1Template', { static: true }) soLuongXuatGrid1Template: TemplateRef<any>;
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  searchString2: string = null;
  popupLoadingData: any = null;
  dataToSumThanhTienGrid1: any[] = [];
  dataToSumThanhTienGrid2: any[] = [];
  dataToSumThanhTienGrid3: any[] = [];
  isDataDefault: boolean = true;
  public totalThanhTien(field: any, gridNumber: number) {
    if (gridNumber == 1) {
      switch (field) {
        case 'ThanhTien':
          return this.dataToSumThanhTienGrid1.reduce((sum: any, item: { ThanhTien: any; }) => sum + item.ThanhTien, 0);
      }
    } else if (gridNumber == 2) {
      switch (field) {
        case 'ThanhTien':
          return this.dataToSumThanhTienGrid2.reduce((sum: any, item: { ThanhTien: any; }) => sum + item.ThanhTien, 0);
      }
    } else {
      switch (field) {
        case 'ThanhTien':
          return this.dataToSumThanhTienGrid3.reduce((sum: any, item: { ThanhTien: any; }) => sum + item.ThanhTien, 0);
      }
    }

  };
  gridColumnsUpdate: any[] = [];
  gridColumnsUpdateDuyet: any[] = [];
  gridColumns: any[] = [];
  gridResultColumns: any[] = [];
  gridDataSourceThuocDieuChuyen: any = {
    data: [],
    total: 0
  }
  yeuCauDieuChuyenDuocPhamId: number = 0;
  documentType: DocumentType;
  @Input() isCreate: boolean;
  @Input() validationErrors: any;
  @Input() trangThaiVo: any;
  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    // console.log("this.isCreate: ", this.trangThaiVo)
    this.documentType = DocumentType.TraThuocTuBenhNhan;
    this.yeuCauDieuChuyenDuocPham = new YeuCauDieuChuyenDuocPham();
    this.getCurrentUser();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.yeuCauDieuChuyenDuocPhamId = id;
    }
    this.gridColumns = [
      { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: true, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false, ShowTooltip: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
      { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 50, Sortable: false },
      { Field: "SoLuongDieuChuyen", Title: "Sl xuất", Width: 70, Sortable: true, Template: this.soLuongXuatGrid1Template },
      { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid1Template, },
      { Field: "Action", Title: "", Width: 30, Sortable: false, Template: this.transferTemplate },
    ];

    this.gridResultColumns = [
      { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhom2GroupHeaderTemplate },
      { Field: "Action", Title: "", Width: 30, Sortable: false, Template: this.transferTemplate2 },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate, },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false, ShowTooltip: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
      { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 50, Sortable: false },
      { Field: "SoLuongDieuChuyen", Title: "Sl xuất", Width: 70, Sortable: false, Template: this.soLuongXuatGrid2Template },
      { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid2Template, },
    ];

    this.gridColumnsUpdate = [
      { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate, },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false, ShowTooltip: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
      { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 50, Sortable: false },
      { Field: "SoLuongDieuChuyen", Title: "Sl xuất", Width: 70, Sortable: false, Template: this.soLuongXuatGrid2Template },
      { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid3Template, },
      { Field: "Action", Title: "", Width: 30, Sortable: false, Template: this.actionTemplate },
    ];
    
    this.gridColumnsUpdateDuyet = [
      { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate, },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false, ShowTooltip: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
      { Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: false, Template: this.soLuongXuatGrid2Template },
      { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid3Template, },
    ];
  }

  getCurrentUser() {
    if (this.isCreate) {
      this.apiService.get<any>("YeuCauLinhDuocPham/GetCurrentUser").subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.yeuCauDieuChuyenDuocPham.NguoiXuatId = resultData.NhanVienYeuCauId;
            this.yeuCauDieuChuyenDuocPham.TenNguoiXuat = resultData.HoTen;
          }
        });
    }
  }

  khoNhapChangeChange() {
    this.validationErrors = []
  }

  onKeyGridDaTaoYeuCau(event: any) {
    if (event.key == "Enter") {
      this.TimkiemNangCao(false, this.yeuCauDieuChuyenDuocPhamId);
    }
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

  TimkiemNangCao(laGrid1: boolean = true, yeuCauDieuChuyenDuocPhamId: number = null) {
    this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.KhoXuatId = this.yeuCauDieuChuyenDuocPham.KhoXuatId;
    this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.HienThiCaThuocHetHan = this.yeuCauDieuChuyenDuocPham.HienThiCaThuocHetHan;
    if (laGrid1) {
      var queryString = JSON.stringify(this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch);
      this.gridDuocPhamDieuChuyen._additionalSearchString = queryString;
      this.gridDuocPhamDieuChuyen.search();
    } else {
      this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.YeuCauDieuChuyenDuocPhamId = yeuCauDieuChuyenDuocPhamId;
      var queryString = JSON.stringify(this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch);
      this.gridDuocPhamDieuChuyenDaTaoYeuCau._additionalSearchString = queryString;
      this.gridDuocPhamDieuChuyenDaTaoYeuCau.search();
    }

  }

  onDataBoundChildGrid1(data: any) {
    if (data != undefined && data != null) {
      this.dataToSumThanhTienGrid1 = data.Data;
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

  onDataBoundChildGrid3(data: any) {
    if (data != undefined && data != null) {
      this.dataToSumThanhTienGrid3 = data.Data;
      if (this.isDataDefault) {
        this.lstXuatKho = data.Data;
        this.isDataDefault = false;
      }
    }
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.TimkiemNangCao();
    }
  }

  searchChangesDaTaoYeuCau(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.TimkiemNangCao(false, this.yeuCauDieuChuyenDuocPhamId);
    }
  }

  soLuongXuatChange(soLuong: number, dataItem: any) {
    if (soLuong != undefined && soLuong != null) {
      dataItem.ThanhTien = soLuong * dataItem.DonGia;
    }
    else {
      dataItem.ThanhTien = 0;
    }
  }



  dieuChuyenTungDuocPhamGrid1(dataItem: any) {
    this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.DuocPhamBenhViens.push(dataItem);
    this.lstXuatKhoSearch.push(dataItem);
    this.lstXuatKho.push(dataItem);
    this.timKiemGrid2();
  }

  dieuChuyenTungDuocPhamGrid2(dataItem: any) {
    this.lstXuatKho = this.lstXuatKho.filter(o => o != dataItem);
    this.lstXuatKhoSearch = this.lstXuatKhoSearch.filter(o => o != dataItem);
    this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.DuocPhamBenhViens.splice(this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.DuocPhamBenhViens.findIndex((x: any) => x == dataItem), 1);
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
    this.gridDataSourceThuocDieuChuyen = [];
    let dataGrid = this.lstXuatKhoSearch;
    this.dataToSumThanhTienGrid2 = this.lstXuatKhoSearch;
    this.gridDataSourceThuocDieuChuyen = {
      data: dataGrid,
      total: dataGrid.length,
    }
    if (this.gridDataSourceThuocDieuChuyen.data.length > 0) {
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
      YeuCauDieuChuyenDuocPhamChiTiets: dataItem.items
    };
    this.addingPage();
    this.apiService.post<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/DieuChuyenDuocPhamTheoNhom", model).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          resultData.YeuCauDieuChuyenDuocPhamChiTiets.forEach((element: any) => {
            if (gridNumber == 1) {
              this.lstXuatKhoSearch.push(element);
              this.lstXuatKho.push(element);
              this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.DuocPhamBenhViens.push(element);
            }
            else {
              this.lstXuatKho.splice(this.lstXuatKho.findIndex((x: any) => x == element), 1);
              this.lstXuatKhoSearch.splice(this.lstXuatKhoSearch.findIndex((x: any) => x == element), 1);
              this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.DuocPhamBenhViens.splice(this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.DuocPhamBenhViens.findIndex((x: any) => x == element), 1);

            }
          });
          this.closepopupLoadingData();
          this.timKiemGrid2();
        }

      });

  }

  xoaDuocPham(dataItem: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.DuocPhamBenhViens.push(dataItem);

        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        this.TimkiemNangCao(false, this.yeuCauDieuChuyenDuocPhamId);
        this.validationErrors = [];
      }
    });
  }


  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.addingPage();
      self.apiService.get<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/GetYeuCauDieuChuyenThuoc?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            self.disabled = true;
            self.closepopupLoadingData();
            self.yeuCauDieuChuyenDuocPham = resultData;
            self.TimkiemNangCao(false, resultData.Id);
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
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  getSharedData() {
    this.yeuCauDieuChuyenDuocPham.YeuCauDieuChuyenDuocPhamChiTiets = new Array<YeuCauDieuChuyenDuocPhamChiTiet>();
    if (this.gridDuocPhamDieuChuyenDaTaoYeuCau != undefined) {
      var lstDataThuocCurrent = this.gridDuocPhamDieuChuyenDaTaoYeuCau.getAllDataFromDatasource();
    }
    this.lstXuatKho.forEach(element => {
      let yeuCauDieuChuyenDuocPhamChiTiet = new YeuCauDieuChuyenDuocPhamChiTiet();
      if (lstDataThuocCurrent != undefined && lstDataThuocCurrent.some((x: any) => x.DuocPhamBenhVienId == element.DuocPhamBenhVienId
        && x.LaDuocPhamBHYT == element.LaDuocPhamBHYT
        && x.SoLuongDieuChuyen == element.SoLuongDieuChuyen
        && x.Ten == element.Ten
        && x.Ma == element.Ma
        && x.SoDangKy == element.SoDangKy
      )) { // tìm thấy
        yeuCauDieuChuyenDuocPhamChiTiet.WillDelete = false;
      } else {
        yeuCauDieuChuyenDuocPhamChiTiet.WillDelete = true;
      }
      yeuCauDieuChuyenDuocPhamChiTiet.DonGiaNhap = element.DonGiaNhap;
      yeuCauDieuChuyenDuocPhamChiTiet.DuocPhamBenhVienId = element.DuocPhamBenhVienId;
      yeuCauDieuChuyenDuocPhamChiTiet.LaDuocPhamBHYT = element.LaDuocPhamBHYT;
      yeuCauDieuChuyenDuocPhamChiTiet.SoLuongDieuChuyen = element.SoLuongDieuChuyen;
      yeuCauDieuChuyenDuocPhamChiTiet.KhoXuatId = this.yeuCauDieuChuyenDuocPham.KhoXuatId;
      yeuCauDieuChuyenDuocPhamChiTiet.SoLo = element.SoLo;
      yeuCauDieuChuyenDuocPhamChiTiet.HanSuDung = element.HanSuDung;
      this.yeuCauDieuChuyenDuocPham.YeuCauDieuChuyenDuocPhamChiTiets.push(yeuCauDieuChuyenDuocPhamChiTiet);
    });
    return this.yeuCauDieuChuyenDuocPham;
  }
}
