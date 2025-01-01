import { Component, OnInit } from '@angular/core';
import { MauVaChePham } from '../mau-va-che-pham.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-mau-va-che-pham-shared',
  templateUrl: './mau-va-che-pham-shared.component.html',
  styleUrls: ['./mau-va-che-pham-shared.component.scss']
})
export class MauVaChePhamSharedComponent implements OnInit {
  mauVaChePham = {} as MauVaChePham;
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
      return this.mauVaChePham;
  }

  getById(id: number) {
      this.baseService.getById<MauVaChePham>(id).subscribe(resultData => {
          this.mauVaChePham = resultData;
      });
  }

}
