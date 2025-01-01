import { Component, OnInit, ViewChild, TemplateRef, Input, ChangeDetectorRef, ViewRef } from '@angular/core';
import { NhapKhoDuocPham, NhapKhoDuocPhamChiTiet } from '../nhap-kho.model';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IntlService } from '@progress/kendo-angular-intl';
import icSearch from '@iconify/icons-ic/twotone-search';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NhapXuatKhoMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';

import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { ComboboxTreeComponent } from 'src/app/shared/component/dropdowns/combobox-tree/combobox-tree.component';

@Component({
    selector: 'app-nhap-kho-share',
    templateUrl: './nhap-kho-share.component.html',
    styleUrls: ['./nhap-kho-share.component.scss']
})

export class NhapKhoShareComponent implements OnInit {
    @Input() isUpdate: boolean = false;
    nhapKho: NhapKhoDuocPham = new NhapKhoDuocPham();
    nhapKhoChiTiet: NhapKhoDuocPhamChiTiet = new NhapKhoDuocPhamChiTiet();

    nhapKhoSource: NhapKhoDuocPham = new NhapKhoDuocPham();
    nhapKhoChiTietSource: NhapKhoDuocPhamChiTiet = new NhapKhoDuocPhamChiTiet();

    nhapKhoSearch: NhapKhoDuocPham = new NhapKhoDuocPham();
    nhapKhoChiTietSearch: NhapKhoDuocPhamChiTiet= new NhapKhoDuocPhamChiTiet();


    ListIdUpdate: number[] = []
    dataSourceCache: any;
    gridColumns: any[] = [];
    gridDataSource: any;

    format: string = 'n2';
    formatpercen: string = '#.00 \\%';

    icSearch = icSearch;
    icDelete = icDelete;
    icEdit = icEdit;
    icMoreHoriz = icMoreHoriz;

    giaNhapInDB: number = null;

    searchString: string = "";
    documentType: DocumentType;
    loaiNhap = 1; // 1 là hdt, 2 là ncc
    blockLoaiNhap = false;

    groups: GroupDescriptor[] = [{ field: 'NhomDisplay' }];
    id: number;
    NhathauId: number;
    NhathauDisplay: string;
    HopDongthauId: number;
    HopDongthauDisplay: string;
    data: any[] = [];

    //
    hopDongDisabled: boolean = false;
    duocPhamDisabled: boolean = false;
    nhomDisabled: boolean = false;
    //

    kyHieuHD: string = "";
    soCT: string = "";
    nguoiGiaoId: number = 0;
    tenNguoiGiao: string = "";
    isFirst: boolean = true;

    @Input() daDuyet: boolean = null;
    @Input() tuChoiDuyet: boolean = null;
    @Input() chuaDuyet: boolean = null;
    @Input() validationErrors: any;

    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('headerTemplate', { static: true }) headerTemplate: TemplateRef<any>;
    @ViewChild('giaTemplate', { static: true }) giaTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTruocVatTemplate', { static: true }) thanhTienTruocVatTemplate: TemplateRef<any>;
    @ViewChild('thanhTienSauVatTemplate', { static: true }) thanhTienSauVatTemplate: TemplateRef<any>;
    @ViewChild('tongThanhTienTruocVatFooterTemplate', { static: true }) tongThanhTienTruocVatFooterTemplate: TemplateRef<any>;
    @ViewChild('tongThanhTienSauVatFooterTemplate', { static: true }) tongThanhTienSauVatFooterTemplate: TemplateRef<any>;
    @ViewChild('tongThanhTienVatFooterTemplate', { static: true }) tongThanhTienVatFooterTemplate: TemplateRef<any>;


    @ViewChild('grid', { static: false }) grid: GridComponent;

    @ViewChild('duocPhamCombobox', { static: false }) duocPhamCombobox: ComboboxComponent;
    @ViewChild('cmbHopDongThau', { static: false }) cmbHopDongThau: ComboboxComponent;
    @ViewChild('cmbNhom', { static: false }) cmbNhom: ComboboxTreeComponent;


    @ViewChild('nhomDisplayGroupHeaderTemplate', { static: true }) nhomDisplayGroupHeaderTemplate: TemplateRef<any>;

