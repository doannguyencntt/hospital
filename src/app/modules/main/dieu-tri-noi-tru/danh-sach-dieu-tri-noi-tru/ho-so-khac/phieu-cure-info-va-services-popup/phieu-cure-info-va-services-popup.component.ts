import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { PhieuCureInfoVaServicesPopupModel } from './phieu-cure-info-va-services-popup.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phieu-cure-info-va-services-popup',
    templateUrl: './phieu-cure-info-va-services-popup.component.html',
    styleUrls: ['./phieu-cure-info-va-services-popup.component.scss'],
})
export class PhieuCureInfoVaServicesPopupComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public sanitizer: DomSanitizer,
        private apiService: ApiService,
        private dialog: MatDialog
    ) {
    }
    icClose = icClose;
    phieuCureInfoVaServicesPopupModel = new PhieuCureInfoVaServicesPopupModel();
    srcDatahtml: string[] = [];
    srcData: string[] = [];
    src = '';
    modelPrint: string;
    loaiPhieuIn: any;

    ngOnInit() {
        this.phieuCureInfoVaServicesPopupModel.HostingName = window.location.protocol + "//" + window.location.host;
        this.phieuCureInfoVaServicesPopupModel.YeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
        this.apiService.post<any>('DieuTriNoiTru/PhieuInThongTinDieuTriVaCacDichVu', this.phieuCureInfoVaServicesPopupModel)
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
