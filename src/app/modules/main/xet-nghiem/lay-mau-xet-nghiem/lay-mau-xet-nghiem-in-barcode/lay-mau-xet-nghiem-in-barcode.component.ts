import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LayMauXetNghiemInBarcode } from '../lay-mau-xet-nghiem.model';

@Component({
  selector: 'app-lay-mau-xet-nghiem-in-barcode',
  templateUrl: './lay-mau-xet-nghiem-in-barcode.component.html',
  styleUrls: ['./lay-mau-xet-nghiem-in-barcode.component.scss']
})
export class LayMauXetNghiemInBarcodeComponent implements OnInit {

  icClose = icClose;
  src: string = "";
  loading: boolean = false;

  htmlContent: any = null;
  layMauXetNghiemInBarcode: LayMauXetNghiemInBarcode;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService) { }

  ngOnInit() {
    let hostingName: string;
    if (window.location.protocol == "http:") {
      hostingName = "http://" + window.location.host;
    } else {
      hostingName = "https://" + window.location.host;
    }
    this.layMauXetNghiemInBarcode = new LayMauXetNghiemInBarcode(
      this.data.YeuCauTiepNhanId,
      this.data.BarcodeId,
      this.data.BarcodeNumber,
      this.data.SoLuong,
      hostingName
    );
    this.xemBarcode();
  }

  xemBarcode(){
    this.apiService.post<any>("Xetnghiem/InBarcodeLayMauXetNghiem", this.layMauXetNghiemInBarcode).subscribe(
      resultData => {
        if (resultData != null) {
          var html = this.htmlContent =  resultData;
          this.src = "data:text/html;charset=utf-8," + encodeURIComponent(html);
        }
        else {
          this.src = "";
        }
        this.loading = false;

      },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }
  getSharedPrintForm() {
    return new Promise(resolve => {
      resolve(this.htmlContent);
      this.close();
    });
  }
  close() {
    this.dialog.closeAll();
  }
}
