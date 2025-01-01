import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage, PtttMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-pttt-ket-thuc-tuong-trinh-popup',
    templateUrl: './pttt-ket-thuc-tuong-trinh-popup.component.html',
    styleUrls: ['./pttt-ket-thuc-tuong-trinh-popup.component.scss']
})
export class PtttKetThucTuongTrinhPopupComponent implements OnInit, OnDestroy {
    documentType: DocumentType = DocumentType.PhauThuatThuThuatTheoNgay;
    popup: any;
    ycdvktId;
    messageShowInPopup = PtttMessage.MessageKetThucTuongTrinhDisplayPopup;

    icClose = icClose;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialog: MatDialog,
        private dialogRef: MatDialogRef<any>,
        private broadcastService: BroadcastService,
        private apiService: ApiService,
        private notificationService: NotificationService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        const self = this;
        self.documentType = DocumentType.PhauThuatThuThuatTheoNgay;
        self.ycdvktId = self.data;
    }

    close() {
        this.dialog.closeAll();
    }

    saveDataLoading() {
        this.popup = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang lưu dữ liệu...' }
        });
    }

    closePopupLoadingData() {
        this.popup.close();
    }

    // tslint:disable-next-line: use-lifecycle-interface
    ngAfterContentInit() {
        $('mat-dialog-container.mat-dialog-container').css('overflow', 'hidden');
    }

    ngOnDestroy() {
        $('mat-dialog-container.mat-dialog-container').css('overflow', '');
    }

    ketThuc() {
        const self = this;
        self.saveDataLoading();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.apiService.get<any>(
                `PhauThuatThuThuat/KetThucTuongTrinh?ycdvktId=${self.ycdvktId}`
            ).subscribe(() => {
                self.closePopupLoadingData();
                self.notificationService.showSuccess(PtttMessage.MessageKetThucTuongTrinhThanhCong);
                self.dialogRef.close('confirm');
            }, err => {
                self.notificationService.showError(err.Message);
                self.closePopupLoadingData();
                self.dialogRef.close('confirm');
            });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
