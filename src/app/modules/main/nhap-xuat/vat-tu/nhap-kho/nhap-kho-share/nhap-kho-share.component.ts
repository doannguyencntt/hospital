import { Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectorRef, ViewRef } from '@angular/core';
import { NhapKhoVatTu, NhapKhoVatTuChiTiet } from '../nhap-kho';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSearch from '@iconify/icons-ic/twotone-search';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { IntlService } from '@progress/kendo-angular-intl';
import { ApiService } from 'src/app/core/services/api.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NhapXuatKhoMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';

@Component({
    selector: 'app-nhap-kho-share',
    templateUrl: './nhap-kho-share.component.html',
    styleUrls: ['./nhap-kho-share.component.scss']
})

export class NhapKhoShareComponent implements OnInit {
    @Input() isUpdate: boolean = false;
    @Input() daDuyet: boolean = null;
    @Input() tuChoiDuyet: boolean = null;
    @Input() chuaDuyet: boolean = null;

    nhapKho: NhapKhoVatTu = new NhapKhoVatTu();
    nhapKhoChiTiet: NhapKhoVatTuChiTiet = new NhapKhoVatTuChiTiet();
    nhapKhoChiTietEdit: NhapKhoVatTuChiTiet = new NhapKhoVatTuChiTiet();

    nhapKhoSource = new NhapKhoVatTu();
    nhapKhoChiTietSource = new NhapKhoVatTuChiTiet();


    ListIdUpdate: number[] = []
    dataSourceCache: any;
    @Input() validationErrors: any;
    gridColumns: any[] = [];
    gridDataSource: any;

    nhapKhoSearch: NhapKhoVatTu = new NhapKhoVatTu();
    nhapKhoChiTietSearch: NhapKhoVatTuChiTiet = new NhapKhoVatTuChiTiet();

    format: string = 'n2';

    icDelete = icDelete;
    icEdit = icEdit;
    icMoreHoriz = icMoreHoriz;

    giaNhapInDB: number = null;

    searchString: string = "";
    documentType: DocumentType;
    NhathauId: number;
    NhathauDisplay: string;
    HopDongthauId: number;
    HopDongthauDisplay: string;
    //
    hopDongDisabled: boolean = false;
    duocPhamDisabled: boolean = false;
    nhomDisabled: boolean = false;
    //

    groups: GroupDescriptor[] = [{ field: 'LoaiSuDungDisplay' }];
    data: any[] = [];

    id: number;
    loaiNhap = 1; // 1 là hdt, 2 là ncc
    blockLoaiNhap = false;

    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('headerTemplate', { static: true }) headerTemplate: TemplateRef<any>;
    @ViewChild('giaTemplate', { static: true }) giaTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTruocVatTemplate', { static: true }) thanhTienTruocVatTemplate: TemplateRef<any>;
    @ViewChild('thanhTienSauVatTemplate', { static: true }) thanhTienSauVatTemplate: TemplateRef<any>;
    @ViewChild('tongThanhTienTruocVatFooterTemplate', { static: true }) tongThanhTienTruocVatFooterTemplate: TemplateRef<any>;
    @ViewChild('tongThanhTienVatFooterTemplate', { static: true }) tongThanhTienVatFooterTemplate: TemplateRef<any>;

    @ViewChild('tongThanhTienSauVatFooterTemplate', { static: true }) tongThanhTienSauVatFooterTemplate: TemplateRef<any>;

    @ViewChild('grid', { static: false }) grid: GridComponent;

    @ViewChild('duocPhamCombobox', { static: false }) duocPhamCombobox: ComboboxComponent;

    @ViewChild('nhomDisplayGroupHeaderTemplate', { static: true }) nhomDisplayGroupHeaderTemplate: TemplateRef<any>;

