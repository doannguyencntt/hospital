import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { BangTheoDoiHoiTinhPopupModel } from './bang-theo-doi-hoi-tinh-popup.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-bang-theo-doi-hoi-tinh-popup',
    templateUrl: './bang-theo-doi-hoi-tinh-popup.component.html',
    styleUrls: ['./bang-theo-doi-hoi-tinh-popup.component.scss'],
})
export class BangTheoDoiHoiTinhPopupComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public sanitizer: DomSanitizer,
        private apiService: ApiService,
        private dialog: MatDialog
    ) { }

    icClose = icClose;
    bangTheoDoiHoiTinhPopupModel = new BangTheoDoiHoiTinhPopupModel();
    srcDatahtml: string[] = [];
    srcData: string[] = [];
    src = '';
    modelPrint: string;
    loaiPhieuIn: any;

    ngOnInit() {
        this.bangTheoDoiHoiTinhPopupModel.HostingName = window.location.protocol + "//" + window.location.host;
        this.bangTheoDoiHoiTinhPopupModel.YeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
        this.bangTheoDoiHoiTinhPopupModel.IdNoiTruHoSo = this.data.NoiTruHoSoId;
        this.apiService.post<any>('DieuTriNoiTru/PhieuInBangTheoDoiHoiTinh', this.bangTheoDoiHoiTinhPopupModel)
            .subscribe((res) => {
                this.modelPrint = res;
                this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(res);
            });
    }

    getSharedPrintForm() {
        return new Promise(resolve => {
            resolve(this.modelPrint);
            this.close();
        });
    }

    close() {
        this.dialog.closeAll();
    }
}
