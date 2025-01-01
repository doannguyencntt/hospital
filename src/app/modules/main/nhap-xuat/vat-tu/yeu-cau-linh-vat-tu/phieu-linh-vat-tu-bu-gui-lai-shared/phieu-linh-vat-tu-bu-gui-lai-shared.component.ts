import { Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ActivatedRoute } from '@angular/router';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icWarning from '@iconify/icons-ic/warning';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { YeuCauLinhVatTu, YeuCauLinhVatTuChiTiet, YeuCauVatTuBenhVienViewModel } from '../yeu-cau-linh-vat-tu.model';
import { YeuCauLinhBuDuocPhamSearch } from '../../../duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
@Component({
  selector: 'app-phieu-linh-vat-tu-bu-gui-lai-shared',
  templateUrl: './phieu-linh-vat-tu-bu-gui-lai-shared.component.html',
  styleUrls: ['./phieu-linh-vat-tu-bu-gui-lai-shared.component.scss']
})
export class PhieuLinhVatTuBuGuiLaiSharedComponent implements OnInit {
  yeuCauLinhBuVatTu: YeuCauLinhVatTu = new YeuCauLinhVatTu();
  yeuCauLinhBuDuocPhamSearch: YeuCauLinhBuDuocPhamSearch = new YeuCauLinhBuDuocPhamSearch();

  validationErrors: any;
  documentType: DocumentType;
  linhTuKhoId: number = null;
  linhVeKhoId: number = null;
  linhVeKhoPreviousId: number = null;
  dieuKienLoadGridVatTu: any = null;
  phieuLinhId: number = 0;
  icWarning = icWarning;
  trangThai: any = null;
  gridDataSourceVatTu: any = {
    data: [],
    total: 0
  };
  popupLoadingData: any;
  popupLoadingDataDaDuyet: any;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  urlGetDataGrid: string = "YeuCauLinhVatTu/GetYeuCauVatTuBenhVienDataForGridAsync";
  urlGetTotalPageGrid: string = "YeuCauLinhVatTu/GetYeuCauVatTuBenhVienTotalPageForGridAsync";
  urlGetDataGridChild: string = "YeuCauLinhVatTu/GetBenhNhanTheoVatTuDataForGridAsync";
  urlGetTotalPageGridChild: string = "YeuCauLinhVatTu/GetBenhNhanTheoVatTuTotalPageForGridAsync";

  groups: GroupDescriptor[] = [{ field: 'Nhom' }];

  @ViewChild('slYeuCauTemplate', { static: true }) slYeuCauTemplate: TemplateRef<any>;
  @ViewChild('gridVatTu', { static: true }) gridVatTu: GridComponent;
  @ViewChild('gridVatTuTuChoi', { static: true }) gridVatTuTuChoi: GridComponent;

  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('STTTemplateChild', { static: true }) STTTemplateChild: TemplateRef<any>;
  @ViewChild('slYeuCauLinhThucTeTemplate', { static: true }) slYeuCauLinhThucTeTemplate: TemplateRef<any>;
  @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
  sortChild: SortDescriptor[] = [{ field: 'STT', dir: 'asc' }];

