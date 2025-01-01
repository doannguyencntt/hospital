import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormfooterComponent } from 'src/app/shared/component/formfooter/formfooter.component';

import { GoiDvSharedComponent } from '../goi-dv-shared/goi-dv-shared.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-goi-dv-update',
    templateUrl: './goi-dv-update.component.html',
    styleUrls: ['./goi-dv-update.component.scss']
})
export class GoiDvUpdateComponent implements OnInit {

    idsub: number;
    @ViewChild(GoiDvSharedComponent, { static: true }) shared;
    @ViewChild('footer', { static: false }) footer: FormfooterComponent;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.idsub = this.route.snapshot.params.id;
    }

    onUpdated() {
        this.router.navigate(['/marketing/goi-dv']);
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
            this.footer.update();
            event.preventDefault();
        }

        if (event.keyCode === 27 && !event.ctrlKey) {
            // esc
            this.footer.cancel();
            event.preventDefault();
        }
    }
}
