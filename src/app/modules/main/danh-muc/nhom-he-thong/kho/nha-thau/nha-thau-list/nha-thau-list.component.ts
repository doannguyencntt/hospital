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
    selector: 'app-nha-thau-list',
    templateUrl: './nha-thau-list.component.html',
    styleUrls: ['./nha-thau-list.component.scss']
})
export class NhaThauListComponent implements OnInit {
    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }

    documentType: DocumentType;
    gridColumns: any[] = [];
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;

    ngOnInit() {
        this.documentType = DocumentType.DanhMucNhaThau;
        this.gridColumns = [
            { Field: 'Ten', Title: 'Tên', MinWidth: 150, Sortable: true, LinkDetail: true },
            { Field: 'DiaChi', Title: 'Địa Chỉ', Width: 180, Sortable: true },
            { Field: 'MaSoThue', Title: 'Mã Số Thuế', Width: 150, Sortable: true },
            { Field: 'TaiKhoanNganHang', Title: 'Tài Khoản Ngân Hàng', Width: 200, Sortable: true },
            { Field: 'NguoiDaiDien', Title: 'Người Đại Diện', Width: 150, Sortable: true },
            { Field: 'NguoiLienHe', Title: 'Người Liên Hệ', Width: 150, Sortable: true },
            { Field: 'SoDienThoaiDisplay', Title: 'Số Điện Thoại Liên Hệ', Width: 200, Sortable: true },
            { Field: 'EmailLienHe', Title: 'Email Liên Hệ', Width: 240, Sortable: true }
        ];
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('NhaThau/ExportNhaThau', self.gridChild._gridQueryInfo).subscribe(
                resultData => {
                    self.closePopupLoadingData();
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                        'NhaThau' + dateTimeNow.getFullYear() + '.xlsx');
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
