import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SortDescriptor, GroupDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { XuatKhoVatTu } from '../../xuat-kho-vat-tu/xuat-kho-vat-tu.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import icSearch from '@iconify/icons-ic/twotone-search';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { XuatKhoVatTuKhac } from '../xuat-kho-vat-tu-khac.model';
import { TrangThaiTaoPhieuLinh } from '../../yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';
import { XuatKhoVatTuKhacSharedComponent } from '../xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-xuat-kho-vat-tu-khac-update',
  templateUrl: './xuat-kho-vat-tu-khac-update.component.html',
  styleUrls: ['./xuat-kho-vat-tu-khac-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class XuatKhoVatTuKhacUpdateComponent implements OnInit {
  xuatKhoKhac: XuatKhoVatTuKhac = new XuatKhoVatTuKhac();
  validationErrors: any[] = [];
  popupSavingData: any = null;
  popupLoadingData: any = null;
  isCreate: boolean = false;
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
  @ViewChild('gridVatTu', { static: true }) gridVatTu: GridComponent;
  @ViewChild('temp', { read: XuatKhoVatTuKhacSharedComponent, static: false }) shared: XuatKhoVatTuKhacSharedComponent;

  documentType: DocumentType;
  id: number = 0;
  tinhTrang: number = 0;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef, private location: Location) { }

  ngOnInit() {
    this.documentType = DocumentType.XuatKhoVatTuKhac;
    this.route.queryParams.subscribe(param => {
      this.id = param['Id'];
      this.tinhTrang = parseInt(param['F']);
      if (this.tinhTrang == 1) {
        this.trangThaiVo.Ten = 'Đã duyệt xuất';
        this.trangThaiVo.TrangThai = true;
      } else {
        this.trangThaiVo.Ten = 'Chờ duyệt';
        this.trangThaiVo.TrangThai = null;
      }
    });
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

  update() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    self.xuatKhoKhac = self.shared.getSharedData();
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
          self.apiService.post<any>("XuatKhoVatTuKhac/CapNhatYeuCauXuatVatTuKhac", self.xuatKhoKhac).subscribe(
            (resultData) => {
              self.closepopupSavingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              window.location.reload();
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

  duyetXuat() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    self.xuatKhoKhac = self.shared.getSharedData();
    self.xuatKhoKhac.LaLuuDuyet = true;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn duyệt xuất dữ liệu này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.savingPage();
          self.apiService.post<any>("XuatKhoVatTuKhac/CapNhatYeuCauXuatVatTuKhac", self.xuatKhoKhac).subscribe(
            (resultData) => {
              self.closepopupSavingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              let url = '/xem-chi-tiet';
              self.router.navigate(["/nhap-xuat/vat-tu/xuat-kho-khac" + url], { queryParams: { Id: resultData.Id, F: 1 } });
              // window.location.reload();
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
  cancel() {
    // this.location.back();
    this.router.navigateByUrl('nhap-xuat/vat-tu/xuat-kho-khac?holdQuery=true');

  }
}
