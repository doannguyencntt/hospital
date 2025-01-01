import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { ApproveData, DuTruGiamDoc, DuTruGiamDocDetail, Search } from '../du-tru-giam-doc.model';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icSearch from '@iconify/icons-ic/twotone-search';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { FormControl } from '@angular/forms';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DuTruGiamDocMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import icInfo from '@iconify/icons-ic/baseline-info';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { DuTruGiamDocDeclinedPopupComponent } from '../du-tru-giam-doc-declined-popup/du-tru-giam-doc-declined-popup.component';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-du-tru-giam-doc-list',
    templateUrl: './du-tru-giam-doc-list.component.html',
    styleUrls: ['./du-tru-giam-doc-list.component.scss']
})
export class DuTruGiamDocListComponent implements OnInit {
    validationErrors: any;
    documentType: DocumentType;
    holdQuery: any = null;
    additionalSearchString: string = null;
    search: Search = new Search();
    gridColumns: any[] = [];
    gridChildColumns: any[] = [];
    gridChildChoDuyetColumns: any[] = [];
    gridResultColumns: any[] = [];
    icSearch = icSearch;
    icFileExcel = icFileExcel;
    icFilterList = icFilterList;
    icMoreHoriz = icMoreHoriz;
    urlGetDataGridChild = 'TongHopDuTruMuaThuocTaiGiamDoc/GetDataForGridChildDuyetAsync';
    urlGetTotalPageGridChild = 'TongHopDuTruMuaThuocTaiGiamDoc/GetTotalPageForGridChildAsync';
    urlGetDataGridForChild = 'TongHopDuTruMuaThuocTaiGiamDoc/GetDataForGridDuyetDetail';
    query: string = null;
    searchCtrl = new FormControl();
    baseRoute = 'nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-giam-doc';
    sort: SortDescriptor[] =
        [{
            field: 'NgayYeuCau',
            dir: 'asc'
        },
        {
            field: 'Id',
            dir: 'asc'
        }];

