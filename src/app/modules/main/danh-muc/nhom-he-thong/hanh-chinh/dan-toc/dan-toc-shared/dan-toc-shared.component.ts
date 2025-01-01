import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { BaseService } from 'src/app/core/services/base.service';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { DanToc } from '../dan-toc.model';

@Component({
  selector: 'app-dan-toc-shared',
  templateUrl: './dan-toc-shared.component.html',
  styleUrls: ['./dan-toc-shared.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DanTocSharedComponent implements OnInit {
  danToc = {} as DanToc;
  validationErrors: any;
  isCreate = true;
  constructor(private route: ActivatedRoute,private baseService : BaseService,private apiService : ApiService) { }

  ngOnInit() {
    
    const id:number = this.route.snapshot.params.id;

    if (id !== undefined && id!== null) {
      this.getById(id);   
      this.isCreate = false;   
    }
     this.danToc.IsDefault =false; // khi thêm  mới . mặc định isdefaul bằng fasle 
     this.danToc.IsDisabled =false; // 
  }
  getSharedData() {
    return this.danToc;
  }
  choQuocGia(event){
    if(event != null)
    {
      this.danToc.QuocGiaId = event;
    }
  }
  getById(id: number) {
    this.baseService.getById<DanToc>(id).subscribe(resultData => {
      this.danToc = resultData;
      this.danToc.IsDefault = resultData.IsDefault;
      
    })
  }

}
