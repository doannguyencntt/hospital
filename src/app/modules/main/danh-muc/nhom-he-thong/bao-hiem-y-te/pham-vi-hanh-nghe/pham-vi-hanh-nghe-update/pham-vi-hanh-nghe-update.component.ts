import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PhamViHanhNgheSharedComponent } from '../pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component';

@Component({
    selector: 'app-pham-vi-hanh-nghe-update',
    templateUrl: './pham-vi-hanh-nghe-update.component.html',
    styleUrls: ['./pham-vi-hanh-nghe-update.component.scss']
})
export class PhamViHanhNgheUpdateComponent implements OnInit {
    @ViewChild(PhamViHanhNgheSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe']);
    }
}
