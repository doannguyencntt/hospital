import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { ViTriKhoDuocPham } from '../vi-tri-kho-duoc-pham.model';

@Component({
  selector: 'app-vi-tri-kho-duoc-pham-shared',
  templateUrl: './vi-tri-kho-duoc-pham-shared.component.html',
  styleUrls: ['./vi-tri-kho-duoc-pham-shared.component.scss']
})
export class ViTriKhoDuocPhamSharedComponent implements OnInit {

  viTriKhoDuocPham = {} as ViTriKhoDuocPham;
  validationErrors:any;
  isCreate = true;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
    const id:number = this.route.snapshot.params.id;
    if (id !== undefined && id!== null) {
      this.getById(id);
      this.isCreate = false;
    }
    this.viTriKhoDuocPham.IsDisabled = false;
  }
  getById(id: number) {
    this.baseService.getById<ViTriKhoDuocPham>(id).subscribe(resultData => {
      this.viTriKhoDuocPham = resultData;
    });
  }
  getSharedData() {
    console.log(this.viTriKhoDuocPham);
    return this.viTriKhoDuocPham;
    
  }

}
