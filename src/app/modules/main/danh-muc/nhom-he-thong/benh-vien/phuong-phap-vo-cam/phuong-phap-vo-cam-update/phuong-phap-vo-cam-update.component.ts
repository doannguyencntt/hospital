import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PhuongPhapVoCamSharedComponent } from '../phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component';

@Component({
    selector: 'app-phuong-phap-vo-cam-update',
    templateUrl: './phuong-phap-vo-cam-update.component.html',
    styleUrls: ['./phuong-phap-vo-cam-update.component.scss']
})
export class PhuongPhapVoCamUpdateComponent implements OnInit {
    @ViewChild(PhuongPhapVoCamSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam']);
    }
}
