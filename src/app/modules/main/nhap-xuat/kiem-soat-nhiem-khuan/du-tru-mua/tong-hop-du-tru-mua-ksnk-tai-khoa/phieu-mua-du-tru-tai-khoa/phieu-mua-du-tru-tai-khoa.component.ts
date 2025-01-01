import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PhieuInDuTruMuaTaiKhoa } from '../tong-hop-du-tru-mua-ksnk-tai-khoa.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phieu-mua-du-tru-tai-khoa',
    templateUrl: './phieu-mua-du-tru-tai-khoa.component.html',
    styleUrls: ['./phieu-mua-du-tru-tai-khoa.component.scss']
})
export class PhieuMuaTruKSNKTaiKhoaComponent implements OnInit {
    icClose = icClose;
    inPhieu: PhieuInDuTruMuaTaiKhoa = new PhieuInDuTruMuaTaiKhoa();
    validationErrors: any[];
    src = '';
    dataHTML = '';

    constructor(
        private dialogRef: MatDialogRef<PhieuMuaTruKSNKTaiKhoaComponent>,
        private apiService: ApiService,
        private notificationService: NotificationService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private ref: ChangeDetectorRef,
    ) { }

    ngOnInit() {
        this.xemPhieuVatTu();
    }

    xemPhieuVatTuVaDuocPham(){
        const self = this;
        self.validationErrors = [];
        self.ref.detectChanges();

        self.inPhieu.DuTruMuaDuocPhamTheoKhoaId = self.data.Id;
        self.inPhieu.DuTruMuaVatTuTheoKhoaId = self.data.Id;

        self.inPhieu.Header = true;

        self.apiService.post<any>('YeuCauMuaKSNK/InPhieuVatTuVaDuocPhamTaiKhoa', self.inPhieu).subscribe(
            resData => {
                if (resData) {
                    self.inPhieu.Header = false;
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

    xemPhieuVatTu() {
        const self = this;
        self.validationErrors = [];
        self.ref.detectChanges();

        self.inPhieu.DuTruMuaVatTuTheoKhoaId = self.data.Id;
        self.inPhieu.Header = true;

        self.apiService.post<any>('YeuCauMuaKSNK/InPhieuDuTruMuaTaiKhoa', self.inPhieu).subscribe(
            resData => {
                if (resData) {
                    self.inPhieu.Header = false;
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

    xemPhieuDuocPham() {
        const self = this;
        self.validationErrors = [];
        self.ref.detectChanges();

        self.inPhieu.DuTruMuaDuocPhamTheoKhoaId = self.data.Id;
        self.inPhieu.Header = true;

        self.apiService.post<any>('YeuCauMuaKSNK/InPhieuDuTruMuaTaiKhoaDuocPham', self.inPhieu).subscribe(
            resData => {
                if (resData) {
                    self.inPhieu.Header = false;
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
                '<th>PHIẾU TỔNG HỢP DỰ TRÙ KIỂM SOÁT NHIỄM KHUẨN</th>' +
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
