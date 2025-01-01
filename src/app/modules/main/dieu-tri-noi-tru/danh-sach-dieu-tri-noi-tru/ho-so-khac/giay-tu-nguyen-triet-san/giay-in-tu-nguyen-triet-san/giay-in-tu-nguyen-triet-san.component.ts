import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    selector: 'app-giay-in-tu-nguyen-triet-san',
    templateUrl: './giay-in-tu-nguyen-triet-san.component.html',
    styleUrls: ['./giay-in-tu-nguyen-triet-san.component.scss']
})
export class GiayInTuNguyenTrietSanComponent implements OnInit {
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
