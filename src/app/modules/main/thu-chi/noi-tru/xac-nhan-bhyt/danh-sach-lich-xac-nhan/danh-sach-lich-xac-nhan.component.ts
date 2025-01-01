import { Component, OnInit, Optional, Inject, ViewChild, TemplateRef } from '@angular/core';
import { DanhSachLichSuXacNhan } from '../xac-nhan-bhyt.model';
import { GroupDescriptor } from '@progress/kendo-data-query';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-danh-sach-lich-xac-nhan',
    templateUrl: './danh-sach-lich-xac-nhan.component.html',
    styleUrls: ['./danh-sach-lich-xac-nhan.component.scss']
})
export class DanhSachLichXacNhanComponent implements OnInit {
    danhSachLichSuVaTitle: any = null;
    tenDichVu: string = null;
    @ViewChild('orderTemplate', { static: true }) orderTemplate: TemplateRef<any>;
    @ViewChild('dgbhTemplate', { static: true }) dgbhTemplate: TemplateRef<any>;
    @ViewChild('ttbhTemplate', { static: true }) ttbhTemplate: TemplateRef<any>;
    @ViewChild('tlDvTemplate', { static: true }) tlDvTemplate: TemplateRef<any>;
    @ViewChild('mucHuongTemplate', { static: true }) mucHuongTemplate: TemplateRef<any>;
    @ViewChild('dgbhChiTraTemplate', { static: true }) dgbhChiTraTemplate: TemplateRef<any>;
    @ViewChild('ttbhChiTraTemplate', { static: true }) ttbhChiTraTemplate: TemplateRef<any>;

    constructor(private dialog: MatDialog, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
        this.danhSachLichSuVaTitle = data.Model;
    }
    gridHistory: any[] = [];
    icClose = icClose;

    danhSachLichSuKhamBenh: Array<DanhSachLichSuXacNhan> = [];
    dataSourceDanhSachLichSuXacNhan = {
        data: [],
        total: 0
    };

    ngOnInit() {
        const self = this;
        self.tenDichVu = self.danhSachLichSuVaTitle.title;
        self.danhSachLichSuKhamBenh = self.danhSachLichSuVaTitle.listHistory;
        self.dataSourceDanhSachLichSuXacNhan.data = self.danhSachLichSuKhamBenh;
        self.dataSourceDanhSachLichSuXacNhan.total = self.danhSachLichSuKhamBenh.length;
        self.gridHistory = [
            { Field: '', Title: 'STT', Width: 44, Template: self.orderTemplate },
            { Field: 'SoLuong', Title: 'Số Lượng', ShowTooltip: true, Width: 86 },
            {
                Field: 'DgBh', Title: 'ĐGBHYT', Width: 89, ShowTooltip: true, Template: self.dgbhTemplate
            },
            {
                Field: 'TtBh', Title: 'Thành Tiền BHYT', Width: 133, Template: self.ttbhTemplate
            },
            { Field: 'TiLeDv', Title: 'Tỉ Lệ Theo DV', Width: 104, Template: self.tlDvTemplate },
            {
                Field: 'MucHuong', Title: 'Mức Hưởng', Width: 95, Template: self.mucHuongTemplate
            },
            {
                Field: 'DgBhChiTra', Title: 'ĐGBHYT Chi Trả', Width: 122, Template: self.dgbhChiTraTemplate
            },
            {
                Field: 'TtBhChiTra', Title: 'TTBHYT Chi Trả', Width: 122, Template: self.ttbhChiTraTemplate
            },
            { Field: 'NgayDuyet', Title: 'Ngày Cập Nhật', Width: 153 },
            { Field: 'TenNhanVien', Title: 'Người Cập Nhật', Width: 156 },
        ];
    }

    close() {
        this.dialog.closeAll();
    }
}
