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
import { PhieuYeuCauMuaThuoc, YeuCauMuaThuoc } from '../yeu-cau-mua-thuoc.model';
import { LapPhieuMuaDuocPhamSharedComponent } from '../lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component';
import { GuiPhieuMuaDuocPhamConfirmComponent } from '../gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component';
import { PhieuMuaDuocPhamComponent } from '../phieu-mua-duoc-pham/phieu-mua-duoc-pham.component';
@Component({
  selector: 'app-lap-phieu-mua-duoc-pham-gui-lai',
  templateUrl: './lap-phieu-mua-duoc-pham-gui-lai.component.html',
  styleUrls: ['./lap-phieu-mua-duoc-pham-gui-lai.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class LapPhieuMuaDuocPhamGuiLaiComponent implements OnInit {
  yeuCauMuaThuoc: YeuCauMuaThuoc;
  inPhieu: PhieuYeuCauMuaThuoc = new PhieuYeuCauMuaThuoc();
  isHideDuyet: boolean = false;
  documentType: DocumentType;
  popupSavingData: any;
  popupLoadingData: any;
  trangThaiVo: any = null;
  validationErrors: any;
  isCreate: boolean = false;
  phieuMuaDuocPhamId: number = null;

  @ViewChild('temp', { read: LapPhieuMuaDuocPhamSharedComponent, static: false }) shared: LapPhieuMuaDuocPhamSharedComponent;

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
    this.documentType = DocumentType.DanhSachYeuCauDuTruMuaDuocPham;
    this.yeuCauMuaThuoc = new YeuCauMuaThuoc();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.GetTrangThaiPhieuMuaDuTru(id);
      this.phieuMuaDuocPhamId = id;
    }
  }

  GetTrangThaiPhieuMuaDuTru(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<any>("YeuCauMuaDuocPham/GetTrangThaiPhieuDuocPhamDuTru?phieuMuaDuocPhamId=" + id).subscribe(
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

  guiLaiPhieuMuaThuoc() {
    var self = this;
    self.dialog.open(GuiPhieuMuaDuocPhamConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu phiếu mua dược phẩm dự trù này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.yeuCauMuaThuoc = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.savingPage();
          self.apiService.post<any>("YeuCauMuaDuocPham/GuiLaiPhieuMuaDuocPhamDuTru", self.yeuCauMuaThuoc).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
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
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.savingPage();
          self.apiService.post<any>("YeuCauMuaDuocPham/GuiLaiPhieuMuaDuocPhamDuTru", self.yeuCauMuaThuoc).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.closePopupSavingData();
                self.dialog.open(PhieuMuaDuocPhamComponent, {
                  disableClose: false,
                  width: '1200px',
                  data: { Id: result.Id, Loai: self.yeuCauMuaThuoc.NhomDuocPhamDuTru },
                }).afterClosed().subscribe(() => {
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

  inPhieuMuaThuoc() {
    var self = this;
    if (this.trangThaiVo != null && this.trangThaiVo.IsKhoaDuyet == null && this.trangThaiVo.TrangThai == null) {
      self.yeuCauMuaThuoc = self.shared.getSharedData();
      self.validationErrors = [];
      self.ref.detectChanges();
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
        self.apiService.post<any>("YeuCauMuaDuocPham/GuiLaiPhieuMuaDuocPhamDuTru", self.yeuCauMuaThuoc).subscribe(
          (result) => {
            if (result != undefined && result != null) {
              self.loadingPage();
              self.dialog.open(PhieuMuaDuocPhamComponent, {
                disableClose: false,
                width: '1200px',
                data: { Id: self.phieuMuaDuocPhamId, Loai: self.yeuCauMuaThuoc.NhomDuocPhamDuTru },
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
      self.dialog.open(PhieuMuaDuocPhamComponent, {
        disableClose: false,
        width: '1200px',
        data: { Id: self.phieuMuaDuocPhamId, Loai: self.yeuCauMuaThuoc.NhomDuocPhamDuTru },
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

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.cancel();
      event.preventDefault();
    }
  }
}
