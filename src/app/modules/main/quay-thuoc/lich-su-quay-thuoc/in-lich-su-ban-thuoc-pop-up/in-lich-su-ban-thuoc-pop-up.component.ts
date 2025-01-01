import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-in-lich-su-ban-thuoc-pop-up',
    templateUrl: './in-lich-su-ban-thuoc-pop-up.component.html',
    styleUrls: ['./in-lich-su-ban-thuoc-pop-up.component.scss']
})
export class InLichSuBanThuocComponent implements OnInit {
    hostingName: string;
    modelPrint: any;
    src = '';
    icClose = icClose;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private dialog: MatDialog) {
        this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
    }

    ngOnInit() {
        this.modelPrint = this.data.Model;
    }

    getSharedPrintForm() {
        return new Promise(resolve => {
            resolve(this.modelPrint);
        });
    }

    close() {
        this.dialog.closeAll();
    }
}
