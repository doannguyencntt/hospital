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
import { TrangThaiTaoPhieuLinh } from '../../yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';
import { XuatKhoVatTuKhacSharedComponent } from '../xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { XuatKhoVatTuKhac } from '../xuat-kho-vat-tu-khac.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component'; import { Location } from '@angular/common';
@Component({
  selector: 'app-xuat-kho-vat-tu-khac-create',
  templateUrl: './xuat-kho-vat-tu-khac-create.component.html',
  styleUrls: ['./xuat-kho-vat-tu-khac-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class XuatKhoVatTuKhacCreateComponent implements OnInit {

  documentType: DocumentType;
  xuatKhoKhac: XuatKhoVatTuKhac;
  popupAddingData: any;
  popupLoadingData: any;
  validationErrors: any[] = [];
  isCreate: boolean = false;
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();

  @ViewChild(XuatKhoVatTuKhacSharedComponent, { static: true }) shared: any;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef, private location: Location
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.XuatKhoVatTuKhac;
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
    this.router.navigateByUrl('nhap-xuat/vat-tu/xuat-kho-khac?holdQuery=true');

  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.cancel();
      event.preventDefault();
    }
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
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.addingPage();
          self.apiService.post<any>("XuatKhoVatTuKhac/ThemYeuCauXuatVatTuKhac", self.xuatKhoKhac).subscribe(
            (resultData) => {
              self.closePopupAddingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
              let url = '/xem-chi-tiet';
              this.router.navigate(["/nhap-xuat/vat-tu/xuat-kho-khac" + url], { queryParams: { Id: resultData, F: 0 } });
              // self.router.navigate(["/nhap-xuat/duoc-pham/xuat-kho-khac" + "/xem-chi-tiet/" + resultData]);
              // self.router.navigate(['/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham']);
              // self.loadingPage();
              // self.yeuCauDieuChuyenDuocPhamPhieuIn.YeuCauDieuChuyenDuocPhamId = resultData;
              // self.apiService.post<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/InPhieuXuatKhoDuocPhamDieuChuyen", self.yeuCauDieuChuyenDuocPhamPhieuIn).subscribe(
              //   resData => {
              //     if (resData != undefined && resData != null) {
              //       self.closePopupLoadingData();
              //       self.dialog.open(DieuChuyenKhoNoiBoDuocPhamPopupComponent, {
              //         disableClose: true,
              //         width: "1200px",
              //         data: resData,
              //       }).afterClosed().subscribe(() => {
              //         // self.router.navigate(['/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham']);
              //         self.router.navigate(['/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham']);
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
              self.closePopupAddingData();
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }

    })

  }

}
