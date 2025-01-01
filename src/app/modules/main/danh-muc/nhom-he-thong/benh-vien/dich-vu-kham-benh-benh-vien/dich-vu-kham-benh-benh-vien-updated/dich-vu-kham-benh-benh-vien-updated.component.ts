import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DichVuKhamBenhBenhVienSharedComponent } from '../dich-vu-kham-benh-benh-vien-shared/dich-vu-kham-benh-benh-vien-shared.component';

@Component({
  selector: 'app-dich-vu-kham-benh-benh-vien-updated',
  templateUrl: './dich-vu-kham-benh-benh-vien-updated.component.html',
  styleUrls: ['./dich-vu-kham-benh-benh-vien-updated.component.scss']
})
export class DichVuKhamBenhBenhVienUpdatedComponent implements OnInit {


  @ViewChild(DichVuKhamBenhBenhVienSharedComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onUpdated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/dich-vu-kham-benh-tai-benh-vien']);
  }

}

