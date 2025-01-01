import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiService } from 'src/app/core/services/api.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { FormControl } from '@angular/forms';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { YcTraThuocSearch } from '../yeu-cau-tra-thuoc.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { InPhieuHoanTraCompoment } from '../../duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component';
import icPrint from "@iconify/icons-ic/twotone-print";

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-yeu-cau-tra-thuoc-list',
    templateUrl: './yeu-cau-tra-thuoc-list.component.html',
    styleUrls: ['./yeu-cau-tra-thuoc-list.component.scss']
})
export class YeuCauTraThuocListComponent implements OnInit {
    icMoreHoriz = icMoreHoriz;
    icActivated = icicActivated;
    icicUnActivated = icicUnActivated;
    icicdone = icicdone;
    icclose = icClose;
    icEdit = icEdit;
    icSearch = icSearch;
    icAdd = icAdd;
    icPrint = icPrint;
    icFilterList = icFilterList;
    icFileExcel = icFileExcel;

    documentType: DocumentType;
    gridColumns: any[] = [];
    gridChildColumns: any[] = [];
    urlGetDataGridChild = 'YeuCauTraThuoc/GetDataForGridChildAsync';
    urlGetTotalPageGridChild = 'YeuCauTraThuoc/GetTotalPageForGridChildAsync';
    ycTraThuocUtility: YcTraThuocSearch = new YcTraThuocSearch();
    searchString: string;
    searchCtrl = new FormControl();
    icDelete = icDelete;

    groups: GroupDescriptor[] = [{ field: 'Nhom' }];

    sort: SortDescriptor[] =
        [{
            field: 'NgayYeuCau',
            dir: 'desc'
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

    theFirstSearch: any;

    holdQuery: any = null;
    query: string = null;
    additionalSearchString: string = null;


    @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;

    @ViewChild('gridParent', { static: false }) gridParent: GridComponent;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
    @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
    @ViewChild('trangThaTemplate', { static: true }) trangThaTemplate: TemplateRef<any>;
    @ViewChild('headerTemplate', { static: true }) headerTemplate: TemplateRef<any>;
    @ViewChild('ngayNhapTemplate', { static: true }) ngayNhapTemplate: TemplateRef<any>;
    @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
    @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;

    @ViewChild('soChungTuTemplate', { static: true }) soChungTuTemplate: TemplateRef<any>;

    @ViewChild('giaTemplate', { static: true }) giaTemplate: TemplateRef<any>;

    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.YeuCauHoanTraDuocPham;
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }

        if (
            this.holdQuery != null &&
            LocalStorageHelper.getItem('additionalSearchStringYcTraThuoc') != null
        ) {
            this.additionalSearchString = LocalStorageHelper.getItem(
                'additionalSearchStringYcTraThuoc'
            );
            this.ycTraThuocUtility = JSON.parse(this.additionalSearchString);
            if (this.ycTraThuocUtility.RangeNhap != null) {
                if (this.ycTraThuocUtility.RangeNhap.startDate != null) {
                    const startDate = new Date(this.ycTraThuocUtility.RangeNhap.startDate);
                    this.ycTraThuocUtility.RangeNhap.startDate = new Date(startDate);
                }
                if (this.ycTraThuocUtility.RangeNhap.endDate != null) {
                    const endDate = new Date(this.ycTraThuocUtility.RangeNhap.endDate);
                    this.ycTraThuocUtility.RangeNhap.endDate = new Date(endDate);
                }
            }
            if (this.ycTraThuocUtility.RangeDuyet != null) {
                if (this.ycTraThuocUtility.RangeDuyet.startDate != null) {
                    const startDate = new Date(this.ycTraThuocUtility.RangeDuyet.startDate);
                    this.ycTraThuocUtility.RangeDuyet.startDate = new Date(startDate);
                }
                if (this.ycTraThuocUtility.RangeDuyet.endDate != null) {
                    const endDate = new Date(this.ycTraThuocUtility.RangeDuyet.endDate);
                    this.ycTraThuocUtility.RangeDuyet.endDate = new Date(endDate);
                }
            }
        } else {
            LocalStorageHelper.setItem('additionalSearchStringYcTraThuoc', null);
            this.additionalSearchString = JSON.stringify(this.ycTraThuocUtility);
        }

        this.gridColumns = [
            { Field: 'Ma', Title: 'Số Phiếu', Width: 116, Sortable: true, Template: this.soChungTuTemplate },
            { Field: 'NguoiYeuCau', Title: 'Người Yêu Cầu', MinWidth: 120, Sortable: true },
            { Field: 'KhoHoanTraTu', Title: 'Hoàn Trả Từ Kho', Width: 195, Sortable: true },
            { Field: 'KhoHoanTraVe', Title: 'Hoàn Trả Về Kho', Width: 254, Sortable: true },
            { Field: 'NgayYeuCauDisplay', Title: 'Ngày Yêu Cầu', Width: 140, Sortable: true, Template: this.ngayNhapTemplate },
            { Field: 'TinhTrangDisplay', Title: 'Tình Trạng', Width: 120, Sortable: false, Template: this.tinhTrangTemplate },
            { Field: 'NguoiDuyet', Title: 'Người Duyệt', Width: 120, Sortable: true, ShowTooltip: true },
            { Field: 'NgayDuyetDisplay', Title: 'Ngày Duyệt', Width: 140, Sortable: true, Template: this.ngayDuyetTemplate },
            { Field: 'Action', Title: '', HideFilter: true, Width: 50, Template: this.actionTemplate }
        ];

        this.gridChildColumns = [
            {
                Field: 'Nhom',
                Title: 'Tên Nhóm',
                Sortable: false,
                Hidden: true,
                HideFilter: true,
                TemplateGroupHeader: this.tenNhomGroupHeaderTemplate
            },
            { Field: 'HopDong', Title: 'HĐ Thầu', MinWidth: 150, Sortable: false },
            { Field: 'DuocPham', Title: 'Dược Phẩm', Width: 150, Sortable: false },
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: false },
            { Field: 'SoLo', Title: 'Số Lô', Width: 100, Sortable: false },
            { Field: 'HsdText', Title: 'Hạn Sử Dụng', Width: 140, Sortable: false },
            { Field: 'MaVach', Title: 'Mã Vạch', Width: 120, Sortable: false },
            { Field: 'SoLuongTra', Title: 'SL Trả', Width: 100, Sortable: false, Template: this.soLuongTemplate },
            { Field: 'DonGiaNhap', Title: 'Đơn Giá Nhập', Width: 120, Sortable: false, Template: this.giaTemplate },
            { Field: 'Vat', Title: 'VAT(%)', Width: 100, Sortable: false },
            { Field: 'TiLeThapGia', Title: 'TL Tháp Giá(%)', Width: 140, Sortable: false }
        ];

