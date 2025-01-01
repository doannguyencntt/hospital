import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NhaThauSharedComponent } from '../nha-thau-shared/nha-thau-shared.component';

@Component({
    selector: 'app-nha-thau-create',
    templateUrl: './nha-thau-create.component.html',
    styleUrls: ['./nha-thau-create.component.scss']
})
export class NhaThauCreateComponent implements OnInit {

    @ViewChild(NhaThauSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/kho/nha-thau']);
    }
}
