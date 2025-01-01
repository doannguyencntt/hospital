import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { GiayKhamChuaBenhTheoYcPopupModel } from './giay-kham-chua-benh-theo-yc-popup.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-giay-kham-chua-benh-theo-yc-popup',
    templateUrl: './giay-kham-chua-benh-theo-yc-popup.component.html',
    styleUrls: ['./giay-kham-chua-benh-theo-yc-popup.component.scss'],
})
export class GiayKhamChuaBenhTheoYcPopupComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public sanitizer: DomSanitizer,
        private apiService: ApiService,
        private dialog: MatDialog
    ) { }

    icClose = icClose;
    giayKhamChuaBenhTheoYcPopupModel = new GiayKhamChuaBenhTheoYcPopupModel();
    srcDatahtml: string[] = [];
    srcData: string[] = [];
    src = '';
    modelPrint: string;
    loaiPhieuIn: any;

    ngOnInit() {
        this.giayKhamChuaBenhTheoYcPopupModel.HostingName = window.location.protocol + "//" + window.location.host;
        this.giayKhamChuaBenhTheoYcPopupModel.YeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
        this.apiService.post<any>('DieuTriNoiTru/PhieuInGiayKhamChuaBenhTheoYc', this.giayKhamChuaBenhTheoYcPopupModel)
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
