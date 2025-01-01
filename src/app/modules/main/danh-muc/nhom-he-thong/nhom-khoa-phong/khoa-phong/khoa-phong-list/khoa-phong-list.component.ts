import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiService } from 'src/app/core/services/api.service';
import icicdone from '@iconify/icons-ic/twotone-done';
import { GroupDescriptor } from '@progress/kendo-data-query';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-khoa-phong-list',
    templateUrl: './khoa-phong-list.component.html',
    styleUrls: ['./khoa-phong-list.component.scss']
})
export class KhoaPhongListComponent implements OnInit {
    icClose = icClose;
    icicdone = icicdone;
    documentType: DocumentType;
    gridColumns: any[] = [];
    groups: GroupDescriptor[] = [{ field: 'TenLoaiKhoaPhongDisplayName' }];
    @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
    @ViewChild('tenLoaiKhoaPhongTemplate', { static: true }) tenLoaiKhoaPhongTemplate: TemplateRef<any>;
    @ViewChild('kieuKhamTemplate', { static: true }) kieuKhamTemplate: TemplateRef<any>;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('soTienThuTamUngTemplate', { static: true }) soTienThuTamUngTemplate: TemplateRef<any>;

    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.DanhMucKhoaPhong;
        this.gridColumns = [
            { Field: 'Ma', Title: 'Mã', Width: 120, Sortable: true, LinkDetail: true },
            { Field: 'Ten', Title: 'Tên Khoa Phòng', Width: 200, Sortable: true },
            { Field: 'TenKhoa', Title: 'Tên Chuyên Khoa', Width: 200, Sortable: true },
            { Field: 'SoTienThuTamUng', Title: 'Số Tiền Thu Tạm Ứng', Width: 140, Sortable: true, Template: this.soTienThuTamUngTemplate },
            {
                Field: 'TenLoaiKhoaPhongDisplayName', Title: 'Loại Khoa Phòng', Width: 150, Sortable: true,
                TemplateGroupHeader: this.tenLoaiKhoaPhongTemplate
            },
            { Field: 'CoKhamNgoaiTru', Title: 'Kiểu Khám', Width: 160, Sortable: true, Template: this.kieuKhamTemplate },
            { Field: 'IsDisabled', Title: 'Trạng Thái', Width: 170, Sortable: true, Template: this.trangThaiTemplate },
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
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessLockTemplate, [confirm, 'khoa phòng']) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.apiService.post('KhoaPhong/KichHoatKhoaPhong?id=' + id).subscribe(
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
            self.apiService.postExportExcel<string>('KhoaPhong/ExportKhoaPhong', self.gridChild._gridQueryInfo).subscribe(
                resultData => {
                    self.closePopupLoadingData();
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                        'KhoaPhong' + dateTimeNow.getFullYear() + '.xlsx');
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
