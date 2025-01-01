import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from "@iconify/icons-ic/twotone-close";

@Component({
    selector: 'app-tu-choi-duyet-hoan-tra-duoc-pham',
    templateUrl: './tu-choi-duyet-hoan-tra-duoc-pham.component.html',
    styleUrls: ['./tu-choi-duyet-hoan-tra-duoc-pham.component.scss']
})
export class TuChoiDuyetHoanTraDuocPhamComponent implements OnInit {
    lyDoHuy: string;
    validationErrors: any;

    icClose = icClose;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private cdRef: ChangeDetectorRef, private dialogRef: MatDialogRef<any>) { }

    ngOnInit() { 
        this.lyDoHuy = "";
    }

    huyYeuCauHoanTra() {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.lyDoHuy == "") {
            this.validationErrors.push({
                Message: "Bạn phải nhập lí do từ chối phê duyệt.",
                Field: "LyDoHuy",
            });
            return true;
        } else {
            this.dialogRef.close(this.lyDoHuy);
        }
    }

    close() {
        this.dialog.closeAll();
    }
}
