import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PhuongPhapVoCamSharedComponent } from '../phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component';

@Component({
    selector: 'app-phuong-phap-vo-cam-create',
    templateUrl: './phuong-phap-vo-cam-create.component.html',
    styleUrls: ['./phuong-phap-vo-cam-create.component.scss']
})
export class PhuongPhapVoCamCreateComponent implements OnInit {
    @ViewChild(PhuongPhapVoCamSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam']);
    }
}
