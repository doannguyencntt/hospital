import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { BaseService } from 'src/app/core/services/base.service';

import { CheDoAn } from '../che-do-an.model';

@Component({
  selector: 'app-che-do-an-shared',
  templateUrl: './che-do-an-shared.component.html',
  styleUrls: ['./che-do-an-shared.component.scss']
})
export class CheDoAnSharedComponent implements OnInit {
  cheDoAn = {} as CheDoAn;
  validationErrors: any;
  isCreate = true;
  constructor(private route: ActivatedRoute,private baseService : BaseService,private apiService : ApiService) { }

  ngOnInit() {
    
    const id:number = this.route.snapshot.params.id;

    if (id !== undefined && id!== null) {
      this.getById(id);   
      this.isCreate = false;   
    }
     this.cheDoAn.IsDefault =false; // khi thêm  mới . mặc định isdefaul bằng fasle 
     this.cheDoAn.IsDisabled =false; // 
  }
  getSharedData() {
    return this.cheDoAn;
  }
  getById(id: number) {
    this.baseService.getById<CheDoAn>(id).subscribe(resultData => {
      this.cheDoAn = resultData;
      this.cheDoAn.IsDefault = resultData.IsDefault;
      //console.log('asasdasda', this.cheDoAn.IsDisabled);
    })
  }
  
}