    public totalTongThanhTien(field: any) {
        switch (field) {
            case 'ThanhTienTruocVat':
                return this.data.reduce((sum: any, item: { ThanhTienTruocVat: any; }) => sum + item.ThanhTienTruocVat, 0);
            case 'ThanhTienSauVat':
                return this.data.reduce((sum: any, item: { ThanhTienSauVat: any; }) => sum + item.ThanhTienSauVat, 0);
            case 'VAT':
                return this.data.reduce((sum: any, item: { ThueVatLamTron: any; }) => sum + item.ThueVatLamTron, 0);
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
        this.documentType = DocumentType.NhapKhoDuocPham;
        this.id = this.route.snapshot.params.id;
        this.nhapKho = new NhapKhoDuocPham();
        this.nhapKhoChiTiet = new NhapKhoDuocPhamChiTiet();

        this.nhapKhoSource = new NhapKhoDuocPham();
        this.nhapKhoChiTietSource = new NhapKhoDuocPhamChiTiet();

        let nhapKhoChiTietDataSource = new NhapKhoDuocPhamChiTiet();
        this.nhapKhoSource.NhapKhoDuocPhamChiTiets.push(nhapKhoChiTietDataSource)
        this.nhapKhoSource.NhapKhoDuocPhamChiTiets.splice(0, 1);

        this.gridColumns = [
            { Field: "NhomDisplay", Title: "Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomDisplayGroupHeaderTemplate },
            { Field: "NhaThauDisplay", Title: "NCC", Width: 50, ShowTooltip: true, Sortable: false },
            { Field: "HopDongThauDisplay", Title: "Hợp Đồng Thầu", ShowTooltip: true, Width: 50, Sortable: false },
            { Field: "DuocPhamDisplay", Title: "Dược Phẩm", Width: 100, Sortable: false },
            { Field: "HamLuong", Title: "Hàm lượng", Width: 30, Sortable: false },
            { Field: "DVT", Title: "ĐVT", Width: 30, Sortable: false },
            { Field: "LoaiDisplay", Title: "Loại", Width: 30, Sortable: false, ShowTooltip: true },
            { Field: "Solo", Title: "Số Lô", Width: 50, Sortable: false },
            { Field: "HanSuDungDisplay", Title: "Hạn Sử Dụng", Width: 60, Sortable: false, ShowTooltip: true },
            { Field: "SoLuongNhapDisplay", Title: "SL", Width: 30, Sortable: false },
            { Field: "DonGiaNhap", Title: "Đơn Giá", Width: 80, Sortable: false, Template: this.giaTemplate },
            { Field: "ThanhTienTruocVat", Title: "Thành tiền (trước VAT)", Width: 120, Sortable: false, Template: this.thanhTienTruocVatTemplate, TemplateFooter: this.tongThanhTienTruocVatFooterTemplate },
            { Field: "VAT", Title: "VAT(%)", Width: 30, Sortable: false, TemplateFooter: this.tongThanhTienVatFooterTemplate },
            { Field: "ThanhTienSauVat", Title: "Thanh toán", Width: 120, Sortable: false, Template: this.thanhTienSauVatTemplate, TemplateFooter: this.tongThanhTienSauVatFooterTemplate },
            { Field: "GhiChu", Title: "Ghi chú", Width: 30, Sortable: false, ShowTooltip: true },
            { Field: "MaRef", Title: "Mã REF", Width: 30, Sortable: false, ShowTooltip: true },
            { Field: "MaVach", Title: "Mã Vạch", Width: 30, Sortable: false, ShowTooltip: true },
            { Field: "TiLeBHYTThanhToan", Title: "TL BH Thanh Toán(%)", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "TenKhoNhapSauKhiDuyet", Title: "Xuất về kho", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "TenNguoiNhapSauKhiDuyet", Title: "Người nhận", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate }
        ];

        this.setDataGridView(this.nhapKhoSource.NhapKhoDuocPhamChiTiets);

        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
        }
        else {
            this.setNhanVienId();
        }
        // else
        // {
        //   this.kiemTraThongTinXuatKho();
        // }

        this.nhapKhoSearch = new NhapKhoDuocPham();
        this.nhapKhoChiTietSearch = new NhapKhoDuocPhamChiTiet();

    }

    // click(){
    //   console.log("grid = ", this.grid);
    //   this.grid._isLoading = true;
    //   //this.grid._isLoadingTotalPage = true;
    //   //this.cdRef.detectChanges();
    // }

    setNhanVienId() {
        //vì user la nhân viên nên lấy id của nhau
        let user = this.authService.getAccessUser();
        this.nhapKho.NguoiNhapId = user.Id;
    }

    kiemTraThongTinXuatKho() {
        // kiểm tra thông tin xuất kho
        if (!this.nhapKho.DaXuatKho) {
            if (this.gridColumns.findIndex(x => x.Field == "Action") == -1)
                this.gridColumns.push({ Field: "Action", Title: "", Width: 60, Template: this.actionTemplate });
        }
    }

    onDataBound(data: any) {
        this.data = data.Data;
        console.log(this.data)
    }
    getById(id: number) {
        //console.log("getById = ", window.location.href);
        this.baseService.getById<NhapKhoDuocPham>(id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.isCheckUrl(resultData.DuocKeToanDuyet);
                this.nhapKho = resultData;
            }
        });

