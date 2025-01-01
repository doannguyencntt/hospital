import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { DataSourceChiSoSinhTon, KetQuaSinhHieu, YeuCauDichVuKyThuat } from '../../../../tiem-chung.model';

import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';

@Component({
  selector: 'app-chi-so-sinh-ton',
  templateUrl: './chi-so-sinh-ton.component.html',
  styleUrls: ['./chi-so-sinh-ton.component.scss']
})

export class ChiSoSinhTonComponent implements OnInit {
    format = 'n1';
    currentUserId: number;
    currentPhongBenhVienId: number;

    chiSoSinhTonColumns: any[] = [];
    dataSourceChiSoSinhTon: DataSourceChiSoSinhTon = {
        data: [],
        total: 0
    };

    icAdd = icAdd;
    icDelete = icDelete;
    icAddCircle = icAddCircle;
    icEdit = icEdit;
    icSave = icSave;

    @Input() documentType: DocumentType = DocumentType.TiemChungKhamSangLoc;
    @Input() thongTinBenhNhan: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
    @Input() isChiSoSinhTonReadOnly: boolean = false;

    @Output() canNangThanNhietChanged = new EventEmitter<any>();

    @ViewChild('actionSinhTonTemplate', { static: true }) actionSinhTonTemplate: TemplateRef<any>;
    @ViewChild('huyetApTemplate', { static: true }) huyetApTemplate: TemplateRef<any>;
    @ViewChild('thanNhietTemplate', { static: true }) thanNhietTemplate: TemplateRef<any>;
    @ViewChild('nhipTimTemplate', { static: true }) nhipTimTemplate: TemplateRef<any>;
    @ViewChild('nhipThoTemplate', { static: true }) nhipThoTemplate: TemplateRef<any>;
    @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
    @ViewChild('chieuCaoTemplate', { static: true }) chieuCaoTemplate: TemplateRef<any>;
    @ViewChild('BMITemplate', { static: true }) BMITemplate: TemplateRef<any>;
    @ViewChild('glassgowTemplate', { static: true }) glassgowTemplate: TemplateRef<any>;
    @ViewChild('sp02Template', { static: true }) sp02Template: TemplateRef<any>;
    @ViewChild('thoiDiemThucHienTemplate', { static: true }) thoiDiemThucHienTemplate: TemplateRef<any>;
    
    constructor(private dialog: MatDialog, private notificationService: NotificationService,
                private authService: AuthService, private apiService: ApiService) { }

