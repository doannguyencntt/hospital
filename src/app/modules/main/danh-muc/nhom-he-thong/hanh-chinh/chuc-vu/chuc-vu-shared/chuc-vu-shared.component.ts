import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { ChucVu } from '../chuc-vu.model';


@Component({
  selector: 'app-chuc-vu-shared',
  templateUrl: './chuc-vu-shared.component.html',
  styleUrls: ['./chuc-vu-shared.component.scss']
})
export class ChucVuSharedComponent implements OnInit {
  chucvu = {} as ChucVu;
  validationErrors:any;
  isCreate = true;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
    const id:number = this.route.snapshot.params.id;
    if (id !== undefined && id!== null) {
      this.getById(id);
      this.isCreate = false;
    }
    this.chucvu.IsDisabled = false;
  }
  getById(id: number) {
    this.baseService.getById<ChucVu>(id).subscribe(resultData => {
      this.chucvu = resultData;
    });
  }
  getSharedData() {
    return this.chucvu;
  }
 
}
