import { Component, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
    icClose = icClose;
    Title: any = null;
    Message: any = null;
    ButtonOk: string = "OK";
    HideClose: boolean = false;
    constructor(private dialogRef: MatDialogRef<NotificationComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
        this.Title = data.Title;
        this.Message = data.Message;
        if (data.ButtonOk != null) {
            this.ButtonOk = data.ButtonOk;
        }
        if (data.HideClose != null) {
            this.HideClose = data.HideClose;
        }
    }

    close(answer: string) {
        this.dialogRef.close(answer);
    }
}
