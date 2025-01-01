import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { NguoiGioiThieu } from '../nguoi-gioi-thieu.model';

@Component({
  selector: 'app-nguoi-gioi-thieu-shared',
  templateUrl: './nguoi-gioi-thieu-shared.component.html',
  styleUrls: ['./nguoi-gioi-thieu-shared.component.scss']
})
export class NguoiGioiThieuSharedComponent implements OnInit {
  nguoiGioiThieu = {} as NguoiGioiThieu;
  validationErrors: any;
  isCreate = true;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
    this.nguoiGioiThieu = new NguoiGioiThieu();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.isCreate = false;
    }
  }

  getById(id: number) {
    this.baseService.getById<NguoiGioiThieu>(id).subscribe(resultData => {
      this.nguoiGioiThieu = resultData;
    });
  }
  
  getSharedData() {
    return this.nguoiGioiThieu;
  }
}
