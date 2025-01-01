import { Component, OnInit } from '@angular/core';
import { DanhSachChoKham } from '../danh-sach-cho-kham.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-danh-sach-cho-kham-pdf',
  templateUrl: './danh-sach-cho-kham-pdf.component.html',
  styleUrls: ['./danh-sach-cho-kham-pdf.component.scss']
})
export class DanhSachChoKhamPdfComponent implements OnInit {
  danhSachChoKham = {} as DanhSachChoKham;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
  }
  // getSharedPrintForm(id: any) {
  //   return new Promise(resolve => {
  //     this.apiService.get<any>("YeuCauKhamBenh/InPhieuKhamBenh?id=" + id).subscribe(resultData => {
  //       resolve(resultData);
  //     });  
  //   });
  // }
}
