import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SortDescriptor } from '@progress/kendo-data-query';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-cong-ty-uu-dai-list',
    templateUrl: './cong-ty-uu-dai-list.component.html',
    styleUrls: ['./cong-ty-uu-dai-list.component.scss']
})
export class CongTyUuDaiListComponent implements OnInit {
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

    icicdone = icicdone;
    icClose = icClose;
    documentType: DocumentType;
    gridColumns: any[] = [];
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;

    ngOnInit() {
        this.documentType = DocumentType.DanhMucCongTyUuDai;
        this.gridColumns = [
            { Field: 'Ten', Title: 'Tên', MinWidth: 200, Sortable: true, LinkDetail: true, ShowTooltip: true },
            { Field: 'MoTa', Title: 'Mô Tả', Width: 900 },
            { Field: 'IsDisabled', Title: 'Trạng thái', Width: 150, Template: this.trangThaiTemplate }
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
            this.apiService.postExportExcel<string>('CongTyUuDai/ExportCongTyUuDai', this.gridChild._gridQueryInfo).subscribe(res => {
                const dateTimeNow = new Date();
                CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'CongTyUuDai' + dateTimeNow.getFullYear() + '.xlsx');
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    update(id: number, isDisabled: boolean) {
        let confirm = 'ngừng sử dụng';
        if (isDisabled) { confirm = 'sử dụng'; }
        if (!isDisabled) { confirm = 'ngừng sử dụng'; }
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessLockTemplate, [confirm, 'công ty ưu đãi']) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.apiService.post('CongTyUuDai/KichHoatCongTyUuDai?id=' + id).subscribe(
                        () => {
                            self.gridChild.search();
                            if (isDisabled) {
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Sử dụng']));
                            } else {
                                self.notificationService.showSuccess
                                    (CommonService.format(SystemMessage.ActionSuccessfully, ['Ngừng sử dụng']));
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
}
