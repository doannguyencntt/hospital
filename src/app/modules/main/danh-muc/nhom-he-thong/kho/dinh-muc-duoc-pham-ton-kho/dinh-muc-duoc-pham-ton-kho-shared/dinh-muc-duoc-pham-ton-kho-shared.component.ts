import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { DinhMucDuocPhamTonKho } from '../dinh-muc-duoc-pham-ton-kho.model';
@Component({
  selector: 'app-dinh-muc-duoc-pham-ton-kho-shared',
  templateUrl: './dinh-muc-duoc-pham-ton-kho-shared.component.html',
  styleUrls: ['./dinh-muc-duoc-pham-ton-kho-shared.component.scss']
})
export class DinhMucDuocPhamTonKhoSharedComponent implements OnInit {
  duocPhamTonKho = {} as DinhMucDuocPhamTonKho;
  validationErrors: any;
  isCreate = true;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.isCreate = false;
    }
  }
  getById(id: number) {
    this.baseService.getById<DinhMucDuocPhamTonKho>(id).subscribe(resultData => {
      this.duocPhamTonKho = resultData;
    });
  }
  getSharedData() {
    return this.duocPhamTonKho;
  }
  //covert only integer
  convertInt() {
    if (this.duocPhamTonKho.TonToiThieu != null)
      this.duocPhamTonKho.TonToiThieu = parseInt(this.duocPhamTonKho.TonToiThieu.toString());
    if (this.duocPhamTonKho.TonToiDa != null)
      this.duocPhamTonKho.TonToiDa = parseInt(this.duocPhamTonKho.TonToiDa.toString());
    if (this.duocPhamTonKho.SoNgayTruocKhiHetHan != null)
      this.duocPhamTonKho.SoNgayTruocKhiHetHan = parseInt(this.duocPhamTonKho.SoNgayTruocKhiHetHan.toString());
  }
}
