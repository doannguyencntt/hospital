import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { PhieuLinhThuocThuongSharedComponent } from '../phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { PhieuLinhThuocThuong, YeuCauLinhDuocPham } from '../yeu-cau-linh-thuoc.model';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PhieuLinhThuocThuongPopupComponent } from '../phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component';
import { TrangThaiTaoPhieuLinh } from '../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';

@Component({
  selector: 'app-tao-phieu-linh-thuoc-thuong',
  templateUrl: './tao-phieu-linh-thuoc-thuong.component.html',
  styleUrls: ['./tao-phieu-linh-thuoc-thuong.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class TaoPhieuLinhThuocThuongComponent implements OnInit {
  yeuCauLinhDuocPham: YeuCauLinhDuocPham = new YeuCauLinhDuocPham();
  documentType: DocumentType;
  popupLoadingData: any;
  validationErrors: any;
  isCreate: boolean = false;
  hostingName: string = null;
  trangThaiPhieuLinh: boolean = null;
  inPhieuLinhThuong: PhieuLinhThuocThuong = new PhieuLinhThuocThuong();
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
  @ViewChild(PhieuLinhThuocThuongSharedComponent, { static: true }) shared: any;
  loading: boolean = false;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef, private location: Location
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhThuongDuocPham;
    if (window.location.protocol == "http:") {
      this.inPhieuLinhThuong.HostingName = "http://" + window.location.host;
    } else {
      this.inPhieuLinhThuong.HostingName = "https://" + window.location.host;
    }
    this.trangThaiVo.TrangThai = null;
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

  guiPhieuLinhThuong() {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn gửi phiếu lĩnh dược phẩm này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.yeuCauLinhDuocPham = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.yeuCauLinhDuocPham.DaGui = true;
          self.loadingPage();
          self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
          self.apiService.post<any>("YeuCauLinhDuocPham/GuiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Gửi"]));
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
                    self.inPhieuLinhThuong.Header = true;
                    self.inPhieuLinhThuong.YeuCauLinhDuocPhamId = result;
                    self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
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

  luuPhieuLinhThuong() {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu phiếu lĩnh dược phẩm này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.yeuCauLinhDuocPham = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.yeuCauLinhDuocPham.DaGui = false;
          self.loadingPage();
          self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT) ? 1 : -1)
          self.apiService.post<any>("YeuCauLinhDuocPham/GuiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.closePopupLoadingData();
                self.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/gui-lai-phieu-linh-thuoc-thuong/" + result]);
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


  cancel() {
    //this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
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
