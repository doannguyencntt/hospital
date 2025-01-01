import { Component, OnInit, ViewChild } from '@angular/core';
import { DoiTuongUuDaiDichVuKhamBenhSharedComponent } from '../doi-tuong-uu-dai-dich-vu-kham-benh-shared/doi-tuong-uu-dai-dich-vu-kham-benh-shared.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doi-tuong-uu-dai-dich-vu-kham-benh-update',
  templateUrl: './doi-tuong-uu-dai-dich-vu-kham-benh-update.component.html',
  styleUrls: ['./doi-tuong-uu-dai-dich-vu-kham-benh-update.component.scss']
})
export class DoiTuongUuDaiDichVuKhamBenhUpdateComponent implements OnInit {

  @ViewChild(DoiTuongUuDaiDichVuKhamBenhSharedComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onUpdated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/doi-tuong-uu-dai-dich-vu-kham-benh']);
  }


}
