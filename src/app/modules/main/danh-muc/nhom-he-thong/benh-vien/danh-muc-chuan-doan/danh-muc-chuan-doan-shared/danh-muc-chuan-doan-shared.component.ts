import { Component, OnInit } from '@angular/core';
import { DanhMucChuanDoan } from '../danh-muc-chuan-doan.model';

import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
@Component({
  selector: 'app-danh-muc-chuan-doan-shared',
  templateUrl: './danh-muc-chuan-doan-shared.component.html',
  styleUrls: ['./danh-muc-chuan-doan-shared.component.scss']
})
export class DanhMucChuanDoanSharedComponent implements OnInit {
  danhMucChuanDoan = {} as DanhMucChuanDoan;
  validationErrors:any;
  isCreate = true;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
    const id:number = this.route.snapshot.params.id;
    if (id !== undefined && id!== null) {
      this.getById(id);
      this.isCreate = false;
    }
  }
  getById(id: number) {
    this.baseService.getById<DanhMucChuanDoan>(id).subscribe(resultData => {
      this.danhMucChuanDoan = resultData;
    });
  }
  getSharedData() {
    return this.danhMucChuanDoan;
  }
}