    ngOnInit() {
        this.chiSoSinhTonColumns = [
            { Field: 'NhipTim', Title: 'Mạch (nhịp/phút)', Width: 136, Template: this.nhipTimTemplate },
            { Field: 'ThanNhiet', Title: 'Nhiệt độ (°C)', Width: 106, Template: this.thanNhietTemplate },
            { Field: 'HuyetAp', Title: 'Huyết áp (mmHg)', Width: 134, Template: this.huyetApTemplate },
            { Field: 'NhipTho', Title: 'Nhịp thở (lần/phút)', Width: 155, Template: this.nhipThoTemplate },
            { Field: 'CanNang', Title: 'Cân nặng (kg)', Width: 114, Template: this.canNangTemplate },
            { Field: 'ChieuCao', Title: 'Chiều cao (cm)', Width: 116, Template: this.chieuCaoTemplate },
            { Field: 'Bmi', Title: 'BMI (kg/m²)', Width: 91, Template: this.BMITemplate },
            { Field: 'Glassgow', Title: 'Glassgow', Width: 87, Template: this.glassgowTemplate },
            { Field: 'SpO2', Title: 'SpO2 (%)', Width: 72, Template: this.sp02Template },
            { Field: 'ThoiDiemThucHien', Title: 'Ngày thực hiện', Width: 152, Template: this.thoiDiemThucHienTemplate },
            { Field: 'Action', Title: '', Width: 69, Template: this.actionSinhTonTemplate }
        ];

        // if(this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhan.BenhNhanTiemVacxinDiUngThuocs) {
        //     this.dataSourceChiSoSinhTon.data = this.thongTinBenhNhan.KhamSangLocTiemChung.KetQuaSinhHieus;
        //     this.dataSourceChiSoSinhTon.total = this.thongTinBenhNhan.KhamSangLocTiemChung.KetQuaSinhHieus.length;
        // }

        this.currentUserId = this.authService.getAccessUser().Id;
        this.currentPhongBenhVienId = Number(this.authService.getPhongLamViecId());
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.thongTinBenhNhan && changes.thongTinBenhNhan.currentValue) {
            this.dataSourceChiSoSinhTon.data = this.thongTinBenhNhan.KhamSangLocTiemChung.KetQuaSinhHieus;
            this.dataSourceChiSoSinhTon.total = this.thongTinBenhNhan.KhamSangLocTiemChung.KetQuaSinhHieus.length;
        };
    }

    themChiSoSinhTon() {
        let date = new Date();
        const chiSoSinhTonNew = new KetQuaSinhHieu();

        chiSoSinhTonNew.Id = 0;
        chiSoSinhTonNew.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
        chiSoSinhTonNew.YeuCauDichVuKyThuatKhamSangLocTiemChungId = this.thongTinBenhNhan.Id;
        chiSoSinhTonNew.ThoiDiemThucHien = date;
        chiSoSinhTonNew.ThoiDiemThucHienDisplay = CommonService.formatDateTimeSACH(date, 'dd/mm/yyyy').toString();
        chiSoSinhTonNew.NhanVienThucHienId = this.currentUserId;
        chiSoSinhTonNew.NoiThucHienId = this.currentPhongBenhVienId;
        chiSoSinhTonNew.IsEditable = true;

        this.dataSourceChiSoSinhTon.data.push(chiSoSinhTonNew);
        this.dataSourceChiSoSinhTon.total++;
        
        this.evtModelOnChange();
    }

    suaChiSoSinhTon(item: any) {
        item.IsEditable = true;
        this.evtModelOnChange();
    }

    xoaChiSoSinhTon(item: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.dataSourceChiSoSinhTon.data.splice(this.dataSourceChiSoSinhTon.data.findIndex(x => x === item), 1);
                this.notificationService.showSuccess('Đã xóa chỉ số sinh tồn thành công');

                this.evtModelOnChange();
            }
        });
    }

    evtModelOnChange() {
        this.thongTinBenhNhan.isDataKhamSangLocChungChange = true;
    }

    evtOnChangeNhipTim(data: any, input: any) {
        if (input % 1 !== 0) {
            data.NhipTim = input.toFixed();

            if (typeof data.NhipTim === 'string') {
                data.NhipTim = Number(data.NhipTim);
            }
        }
        
        this.evtModelOnChange();
    }

    evtOnChangeHuyetApTamThu(input: any, dataItem) {
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

        this.evtModelOnChange();
    }

    evtOnChangeHuyetApTamTruong(input: any, dataItem) {
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

        this.evtModelOnChange();
    }

    evtOnChangeNhipTho(input: any, dataItem) {
        if (input % 1 !== 0) {
            dataItem.NhipTho = input.toFixed();

            if (typeof dataItem.NhipTho === 'string') {
                dataItem.NhipTho = Number(dataItem.NhipTho);
            }
        }

        this.evtModelOnChange();
    }

    evtOnChangeCanNang(data: KetQuaSinhHieu) {
        this.canNangThanNhietChanged.emit(this.dataSourceChiSoSinhTon.data);

        const chieuCao = data.ChieuCao / 100;

        if (chieuCao === 0) {
            data.Bmi = null;
            return;
        }

        data.Bmi = data.CanNang / (chieuCao * chieuCao);

        this.evtModelOnChange();
    }

    evtOnChangeThanNhiet(evt) {
        this.canNangThanNhietChanged.emit(this.dataSourceChiSoSinhTon.data);
        this.evtModelOnChange();
    }

    evtOnChangeChieuCao(data: KetQuaSinhHieu) {
        const chieuCao = data.ChieuCao / 100;

        if (chieuCao === 0) {
            data.Bmi = null;
            return;
        }

        data.Bmi = data.CanNang / (chieuCao * chieuCao);

        this.evtModelOnChange();
    }
}