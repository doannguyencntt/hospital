import { Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { YeuCauDuocPhamBenhVienViewModel, YeuCauLinhBuDuocPham, YeuCauLinhBuDuocPhamChiTiet, YeuCauLinhBuDuocPhamSearch, YeuCauLinhDuocPham, YeuCauLinhDuocPhamChiTiet } from '../yeu-cau-linh-thuoc.model';
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
import { CommonService } from 'src/app/core/utilities/common.helper';

@Component({
  selector: 'app-phieu-linh-thuoc-bu-shared',
  templateUrl: './phieu-linh-thuoc-bu-shared.component.html',
  styleUrls: ['./phieu-linh-thuoc-bu-shared.component.scss']
})
export class PhieuLinhThuocBuSharedComponent implements OnInit {
  yeuCauLinhBuDuocPham: YeuCauLinhBuDuocPham = new YeuCauLinhBuDuocPham();
  yeuCauLinhBuDuocPhamSearch: YeuCauLinhBuDuocPhamSearch = new YeuCauLinhBuDuocPhamSearch();
  validationErrors: any;
  documentType: DocumentType;
  linhTuKhoId: number = null;
  linhVeKhoId: number = null;
  linhVeKhoPreviousId: number = null;
  dieuKienLoadGridDuocPham: any = null;
  phieuLinhId: number = 0;
  icWarning = icWarning;
  trangThai: any = null;

  popupLoadingData: any;
  popupLoadingDataDaDuyet: any;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  lstDuocPhamGrid: YeuCauLinhBuDuocPhamChiTiet[] = [];
  urlGetDataGrid: string = "YeuCauLinhDuocPham/GetYeuCauDuocPhamBenhVienDataForGridAsync";
  urlGetTotalPageGrid: string = "YeuCauLinhDuocPham/GetYeuCauDuocPhamBenhVienTotalPageForGridAsync";
  urlGetDataGridChild: string = "YeuCauLinhDuocPham/GetBenhNhanTheoDuocPhamDataForGridAsync";
  urlGetTotalPageGridChild: string = "YeuCauLinhDuocPham/GetBenhNhanTheoDuocPhamTotalPageForGridAsync";

  groups: GroupDescriptor[] = [{ field: 'Nhom' }];

  @ViewChild('gridDuocPham', { static: true }) gridDuocPham: GridComponent;
  @ViewChild('gridDuocPhamTuChoi', { static: true }) gridDuocPhamTuChoi: GridComponent;
  @ViewChild('slYeuCauTemplate', { static: true }) slYeuCauTemplate: TemplateRef<any>;
  @ViewChild('slYeuCauLinhThucTeTemplate', { static: true }) slYeuCauLinhThucTeTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;

  sortChild: SortDescriptor[] = [{ field: 'STT', dir: 'asc' }];

  @Input() isCreate: boolean;
  @Input() validationErrorsLinhBu: any;
  @Input() trangThaiVo: any;
  @Output() hideDuyetbtn: EventEmitter<any> = new EventEmitter<any>();
  @Output() disabledNguoiTaoPhieu: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhBuDuocPham;
    this.yeuCauLinhBuDuocPham = new YeuCauLinhBuDuocPham();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.yeuCauLinhBuDuocPham.LaNguoiTaoPhieu = false;
      this.getById(id);
      this.phieuLinhId = id;
    }
    this.getCurrentUser();
    this.gridColumns = [
      { Field: 'CheckBox', Title: '', Width: 50, Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && !(this.trangThaiVo.TrangThai == null)) },
      { Field: 'STT', Title: 'STT', Width: 50, Sortable: false, Template: this.sttTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai != null) },
      { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180, ShowTooltip: true, Sortable: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 180, ShowTooltip: true },
      { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
      { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
      // { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "DonViTinh", Title: "ĐVT", Width: 60 },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 100 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Template: this.slYeuCauTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true) },
      { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 100 },
      { Field: "SoLuongDaBu", Title: "SL đã bù", Width: 100 },
      { Field: "SoLuongYeuCau", Title: "SL yêu cầu", Width: 80, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true) },
      { Field: "SLYeuCauLinhThucTe", Title: "SL lĩnh thực tế", Width: 130, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true), Template: this.slYeuCauLinhThucTeTemplate },
      { Field: "SoLuongDuocDuyet", Title: "SL được duyệt", Width: 100, Hidden: this.isCreate || this.trangThaiVo != undefined && this.trangThaiVo != null && (this.trangThaiVo.TrangThai == null || this.trangThaiVo.TrangThai == false) },
    ]

    this.gridChildColumns = [
      { Field: "MaTN", Title: "Mã TN", Width: 120 },
      { Field: "MaBN", Title: "Mã NB", Width: 120 },
      { Field: "HoTen", Title: "Họ tên", Width: 180 },
      { Field: "DVKham", Title: "DV Khám", Width: 150, ShowTooltip: true },
      { Field: "BSKeToa", Title: "BS kê toa", Width: 80, ShowTooltip: true },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 100 },
      { Field: "NgayKe", Title: "Ngày kê", Width: 100 },
      { Field: "SL", Title: "SL cần bù", Width: 80 },
      { Field: "SLDaBu", Title: "SL đã bù", Width: 80 },
      { Field: "SLYeuCau", Title: "SL yêu cầu", Width: 130, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true) },
      { Field: "SLYeuCau", Title: "SL được duyệt", Width: 130, Hidden: this.isCreate || this.trangThaiVo != undefined && this.trangThaiVo != null && (this.trangThaiVo.TrangThai == null || this.trangThaiVo.TrangThai == false) },

    ]


    this.route.queryParams.subscribe(params => {
      let khoLinhId = params['KhoLinhId'];
      let khoBuId = params['KhoBuId'];
      if (khoLinhId != undefined && khoBuId != undefined && khoLinhId > 0 && khoBuId > 0) {
        this.yeuCauLinhBuDuocPham.KhoXuatId = parseInt(khoLinhId);
        this.yeuCauLinhBuDuocPham.KhoNhapId = parseInt(khoBuId);
        this.linhTuKhoId = parseInt(khoLinhId);
        this.linhVeKhoId = parseInt(khoBuId);
        this.ganDieuKienLoadGridDuocPham(parseInt(khoLinhId), parseInt(khoBuId));
      }
    });
  }

  getCurrentUser() {
    if (this.yeuCauLinhBuDuocPham.LaNguoiTaoPhieu == null) {
      if (this.yeuCauLinhBuDuocPham.NgayYeuCau == null) {
        this.yeuCauLinhBuDuocPham.NgayYeuCau = new Date();
      }

      if (this.yeuCauLinhBuDuocPham.NhanVienDuyetId == null) {
        this.apiService.get<any>("YeuCauLinhDuocPham/GetCurrentUser").subscribe(
          resultData => {
            if (resultData != undefined && resultData != null) {
              this.yeuCauLinhBuDuocPham.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
              this.yeuCauLinhBuDuocPham.HoTenNguoiYeuCau = resultData.HoTen;
            }
          });
      }
    }

  }

  linhTuKhoChange(event: any) {
    if (event != undefined && event != null) {
      this.linhTuKhoId = event;
    } else {
      this.linhTuKhoId = null;
    }
    this.ganDieuKienLoadGridDuocPham(this.linhTuKhoId, this.linhVeKhoId);
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
            this.yeuCauLinhBuDuocPham.KhoNhapId = event;
            this.linhVeKhoId = event;
            this.ganDieuKienLoadGridDuocPham(this.linhTuKhoId, event);
          }
          else {
            this.yeuCauLinhBuDuocPham.KhoNhapId = this.linhVeKhoPreviousId;
            this.linhVeKhoId = event;
            this.ganDieuKienLoadGridDuocPham(this.linhTuKhoId, this.linhVeKhoPreviousId);
          }
        });
      }
      else {
        this.yeuCauLinhBuDuocPham.KhoNhapId = event;
        this.linhVeKhoId = event;
        this.ganDieuKienLoadGridDuocPham(this.linhTuKhoId, event);
      }
    } else {
      this.ganDieuKienLoadGridDuocPham(this.linhTuKhoId, event);
      this.linhVeKhoId = null;
    }
  }

  ganDieuKienLoadGridDuocPham(linhTuKhoId: number, linhVeKhoId: number) {
    if (this.trangThaiVo != undefined) {
      this.yeuCauLinhBuDuocPhamSearch.TrangThai = this.trangThaiVo.TrangThai;
      this.trangThai = this.trangThaiVo.TrangThai;
    }
    // console.log("TrangThai: ", this.trangThaiVo)
    this.yeuCauLinhBuDuocPhamSearch.LinhTuKhoId = linhTuKhoId;
    this.yeuCauLinhBuDuocPhamSearch.LinhVeKhoId = linhVeKhoId;
    this.yeuCauLinhBuDuocPhamSearch.IsCreate = this.isCreate;
    this.yeuCauLinhBuDuocPhamSearch.YeuCauLinhDuocPhamId = this.phieuLinhId;
    this.dieuKienLoadGridDuocPham = JSON.stringify(this.yeuCauLinhBuDuocPhamSearch);
    if (this.yeuCauLinhBuDuocPhamSearch.TrangThai == null || (this.trangThaiVo != undefined && this.trangThaiVo.TrangThai == true)) {
      this.gridDuocPham._additionalSearchString = this.dieuKienLoadGridDuocPham;
      this.gridDuocPham.search();
    }
    if (this.trangThaiVo != undefined && this.trangThaiVo.TrangThai == false) {
      this.gridDuocPhamTuChoi._additionalSearchString = this.dieuKienLoadGridDuocPham;
      this.gridDuocPhamTuChoi.search();
    }
  }
  onDataBoundGrid(event: any) {
    if (event != undefined && event != null) {
      if (this.isCreate) {
        this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens = [];
        this.yeuCauLinhBuDuocPham.YeuCauLinhDuocPhamChiTiets = [];
        event.Data.forEach(element => {
          let yeuCauDuocPhamBenhVien = new YeuCauDuocPhamBenhVienViewModel();
          yeuCauDuocPhamBenhVien.DuocPhamBenhVienId = element.DuocPhamBenhVienId;
          yeuCauDuocPhamBenhVien.LaDuocPhamBHYT = element.LaBHYT;
          yeuCauDuocPhamBenhVien.SoLuongCanBu = element.SoLuongCanBu;
          yeuCauDuocPhamBenhVien.SoLuongTon = element.SoLuongTon;
          yeuCauDuocPhamBenhVien.KhoLinhTuId = this.linhTuKhoId;
          yeuCauDuocPhamBenhVien.KhoLinhVeId = this.linhVeKhoId;
          yeuCauDuocPhamBenhVien.SoLuongYeuCau = element.SoLuongYeuCau;
          yeuCauDuocPhamBenhVien.SoLuongDaBu = element.SoLuongDaBu;
          yeuCauDuocPhamBenhVien.SLYeuCauLinhThucTe = element.SLYeuCauLinhThucTe;
          yeuCauDuocPhamBenhVien.SLYeuCauLinhThucTeMax = element.SLYeuCauLinhThucTeMax;
          this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens.push(yeuCauDuocPhamBenhVien);
        });
        // console.log("data: ", this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens)

      } else {
        this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens = [];
        this.yeuCauLinhBuDuocPham.YeuCauLinhDuocPhamChiTiets = [];
        event.Data.forEach(element => {
          let yeuCauDuocPhamBenhVien = new YeuCauDuocPhamBenhVienViewModel();
          yeuCauDuocPhamBenhVien.DuocPhamBenhVienId = element.DuocPhamBenhVienId;
          yeuCauDuocPhamBenhVien.LaDuocPhamBHYT = element.LaBHYT;
          yeuCauDuocPhamBenhVien.SoLuongCanBu = element.SoLuongCanBu;
          yeuCauDuocPhamBenhVien.SoLuongTon = element.SoLuongTon;
          yeuCauDuocPhamBenhVien.KhoLinhTuId = this.yeuCauLinhBuDuocPham.KhoXuatId;
          yeuCauDuocPhamBenhVien.KhoLinhVeId = this.yeuCauLinhBuDuocPham.KhoNhapId;
          yeuCauDuocPhamBenhVien.SoLuongYeuCau = element.SoLuongYeuCau;
          yeuCauDuocPhamBenhVien.SoLuongDaBu = element.SoLuongDaBu;
          yeuCauDuocPhamBenhVien.SLYeuCauLinhThucTe = element.SLYeuCauLinhThucTe;
          yeuCauDuocPhamBenhVien.SLYeuCauLinhThucTeMax = element.SLYeuCauLinhThucTeMax;
          this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens.push(yeuCauDuocPhamBenhVien);
        });
      }
      if (event.Data.length > 0 && (this.yeuCauLinhBuDuocPham.KhoXuatId != null || this.yeuCauLinhBuDuocPham.KhoXuatId != undefined)
        && (this.yeuCauLinhBuDuocPham.KhoNhapId != null || this.yeuCauLinhBuDuocPham.KhoNhapId != undefined)) {
        this.hideDuyetbtn.emit(true);
      } else {
        this.hideDuyetbtn.emit(false);
      }

    }
    else {
      this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens = [];
    }
  }


  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.loadingPage();
      self.apiService.get<YeuCauLinhBuDuocPham>("YeuCauLinhDuocPham/GetYeuCauLinhDuocPhamBuTao?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            self.closePopupLoadingData();
            // console.log("data: ", resultData)
            this.yeuCauLinhBuDuocPham = resultData;
            if (this.yeuCauLinhBuDuocPham.HoTenNguoiYeuCau == null) {
              this.yeuCauLinhBuDuocPham.HoTenNguoiYeuCau = resultData.TenNhanVienYeuCau;
            }
            //console.log("yeuCauLinhBuDuocPham: ", this.yeuCauLinhBuDuocPham)
            if (this.isCreate) {
              this.linhVeKhoPreviousId = this.yeuCauLinhBuDuocPham.KhoNhapId;
            }
            if (this.yeuCauLinhBuDuocPham.LaNguoiTaoPhieu) {
              this.disabledNguoiTaoPhieu.emit(true);
            } else {
              this.disabledNguoiTaoPhieu.emit(false);
            }

            this.linhTuKhoId = this.yeuCauLinhBuDuocPham.KhoXuatId;
            this.linhVeKhoId = this.yeuCauLinhBuDuocPham.KhoNhapId;
            if (this.yeuCauLinhBuDuocPham.DuocDuyet == null || this.yeuCauLinhBuDuocPham.DuocDuyet == false) {
              this.isCreate = false;
            }
            this.ganDieuKienLoadGridDuocPham(this.yeuCauLinhBuDuocPham.KhoXuatId, this.yeuCauLinhBuDuocPham.KhoNhapId);
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

  ganSLThucTeChange(soLuong: number, duocPhamBenhVienId: number) {
    if (soLuong != undefined && soLuong != null) {
      this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens.filter(x => x.DuocPhamBenhVienId == duocPhamBenhVienId).forEach(element => {
        element.SLYeuCauLinhThucTe = soLuong;
      });
    } else {
      this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens.filter(x => x.DuocPhamBenhVienId == duocPhamBenhVienId).forEach(element => {
        element.SLYeuCauLinhThucTe = null;
      });
    }
  }

  checkAll: boolean = null;
  checkBoxDichVu(dataItem: any, event: any) {
    let index = this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens.findIndex(z => z.DuocPhamBenhVienId == dataItem.DuocPhamBenhVienId);
    this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens[index].CheckBox = event;
    let lstDataCurrent = this.gridDuocPham.getAllDataFromDatasource();
    if (lstDataCurrent.every(z => z.CheckBox)) {
      this.checkAll = true;
    } else {
      this.checkAll = false;
    }
  }

  checkBoxAllChange(event: any) {
    let lstDataCurrent = this.gridDuocPham.getAllDataFromDatasource();
    if (lstDataCurrent.length > 0) {
      lstDataCurrent.forEach(element => {
        element.CheckBox = event;
        let index = this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens.findIndex(z => z.DuocPhamBenhVienId == element.DuocPhamBenhVienId);
        this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens[index].CheckBox = event;
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
    this.gridDuocPham._additionalSearchString = queryString;
    this.gridDuocPham.search();
  }

  getSharedData() {
    this.yeuCauLinhBuDuocPham.ThoiDiemChiDinhTu = this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTu;
    this.yeuCauLinhBuDuocPham.ThoiDiemChiDinhDen = this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDen;
    return this.yeuCauLinhBuDuocPham;
  }
}
