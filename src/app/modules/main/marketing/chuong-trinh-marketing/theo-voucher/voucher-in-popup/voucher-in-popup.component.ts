import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { VoucherThongTinHTML } from '../voucher.model';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    selector: 'app-voucher-in-popup',
    templateUrl: './voucher-in-popup.component.html',
    styleUrls: ['./voucher-in-popup.component.scss']
})
export class VoucherInPopupComponent implements OnInit {
    validationErrors: any;
    hostingName: string = `http://${window.location.host}`;
    format: string = '';
    iframeSrc: string = "";

    tenVoucher: string;
    maVoucher: string;
    // maSoTu: string;
    soLuongPhatHanh: number;
    urlBarcode: string;

    soLuongIn: number = 1;
    maSoIn: number = 1;

    voucherThongTinHTML: VoucherThongTinHTML = new VoucherThongTinHTML();

    printLayout: string = 'landscape';
    printSize: string = 'A4';

    icClose = icClose;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                private dialog: MatDialog, private dialogRef: MatDialogRef<any>,
                private apiService: ApiService, private broadcastService: BroadcastService, private notificationService: NotificationService, private authService: AuthService) { }

    ngOnInit() {
        this.tenVoucher = this.data.Ten;
        this.maVoucher = this.data.Ma;
        // this.maSoTu = this.data.MaSoTu;
        this.soLuongPhatHanh = this.data.SoLuongPhatHanh;
        this.soLuongIn = this.data.SoLuongPhatHanh;
        this.maSoIn = 1;
        this.format = "0".repeat(this.data.SoLuongPhatHanh.toString().length)

        // this.getBarcode();
        this.getIframe();
    }

    close() {
        this.dialog.closeAll();
    }

    // getBarcode() {
    //     this.apiService.get<any>(`Voucher/GetBarcodeBasedOnMa?ma=${this.maSoTu}`).subscribe(res => {
    //         this.urlBarcode = res;
    //     }, (err: ApiError) => {
    //         this.notificationService.showError(err.Message);
    //     })
    // }

    soLuongChange(evt) {
        if(evt) {
            let soLuongConLai = this.soLuongPhatHanh - evt + 1;
            this.maSoIn = this.maSoIn > soLuongConLai ? soLuongConLai : this.maSoIn;
        }
    }

    maSoChange(evt) {
        if(evt) {
            let soLuongConLai = this.soLuongPhatHanh - evt + 1;
            this.soLuongIn = this.soLuongIn > soLuongConLai ? soLuongConLai : this.soLuongIn;
        }
    }

    mergeThongTinHTML() {
        this.voucherThongTinHTML.HostingName = this.hostingName;
        this.voucherThongTinHTML.Ten = this.tenVoucher;
        this.voucherThongTinHTML.Ma = this.maVoucher;
        this.voucherThongTinHTML.SoLuong = this.soLuongIn;
        this.voucherThongTinHTML.MaSoTu = this.maSoIn;
        this.voucherThongTinHTML.SoLuongPhatHanh = this.soLuongPhatHanh;
    }

    getSharedPrintForm() {
        this.mergeThongTinHTML();

        return new Promise(resolve => {
            this.apiService.post<any>(`Voucher/GetHtmlVoucher`, this.voucherThongTinHTML).subscribe(resultData => {
                resolve(resultData);
            });
        });

        // return new Promise(resolve => {
        //     this.apiService.get<any>(`Voucher/GetHtmlVoucher?hostingName=${this.hostingName}&ten=${this.tenVoucher}&ma=${this.maVoucher}&soLuong=${this.soLuongIn}&maSoTu=${this.maSoIn}&soLuongPhatHanh=${this.soLuongPhatHanh}`).subscribe(resultData => {
        //         resolve(resultData);
        //     });
        // });
    }

    getIframe() {
        this.soLuongIn = 1;
        this.mergeThongTinHTML();

        this.apiService.post<any>(`Voucher/GetHtmlVoucher`, this.voucherThongTinHTML).subscribe(resultData => {
            // this.iframeSrc = resultData;
            this.iframeSrc = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
        }, (err: ApiError) => {
            this.notificationService.showError(err.Message);
        });

        // this.apiService.get<any>(`Voucher/GetHtmlVoucher?hostingName=${this.hostingName}&ten=${this.tenVoucher}&ma=${this.maVoucher}&soLuong=1&maSoTu=1&soLuongPhatHanh=${this.soLuongPhatHanh}`).subscribe(resultData => {
        //     // this.iframeSrc = resultData;
        //     this.iframeSrc = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
        // }, (err: ApiError) => {
        //     this.notificationService.showError(err.Message);
        // });
    }
}
