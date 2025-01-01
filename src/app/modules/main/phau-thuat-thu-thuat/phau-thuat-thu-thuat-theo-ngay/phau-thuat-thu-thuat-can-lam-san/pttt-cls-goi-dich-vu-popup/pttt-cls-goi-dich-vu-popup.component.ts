import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/close';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
    selector: 'app-pttt-cls-goi-dich-vu-popup',
    templateUrl: './pttt-cls-goi-dich-vu-popup.component.html',
    styleUrls: ['./pttt-cls-goi-dich-vu-popup.component.scss']
})
export class PtttClsGoiDichVuPopupComponent implements OnInit {
    icClose = icClose;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private dialogRef: MatDialogRef<any>,
                private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
    }

    close() {
		this.dialogRef.close('close');
	}
}