import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { TuongTrinhTuVong } from '../../phau-thuat-thu-thuat.model';
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
    selector: 'app-phau-thuat-thu-thuat-tu-vong-popup',
    templateUrl: './phau-thuat-thu-thuat-tu-vong-popup.component.html',
    styleUrls: ['./phau-thuat-thu-thuat-tu-vong-popup.component.scss']
})
export class PhauThuatThuThuatTuVongPopupComponent implements OnInit, OnDestroy {
    ttTuVong = {} as TuongTrinhTuVong;
    documentType: DocumentType = DocumentType.PhauThuatThuThuatTheoNgay;
    popup: any;
    ycdvktId;
    IsDaTuongTrinh = false;

    isDangTheoDoi = false;
    yeuCauTiepNhanId = 0;
    theoDoiSauPhauThuatThuThuatId = 0;
    nhanVienKetLuanId = 0;
    phongBenhVienId = 0;

    icClose = icClose;
    validationErrors: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialog: MatDialog,
        private dialogRef: MatDialogRef<any>,
        private apiService: ApiService,
        private broadcastService: BroadcastService,
        private notificationService: NotificationService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        const self = this;
        // self.documentType = DocumentType.PhauThuatThuThuatTheoNgay;
        if (self.data.isTuongTrinh) {
            self.ycdvktId = self.data.YcdvktId;
            self.IsDaTuongTrinh = self.data.IsDaTuongTrinh;
            self.LoadTuVong(self.ycdvktId);
        } else if (this.data.isTheoDoi) {
            self.isDangTheoDoi = self.data.isDangTheoDoi;
            self.yeuCauTiepNhanId = self.data.yeuCauTiepNhanId;
            self.theoDoiSauPhauThuatThuThuatId = self.data.theoDoiSauPhauThuatThuThuatId;
            self.nhanVienKetLuanId = self.data.nhanVienKetLuanId;
            self.phongBenhVienId = self.data.phongBenhVienId;
        }
    }

    LoadTuVong(ycdvktId: number) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService.get<any>(
                'PhauThuatThuThuat/LoadTuVong?ycdvktId=' + ycdvktId
            ).subscribe((res) => {
                if (res) {
                    self.ttTuVong = { ...res };
                }
            });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
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

    ValidateTuVongClient(tuVong: TuongTrinhTuVong) {
        this.validationErrors = [];

        if (tuVong.TgTuVong == null) {
            const err = {
                Field: 'TgTuVong',
                Message: PtttMessage.MessageTgTuVongNotAllowNull
            };
            this.validationErrors.push(err);
        }

        if (tuVong.TuVong == null) {
            const err = {
                Field: 'TuVong',
                Message: PtttMessage.MessageTuVongNotAllowNull
            };
            this.validationErrors.push(err);
        }
    }

    confirmTuVong() {
        const self = this;
        self.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: PtttMessage.MessageConfirmTuVong }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result === 'Yes') {
                if (self.data.isTuongTrinh) {
                    self.saveDataLoading();
                    self.ValidateTuVongClient(self.ttTuVong);
                    if (self.validationErrors.some(x => x)) {
                        self.closePopupLoadingData();
                        return;
                    }
                    self.ttTuVong.IdDvkt = self.ycdvktId;
                    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
                        self.apiService.post<any>(
                            'PhauThuatThuThuat/SaveTuongTrinhTuVong', self.ttTuVong
                        ).subscribe(() => {
                            self.closePopupLoadingData();
                            self.notificationService.showSuccess(PtttMessage.MessageSaveTuongTrinhTuVongThanhCong);
                            self.dialogRef.close('confirm');
                        }, err => {
                            self.closePopupLoadingData();
                            self.notificationService.showError(err.Message);
                        });
                    } else {
                        self.closePopupLoadingData();
                        self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                    }
                } else if (this.data.isTheoDoi) {
                    self.saveDataLoading();
                    self.ttTuVong.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
                    self.ttTuVong.TheoDoiSauPhauThuatThuThuatId = self.theoDoiSauPhauThuatThuThuatId;
                    self.ttTuVong.NhanVienKetLuanId = self.nhanVienKetLuanId;
                    self.ttTuVong.PhongBenhVienId = self.phongBenhVienId;

                    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
                        self.apiService.post<any>('PhauThuatThuThuat/BenhNhanTuVongKhiTheoDoi', self.ttTuVong).subscribe((res) => {
                            self.closePopupLoadingData();
                            self.notificationService.showSuccess(PtttMessage.MessageSaveTuongTrinhTuVongThanhCong);
                            self.dialogRef.close('confirm');
                        }, err => {
                            err.ValidationErrors === null ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                            self.closePopupLoadingData();
                        });
                    } else {
                        self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                    }
                }
            }
        });
    }
}
