import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PhieuLinhThuocBuSharedComponent } from '../phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PhieuLinhThuocThuong, YeuCauLinhBuDuocPham } from '../yeu-cau-linh-thuoc.model';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { CommonService } from 'src/app/core/utilities/common.helper';
import { PhieuLinhThuocBuPopupComponent } from '../phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { TrangThaiTaoPhieuLinh } from '../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';

@Component({
  selector: 'app-phieu-linh-thuoc-bu-gui-lai',
  templateUrl: './phieu-linh-thuoc-bu-gui-lai.component.html',
  styleUrls: ['./phieu-linh-thuoc-bu-gui-lai.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PhieuLinhThuocBuGuiLaiComponent implements OnInit {
  hostingName: string = null;
  loading: boolean = false;
  documentType: DocumentType;
  trangThaiVo: any = null;
  validationErrors: any;
  popupLoadingData: any;
  popupLoadingDataDaDuyet: any;
  yeuCauLinhDuocPham: YeuCauLinhBuDuocPham = new YeuCauLinhBuDuocPham();
  isHideDuyet: boolean = false;
  isDisabledNguoiTaoPhieu: boolean = false;
  phieuLinhId: number = null;
  flag: boolean = true;
  inPhieuLinhBu: PhieuLinhThuocThuong = new PhieuLinhThuocThuong();
  trangThaiDanhSach: any;
  // yeuCauLinhDuocPham: YeuCauLinhDuocPham = new YeuCauLinhDuocPham();

  @ViewChild('temp', { read: PhieuLinhThuocBuSharedComponent, static: false }) shared: PhieuLinhThuocBuSharedComponent;
  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhBuDuocPham;
    this.route
      .queryParams
      .subscribe(v => {
        this.trangThaiDanhSach = v;
      });
    this.yeuCauLinhDuocPham = new YeuCauLinhBuDuocPham();
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

  luuPhieuLinhBu(daGui: boolean) {
    var self = this;
    self.yeuCauLinhDuocPham = self.shared.getSharedData();
    if (self.yeuCauLinhDuocPham.YeuCauDuocPhamBenhViens.every(z => !z.CheckBox)) {
      if (daGui) {
        self.notificationService.showError("Vui lòng chọn dược phẩm muốn gửi phiếu.");
      }
      else {
        self.notificationService.showError("Vui lòng chọn dược phẩm muốn lưu phiếu.");
      }
    } else {
      if (daGui) {
        self.xacNhanGuiPhieuLinh();
      } else {
        self.xacNhanLuuPhieuLinh();
      }
    }
  }
  xacNhanGuiPhieuLinh() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == null) {
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
            self.apiService.post<any>("YeuCauLinhDuocPham/GuiLaiPhieuLinhBu", self.yeuCauLinhDuocPham).subscribe(
              (result) => {
                if (result != undefined && result != null) {

                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  self.shared.ganDieuKienLoadGridDuocPham(self.yeuCauLinhDuocPham.KhoXuatId, self.yeuCauLinhDuocPham.KhoNhapId);
                  self.closePopupLoadingData();
                  self.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: "500px",
                    data: {
                      Title: "Xác nhận in",
                      Message: "Bạn có muốn in phiếu lĩnh dược phẩm này không ?",
                    },
                  }).afterClosed().subscribe((res) => {
                    if (res == "Yes") {
                      self.loadingPage();
                      self.inPhieuLinhBu.Header = true;
                      self.inPhieuLinhBu.YeuCauLinhDuocPhamId = result.Id;
                      self.inPhieuLinhBu.LoaiPhieuLinh = 2;
                      self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
                      self.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhBuDuocPham", self.inPhieuLinhBu).subscribe(
                        resData => {
                          if (resData != undefined && resData != null) {
                            self.closePopupLoadingData();
                            self.inPhieuLinhBu.Header = false;
                            self.dialog.open(PhieuLinhThuocBuPopupComponent, {
                              disableClose: false,
                              width: '1200px',
                              data: { Model: resData },
                            }).afterClosed().subscribe(() => {
                              self.closePopupLoadingData();
                              self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
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

  xacNhanLuuPhieuLinh() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == null) {
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
            self.apiService.post<any>("YeuCauLinhDuocPham/GuiLaiPhieuLinhBu", self.yeuCauLinhDuocPham).subscribe(
              (result) => {
                if (result != undefined && result != null) {
                  self.yeuCauLinhDuocPham.LastModified = result.LastModified;
                  self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                  self.trangThaiVo.Ten = result.ten;
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  self.shared.ganDieuKienLoadGridDuocPham(self.yeuCauLinhDuocPham.KhoXuatId, self.yeuCauLinhDuocPham.KhoNhapId);
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

  // luuVaGuiDuyetLai() {
  //   var self = this;
  //   self.dialog.open(ConfirmComponent, {
  //     disableClose: false,
  //     width: '400px',
  //     data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửu lại phê duyệt cho lần lĩnh dược phẩm này không?" }
  //   }).afterClosed().subscribe(result => {
  //     if (result === 'Yes') {
  //       self.yeuCauLinhDuocPham = self.shared.getSharedData();
  //       self.validationErrors = [];
  //       self.ref.detectChanges();
  //       if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
  //         self.loadingPage();
  //         self.apiService.post<any>("YeuCauLinhDuocPham/GuiLaiPhieuLinhBu", self.yeuCauLinhDuocPham).subscribe(
  //           (result) => {
  //             if (result != undefined && result != null) {
  //               self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
  //               self.closePopupLoadingData();
  //               self.dialog.open(ConfirmComponent, {
  //                 disableClose: false,
  //                 width: "500px",
  //                 data: {
  //                   Title: "Xác nhận",
  //                   Message: "Bạn có muốn in phiếu phiếu lĩnh dược phẩm này không ?",
  //                 },
  //               }).afterClosed().subscribe((res) => {
  //                 if (res == "Yes") {
  //                   self.loadingPage();
  //                   self.inPhieuLinhBu.Header = true;
  //                   self.inPhieuLinhBu.YeuCauLinhDuocPhamId = result;
  //                   self.inPhieuLinhBu.LoaiPhieuLinh = 2;
  //                   self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
  //                   self.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhBuDuocPham", self.inPhieuLinhBu).subscribe(
  //                     resData => {
  //                       if (resData != undefined && resData != null) {
  //                         self.closePopupLoadingData();
  //                         self.inPhieuLinhBu.Header = false;
  //                         self.dialog.open(PhieuLinhThuocBuPopupComponent, {
  //                           disableClose: false,
  //                           width: '1200px',
  //                           data: resData,
  //                         }).afterClosed().subscribe(() => {
  //                           self.closePopupLoadingData();
  //                           self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
  //                         });
  //                       }
  //                     },
  //                     (err: ApiError) => {
  //                       self.validationErrors = err.ValidationErrors;
  //                       if (err.Message != "Validation Failed") {
  //                         self.notificationService.showError(err.Message);
  //                       }
  //                       self.closePopupLoadingData();
  //                     }
  //                   );
  //                 } else {
  //                   this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
  //                 }
  //               });
  //             }
  //           },
  //           (err: ApiError) => {
  //             self.validationErrors = err.ValidationErrors;
  //             if (err.Message != "Validation Failed") {
  //               self.notificationService.showError(err.Message);
  //             }
  //             self.closePopupLoadingData();
  //           });
  //       } else {
  //         self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
  //       }
  //     }
  //   }
  //   );
  // }

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

  inPhieu() {
    var self = this;
    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == true) { //Đã duyệt
      self.loadingPageDaDuyet();
      self.inPhieuLinhBu.Header = true;
      self.inPhieuLinhBu.YeuCauLinhDuocPhamId = this.phieuLinhId;
      self.inPhieuLinhBu.LoaiPhieuLinh = 2;
      self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
      self.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhBuDuocPham", self.inPhieuLinhBu).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            self.closePopupLoadingDataDaDuyet();
            self.inPhieuLinhBu.Header = false;
            self.dialog.open(PhieuLinhThuocBuPopupComponent, {
              disableClose: false,
              width: '1200px',
              data: { Model: resData },
            }).afterClosed().subscribe(() => {
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
    else if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) {
      self.yeuCauLinhDuocPham = self.shared.getSharedData();
      self.validationErrors = [];
      self.ref.detectChanges();
      self.loadingPageDaDuyet();
      self.inPhieuLinhBu.Header = true;
      self.inPhieuLinhBu.YeuCauLinhDuocPhamId = self.phieuLinhId;
      self.inPhieuLinhBu.LoaiPhieuLinh = 2;
      self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
      self.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhBuDuocPham", self.inPhieuLinhBu).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            self.inPhieuLinhBu.Header = false;
            self.closePopupLoadingDataDaDuyet();
            self.dialog.open(PhieuLinhThuocBuPopupComponent, {
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
      self.yeuCauLinhDuocPham = self.shared.getSharedData();
      if (self.yeuCauLinhDuocPham.YeuCauDuocPhamBenhViens.every(z => !z.CheckBox)) {
        self.notificationService.showError("Vui lòng chọn dược phẩm muốn in phiếu.");
      } else {
        self.validationErrors = [];
        self.ref.detectChanges();
        self.inPhieuLinhBu.Header = true;
        self.inPhieuLinhBu.YeuCauLinhDuocPhamId = self.phieuLinhId;
        self.inPhieuLinhBu.LoaiPhieuLinh = 2;
        self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.loadingPageDaDuyet();
          self.apiService.post<any>("YeuCauLinhDuocPham/GuiLaiPhieuLinhBu", self.yeuCauLinhDuocPham).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.closePopupLoadingDataDaDuyet();
                self.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhBuDuocPham", self.inPhieuLinhBu).subscribe(
                  resData => {
                    if (resData != undefined && resData != null) {
                      self.inPhieuLinhBu.Header = false;
                      self.dialog.open(PhieuLinhThuocBuPopupComponent, {
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
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
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

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.cancel();
      event.preventDefault();
    }
  }
}
