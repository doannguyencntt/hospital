import { Component, OnInit, ViewChild, TemplateRef, HostListener, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { PhieuDuyetKetQua, Search } from '../duyet-ket-qua.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { KetQuaXetNghiemMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDone from '@iconify/icons-ic/twotone-done';
import { MatDialog, MatMenuTrigger } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DuyetKetQuaPhieuPopupComponent } from '../duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component';
import { DuyetKetQuaNhomDvListPopupComponent } from '../duyet-ket-qua-nhom-dv-list-popup/duyet-ket-qua-nhom-dv-list-popup.component';


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-duyet-ket-qua-list',
    templateUrl: './duyet-ket-qua-list.component.html',
    styleUrls: ['./duyet-ket-qua-list.component.scss']
})
export class DuyetKetQuaXetNghiemListComponent implements OnInit {
    constructor(
        private router: Router,
        private dialog: MatDialog,
        private apiService: ApiService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private renderer: Renderer2,
        private notificationService: NotificationService
    ) { }

    gridColumns: any[] = [];
    gridColumnChilds: any[] = [];
    searchCtrl = new FormControl();
    search: Search = new Search();
    query: string = null;
    icSearch = icSearch;
    icFilterList = icFilterList;
    icFileExcel = icFileExcel;
    icMoreHoriz = icMoreHoriz;
    icDone = icDone;
    validationErrors: any = null;
    additionalSearchString: string = null;
    holdQuery: any = null;
    modelQRCode: any;
    baseRoute = 'xet-nghiem/duyet-ket-qua';
    documentType: DocumentType;
    groups: GroupDescriptor[] = [{ field: 'NhomXetNghiemDisplay' }];
    isScan = false;
    inPhieuDuyetKetQua: PhieuDuyetKetQua = new PhieuDuyetKetQua();
    sort: SortDescriptor[] =
        [{
            field: 'NgayThucHien',
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
    urlGetDataGridChild = 'DuyetKetQuaXetNghiem/GetDataChildrenAsync';
    urlGetTotalPageGridChild = 'DuyetKetQuaXetNghiem/GetTotalPageChildrenAsync';
    displayToolTipGridNguoiYeuCau: string = null;
    displayToolTipGridNgayYeuCau: string = null;
    displayToolTipGridLyDoYeuCau: string = null;
    displayToolTipGridNguoiDuyet: string = null;
    displayToolTipGridNgayDuyet: string = null;
    popupLoadingData: any;

    @ViewChild('menuTrigger', { read: MatMenuTrigger, static: false }) trigger: MatMenuTrigger;
    @ViewChild('barcodeTemplate', { static: true }) barcodeTemplate: TemplateRef<any>;
    @ViewChild('gioiTinhTemplate', { static: true }) gioiTinhTemplate: TemplateRef<any>;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('ngayThucHienTemplate', { static: true }) ngayThucHienTemplate: TemplateRef<any>;
    @ViewChild('ngayDuyetKqTemplate', { static: true }) ngayDuyetKqTemplate: TemplateRef<any>;
    @ViewChild('thoiGianChiDinhTemplate', { static: true }) thoiGianChiDinhTemplate: TemplateRef<any>;
    @ViewChild('nhomXetNghiemTemplate', { static: true }) nhomXetNghiemTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('gridParent', { static: false }) gridParent: GridComponent;
    @ViewChild('gridDetail', { static: false }) gridDetail: GridComponent;

    ngOnInit() {
        this.documentType = DocumentType.DuyetKetQuaXetNghiem;

        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }

        if (
            this.holdQuery != null &&
            LocalStorageHelper.getItem('adtDuyetKqXetNghiem') != null
        ) {
            this.additionalSearchString = LocalStorageHelper.getItem(
                'adtDuyetKqXetNghiem'
            );
            this.search = JSON.parse(this.additionalSearchString);
            if (this.search.RangeThucHien != null) {
                if (this.search.RangeThucHien.StartDate != null) {
                    const startDate = new Date(this.search.RangeThucHien.StartDate);
                    this.search.RangeThucHien.StartDate = new Date(startDate);
                }
                if (this.search.RangeThucHien.EndDate != null) {
                    const endDate = new Date(this.search.RangeThucHien.EndDate);
                    this.search.RangeThucHien.EndDate = new Date(endDate);
                }
            }
            if (this.search.RangeDuyet != null) {
                if (this.search.RangeDuyet.StartDate != null) {
                    const startDate = new Date(this.search.RangeDuyet.StartDate);
                    this.search.RangeDuyet.StartDate = new Date(startDate);
                }
                if (this.search.RangeDuyet.EndDate != null) {
                    const endDate = new Date(this.search.RangeDuyet.EndDate);
                    this.search.RangeDuyet.EndDate = new Date(endDate);
                }
            }
        } else {
            LocalStorageHelper.setItem('adtDuyetKqXetNghiem', null);
            this.additionalSearchString = JSON.stringify(this.search);
        }

        this.gridColumns = [
            { Field: 'Barcode', Title: 'Barcode', Width: 95, Sortable: true, Template: this.barcodeTemplate },
            { Field: 'MaTn', Title: 'Mã TN', Width: 126, Sortable: true },
            { Field: 'MaBn', Title: 'Mã NB', Width: 112, Sortable: true },
            { Field: 'HoTen', Title: 'Họ Tên', MinWidth: 130, Sortable: true },
            { Field: 'GioiTinh', Title: 'Giới Tính', Width: 80, Sortable: true, Template: this.gioiTinhTemplate },
            { Field: 'NamSinh', Title: 'Năm Sinh', Width: 80, Sortable: false },
            { Field: 'DiaChi', Title: 'Địa Chỉ', Width: 120, Sortable: true, ShowTooltip: true },
            { Field: 'TrangThai', Title: 'Trạng Thái', Width: 140, Sortable: true, Template: this.trangThaiTemplate },
            { Field: 'NguoiThucHien', Title: 'Người Thực Hiện', Width: 120, Sortable: true, ShowTooltip: true },
            {
                Field: 'NgayThucHien',
                Title: 'Ngày Thực Hiện',
                Width: 156,
                Sortable: true,
                ShowTooltip: true,
                Template: this.ngayThucHienTemplate
            },
            { Field: 'NguoiDuyetKq', Title: 'Người Duyệt KQ', Width: 120, Sortable: true, ShowTooltip: true },
            {
                Field: 'NgayDuyetKq',
                Title: 'Ngày Duyệt KQ',
                Width: 156,
                Sortable: true,
                ShowTooltip: true,
                Template: this.ngayDuyetKqTemplate
            },
            { Field: 'Action', Title: '', HideFilter: true, Width: 50, Template: this.actionTemplate }
        ];

        this.gridColumnChilds = [
            {
                Field: 'NhomXetNghiemDisplay',
                Title: '',
                Width: 150,
                Sortable: true,
                Hidden: true,
                HideFilter: true,
                TemplateGroupHeader: this.nhomXetNghiemTemplate
            },
            { Field: 'MaDv', Title: 'Mã DV', Width: 80, Sortable: true },
            { Field: 'TenDv', Title: 'Tên DV', MinWidth: 80, Sortable: true },
            { Field: 'ThoiGianChiDinh', Title: 'Thời Gian Chỉ Định', Width: 175, Sortable: true, Template: this.thoiGianChiDinhTemplate },
            { Field: 'NguoiChiDinh', Title: 'Người Chỉ Định', Width: 140, Sortable: true },
            { Field: 'BenhPham', Title: 'Bệnh Phẩm', Width: 135, Sortable: true },
            { Field: 'LoaiMau', Title: 'Loại Mẫu', Width: 110, Sortable: false }
        ];
    }

    changeNgay() {
        this.Timkiem();
    }

    clearSearch() {
        if (this.search.SearchString === '' || this.search.SearchString == null) {
            const searchClone: Search = JSON.parse(JSON.stringify(this.search));

            if (searchClone.RangeThucHien.StartDate != null) {
                const startDate = new Date(searchClone.RangeThucHien.StartDate);
                searchClone.RangeThucHien.StartDate = new Date(startDate);
            }

            if (searchClone.RangeThucHien.EndDate != null) {
                const endDate = new Date(searchClone.RangeThucHien.EndDate);
                searchClone.RangeThucHien.EndDate = new Date(endDate);
            }

            if (searchClone.RangeDuyet.StartDate != null) {
                const startDate = new Date(searchClone.RangeDuyet.StartDate);
                searchClone.RangeDuyet.StartDate = new Date(startDate);
            }

            if (searchClone.RangeDuyet.EndDate != null) {
                const endDate = new Date(searchClone.RangeDuyet.EndDate);
                searchClone.RangeDuyet.EndDate = new Date(endDate);
            }

            this.query = JSON.stringify(searchClone);

            const queryForHole = JSON.parse(JSON.stringify(searchClone));
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
                'adtDuyetKqXetNghiem',
                JSON.stringify(queryForHole)
            );

            if (this.gridParent) {
                this.gridParent.searchString = '';
                this.gridParent._additionalSearchString = this.query;
                this.gridParent.search();
            }
        }
    }

