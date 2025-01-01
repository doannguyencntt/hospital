import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { CheDoAnSharedComponent } from '../che-do-an-shared/che-do-an-shared.component';
import { CheDoAn } from '../che-do-an.model';
import { BaseService } from 'src/app/core/services/base.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-che-do-an-update',
  templateUrl: './che-do-an-update.component.html',
  styleUrls: ['./che-do-an-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class CheDoAnUpdateComponent implements OnInit {
  CheDoAn = {} as CheDoAn;
  idsub:number;
  @Input() idCustomize: number = null;
  @ViewChild(CheDoAnSharedComponent, {static: true}) shared;
  constructor(private router: Router, private route: ActivatedRoute,private baseService : BaseService,private location: Location) { }

  ngOnInit() {
    const id:number = this.route.snapshot.params.id;
    if (id !== undefined && id!== null) {
      this.getById(id);   
    }
  }
  getById(id: number) {
    this.baseService.getById<CheDoAn>(id).subscribe(resultData => {
      this.CheDoAn = resultData;
      this.CheDoAn.IsDefault = resultData.IsDefault;
      //console.log('asasdasda', this.CheDoAn.IsDisabled);
    })
  }
  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/benh-vien/che-do-an'],{ queryParams: { filter: 'new'}, queryParamsHandling: 'merge' });
  }
  cancel() {
    if(this.idCustomize == null)
    {
      this.location.back();
    }
  }
}
