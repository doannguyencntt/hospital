import { Component, OnInit } from '@angular/core';
import { HocViHocHam } from '../hoc-vi-hoc-ham.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from '../../../../../../../../app/core/services/base.service';

@Component({
  selector: 'app-hoc-vi-hoc-ham-share',
  templateUrl: './hoc-vi-hoc-ham-share.component.html',
  styleUrls: ['./hoc-vi-hoc-ham-share.component.scss']
})
export class HocViHocHamShareComponent implements OnInit {

   
  modelFE ={} as HocViHocHam;
  validationErrors: any;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
    const id:number = this.route.snapshot.params.id;
    if (id !== undefined && id!== null) {
      this.getById(id);      
    }
  }
  getById(id: number) {
   this.baseService.getById<HocViHocHam>(id).subscribe(resultData => {
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
