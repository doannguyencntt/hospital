import { Component, OnInit } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-yeu-cau-tra-ksnk-tu-choi-duyet',
    templateUrl: './yeu-cau-tra-ksnk-tu-choi-duyet.component.html',
    styleUrls: ['./yeu-cau-tra-ksnk-tu-choi-duyet.component.scss']
})
export class YeuCauTraKSNKTuChoiDuyetComponent implements OnInit {
    documentType: DocumentType;

    constructor(
        private router: Router,
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.YeuCauHoanTraKSNK ;
    }

    huy() {
        this.router.navigate(['/nhap-xuat/ksnk/yeu-cau-tra-ksnk'], {
            queryParamsHandling: 'preserve',
        });
    }
}
