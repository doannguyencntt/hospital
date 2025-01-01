import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
import { XuatKhoKhacKSNKSharedComponent } from '../xuat-kho-khac-ksnk-shared/xuat-kho-khac-ksnk-shared.component';
import { LoaiDuocPhamVatTu, TrangThaiDuyetKho, XuatKhoVatTuKhac } from '../xuat-kho-khac-ksnk.model';
import { TrangThaiTaoPhieuLinh } from '../../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';
import { XuatKhoKSNKInPhieuDPVTPopupComponent } from '../xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component';

@Component({
  selector: 'app-xuat-kho-khac-ksnk-create',
  templateUrl: './xuat-kho-khac-ksnk-create.component.html',
  styleUrls: ['./xuat-kho-khac-ksnk-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})

export class XuatKhoKhacKSNKCreateComponent implements OnInit {
  documentType: DocumentType;
  xuatKhoKhac: XuatKhoVatTuKhac;
  popupAddingData: any;
  popupLoadingData: any;
  validationErrors: any[] = [];
  isCreate: boolean = false;
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();

  @ViewChild(XuatKhoKhacKSNKSharedComponent, { static: true }) shared: any;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef, private location: Location
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.XuatKhoKhacVatTuThuocNhomKSNK;
    this.xuatKhoKhac = new XuatKhoVatTuKhac();
    // this.yeuCauDieuChuyenDuocPhamPhieuIn.HostingName = window.location.protocol + "//" + window.location.host;
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

  cancel() {
    // this.location.back();
    this.router.navigateByUrl('nhap-xuat/ksnk/xuat-kho-khac?holdQuery=true');

  }

  create() {
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
        self.xuatKhoKhac = self.shared.getSharedData();
        self.xuatKhoKhac.HostingName = window.location.protocol + "//" + window.location.host;
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.addingPage();
          self.apiService.post<any>("XuatKhoKhacKSNK/ThemYeuCauXuatVatTuKhac", self.xuatKhoKhac).subscribe(
            (resultData) => {
              self.closePopupAddingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
              self.dialog.open(XuatKhoKSNKInPhieuDPVTPopupComponent, {
                disableClose: false,
                width: '1200px',
                data: resultData.PhieuInDuocPhamVaVatTus,
              }).afterClosed().subscribe(result => {
                let url = '/xem-chi-tiet';
                if (resultData !== null && resultData.XuatVatTuId !== null && resultData.XuatDuocPhamId !== null) {
                  this.router.navigate(["/nhap-xuat/ksnk/xuat-kho-khac" + url], { queryParams: { id: resultData.XuatVatTuId, tinhtrang: TrangThaiDuyetKho.ChuaDuyet, loaiduocphamvattu: LoaiDuocPhamVatTu.LoaiVatTu } });
                }
                else if (resultData !== null && resultData.XuatDuocPhamId !== null) {
                  this.router.navigate(["/nhap-xuat/ksnk/xuat-kho-khac" + url], { queryParams: { id: resultData.XuatDuocPhamId, tinhtrang: TrangThaiDuyetKho.ChuaDuyet, loaiduocphamvattu: LoaiDuocPhamVatTu.LoaiDuocPham } });
                }
                else if (resultData !== null && resultData.XuatVatTuId !== null) {
                  this.router.navigate(["/nhap-xuat/ksnk/xuat-kho-khac" + url], { queryParams: { id: resultData.XuatVatTuId, tinhtrang: TrangThaiDuyetKho.ChuaDuyet, loaiduocphamvattu: LoaiDuocPhamVatTu.LoaiVatTu } });
                }
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

  duyetXuat() {
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
        self.xuatKhoKhac = self.shared.getSharedData();
        self.xuatKhoKhac.LaLuuDuyet = true;
        self.xuatKhoKhac.HostingName = window.location.protocol + "//" + window.location.host;
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.addingPage();
          self.apiService.post<any>("XuatKhoKhacKSNK/ThemYeuCauXuatVatTuKhac", self.xuatKhoKhac).subscribe(
            (resultData) => {
              self.closePopupAddingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
              self.dialog.open(XuatKhoKSNKInPhieuDPVTPopupComponent, {
                disableClose: false,
                width: '1200px',
                data: resultData.PhieuInDuocPhamVaVatTus,
              }).afterClosed().subscribe(result => {
                let url = '/xem-chi-tiet';
                if (resultData !== null && resultData.XuatVatTuId !== null && resultData.XuatDuocPhamId !== null) {
                  this.router.navigate(["/nhap-xuat/ksnk/xuat-kho-khac" + url], { queryParams: { id: resultData.XuatVatTuId, tinhtrang: TrangThaiDuyetKho.DaDuyet, loaiduocphamvattu: LoaiDuocPhamVatTu.LoaiVatTu } });
                }
                else if (resultData !== null && resultData.XuatDuocPhamId !== null) {
                  this.router.navigate(["/nhap-xuat/ksnk/xuat-kho-khac" + url], { queryParams: { id: resultData.XuatDuocPhamId, tinhtrang: TrangThaiDuyetKho.DaDuyet, loaiduocphamvattu: LoaiDuocPhamVatTu.LoaiDuocPham } });
                }
                else if (resultData !== null && resultData.XuatVatTuId !== null) {
                  this.router.navigate(["/nhap-xuat/ksnk/xuat-kho-khac" + url], { queryParams: { id: resultData.XuatVatTuId, tinhtrang: TrangThaiDuyetKho.DaDuyet, loaiduocphamvattu: LoaiDuocPhamVatTu.LoaiVatTu } });
                }
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

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.cancel();
      event.preventDefault();
    }
  }
}
