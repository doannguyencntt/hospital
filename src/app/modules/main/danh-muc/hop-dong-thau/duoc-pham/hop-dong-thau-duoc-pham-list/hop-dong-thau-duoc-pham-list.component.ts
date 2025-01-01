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
    selector: 'app-hop-dong-thau-duoc-pham-list',
    templateUrl: './hop-dong-thau-duoc-pham-list.component.html',
    styleUrls: ['./hop-dong-thau-duoc-pham-list.component.scss']
})
export class HopDongThauDuocPhamListComponent implements OnInit {
    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }

    documentType: DocumentType;
    gridColumns: any[] = [];
    gridChildColumns: any[] = [];
    urlGetDataGridChild = 'HopDongThauDuocPham/GetDataForGridChildAsync';
    @ViewChild('gridHdtCha', { static: false }) gridHdtCha: GridComponent;
    urlGetTotalPageGridChild = 'HopDongThauDuocPham/GetTotalPageForGridChildAsync';
    @ViewChild('giaTemplate', { static: true }) giaTemplate: TemplateRef<any>;

    ngOnInit() {
        this.documentType = DocumentType.DanhMucHopDongThauDuocPham;
        this.gridColumns = [
            { Field: 'NhaThau', Title: 'Nhà Cung Cấp', Width: 150, Sortable: true, ShowTooltip: true, LinkDetail: true },
            { Field: 'SoHopDong', Title: 'Số Hợp Đồng', Width: 150, Sortable: true },
            { Field: 'SoQuyetDinh', Title: 'Số Quyết Định', Width: 150, Sortable: true },
            { Field: 'CongBoDisplay', Title: 'Ngày Công Bố', Width: 150, Sortable: true },
            { Field: 'NgayKyDisplay', Title: 'Ngày Ký', Width: 150, Sortable: true },
            { Field: 'NgayHieuLucDisplay', Title: 'Ngày Hiệu Lực', Width: 150, Sortable: true },
            { Field: 'NgayHetHanDisplay', Title: 'Ngày Hết Hạn', Width: 150, Sortable: true },
            { Field: 'TenLoaiThau', Title: 'Loại Thầu', Width: 140, Sortable: true },
            { Field: 'TenLoaiThuocThau', Title: 'Loại Thuốc Thầu', Width: 170, Sortable: true },
            { Field: 'NhomThau', Title: 'Nhóm Thầu', Width: 150, Sortable: true },
            { Field: 'GoiThau', Title: 'Gói Thầu', Width: 150, Sortable: true },
            { Field: 'Nam', Title: 'Năm', Width: 120, Sortable: true }
        ];

        this.gridChildColumns = [
            { Field: 'DuocPham', Title: 'Dược Phẩm', Width: 200, Sortable: true },
            { Field: 'Gia', Title: 'Giá', Width: 150, Sortable: true, Template: this.giaTemplate },
            { Field: 'SoLuongDisplay', Title: 'Số Lượng', Width: 100, Sortable: true },
            { Field: 'SoLuongCungCapDisplay', Title: 'Số Lượng Đã Cung Cấp', Width: 100, Sortable: true }
        ];
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('HopDongThauDuocPham/ExportHopDongThauDuocPham',
                self.gridHdtCha._gridQueryInfo).subscribe(
                    resultData => {
                        self.closePopupLoadingData();
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                            'HopDongThauDuocPham' + dateTimeNow.getFullYear() + '.xlsx');
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
