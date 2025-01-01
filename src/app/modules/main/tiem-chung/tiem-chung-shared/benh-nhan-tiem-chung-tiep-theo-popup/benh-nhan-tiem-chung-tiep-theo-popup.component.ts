import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import icClose from "@iconify/icons-ic/twotone-close";
import { YeuCauDichVuKyThuat } from '../../tiem-chung.model';

@Component({
    selector: 'app-benh-nhan-tiem-chung-tiep-theo-popup',
    templateUrl: './benh-nhan-tiem-chung-tiep-theo-popup.component.html',
    styleUrls: ['./benh-nhan-tiem-chung-tiep-theo-popup.component.scss']
})

export class BenhNhanTiemChungTiepTheoPopupComponent implements OnInit {
    icClose = icClose;
    thongTinBenhNhan: YeuCauDichVuKyThuat = null;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private dialogRef: MatDialogRef<any>) { }

    ngOnInit() {
        this.thongTinBenhNhan = this.data;
    }

    close() {
        this.dialog.closeAll();
    }

    confirm() {
        this.dialogRef.close(true);
    }
}