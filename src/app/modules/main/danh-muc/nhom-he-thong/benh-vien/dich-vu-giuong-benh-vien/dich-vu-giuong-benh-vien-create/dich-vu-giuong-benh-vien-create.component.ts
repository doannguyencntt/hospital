import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DichVuGiuongBenhVienSharedComponent } from '../dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component';

@Component({
    selector: 'app-dich-vu-giuong-benh-vien-create',
    templateUrl: './dich-vu-giuong-benh-vien-create.component.html',
    styleUrls: ['./dich-vu-giuong-benh-vien-create.component.scss']
})
export class DichVuGiuongBenhVienCreateComponent implements OnInit {
    @ViewChild(DichVuGiuongBenhVienSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-tai-benh-vien']);
    }
}
