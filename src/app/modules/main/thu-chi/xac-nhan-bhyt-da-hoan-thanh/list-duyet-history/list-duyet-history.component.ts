import { Component, OnInit, Optional, Inject, TemplateRef, ViewChild } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-list-duyet-history',
    templateUrl: './list-duyet-history.component.html',
    styleUrls: ['./list-duyet-history.component.scss']
})

export class ListDuyetHistoryComponent implements OnInit {
    danhSachLichSuVaTitle: any = null;
    tenDichVu: string = null;
    danhSachLichSuKhamBenh: any[] = [];
    icClose = icClose;
    gridHistory: any[] = [];
    dataSourceDanhSachLichSuXacNhan = {
      data: [],
      total: 0
  };
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

    ngOnInit() {
        this.tenDichVu = this.danhSachLichSuVaTitle.title;
        this.danhSachLichSuKhamBenh = this.danhSachLichSuVaTitle.listHistory;
        this.dataSourceDanhSachLichSuXacNhan.data = this.danhSachLichSuKhamBenh;
        this.dataSourceDanhSachLichSuXacNhan.total = this.danhSachLichSuKhamBenh.length;
        this.gridHistory = [
            { Field: '', Title: 'STT', Width: 44, Template: this.orderTemplate },
            { Field: 'SoLuong', Title: 'Số Lượng', ShowTooltip: true, Width: 86 },
            {
                Field: 'DgBh', Title: 'ĐGBHYT', Width: 89, ShowTooltip: true, Template: this.dgbhTemplate
            },
            {
                Field: 'TtBh', Title: 'Thành Tiền BHYT', Width: 133, Template: this.ttbhTemplate
            },
            { Field: 'TiLeDv', Title: 'Tỉ Lệ Theo DV', Width: 104, Template: this.tlDvTemplate },
            {
                Field: 'MucHuong', Title: 'Mức Hưởng', Width: 95, Template: this.mucHuongTemplate
            },
            {
                Field: 'DgBhChiTra', Title: 'ĐGBHYT Chi Trả', Width: 122, Template: this.dgbhChiTraTemplate
            },
            {
                Field: 'TtBhChiTra', Title: 'TTBHYT Chi Trả', Width: 122, Template: this.ttbhChiTraTemplate
            },
            { Field: 'NgayDuyet', Title: 'Ngày Cập Nhật', Width: 153 },
            { Field: 'TenNhanVien', Title: 'Người Cập Nhật', Width: 156 },
        ];
    }

    close() {
        this.dialog.closeAll();
    }
}
