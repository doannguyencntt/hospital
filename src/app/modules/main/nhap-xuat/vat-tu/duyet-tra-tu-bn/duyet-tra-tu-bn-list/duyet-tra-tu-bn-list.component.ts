import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Search } from '../duyet-tra-tu-bn.model';
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
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icInfo from '@iconify/icons-ic/baseline-info';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPrint from "@iconify/icons-ic/twotone-print";
import { InPhieuHoanTraCompoment } from '../../../duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-duyet-tra-vat-tu-tu-bn-list',
    templateUrl: './duyet-tra-tu-bn-list.component.html',
    styleUrls: ['./duyet-tra-tu-bn-list.component.scss']
})
export class DuyetTraVatTuTuBnListComponent implements OnInit {
    validationErrors: any;
    documentType: DocumentType;
    holdQuery: any = null;
    additionalSearchString: string = null;
    search: Search = new Search();
    gridColumns: any[] = [];
    gridVatTuColumns: any[] = [];
    gridYeuCauChiTietColumns: any[] = [];
    gridResultColumns: any[] = [];
    icSearch = icSearch;
    icFileExcel = icFileExcel;
    icFilterList = icFilterList;
    icMoreHoriz = icMoreHoriz;
    icDelete = icDelete;
    icPrint = icPrint;
    urlGetDataVatTu = 'DuyetTraVatTuTuBn/GetDataForGridAsyncVatTuChild';
    // urlGetDataBenhNhan = 'DuyetTraVatTuTuBn/GetDataForGridAsyncBenhNhanChild';
    urlGetDataBenhNhan: string = "YeuCauTraVatTuTuBenhNhan/GetDataForGridAsyncBenhNhanChild";

