import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NhapKhoShareComponent } from '../nhap-kho-share/nhap-kho-share.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { InPhieuNhapKhoVatTu, NhapKhoVatTu } from '../nhap-kho';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuNhapKhoDuocPhamPopupComponent } from '../../../duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component';
import { Location } from '@angular/common';
import { DsVatTuTrungNccPopupComponent } from '../ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component';
import { PhieuNhapKhoVatTuPopupComponent } from '../phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component';
import { XacNhanChonPhieuInVatTuPopupComponent } from '../xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component';

@Component({
  selector: 'app-nhap-kho-update',
  templateUrl: './nhap-kho-update.component.html',
  styleUrls: ['./nhap-kho-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class NhapKhoUpdateComponent implements OnInit {
  inPhieuNhapKhoVatTu: InPhieuNhapKhoVatTu = new InPhieuNhapKhoVatTu();
  nhapKhoVatTu: NhapKhoVatTu = new NhapKhoVatTu();
  documentType: DocumentType = DocumentType.NhapKhoVatTu;
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

  update() {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn lưu dữ liệu này không?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.nhapKhoVatTu = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.loadingPage();
          self.apiService.post<any>("NhapKhoVatTu/CapNhatYeuCauNhapKhoVatTu", self.nhapKhoVatTu).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                if (result.length > 0) {
                  self.dialog.open(DsVatTuTrungNccPopupComponent, {
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

                      self.inPhieuNhapKhoVatTu.HostingName = window.location.protocol + "//" + window.location.host;
                      self.inPhieuNhapKhoVatTu.YeuCauNhapKhoVatTuId = result;
                      self.inPhieuNhapKhoVatTu.CoTheoBenhVien = true;
                      self.inPhieuNhapKhoVatTu.CoTheoThongTu = true;
                      self.dialog.open(XacNhanChonPhieuInVatTuPopupComponent, {
                        disableClose: false,
                        width: "400px",
                        data: self.inPhieuNhapKhoVatTu,
                      }).afterClosed().subscribe(() => {
                        this.router.navigateByUrl('/nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
                      });
                      // self.loadingPage();
                      // self.apiService.post<any>("NhapKhoVatTu/InPhieuYeuCauNhapKhoVatTu", self.inPhieuNhapKhoVatTu).subscribe(
                      //   resData => {
                      //     if (resData != undefined && resData != null) {
                      //       self.closePopupLoadingData();
                      //       self.dialog.open(PhieuNhapKhoVatTuPopupComponent, {
                      //         disableClose: false,
                      //         width: '1200px',
                      //         data: resData,
                      //       }).afterClosed().subscribe(() => {
                      //         self.closePopupLoadingData();
                      //         this.location.back();
                      //       });
                      //     }
                      //   },
                      //   (err: ApiError) => {
                      //     self.validationErrors = err.ValidationErrors;
                      //     if (err.Message != "Validation Failed") {
                      //       self.notificationService.showError(err.Message);
                      //     }
                      //     self.closePopupLoadingData();
                      //   }
                      // );
                    } else {
                      // this.location.back();
                      this.router.navigateByUrl('/nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
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


  onUpdated() {
    //this.router.navigate(['nhap-xuat/vat-tu/nhap-kho']);
    this.router.navigateByUrl('nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
  }

}
