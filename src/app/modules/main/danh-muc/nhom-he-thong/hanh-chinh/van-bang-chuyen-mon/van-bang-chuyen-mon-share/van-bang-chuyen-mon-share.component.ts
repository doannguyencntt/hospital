import { Component, OnInit } from '@angular/core';
import { VanBangChuyenMon } from '../van-bang-chuyen-mon.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from '../../../../../../../core/services/base.service';

@Component({
  selector: 'app-van-bang-chuyen-mon-share',
  templateUrl: './van-bang-chuyen-mon-share.component.html',
  styleUrls: ['./van-bang-chuyen-mon-share.component.scss']
})
export class VanBangChuyenMonShareComponent implements OnInit {

  trinhDoChuyenMon = {} as VanBangChuyenMon;
  validationErrors: any;
  isCreate = true;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
    this.trinhDoChuyenMon.IsDisabled = false;
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.isCreate = false;
    }
  }

  getSharedData() {
    return this.trinhDoChuyenMon;
  }
  
  getById(id: number) {
    this.baseService.getById<VanBangChuyenMon>(id).subscribe(resultData => {
      this.trinhDoChuyenMon = resultData;
    });
  }

}
