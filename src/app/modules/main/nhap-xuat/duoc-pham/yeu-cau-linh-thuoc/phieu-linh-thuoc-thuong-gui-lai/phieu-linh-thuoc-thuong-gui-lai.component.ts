import { ChangeDetectorRef, Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { PhieuLinhThuocThuongSharedComponent } from '../phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component';
import { PhieuLinhThuocThuong, YeuCauLinhDuocPham } from '../yeu-cau-linh-thuoc.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuLinhThuocThuongPopupComponent } from '../phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { TrangThaiTaoPhieuLinh } from '../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';

@Component({
  selector: 'app-phieu-linh-thuoc-thuong-gui-lai',
  templateUrl: './phieu-linh-thuoc-thuong-gui-lai.component.html',
  styleUrls: ['./phieu-linh-thuoc-thuong-gui-lai.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PhieuLinhThuocThuongGuiLaiComponent implements OnInit {
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
  inPhieuLinhThuong: PhieuLinhThuocThuong = new PhieuLinhThuocThuong();
  yeuCauLinhDuocPham: YeuCauLinhDuocPham = new YeuCauLinhDuocPham();
  trangThaiDanhSach: any;
  @ViewChild('temp', { read: PhieuLinhThuocThuongSharedComponent, static: false }) shared: PhieuLinhThuocThuongSharedComponent;

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
    this.documentType = DocumentType.TaoYeuCauLinhThuongDuocPham;
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
    self.yeuCauLinhDuocPham = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) { //Từ chối duyệt
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu phiếu lĩnh dược phẩm này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.loadingPage();
            self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort((a, b) => (a.STT > b.STT) ? 1 : -1)
            self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.forEach(element => {
              element.DuocDuyet = false;
            });
            self.yeuCauLinhDuocPham.IsLuu = true;
            self.apiService.post<any>("YeuCauLinhDuocPham/GuiLaiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(
              (result) => {
                if (result != undefined && result != null) {
                  self.yeuCauLinhDuocPham.LastModified = result.LastModified;
                  self.yeuCauLinhDuocPham.IsLuu = false;
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
          Message: "Bạn có muốn lưu phiếu lĩnh dược phẩm này không ?",
        },
      }).afterClosed().subscribe(res => {
        if (res == "Yes") {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.loadingPage();
            self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)

            self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.forEach(element => {
              element.DuocDuyet = null;
            });
            self.yeuCauLinhDuocPham.DuocDuyet = null;
            self.apiService.post<any>("YeuCauLinhDuocPham/GuiLaiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(
              (result) => {
                if (result != undefined && result != null) {
                  self.yeuCauLinhDuocPham.LastModified = result.LastModified;
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

    }


  }


  guiPhieuLinhThuong() {
    var self = this;
    self.yeuCauLinhDuocPham = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) { //Từ chối duyệt
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn gửi phiếu lĩnh dược phẩm này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.yeuCauLinhDuocPham.DaGui = true;
            self.loadingPage();
            self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort((a, b) => (a.STT > b.STT) ? 1 : -1)
            self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.forEach(element => {
              element.DuocDuyet = false;
            });
            self.yeuCauLinhDuocPham.IsLuu = true;
            self.apiService.post<any>("YeuCauLinhDuocPham/GuiLaiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(
              (result) => {
                if (result != undefined && result != null) {
                  self.yeuCauLinhDuocPham.LastModified = result.LastModified;
                  self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                  self.trangThaiVo.Ten = result.ten;
                  self.yeuCauLinhDuocPham.IsLuu = false;
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
          Message: "Bạn có muốn gửi phiếu lĩnh dược phẩm này không ?",
        },
      }).afterClosed().subscribe(res => {
        if (res == "Yes") {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.yeuCauLinhDuocPham.DaGui = true;
            self.loadingPage();
            self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)

            self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.forEach(element => {
              element.DuocDuyet = null;
            });
            self.yeuCauLinhDuocPham.DuocDuyet = null;
            self.apiService.post<any>("YeuCauLinhDuocPham/GuiLaiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(
              (result) => {
                if (result != undefined && result != null) {
                  self.yeuCauLinhDuocPham.LastModified = result.LastModified;
                  self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                  self.trangThaiVo.Ten = result.ten;
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
                      self.loadingPage();
                      self.inPhieuLinhThuong.Header = true;
                      self.inPhieuLinhThuong.YeuCauLinhDuocPhamId = result.Id;
                      self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
                      self.inPhieuLinhThuong.TrangThai = this.trangThaiVo.TrangThai;
                      self.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhThuongDuocPham", self.inPhieuLinhThuong).subscribe(
                        resData => {
                          if (resData != undefined && resData != null) {
                            self.inPhieuLinhThuong.Header = false;
                            self.closePopupLoadingData();
                            self.dialog.open(PhieuLinhThuocThuongPopupComponent, {
                              disableClose: false,
                              width: '1200px',
                              data: resData,
                            }).afterClosed().subscribe(() => {
                              self.closePopupLoadingData();
                              this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                            });
                          }
                        },
                        (err: ApiError) => {
                          self.validationErrors = err.ValidationErrors;
                          if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                          }
                          self.closePopupLoadingData();
                        }
                      );
                    } else {
                      this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
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
      })

    }
  }
  luuVaGuiDuyetLai() {
    var self = this;
    self.yeuCauLinhDuocPham = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửi lại phê duyệt cho lần lĩnh dược phẩm này không?" }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.loadingPage();
          self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
          self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.forEach(element => {
            element.DuocDuyet = false;
          });
          self.yeuCauLinhDuocPham.DuocDuyet = false;
          self.apiService.post<any>("YeuCauLinhDuocPham/GuiLaiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(
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
                    self.loadingPage();
                    self.inPhieuLinhThuong.Header = true;
                    self.inPhieuLinhThuong.YeuCauLinhDuocPhamId = result.Id;
                    self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
                    self.inPhieuLinhThuong.TrangThai = this.trangThaiVo.TrangThai;
                    self.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhThuongDuocPham", self.inPhieuLinhThuong).subscribe(
                      resData => {
                        if (resData != undefined && resData != null) {
                          self.inPhieuLinhThuong.Header = false;
                          self.closePopupLoadingData();
                          self.dialog.open(PhieuLinhThuocThuongPopupComponent, {
                            disableClose: false,
                            width: '1200px',
                            data: resData,
                          }).afterClosed().subscribe(() => {
                            self.closePopupLoadingData();
                            this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                          });
                        }
                      },
                      (err: ApiError) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                          self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                      }
                    );
                  } else {
                    this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
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
    this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc'], { queryParams: { holdQuery: data } });
  }

  inPhieu() {
    var self = this;
    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == true) { //Đã duyệt
      self.loadingPageDaDuyet();
      self.inPhieuLinhThuong.Header = true;
      self.inPhieuLinhThuong.YeuCauLinhDuocPhamId = this.phieuLinhId;
      self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
      self.inPhieuLinhThuong.TrangThai = this.trangThaiVo.TrangThai;
      self.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhThuongDuocPham", self.inPhieuLinhThuong).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            self.inPhieuLinhThuong.Header = false;
            self.closePopupLoadingDataDaDuyet();
            self.dialog.open(PhieuLinhThuocThuongPopupComponent, {
              disableClose: false,
              width: '1200px',
              data: resData,
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
      self.yeuCauLinhDuocPham = self.shared.getSharedData();
      self.validationErrors = [];
      self.ref.detectChanges();
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
        // self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1)
        self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
        if (self.trangThaiVo.TrangThai == false) {
          self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.forEach(element => {
            element.DuocDuyet = false;
          });
        }
        self.yeuCauLinhDuocPham.IsLuu = true;
        self.apiService.post<any>("YeuCauLinhDuocPham/GuiLaiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(
          (result) => {
            if (result != undefined && result != null) {
              self.loadingPageDaDuyet();
              self.yeuCauLinhDuocPham.LastModified = result.LastModified;
              self.yeuCauLinhDuocPham.IsLuu = false;
              self.inPhieuLinhThuong.Header = true;
              self.inPhieuLinhThuong.YeuCauLinhDuocPhamId = result.Id;
              self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
              self.inPhieuLinhThuong.TrangThai = this.trangThaiVo.TrangThai;
              self.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhThuongDuocPham", self.inPhieuLinhThuong).subscribe(
                resData => {
                  if (resData != undefined && resData != null) {
                    self.inPhieuLinhThuong.Header = false;
                    self.closePopupLoadingDataDaDuyet();
                    self.dialog.open(PhieuLinhThuocThuongPopupComponent, {
                      disableClose: false,
                      width: '1200px',
                      data: resData,
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
              self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
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

  GetTrangThaiPhieuLinh(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<any>("YeuCauLinhDuocPham/GetTrangThaiPhieuLinh?phieuLinhId=" + id).subscribe(
        (result) => {
          this.trangThaiVo = result;
        })
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.cancel();
      event.preventDefault();
    }
  }

  anHienButtonDuyet(event) {
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
}
