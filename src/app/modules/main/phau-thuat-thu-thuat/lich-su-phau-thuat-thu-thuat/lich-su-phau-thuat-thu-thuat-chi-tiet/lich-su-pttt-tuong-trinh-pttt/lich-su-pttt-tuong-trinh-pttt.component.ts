import { Component, OnInit, Input } from '@angular/core';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { LichSuDichVuPTTTCombobox } from '../../../phau-thuat-thu-thuat.model';
import { MatDialog } from '@angular/material';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { LichSuDvKhongThucHienComponent } from '../lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component';
@Component({
  selector: 'app-lich-su-pttt-tuong-trinh-pttt',
  templateUrl: './lich-su-pttt-tuong-trinh-pttt.component.html',
  styleUrls: ['./lich-su-pttt-tuong-trinh-pttt.component.scss']
})
export class LichSuPtttTuongTrinhPtttComponent implements OnInit {
  @Input() yeuCauTiepNhanId: number;
  // @Input() dataThongTinLichSuEkipPTTT: number;
  @Input() lanThucHien: number;
  validationErrors: any;
  coDichVuHuy: boolean = null;
  dataThongTinLichSuEkipPTTT: any = null;
  queryInfo: LookupQueryInfo = new LookupQueryInfo();
  dichVu: LichSuDichVuPTTTCombobox = new LichSuDichVuPTTTCombobox();

  //BVHD-3860
  @Input() laKhongThucHien: boolean = false;

  constructor(private dialog: MatDialog, private apiService: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.coDichVuHuy = this.laKhongThucHien;
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

  getThongTinLichSuEkipPTTT(id: number) {
    this.apiService.get<any>("PhauThuatThuThuat/ThongTinLichSuEkipPTTT?yeuCauDichVuKyThuatId=" + id).subscribe((resultData) => {
      if (resultData != undefined && resultData != null) {
        this.dataThongTinLichSuEkipPTTT = resultData;
        //console.log("data Ekip: ", this.dataThongTinLichSuEkipPTTT);
        this.apiService.get<any>("PhauThuatThuThuat/KiemTraCoDichVuHuy?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId).subscribe(result => {
          if (result != undefined && result != null) {
            this.coDichVuHuy = result;
          }
        })
      }
      else {
        this.dataThongTinLichSuEkipPTTT = null;
      }
    }
      ,
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
          this.closePopupLoadingData();
        }
        this.closePopupLoadingData();
      });
  }
  onTabSelect(event: any) {


  }
  chonDichVu(event: any) {
    if (event != undefined && event != null) {
      this.getThongTinLichSuEkipPTTT(event);
    }
  }

  hienThiDichVuKhongThucHien() {
    var self = this;
    self.dialog
      .open(LichSuDvKhongThucHienComponent, {
        disableClose: true,
        width: "1200px",
        data: { YeuCauTiepNhanId: this.yeuCauTiepNhanId, LanThucHien: this.lanThucHien },
      });
  }
}
