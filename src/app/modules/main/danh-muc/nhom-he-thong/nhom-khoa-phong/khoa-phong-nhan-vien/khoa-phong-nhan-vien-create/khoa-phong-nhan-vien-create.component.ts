import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { KhoaPhongNhanVienSharedComponent } from '../khoa-phong-nhan-vien-shared/khoa-phong-nhan-vien-shared.component';

@Component({
    selector: 'app-khoa-phong-nhan-vien-create',
    templateUrl: './khoa-phong-nhan-vien-create.component.html',
    styleUrls: ['./khoa-phong-nhan-vien-create.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class KhoaPhongNhanVienCreateComponent implements OnInit {
    @ViewChild(KhoaPhongNhanVienSharedComponent, { static: true }) shared;
    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() { this.router.navigate(['/danh-muc/nhom-khoa-phong/khoa-phong-nhan-vien']); }
}
