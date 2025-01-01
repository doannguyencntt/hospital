import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ThuocHoacHoatChatSharedComponent } from '../thuoc-hoac-hoat-chat-shared/thuoc-hoac-hoat-chat-shared.component';

@Component({
    selector: 'app-thuoc-hoac-hoat-chat-update',
    templateUrl: './thuoc-hoac-hoat-chat-update.component.html',
    styleUrls: ['./thuoc-hoac-hoat-chat-update.component.scss']
})
export class ThuocHoacHoatChatUpdateComponent implements OnInit {
    @ViewChild(ThuocHoacHoatChatSharedComponent, { static: true }) shared;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/thuoc/thuoc-hoac-hoat-chat']);
    }
}
