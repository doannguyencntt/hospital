import { Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-loai-phong-benh-noi-tru-list',
    templateUrl: './loai-phong-benh-noi-tru-list.component.html',
    styleUrls: ['./loai-phong-benh-noi-tru-list.component.scss']
})
export class LoaiPhongBenhNoiTruListComponent implements OnInit {
    documentType: DocumentType;
    gridColumns: any[] = [];
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;

    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) {
    }

    ngOnInit() {
        this.documentType = DocumentType.DanhMucLoaiPhongBenh;
        this.gridColumns = [
            { Field: 'Ten', Title: 'Tên', Width: 200, Sortable: true, LinkDetail: true },
            { Field: 'MoTa', Title: 'Mô Tả', MinWidth: 400, Sortable: true }
        ];
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('LoaiPhongBenhNoiTru/ExportLoaiPhongBenhNoiTru',
                self.gridChild._gridQueryInfo).subscribe(
                    resultData => {
                        self.closePopupLoadingData();
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                            'LoaiPhongBenhNoiTru' + dateTimeNow.getFullYear() + '.xlsx');
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