  @Input() isCreate: boolean;
  @Input() validationErrorsLinhBu: any;
  @Input() trangThaiVo: any;
  @Input() isDaTao: boolean = false;
  @Output() hideDuyetbtn: EventEmitter<any> = new EventEmitter<any>();
  @Output() disabledNguoiTaoPhieu: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhBuVatTu;
    this.yeuCauLinhBuVatTu = new YeuCauLinhVatTu();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.yeuCauLinhBuVatTu.LaNguoiTaoPhieu = false;
      this.getById(id);
      this.phieuLinhId = id;
    }
    this.getCurrentUser();

    this.gridColumns = [
      // { Field: "STT", Title: "#", Width: 60, Template: this.STTTemplate },
      { Field: 'CheckBox', Title: '', Width: 50, Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && !(this.trangThaiVo.TrangThai == null)) },
      { Field: 'STT', Title: 'STT', Width: 50, Sortable: false, Template: this.STTTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai != null) },
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
      { Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Template: this.slYeuCauTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true) },
      { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 60 },
      { Field: "SoLuongDaBu", Title: "SL đã bù", Width: 100 },
      { Field: "SoLuongYeuCau", Title: "SL yêu cầu", Width: 100, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true) },
      { Field: "SLYeuCauLinhThucTe", Title: "SL lĩnh thực tế", Width: 130, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true), Template: this.slYeuCauLinhThucTeTemplate },
      { Field: "SoLuongDuocDuyet", Title: "SL được duyệt", Width: 100, Hidden: this.isCreate || this.trangThaiVo != undefined && this.trangThaiVo != null && (this.trangThaiVo.TrangThai == null || this.trangThaiVo.TrangThai == false) },
    ]

    this.gridChildColumns = [
      // { Field: "STT", Title: "#", Width: 40, Template: this.STTTemplateChild },
      { Field: "MaTN", Title: "Mã TN", Width: 120 },
      { Field: "MaBN", Title: "Mã NB", Width: 100 },
      { Field: "HoTen", Title: "Họ tên", Width: 180 },
      { Field: "DVKham", Title: "DV Khám", Width: 180 },
      { Field: "BSKeToa", Title: "BS kê vật tư", Width: 150 },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 125 },
      { Field: "NgayKe", Title: "Ngày kê", Width: 125 },
      { Field: "SL", Title: "SL cần bù", Width: 80 },
      { Field: "SLDaBu", Title: "SL đã bù", Width: 90 },
      { Field: "SLYeuCau", Title: "SL yêu cầu", Width: 90, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true) },
      { Field: "SLYeuCau", Title: "SL được duyệt", Width: 90, Hidden: this.isCreate || this.trangThaiVo != undefined && this.trangThaiVo != null && (this.trangThaiVo.TrangThai == null || this.trangThaiVo.TrangThai == false) },


    ]

    this.route.queryParams.subscribe(params => {
      let khoLinhId = params['KhoLinhId'];
      let khoBuId = params['KhoBuId'];
      if (khoLinhId != undefined && khoBuId != undefined && khoLinhId > 0 && khoBuId > 0) {
        this.yeuCauLinhBuVatTu.KhoXuatId = parseInt(khoLinhId);
        this.yeuCauLinhBuVatTu.KhoNhapId = parseInt(khoBuId);
        this.linhTuKhoId = parseInt(khoLinhId);
        this.linhVeKhoId = parseInt(khoBuId);
        this.ganDieuKienLoadGridVatTu(parseInt(khoLinhId), parseInt(khoBuId));
      }
    });
  }


  getCurrentUser() {
    if (this.yeuCauLinhBuVatTu.LaNguoiTaoPhieu == null) {
      if (this.yeuCauLinhBuVatTu.NgayYeuCau == null) {
        this.yeuCauLinhBuVatTu.NgayYeuCau = new Date();
      }
      if (this.yeuCauLinhBuVatTu.NhanVienDuyetId == null) {
        this.apiService.get<any>("YeuCauLinhVatTu/GetCurrentUserVatTu").subscribe(
          resultData => {
            if (resultData != undefined && resultData != null) {
              this.yeuCauLinhBuVatTu.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
              this.yeuCauLinhBuVatTu.HoTenNguoiYeuCau = resultData.HoTen;
            }
          });
      }
    }
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }


  linhTuKhoChange(event: any) {
    if (event != undefined && event != null) {
      this.linhTuKhoId = event;
    } else {
      this.linhTuKhoId = null;
    }
    this.ganDieuKienLoadGridVatTu(this.linhTuKhoId, this.linhVeKhoId);
  }

  linhVeKhoChange(event: any) {
    if (event != undefined && event != null) {
      this.linhVeKhoId = event;
      if (this.trangThaiVo != undefined
        && this.trangThaiVo != null
        && this.linhTuKhoId != null
        && this.linhVeKhoPreviousId != null
        && (this.trangThaiVo.TrangThai == null || this.trangThaiVo.TrangThai == false)
        && event != this.linhVeKhoPreviousId) {
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: "Bạn có chắc muốn chọn lại Kho lĩnh không? (Việc chọn lại Kho sẽ xoá bỏ hết các DL Lĩnh hiện tại trên trang này)." }
        }).afterClosed().subscribe(result => {
          if (result == "Yes") {
            this.yeuCauLinhBuVatTu.KhoNhapId = event;
            this.linhVeKhoId = event;
            this.ganDieuKienLoadGridVatTu(this.linhTuKhoId, event);
          }
          else {
            this.yeuCauLinhBuVatTu.KhoNhapId = this.linhVeKhoPreviousId;
            this.linhVeKhoId = event;
            this.ganDieuKienLoadGridVatTu(this.linhTuKhoId, this.linhVeKhoPreviousId);
          }
        });
      }
      else {
        this.yeuCauLinhBuVatTu.KhoNhapId = event;
        this.linhVeKhoId = event;
        this.ganDieuKienLoadGridVatTu(this.linhTuKhoId, event);
      }
    } else {
      this.ganDieuKienLoadGridVatTu(this.linhTuKhoId, event);
      this.linhVeKhoId = null;
    }
  }

  ganDieuKienLoadGridVatTu(linhTuKhoId: number, linhVeKhoId: number) {
    if (this.trangThaiVo != undefined) {
      this.yeuCauLinhBuDuocPhamSearch.TrangThai = this.trangThaiVo.TrangThai;
      this.trangThai = this.trangThaiVo.TrangThai;
    }
    // console.log("TrangThai: ", this.trangThaiVo)
    this.yeuCauLinhBuDuocPhamSearch.LinhTuKhoId = linhTuKhoId;
    this.yeuCauLinhBuDuocPhamSearch.LinhVeKhoId = linhVeKhoId;
    this.yeuCauLinhBuDuocPhamSearch.IsCreate = this.isCreate;
    this.yeuCauLinhBuDuocPhamSearch.YeuCauLinhVatTuId = this.phieuLinhId;
    this.dieuKienLoadGridVatTu = JSON.stringify(this.yeuCauLinhBuDuocPhamSearch);
    if (this.yeuCauLinhBuDuocPhamSearch.TrangThai == null || (this.trangThaiVo != undefined && this.trangThaiVo.TrangThai == true)) {
      this.gridVatTu._additionalSearchString = this.dieuKienLoadGridVatTu;
      this.gridVatTu.search();
    }
    if (this.trangThaiVo != undefined && this.trangThaiVo.TrangThai == false) {
      this.gridVatTuTuChoi._additionalSearchString = this.dieuKienLoadGridVatTu;
      this.gridVatTuTuChoi.search();
    }
  }


  onDataBoundGrid(event: any) {
    if (event != undefined && event != null) {
      if (this.isCreate) {
        this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens = [];
        this.yeuCauLinhBuVatTu.YeuCauLinhVatTuChiTiets = [];
        event.Data.forEach(element => {
          let yeuCauVatTuBenhVien = new YeuCauVatTuBenhVienViewModel();
          yeuCauVatTuBenhVien.VatTuBenhVienId = element.VatTuBenhVienId;
          yeuCauVatTuBenhVien.LaVatTuBHYT = element.LaBHYT;
          yeuCauVatTuBenhVien.SoLuongTon = element.SoLuongTon;
          yeuCauVatTuBenhVien.KhoLinhTuId = this.linhTuKhoId;
          yeuCauVatTuBenhVien.KhoLinhVeId = this.linhVeKhoId;
          yeuCauVatTuBenhVien.SoLuongYeuCau = element.SoLuongYeuCau;
          yeuCauVatTuBenhVien.SoLuongCanBu = element.SoLuongCanBu;
          yeuCauVatTuBenhVien.SoLuongDaBu = element.SoLuongDaBu;
          yeuCauVatTuBenhVien.SLYeuCauLinhThucTe = element.SLYeuCauLinhThucTe;
          yeuCauVatTuBenhVien.SLYeuCauLinhThucTeMax = element.SLYeuCauLinhThucTeMax;
          this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.push(yeuCauVatTuBenhVien);
        });
      } else {
        this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens = [];
        this.yeuCauLinhBuVatTu.YeuCauLinhVatTuChiTiets = [];
        event.Data.forEach(element => {
          let yeuCauVatTuBenhVien = new YeuCauVatTuBenhVienViewModel();
          yeuCauVatTuBenhVien.VatTuBenhVienId = element.VatTuBenhVienId;
          yeuCauVatTuBenhVien.LaVatTuBHYT = element.LaBHYT;
          yeuCauVatTuBenhVien.SoLuongCanBu = element.SoLuongCanBu;
          yeuCauVatTuBenhVien.SoLuongTon = element.SoLuongTon;
          yeuCauVatTuBenhVien.KhoLinhTuId = this.yeuCauLinhBuVatTu.KhoXuatId;
          yeuCauVatTuBenhVien.KhoLinhVeId = this.yeuCauLinhBuVatTu.KhoNhapId;
          yeuCauVatTuBenhVien.SoLuongYeuCau = element.SoLuongYeuCau;
          yeuCauVatTuBenhVien.SoLuongDaBu = element.SoLuongDaBu;
          yeuCauVatTuBenhVien.SLYeuCauLinhThucTe = element.SLYeuCauLinhThucTe;
          yeuCauVatTuBenhVien.SLYeuCauLinhThucTeMax = element.SLYeuCauLinhThucTeMax;
          this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.push(yeuCauVatTuBenhVien);
        });
      }
      if (event.Data.length > 0 && (this.yeuCauLinhBuVatTu.KhoXuatId != null || this.yeuCauLinhBuVatTu.KhoXuatId != undefined)
        && (this.yeuCauLinhBuVatTu.KhoNhapId != null || this.yeuCauLinhBuVatTu.KhoNhapId != undefined)) {
        this.hideDuyetbtn.emit(true);
      } else {
        this.hideDuyetbtn.emit(false);
      }
    }
    else {
      this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens = [];
    }
  }

  getById(id: number) {
    var self = this;
    self.loadingPage();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<YeuCauLinhVatTu>("YeuCauLinhVatTu/GetYeuCauLinhVatTuBuTao?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            self.closePopupLoadingData();
            // console.log("data: ", resultData)
            this.yeuCauLinhBuVatTu = resultData;
            if (this.yeuCauLinhBuVatTu.LaNguoiTaoPhieu) {
              this.disabledNguoiTaoPhieu.emit(true);
            } else {
              this.disabledNguoiTaoPhieu.emit(false);
            }
            if (this.yeuCauLinhBuVatTu.HoTenNguoiYeuCau == null) {
              this.yeuCauLinhBuVatTu.HoTenNguoiYeuCau = resultData.TenNhanVienYeuCau;
            }
            console.log("yeuCauLinhBuVatTu: ", this.yeuCauLinhBuVatTu)
            if (this.isCreate) {
              this.linhVeKhoPreviousId = this.yeuCauLinhBuVatTu.KhoNhapId;
            }

            this.linhTuKhoId = this.yeuCauLinhBuVatTu.KhoXuatId;
            this.linhVeKhoId = this.yeuCauLinhBuVatTu.KhoNhapId;
            if (this.yeuCauLinhBuVatTu.DuocDuyet == null || this.yeuCauLinhBuVatTu.DuocDuyet == false) {
              this.isCreate = false;
            }
            this.ganDieuKienLoadGridVatTu(this.yeuCauLinhBuVatTu.KhoXuatId, this.yeuCauLinhBuVatTu.KhoNhapId);
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingData();
        });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  ganSLThucTeChange(soLuong: number, vatTuBenhVienId: number) {
    if (soLuong != undefined && soLuong != null) {
      this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.filter(x => x.VatTuBenhVienId == vatTuBenhVienId).forEach(element => {
        element.SLYeuCauLinhThucTe = soLuong;
      });
    } else {
      this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.filter(x => x.VatTuBenhVienId == vatTuBenhVienId).forEach(element => {
        element.SLYeuCauLinhThucTe = null;
      });
    }
  }
  checkAll: boolean = null;
  checkBoxDichVu(dataItem: any, event: any) {
    let index = this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.findIndex(z => z.VatTuBenhVienId == dataItem.VatTuBenhVienId);
    this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens[index].CheckBox = event;
    let lstDataCurrent = this.gridVatTu.getAllDataFromDatasource();
    if (lstDataCurrent.every(z => z.CheckBox)) {
      this.checkAll = true;
    } else {
      this.checkAll = false;
    }
  }

  checkBoxAllChange(event: any) {
    let lstDataCurrent = this.gridVatTu.getAllDataFromDatasource();
    if (lstDataCurrent.length > 0) {
      lstDataCurrent.forEach(element => {
        element.CheckBox = event;
        let index = this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.findIndex(z => z.VatTuBenhVienId == element.VatTuBenhVienId);
        this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens[index].CheckBox = event;
      });

    }
  }

  thoiDiemTNChange() {
    if (this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTuFormat != null) {
      this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTu = CommonService.formatDateTime(
        this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTuFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTu = null;
    }

    if (this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDenFormat != null) {
      this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDen = CommonService.formatDateTime(
        this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDen = null;
    }
    this.checkAll = false;
    var queryString = JSON.stringify(this.yeuCauLinhBuDuocPhamSearch);
    this.gridVatTu._additionalSearchString = queryString;
    this.gridVatTu.search();
  }
  getSharedData() {
    this.yeuCauLinhBuVatTu.ThoiDiemChiDinhTu = this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTu;
    this.yeuCauLinhBuVatTu.ThoiDiemChiDinhDen = this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDen;
    return this.yeuCauLinhBuVatTu;
  }
}
