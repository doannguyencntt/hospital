import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { SortDescriptor } from '@progress/kendo-data-query';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icBlock from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-vat-tu-y-te-tai-benh-vien-list',
    templateUrl: './vat-tu-y-te-tai-benh-vien-list.component.html',
    styleUrls: ['./vat-tu-y-te-tai-benh-vien-list.component.scss']
})
export class VatTuYTeTaiBenhVienListComponent implements OnInit {
    icMoreHoriz = icMoreHoriz;
    icActivated = icicActivated;
    icicUnActivated = icicUnActivated;
    icicdone = icicdone;
    icclose = icClose;
    icBlock = icBlock;
    icEdit = icEdit;
    documentType: DocumentType;
    gridColumns: any[] = [];
    gridChildColumns: any[] = [];
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService) { }

    ngOnInit() {
        this.documentType = DocumentType.DanhMucVatTuYTeTaiBenhVien;
        this.gridColumns = [
            { Field: 'Ma', Title: 'Mã', Width: 150, Sortable: true, LinkDetail: true },
            { Field: 'Ten', Title: 'Tên', Width: 200, Sortable: true, LinkDetail: true  },
            { Field: 'TenNhomVatTu', Title: 'Nhóm', Width: 200, Sortable: true },
            { Field: 'TenDonViTinh', Title: 'Đơn vị tính', Width: 150, Sortable: true },
            { Field: 'QuyCach', Title: 'Quy cách', Width: 200, Sortable: true },
            { Field: 'NhaSanXuat', Title: 'Nhà sản xuất', MinWidth: 150, Sortable: true },
            { Field: 'NuocSanXuat', Title: 'Nước sản xuất', Width: 200, Sortable: true },
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
            this.apiService.postExportExcel<string>
                ('VatTuBenhVien/ExportVatTuYTeBenhVien', this.gridChild._gridQueryInfo).subscribe(res => {
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'VatTuYTeBenhVien' + dateTimeNow.getFullYear() + '.xlsx');
                    this.dialog.closeAll();
                }, err => {
                    this.notificationService.showError(err.Message);
                    this.dialog.closeAll();
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    update(id: number, disabled: boolean) {
        let confirm = 'ngừng sử dụng';
        if (disabled) { confirm = 'sử dụng'; }
        if (!disabled) { confirm = 'ngừng sử dụng'; }
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: {
                    Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessLockTemplate,
                        [confirm, 'vật tư y tế tại bệnh viện'])
                }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.apiService.post('VatTuBenhVien/KichHoatVatTuBenhVien?id=' + id).subscribe(
                        () => {
                            self.gridChild.search();
                            if (disabled) {
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
