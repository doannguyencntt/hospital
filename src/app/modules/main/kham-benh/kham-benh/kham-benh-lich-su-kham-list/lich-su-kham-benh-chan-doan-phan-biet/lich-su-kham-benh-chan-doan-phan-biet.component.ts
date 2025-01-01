import { Component, OnInit,ViewChild, TemplateRef,Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
  selector: 'app-lich-su-kham-benh-chan-doan-phan-biet',
  templateUrl: './lich-su-kham-benh-chan-doan-phan-biet.component.html',
  styleUrls: ['./lich-su-kham-benh-chan-doan-phan-biet.component.scss']
})
export class LichSuKhamBenhChanDoanPhanBietComponent implements OnInit {
  documentType: DocumentType;
  gridChanDoanPhanBietColumns: any[] = [];

  dataSourceChanDoanPhamBiet: any = {
    data: [],
    total: 0
  }
  @Input() yeuCauKhamBenhId : number;
  @ViewChild('icdTemplate', { static: true }) icdTemplate: TemplateRef<any>;
  @ViewChild('ghiChuTemplate', { static: true }) ghiChuTemplate: TemplateRef<any>;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.documentType = DocumentType.KhamBenh;
    this.gridChanDoanPhanBietColumns = [
      { Field: "ICD", Title: "ICD", Width: 150, Sortable: false ,Template: this.icdTemplate },
      { Field: "GhiChu", Title: "Chẩn đoán", Sortable: false,Width: 150, Template: this.ghiChuTemplate },
      { Field: "Action", Title: "", Width: 20, Sortable: false }
    ]
    this.apiService.post<any>("KhamBenh/GetDataGridChanDoanPhanBiet?idYCKB=" + this.yeuCauKhamBenhId).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.dataSourceChanDoanPhamBiet.data = resultData.Value.Data;
      }
    });
  }

}
