import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { HopDongThauDuocPhamSharedComponent } from '../hop-dong-thau-duoc-pham-shared/hop-dong-thau-duoc-pham-shared.component';

@Component({
    selector: 'app-hop-dong-thau-duoc-pham-create',
    templateUrl: './hop-dong-thau-duoc-pham-create.component.html',
    styleUrls: ['./hop-dong-thau-duoc-pham-create.component.scss']
})
export class HopDongThauDuocPhamCreateComponent implements OnInit {

    @ViewChild(HopDongThauDuocPhamSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() {
        this.router.navigate(['/danh-muc/hop-dong-thau/duoc-pham']);
    }
}
