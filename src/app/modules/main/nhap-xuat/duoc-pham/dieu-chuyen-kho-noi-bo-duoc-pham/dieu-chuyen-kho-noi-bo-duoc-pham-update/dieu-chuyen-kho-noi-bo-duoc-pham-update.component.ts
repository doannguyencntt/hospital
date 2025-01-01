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
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { TrangThaiTaoPhieuLinh } from '../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { DieuChuyenKhoNoiBoDuocPhamSharedComponent } from '../dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component';
import { YeuCauDieuChuyenDuocPham, YeuCauDieuChuyenDuocPhamPhieuIn } from '../dieu-chuyen-kho-noi-bo-duoc-pham.model';
import { DieuChuyenKhoNoiBoDuocPhamPopupComponent } from '../dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component';
@Component({
  selector: 'app-dieu-chuyen-kho-noi-bo-duoc-pham-update',
  templateUrl: './dieu-chuyen-kho-noi-bo-duoc-pham-update.component.html',
  styleUrls: ['./dieu-chuyen-kho-noi-bo-duoc-pham-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DieuChuyenKhoNoiBoDuocPhamUpdateComponent implements OnInit {
  documentType: DocumentType;
  yeuCauDieuChuyenDuocPham: YeuCauDieuChuyenDuocPham;
  popupAddingData: any;
  isHideDuyet: boolean = false;
  validationErrors: any;
  popupSavingData: any = null;
  popupLoadingData: any = null;
  isCreate: boolean = false;
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
  yeuCauDieuChuyenDuocPhamPhieuIn: YeuCauDieuChuyenDuocPhamPhieuIn = new YeuCauDieuChuyenDuocPhamPhieuIn();
  @ViewChild('temp', { read: DieuChuyenKhoNoiBoDuocPhamSharedComponent, static: false }) shared: DieuChuyenKhoNoiBoDuocPhamSharedComponent;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef, private location: Location
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachDieuChuyenNoiBoDuocPham;
    this.yeuCauDieuChuyenDuocPham = new YeuCauDieuChuyenDuocPham();
    this.yeuCauDieuChuyenDuocPhamPhieuIn.HostingName = window.location.protocol + "//" + window.location.host;
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getTrangThaiPhieuTraDuocPham(id);
      this.yeuCauDieuChuyenDuocPhamPhieuIn.YeuCauDieuChuyenDuocPhamId = id;
    }
  }

  getTrangThaiPhieuTraDuocPham(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/GetTrangThaiYeuCauDieuChuyen?yeuCauDieuChuyenDuocPhamId=" + id).subscribe(
        (result) => {
          this.trangThaiVo = result;
        })
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  savingPage() {
    this.popupSavingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closepopupSavingData() {
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
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

  guiLaiYeuCauDieuChuyenThuoc() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    self.yeuCauDieuChuyenDuocPham = self.shared.getSharedData();
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn lưu dữ liệu này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.savingPage();
          self.apiService.post<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/CapNhatYeuCauDieuChuyenThuoc", self.yeuCauDieuChuyenDuocPham).subscribe(
            (resultData) => {
              self.closepopupSavingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              // self.location.back();
              window.location.reload();

              // self.loadingPage();
              // let objIn = {
              //   YeuCauTraDuocPhamTuBenhNhanId: resultData,
              //   HostingName: window.location.protocol + "//" + window.location.host,
              // };
              // self.apiService.post<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/InPhieuXuatKhoDuocPhamDieuChuyen", objIn).subscribe(
              //   resData => {
              //     if (resData != undefined && resData != null) {
              //       self.closePopupLoadingData();
              //       self.dialog.open(DieuChuyenKhoNoiBoDuocPhamPopupComponent, {
              //         disableClose: true,
              //         width: "1200px",
              //         data: resData,
              //       }).afterClosed().subscribe(() => {
              //         self.location.back();
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
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closepopupSavingData();
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })
  }
  inPhieu() {
    var self = this;
    self.loadingPage();
    self.apiService.post<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/InPhieuXuatKhoDuocPhamDieuChuyen", self.yeuCauDieuChuyenDuocPhamPhieuIn).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          self.dialog.open(DieuChuyenKhoNoiBoDuocPhamPopupComponent, {
            disableClose: true,
            width: "1200px",
            data: resData,
          }).afterClosed().subscribe(() => {
            // self.location.back();
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
