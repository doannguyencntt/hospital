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
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { TrangThaiTaoPhieuLinh } from '../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { DieuChuyenKhoNoiBoDuocPhamSharedComponent } from '../dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component';
import { YeuCauDieuChuyenDuocPham, YeuCauDieuChuyenDuocPhamPhieuIn } from '../dieu-chuyen-kho-noi-bo-duoc-pham.model';
import { DieuChuyenKhoNoiBoDuocPhamPopupComponent } from '../dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component';
@Component({
  selector: 'app-dieu-chuyen-kho-noi-bo-duoc-pham-create',
  templateUrl: './dieu-chuyen-kho-noi-bo-duoc-pham-create.component.html',
  styleUrls: ['./dieu-chuyen-kho-noi-bo-duoc-pham-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DieuChuyenKhoNoiBoDuocPhamCreateComponent implements OnInit {
  documentType: DocumentType;
  yeuCauDieuChuyenDuocPham: YeuCauDieuChuyenDuocPham;
  popupAddingData: any;
  popupLoadingData: any;
  validationErrors: any;
  isCreate: boolean = false;
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
  yeuCauDieuChuyenDuocPhamPhieuIn: YeuCauDieuChuyenDuocPhamPhieuIn = new YeuCauDieuChuyenDuocPhamPhieuIn();
  @ViewChild(DieuChuyenKhoNoiBoDuocPhamSharedComponent, { static: true }) shared: any;
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
    this.yeuCauDieuChuyenDuocPham = new YeuCauDieuChuyenDuocPham();
    this.yeuCauDieuChuyenDuocPhamPhieuIn.HostingName = window.location.protocol + "//" + window.location.host;
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

  guiYeuCauDieuChuyenThuoc() {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn thêm dữ liệu này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.yeuCauDieuChuyenDuocPham = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.addingPage();
          self.apiService.post<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/ThemYeuCauDieuChuyenThuoc", self.yeuCauDieuChuyenDuocPham).subscribe(
            (resultData) => {
              self.closePopupAddingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
              // self.router.navigate(['/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham']);
              self.loadingPage();
              self.yeuCauDieuChuyenDuocPhamPhieuIn.YeuCauDieuChuyenDuocPhamId = resultData;
              self.apiService.post<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/InPhieuXuatKhoDuocPhamDieuChuyen", self.yeuCauDieuChuyenDuocPhamPhieuIn).subscribe(
                resData => {
                  if (resData != undefined && resData != null) {
                    self.closePopupLoadingData();
                    self.dialog.open(DieuChuyenKhoNoiBoDuocPhamPopupComponent, {
                      disableClose: true,
                      width: "1200px",
                      data: resData,
                    }).afterClosed().subscribe(() => {
                      // self.router.navigate(['/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham']);
                      self.router.navigate(['/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham']);
                    });
                  }
                },
                (err: ApiError) => {
                  self.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                  }
                  self.closePopupLoadingData();
                })
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
