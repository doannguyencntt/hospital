import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { CapNhatPhieuDuongThai } from '../../kham-benh.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { NotificationService } from "src/app/core/services/notification.service";
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NgayDuongThaiPopupComponent } from '../ngay-duong-thai-popup/ngay-duong-thai-popup.component';

@Component({
  selector: 'app-ngay-duong-thai-xac-nhan-popup',
  templateUrl: './ngay-duong-thai-xac-nhan-popup.component.html',
  styleUrls: ['./ngay-duong-thai-xac-nhan-popup.component.scss']
})
export class NgayDuongThaiXacNhanPopupComponent implements OnInit {
  icClose = icClose;
  validationErrors: any;
  capNhatPhieuDuongThai = new CapNhatPhieuDuongThai();
  popupLoadingData: any = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
  ) { }
  ngOnInit() {
    if (this.data != null) {
      this.capNhatPhieuDuongThai = this.data;
      this.apiService.post<any>('KhamBenh/GetNgayDuongThaiYeuCauKhamBenh', this.capNhatPhieuDuongThai)
      .subscribe((res) => {
        if (res != null) {
          this.capNhatPhieuDuongThai  =res;
        }
      },
        (err: ApiError) => {
          this.closePopupLoadingData();
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        }
      );
    }
  }
  returnValidate() {
    const validationResult = [];
    if (this.capNhatPhieuDuongThai.TuNgay == null) {
      validationResult.push({
        Message: "Yêu cầu nhập từ ngày.",
        Field: "TuNgay",
      });
    }
    if (this.capNhatPhieuDuongThai.DenNgay == null) {
      validationResult.push({
        Message: "Yêu cầu nhập đến ngày.",
        Field: "DenNgay",
      });
    }
    if (this.capNhatPhieuDuongThai.DenNgay != null && this.capNhatPhieuDuongThai.TuNgay != null) {
      if (this.capNhatPhieuDuongThai.TuNgay > this.capNhatPhieuDuongThai.DenNgay) {
        validationResult.push({
          Message: "Từ ngày không lớn hơn đến ngày.",
          Field: "TuNgay",
        });
      }
      if (this.capNhatPhieuDuongThai.DenNgay < this.capNhatPhieuDuongThai.TuNgay) {
        validationResult.push({
          Message: "Đến ngày không nhỏ hơn đến ngày.",
          Field: "DenNgay",
        });
      }
    }
    return validationResult;
  }
  xacNhan() {

    this.validationErrors = this.returnValidate();
    if (this.validationErrors && this.validationErrors.some(x => x)) {
      return;
    }
    if (this.capNhatPhieuDuongThai.DenNgay != null && this.capNhatPhieuDuongThai.TuNgay != null) {
      let khoangCachTuNgayDenNgay = 0;
      let startDate = new Date(this.capNhatPhieuDuongThai.TuNgay);
      let endDate = new Date(this.capNhatPhieuDuongThai.DenNgay);
      let seconds1Ngay = 24 * 60 * 60;
      let secondstuNgayDenNgay = (endDate.getTime() - startDate.getTime()) / 1000;
      khoangCachTuNgayDenNgay = secondstuNgayDenNgay / seconds1Ngay;
      if (khoangCachTuNgayDenNgay < 7) {
        this.notificationService.showError("Tổng số ngày nghỉ dưỡng thai không được nhỏ hơn 7 ngày");
        return;
      }
      if (khoangCachTuNgayDenNgay > 30) {
        this.notificationService.showError("Tổng số ngày nghỉ dưỡng thai không được lớn hơn 30 ngày");
        return;
      }
    }
    this.loadingPage();
    this.apiService.post<any>('KhamBenh/CapNhatNgayDuongThai', this.capNhatPhieuDuongThai)
      .subscribe((res) => {
        if (res != null) {
          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
           this.dialog.open(NgayDuongThaiPopupComponent, {
                    disableClose: false,
                    width: '1000px',
                    data: this.capNhatPhieuDuongThai.YeuCauKhamBenhId
                  });
         
      
          this.closePopupLoadingData();
          // this.dialog.closeAll();
        }
      },
        (err: ApiError) => {
          this.closePopupLoadingData();
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        }
      );

  }
  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
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

}
