import { Component, OnInit } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-yeu-cau-tra-vat-tu-da-duyet',
    templateUrl: './yeu-cau-tra-vat-tu-da-duyet.component.html',
    styleUrls: ['./yeu-cau-tra-vat-tu-da-duyet.component.scss']
})
export class YeuCauTraVatTuDaDuyetComponent implements OnInit {
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
