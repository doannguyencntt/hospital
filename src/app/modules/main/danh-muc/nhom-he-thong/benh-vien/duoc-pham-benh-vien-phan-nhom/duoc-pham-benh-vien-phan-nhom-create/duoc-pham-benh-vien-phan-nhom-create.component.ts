import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import {
  DuocPhamBenhVienPhanNhomSharedComponent
} from '../duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-duoc-pham-benh-vien-phan-nhom-create',
    templateUrl: './duoc-pham-benh-vien-phan-nhom-create.component.html',
    styleUrls: ['./duoc-pham-benh-vien-phan-nhom-create.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]

})
export class DuocPhamBenhVienPhanNhomCreateComponent implements OnInit {
    @ViewChild(DuocPhamBenhVienPhanNhomSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() { }

    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom']);
    }

    CheckValidateClient(allowValidate: boolean) {
      if (allowValidate) {
          this.shared.CheckValidate();
      }
    }
}
