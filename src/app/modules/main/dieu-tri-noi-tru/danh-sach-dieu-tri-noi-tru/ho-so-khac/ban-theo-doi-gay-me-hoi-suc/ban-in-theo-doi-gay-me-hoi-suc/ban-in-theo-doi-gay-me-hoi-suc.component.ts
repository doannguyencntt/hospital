import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    selector: 'app-ban-in-theo-doi-gay-me-hoi-suc',
    templateUrl: './ban-in-theo-doi-gay-me-hoi-suc.component.html',
    styleUrls: ['./ban-in-theo-doi-gay-me-hoi-suc.component.scss']
})
export class BanInTheoDoiGayMeHoiSucComponent implements OnInit {
    hostingName: string;
    modelPrint: any;
    src = '';
	icClose = icClose;
	
	printLayout: string = 'Landscape';
    printSize: string = 'A3';
	
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
