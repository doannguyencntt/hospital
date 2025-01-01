import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ChuanDoanHinhAnhSharedComponent } from '../chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component';

@Component({
    selector: 'app-chuan-doan-hinh-anh-create',
    templateUrl: './chuan-doan-hinh-anh-create.component.html',
    styleUrls: ['./chuan-doan-hinh-anh-create.component.scss']
})
export class ChuanDoanHinhAnhCreateComponent implements OnInit {

    @ViewChild(ChuanDoanHinhAnhSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh']);
    }
}
