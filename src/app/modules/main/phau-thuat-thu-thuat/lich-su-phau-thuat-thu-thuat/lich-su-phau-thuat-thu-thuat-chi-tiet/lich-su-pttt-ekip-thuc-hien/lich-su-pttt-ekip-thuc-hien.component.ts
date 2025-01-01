import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lich-su-pttt-ekip-thuc-hien',
  templateUrl: './lich-su-pttt-ekip-thuc-hien.component.html',
  styleUrls: ['./lich-su-pttt-ekip-thuc-hien.component.scss']
})
export class LichSuPtttEkipThucHienComponent implements OnInit {
  @Input() yeuCauDichVuKyThuatId: number;
  @Input() dataThongTinLichSuEkipPTTT: any;


  constructor() { }

  ngOnInit() {
    console.log("yeuCauDichVuKyThuatId:", this.yeuCauDichVuKyThuatId)
  }
  ngOnChanges() {
    if (this.dataThongTinLichSuEkipPTTT != null) {
      this.yeuCauDichVuKyThuatId = this.dataThongTinLichSuEkipPTTT.Id;
    }
  }
}
