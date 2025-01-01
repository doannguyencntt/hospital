import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { PhieuKhamGayMeTruocMoPopupModel } from './phieu-kham-gay-me-truoc-mo-popup.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phieu-kham-gay-me-truoc-mo-popup',
    templateUrl: './phieu-kham-gay-me-truoc-mo-popup.component.html',
    styleUrls: ['./phieu-kham-gay-me-truoc-mo-popup.component.scss'],
})
export class PhieuKhamGayMeTruocMoPopupComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public sanitizer: DomSanitizer,
        private apiService: ApiService,
        private dialog: MatDialog
    ) { }

    icClose = icClose;
    phieuKhamGayMeTruocMoPopupModel = new PhieuKhamGayMeTruocMoPopupModel();
    srcDatahtml: string[] = [];
    srcData: string[] = [];
    src = '';
    modelPrint: string;
    loaiPhieuIn: any;

    ngOnInit() {
        this.phieuKhamGayMeTruocMoPopupModel.HostingName = window.location.protocol + "//" + window.location.host;
        this.phieuKhamGayMeTruocMoPopupModel.YeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
        this.apiService.post<any>('DieuTriNoiTru/PhieuInPhieuKhamGayMeTruocMo', this.phieuKhamGayMeTruocMoPopupModel)
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
