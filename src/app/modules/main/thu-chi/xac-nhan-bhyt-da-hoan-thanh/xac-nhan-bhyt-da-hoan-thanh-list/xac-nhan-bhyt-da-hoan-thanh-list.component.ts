import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormControl } from '@angular/forms';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icSearch from '@iconify/icons-ic/twotone-search';
import { ActivatedRoute, Router } from '@angular/router';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Search } from '../xac-nhan-bhyt-da-hoan-thanh.model';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-xac-nhan-bhyt-da-hoan-thanh-list',
    templateUrl: './xac-nhan-bhyt-da-hoan-thanh-list.component.html',
    styleUrls: ['./xac-nhan-bhyt-da-hoan-thanh-list.component.scss']
})
export class XacNhanBhytDaHoanThanhListComponent implements OnInit {
    documentType: DocumentType;
    icSearch = icSearch;
    icFileExcel = icFileExcel;
    timeoutSearchChange: any;
    searchCtrl = new FormControl();
    holdQuery: any = null;
    additionalSearchString: string = null;
    additionalSearchStringFirst: string = null;
    searchDaHt = new Search();
    gridColumns: any[] = [];
    icFilterList = icFilterList;
    minDateDenNgay: Date = null;
    minDateTuNgay: Date = null;

    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild('gioiTinhTemplate', { static: true }) gioiTinhTemplate: TemplateRef<any>;
    @ViewChild('maTnTemplate', { static: true }) maTnTemplate: TemplateRef<any>;
    @ViewChild('soTienDaXnTemplate', { static: true }) soTienDaXnTemplate: TemplateRef<any>;
    @ViewChild('thoiDiemDuyetBHTemplate', { static: true }) thoiDiemDuyetBHTemplate: TemplateRef<any>;

    @ViewChild('gridBhyt', { static: false }) gridBhyt: GridComponent;
    constructor(
        private notificationService: NotificationService,
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.XacNhanBhytDaHoanThanh;
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (
            this.holdQuery != null &&
            LocalStorageHelper.getItem('additionalSearchStringXacNhanBHYTDaHoanThanh') != null
        ) {
            this.additionalSearchString = LocalStorageHelper.getItem(
                'additionalSearchStringXacNhanBHYTDaHoanThanh'
            );
            this.searchDaHt = new Search();
            this.searchDaHt = JSON.parse(this.additionalSearchString);
        } else {
            LocalStorageHelper.setItem('additionalSearchStringXacNhanBHYTDaHoanThanh', null);
        }
        this.gridColumns = [
            { Field: 'MaTn', Title: 'Mã TN', Width: 106, Sortable: true, Template: this.maTnTemplate },
            { Field: 'MaBn', Title: 'Mã NB', Width: 83, Sortable: true },
            { Field: 'HoTen', Title: 'Họ Tên', Width: 163, Sortable: true },
            { Field: 'NamSinh', Title: 'Năm Sinh', Width: 127, Sortable: true },
            { Field: 'GioiTinh', Title: 'Giới Tính', Width: 130, Sortable: true, Template: this.gioiTinhTemplate },
            { Field: 'DiaChi', Title: 'Địa Chỉ', Width: 500, Sortable: true },
            { Field: 'SoDienThoaiDisplay', Title: 'Số Điện Thoại', Width: 182, Sortable: true },
            { Field: 'SoTienDaXacNhan', Title: 'Số Tiền Đã XN', Width: 186, Template: this.soTienDaXnTemplate },
            { Field: 'ThoiDiemDuyetBaoHiem', Title: 'Thời điểm duyệt bảo hiểm', Width: 186, Template: this.thoiDiemDuyetBHTemplate },
        ];

        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        if (this.searchDaHt.ThoiDiemDuyetBaoHiemTu == null) {
            this.searchDaHt.ThoiDiemDuyetBaoHiemTu = this.minDateTuNgay;
        }
        if (this.searchDaHt.ThoiDiemDuyetBaoHiemDen == null) {
            this.searchDaHt.ThoiDiemDuyetBaoHiemDen = new Date();
            this.searchDaHt.ThoiDiemDuyetBaoHiemDen.setHours(23, 59, 59);
        }
        
        let dateNow = new Date();
        this.searchDaHt.FromDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
		this.searchDaHt.ToDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
     
         this.additionalSearchStringFirst = JSON.stringify(this.searchDaHt);       
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('XacNhanBhytDaHoanThanh/ExportXacNhanBhytDaHoanThanh',
                self.gridChild._gridQueryInfo).subscribe(
                    resultData => {
                        self.closePopupLoadingData();
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                            'XacNhanDaHoanThanh' + dateTimeNow.getFullYear() + '.xlsx');
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

    thongTinChiTiet(dataItem: any) {
        this.router.navigateByUrl('/xac-nhan-bhyt-da-hoan-thanh/ngoai-tru/thong-tin-chi-tiet-bao-hiem-y-te-da-hoan-thanh-xac-nhan/' + dataItem.Id +
            '?holdQuery=true');
    }

    onKey(event: any) {
        if (event.key === 'Enter') {
            this.Timkiem();
        }
    }

    Timkiem() {
        let QueryString = null;
     

        if (this.searchDaHt.ThoiDiemDuyetBaoHiemTu != null) {
            this.searchDaHt.FromDate = CommonService.formatDateTime(this.searchDaHt.ThoiDiemDuyetBaoHiemTu, 'dd/mm/yyyy');
        } else {
            this.searchDaHt.FromDate = null;
        }
        if (this.searchDaHt.ThoiDiemDuyetBaoHiemDen != null) {
            this.searchDaHt.ToDate = CommonService.formatDateTime(this.searchDaHt.ThoiDiemDuyetBaoHiemDen, 'dd/mm/yyyy');
        } else {
            this.searchDaHt.ToDate = null;
        }

        if (this.searchDaHt.SearchString != null) {
            this.router.navigateByUrl('xac-nhan-bhyt-da-hoan-thanh/ngoai-tru?holdQuery=true');
            QueryString = this.searchDaHt.SearchString;
        }

        const queryString = JSON.stringify(this.searchDaHt);
        this.gridChild.searchString = QueryString;
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
        LocalStorageHelper.setItem(
            'additionalSearchStringXacNhanBHYTDaHoanThanh',
            queryString
        );
    }

    searchChanges() {
        const self = this;
        if (self.timeoutSearchChange != null) {
            clearTimeout(self.timeoutSearchChange);
            self.timeoutSearchChange = null;
        }

        if (self.searchDaHt.SearchString == null || self.searchDaHt.SearchString === '') {
            self.gridChild.searchString = '';
            self.gridChild.search();
        }
    }

    clearSearch() {
        this.searchDaHt.SearchString = '';
        this.gridChild.search();
    }

    toggleColumnVisibility(column, event) {
        this.gridBhyt.toggleColumnVisibility(column, event);
    }

    thoiDiemTNChange(event: any) {
        if (event.key === 'Enter') {
            this.Timkiem();
        }
    }

}
