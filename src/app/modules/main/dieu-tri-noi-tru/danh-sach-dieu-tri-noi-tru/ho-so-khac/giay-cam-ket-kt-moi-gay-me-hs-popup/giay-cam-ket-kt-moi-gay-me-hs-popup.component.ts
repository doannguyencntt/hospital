import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { GiayCamKetKyThuatMoiHSPopupModel } from '../giay-cam-ket-kt-moi-gay-me-hs/giay-cam-ket-kt-moi-gay-me-hs.model';


@Component({
  selector: 'app-giay-cam-ket-kt-moi-gay-me-hs-popup',
  templateUrl: './giay-cam-ket-kt-moi-gay-me-hs-popup.component.html',
  styleUrls: ['./giay-cam-ket-kt-moi-gay-me-hs-popup.component.scss']
})
export class GiayCamKetKtMoiGayMeHsPopupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private apiService: ApiService,
    private dialog: MatDialog
) { }

icClose = icClose;
giayCamKetKyThuatMoiHSPopupModel = new GiayCamKetKyThuatMoiHSPopupModel();
srcDatahtml: string[] = [];
srcData: string[] = [];
src = '';
modelPrint: string;
loaiPhieuIn: any;

ngOnInit() {
    this.giayCamKetKyThuatMoiHSPopupModel.HostingName = window.location.protocol + "//" + window.location.host;
    this.giayCamKetKyThuatMoiHSPopupModel.YeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
    this.apiService.post<any>('DieuTriNoiTru/PhieuInGiayCamKetKyThuatMoiHS', this.giayCamKetKyThuatMoiHSPopupModel)
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
