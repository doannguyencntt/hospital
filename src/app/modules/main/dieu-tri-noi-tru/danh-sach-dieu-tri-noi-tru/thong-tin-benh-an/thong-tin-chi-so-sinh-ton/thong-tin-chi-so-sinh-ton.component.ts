import { Component, OnInit, TemplateRef, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ChiSoSinhTon } from '../thong-tin-benh-an.model';

@Component({
    selector: 'app-thong-tin-chi-so-sinh-ton',
    templateUrl: './thong-tin-chi-so-sinh-ton.component.html',
    styleUrls: ['./thong-tin-chi-so-sinh-ton.component.scss']
})
export class ThongTinChiSoSinhTonComponent implements OnInit, OnChanges {
    @Input() dataSourceChiSoSinhTons: any = null;

    icAdd = icAdd;
    icDelete = icDelete;
    icAddCircle = icAddCircle;
    icEdit = icEdit;
    icSave = icSave;
    documentType: DocumentType;
    format: string = 'n1';
    isAllowAdd: boolean = true;
    dataSourceSinhHieu: any = {
        data: [],
        total: 0
    };
    gridColumnChiSoSinhTons: any[] = [];
    huyetApTamTruong: number = 60;
    huyetApTamThu: number = 90;
    phongKhamHienTai: number = 0;
    nhipTho: number = 10;
    currentUserId: number = 0;
    current: Date = new Date();
    gridSinhHieuColumns: any[] = [];

    @Input() data: any = null;
    @Input() phongKhamId: number = 0;
    @Input() dataChiSoSinhTon: any = null;
    constructor(
        private apiService: ApiService,
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService) { }

    @ViewChild('actionSinhHieuTemplate', { static: true }) actionSinhHieuTemplate: TemplateRef<any>;
    @ViewChild('huyetApTemplate', { static: true }) huyetApTemplate: TemplateRef<any>;
    @ViewChild('thanNhietTemplate', { static: true }) thanNhietTemplate: TemplateRef<any>;
    @ViewChild('nhipTimTemplate', { static: true }) nhipTimTemplate: TemplateRef<any>;
    @ViewChild('nhipThoTemplate', { static: true }) nhipThoTemplate: TemplateRef<any>;
    @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
    @ViewChild('chieuCaoTemplate', { static: true }) chieuCaoTemplate: TemplateRef<any>;
    @ViewChild('BMITemplate', { static: true }) BMITemplate: TemplateRef<any>;
    @ViewChild('glassgowTemplate', { static: true }) glassgowTemplate: TemplateRef<any>;
    @ViewChild('spO2Template', { static: true }) spO2Template: TemplateRef<any>;

    ngOnInit() {
        this.gridColumnChiSoSinhTons = [
            { Field: "Mach", Title: "MẠCH (NHỊP/PHÚT)", Width: 100, Template: this.nhipTimTemplate },
            { Field: "NhietDo", Title: "NHIỆT ĐỘ (°C)", Width: 150, Template: this.thanNhietTemplate },
            { Field: "HuyetAp", Title: "HUYẾT ÁP (MMHG)", Width: 100, Template: this.huyetApTemplate },
            { Field: "NhipTho", Title: "NHỊP THỞ (LẦN/PHÚT)", Width: 150, Template: this.nhipThoTemplate },
            { Field: "CanNang", Title: "CÂN NẶNG (KG)", Width: 100, Template: this.canNangTemplate },
            { Field: "ChieuCao", Title: "CHIỀU CAO (CM)", Width: 150, Template: this.chieuCaoTemplate },
            { Field: "BMI", Title: "BMI (KG/M²)", Width: 100, Template: this.BMITemplate },
            { Field: "Glassgow", Title: "GLASSGOW", Width: 80, Template: this.glassgowTemplate },
            { Field: "Spo2", Title: "SPO2(%)", Width: 80, Template: this.spO2Template },
            { Field: "NgayThucHien", Title: "NGÀY THỰC HIỆN", Width: 150 },
            { Field: "Action", Title: "", Width: 70, Template: this.actionSinhHieuTemplate }
        ];
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['dataChiSoSinhTon'] && changes['dataChiSoSinhTon'].previousValue != null && changes['dataChiSoSinhTon'].previousValue != changes['dataChiSoSinhTon'].currentValue) {
            this.dataSourceSinhHieu.data = changes['dataChiSoSinhTon'].currentValue;
        }
        this.phongKhamHienTai = this.phongKhamId;
    }

    themChiSoSinhTon() {
        let newItem = new ChiSoSinhTon();
        newItem.NhanVienThucHien = "";
        newItem.NgayThucHien = CommonService.formatDateTimeSACH(this.current, "dd/mm/yyyy").toString();
        this.dataSourceChiSoSinhTons.data.push(newItem);
    }

    onChangeCanNang(data: any) {
        var chieuCao = data.ChieuCao / 100;
        if (chieuCao === 0) {
            data.BMI = null;
            return;
        }
        data.BMI = data.CanNang / (chieuCao * chieuCao);
    }

    onChangeChieuCao(data: any) {
        var chieuCao = data.ChieuCao / 100;
        if (chieuCao === 0) {
            data.BMI = null;
            return;
        }
        data.BMI = data.CanNang / (chieuCao * chieuCao);
    }

    onChangeNhipTho(input: any, dataItem) {
        if (input % 1 != 0) {
            dataItem.NhipTho = input.toFixed();
            if (typeof dataItem.NhipTho === "string") {
                dataItem.NhipTho = Number(dataItem.NhipTho);
            }
        }
    }

    onChangeHuyetApTamThu(input: any, dataItem) {
        if (input % 1 != 0) {
            dataItem.HuyetApTamThu = input.toFixed();
            if (typeof dataItem.HuyetApTamThu === "string") {
                dataItem.HuyetApTamThu = Number(dataItem.HuyetApTamThu);
            }
        }
        if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
            dataItem.HuyetAp = null;
        } else {
            dataItem.HuyetAp = dataItem.HuyetApTamThu + "/" + dataItem.HuyetApTamTruong;
        }
    }

    onChangeHuyetApTamTruong(input: any, dataItem) {
        if (input % 1 != 0) {
            dataItem.HuyetApTamTruong = input.toFixed();
            if (typeof dataItem.HuyetApTamTruong === "string") {
                dataItem.HuyetApTamTruong = Number(dataItem.HuyetApTamTruong);
            }
        }
        if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
            dataItem.HuyetAp = null;
        } else {
            dataItem.HuyetAp = dataItem.HuyetApTamThu + "/" + dataItem.HuyetApTamTruong;
        }
    }

    onChangeNhipTim(data: any, input: any) {
        if (input % 1 != 0) {
            data.NhipTim = input.toFixed();
            if (typeof data.NhipTim === "string") {
                data.NhipTim = Number(data.NhipTim);
            }
        }
    }
    xoaChiSoSinhHieu(item: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.dataSourceChiSoSinhTons.data.splice(this.dataSourceChiSoSinhTons.data.findIndex(x => x == item), 1);
            }
        });
    }
}
