import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { KhoaPhongNhanVienSharedComponent } from '../khoa-phong-nhan-vien-shared/khoa-phong-nhan-vien-shared.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-khoa-phong-nhan-vien-update',
    templateUrl: './khoa-phong-nhan-vien-update.component.html',
    styleUrls: ['./khoa-phong-nhan-vien-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class KhoaPhongNhanVienUpdateComponent implements OnInit {

    @ViewChild(KhoaPhongNhanVienSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-khoa-phong/khoa-phong-nhan-vien']);
    }
}
