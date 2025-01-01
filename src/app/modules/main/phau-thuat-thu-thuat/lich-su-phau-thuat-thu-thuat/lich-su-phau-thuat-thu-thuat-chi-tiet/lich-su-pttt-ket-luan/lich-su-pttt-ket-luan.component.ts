import { Component, OnInit, Input } from '@angular/core';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-lich-su-pttt-ket-luan',
  templateUrl: './lich-su-pttt-ket-luan.component.html',
  styleUrls: ['./lich-su-pttt-ket-luan.component.scss']
})

export class LichSuPtttKetLuanComponent implements OnInit {
  @Input() yeuCauDichVuKyThuatId: number;
  validationErrors: any = null;
  thongTinLichSuKetLuanPTTT: any = null;
  constructor(private dialog: MatDialog,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.thongTinKetLuan(this.yeuCauDichVuKyThuatId);
  }

  showPopupLoadingData() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });
  }

  closePopupLoadingData() {
    this.dialog.closeAll();
  }


  thongTinKetLuan(id: number) {
    this.showPopupLoadingData();
    this.apiService.get<any>("PhauThuatThuThuat/LichSuKetLuanPTTT?yeuCauDichVuKyThuatId=" + id).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.thongTinLichSuKetLuanPTTT = resultData;
          console.log("resultData PTTT", this.thongTinLichSuKetLuanPTTT)
          this.closePopupLoadingData();

        } else {
          this.closePopupLoadingData();
        }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
          this.closePopupLoadingData();
        }
        this.closePopupLoadingData();
      });
  }

}