    public totalTongThanhTien(field: any) {
        switch (field) {
            case 'ThanhTienTruocVat':
                return this.data.reduce((sum: any, item: { ThanhTienTruocVat: any; }) => sum + item.ThanhTienTruocVat, 0);
            case 'ThanhTienSauVat':
                return this.data.reduce((sum: any, item: { ThanhTienSauVat: any; }) => sum + item.ThanhTienSauVat, 0);
            case 'VAT':
                // return this.data.reduce((sum: any, item: { ThanhTienTruocVat: any; VAT: any }) => sum + (item.ThanhTienTruocVat * item.VAT / 100), 0);
                return this.data.reduce((sum: any, item: { ThueVatLamTron: any }) => sum + item.ThueVatLamTron, 0);

        }
    };
    constructor(
        public intl: IntlService,
        private route: ActivatedRoute,
        private baseService: BaseService,
        private apiService: ApiService, private dialog: MatDialog,
        private notificationService: NotificationService,
        private authService: AuthService,
        private cdRef: ChangeDetectorRef,
        private router: Router
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.NhapKhoVatTu;
        this.id = this.route.snapshot.params.id;

        this.nhapKho = new NhapKhoVatTu();
        this.nhapKhoChiTiet = new NhapKhoVatTuChiTiet();

        this.nhapKhoSource = new NhapKhoVatTu();
        this.nhapKhoChiTietSource = new NhapKhoVatTuChiTiet();

        let nhapKhoChiTietDataSource = new NhapKhoVatTuChiTiet();
        this.nhapKhoSource.NhapKhoVatTuChiTiets.push(nhapKhoChiTietDataSource)
        this.nhapKhoSource.NhapKhoVatTuChiTiets.splice(0, 1);

        this.gridColumns = [
            { Field: "LoaiSuDungDisplay", Title: "Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomDisplayGroupHeaderTemplate },
            { Field: "NhaThauDisplay", Title: "NCC", Width: 50, ShowTooltip: true, Sortable: false },
            { Field: "HopDongThauDisplay", Title: "Hợp Đồng Thầu", ShowTooltip: true, Width: 50, Sortable: false },
            { Field: "VatTuDisplay", Title: "Vật Tư", Width: 100, Sortable: false },
            { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false },
            { Field: "LoaiDisplay", Title: "Loại", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "Solo", Title: "Số Lô", Width: 40, Sortable: false },
            { Field: "HanSuDungDisplay", Title: "Hạn Sử Dụng", Width: 80, Sortable: false, ShowTooltip: true },
            { Field: "SoLuongNhapDisplay", Title: "SL", Width: 40, Sortable: false },
            { Field: "DonGiaNhap", Title: "Đơn Giá", Width: 100, Sortable: false, Template: this.giaTemplate },
            { Field: "ThanhTienTruocVat", Title: "Thành tiền (trước VAT)", Width: 100, Sortable: false, Template: this.thanhTienTruocVatTemplate, TemplateFooter: this.tongThanhTienTruocVatFooterTemplate },
            { Field: "VAT", Title: "VAT(%)", Width: 40, Sortable: false, TemplateFooter: this.tongThanhTienVatFooterTemplate },
            { Field: "ThanhTienSauVat", Title: "Thanh toán", Width: 100, Sortable: false, Template: this.thanhTienSauVatTemplate, TemplateFooter: this.tongThanhTienSauVatFooterTemplate },
            { Field: "GhiChu", Title: "Ghi chú", Width: 30, Sortable: false, ShowTooltip: true },
            { Field: "MaRef", Title: "Mã REF", Width: 40, Sortable: false },
            { Field: "MaVach", Title: "Mã Vạch", Width: 40, Sortable: false },
            { Field: "TiLeBHYTThanhToan", Title: "TL BH Thanh Toán(%)", Width: 40, Sortable: false },
            { Field: "TenKhoNhapSauKhiDuyet", Title: "Xuất về kho", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "TenNguoiNhapSauKhiDuyet", Title: "Người nhận", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate }
        ];

        this.setDataGridView(this.nhapKhoSource.NhapKhoVatTuChiTiets);

        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
        }
        else {
            this.setNhanVienId();
            this.getKhoVatTuYTe();
        }

        this.nhapKhoSearch = new NhapKhoVatTu();
        this.nhapKhoChiTietSearch = new NhapKhoVatTuChiTiet();

    }

