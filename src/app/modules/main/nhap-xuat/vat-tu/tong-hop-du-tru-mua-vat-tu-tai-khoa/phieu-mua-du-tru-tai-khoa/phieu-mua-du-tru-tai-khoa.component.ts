import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiError } from 'src/app/shared/models/api-error.model';

import { NotificationService } from 'src/app/core/services/notification.service';
import { PhieuInDuTruMuaTaiKhoa } from '../tong-hop-du-tru-mua-vat-tu-tai-khoa.model';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phieu-mua-du-tru-tai-khoa',
    templateUrl: './phieu-mua-du-tru-tai-khoa.component.html',
    styleUrls: ['./phieu-mua-du-tru-tai-khoa.component.scss']
})
export class PhieuMuaTruTaiKhoaComponent implements OnInit {
    icClose = icClose;
    inPhieuVatTu: PhieuInDuTruMuaTaiKhoa = new PhieuInDuTruMuaTaiKhoa();
    validationErrors: any[];
    src = '';
    dataHTML = '';
    constructor(
        private dialogRef: MatDialogRef<PhieuMuaTruTaiKhoaComponent>,
        private apiService: ApiService,
        private notificationService: NotificationService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private ref: ChangeDetectorRef,
    ) { }

    ngOnInit() {
        console.log(this.data);
        this.xem();
    }

    xem() {
        const self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        self.inPhieuVatTu.DuTruMuaVatTuTheoKhoaId = self.data.Id;
        self.inPhieuVatTu.Header = true;

        self.apiService.post<any>('YeuCauMuaVatTu/InPhieuDuTruMuaTaiKhoa', self.inPhieuVatTu).subscribe(
            resData => {
                if (resData) {
                    self.inPhieuVatTu.Header = false;
                    self.dataHTML = resData;
                    self.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(resData);
                }
            },
            (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message !== 'Validation Failed') {
                    self.notificationService.showError(err.Message);
                }
            }
        );
    }

    getSharedPrintForm() {
        const template = this.dataHTML
            .replace('<p style=\'background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center\'>' +
                '<th>PHIẾU TỔNG HỢP DỰ TRÙ VẬT TƯ</th>' +
                '</p>', '');
        return new Promise(resolve => {
            resolve(template);
            this.close();
        });
    }

    close() {
        this.dialogRef.close();
    }
}
