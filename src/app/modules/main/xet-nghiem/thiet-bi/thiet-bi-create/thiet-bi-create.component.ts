import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ThietBiXetNghiemSharedComponent } from '../thiet-bi-shared/thiet-bi-shared.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-thiet-bi-create',
    templateUrl: './thiet-bi-create.component.html',
    styleUrls: ['./thiet-bi-create.component.scss']
})
export class ThietBiXetNghiemCreateComponent implements OnInit {
    @ViewChild(ThietBiXetNghiemSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() { }

    onCreated() {
        this.router.navigate(['/xet-nghiem/thiet-bi']);
    }

    onValidate(isValidate: boolean) {
        if (isValidate) {
            this.shared.OnValidate();
        }
    }
}
