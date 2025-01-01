import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { VoucherSharedComponent } from '../voucher-shared/voucher-shared.component';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { VoucherInPopupComponent } from '../voucher-in-popup/voucher-in-popup.component';
import { MatDialog } from '@angular/material';
import { SystemMessage, VoucherMarketingMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';

@Component({
	selector: 'app-voucher-update',
	templateUrl: './voucher-update.component.html',
    styleUrls: ['./voucher-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ],
    // encapsulation: ViewEncapsulation.None
})
export class VoucherUpdateComponent implements OnInit {
	@ViewChild(VoucherSharedComponent, {static: true}) shared: VoucherSharedComponent;
    
    constructor(private router: Router, private dialog: MatDialog,
                private notificationService: NotificationService) { }

    ngOnInit() {
    }

    // onUpdated() {
    //     this.router.navigate(['/marketing/ct-marketing/voucher']);
    // }

    huy() {
        // this.router.navigate(['/marketing/ct-marketing/voucher']);
        this.router.navigateByUrl("/marketing/ct-marketing/voucher?holdQuery=true");
    }

    luu() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]),
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                this.shared.luu();
            }
        })
    }

    in() {
        let data = this.shared.getSharedData();

        if(!data.Ma || !data.Ten || !data.SoLuongPhatHanh || !data.TuNgay) {
            this.notificationService.showError(VoucherMarketingMessage.MessageThongTinNotNull)
        } else {
            this.dialog.open(VoucherInPopupComponent, {
                disableClose: true,
                width: '900px',
                height: '550px',
                data: data
            })
            .afterClosed()
            .subscribe((res) => {
            });
        }
    }
}
