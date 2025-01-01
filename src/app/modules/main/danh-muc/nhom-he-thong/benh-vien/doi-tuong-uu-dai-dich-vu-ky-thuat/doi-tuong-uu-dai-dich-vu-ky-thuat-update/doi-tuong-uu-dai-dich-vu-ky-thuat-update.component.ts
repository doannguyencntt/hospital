import { Component, OnInit, ViewChild } from '@angular/core';
import { DoiTuongUuDaiDichVuKyThuatSharedComponent } from '../doi-tuong-uu-dai-dich-vu-ky-thuat-shared/doi-tuong-uu-dai-dich-vu-ky-thuat-shared.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doi-tuong-uu-dai-dich-vu-ky-thuat-update',
  templateUrl: './doi-tuong-uu-dai-dich-vu-ky-thuat-update.component.html',
  styleUrls: ['./doi-tuong-uu-dai-dich-vu-ky-thuat-update.component.scss']
})
export class DoiTuongUuDaiDichVuKyThuatUpdateComponent implements OnInit {

  @ViewChild(DoiTuongUuDaiDichVuKyThuatSharedComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onUpdated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/doi-tuong-uu-dai-dich-vu-ky-thuat']);
  }

}
