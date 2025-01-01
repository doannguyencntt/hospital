import { Component, OnInit,ViewChild,TemplateRef,Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-lich-su-kham-benh-kham-khac',
  templateUrl: './lich-su-kham-benh-kham-khac.component.html',
  styleUrls: ['./lich-su-kham-benh-kham-khac.component.scss']
})
export class LichSuKhamBenhKhamKhacComponent implements OnInit {
  gridKhamKhacColumns: any[] = [];
  documentType: DocumentType;
  dataSourceKhamKhac: any = {
      data: [],
      total: 0
  }
  @Input() yeuCauKhamBenhId : number;
  constructor(private apiService: ApiService) { }
  @ViewChild('boPhanTemplate', { static: true }) boPhanTemplate: TemplateRef<any>;
  @ViewChild('moTaTemplate', { static: true }) moTaTemplate: TemplateRef<any>;
  ngOnInit() {
    this.gridKhamKhacColumns = [
      { Field: "BoPhan", Title: "Bộ phận", Width: 100,Sortable: false, Template: this.boPhanTemplate },
      { Field: "MoTa", Title: "Mô tả", Width: 220, Sortable: false,Template: this.moTaTemplate },
      { Field: "Action", Title: "", Width: 20, Sortable: false}
  ];
  this.apiService.post<any>("KhamBenh/GetDataGridBoPhanKhac?idYCKB=" + this.yeuCauKhamBenhId).subscribe(resultData => {
    if (resultData !== undefined && resultData != null) {
      this.dataSourceKhamKhac.data = resultData.Value.Data;
    }
  });
  }
}
