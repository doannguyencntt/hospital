import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { KhoaPhongSharedComponent } from '../khoa-phong-shared/khoa-phong-shared.component';

@Component({
    selector: 'app-khoa-phong-create',
    templateUrl: './khoa-phong-create.component.html',
    styleUrls: ['./khoa-phong-create.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class KhoaPhongCreateComponent implements OnInit {
    @ViewChild(KhoaPhongSharedComponent, { static: true }) shared;
    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() { this.router.navigate(['/danh-muc/nhom-khoa-phong/khoa-phong']); }
}
