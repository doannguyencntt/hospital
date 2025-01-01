import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-quay-thuoc-xac-nhan-pop-up',
    templateUrl: './quay-thuoc-xac-nhan-pop-up.component.html',
    styleUrls: ['./quay-thuoc-xac-nhan-pop-up.component.scss']
})

export class QuayThuocXacNhanPopUpComponent implements OnInit {
    Title: any = null;
    soTien: number = 0;
    tenBenhNhan: string = null;
    dataSourcedanhsachThuoc: any = {
        data: [],
        total: 0
    }
    icClose = icClose;

    constructor(private route: ActivatedRoute, private dialogRef: MatDialogRef<QuayThuocXacNhanPopUpComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public dataItem: any) {
        this.dataSourcedanhsachThuoc.data = dataItem.Model.DanhSachDonThuocs
        this.soTien = dataItem.Model.DanhSachDonThuocs.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0);
        this.tenBenhNhan = dataItem.Model.HoTenBenhNhan;
        this.Title = dataItem.Title
    }

    ngOnInit() {
    }

    close(answer: any) {
        this.dialogRef.close(answer);
    }
}
