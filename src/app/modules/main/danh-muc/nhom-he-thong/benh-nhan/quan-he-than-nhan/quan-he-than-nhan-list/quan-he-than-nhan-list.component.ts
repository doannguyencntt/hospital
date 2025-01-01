import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-quan-he-than-nhan-list',
    templateUrl: './quan-he-than-nhan-list.component.html',
    styleUrls: ['./quan-he-than-nhan-list.component.scss']
})
export class QuanHeThanNhanListComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService
    ) { }

    sort: SortDescriptor[] = [{
        field: 'Id',
        dir: 'desc'
    }];

    icClose = icClose;
    icicdone = icicdone;
    documentType: DocumentType;
    gridColumns: any[] = [];
    @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;

    ngOnInit() {
        this.documentType = DocumentType.DanhMucQuanHeThanNhan;
        this.gridColumns = [
            { Field: 'TenVietTat', Title: 'Tên Viết Tắt', Width: 150, Sortable: true, LinkDetail: true },
            { Field: 'Ten', Title: 'Tên Đầy Đủ', Width: 200, Sortable: true },
            { Field: 'MoTa', Title: 'Mô Tả', MinWidth: 300, Sortable: true },
            { Field: 'IsDisabled', Title: 'Trạng thái', Width: 150, Template: this.trangThaiTemplate }
        ];
    }

    updateQuanHeThanNhan(id: number, isDisabled: boolean) {
        let confirm = 'ngừng sử dụng';
        if (isDisabled) { confirm = 'sử dụng'; }
        if (!isDisabled) { confirm = 'ngừng sử dụng'; }
        const self = this;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessLockTemplate, [confirm, 'quan hệ thân nhân']) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.apiService.post('QuanHeThanNhan/KichHoatQuanHeThanNhan?id=' + id).subscribe(
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
            self.apiService.postExportExcel<string>('QuanHeThanNhan/ExportQuanHeThanNhan', self.gridChild._gridQueryInfo).subscribe(
                resultData => {
                    self.closePopupLoadingData();
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                        'QuanHeThanNhan' + dateTimeNow.getFullYear() + '.xlsx');
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
