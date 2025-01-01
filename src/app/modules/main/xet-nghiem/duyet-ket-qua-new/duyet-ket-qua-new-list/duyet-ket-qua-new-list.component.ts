import { Component, OnInit, ViewChild, TemplateRef, HostListener, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ActivatedRoute, Router } from '@angular/router';
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
import { PhieuDuyetKetQuaNew, SearchNew } from '../duyet-ket-qua-new.model';
import { DuyetKetQuaNhomDvListNewPopupComponent } from '../duyet-ket-qua-nhom-dv-list-new-popup/duyet-ket-qua-nhom-dv-list-new-popup.component';

@Component({
    selector: 'app-duyet-ket-qua-new-list',
    templateUrl: './duyet-ket-qua-new-list.component.html',
    styleUrls: ['./duyet-ket-qua-new-list.component.scss']
})
export class DuyetKetQuaNewListComponent implements OnInit {
    constructor(
        private router: Router,
        private dialog: MatDialog,
        private apiService: ApiService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private renderer: Renderer2,
        private notificationService: NotificationService
    ) { }
    addtionStringDefault: string = null;
    gridColumns: any[] = [];
    gridColumnChilds: any[] = [];
    searchCtrl = new FormControl();
    search: SearchNew = new SearchNew();
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
    baseRoute = 'xet-nghiem/duyet-ket-qua-new';
    documentType: DocumentType;
    groups: GroupDescriptor[] = [{ field: 'NhomXetNghiemDisplay' }];
    isScan = false;
    inPhieuDuyetKetQua: PhieuDuyetKetQuaNew = new PhieuDuyetKetQuaNew();
    sort: SortDescriptor[] = [
        {
            field: "TrangThai",
            dir: "asc",
        },
    ];
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
    // @ViewChild('gridParent', { static: false }) gridParent: GridComponent;
    @ViewChild('gridDetail', { static: false }) gridDetail: GridComponent;
    @ViewChild('gridParent', { read: GridComponent, static: true }) gridParent: GridComponent;

    ngOnInit() {
        this.documentType = DocumentType.DuyetKetQuaXetNghiem;

        let dateNow = new Date();
        this.search.ThoiDiemGoiDuyetTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        this.search.ThoiDiemGoiDuyetDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
        if (this.search.ThoiDiemGoiDuyetTuFormat != null) {
            this.search.FromDate = CommonService.formatDateTime(this.search.ThoiDiemGoiDuyetTuFormat, "dd/mm/yyyy");
        } else {
            this.search.FromDate = null;
        }

        if (this.search.ThoiDiemGoiDuyetDenFormat != null) {
            this.search.ToDate = CommonService.formatDateTime(
                this.search.ThoiDiemGoiDuyetDenFormat,
                "dd/mm/yyyy"
            );
        } else {
            this.search.ToDate = null;
        }
        var queryString = JSON.stringify(this.search);
        this.addtionStringDefault = queryString;
        this.backWithSearch();
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

    backWithSearch() {
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = LocalStorageHelper.getItem<string>("adtDuyetKqXetNghiemNew");
                if (additionalSearchString != null) {
                    this.search = JSON.parse(additionalSearchString);
                    if (this.search.ThoiDiemGoiDuyetTuFormat != undefined && this.search.ThoiDiemGoiDuyetTuFormat != null && this.search.ThoiDiemGoiDuyetTuFormat != "") {
                        this.search.ThoiDiemGoiDuyetTuFormat = new Date(this.search.ThoiDiemGoiDuyetTuFormat);
                    }
                    else {
                        this.search.ThoiDiemGoiDuyetTuFormat = null;
                    }
                    if (this.search.ThoiDiemGoiDuyetTuFormat != undefined && this.search.ThoiDiemGoiDuyetTuFormat != null && this.search.ThoiDiemGoiDuyetTuFormat != "") {
                        this.search.ThoiDiemGoiDuyetTuFormat = new Date(this.search.ThoiDiemGoiDuyetTuFormat);
                    }
                    else {
                        this.search.ThoiDiemGoiDuyetTuFormat = null;
                    }
                    this.addtionStringDefault = additionalSearchString;
                    this.gridParent.additionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            LocalStorageHelper.removeItem("adtDuyetKqXetNghiemNew");
        }
    }

    changeNgay() {
        this.Timkiem();
    }


    searchChanges(event: any) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.search.SearchString = null;
            self.Timkiem();
        }
    }


    onKey(event: any) {
        if (event.keyCode === 13) {
            this.Timkiem();
        }
    }

    Timkiem() {
        this.router.navigateByUrl('/xet-nghiem/duyet-ket-qua-new?holdQuery=true');
        if (this.search.ThoiDiemGoiDuyetTuFormat != null) {
            this.search.FromDate = CommonService.formatDateTime(
                this.search.ThoiDiemGoiDuyetTuFormat,
                "dd/mm/yyyy"
            );
        } else {
            this.search.FromDate = null;
        }

        if (this.search.ThoiDiemGoiDuyetDenFormat != null) {
            this.search.ToDate = CommonService.formatDateTime(
                this.search.ThoiDiemGoiDuyetDenFormat,
                "dd/mm/yyyy"
            );
        } else {
            this.search.ToDate = null;
        }
        var queryString = JSON.stringify(this.search);
        this.gridParent._additionalSearchString = queryString;
        this.gridParent.search();
        LocalStorageHelper.setItem("adtDuyetKqXetNghiemNew", queryString);
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

    CheckboxChange(event: any, text: string) {
        if (text == 'choduyet') {
            this.search.ChoDuyet = event;
        }
        if (text == 'dangthuchien') {
            this.search.DangThucHien = event;
        }
        if (text == 'daduyet') {
            this.search.DaDuyet = event;
        }
        //this.Timkiem();
    }

    nhomDichVuCanIn(phienXetNghiemId: number, yeuCauTiepNhanId: number) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.get<any>("DuyetKetQuaXetNghiem/GetNhomDichVuDuyet?phienXetNghiemId=" + phienXetNghiemId).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        self.dialog.open(DuyetKetQuaNhomDvListNewPopupComponent, {
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

