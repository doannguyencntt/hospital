import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DuTruGiamDocMessage } from 'src/app/shared/configdata/system-message';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-du-tru-giam-doc-tu-choi-popup',
    templateUrl: './du-tru-giam-doc-tu-choi-popup.component.html',
    styleUrls: ['./du-tru-giam-doc-tu-choi-popup.component.scss']
})

export class DuTruGiamDocTuChoiPopupComponent implements OnInit {
    validationErrors: any;
    lyDo = null;
    message = 'Bạn có chắc chắn muốn từ chối phiếu dự trù này không?';
    icClose = icClose;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DuTruGiamDocTuChoiPopupComponent>) { }

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
