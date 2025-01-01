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
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PhieuYeuCauMuaVatTu, YeuCauMuaVatTu } from '../yeu-cau-mua-ksnk.model';
import { LapPhieuMuaKSNKSharedComponent } from '../lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component';
import { GuiPhieuMuaKSNKConfirmComponent } from '../gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component';
import { PhieuMuaKSNKComponent } from '../phieu-mua-ksnk/phieu-mua-ksnk.component';

@Component({
  selector: 'app-lap-phieu-mua-ksnk-gui-lai',
  templateUrl: './lap-phieu-mua-ksnk-gui-lai.component.html',
  styleUrls: ['./lap-phieu-mua-ksnk-gui-lai.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class LapPhieuMuaKSNKGuiLaiComponent implements OnInit {

  yeuCauMuaVatTu: YeuCauMuaVatTu;
  inPhieu: PhieuYeuCauMuaVatTu = new PhieuYeuCauMuaVatTu();
  isHideDuyet: boolean = false;
  documentType: DocumentType;
  popupSavingData: any;
  popupLoadingData: any;
  trangThaiVo: any = null;
  validationErrors: any;
  isCreate: boolean = false;
  phieuMuaVatTuId: number = null;

  @ViewChild('temp', { read: LapPhieuMuaKSNKSharedComponent, static: false }) shared: LapPhieuMuaKSNKSharedComponent;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,

    private ref: ChangeDetectorRef, private location: Location
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.YeuCauDuTruMuaNhomKSNK;
    this.yeuCauMuaVatTu = new YeuCauMuaVatTu();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.GetTrangThaiPhieuMuaDuTru(id);
      this.phieuMuaVatTuId = id;
    }
  }

  GetTrangThaiPhieuMuaDuTru(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<any>("YeuCauMuaKSNK/GetTrangThaiPhieuMuaKSNK?phieuMuaKSNKId=" + id).subscribe(
        (result) => {
          this.trangThaiVo = result;
        })
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  closePopupSavingData() {
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }

  guiLaiPhieuMuaVatTu() {
    var self = this;
    self.dialog.open(GuiPhieuMuaKSNKConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu phiếu mua kiểm soát nhiễm khuẩn dự trù này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.yeuCauMuaVatTu = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.savingPage();
          self.apiService.post<any>("YeuCauMuaKSNK/GuiLaiPhieuMuaKSNKDuTru", self.yeuCauMuaVatTu).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.router.navigate(['/nhap-xuat/ksnk/yeu-cau-mua-ksnk']);
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
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.savingPage();
          self.apiService.post<any>("YeuCauMuaKSNK/GuiLaiPhieuMuaKSNKDuTru", self.yeuCauMuaVatTu).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.closePopupSavingData();
                self.dialog.open(PhieuMuaKSNKComponent, {
                  disableClose: false,
                  width: '1200px',
                  data: { Id: self.phieuMuaVatTuId },
                }).afterClosed().subscribe(() => {
                  self.router.navigate(['/nhap-xuat/ksnk/yeu-cau-mua-ksnk']);
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

  inPhieuMuaVatTu() {
    var self = this;
    if (this.trangThaiVo != null && this.trangThaiVo.IsKhoaDuyet == null && this.trangThaiVo.TrangThai == null) {
      self.yeuCauMuaVatTu = self.shared.getSharedData();
      self.validationErrors = [];
      self.ref.detectChanges();
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
        self.apiService.post<any>("YeuCauMuaKSNK/GuiLaiPhieuMuaKSNKDuTru", self.yeuCauMuaVatTu).subscribe(
          (result) => {
            if (result != undefined && result != null) {
              self.loadingPage();
              self.dialog.open(PhieuMuaKSNKComponent, {
                disableClose: false,
                width: '1200px',
                data: { Id: self.phieuMuaVatTuId },
              }).afterClosed().subscribe(() => {
                self.closePopupLoadingData();
              });
            }
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
          });
      } else {
        self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    } else {
      self.loadingPage();
      self.dialog.open(PhieuMuaKSNKComponent, {
        disableClose: false,
        width: '1200px',
        data: { Id: self.phieuMuaVatTuId },
      }).afterClosed().subscribe(() => {
        self.closePopupLoadingData();
      });
    }
  }

  anHienButtonDuyet(event: any) {
    if (event) {
      this.isHideDuyet = true;
    }
    else {
      this.isHideDuyet = false;
    }
  }

  cancel() {
    this.location.back();
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

  savingPage() {
    this.popupSavingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
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
