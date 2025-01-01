import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { NhomBenhVaTenBenhSharedComponent } from '../nhom-benh-va-ten-benh-shared/nhom-benh-va-ten-benh-shared.component';

@Component({
    selector: 'app-nhom-dich-vu-benh-vien-update',
    templateUrl: './nhom-benh-va-ten-benh-update.component.html',
    styleUrls: ['./nhom-benh-va-ten-benh-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class NhomBenhVaTenBenhUpdateComponent implements OnInit {
    @ViewChild(NhomBenhVaTenBenhSharedComponent, { static: true }) shared: any;
    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['danh-muc/nhom-he-thong/nhom-benh-va-ten-benh']);

    }
}
