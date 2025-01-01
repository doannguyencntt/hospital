import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { DonViTinhSharedComponent } from '../don-vi-tinh-shared/don-vi-tinh-shared.component';

@Component({
  selector: 'app-don-vi-tinh-update',
  templateUrl: './don-vi-tinh-update.component.html',
  styleUrls: ['./don-vi-tinh-update.component.scss']
})
export class DonViTinhUpdateComponent implements OnInit {
  idsub: number;
  @ViewChild(DonViTinhSharedComponent, { static: true }) shared;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
      this.idsub = this.route.snapshot.params.id;
  }

  onUpdated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/thuoc/don-vi-tinh']);
  }
}
