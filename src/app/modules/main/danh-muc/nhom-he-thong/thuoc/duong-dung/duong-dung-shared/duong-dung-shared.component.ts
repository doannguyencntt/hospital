import { Component, OnInit } from '@angular/core';
import { DuongDung } from '../duong-dung.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
@Component({
  selector: 'app-duong-dung-shared',
  templateUrl: './duong-dung-shared.component.html',
  styleUrls: ['./duong-dung-shared.component.scss']
})
export class DuongDungSharedComponent implements OnInit {
  duongdung = {} as DuongDung;
  validationErrors:any;
  isCreate = true;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }
  ngOnInit() {
    const id:number = this.route.snapshot.params.id;
    if (id !== undefined && id!== null) {
      this.getById(id);
      this.isCreate = false;
    }
    this.duongdung.IsDisabled = false;
  }
  getById(id: number) {
    this.baseService.getById<DuongDung>(id).subscribe(resultData => {
      this.duongdung = resultData;
    });
  }
  getSharedData() {
    return this.duongdung;
  }
}
