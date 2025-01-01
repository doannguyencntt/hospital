import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


import icClose from "@iconify/icons-ic/twotone-close";
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
    selector: 'app-in-phieu-hoan-tra-vat-tu',
    templateUrl: './in-phieu-hoan-tra-vat-tu.component.html',
    styleUrls: ['./in-phieu-hoan-tra-vat-tu.component.scss']
})
export class InPhieuHoanTraVatTuComponent implements OnInit {
    hostingName: string;
    src: string = "";
    srcPhieuInHoanTra: string = "";
    srcPhieuInHoanTraHtml: string = "";
    printLayout: string = 'Portrait';
    printSize: string = 'A4';

    icClose = icClose;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private apiService: ApiService, private dialog: MatDialog) { }

    ngOnInit() {
        if (window.location.protocol == "http:") {
            this.hostingName = "http://" + window.location.host;
        } else {
            this.hostingName = "https://" + window.location.host;
        }

        var loading = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: {},
        });

        if (this.data.yeuCauHoanTraVatTuId) {
            this.apiService.get<any>("HoanTra/GetHtmlPhieuInHoanTraVatTu?yeuCauHoanTraVatTuId=" + this.data.yeuCauHoanTraVatTuId + "&hostingName=" + this.hostingName)
                .subscribe((resHoanTra) => {
                    this.srcPhieuInHoanTraHtml = resHoanTra;
                    this.srcPhieuInHoanTra = "data:text/html;charset=utf-8," + encodeURIComponent(resHoanTra);
                    loading.close();
                });
        }
    }

    getSharedPrintForm(id: any) {
        return new Promise((resolve) => {
            resolve(this.srcPhieuInHoanTraHtml);
            // this.apiService.get<any>("HoanTra/GetHtmlPhieuInHoanTraVatTu?yeuCauHoanTraVatTuId=" + this.data.yeuCauHoanTraVatTuId + "&hostingName=" + this.hostingName)
            // .subscribe((inPhieu) => {
            //     resolve(inPhieu);
            // });
        });
    }

    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, "g"), replace);
    }

    close() {
        this.dialog.closeAll();
    }
}
