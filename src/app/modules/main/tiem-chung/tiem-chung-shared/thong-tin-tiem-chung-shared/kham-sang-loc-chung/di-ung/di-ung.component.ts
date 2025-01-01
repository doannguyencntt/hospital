import { Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DataSourceDiUng, YeuCauDichVuKyThuat, BenhNhanTiemVacxinDiUngThuoc } from '../../../../tiem-chung.model';
import { LoaiDiUngTiemVacxin } from 'src/app/shared/enum/tiem-vacxin.enum';

import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';

@Component({
  selector: 'app-di-ung',
  templateUrl: './di-ung.component.html',
  styleUrls: ['./di-ung.component.scss']
})

export class DiUngComponent implements OnInit {
    currentDate: Date = new Date();
    loaiDiUng = LoaiDiUngTiemVacxin;

    diUngColumns: any[] = [];
    dataSourceDiUng: DataSourceDiUng = {
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
    @Input() isDiUngThuocReadOnly: boolean = false;

    @ViewChild('loaiDiUngTemplate', { static: true }) loaiDiUngTemplate: TemplateRef<any>;
    @ViewChild('tenDiUngTemplate', { static: true }) tenDiUngTemplate: TemplateRef<any>;
    @ViewChild('bieuHienDiUngTemplate', { static: true }) bieuHienDiUngTemplate: TemplateRef<any>;
    @ViewChild('mucDoTemplate', { static: true }) mucDoTemplate: TemplateRef<any>;
    @ViewChild('actionDiUngTemplate', { static: true }) actionDiUngTemplate: TemplateRef<any>;
    
    constructor(private dialog: MatDialog, private notificationService: NotificationService) { }

    ngOnInit() {
        this.diUngColumns = [
            { Field: 'LoaiDiUng', Title: 'Loại dị ứng', Width: 120, Template: this.loaiDiUngTemplate },
            { Field: 'TenDiUng', Title: 'Tên dị ứng', Width: 400, Template: this.tenDiUngTemplate },
            { Field: 'BieuHienDiUng', Title: 'Biểu hiện dị ứng', Width: 400, Template: this.bieuHienDiUngTemplate },
            { Field: 'MucDo', Title: 'Mức độ', Width: 400, Template: this.mucDoTemplate },
            { Field: 'Action', Title: '', Width: 50, Template: this.actionDiUngTemplate }
        ];

        if(this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhan.BenhNhanTiemVacxinDiUngThuocs) {
            this.dataSourceDiUng.data = this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhan.BenhNhanTiemVacxinDiUngThuocs;
            this.dataSourceDiUng.total = this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhan.BenhNhanTiemVacxinDiUngThuocs.length;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.thongTinBenhNhan && changes.thongTinBenhNhan.currentValue) {
            this.dataSourceDiUng.data = this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhan.BenhNhanTiemVacxinDiUngThuocs;
            this.dataSourceDiUng.total = this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhan.BenhNhanTiemVacxinDiUngThuocs.length;
        };
    }

    themDiUng() {
        const diUnghNew = new BenhNhanTiemVacxinDiUngThuoc();

        diUnghNew.Id = 0;
        diUnghNew.BenhNhanId = this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhanId;;

        this.dataSourceDiUng.data.push(diUnghNew);
        this.dataSourceDiUng.total++;
        
        this.evtModelOnChange();
    }

    suaDiUng(item: any) {
        item.IsEditable = true;
    }

    xoaDiUng(item: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.dataSourceDiUng.data.splice(this.dataSourceDiUng.data.findIndex(x => x === item), 1);
                this.notificationService.showSuccess('Đã xóa dị ứng thành công');

                this.evtModelOnChange();
            }
        });
    }

    evtModelOnChange() {
        this.thongTinBenhNhan.isDataKhamSangLocChungChange = true;
    }

    chonThuoc(evt, dataItem){
        dataItem.TenDiUng = evt ? evt.DisplayName : null;
    }
}