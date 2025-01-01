import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { ChucDanhSharedComponent } from '../chuc-danh-shared/chuc-danh-shared.component';
import { ChucDanh } from '../chuc-danh.model';
import { BaseService } from 'src/app/core/services/base.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-chuc-danh-update',
  templateUrl: './chuc-danh-update.component.html',
  styleUrls: ['./chuc-danh-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ChucDanhUpdateComponent implements OnInit {
  chucDanh = {} as ChucDanh;
  idsub:number;
  @Input() idCustomize: number = null;
  @ViewChild(ChucDanhSharedComponent, {static: true}) shared;
  constructor(private router: Router, private route: ActivatedRoute,private baseService : BaseService,private location: Location) { }

  ngOnInit() {
    const id:number = this.route.snapshot.params.id;
    if (id !== undefined && id!== null) {
      this.getById(id);   
    }
  }
  getById(id: number) {
    this.baseService.getById<ChucDanh>(id).subscribe(resultData => {
      this.chucDanh = resultData;
      this.chucDanh.IsDefault = resultData.IsDefault;
      //console.log('asasdasda', this.chucDanh.IsDisabled);
    })
  }
  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/hanh-chinh/chuc-danh'],{ queryParams: { filter: 'new'}, queryParamsHandling: 'merge' });
  }
  cancel() {
    if(this.idCustomize == null)
    {
      this.location.back();
    }
  }
}
