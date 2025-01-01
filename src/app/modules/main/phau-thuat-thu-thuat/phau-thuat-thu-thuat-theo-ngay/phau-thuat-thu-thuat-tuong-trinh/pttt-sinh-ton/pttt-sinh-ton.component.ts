import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import {
    PhauThuatThuThuatTheoDoiSinhTonComponent
} from '../../phau-thuat-thu-thuat-theo-doi/pttt-theo-doi-sinh-ton/pttt-theo-doi-sinh-ton.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-pttt-sinh-ton',
    templateUrl: './pttt-sinh-ton.component.html',
    styleUrls: ['./pttt-sinh-ton.component.scss']
})
export class PhauThuatThuThuatSinhTonComponent implements OnInit {
    documentType: DocumentType = DocumentType.PhauThuatThuThuatTheoNgay;

    @Input() IsDaTuongTrinh = false;
    @Input() thongTinBenhNhan: any;
    @ViewChild('ptttStonGrid', { static: false }) ptttStonGrid: PhauThuatThuThuatTheoDoiSinhTonComponent;
    @Output() displayForBtnSinhTon: EventEmitter<any> = new EventEmitter<any>();
    ketQuaSinhHieu = {
        data: [],
        total: 0
    };

    constructor() { }

    ngOnInit() {

    }

    OnDisplayForBtnSton(isDisplay: boolean) {
        this.displayForBtnSinhTon.emit(isDisplay);
    }
}
