import { Component, OnInit, Input, ViewChild, TemplateRef, EventEmitter, Output } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage, PtttMessage } from 'src/app/shared/configdata/system-message';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import { DataSourceChiSoSinhHieu, ChiSoSinhHieu, ChiSoSinhHieuRequestModel } from '../../../phau-thuat-thu-thuat.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BroadcastService } from 'src/app/core/services/broadcast.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-pttt-theo-doi-sinh-ton',
    templateUrl: './pttt-theo-doi-sinh-ton.component.html',
    styleUrls: ['./pttt-theo-doi-sinh-ton.component.scss']
})

export class PhauThuatThuThuatTheoDoiSinhTonComponent implements OnInit {
    format = 'n1';
    documentType: DocumentType;

    gridSinhHieuColumns: any[] = [];
    dataSourceSinhHieu: DataSourceChiSoSinhHieu = {
        data: [],
        total: 0
    };
    current: Date = new Date();

    @Input() IsDaTuongTrinh = false;
    @Input() thongTinBenhNhan: any;
    @Input() dataChiSoSinhTon: any;
    canChange = false;
    popup: any;

    icAdd = icAdd;
    icDelete = icDelete;
    icAddCircle = icAddCircle;
    icEdit = icEdit;
    icSave = icSave;

    @ViewChild('actionSinhHieuTemplate', { static: true }) actionSinhHieuTemplate: TemplateRef<any>;
    @ViewChild('huyetApTemplate', { static: true }) huyetApTemplate: TemplateRef<any>;
    @ViewChild('thanNhietTemplate', { static: true }) thanNhietTemplate: TemplateRef<any>;
    @ViewChild('nhipTimTemplate', { static: true }) nhipTimTemplate: TemplateRef<any>;
    @ViewChild('nhipThoTemplate', { static: true }) nhipThoTemplate: TemplateRef<any>;
    @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
    @ViewChild('chieuCaoTemplate', { static: true }) chieuCaoTemplate: TemplateRef<any>;
    @ViewChild('BMITemplate', { static: true }) BMITemplate: TemplateRef<any>;
    @ViewChild('glassgowTemplate', { static: true }) glassgowTemplate: TemplateRef<any>;
    @ViewChild('sp02Template', { static: true }) sp02Template: TemplateRef<any>;
    @Output() displayBtnForSton: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private dialog: MatDialog,
        private apiService: ApiService,
        private authService: AuthService,
        private notificationService: NotificationService,
        private broadcastService: BroadcastService
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.PhauThuatThuThuatTheoNgay;
        this.canChange = false;
        this.gridSinhHieuColumns = [
            { Field: 'NhipTim', Title: 'Mạch (nhịp/phút)', Width: 136, Template: this.nhipTimTemplate },
            { Field: 'ThanNhiet', Title: 'Nhiệt độ (°C)', Width: 106, Template: this.thanNhietTemplate },
            { Field: 'HuyetAp', Title: 'Huyết áp (mmHg)', Width: 134, Template: this.huyetApTemplate },
            { Field: 'NhipTho', Title: 'Nhịp thở (lần/phút)', Width: 155, Template: this.nhipThoTemplate },
            { Field: 'CanNang', Title: 'Cân nặng (kg)', Width: 114, Template: this.canNangTemplate },
            { Field: 'ChieuCao', Title: 'Chiều cao (cm)', Width: 116, Template: this.chieuCaoTemplate },
            { Field: 'Bmi', Title: 'BMI (kg/m²)', Width: 91, Template: this.BMITemplate },
            { Field: 'Glassgow', Title: 'Glassgow', Width: 87, Template: this.glassgowTemplate },
            { Field: 'SpO2', Title: 'SpO2 (%)', Width: 72, Template: this.sp02Template },
            { Field: 'NgayThucHienDisplay', Title: 'Ngày thực hiện', Width: 152 },
            { Field: 'Action', Title: '', Width: 69, Template: this.actionSinhHieuTemplate }
        ];
        this.LoadChiSoSinhHieu(this.thongTinBenhNhan.YeuCauTiepNhanId);
    }

    LoadChiSoSinhHieu(yeuCauTiepNhanId: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.apiService.get<any>
                (`PhauThuatThuThuat/LoadChiSoSinhHieu?yctnId=${yeuCauTiepNhanId}`).subscribe(res => {
                    if (res) {
                        this.dataSourceSinhHieu.data = res.Data;
                        this.dataSourceSinhHieu.total = res.TotalRowCount;
                        this.displayBtnForSton.emit(false);
                    }
                    this.canChange = true;
                }, (err) => {
                    this.notificationService.showError(err.Message);
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    OnChange() {
        this.displayBtnForSton.emit(true);
    }

    themChiSoSinhTon() {
        const ketQuaSinhHieuNew = new ChiSoSinhHieu();
        ketQuaSinhHieuNew.Id = 0;
        ketQuaSinhHieuNew.NgayThucHien = this.current;
        ketQuaSinhHieuNew.NgayThucHienDisplay = CommonService.formatDateTimeSACH(this.current, 'dd/mm/yyyy').toString();
        ketQuaSinhHieuNew.AllowModify = true;
        this.dataSourceSinhHieu.data.push(ketQuaSinhHieuNew);
        this.dataSourceSinhHieu.total++;
        this.OnChange();
    }

    onChangeNhipTim(data: any, input: any) {
        if (input % 1 !== 0) {
            data.NhipTim = input.toFixed();

            if (typeof data.NhipTim === 'string') {
                data.NhipTim = Number(data.NhipTim);
            }
        }
    }

    onChangeHuyetApTamThu(input: any, dataItem) {
        if (input % 1 !== 0) {
            dataItem.HuyetApTamThu = input.toFixed();

            if (typeof dataItem.HuyetApTamThu === 'string') {
                dataItem.HuyetApTamThu = Number(dataItem.HuyetApTamThu);
            }
        }

        if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
            dataItem.HuyetAp = null;
        } else {
            dataItem.HuyetAp = dataItem.HuyetApTamThu + '/' + dataItem.HuyetApTamTruong;
        }
    }

    onChangeHuyetApTamTruong(input: any, dataItem) {
        if (input % 1 !== 0) {
            dataItem.HuyetApTamTruong = input.toFixed();

            if (typeof dataItem.HuyetApTamTruong === 'string') {
                dataItem.HuyetApTamTruong = Number(dataItem.HuyetApTamTruong);
            }
        }

        if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
            dataItem.HuyetAp = null;
        } else {
            dataItem.HuyetAp = dataItem.HuyetApTamThu + '/' + dataItem.HuyetApTamTruong;
        }
    }

    onChangeNhipTho(input: any, dataItem) {
        if (input % 1 !== 0) {
            dataItem.NhipTho = input.toFixed();

            if (typeof dataItem.NhipTho === 'string') {
                dataItem.NhipTho = Number(dataItem.NhipTho);
            }
        }
    }

    onChangeCanNang(data: ChiSoSinhHieu) {
        const chieuCao = data.ChieuCao / 100;

        if (chieuCao === 0) {
            data.Bmi = null;
            return;
        }

        data.Bmi = data.CanNang / (chieuCao * chieuCao);
    }

    onChangeChieuCao(data: ChiSoSinhHieu) {
        const chieuCao = data.ChieuCao / 100;

        if (chieuCao === 0) {
            data.Bmi = null;
            return;
        }

        data.Bmi = data.CanNang / (chieuCao * chieuCao);
    }

    XoaChiSoSinhHieu(item: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.dataSourceSinhHieu.data.splice(this.dataSourceSinhHieu.data.findIndex(x => x === item), 1);
                this.OnChange();
                this.notificationService.showSuccess(PtttMessage.MessageDeleteSinhHieuThanhCong);
            }
        });
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

    Luu() {
        this.saveDataLoading();
        this.dataSourceSinhHieu.data.filter(x => x.AllowModify === true).forEach(chiSoSinhHieu => {
            chiSoSinhHieu.AllowModify = false;
        });

        this.dataSourceSinhHieu.data.filter(chiSoSinhHieu => chiSoSinhHieu.Bmi == null
            && chiSoSinhHieu.CanNang == null && chiSoSinhHieu.NhipTim == null
            && chiSoSinhHieu.ThanNhiet == null && chiSoSinhHieu.HuyetApTamThu == null
            && chiSoSinhHieu.HuyetApTamTruong == null
            && chiSoSinhHieu.NhipTho == null && chiSoSinhHieu.ChieuCao == null && chiSoSinhHieu.SpO2 == null
            && chiSoSinhHieu.Glassgow == null).forEach(chiSoSh => {
                chiSoSh.AllowModify = true;
            });

        if (this.dataSourceSinhHieu.data.some(chiSoSinhHieu => chiSoSinhHieu.Bmi == null
            && chiSoSinhHieu.CanNang == null && chiSoSinhHieu.NhipTim == null
            && chiSoSinhHieu.ThanNhiet == null && chiSoSinhHieu.HuyetApTamThu == null
            && chiSoSinhHieu.HuyetApTamTruong == null
            && chiSoSinhHieu.NhipTho == null && chiSoSinhHieu.ChieuCao == null && chiSoSinhHieu.SpO2 == null
            && chiSoSinhHieu.Glassgow == null)) {
            this.notificationService.showError(PtttMessage.MessageBlockingSaveModelSinhHieu);
            this.closePopupLoadingData();
            return;
        }

        for (const chiSoSh of this.dataSourceSinhHieu.data
            .filter(chiSoSinhHieu => chiSoSinhHieu.HuyetApTamThu == null || chiSoSinhHieu.HuyetApTamTruong == null)) {
            if (chiSoSh.HuyetApTamThu == null && chiSoSh.HuyetApTamTruong == null) {
                continue;
            }
            if (chiSoSh.HuyetApTamThu == null) {
                chiSoSh.HuyetAp = '0/' + chiSoSh.HuyetApTamTruong;
            }
            if (chiSoSh.HuyetApTamTruong == null) {
                chiSoSh.HuyetAp = chiSoSh.HuyetApTamThu + '/0';
            }
        }

        let requestCssh = new ChiSoSinhHieuRequestModel();
        requestCssh = {
            YctnId: this.thongTinBenhNhan.YeuCauTiepNhanId,
            ChiSoSinhHieus: this.dataSourceSinhHieu.data
        };
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.apiService.post<any>('PhauThuatThuThuat/SaveChiSoSinhHieu', requestCssh).subscribe(() => {
                this.notificationService.showSuccess(PtttMessage.MessageSaveSinhHieuThanhCong);
                this.displayBtnForSton.emit(false);
                this.closePopupLoadingData();
            }, (err) => {
                this.notificationService.showError(err.Message);
                this.closePopupLoadingData();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            this.closePopupLoadingData();
        }
    }

    SuaChiSoSinhHieu(sinhHieu: ChiSoSinhHieu) {
        sinhHieu.AllowModify = true;
    }
}