    sortChild: SortDescriptor[] =
        [
            {
                field: 'Id',
                dir: 'asc'
            }
        ];
    groupLoais: GroupDescriptor[] = [{ field: 'Loai', dir: 'asc', aggregates: [] }];
    khos: any[] = [];
    hdts: any[] = [];
    icInfo = icInfo;
    groups: GroupDescriptor[] = [{
        field: 'Khoa', aggregates: [
            { field: 'SoLuongDuTru', aggregate: 'sum' },
            { field: 'SoLuongDuKienTrongKy', aggregate: 'sum' }
        ]
    }];
    sortChildForChild: SortDescriptor[] =
        [
            {
                field: 'Id',
                dir: 'asc'
            }
        ];

    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('gridParent', { static: false }) gridParent: GridComponent;
    @ViewChild('soPhieuTemplate', { static: true }) soPhieuTemplate: TemplateRef<any>;
    @ViewChild('ngayYeuCauTemplate', { static: true }) ngayYeuCauTemplate: TemplateRef<any>;
    @ViewChild('orderTemplate', { static: true }) orderTemplate: TemplateRef<any>;
    @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('soLuongDuTruTemplate', { static: true }) soLuongDuTruTemplate: TemplateRef<any>;
    @ViewChild('soLuongDuKienTemplate', { static: true }) soLuongDuKienTemplate: TemplateRef<any>;
    @ViewChild('soLuongDuTruTrKhoaTemplate', { static: true }) soLuongDuTruTrKhoaTemplate: TemplateRef<any>;
    @ViewChild('soLuongDuTruKhDuocTemplate', { static: true }) soLuongDuTruKhDuocTemplate: TemplateRef<any>;
    @ViewChild('soLuongDuTruDirectorTemplate', { static: true }) soLuongDuTruDirectorTemplate: TemplateRef<any>;
    @ViewChild('khoDuTruTonTemplate', { static: true }) khoDuTruTonTemplate: TemplateRef<any>;
    @ViewChild('khoTongTonTemplate', { static: true }) khoTongTonTemplate: TemplateRef<any>;
    @ViewChild('hdChuaNhapTemplate', { static: true }) hdChuaNhapTemplate: TemplateRef<any>;
    @ViewChild('khoaGroupHeader', { static: true }) khoaGroupHeader: TemplateRef<any>;
    @ViewChild('soLuongDuTruHeaderTemplate', { static: true }) soLuongDuTruHeaderTemplate: TemplateRef<any>;
    @ViewChild('soLuongDuKienHeaderTemplate', { static: true }) soLuongDuKienHeaderTemplate: TemplateRef<any>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private dialog: MatDialog,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiGiamDoc;
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }

        if (
            this.holdQuery != null &&
            LocalStorageHelper.getItem('adtSearchDuTruGiamDoc') != null
        ) {
            this.additionalSearchString = LocalStorageHelper.getItem(
                'adtSearchDuTruGiamDoc'
            );
            this.search = JSON.parse(this.additionalSearchString);
            if (this.search.RangeYeuCau != null) {
                if (this.search.RangeYeuCau.startDate != null) {
                    const startDate = new Date(this.search.RangeYeuCau.startDate);
                    this.search.RangeYeuCau.startDate = new Date(startDate);
                }
                if (this.search.RangeYeuCau.endDate != null) {
                    const endDate = new Date(this.search.RangeYeuCau.endDate);
                    this.search.RangeYeuCau.endDate = new Date(endDate);
                }
            }
            if (this.search.RangeDuyet != null) {
                if (this.search.RangeDuyet.startDate != null) {
                    const startDate = new Date(this.search.RangeDuyet.startDate);
                    this.search.RangeDuyet.startDate = new Date(startDate);
                }
                if (this.search.RangeDuyet.endDate != null) {
                    const endDate = new Date(this.search.RangeDuyet.endDate);
                    this.search.RangeDuyet.endDate = new Date(endDate);
                }
            }
        } else {
            LocalStorageHelper.setItem('adtSearchDuTruGiamDoc', null);
            this.additionalSearchString = JSON.stringify(this.search);
        }

        this.gridColumns = [
            { Field: 'SoPhieu', Title: 'Số Phiếu', MinWidth: 120, Sortable: true, Template: this.soPhieuTemplate },
            { Field: 'KyDuTru', Title: 'Kỳ Dự Trù', Sortable: true, Width: 160 },
            { Field: 'NguoiYeuCau', Title: 'Người Yêu Cầu', Width: 150, Sortable: true },
            { Field: 'NgayYeuCau', Title: 'Ngày Yêu Cầu', Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
            { Field: 'TrangThai', Title: 'Trạng Thái', Width: 150, Sortable: false, Template: this.trangThaiTemplate },
            { Field: 'NgayDuyet', Title: 'Ngày G.Đốc Duyệt', Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
            { Field: '', Title: '', HideFilter: true, Width: 170, Template: this.actionTemplate }
        ];

        this.gridChildColumns = [
            { Field: 'Loai', Title: 'Loại', ShowTooltip: true, Width: 67, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'DuocPham', Title: 'Dược phẩm', ShowTooltip: true, MinWidth: 96 },
            { Field: 'HoatChat', Title: 'Hoạt chất', ShowTooltip: true, Width: 91 },
            { Field: 'NongDo', Title: 'Nồng độ/ Hàm lượng', ShowTooltip: true, Width: 165 },
            { Field: 'Sdk', Title: 'SĐK', ShowTooltip: true, Width: 50 },
            { Field: 'Dvt', Title: 'ĐVT', ShowTooltip: true, Width: 50 },
            { Field: 'DuongDung', Title: 'ĐD', ShowTooltip: true, Width: 50 },
            { Field: 'NhaSx', Title: 'Nhà SX', ShowTooltip: true, Width: 80 },
            { Field: 'NuocSx', Title: 'Nước SX', ShowTooltip: true, Width: 83 },
            { Field: 'SoLuongDuTru', Title: 'SL Dự trù', Width: 120, Template: this.soLuongDuTruTemplate },
            { Field: 'SoLuongDuKienTrongKy', Title: 'SL D.Kiến S.Dụng Trong Kỳ', Width: 205, Template: this.soLuongDuKienTemplate },
            { Field: 'SoLuongDuTruTrKhoa', Title: 'T.Khoa Duyệt', Width: 120, Template: this.soLuongDuTruTrKhoaTemplate },
            { Field: 'SoLuongDuTruKhDuoc', Title: 'K.Dược Duyệt', Width: 125, Template: this.soLuongDuTruKhDuocTemplate },
            { Field: 'SoLuongDuTruDirector', Title: 'G.Đốc Duyệt', Width: 120, Template: this.soLuongDuTruDirectorTemplate }
        ];

        this.gridChildChoDuyetColumns = [
            { Field: 'Loai', Title: 'Loại', ShowTooltip: true, Width: 67, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'DuocPham', Title: 'Dược phẩm', ShowTooltip: true, MinWidth: 96 },
            { Field: 'HoatChat', Title: 'Hoạt chất', ShowTooltip: true, Width: 91 },
            { Field: 'NongDo', Title: 'Nồng độ/ Hàm lượng', ShowTooltip: true, Width: 165 },
            { Field: 'Sdk', Title: 'SĐK', ShowTooltip: true, Width: 50 },
            { Field: 'Dvt', Title: 'ĐVT', ShowTooltip: true, Width: 50 },
            { Field: 'DuongDung', Title: 'ĐD', ShowTooltip: true, Width: 50 },
            { Field: 'NhaSx', Title: 'Nhà SX', ShowTooltip: true, Width: 80 },
            { Field: 'NuocSx', Title: 'Nước SX', ShowTooltip: true, Width: 83 },
            { Field: 'SoLuongDuTru', Title: 'SL Dự trù', Width: 80, Template: this.soLuongDuTruTemplate },
            { Field: 'SoLuongDuKienTrongKy', Title: 'SL D.Kiến S.Dụng Trong Kỳ', Width: 205, Template: this.soLuongDuKienTemplate },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù Tồn', Width: 115, Template: this.khoDuTruTonTemplate },
            { Field: 'KhoTongTon', Title: 'Kho Tổng Tồn', Width: 111, Template: this.khoTongTonTemplate },
            { Field: 'HdChuaNhap', Title: 'H.Đồng Chưa Nhập', Width: 156, Template: this.hdChuaNhapTemplate },
            { Field: 'SoLuongDuTruTrKhoa', Title: 'T.Khoa Duyệt', Width: 120, Template: this.soLuongDuTruTrKhoaTemplate },
            { Field: 'SoLuongDuTruKhDuoc', Title: 'K.Dược Duyệt', Width: 125, Template: this.soLuongDuTruKhDuocTemplate },
            { Field: 'SoLuongDuTruDirector', Title: 'G.Đốc Duyệt', Width: 100, Template: this.soLuongDuTruDirectorTemplate }
        ];

        this.gridResultColumns = [
            {
                Field: 'Khoa',
                Title: '',
                Hidden: true,
                HideFilter: true,
                TemplateGroupHeader: this.khoaGroupHeader
            },
            { Field: 'Nhom', Title: 'Nhóm', Width: 150 },
            { Field: 'Kho', Title: 'Kho', MinWidth: 150, Sortable: false },
            {
                Field: 'SoLuongDuTru', Title: 'SL dự trù', Width: 100, Sortable: false,
                TemplateGroupFooter: this.soLuongDuTruHeaderTemplate, Template: this.soLuongDuTruTemplate
            },
            {
                Field: 'SoLuongDuKienTrongKy', Title: 'SL dự kiến trong kỳ', Width: 175, Sortable: false,
                TemplateGroupFooter: this.soLuongDuKienHeaderTemplate, Template: this.soLuongDuKienTemplate
            },
            { Field: 'NhomDieuTri', Title: 'Nhóm Đ.Trị/ D.Phòng', Width: 150, Sortable: false },
        ];
    }

    CheckboxChange($event, dangChoDuyet: boolean = false, tuChoiDuyet: boolean = false, daDuyet: boolean = false) {
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-giam-doc?holdQuery=true');
        if (dangChoDuyet) {
            this.search.DangChoDuyet = $event;
        } else if (tuChoiDuyet) {
            this.search.TuChoiDuyet = $event;
        } else if (daDuyet) {
            this.search.DaDuyet = $event;
        }
        this.Timkiem();
    }

    SetColorForTrangThai() {
        setTimeout(() => {
            $('.orange-txt').css('color', 'orange');
            $('.red-txt').css('color', 'red');
            $('.green-txt').css('color', 'green');
        }, 50);
    }

    TooltipCustom(duTruGiamDocDetail: DuTruGiamDocDetail) {
        this.khos = [...duTruGiamDocDetail.TongTonList];
        this.hdts = [...duTruGiamDocDetail.HdChuaNhapList];
    }

    Timkiem() {
        let QueryString = null;
        this.gridParent._additionalSearchString = null;
        QueryString = this.search.SearchString;

        this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-giam-doc?holdQuery=true');
        const searchClone: Search = JSON.parse(JSON.stringify(this.search));

        if (searchClone.RangeYeuCau.startDate != null) {
            const startDate = new Date(searchClone.RangeYeuCau.startDate);
            searchClone.RangeYeuCau.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
                , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }

        if (searchClone.RangeYeuCau.endDate != null) {
            const endDate = new Date(searchClone.RangeYeuCau.endDate);
            searchClone.RangeYeuCau.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }

        if (searchClone.RangeDuyet.startDate != null) {
            const startDate = new Date(searchClone.RangeDuyet.startDate);
            searchClone.RangeDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
                , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }

        if (searchClone.RangeDuyet.endDate != null) {
            const endDate = new Date(searchClone.RangeDuyet.endDate);
            searchClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }

        this.query = JSON.stringify(searchClone);

        const queryForHold = JSON.parse(JSON.stringify(searchClone));
        if (queryForHold.RangeYeuCau != null) {
            if (queryForHold.RangeYeuCau.startDate != null) {
                queryForHold.RangeYeuCau.startDate = new Date(queryForHold.RangeYeuCau.startDate);
            }
            if (queryForHold.RangeYeuCau.endDate != null) {
                queryForHold.RangeYeuCau.endDate = new Date(queryForHold.RangeYeuCau.endDate);
            }
        }
        if (queryForHold.RangeDuyet != null) {
            if (queryForHold.RangeDuyet.startDate != null) {
                queryForHold.RangeDuyet.startDate = new Date(queryForHold.RangeDuyet.startDate);
            }
            if (queryForHold.RangeDuyet.endDate != null) {
                queryForHold.RangeDuyet.endDate = new Date(queryForHold.RangeDuyet.endDate);
            }
        }

        LocalStorageHelper.setItem(
            'adtSearchDuTruGiamDoc',
            JSON.stringify(queryForHold)
        );

        this.gridParent._additionalSearchString = this.query;
        this.gridParent.searchString = QueryString;
        this.gridParent.search();
    }

    clearSearch() {
        if (this.search.SearchString === '' || this.search.SearchString == null) {
            const searchClone: Search = JSON.parse(JSON.stringify(this.search));

            if (searchClone.RangeYeuCau.startDate != null) {
                const startDate = new Date(searchClone.RangeYeuCau.startDate);
                searchClone.RangeYeuCau.startDate = new Date(startDate);
            }

            if (searchClone.RangeYeuCau.endDate != null) {
                const endDate = new Date(searchClone.RangeYeuCau.endDate);
                searchClone.RangeYeuCau.endDate = new Date(endDate);
            }

            if (searchClone.RangeDuyet.startDate != null) {
                const startDate = new Date(searchClone.RangeDuyet.startDate);
                searchClone.RangeDuyet.startDate = new Date(startDate);
            }

            if (searchClone.RangeDuyet.endDate != null) {
                const endDate = new Date(searchClone.RangeDuyet.endDate);
                searchClone.RangeDuyet.endDate = new Date(endDate);
            }

            this.query = JSON.stringify(searchClone);

            const queryForHold = JSON.parse(JSON.stringify(searchClone));
            if (queryForHold.RangeYeuCau != null) {
                if (queryForHold.RangeYeuCau.startDate != null) {
                    queryForHold.RangeYeuCau.startDate = new Date(queryForHold.RangeYeuCau.startDate);
                }
                if (queryForHold.RangeYeuCau.endDate != null) {
                    queryForHold.RangeYeuCau.endDate = new Date(queryForHold.RangeYeuCau.endDate);
                }
            }
            if (queryForHold.RangeDuyet != null) {
                if (queryForHold.RangeDuyet.startDate != null) {
                    queryForHold.RangeDuyet.startDate = new Date(queryForHold.RangeDuyet.startDate);
                }
                if (queryForHold.RangeDuyet.endDate != null) {
                    queryForHold.RangeDuyet.endDate = new Date(queryForHold.RangeDuyet.endDate);
                }
            }

            LocalStorageHelper.setItem(
                'adtSearchDuTruGiamDoc',
                JSON.stringify(queryForHold)
            );

            if (this.gridParent) {
                this.gridParent._additionalSearchString = this.query;
                this.gridParent.searchString = '';
                this.gridParent.search();
            }
        }
    }

    onKey(event: any) {
        if (event.keyCode === 13) {
            this.Timkiem();
        }
    }

    exportExcel() {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.showPopupLoadingData();
            self.apiService.postExportExcel<string>('TongHopDuTruMuaThuocTaiGiamDoc/ExportTongHopDuTruMuaThuocTaiGiamDoc',
                self.gridParent._gridQueryInfo).subscribe(
                    resultData => {
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(
                            resultData, 'application/vnd.ms-excel',
                            'TongHopDuTruMuaThuocTaiGiamDoc' + dateTimeNow.getFullYear() + '.xlsx');
                        self.closePopupLoadingData();
                    },
                    (err: any) => {
                        self.notificationService.showError(err.Message);
                        self.closePopupLoadingData();
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

    edit(id: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.router.navigateByUrl(this.baseRoute + '/chi-tiet/' + id + '?holdQuery=true');
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    Decline(item: DuTruGiamDoc) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(DuTruGiamDocDeclinedPopupComponent, {
                disableClose: false,
                width: '400px',
                data: {}
            }).afterClosed().subscribe(result => {
                if (result && result.includes('Yes')) {
                    const resSplit = result.split(' - ');
                    const approve = new ApproveData();
                    approve.Id = item.Id;
                    approve.LyDo = resSplit[1];
                    this.apiService.post('TongHopDuTruMuaThuocTaiGiamDoc/Decline', approve).subscribe(
                        () => {
                            this.notificationService.showSuccess(DuTruGiamDocMessage.MessageDecline);
                            this.gridParent.setDataSource();
                        },
                        (err: any) => {
                            this.notificationService.showError(err.Message);
                        });
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    Approve(item: DuTruGiamDoc) {
        const confirm = 'duyệt';
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessLockTemplate, [confirm, 'phiếu dự trù']) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    this.apiService.get(`TongHopDuTruMuaThuocTaiGiamDoc/Approve?id=${item.Id}`).subscribe(
                        () => {
                            this.notificationService.showSuccess(DuTruGiamDocMessage.MessageApprove);
                            this.gridParent.setDataSource();
                        },
                        (err: any) => {
                            this.notificationService.showError(err.Message);
                        });
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
