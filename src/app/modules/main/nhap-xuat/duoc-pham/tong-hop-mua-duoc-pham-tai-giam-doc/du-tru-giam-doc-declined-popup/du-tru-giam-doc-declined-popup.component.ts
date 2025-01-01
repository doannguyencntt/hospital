import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DuTruGiamDocMessage } from 'src/app/shared/configdata/system-message';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-du-tru-giam-doc-declined-popup',
    templateUrl: './du-tru-giam-doc-declined-popup.component.html',
    styleUrls: ['./du-tru-giam-doc-declined-popup.component.scss']
})

export class DuTruGiamDocDeclinedPopupComponent implements OnInit {
    lyDo = null;
    icClose = icClose;
    message = 'Bạn có chắc chắn muốn từ chối phiếu dự trù này không?';
    validationErrors: any;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DuTruGiamDocDeclinedPopupComponent>) { }

    ngOnInit() {
        setTimeout(() => {
            $('mat-dialog-content.mat-dialog-content').css('overflow', 'hidden');
        }, 50);
    }

    close(answer: string) {
        this.validationErrors = [];
        if (answer.includes('Yes') && this.lyDo == null) {
            const validate = {
                Field: 'LyDo',
                Message: DuTruGiamDocMessage.MessageLyDoNotNull
            };
            this.validationErrors.push(validate);
            return;
        }
        if (answer.includes('Yes') && this.lyDo === '') {
            const validateNull = {
                Field: 'LyDo',
                Message: DuTruGiamDocMessage.MessageLyDoNotAllowNull
            };
            this.validationErrors.push(validateNull);
            return;
        }
        this.dialogRef.close(answer);
    }
}
