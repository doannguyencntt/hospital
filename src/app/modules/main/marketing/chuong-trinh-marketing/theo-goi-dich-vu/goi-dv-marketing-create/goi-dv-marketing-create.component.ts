import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormfooterComponent } from 'src/app/shared/component/formfooter/formfooter.component';

import { GoiDvCtMarketingSharedComponent } from '../goi-dv-marketing-shared/goi-dv-marketing-shared.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-goi-dv-marketing-create',
    templateUrl: './goi-dv-marketing-create.component.html',
    styleUrls: ['./goi-dv-marketing-create.component.scss']
})
export class GoiDvCtMarketingAddComponent implements OnInit {

    idsub: number;
    @ViewChild(GoiDvCtMarketingSharedComponent, { static: true }) shared;
    @ViewChild('footer', { static: false }) footer: FormfooterComponent;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.idsub = this.route.snapshot.params.id;
    }

    onCreated() {
        this.router.navigate(['/marketing/ct-marketing/goi-dv'], {
            queryParamsHandling: 'preserve',
        });
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
