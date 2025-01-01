import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { GroupDescriptor } from '@progress/kendo-data-query';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-khoa-phong-nhan-vien-list',
    templateUrl: './khoa-phong-nhan-vien-list.component.html',
    styleUrls: ['./khoa-phong-nhan-vien-list.component.scss']
})
export class KhoaPhongNhanVienListComponent implements OnInit {
    documentType: DocumentType;
    @ViewChild('tenKhoaPhongTemplate', { static: true }) tenKhoaPhongTemplate: TemplateRef<any>;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    gridColumns: any[] = [];
    groups: GroupDescriptor[] = [{ field: 'TenKhoaPhong' }];

    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.DanhMucKhoaPhongNhanVien;
        this.gridColumns = [
            { Field: 'TenNhanVien', Title: 'Tên Nhân Viên', MinWidth: 250, Sortable: true, LinkDetail: true },
            { Field: 'TenKhoaPhong', Title: 'Tên Khoa Phòng', Width: 300, Sortable: true, TemplateGroupHeader: this.tenKhoaPhongTemplate }
        ];
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('KhoaPhongNhanVien/ExportKhoaPhongNhanVien', self.gridChild._gridQueryInfo).subscribe(
                resultData => {
                    self.closePopupLoadingData();
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                        'KhoaPhongNhanVien' + dateTimeNow.getFullYear() + '.xlsx');
                },
                (err: any) => {
                    self.notificationService.showError(err.Message);
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    showPopupLoadingData() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }

    closePopupLoadingData() {
        this.dialog.closeAll();
    }
}
