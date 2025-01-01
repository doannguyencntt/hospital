import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { AuthService } from 'src/app/core/services/auth.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-cap-quan-ly-benh-vien-list',
    templateUrl: './cap-quan-ly-benh-vien-list.component.html',
    styleUrls: ['./cap-quan-ly-benh-vien-list.component.scss']
})
export class CapQuanLyBenhVienListComponent implements OnInit {
    documentType: DocumentType;
    gridColumns: any[] = [];
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;

    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.DanhMucCapQuanLyBenhVien;
        this.gridColumns = [
            { Field: 'Ten', Title: 'Tên', Width: 200, Sortable: true, LinkDetail: true },
            { Field: 'MoTa', Title: 'Mô Tả', MinWidth: 400, Sortable: true }
        ];
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('CapQuanLyBenhVien/ExportCapQuanLyBenhVien', self.gridChild._gridQueryInfo).subscribe(
                resultData => {
                    self.closePopupLoadingData();
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                        'CapQuanLyBenhVien' + dateTimeNow.getFullYear() + '.xlsx');
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
