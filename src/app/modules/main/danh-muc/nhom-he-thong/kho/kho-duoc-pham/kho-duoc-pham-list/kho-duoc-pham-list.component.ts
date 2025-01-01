import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-kho-duoc-pham-list',
    templateUrl: './kho-duoc-pham-list.component.html',
    styleUrls: ['./kho-duoc-pham-list.component.scss']
})
export class KhoDuocPhamListComponent implements OnInit {
    constructor(private dialog: MatDialog, private notificationService: NotificationService, private apiService: ApiService, private authService: AuthService, private router: Router) { }

    expression = false;
    documentType: DocumentType;
    gridColumns: any[] = [];

    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
     @ViewChild('defaultTemplate', { static: true }) defaultTemplate: TemplateRef<any>;

    ngOnInit() {
        this.documentType = DocumentType.DanhMucKhoDuocPham;

        this.gridColumns = [
            { Field: 'Ten', Title: 'Tên kho', Width: 300, Sortable: true, LinkDetail: true },
            { Field: 'KhoaPhong', Title: 'Khoa', Width: 150, Sortable: true },
            { Field: 'PhongBenhVien', Title: 'Phòng', Width: 150, Sortable: true },
            { Field: 'TextLoaiKho', Title: 'Loại Kho', Width: 200, Sortable: true },
            { Field: 'LoaiDuocPhamVatTu', Title: 'Kho chứa', Width: 100, Sortable: true },
            { Field: 'IsDefault', Title: 'Kho mặc định', Width: 100, Sortable: true,Template:this.defaultTemplate }
        ];
    }

    exportExcel() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>('KhoDuocPham/ExportKhoDuocPham', this.gridChild._gridQueryInfo).subscribe(res => {
                const dateTimeNow = new Date();
                CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'KhoDuocPham' + dateTimeNow.getFullYear() + '.xlsx');
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
