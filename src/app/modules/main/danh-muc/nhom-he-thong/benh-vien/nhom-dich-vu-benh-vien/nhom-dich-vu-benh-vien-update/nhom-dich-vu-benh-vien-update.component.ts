import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { NhomDichVuBenhVienSharedComponent } from '../nhom-dich-vu-benh-vien-shared/nhom-dich-vu-benh-vien-shared.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-nhom-dich-vu-benh-vien-update',
    templateUrl: './nhom-dich-vu-benh-vien-update.component.html',
    styleUrls: ['./nhom-dich-vu-benh-vien-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class NhomDichVuBenhVienUpdateComponent implements OnInit {
    @ViewChild(NhomDichVuBenhVienSharedComponent, { static: true }) shared: any;
    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-benh-vien']);

    }
}
