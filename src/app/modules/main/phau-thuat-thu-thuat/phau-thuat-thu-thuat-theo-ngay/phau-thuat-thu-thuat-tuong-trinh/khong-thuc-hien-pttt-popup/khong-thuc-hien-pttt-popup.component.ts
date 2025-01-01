import { Component, OnInit, Inject } from '@angular/core';
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
import { RutTuongTrinhModel } from '../../../phau-thuat-thu-thuat.model';
import { BroadcastService } from 'src/app/core/services/broadcast.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-khong-thuc-hien-pttt-popup',
    templateUrl: './khong-thuc-hien-pttt-popup.component.html',
    styleUrls: ['./khong-thuc-hien-pttt-popup.component.scss']
})
export class KhongThucHienPtttPopupComponent implements OnInit {
    documentType: DocumentType = DocumentType.PhauThuatThuThuatTheoNgay;
    popup: any;
    ycdvktId;
    messageShowInPopup = PtttMessage.MessageKhongThucHienPtttDisplayPopup;
    huyTuongTrinh = {} as RutTuongTrinhModel;
    validationErrors: any;

    icClose = icClose;

    //BVHD-3860
    xoaThuocVaTu: boolean = true;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialog: MatDialog,
        private broadcastService: BroadcastService,
        private dialogRef: MatDialogRef<any>,
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

    ketThuc() {
        const self = this;
        self.validationErrors = [];
        self.huyTuongTrinh.YcdvktId = self.ycdvktId;

        //BVHD-3860
        self.huyTuongTrinh.XoaThuocVaTu = self.xoaThuocVaTu;

        self.saveDataLoading();
        self.validationErrors = self.OnClientValidation();
        if (self.validationErrors.length !== 0) {
            self.closePopupLoadingData();
            return;
        }
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.apiService.post<any>(
                'PhauThuatThuThuat/HuyTuongTrinh', self.huyTuongTrinh
            ).subscribe(() => {
                self.closePopupLoadingData();
                self.notificationService.showSuccess(PtttMessage.MessageKhongThucHienPtttThanhCong);
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

    OnClientValidation() {
        const self = this;
        const validationErrs = [];
        if (self.huyTuongTrinh.GhiChu === undefined || self.huyTuongTrinh.GhiChu === '') {
            const validate = {
                Field: 'GhiChu',
                Message: PtttMessage.MessageGhiChuEmpty
            };
            validationErrs.push(validate);
        }

        if (self.huyTuongTrinh.GhiChu != null && self.huyTuongTrinh.GhiChu.length > 4000) {
            const validate = {
                Field: 'GhiChu',
                Message: PtttMessage.MessageGhiChuLess4000
            };
            validationErrs.push(validate);
        }

        return validationErrs;
    }
}
