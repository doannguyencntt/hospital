import { Component, OnInit } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-yeu-cau-tra-vat-tu-tu-choi-duyet',
    templateUrl: './yeu-cau-tra-vat-tu-tu-choi-duyet.component.html',
    styleUrls: ['./yeu-cau-tra-vat-tu-tu-choi-duyet.component.scss']
})
export class YeuCauTraVatTuTuChoiDuyetComponent implements OnInit {
    documentType: DocumentType;

    constructor(
        private router: Router,
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.YeuCauHoanTraVatTu;
    }

    huy() {
        this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu'], {
            queryParamsHandling: 'preserve',
        });
    }
}
