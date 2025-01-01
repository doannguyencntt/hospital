import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ThietBiXetNghiemSharedComponent } from '../thiet-bi-shared/thiet-bi-shared.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-thiet-bi-update',
    templateUrl: './thiet-bi-update.component.html',
    styleUrls: ['./thiet-bi-update.component.scss']
})
export class ThietBiXetNghiemUpdateComponent implements OnInit {
    @ViewChild(ThietBiXetNghiemSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() { }

    onUpdated() {
        this.router.navigate(['/xet-nghiem/thiet-bi']);
    }

    onValidate(isValidate: boolean) {
        if (isValidate) {
            this.shared.OnValidate();
        }
    }
}
