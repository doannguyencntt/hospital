import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { FormControl } from '@angular/forms';
import { SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import {
    KhamDoanGiamDocDuyetDetailPopupComponent
} from '../kham-doan-giam-doc-duyet-detail-popup/kham-doan-giam-doc-duyet-detail-popup.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { KhamDoanGiamDocDuyetTimKiem } from '../kham-doan-giam-doc-duyet.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-kham-doan-giam-doc-duyet-list',
    templateUrl: './kham-doan-giam-doc-duyet-list.component.html',
    styleUrls: ['./kham-doan-giam-doc-duyet-list.component.scss']
})
export class KhamDoanGiamDocDuyetListComponent implements OnInit {

    icSearch = icSearch;
    icFileExcel = icFileExcel;
    icFilterList = icFilterList;
    icDelete = icDelete;

    searchCtrl = new FormControl();
    documentType: DocumentType;
    baseRoute = '/kham-doan/giam-doc-duyet';

    gridColumns: any[] = [];
    _gridColumnsFilter: any[] = [];
    _isCheckColumnFilter = true;
    strAdditionalSearchString = '';
    sort: SortDescriptor[] = [{
        field: 'TrangThai',
        dir: 'asc'
    }];
    urlGetData = 'KhamDoan/GetDataForYeuCauNhanSuKhamSucKhoeGiamDocGridAsync';
    urlTotalPage = 'KhamDoan/GetTotalPageForYeuCauNhanSuKhamSucKhoeGiamDocGridAsync';

    timKiemObj: KhamDoanGiamDocDuyetTimKiem = new KhamDoanGiamDocDuyetTimKiem();

