import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';

import { NhaSanXuatSharedComponent } from '../nha-san-xuat-shared/nha-san-xuat-shared.component';

@Component({
  selector: 'app-nha-san-xuat-update',
  templateUrl: './nha-san-xuat-update.component.html',
  styleUrls: ['./nha-san-xuat-update.component.scss']
})
export class NhaSanXuatUpdateComponent implements OnInit {
  idsub: number;
  @ViewChild(NhaSanXuatSharedComponent, { static: true }) shared;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onUpdated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/thuoc/nha-san-xuat']);
  }

}
