import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { MatDialog } from '@angular/material';
declare var $: any;

@Component({
  selector: 'app-lich-su-kham-benh-bo-phan-ton-thuong',
  templateUrl: './lich-su-kham-benh-bo-phan-ton-thuong.component.html',
  styleUrls: ['./lich-su-kham-benh-bo-phan-ton-thuong.component.scss']
})
export class LichSuKhamBenhBoPhanTonThuongComponent implements OnInit {
  dataSourceBoPhanTonThuong: any = {
    data: [],
    total: 0
}
  @Input() yeuCauKhamBenhId : number;
  constructor(private apiService: ApiService,private dialog: MatDialog) { }

  ngOnInit() {
  this.apiService.post<any>("KhamBenh/GetDataGridBoPhanTonThuong?idYCKB=" + this.yeuCauKhamBenhId).subscribe(resultData => {
    if (resultData !== undefined && resultData != null) {
      this.dataSourceBoPhanTonThuong.data = resultData.Value.Data;
    }
  });
  }
  xemHinhAnhBoPhanTonThuong(dataItem){
    this.dialog.open(ViewImagePdfComponent, {
      disableClose: false,
      width: '1000px',
      height:'600px',        
      data: { Type:"Image",Title: "Xem ảnh", Description: (dataItem.MoTa != undefined ? dataItem.MoTa : ""),Src: dataItem.HinhAnh}
  });
    
  }
}