    @ViewChild('tenHopDongTemplate', { static: true }) tenHopDongTemplate: TemplateRef<any>;
    @ViewChild('ngayBatDauKhamTemplate', { static: true }) ngayBatDauKhamTemplate: TemplateRef<any>;
    @ViewChild('ngayKetThucKhamTemplate', { static: true }) ngayKetThucKhamTemplate: TemplateRef<any>;
    @ViewChild('ngayGuiTemplate', { static: true }) ngayGuiTemplate: TemplateRef<any>;
    @ViewChild('ngayKHTHDuyetTemplate', { static: true }) ngayKHTHDuyetTemplate: TemplateRef<any>;
    @ViewChild('ngayNhanSuDuyetTemplate', { static: true }) ngayNhanSuDuyetTemplate: TemplateRef<any>;
    @ViewChild('ngayGiamDocDuyetTemplate', { static: true }) ngayGiamDocDuyetTemplate: TemplateRef<any>;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('gridParent', { static: true }) gridChild: GridComponent;
    constructor(
        private authService: AuthService,
        private notificationService: NotificationService,
        private route: ActivatedRoute,
        private location: Location,
        private dialog: MatDialog,
        private apiService: ApiService,
        private router: Router
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.KhamDoanDuyetYeuCauNhanSuKhamSucKhoeGiamDoc;
        let holdQuery;

        if (this.route.snapshot.queryParams.holdQuery != null) {
            holdQuery = this.route.snapshot.queryParams.holdQuery;
        }


        if (holdQuery && LocalStorageHelper.getItem('additionalSearchStringDanhSachGiamDocDuyetYeuCauNhanSuKhamSucKhoe')) {
            const additionalSearchString = LocalStorageHelper.getItem<string>
                ('additionalSearchStringDanhSachGiamDocDuyetYeuCauNhanSuKhamSucKhoe');
            if (additionalSearchString != null) {
                this.timKiemObj = JSON.parse(additionalSearchString);

                if (this.timKiemObj.NgayGui != null) {
                    if (this.timKiemObj.NgayGui.startDate != null) {
                        const startDate = new Date(this.timKiemObj.NgayGui.startDate);
                        this.timKiemObj.NgayGui.startDate = new Date(startDate);
                    }
                    if (this.timKiemObj.NgayGui.endDate != null) {
                        const endDate = new Date(this.timKiemObj.NgayGui.endDate);
                        this.timKiemObj.NgayGui.endDate = new Date(endDate);
                    }
                }

                if (this.timKiemObj.NgayKHTHDuyet != null) {
                    if (this.timKiemObj.NgayKHTHDuyet.startDate != null) {
                        const startDate = new Date(this.timKiemObj.NgayKHTHDuyet.startDate);
                        this.timKiemObj.NgayKHTHDuyet.startDate = new Date(startDate);
                    }
                    if (this.timKiemObj.NgayKHTHDuyet.endDate != null) {
                        const endDate = new Date(this.timKiemObj.NgayKHTHDuyet.endDate);
                        this.timKiemObj.NgayKHTHDuyet.endDate = new Date(endDate);
                    }
                }

                if (this.timKiemObj.NgayNhanSuDuyet != null) {
                    if (this.timKiemObj.NgayNhanSuDuyet.startDate != null) {
                        const startDate = new Date(this.timKiemObj.NgayNhanSuDuyet.startDate);
                        this.timKiemObj.NgayNhanSuDuyet.startDate = new Date(startDate);
                    }
                    if (this.timKiemObj.NgayNhanSuDuyet.endDate != null) {
                        const endDate = new Date(this.timKiemObj.NgayNhanSuDuyet.endDate);
                        this.timKiemObj.NgayNhanSuDuyet.endDate = new Date(endDate);
                    }
                }

                if (this.timKiemObj.NgayGiamDocDuyet != null) {
                    if (this.timKiemObj.NgayGiamDocDuyet.startDate != null) {
                        const startDate = new Date(this.timKiemObj.NgayGiamDocDuyet.startDate);
                        this.timKiemObj.NgayGiamDocDuyet.startDate = new Date(startDate);
                    }
                    if (this.timKiemObj.NgayGiamDocDuyet.endDate != null) {
                        const endDate = new Date(this.timKiemObj.NgayGiamDocDuyet.endDate);
                        this.timKiemObj.NgayGiamDocDuyet.endDate = new Date(endDate);
                    }
                }

                this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
            }
        } else {
            LocalStorageHelper.removeItem("additionalSearchStringDanhSachGiamDocDuyetYeuCauNhanSuKhamSucKhoe");
            var queryString = JSON.stringify(this.timKiemObj);
            this.gridChild.additionalSearchString = queryString;
        }

        this.gridColumns = [
            { Field: 'HopDong', Title: 'Hợp đồng', Width: 165, Sortable: true, Template: this.tenHopDongTemplate },
            { Field: 'TenCongTy', Title: 'Tên công ty', Width: 106, Sortable: true, ShowTooltip: true },
            { Field: 'SoLuongBn', Title: 'SL NB ', Width: 65, Sortable: true },
            { Field: 'SoLuongBs', Title: 'SL BS', Width: 65, Sortable: true },
            { Field: 'SoLuongDd', Title: 'SL ĐD', Width: 65, Sortable: true },
            { Field: 'NhanVienKhac', Title: 'NV Khác', Width: 85, Sortable: true },
            { Field: 'NgayBatDauKham', Title: 'Ngày BĐ khám', Width: 118, Sortable: true, Template: this.ngayBatDauKhamTemplate },
            { Field: 'NgayKetThucKham', Title: 'Ngày KT khám', Width: 119, Sortable: true, Template: this.ngayKetThucKhamTemplate },
            { Field: 'NguoiGui', Title: 'Người gửi', Width: 87, Sortable: true },
            { Field: 'NgayGui', Title: 'Ngày gửi', Width: 157, Sortable: true, Template: this.ngayGuiTemplate },
            { Field: 'KhthDuyet', Title: 'KHTH duyệt', Width: 99, Sortable: true },
            { Field: 'NgayKhthDuyet', Title: 'Ngày KHTH duyệt', Width: 141, Sortable: true, Template: this.ngayKHTHDuyetTemplate },
            { Field: 'NsDuyet', Title: 'NS duyệt', Width: 85, Sortable: true },
            { Field: 'NgayNsDuyet', Title: 'Ngày NS duyệt', Width: 120, Sortable: true, Template: this.ngayNhanSuDuyetTemplate },
            { Field: 'GdDuyet', Title: 'GĐ duyệt', Width: 84, Sortable: true },
            { Field: 'NgayGdDuyet', Title: 'Ngày GĐ duyệt', Width: 121, Sortable: true, Template: this.ngayGiamDocDuyetTemplate },
            { Field: 'TrangThai', Title: 'Trạng thái', Width: 121, Sortable: true, Template: this.trangThaiTemplate }
        ];

        this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
    }

