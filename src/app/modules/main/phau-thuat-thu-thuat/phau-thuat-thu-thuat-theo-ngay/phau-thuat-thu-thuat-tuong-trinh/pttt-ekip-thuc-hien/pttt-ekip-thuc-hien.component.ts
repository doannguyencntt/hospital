import { Component, OnInit, Input, ViewEncapsulation, ViewChild, SimpleChanges, OnChanges, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { EkipForm } from '../../../phau-thuat-thu-thuat.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icRemoveCircle from '@iconify/icons-ic/remove-circle';
import { PhauThuatThuThuatEkipThucHienNvComponent } from './pttt-ekip-thuc-hien-nv/pttt-ekip-thuc-hien-nv.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage, PtttMessage } from 'src/app/shared/configdata/system-message';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { EnumVaiTroBacSi, EnumVaiTroDieuDuong } from 'src/app/shared/enum/phau-thuat-thu-thuat.enum';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-pttt-ekip-thuc-hien',
    templateUrl: './pttt-ekip-thuc-hien.component.html',
    styleUrls: ['./pttt-ekip-thuc-hien.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class PhauThuatThuThuatEkipThucHienComponent implements OnInit, OnChanges {
    @Input() ycdvktId = 0;
    phongBenhVienId;
    yctnId;
    ekip = {} as EkipForm;

    popup: any;
    icAddCircle = icAddCircle;
    icRemoveCircle = icRemoveCircle;
    documentType: DocumentType;
    validationErrors: any;
    canChange = false;
    @Input() IsDaTuongTrinh = false;

    @Input() thongTinBenhNhan: any = null;
    @ViewChild('ekipGrid', { static: false }) ekipGrid: PhauThuatThuThuatEkipThucHienNvComponent;
    @Output() afterSavingEkip: EventEmitter<any> = new EventEmitter<any>();
    @Output() displaySaveCcl: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private apiService: ApiService,
        private notificationService: NotificationService,
        private dialog: MatDialog,
        private authService: AuthService,
        private broadcastService: BroadcastService
    ) { }

    ngOnInit() {
        // const self = this;
        // self.canChange = false;
        // self.documentType = DocumentType.PhauThuatThuThuatTheoNgay;
        // self.phongBenhVienId = self.authService.getPhongLamViecId();
        // self.yctnId = self.thongTinBenhNhan.YeuCauTiepNhanId;
        // self.LoadThongTinEkipCoBan(self.phongBenhVienId, self.ycdvktId);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.thongTinBenhNhan && changes.thongTinBenhNhan.currentValue) {
            const self = this;
            self.canChange = false;
            self.documentType = DocumentType.PhauThuatThuThuatTheoNgay;
            self.phongBenhVienId = self.authService.getPhongLamViecId();
            self.yctnId = self.thongTinBenhNhan.YeuCauTiepNhanId;
            self.LoadThongTinEkipCoBan(self.phongBenhVienId, self.ycdvktId);
        }
    }

    LoadThongTinEkipCoBan(phongBenhVienId: any = 0, ycdvktId: number = -1) {
        const self = this;

        if (self.validationErrors != null && self.validationErrors.some(x => x)) {
            self.validationErrors = [];
        }

        self.ycdvktId = ycdvktId;
        // tslint:disable-next-line: triple-equals
        if (phongBenhVienId == 0 && ycdvktId === -1) {
            self.ekip = null;
            return;
        }

        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService.get<any>(
                `PhauThuatThuThuat/GetThongTinKhoa?phongBenhVienId=${phongBenhVienId}&&ycdvktId=${ycdvktId}`
            ).subscribe((res) => {
                if (res) {
                    self.canChange = true;
                    self.ekip = { ...res };
                }
            });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    OnChange() {
        this.displaySaveCcl.emit(true);
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

    Save() {
        this.ekipGrid.validationMsg = null;
        this.saveDataLoading();
        this.ekip.Ekips = this.ekipGrid.dataSourceNhanVien.data;
        this.ekip.YcdvktId = this.ycdvktId;
        this.ekip.YctnId = this.yctnId;
        this.ekip.NoiThucHienId = this.phongBenhVienId;

        const ekipEmptyAndClientValidate = this.CheckEkipEmptyAndClientValidate();

        if (ekipEmptyAndClientValidate) {
            this.closePopupLoadingData();
            return;
        }

        const empty = this.CheckValidateEmpty();

        if (empty) {
            this.closePopupLoadingData();
            return;
        }

        const err = this.CheckValidateClient();

        if (err) {
            this.closePopupLoadingData();
            return;
        }

        if (this.validationErrors != null && this.validationErrors.some(x => x)) {
            this.closePopupLoadingData();
            return;
        }

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.apiService.post<any>(
                'PhauThuatThuThuat/SaveEkip', this.ekip
            ).subscribe((res) => {
                this.closePopupLoadingData();
                this.notificationService.showSuccess(PtttMessage.MessageSaveEkipThanhCong);
                this.afterSavingEkip.emit(res);
            }, error => {
                this.closePopupLoadingData();
                this.notificationService.showError(error.Message);
            });
        } else {
            this.closePopupLoadingData();
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    CheckEkipEmptyAndClientValidate() {
        let hasError = false;
        this.validationErrors = [];
        if (!this.ekip.Ekips.some(x => x)) {
            this.ekipGrid.validationMsg = PtttMessage.MessageEkipEmpty;
            hasError = true;
        }

        if (!this.ekip.ICDTruocId) {
            const err = {
                Field: 'ICDTruocId',
                Message: PtttMessage.MessageCdTruocPhauThuatNotAllowNull
            };
            this.validationErrors.push(err);
        }

        return hasError;
    }

    CheckValidateEmpty() {
        this.ekipGrid.ValidateEkipsClient(this.ekip.Ekips);

        if (this.ekipGrid.validationErrors != null && this.ekipGrid.validationErrors.some(x => x)) {
            return true;
        }

        return false;
    }

    CheckValidateClient() {
        let hasError = false;

        this.ekipGrid.ValidateTrungBacSi(this.ekip.Ekips);

        if (this.ekipGrid.validationErrors != null && this.ekipGrid.validationErrors.some(x => x)) {
            hasError = true;
        }

        if (this.ekip.IsPhauThuat === true) {
            if(this.ekip.Ekips.filter(x => x.VaiTroBacSi === EnumVaiTroBacSi.PhauThuatVienChinh || x.VaiTroDieuDuong === EnumVaiTroDieuDuong.PhauThuatVienChinh).length === 0) {
                this.ekipGrid.validationMsg = PtttMessage.MessageNotPhauThuatVienChinh;
                hasError = true;
            } else if(this.ekip.Ekips.filter(x => x.VaiTroBacSi === EnumVaiTroBacSi.PhauThuatVienChinh || x.VaiTroDieuDuong === EnumVaiTroDieuDuong.PhauThuatVienChinh).length > 1) {
                this.ekipGrid.validationMsg = PtttMessage.MessageDuyNhatPhauThuatVienChinh;
                hasError = true;
            }
        }

        return hasError;
    }
}
