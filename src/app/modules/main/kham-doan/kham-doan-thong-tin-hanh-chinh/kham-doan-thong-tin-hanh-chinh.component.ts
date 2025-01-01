import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { KhamDoanThongTinHanhChinh } from '../kham-doan.model';

@Component({
  selector: 'app-kham-doan-thong-tin-hanh-chinh',
  templateUrl: './kham-doan-thong-tin-hanh-chinh.component.html',
  styleUrls: ['./kham-doan-thong-tin-hanh-chinh.component.scss']
})
export class KhamDoanThongTinHanhChinhComponent implements OnInit {

  thongTinHanhChinh: KhamDoanThongTinHanhChinh = new KhamDoanThongTinHanhChinh();

  @Input() yeuCauTiepNhanId: number;
  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.getThongTinHanhChinh(this.yeuCauTiepNhanId);
  }

  getThongTinHanhChinh(yeuCauTiepNhanId: number) {
    this.apiService
      .get<KhamDoanThongTinHanhChinh>("KhamDoan/GetThongTinHanhChinh?yeuCauTiepNhanId=" + yeuCauTiepNhanId).subscribe(
        (resultData) => {
          this.thongTinHanhChinh = resultData;
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        }
      );
  }
}
