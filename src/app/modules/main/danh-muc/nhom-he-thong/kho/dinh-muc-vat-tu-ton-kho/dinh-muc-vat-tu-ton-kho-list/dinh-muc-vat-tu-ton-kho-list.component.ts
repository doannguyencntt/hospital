import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { TemplateRef } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-dinh-muc-vat-tu-ton-kho-list',
    templateUrl: './dinh-muc-vat-tu-ton-kho-list.component.html',
    styleUrls: ['./dinh-muc-vat-tu-ton-kho-list.component.scss']
})

export class DinhMucVatTuTonKhoListComponent implements OnInit {
    documentType: DocumentType;
    gridColumns: any[] = [];
    @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
    @ViewChild('tonToiThieuTemplate', { static: true }) tonToiThieuTemplate: TemplateRef<any>;
    @ViewChild('tonToiDaTemplate', { static: true }) tonToiDaTemplate: TemplateRef<any>;
    constructor(
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.DanhMucDinhMucVatTuTonKho;
        this.gridColumns = [
            { Field: 'Kho', Title: 'Kho', Width: 114, Sortable: true },
            { Field: 'TenVt', Title: 'Vật Tư', Width: 345, Sortable: true, ShowTooltip: true, LinkDetail: true },
            { Field: 'TonToiThieu', Title: 'Tồn Tối Thiểu', Width: 135, Sortable: true, Template: this.tonToiThieuTemplate },
            { Field: 'TonToiDa', Title: 'Tồn Tối Đa', Width: 130, Sortable: true, Template: this.tonToiDaTemplate },
            { Field: 'SoNgayTruocKhiHetHan', Title: 'Số Ngày Trước Khi Hết Hạn', Width: 250, Sortable: true },
            { Field: 'MoTa', Title: 'Mô Tả', MinWidth: 350, Sortable: true },
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
            this.apiService.postExportExcel<string>
                ('DinhMucVatTuTonKho/ExportDinhMucVatTuTonKho', this.gridChild._gridQueryInfo).subscribe(res => {
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'DinhMucVatTuTonKho' + dateTimeNow.getFullYear() + '.xlsx');
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
