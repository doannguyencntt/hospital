import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DichVuGiuongBenhVienSharedComponent } from '../dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-dich-vu-giuong-benh-vien-update',
    templateUrl: './dich-vu-giuong-benh-vien-update.component.html',
    styleUrls: ['./dich-vu-giuong-benh-vien-update.component.scss']
})
export class DichVuGiuongBenhVienUpdateComponent implements OnInit {

    @ViewChild(DichVuGiuongBenhVienSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-tai-benh-vien']);
    }
}
