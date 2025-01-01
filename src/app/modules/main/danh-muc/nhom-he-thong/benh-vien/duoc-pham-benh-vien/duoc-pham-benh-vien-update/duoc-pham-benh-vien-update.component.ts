import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { DuocPhamBenhVienSharedComponent } from '../duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component';

@Component({
  selector: 'app-duoc-pham-benh-vien-update',
  templateUrl: './duoc-pham-benh-vien-update.component.html',
  styleUrls: ['./duoc-pham-benh-vien-update.component.scss']
})
export class DuocPhamBenhVienUpdateComponent implements OnInit {
  @ViewChild(DuocPhamBenhVienSharedComponent, { static: true }) shared;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onUpdated() {
    this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien"], { queryParams: { holdQuery: true } });
  }

  canceled() {
    this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien"], { queryParams: { holdQuery: true } });
  }
}
