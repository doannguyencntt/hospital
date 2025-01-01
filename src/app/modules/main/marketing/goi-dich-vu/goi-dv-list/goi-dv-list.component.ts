import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCopy from '@iconify/icons-ic/content-copy';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-goi-dv-list',
    templateUrl: './goi-dv-list.component.html',
    styleUrls: ['./goi-dv-list.component.scss']
})
export class GoiDvListComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private router: Router
    ) { }

    documentType: DocumentType;
    gridColumns: any[] = [];
    gridChildColumns: any[] = [];
    gridBacSiColumns: any[] = [];
    urlGetDataGridChild = 'GoiDichVu/GetDataForGridChiTietAsync';
    urlGetTotalPageGridChild = 'GoiDichVu/GetTotalPageForGridChiTietAsync';
    icicdone = icicdone;
    icClose = icClose;
    icMoreHoriz = icMoreHoriz;
    icDelete = icDelete;
    icCopy = icCopy;
    baseRoute = '/marketing/goi-dv';
    @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
    @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
    @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('coChietKhauTemplate', { static: true }) coChietKhauTemplate: TemplateRef<any>;
    @ViewChild('loaiGoiGroupHeaderTemplate', { static: true }) loaiGoiGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('giaGoiTemplate', { static: true }) giaGoiTemplate: TemplateRef<any>;
    @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
    @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
    @ViewChild('dichVuFooterTemplate', { static: true }) dichVuFooterTemplate: TemplateRef<any>;
    @ViewChild('loaiGiaFooterTemplate', { static: true }) loaiGiaFooterTemplate: TemplateRef<any>;
    @ViewChild('soLuongFooterTemplate', { static: true }) soLuongFooterTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('gridGoiDv', { static: false }) gridGoiDv: GridComponent;
    groups: GroupDescriptor[] = [{ field: 'LoaiGoi' }];
    groupsChild: GroupDescriptor[] = [{ field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];

    ngOnInit() {
        this.documentType = DocumentType.GoiDichVuMarketing;
        this.gridColumns = [
            { Field: 'TenGoiDv', Title: 'Tên Nhóm', Width: 200, Sortable: true, LinkDetail: true },
            { Field: 'MoTa', Title: 'Mô Tả', MinWidth: 150, Sortable: true },
            { Field: 'IsDisabled', Title: 'Tình Trạng', Width: 150, Template: this.tinhTrangTemplate },
            { Field: 'Action', Title: '', Width: 50, Template: this.actionTemplate, HideFilter: true }
        ];
    }

    onDataBoundChild(event: any) {
        // this.goiDichVuKhongCoChietKhau = event.Data;
    }

    updateDichVu(id: number, isDisabled: boolean) {
        let confirm = 'ngừng sử dụng';
        if (isDisabled) { confirm = 'sử dụng'; }
        if (!isDisabled) { confirm = 'ngừng sử dụng'; }
        const self = this;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessLockTemplate, [confirm, 'gói dịch vụ']) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.apiService.post('GoiDichVu/KichHoatGoiDichVu?id=' + id).subscribe(
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
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    exportExcel() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>('GoiDichVuMarketing/ExportGoiDichVuMarketing',
                this.gridChild._gridQueryInfo).subscribe(res => {
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'GoiDvMarketing' + dateTimeNow.getFullYear() + '.xlsx');
                    this.dialog.closeAll();
                }, err => {
                    this.notificationService.showError(err.Message);
                    this.dialog.closeAll();
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    copy(id: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            this.router.navigate([this.baseRoute + '/them/' + id]);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    delete(id: number) {
        this.gridGoiDv.delete(id);
    }
}
