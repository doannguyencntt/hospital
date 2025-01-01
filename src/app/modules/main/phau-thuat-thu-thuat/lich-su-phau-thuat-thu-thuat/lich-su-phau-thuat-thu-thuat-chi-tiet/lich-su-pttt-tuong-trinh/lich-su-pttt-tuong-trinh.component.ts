import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';

@Component({
  selector: 'app-lich-su-pttt-tuong-trinh',
  templateUrl: './lich-su-pttt-tuong-trinh.component.html',
  styleUrls: ['./lich-su-pttt-tuong-trinh.component.scss']
})
export class LichSuPtttTuongTrinhComponent implements OnInit {
  @Input() yeuCauDichVuKyThuatId: number;
  @Input() dataThongTinLichSuEkipPTTT: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  xemHinhAnhBoPhanTonThuong(dataItem) {
    this.dialog.open(ViewImagePdfComponent, {
      disableClose: false,
      width: '1000px',
      height: '600px',
      data: { Type: "Image", Title: "Xem ảnh", Description: (dataItem.MoTa != undefined ? dataItem.MoTa : ""), Src: dataItem.LuocDo }
    });
  }
}
