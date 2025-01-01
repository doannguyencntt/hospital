import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SortDescriptor } from '@progress/kendo-data-query';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
    selector: 'app-nghe-nghiep-list',
    templateUrl: './nghe-nghiep-list.component.html',
    styleUrls: ['./nghe-nghiep-list.component.scss']
})
export class NgheNghiepListComponent implements OnInit {
    constructor(private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService) { }

    sort: SortDescriptor[] = [{
        field: 'Id',
        dir: 'desc'
    }];

    icicdone = icicdone;
    icClose = icClose;
    documentType: DocumentType;
    gridColumns: any[] = [];
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;

    ngOnInit() {
        this.documentType = DocumentType.DanhMucNgheNghiep;
        this.gridColumns = [
            { Field: "TenVietTat", Title: "Tên Viết Tắt", Width: 150, Sortable: true, LinkDetail: true },
            { Field: "Ten", Title: "Tên Đầy Đủ", Width: 200, Sortable: true },
            { Field: "MoTa", Title: "Mô Tả", MinWidth: 500, Sortable: true },
            { Field: "IsDisabled", Title: "Trạng thái", Width: 150, Template: this.trangThaiTemplate }
        ];
    }

    updateNgheNghiep(id: number, isDisabled: boolean) {
        let confirm = "ngừng sử dụng";
        if (isDisabled) confirm = "sử dụng";
        if (!isDisabled) confirm = "ngừng sử dụng";
        var self = this;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [confirm, "nghề nghiệp"]) }
            }).afterClosed().subscribe(result => {
                if (result == "Yes") {
                    self.apiService.post("NgheNghiep/KichHoatNgheNghiep?id=" + id).subscribe(
                        () => {
                            self.gridChild.search();
                            if (isDisabled)
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Sử dụng"]));
                            else
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Ngừng sử dụng"]));
                        },
                        (err: any) => {
                            self.notificationService.showError(err.Message);
                        });
                }
            });
        }
        else {
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

        if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>("NgheNghiep/ExportNgheNghiep", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                CommonService.downLoadFile(res, "application/vnd.ms-excel", "NgheNghiep" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            })
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
