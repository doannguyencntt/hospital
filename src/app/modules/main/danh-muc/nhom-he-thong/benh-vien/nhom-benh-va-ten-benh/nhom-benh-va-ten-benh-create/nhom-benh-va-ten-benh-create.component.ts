import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { NhomBenhVaTenBenhSharedComponent } from '../nhom-benh-va-ten-benh-shared/nhom-benh-va-ten-benh-shared.component';

@Component({
    selector: 'app-nhom-benh-va-ten-benh-create',
    templateUrl: './nhom-benh-va-ten-benh-create.component.html',
    styleUrls: ['./nhom-benh-va-ten-benh-create.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class NhomBenhVaTenBenhCreateComponent implements OnInit {
    @ViewChild(NhomBenhVaTenBenhSharedComponent, { static: true }) shared: any;
    constructor(private router: Router) { }

    ngOnInit() {
    }
    onCreated() {
        this.router.navigate(['danh-muc/nhom-he-thong/nhom-benh-va-ten-benh']);
    }
}

