import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { BangKiemAnToanPhauThuatPopupModel } from './bang-kiem-an-toan-phau-thuat-popup.model';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-bang-kiem-an-toan-phau-thuat-popup',
    templateUrl: './bang-kiem-an-toan-phau-thuat-popup.component.html',
    styleUrls: ['./bang-kiem-an-toan-phau-thuat-popup.component.scss'],
})
export class BangKiemAnToanPhauThuatPopupComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public sanitizer: DomSanitizer,
        private apiService: ApiService,
        private dialog: MatDialog
    ) { }

    icClose = icClose;
    BangKiemAnToanPhauThuatPopupModel = new BangKiemAnToanPhauThuatPopupModel();
    srcDatahtml: string[] = [];
    srcData: string[] = [];
    src = '';
    modelPrint: string;
    loaiPhieuIn: any;
    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

    ngOnInit() {
        this.BangKiemAnToanPhauThuatPopupModel.HostingName = window.location.protocol + "//" + window.location.host;
        this.BangKiemAnToanPhauThuatPopupModel.YeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
        this.apiService.post<any>('DieuTriNoiTru/PhieuInBangKiemAnToanPhauThuat', this.BangKiemAnToanPhauThuatPopupModel)
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
