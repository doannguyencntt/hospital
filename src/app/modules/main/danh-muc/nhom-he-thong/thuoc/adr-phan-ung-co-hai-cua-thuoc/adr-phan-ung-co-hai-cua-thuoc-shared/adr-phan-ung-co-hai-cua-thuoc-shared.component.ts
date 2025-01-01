import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { AdrPhanUngCoHaiCuaThuoc } from '../adr-phan-ung-co-hai-cua-thuoc.model';
@Component({
  selector: 'app-adr-phan-ung-co-hai-cua-thuoc-shared',
  templateUrl: './adr-phan-ung-co-hai-cua-thuoc-shared.component.html',
  styleUrls: ['./adr-phan-ung-co-hai-cua-thuoc-shared.component.scss']
})
export class AdrPhanUngCoHaiCuaThuocSharedComponent implements OnInit {
  adr= {} as AdrPhanUngCoHaiCuaThuoc;
  validationErrors:any;
  isCreate = true;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
    const id:number = this.route.snapshot.params.id;
    if (id !== undefined && id!== null) {
      this.getById(id);
      this.isCreate = false;
    }
    this.adr.DuocDongHoc = true;
    this.adr.DuocLucHoc = true;
    this.adr.ThuocThucAn = true;
    this.adr.QuyTac = true;

  }
  getById(id: number) {
    this.baseService.getById<AdrPhanUngCoHaiCuaThuoc>(id).subscribe(resultData => {
      this.adr = resultData;
    });
  }
  getSharedData() {
    return this.adr;
  }

}
