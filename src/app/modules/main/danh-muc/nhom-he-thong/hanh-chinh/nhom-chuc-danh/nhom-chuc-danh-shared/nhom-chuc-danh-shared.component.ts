import { Component, OnInit } from '@angular/core';
import { NhomChucDanh } from '../nhom-chuc-danh.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-nhom-chuc-danh-shared',
  templateUrl: './nhom-chuc-danh-shared.component.html',
  styleUrls: ['./nhom-chuc-danh-shared.component.scss']
})
export class NhomChucDanhSharedComponent implements OnInit {

  nhomChucDanh = {} as NhomChucDanh;
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

  getSharedData() {
      return this.nhomChucDanh;
  }

  getById(id: number) {
      this.baseService.getById<NhomChucDanh>(id).subscribe(resultData => {
          this.nhomChucDanh = resultData;
      });
  }

}
