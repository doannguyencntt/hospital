import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { LoaiDuocPhamVatTu, TrangThaiDuyetKho, XuatKhoVatTuKhac } from '../xuat-kho-khac-ksnk.model';
import { TrangThaiTaoPhieuLinh } from '../../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';
import { XuatKhoKhacKSNKSharedComponent } from '../xuat-kho-khac-ksnk-shared/xuat-kho-khac-ksnk-shared.component';

@Component({
  selector: 'app-xuat-kho-khac-ksnk-update',
  templateUrl: './xuat-kho-khac-ksnk-update.component.html',
  styleUrls: ['./xuat-kho-khac-ksnk-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class XuatKhoKhacKSNKUpdateComponent implements OnInit {
  xuatKhoKhac: XuatKhoVatTuKhac = new XuatKhoVatTuKhac();
  validationErrors: any[] = [];
  popupSavingData: any = null;
  popupLoadingData: any = null;
  isCreate: boolean = false;
  loaiDuocPhamVatTu: any = null;
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();

  @ViewChild('gridVatTu', { static: true }) gridVatTu: GridComponent;
  @ViewChild('temp', { read: XuatKhoKhacKSNKSharedComponent, static: false }) shared: XuatKhoKhacKSNKSharedComponent;

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
    this.documentType = DocumentType.XuatKhoKhacVatTuThuocNhomKSNK;
    this.route.queryParams.subscribe(param => {

      this.id = param['id'];
      this.tinhTrang = param['tinhtrang'];
      this.loaiDuocPhamVatTu = (param['loaiduocphamvattu'] != undefined && param['loaiduocphamvattu'] != null) ?
        Number(param['loaiduocphamvattu']) : null;

      if (this.tinhTrang == TrangThaiDuyetKho.DaDuyet) {
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
          self.apiService.post<any>("XuatKhoKhacKSNK/CapNhatYeuCauXuatVatTuKhac", self.xuatKhoKhac).subscribe(
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
          self.apiService.post<any>("XuatKhoKhacKSNK/CapNhatYeuCauXuatVatTuKhac", self.xuatKhoKhac).subscribe(
            (resultData) => {
              self.closepopupSavingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              let url = '/xem-chi-tiet';
              if (this.loaiDuocPhamVatTu === LoaiDuocPhamVatTu.LoaiDuocPham && resultData.Id !== null) {
                this.router.navigate(["/nhap-xuat/ksnk/xuat-kho-khac" + url], { queryParams: { id: resultData.Id, tinhtrang: TrangThaiDuyetKho.DaDuyet, loaiduocphamvattu: LoaiDuocPhamVatTu.LoaiDuocPham } });
              }
              else if (this.loaiDuocPhamVatTu === LoaiDuocPhamVatTu.LoaiVatTu && resultData.Id !== null) {
                this.router.navigate(["/nhap-xuat/ksnk/xuat-kho-khac" + url], { queryParams: { id: resultData.Id, tinhtrang: TrangThaiDuyetKho.DaDuyet, loaiduocphamvattu: LoaiDuocPhamVatTu.LoaiVatTu } });
              }

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
    this.router.navigateByUrl('nhap-xuat/ksnk/xuat-kho-khac?holdQuery=true');

  }
}
