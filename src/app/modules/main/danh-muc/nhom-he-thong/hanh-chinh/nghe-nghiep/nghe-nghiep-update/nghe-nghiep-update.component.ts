import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgheNghiepSharedComponent } from '../nghe-nghiep-shared/nghe-nghiep-shared.component';

@Component({
    selector: 'app-nghe-nghiep-update',
    templateUrl: './nghe-nghiep-update.component.html',
    styleUrls: ['./nghe-nghiep-update.component.scss']
})
export class NgheNghiepUpdateComponent implements OnInit {
    @ViewChild(NgheNghiepSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/hanh-chinh/nghe-nghiep']);
    }
}
