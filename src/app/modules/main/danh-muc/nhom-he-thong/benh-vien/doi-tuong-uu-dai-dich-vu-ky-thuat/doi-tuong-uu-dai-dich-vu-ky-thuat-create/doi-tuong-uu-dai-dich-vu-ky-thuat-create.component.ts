import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DoiTuongUuDaiDichVuKyThuatSharedComponent } from '../doi-tuong-uu-dai-dich-vu-ky-thuat-shared/doi-tuong-uu-dai-dich-vu-ky-thuat-shared.component';

@Component({
  selector: 'app-doi-tuong-uu-dai-dich-vu-ky-thuat-create',
  templateUrl: './doi-tuong-uu-dai-dich-vu-ky-thuat-create.component.html',
  styleUrls: ['./doi-tuong-uu-dai-dich-vu-ky-thuat-create.component.scss']
})
export class DoiTuongUuDaiDichVuKyThuatCreateComponent implements OnInit {

  @ViewChild(DoiTuongUuDaiDichVuKyThuatSharedComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated(){ 
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/doi-tuong-uu-dai-dich-vu-ky-thuat']);

  }
}
