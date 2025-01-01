import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { ThongTinNgayNghiHuongBHYTTiepNhan } from '../../../kham-benh/kham-benh.model';
import { NghiHuongBhxhTiepNhanDetailPopupComponent } from '../nghi-huong-bhxh-tiep-nhan-detail-popup/nghi-huong-bhxh-tiep-nhan-detail-popup.component';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-nghi-huong-bhxh-tiep-nhan-popup',
  templateUrl: './nghi-huong-bhxh-tiep-nhan-popup.component.html',
  styleUrls: ['./nghi-huong-bhxh-tiep-nhan-popup.component.scss']
})
export class NghiHuongBhxhTiepNhanPopupComponent implements OnInit {
  icClose = icClose;
  thongTinNgayNghiHuongBHYT: ThongTinNgayNghiHuongBHYTTiepNhan;
  dateTiepNhanMin: Date = null;
  validationErrors: any[];
  queryInfo: LookupQueryInfo = new LookupQueryInfo();
  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: ChangeDetectorRef,
    public dialogRef: MatDialogRef<NghiHuongBhxhTiepNhanPopupComponent>
  ) { }

  ngOnInit() {
    console.log(this.data)
    this.thongTinNgayNghiHuongBHYT = new ThongTinNgayNghiHuongBHYTTiepNhan();
    this.thongTinNgayNghiHuongBHYT.YeuCauTiepNhanId = this.data.Id;
    this.thongTinNgayNghiHuongBHYT.ThoiDiemTiepNhan = this.data.ThoiDiemTiepNhan;
    this.thongTinNgayNghiHuongBHYT.DenNgay = new Date();
    this.dateTiepNhanMin = new Date(this.data.ThoiDiemTiepNhan)
    this.queryInfo.ParameterDependencies = this.thongTinNgayNghiHuongBHYT.YeuCauTiepNhanId.toString();
  }

  xemGiayHuongBHXH() {
    let loading = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
    this.validationErrors = [];
    this.ref.detectChanges();
    this.apiService.post<any>("DanhSachChoKham/XemGiayNghiHuongBHYTLien1", this.thongTinNgayNghiHuongBHYT).subscribe(
      resultData1 => {
        if (resultData1 != undefined && resultData1 != null) {
          loading.close()
          this.dialog.open(NghiHuongBhxhTiepNhanDetailPopupComponent, {
            disableClose: true,
            width: "1200px",
            data: { templateLienSo1: resultData1, thongTinNgayNghiHuongBHYT: this.thongTinNgayNghiHuongBHYT },
          });
          // this.apiService.post<any>("DanhSachChoKham/XemGiayNghiHuongBHYTLien2", this.thongTinNgayNghiHuongBHYT).subscribe(
          //   resultData2 => {
          //     if (resultData2 != undefined && resultData2 != null) {
          //       loading.close();

          //       this.dialog.open(NghiHuongBhxhTiepNhanDetailPopupComponent, {
          //         disableClose: true,
          //         width: "1200px",
          //         data: { templateLienSo1: resultData1, templateLienSo2: resultData2, thongTinNgayNghiHuongBHYT: this.thongTinNgayNghiHuongBHYT },
          //       });

          //       this.dialogRef.close();

          //     } else {
          //       loading.close();
          //     }
          //   })

        }
      }, (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
          loading.close();
        }
        loading.close();
      }
    )

  }

  close() {
    this.dialogRef.close();
  }
}
