import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { LoaiBenhVienSharedComponent } from '../loai-benh-vien-shared/loai-benh-vien-shared.component';

@Component({
    selector: 'app-loai-benh-vien-create',
    templateUrl: './loai-benh-vien-create.component.html',
    styleUrls: ['./loai-benh-vien-create.component.scss']
})
export class LoaiBenhVienCreateComponent implements OnInit {
    @ViewChild(LoaiBenhVienSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien']);
    }
}
