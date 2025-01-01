import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { InPhieuNhapKhoVatTu } from '../nhap-kho';
import { PhieuNhapKhoVatTuPopupComponent } from '../phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component';
@Component({
  selector: 'app-xac-nhan-chon-phieu-in-vat-tu-popup',
  templateUrl: './xac-nhan-chon-phieu-in-vat-tu-popup.component.html',
  styleUrls: ['./xac-nhan-chon-phieu-in-vat-tu-popup.component.scss']
})
export class XacNhanChonPhieuInVatTuPopupComponent implements OnInit {
  popupLoadingData: any = null;
  inPhieuNhapKhoVatTu: InPhieuNhapKhoVatTu = new InPhieuNhapKhoVatTu();
  validationErrors: any;

  constructor(
    private dialog: MatDialog,
    private apiService: ApiService,
    private notificationService: NotificationService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.inPhieuNhapKhoVatTu = this.data;
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
  close() {
    this.dialog.closeAll();
  }

  inPhieu() {
    var self = this;
    self.loadingPage();
    self.apiService.post<any>("NhapKhoVatTu/InPhieuYeuCauNhapKhoVatTu", self.inPhieuNhapKhoVatTu).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          self.dialog.open(PhieuNhapKhoVatTuPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: resData,
          }).afterClosed().subscribe(() => {
          });
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupLoadingData();
      }
    );
  }
}
