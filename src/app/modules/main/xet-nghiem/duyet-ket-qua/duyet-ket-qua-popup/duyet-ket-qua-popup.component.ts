import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ChonLoaiKetQuaXetNghiemPopupComponent } from '../chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component';
import { ListDataChild } from '../duyet-ket-qua.model';

@Component({
    selector: 'app-duyet-ket-qua-popup',
    templateUrl: './duyet-ket-qua-popup.component.html',
    styleUrls: ['./duyet-ket-qua-popup.component.scss']
})
export class DuyetKetQuaXetNghiemPopupComponent implements OnInit {

    icClose = icClose;
    lstData: ListDataChild[] = new Array<ListDataChild>();
    hasData = false;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any
        , public dialogRef: MatDialogRef<DuyetKetQuaXetNghiemPopupComponent>,
        private dialog: MatDialog) {
        this.lstData = this.data.Model;
        if (this.lstData.some(x => x)) {
            this.hasData = true;
        }
    }

    ngOnInit() {
    }

    close() {
        this.dialogRef.close();
    }

    Khong() {
        this.dialogRef.close();
    }

    Co(option: string) {
        if (option === 'Print') {
            let dialogRef: any;
            dialogRef = this.dialog.open(ChonLoaiKetQuaXetNghiemPopupComponent, {
                disableClose: true,
                width: '1000px',
                // height: '300px',
                data: this.data.DataChiTietXetNghiem,
            }).afterClosed().subscribe((result) => {
                if (result != undefined && result != null && result != "") {
                    if (result == 'No') {
                        this.dialogRef.close();
                    }
                    else {
                        this.dialogRef.close(result);
                    }
                }
            });
        }
        else if (option === 'Yes') {
            this.dialogRef.close(option);
        }
        else
            this.dialogRef.close(null);
    }
}
