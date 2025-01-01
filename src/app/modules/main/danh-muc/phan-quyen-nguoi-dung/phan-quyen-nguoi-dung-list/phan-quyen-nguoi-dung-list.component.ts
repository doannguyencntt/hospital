import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import icEdit from '@iconify/icons-ic/twotone-edit';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icEye from '@iconify/icons-ic/twotone-remove-red-eye';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { ApiService } from 'src/app/core/services/api.service';
import { BaseService } from 'src/app/core/services/base.service';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phan-quyen-nguoi-dung-list',
    templateUrl: './phan-quyen-nguoi-dung-list.component.html',
    styleUrls: ['./phan-quyen-nguoi-dung-list.component.scss']
})
export class PhanQuyenNguoiDungListComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private router: Router,
        private apiService: ApiService,
        private baseService: BaseService,
    ) { }

    icMoreHoriz = icMoreHoriz;
    icEdit = icEdit;
    icDelete = icDelete;
    icEye = icEye;
    documentType: DocumentType;
    baseRoute: string;
    gridColumns: any[] = [];
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('gridPhanQuyenNguoiDung', { static: false }) gridPhanQuyenNguoiDung: GridComponent;

    ngOnInit() {
        this.documentType = DocumentType.Role;
        this.gridColumns = [
            { Field: 'Ten', Title: 'Tên', MinWidth: 200, Sortable: true, LinkDetail: true },
            { Field: 'LoaiNguoiDung', Title: 'Loại người dùng', Width: 150, Sortable: true },
            { Field: 'Quyen', Title: 'Quyền mặc định', Width: 150, Template: this.trangThaiTemplate },
            { Field: '', Title: '', Width: 60, Template: this.actionTemplate }
        ];
        this.baseRoute = '/danh-muc/phan-quyen-nguoi-dung';
    }

    edit(id: any) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.router.navigate([self.baseRoute + '/chinh-sua/' + id]);
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    delete(id: any) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.baseService.deleteById(id)
                        .subscribe(
                            () => {
                                if (self.gridPhanQuyenNguoiDung !== undefined) {
                                    self.gridPhanQuyenNguoiDung.mySelectionAfterDelete(id);
                                    self.gridPhanQuyenNguoiDung.search();
                                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa']));
                                }
                            },
                            (err: any) => {
                                self.notificationService.showError(err.Message);
                            });
                }
            });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('PhanQuyenNguoiDung/ExportPhanQuyenNguoiDung',
                self.gridPhanQuyenNguoiDung._gridQueryInfo).subscribe(
                    resultData => {
                        self.closePopupLoadingData();
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                            'PhanQuyenNguoiDung' + dateTimeNow.getFullYear() + '.xlsx');
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