    searchChanges(event) {
        if ((event == null || event == '') && this.strAdditionalSearchString != '') {
            this.timKiemNangCao();
        }
    }

    onKey(event: any) {
        if (event.key == 'Enter') {
            this.timKiemNangCao();
        }
    }

    clearSearch() {
        this.timKiemObj.SearchString = null;
        this.gridChild.searchString = null;
        this.timKiemNangCao();
    }

    timKiemNangCao() {
        this.router.navigateByUrl(`${this.baseRoute}?holdQuery=true`);
        const searchClone: KhamDoanGiamDocDuyetTimKiem = JSON.parse(JSON.stringify(this.timKiemObj));

        if (searchClone.NgayGui.startDate != null) {
            const startDate = new Date(searchClone.NgayGui.startDate);
            searchClone.NgayGui.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
                , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }

        if (searchClone.NgayGui.endDate != null) {
            const endDate = new Date(searchClone.NgayGui.endDate);
            searchClone.NgayGui.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }

        if (searchClone.NgayKHTHDuyet.startDate != null) {
            const startDate = new Date(searchClone.NgayKHTHDuyet.startDate);
            searchClone.NgayKHTHDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
                , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }

        if (searchClone.NgayKHTHDuyet.endDate != null) {
            const endDate = new Date(searchClone.NgayKHTHDuyet.endDate);
            searchClone.NgayKHTHDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }

        if (searchClone.NgayNhanSuDuyet.startDate != null) {
            const startDate = new Date(searchClone.NgayNhanSuDuyet.startDate);
            searchClone.NgayNhanSuDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
                , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }

        if (searchClone.NgayNhanSuDuyet.endDate != null) {
            const endDate = new Date(searchClone.NgayNhanSuDuyet.endDate);
            searchClone.NgayNhanSuDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }

        if (searchClone.NgayGiamDocDuyet.startDate != null) {
            const startDate = new Date(searchClone.NgayGiamDocDuyet.startDate);
            searchClone.NgayGiamDocDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
                , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }

        if (searchClone.NgayGiamDocDuyet.endDate != null) {
            const endDate = new Date(searchClone.NgayGiamDocDuyet.endDate);
            searchClone.NgayGiamDocDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }

        this.strAdditionalSearchString = JSON.stringify(searchClone);

        LocalStorageHelper.setItem('additionalSearchStringDanhSachGiamDocDuyetYeuCauNhanSuKhamSucKhoe', this.strAdditionalSearchString);
        this.gridChild._additionalSearchString = this.strAdditionalSearchString;
        this.gridChild.search();
    }

    xuLyXuatExcel() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>
                ('KhamDoan/ExportDanhSachYeuCauNhanSuKhamSucKhoe', this.gridChild._gridQueryInfo)
                // tslint:disable-next-line: deprecation
                .subscribe(res => {
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile
                        (res, 'application/vnd.ms-excel', 'YeuCauNhanSuKhamSucKhoe' + dateTimeNow.getFullYear() + '.xlsx');
                    this.dialog.closeAll();
                }, err => {
                    this.notificationService.showError(err.Message);
                    this.dialog.closeAll();
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xemChiTiet(id: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.router.navigate([this.baseRoute + '/chi-tiet/' + id]);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
