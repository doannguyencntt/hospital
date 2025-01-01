import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { ICD } from '../icd.model';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';

@Component({
  selector: 'app-icd-shared',
  templateUrl: './icd-shared.component.html',
  styleUrls: ['./icd-shared.component.scss']
})
export class IcdSharedComponent implements OnInit {
  icd: ICD;
  queryInfoICD: LookupQueryInfo = new LookupQueryInfo();
  queryInfoKhoa: LookupQueryInfo = new LookupQueryInfo();
  validationErrors: any;
  isCreate = true;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
    this.icd = new ICD();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.isCreate = false;
    }
    if (this.isCreate) {
      this.icd.GioiTinh = 1;
      this.icd.ManTinh = false;
      this.icd.BenhThuongGap = false;
      this.icd.BenhNam = false;
      this.icd.KhongBaoHiem = false;
      this.icd.NgoaiDinhSuat = false;
      this.icd.HieuLuc = true;
    }

  }
  getById(id: number) {
    this.baseService.getById<ICD>(id).subscribe(resultData => {
      this.icd = resultData;
      // if (this.icd.LoaiICDId != null) {
      //   this.queryInfoICD.ParameterDependencies = this.icd.LoaiICDId.toString();
      // }
      // if (this.icd.KhoaId != null) {
      //   this.queryInfoKhoa.ParameterDependencies = this.icd.KhoaId.toString();
      // }
    });
  }
  getSharedData() {
    return this.icd;
  }

}
