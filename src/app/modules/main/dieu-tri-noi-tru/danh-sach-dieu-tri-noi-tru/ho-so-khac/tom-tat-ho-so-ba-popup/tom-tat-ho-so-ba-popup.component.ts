import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { TomTatHoSoBenhAnPopupModel } from './tom-tat-ho-so-ba-popup.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-tom-tat-ho-so-ba-popup',
    templateUrl: './tom-tat-ho-so-ba-popup.component.html',
    styleUrls: ['./tom-tat-ho-so-ba-popup.component.scss'],
})
export class TomTatHoSoBenhAnPopupComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public sanitizer: DomSanitizer,
        private apiService: ApiService,
        private dialog: MatDialog
    ) { }

    icClose = icClose;
    tomTatHoSoBenhAnPopupModel = new TomTatHoSoBenhAnPopupModel();
    srcDatahtml: string[] = [];
    srcData: string[] = [];
    src = '';
    modelPrint: string;
    loaiPhieuIn: any;

    ngOnInit() {
        this.tomTatHoSoBenhAnPopupModel.HostingName = window.location.protocol + "//" + window.location.host;
        this.tomTatHoSoBenhAnPopupModel.YeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
        this.apiService.post<any>('DieuTriNoiTru/PhieuInTomTatHoSoBenhAn', this.tomTatHoSoBenhAnPopupModel)
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
