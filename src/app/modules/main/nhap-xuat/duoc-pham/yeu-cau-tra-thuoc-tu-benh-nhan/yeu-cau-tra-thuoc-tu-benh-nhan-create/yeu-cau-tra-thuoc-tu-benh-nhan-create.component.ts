import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { YeuCauTraThuocTuBenhNhan } from '../yeu-cau-tra-thuoc-tu-benh-nhan.model';
import { YeuCauTraThuocTuBenhNhanSharedComponent } from '../yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { TrangThaiTaoPhieuLinh } from '../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';
import { PhieuTraThuocTuBenhNhanPopupComponent } from '../phieu-tra-thuoc-tu-benh-nhan-popup/phieu-tra-thuoc-tu-benh-nhan-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { InPhieuHoanTraCompoment } from '../../duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component';

@Component({
  selector: 'app-yeu-cau-tra-thuoc-tu-benh-nhan-create',
  templateUrl: './yeu-cau-tra-thuoc-tu-benh-nhan-create.component.html',
  styleUrls: ['./yeu-cau-tra-thuoc-tu-benh-nhan-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class YeuCauTraThuocTuBenhNhanCreateComponent implements OnInit {
  documentType: DocumentType;
  yeuCauTraThuoc: YeuCauTraThuocTuBenhNhan;
  popupAddingData: any;
  popupLoadingData: any;
  validationErrors: any;
  isCreate: boolean = false;
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();

  @ViewChild(YeuCauTraThuocTuBenhNhanSharedComponent, { static: true }) shared: any;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef, private location: Location
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TraThuocTuBenhNhan;
    this.yeuCauTraThuoc = new YeuCauTraThuocTuBenhNhan();
    this.trangThaiVo.TrangThai = null;
  }

  addingPage() {
    this.popupAddingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }


  closePopupAddingData() {
    if (this.popupAddingData != undefined && this.popupAddingData != null) {
      this.popupAddingData.close();
    }
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
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

  guiPhieuTraDuocPham() {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn gửi phê duyệt cho hoàn trả thuốc này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.yeuCauTraThuoc = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.addingPage();
          self.apiService.post<any>("YeuCauTraThuocTuBenhNhan/GuiPhieuTraDuocPham", self.yeuCauTraThuoc).subscribe(
            (resultData) => {
              self.closePopupAddingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
              // self.loadingPage();
              // let objIn = {
              //   YeuCauTraDuocPhamTuBenhNhanId: resultData,
              //   HostingName: window.location.protocol + "//" + window.location.host,
              // };
              // self.apiService.post<any>("YeuCauTraThuocTuBenhNhan/InPhieuYeuCauTraThuocTuBenhNhan", objIn).subscribe(
              //   resData => {
              //     if (resData != undefined && resData != null) {
              //       self.closePopupLoadingData();
              //       self.dialog.open(PhieuTraThuocTuBenhNhanPopupComponent, {
              //         disableClose: true,
              //         width: "1200px",
              //         data: resData,
              //       }).afterClosed().subscribe(() => {
              //         self.router.navigate(['/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham']);
              //       });
              //     }
              //   },
              //   (err: ApiError) => {
              //     self.validationErrors = err.ValidationErrors;
              //     if (err.Message != "Validation Failed") {
              //       self.notificationService.showError(err.Message);
              //     }
              //     self.closePopupLoadingData();
              //   })
              self.dialog.open(InPhieuHoanTraCompoment, {
                disableClose: true,
                width: "1200px",
                data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: resultData, LaDuocPham: true, LaTuTruc: false , DuocDuyet: false},
              }).afterClosed().subscribe((result) => {
                self.router.navigate(['/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham']);
              });
            },


            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupAddingData();
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }

    })

  }


  cancel() {
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
