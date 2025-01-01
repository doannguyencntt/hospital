import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SortDescriptor } from '@progress/kendo-data-query';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-cong-ty-bhtn-list',
    templateUrl: './cong-ty-bhtn-list.component.html',
    styleUrls: ['./cong-ty-bhtn-list.component.scss']
})
export class CongTyBhtnListComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService
    ) { }

    sort: SortDescriptor[] = [{
        field: 'Id',
        dir: 'desc'
    }];

    icicdone = icicdone;
    icClose = icClose;
    documentType: DocumentType;
    gridColumns: any[] = [];
    @ViewChild('hinhThucBaoHiemTemplate', { static: true }) hinhThucBaoHiemTemplate: TemplateRef<any>;
    @ViewChild('phamViBaoHiemTemplate', { static: true }) phamViBaoHiemTemplate: TemplateRef<any>;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;

    ngOnInit() {
        this.documentType = DocumentType.DanhMucCongTyBhtn;
        this.gridColumns = [
            { Field: 'Ma', Title: 'Mã', Width: 65, Sortable: true, LinkDetail: true },
            { Field: 'Ten', Title: 'Tên', MinWidth: 200, Sortable: true, ShowTooltip: true },
            { Field: 'Email', Title: 'Email', Width: 345, Sortable: true, ShowTooltip: true },
            { Field: 'SoDienThoai', Title: 'SĐT', Width: 134, Sortable: true, ShowTooltip: true },
            { Field: 'MaSoThue', Title: 'Mã Số Thuế', Width: 134, Sortable: true, ShowTooltip: true },
            { Field: 'DonVi', Title: 'Đơn Vị', Width: 134, Sortable: true, ShowTooltip: true },
            { Field: 'DiaChi', Title: 'Địa Chỉ', Width: 380, Sortable: true, ShowTooltip: true },
            {
                Field: 'HinhThucBaoHiem', Title: 'Hình Thức Bảo Hiểm', Width: 155,
                ShowTooltip: true, Sortable: true, Template: this.hinhThucBaoHiemTemplate
            },
            {
                Field: 'PhamViBaoHiem', Title: 'Phạm Vi Bảo Hiểm', Width: 155,
                ShowTooltip: true, Sortable: true, Template: this.phamViBaoHiemTemplate
            }
        ];
    }

    exportExcel() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>('CongTyBhtn/ExportCongTyBhtn', this.gridChild._gridQueryInfo).subscribe(res => {
                const dateTimeNow = new Date();
                CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'CongTyBhtn' + dateTimeNow.getFullYear() + '.xlsx');
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