        var self = this;

        self.grid._isLoading = true;

        self.apiService.post<NhapKhoDuocPham>("NhapKhoDuocPham/GetGrid?id=" + id).subscribe(
            resultDataGrid => {
                self.nhapKhoSource.NhapKhoDuocPhamChiTiets = resultDataGrid.NhapKhoDuocPhamChiTiets;
                self.nhapKhoSource.NhapKhoDuocPhamChiTiets.forEach(e => {
                    e.IdView = Math.random();
                    this.nhapKhoChiTiet.HopDongThauDuocPhamId = e.HopDongThauDuocPhamId;
                    this.nhapKhoChiTiet.HopDongThauDisplay = e.HopDongThauDisplay;
                    this.HopDongthauId = e.HopDongThauDuocPhamId;
                    this.HopDongthauDisplay = e.HopDongThauDisplay;
                    this.nhapKhoChiTiet.NhaThauId = e.NhaThauId;
                    this.nhapKhoChiTiet.NhaThauDisplay = e.NhaThauDisplay;
                });
                this.NhathauId = self.nhapKhoSource.NhapKhoDuocPhamChiTiets[self.nhapKhoSource.NhapKhoDuocPhamChiTiets.length - 1].NhaThauId;
                this.NhathauDisplay = self.nhapKhoSource.NhapKhoDuocPhamChiTiets[self.nhapKhoSource.NhapKhoDuocPhamChiTiets.length - 1].NhaThauDisplay;
                self.nhapKhoSource.OldNhapKhoDuocPhamChiTiets = [...self.nhapKhoSource.NhapKhoDuocPhamChiTiets];
                self.ClearData();
                self.setDataGridView(self.nhapKhoSource.NhapKhoDuocPhamChiTiets);

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

    isCheckUrl(duocKeToanDuyet: boolean) {
        let currentUrl = window.location.href;
        if (duocKeToanDuyet == null) {
            if (currentUrl.indexOf("/nhap-xuat/duoc-pham/nhap-kho/chinh-sua/") == -1) {
                this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/chinh-sua/" + this.id]);
            }
        }
        else if (duocKeToanDuyet == false) {
            if (currentUrl.indexOf("/nhap-xuat/duoc-pham/nhap-kho/tu-choi-duyet/") == -1) {
                this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/tu-choi-duyet/" + this.id]);
            }
        }
        else {
            if (currentUrl.indexOf("/nhap-xuat/duoc-pham/nhap-kho/da-duyet/") == -1) {
                this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/da-duyet/" + this.id]);
            }
        }
    }

    kyHieuHoaDonChange(event) {
        this.kyHieuHD = event;
    }
    soChungTuChange(event) {
        this.soCT = event;
    }
    onChangeLoaiNhap(event: number) {
        this.ClearData();
        this.validationErrors = [];
        this.nhapKhoChiTiet.TiLeBHYTThanhToan = event == 1 ? 100 : null;
        this.nhapKhoChiTiet.LaDuocPhamBHYT = event == 1 ? true : false;
        this.cdRef.detectChanges();
    }

    Huy() {
        this.validationErrors = [];
        this.ClearData();
    }

    ClearData() {
        this.isUpdate = false;
        this.blockLoaiNhap = false;
        this.nhapKhoChiTiet.DuocPhamBenhVienId = null;
        this.nhapKhoChiTiet.DVT = null;
        this.nhapKhoChiTiet.SoLuongNhap = null;
        this.nhapKhoChiTiet.DonGiaNhap = null;
        this.nhapKhoChiTiet.VAT = 0/*this.nhapKhoChiTiet.LaDuocPhamBHYT ? 0 : 0*/;
        this.nhapKhoChiTiet.TiLeBHYTThanhToan = this.nhapKhoChiTiet.LaDuocPhamBHYT ? 100 : null;
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

    AddRow() {
        this.nhapKhoChiTiet.LoaiNhap = this.loaiNhap;
        let nhapKhoChiTietDataSource = this.nhapKhoChiTiet;
        nhapKhoChiTietDataSource.IdView = Math.random();
        if (this.nhapKhoChiTiet.LaDuocPhamBHYT) {
            this.nhapKhoChiTiet.ThanhTienSauVat = 0;
        }
        this.validationErrors = [];
        var self = this;
        if (self.validationErrors && !self.validationErrors.some(x => x)) {
            self.apiService.post<NhapKhoDuocPhamChiTiet>("NhapKhoDuocPham/ThemDuocPhamNhapKho", nhapKhoChiTietDataSource).subscribe(
                resultData => {
                    self.nhapKhoSource.NhapKhoDuocPhamChiTiets.push(resultData)
                    self.setDataGridView(self.nhapKhoSource.NhapKhoDuocPhamChiTiets)
                    //self.nhapKhoChiTiet = new NhapKhoDuocPhamChiTiet();
                    self.duocPhamCombobox.focusManual();
                    self.ClearData();
                },
                (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                });
        }
    }

    UpdateRow() {
        this.nhapKhoChiTiet.LoaiNhap = this.loaiNhap;
        let nhapKhoChiTietDataSource = this.nhapKhoChiTiet;
        //this.kiemTraSoLuongNhapDuocPhamTheoHopDongThau(nhapKhoChiTietDataSource, nhapKhoChiTietDataSource.IdView);
        this.validationErrors = [];
        var self = this;

        if (self.validationErrors && !self.validationErrors.some(x => x)) {
            self.apiService.post<NhapKhoDuocPhamChiTiet>("NhapKhoDuocPham/ThemDuocPhamNhapKho", nhapKhoChiTietDataSource).subscribe(
                resultData => {
                    // update
                    const item = self.nhapKhoSource.NhapKhoDuocPhamChiTiets.filter(obj => obj.IdView == resultData.IdView)[0];
                    self.nhapKhoSource.NhapKhoDuocPhamChiTiets[self.nhapKhoSource.NhapKhoDuocPhamChiTiets.indexOf(item)] = resultData;

                    self.setDataGridView(self.nhapKhoSource.NhapKhoDuocPhamChiTiets);
                    // update
                    //self.nhapKhoChiTiet = new NhapKhoDuocPhamChiTiet();
                    self.duocPhamCombobox.focusManual();
                    self.ClearData();
                },
                (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                });
        }

    }

    DeleteRowGripView(IdView: number) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false, width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, ["xóa dữ liệu ", ""]) }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                this.nhapKhoSource.NhapKhoDuocPhamChiTiets.forEach((value, index) => {
                    if (IdView == value.IdView) {
                        this.nhapKhoSource.NhapKhoDuocPhamChiTiets.splice(index, 1);
                        if (this.nhapKhoSource.NhapKhoDuocPhamChiTiets.length == 0)
                            this.isUpdate = false;
                        this.setDataGridView(this.nhapKhoSource.NhapKhoDuocPhamChiTiets);
                        this.Huy();
                        this.notificationService.showSuccess(NhapXuatKhoMessage.MessageRemoveItemGrid);
                    }
                });
            }
        });

    }

    UpdateRowGripView(dataItem: NhapKhoDuocPhamChiTiet) {
        this.validationErrors = [];
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            var self = this;
            self.blockLoaiNhap = true;
            self.isUpdate = true;

            self.nhapKhoChiTiet = new NhapKhoDuocPhamChiTiet();
            self.nhapKhoChiTiet = JSON.parse(JSON.stringify(dataItem));
            self.loaiNhap = dataItem.LoaiNhap;
            self.duocPhamCombobox.model = self.nhapKhoChiTiet.DuocPhamBenhVienId;
            self.nhapKhoChiTiet.TenDuocPhamBenhVien = dataItem.TenDuocPhamBenhVien;

            if (self.nhapKhoChiTiet.HopDongThauDuocPhamId) {
                self.apiService.get<number>("NhapKhoDuocPham/GetPriceOnContract?hopDongThauId="
                    + self.nhapKhoChiTiet.HopDongThauDuocPhamId +
                    "&duocPhamId=" + self.nhapKhoChiTiet.DuocPhamBenhVienId).subscribe(result => {
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
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }

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
        if (this.gridDataSource != undefined
            && this.gridDataSource != null
            && this.gridDataSource.total > 0) {
            this.disableNCC = true;
        }
        else {
            this.disableNCC = false;
        }
        console.log("setDataGridView = ", this.gridDataSource, this.grid);

        if (!(this.cdRef as ViewRef).destroyed) {
            this.cdRef.detectChanges();
        }

        if (this.grid != undefined) {
            this.grid.setDataSource();
        }
    }

    onChangeHopDongThau(event: any) {
        if (event !== null && event !== undefined) {
            this.nhapKhoChiTiet.DuocPhamBenhVienId = null;
            this.nhapKhoChiTiet.DonGiaNhap = null;
            this.giaNhapInDB = null;
            this.nhapKhoChiTiet.HopDongThauDuocPhamId = event.KeyId;
            this.nhapKhoChiTiet.NhaThauId = event.NhauThauId;
        }
        else {
            this.nhapKhoChiTiet.HopDongThauDuocPhamId = 0;
            this.nhapKhoChiTiet.NhaThauId = null;
            this.nhapKhoChiTiet.DonGiaNhap = null;
            this.giaNhapInDB = null;
        }

        //this.nhapKhoChiTiet.DuocPhamBenhVienPhanNhomId = null;
    }

    selectionChangeDuocPham(dataItem: any) {
        if (dataItem !== null && dataItem !== undefined) {
            this.nhapKhoChiTiet.DonGiaNhap = dataItem.Gia;
            this.nhapKhoChiTiet.GiaApThau = dataItem.Gia;
            this.nhapKhoChiTiet.DVT = dataItem.DVT;
            this.nhapKhoChiTiet.HeSoDinhMucDonViTinh = dataItem.HeSoDinhMucDonViTinh;
            this.giaNhapInDB = dataItem.Gia;
            this.modelChangeDonGiaNhap(this.nhapKhoChiTiet.DonGiaNhap);
        }
        else {
            this.nhapKhoChiTiet.GiaApThau = null;
            this.nhapKhoChiTiet.DonGiaNhap = null;
            this.giaNhapInDB = null;
            this.nhapKhoChiTiet.SoLuongNhap = null;
            this.nhapKhoChiTiet.VAT = 0;
            this.nhapKhoChiTiet.ThanhTienSauVat = null;
            this.nhapKhoChiTiet.ThanhTienTruocVat = null;
            this.nhapKhoChiTiet.ThueVatLamTron = null;
            this.nhapKhoChiTiet.DVT = null;


        }
    }

    getSharedData() {
        this.nhapKho.NhapKhoDuocPhamChiTiets = this.nhapKhoSource.NhapKhoDuocPhamChiTiets;
        this.nhapKho.OldNhapKhoDuocPhamChiTiets = [...this.nhapKhoSource.OldNhapKhoDuocPhamChiTiets];
        return this.nhapKho;
    }

    loaiNguoiGiaoChange() {
        this.nhapKho.NguoiGiaoId = null;
        this.nhapKho.TenNguoiGiao = null;
    }
    tenNguoiGiaoChange(event) {
        this.tenNguoiGiao = event;
    }
    nguoiGiaoIdChange(event) {
        this.nguoiGiaoId = event;
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
        this.nhapKhoChiTiet.ThanhTienTruocVat = (event != null ? event : 0) *
            (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0);
        if (!this.nhapKhoChiTiet.LaDuocPhamBHYT) {
            let thanhTien = (
                (event != null ? event : 0) *
                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                (event != null ? event : 0) *
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

            }
            this.modelThanhTienSauVat(this.nhapKhoChiTiet.ThanhTienSauVat);
        }
    }
    modelChangeDonGiaNhap(event: number) {
        this.nhapKhoChiTiet.ThanhTienTruocVat = (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
            (event != null ? event : 0);
        if (!this.nhapKhoChiTiet.LaDuocPhamBHYT) {
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
        this.nhapKhoChiTiet.DonGiaNhap = (event != null ? event : 0) / (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0);
        if (!this.nhapKhoChiTiet.LaDuocPhamBHYT) {
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

            this.modelThanhTienSauVat(this.nhapKhoChiTiet.ThanhTienSauVat);
        }
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

    modelChangeThueVatLamTron(event: number) {
        if (event != undefined && event != null) {
            this.nhapKhoChiTiet.VAT = (event / 100);
        } else {
            this.nhapKhoChiTiet.VAT = 0;
            this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.ThanhTienTruocVat;
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
