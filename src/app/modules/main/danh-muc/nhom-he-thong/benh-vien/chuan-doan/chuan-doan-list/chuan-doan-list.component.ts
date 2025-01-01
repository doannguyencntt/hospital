import { Component, OnInit, ViewChild } from '@angular/core';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icBlock from '@iconify/icons-ic/twotone-delete';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-chuan-doan-list',
    templateUrl: './chuan-doan-list.component.html',
    styleUrls: ['./chuan-doan-list.component.scss']
})
export class ChuanDoanListComponent implements OnInit {
    icMoreHoriz = icMoreHoriz;
    icBlock = icBlock;
    icEdit = icEdit;
    documentType: DocumentType;
    gridColumns: any[] = [];
    gridChildColumns: any[] = [];
    urlGetDataGridChild = 'ChuanDoan/GetDataForGridChildAsync';
    urlGetTotalPageGridChild = 'ChuanDoan/GetTotalPageForGridChildAsync';
    @ViewChild('chanDoanGridCha', { static: false }) chanDoanGridCha: GridComponent;
    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.DanhMucChuanDoan;
        this.gridColumns = [
            { Field: 'Ma', Title: 'Mã', Width: 100, Sortable: true, LinkDetail: true },
            { Field: 'TenTiengViet', Title: 'Tên Tiếng Việt', Width: 400, Sortable: true },
            { Field: 'TenTiengAnh', Title: 'Tên Tiếng Anh', MinWidth: 200, Sortable: true }
        ];
        this.gridChildColumns = [
            { Field: 'Ma', Title: 'Mã', Width: 100, Sortable: true },
            { Field: 'TenTiengViet', Title: 'Tên Tiếng Việt', Width: 400, Sortable: true },
            { Field: 'TenTiengAnh', Title: 'Tên Tiếng Anh', MinWidth: 200, Sortable: true }
        ];
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('ChuanDoan/ExportChanDoan',
                self.chanDoanGridCha._gridQueryInfo).subscribe(
                    resultData => {
                        self.closePopupLoadingData();
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                            'ChanDoan' + dateTimeNow.getFullYear() + '.xlsx');
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
