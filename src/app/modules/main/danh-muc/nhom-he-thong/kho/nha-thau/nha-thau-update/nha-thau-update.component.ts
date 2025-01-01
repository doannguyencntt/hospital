import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NhaThauSharedComponent } from '../nha-thau-shared/nha-thau-shared.component';

@Component({
    selector: 'app-nha-thau-update',
    templateUrl: './nha-thau-update.component.html',
    styleUrls: ['./nha-thau-update.component.scss']
})
export class NhaThauUpdateComponent implements OnInit {
    @ViewChild(NhaThauSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/kho/nha-thau']);
    }
}
