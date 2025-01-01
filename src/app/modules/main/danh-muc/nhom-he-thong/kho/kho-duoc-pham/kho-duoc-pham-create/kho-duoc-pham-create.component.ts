import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { KhoDuocPhamShareComponent } from '../kho-duoc-pham-share/kho-duoc-pham-share.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-kho-duoc-pham-create',
    templateUrl: './kho-duoc-pham-create.component.html',
    styleUrls: ['./kho-duoc-pham-create.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class KhoDuocPhamCreateComponent implements OnInit {
    @ViewChild(KhoDuocPhamShareComponent, { static: true }) shared;
    constructor(private router: Router) { }
    ngOnInit() {
    }
    onCreated() { this.router.navigate(['/danh-muc/nhom-he-thong/kho/kho-duoc-pham-vat-tu-y-te']); }

    onValidate(allowValidate: boolean) {
        if (allowValidate) {
            this.shared.Validate();
        }
    }
}
