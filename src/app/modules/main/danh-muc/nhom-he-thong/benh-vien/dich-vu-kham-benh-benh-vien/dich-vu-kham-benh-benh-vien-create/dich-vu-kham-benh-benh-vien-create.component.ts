import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DichVuKhamBenhBenhVienSharedComponent } from '../dich-vu-kham-benh-benh-vien-shared/dich-vu-kham-benh-benh-vien-shared.component';

@Component({
  selector: 'app-dich-vu-kham-benh-benh-vien-create',
  templateUrl: './dich-vu-kham-benh-benh-vien-create.component.html',
  styleUrls: ['./dich-vu-kham-benh-benh-vien-create.component.scss']
})
export class DichVuKhamBenhBenhVienCreateComponent implements OnInit {

  constructor(private router: Router) { }
  validationErrors: any;
  @ViewChild(DichVuKhamBenhBenhVienSharedComponent, { static: true }) shared;
  ngOnInit() {
  }
  onCreated(){ 
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/dich-vu-kham-benh-tai-benh-vien']);

  }
}
