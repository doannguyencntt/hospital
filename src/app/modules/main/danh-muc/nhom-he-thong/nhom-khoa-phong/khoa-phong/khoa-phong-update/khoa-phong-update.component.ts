import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { KhoaPhongSharedComponent } from '../khoa-phong-shared/khoa-phong-shared.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-khoa-phong-update',
    templateUrl: './khoa-phong-update.component.html',
    styleUrls: ['./khoa-phong-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class KhoaPhongUpdateComponent implements OnInit {

    @ViewChild(KhoaPhongSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-khoa-phong/khoa-phong']);
    }
}
