import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { BaseService } from 'src/app/core/services/base.service';

import { ChucDanh } from '../chuc-danh.model';

@Component({
  selector: 'app-chuc-danh-shared',
  templateUrl: './chuc-danh-shared.component.html',
  styleUrls: ['./chuc-danh-shared.component.scss']
})
export class ChucDanhSharedComponent implements OnInit {
  chucDanh = {} as ChucDanh;
  validationErrors: any;
  isCreate = true;
  constructor(private route: ActivatedRoute,private baseService : BaseService,private apiService : ApiService) { }

  ngOnInit() {
    
    const id:number = this.route.snapshot.params.id;

    if (id !== undefined && id!== null) {
      this.getById(id);   
      this.isCreate = false;   
    }
     this.chucDanh.IsDefault =false; // khi thêm  mới . mặc định isdefaul bằng fasle 
     this.chucDanh.IsDisabled =false; // 
  }
  getSharedData() {
    return this.chucDanh;
  }
  getById(id: number) {
    this.baseService.getById<ChucDanh>(id).subscribe(resultData => {
      this.chucDanh = resultData;
      this.chucDanh.IsDefault = resultData.IsDefault;
      //console.log('asasdasda', this.chucDanh.IsDisabled);
    })
  }
  
}
