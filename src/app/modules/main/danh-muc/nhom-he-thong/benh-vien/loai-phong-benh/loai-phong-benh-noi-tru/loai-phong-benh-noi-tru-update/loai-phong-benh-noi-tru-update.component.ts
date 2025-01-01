import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoaiPhongBenhNoiTruSharedComponent } from '../loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component';

@Component({
    selector: 'app-loai-phong-benh-noi-tru-update',
    templateUrl: './loai-phong-benh-noi-tru-update.component.html',
    styleUrls: ['./loai-phong-benh-noi-tru-update.component.scss']
})
export class LoaiPhongBenhNoiTruUpdateComponent implements OnInit {
    @ViewChild(LoaiPhongBenhNoiTruSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru']);
    }
}
