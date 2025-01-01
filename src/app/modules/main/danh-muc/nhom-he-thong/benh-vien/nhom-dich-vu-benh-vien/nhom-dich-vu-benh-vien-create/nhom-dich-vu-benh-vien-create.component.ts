import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { NhomDichVuBenhVienSharedComponent } from '../nhom-dich-vu-benh-vien-shared/nhom-dich-vu-benh-vien-shared.component';
@Component({
    selector: 'app-nhom-dich-vu-benh-vien-create',
    templateUrl: './nhom-dich-vu-benh-vien-create.component.html',
    styleUrls: ['./nhom-dich-vu-benh-vien-create.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class NhomDichVuBenhVienCreateComponent implements OnInit {
    @ViewChild(NhomDichVuBenhVienSharedComponent, { static: true }) shared: any;
    constructor(private router: Router) { }

    ngOnInit() {
    }
    onCreated() {
        this.router.navigate(['danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-benh-vien']);
    }
}

