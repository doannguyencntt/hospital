import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { KiemTraHopDongNhanVienChuaKham, ThongTinError } from '../kham-doan-hop-dong-kham.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
declare var _: any;
@Component({
  selector: 'thong-tin-ket-thuc-hop-popup',
  templateUrl: './thong-tin-ket-thuc-hop-popup.component.html',
  styleUrls: ['./thong-tin-ket-thuc-hop-popup.component.scss']
})
export class ThongTinKetThucHopDongPopupComponent implements OnInit {
  icClose = icClose;
  icClear = icClear;
  hopDongKhamSucKhoeId: number;
  KiemTraHopDongNhanVienChuaKham: KiemTraHopDongNhanVienChuaKham[] = [];
  validationErrors: any = [];

  dataChuaKham: any[] = [];
  dataDaKham: any[] = [];

  gridDanhSachNhanVienErrorColumns: any;
  ThongTinNhanVienError: ThongTinError[] = [];
  dataSourceDanhSachNhanVien: any = {
    data: [],
    total: 0
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService: NotificationService,
    private dialogRef: MatDialogRef<any>,
    private dialog: MatDialog,
    private router: Router,
    private apiService: ApiService) { }

  ngOnInit() {
    this.hopDongKhamSucKhoeId = this.data.hopDongKhamSucKhoeId;
    if (this.hopDongKhamSucKhoeId != 0) {
      this.getDataHopDongKhamSucKhoeNhanVien(this.hopDongKhamSucKhoeId)
    }
  }

  getDataHopDongKhamSucKhoeNhanVien(id: number) {
    this.apiService.get<any[]>("KhamDoan/KiemTraHopDongNhanVienChuaKham?hopDongKhamId=" + id).subscribe(
      (resultData) => {
        if (resultData !== undefined && resultData != null) {
          this.KiemTraHopDongNhanVienChuaKham = resultData;
          this.dataDaKham = this.KiemTraHopDongNhanVienChuaKham.filter(c => c.TrangThai == 1);
          this.dataChuaKham = this.KiemTraHopDongNhanVienChuaKham.filter(c => c.TrangThai == 2);
        }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      }
    );
  }

  khong() {
    this.dialog.closeAll()
  }

  KetThucHopDongKham() {
    if (this.dataDaKham.length > 0) {
      this.dialogRef.close(null);
    } else {
      this.apiService.post<any>("KhamDoan/KetThucHopDongKham?hopDongKhamId=" + this.hopDongKhamSucKhoeId).subscribe(
        (resultData) => {
          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["kết thúc hợp đồng"]));
          this.dialogRef.close(null);
          this.router.navigateByUrl("/kham-doan/hop-dong-kham");
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        }
      );
    }
  }
}
