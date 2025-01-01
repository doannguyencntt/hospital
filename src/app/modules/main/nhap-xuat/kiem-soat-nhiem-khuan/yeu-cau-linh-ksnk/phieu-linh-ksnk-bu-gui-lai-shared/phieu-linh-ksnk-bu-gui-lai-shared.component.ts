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
import { YeuCauLinhKSNK, YeuCauLinhKSNKChiTiet, YeuCauKSNKBenhVienViewModel, YeuCauLinhBuKSNKSearch } from '../yeu-cau-linh-ksnk.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
@Component({
  selector: 'app-phieu-linh-ksnk-bu-gui-lai-shared',
  templateUrl: './phieu-linh-ksnk-bu-gui-lai-shared.component.html',
  styleUrls: ['./phieu-linh-ksnk-bu-gui-lai-shared.component.scss']
})
export class PhieuLinhKSNKBuGuiLaiSharedComponent implements OnInit {
  yeuCauLinhBuKSNK: YeuCauLinhKSNK = new YeuCauLinhKSNK();
  yeuCauLinhBuKSNKSearch: YeuCauLinhBuKSNKSearch = new YeuCauLinhBuKSNKSearch();

  validationErrors: any;
  documentType: DocumentType;
  linhTuKhoId: number = null;
  linhVeKhoId: number = null;
  linhVeKhoPreviousId: number = null;
  dieuKienLoadGridKSNK: any = null;
  phieuLinhId: number = 0;
  icWarning = icWarning;
  trangThai: any = null;
  gridDataSourceKSNK: any = {
    data: [],
    total: 0
  };
  popupLoadingData: any;
  popupLoadingDataDaDuyet: any;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  urlGetDataGrid: string = "YeuCauLinhKSNK/GetYeuCauKSNKBenhVienDataForGridAsync";
  urlGetTotalPageGrid: string = "YeuCauLinhKSNK/GetYeuCauKSNKBenhVienTotalPageForGridAsync";
  urlGetDataGridChild: string = "YeuCauLinhKSNK/GetBenhNhanTheoKSNKDataForGridAsync";
  urlGetTotalPageGridChild: string = "YeuCauLinhKSNK/GetBenhNhanTheoKSNKTotalPageForGridAsync";

  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  loai : boolean = null;
  @ViewChild('slYeuCauTemplate', { static: true }) slYeuCauTemplate: TemplateRef<any>;
  @ViewChild('gridKSNK', { static: true }) gridKSNK: GridComponent;
  @ViewChild('gridKSNKTuChoi', { static: true }) gridKSNKTuChoi: GridComponent;

  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('STTTemplateChild', { static: true }) STTTemplateChild: TemplateRef<any>;
  @ViewChild('slYeuCauLinhThucTeTemplate', { static: true }) slYeuCauLinhThucTeTemplate: TemplateRef<any>;
  @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
  sortChild: SortDescriptor[] = [{ field: 'STT', dir: 'asc' }];
  @ViewChild('loaiTemplate', { static: true }) loaiTemplate: TemplateRef<any>;

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
    this.documentType = DocumentType.TaoYeuCauLinhBuKSNK;
    this.yeuCauLinhBuKSNK = new YeuCauLinhKSNK();