    query: string = null;
    searchCtrl = new FormControl();
    baseRoute = 'nhap-xuat/vat-tu/hoan-tra/tu-benh-nhan/duyet-hoan-tra';
    khos: any[] = [];
    hdts: any[] = [];
    icInfo = icInfo;
    groups: GroupDescriptor[] = [{ field: 'Nhom' }];
    sort: SortDescriptor[] =
        [{
            field: 'TinhTrang',
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
    groupBenhNhan: GroupDescriptor[] = [{ field: 'BenhNhan' }];

    sortChildForChild: SortDescriptor[] =
        [
            {
                field: 'Id',
                dir: 'asc'
            }
        ];

    groupLoais: GroupDescriptor[] = [{ field: 'Loai', dir: 'asc', aggregates: [] }];
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('gridParent', { static: false }) gridParent: GridComponent;
    @ViewChild('soPhieuTemplate', { static: true }) soPhieuTemplate: TemplateRef<any>;
    @ViewChild('ngayYeuCauTemplate', { static: true }) ngayYeuCauTemplate: TemplateRef<any>;
    @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('soLuongDuTruTemplate', { static: true }) soLuongDuTruTemplate: TemplateRef<any>;
    @ViewChild('soLuongDuKienTemplate', { static: true }) soLuongDuKienTemplate: TemplateRef<any>;
    @ViewChild('khoTongTonTemplate', { static: true }) khoTongTonTemplate: TemplateRef<any>;
    @ViewChild('hdChuaNhapTemplate', { static: true }) hdChuaNhapTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('khoaGroupHeader', { static: true }) khoaGroupHeader: TemplateRef<any>;
    @ViewChild('soLuongDuTruHeaderTemplate', { static: true }) soLuongDuTruHeaderTemplate: TemplateRef<any>;
    @ViewChild('soLuongDuKienHeaderTemplate', { static: true }) soLuongDuKienHeaderTemplate: TemplateRef<any>;
    @ViewChild('ngayDieuTriTemplate', { static: true }) ngayDieuTriTemplate: TemplateRef<any>;
    @ViewChild('ngayTraTemplate', { static: true }) ngayTraTemplate: TemplateRef<any>;
    @ViewChild('benhNhanGroupHeaderTemplate', { static: true }) benhNhanGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private dialog: MatDialog,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.DuyetTraVatTuTuBenhNhan;
        if (this.route.snapshot.queryParams.holdQuery) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }

        if (
            this.holdQuery &&
            LocalStorageHelper.getItem('adtSearchDuyetTraTuBn')
        ) {
            this.additionalSearchString = LocalStorageHelper.getItem(
                'adtSearchDuyetTraTuBn'
            );
            this.search = JSON.parse(this.additionalSearchString);
            if (this.search.RangeYeuCau) {
                if (this.search.RangeYeuCau.startDate) {
                    const startDate = new Date(this.search.RangeYeuCau.startDate);
                    this.search.RangeYeuCau.startDate = new Date(startDate);
                }
                if (this.search.RangeYeuCau.endDate) {
                    const endDate = new Date(this.search.RangeYeuCau.endDate);
                    this.search.RangeYeuCau.endDate = new Date(endDate);
                }
            }
            if (this.search.RangeDuyet) {
                if (this.search.RangeDuyet.startDate) {
                    const startDate = new Date(this.search.RangeDuyet.startDate);
                    this.search.RangeDuyet.startDate = new Date(startDate);
                }
                if (this.search.RangeDuyet.endDate) {
                    const endDate = new Date(this.search.RangeDuyet.endDate);
                    this.search.RangeDuyet.endDate = new Date(endDate);
                }
            }
        } else {
            LocalStorageHelper.setItem('adtSearchDuyetTraTuBn', null);
            this.additionalSearchString = JSON.stringify(this.search);
        }

        this.gridColumns = [
            { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 143, Sortable: true, Template: this.soPhieuTemplate },
            { Field: 'KhoaHoanTraDisplay', Title: 'Khoa Hoàn Trả', Sortable: true, Width: 165 },
            { Field: 'HoanTraVeKhoDisplay', Title: 'Hoàn Trả Về Kho', MinWidth: 300, Sortable: true },
            { Field: 'NguoiYeuCauDisplay', Title: 'Người Yêu Cầu', Width: 190, Sortable: true },
            { Field: 'NgayYeuCau', Title: 'Ngày Yêu Cầu', Width: 220, Sortable: true, Template: this.ngayYeuCauTemplate },
            { Field: 'TinhTrang', Title: 'Tình Trạng', Width: 180, Sortable: false, Template: this.trangThaiTemplate },
            { Field: 'NguoiDuyetDisplay', Title: 'Người Duyệt', Width: 190, Sortable: true },
            { Field: 'NgayDuyet', Title: 'Ngày Duyệt', Width: 220, Sortable: true, Template: this.ngayDuyetTemplate },
            { Field: 'Action', Title: '', HideFilter: true, Width: 45, Template: this.actionTemplate }
        ];

        this.gridVatTuColumns = [
            { Field: 'Nhom', Title: 'Nhóm', Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'VatTu', Title: 'Vật tư', MinWidth: 120, Sortable: true },
            { Field: 'Dvt', Title: 'ĐVT', Width: 150, Sortable: false },
            { Field: 'TongSlChiDinh', Title: 'Tổng SL chỉ định', Width: 150, Sortable: false },
            { Field: 'TongSlDaTra', Title: 'Tổng SL đã trả', Width: 150, Sortable: false, },
            { Field: 'TongSlTraLanNay', Title: 'Tổng SL trả lần này', Width: 150, Sortable: false }
        ];

        this.gridYeuCauChiTietColumns = [
            { Field: "NgayDieuTri", Title: "Ngày Điều Trị", Width: 120, Sortable: false, Template: this.ngayDieuTriTemplate },
            { Field: "NgayTra", Title: "Ngày Trả", Width: 150, Sortable: false, Template: this.ngayTraTemplate },
            { Field: "BenhNhan", Title: "", Width: 150, Sortable: false, Hidden: true, TemplateGroupHeader: this.benhNhanGroupHeaderTemplate },
            { Field: "NhanVienYeuCau", Title: "Người trả", Width: 150, Sortable: false },
            { Field: "SoLuongTraLanNay", Title: "SL trả lần này", Width: 150, Sortable: false },
            { Field: "DonGia", Title: "Đơn giá", Width: 150, Sortable: false, Template: this.donGiaTemplate },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 150, Sortable: false, Template: this.thanhTienTemplate },
        ];

