import { Component, OnInit } from '@angular/core';
import { DonViTinh } from '../don-vi-tinh.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-don-vi-tinh-shared',
  templateUrl: './don-vi-tinh-shared.component.html',
  styleUrls: ['./don-vi-tinh-shared.component.scss']
})
export class DonViTinhSharedComponent implements OnInit {
  donViTinh = {} as DonViTinh;
  validationErrors: any;
  isCreate = true;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
      const id: number = this.route.snapshot.params.id;
      if (id !== undefined && id !== null) {
          this.getById(id);
          this.isCreate = false;
      }
  }

  getSharedData() {
      return this.donViTinh;
  }

  getById(id: number) {
      this.baseService.getById<DonViTinh>(id).subscribe(resultData => {
          this.donViTinh = resultData;
      });
  }

}
