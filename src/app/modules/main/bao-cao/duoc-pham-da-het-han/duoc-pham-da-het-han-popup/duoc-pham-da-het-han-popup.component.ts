import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-duoc-pham-da-het-han-popup',
    templateUrl: './duoc-pham-da-het-han-popup.component.html',
    styleUrls: ['./duoc-pham-da-het-han-popup.component.scss']
})
export class DuocPhamDaHetHanPopupComponent implements OnInit {
    searchString: any;
    url: string;
    duocPhamDaHetHan: any;
    timeIsNow: string;
    loading = false;
    constructor(
        private dialogRef: MatDialogRef<DuocPhamDaHetHanPopupComponent>, private apiService: ApiService,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
        private notificationService: NotificationService
    ) {
        this.searchString = data.Model;
    }

    ngOnInit() {
        this.GetHTML();
    }

    GetHTML() {
        this.loading = true;

        let KhoQueryString = null;
        let SearchQueryString = null;
        if (this.searchString.KhoId != null) {
            KhoQueryString = this.searchString.KhoId;
        }
        if (this.searchString.searchString != null) {
            SearchQueryString = '"' + this.searchString.searchString + '"';
        }
        // tslint:disable-next-line: triple-equals
        if (KhoQueryString == null || KhoQueryString == undefined) {
            KhoQueryString = 0;
        }

        const queryString = '{"KhoId":' + KhoQueryString + ',"DuocPham":' + SearchQueryString + '}';

        this.apiService.post<any>('DuocPhamDaHetHan/GetHTML?search=' + queryString).subscribe(
            resultData => {
                if (resultData != null) {
                    const html = resultData;
                    $('.showPdf').append(html);
                }
                this.loading = false;
            },
            (err: any) => {
                this.notificationService.showError(err.Message);
            });
    }

    getSharedPrintForm() {
        let khoQueryString = null;
        let searchQueryString = null;
        if (this.searchString.KhoId != null) {
            khoQueryString = this.searchString.KhoId;
        }
        if (this.searchString.searchString != null) {
            searchQueryString = '"' + this.searchString.searchString + '"';
        }
        // tslint:disable-next-line: triple-equals
        if (khoQueryString == null || khoQueryString == undefined) {
            khoQueryString = 0;
        }
        const queryString = '{"KhoId":' + khoQueryString + ',"DuocPham":' + searchQueryString + '}';
        return new Promise(resolve => {
            this.apiService.get<any>('DuocPhamDaHetHan/InDanhMucDaHetHan?search=' + queryString).subscribe(resultData => {
                resolve(resultData);
                this.dialogRef.close(resultData);
            });
        });
    }
}