        this.gridResultColumns = [
            {
                Field: 'Khoa',
                Title: '',
                Hidden: true,
                TemplateGroupHeader: this.khoaGroupHeader
            },
            { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: false },
            {
                Field: 'SoLuongDuTru', Title: 'SL dự trù', Width: 100, Sortable: false,
                TemplateGroupFooter: this.soLuongDuTruHeaderTemplate, Template: this.soLuongDuTruTemplate
            },
            {
                Field: 'SoLuongDuKienTrongKy', Title: 'SL dự kiến trong kỳ', Width: 170, Sortable: false,
                TemplateGroupFooter: this.soLuongDuKienHeaderTemplate, Template: this.soLuongDuKienTemplate
            },
        ];
    }

    CheckboxChange($event, dangChoDuyet: boolean = false, daDuyet: boolean = false) {
        this.router.navigateByUrl('/nhap-xuat/vat-tu/hoan-tra/tu-benh-nhan/duyet-hoan-tra?holdQuery=true');
        if (dangChoDuyet) {
            this.search.DangChoDuyet = $event;
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

    Timkiem() {
        let QueryString = null;
        this.gridParent._additionalSearchString = null;
        QueryString = this.search.SearchString;

        this.router.navigateByUrl('/nhap-xuat/vat-tu/hoan-tra/tu-benh-nhan/duyet-hoan-tra?holdQuery=true');
        const searchClone: Search = JSON.parse(JSON.stringify(this.search));

        if (searchClone.RangeYeuCau.startDate) {
            const startDate = new Date(searchClone.RangeYeuCau.startDate);
            searchClone.RangeYeuCau.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
                , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }

        if (searchClone.RangeYeuCau.endDate) {
            const endDate = new Date(searchClone.RangeYeuCau.endDate);
            searchClone.RangeYeuCau.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }

        if (searchClone.RangeDuyet.startDate) {
            const startDate = new Date(searchClone.RangeDuyet.startDate);
            searchClone.RangeDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
                , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }

        if (searchClone.RangeDuyet.endDate) {
            const endDate = new Date(searchClone.RangeDuyet.endDate);
            searchClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }

        this.query = JSON.stringify(searchClone);

        const queryForHold = JSON.parse(JSON.stringify(searchClone));
        if (queryForHold.RangeYeuCau) {
            if (queryForHold.RangeYeuCau.startDate) {
                queryForHold.RangeYeuCau.startDate = new Date(queryForHold.RangeYeuCau.startDate);
            }
            if (queryForHold.RangeYeuCau.endDate) {
                queryForHold.RangeYeuCau.endDate = new Date(queryForHold.RangeYeuCau.endDate);
            }
        }
        if (queryForHold.RangeDuyet) {
            if (queryForHold.RangeDuyet.startDate) {
                queryForHold.RangeDuyet.startDate = new Date(queryForHold.RangeDuyet.startDate);
            }
            if (queryForHold.RangeDuyet.endDate) {
                queryForHold.RangeDuyet.endDate = new Date(queryForHold.RangeDuyet.endDate);
            }
        }

        LocalStorageHelper.setItem(
            'adtSearchDuyetTraTuBn',
            JSON.stringify(queryForHold)
        );

        this.gridParent._additionalSearchString = this.query;
        this.gridParent.searchString = QueryString;
        this.gridParent.search();
    }

    clearSearch() {
        if (this.search.SearchString === '' || this.search.SearchString == null) {
            const searchClone: Search = JSON.parse(JSON.stringify(this.search));

            if (searchClone.RangeYeuCau.startDate) {
                const startDate = new Date(searchClone.RangeYeuCau.startDate);
                searchClone.RangeYeuCau.startDate = new Date(startDate);
            }

            if (searchClone.RangeYeuCau.endDate) {
                const endDate = new Date(searchClone.RangeYeuCau.endDate);
                searchClone.RangeYeuCau.endDate = new Date(endDate);
            }

            if (searchClone.RangeDuyet.startDate) {
                const startDate = new Date(searchClone.RangeDuyet.startDate);
                searchClone.RangeDuyet.startDate = new Date(startDate);
            }

            if (searchClone.RangeDuyet.endDate) {
                const endDate = new Date(searchClone.RangeDuyet.endDate);
                searchClone.RangeDuyet.endDate = new Date(endDate);
            }

            this.query = JSON.stringify(searchClone);

            const queryForHold = JSON.parse(JSON.stringify(searchClone));
            if (queryForHold.RangeYeuCau) {
                if (queryForHold.RangeYeuCau.startDate) {
                    queryForHold.RangeYeuCau.startDate = new Date(queryForHold.RangeYeuCau.startDate);
                }
                if (queryForHold.RangeYeuCau.endDate) {
                    queryForHold.RangeYeuCau.endDate = new Date(queryForHold.RangeYeuCau.endDate);
                }
            }
            if (queryForHold.RangeDuyet) {
                if (queryForHold.RangeDuyet.startDate) {
                    queryForHold.RangeDuyet.startDate = new Date(queryForHold.RangeDuyet.startDate);
                }
                if (queryForHold.RangeDuyet.endDate) {
                    queryForHold.RangeDuyet.endDate = new Date(queryForHold.RangeDuyet.endDate);
                }
            }

            LocalStorageHelper.setItem(
                'adtSearchDuyetTraTuBn',
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
            self.apiService.postExportExcel<string>('DuyetTraVatTuTuBn/ExportDuyetPhieuTraVatTuTuBn',
                self.gridParent._gridQueryInfo).subscribe(
                    resultData => {
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(
                            resultData, 'application/vnd.ms-excel',
                            'DuyetPhieuTraVatTuTuBn' + dateTimeNow.getFullYear() + '.xlsx');
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

    showPopupDeletePhieu() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xóa phiếu trả vật tư...' }
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

    delete(id: number) {
        this.gridParent.delete(id);
    }

    inPhieu(id: number) {
        this.dialog.open(InPhieuHoanTraCompoment, {
            disableClose: true,
            width: "1200px",
            data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: id, LaDuocPham: false, LaTuTruc: false , DuocDuyet: true},
        }).afterClosed().subscribe((result) => { });
    }
}
