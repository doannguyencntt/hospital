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
import { BaseService } from 'src/app/core/services/base.service';
import icClose from '@iconify/icons-ic/twotone-close';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import icPrint from "@iconify/icons-ic/twotone-print";
import { LoaiDuocPhamVatTu, YcTraKSNKSearch } from '../yeu-cau-tra-ksnk.model';
import { InPhieuHoanTraKSNKComponent } from '../in-phieu-hoan-tra/in-phieu-hoan-tra.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-yeu-cau-tra-ksnk-list',
    templateUrl: './yeu-cau-tra-ksnk-list.component.html',
    styleUrls: ['./yeu-cau-tra-ksnk-list.component.scss']
})
export class YeuCauTraKSNKListComponent implements OnInit {
    icMoreHoriz = icMoreHoriz;
    icActivated = icicActivated;
    icicUnActivated = icicUnActivated;
    icicdone = icicdone;
    icclose = icClose;
    icEdit = icEdit;
    icSearch = icSearch;
    icAdd = icAdd;
    icFilterList = icFilterList;
    icFileExcel = icFileExcel;
    icPrint = icPrint;
    mySelection: number[] = [];
    validationErrors: any;

    LoaiDuocPhamVatTu: LoaiDuocPhamVatTu;
    loaiDuocPham = LoaiDuocPhamVatTu.LoaiDuocPham;
    loaiVatTu = LoaiDuocPhamVatTu.LoaiVatTu;

    documentType: DocumentType;
    gridColumns: any[] = [];
    gridChildColumns: any[] = [];

    urlGetDataGridVatTuChild = 'YeuCauTraKSNK/GetDataForGridChildAsync';
    urlGetTotalPageGridVatTuChild = 'YeuCauTraKSNK/GetTotalPageForGridChildAsync';

    //clone dược phẩm
    urlGetDataGridDuocPhamChild = 'YeuCauTraKSNK/GetDataGridDuocPhamChild';
    urlGetTotalPageGridDuocPhamChild = 'YeuCauTraKSNK/GetTotalPageGridDuocPhamChild';

    ycTraVatTuUtility: YcTraKSNKSearch = new YcTraKSNKSearch();
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

    holdQuery: any = null;
    query: string = null;
    additionalSearchString: string = null;


