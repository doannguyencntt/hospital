import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { QuanHeThanNhanSharedComponent } from '../quan-he-than-nhan-shared/quan-he-than-nhan-shared.component';

@Component({
    selector: 'app-quan-he-than-nhan-create',
    templateUrl: './quan-he-than-nhan-create.component.html',
    styleUrls: ['./quan-he-than-nhan-create.component.scss']
})
export class QuanHeThanNhanCreateComponent implements OnInit {
    @ViewChild(QuanHeThanNhanSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-nhan/quan-he-than-nhan']);
    }
}
