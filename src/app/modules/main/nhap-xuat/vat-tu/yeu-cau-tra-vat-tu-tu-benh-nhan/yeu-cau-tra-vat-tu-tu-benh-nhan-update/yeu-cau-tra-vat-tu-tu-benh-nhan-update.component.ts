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
import { YeuCauTraVatTuTuBenhNhan } from '../yeu-cau-tra-vat-tu-tu-benh-nhan.model';
import { YeuCauTraVatTuTuBenhNhanSharedComponent } from '../yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component';
import { PhieuTraVatTuTuBenhNhanPopupComponent } from '../phieu-tra-vat-tu-tu-benh-nhan-popup/phieu-tra-vat-tu-tu-benh-nhan-popup.component';
import { InPhieuHoanTraCompoment } from '../../../duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component';

@Component({
  selector: 'app-yeu-cau-tra-vat-tu-tu-benh-nhan-update',
  templateUrl: './yeu-cau-tra-vat-tu-tu-benh-nhan-update.component.html',
  styleUrls: ['./yeu-cau-tra-vat-tu-tu-benh-nhan-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class YeuCauTraVatTuTuBenhNhanUpdateComponent implements OnInit {
  documentType: DocumentType;
  yeuCauTraVatTu: YeuCauTraVatTuTuBenhNhan;
  popupAddingData: any;
  isHideDuyet: boolean = false;
  validationErrors: any;
  popupSavingData: any = null;
  isCreate: boolean = false;
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
  @ViewChild('temp', { read: YeuCauTraVatTuTuBenhNhanSharedComponent, static: false }) shared: YeuCauTraVatTuTuBenhNhanSharedComponent;

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
    this.documentType = DocumentType.TraVatTuTuBenhNhan;
    this.yeuCauTraVatTu = new YeuCauTraVatTuTuBenhNhan();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getTrangThaiPhieuTraVatTu(id);
    }
  }

  getTrangThaiPhieuTraVatTu(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<any>("YeuCauTraVatTuTuBenhNhan/GetTrangThaiPhieuTraVatTu?phieuTraId=" + id).subscribe(
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

  luuPhieuLinhTraVatTu() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    self.yeuCauTraVatTu = self.shared.getSharedData();
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu phiếu trả vật tư này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.savingPage();
          self.apiService.post<any>("YeuCauTraVatTuTuBenhNhan/GuiLaiPhieuTraVatTu", self.yeuCauTraVatTu).subscribe(
            (resultData) => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              self.closepopupSavingData();
              // let objIn = {
              //   YeuCauTraVatTuTuBenhNhanId: resultData,
              //   HostingName: window.location.protocol + "//" + window.location.host,
              // };
              // self.apiService.post<any>("YeuCauTraVatTuTuBenhNhan/InPhieuYeuCauTraVatTuTuBenhNhan", objIn).subscribe(
              //   resData => {
              //     if (resData != undefined && resData != null) {
              //       self.dialog.open(PhieuTraVatTuTuBenhNhanPopupComponent, {
              //         disableClose: true,
              //         width: "1200px",
              //         data: resData,
              //       }).afterClosed().subscribe(() => {
              //         self.router.navigate(['/nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu']);

              //       });
              //     }
              //   })
              self.dialog.open(InPhieuHoanTraCompoment, {
                disableClose: true,
                width: "1200px",
                data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: resultData, LaDuocPham: false, LaTuTruc: false, DuocDuyet: false },
              }).afterClosed().subscribe((result) => {
                self.router.navigate(['/nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu']);
              });
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

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.cancel();
      event.preventDefault();
    }
  }

}
