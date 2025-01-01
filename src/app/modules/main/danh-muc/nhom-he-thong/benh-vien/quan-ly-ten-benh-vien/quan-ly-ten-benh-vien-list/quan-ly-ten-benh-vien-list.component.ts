import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from '../../../../../../../../app/shared/component/grid/grid.component';
import { DocumentType } from '../../../../../../../../app/shared/enum/document-type.enum';
import { SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiService } from '../../../../../../../../app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import iciCdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    selector: 'app-quan-ly-ten-benh-vien-list',
    templateUrl: './quan-ly-ten-benh-vien-list.component.html',
    styleUrls: ['./quan-ly-ten-benh-vien-list.component.scss']
})
export class QuanLyTenBenhVienListComponent implements OnInit {
    sort: SortDescriptor[] = [{
        field: 'Id',
        dir: 'desc'
    }];
    icMoreHoriz = icMoreHoriz;
    icActivated = icicActivated;
    icicUnActivated = icicUnActivated;
    icicdone = iciCdone;
    icclose = icClose;
    documentType: DocumentType;
    gridColumns: any[] = [];
    @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
    @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
    @ViewChild('trangThaTemplate', { static: true }) trangThaTemplate: TemplateRef<any>;

    constructor(private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService) { }

    ngOnInit() {
        this.documentType = DocumentType.DanhMucBenhVien;
        this.gridColumns = [
            { Field: "Ma", Title: "Mã", Width: 120, Sortable: true, LinkDetail: true },
            { Field: "TenVietTat", Title: "Tên Viết Tắt", Width: 100, Sortable: true },
            { Field: "Ten", Title: "Tên bệnh viện", MinWidth: 200, Sortable: true },
            { Field: "TenDonViHanhChinh", Title: "Đơn vị hành chính", Width: 200, Sortable: true },
            { Field: "TenLoaiBenhVien", Title: "Loại bệnh viện", Width: 170, Sortable: true },
            { Field: "HangBenhVienDisplay", Title: "Hạng Bệnh Viện", Width: 200, Sortable: true },
            { Field: "TuyenChuyenMonKyThuatDisplay", Title: "Tuyến Chuyên Môn Kỹ Thuật", Width: 270, Sortable: true },
            { Field: "SoDienThoaiDisplay", Title: "Số Điện Thoại Lãnh Đạo", Width: 250, Sortable: true },
            { Field: "HieuLuc", Title: "Trạng thái", Width: 170, Template: this.trangThaTemplate },
        ];
    }

    updateTinhTrang(id: number, isDisabled: boolean) {
        let comfrim = "ngừng sử dụng";
        if (!isDisabled) comfrim = "sử dụng";
        var self = this;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfrim, "tên bệnh viện"]) }
            }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
                if (result == "Yes") {
                    self.apiService.post("BenhVien/KichHoatTrangThai?id=" + id).subscribe(
                        () => {
                            self.gridChild.search();
                            if (!isDisabled)
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
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('BenhVien/ExportBenhVien', self.gridChild._gridQueryInfo).subscribe(
                resultData => {
                    self.closePopupLoadingData();
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                        'BenhVien' + dateTimeNow.getFullYear() + '.xlsx');
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
