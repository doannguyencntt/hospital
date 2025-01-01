import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { XuatKhoKhacSharedComponent } from '../xuat-kho-khac-shared/xuat-kho-khac-shared.component';
import { TrangThaiTaoPhieuLinh } from '../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { XuatKhoKhac } from '../xuat-kho-khac.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { isThisSecond } from 'date-fns';

@Component({
  selector: 'app-xuat-kho-khac-update',
  templateUrl: './xuat-kho-khac-update.component.html',
  styleUrls: ['./xuat-kho-khac-update.component.scss'],
  animations: [stagger60ms, fadeInUp400ms],
  encapsulation: ViewEncapsulation.None

})
export class XuatKhoKhacUpdateComponent implements OnInit {
  xuatKhoKhac: XuatKhoKhac = new XuatKhoKhac();
  validationErrors: any[] = [];
  popupSavingData: any = null;
  popupLoadingData: any = null;
  isCreate: boolean = false;
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
  @ViewChild('gridDuocPham', { static: true }) gridDuocPham: GridComponent;
  @ViewChild('temp', { read: XuatKhoKhacSharedComponent, static: false }) shared: XuatKhoKhacSharedComponent;

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
    this.documentType = DocumentType.XuatKhoDuocPhamKhac;
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
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.savingPage();
      self.KiemTraXuatHoaChatTheoMayXetNghiem(true);
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  duyetXuat() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    self.xuatKhoKhac = self.shared.getSharedData();
    self.xuatKhoKhac.LaLuuDuyet = true;

    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.savingPage();
      self.KiemTraXuatHoaChatTheoMayXetNghiem(false);

    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  cancel() {
    // this.location.back();
    this.router.navigateByUrl('nhap-xuat/duoc-pham/xuat-kho-khac?holdQuery=true');
  }

  private KiemTraXuatHoaChatTheoMayXetNghiem(isUpdate: boolean) {
    let self = this;
    this.apiService.post<Array<any>>("XuatKhoDuocPhamKhac/KiemTraXuatHoaChatTheoMayXetNghiem", self.xuatKhoKhac).subscribe((resultData) => {
      let message = resultData !== undefined && resultData !== null && resultData.length > 0 ?
        `Dược phẩm chưa chọn máy xét nghiệm: <br/> <span class="warning-text">${resultData.join('<br/>').bold()}</span>` :
        isUpdate ? `Bạn có chắc chắn muốn lưu dữ liệu này không ?` : `Bạn có chắc chắn muốn duyệt xuất dữ liệu này không ?`;

      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: message
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (isUpdate) {
            self.updateXuatKhoKhac();
          }
          else {
            self.duyetXuatKhoKhac();
          }
        } else {
          self.closepopupSavingData();
        }
      });
    },(err: ApiError) => {
      self.validationErrors = err.ValidationErrors;
      if (err.Message != "Validation Failed") {
        self.notificationService.showError(err.Message);
      }
      self.closepopupSavingData();
    });
  }

  private updateXuatKhoKhac() {
    let self = this;
    self.apiService.post<any>("XuatKhoDuocPhamKhac/CapNhatYeuCauXuatThuocKhac", self.xuatKhoKhac).subscribe(
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
  }

  private duyetXuatKhoKhac() {
    let self = this;
    self.apiService.post<any>("XuatKhoDuocPhamKhac/CapNhatYeuCauXuatThuocKhac", self.xuatKhoKhac).subscribe(
      (resultData) => {
        self.closepopupSavingData();
        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
        let url = '/xem-chi-tiet';
        self.router.navigate(["/nhap-xuat/duoc-pham/xuat-kho-khac" + url], { queryParams: { Id: resultData.Id, F: 1 } });
        // window.location.reload();
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closepopupSavingData();
      });
  }
}
