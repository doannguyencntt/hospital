import { Component, OnInit, Optional, Inject } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-tu-choi-duyet-ksnk-popup',
    templateUrl: './tu-choi-duyet-ksnk-popup.component.html',
    styleUrls: ['./tu-choi-duyet-ksnk-popup.component.scss']
})
export class TuChoiDuyetKSNKPopupComponent implements OnInit {

    icClose = icClose;
    Title: any = null;
    Message: any = null;

    lyDo: string = null;
    constructor(private dialogRef: MatDialogRef<TuChoiDuyetKSNKPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

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
