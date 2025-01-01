import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormfooterComponent } from 'src/app/shared/component/formfooter/formfooter.component';

import { CongTyBhtnSharedComponent } from '../cong-ty-bhtn-shared/cong-ty-bhtn-shared.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-cong-ty-bhtn-create',
    templateUrl: './cong-ty-bhtn-create.component.html',
    styleUrls: ['./cong-ty-bhtn-create.component.scss']
})
export class CongTyBhtnCreateComponent implements OnInit {
    @ViewChild(CongTyBhtnSharedComponent, { static: true }) shared;
    @ViewChild('footer', { static: false }) footer: FormfooterComponent;

    constructor(private router: Router) { }

    ngOnInit() { }

    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/cong-ty-bhtn']);
    }

    onValidateClient(isValidate: boolean) {
        if (isValidate) {
            this.shared.OnValidate();
        }
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (event.keyCode === 83 && event.ctrlKey) {
            // ctrl + s
            this.footer.create();
            event.preventDefault();
        }

        if (event.keyCode === 27 && !event.ctrlKey) {
            // esc
            this.footer.cancel();
            event.preventDefault();
        }
    }
}
