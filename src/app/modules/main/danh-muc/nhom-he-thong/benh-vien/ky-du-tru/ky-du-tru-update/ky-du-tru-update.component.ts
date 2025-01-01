import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { KyDuTruSharedComponent } from '../ky-du-tru-shared/ky-du-tru-shared.component';

@Component({
    selector: 'app-ky-du-tru-update',
    templateUrl: './ky-du-tru-update.component.html',
    styleUrls: ['./ky-du-tru-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class KyDuTruUpdateComponent implements OnInit {
    isDaDuocSuDung: boolean = false;

    @ViewChild(KyDuTruSharedComponent, {static: true}) shared: KyDuTruSharedComponent;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    // onUpdated() {
    //     this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/ky-du-tru']);
    // }

    huy() {
        this.router.navigateByUrl("/danh-muc/nhom-he-thong/benh-vien/ky-du-tru?holdQuery=true");
    }

    luu() {
        this.shared.luu();
    }

    checkIsDaDuocSuDung(evt) {
        this.isDaDuocSuDung = evt;
    }
}
