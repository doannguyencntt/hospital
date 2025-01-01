import { Component, OnInit } from '@angular/core';
import { ChiSoXetNghiem } from '../chi-so-xet-nghiem.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-chi-so-xet-nghiem-share',
  templateUrl: './chi-so-xet-nghiem-share.component.html',
  styleUrls: ['./chi-so-xet-nghiem-share.component.scss']
})
export class ChiSoXetNghiemShareComponent implements OnInit {
   
  modelFE ={} as ChiSoXetNghiem;
  validationErrors: any;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
    const id:number = this.route.snapshot.params.id;
    this.modelFE.HieuLuc = true;
    if (id !== undefined && id!== null) {
      this.getById(id);      
    }
  }
  
  getById(id: number) {
      this.baseService.getById<ChiSoXetNghiem>(id).subscribe(resultData => {
          if(resultData !== null && resultData !== undefined)
          {
                this.modelFE = resultData;
          }
      });
  }

  getSharedData() {
    return this.modelFE;
  }


}
