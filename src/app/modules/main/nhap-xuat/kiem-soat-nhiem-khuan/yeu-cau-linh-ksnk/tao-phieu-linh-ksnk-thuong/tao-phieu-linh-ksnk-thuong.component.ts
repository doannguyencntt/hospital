import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { PhieuLinhKSNKThuongSharedComponent } from '../phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PhieuLinhKSNKThuong, TrangThaiTaoPhieuLinh, YeuCauLinhKSNK ,PhieuLinhKSNKThuongs} from '../yeu-cau-linh-ksnk.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuLinhKSNKThuongPopupComponent } from '../phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component';

@Component({
  selector: 'app-tao-phieu-linh-ksnk-thuong',
  templateUrl: './tao-phieu-linh-ksnk-thuong.component.html',
  styleUrls: ['./tao-phieu-linh-ksnk-thuong.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class TaoPhieuLinhKSNKThuongComponent implements OnInit {

  @ViewChild(PhieuLinhKSNKThuongSharedComponent, { static: true }) shared: any;
  yeuCauLinhThuongKSNK: YeuCauLinhKSNK = new YeuCauLinhKSNK();
  documentType: DocumentType;
  popupLoadingData: any;
  validationErrors: any;
  isCreate: boolean = false;
  hostingName: string = null;
  trangThaiPhieuLinh: boolean = null;
  inPhieuLinhThuong: PhieuLinhKSNKThuong = new PhieuLinhKSNKThuong();
  inPhieuLinhThuongs: PhieuLinhKSNKThuongs = new PhieuLinhKSNKThuongs();
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
    this.documentType = DocumentType.TaoYeuCauLinhThuongKSNK;
    if (window.location.protocol == "http:") {
      this.inPhieuLinhThuong.HostingName = "http://" + window.location.host;
    } else {
      this.inPhieuLinhThuong.HostingName = "https://" + window.location.host;
    }
    this.trangThaiVo.TrangThai = null;

    if (window.location.protocol == "http:") {
      this.inPhieuLinhThuongs.HostingName = "http://" + window.location.host;
    } else {
      this.inPhieuLinhThuongs.HostingName = "https://" + window.location.host;
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

  luuPhieuLinhThuongKSNK() {

    var self = this;
    self.yeuCauLinhThuongKSNK = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu phiếu lĩnh ksnk này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.loadingPage();
          self.yeuCauLinhThuongKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhThuongKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
          self.apiService.post<any>("YeuCauLinhKSNK/GuiPhieuLinhThuongKSNK", self.yeuCauLinhThuongKSNK).subscribe(
            (result) => {
              if (result != undefined && result != null && result[0] != undefined && result[0] != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.closePopupLoadingData();
                self.router.navigate(["/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/gui-lai-phieu-linh-ksnk-thuong/" + result[0].YeuCauLinhVatTuId + "/"+ result[0].LoaiDuocPhamHayVatTu + "/true"]);

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

  guiPhieuLinhThuongKSNK() {
    var self = this;
    self.yeuCauLinhThuongKSNK = self.shared.getSharedData();
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
          self.yeuCauLinhThuongKSNK.DaGui = true;
          self.yeuCauLinhThuongKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhThuongKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT) ? 1 : -1)
          self.apiService.post<any>("YeuCauLinhKSNK/GuiPhieuLinhThuongKSNK", self.yeuCauLinhThuongKSNK).subscribe(
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
                    self.inPhieuLinhThuongs.Header = true;
                    self.inPhieuLinhThuongs.YeuCauLinhVatTuIds = result;
                    self.inPhieuLinhThuongs.LoaiPhieuLinh = 1;

                    self.apiService.post<any>("YeuCauLinhKSNK/InPhieuLinhThuongKSNK", self.inPhieuLinhThuongs).subscribe(
                      resData => {
                        if (resData != undefined && resData != null) {
                          self.closePopupLoadingData();
                          self.inPhieuLinhThuong.Header = false;
                          self.dialog.open(PhieuLinhKSNKThuongPopupComponent, {
                            disableClose: false,
                            width: '1200px',
                            data: { Model: resData },
                          }).afterClosed().subscribe(() => {
                            self.closePopupLoadingData();
                            self.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
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
                    self.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
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
    this.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
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
