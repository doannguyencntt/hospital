import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { BienBanCamKetPhauThuatPopupModel } from './bien-ban-cam-ket-phau-thuat-popup.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-bien-ban-cam-ket-phau-thuat-popup',
    templateUrl: './bien-ban-cam-ket-phau-thuat-popup.component.html',
    styleUrls: ['./bien-ban-cam-ket-phau-thuat-popup.component.scss'],
})
export class BienBanCamKetPhauThuatPopupComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public sanitizer: DomSanitizer,
        private apiService: ApiService,
        private dialog: MatDialog
    ) {
    }
    icClose = icClose;
    bienBanCamKetPhauThuatPopupModel = new BienBanCamKetPhauThuatPopupModel();
    srcDatahtml: string[] = [];
    srcData: string[] = [];
    src = '';
    modelPrint: string;
    loaiPhieuIn: any;

    ngOnInit() {
        this.bienBanCamKetPhauThuatPopupModel.HostingName = window.location.protocol + "//" + window.location.host;
        this.bienBanCamKetPhauThuatPopupModel.YeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
        this.apiService.post<any>('DieuTriNoiTru/PhieuInBienBanCamKetPhauThuat', this.bienBanCamKetPhauThuatPopupModel)
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
