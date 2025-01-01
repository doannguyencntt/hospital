import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ChuanDoanHinhAnhSharedComponent } from '../chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component';

@Component({
    selector: 'app-chuan-doan-hinh-anh-update',
    templateUrl: './chuan-doan-hinh-anh-update.component.html',
    styleUrls: ['./chuan-doan-hinh-anh-update.component.scss']
})
export class ChuanDoanHinhAnhUpdateComponent implements OnInit {
    @ViewChild(ChuanDoanHinhAnhSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh']);
    }
}
