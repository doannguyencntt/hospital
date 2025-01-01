import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PhieuLinhVatTuThuong, TrangThaiTaoPhieuLinh, YeuCauLinhVatTu } from '../yeu-cau-linh-vat-tu.model';
import { PhieuLinhVatTuThuongSharedComponent } from '../phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { PhieuLinhVatTuThuongPopupComponent } from '../phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component';
@Component({
  selector: 'app-phieu-linh-vat-tu-thuong-gui-lai',
  templateUrl: './phieu-linh-vat-tu-thuong-gui-lai.component.html',
  styleUrls: ['./phieu-linh-vat-tu-thuong-gui-lai.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PhieuLinhVatTuThuongGuiLaiComponent implements OnInit {
  hostingName: string = null;
  loading: boolean = false;
  documentType: DocumentType;
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
  validationErrors: any;
  popupLoadingData: any;
  popupLoadingDataDaDuyet: any;
  isHideDuyet: boolean = false;
  isDisabledNguoiTaoPhieu: boolean = false;
  phieuLinhId: number = null;
  inPhieuLinhThuong: PhieuLinhVatTuThuong = new PhieuLinhVatTuThuong();
  yeuCauLinhVatTu: YeuCauLinhVatTu = new YeuCauLinhVatTu();
  trangThaiDanhSach: any;
  @ViewChild('temp', { read: PhieuLinhVatTuThuongSharedComponent, static: false }) shared: PhieuLinhVatTuThuongSharedComponent;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhThuongVatTu;
    this.route
      .queryParams
      .subscribe(v => {
        this.trangThaiDanhSach = v;
      });
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.GetTrangThaiPhieuLinh(id);
      this.phieuLinhId = id;
    }

    if (window.location.protocol == "http:") {
      this.inPhieuLinhThuong.HostingName = "http://" + window.location.host;
    } else {
      this.inPhieuLinhThuong.HostingName = "https://" + window.location.host;
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

  loadingPageDaDuyet() {
    this.popupLoadingDataDaDuyet = this.dialog.open(LoadingComponent, {
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

  closePopupLoadingDataDaDuyet() {
    if (this.popupLoadingDataDaDuyet != undefined && this.popupLoadingDataDaDuyet != null) {
      this.popupLoadingDataDaDuyet.close();
    }
  }


  luuPhieuLinhThuong() {
    var self = this;
    self.yeuCauLinhVatTu = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) { //Từ chối duyệt
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu phiếu lĩnh vật tư này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.loadingPage();
            self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
            self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
              element.DuocDuyet = false;
            });
            self.yeuCauLinhVatTu.IsLuu = true;
            self.yeuCauLinhVatTu.DuocDuyet = false;
            self.apiService.post<any>("YeuCauLinhVatTu/GuiLaiPhieuLinhThuongVatTu", self.yeuCauLinhVatTu).subscribe(
              (result) => {
                if (result != undefined && result != null) {
                  self.yeuCauLinhVatTu.LastModified = result.LastModified;
                  self.yeuCauLinhVatTu.IsLuu = false;
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
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
      })
    } else if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == null) {  // "Đang chờ duyệt"
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu phiếu lĩnh vật tư này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.loadingPage();
            self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
            self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
              element.DuocDuyet = null;
            });
            self.yeuCauLinhVatTu.DuocDuyet = null;
            self.apiService.post<any>("YeuCauLinhVatTu/GuiLaiPhieuLinhThuongVatTu", self.yeuCauLinhVatTu).subscribe(
              (result) => {
                if (result != undefined && result != null) {
                  self.yeuCauLinhVatTu.LastModified = result.LastModified;
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  self.closePopupLoadingData();
                }
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingData();
                self.closePopupLoadingDataDaDuyet();
              });
          } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
        }
      })

    }
  }

  guiPhieuLinhThuong() {
    var self = this;
    self.yeuCauLinhVatTu = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) { //Từ chối duyệt
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn gửi phiếu lĩnh vật tư này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.yeuCauLinhVatTu.DaGui = true;
            self.loadingPage();
            self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
            self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
              element.DuocDuyet = false;
            });
            self.yeuCauLinhVatTu.IsLuu = true;
            self.yeuCauLinhVatTu.DuocDuyet = false;
            self.apiService.post<any>("YeuCauLinhVatTu/GuiLaiPhieuLinhThuongVatTu", self.yeuCauLinhVatTu).subscribe(
              (result) => {
                if (result != undefined && result != null) {
                  self.yeuCauLinhVatTu.LastModified = result.LastModified;
                  self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                  self.trangThaiVo.Ten = result.ten;
                  self.yeuCauLinhVatTu.IsLuu = false;
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
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
      })
    } else if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == null) {  // "Đang chờ duyệt"
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn gửi phiếu lĩnh vật tư này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.yeuCauLinhVatTu.DaGui = true;
            self.loadingPage();
            self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
            self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
              element.DuocDuyet = null;
            });
            self.yeuCauLinhVatTu.DuocDuyet = null;
            self.apiService.post<any>("YeuCauLinhVatTu/GuiLaiPhieuLinhThuongVatTu", self.yeuCauLinhVatTu).subscribe(
              (result) => {
                if (result != undefined && result != null) {
                  self.yeuCauLinhVatTu.LastModified = result.LastModified;
                  self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                  self.trangThaiVo.Ten = result.ten;
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
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
                      self.inPhieuLinhThuong.Header = true;
                      self.inPhieuLinhThuong.YeuCauLinhVatTuId = result.Id;
                      self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
                      self.inPhieuLinhThuong.TrangThai = this.trangThaiVo.TrangThai;
                      self.apiService.post<any>("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhThuong).subscribe(
                        resData => {
                          if (resData != undefined && resData != null) {
                            self.closePopupLoadingDataDaDuyet();
                            self.inPhieuLinhThuong.Header = false;
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
                      this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
                self.closePopupLoadingDataDaDuyet();
              });
          } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
        }
      })

    }
  }

  luuVaGuiDuyetLai() {
    var self = this;
    self.yeuCauLinhVatTu = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửi lại phê duyệt cho lần lĩnh vật tư này không?" }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.loadingPage();
          self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
          self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
            element.DuocDuyet = false;
          });
          self.yeuCauLinhVatTu.DuocDuyet = false;
          self.apiService.post<any>("YeuCauLinhVatTu/GuiLaiPhieuLinhThuongVatTu", self.yeuCauLinhVatTu).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.closePopupLoadingData();
                self.dialog.open(ConfirmComponent, {
                  disableClose: false,
                  width: "500px",
                  data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn in phiếu lĩnh dược phẩm này không ?",
                  },
                }).afterClosed().subscribe((res) => {
                  if (res == "Yes") {
                    self.loadingPageDaDuyet();
                    self.inPhieuLinhThuong.Header = true;
                    self.inPhieuLinhThuong.YeuCauLinhVatTuId = result.Id;
                    self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
                    self.inPhieuLinhThuong.TrangThai = this.trangThaiVo.TrangThai;
                    self.apiService.post<any>("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhThuong).subscribe(
                      resData => {
                        if (resData != undefined && resData != null) {
                          self.inPhieuLinhThuong.Header = false;
                          self.closePopupLoadingDataDaDuyet();
                          self.dialog.open(PhieuLinhVatTuThuongPopupComponent, {
                            disableClose: false,
                            width: '1200px',
                            data: { Model: resData },
                          }).afterClosed().subscribe(() => {
                            self.closePopupLoadingDataDaDuyet();
                            this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
                          });
                        }
                      },
                      (err: ApiError) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                          self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                        self.closePopupLoadingDataDaDuyet();
                      }
                    );
                  } else {
                    this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
        }
      }
    });
  }


  inPhieu() {
    var self = this;
    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == true) { //Đã duyệt
      self.loadingPageDaDuyet();
      self.inPhieuLinhThuong.Header = true;
      self.inPhieuLinhThuong.YeuCauLinhVatTuId = this.phieuLinhId;
      self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
      self.inPhieuLinhThuong.TrangThai = this.trangThaiVo.TrangThai;
      self.apiService.post<any>("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhThuong).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            self.inPhieuLinhThuong.Header = false;
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
    } else {
      self.yeuCauLinhVatTu = self.shared.getSharedData();
      self.validationErrors = [];
      self.ref.detectChanges();
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
        // self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1)
        self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
        if (self.trangThaiVo.TrangThai == false) {
          self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
            element.DuocDuyet = false;
          });
        }
        self.yeuCauLinhVatTu.IsLuu = true;
        self.apiService.post<any>("YeuCauLinhVatTu/GuiLaiPhieuLinhThuongVatTu", self.yeuCauLinhVatTu).subscribe(
          (result) => {
            if (result != undefined && result != null) {
              self.yeuCauLinhVatTu.LastModified = result.LastModified;
              self.yeuCauLinhVatTu.IsLuu = false;
              self.loadingPageDaDuyet();
              self.inPhieuLinhThuong.Header = true;
              self.inPhieuLinhThuong.YeuCauLinhVatTuId = result.Id;
              self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
              self.inPhieuLinhThuong.TrangThai = this.trangThaiVo.TrangThai;
              self.apiService.post<any>("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhThuong).subscribe(
                resData => {
                  if (resData != undefined && resData != null) {
                    self.inPhieuLinhThuong.Header = false;
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
            } else {
              self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
            }

          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
            self.closePopupLoadingDataDaDuyet();
          });
      } else {
        self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
  }

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
          this.trangThaiVo = result;
        })
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
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