    onKey(event: any) {
        if (event.keyCode === 13) {
            this.Timkiem();
        }
    }

    Timkiem() {
        let QueryString = null;
        this.gridParent._additionalSearchString = null;
        QueryString = this.search.SearchString;

        this.router.navigateByUrl('/xet-nghiem/duyet-ket-qua?holdQuery=true');
        const ycTraThuocUtilityClone: Search = JSON.parse(JSON.stringify(this.search));

        if (ycTraThuocUtilityClone.RangeThucHien.StartDate != null) {
            const startDate = new Date(ycTraThuocUtilityClone.RangeThucHien.StartDate);
            ycTraThuocUtilityClone.RangeThucHien.StartDate = new Date(startDate);
        }

        if (ycTraThuocUtilityClone.RangeThucHien.EndDate != null) {
            const endDate = new Date(ycTraThuocUtilityClone.RangeThucHien.EndDate);
            ycTraThuocUtilityClone.RangeThucHien.EndDate = new Date(endDate);
        }

        if (ycTraThuocUtilityClone.RangeDuyet.StartDate != null) {
            const startDate = new Date(ycTraThuocUtilityClone.RangeDuyet.StartDate);
            ycTraThuocUtilityClone.RangeDuyet.StartDate = new Date(startDate);
        }

        if (ycTraThuocUtilityClone.RangeDuyet.EndDate != null) {
            const endDate = new Date(ycTraThuocUtilityClone.RangeDuyet.EndDate);
            ycTraThuocUtilityClone.RangeDuyet.EndDate = new Date(endDate);
        }

        this.query = JSON.stringify(ycTraThuocUtilityClone);

        const queryForHole = JSON.parse(JSON.stringify(ycTraThuocUtilityClone));
        if (queryForHole.RangeThucHien != null) {
            if (queryForHole.RangeThucHien.startDate != null) {
                queryForHole.RangeThucHien.startDate = new Date(queryForHole.RangeThucHien.startDate);
            }
            if (queryForHole.RangeThucHien.endDate != null) {
                queryForHole.RangeThucHien.endDate = new Date(queryForHole.RangeThucHien.endDate);
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
            'adtDuyetKqXetNghiem',
            JSON.stringify(queryForHole)
        );

        this.gridParent._additionalSearchString = this.query;
        this.gridParent.searchString = QueryString;
        this.gridParent.search();
    }

    exportExcel() {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.showPopupLoadingData(KetQuaXetNghiemMessage.MessageDownloadingExcel);
            self.apiService.postExportExcel<string>('DuyetKetQuaXetNghiem/ExportDuyetKetQuaXetNghiem',
                self.gridParent._gridQueryInfo).subscribe(
                    resultData => {
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(
                            resultData, 'application/vnd.ms-excel',
                            'DuyetKetQuaXetNghiem' + dateTimeNow.getFullYear() + '.xlsx');
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

    showPopupLoadingData(message: string) {
        if (this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == null
            || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
            this.popupLoadingData = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: message },
            });
        }
    }

    showPopupDownloadData() {
        if (this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == null
            || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
            this.popupLoadingData = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải dữ liệu...' },
            });
        }
    }

    closePopupLoadingData() {
        if (this.popupLoadingData) {
            this.popupLoadingData.close();
        }
    }

    xemChiTiet(id: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.router.navigateByUrl(this.baseRoute + '/chi-tiet/' + id + '?holdQuery=true');
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    CheckboxChange($event, dangChoDuyet: boolean = false, daDuyet: boolean = false) {
        this.router.navigateByUrl(this.baseRoute + '?holdQuery=true');
        if (dangChoDuyet) {
            this.search.ChoDuyet = $event;
        } else if (daDuyet) {
            this.search.DaDuyet = $event;
        }
        this.Timkiem();
    }

    nhomDichVuCanIn(phienXetNghiemId: number, yeuCauTiepNhanId: number) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.get<any>("DuyetKetQuaXetNghiem/GetNhomDichVuDuyet?phienXetNghiemId=" + phienXetNghiemId).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        self.dialog.open(DuyetKetQuaNhomDvListPopupComponent, {
                            disableClose: false,
                            width: '350px',
                            data: { Model: resultData, PhienXetNghiemId: phienXetNghiemId, YeuCauTiepNhanId: yeuCauTiepNhanId },
                        }).afterClosed().subscribe(result => {
                        });
                    }
                },
                (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }



    download() { }

    QuetMaQRCodeClick() {
        const elementBarcode: HTMLElement = document.getElementById(
            'barcodeActive'
        ) as HTMLElement;
        if (elementBarcode) {
            elementBarcode.click();
        }
    }

    changeQR(changeQr: any) {
        if (changeQr != null && typeof changeQr === 'string' && changeQr.endsWith('@')) {
            // this.modelQRCode = event;
            const dataTimKiem = changeQr.split('|');
            if (dataTimKiem.length > 1) {
                this.search.SearchString = dataTimKiem[0];
            } else {
                this.search.SearchString = changeQr.slice(0, -1);
            }
            this.Timkiem();
        } else {
            this.notificationService.showError('Không tìm thấy thông tin cần tìm.');
        }
        this.isScan = false;
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 81 && event.ctrlKey && this.isScan !== true) {
            this.isScan = true;
            event.preventDefault();
            this.QuetMaQRCodeClick();
        }
    }

    setUpDataTooltip(dataItem) {
        this.displayToolTipGridNguoiYeuCau = dataItem.items[0].NguoiYeuCau;
        this.displayToolTipGridNgayYeuCau = dataItem.items[0].NgayYeuCauDisplay;
        this.displayToolTipGridLyDoYeuCau = dataItem.items[0].LyDoYeuCau;
        this.displayToolTipGridNguoiDuyet = dataItem.items[0].NguoiDuyet;
        this.displayToolTipGridNgayDuyet = dataItem.items[0].NgayDuyetDisplay;
    }

    checkHiddenIcon(item, danhSachLoaiMau) {
        if (danhSachLoaiMau) {
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < danhSachLoaiMau.length; i++) {
                if (item === danhSachLoaiMau[i]) {
                    return true;
                }
            }
        }

        return false;
    }

    isMauKhongDat(mau, danhSachMauKhongDat) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < danhSachMauKhongDat.length; i++) {
            if (mau === danhSachMauKhongDat[i]) {
                return true;
            }
        }

        return false;
    }
}
