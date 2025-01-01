import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuLinhVatTuThuong, TrangThaiTaoPhieuLinh, YeuCauLinhVatTu } from '../yeu-cau-linh-vat-tu.model';
import { PhieuLinhVatTuBuGuiLaiSharedComponent } from '../phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component';
import { PhieuLinhVatTuThuongPopupComponent } from '../phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component';

@Component({
  selector: 'app-phieu-linh-vat-tu-bu-gui-lai',
  templateUrl: './phieu-linh-vat-tu-bu-gui-lai.component.html',
  styleUrls: ['./phieu-linh-vat-tu-bu-gui-lai.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PhieuLinhVatTuBuGuiLaiComponent implements OnInit {

  loading: boolean = false;
  hostingName: string = null;
  documentType: DocumentType;
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
  validationErrors: any;
  popupLoadingData: any;
  popupLoadingDataDaDuyet: any;
  yeuCauLinhVatTu: YeuCauLinhVatTu = new YeuCauLinhVatTu();
  isHideDuyet: boolean = false;
  phieuLinhId: number = null;
  flag: boolean = true;
  isDisabledNguoiTaoPhieu: boolean = false;
  trangThaiDanhSach: any;
  inPhieuLinhBu: PhieuLinhVatTuThuong = new PhieuLinhVatTuThuong();
  @ViewChild('temp', { read: PhieuLinhVatTuBuGuiLaiSharedComponent, static: false }) shared: PhieuLinhVatTuBuGuiLaiSharedComponent;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhBuVatTu;
    this.route
      .queryParams
      .subscribe(v => {
        this.trangThaiDanhSach = v;
      });
    this.yeuCauLinhVatTu = new YeuCauLinhVatTu();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.GetTrangThaiPhieuLinh(id);
      this.phieuLinhId = id;
    }

    if (window.location.protocol == "http:") {
      this.inPhieuLinhBu.HostingName = "http://" + window.location.host;
    } else {
      this.inPhieuLinhBu.HostingName = "https://" + window.location.host;
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


  luuPhieuLinhBuVatTu(daGui: boolean) {
    var self = this;
    self.yeuCauLinhVatTu = self.shared.getSharedData();
    if (self.yeuCauLinhVatTu.YeuCauVatTuBenhViens.every(z => !z.CheckBox)) {
      if (daGui) {
        self.notificationService.showError("Vui lòng chọn vật tư muốn gửi phiếu.");
      }
      else {
        self.notificationService.showError("Vui lòng chọn vật tư muốn lưu phiếu.");
      }
    } else {
      var mess = "";
      if (daGui) {
        mess = "Bạn có muốn gửi phiếu lĩnh vật tư này không ?";
      }
      else {
        mess = "Bạn có muốn lưu phiếu lĩnh vật tư này không ?";
      }
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: mess,
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (daGui) {
            self.xacNhanGuiPhieuLinh();
          } else {
            self.xacNhanLuuPhieuLinh();
          }
        }
      })
    }

  }

  xacNhanLuuPhieuLinh() {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.loadingPage();
      self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1)
      self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
        element.DuocDuyet = null;
      });
      self.yeuCauLinhVatTu.DuocDuyet = null;
      self.apiService.post<any>("YeuCauLinhVatTu/GuiLaiPhieuLinhBu", self.yeuCauLinhVatTu).subscribe(
        (result) => {
          if (result != undefined && result != null) {
            self.yeuCauLinhVatTu.LastModified = result.LastModified;
            self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
            self.trangThaiVo.Ten = result.ten;
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
            self.shared.ganDieuKienLoadGridVatTu(self.yeuCauLinhVatTu.KhoXuatId, self.yeuCauLinhVatTu.KhoNhapId);
            self.closePopupLoadingData();
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingData();
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xacNhanGuiPhieuLinh() {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.yeuCauLinhVatTu.DaGui = true;
      self.loadingPage();
      self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1)
      self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
        element.DuocDuyet = null;
      });
      self.yeuCauLinhVatTu.DuocDuyet = null;
      self.apiService.post<any>("YeuCauLinhVatTu/GuiLaiPhieuLinhBu", self.yeuCauLinhVatTu).subscribe(
        (result) => {
          if (result != undefined && result != null) {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
            self.shared.ganDieuKienLoadGridVatTu(self.yeuCauLinhVatTu.KhoXuatId, self.yeuCauLinhVatTu.KhoNhapId);
            self.closePopupLoadingData();
            self.dialog.open(ConfirmComponent, {
              disableClose: false,
              width: "500px",
              data: {
                Title: "Xác nhận",
                Message: "Bạn có muốn in phiếu lĩnh vật tư này không ?",
              },
            }).afterClosed().subscribe((res) => {
              if (res == "Yes") {
                self.loadingPageDaDuyet();
                self.inPhieuLinhBu.Header = true;
                self.inPhieuLinhBu.YeuCauLinhVatTuId = result.Id;
                self.inPhieuLinhBu.LoaiPhieuLinh = 2;
                self.inPhieuLinhBu.TrangThai = self.trangThaiVo.TrangThai;
                self.apiService.post<any>("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhBu).subscribe(
                  resData => {
                    if (resData != undefined && resData != null) {
                      self.inPhieuLinhBu.Header = false;
                      self.closePopupLoadingDataDaDuyet();
                      self.dialog.open(PhieuLinhVatTuThuongPopupComponent, {
                        disableClose: false,
                        width: '1200px',
                        data: { Model: resData },
                      }).afterClosed().subscribe(() => {
                        self.closePopupLoadingDataDaDuyet();
                        self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
                      });
                    }
                  },
                  (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                      self.notificationService.showError(err.Message);
                    }
                    self.closePopupLoadingDataDaDuyet();
                  }
                );
              } else {
                self.closePopupLoadingDataDaDuyet();
                self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
              }
            });
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingData();
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  loadingPageDaDuyet() {
    this.popupLoadingDataDaDuyet = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closePopupLoadingDataDaDuyet() {
    if (this.popupLoadingDataDaDuyet != undefined && this.popupLoadingDataDaDuyet != null) {
      this.popupLoadingDataDaDuyet.close();
    }
  }

  // luuVaGuiDuyetLai() {
  //   this.dialog.open(ConfirmComponent, {
  //     disableClose: false,
  //     width: '400px',
  //     data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửu lại phê duyệt cho lần lĩnh vật tư này không?" }
  //   }).afterClosed().subscribe(result => {
  //     if (result === 'Yes') {

  //     }
  //   });
  // }

  anHienButtonDuyet(event: any) {
    if (event) {
      this.isHideDuyet = true;
    }
    else {
      this.isHideDuyet = false;
    }
  }

  disableNguoiTaoPhieu(event) {
    if (event) {
      this.isDisabledNguoiTaoPhieu = true;
    }
    else {
      this.isDisabledNguoiTaoPhieu = false;
    }
  }


  GetTrangThaiPhieuLinh(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<any>("YeuCauLinhVatTu/GetTrangThaiPhieuLinhVatTu?phieuLinhId=" + id).subscribe(
        (result) => {
          self.trangThaiVo = result;
        })
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  inPhieu() {
    var self = this;
    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == true) { //Đã duyệt
      self.loadingPageDaDuyet();
      self.inPhieuLinhBu.Header = true;
      self.inPhieuLinhBu.YeuCauLinhVatTuId = this.phieuLinhId;
      self.inPhieuLinhBu.LoaiPhieuLinh = 2;
      self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
      self.apiService.post<any>("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhBu).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            self.inPhieuLinhBu.Header = false;
            self.closePopupLoadingDataDaDuyet();
            self.dialog.open(PhieuLinhVatTuThuongPopupComponent, {
              disableClose: false,
              width: '1200px',
              data: { Model: resData },
            }
            ).afterClosed().subscribe(() => {
              self.closePopupLoadingDataDaDuyet();
            }
            );
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingDataDaDuyet();
        }
      );
    }
    else if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) {
      self.yeuCauLinhVatTu = self.shared.getSharedData();
      self.validationErrors = [];
      self.ref.detectChanges();
      self.loadingPageDaDuyet();
      self.inPhieuLinhBu.Header = true;
      self.inPhieuLinhBu.YeuCauLinhVatTuId = self.phieuLinhId;
      self.inPhieuLinhBu.LoaiPhieuLinh = 2;
      self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
      self.apiService.post<any>("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhBu).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            self.inPhieuLinhBu.Header = false;
            self.closePopupLoadingDataDaDuyet();
            self.dialog.open(PhieuLinhVatTuThuongPopupComponent, {
              disableClose: false,
              width: '1200px',
              data: { Model: resData },
            }
            ).afterClosed().subscribe(() => {
              self.closePopupLoadingDataDaDuyet();
            });
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingDataDaDuyet();
        }
      );
    } else {
      self.yeuCauLinhVatTu = self.shared.getSharedData();
      if (self.yeuCauLinhVatTu.YeuCauVatTuBenhViens.every(z => !z.CheckBox)) {
        self.notificationService.showError("Vui lòng chọn vật tư muốn in phiếu.");
      } else {
        self.validationErrors = [];
        self.ref.detectChanges();
        self.loadingPageDaDuyet();
        self.inPhieuLinhBu.Header = true;
        self.inPhieuLinhBu.YeuCauLinhVatTuId = self.phieuLinhId;
        self.inPhieuLinhBu.LoaiPhieuLinh = 2;
        self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
        self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1)
        self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
          element.DuocDuyet = null;
        });
        self.yeuCauLinhVatTu.DuocDuyet = null;
        self.apiService.post<any>("YeuCauLinhVatTu/GuiLaiPhieuLinhBu", self.yeuCauLinhVatTu).subscribe(
          (result) => {
            if (result != undefined && result != null) {
              self.apiService.post<any>("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhBu).subscribe(
                resData => {
                  if (resData != undefined && resData != null) {
                    self.inPhieuLinhBu.Header = false;
                    self.closePopupLoadingDataDaDuyet();
                    self.dialog.open(PhieuLinhVatTuThuongPopupComponent, {
                      disableClose: false,
                      width: '1200px',
                      data: { Model: resData },
                    }
                    ).afterClosed().subscribe(() => {
                      self.closePopupLoadingDataDaDuyet();
                    });
                  }
                },
                (err: ApiError) => {
                  self.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                  }
                  self.closePopupLoadingDataDaDuyet();
                }
              );
            }
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
            self.closePopupLoadingDataDaDuyet();
          });
      }
    }
  }

  cancel() {
    let data: any;
    if (this.trangThaiDanhSach.holdQuery == '0') {
      data = 0;
    }
    if (this.trangThaiDanhSach.holdQuery == '1') {
      data = 1;
    }
    if (this.trangThaiDanhSach.holdQuery == '2') {
      data = 2;
    }
    if (this.trangThaiDanhSach.holdQuery == '3') {
      data = 3;
    }
    if (this.trangThaiDanhSach.holdQuery == '4') {
      data = 4;
    }
    if (this.trangThaiDanhSach.holdQuery == '5') {
      data = 5;
    }
    if (this.trangThaiDanhSach.holdQuery == '6') {
      data = 6;
    }
    if (this.trangThaiDanhSach.holdQuery == '7') {
      data = 7;
    }
    this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu'], { queryParams: { holdQuery: data } });
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
