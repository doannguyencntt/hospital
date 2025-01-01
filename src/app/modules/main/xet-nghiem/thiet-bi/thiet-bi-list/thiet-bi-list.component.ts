import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import icicdone from '@iconify/icons-ic/twotone-done';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icClose from '@iconify/icons-ic/twotone-close';
import icCopy from '@iconify/icons-ic/content-copy';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { Router } from '@angular/router';
declare var $: any;
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-thiet-bi-list',
    templateUrl: './thiet-bi-list.component.html',
    styleUrls: ['./thiet-bi-list.component.scss']
})
export class ThietBiXetNghiemListComponent implements OnInit {
    constructor(
        private router: Router,
        private notificationService: NotificationService,
        private dialog: MatDialog,
        private apiService: ApiService,
        private authService: AuthService
    ) { }
    documentType: DocumentType;
    gridColumns: any[] = [];
    icicdone = icicdone;
    icClose = icClose;
    icEdit = icEdit;
    icDelete = icDelete;
    icMoreHoriz = icMoreHoriz;
    icCopy = icCopy;
    baseRoute = '/xet-nghiem/thiet-bi';
    @ViewChild('gridThietBi', { static: false }) gridThietBi: GridComponent;
    @ViewChild('nhomXetNghiemTemplate', { static: true }) nhomXetNghiemTemplate: TemplateRef<any>;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    groups: GroupDescriptor[] = [{ field: 'NhomXetNghiemDisplay' }];

    ngOnInit() {
        this.documentType = DocumentType.ThietBiXetNghiem;
        this.gridColumns = [
            {
                Field: 'NhomXetNghiemDisplay',
                Title: '',
                Width: 150,
                Sortable: true,
                Hidden: true,
                HideFilter: true,
                TemplateGroupHeader: this.nhomXetNghiemTemplate
            },
            { Field: 'NhomThietBiDisplay', Title: 'Nhóm', Width: 200, Sortable: true, LinkDetail: true, ShowTooltip: true },
            { Field: 'Ma', Title: 'Mã', Width: 127, Sortable: true, ShowTooltip: true },
            { Field: 'Ten', Title: 'Tên', MinWidth: 150, Sortable: true, ShowTooltip: true },
            { Field: 'Ncc', Title: 'Nhà Cung Cấp', Width: 250, Sortable: true, ShowTooltip: true },
            { Field: 'TinhTrang', Title: 'Tình Trạng', Width: 150, Sortable: true, Template: this.tinhTrangTemplate },
            { Field: 'HieuLuc', Title: 'Trạng Thái', Width: 335, Sortable: true, Template: this.trangThaiTemplate },
            { Field: '', Title: '', Width: 45, Template: this.actionTemplate }
        ];
    }

    setColor() {
        setTimeout(() => {
            $('span.red-txt').css('color', 'red');
            $('span.green-txt').css('color', 'green');
        }, 50);
    }

    exportExcel() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>('ThietBiXetNghiem/ExportThietBiXetNghiem',
                this.gridChild._gridQueryInfo).subscribe(res => {
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'ThietBiXetNghiem' + dateTimeNow.getFullYear() + '.xlsx');
                    this.dialog.closeAll();
                }, err => {
                    this.notificationService.showError(err.Message);
                    this.dialog.closeAll();
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    update(id: number, hieuLuc: boolean) {
        let confirm = 'ngừng sử dụng';
        if (hieuLuc) { confirm = 'ngừng sử dụng'; }
        if (!hieuLuc) { confirm = 'sử dụng'; }
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessLockTemplate, [confirm, 'thiết bị xét nghiệm']) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.apiService.post('ThietBiXetNghiem/KichHoatThietBiXetNghiem?id=' + id).subscribe(
                        () => {
                            self.gridChild.search();
                            if (hieuLuc) {
                                self.notificationService.showSuccess
                                    (CommonService.format(SystemMessage.ActionSuccessfully, ['Ngừng sử dụng']));
                            } else {
                                self.notificationService.showSuccess
                                    (CommonService.format(SystemMessage.ActionSuccessfully, ['Sử dụng']));
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

    edit(id: number) {
        this.gridThietBi.edit(id);
    }

    delete(id: number) {
        this.gridThietBi.delete(id);
    }

    copy(id: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            this.router.navigate([this.baseRoute + '/them/' + id]);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
