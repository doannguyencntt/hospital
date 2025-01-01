import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NhaSanXuatSharedComponent } from '../../../thuoc/nha-san-xuat/nha-san-xuat-shared/nha-san-xuat-shared.component';

@Component({
  selector: 'app-nha-san-xuat-create',
  templateUrl: './nha-san-xuat-create.component.html',
  styleUrls: ['./nha-san-xuat-create.component.scss']
})
export class NhaSanXuatCreateComponent implements OnInit {

  @ViewChild(NhaSanXuatSharedComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/thuoc/nha-san-xuat']);
  }

}
