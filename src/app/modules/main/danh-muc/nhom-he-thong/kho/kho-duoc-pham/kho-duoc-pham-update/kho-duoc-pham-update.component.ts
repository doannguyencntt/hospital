import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { KhoDuocPhamShareComponent } from '../kho-duoc-pham-share/kho-duoc-pham-share.component';
import { KhoDuocPham } from '../kho-duoc-pham.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-kho-duoc-pham-update',
    templateUrl: './kho-duoc-pham-update.component.html',
    styleUrls: ['./kho-duoc-pham-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})

export class KhoDuocPhamUpdateComponent implements OnInit {
    @ViewChild(KhoDuocPhamShareComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onUpdated() { this.router.navigate(['/danh-muc/nhom-he-thong/kho/kho-duoc-pham-vat-tu-y-te']); }

    onValidate(allowValidate: boolean) {
        if (allowValidate) {
            this.shared.Validate();
        }
    }
}
