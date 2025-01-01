import { Component, OnInit, Optional, Inject, ViewChild, TemplateRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { GoiDichVuChuongTrinhMarketing } from '../goi-dv-marketing.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SortDescriptor } from '@progress/kendo-data-query';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-chi-tiet-su-dung-chuong-trinh-goi-dv',
    templateUrl: './chi-tiet-su-dung-chuong-trinh-goi-dv.component.html',
    styleUrls: ['./chi-tiet-su-dung-chuong-trinh-goi-dv.component.scss']
})
export class ChiTietSuDungChuongTrinhGoiDvComponent implements OnInit {
    @ViewChild('orderTemplate', { static: true }) orderTemplate: TemplateRef<any>;
    @ViewChild('ngayDangKyTemplate', { static: true }) ngayDangKyTemplate: TemplateRef<any>;
    goiMarketing = {} as GoiDichVuChuongTrinhMarketing;
    @ViewChild('gridYeuCau', { static: false }) gridYeuCau: GridComponent;
    constructor(private dialog: MatDialog, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
        this.goiMarketing = { ...data.Model.data };
    }
    sort: SortDescriptor[] = [
        {
            field: 'NgayDangKy',
            dir: 'desc'
        },
        {
            field: 'Id',
            dir: 'asc'
        }
    ];

    gridColumn: any[] = [];
    icClose = icClose;
    urlGetData = `GoiDichVuChuongTrinhMarketing/GetDataForGridYeuCauGoiDichVuAsync`;
    urlGetTotalPage = `GoiDichVuChuongTrinhMarketing/GetTotalPageForGridYeuCauGoiDichVuAsync`;
    icSearch = icSearch;
    searchCtrl = new FormControl();
    searchString = null;

    ngOnInit() {
        this.gridColumn = [
            { Field: '', Title: 'STT', Width: 44, Template: this.orderTemplate },
            { Field: 'MaBn', Title: 'Mã NB', ShowTooltip: true, Sortable: true, Width: 90 },
            {
                Field: 'TenBn', Title: 'Tên NB', Width: 186, Sortable: true, ShowTooltip: true
            },
            {
                Field: 'DiaChi', Title: 'Địa Chỉ', Width: 504, Sortable: true, ShowTooltip: true
            },
            { Field: 'NgayDangKy', Title: 'Ngày Đăng Ký', Sortable: true, Width: 258, Template: this.ngayDangKyTemplate }
        ];
        $('app-chi-tiet-su-dung-chuong-trinh-goi-dv').css('flex-direction', 'column');
        setTimeout(() => {
            $('app-chi-tiet-su-dung-chuong-trinh-goi-dv .mat-dialog-title').css('flex-direction', 'row');
            $('app-chi-tiet-su-dung-chuong-trinh-goi-dv .mat-dialog-content').css('padding-top', '24px');
        }, 100);
    }

    close() {
        this.dialog.closeAll();
    }

    onKey(event: any) {
        if (event.keyCode === 13) {
            this.timKiem();
        }
    }

    timKiem(isNull = false) {
        this.gridYeuCau.searchString = isNull ? '' : this.searchString;
        this.gridYeuCau.search();
    }

    searchChange() {
        if (!this.searchString) {
            setTimeout(() => {
                this.timKiem(true);
            }, 500);
        }
    }
}
