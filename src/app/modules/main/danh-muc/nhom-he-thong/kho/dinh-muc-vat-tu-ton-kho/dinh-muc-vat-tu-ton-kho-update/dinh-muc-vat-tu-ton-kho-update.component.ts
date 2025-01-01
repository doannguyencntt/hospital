import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { DinhMucVatTuTonKhoSharedComponent } from '../dinh-muc-vat-tu-ton-kho-shared/dinh-muc-vat-tu-ton-kho-shared.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-dinh-muc-vat-tu-ton-kho-update',
    templateUrl: './dinh-muc-vat-tu-ton-kho-update.component.html',
    styleUrls: ['./dinh-muc-vat-tu-ton-kho-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class DinhMucVatTuTonKhoUpdateComponent implements OnInit {
    @ViewChild(DinhMucVatTuTonKhoSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() { }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/kho/dinh-muc-vat-tu-ton-kho']);
    }

    onValidateClient(allowValidate: boolean) {
        if (allowValidate) {
            this.shared.onValidateClient();
        }
    }
}