    @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
    @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
    @ViewChild('trangThaTemplate', { static: true }) trangThaTemplate: TemplateRef<any>;
    @ViewChild('gridParent', { static: false }) gridParent: GridComponent;
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
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.documentType = DocumentType.YeuCauHoanTraKSNK;

        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }

        if (
            this.holdQuery != null &&
            LocalStorageHelper.getItem('additionalSearchStringYcTraKSNK') != null
        ) {
            this.additionalSearchString = LocalStorageHelper.getItem(
                'additionalSearchStringYcTraKSNK'
            );
            this.ycTraVatTuUtility = JSON.parse(this.additionalSearchString);
            if (this.ycTraVatTuUtility.RangeNhap != null) {
                if (this.ycTraVatTuUtility.RangeNhap.startDate != null) {
                    const startDate = new Date(this.ycTraVatTuUtility.RangeNhap.startDate);
                    this.ycTraVatTuUtility.RangeNhap.startDate = new Date(startDate);
                }
                if (this.ycTraVatTuUtility.RangeNhap.endDate != null) {
                    const endDate = new Date(this.ycTraVatTuUtility.RangeNhap.endDate);
                    this.ycTraVatTuUtility.RangeNhap.endDate = new Date(endDate);
                }
            }
            if (this.ycTraVatTuUtility.RangeDuyet != null) {
                if (this.ycTraVatTuUtility.RangeDuyet.startDate != null) {
                    const startDate = new Date(this.ycTraVatTuUtility.RangeDuyet.startDate);
                    this.ycTraVatTuUtility.RangeDuyet.startDate = new Date(startDate);
                }
                if (this.ycTraVatTuUtility.RangeDuyet.endDate != null) {
                    const endDate = new Date(this.ycTraVatTuUtility.RangeDuyet.endDate);
                    this.ycTraVatTuUtility.RangeDuyet.endDate = new Date(endDate);
                }
            }
        } else {
            LocalStorageHelper.setItem('additionalSearchStringYcTraKSNK', null);
            this.additionalSearchString = JSON.stringify(this.ycTraVatTuUtility);
        }

        this.gridColumns = [
            { Field: 'Ma', Title: 'Số Phiếu', Width: 116, Sortable: true, Template: this.soChungTuTemplate },
            { Field: 'NguoiYeuCau', Title: 'Người Yêu Cầu', MinWidth: 120, Sortable: true },
            { Field: 'KhoHoanTraTu', Title: 'Hoàn Trả Từ Kho', Width: 195, Sortable: true },
            { Field: 'KhoHoanTraVe', Title: 'Hoàn Trả Về Kho', Width: 175, Sortable: true },
            { Field: 'NgayYeuCauDisplay', Title: 'Ngày Yêu Cầu', Width: 140, Sortable: true, Template: this.ngayNhapTemplate },
            { Field: 'TinhTrangDisplay', Title: 'Tình Trạng', Width: 120, Sortable: false, Template: this.tinhTrangTemplate },
            { Field: 'NguoiDuyet', Title: 'Người Duyệt', Width: 120, Sortable: true, ShowTooltip: true },
            { Field: 'NgayDuyetDisplay', Title: 'Ngày Duyệt', Width: 140, Sortable: true, Template: this.ngayDuyetTemplate },
            { Field: 'Action', Title: '', Width: 50, Template: this.actionTemplate, HideFilter: true }
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
            { Field: 'VatTu', Title: 'Kiểm Soát Nhiễm Khuẩn', Width: 150, Sortable: false },
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: false },
            { Field: 'SoLo', Title: 'Số Lô', Width: 100, Sortable: false },
            { Field: 'HsdText', Title: 'Hạn Sử Dụng', Width: 140, Sortable: false },
            { Field: 'MaVach', Title: 'Mã Vạch', Width: 120, Sortable: false },
            { Field: 'SoLuongTra', Title: 'SL Trả', Width: 100, Sortable: false, Template: this.soLuongTemplate },
            { Field: 'DonGiaNhap', Title: 'Đơn Giá Nhập', Width: 120, Sortable: false, Template: this.giaTemplate },
            { Field: 'Vat', Title: 'VAT(%)', Width: 100, Sortable: false },
            { Field: 'TiLeThapGia', Title: 'TL Tháp Giá(%)', Width: 140, Sortable: false }
        ];
    }

    themMoiYeuCauTraVatTu() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            this.router.navigate(['/nhap-xuat/ksnk/yeu-cau-tra-ksnk/them']);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xemChiTiet(id: number, dataItem: any) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.router.navigate(["/nhap-xuat/ksnk/yeu-cau-tra-ksnk/chinh-sua/" + id + "/" + dataItem.LoaiDuocPhamVatTu]);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    onKey(event: any) {
        if (event.keyCode === 13) {
            this.Timkiem();
        }
    }

    delete(id: number, loaiduocphamvattu: LoaiDuocPhamVatTu) {
        if (loaiduocphamvattu === LoaiDuocPhamVatTu.LoaiVatTu) {
            this.gridParent.delete(id);
        }
        else if (loaiduocphamvattu === LoaiDuocPhamVatTu.LoaiDuocPham) {
            var self = this;
            self.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có chắc chắn muốn xóa dữ liệu này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
                        this.apiService.delete<any>("YeuCauTraKSNK/XoaHoanTraDuocPham/" + id).subscribe(
                            () => {
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
                                this.Timkiem();
                            },
                            (err: ApiError) => {
                                this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    this.notificationService.showError(err.Message);
                                }
                            });
                    } else {
                        self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                    }
                }
            })
        }
    }

    clearSearch() {
        if (this.ycTraVatTuUtility.SearchString === '' || this.ycTraVatTuUtility.SearchString == null) {
            const ycTraVatTuUtilityClone: YcTraKSNKSearch = JSON.parse(JSON.stringify(this.ycTraVatTuUtility));

            if (ycTraVatTuUtilityClone.RangeNhap.startDate != null) {
                const startDate = new Date(ycTraVatTuUtilityClone.RangeNhap.startDate);
                ycTraVatTuUtilityClone.RangeNhap.startDate = new Date(startDate);
            }

            if (ycTraVatTuUtilityClone.RangeNhap.endDate != null) {
                const endDate = new Date(ycTraVatTuUtilityClone.RangeNhap.endDate);
                ycTraVatTuUtilityClone.RangeNhap.endDate = new Date(endDate);
            }

            if (ycTraVatTuUtilityClone.RangeDuyet.startDate != null) {
                const startDate = new Date(ycTraVatTuUtilityClone.RangeDuyet.startDate);
                ycTraVatTuUtilityClone.RangeDuyet.startDate = new Date(startDate);
            }

            if (ycTraVatTuUtilityClone.RangeDuyet.endDate != null) {
                const endDate = new Date(ycTraVatTuUtilityClone.RangeDuyet.endDate);
                ycTraVatTuUtilityClone.RangeDuyet.endDate = new Date(endDate);
            }

            this.query = JSON.stringify(ycTraVatTuUtilityClone);

            const queryForHole = JSON.parse(JSON.stringify(ycTraVatTuUtilityClone));
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
                'additionalSearchStringYcTraKSNK',
                JSON.stringify(queryForHole)
            );

            this.gridChild.searchString = '';
            this.gridChild._additionalSearchString = this.query;
            this.gridChild.search();
        }
    }

    Timkiem() {
        let QueryString = null;
        this.gridChild._additionalSearchString = null;
        QueryString = this.ycTraVatTuUtility.SearchString;

        this.router.navigateByUrl('/nhap-xuat/ksnk/yeu-cau-tra-ksnk?holdQuery=true');
        const ycTraVatTuUtilityClone: YcTraKSNKSearch = JSON.parse(JSON.stringify(this.ycTraVatTuUtility));

        if (ycTraVatTuUtilityClone.RangeNhap.startDate != null) {
            const startDate = new Date(ycTraVatTuUtilityClone.RangeNhap.startDate);
            ycTraVatTuUtilityClone.RangeNhap.startDate = new Date(startDate);
        }

        if (ycTraVatTuUtilityClone.RangeNhap.endDate != null) {
            const endDate = new Date(ycTraVatTuUtilityClone.RangeNhap.endDate);
            ycTraVatTuUtilityClone.RangeNhap.endDate = new Date(endDate);
        }

        if (ycTraVatTuUtilityClone.RangeDuyet.startDate != null) {
            const startDate = new Date(ycTraVatTuUtilityClone.RangeDuyet.startDate);
            ycTraVatTuUtilityClone.RangeDuyet.startDate = new Date(startDate);
        }

        if (ycTraVatTuUtilityClone.RangeDuyet.endDate != null) {
            const endDate = new Date(ycTraVatTuUtilityClone.RangeDuyet.endDate);
            ycTraVatTuUtilityClone.RangeDuyet.endDate = new Date(endDate);
        }

        this.query = JSON.stringify(ycTraVatTuUtilityClone);

        const queryForHole = JSON.parse(JSON.stringify(ycTraVatTuUtilityClone));
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
            'additionalSearchStringYcTraKSNK',
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
            self.apiService.postExportExcel<string>('YeuCauTraKSNK/ExportYeuCauTraKSNK',
                self.gridChild._gridQueryInfo).subscribe(
                    resultData => {
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(
                            resultData, 'application/vnd.ms-excel',
                            'YeuCauTraKSNK' + dateTimeNow.getFullYear() + '.xlsx');
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
        this.router.navigateByUrl('/nhap-xuat/ksnk/yeu-cau-tra-ksnk?holdQuery=true');
        if (dangChoDuyet) {
            this.ycTraVatTuUtility.DangChoDuyet = $event;
        } else if (tuChoiDuyet) {
            this.ycTraVatTuUtility.TuChoiDuyet = $event;
        } else if (daDuyet) {
            this.ycTraVatTuUtility.DaDuyet = $event;
        }
        this.Timkiem();
    }

    InPhieu(yeuCauHoanTraDuocPhamVatTuId: number, loaiduocphamvattu: LoaiDuocPhamVatTu) {
        let hoanTraDuocPhamId = loaiduocphamvattu === LoaiDuocPhamVatTu.LoaiDuocPham ? yeuCauHoanTraDuocPhamVatTuId : null;
        let hoanTraVatTuId = loaiduocphamvattu === LoaiDuocPhamVatTu.LoaiVatTu ? yeuCauHoanTraDuocPhamVatTuId : null;
        this.dialog.open(InPhieuHoanTraKSNKComponent, {
            disableClose: true,
            width: "1200px",
            data: { HoanTraDuocPhamId: hoanTraDuocPhamId, HoanTraVatTuId: hoanTraVatTuId, LaTuTruc: true, DuocDuyet: false },
        }).afterClosed().subscribe(() => {
        });
    }
}
