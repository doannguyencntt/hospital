import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiService } from 'src/app/core/services/api.service';
import icicdone from '@iconify/icons-ic/twotone-done';
import { GroupDescriptor } from '@progress/kendo-data-query';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phong-benh-vien-list',
    templateUrl: './phong-benh-vien-list.component.html',
    styleUrls: ['./phong-benh-vien-list.component.scss']
})
export class PhongBenhVienListComponent implements OnInit {
    icClose = icClose;
    icicdone = icicdone;
    documentType: DocumentType;
    gridColumns: any[] = [];
    groups: GroupDescriptor[] = [{ field: 'TenKhoaPhong' }];
    @ViewChild('tenKhoaPhongTemplate', { static: true }) tenKhoaPhongTemplate: TemplateRef<any>;
    @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;

    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService) { }

    ngOnInit() {
        this.documentType = DocumentType.DanhMucKhoaPhongPhongKham;
        this.gridColumns = [
            { Field: 'Ma', Title: 'Mã', Width: 120, Sortable: true, LinkDetail: true },
            { Field: 'Ten', Title: 'Tên Phòng Khám', MinWidth: 200, Sortable: true },
            { Field: 'TenKhoaPhong', Title: 'Tên Khoa Phòng', Width: 200, Sortable: true, TemplateGroupHeader: this.tenKhoaPhongTemplate },
            { Field: 'IsDisabled', Title: 'Trạng Thái', Width: 150, Template: this.trangThaiTemplate }
        ];
    }

    updateTinhTrang(id: number, isDisabled: boolean) {
        let confirm = 'ngừng sử dụng';
        if (isDisabled) { confirm = 'sử dụng'; }
        const self = this;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessLockTemplate, [confirm, 'phòng ngoại trú']) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.apiService.post('PhongBenhVien/KichHoatPhongBenhVien?id=' + id).subscribe(
                        () => {
                            self.gridChild.search();
                            if (isDisabled) {
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Sử dụng']));
                            } else {
                                self.notificationService.showSuccess(CommonService.format
                                    (SystemMessage.ActionSuccessfully, ['Ngừng sử dụng']));
                            }
                        },
                        (err: any) => {
                            self.notificationService.showError(err.Message);
                        });
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('PhongBenhVien/ExportKhoaPhongPhongKham', self.gridChild._gridQueryInfo).subscribe(
                resultData => {
                    self.closePopupLoadingData();
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                        'KhoaPhongPhongKham' + dateTimeNow.getFullYear() + '.xlsx');
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
