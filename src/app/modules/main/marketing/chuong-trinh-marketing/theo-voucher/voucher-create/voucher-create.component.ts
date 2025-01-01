import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage, VoucherMarketingMessage } from 'src/app/shared/configdata/system-message';
import { VoucherInPopupComponent } from '../voucher-in-popup/voucher-in-popup.component';
import { VoucherSharedComponent } from '../voucher-shared/voucher-shared.component';

@Component({
    selector: 'app-voucher-create',
    templateUrl: './voucher-create.component.html',
    styleUrls: ['./voucher-create.component.scss']
})
export class VoucherCreateComponent implements OnInit {
    @ViewChild(VoucherSharedComponent, { static: true }) shared: VoucherSharedComponent;

    constructor(private router : Router, private dialog: MatDialog,
                private notificationService: NotificationService) { }

    ngOnInit() {
    }

    // onCreated() {
    //     this.router.navigate(['/marketing/ct-marketing/voucher']);
    // }

    huy() {
        // this.router.navigate(['/marketing/ct-marketing/voucher']);
        this.router.navigateByUrl("/marketing/ct-marketing/voucher?holdQuery=true");
    }

    themVoucher() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: CommonService.format(SystemMessage.MessConfirm, ["thêm"]),
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                this.shared.them()
            }
        })
    }

    // in() {
    //     let data = this.shared.getSharedData();

    //     if(!data.Ma || !data.Ten || !data.SoLuongPhatHanh || !data.TuNgay) {
    //         this.notificationService.showError(VoucherMarketingMessage.MessageThongTinNotNull)
    //     } else {
    //         this.dialog.open(VoucherInPopupComponent, {
    //             disableClose: true,
    //             width: '700px',
    //             height: 'auto',
    //             data: data
    //         })
    //         .afterClosed()
    //         .subscribe((res) => {
    //         });
    //     }
    // }
}
