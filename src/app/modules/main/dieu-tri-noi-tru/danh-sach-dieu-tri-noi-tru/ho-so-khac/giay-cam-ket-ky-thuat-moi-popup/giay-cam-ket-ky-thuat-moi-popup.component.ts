import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { GiayCamKetKyThuatMoiPopupModel } from './giay-cam-ket-ky-thuat-moi-popup.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-giay-cam-ket-ky-thuat-moi-popup',
    templateUrl: './giay-cam-ket-ky-thuat-moi-popup.component.html',
    styleUrls: ['./giay-cam-ket-ky-thuat-moi-popup.component.scss'],
})
export class GiayCamKetKyThuatMoiPopupComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public sanitizer: DomSanitizer,
        private apiService: ApiService,
        private dialog: MatDialog
    ) { }

    icClose = icClose;
    giayCamKetKyThuatMoiPopupModel = new GiayCamKetKyThuatMoiPopupModel();
    srcDatahtml: string[] = [];
    srcData: string[] = [];
    src = '';
    modelPrint: string;
    loaiPhieuIn: any;

    ngOnInit() {
        this.giayCamKetKyThuatMoiPopupModel.HostingName = window.location.protocol + "//" + window.location.host;
        this.giayCamKetKyThuatMoiPopupModel.YeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
        this.apiService.post<any>('DieuTriNoiTru/PhieuInGiayCamKetKyThuatMoi', this.giayCamKetKyThuatMoiPopupModel)
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
