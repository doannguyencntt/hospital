import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { PhieuLinhThuocBuSharedComponent } from '../phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { PhieuLinhThuocThuong, YeuCauLinhBuDuocPham } from '../yeu-cau-linh-thuoc.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuLinhThuocBuPopupComponent } from '../phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component';
import { UrlService } from 'src/@vex/services/url.service';

@Component({
  selector: 'app-tao-phieu-linh-thuoc-bu',
  templateUrl: './tao-phieu-linh-thuoc-bu.component.html',
  styleUrls: ['./tao-phieu-linh-thuoc-bu.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class TaoPhieuLinhThuocBuComponent implements OnInit {
  yeuCauLinhDuocPham: YeuCauLinhBuDuocPham = new YeuCauLinhBuDuocPham();
  @ViewChild(PhieuLinhThuocBuSharedComponent, { static: true }) shared: any;
  loading: boolean = false;
  popupLoadingData: any = null;
  popupLoadingDataHoanThanh: any = null;
  documentType: DocumentType;
  validationErrors: any;
  isDaTao: boolean = false;
  isCreate: boolean = false;
  hostingName: string = null;
  flag: boolean = true;
  trangThaiPhieuLinh: boolean = null;
  inPhieuLinhBu: PhieuLinhThuocThuong = new PhieuLinhThuocThuong();
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
    private ref: ChangeDetectorRef, private location: Location,
    private urlService: UrlService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhBuDuocPham;
    this.route
      .queryParams
      .subscribe(v => {
        this.stringJson = v;
        this.khoLinhId = this.stringJson.KhoLinhId;
        this.khoLinhBuId = this.stringJson.KhoBuId;
      });
    if (window.location.protocol == "http:") {
      this.inPhieuLinhBu.HostingName = "http://" + window.location.host;
    } else {
      this.inPhieuLinhBu.HostingName = "https://" + window.location.host;
    }
    this.urlService.previousUrl$
      .subscribe((previousUrl: string) => {
        this.previousUrl = previousUrl;
      });
  }


  guiPhieuLinhBu(daGui: boolean) {
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
      var mess = "";
      if (daGui) {
        mess = "Bạn có muốn gửi phiếu lĩnh dược phẩm này không ?";
      }
      else {
        mess = "Bạn có muốn lưu phiếu lĩnh dược phẩm này không ?";
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
      self.yeuCauLinhDuocPham.DaGui = true;
      self.loadingPage();
      self.apiService.post<any>("YeuCauLinhDuocPham/GuiPhieuLinhBu", self.yeuCauLinhDuocPham).subscribe(
        (result) => {
          if (result != undefined && result != null) {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Tạo phiếu lĩnh"]));
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
                self.loadingPageHoanThanh();
                self.inPhieuLinhBu.Header = true;
                self.inPhieuLinhBu.YeuCauLinhDuocPhamId = result;
                self.inPhieuLinhBu.LoaiPhieuLinh = 2;
                self.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhBuDuocPham", self.inPhieuLinhBu).subscribe(
                  resData => {
                    if (resData != undefined && resData != null) {
                      self.closePopupLoadingDataHoanThanh();
                      self.inPhieuLinhBu.Header = false;
                      self.dialog.open(PhieuLinhThuocBuPopupComponent, {
                        disableClose: false,
                        width: '1200px',
                        data: { Model: resData },
                      }).afterClosed().subscribe(() => {
                        self.closePopupLoadingDataHoanThanh();
                        self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
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
                this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
              }
            });
          }
          self.closePopupLoadingData();
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
      self.apiService.post<any>("YeuCauLinhDuocPham/GuiPhieuLinhBu", self.yeuCauLinhDuocPham).subscribe(
        (result) => {
          if (result != undefined && result != null) {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu phiếu lĩnh"]));
            self.closePopupLoadingData();
            self.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/gui-lai-phieu-linh-thuoc-bu/" + result]);

          }
          self.closePopupLoadingData();
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

    // if (this.previousUrl.indexOf("duoc-pham-can-bu") >= 0) {
    //   this.location.back();
    // }
    // else {
    //   this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
    // }
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

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.cancel();
      event.preventDefault();
    }
  }
  xemPhieuLinh() {
    var self = this;
    self.yeuCauLinhDuocPham = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      if (self.yeuCauLinhDuocPham.YeuCauDuocPhamBenhViens.every(z => !z.CheckBox)) {
        self.notificationService.showError("Vui lòng chọn dược phẩm muốn xem phiếu.");
      } else {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận in",
            Message: "Bạn có muốn xem trước in  phiếu lĩnh dược phẩm này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            self.loadingPageHoanThanh();
            let dataIn = {
              KhoLinhId: this.khoLinhId,
              KhoLinhBuId: this.khoLinhBuId,
              HostingName: "http://" + window.location.host,
              YeuCauDuocPhamBenhViens: this.yeuCauLinhDuocPham.YeuCauDuocPhamBenhViens.filter(z =>z.CheckBox),
              
            };
            self.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhBuDuocPhamXemTruoc", dataIn).subscribe(
              resData => {
                if (resData != undefined && resData != null) {
                  self.closePopupLoadingDataHoanThanh();
                  self.inPhieuLinhBu.Header = false;
                  self.dialog.open(PhieuLinhThuocBuPopupComponent, {
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
