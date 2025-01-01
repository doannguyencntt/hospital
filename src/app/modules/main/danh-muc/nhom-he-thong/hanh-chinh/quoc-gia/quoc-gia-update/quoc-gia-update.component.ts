import { Component, OnInit, ViewChild } from '@angular/core';
import { QuocGiaShareComponent } from '../quoc-gia-share/quoc-gia-share.component';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { QuocGia } from '../quoc-gia.model';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';

@Component({
  selector: 'app-quoc-gia-update',
  templateUrl: './quoc-gia-update.component.html',
  styleUrls: ['./quoc-gia-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})

export class QuocGiaUpdateComponent implements OnInit {
  @ViewChild(QuocGiaShareComponent, {static: true}) shared;
  
  constructor(private router: Router, private route: ActivatedRoute, private baseService : BaseService) { }

  ngOnInit() {
  }

  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/hanh-chinh/quoc-gia']);
  }
}
