import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { parseNumber } from '@progress/kendo-angular-intl';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { LuuTruHoSo, ThongLuuTruHoSo } from '../luu-tru-ho-so.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
@Component({
  selector: 'app-luu-tru-ho-so-update-popup',
  templateUrl: './luu-tru-ho-so-update-popup.component.html',
  styleUrls: ['./luu-tru-ho-so-update-popup.component.scss']
})
export class LuuTruHoSoUpdatePopupComponent implements OnInit {
  icClose = icClose;
  documentType: DocumentType = DocumentType.LuuTruHoSo;
  validationErrors: any = null;
  thongLuuTruHoSo: ThongLuuTruHoSo;
  isDisabled: boolean = false;
  popupSavingData: any = null;

  constructor(
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LuuTruHoSoUpdatePopupComponent>
  ) { }

  ngOnInit() {
    this.thongLuuTruHoSo = new ThongLuuTruHoSo();
    this.getById(this.data);
  }
  getById(id: number) {
    var self = this;
    self.apiService.get<any>("DieuTriNoiTru/GetThongTiLuuTruBenhAnNoiTru?id=" + id).subscribe(
      (result) => {
        if (result != undefined && result != null) {
          this.thongLuuTruHoSo = result;
          if (this.thongLuuTruHoSo.ThuTuSapXepLuuTru == null || this.thongLuuTruHoSo.ThuTuSapXepLuuTru == '') {
            this.isDisabled = true;
          }
        }

      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }

  thuTuSapXepLuuTruChange(dataItem: any) {
    if (dataItem != null && dataItem != "") {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
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
  luu() {
    this.validationErrors = [];
		this.cdRef.detectChanges();

    let valudObj = {
      NoiTruBenhAnId: this.data,
      ThuTuSapXepLuuTru: this.thongLuuTruHoSo.ThuTuSapXepLuuTru
    }
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '500px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn lưu dữ liệu này không?" }
    }).afterClosed().subscribe(result => {
      if (result == "Yes") {
        this.apiService.post<any>("DieuTriNoiTru/CapNhatLuuTruBenhAn", valudObj).subscribe(
          () => {
            this.closepopupSavingData();
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
            this.dialogRef.close();
          },
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closepopupSavingData();
          });
      }
    });

  }

}
