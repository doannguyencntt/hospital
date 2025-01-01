import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ListVatTuReOrder } from '../../../../kham-benh.model';
import { NotificationService } from 'src/app/core/services/notification.service';
@Component({
  selector: 'app-lan-kham-hien-tai-in-vat-tu-popup',
  templateUrl: './lan-kham-hien-tai-in-vat-tu-popup.component.html',
  styleUrls: ['./lan-kham-hien-tai-in-vat-tu-popup.component.scss']
})
export class LanKhamHienTaiInVatTuPopupComponent implements OnInit {
  listVatTuReOrder: ListVatTuReOrder;
  hostingName: string;
  icClose = icClose;
  src: string = "";
  constructor(private apiService: ApiService,private notificationService: NotificationService,
    private dialog: MatDialog, public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<LanKhamHienTaiInVatTuPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.listVatTuReOrder = new ListVatTuReOrder();
    this.listVatTuReOrder = this.data;
    if (window.location.protocol == "http:") {
      this.listVatTuReOrder.HostingName = "http://" + window.location.host;
    } else {
      this.listVatTuReOrder.HostingName = "https://" + window.location.host;
    }
    this.showVatTu();
  }
  close() {
    this.dialogRef.close();
  }

  showVatTu() {
    var loaded = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });
    this.listVatTuReOrder.Header = true;
    this.apiService.post<any>("KhamBenh/InVatTu", this.listVatTuReOrder).subscribe(
      resultData => {
        if (resultData != "" && resultData != null) {
          this.src = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
          this.listVatTuReOrder.Header = false;
        }
        loaded.close();
      },
      () => {
        this.notificationService.showError("Có lỗi xảy ra khi tải đơn VTYT. Bạn hãy thử lại lần nữa.");
        this.dialogRef.close();
      });
  }

  getSharedPrintForm() {
    //hard code get => post
    return new Promise(resolve => {
      this.apiService.post<any>("KhamBenh/InVatTu", this.listVatTuReOrder).subscribe(resultData => {
        resolve(resultData);
      });
      // this.close();
    });
  }
}
