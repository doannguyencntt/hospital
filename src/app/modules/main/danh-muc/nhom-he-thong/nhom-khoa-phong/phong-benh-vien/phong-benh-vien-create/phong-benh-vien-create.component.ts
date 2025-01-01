import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { PhongBenhVienSharedComponent } from '../phong-benh-vien-shared/phong-benh-vien-shared.component';

@Component({
    selector: 'app-phong-benh-vien-create',
    templateUrl: './phong-benh-vien-create.component.html',
    styleUrls: ['./phong-benh-vien-create.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class PhongBenhVienCreateComponent implements OnInit {
    @ViewChild(PhongBenhVienSharedComponent, { static: true }) shared;
    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() { this.router.navigate(['/danh-muc/nhom-khoa-phong/khoa-phong-phong-kham-ngoai-tru']); }
}
