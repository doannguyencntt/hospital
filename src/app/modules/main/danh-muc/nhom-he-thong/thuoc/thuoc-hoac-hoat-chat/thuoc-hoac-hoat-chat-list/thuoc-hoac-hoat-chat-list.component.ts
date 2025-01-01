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
    selector: 'app-thuoc-hoac-hoat-chat-list',
    templateUrl: './thuoc-hoac-hoat-chat-list.component.html',
    styleUrls: ['./thuoc-hoac-hoat-chat-list.component.scss']
})
export class ThuocHoacHoatChatListComponent implements OnInit {
    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }

    documentType: DocumentType;
    gridColumns: any[] = [];
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild('hoiChanTemplate', { static: true }) hoiChanTemplate: TemplateRef<any>;
    @ViewChild('dieuKienThanhToanTemplate', { static: true }) dieuKienThanhToanTemplate: TemplateRef<any>;
    @ViewChild('benhVienHang1Template', { static: true }) benhVienHang1Template: TemplateRef<any>;
    @ViewChild('benhVienHang2Template', { static: true }) benhVienHang2Template: TemplateRef<any>;
    @ViewChild('benhVienHang3Template', { static: true }) benhVienHang3Template: TemplateRef<any>;
    @ViewChild('benhVienHang4Template', { static: true }) benhVienHang4Template: TemplateRef<any>;

    ngOnInit() {
        this.documentType = DocumentType.DanhMucThuocHoacHoatChat;
        this.gridColumns = [
            { Field: 'Ma', Title: 'Mã', Width: 100, Sortable: true, LinkDetail: true },
            { Field: 'Ten', Title: 'Tên', Width: 300, Sortable: true },
            { Field: 'STTHoatChat', Title: 'Số Thứ Tự Hoạt Chất', Width: 200, Sortable: true },
            { Field: 'STTThuoc', Title: 'Số Thứ Tự Thuốc', Width: 170, Sortable: true },
            { Field: 'MaATC', Title: 'Mã ATC', Width: 100, Sortable: true },
            { Field: 'DuongDung', Title: 'Loại Đường Dùng', Width: 180, Sortable: true },
            { Field: 'HoiChan', Title: 'Hôi Chân', Width: 130, Sortable: true, Template: this.hoiChanTemplate },
            { Field: 'TyLeBaoHiemThanhToan', Title: 'Tỷ Lệ Bảo Hiểm Thanh Toán', Width: 240, Sortable: true },
            {
                Field: 'CoDieuKienThanhToan', Title: 'Có Thể Thanh Toán',
                Width: 200, Sortable: true, Template: this.dieuKienThanhToanTemplate
            },
            { Field: 'MoTa', Title: 'Mô Tả', MinWidth: 300, Sortable: true },
            { Field: 'NhomThuoc', Title: 'Nhóm Thuốc', Width: 140, Sortable: true },
            { Field: 'BenhVienHang1', Title: 'Bệnh Viện Hạng I', Width: 165, Sortable: true, Template: this.benhVienHang1Template },
            { Field: 'BenhVienHang2', Title: 'Bệnh Viện Hạng II', Width: 168, Sortable: true, Template: this.benhVienHang2Template },
            { Field: 'BenhVienHang3', Title: 'Bệnh Viện Hạng III', Width: 170, Sortable: true, Template: this.benhVienHang3Template },
            { Field: 'BenhVienHang4', Title: 'Bệnh Viện Hạng IV', Width: 170, Sortable: true, Template: this.benhVienHang4Template }
        ];
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('ThuocHoacHoatChat/ExportThuocHoacHoatChat', self.gridChild._gridQueryInfo).subscribe(
                resultData => {
                    self.closePopupLoadingData();
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                        'ThuocHoacHoatChat' + dateTimeNow.getFullYear() + '.xlsx');
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
