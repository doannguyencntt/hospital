import { Component, OnInit, Optional, Inject } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-tu-choi-duyet-vat-tu-popup',
    templateUrl: './tu-choi-duyet-vat-tu-popup.component.html',
    styleUrls: ['./tu-choi-duyet-vat-tu-popup.component.scss']
})
export class TuChoiDuyetVatTuPopupComponent implements OnInit {

    icClose = icClose;
    Title: any = null;
    Message: any = null;

    lyDo: string = null;
    constructor(private dialogRef: MatDialogRef<TuChoiDuyetVatTuPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.Title = this.data.Title;
        this.Message = this.data.Message;
    }

    close(data) {
        if (data === 'ok') {
            this.dialogRef.close(this.lyDo);
        } else {
            this.dialogRef.close(null);
        }
    }
}
