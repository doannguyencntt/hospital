import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CapQuanLyBenhVienSharedComponent } from '../cap-quan-ly-benh-vien-shared/cap-quan-ly-benh-vien-shared.component';

@Component({
    selector: 'app-cap-quan-ly-benh-vien-update',
    templateUrl: './cap-quan-ly-benh-vien-update.component.html',
    styleUrls: ['./cap-quan-ly-benh-vien-update.component.scss']
})
export class CapQuanLyBenhVienUpdateComponent implements OnInit {
    @ViewChild(CapQuanLyBenhVienSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/cap-quan-ly-benh-vien']);
    }
}
