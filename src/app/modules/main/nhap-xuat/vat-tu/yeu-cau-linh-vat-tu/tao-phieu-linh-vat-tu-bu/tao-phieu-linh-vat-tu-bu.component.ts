import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { PhieuLinhVatTuBuGuiLaiSharedComponent } from '../phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component';
import { Location } from '@angular/common';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuLinhVatTuThuong, YeuCauLinhVatTu } from '../yeu-cau-linh-vat-tu.model';
import { PhieuLinhVatTuThuongPopupComponent } from '../phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component';
import { UrlService } from 'src/@vex/services/url.service';
@Component({
  selector: 'app-tao-phieu-linh-vat-tu-bu',
  templateUrl: './tao-phieu-linh-vat-tu-bu.component.html',
  styleUrls: ['./tao-phieu-linh-vat-tu-bu.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class TaoPhieuLinhVatTuBuComponent implements OnInit {

  @ViewChild(PhieuLinhVatTuBuGuiLaiSharedComponent, { static: true }) shared: any;

  yeuCauLinhBuVatTu: YeuCauLinhVatTu = new YeuCauLinhVatTu();
  documentType: DocumentType;
  popupLoadingData: any;
  popupLoadingDataHoanThanh: any;

  validationErrors: any;
  isCreate: boolean = false;
  hostingName: string = null;
  trangThaiPhieuLinh: boolean = null;
  inPhieuLinhThuong: PhieuLinhVatTuThuong = new PhieuLinhVatTuThuong();
  loading: boolean = false;
  flag: boolean = true;
  previousUrl: string;
  khoLinhId: any;
  khoLinhBuId: any;
  stringJson: any;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef,
    private location: Location,
    private urlService: UrlService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhBuVatTu;
    this.route
      .queryParams
      .subscribe(v => {
        this.stringJson = v;
        this.khoLinhId = this.stringJson.KhoLinhId;
        this.khoLinhBuId = this.stringJson.KhoBuId;
      });
    if (window.location.protocol == "http:") {
      this.inPhieuLinhThuong.HostingName = "http://" + window.location.host;
    } else {
      this.inPhieuLinhThuong.HostingName = "https://" + window.location.host;
    }
    this.urlService.previousUrl$
      .subscribe((previousUrl: string) => {
        this.previousUrl = previousUrl;
      });
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

  loadingPageHoanThanh() {
    this.popupLoadingDataHoanThanh = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closePopupLoadingDataHoanThanh() {
    if (this.popupLoadingDataHoanThanh != undefined && this.popupLoadingDataHoanThanh != null) {
      this.popupLoadingDataHoanThanh.close();
    }
  }

  luuPhieuLinhVatTu(daGui: boolean) {
    var self = this;
    self.yeuCauLinhBuVatTu = self.shared.getSharedData();
    if (self.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.every(z => !z.CheckBox)) {
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
            self.xacNhanTaoPhieuLinh();
          }
          else {
            self.xacNhanLuuPhieuLinh();
          }
        }
      })
    }

  }

  xacNhanTaoPhieuLinh() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      self.yeuCauLinhBuVatTu.DaGui = true;
      self.loadingPage();
      self.apiService.post<any>("YeuCauLinhVatTu/GuiPhieuLinhBuVatTu", self.yeuCauLinhBuVatTu).subscribe(
        (result) => {
          if (result != undefined && result != null) {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Tạo phiếu lĩnh"]));
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
                self.loadingPageHoanThanh();
                self.inPhieuLinhThuong.Header = true;
                self.inPhieuLinhThuong.YeuCauLinhVatTuId = result;
                self.inPhieuLinhThuong.LoaiPhieuLinh = 2;
                self.apiService.post<any>("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhThuong).subscribe(
                  resData => {
                    if (resData != undefined && resData != null) {
                      self.closePopupLoadingDataHoanThanh();
                      self.inPhieuLinhThuong.Header = false;
                      self.dialog.open(PhieuLinhVatTuThuongPopupComponent, {
                        disableClose: false,
                        width: '1200px',
                        data: { Model: resData },
                      }).afterClosed().subscribe(() => {
                        self.closePopupLoadingDataHoanThanh();
                        self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
                      });
                    }
                  },
                  (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                      self.notificationService.showError(err.Message);
                    }
                    self.closePopupLoadingDataHoanThanh();
                  }
                );
              } else {
                this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
              }
            });
          }
          // self.closePopupLoadingData();
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

  xacNhanLuuPhieuLinh() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      self.loadingPage();
      self.apiService.post<any>("YeuCauLinhVatTu/GuiPhieuLinhBuVatTu", self.yeuCauLinhBuVatTu).subscribe(
        (result) => {
          if (result != undefined && result != null) {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Tạo phiếu lĩnh"]));
            self.closePopupLoadingData();
            self.router.navigate(["/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/gui-lai-phieu-linh-vat-tu-bu/" + result]);
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
  cancel() {
    this.location.back();
    // if(this.previousUrl.indexOf("vat-tu-can-bu")>=0)
    // {
    //   this.location.back();
    // }
    // else
    // {
    //   this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
    // }    
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.cancel();
      event.preventDefault();
    }
  }
  XemPhieuLinh() {
    var self = this;
    self.yeuCauLinhBuVatTu = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if (self.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.every(z => !z.CheckBox)) {
        self.notificationService.showError("Vui lòng chọn vật tư muốn xem phiếu.");
      } else {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có muốn in phiếu lĩnh vật tư này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            self.loadingPageHoanThanh();
            let dataIn = {
              KhoLinhId: this.khoLinhId,
              KhoLinhBuId: this.khoLinhBuId,
              HostingName: "http://" + window.location.host,
              YeuCauVatTuBenhViens: self.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.filter(d=>d.CheckBox)
            };
            self.apiService.post<any>("YeuCauLinhVatTu/InPhieuLinhBuVatTuXemTruoc", dataIn).subscribe(
              resData => {
                if (resData != undefined && resData != null) {
                  self.closePopupLoadingDataHoanThanh();
                  self.inPhieuLinhThuong.Header = false;
                  self.dialog.open(PhieuLinhVatTuThuongPopupComponent, {
                    disableClose: false,
                    width: '1200px',
                    data: { Model: resData, showIn: false },
                  }).afterClosed().subscribe(() => {
                  });
                }
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
              }
            );
          }
        });
      }
     
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
