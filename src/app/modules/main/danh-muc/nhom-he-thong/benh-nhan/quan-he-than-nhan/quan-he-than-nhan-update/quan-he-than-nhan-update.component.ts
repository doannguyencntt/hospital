import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuanHeThanNhanSharedComponent } from '../quan-he-than-nhan-shared/quan-he-than-nhan-shared.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-quan-he-than-nhan-update',
    templateUrl: './quan-he-than-nhan-update.component.html',
    styleUrls: ['./quan-he-than-nhan-update.component.scss']
})
export class QuanHeThanNhanUpdateComponent implements OnInit {
    @ViewChild(QuanHeThanNhanSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-nhan/quan-he-than-nhan']);
    }
}
