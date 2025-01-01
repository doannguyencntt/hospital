import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SearchDuocPham } from '../duoc-pham-da-het-han.model';
import { AuthService } from 'src/app/core/services/auth.service';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { DuocPhamDaHetHanPopupComponent } from '../duoc-pham-da-het-han-popup/duoc-pham-da-het-han-popup.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-duoc-pham-da-het-han-list',
    templateUrl: './duoc-pham-da-het-han-list.component.html',
    styleUrls: ['./duoc-pham-da-het-han-list.component.scss']
})
export class DuocPhamDaHetHanListComponent implements OnInit {
    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }
    searchQuery = new SearchDuocPham();
    gridColumns: any[] = [];
    icSearch = icSearch;
    icFileExcel = icFileExcel;
    documentType: DocumentType;
    searchCtrl = new FormControl();
    @Input() bodyComponent: any;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild('ngayHetHanTemplate', { static: true }) ngayHetHanTemplate: TemplateRef<any>;
    @ViewChild('donGiaNhapTemplate', { static: true }) donGiaNhapTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;

    ngOnInit() {
        this.documentType = DocumentType.DuocPhamDaHetHan;
        this.gridColumns = [
            { Field: 'Kho', Title: 'Kho', Width: 150, Sortable: true },
            { Field: 'MaDuocPham', Title: 'Mã Dược', Width: 200, Sortable: true },
            { Field: 'DuocPham', Title: 'Dược Phẩm', Width: 200, Sortable: true },
            { Field: 'HamLuong', Title: 'Hàm lượng', Width: 200, Sortable: true },
            { Field: 'HoatChat', Title: 'Hoạt Chất', Width: 500, Sortable: true },
            { Field: 'DonViTinh', Title: 'Đơn Vị Tính', Width: 150, Sortable: true },
            { Field: 'SoLo', Title: 'Số lô', Width: 150, Sortable: true },
            { Field: 'ViTri', Title: 'Vị Trí', Width: 150, Sortable: true },
            { Field: 'DonGiaNhap', Title: 'Đơn giá nhập', Width: 150, Sortable: true,Template: this.donGiaNhapTemplate },
            { Field: 'SoLuongTon', Title: 'Số Lượng Tồn', Width: 150, Sortable: true },
            { Field: 'ThanhTien', Title: 'Thành tiền', Width: 150, Sortable: true  ,Template: this.thanhTienTemplate},
            { Field: 'NgayHetHanDisplay', Title: 'Ngày Hết Hạn', Width: 150, Sortable: true, Template: this.ngayHetHanTemplate }
        ];
    }

    onSelectKhoDuoc(event: any) {
        // tslint:disable-next-line: triple-equals
        this.searchQuery.KhoId = event == undefined ? 0 : event.KeyId;
        this.TimKiem();
    }

    KhoChange(khoDuocPhamId: any) {
        this.searchQuery.KhoId = khoDuocPhamId == undefined ? 0 : khoDuocPhamId;
        this.TimKiem();
      }

    onKey(event: any) {
        if (event.key === 'Enter') {
            this.TimKiem();
        }
    }

    searchChange() {
        if (this.searchQuery.searchString == null || this.searchQuery.searchString === '') {
            this.TimKiem();
        }
    }

    TimKiem() {
        let khoQueryString = null;
        let searchQueryString = null;

        if (this.searchQuery.KhoId != null) {
            khoQueryString = this.searchQuery.KhoId;
        }
        if (this.searchQuery.searchString != null) {
            searchQueryString = '"' + this.searchQuery.searchString + '"';
        }

        const queryString = '{"KhoId":' + khoQueryString + ',"DuocPham":' + searchQueryString + '}';
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }

    getSharedPrintForm() {
        let khoQueryString = null;
        let searchQueryString = null;
        if (this.searchQuery.KhoId != null) {
            khoQueryString = this.searchQuery.KhoId;
        }
        if (this.searchQuery.searchString != null) {
            searchQueryString = '"' + this.searchQuery.searchString + '"';
        }
        const queryString = '{"KhoId":' + khoQueryString + ',"DuocPham":' + searchQueryString + '}';

        return new Promise(resolve => {
            this.apiService.get<any>('DuocPhamDaHetHan/InDanhMucDaHetHan?search=' + queryString).subscribe(resultData => {
                resolve(resultData);
            });
        });
    }

    showPopup() {
        const dialogRef = this.dialog.open(DuocPhamDaHetHanPopupComponent, {
            width: '1500px',
            data: { Model: this.searchQuery, Title: 'Xác nhận' }
        });
        dialogRef.afterClosed().subscribe(() => {
        });
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('DuocPhamDaHetHan/ExportDuocPhamDaHetHan',
                self.gridChild._gridQueryInfo).subscribe(
                    resultData => {
                        self.closePopupLoadingData();
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                            'DuocPhamDaHetHan' + dateTimeNow.getFullYear() + '.xlsx');
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
