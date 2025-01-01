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
import { GroupDescriptor } from '@progress/kendo-data-query';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-dich-vu-giuong-benh-vien-list',
    templateUrl: './dich-vu-giuong-benh-vien-list.component.html',
    styleUrls: ['./dich-vu-giuong-benh-vien-list.component.scss']
})
export class DichVuGiuongBenhVienListComponent implements OnInit {
    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }

    documentType: DocumentType;
    gridColumns: any[] = [];
    gridChildColumns: any[] = [];
    gridChildColumns2: any[] = [];
    urlGetDataGridChild = 'DichVuGiuongBenhVien/GetDataForGridChildAsync';
    urlGetTotalPageGridChild = 'DichVuGiuongBenhVien/GetTotalPageForGridChildAsync';
    urlGetDataGridChild2 = 'DichVuGiuongBenhVien/GetDataForGridChildBenhVienAsync';
    @ViewChild('gridDichVuGiuongCha', { static: false }) gridDichVuGiuongCha: GridComponent;
    urlGetTotalPageGridChild2 = 'DichVuGiuongBenhVien/GetTotalPageForGridChildBenhVienAsync';
    groups: GroupDescriptor[] = [{ field: 'LoaiGia' }];

    ngOnInit() {
        this.documentType = DocumentType.DanhMucDichVuGiuongTaiBenhVien;
        this.gridColumns = [
            { Field: 'Ma', Title: 'Mã', Width: 100, Sortable: true, LinkDetail: true },
            { Field: 'MaTT37', Title: 'Mã TT37', Width: 120, Sortable: true },
            { Field: 'Ten', Title: 'Tên', MinWidth: 300, Sortable: true },
            { Field: 'TenNoiThucHien', Title: 'Nơi thực hiện', Width: 250, Sortable: true },
            { Field: 'HangBenhVienDisplay', Title: 'Hạng Bệnh Viện', Width: 130, Sortable: true },
            { Field: 'LoaiGiuongDisplay', Title: 'Loại giường', Width: 100, Sortable: true },
            { Field: 'MoTa', Title: 'Mô tả', Width: 250, Sortable: true },
            { Field: 'HieuLucHienThi', Title: 'Hiệu lực', Width: 150, Sortable: true }
        ];

        this.gridChildColumns = [
            { Field: 'GiaHienThi', Title: 'Giá', Width: 50, Sortable: true, LinkDetail: false },
            { Field: 'TiLeBaoHiemThanhToan', Title: 'TLTT(%)', Width: 50, Sortable: true },
            { Field: 'TuNgayHienThi', Title: 'Từ ngày', Width: 100, Sortable: true, Dir: 'desc', DefaultSort: true },
            { Field: 'DenNgayHienThi', Title: 'Đến ngày', Width: 100, Sortable: true }
        ];
        this.gridChildColumns2 = [
            { Field: 'LoaiGia', Title: 'Loại Giá', Width: 217, Sortable: true, LinkDetail: false },
            { Field: 'GiaHienThi', Title: 'Giá', Width: 260, Sortable: true },
            { Field: 'TuNgayHienThi', Title: 'Từ ngày', Width: 500, Sortable: true, Dir: 'desc', DefaultSort: true },
            { Field: 'DenNgayHienThi', Title: 'Đến ngày', Width: 500, Sortable: true }
        ];
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('DichVuGiuongBenhVien/ExportDichVuGiuongBenhVien',
                self.gridDichVuGiuongCha._gridQueryInfo).subscribe(
                    resultData => {
                        self.closePopupLoadingData();
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                            'DichVuGiuongBenhVien' + dateTimeNow.getFullYear() + '.xlsx');
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
