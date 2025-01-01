import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YeuCauHoanTraVatTuChiTiet, YeuCauHoanTraVatTuChiTietHienThi, YeuCauHoanTraVatTuGridDaDuyet, YeuCauHoanTraVatTuSearch, YeuCauHoanTraVT } from '../yeu-cau-tra-vat-tu.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icSearch from '@iconify/icons-ic/twotone-search';
import icRight from '@iconify/icons-ic/chevron-right';
import icRightLast from '@iconify/icons-ic/last-page';
import icLeft from '@iconify/icons-ic/chevron-left';
import icLeftLast from '@iconify/icons-ic/first-page';
import { FormControl } from '@angular/forms';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icInfo from '@iconify/icons-ic/baseline-info';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-yeu-cau-tra-vat-tu-shared',
    templateUrl: './yeu-cau-tra-vat-tu-shared.component.html',
    styleUrls: ['./yeu-cau-tra-vat-tu-shared.component.scss']
})

export class YeuCauTraVatTuSharedComponent implements OnInit {
    yeuCauHoanTraVT: YeuCauHoanTraVT = new YeuCauHoanTraVT();
    yeuCauHoanTraVatTuSearch: YeuCauHoanTraVatTuSearch = new YeuCauHoanTraVatTuSearch();
    lstXuatKhoSearch: YeuCauHoanTraVatTuChiTietHienThi[] = new Array<YeuCauHoanTraVatTuChiTietHienThi>();
    lstXuatKho: YeuCauHoanTraVatTuChiTietHienThi[] = new Array<YeuCauHoanTraVatTuChiTietHienThi>();
    xuatKhoKhacGridDaDuyet: YeuCauHoanTraVatTuGridDaDuyet = new YeuCauHoanTraVatTuGridDaDuyet();

    documentType: DocumentType = DocumentType.YeuCauHoanTraVatTu;
    disabled: boolean = false;
    popupLoadingData: any = null;
    yeuCauXuatKhacVatTuId: number = 0;
    icRight = icRight;
    icLeft = icLeft;
    icInfo = icInfo;
    icRightLast = icRightLast;
    icLeftLast = icLeftLast;
    lstXuatKhoTheoNhom: any[] = [];
    addtionStringDefault: string = null;
    searchString: string = null;
    searchString2: string;
    searchCtrl = new FormControl;
    icSearch = icSearch;
    gridColumns: any[] = [];
    gridResultColumns: any[] = [];
    gridResultDaDuyetColumns: any[] = [];
    gridDataSource: any;
    additionalSearchString: string = null;
    gridDataSourceThuocKhac: any = {
        data: [],
        total: 0
    }
    sort: SortDescriptor[] = [{
        field: 'Ten',
        dir: 'desc'
    }];

    groups: GroupDescriptor[] = [{ field: 'TenNhom' }];

    format = "n2";
    sLTonThucTe: number = 0;

    urlGetData = "YeuCauTraVatTu/GetDataForGridAsyncVatTuTuTrucDaChon";
    urlGetTotal = "YeuCauTraVatTu/GetTotalPageForGridAsyncVatTuTuTrucDaChon";

    urlGetDataDaDuyet = "YeuCauTraVatTu/GetDataForGridChildAsyncDaDuyetVatTu";
    urlGetTotalDaDuyet = "YeuCauTraVatTu/GetTotalPageForGridChildAsyncDaDuyetVatTu";


    @ViewChild('gridVatTuXuat', { read: GridComponent, static: false }) gridVatTuXuat: GridComponent;
    @ViewChild('gridResult', { read: GridComponent, static: false }) gridResult: GridComponent;
    @ViewChild('gridVatTuXuatDaDuyet', { read: GridComponent, static: false }) gridVatTuXuatDaDuyet: GridComponent;

    @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('tenNhom2GroupHeaderTemplate', { static: true }) tenNhom2GroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('tenNhomGroupDaDuyetHeaderTemplate', { static: true }) tenNhomGroupDaDuyetHeaderTemplate: TemplateRef<any>;

