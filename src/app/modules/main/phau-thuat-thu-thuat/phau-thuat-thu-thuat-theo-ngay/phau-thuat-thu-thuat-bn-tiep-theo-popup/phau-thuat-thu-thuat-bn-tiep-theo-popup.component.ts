import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from "@iconify/icons-ic/twotone-close";

@Component({
    selector: 'app-phau-thuat-thu-thuat-bn-tiep-theo-popup',
    templateUrl: './phau-thuat-thu-thuat-bn-tiep-theo-popup.component.html',
    styleUrls: ['./phau-thuat-thu-thuat-bn-tiep-theo-popup.component.scss']
})
export class PhauThuatThuThuatBnTiepTheoPopupComponent implements OnInit {
    icClose = icClose;
    benhNhanHienTai: any;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private dialogRef: MatDialogRef<any>) { }

    ngOnInit() {
        this.benhNhanHienTai = this.data;
    }

    close() {
        this.dialog.closeAll();
    }

    confirm() {
        this.dialogRef.close(true);
    }
}