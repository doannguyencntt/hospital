import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ListThuocReOrder } from '../../../../kham-benh.model';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-lan-kham-hien-tai-in-toa-thuoc-popup',
  templateUrl: './lan-kham-hien-tai-in-toa-thuoc-popup.component.html',
  styleUrls: ['./lan-kham-hien-tai-in-toa-thuoc-popup.component.scss']
})
export class LanKhamHienTaiInToaThuocPopupComponent implements OnInit {
  listThuocReOrder: ListThuocReOrder;
  hostingName: string;
  icClose = icClose;
  srcBHYT: string = "";
  srcKhongBHYT: string = "";
  src: string = "";
  isBHYT: boolean = false;
  iskhongBHYT: boolean = false;
  constructor(private apiService: ApiService, private notificationService: NotificationService,
    private dialog: MatDialog, public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<LanKhamHienTaiInToaThuocPopupComponent>,

    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit() {
    this.listThuocReOrder = new ListThuocReOrder();
    //console.log("data:", this.data)
    this.listThuocReOrder = this.data;
    this.listThuocReOrder.TenICDChinh = this.data.TenICDChinh;
    this.listThuocReOrder.GhiChuICDChinh = this.data.GhiChuICDChinh;
    this.listThuocReOrder.YeuCauKhamBenhICDKhacs = this.data.YeuCauKhamBenhICDKhacs;
    this.listThuocReOrder.IsChangeChanDoan = this.data.IsChangeChanDoan;
    if (window.location.protocol == "http:") {
      this.listThuocReOrder.HostingName = "http://" + window.location.host;
    } else {
      this.listThuocReOrder.HostingName = "https://" + window.location.host;
    }
    this.showToaThuoc();
  }
  close() {
    this.dialogRef.close();
  }

  showToaThuoc() {
    var loaded = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });
    this.listThuocReOrder.Header = true;
    this.apiService.post<any>("KhamBenh/InDonThuoc", this.listThuocReOrder).subscribe(
      resultData => {
        if (resultData != "" && resultData != null) {
          this.src = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
          this.listThuocReOrder.Header = false;
        }
        loaded.close();
      },
      () => {
        this.notificationService.showError("Có lỗi xảy ra khi tải đơn thuốc. Bạn hãy thử lại lần nữa.");
        this.dialogRef.close();
      });
  }

  getSharedPrintForm() {
    //hard code get => post
    return new Promise(resolve => {
      this.apiService.post<any>("KhamBenh/InDonThuoc", this.listThuocReOrder).subscribe(resultData => {
        resolve(resultData);
      });
      // this.dialogRef.close();
    });
  }
}
