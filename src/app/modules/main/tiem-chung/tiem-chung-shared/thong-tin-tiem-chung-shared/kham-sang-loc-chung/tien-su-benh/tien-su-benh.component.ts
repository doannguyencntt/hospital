import { Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { BenhNhanTiemVacxinTienSuBenh, DataSourceTienSuBenh, YeuCauDichVuKyThuat } from '../../../../tiem-chung.model';

import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';

@Component({
  selector: 'app-tien-su-benh',
  templateUrl: './tien-su-benh.component.html',
  styleUrls: ['./tien-su-benh.component.scss']
})

export class TienSuBenhComponent implements OnInit {
    currentDate: Date = new Date();

    tienSuBenhColumns: any[] = [];
    dataSourceTienSuBenh: DataSourceTienSuBenh = {
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
    @Input() isTienSuBenhReadOnly: boolean = false;

    @ViewChild('loaiTienSuTemplate', { static: true }) loaiTienSuTemplate: TemplateRef<any>;
    @ViewChild('tenBenhTemplate', { static: true }) tenBenhTemplate: TemplateRef<any>;
    @ViewChild('actionTienSuBenhTemplate', { static: true }) actionTienSuBenhTemplate: TemplateRef<any>;

    constructor(private dialog: MatDialog, private notificationService: NotificationService,
                private authService: AuthService, private apiService: ApiService) { }

    ngOnInit() {
        this.tienSuBenhColumns = [
            { Field: 'LoaiTienSu', Title: 'Loại tiền sử', Width: 100, Template: this.loaiTienSuTemplate },
            { Field: 'TenBenh', Title: 'Tên bệnh', Width: 400, Template: this.tenBenhTemplate },
            { Field: 'Action', Title: '', Width: 50, Template: this.actionTienSuBenhTemplate }
        ];

        if(this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhan.BenhNhanTiemVacxinTienSuBenhs) {
            this.dataSourceTienSuBenh.data = this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhan.BenhNhanTiemVacxinTienSuBenhs;
            this.dataSourceTienSuBenh.total = this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhan.BenhNhanTiemVacxinTienSuBenhs.length;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.thongTinBenhNhan && changes.thongTinBenhNhan.currentValue) {
            this.dataSourceTienSuBenh.data = this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhan.BenhNhanTiemVacxinTienSuBenhs;
            this.dataSourceTienSuBenh.total = this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhan.BenhNhanTiemVacxinTienSuBenhs.length;
        };
    }

    themTienSuBenh() {
        const tienSuBenhNew = new BenhNhanTiemVacxinTienSuBenh();

        tienSuBenhNew.Id = 0;
        tienSuBenhNew.BenhNhanId = this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhanId;

        this.dataSourceTienSuBenh.data.push(tienSuBenhNew);
        this.dataSourceTienSuBenh.total++;
        
        this.evtModelOnChange();
    }

    xoaTienSuBenh(item: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.dataSourceTienSuBenh.data.splice(this.dataSourceTienSuBenh.data.findIndex(x => x === item), 1);
                this.notificationService.showSuccess('Đã xóa tiền sử bệnh thành công');
                
                this.evtModelOnChange();
            }
        });
    }

    evtModelOnChange() {
        this.thongTinBenhNhan.isDataKhamSangLocChungChange = true;
    }
}