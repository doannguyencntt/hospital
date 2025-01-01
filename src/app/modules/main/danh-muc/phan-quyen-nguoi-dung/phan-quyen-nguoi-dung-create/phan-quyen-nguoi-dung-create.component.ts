import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PhanQuyenNguoiDungSharedComponent } from '../phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phan-quyen-nguoi-dung-create',
    templateUrl: './phan-quyen-nguoi-dung-create.component.html',
    styleUrls: ['./phan-quyen-nguoi-dung-create.component.scss']
})
export class PhanQuyenNguoiDungCreateComponent implements OnInit {

    @ViewChild(PhanQuyenNguoiDungSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() {
        this.router.navigate(['/danh-muc/phan-quyen-nguoi-dung']);
    }
}
