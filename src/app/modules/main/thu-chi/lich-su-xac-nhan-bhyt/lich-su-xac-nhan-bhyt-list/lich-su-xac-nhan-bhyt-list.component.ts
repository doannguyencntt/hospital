import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { XacNhanBhyt, TagItem } from '../lich-su-xac-nhan-bhyt.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icSearch from '@iconify/icons-ic/twotone-search';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-lich-su-xac-nhan-bhyt-list',
    templateUrl: './lich-su-xac-nhan-bhyt-list.component.html',
    styleUrls: ['./lich-su-xac-nhan-bhyt-list.component.scss']
})

export class LichSuXacNhanBhytListComponent implements OnInit {
    gridColumn: any[] = [];
    icSearch = icSearch;
    documentType: DocumentType;
    listTagSearch: Array<TagItem>;
    listTagShowOnHeader: Array<TagItem>;
    xacNhanBhyt = new XacNhanBhyt();
    icFileExcel = icFileExcel;
    holdQuery: any = null;
    searchCtrl = new FormControl();
    urlGetDataGrid = 'LichSuXacNhanBHYT/GetDataForGridLichSuBhytAsync';
    urlGetTotalPageGrid = 'LichSuXacNhanBHYT/GetTotalPageForGridLichSuBhytAsync';
    additionalSearchString: string = null;
    icFilterList = icFilterList;
    sort = [{
        field: 'ThoiDiemDuyetBaoHiem',
        dir: 'desc'
    }];
    @ViewChild('gridLichSuXacNhan', { static: false }) gridLichSuXacNhan: GridComponent;

    constructor(
        private apiService: ApiService,
        private notificationService: NotificationService,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private authService: AuthService,
        private router: Router
    ) { }

    @ViewChild('templateTextSoTienDaXacNhan', { static: true }) templateTextSoTienDaXacNhan: TemplateRef<any>;
    @ViewChild('maTNTemplate', { static: true }) maTNTemplate: TemplateRef<any>;

    ngOnInit() {
        this.documentType = DocumentType.LichSuXacNhanBHYT;
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (
            this.holdQuery != null &&
            LocalStorageHelper.getItem('additionalSearchStringXacNhanBHYTLichSu') != null
        ) {
            this.additionalSearchString = LocalStorageHelper.getItem(
                'additionalSearchStringXacNhanBHYTLichSu'
            );
            this.xacNhanBhyt = new XacNhanBhyt();
            this.xacNhanBhyt = JSON.parse(this.additionalSearchString);
            if (this.xacNhanBhyt.ThoiDiemTiepNhanTuFormat != null && this.xacNhanBhyt.ThoiDiemTiepNhanTuFormat !== '') {
                this.xacNhanBhyt.ThoiDiemTiepNhanTuFormat = new Date(this.xacNhanBhyt.ThoiDiemTiepNhanTuFormat);
            } else {
                this.xacNhanBhyt.ThoiDiemTiepNhanTuFormat = null;
            }
            if (this.xacNhanBhyt.ThoiDiemTiepNhanDenFormat != null && this.xacNhanBhyt.ThoiDiemTiepNhanDenFormat !== '') {
                this.xacNhanBhyt.ThoiDiemTiepNhanDenFormat = new Date(this.xacNhanBhyt.ThoiDiemTiepNhanDenFormat);
            } else {
                this.xacNhanBhyt.ThoiDiemTiepNhanDenFormat = null;
            }
        } else {
            LocalStorageHelper.setItem('additionalSearchStringXacNhanBHYTLichSu', null);
        }
        this.gridColumn = [
            { Field: 'Id', Title: 'Mã XN', Width: 100, Sortable: true, Template: this.maTNTemplate },
            { Field: 'MaTN', Title: 'Mã TN', Width: 100, Sortable: true },
            { Field: 'MaBN', Title: 'Mã NB', Width: 80, Sortable: true },
            { Field: 'HoTen', Title: 'Họ tên', Width: 170, Sortable: true },
            { Field: 'NamSinh', Title: 'Năm Sinh', Width: 90, Sortable: true },
            { Field: 'TenGioiTinh', Title: 'Giới tính', Width: 90, Sortable: true },
            { Field: 'DiaChi', Title: 'Địa chỉ', MinWidth: 200, Sortable: true },
            { Field: 'SoDienThoaiDisplay', Title: 'Số điện thoại', Width: 166, Sortable: true },
            { Field: 'SoTienDaXacNhan', Title: 'Số tiền đã XN', Width: 146, Template: this.templateTextSoTienDaXacNhan },
            { Field: 'ThoiDiemDuyetBaoHiem', Title: 'Thời điểm duyệt', Width: 171, Sortable: true },
            { Field: 'NhanVienDuyetBaoHiem', Title: 'Người duyệt', Width: 175, Sortable: true }
        ];
        this.listTagSearch = new Array<TagItem>();
    }

