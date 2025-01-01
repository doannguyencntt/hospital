import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LaiHangDoiTiemVacxin } from 'src/app/shared/enum/tiem-vacxin.enum';
import { ListParentTabStatusTiemChung } from '../../tiem-chung.model';

@Component({
    selector: 'app-thuc-hien-tiem',
    templateUrl: './thuc-hien-tiem.component.html',
    styleUrls: ['./thuc-hien-tiem.component.scss'],
    animations: [stagger60ms, fadeInUp400ms],
})

export class ThucHienTiemComponent implements OnInit {
    documentType: DocumentType = DocumentType.TiemChungThucHienTiem;
    loaiHangDoi: LaiHangDoiTiemVacxin = LaiHangDoiTiemVacxin.ThucHienTiem;

    lstParentTabStatus: ListParentTabStatusTiemChung = new ListParentTabStatusTiemChung();
    
    constructor() { }

    ngOnInit() {
    }

    evtQuetMaQRClicked() {
        // let elementBarcode: HTMLElement = document.getElementById(
        //     'barcodeActive'
        // ) as HTMLElement;
        // if (elementBarcode != undefined) {
        //     elementBarcode.click();
        // }
    }

    evtQRChanged(event) {
    }
}