    @ViewChild('transferTemplate', { static: true }) transferTemplate: TemplateRef<any>;
    @ViewChild('transferTemplate2', { static: true }) transferTemplate2: TemplateRef<any>;
    @ViewChild('soLuongXuatGrid1Template', { static: true }) soLuongXuatGrid1Template: TemplateRef<any>;
    @ViewChild('soLuongXuatGrid2Template', { static: true }) soLuongXuatGrid2Template: TemplateRef<any>;
    @ViewChild('soLuongXuatDaDuyetTemplate', { static: true }) soLuongXuatDaDuyetTemplate: TemplateRef<any>;
    @ViewChild('sLTonTemplate', { static: true }) sLTonTemplate: TemplateRef<any>;
    @ViewChild('soLuongTraTemplate', { static: true }) soLuongTraTemplate: TemplateRef<any>;
    @ViewChild('giaTemplate', { static: true }) giaTemplate: TemplateRef<any>;

    @ViewChild('hsdTemplate', { static: true }) hsdTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('slTonThucTeTemplate', { static: true }) slTonThucTeTemplate: TemplateRef<any>;


    @Input() isCreate: boolean;
    @Input() validationErrors: any[] = [];
    @Input() trangThaiVo: any;

    id: number = 0;
    tinhTrang: number = 0;

