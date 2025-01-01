import { Component, OnInit, TemplateRef, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { KetQuaSinhHieu, BenhVienHangDoi, YeuCauKhamBenh } from '../../../kham-benh.model';
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

@Component({
    selector: 'app-lan-kham-hien-tai-kham-benh-chi-so-sinh-ton',
    templateUrl: './lan-kham-hien-tai-kham-benh-chi-so-sinh-ton.component.html',
    styleUrls: ['./lan-kham-hien-tai-kham-benh-chi-so-sinh-ton.component.scss']
})
export class LanKhamHienTaiKhamBenhChiSoSinhTonComponent implements OnInit, OnChanges {


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
    huyetApTamTruong: number = 60;
    huyetApTamThu: number = 90;
    phongKhamHienTai: number = 0;
    nhipTho: number = 10;
    currentUserId: number = 0;
    current: Date = new Date();

    gridSinhHieuColumns: any[] = [];
    yeuCauKhamBenh = new YeuCauKhamBenh();
    @Input() data: any = null;
    @Input() phongKhamId: number = 0;
    @Input() dataChiSoSinhTon: any = null;
    @Input() isReadOnly: boolean = false;
    @Input() laChuyenKhoaKhamNhieu: boolean = false;
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
        this.yeuCauKhamBenh = this.data;

        this.documentType = DocumentType.KhamBenh; // cần gán lại giá trị

        this.gridSinhHieuColumns = [
            { Field: "NhipTim", Title: "Mạch (nhịp/phút)", Width: 137, Template: this.nhipTimTemplate },
            { Field: "ThanNhiet", Title: "Nhiệt độ (°C)", Width: 100, Template: this.thanNhietTemplate },
            { Field: "HuyetAp", Title: "Huyết áp (mmHg)", Width: 135, Template: this.huyetApTemplate },
            { Field: "NhipTho", Title: "Nhịp thở (lần/phút)", Width: 150, Template: this.nhipThoTemplate },
            { Field: "CanNang", Title: "Cân nặng (kg)", Width: 113, Template: this.canNangTemplate },
            { Field: "ChieuCao", Title: "Chiều cao (cm)", Width: 117, Template: this.chieuCaoTemplate },
            { Field: "BMI", Title: "BMI (kg/m²)", Width: 91, Template: this.BMITemplate },
            { Field: "Glassgow", Title: "Glassgow", Width: 120, Template: this.glassgowTemplate },
            { Field: "SpO2", Title: "SpO2 (%)", Width: 120, Template: this.spO2Template },
            { Field: "NhanVienThucHien", Title: "Nhân viên thực hiện", Width: 156 , Hidden: true},
            { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 145 },
            { Field: "Action", Title: "", Width: 70, Template: this.actionSinhHieuTemplate, Hidden: this.isReadOnly }
        ];
        this.currentUserId = this.authService.getAccessUser().Id;

        this.dataSourceSinhHieu.data = this.dataChiSoSinhTon;
    }

    changeData() {
        this.yeuCauKhamBenh.IsChangeKhamBenh = true;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['dataChiSoSinhTon'] && changes['dataChiSoSinhTon'].previousValue != null && changes['dataChiSoSinhTon'].previousValue != changes['dataChiSoSinhTon'].currentValue) {
            this.dataSourceSinhHieu.data = changes['dataChiSoSinhTon'].currentValue;
        }
        this.phongKhamHienTai = this.phongKhamId;
    }

    themChiSoSinhTon() {
        if (this.dataSourceSinhHieu.data.findIndex(x => x.Id == 0) == -1) {
            this.apiService.post("KhamBenh/GetTenNhanVien?userId=" + this.currentUserId).subscribe(
                (resultData: any) => {
                    let newItem = new KetQuaSinhHieu();
                    newItem.NoiThucHienId = this.phongKhamHienTai;
                    newItem.NhanVienThucHienId = this.currentUserId;
                    newItem.NgayThucHien = CommonService.formatDateTimeSACH(this.current, "dd/mm/yyyy").toString();
                    this.dataSourceSinhHieu.data.push(newItem);

                    this.changeData();
                });
        }
        else {
            this.notificationService.showError("Bạn chưa lưu chỉ số sinh tồn");
        }
    }

    luuChiSoSinhHieu(data: any) {
        data.HuyetApTamThu = this.huyetApTamThu;
        data.HuyetApTamTruong = this.huyetApTamTruong;
        data.YeuCauTiepNhanId = this.yeuCauKhamBenh.YeuCauTiepNhanId;
        if (data.HuyetApTamThu === null && data.HuyetApTamTruong === null) {
            data.HuyetAp = null;
        } else {
            data.HuyetAp = data.HuyetApTamThu + "/" + data.HuyetApTamTruong;
        }
        data.NhipTho = this.nhipTho;
        this.apiService.post("KhamBenh/LuuChiSoSinhHieu", data).subscribe(
            (resultData: any) => {
                data.Id = resultData;
                this.isAllowAdd = true;
            }
        );
    }

    xoaChiSoSinhHieu(item: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.dataSourceSinhHieu.data.splice(this.dataSourceSinhHieu.data.findIndex(x => x == item), 1);
                this.changeData();
            }
        });

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

    suaChiSoSinhHieu(dataItem: any)
    {
        if(dataItem != undefined && dataItem != null)
        {
            dataItem.IsUpdate = true;
            dataItem.NoiThucHienId = this.phongKhamHienTai;
            dataItem.NhanVienThucHienId = this.currentUserId;
            dataItem.NgayThucHien = CommonService.formatDateTimeSACH(new Date(), "dd/mm/yyyy").toString();
            this.changeData();
        }
    }
}