    getById(id: number) {
        //console.log("getById = ", window.location.href);
        this.baseService.getById<NhapKhoVatTu>(id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.nhapKho = resultData;
                this.isCheckUrl(resultData.DuocKeToanDuyet);
            }
        });

        var self = this;

        self.grid._isLoading = true;

        self.apiService.post<NhapKhoVatTu>("NhapKhoVatTu/GetGrid?id=" + id).subscribe(
            resultDataGrid => {

                self.nhapKhoSource.NhapKhoVatTuChiTiets = resultDataGrid.NhapKhoVatTuChiTiets;
                self.nhapKhoSource.NhapKhoVatTuChiTiets.forEach(e => {
                    e.IdView = Math.random();
                    this.nhapKhoChiTiet.HopDongThauVatTuId = e.HopDongThauVatTuId;
                    this.nhapKhoChiTiet.HopDongThauDisplay = e.HopDongThauDisplay;
                    this.HopDongthauId = e.HopDongThauVatTuId;
                    this.HopDongthauDisplay = e.HopDongThauDisplay;
                    this.NhathauId = e.NhaThauId;
                    this.NhathauDisplay = e.NhaThauDisplay;
                    this.nhapKhoChiTiet.NhaThauId = e.NhaThauId;
                    this.nhapKhoChiTiet.NhaThauDisplay = e.NhaThauDisplay;
                });

                self.nhapKhoSource.OldNhapKhoVatTuChiTiets = [...self.nhapKhoSource.NhapKhoVatTuChiTiets];
                self.ClearData();
                self.setDataGridView(self.nhapKhoSource.NhapKhoVatTuChiTiets);

                self.grid._isLoading = false;
            },
            (err: ApiError) => {

                self.grid._isLoading = false;

                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });



    }
    getKhoVatTuYTe() {
        this.apiService.get<any>("NhapKhoVatTu/GetKhoVatTuYTe").subscribe(result => {
            this.nhapKhoChiTiet.KhoNhapSauKhiDuyetId = result.KeyId;
            this.nhapKhoChiTiet.KhoNhapSauKhiDuyetDisplayName = result.DisplayName;
        },
            (err: ApiError) => {
                this.notificationService.showError(err.Message);
            });
    }

    onDataBound(data: any) {
        this.data = data.Data;
    }
    isCheckUrl(duocKeToanDuyet: boolean) {
        let currentUrl = window.location.href;
        if (duocKeToanDuyet == null) {
            if (currentUrl.indexOf("/nhap-xuat/vat-tu/nhap-kho/chinh-sua/") == -1) {
                this.router.navigate(["/nhap-xuat/vat-tu/nhap-kho/chinh-sua/" + this.id]);
            }
        }
        else if (duocKeToanDuyet == false) {
            if (currentUrl.indexOf("/nhap-xuat/vat-tu/nhap-kho/tu-choi-duyet/") == -1) {
                this.router.navigate(["/nhap-xuat/vat-tu/nhap-kho/tu-choi-duyet/" + this.id]);
            }
        }
        else {
            if (currentUrl.indexOf("/nhap-xuat/vat-tu/nhap-kho/da-duyet/") == -1) {
                this.router.navigate(["/nhap-xuat/vat-tu/nhap-kho/da-duyet/" + this.id]);
            }
        }
    }

    Huy() {
        this.validationErrors = [];
        this.ClearData();
    }

    ClearData(isIgnore = false) {
        this.isUpdate = false;
        this.blockLoaiNhap = false;
        this.nhapKhoChiTiet.VatTuBenhVienId = null;
        this.nhapKhoChiTiet.DVT = null;
        this.nhapKhoChiTiet.SoLuongNhap = null;
        this.nhapKhoChiTiet.DonGiaNhap = null;
        this.nhapKhoChiTiet.VAT = 0 /*this.nhapKhoChiTiet.LaVatTuBHYT ? 0 : null*/;
        this.nhapKhoChiTiet.TiLeBHYTThanhToan = this.nhapKhoChiTiet.LaVatTuBHYT ? 100 : null;
        this.nhapKhoChiTiet.Solo = null;
        this.nhapKhoChiTiet.HanSuDung = null;
        this.nhapKhoChiTiet.MaRef = null;
        this.nhapKhoChiTiet.ThanhTienSauVat = null;
        this.nhapKhoChiTiet.ThanhTienTruocVat = null;
        this.nhapKhoChiTiet.ThueVatLamTron = null;
        this.nhapKhoChiTiet.SoLuongNhapSoCap = null;
        this.nhapKhoChiTiet.MaVach = null;
        this.nhapKhoChiTiet.GhiChu = null;

    }

    nhaThauChange() {
        this.nhapKhoChiTiet.KhoNhapSauKhiDuyetId = null;
        this.nhapKhoChiTiet.NguoiNhapSauKhiDuyetId = null;
    }

    getSharedData() {
        //return this.setFormAddNewSer();
        this.nhapKho.NhapKhoVatTuChiTiets = this.nhapKhoSource.NhapKhoVatTuChiTiets;
        this.nhapKho.OldNhapKhoVatTuChiTiets = [...this.nhapKhoSource.OldNhapKhoVatTuChiTiets];
        return this.nhapKho;
    }

    setNhanVienId() {
        //vì user la nhân viên nên lấy id của nhau
        let user = this.authService.getAccessUser();
        this.nhapKho.NguoiNhapId = user.Id;
    }

    disableNCC: boolean = false;
    setDataGridView(dataSource: any) {
        this.gridDataSource = null;
        this.dataSourceCache = dataSource;
        this.gridDataSource = {
            data: this.dataSourceCache,
            total: this.dataSourceCache.length
        };
        this.data = this.dataSourceCache;
        //console.log("setDataGridView = ", this.gridDataSource, this.grid);
        if (this.gridDataSource != undefined
            && this.gridDataSource != null
            && this.gridDataSource.total > 0) {
            this.disableNCC = true;
        }
        else {
            this.disableNCC = false;
        }
        if (!(this.cdRef as ViewRef).destroyed) {
            this.cdRef.detectChanges();
        }

        if (this.grid != undefined) {
            this.grid.setDataSource();
        }
    }
    rowIndex: number = null;
    UpdateRow() {
        this.nhapKhoChiTiet.LoaiNhap = this.loaiNhap;
        // this.nhapKhoChiTiet = this.nhapKhoChiTietEdit;
        let nhapKhoChiTietDataSource = this.nhapKhoChiTiet;
        this.rowIndex = this.nhapKhoSource.NhapKhoVatTuChiTiets.findIndex((x: any) => x.IdView == this.nhapKhoChiTiet.IdView);

        //this.kiemTraSoLuongNhapDuocPhamTheoHopDongThau(nhapKhoChiTietDataSource, nhapKhoChiTietDataSource.IdView);
        this.validationErrors = [];
        var self = this;
        if (self.validationErrors && !self.validationErrors.some(x => x)) {
            self.apiService.post<NhapKhoVatTuChiTiet>("NhapKhoVatTu/ThemVatTuNhapKho", nhapKhoChiTietDataSource).subscribe(
                resultData => {
                    // update
                    this.nhapKhoSource.NhapKhoVatTuChiTiets[this.rowIndex] = resultData;
                    this.setDataGridView(this.nhapKhoSource.NhapKhoVatTuChiTiets);
                    // update
                    //this.nhapKhoChiTiet = new NhapKhoDuocPhamChiTiet();
                    this.duocPhamCombobox.focusManual();
                    this.ClearData();
                },
                (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
        }
    }

    UpdateRowGripView(dataItem: NhapKhoVatTuChiTiet) {
        this.validationErrors = [];
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            var self = this;
            self.blockLoaiNhap = true;
            self.isUpdate = true;
            self.nhapKhoChiTiet = Object.assign({}, dataItem);;
            self.loaiNhap = dataItem.LoaiNhap;
            self.duocPhamCombobox.model = self.nhapKhoChiTiet.VatTuBenhVienId;
            self.duocPhamCombobox.getDataForLookup();

            // setTimeout(() => {
            //     if (self.duocPhamCombobox && this.loaiNhap === 1) {
            //         self.duocPhamCombobox.queryInfo.ParameterDependencies =
            //             '{' + self.duocPhamCombobox.hierarchyKeyToListen + ':' + self.nhapKhoChiTiet.HopDongThauVatTuId + '}';
            //         self.duocPhamCombobox.getDataForLookup();
            //     }
            // }, 100);

            if (self.nhapKhoChiTiet.HopDongThauVatTuId) {
                self.apiService.get<number>("NhapKhoVatTu/GetPriceOnContract?hopDongThauId="
                    + self.nhapKhoChiTiet.HopDongThauVatTuId + "&vatTuId=" + self.nhapKhoChiTiet.VatTuBenhVienId).subscribe(result => {
                        self.giaNhapInDB = result;
                        self.nhapKhoChiTiet.GiaApThau = result;
                    },
                        (err: ApiError) => {
                            self.notificationService.showError(err.Message);
                        });
            } else {
                self.giaNhapInDB = self.nhapKhoChiTiet.DonGiaNhap;
            }
        }
        else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    DeleteRowGripView(IdView: number) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false, width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, ["xóa dữ liệu ", ""]) }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                this.nhapKhoSource.NhapKhoVatTuChiTiets.forEach((value, index) => {
                    if (IdView == value.IdView) {
                        this.nhapKhoSource.NhapKhoVatTuChiTiets.splice(index, 1);
                        if (this.nhapKhoSource.NhapKhoVatTuChiTiets.length == 0)
                            this.isUpdate = false;
                        this.setDataGridView(this.nhapKhoSource.NhapKhoVatTuChiTiets)
                        this.Huy();

                        this.notificationService.showSuccess(NhapXuatKhoMessage.MessageRemoveItemGrid);
                    }
                });
            }
        });

    }

    AddRow() {
        this.nhapKhoChiTiet.LoaiNhap = this.loaiNhap;
        this.nhapKhoChiTiet.IdView = Math.random();
        let nhapKhoChiTietDataSource = this.nhapKhoChiTiet;
        this.validationErrors = [];
        var self = this;
        if (self.validationErrors && !self.validationErrors.some(x => x)) {
            self.apiService.post<NhapKhoVatTuChiTiet>("NhapKhoVatTu/ThemVatTuNhapKho", nhapKhoChiTietDataSource).subscribe(
                resultData => {
                    this.nhapKhoSource.NhapKhoVatTuChiTiets.unshift(resultData)
                    this.setDataGridView(this.nhapKhoSource.NhapKhoVatTuChiTiets)
                    //this.nhapKhoChiTiet = new NhapKhoDuocPhamChiTiet();
                    this.duocPhamCombobox.focusManual();
                    this.ClearData();
                },
                (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
        }
    }

    onChangeHanSuDung(event: any) {

    }

    onChangeLoaiNhap(event: number) {
        this.ClearData(true);
        this.nhapKhoChiTiet.TiLeBHYTThanhToan = event == 1 ? 100 : null;
        this.nhapKhoChiTiet.LaVatTuBHYT = false;
        this.cdRef.detectChanges();
        if (this.id === undefined) {
            this.getKhoVatTuYTe();
        }
    }

    onChangeHopDongThau(event: any) {
        if (event !== null && event !== undefined) {
            this.nhapKhoChiTiet.VatTuBenhVienId = null;
            this.nhapKhoChiTiet.DonGiaNhap = null;

            this.giaNhapInDB = null;

            this.nhapKhoChiTiet.HopDongThauVatTuId = event;
        }
        else {
            this.nhapKhoChiTiet.HopDongThauVatTuId = 0;
            this.nhapKhoChiTiet.DonGiaNhap = null;

            this.giaNhapInDB = null;
        }
        this.nhapKhoChiTiet.LoaiSuDung = null;
    }

    onChangeVatTu(event: any) {
        if (event !== null && event !== undefined) {
            if (this.validationErrors && this.validationErrors.some(x => x.Field.includes('DonGiaNhap')) && this.loaiNhap === 1) {
                for (const validateItem of this.validationErrors.filter(x => x.Field.includes('DonGiaNhap'))) {
                    this.validationErrors.splice(this.validationErrors.indexOf(validateItem), 1);
                }
            }
            this.nhapKhoChiTiet.DonGiaNhap = event.Gia;
            this.nhapKhoChiTiet.GiaApThau = event.Gia;
            this.nhapKhoChiTiet.DVT = event.DVT;
            this.nhapKhoChiTiet.HeSoDinhMucDonViTinh = event.HeSoDinhMucDonViTinh;
            this.giaNhapInDB = event.Gia;

            //suggest nhom
            let self = this;
            this.apiService.post<any>("NhapKhoVatTu/SuggestLoaiSuDung?id=" + event.KeyId).subscribe(
                resultData => {
                    if (resultData != null && resultData != undefined) {
                        self.nhapKhoChiTiet.LoaiSuDung = resultData;
                    }
                    else {
                        self.nhapKhoChiTiet.LoaiSuDung = null;
                    }
                },
                (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                        self.nhapKhoChiTiet.LoaiSuDung = null;
                    }
                });
        }
        else {
            this.nhapKhoChiTiet.DonGiaNhap = null;
            this.nhapKhoChiTiet.GiaApThau = null;
            this.giaNhapInDB = null;
            this.nhapKhoChiTiet.LoaiSuDung = null;
            this.nhapKhoChiTiet.SoLuongNhap = null;
            this.nhapKhoChiTiet.DonGiaNhap = null;
            this.nhapKhoChiTiet.VAT = 0;
            this.nhapKhoChiTiet.ThanhTienSauVat = null;
            this.nhapKhoChiTiet.ThanhTienTruocVat = null;
            this.nhapKhoChiTiet.ThueVatLamTron = null;
            this.nhapKhoChiTiet.DVT = null;
        }
    }

    loaiNguoiGiaoChange($event) {
        this.nhapKho.NguoiGiaoId = null;
        this.nhapKho.TenNguoiGiao = null;
    }
    loaiChange($event) {
        //console.log("loaiChange = ", $event);
        if ($event == true) {
            this.nhapKhoChiTiet.VAT = 0;
            this.nhapKhoChiTiet.TiLeBHYTThanhToan = 100;
        }
        else {
            this.nhapKhoChiTiet.TiLeBHYTThanhToan = null;
        }
    }

    onKey(event: any) {
        if (event.keyCode == 13) {
            this.buttonThemAction();
        }
    }

    onKeyHopDong(event: any) {
        if (event.keyCode == 13) {
            if (this.hopDongDisabled != true) {
                this.buttonThemAction();
            }
            else {
                this.hopDongDisabled = false;
            }
        }
    }

    openComboboxHopDong($event) {
        if ($event) {
            this.hopDongDisabled = true;
        }
        else {
            this.hopDongDisabled = false;
        }
    }

    onKeyDuocPham(event: any) {
        if (event.keyCode == 13) {
            if (this.duocPhamDisabled != true) {
                this.buttonThemAction();
            }
            else {
                this.duocPhamDisabled = false;
            }
        }
    }

    openComboboxDuocPham($event) {
        if ($event) {
            this.duocPhamDisabled = true;
        }
        else {
            this.duocPhamDisabled = false;
        }
    }

    onKeyNhom(event: any) {
        if (event.keyCode == 13) {
            if (this.nhomDisabled != true) {
                this.buttonThemAction();
            }
            else {
                this.nhomDisabled = false;
            }
        }
    }

    openComboboxNhom($event) {
        if ($event) {
            this.nhomDisabled = true;
        }
        else {
            this.nhomDisabled = false;
        }
    }

    buttonThemAction() {
        if (this.isUpdate == false) {
            this.AddRow();
        }
        else {
            this.UpdateRow();
        }
    }
    modelChangeSoLuongNhapSoCap(event: any) {
        if (this.nhapKhoChiTiet.HeSoDinhMucDonViTinh != null && this.nhapKhoChiTiet.HeSoDinhMucDonViTinh > 0) {
            this.nhapKhoChiTiet.SoLuongNhap = event * this.nhapKhoChiTiet.HeSoDinhMucDonViTinh;
        }
    }


    modelChangeSoLuongNhap(event: number) {
        this.nhapKhoChiTiet.SoLuongNhap = event;
        this.nhapKhoChiTiet.ThanhTienTruocVat = (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
            (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0);
        var thanhTien = 0;
        if (!this.nhapKhoChiTiet.LaVatTuBHYT) {
            if (this.nhapKhoChiTiet.VAT != null) {
                thanhTien = (
                    (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                    (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * (this.nhapKhoChiTiet.VAT / 100)
                );
            } else {
                thanhTien = (
                    (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0)
                );
            }
        } else {
            thanhTien = (
                (event != null ? event : 0) *
                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                (event != null ? event : 0) *
                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * ((this.nhapKhoChiTiet.VAT != null ? this.nhapKhoChiTiet.VAT : 0) / 100)
            );
        }
        let numberStr = thanhTien.toString().split(".");
        if (numberStr.length > 1) {
            let number = Number(numberStr[1]);
            if (number < 10) {
                if (number >= 5) {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                } else {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                }
            } else {
                if (number >= 50) {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                } else {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                }
            }

        } else {
            this.nhapKhoChiTiet.ThanhTienSauVat = thanhTien;
        }
        this.modelThanhTienSauVat(this.nhapKhoChiTiet.ThanhTienSauVat);

    }
    modelChangeDonGiaNhap(event: number) {
        this.nhapKhoChiTiet.DonGiaNhap = event;
        this.nhapKhoChiTiet.ThanhTienTruocVat = (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
            (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0);
        let thanhTien = 0;
        if (!this.nhapKhoChiTiet.LaVatTuBHYT) {
            if (this.nhapKhoChiTiet.VAT != null) {
                thanhTien = (
                    // (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                    // (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                    (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                    (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * (this.nhapKhoChiTiet.VAT / 100)
                );
            } else {
                thanhTien = (
                    (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0)
                );
            }
        }
        let numberStr = thanhTien.toString().split(".");
        if (numberStr.length > 1) {
            let number = Number(numberStr[1]);
            if (number < 10) {
                if (number >= 5) {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                } else {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                }
            } else {
                if (number >= 50) {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                } else {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                }
            }

        } else {
            this.nhapKhoChiTiet.ThanhTienSauVat = thanhTien;
        }
        this.modelThanhTienSauVat(this.nhapKhoChiTiet.ThanhTienSauVat);

    }
    modelChangeVAT(event: number) {
        let thanhTien = (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
            (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
            (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
            (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * ((event != null ? event : 0) / 100);
        let numberStr = thanhTien.toString().split(".");
        if (numberStr.length > 1) {
            let number = Number(numberStr[1]);
            if (number < 10) {
                if (number >= 5) {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                } else {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                }
            } else {
                if (number >= 50) {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                } else {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                }
            }

        } else {
            this.nhapKhoChiTiet.ThanhTienSauVat = thanhTien;
        }
        this.modelThanhTienSauVat(this.nhapKhoChiTiet.ThanhTienSauVat);

    }

    modelChangeThanhTienTruocVat(event: number) {
        this.nhapKhoChiTiet.ThanhTienTruocVat = event;
        this.nhapKhoChiTiet.DonGiaNhap = (this.nhapKhoChiTiet.ThanhTienTruocVat != null ? this.nhapKhoChiTiet.ThanhTienTruocVat : 0) / (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0);
        if (!this.nhapKhoChiTiet.LaVatTuBHYT) {
            let thanhTien = 0;
            if (this.nhapKhoChiTiet.VAT != null) {
                thanhTien = (
                    (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                    (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * (this.nhapKhoChiTiet.VAT / 100)
                );
            } else {
                thanhTien = (
                    (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0)
                );
            }
            let numberStr = thanhTien.toString().split(".");
            if (numberStr.length > 1) {
                let number = Number(numberStr[1]);
                if (number < 10) {
                    if (number >= 5) {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.ThanhTienTruocVat + Math.ceil(thanhTien);
                    } else {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.ThanhTienTruocVat + Math.floor(thanhTien);
                    }
                } else {
                    if (number >= 50) {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.ThanhTienTruocVat + Math.ceil(thanhTien);
                    } else {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.ThanhTienTruocVat + Math.floor(thanhTien);
                    }
                }
            } else {
                this.nhapKhoChiTiet.ThanhTienSauVat = thanhTien;
            }

        } else {
            let thanhTien = (
                (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * ((this.nhapKhoChiTiet.VAT != null ? this.nhapKhoChiTiet.VAT : 0) / 100)
            );
            let numberStr = thanhTien.toString().split(".");
            if (numberStr.length > 1) {
                let number = Number(numberStr[1]);
                if (number < 10) {
                    if (number >= 5) {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                    } else {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                    }
                } else {
                    if (number >= 50) {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                    } else {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                    }
                }

            } else {
                this.nhapKhoChiTiet.ThanhTienSauVat = thanhTien;
            }
        }
        this.modelThanhTienSauVat(this.nhapKhoChiTiet.ThanhTienSauVat);
    }

    modelThanhTienSauVat(event: number) {
        if (event != undefined && event != null) {
            let thanhTienVAT = (
                (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * ((this.nhapKhoChiTiet.VAT != null ? this.nhapKhoChiTiet.VAT : 0) / 100)
            );
            let numberFixed = thanhTienVAT.toFixed(2);
            let numberStr = numberFixed.split(".");
            if (numberStr.length > 1) {
                let number = Number(numberStr[1]);
                if (number < 10) {
                    if (number >= 5) {
                        this.nhapKhoChiTiet.ThueVatLamTron = Math.ceil(Number(numberFixed));
                    } else {
                        this.nhapKhoChiTiet.ThueVatLamTron = Math.floor(Number(numberFixed));
                    }
                } else {
                    if (number >= 50) {
                        this.nhapKhoChiTiet.ThueVatLamTron = Math.ceil(Number(numberFixed));
                    } else {
                        this.nhapKhoChiTiet.ThueVatLamTron = Math.floor(Number(numberFixed));
                    }
                }
            }
            else {
                if (this.nhapKhoChiTiet.VAT == undefined || this.nhapKhoChiTiet.VAT == null) {
                    this.nhapKhoChiTiet.ThueVatLamTron = 0;
                }
            }
        }
        else {
            this.nhapKhoChiTiet.ThueVatLamTron = 0;
        }
    }


    blurChangeSoChungTu(event: any) {
        if (this.nhapKho.SoChungTu != null && this.nhapKho.SoChungTu != "") {
            if (this.nhapKho.SoChungTu.length < 7) {
                var str = "";
                for (var i = 0; i < 7 - this.nhapKho.SoChungTu.length; i++) {
                    str += "0";
                }
                this.nhapKho.SoChungTu = str + this.nhapKho.SoChungTu;
            }
        }
    }
}
