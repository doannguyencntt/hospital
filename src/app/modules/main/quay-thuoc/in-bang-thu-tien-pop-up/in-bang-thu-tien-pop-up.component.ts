import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-in-bang-thu-tien-pop-up',
    templateUrl: './in-bang-thu-tien-pop-up.component.html',
    styleUrls: ['./in-bang-thu-tien-pop-up.component.scss']
})
export class InBangThuTienPopUpComponent implements OnInit {
    hostingName: string;
    src = '';
    icClose = icClose;
    InPhieuThu : boolean;
    InBangKe : boolean;
    loaiPhieu : any ;
    kiemtraPhieuInManhinh: boolean = false;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public sanitizer: DomSanitizer,
        private dialog: MatDialog
    ) {      
    }
    modelPrint: any;
    ngOnInit() {
        this.modelPrint = this.data.Model;
        this.kiemtraPhieuInManhinh = this.data.InDonThuocDanhSachList;
        this.InPhieuThu = this.data.InPhieuThu;
        this.InBangKe = this.data.InBangKe;
        this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);

    }

    InPhieu(loaiPhieu){
        this.loaiPhieu = loaiPhieu;
        this.getSharedPrintForm();
    }
    getSharedPrintForm() {
        const tmpBangKeThu =
            '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>BẢNG KÊ THU TIỀN THUỐC</th></tr></table>';
        const tmpPhieuThu =
            '<table class=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU THU</th></tr></table>';
        
            let data: string;
            
        data = this.modelPrint.replace(tmpBangKeThu, '');
        data = data.replace(tmpPhieuThu, '');
        // in 2 phieu theo ngang-doc kho a5
        let dataphieukeThuTienThuoc = data.split('<div class=\"pagebreak\"></div>');


        if(this.loaiPhieu == 1)
        {
            return new Promise(resolve => {
                resolve(dataphieukeThuTienThuoc[0]);
            });
        }
        else{
            if(dataphieukeThuTienThuoc[1] != undefined || dataphieukeThuTienThuoc[1] != null){
                return new Promise(resolve => {
                    resolve(dataphieukeThuTienThuoc[1]);
                });
            }
           else{
               let message ="Không có phiếu thu tiền"
            return new Promise(resolve => {
                resolve(message);
            });
           }
        }
    }

    close() {
        this.dialog.closeAll();
    }
}
