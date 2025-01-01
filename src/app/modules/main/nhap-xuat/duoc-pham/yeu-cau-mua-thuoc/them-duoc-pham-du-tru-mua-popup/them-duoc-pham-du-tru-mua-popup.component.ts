import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ThongTinThuocChiTiet } from '../yeu-cau-mua-thuoc.model';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";

import icClose from '@iconify/icons-ic/twotone-close';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';

@Component({
  selector: 'app-them-duoc-pham-du-tru-mua-popup',
  templateUrl: './them-duoc-pham-du-tru-mua-popup.component.html',
  styleUrls: ['./them-duoc-pham-du-tru-mua-popup.component.scss']
})
export class ThemDuocPhamDuTruMuaPopupComponent implements OnInit {
  duocPham: ThongTinThuocChiTiet;
  isSelectDuocPham: boolean = false;
  popupLoadingData: any = null;
  documentType: DocumentType;
  icClose = icClose;
  validationErrors: any;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef,
    private authService: AuthService,
    public dialogRef: MatDialogRef<ThemDuocPhamDuTruMuaPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit() {
    this.duocPham = new ThongTinThuocChiTiet();
    this.duocPham.NhomDuocPhamDuTru = this.data.NhomDuocPhamDuTru;
    this.duocPham.LoaiDuocPham = this.data.LoaiDuocPham;
    if (this.data.LoaiDuocPham == 1) {
      this.duocPham.LaDuocPhamBHYT == false;
    } else {
      this.duocPham.LaDuocPhamBHYT == true;
    }
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang thêm dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  closePopup(result: any) {
    this.dialogRef.close(result);
  }

  huy() {
    this.dialog.closeAll();
  }

  themDuocPham() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '500px',
      data: { Title: "Xác nhận", Message: "Bạn có muốn thêm dược phẩm này vào phiếu dự trù không?" }
    }).afterClosed().subscribe(result => {
      if (result == "Yes") {
        self.loadingPage();
        self.duocPham.IsThemDuocPham = true;
        self.apiService.post<ThongTinThuocChiTiet>("YeuCauMuaDuocPham/ThemDuocPhamChiTietGridVo", self.duocPham).subscribe(
          resultData => {
            self.closePopupLoadingData();
            if (resultData != undefined && resultData != null) {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
              self.duocPham.IsThemDuocPham = false;
              let dataObj = {
                data: resultData,
                trangThai: "Them"
              }
              self.closePopup(dataObj);
            }
          },
          (err: ApiError) => {
            self.duocPham.IsThemDuocPham = false;
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
            console.log("validationErrors: ", self.validationErrors)
            self.closePopupLoadingData();
          });
      }
    });


  }

  chonDuongDung(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.duocPham.DuongDungId = dataItem.KeyId;
      this.duocPham.TenDuongDung = dataItem.DisplayName;
    }
    else {
      this.duocPham.DuongDungId = null;
      this.duocPham.TenDuongDung = null;
    }
  }

  chonDVT(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.duocPham.DonViTinhId = dataItem.KeyId;
      this.duocPham.DVT = dataItem.DisplayName;
    }
    else {
      this.duocPham.DonViTinhId = null;
      this.duocPham.DVT = null;
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.themDuocPham();
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }

  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }
}