    constructor(
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private cdRef: ChangeDetectorRef,
        private authService: AuthService,
        private apiService: ApiService,
        private notificationService: NotificationService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.documentType = DocumentType.YeuCauHoanTraVatTu;


        this.gridColumns = [
            { Field: 'TenNhom', Title: 'Tên Nhóm', Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: 'Ma', Title: 'Mã', Width: 80, Sortable: true },
            { Field: 'Ten', Title: 'Vật tư', Width: 100, Sortable: true, ShowTooltip: true },
            { Field: 'DVT', Title: 'ĐVT', Width: 70, Sortable: false },
            { Field: 'Loai', Title: 'Loại', Width: 70, Sortable: false, ShowTooltip: true },
            { Field: 'SoLo', Title: 'Số lô', Width: 70, Sortable: false },
            { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
            { Field: 'SoLuongTon', Title: 'SL tồn', Width: 70, Sortable: false, Template: this.sLTonTemplate },
            { Field: 'SoLuongTra', Title: 'Sl hoàn trả', Width: 100, Sortable: true, Template: this.soLuongXuatGrid1Template },
            { Field: 'HanSuDungDisplay', Title: 'HSD', Width: 50, Sortable: false, ShowTooltip: true },
            { Field: 'NgayNhapDisplay', Title: 'Ngày nhập', Width: 70, Sortable: false, ShowTooltip: true },
            { Field: 'TiLeThapGia', Title: 'Tỉ lệ theo tháp giá (%)', Width: 70, Sortable: false },
            { Field: 'VAT', Title: 'VAT (%)', Width: 50, Sortable: false },
            { Field: 'Id', Title: '', Width: 30, Sortable: true, Template: this.transferTemplate }
        ];


        this.gridResultColumns = [
            { Field: 'TenNhom', Title: 'Tên Nhóm', Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhom2GroupHeaderTemplate },
            { Field: 'Id', Title: '', Width: 30, Sortable: false, Template: this.transferTemplate2 },
            { Field: 'Ma', Title: 'Mã', Width: 63, Sortable: false },
            { Field: 'Ten', Title: 'Vật tư', Width: 81, Sortable: false, ShowTooltip: true },
            { Field: 'DVT', Title: 'ĐVT', Width: 70, Sortable: false },
            { Field: 'Loai', Title: 'Loại', Width: 70, Sortable: false, ShowTooltip: true },
            { Field: 'SoLo', Title: 'Số lô', Width: 70, Sortable: false },
            { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
            { Field: 'SoLuongTonDisplay', Title: 'SL tồn', Width: 61, Sortable: false, Template: this.slTonThucTeTemplate },
            { Field: 'HanSuDungDisplay', Title: 'HSD', Width: 50, Sortable: false, ShowTooltip: true },
            { Field: 'NgayNhapDisplay', Title: 'Ngày nhập', Width: 70, Sortable: false, ShowTooltip: true },
            { Field: 'TiLeThapGia', Title: 'Tỉ lệ theo tháp giá (%)', Width: 70, Sortable: false },
            { Field: 'VAT', Title: 'VAT (%)', Width: 50, Sortable: false },
            { Field: 'SoLuongTra', Title: 'Sl Hoàn Trả', Width: 100, Sortable: false, Template: this.soLuongXuatGrid2Template }
        ];

        this.gridResultDaDuyetColumns = [
            { Field: 'TenNhom', Title: 'Tên Nhóm', Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupDaDuyetHeaderTemplate },
            { Field: 'Ma', Title: 'Mã', Width: 80, Sortable: true, ShowTooltip: true },
            { Field: 'Ten', Title: 'Dược Phẩm', Width: 150, Sortable: false },
            { Field: 'HopDong', Title: 'HĐ Thầu', Width: 150, Sortable: false },
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: false },
            { Field: 'SoLo', Title: 'Số Lô', Width: 100, Sortable: false },
            { Field: 'HanSuDung', Title: 'Hạn Sử Dụng', Width: 140, Sortable: true, Template: this.hsdTemplate },
            { Field: 'MaVach', Title: 'Mã Vạch', Width: 120, Sortable: false },
            { Field: 'SoLuongTra', Title: 'SL Trả', Width: 100, Sortable: false, Template: this.soLuongTraTemplate },
            { Field: 'DonGiaNhap', Title: 'Đơn Giá Nhập', Width: 120, Sortable: false, Template: this.giaTemplate },
            { Field: 'VAT', Title: 'VAT(%)', Width: 100, Sortable: false },
            { Field: 'TiLeThapGia', Title: 'TL Tháp Giá(%)', Width: 140, Sortable: false },
        ];

        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
            this.xuatKhoKhacGridDaDuyet.YeuCauTraVatTuId = this.id;
            this.addtionStringDefault = JSON.stringify(this.xuatKhoKhacGridDaDuyet);
        }
        this.getCurrentUser();
    }
    getCurrentUser() {
        if (this.isCreate) {
            this.yeuCauHoanTraVT.NgayYeuCau = new Date();
            this.apiService.get<any>("YeuCauLinhDuocPham/GetCurrentUser").subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        this.yeuCauHoanTraVT.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
                        this.yeuCauHoanTraVT.TenNhanVienYeuCau = resultData.HoTen;
                    }
                });
        }
    }

    khoNhapChangeChange() {
        this.validationErrors = []
    }

    onKeyGrid1(event: any) {
        if (event.key == "Enter") {
            this.TimkiemNangCao();
        }
    }

    onKeyGrid2(event: any) {
        if (event.key == "Enter") {
            this.timKiemGrid2();
        }
    }

    khoXuatModelChange(dataItem: number) {
        if (dataItem != undefined && dataItem != null) {
            this.yeuCauHoanTraVatTuSearch.KhoXuatId = dataItem;
        } else {
            this.yeuCauHoanTraVatTuSearch.KhoXuatId = null;
        }
        var queryString = JSON.stringify(this.yeuCauHoanTraVatTuSearch);
        if (this.gridVatTuXuat != undefined && this.gridVatTuXuat != null) {
            this.gridVatTuXuat._additionalSearchString = queryString;
            this.gridVatTuXuat.search();
        }

    }

    TimkiemNangCao() {
        this.yeuCauHoanTraVatTuSearch.IsCreate = this.isCreate;
        this.yeuCauHoanTraVatTuSearch.YeuCauTraVatTuId = this.id;
        this.yeuCauHoanTraVatTuSearch.KhoXuatId = this.yeuCauHoanTraVT.KhoXuatId;
        if (this.yeuCauHoanTraVatTuSearch.KhoXuatId == undefined || this.yeuCauHoanTraVatTuSearch.KhoXuatId == null) {
            this.timKiemGrid2();
        }
        var queryString = JSON.stringify(this.yeuCauHoanTraVatTuSearch);
        if (this.gridVatTuXuat != undefined && this.gridVatTuXuat != null) {
            this.gridVatTuXuat._additionalSearchString = queryString;
            this.gridVatTuXuat.search();
        }

    }

    clearSearchGrid2(event: any) {
        if (event != undefined && (event == null || event == "")) {
            if (this.searchString2 == "" || this.searchString2 == null) {
                this.lstXuatKhoSearch = JSON.parse(JSON.stringify(this.lstXuatKho));
                this.setDataXuatKho();
            }
        }
    }

    searchChanges(event: any) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.TimkiemNangCao();
        }
    }

    dieuChuyenTungDuocPhamGrid1(dataItem: any) {
        this.validationErrors = [];
        this.yeuCauHoanTraVatTuSearch.VatTuBenhVienVos.push(dataItem);
        this.lstXuatKhoSearch.push(dataItem);
        this.lstXuatKho.push(dataItem);
        this.timKiemGrid2();
    }

    dieuChuyenTungDuocPhamGrid2(dataItem: any) {
        this.validationErrors = [];
        this.lstXuatKho = this.lstXuatKho.filter(o => o != dataItem);
        this.lstXuatKhoSearch = this.lstXuatKhoSearch.filter(o => o != dataItem);
        this.yeuCauHoanTraVatTuSearch.VatTuBenhVienVos.splice(this.yeuCauHoanTraVatTuSearch.VatTuBenhVienVos.findIndex((x: any) => x == dataItem), 1);
        this.timKiemGrid2();
    }

    timKiemGrid2() {
        if (this.searchString2 == undefined || this.searchString2 == null) {
            this.setDataXuatKho();
        }
        else {
            let search = this.searchString2.toLowerCase().trim();
            this.lstXuatKhoSearch = this.lstXuatKho.filter(o =>
                o.Ten.toLowerCase().trim().indexOf(search) != -1
                || o.Ma.toLowerCase().trim().indexOf(search) != -1);
            this.setDataXuatKho();
        }
    }

    setDataXuatKho() {
        this.TimkiemNangCao();
        this.gridDataSourceThuocKhac = [];
        let dataGrid = this.lstXuatKhoSearch;
        this.gridDataSourceThuocKhac = {
            data: dataGrid,
            total: dataGrid.length,
        }
        if (this.gridDataSourceThuocKhac.data.length > 0) {
            this.disabled = true;
        } else {
            this.disabled = false;
        }
        this.refreshGrid();

    }

    refreshGrid() {
        if (this.gridResult != undefined) {
            this.gridResult.setDataSource();
        }
    }
    addingPage() {
        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }

    closepopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }

    dieuChuyenDuocPhamTheoNhomGrid(dataItem: any, gridNumber: number) {
        let model = {
            YeuCauHoanTraVatTuChiTiets: dataItem.items
        };
        this.addingPage();
        this.apiService.post<any>("YeuCauTraVatTu/XuatVTHoanTraTheoNhom", model).subscribe(
            resultData => {
                if (resultData != undefined && resultData != null) {
                    this.closepopupLoadingData();
                    resultData.YeuCauHoanTraVatTuChiTiets.forEach((element: any) => {
                        if (gridNumber == 1) {
                            this.lstXuatKhoSearch.push(element);
                            this.lstXuatKho.push(element);
                            this.yeuCauHoanTraVatTuSearch.VatTuBenhVienVos.push(element);
                        }
                        else {
                            this.lstXuatKho.splice(this.lstXuatKho.findIndex((x: any) =>
                                x.VatTuBenhVienId == element.VatTuBenhVienId
                                && x.Ten == element.Ten
                                && x.Ma == element.Ma
                                && x.DVT == element.DVT
                                && x.LaVatTuBHYT == element.LaVatTuBHYT
                                && x.HanSuDung == element.HanSuDung
                                && x.NgayNhap == element.NgayNhap
                            ), 1);
                            this.lstXuatKhoSearch.splice(this.lstXuatKhoSearch.findIndex((x: any) => x.VatTuBenhVienId == element.VatTuBenhVienId
                                && x.Ten == element.Ten
                                && x.Ma == element.Ma
                                && x.DVT == element.DVT
                                && x.LaVatTuBHYT == element.LaVatTuBHYT
                                && x.HanSuDung == element.HanSuDung
                                && x.NgayNhap == element.NgayNhap
                            ), 1);
                            this.yeuCauHoanTraVatTuSearch.VatTuBenhVienVos.splice(this.yeuCauHoanTraVatTuSearch.VatTuBenhVienVos.findIndex((x: any) => x.VatTuBenhVienId == element.VatTuBenhVienId
                                && x.Ten == element.Ten
                                && x.Ma == element.Ma
                                && x.DVT == element.DVT
                                && x.LaVatTuBHYT == element.LaVatTuBHYT
                                && x.HanSuDung == element.HanSuDung
                                && x.NgayNhap == element.NgayNhap
                            ), 1);

                        }
                    });
                    this.timKiemGrid2();
                }
            },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closepopupLoadingData();
            });

    }

    onKeyGrid3(event: any) {
        if (event.key == "Enter") {
            this.timKiem3();
        }
    }

    searchChanges3(event: any) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.timKiem3();
        }
    }

    timKiem3() {
        this.xuatKhoKhacGridDaDuyet.XuatKhoVatTuId = this.id;
        var queryString = JSON.stringify(this.xuatKhoKhacGridDaDuyet);
        if (this.gridVatTuXuatDaDuyet != undefined && this.gridVatTuXuatDaDuyet != null) {
            this.gridVatTuXuatDaDuyet._additionalSearchString = queryString;
            this.gridVatTuXuatDaDuyet.search();
        }
    }
    clearValidator() {
        this.validationErrors = [];
    }

    TooltipCustom(dataItem: any) {
        this.apiService.post<any>("XuatKhoVatTuKhac/GetSoLuongTonThucTe", dataItem).subscribe(
            resultData => {
                if (resultData != undefined && resultData != null) {
                    this.sLTonThucTe = resultData;
                }
            }
        );
    }


    getById(id: number) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.addingPage();
            self.apiService.get<any>("YeuCauTraVatTu/GetYeuCauHoanTraVatTuTuTruc?id=" + id).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        self.disabled = true;
                        self.closepopupLoadingData();
                        self.yeuCauHoanTraVT = resultData;
                        resultData.YeuCauHoanTraVatTuChiTietHienThis.forEach(element => {
                            self.lstXuatKhoSearch.push(element);
                            self.lstXuatKho.push(element);
                            self.yeuCauHoanTraVatTuSearch.VatTuBenhVienVos.push(element);
                        });
                        self.timKiemGrid2();
                    }
                },
                (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                    self.closepopupLoadingData();
                });
        }
        else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }


    getSharedData() {
        this.yeuCauHoanTraVT.YeuCauHoanTraVatTuChiTiets = new Array<YeuCauHoanTraVatTuChiTiet>();
        this.lstXuatKho.forEach(element => {
            let yeuCauXuatKhoKhacChiTiet = new YeuCauHoanTraVatTuChiTiet();
            yeuCauXuatKhoKhacChiTiet.Id = element.Id;
            yeuCauXuatKhoKhacChiTiet.VatTuBenhVienId = element.VatTuBenhVienId;
            yeuCauXuatKhoKhacChiTiet.LaVatTuBHYT = element.LaVatTuBHYT;
            yeuCauXuatKhoKhacChiTiet.SoLuongTra = element.SoLuongTra;
            yeuCauXuatKhoKhacChiTiet.KhoXuatId = this.yeuCauHoanTraVT.KhoXuatId;
            yeuCauXuatKhoKhacChiTiet.SoLo = element.SoLo;
            yeuCauXuatKhoKhacChiTiet.Ma = element.Ma;
            yeuCauXuatKhoKhacChiTiet.HanSuDung = element.HanSuDung;
            yeuCauXuatKhoKhacChiTiet.DonGiaNhap = element.DonGiaNhap;
            this.yeuCauHoanTraVT.YeuCauHoanTraVatTuChiTiets.push(yeuCauXuatKhoKhacChiTiet);
        });
        return this.yeuCauHoanTraVT;
    }
}
