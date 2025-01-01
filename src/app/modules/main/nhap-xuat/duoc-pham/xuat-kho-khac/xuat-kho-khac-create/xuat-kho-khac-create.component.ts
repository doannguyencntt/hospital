import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
import { TrangThaiTaoPhieuLinh } from '../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';
import { XuatKhoKhacSharedComponent } from '../xuat-kho-khac-shared/xuat-kho-khac-shared.component';
import { XuatKhoKhac } from '../xuat-kho-khac.model';
import { Location } from '@angular/common';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

@Component({
  selector: 'app-xuat-kho-khac-create',
  templateUrl: './xuat-kho-khac-create.component.html',
  styleUrls: ['./xuat-kho-khac-create.component.scss'],
  animations: [stagger60ms, fadeInUp400ms],
  encapsulation: ViewEncapsulation.None
})
export class XuatKhoKhacCreateComponent implements OnInit {
  documentType: DocumentType;
  xuatKhoKhac: XuatKhoKhac;
  popupAddingData: any;
  popupLoadingData: any;
  validationErrors: any[] = [];
  isCreate: boolean = false;
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
  // yeuCauDieuChuyenDuocPhamPhieuIn: YeuCauDieuChuyenDuocPhamPhieuIn = new YeuCauDieuChuyenDuocPhamPhieuIn();

  @ViewChild(XuatKhoKhacSharedComponent, { static: true }) shared: any;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef, private location: Location
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.XuatKhoDuocPhamKhac;
    this.xuatKhoKhac = new XuatKhoKhac();
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
    this.router.navigateByUrl('nhap-xuat/duoc-pham/xuat-kho-khac?holdQuery=true');

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
    self.xuatKhoKhac = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();

    this.apiService.post<Array<any>>("XuatKhoDuocPhamKhac/KiemTraXuatHoaChatTheoMayXetNghiem", self.xuatKhoKhac).subscribe((resultData) => {
      let message = resultData !== undefined && resultData !== null && resultData.length > 0 ?
        `Dược phẩm chưa chọn máy xét nghiệm: <br/> <span class="warning-text">${resultData.join('<br/>').bold()}</span>` :
        `Bạn có chắc chắn muốn thêm dữ liệu này không ?`;

      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: message
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
            self.addingPage();
            this.themXuatKhoKhac();
          } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
        } else {
          self.closePopupAddingData();
        }
      });
    }, (err: ApiError) => {
      self.validationErrors = err.ValidationErrors;
      if (err.Message != "Validation Failed") {
        self.notificationService.showError(err.Message);
      }
      self.closePopupAddingData();
    });
  }

  private themXuatKhoKhac() {
    let self = this;
    self.apiService.post<any>("XuatKhoDuocPhamKhac/ThemYeuCauXuatThuocKhac", self.xuatKhoKhac).subscribe(
      (resultData) => {
        self.closePopupAddingData();
        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
        let url = '/xem-chi-tiet';
        this.router.navigate(["/nhap-xuat/duoc-pham/xuat-kho-khac" + url], { queryParams: { Id: resultData, F: 0 } });
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupAddingData();
      });
  }
}