        this.theFirstSearch = JSON.stringify(this.ycTraThuocUtility);
    }

    themMoiYeuCauTraThuoc() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham/them']);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xemChiTiet(id: number, dataItem: any) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            // if (dataItem.TinhTrang == null) {
            //     this.router.navigateByUrl('/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham/chinh-sua/' + id + '?holdQuery=true');
            // } else if (dataItem.TinhTrang === false) {
            //     this.router.navigateByUrl('/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham/tu-choi-duyet/' + id + '?holdQuery=true');
            // } else {
            //     this.router.navigateByUrl('/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham/da-duyet/' + id + '?holdQuery=true');
            // }
            this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham/chinh-sua/" + id]);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    onKey(event: any) {
        if (event.keyCode === 13) {
            this.Timkiem();
        }
    }

    clearSearch() {
        if (this.ycTraThuocUtility.SearchString === '' || this.ycTraThuocUtility.SearchString == null) {
            const ycTraThuocUtilityClone: YcTraThuocSearch = JSON.parse(JSON.stringify(this.ycTraThuocUtility));

            if (ycTraThuocUtilityClone.RangeNhap.startDate != null) {
                const startDate = new Date(ycTraThuocUtilityClone.RangeNhap.startDate);
                ycTraThuocUtilityClone.RangeNhap.startDate = new Date(startDate);
            }

            if (ycTraThuocUtilityClone.RangeNhap.endDate != null) {
                const endDate = new Date(ycTraThuocUtilityClone.RangeNhap.endDate);
                ycTraThuocUtilityClone.RangeNhap.endDate = new Date(endDate);
            }

            if (ycTraThuocUtilityClone.RangeDuyet.startDate != null) {
                const startDate = new Date(ycTraThuocUtilityClone.RangeDuyet.startDate);
                ycTraThuocUtilityClone.RangeDuyet.startDate = new Date(startDate);
            }

            if (ycTraThuocUtilityClone.RangeDuyet.endDate != null) {
                const endDate = new Date(ycTraThuocUtilityClone.RangeDuyet.endDate);
                ycTraThuocUtilityClone.RangeDuyet.endDate = new Date(endDate);
            }

            this.query = JSON.stringify(ycTraThuocUtilityClone);

            const queryForHole = JSON.parse(JSON.stringify(ycTraThuocUtilityClone));
            if (queryForHole.RangeNhap != null) {
                if (queryForHole.RangeNhap.startDate != null) {
                    queryForHole.RangeNhap.startDate = new Date(queryForHole.RangeNhap.startDate);
                }
                if (queryForHole.RangeNhap.endDate != null) {
                    queryForHole.RangeNhap.endDate = new Date(queryForHole.RangeNhap.endDate);
                }
            }
            if (queryForHole.RangeDuyet != null) {
                if (queryForHole.RangeDuyet.startDate != null) {
                    queryForHole.RangeDuyet.startDate = new Date(queryForHole.RangeDuyet.startDate);
                }
                if (queryForHole.RangeDuyet.endDate != null) {
                    queryForHole.RangeDuyet.endDate = new Date(queryForHole.RangeDuyet.endDate);
                }
            }

            LocalStorageHelper.setItem(
                'additionalSearchStringYcTraThuoc',
                JSON.stringify(queryForHole)
            );

            this.gridChild.searchString = '';
            this.gridChild._additionalSearchString = this.query;
            this.gridChild.search();
        }
    }

    delete(id: number) {
        this.gridParent.delete(id);
    }

    Timkiem() {
        let QueryString = null;
        this.gridChild._additionalSearchString = null;
        QueryString = this.ycTraThuocUtility.SearchString;

        this.router.navigateByUrl('/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham?holdQuery=true');
        const ycTraThuocUtilityClone: YcTraThuocSearch = JSON.parse(JSON.stringify(this.ycTraThuocUtility));

        if (ycTraThuocUtilityClone.RangeNhap.startDate != null) {
            const startDate = new Date(ycTraThuocUtilityClone.RangeNhap.startDate);
            ycTraThuocUtilityClone.RangeNhap.startDate = new Date(startDate);
        }

        if (ycTraThuocUtilityClone.RangeNhap.endDate != null) {
            const endDate = new Date(ycTraThuocUtilityClone.RangeNhap.endDate);
            ycTraThuocUtilityClone.RangeNhap.endDate = new Date(endDate);
        }

        if (ycTraThuocUtilityClone.RangeDuyet.startDate != null) {
            const startDate = new Date(ycTraThuocUtilityClone.RangeDuyet.startDate);
            ycTraThuocUtilityClone.RangeDuyet.startDate = new Date(startDate);
        }

        if (ycTraThuocUtilityClone.RangeDuyet.endDate != null) {
            const endDate = new Date(ycTraThuocUtilityClone.RangeDuyet.endDate);
            ycTraThuocUtilityClone.RangeDuyet.endDate = new Date(endDate);
        }

        this.query = JSON.stringify(ycTraThuocUtilityClone);

        const queryForHole = JSON.parse(JSON.stringify(ycTraThuocUtilityClone));
        if (queryForHole.RangeNhap != null) {
            if (queryForHole.RangeNhap.startDate != null) {
                queryForHole.RangeNhap.startDate = new Date(queryForHole.RangeNhap.startDate);
            }
            if (queryForHole.RangeNhap.endDate != null) {
                queryForHole.RangeNhap.endDate = new Date(queryForHole.RangeNhap.endDate);
            }
        }
        if (queryForHole.RangeDuyet != null) {
            if (queryForHole.RangeDuyet.startDate != null) {
                queryForHole.RangeDuyet.startDate = new Date(queryForHole.RangeDuyet.startDate);
            }
            if (queryForHole.RangeDuyet.endDate != null) {
                queryForHole.RangeDuyet.endDate = new Date(queryForHole.RangeDuyet.endDate);
            }
        }

        LocalStorageHelper.setItem(
            'additionalSearchStringYcTraThuoc',
            JSON.stringify(queryForHole)
        );

        this.gridChild._additionalSearchString = this.query;
        this.gridChild.searchString = QueryString;
        this.gridChild.search();
    }

    exportExcel() {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.showPopupLoadingData();
            self.apiService.postExportExcel<string>('YeuCauTraThuoc/ExportYeuCauTraThuoc',
                self.gridChild._gridQueryInfo).subscribe(
                    resultData => {
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(
                            resultData, 'application/vnd.ms-excel',
                            'YeuCauTraThuoc' + dateTimeNow.getFullYear() + '.xlsx');
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

    changeNgayNhapRange() {
        this.Timkiem();
    }

    changeNgayDuyetRange() {
        this.Timkiem();
    }

    CheckboxChange($event, dangChoDuyet: boolean = false, tuChoiDuyet: boolean = false, daDuyet: boolean = false) {
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham?holdQuery=true');
        if (dangChoDuyet) {
            this.ycTraThuocUtility.DangChoDuyet = $event;
        } else if (tuChoiDuyet) {
            this.ycTraThuocUtility.TuChoiDuyet = $event;
        } else if (daDuyet) {
            this.ycTraThuocUtility.DaDuyet = $event;
        }
        this.Timkiem();
    }

    InPhieu(yeuCauHoanTraDuocPhamId: number) {
        this.dialog.open(InPhieuHoanTraCompoment, {
            disableClose: true,
            width: "1200px",
            // data: { yeuCauHoanTraDuocPhamId },
            data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: yeuCauHoanTraDuocPhamId, LaDuocPham: true, LaTuTruc: true, DuocDuyet: false },
        }).afterClosed().subscribe(() => {

        });
    }
}
