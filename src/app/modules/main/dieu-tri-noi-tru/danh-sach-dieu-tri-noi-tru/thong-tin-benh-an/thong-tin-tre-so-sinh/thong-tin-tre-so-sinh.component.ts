import { Component, OnInit, TemplateRef, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DacĐiemTreSoSinh } from '../thong-tin-benh-an.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
    selector: 'app-thong-tin-tre-so-sinh',
    templateUrl: './thong-tin-tre-so-sinh.component.html',
    styleUrls: ['./thong-tin-tre-so-sinh.component.scss']
})
export class ThongTinTreSoSinhComponent implements OnInit {
    @Input() dataSourceTreSoSinhs: any = null;
    gridTienSuSanKhoaColumns: any[] = [];
    icAdd = icAdd;
    icDelete = icDelete;
    icAddCircle = icAddCircle;
    icEdit = icEdit;
    icSave = icSave;
    documentType: DocumentType;
    format: string = 'n1';
    isAllowAdd: boolean = true;
    gridColumnChiSoSinhTons: any[] = [];
    huyetApTamTruong: number = 60;
    huyetApTamThu: number = 90;
    phongKhamHienTai: number = 0;
    nhipTho: number = 10;
    currentUserId: number = 0;
    current: Date = new Date();
    gridSinhHieuColumns: any[] = [];
    gridColumnDacTinhTreSoSinhs: any[] = [];
    public apGarSelectItems: any = [
        { KeyId: 1, DisplayName: "1 phút" },
        { KeyId: 2, DisplayName: "5 phút" },
        { KeyId: 3, DisplayName: "10 phút" },
    ];

    @Input() data: any = null;
    @Input() phongKhamId: number = 0;
    @Input() dataChiSoSinhTon: any = null;

    //=====================================Tiền sử bệnh====================================================
    @ViewChild('ngayGioTemplate', { static: true }) ngayGioTemplate: TemplateRef<any>;
    @ViewChild('gioiTinhTemplate', { static: true }) phuongPhapPPVoCamTemplate: TemplateRef<any>;
    @ViewChild('tinhTrangTemplate', { static: true }) phauThuatVienTemplate: TemplateRef<any>;
    @ViewChild('diTatTemplate', { static: true }) diTatTemplate: TemplateRef<any>;
    @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
    @ViewChild('caoTemplate', { static: true }) caoTemplate: TemplateRef<any>;
    @ViewChild('vongDauTemplate', { static: true }) vongDauTemplate: TemplateRef<any>;
    @ViewChild('coHauMonTemplate', { static: true }) coHauMonTemplate: TemplateRef<any>;
    @ViewChild('aPGARTemplate', { static: true }) aPGARTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

    @ViewChild('tinhTrangTreSoSinhTemplate', { static: true }) tinhTrangTreSoSinhTemplate: TemplateRef<any>;
    @ViewChild('kqXuLyTemplate', { static: true }) kqXuLyTemplate: TemplateRef<any>;

    constructor(private dialog: MatDialog, private authService: AuthService, private apiService: ApiService) { }

    ngOnInit() {
        this.gridColumnDacTinhTreSoSinhs = [
            { Field: "NgayGio", Title: "ĐẺ LÚC", Width: 200, Sortable: true, Template: this.ngayGioTemplate },
            { Field: "GioiTinh", Title: "GIỚI TÍNH", Width: 150, Sortable: true, Template: this.phuongPhapPPVoCamTemplate },
            { Field: "TinhTrangId", Title: "TÌNH TRẠNG", Width: 100, Sortable: true, Template: this.phauThuatVienTemplate },
            { Field: "DiTat", Title: "DỊ TẬT", Width: 150, Sortable: true, Template: this.diTatTemplate },
            { Field: "CanNang", Title: "Cân Nặng", Width: 150, Sortable: true, Template: this.canNangTemplate },
            { Field: "Cao", Title: "Cao(cm)", Width: 150, Sortable: true, Template: this.caoTemplate },
            { Field: "VongDau", Title: "Vòng đầu(cm)", Width: 150, Sortable: true, Template: this.vongDauTemplate },
            { Field: "CoHauMon", Title: "Có Hậu Môn", Width: 100, Sortable: true, Template: this.coHauMonTemplate },

            { Field: "APGAR", Title: "APGAR", Width: 700, Sortable: true, Template: this.aPGARTemplate },

            { Field: "TinhTrang", Title: "Tình Trạng", Width: 300, Sortable: true, Template: this.tinhTrangTreSoSinhTemplate },
            { Field: "KetQuaXuLy", Title: "KQ Xử Lý", Width: 300, Sortable: true, Template: this.kqXuLyTemplate },
            { Field: "", Title: "", Width: 50, Sortable: true, Template: this.actionTemplate }
        ];
    }

    them() {
        let newItem = new DacĐiemTreSoSinh();
        newItem.Id = this.dataSourceTreSoSinhs.data.length + 1;
        this.dataSourceTreSoSinhs.data.push(newItem);
    }

    selectionGioiTinh(ev: any, dataItem: any) {
        if (ev != undefined && ev != null) {
            dataItem.GioiTinh = ev.DisplayName;
        }
        else {
            dataItem.GioiTinh = null;
        }
    }

    selectionTinhTrang(ev: any, dataItem: any) {
        if (ev != undefined && ev != null) {
            dataItem.TenTinhTrang = ev.DisplayName;
        }
        else {
            dataItem.TenTinhTrang = null;
        }
    }

    xoa(item: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.dataSourceTreSoSinhs.data.splice(this.dataSourceTreSoSinhs.data.findIndex(x => x == item), 1);
            }
        });
    }
}
