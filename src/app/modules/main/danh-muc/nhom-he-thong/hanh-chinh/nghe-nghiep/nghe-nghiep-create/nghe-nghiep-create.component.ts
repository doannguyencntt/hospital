import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NgheNghiepSharedComponent } from '../nghe-nghiep-shared/nghe-nghiep-shared.component';

@Component({
    selector: 'app-nghe-nghiep-create',
    templateUrl: './nghe-nghiep-create.component.html',
    styleUrls: ['./nghe-nghiep-create.component.scss']
})
export class NgheNghiepCreateComponent implements OnInit {

    @ViewChild(NgheNghiepSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/hanh-chinh/nghe-nghiep']);
    }
}
