import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
    selector: 'app-chuan-doan-hinh-anh-list',
    templateUrl: './chuan-doan-hinh-anh-list.component.html',
    styleUrls: ['./chuan-doan-hinh-anh-list.component.scss']
})
export class ChuanDoanHinhAnhListComponent implements OnInit {
    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }

    documentType: DocumentType;
    gridColumns: any[] = [];
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild('hieuLucTemplate', { static: true }) hieuLucTemplate: TemplateRef<any>;

    ngOnInit() {
        this.documentType = DocumentType.DanhMucChuanDoanHinhAnh;
        this.gridColumns = [
            { Field: 'Ma', Title: 'Mã', Width: 80, Sortable: true, LinkDetail: true },
            { Field: 'Ten', Title: 'Tên', Width: 100, Sortable: true },
            { Field: 'TenTiengAnh', Title: 'Tên Tiếng Anh', Width: 140, Sortable: true },
            { Field: 'LoaiChuanDoanHinhAnhDisplay', Title: 'Loại Chẩn đoán Hình Ảnh', Width: 200, Sortable: true },
            { Field: 'MoTa', Title: 'Mô Tả', Width: 150, Sortable: true },
            { Field: 'HieuLuc', Title: 'Hiệu Lực', Width: 150, Sortable: true, Template: this.hieuLucTemplate }
        ];
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('ChuanDoanHinhAnh/ExportChuanDoanHinhAnh', self.gridChild._gridQueryInfo).subscribe(
                resultData => {
                    self.closePopupLoadingData();
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                        'ChanDoanHinhAnh' + dateTimeNow.getFullYear() + '.xlsx');
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
