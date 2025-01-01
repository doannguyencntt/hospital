import { Component, OnInit, ViewChild, Input, AfterContentInit, TemplateRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { Grid, DanhSachBenhNhanPhauThuatVo, QueryInfo, Search } from '../danh-sach-benh-nhan-phau-thuat.model';
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
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
import { Location } from '@angular/common';
declare var jQuery: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-danh-sach-benh-nhan-phau-thuat-list',
    templateUrl: './danh-sach-benh-nhan-phau-thuat-list.component.html',
    styleUrls: ['./danh-sach-benh-nhan-phau-thuat-list.component.scss']
})
export class DanhSachBenhNhanPhauThuatListComponent implements OnInit, AfterContentInit {
    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private location: Location,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }
    queryInfo = null;
    searchQuery = new Search();
    gridColumns: any[] = [];
    gridDisplayColumns: any[] = [];
    icSearch = icSearch;
    icFileExcel = icFileExcel;
    documentType: DocumentType;
    height = null;
    skip = 0;
    searchCtrl = new FormControl();
    baseRoute = '/bao-cao/danh-sach-benh-nhan-phau-thuat';
    dataDanhSachBenhNhanPhauThuat: DanhSachBenhNhanPhauThuatVo[] = [];
    pageSize = 50;
    gridDataSource = new Grid();
    masterName = 'DanhSachBenhNhanPhauThuatGrid';
    isLoading = true;
    isLoadingTotalPage = true;
    additionalSearchString = '';
    @Input() bodyComponent: any;
    @ViewChild('DanhSachBenhNhanPhauThuatGrid', { static: true }) DanhSachBenhNhanPhauThuatGrid: any;
    @ViewChild('gioiTinhTemplate', { static: true }) gioiTinhTemplate: TemplateRef<any>;

    ngOnInit() {
        this.documentType = DocumentType.DanhSachBenhNhanPhauThuat;
        this.gridColumns = [
            { Field: 'ThoiGianVaoVienDisplay', Title: 'Khoa', Width: 127, Sortable: false, Render: true },
            { Field: 'MaTn', Title: 'Mã TN', Width: 90, Sortable: false, Render: true },
            { Field: 'HoTenBn', Title: 'Họ tên NB', Width: 122, MinWidth: 250, Sortable: false, Render: true },
            { Field: 'DiaChi', Title: 'Địa Chỉ', Width: 177, Sortable: false, Render: true },
            { Field: 'NgaySinhDisplay', Title: 'Ngày Sinh', Width: 177, Sortable: false, Render: true },
            { Field: 'GioiTinh', Title: 'Giới Tính', Width: 177, Sortable: false, Render: true, Template: this.gioiTinhTemplate },
            { Field: 'Khoa', Title: 'Khoa', Width: 177, Sortable: false, Render: true },
            { Field: 'ChanDoan', Title: 'Chẩn đoán', Width: 177, Sortable: false, Render: true },
            { Field: 'PhuongPhapPhauThuat', Title: 'Phương Pháp Phẫu Thuật', Width: 177, Sortable: false, Render: true },
            { Field: 'PhuongPhapVoCam', Title: 'Phương Pháp Vô Cảm', Width: 177, Sortable: false, Render: true },
            { Field: 'Ptv', Title: 'PTV', Width: 177, Sortable: false, Render: true },
            { Field: 'GayMe', Title: 'Gây Mê', Width: 177, Sortable: false, Render: true },
            { Field: 'TinhTrangSauPt', Title: 'Tình Trạng Sau PT', Width: 177, Sortable: false, Render: true },
            {
                Field: 'ThoiGianPhauThuatTu',
                Title: 'Từ Ngày',
                Width: 515,
                Sortable: false,
                ParentTitle: 'Thời gian phẫu thuật',
                Colspan: 2,
                Render: true
            },
            { Field: 'ThoiGianPhauThuatDen', Title: 'Đến Ngày', Width: 125, Sortable: false, ParentTitle: 'Số Lần Khám' },
            { Field: 'CapCuu', Title: 'Cấp Cứu', Width: 177, Sortable: false, Render: true },
            { Field: 'TaiBien', Title: 'Tai Biến', Width: 177, Sortable: false, Render: true }
        ];
        this.gridDisplayColumns = [...this.gridColumns].filter(x => x.Render);
        this.GetDatasource();
    }

    CellWidthAuto(width: any, minWidth: any) {
        if (width == null) {
            if (this.gridColumns && this.gridColumns.length > 0) {
                const widthParent = jQuery('#' + this.masterName).parent().width();
                const widthScreen = (widthParent ? Math.round(widthParent) : jQuery(window).width()) - 120;
                const totalWidth = this.gridColumns.filter((item) => {
                    return item.Width != null;
                }).reduce((sum, item) => sum + item.Width, 0);
                if ((widthScreen < totalWidth + minWidth + 100)) {
                    return minWidth;
                } else {
                    return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
                }
            }
        } else {
            return width;
        }
    }

    renderDescendantHeader(parent: string) {
        const numberOfThisParent = this.gridColumns.filter(x => x.ParentTitle === parent).length;
        let result = '';
        const parentHtml =
            `<tr>
                <th colspan="${numberOfThisParent}">${parent}</th>
            </tr>`;
        const init = '<tr>';
        const finish = '</tr>';

        result += parentHtml + init;

        this.gridColumns.filter(x => x.ParentTitle === parent).forEach(node => {
            result += `<th style="border-right: 1px solid darkgrey;border-left: 1px solid darkgrey;">${node.Title}</th>`;
        });
        result += finish;
        return result;
    }

    renderDescendantBody(parent: string, data: DanhSachBenhNhanPhauThuatVo) {
        let result = '';
        const init = '<tr>';
        const finish = '</tr>';
        result += init;
        this.gridColumns.filter(x => x.ParentTitle === parent).forEach(node => {
            result += `<td style="text-align: right;">${this.GetDataByGivenField(node.Field, data)}</td>`;
        });
        result += finish;
        return result;
    }

    GetDataByGivenField(field: string, data: DanhSachBenhNhanPhauThuatVo) {
        switch (field) {
            case 'Bhyt': {
                return data.Bhyt != null ? data.Bhyt.toLocaleString('vi-VI') : '';
            }
            case 'VienPhi': {
                return data.VienPhi != null ? data.VienPhi.toLocaleString('vi-VI') : '';
            }
            case 'KskDoan': {
                return data.KskDoan != null ? data.KskDoan.toLocaleString('vi-VI') : '';
            }
            case 'Ksk': {
                return data.Ksk != null ? data.Ksk.toLocaleString('vi-VI') : '';
            }
            case 'Goi': {
                return data.Goi != null ? data.Goi.toLocaleString('vi-VI') : '';
            }
            case 'TreEm': {
                return data.TreEm != null ? data.TreEm.toLocaleString('vi-VI') : '';
            }
            case 'SoNguoiBenhDieuTriNgoaiTru': {
                return data.SoNguoiBenhDieuTriNgoaiTru != null ? data.SoNguoiBenhDieuTriNgoaiTru.toLocaleString('vi-VI') : '';
            }
            case 'SoNgayDieuTriNgoaiTru': {
                return data.SoNgayDieuTriNgoaiTru != null ? data.SoNgayDieuTriNgoaiTru.toLocaleString('vi-VI') : '';
            }
        }
    }

    GetDatasource() {
        this.queryInfo = new QueryInfo
            (this.skip, (this.pageSize * this.skip) + this.pageSize, this.pageSize, '', this.additionalSearchString);
        this.apiService.post<any>
            ('DanhSachBenhNhanPhauThuat/GetDataForGridAsync',
                this.queryInfo).subscribe(resultData => {
                    if (resultData) {
                        this.gridDataSource.data = [...resultData.Data];
                        this.isLoading = false;
                    }
                });

        this.apiService.post<any>
            ('DanhSachBenhNhanPhauThuat/GetTotalPageForGridAsync',
                this.queryInfo).subscribe(resultData => {
                    if (resultData) {
                        this.isLoadingTotalPage = false;
                        this.gridDataSource.total = resultData.TotalRowCount;
                    }
                });
    }

    ngAfterContentInit() {
        this.height = jQuery(window).height() - 180;
        if (this.height < 400) {
            this.height = 400;
        }
        jQuery(window).resize(() => {
            this.height = jQuery(window).height() - 180;
            if (this.height < 400) {
                this.height = 400;
            }
        });
    }

    pageChange(event: PageChangeEvent): void {
        if (event != null) {
            this.skip = event.skip;
        }
    }

    onAdvanceSearch() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        this.isLoadingTotalPage = true;
        if (this.searchQuery.FromToDate != null && this.searchQuery.FromToDate.startDate != null) {
            this.searchQuery.FromToDate.TuNgay = CommonService.formatDateTime(this.searchQuery.FromToDate.startDate, 'mm/dd/yyyy');
        } else {
            this.searchQuery.FromToDate.TuNgay = null;
        }
        if (this.searchQuery.FromToDate != null && this.searchQuery.FromToDate.endDate != null) {
            this.searchQuery.FromToDate.DenNgay = CommonService.formatDateTime(this.searchQuery.FromToDate.endDate, 'mm/dd/yyyy');
        } else {
            this.searchQuery.FromToDate.DenNgay = null;
        }

        const queryString = JSON.stringify(this.searchQuery);
        this.additionalSearchString = queryString;

        LocalStorageHelper.setItem('cacheDanhSachBenhNhanPhauThuat', queryString);
        this.search();
    }

    search() {
        this.skip = 0;
        if (this.gridDataSource == null) {
            this.GetDatasource();
        }
    }

    onKey(event: any) {
        if (event.key === 'Enter') {
            this.onAdvanceSearch();
        }
    }

    searchChange() {
        if (this.searchQuery.Searchterm == null || this.searchQuery.Searchterm === '') {
            this.onAdvanceSearch();
        }
    }

    getSharedPrintForm() {
        return new Promise(resolve => {
            this.apiService.post<any>('BaoCaoDanhSachBenhNhanPhauThuat/InDanhMucDaHetHan', this.searchQuery).subscribe(resultData => {
                resolve(resultData);
            });
        });
    }

    exportExcel() {
        this.showPopupLoadingData();
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>('BaoCaoDanhSachBenhNhanPhauThuat/ExportBaoCaoDanhSachBenhNhanPhauThuat',
                this.queryInfo).subscribe(
                    resultData => {
                        this.closePopupLoadingData();
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                            'BaoCaoDanhSachBenhNhanPhauThuat' + dateTimeNow.getFullYear() + '.xlsx');
                    },
                    (err: any) => {
                        this.notificationService.showError(err.Message);
                    });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
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

    GetListAsync(eventList) {
        this.dataDanhSachBenhNhanPhauThuat = [...eventList.Data];
    }

    columnResize(event: any): void {
        console.log('column resize ', event);
        if (event != null && event.length > 0) {
            event.forEach(element => {
                const columnIndex = this.gridColumns.findIndex(x => x.Field === element.column.field);
                if (columnIndex >= 0) {
                    this.gridColumns[columnIndex].Width = element.newWidth;
                    if (jQuery('.k-detail-cell .k-grid-table').find('col')
                        && jQuery('.k-detail-cell .k-grid-table').find('col').length > 0) {
                        jQuery(jQuery('.k-detail-cell .k-grid-table').find('col')[columnIndex]).css({ width: element.newWidth });
                    }
                }
            });
        }
    }
}