    searchChanges() {
        if (this.gridLichSuXacNhan !== undefined) {
            if (this.xacNhanBhyt.SearchString == null || this.xacNhanBhyt.SearchString === '') {
                this.gridLichSuXacNhan.searchString = '';
                this.xacNhanBhyt.SearchString = '';
                const queryString = JSON.stringify(this.xacNhanBhyt);
                this.gridLichSuXacNhan._additionalSearchString = queryString;
                this.gridLichSuXacNhan.search();
            }
        }
    }

    clearSearch() {
        this.xacNhanBhyt.SearchString = '';
        this.gridLichSuXacNhan.search();
    }

    onKey(event: any) {
        if (event.key === 'Enter' || (event.which === 8 && this.xacNhanBhyt.SearchString === '')) {
            this.TimkiemNangCao();
        }
    }

    TimkiemNangCao() {
        const self = this;
        self.router.navigateByUrl('/lich-su-xac-nhan-bhyt/ngoai-tru?holdQuery=true');
        self.listTagShowOnHeader = JSON.parse(JSON.stringify(self.listTagSearch));
        self.xacNhanBhyt.FromDate = null;
        self.xacNhanBhyt.ToDate = null;

        if (self.xacNhanBhyt.ThoiDiemTiepNhanTuFormat != null) {
            self.xacNhanBhyt.FromDate = CommonService.formatDateTime(self.xacNhanBhyt.ThoiDiemTiepNhanTuFormat, 'dd/mm/yyyy');
        }

        if (self.xacNhanBhyt.ThoiDiemTiepNhanDenFormat != null) {
            self.xacNhanBhyt.ToDate = CommonService.formatDateTime(self.xacNhanBhyt.ThoiDiemTiepNhanDenFormat, 'dd/mm/yyyy');
        }

        const queryString = JSON.stringify(self.xacNhanBhyt);

        if (self.gridLichSuXacNhan !== undefined) {
            self.gridLichSuXacNhan.searchString = self.xacNhanBhyt.SearchString;
            self.gridLichSuXacNhan._additionalSearchString = queryString;
            self.gridLichSuXacNhan.search();
        }
        LocalStorageHelper.setItem(
            'additionalSearchStringXacNhanBHYTLichSu',
            queryString
        );
    }

    thongTinChiTiet(data: any) {
        this.router.navigateByUrl('/lich-su-xac-nhan-bhyt/ngoai-tru/thong-tin-cho-xac-nhan/' + data.Id + '?holdQuery=true');
    }

    getInputSearchValue() {
        const self = this;
        self.TimkiemNangCao();
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('LichSuXacNhanBHYT/ExportLichSuXacNhanBhyt',
                self.gridLichSuXacNhan._gridQueryInfo).subscribe(
                    resultData => {
                        self.closePopupLoadingData();
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                            'LichSuXacNhanBHYT' + dateTimeNow.getFullYear() + '.xlsx');
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

    toggleColumnVisibility(column, event) {
        this.gridLichSuXacNhan.toggleColumnVisibility(column, event);
    }
}
