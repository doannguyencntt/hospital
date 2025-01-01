import { Component, OnInit } from '@angular/core';
import { TrieuChung,LookupQueryInfo} from '../trieu-chung.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-trieu-chung-shared',
  templateUrl: './trieu-chung-shared.component.html',
  styleUrls: ['./trieu-chung-shared.component.scss']
})
export class TrieuChungSharedComponent implements OnInit {
  trieuChung = {} as TrieuChung;
  validationErrors: any;
  isShowView : string;
  idCha: number = null;
  show : boolean = true;
  queryInfo: LookupQueryInfo = new LookupQueryInfo();
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
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
      if(this.isShowView == "true")
      {
        this.show = true;
        this.baseService.getById(id).subscribe((result: any) =>{
            this.trieuChung = result;
             this.trieuChung.TrieuChungChaId = this.trieuChung.Id;
            this.trieuChung.Id = 0;
             this.trieuChung.Ten = null;
             this.trieuChung.DanhMucChuanIds = null;
             this.trieuChung.TrieuChungDanhMucChuanDoans = null
            // console.log("AddChildren", this.trieuChung);
          });  
      }
      else{
        this.show = false;
        this.baseService.getById<TrieuChung>(id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.trieuChung = resultData;
            }
        });
      }
      
  }

  getSharedData() {
      // console.log(this.trieuChung);
      return this.trieuChung;
      
  }

}
