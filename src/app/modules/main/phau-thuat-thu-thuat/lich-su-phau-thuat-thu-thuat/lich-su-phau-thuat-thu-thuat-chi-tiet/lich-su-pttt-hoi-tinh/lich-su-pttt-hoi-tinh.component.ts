import { Component, OnInit, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
@Component({
  selector: 'app-lich-su-pttt-hoi-tinh',
  templateUrl: './lich-su-pttt-hoi-tinh.component.html',
  styleUrls: ['./lich-su-pttt-hoi-tinh.component.scss']
})
export class LichSuPtttHoiTinhComponent implements OnInit {
  @Input() yeuCauTiepNhanId: number;
  @Input() thongTinKhamKhacPTTT: any;
  thongTinKhamTheoDoiData: string = null;
  thongTinKhamTheoDoiTemplateObj: any = null;

  validationErrors: any = null;
  gridKhamKhacColumns: any[] = [];
  documentType: DocumentType = DocumentType.LichSuPhauThuatThuThuat;
  constructor() { }

  ngOnInit() {
    this.gridKhamKhacColumns = [
      { Field: "BoPhan", Title: "Bộ Phận", Width: 100 },
      { Field: "MoTa", Title: "Mô Tả", Width: 100 },
    ];
    this.getThongTinKhamKhacChiTiets(0);
  }

  getThongTinKhamKhacChiTiets(index: number) {
    this.thongTinKhamTheoDoiTemplateObj = JSON.parse(this.thongTinKhamKhacPTTT[index].ThongTinKhamTheoDoiTemplate);
    this.thongTinKhamTheoDoiData = this.thongTinKhamKhacPTTT[index].ThongTinKhamTheoDoiData;
    if (this.thongTinKhamTheoDoiData == null) {
      this.thongTinKhamTheoDoiTemplateObj = undefined;
    }
    this.bindDataDynamicComponent();
  }

  bindDataDynamicComponent() {
    let strData = this.thongTinKhamTheoDoiData;
    if (strData != undefined && strData != null) {
      let dataObj = JSON.parse(strData);
      let itemTemp = null;
      if (this.thongTinKhamTheoDoiTemplateObj !== null) {
        this.thongTinKhamTheoDoiTemplateObj.ComponentDynamics.forEach(item => {
          if (item.groupItems != undefined && item.groupItems != null && item.groupItems.length > 0) {
            item.groupItems.forEach(element => {
              itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == element.Id);
              if (itemTemp != null) {
                element.Value = itemTemp.Value;
              }
            });
          }
          else {
            itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == item.Id);
            if (itemTemp != null) {
              item.Value = itemTemp.Value;
            }
          }
        });
      }
    }
  }

  onTabSelect(event: any) {
    this.getThongTinKhamKhacChiTiets(event.index);
  }
}
