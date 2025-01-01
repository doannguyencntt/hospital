import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { NhomChucDanhSharedComponent } from 'src/app/modules/main/danh-muc/nhom-he-thong/hanh-chinh/nhom-chuc-danh/nhom-chuc-danh-shared/nhom-chuc-danh-shared.component';

@Component({
  selector: 'app-nhom-chuc-danh-update',
  templateUrl: './nhom-chuc-danh-update.component.html',
  styleUrls: ['./nhom-chuc-danh-update.component.scss'], 
   animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class NhomChucDanhUpdateComponent implements OnInit {
  idsub: number;
  @ViewChild(NhomChucDanhSharedComponent, { static: true }) shared;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
      this.idsub = this.route.snapshot.params.id;
  }

  onUpdated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/hanh-chinh/nhom-chuc-danh']);
  }
}
