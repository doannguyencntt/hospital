import { DuTruMuaDuocPhamTaiKhoaChiTietVo, DuyetDuTruMuaDuocPhamViewModel, TongHopDuTruMuaThuocTaiKhoa } from '../tong-hop-du-tru-mua-thuoc-tai-khoa.model';
import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, SimpleChanges, Input, HostListener, EventEmitter, Output } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";

import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";

import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';

import icInfo from '@iconify/icons-ic/baseline-info';
import { GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent } from '../gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { PhieuMuaTruTaiKhoaComponent } from '../phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component';

@Component({
  selector: 'app-gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet',
  templateUrl: './gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html',
  styleUrls: ['./gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent implements OnInit {
  documentType: DocumentType;
  thongTinGoiTaiKhoa: TongHopDuTruMuaThuocTaiKhoa;
  duyetDuTruMuaDuocPhamViewModel: DuyetDuTruMuaDuocPhamViewModel;
  duTruMuaDuocPhamTaiKhoaChiTietVo: DuTruMuaDuocPhamTaiKhoaChiTietVo[] = []

  popupLoadingData: any = null;
  popupSavingData: any = null;
  icInfo = icInfo;
  validationErrors: any = null;
  kyDuTruMuaDuocPhamVatTuId: number = 0;
  sortDuTruTaiKhoa: SortDescriptor[] = [{ field: "Id", dir: "asc" }]

  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('STTChildTemplate', { static: true }) STTChildTemplate: TemplateRef<any>;
  @ViewChild('khoTongTonTemplate', { static: true }) khoTongTonTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  urlGetDataGridChildAsync = "YeuCauMuaDuocPham/GetDuTruMuaDPTaiKhoaChiTietForGridAsync";
  urlGetTotalPageGridChild: string = "YeuCauMuaDuocPham/GetTotalDuTruMuaDPTaiKhoaChiTietForGridAsync";

  sortDuTruChild: SortDescriptor[] = [{ field: "Id", dir: "asc" }];
  groups: GroupDescriptor[] = [{ field: 'Nhom', dir: 'asc', aggregates: [] }];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoa;
    this.thongTinGoiTaiKhoa = new TongHopDuTruMuaThuocTaiKhoa();
    this.duyetDuTruMuaDuocPhamViewModel = new DuyetDuTruMuaDuocPhamViewModel();
    this.kyDuTruMuaDuocPhamVatTuId = this.route.snapshot.params.id;
    this.gridColumns = [
      { Field: "Nhom", Title: "Loại", Width: 100, ShowTooltip: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDuocPham", Title: "Tên", Width: 100, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 100, ShowTooltip: true },
      { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 80 },
      { Field: "SoDangKy", Title: "SĐK", Width: 50 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
      { Field: "DuongDung", Title: "Đường Dùng", Width: 50 },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 50 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 50 },
      { Field: "NhomDuPhong", Title: "Nhóm Đ.Trị/D.Phòng", Width: 80 },
      { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 100 },
      { Field: "SoLuongDuKienSuDung", Title: "SL D.Kiến S.Dụng Trong Kỳ", Width: 100 },
      { Field: "SoLuongDuTruTruongKhoaDuyet", Title: "T.Khoa Duyệt", Width: 100 }
    ];

    this.gridChildColumns = [
      { Field: "LoaiNhom", Title: "Nhóm", Width: 100, Sortable: true },
      { Field: "TenKho", Title: "Kho", Width: 100, Sortable: true },
      { Field: "KyDuTru", Title: "Kỳ dự trù", Width: 150, Sortable: true },
      { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 100, Sortable: true },
      { Field: "SoLuongDuKienSuDung", Title: "SL D.kiến trong kỳ", Width: 100, Sortable: true },
      { Field: "SoLuongDuTruTruongKhoaDuyet", Title: "T.Khoa Duyệt", Width: 100, Sortable: true },
    ];
    this.getThongTinTongHopDuTruMuaTaiKhoa();
  }

  getThongTinTongHopDuTruMuaTaiKhoa() {
    let phongBenhVienId = this.authService.getPhongLamViecId();
    this.apiService.get<any>("YeuCauMuaDuocPham/GetThongTinGoiTaiKhoa/" + phongBenhVienId)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.thongTinGoiTaiKhoa = resultData;
        }
      });
  }

  getKyTheoId() {
    let phongBenhVienId = this.authService.getPhongLamViecId();
    this.apiService.get<any>("YeuCauMuaDuocPham/GetThongTinGoiTaiKhoa/" + phongBenhVienId)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.thongTinGoiTaiKhoa = resultData;
        }
      });
  }

  onDataBoundChild(event: any) {
    if (event != undefined && event.Data.length > 0) {
      this.thongTinGoiTaiKhoa.KyDuTru = event.Data[0].KyDuTru;
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

  closepopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  savingPage() {
    this.popupSavingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closePopupSavingData() {
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }

  onDataBound(event) {
    if (event != undefined && event.Data.length > 0) {
      this.duTruMuaDuocPhamTaiKhoaChiTietVo = event.Data;
      this.thongTinGoiTaiKhoa.KyDuTru = event.Data[0].KyDuTru;
    }
  }

  guiTatCa() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();

    //thông tin mua dư trù 
    self.duyetDuTruMuaDuocPhamViewModel.DuTruMuaDuocPhamId = self.kyDuTruMuaDuocPhamVatTuId;
    self.duyetDuTruMuaDuocPhamViewModel.NhanVienYeuCauId = self.thongTinGoiTaiKhoa.NhanVienYeuCauId;
    self.duyetDuTruMuaDuocPhamViewModel.KhoaPhongId = self.thongTinGoiTaiKhoa.KhoaPhongId;
    self.duyetDuTruMuaDuocPhamViewModel.GhiChu = self.thongTinGoiTaiKhoa.GhiChu;
    self.duyetDuTruMuaDuocPhamViewModel.NgayYeuCau = self.thongTinGoiTaiKhoa.NgayYeuCau;
    self.duyetDuTruMuaDuocPhamViewModel.DuTruMuaDuocPhamTaiKhoaChiTietVos = self.duTruMuaDuocPhamTaiKhoaChiTietVo;

    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.dialog.open(GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có chắc chắn muốn gửi duyệt phiếu dự trù này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          self.apiService.post<any>("YeuCauMuaDuocPham/GoiThongTinTaiKhoa", self.duyetDuTruMuaDuocPhamViewModel)
            .subscribe(
              (resultData) => {
                if (resultData != undefined && resultData != null) {
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  self.router.navigate(['/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa']);
                  self.closePopupSavingData();
                }
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
                self.closePopupSavingData();
              }
            );
        } else if (res == "YesAndPrint") {
          self.validationErrors = [];
          self.ref.detectChanges();
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.savingPage();
            self.apiService.post<any>("YeuCauMuaDuocPham/GoiThongTinTaiKhoa", self.duyetDuTruMuaDuocPhamViewModel).subscribe(
              (resultData) => {
                if (resultData != undefined && resultData != null) {
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  self.closePopupSavingData();
                  self.dialog.open(PhieuMuaTruTaiKhoaComponent, {
                    disableClose: false,
                    width: '1200px',
                    data: { Id: resultData },
                  }).afterClosed().subscribe(() => {
                    self.router.navigate(['/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa']);
                  });
                }
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
                self.closePopupSavingData();
              });
          } else {
          }
        }
      });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  cancel() {
    this.location.back();
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.cancel();
      event.preventDefault();
    }
  }
}
