import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { FormControl } from '@angular/forms';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LoaiChietKhau, Voucher } from '../voucher.model';
import { ApiError } from 'src/app/shared/models/api-error.model';

import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';

@Component({
    selector: 'app-voucher-chi-tiet-popup',
    templateUrl: './voucher-chi-tiet-popup.component.html',
    styleUrls: ['./voucher-chi-tiet-popup.component.scss']
})

export class VoucherChiTietPopupComponent implements OnInit {
    documentType: DocumentType = DocumentType.VoucherMarketing;
    searchCtrl = new FormControl;
    idVoucher: number;
    voucher: any;
    loaiChietKhau = LoaiChietKhau;
    tongSoBenhNhanSuDung: number = 0;
    soLuongPhatHanh: any;

    icClose = icClose;
    icSearch = icSearch;

    gridColumns: any[] = [];

    urlGetChiTietBenhNhanDaSuDungForGrid = 'Voucher/GetListChiTietBenhNhanDaSuDungForGridAsync'
    urlGetPagesChiTietBenhNhanDaSuDungForGrid = 'Voucher/GetPagesListChiTietBenhNhanDaSuDungForGridAsync'
    addtionalSearchString: any;

    @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
    @ViewChild('ngayDungTemplate', { static: true }) ngayDungTemplate: TemplateRef<any>;
    @ViewChild(GridComponent, {static: false}) gridChild: GridComponent;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                private dialog: MatDialog, private dialogRef: MatDialogRef<any>,
                private apiService: ApiService, private broadcastService: BroadcastService, private notificationService: NotificationService, private authService: AuthService) { }

    ngOnInit() {
        this.idVoucher = this.data.Id;
        this.voucher = this.data;

        this.getSoLuongPhatHanh();
        this.getTongSoBenhNhanSuDungDichVu();

        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 25 , Sortable: false, Template: this.sttTemplate },
            { Field: "MaTiepNhan", Title: "Mã TN", Width: 80, Sortable: true },
            { Field: "MaBenhNhan", Title: "Mã NB", Width: 80, Sortable: true },
            { Field: "TenBenhNhan", Title: "Tên NB", Width: 100, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 100, Sortable: true },
            { Field: "NgayDung", Title: "Ngày dùng", Width: 80, Sortable: true, Template: this.ngayDungTemplate },
            { Field: "MaVoucher", Title: "Mã voucher", Width: 80, Sortable: true }
        ];
    }

    close() {
        this.dialog.closeAll();
    }

    getTongSoBenhNhanSuDungDichVu() {
        this.apiService.get<any>(`Voucher/GetTongSoBenhNhanSuDungDichVu?voucherId=${this.idVoucher}`).subscribe(res => {
            this.tongSoBenhNhanSuDung = res;
        }, (err: ApiError) => {
            this.notificationService.showError(err.Message);
        })
    }

    getSoLuongPhatHanh() {
        this.apiService.get<any>(`Voucher/GetSoLuongPhatHanhVoucher?voucherId=${this.idVoucher}`).subscribe(res => {
            this.soLuongPhatHanh = res;
        }, (err: ApiError) => {
            this.notificationService.showError(err.Message);
        })
    }
}
