import { Component, OnInit } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-yeu-cau-tra-thuoc-da-duyet',
    templateUrl: './yeu-cau-tra-thuoc-da-duyet.component.html',
    styleUrls: ['./yeu-cau-tra-thuoc-da-duyet.component.scss']
})
export class YeuCauTraThuocDaDuyetComponent implements OnInit {
    documentType: DocumentType;

    constructor(
        private router: Router,
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.YeuCauHoanTraDuocPham;
    }

    huy() {
        this.router.navigate(['nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham/'], {
            queryParamsHandling: 'preserve',
        });
    }
}
