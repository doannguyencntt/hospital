import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { LyDoTiepNhan } from '../ly-do-tiep-nhan.model';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';

@Component({
  selector: 'app-ly-do-tiep-nhan-shared',
  templateUrl: './ly-do-tiep-nhan-shared.component.html',
  styleUrls: ['./ly-do-tiep-nhan-shared.component.scss']
})
export class LyDoTiepNhanSharedComponent implements OnInit {
  lyDo = {} as LyDoTiepNhan;
  queryInfo: LookupQueryInfo = new LookupQueryInfo();
  validationErrors: any;
  isShowView: string;
  idCha: number = null;
  isAdd: boolean = true;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }
  ngOnInit() {
    this.lyDo = new LyDoTiepNhan();
    const id: number = this.route.snapshot.params.id;
    this.idCha = id;
    if (id != undefined) {
      this.queryInfo.ParameterDependencies = id.toString();
    } else {
      this.queryInfo.ParameterDependencies = "0";
    }
    this.isShowView = this.route.snapshot.params.isShowView;
    if (id !== undefined && id !== null) {
      this.getById(id);
    }
  }

  getById(id: number) {
    if (this.isShowView == "true") {
      this.isAdd = true;
      this.baseService.getById(id).subscribe((result: any) => {
        //console.log(result)
        this.lyDo = result;
        this.lyDo.LyDoTiepNhanChaId = this.lyDo.Id;
        this.lyDo.Id = 0;
        this.lyDo.Ten = null;
        // this.trieuChung.DanhMucChuanIds = null;
        // this.trieuChung.TrieuChungDanhMucChuanDoans = null
        // console.log("AddChildren", this.trieuChung);
      });
    }
    else {
      this.isAdd = false;
      this.baseService.getById<LyDoTiepNhan>(id).subscribe(resultData => {
        if (resultData !== null && resultData !== undefined) {
          this.lyDo = resultData;
        }
      });
    }

  }

  getSharedData() {
    // console.log(this.trieuChung);
    return this.lyDo;
  }

}
