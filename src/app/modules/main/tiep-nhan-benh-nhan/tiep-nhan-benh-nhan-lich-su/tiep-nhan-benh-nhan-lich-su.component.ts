import { Component, OnInit, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
  selector: 'app-tiep-nhan-benh-nhan-lich-su',
  templateUrl: './tiep-nhan-benh-nhan-lich-su.component.html',
  styleUrls: ['./tiep-nhan-benh-nhan-lich-su.component.scss']
})
export class TiepNhanBenhNhanLichSuComponent implements OnInit {

  documentType: DocumentType;

  @Input() benhNhanId: number = null;

  gridColumns: any[] = [];
  
  constructor() { }

  ngOnInit() {
    //console.log("lich su = ", this.benhNhanId)
    this.documentType = DocumentType.YeuCauTiepNhan;

    this.gridColumns = [
      { Field: "ThoiDiemDangKyDisplay", Title: "Ngày khám", Width: 150, Sortable: true },
      { Field: "BaSiKham", Title: "Bác sĩ khám", Width: 150, Sortable: true},
      { Field: "Phong", Title: "Phòng khám", Width: 150, Sortable: true},
      { Field: "LyDoKham", Title: "Lý do khám", Width: 150, Sortable: true},
      { Field: "HoTen", Title: "Họ tên người bệnh", Width: 200, Sortable: true},
      { Field: "TrieuChungLamSang", Title: "Triệu chuẩn LS", Width: 200, Sortable: true},
      { Field: "ChuanDoanICD", Title: "Chẩn đoán ICD", Width: 250, Sortable: true}
    ];

  }

}
