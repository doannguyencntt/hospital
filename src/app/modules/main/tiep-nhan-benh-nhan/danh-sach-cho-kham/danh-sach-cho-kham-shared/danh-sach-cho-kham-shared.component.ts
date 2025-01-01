import { Component, OnInit } from '@angular/core';
import { TiepNhanBenhNhanViewModel } from '../../tiep-nhan-benh-nhan.model';

@Component({
  selector: 'app-danh-sach-cho-kham-shared',
  templateUrl: './danh-sach-cho-kham-shared.component.html',
  styleUrls: ['./danh-sach-cho-kham-shared.component.scss']
})
export class DanhSachChoKhamSharedComponent implements OnInit {

  tiepNhanBenhNhan: TiepNhanBenhNhanViewModel;
  
  constructor() { }

  ngOnInit() {
  }

}
