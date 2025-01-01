import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CapQuanLyBenhVienSharedComponent } from '../cap-quan-ly-benh-vien-shared/cap-quan-ly-benh-vien-shared.component';

@Component({
    selector: 'app-cap-quan-ly-benh-vien-create',
    templateUrl: './cap-quan-ly-benh-vien-create.component.html',
    styleUrls: ['./cap-quan-ly-benh-vien-create.component.scss']
})
export class CapQuanLyBenhVienCreateComponent implements OnInit {
    @ViewChild(CapQuanLyBenhVienSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/cap-quan-ly-benh-vien']);
    }
}
