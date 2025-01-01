import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ThuocHoacHoatChatSharedComponent } from '../thuoc-hoac-hoat-chat-shared/thuoc-hoac-hoat-chat-shared.component';

@Component({
    selector: 'app-thuoc-hoac-hoat-chat-create',
    templateUrl: './thuoc-hoac-hoat-chat-create.component.html',
    styleUrls: ['./thuoc-hoac-hoat-chat-create.component.scss']
})
export class ThuocHoacHoatChatCreateComponent implements OnInit {

    @ViewChild(ThuocHoacHoatChatSharedComponent, { static: true }) shared;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/thuoc/thuoc-hoac-hoat-chat']);
    }
}
