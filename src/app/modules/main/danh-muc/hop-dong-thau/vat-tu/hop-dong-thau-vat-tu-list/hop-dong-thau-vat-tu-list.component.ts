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

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-hop-dong-thau-vat-tu-list',
    templateUrl: './hop-dong-thau-vat-tu-list.component.html',
    styleUrls: ['./hop-dong-thau-vat-tu-list.component.scss']
})
export class HopDongThauVatTuListComponent implements OnInit {
    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }

    documentType: DocumentType;
    gridColumns: any[] = [];
    gridChildColumns: any[] = [];
    urlGetDataGridChild = 'HopDongThauVatTu/GetDataForGridChildAsync';
    @ViewChild('gridHdtCha', { static: false }) gridHdtCha: GridComponent;
    urlGetTotalPageGridChild = 'HopDongThauVatTu/GetTotalPageForGridChildAsync';
    @ViewChild('giaTemplate', { static: true }) giaTemplate: TemplateRef<any>;

    ngOnInit() {
        this.documentType = DocumentType.DanhMucHopDongThauVatTu;
        this.gridColumns = [
            { Field: 'NhaThau', Title: 'Nhà Cung Cấp', MinWidth: 200, Sortable: true, ShowTooltip: true, LinkDetail: true },
            { Field: 'SoHopDong', Title: 'Số Hợp Đồng', Width: 150, Sortable: true },
            { Field: 'SoQuyetDinh', Title: 'Số Quyết Định', Width: 150, Sortable: true },
            { Field: 'CongBoDisplay', Title: 'Ngày Công Bố', Width: 150, Sortable: true },
            { Field: 'NgayKyDisplay', Title: 'Ngày Ký', Width: 150, Sortable: true },
            { Field: 'NgayHieuLucDisplay', Title: 'Ngày Hiệu Lực', Width: 150, Sortable: true },
            { Field: 'NgayHetHanDisplay', Title: 'Ngày Hết Hạn', Width: 150, Sortable: true },
            { Field: 'TenLoaiThau', Title: 'Loại Thầu', Width: 140, Sortable: true },
            { Field: 'NhomThau', Title: 'Nhóm Thầu', Width: 113, Sortable: true },
            { Field: 'GoiThau', Title: 'Gói Thầu', Width: 93, Sortable: true },
            { Field: 'Nam', Title: 'Năm', Width: 120, Sortable: true }
        ];

        this.gridChildColumns = [
            { Field: 'VatTu', Title: 'Vật Tư', Width: 200, Sortable: true },
            { Field: 'Gia', Title: 'Giá', Width: 150, Sortable: true, Template: this.giaTemplate },
            { Field: 'SoLuongDisplay', Title: 'Số Lượng', Width: 100, Sortable: true },
            { Field: 'SoLuongCungCapDisplay', Title: 'Số Lượng Đã Cung Cấp', Width: 100, Sortable: true }
        ];
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('HopDongThauVatTu/ExportHopDongThauVatTu',
                self.gridHdtCha._gridQueryInfo).subscribe(
                    resultData => {
                        self.closePopupLoadingData();
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                            'HopDongThauVatTu' + dateTimeNow.getFullYear() + '.xlsx');
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
