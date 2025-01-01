import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoaiBenhVienSharedComponent } from '../loai-benh-vien-shared/loai-benh-vien-shared.component';

@Component({
    selector: 'app-loai-benh-vien-update',
    templateUrl: './loai-benh-vien-update.component.html',
    styleUrls: ['./loai-benh-vien-update.component.scss']
})
export class LoaiBenhVienUpdateComponent implements OnInit {
    @ViewChild(LoaiBenhVienSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien']);
    }
}
