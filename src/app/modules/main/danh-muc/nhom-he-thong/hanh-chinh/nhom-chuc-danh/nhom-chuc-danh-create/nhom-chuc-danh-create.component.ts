import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { NhomChucDanhSharedComponent } from 'src/app/modules/main/danh-muc/nhom-he-thong/hanh-chinh/nhom-chuc-danh/nhom-chuc-danh-shared/nhom-chuc-danh-shared.component';
@Component({
  selector: 'app-nhom-chuc-danh-create',
  templateUrl: './nhom-chuc-danh-create.component.html',
  styleUrls: ['./nhom-chuc-danh-create.component.scss'],  
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class NhomChucDanhCreateComponent implements OnInit {
  @ViewChild(NhomChucDanhSharedComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/hanh-chinh/nhom-chuc-danh']);
  }
}
