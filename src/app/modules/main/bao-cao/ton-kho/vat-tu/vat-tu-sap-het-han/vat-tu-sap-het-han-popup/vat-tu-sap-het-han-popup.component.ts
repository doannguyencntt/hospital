import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';

declare var $: any;

@Component({
    selector: 'app-vat-tu-sap-het-han-popup',
    templateUrl: './vat-tu-sap-het-han-popup.component.html',
    styleUrls: ['./vat-tu-sap-het-han-popup.component.scss']
})

export class VatTuSapHetHanPopupComponent implements OnInit {
    loading: boolean = false;
    searchString: any;
    url :string;

    printLayout: string = 'landscape';
    printSize: string = 'A4';

    constructor(private dialogRef: MatDialogRef<VatTuSapHetHanPopupComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
                private apiService: ApiService, private notificationService: NotificationService) {
        this.searchString = data.Model;
    }

    ngOnInit() {
        // this.GetValue();
        this.GetHTML();
    }

    GetHTML(){
        this.loading = true;

        this.apiService.get<any>(`TonKho/GetVatTuSapHetHanHTML?searchString=${this.data.searchString}`).subscribe(res => {
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
            this.apiService.get<any>(`TonKho/GetVatTuSapHetHanHTML?searchString=${this.data.searchString}`).subscribe(resultData => {
                resolve(resultData);
                this.dialogRef.close(resultData);
            });
        });
    }
}
