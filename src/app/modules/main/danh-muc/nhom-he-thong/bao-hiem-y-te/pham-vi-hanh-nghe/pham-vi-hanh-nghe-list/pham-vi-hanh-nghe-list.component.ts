import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-pham-vi-hanh-nghe-list',
    templateUrl: './pham-vi-hanh-nghe-list.component.html',
    styleUrls: ['./pham-vi-hanh-nghe-list.component.scss']
})
export class PhamViHanhNgheListComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService) { }

    documentType: DocumentType;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    gridColumns: any[] = [];

    ngOnInit() {
        this.documentType = DocumentType.DanhMucPhamViHanhNghe;
        this.gridColumns = [
            { Field: 'Ten', Title: 'Tên Đầy Đủ', Width: 200, Sortable: true, LinkDetail: true },
            { Field: 'Ma', Title: 'Mã', Width: 120, Sortable: true },
            { Field: 'MoTa', Title: 'Mô Tả', MinWidth: 400, Sortable: true }
        ];
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('PhamViHanhNghe/ExportPhamViHanhNghe', self.gridChild._gridQueryInfo).subscribe(
                resultData => {
                    self.closePopupLoadingData();
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                        'PhamViHanhNghe' + dateTimeNow.getFullYear() + '.xlsx');
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
