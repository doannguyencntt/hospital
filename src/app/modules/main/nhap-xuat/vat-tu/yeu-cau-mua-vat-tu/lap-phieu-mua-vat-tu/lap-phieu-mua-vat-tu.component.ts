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
import { PhieuYeuCauMuaVatTu, YeuCauMuaVatTu } from '../yeu-cau-mua-vat-tu.model';
import { TrangThaiTaoPhieuLinh } from '../../yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';
import { LapPhieuMuaVatTuSharedComponent } from '../lap-phieu-mua-vat-tu-shared/lap-phieu-mua-vat-tu-shared.component';
import { GuiPhieuMuaVatTuConfirmComponent } from '../gui-phieu-mua-vat-tu-confirm/gui-phieu-mua-vat-tu-confirm.component';
import { PhieuMuaVatTuComponent } from '../phieu-mua-vat-tu/phieu-mua-vat-tu.component';
@Component({
  selector: 'app-lap-phieu-mua-vat-tu',
  templateUrl: './lap-phieu-mua-vat-tu.component.html',
  styleUrls: ['./lap-phieu-mua-vat-tu.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class LapPhieuMuaVatTuComponent implements OnInit {
  documentType: DocumentType;
  yeuCauMuaVatTu: YeuCauMuaVatTu;
  popupSavingData: any;
  popupLoadingData: any;

  validationErrors: any;
  isCreate: boolean = false;
  inPhieu: PhieuYeuCauMuaVatTu = new PhieuYeuCauMuaVatTu();
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
  @ViewChild(LapPhieuMuaVatTuSharedComponent, { static: true }) shared: any;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef, private location: Location
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachYeuCauDuTruMuaVatTu;
    this.yeuCauMuaVatTu = new YeuCauMuaVatTu();
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

  guiPhieuMuaVatTu() {
    var self = this;
    self.dialog.open(GuiPhieuMuaVatTuConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn tạo phiếu mua vật tư dự trù này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.yeuCauMuaVatTu = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.savingPage();
          self.apiService.post<any>("YeuCauMuaVatTu/GuiPhieuMuaVatTuDuTru", self.yeuCauMuaVatTu).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
                self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu']);
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
        self.yeuCauMuaVatTu = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.savingPage();
          self.apiService.post<any>("YeuCauMuaVatTu/GuiPhieuMuaVatTuDuTru", self.yeuCauMuaVatTu).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
                self.closePopupSavingData();
                self.dialog.open(PhieuMuaVatTuComponent, {
                  disableClose: false,
                  width: '1200px',
                  data: { Id: result},
                }).afterClosed().subscribe(() => {
                  self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu']);
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
