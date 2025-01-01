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
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PhieuYeuCauMuaThuoc, YeuCauMuaThuoc } from '../yeu-cau-mua-thuoc.model';
import { LapPhieuMuaDuocPhamSharedComponent } from '../lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component';
import { TrangThaiTaoPhieuLinh } from '../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';
import { GuiPhieuMuaDuocPhamConfirmComponent } from '../gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component';
import { PhieuMuaDuocPhamComponent } from '../phieu-mua-duoc-pham/phieu-mua-duoc-pham.component';
@Component({
  selector: 'app-lap-phieu-mua-duoc-pham',
  templateUrl: './lap-phieu-mua-duoc-pham.component.html',
  styleUrls: ['./lap-phieu-mua-duoc-pham.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class LapPhieuMuaDuocPhamComponent implements OnInit {
  documentType: DocumentType;
  yeuCauMuaThuoc: YeuCauMuaThuoc;
  popupSavingData: any;
  popupLoadingData: any;

  validationErrors: any;
  isCreate: boolean = false;
  inPhieu: PhieuYeuCauMuaThuoc = new PhieuYeuCauMuaThuoc();
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
  @ViewChild(LapPhieuMuaDuocPhamSharedComponent, { static: true }) shared: any;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef, private location: Location
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachYeuCauDuTruMuaDuocPham;
    this.yeuCauMuaThuoc = new YeuCauMuaThuoc();
    this.trangThaiVo.TrangThai = null;
  }

  savingPage() {
    this.popupSavingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closePopupSavingData() {
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

  guiPhieuMuaDuocPham() {
    var self = this;
    self.dialog.open(GuiPhieuMuaDuocPhamConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn tạo phiếu mua dược phẩm dự trù này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.yeuCauMuaThuoc = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.savingPage();
          self.apiService.post<any>("YeuCauMuaDuocPham/GuiPhieuMuaDuocPhamDuTru", self.yeuCauMuaThuoc).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
                self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham']);
                self.closePopupSavingData();
              }
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupSavingData();
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
      else if (res == "YesAndPrint") {
        self.yeuCauMuaThuoc = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.savingPage();
          self.apiService.post<any>("YeuCauMuaDuocPham/GuiPhieuMuaDuocPhamDuTru", self.yeuCauMuaThuoc).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
                self.closePopupSavingData();
                self.dialog.open(PhieuMuaDuocPhamComponent, {
                  disableClose: false,
                  width: '1200px',
                  data: { Id: result, Loai: self.yeuCauMuaThuoc.NhomDuocPhamDuTru },
                }).afterClosed().subscribe(result => {
                  self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham']);
                });
              }
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupSavingData();
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
