import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PhamViHanhNgheSharedComponent } from '../pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component';

@Component({
    selector: 'app-pham-vi-hanh-nghe-create',
    templateUrl: './pham-vi-hanh-nghe-create.component.html',
    styleUrls: ['./pham-vi-hanh-nghe-create.component.scss']
})
export class PhamViHanhNgheCreateComponent implements OnInit {

    @ViewChild(PhamViHanhNgheSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe']);
    }
}
