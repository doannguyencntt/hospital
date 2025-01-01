import { Component, OnInit, ViewChild } from '@angular/core';

import { HopDongThauVatTuSharedComponent } from '../hop-dong-thau-vat-tu-shared/hop-dong-thau-vat-tu-shared.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-hop-dong-thau-vat-tu-create',
    templateUrl: './hop-dong-thau-vat-tu-create.component.html',
    styleUrls: ['./hop-dong-thau-vat-tu-create.component.scss']
})
export class HopDongThauVatTuCreateComponent implements OnInit {

    @ViewChild(HopDongThauVatTuSharedComponent, { static: true }) shared;

    constructor() { }

    ngOnInit() { }
}
