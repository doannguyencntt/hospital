import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { LoiDanSharedComponent } from '../loi-dan-shared/loi-dan-shared.component';

@Component({
    selector: 'app-loi-dan-create',
    templateUrl: './loi-dan-create.component.html',
    styleUrls: ['./loi-dan-create.component.scss']
})
export class LoiDanCreateComponent implements OnInit {
    @ViewChild(LoiDanSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/loi-dan']);
    }
}
