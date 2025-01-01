import { Component, OnInit, Optional, Inject } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { InToaThuocLichSuKhamBenhDanhSach } from '../../kham-benh.model';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToaThuocKhamBenhDkPopupComponent } from '../toa-thuoc-kham-benh-dk-popup/toa-thuoc-kham-benh-dk-popup.component';

@Component({
  selector: 'app-toa-thuoc-kham-benh-comfirm-dk',
  templateUrl: './toa-thuoc-kham-benh-comfirm-dk.component.html',
  styleUrls: ['./toa-thuoc-kham-benh-comfirm-dk.component.scss']
})
export class ToaThuocKhamBenhComfirmDkComponent implements OnInit {
  thongTin: InToaThuocLichSuKhamBenhDanhSach = new InToaThuocLichSuKhamBenhDanhSach();
  documentType: DocumentType;
  popupLoadingData: any = null;
  validationErrors: any = null;
  constructor(
    private dialog: MatDialog,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private dialogRef: MatDialogRef<ToaThuocKhamBenhComfirmDkComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public dataItem: any) { }

  ngOnInit() {
    this.documentType = DocumentType.LichSuKhamBenh;
    this.thongTin.HostingName = window.location.protocol + "//" + window.location.host;
    this.thongTin.YeuCauKhamBenhId = this.dataItem.Id;
    this.thongTin.YeuCauTiepNhanId = this.dataItem.YeuCauTiepNhanId;

    console.log("data: ", this.dataItem)
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

  InToaThuoc() {
    var self = this;
    self.loadingPage();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.apiService.post<any>("KhamBenh/InToaThuocBHYTVaKhongBHYTDanhSachKhamBenh", self.thongTin).subscribe(
        result => {
          if (result != undefined && result != null) {
            self.closePopupLoadingData();
            self.dialog
              .open(ToaThuocKhamBenhDkPopupComponent, {
                disableClose: true,
                width: "1200px",
                data: result,
              });
          }
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          };
          self.closePopupLoadingData();
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  close() {
    this.dialog.closeAll();
  }
}
