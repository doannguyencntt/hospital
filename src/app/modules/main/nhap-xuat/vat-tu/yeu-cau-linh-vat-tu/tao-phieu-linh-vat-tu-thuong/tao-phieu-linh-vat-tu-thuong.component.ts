import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { PhieuLinhVatTuThuongSharedComponent } from '../phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PhieuLinhVatTuThuong, TrangThaiTaoPhieuLinh, YeuCauLinhVatTu } from '../yeu-cau-linh-vat-tu.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuLinhVatTuThuongPopupComponent } from '../phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component';

@Component({
  selector: 'app-tao-phieu-linh-vat-tu-thuong',
  templateUrl: './tao-phieu-linh-vat-tu-thuong.component.html',
  styleUrls: ['./tao-phieu-linh-vat-tu-thuong.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class TaoPhieuLinhVatTuThuongComponent implements OnInit {

  @ViewChild(PhieuLinhVatTuThuongSharedComponent, { static: true }) shared: any;
  yeuCauLinhThuongVatTu: YeuCauLinhVatTu = new YeuCauLinhVatTu();
  documentType: DocumentType;
  popupLoadingData: any;
  validationErrors: any;
  isCreate: boolean = false;
  hostingName: string = null;
  trangThaiPhieuLinh: boolean = null;
  inPhieuLinhThuong: PhieuLinhVatTuThuong = new PhieuLinhVatTuThuong();
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
  loading: boolean = false;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhThuongVatTu;
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

  luuPhieuLinhThuongVatTu() {
    var self = this;
    self.yeuCauLinhThuongVatTu = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu phiếu lĩnh dược phẩm này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.loadingPage();
          self.yeuCauLinhThuongVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhThuongVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
          self.apiService.post<any>("YeuCauLinhVatTu/GuiPhieuLinhThuongVatTu", self.yeuCauLinhThuongVatTu).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.closePopupLoadingData();
                self.router.navigate(["/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/gui-lai-phieu-linh-vat-tu-thuong/" + result]);

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

  guiPhieuLinhThuongVatTu() {
    var self = this;
    self.yeuCauLinhThuongVatTu = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn gửi phiếu lĩnh dược phẩm này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.loadingPage();
          self.yeuCauLinhThuongVatTu.DaGui = true;
          self.yeuCauLinhThuongVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhThuongVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT) ? 1 : -1)
          self.apiService.post<any>("YeuCauLinhVatTu/GuiPhieuLinhThuongVatTu", self.yeuCauLinhThuongVatTu).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.closePopupLoadingData();
                self.dialog.open(ConfirmComponent, {
                  disableClose: false,
                  width: "500px",
                  data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn in phiếu phiếu lĩnh vật tư này không ?",
                  },
                }).afterClosed().subscribe((res) => {
                  if (res == "Yes") {
                    self.loadingPage();
                    self.inPhieuLinhThuong.Header = true;
                    self.inPhieuLinhThuong.YeuCauLinhVatTuId = result;
                    self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
                    self.apiService.post<any>("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhThuong).subscribe(
                      resData => {
                        if (resData != undefined && resData != null) {
                          self.closePopupLoadingData();
                          self.inPhieuLinhThuong.Header = false;
                          self.dialog.open(PhieuLinhVatTuThuongPopupComponent, {
                            disableClose: false,
                            width: '1200px',
                            data: { Model: resData },
                          }).afterClosed().subscribe(() => {
                            self.closePopupLoadingData();
                            self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })

  }


  cancel() {
    this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