    const loaiDPVT: boolean = this.route.snapshot.params.value;
    if (loaiDPVT != undefined && loaiDPVT != null) {
     this.loai =loaiDPVT;
    }

    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.yeuCauLinhBuKSNK.LaNguoiTaoPhieu = false;
      this.getById(id);
      this.phieuLinhId = id;
    }
    this.getCurrentUser();

    this.gridColumns = [
      // { Field: "STT", Title: "#", Width: 60, Template: this.STTTemplate },
      { Field: 'CheckBox', Title: '', Width: 50, Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && !(this.trangThaiVo.TrangThai == null)) },
      { Field: 'STT', Title: 'STT', Width: 50, Sortable: false, Template: this.STTTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai != null) },
      { Field: "LoaiDuocPhamHayVatTu", Title: "Loại", Width: 180, ShowTooltip: true ,Template:this.loaiTemplate},
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
        this.yeuCauLinhBuKSNK.KhoXuatId = parseInt(khoLinhId);
        this.yeuCauLinhBuKSNK.KhoNhapId = parseInt(khoBuId);
        this.linhTuKhoId = parseInt(khoLinhId);
        this.linhVeKhoId = parseInt(khoBuId);
        this.ganDieuKienLoadGridKSNK(parseInt(khoLinhId), parseInt(khoBuId));
      }
    });
  }


  getCurrentUser() {
    if (this.yeuCauLinhBuKSNK.LaNguoiTaoPhieu == null) {
      if (this.yeuCauLinhBuKSNK.NgayYeuCau == null) {
        this.yeuCauLinhBuKSNK.NgayYeuCau = new Date();
      }
      if (this.yeuCauLinhBuKSNK.NhanVienDuyetId == null) {
        this.apiService.get<any>("YeuCauLinhKSNK/GetCurrentUserKSNK").subscribe(
          resultData => {
            if (resultData != undefined && resultData != null) {
              this.yeuCauLinhBuKSNK.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
              this.yeuCauLinhBuKSNK.HoTenNguoiYeuCau = resultData.HoTen;
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
    this.ganDieuKienLoadGridKSNK(this.linhTuKhoId, this.linhVeKhoId);
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
            this.yeuCauLinhBuKSNK.KhoNhapId = event;
            this.linhVeKhoId = event;
            this.ganDieuKienLoadGridKSNK(this.linhTuKhoId, event);
          }
          else {
            this.yeuCauLinhBuKSNK.KhoNhapId = this.linhVeKhoPreviousId;
            this.linhVeKhoId = event;
            this.ganDieuKienLoadGridKSNK(this.linhTuKhoId, this.linhVeKhoPreviousId);
          }
        });
      }
      else {
        this.yeuCauLinhBuKSNK.KhoNhapId = event;
        this.linhVeKhoId = event;
        this.ganDieuKienLoadGridKSNK(this.linhTuKhoId, event);
      }
    } else {
      this.ganDieuKienLoadGridKSNK(this.linhTuKhoId, event);
      this.linhVeKhoId = null;
    }
  }

  ganDieuKienLoadGridKSNK(linhTuKhoId: number, linhVeKhoId: number) {
    if (this.trangThaiVo != undefined) {
      this.yeuCauLinhBuKSNKSearch.TrangThai = this.trangThaiVo.TrangThai;
      this.trangThai = this.trangThaiVo.TrangThai;
    }
    // console.log("TrangThai: ", this.trangThaiVo)
    this.yeuCauLinhBuKSNKSearch.LinhTuKhoId = linhTuKhoId;
    this.yeuCauLinhBuKSNKSearch.LinhVeKhoId = linhVeKhoId;
    this.yeuCauLinhBuKSNKSearch.IsCreate = this.isCreate;
    this.yeuCauLinhBuKSNKSearch.YeuCauLinhVatTuId = this.phieuLinhId;
    this.dieuKienLoadGridKSNK = JSON.stringify(this.yeuCauLinhBuKSNKSearch);
    if (this.yeuCauLinhBuKSNKSearch.TrangThai == null || (this.trangThaiVo != undefined && this.trangThaiVo.TrangThai == true)) {
      this.gridKSNK._additionalSearchString = this.dieuKienLoadGridKSNK;
      this.gridKSNK.search();
    }
    if (this.trangThaiVo != undefined && this.trangThaiVo.TrangThai == false) {
      this.gridKSNKTuChoi._additionalSearchString = this.dieuKienLoadGridKSNK;
      this.gridKSNKTuChoi.search();
    }
  }


  onDataBoundGrid(event: any) {
    if (event != undefined && event != null) {
      if (this.isCreate) {
        this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens = [];
        this.yeuCauLinhBuKSNK.YeuCauLinhVatTuChiTiets = [];
        event.Data.forEach(element => {
          let yeuCauKSNKBenhVien = new YeuCauKSNKBenhVienViewModel();
          yeuCauKSNKBenhVien.VatTuBenhVienId = element.VatTuBenhVienId;
          yeuCauKSNKBenhVien.LaVatTuBHYT = element.LaBHYT;
          yeuCauKSNKBenhVien.SoLuongTon = element.SoLuongTon;
          yeuCauKSNKBenhVien.KhoLinhTuId = this.linhTuKhoId;
          yeuCauKSNKBenhVien.KhoLinhVeId = this.linhVeKhoId;
          yeuCauKSNKBenhVien.SoLuongYeuCau = element.SoLuongYeuCau;
          yeuCauKSNKBenhVien.SoLuongCanBu = element.SoLuongCanBu;
          yeuCauKSNKBenhVien.SoLuongDaBu = element.SoLuongDaBu;
          yeuCauKSNKBenhVien.SLYeuCauLinhThucTe = element.SLYeuCauLinhThucTe;
          yeuCauKSNKBenhVien.SLYeuCauLinhThucTeMax = element.SLYeuCauLinhThucTeMax;
          yeuCauKSNKBenhVien.LoaiDuocPhamHayVatTu = element.LoaiDuocPhamHayVatTu;
          this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.push(yeuCauKSNKBenhVien);
        });
      } else {
        this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens = [];
        this.yeuCauLinhBuKSNK.YeuCauLinhVatTuChiTiets = [];
        event.Data.forEach(element => {
          let yeuCauKSNKBenhVien = new YeuCauKSNKBenhVienViewModel();
          yeuCauKSNKBenhVien.VatTuBenhVienId = element.VatTuBenhVienId;
          yeuCauKSNKBenhVien.LaVatTuBHYT = element.LaBHYT;
          yeuCauKSNKBenhVien.SoLuongCanBu = element.SoLuongCanBu;
          yeuCauKSNKBenhVien.SoLuongTon = element.SoLuongTon;
          yeuCauKSNKBenhVien.KhoLinhTuId = this.yeuCauLinhBuKSNK.KhoXuatId;
          yeuCauKSNKBenhVien.KhoLinhVeId = this.yeuCauLinhBuKSNK.KhoNhapId;
          yeuCauKSNKBenhVien.SoLuongYeuCau = element.SoLuongYeuCau;
          yeuCauKSNKBenhVien.SoLuongDaBu = element.SoLuongDaBu;
          yeuCauKSNKBenhVien.SLYeuCauLinhThucTe = element.SLYeuCauLinhThucTe;
          yeuCauKSNKBenhVien.SLYeuCauLinhThucTeMax = element.SLYeuCauLinhThucTeMax;
          yeuCauKSNKBenhVien.LoaiDuocPhamHayVatTu = element.LoaiDuocPhamHayVatTu;
          this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.push(yeuCauKSNKBenhVien);
        });
      }
      if (event.Data.length > 0 && (this.yeuCauLinhBuKSNK.KhoXuatId != null || this.yeuCauLinhBuKSNK.KhoXuatId != undefined)
        && (this.yeuCauLinhBuKSNK.KhoNhapId != null || this.yeuCauLinhBuKSNK.KhoNhapId != undefined)) {
        this.hideDuyetbtn.emit(true);
      } else {
        this.hideDuyetbtn.emit(false);
      }
    }
    else {
      this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens = [];
    }
  }

  getById(id: number) {
    var self = this;
    self.loadingPage();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      let modelVO = {
        YeuCauLinhId:id,
        LoaiDuocPhamHayVatTu : this.loai
      };
      self.apiService.post<YeuCauLinhKSNK>("YeuCauLinhKSNK/GetYeuCauLinhKSNKBuTao" ,modelVO).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            self.closePopupLoadingData();
            // console.log("data: ", resultData)
            this.yeuCauLinhBuKSNK = resultData;
            if (this.yeuCauLinhBuKSNK.LaNguoiTaoPhieu) {
              this.disabledNguoiTaoPhieu.emit(true);
            } else {
              this.disabledNguoiTaoPhieu.emit(false);
            }
            if (this.yeuCauLinhBuKSNK.HoTenNguoiYeuCau == null) {
              this.yeuCauLinhBuKSNK.HoTenNguoiYeuCau = resultData.TenNhanVienYeuCau;
            }
            console.log("yeuCauLinhBuKSNK: ", this.yeuCauLinhBuKSNK)
            if (this.isCreate) {
              this.linhVeKhoPreviousId = this.yeuCauLinhBuKSNK.KhoNhapId;
            }

            this.linhTuKhoId = this.yeuCauLinhBuKSNK.KhoXuatId;
            this.linhVeKhoId = this.yeuCauLinhBuKSNK.KhoNhapId;
            if (this.yeuCauLinhBuKSNK.DuocDuyet == null || this.yeuCauLinhBuKSNK.DuocDuyet == false) {
              this.isCreate = false;
            }
            this.ganDieuKienLoadGridKSNK(this.yeuCauLinhBuKSNK.KhoXuatId, this.yeuCauLinhBuKSNK.KhoNhapId);
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

  ganSLThucTeChange(soLuong: number, KSNKBenhVienId: number) {
    if (soLuong != undefined && soLuong != null) {
      this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.filter(x => x.VatTuBenhVienId == KSNKBenhVienId).forEach(element => {
        element.SLYeuCauLinhThucTe = soLuong;
      });
    } else {
      this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.filter(x => x.VatTuBenhVienId == KSNKBenhVienId).forEach(element => {
        element.SLYeuCauLinhThucTe = null;
      });
    }
  }
  checkAll: boolean = null;
  checkBoxDichVu(dataItem: any, event: any) {
    let index = this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.findIndex(z => z.VatTuBenhVienId == dataItem.VatTuBenhVienId);
    this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens[index].CheckBox = event;
    let lstDataCurrent = this.gridKSNK.getAllDataFromDatasource();
    if (lstDataCurrent.every(z => z.CheckBox)) {
      this.checkAll = true;
    } else {
      this.checkAll = false;
    }
  }

  checkBoxAllChange(event: any) {
    let lstDataCurrent = this.gridKSNK.getAllDataFromDatasource();
    if (lstDataCurrent.length > 0) {
      lstDataCurrent.forEach(element => {
        element.CheckBox = event;
        let index = this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.findIndex(z => z.VatTuBenhVienId == element.VatTuBenhVienId);
        this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens[index].CheckBox = event;
      });

    }
  }

  thoiDiemTNChange() {
    if (this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhTuFormat != null) {
      this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhTu = CommonService.formatDateTime(
        this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhTuFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhTu = null;
    }

    if (this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhDenFormat != null) {
      this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhDen = CommonService.formatDateTime(
        this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhDen = null;
    }
    this.checkAll = false;
    var queryString = JSON.stringify(this.yeuCauLinhBuKSNKSearch);
    this.gridKSNK._additionalSearchString = queryString;
    this.gridKSNK.search();
  }
  getSharedData() {
    this.yeuCauLinhBuKSNK.ThoiDiemChiDinhTu = this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhTu;
    this.yeuCauLinhBuKSNK.ThoiDiemChiDinhDen = this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhDen;
    debugger
    return this.yeuCauLinhBuKSNK;
  }
}
