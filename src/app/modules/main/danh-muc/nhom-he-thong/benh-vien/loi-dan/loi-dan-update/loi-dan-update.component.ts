import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoiDanSharedComponent } from '../loi-dan-shared/loi-dan-shared.component';

@Component({
    selector: 'app-loi-dan-update',
    templateUrl: './loi-dan-update.component.html',
    styleUrls: ['./loi-dan-update.component.scss']
})
export class LoiDanUpdateComponent implements OnInit {
    @ViewChild(LoiDanSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/loi-dan']);
    }
}
