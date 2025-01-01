import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ThongTinNgayNghiHuongBHYT } from '../../../kham-benh.model';
import { ApiService } from 'src/app/core/services/api.service';
import { NghiHuongBhytDetailPopupComponent } from '../nghi-huong-bhyt-detail-popup/nghi-huong-bhyt-detail-popup.component';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import icInfo from '@iconify/icons-ic/twotone-info';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: 'app-nghi-huong-bhyt-confirm-popup',
  templateUrl: './nghi-huong-bhyt-confirm-popup.component.html',
  styleUrls: ['./nghi-huong-bhyt-confirm-popup.component.scss']
})
export class NghiHuongBhytConfirmPopupComponent implements OnInit {
  icClose = icClose;
  icInfo = icInfo;
  documentType: DocumentType; //= DocumentType.KhamBenh;
  thongTinNgayNghiHuongBHYT: ThongTinNgayNghiHuongBHYT;
  dateTiepNhanMin: Date = null;
  validationErrors: any[];
  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef,
    private authService: AuthService,
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NghiHuongBhytConfirmPopupComponent>
  ) { }

  ngOnInit() {
    this.documentType = this.data.DocumentType;
    this.thongTinNgayNghiHuongBHYT = new ThongTinNgayNghiHuongBHYT();
    this.thongTinNgayNghiHuongBHYT.YeuCauKhamBenhId = this.data.BenhNhanHienTai.YeuCauKhamBenhId;
    this.thongTinNgayNghiHuongBHYT.ThoiDiemTiepNhan = this.data.BenhNhanHienTai.YeuCauTiepNhan.ThoiDiemTiepNhan;
    this.thongTinNgayNghiHuongBHYT.DenNgay = this.data.BenhNhanHienTai.YeuCauKhamBenh.NghiHuongBHXHDenNgay == null ? new Date() : this.data.BenhNhanHienTai.YeuCauKhamBenh.NghiHuongBHXHDenNgay;
    this.dateTiepNhanMin = new Date(this.data.BenhNhanHienTai.YeuCauTiepNhan.ThoiDiemTiepNhan);
    this.getThongTinYeuCauKhamBenh();
  }

  xemGiayHuongBHXH() {
    var self = this;
    let loading = self.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.post<any>("KhamBenh/XemGiayNghiHuongBHYTLien1", self.thongTinNgayNghiHuongBHYT).subscribe(
        resultData1 => {
          if (resultData1 != undefined && resultData1 != null) {
            loading.close()
            self.dialog.open(NghiHuongBhytDetailPopupComponent, {
              disableClose: true,
              width: "1200px",
              data: { templateLienSo1: resultData1, thongTinNgayNghiHuongBHYT: self.thongTinNgayNghiHuongBHYT },
            });
            // self.apiService.post<any>("KhamBenh/XemGiayNghiHuongBHYTLien2", self.thongTinNgayNghiHuongBHYT).subscribe(
            //   resultData2 => {
            //     if (resultData2 != undefined && resultData2 != null) {
            //       loading.close()
            //       self.dialog.open(NghiHuongBhytDetailPopupComponent, {
            //         disableClose: true,
            //         width: "1200px",
            //         data: { templateLienSo2: resultData2, templateLienSo1: resultData1, thongTinNgayNghiHuongBHYT: self.thongTinNgayNghiHuongBHYT },
            //       });
            //       self.dialogRef.close();

            //     } else {
            //       loading.close()
            //     }
            //   }
            // )
          }
        }
        , (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
            loading.close();
          }
          loading.close();
        }
      )
    }
    else {
      loading.close();
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  iCDSelectionChange(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.thongTinNgayNghiHuongBHYT.ICDChinhNghiHuongBHYT = dataItem.KeyId;
      this.thongTinNgayNghiHuongBHYT.TenICDChinhNghiHuongBHYT = dataItem.DisplayName;
    }
    else {
      this.thongTinNgayNghiHuongBHYT.ICDChinhNghiHuongBHYT = null;
      this.thongTinNgayNghiHuongBHYT.TenICDChinhNghiHuongBHYT = null;
    }
  }

  close() {
    this.dialog.closeAll();
  }

  getThongTinYeuCauKhamBenh() {
    this.apiService.get<any>("KhamBenh/thongTinNghiHuongBHYT?YeuCauKhamBenhId=" + this.thongTinNgayNghiHuongBHYT.YeuCauKhamBenhId).subscribe(
      resultData1 => {
        this.thongTinNgayNghiHuongBHYT.ICDChinhNghiHuongBHYT = resultData1.ICDChinhNghiHuongBHYT;
        this.thongTinNgayNghiHuongBHYT.TenICDChinhNghiHuongBHYT = resultData1.TenICDChinhNghiHuongBHYT;
        this.thongTinNgayNghiHuongBHYT.PhuongPhapDieuTriNghiHuongBHYT = resultData1.PhuongPhapDieuTriNghiHuongBHYT;
      });
  }

}
