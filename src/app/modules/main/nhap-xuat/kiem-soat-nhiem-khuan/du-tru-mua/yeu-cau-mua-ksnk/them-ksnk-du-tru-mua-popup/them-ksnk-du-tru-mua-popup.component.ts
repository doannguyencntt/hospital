import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
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
import { ThongTinVatTuChiTiet } from '../yeu-cau-mua-ksnk.model';

@Component({
  selector: 'app-them-ksnk-du-tru-mua-popup',
  templateUrl: './them-ksnk-du-tru-mua-popup.component.html',
  styleUrls: ['./them-ksnk-du-tru-mua-popup.component.scss']
})
export class ThemKSNKDuTruMuaPopupComponent implements OnInit {
  vatTu: ThongTinVatTuChiTiet;
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
    public dialogRef: MatDialogRef<ThemKSNKDuTruMuaPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.vatTu = new ThongTinVatTuChiTiet();
    this.vatTu.LoaiVatTu = this.data.LoaiVatTu;
    if (this.data.LoaiVatTu == 1) {
      this.vatTu.LaVatTuBHYT == false;
    } else {
      this.vatTu.LaVatTuBHYT == true;
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

  themVatTu() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '500px',
      data: { Title: "Xác nhận", Message: "Bạn có muốn thêm kiễm xoát nhiễm khuẩn này vào phiếu dự trù không?" }
    }).afterClosed().subscribe(result => {
      if (result == "Yes") {
        self.loadingPage();
        self.vatTu.IsThemVatTu = true;
        self.apiService.post<ThongTinVatTuChiTiet>("YeuCauMuaKSNK/ThemKSNKChiTietGridVo", self.vatTu).subscribe(
          resultData => {
            self.closePopupLoadingData();
            if (resultData != undefined && resultData != null) {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
              self.vatTu.IsThemVatTu = false;
              let dataObj = {
                data: resultData,
                trangThai: "Them"
              }
              self.closePopup(dataObj);
            }
          },
          (err: ApiError) => {
            self.vatTu.IsThemVatTu = false;
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

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.themVatTu();
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
