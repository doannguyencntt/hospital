import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
    DuocPhamBenhVienPhanNhomSharedComponent
} from '../duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-duoc-pham-benh-vien-phan-nhom-update',
    templateUrl: './duoc-pham-benh-vien-phan-nhom-update.component.html',
    styleUrls: ['./duoc-pham-benh-vien-phan-nhom-update.component.scss']
})
export class DuocPhamBenhVienPhanNhomUpdateComponent implements OnInit {
    @ViewChild(DuocPhamBenhVienPhanNhomSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() { }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom']);
    }

    CheckValidateClient(allowValidate: boolean) {
        if (allowValidate) {
            this.shared.CheckValidate();
        }
    }
}
