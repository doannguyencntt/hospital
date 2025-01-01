import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { EnumAudit } from 'src/app/shared/enum/audit.enum';
import { LoaiTienTe } from 'src/app/shared/enum/gach-no.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-cong-no-bao-hiem-tu-nhan-lich-su-popup',
  templateUrl: './cong-no-bao-hiem-tu-nhan-lich-su-popup.component.html',
  styleUrls: ['./cong-no-bao-hiem-tu-nhan-lich-su-popup.component.scss']
})
export class CongNoBaoHiemTuNhanLichSuPopupComponent implements OnInit {

  icClose = icClose;
  historys: any;

  actionAdd: EnumAudit = EnumAudit.Added;
  actionUpdate: EnumAudit = EnumAudit.Modified;
  loaiTienTeUSD: LoaiTienTe = LoaiTienTe.USD;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private apiService: ApiService,
  private notificationService: NotificationService) { }

  ngOnInit() {
    this.getHistory(this.data.Id);
  }

  getHistory(id: number){
    this.apiService
      .get<any>("GachNo/GetLichSuGachNo?id=" + id)
      .subscribe(
        (resultData) => {
          this.historys = resultData;
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        }
      );
  }
}
