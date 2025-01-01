import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoaiTonKhoVatTu } from '../vat-tu-ton-kho.model';

declare var $: any;

@Component({
    selector: 'app-vat-tu-ton-kho-popup',
    templateUrl: './vat-tu-ton-kho-popup.component.html',
    styleUrls: ['./vat-tu-ton-kho-popup.component.scss']
})

export class VatTuTonKhoPopupComponent implements OnInit {
    loading: boolean = false;
    url: string = '';

    printLayout: string = 'Portrait';
    printSize: string = 'A4';

    constructor(private dialogRef: MatDialogRef<VatTuTonKhoPopupComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.GetHTML();
    }

    GetHTML(){
        this.loading = true;

        switch(this.data.type) {
            case LoaiTonKhoVatTu.CanhBaoTonKhoVatTu:
                this.url = `TonKho/GetVatTuTonKhoCanhBaoHTML?search=${this.data.queryString}`;
                break;
            case LoaiTonKhoVatTu.TongHopTonKhoVatTu:
                this.url = `TonKho/GetVatTuTonKhoTongHopHTML?search=${this.data.queryString}`;
                break;
            case LoaiTonKhoVatTu.NhapXuatTonKhoVatTu:
                this.url = `TonKho/GetVatTuTonKhoNhapXuatHTML?search=${this.data.queryString}`;
                break;
        }

        this.apiService.get<any>(this.url).subscribe(res => {
            if(res != null) {
                var html = res;
                $(".a").show();
                $(".showPdf").append(html);
            }

           this.loading = false;
        }, (err: ApiError) => {
            this.notificationService.showError(err.Message);
        });
    }

    getSharedPrintForm() {
        return new Promise(resolve => {
            this.apiService.get<any>(this.url).subscribe(resultData => {
                resolve(resultData);
                this.dialogRef.close(resultData);
            });
        });
    }
}
