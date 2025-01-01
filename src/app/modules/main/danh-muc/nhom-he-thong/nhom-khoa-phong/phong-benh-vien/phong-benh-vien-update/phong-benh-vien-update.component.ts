import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { PhongBenhVienSharedComponent } from '../phong-benh-vien-shared/phong-benh-vien-shared.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-phong-benh-vien-update',
    templateUrl: './phong-benh-vien-update.component.html',
    styleUrls: ['./phong-benh-vien-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class PhongBenhVienUpdateComponent implements OnInit {

    @ViewChild(PhongBenhVienSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-khoa-phong/khoa-phong-phong-kham-ngoai-tru']);
    }
}
