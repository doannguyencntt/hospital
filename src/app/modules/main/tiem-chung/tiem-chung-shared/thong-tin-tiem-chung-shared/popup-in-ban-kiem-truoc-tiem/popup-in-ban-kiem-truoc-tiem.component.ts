import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    selector: 'app-popup-in-ban-kiem-truoc-tiem',
    templateUrl: './popup-in-ban-kiem-truoc-tiem.component.html',
    styleUrls: ['./popup-in-ban-kiem-truoc-tiem.component.scss']
})

export class PopupInBanKiemTruocTiemComponent implements OnInit {
    hostingName: string;
    modelPrint: any;
    src = '';
    icClose = icClose;

    printLayout: string = 'Portrait';
    printSize: string = 'A4';

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private dialog: MatDialog) {
		this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data);
	}

	ngOnInit() {
		this.modelPrint = this.data;
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