import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NhapKhoShareComponent } from '../nhap-kho-share/nhap-kho-share.component';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { NhapKhoDuocPham } from '../nhap-kho.model';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuNhapKhoDuocPhamPopupComponent } from '../phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component';
import { Location } from '@angular/common';
import { DsDuocPhamTrungNccPopupComponent } from '../ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component';

@Component({
  selector: 'app-nhap-kho-create',
  templateUrl: './nhap-kho-create.component.html',
  styleUrls: ['./nhap-kho-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})

export class NhapKhoCreateComponent implements OnInit {
  nhapKho: NhapKhoDuocPham = new NhapKhoDuocPham();
  documentType: DocumentType = DocumentType.NhapKhoDuocPham;
  validationErrors: any;
  popupLoadingData: any;
  @ViewChild(NhapKhoShareComponent, { static: true }) shared: any;
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef,
    private location: Location) { }

  ngOnInit() {
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
  cancel() {
    this.location.back();
  }
  create() {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn thêm dữ liệu này không?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.nhapKho = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.loadingPage();
          self.apiService.post<any>("NhapKhoDuocPham/ThemYeuCauNhapKhoDuocPham", self.nhapKho).subscribe(
            (result) => {
              self.closePopupLoadingData();
              if (result != undefined && result != null) {
                if (result.length > 0) {
                  self.dialog.open(DsDuocPhamTrungNccPopupComponent, {
                    disableClose: false,
                    width: '1200px',
                    data: result,
                  }).afterClosed().subscribe(() => {
                  });
                }
                else {
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
                  self.closePopupLoadingData();
                  self.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: "500px",
                    data: {
                      Title: "Xác nhận in",
                      Message: "Bạn có muốn in phiếu nhập kho này không ?",
                    },
                  }).afterClosed().subscribe((res) => {
                    if (res == "Yes") {
                      self.loadingPage();
                      self.apiService.post<any>("NhapKhoDuocPham/InPhieuYeuCauNhapKhoDuocPham?yeuCauNhapKhoDuocPhamId=" + result).subscribe(
                        resData => {
                          if (resData != undefined && resData != null) {
                            self.closePopupLoadingData();
                            self.dialog.open(PhieuNhapKhoDuocPhamPopupComponent, {
                              disableClose: false,
                              width: '1200px',
                              data: resData,
                            }).afterClosed().subscribe(() => {
                              self.closePopupLoadingData();
                              this.router.navigate(['/nhap-xuat/duoc-pham/nhap-kho']);
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
                      this.router.navigate(['/nhap-xuat/duoc-pham/nhap-kho']);
                    }
                  });
                }
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

  onCreated() {
    this.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
  }
}
