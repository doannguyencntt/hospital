import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaoCaoClsBacSi, BaoCaoClsBacSiSearch, BaoCaoThucHienClsVo, Search } from '../bao-cao-thuc-hien-cls.model';
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
import { Location } from '@angular/common';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-bao-cao-thuc-hien-cls-list',
    templateUrl: './bao-cao-thuc-hien-cls-list.component.html',
    styleUrls: ['./bao-cao-thuc-hien-cls-list.component.scss']
})
export class BaoCaoThucHienClsListComponent implements OnInit {
    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private location: Location,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }
    baoCaoSearch: BaoCaoClsBacSiSearch = new BaoCaoClsBacSiSearch();
    //inBaoCaoTinhHinhNhapTuNCCKT: InBaoCaoTinhHinhNhapTuNCCKT = new InBaoCaoTinhHinhNhapTuNCCKT();
    additionalSearchString = "";
    minDateDenNgay: Date = null;
    minDateTuNgay: Date = null;
    searchQuery = new Search();
    baoCaoClsBacSi: BaoCaoClsBacSi = new BaoCaoClsBacSi();
    urlGetData: string = 'BaoCaoThucHienCls/GetDataForGridAsync';
    urlGetTotalData: string = 'BaoCaoThucHienCls/GetTotalPageForGridAsync';
    urlGetDataChild: string = 'BaoCaoThucHienCls/GetDataForGridAsyncChild';
    urlGetTotalDataChild: string = 'BaoCaoThucHienCls/GetTotalPageForGridAsyncChild';

    gridColumns: any[] = [];
    gridColumnsDetail: any[] = [];
    public gridView: GridDataResult;
    public data: any[]
    ishowView: boolean = false;
    IsData: boolean = false;
    icSearch = icSearch;
    icFileExcel = icFileExcel;
    documentType: DocumentType;
    searchCtrl = new FormControl();
    baseRoute = '/bao-cao/bao-cao-bac-si-thuc-hien-cls';
    dataBaoCaoThucHienCls: BaoCaoThucHienClsVo[] = [];
    @Input() bodyComponent: any;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild('ngayThucHienTemplate', { static: true }) ngayThucHienTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('tenGoiTemplate', { static: true }) tenGoiTemplate: TemplateRef<any>;
    @ViewChild('soBSTemplate', { static: true }) soBSTemplate: TemplateRef<any>;
    @ViewChild('teNhomGroupTemplate', { static: true }) teNhomGroupTemplate: TemplateRef<any>;
    groups: GroupDescriptor[] = [{ field: 'Ten' }];

    ngOnInit() {
        this.documentType = DocumentType.BaoCaoThucHienCls;

        this.gridColumns = [
            { Field: "TenBacSiKetLuan", Title: "Bác sĩ", Width: 600, Sortable: false, Template: this.tenGoiTemplate },
            { Field: "SoBacSiKetLuan", Title: "TÌnh Trạng", Width: 200, Sortable: true, Template: this.soBSTemplate },
        ];
        this.gridColumnsDetail = [
            { Field: "Ten", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "NgayThucHien", Title: "Ngày", Width: 50, Sortable: true, ShowTooltip: true, Template: this.ngayThucHienTemplate },
            { Field: "MaTN", Title: "Mã TN", Width: 70, Sortable: false, ShowTooltip: true },
            { Field: "SoBA", Title: "Số BA", Width: 50, Sortable: false, Hidden: true },
            { Field: "HoTen", Title: "Họ và tên", Width: 50, Sortable: false },
            { Field: "NamSinh", Title: "Năm sinh", Width: 30, Sortable: false },
            { Field: "DiaChi", Title: "Địa CHỉ", Width: 80, Sortable: false },
            { Field: "TenBacSiChiDinh", Title: "Bs.Chỉ Định", Width: 80, Sortable: false },
            { Field: "KTVDieuDuong", Title: "KTV I", Width: 100, Sortable: false },
            { Field: "KetLuan", Title: "Kết Luận", Width: 100, Sortable: false },
        ]

        // this.gridColumns = [
        //     { Field: "NgayThucHien", Title: "Ngày khám", Width: 100 },
        //     { Field: "MaTN", Title: "Mã TN", Width: 100, },
        //     { Field: "SoBA", Title: "Tên BN", Width: 100, },
        //     { Field: "HoTen", Title: "Năm sinh", Width: 250, },
        //     { Field: "NamSinh", Title: "Địa chỉ", Width: 100, },
        //     { Field: "DiaChi", Title: "BS khám", Width: 250, },
        //     { Field: "TenBacSiChiDinh", Title: "Tên DV", Width: 250, },
        //     { Field: "KTV", Title: "Nhóm DV", Width: 250, },
        //     { Field: "KetLuan", Title: "Số tiền DV", Width: 250},
        //     {
        //         Field: 'Nhom',
        //         Title: '',
        //         Width: 150,
        //         Sortable: true,
        //         Hidden: true,
        //         HideFilter: true,
        //         TemplateGroupHeader: this.teNhomGroupTemplate
        //       }
        //   ];
    }

    onAdvanceSearch() {
        // this.location.replaceState(this.baseRoute + '?holdQuery=true');
        // if (this.searchQuery.FromToDate != null && this.searchQuery.FromToDate.startDate != null) {
        //     this.searchQuery.FromToDate.TuNgay = CommonService.formatDateTime(this.searchQuery.FromToDate.startDate, 'mm/dd/yyyy');
        // } else {
        //     this.searchQuery.FromToDate.TuNgay = null;
        // }
        // if (this.searchQuery.FromToDate != null && this.searchQuery.FromToDate.endDate != null) {
        //     this.searchQuery.FromToDate.DenNgay = CommonService.formatDateTime(this.searchQuery.FromToDate.endDate, 'mm/dd/yyyy');
        // } else {
        //     this.searchQuery.FromToDate.DenNgay = null;
        // }

        // const queryString = JSON.stringify(this.searchQuery);
        // this.gridChild._additionalSearchString = queryString;

        // LocalStorageHelper.setItem('cacheBaoCaoDoanhThu', queryString);
        // this.gridChild.search();
    }

    RenderGroupHeader(titleGroup: string, aggregates: any) {
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        const numberOfPatiences = aggregates.items.map(x => x.BenhNhanId).filter(onlyUnique).length;

        return `${titleGroup}: ${numberOfPatiences}/${aggregates.items.length}`;
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

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('BaoCaoThucHienCls/ExportBaoCaoThucHienCls',
                self.gridChild._gridQueryInfo).subscribe(
                    resultData => {
                        self.closePopupLoadingData();
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                            'BaoCaoThucHienCls' + dateTimeNow.getFullYear() + '.xlsx');
                    },
                    (err: any) => {
                        self.notificationService.showError(err.Message);
                    });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    XemBaoCao() {
        // if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
        //     this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        //     return;
        // }
        // if (this.baoCaoSearch.TuNgayFormat == null) {
        //     this.minDateTuNgay = new Date();
        //     this.minDateTuNgay.setHours(0, 0, 0, 0);
        //     this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
        // }
        // if (this.baoCaoSearch.DenNgayFormat == null) {
        //     this.minDateTuNgay = new Date();
        //     this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
        // }
        // let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
        // let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");

        // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
        // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
        // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
        this.apiService.post<any>("BaoCao/GetBaoCaoBangKeBacSiCLSForGridAsync", this.gridChild._gridQueryInfo).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                //this.IsData = true;

                this.gridView = process(resultData.Data, { group: this.groups });
                if (resultData.TotalRowCount != 0) {
                    this.ishowView = true;
                } else {
                    this.ishowView = false;
                }
            }
        });
    }
    XuatBaoCao() {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            if (this.baoCaoClsBacSi.ThoiDiemTiepNhanTuFormat != null) {
                this.baoCaoClsBacSi.FromDate = CommonService.formatDateTime(
                  this.baoCaoClsBacSi.ThoiDiemTiepNhanTuFormat,
                  "dd/mm/yyyy"
                );
              } else {
                this.baoCaoClsBacSi.FromDate = null;
              }
          
              if (this.baoCaoClsBacSi.ThoiDiemTiepNhanDenFormat != null) {
                this.baoCaoClsBacSi.ToDate = CommonService.formatDateTime(
                  this.baoCaoClsBacSi.ThoiDiemTiepNhanDenFormat,
                  "dd/mm/yyyy"
                );
              } else {
                this.baoCaoClsBacSi.ToDate = null;
              }
            self.apiService.postExportExcel<string>('BaoCaoThucHienCls/ExportBaoCaoBangKeBacSiCLS', this.baoCaoClsBacSi).subscribe(
                resultData => {
                    self.dialog.closeAll();
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                        'BaoCaoThucHienCls' + dateTimeNow.getFullYear() + '.xlsx');
                },
                (err: any) => {
                    self.notificationService.showError(err.Message);
                    self.dialog.closeAll();
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

    GetListAsync(eventList) {
        this.dataBaoCaoThucHienCls = [...eventList.Data];
    }
}
