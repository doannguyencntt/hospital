import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import {
  PhauThuatThuThuatTuongTrinh,
} from "../../../kham-benh.model";
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
declare var $: any;
@Component({
  selector: 'app-lich-su-kham-benh-phau-thuat-thu-thuat',
  templateUrl: './lich-su-kham-benh-phau-thuat-thu-thuat.component.html',
  styleUrls: ['./lich-su-kham-benh-phau-thuat-thu-thuat.component.scss']
})
export class LichSuKhamBenhPhauThuatThuThuatComponent implements OnInit {
  thongTinTuongTrinhKhoaPhong: any;
  thongTinTuongTrinhChanDoanVaoKhoa: any;
  thongTinTuongTrinhMoTa: any;
  pTTT: PhauThuatThuThuatTuongTrinh[] = [];
  constructor(private apiService: ApiService, private dialog: MatDialog) { }
  @Input() yeuCauKhamBenhId: number;
  ngOnInit() {
    var self = this;
    var dialogRef = self.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });
    this.apiService
      .get<any>(
        "KhamBenh/GetLichSuThongTinTuongTrinh?yeuCauKhamBenhId=" + this.yeuCauKhamBenhId).subscribe(resultData => {
          this.thongTinTuongTrinhKhoaPhong = resultData.TenKhoaPhong;
          this.thongTinTuongTrinhChanDoanVaoKhoa = resultData.ChanDoanVaoKhoa;
          this.thongTinTuongTrinhMoTa = resultData.MoTa;
        });
    this.apiService
      .get<any>(
        "KhamBenh/GetLichSuListPhauThuatThuThuat?yeuCauKhamBenhId=" + this.yeuCauKhamBenhId
      )
      .subscribe((resultData) => {
        this.pTTT = resultData;
      });
      dialogRef.close();
  }
  ViewImage(thongTinAnh) {
    this.dialog.open(ViewImagePdfComponent, {
      disableClose: false,
      width: '1000px',
      height: '600px',
      data: {
          Type: 'Image', Title: 'Xem ảnh', Description: (thongTinAnh.MoTa !== null ? thongTinAnh.MoTa : ''),
          Src: thongTinAnh.LuocDo
      }
  });
  }
}
