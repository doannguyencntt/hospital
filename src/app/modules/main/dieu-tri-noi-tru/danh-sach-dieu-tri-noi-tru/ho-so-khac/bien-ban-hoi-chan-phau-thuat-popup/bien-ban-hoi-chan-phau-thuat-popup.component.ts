import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { BienBanHoiChanPhauThuatPopupModel } from './bien-ban-hoi-chan-phau-thuat-popup.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-bien-ban-hoi-chan-phau-thuat-popup',
    templateUrl: './bien-ban-hoi-chan-phau-thuat-popup.component.html',
    styleUrls: ['./bien-ban-hoi-chan-phau-thuat-popup.component.scss'],
})
export class BienBanHoiChanPhauThuatPopupComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public sanitizer: DomSanitizer,
        private apiService: ApiService,
        private dialog: MatDialog
    ) {
        this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
    }
    icClose = icClose;
    bienBanHoiChanPhauThuatPopupModel = new BienBanHoiChanPhauThuatPopupModel();
    srcDatahtml: string[] = [];
    srcData: string[] = [];
    src = '';
    modelPrint: string;
    loaiPhieuIn: any;

    ngOnInit() {
        this.modelPrint = this.data.Model;
        // this.bienBanHoiChanPhauThuatPopupModel.HostingName = window.location.protocol + "//" + window.location.host;
        // this.bienBanHoiChanPhauThuatPopupModel.YeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
        // this.bienBanHoiChanPhauThuatPopupModel.IdNoiTruHoSo = this.data.NoiTruHoSoId;
        // this.apiService.post<any>('DieuTriNoiTru/PhieuInBienBanHoiChanPhauThuat', this.bienBanHoiChanPhauThuatPopupModel)
        //     .subscribe((res) => {
        //         this.modelPrint = res;
        //         this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(res);
        //     });
    }

    getSharedPrintForm() {
        return new Promise(resolve => {
            resolve(this.modelPrint);
        });
    }

    close() {
        this.dialog.closeAll();
    }
}
