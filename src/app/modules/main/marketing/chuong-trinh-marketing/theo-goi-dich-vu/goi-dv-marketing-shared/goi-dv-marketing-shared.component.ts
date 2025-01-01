import { NhapTruocChietKhauPopupComponent } from './../nhap-truoc-chiet-khau-popup/nhap-truoc-chiet-khau-popup.component';
import { ActivatedRoute } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaseService } from 'src/app/core/services/base.service';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { ApiService } from 'src/app/core/services/api.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GoiDvMarketing, SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GoiDichVuChuongTrinhMarketing, KhuyenMaiKem, LoaiGiaBenhVien, NhomDichVu, QuaTangKem, TruocChietKhau } from '../goi-dv-marketing.model';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { NhapSauChietKhauPopupComponent } from '../nhap-sau-chiet-khau-popup/nhap-sau-chiet-khau-popup.component';
import icAdd from '@iconify/icons-ic/twotone-add';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LoaiDichVuPopupComponent } from '../loai-dich-vu-popup/loai-dich-vu-popup.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-goi-dv-marketing-shared',
    templateUrl: './goi-dv-marketing-shared.component.html',
    styleUrls: ['./goi-dv-marketing-shared.component.scss']
})

export class GoiDvCtMarketingSharedComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private baseService: BaseService,
        private authService: AuthService
    ) { }

    listDVG: any[] = [];
    @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
    @ViewChild('trangThaiChiTietDichVuGiuongTemplate', { static: true }) trangThaiChiTietDichVuGiuongTemplate: TemplateRef<any>;
    @ViewChild('tongCongFooterGiuongTemplate', { static: true }) tongCongFooterGiuongTemplate: TemplateRef<any>;
    @ViewChild('thanhTienFooterGiuongTemplate', { static: true }) thanhTienFooterGiuongTemplate: TemplateRef<any>;
    @ViewChild('gridQuaTangKem', { static: false }) gridQuaTangKem: GridComponent;
    @ViewChild('gridKhuyenMaiKem', { static: false }) gridKhuyenMaiKem: GridComponent;
    @ViewChild('gridNhomDichVu', { static: false }) gridNhomDichVu: GridComponent;
    goiMarketing = {} as GoiDichVuChuongTrinhMarketing;
    quaTang = {} as QuaTangKem;
    khuyenMaiKem = new KhuyenMaiKem();
    luaChonGoiDichVu = 1;
    danhSachLoaiGia: LoaiGiaBenhVien[] = [];
    khamBenhDisabled = false;
    kyThuatDisabled = false;
    giuongDisabled = false;
    loaiGiaKhamBenhDisabled = false;
    loaiGiaKyThuatDisabled = false;
    loaiGiaGiuongDisabled = false;
    idDichVuKhamBenhComponent: number;
    icAdd = icAdd;

    documentType: DocumentType;
    validationErrors: any;
    icDelete = icDelete;
    icEdit = icEdit;
    icMoreHoriz = icMoreHoriz;
    gridColumns: any[] = [];
    gridColumnsKhuyenMai: any[] = [];
    gridColumnsNhomDichVu: any[] = [];
    gridDataSource: any = {
        data: [],
        total: 0
    };
    gridDataSourceKhuyenMai: any = {
        data: [],
        total: 0
    };
    gridDataSourceNhomDichVu: any = {
        data: [],
        total: 0
    };
    id: number = this.route.snapshot.params.id;
    phanTramChietKhauHienTai = null;
    coQuaTang = false;
    coKhuyenMai = false;
    idQuaTangGrid: number;
    notAllowChangeGoiDv = false;
    quaTangDisabled = false;
    nhomDichVusOld: NhomDichVu[] = [];
    nhomDichVuIdOld: number = null;
    @Input() isCreate = false;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('tenDichVuGroupFooterTemplate', { static: true }) tenDichVuGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('loaiGiaTemplate', { static: true }) loaiGiaTemplate: TemplateRef<any>;
    @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
    @ViewChild('quaTangTemplate', { static: true }) quaTangTemplate: TemplateRef<any>;
    @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
    @ViewChild('tenDichVuKhongChietKhauFooterTemplate', { static: true }) tenDichVuKhongChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('ghiChuTemplate', { static: true }) ghiChuTemplate: TemplateRef<any>;
    @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
    @ViewChild('dichVuFooterTemplate', { static: true }) dichVuFooterTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
    @ViewChild('soLuongKMTemplate', { static: true }) soLuongKMTemplate: TemplateRef<any>;
    @ViewChild('donGiaKMTemplate', { static: true }) donGiaKMTemplate: TemplateRef<any>;
    @ViewChild('thanhTienKMFooterTemplate', { static: true }) thanhTienKMFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaKMFooterTemplate', { static: true }) donGiaKMFooterTemplate: TemplateRef<any>;
    @ViewChild('trangThaiKMTemplate', { static: true }) trangThaiKMTemplate: TemplateRef<any>;
    @ViewChild('soNgaySuDungTemplate', { static: true }) soNgaySuDungTemplate: TemplateRef<any>;


    @ViewChild('soLuongNhomDichVuTemplate', { static: true }) soLuongNhomDichVuTemplate: TemplateRef<any>;
    @ViewChild('donGiaBenhVienTemplate', { static: true }) donGiaBenhVienTemplate: TemplateRef<any>;
    @ViewChild('donGiaTruocChietKhauTemplate', { static: true }) donGiaTruocChietKhauTemplate: TemplateRef<any>;
    @ViewChild('donGiaSauChietKhauTemplate', { static: true }) donGiaSauChietKhauTemplate: TemplateRef<any>;
    @ViewChild('thanhTienBenhVienTemplate', { static: true }) thanhTienBenhVienTemplate: TemplateRef<any>;
    @ViewChild('thanhTienBenhVienFooterTemplate', { static: true }) thanhTienBenhVienFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTruocChietKhauTemplate', { static: true }) thanhTienTruocChietKhauTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTruocChietKhauFooterTemplate', { static: true }) thanhTienTruocChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienSauChietKhauTemplate', { static: true }) thanhTienSauChietKhauTemplate: TemplateRef<any>;
    @ViewChild('thanhTienSauChietKhauFooterTemplate', { static: true }) thanhTienSauChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaTruocChietKhauHeaderTemplate', { static: true }) donGiaTruocChietKhauHeaderTemplate: TemplateRef<any>;
    @ViewChild('donGiaSauChietKhauHeaderTemplate', { static: true }) donGiaSauChietKhauHeaderTemplate: TemplateRef<any>;
    //#endregion

    groups: GroupDescriptor[] = [
        {
            field: 'NhomDisplay', aggregates: [
                { field: 'DonGia', aggregate: 'sum' },
                { field: 'ThanhTien', aggregate: 'sum' }
            ]
        }
    ];
    public tongThanhTien(field: any) {
        switch (field) {
            case 'ThanhTien': {
                return this.goiMarketing.KhuyenMaiKems.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
            case 'ThanhTienBenhVien': {
                return this.goiMarketing.NhomDichVus.reduce((sum, item) => sum + item.ThanhTienBenhVien, 0);
            }
            case 'ThanhTienTruocChietKhau': {
                this.goiMarketing.GiaTruocChietKhau = this.goiMarketing.NhomDichVus.reduce((sum, item) => sum + item.ThanhTienTruocChietKhau, 0);
                return this.goiMarketing.GiaTruocChietKhau;
            }
            case 'ThanhTienSauChietKhau': {
                this.goiMarketing.GiaSauChietKhau = this.goiMarketing.NhomDichVus.reduce((sum, item) => sum + item.ThanhTienSauChietKhau, 0);
                return this.goiMarketing.GiaSauChietKhau;
            }
        }
    }
    ngOnInit() {
        this.documentType = DocumentType.GoiDichVuMarketing;

        this.goiMarketing.KhuyenMaiKems = [];
        this.goiMarketing.NhomDichVus = [];
        this.goiMarketing.TuNgay = new Date();
        this.gridColumns = [
            { Field: 'STT', Title: '#', Width: 35, Template: this.sttTemplate },
            { Field: 'QuaTang', Title: 'Quà Tặng', MinWidth: 120 },
            { Field: 'SoLuong', Title: 'Số Lượng', Width: 120, Template: this.soLuongTemplate },
            {
                Field: 'GhiChu', Title: 'Ghi Chú', Width: 474,
                Template: this.ghiChuTemplate
            },
            { Field: 'Action', Title: '', Width: 66, Template: this.trangThaiTemplate }
        ];
        this.gridColumnsKhuyenMai = [
            { Field: 'STT', Title: '#', Width: 35, Template: this.sttTemplate },
            { Field: 'MaDv', Title: 'Mã', Width: 120 },
            {
                Field: 'NhomDisplay', Title: 'Nhóm', Width: 200, Hidden: true,
                TemplateGroupHeader: this.nhomGroupHeaderTemplate
            },
            {
                Field: 'TenDv', Title: 'Tên Dịch Vụ', MinWidth: 200,
                TemplateGroupFooter: this.tenDichVuGroupFooterTemplate
            },
            { Field: 'LoaiGiaDisplay', Title: 'Loại Giá', Width: 120 },
            { Field: 'SoLuong', Title: 'Số Lượng', Width: 120, Template: this.soLuongKMTemplate },
            {
                Field: 'DonGia', Title: 'Đơn Giá', Width: 120,
                Template: this.donGiaTemplate, TemplateFooter: this.donGiaKMFooterTemplate
            },
            {
                Field: 'DonGiaKhuyenMai', Title: 'Đơn Giá KM', Width: 120,
                Template: this.donGiaKMTemplate
            },
            {
                Field: 'ThanhTien', Title: 'Thành Tiền', Width: 120,
                Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienKMFooterTemplate
            },
            { Field: 'SoNgaySuDung', Title: 'Số ngày sử dụng', Width: 120, Template: this.soNgaySuDungTemplate },
            {
                Field: 'GhiChu', Title: 'Ghi Chú', Width: 474,
                Template: this.ghiChuTemplate
            },
            { Field: 'Action', Title: '', Width: 66, Template: this.trangThaiKMTemplate }
        ];
        this.gridColumnsNhomDichVu = [
            { Field: 'STT', Title: '#', Width: 35, Template: this.sttTemplate },
            { Field: 'MaDv', Title: 'Mã', Width: 120 },
            {
                Field: 'NhomDisplay', Title: 'Nhóm', Width: 200, Hidden: true,
                TemplateGroupHeader: this.nhomGroupHeaderTemplate
            },
            {
                Field: 'TenDv', Title: 'Tên Dịch Vụ', MinWidth: 200,
                TemplateGroupFooter: this.tenDichVuGroupFooterTemplate
            },
            { Field: 'LoaiGiaDisplay', Title: 'Loại Giá', Width: 120 },
            { Field: 'SoLuong', Title: 'Số Lượng', Width: 120, Template: this.soLuongNhomDichVuTemplate },
            {
                Field: 'DonGiaBenhVien', Title: 'ĐG BV', Width: 120,
                Template: this.donGiaBenhVienTemplate, TemplateFooter: this.donGiaKMFooterTemplate
            },
            {
                Field: 'DonGiaTruocChietKhau', Title: 'ĐG trước CK', Width: 120,
                Template: this.donGiaTruocChietKhauTemplate, TemplateHeader: this.donGiaTruocChietKhauHeaderTemplate
            },
            {
                Field: 'DonGiaSauChietKhau', Title: 'ĐG sau CK', Width: 120,
                Template: this.donGiaSauChietKhauTemplate, TemplateHeader: this.donGiaSauChietKhauHeaderTemplate
            },
            {
                Field: 'ThanhTienBenhVien', Title: 'TT BV', Width: 120,
                Template: this.thanhTienBenhVienTemplate, TemplateFooter: this.thanhTienBenhVienFooterTemplate
            },
            {
                Field: 'ThanhTienTruocChietKhau', Title: 'TT trước CK', Width: 120,
                Template: this.thanhTienTruocChietKhauTemplate, TemplateFooter: this.thanhTienTruocChietKhauFooterTemplate
            },
            {
                Field: 'ThanhTienSauChietKhau', Title: 'TT sau CK', Width: 120,
                Template: this.thanhTienSauChietKhauTemplate, TemplateFooter: this.thanhTienSauChietKhauFooterTemplate
            }
        ];
        if (this.id) {
            this.OpenLoading();
            this.getById();
        }
    }

    OpenLoading() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' }
        });
    }

    CloseLoading() {
        this.dialog.closeAll();
    }

    getById() {
        this.baseService.getById<GoiDichVuChuongTrinhMarketing>(this.id).subscribe(resultData => {
            if (resultData) {
                this.CloseLoading();
                if (this.isCreate) {
                    this.goiMarketing = { ...resultData };
                    this.goiMarketing.Id = 0;
                    this.goiMarketing.QuaTangKems.forEach(x => {
                        x.IdSys = 0;
                        x.GoiDvChuongTrinhMarketingId = 0;
                    });
                    this.coQuaTang = this.goiMarketing.QuaTangKems && this.goiMarketing.QuaTangKems.some(x => x);
                    this.coKhuyenMai = this.goiMarketing.KhuyenMaiKems && this.goiMarketing.KhuyenMaiKems.some(x => x);
                    this.setDataGridView();
                    this.setDataGridViewKhuyenMai();
                    this.setDataGridViewNhomDichVu();

                    if (this.gridQuaTangKem) {
                        this.gridQuaTangKem.gridDataSource = { ...this.gridDataSource };
                        this.gridQuaTangKem.setDataSource();
                    }
                    if (this.gridKhuyenMaiKem) {
                        this.gridKhuyenMaiKem.gridDataSource = { ...this.gridDataSourceKhuyenMai };
                        this.gridKhuyenMaiKem.setDataSource();
                    }
                    if (this.gridNhomDichVu) {
                        this.gridNhomDichVu.gridDataSource = { ...this.gridDataSourceNhomDichVu };
                        this.gridNhomDichVu.setDataSource();
                    }
                    return;
                }
                this.goiMarketing = { ...resultData };
                this.notAllowChangeGoiDv = this.goiMarketing.CoYeuCauSuDung;
                this.goiMarketing.TuNgay = this.goiMarketing.TuNgay && this.goiMarketing.TuNgay !== ''
                    ? new Date(this.goiMarketing.TuNgay) : null;
                this.goiMarketing.DenNgay = this.goiMarketing.DenNgay && this.goiMarketing.DenNgay !== ''
                    ? new Date(this.goiMarketing.DenNgay) : null;
                this.coQuaTang = this.goiMarketing.QuaTangKems && this.goiMarketing.QuaTangKems.some(x => x);
                this.coKhuyenMai = this.goiMarketing.KhuyenMaiKems && this.goiMarketing.KhuyenMaiKems.some(x => x);
                this.setDataGridView();
                this.setDataGridViewKhuyenMai();
                this.setDataGridViewNhomDichVu();

                if (this.gridQuaTangKem) {
                    this.gridQuaTangKem.gridDataSource = { ...this.gridDataSource };
                    this.gridQuaTangKem.setDataSource();
                }
                if (this.gridKhuyenMaiKem) {
                    this.gridKhuyenMaiKem.gridDataSource = { ...this.gridDataSourceKhuyenMai };
                    this.gridKhuyenMaiKem.setDataSource();
                }
                if (this.gridNhomDichVu) {
                    this.gridNhomDichVu.gridDataSource = { ...this.gridDataSourceNhomDichVu };
                    this.gridNhomDichVu.setDataSource();
                }
                this.nhomDichVuIdOld = JSON.parse(JSON.stringify(this.goiMarketing.GoiDvId));
                this.nhomDichVusOld = [...this.goiMarketing.NhomDichVus];
            }
        }, () => {
            this.CloseLoading();
        });
    }

    getSharedData() {
        if (this.isCreate) {
            this.goiMarketing.Id = 0;
        } else {
            this.goiMarketing.Id = this.id ? this.id : 0;
        }
        this.goiMarketing.GiaSauChietKhau = this.goiMarketing.GiaSauChietKhau ? this.goiMarketing.GiaSauChietKhau : 0;
        if (!this.coQuaTang && this.goiMarketing.QuaTangKems && this.goiMarketing.QuaTangKems.some(x => x)) {
            this.goiMarketing.QuaTangKems = [];
        }
        if (!this.coKhuyenMai && this.goiMarketing.KhuyenMaiKems && this.goiMarketing.KhuyenMaiKems.some(x => x)) {
            this.goiMarketing.KhuyenMaiKems = [];
        }
        return this.goiMarketing;
    }

    onChangeGoiDichVu(data: any) {
        if (data) {
            this.goiMarketing.GoiDichVu = data.DisplayName;
            this.goiMarketing.GoiDvId = data.KeyId;
            this.goiMarketing.MoTaGoiDichVu = data.MoTa;
            if (this.nhomDichVuIdOld != this.goiMarketing.GoiDvId) {
                this.apiService.get
                    (`GoiDichVuChuongTrinhMarketing/GetDanhSachNhomDichVu?goiDvId=${this.goiMarketing.GoiDvId}`).subscribe(
                        (resultData: any) => {
                            this.goiMarketing.NhomDichVus = resultData;
                            this.setDataGridViewNhomDichVu();
                        });
            }
            else {
                this.goiMarketing.NhomDichVus = this.nhomDichVusOld;
                this.setDataGridViewNhomDichVu();
            }
            return;
        }

        this.goiMarketing.GoiDichVu = null;
        this.goiMarketing.GoiDvId = null;
        this.goiMarketing.GiaTruocChietKhau = null;
        this.goiMarketing.GiaSauChietKhau = null;
        this.goiMarketing.TiLeChietKhau = null;
    }

    onChangeTiLeCk(tiLeCk: number) {
        this.phanTramChietKhauHienTai = tiLeCk ? tiLeCk : 10;
        this.goiMarketing.TiLeChietKhau = tiLeCk ? tiLeCk : 0;
        this.goiMarketing.GiaSauChietKhau =
            this.goiMarketing.GiaTruocChietKhau ?
                this.goiMarketing.GiaTruocChietKhau * (100 - this.goiMarketing.TiLeChietKhau) / 100 : null;
    }

    onChangeGiaSauCk(giaSauCk: number) {
        this.goiMarketing.GiaSauChietKhau = giaSauCk ? giaSauCk : 0;
        this.goiMarketing.TiLeChietKhau = this.phanTramChietKhauHienTai =
            this.goiMarketing.GiaTruocChietKhau ? 100 - (100 * this.goiMarketing.GiaSauChietKhau / this.goiMarketing.GiaTruocChietKhau) : 0;
    }

    onChangeQuaTang(data: any) {
        if (data) {
            this.quaTang.QuaTang = data.DisplayName;
            this.quaTang.QuaTangId = data.KeyId;
            return;
        }

        this.quaTang.QuaTangId = null;
        this.quaTang.QuaTang = null;
        this.quaTang.SoLuong = null;
    }

    Reset() {
        this.quaTang.IdSys = null;
        this.quaTang.QuaTangId = null;
        this.quaTang.QuaTang = null;
        this.quaTang.Id = null;
        this.quaTang.SoLuong = null;
        this.quaTang.GhiChu = null;
        this.quaTang.GoiDvChuongTrinhMarketingId = null;
        this.ResetValidateFormForGrid();
    }

    ResetValidateFormForGrid() {
        if (this.validationErrors && this.validationErrors.some(x => x.Field.includes('QuaTangId') || x.Field.includes('SoLuong'))) {
            for (const validationItem of this.validationErrors.filter(x => x.Field.includes('QuaTangId') || x.Field.includes('SoLuong'))) {
                this.validationErrors.splice(this.validationErrors.indexOf(validationItem), 1);
            }
        }
    }

    ResetValidateForGrid() {
        if (this.validationErrors && this.validationErrors.some(x => x.Field.includes('dataItem'))) {
            for (const validationItem of this.validationErrors.filter(x => x.Field.includes('dataItem'))) {
                this.validationErrors.splice(this.validationErrors.indexOf(validationItem), 1);
            }
        }
    }

    onCheckQuaTang() {
        this.ResetValidateFormForGrid();
        this.ResetValidateForGrid();
    }

    Add() {
        this.validationFormClient(this.quaTang);
        this.AddingAfterValidation();
    }

    AddingAfterValidation() {
        if (this.validationErrors && !this.validationErrors.some(x => x)) {
            this.idQuaTangGrid = this.goiMarketing.QuaTangKems ? this.goiMarketing.QuaTangKems.length + 1 : 1;

            let quaTangKem = {} as QuaTangKem;
            quaTangKem = { ...this.quaTang };
            quaTangKem.IdSys = 0;
            quaTangKem.Id = this.idQuaTangGrid;
            quaTangKem.GoiDvChuongTrinhMarketingId = this.id ? this.id : 0;

            if (!this.goiMarketing.QuaTangKems) { this.goiMarketing.QuaTangKems = []; }
            this.goiMarketing.QuaTangKems.push(quaTangKem);
            this.setDataGridView();
            this.gridQuaTangKem.gridDataSource = { ...this.gridDataSource };
            this.gridQuaTangKem.setDataSource();
            this.Reset();
        }
    }

    setDataGridView() {
        this.gridDataSource = {
            data: [...this.goiMarketing.QuaTangKems],
            total: this.goiMarketing.QuaTangKems.length
        };
    }

    validationFormClient(quaTang: QuaTangKem) {
        this.validationErrors = [];
        const array = [];
        if (quaTang) {
            if (quaTang.QuaTangId === 0 || quaTang.QuaTangId == null) {
                array.push({ Field: 'QuaTangId', Message: 'Yêu cầu chọn quà tặng.' });
            }

            if (quaTang.SoLuong === 0 || quaTang.SoLuong == null) {
                array.push({ Field: 'SoLuong', Message: 'Số lượng yêu cầu nhập.' });
            }
        }

        if (this.checkExist(quaTang.QuaTangId)) {
            array.push({ Field: 'QuaTangId', Message: 'Quà tặng này đã có trong danh sách' });
        }

        if (array.length > 0) { this.validationErrors = [...array]; }
    }

    checkExist(quaTangId: number) {
        return this.goiMarketing.QuaTangKems && this.goiMarketing.QuaTangKems.some(x => x.QuaTangId === quaTangId);
    }

    ConfirmDelete(dataItem: QuaTangKem) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.Delete(dataItem);
            }
        });
    }

    Delete(dataItem: QuaTangKem) {
        this.goiMarketing.QuaTangKems.splice(this.goiMarketing.QuaTangKems.indexOf(dataItem), 1);
        this.setDataGridView();
        this.gridQuaTangKem.gridDataSource = { ...this.gridDataSource };
        this.gridQuaTangKem.setDataSource();
        this.ResetValidateForGrid();
    }

    OnValidate() {
        this.validationErrors = [];
        if (!this.goiMarketing.Ma) {
            const validate = {
                Field: 'Ma',
                Message: GoiDvMarketing.MessageMaCtNotNull
            };
            this.validationErrors.push(validate);
        }

        if (!this.goiMarketing.Ten) {
            const validate = {
                Field: 'Ten',
                Message: GoiDvMarketing.MessageTenCtNotNull
            };
            this.validationErrors.push(validate);
        }

        if (!this.goiMarketing.GoiDvId) {
            const validate = {
                Field: 'GoiDvId',
                Message: GoiDvMarketing.MessageGoiDvNotNull
            };
            this.validationErrors.push(validate);
        }

        // if (!this.goiMarketing.TiLeChietKhau) {
        //     const validate = {
        //         Field: 'TiLeChietKhau',
        //         Message: GoiDvMarketing.MessageTiLeCkNotNull
        //     };
        //     this.validationErrors.push(validate);
        // }

        if (!this.goiMarketing.TuNgay) {
            const validate = {
                Field: 'TuNgay',
                Message: GoiDvMarketing.MessageTuNgayNotNull
            };
            this.validationErrors.push(validate);
        }

        if (this.goiMarketing.DenNgay && this.goiMarketing.DenNgay < this.goiMarketing.TuNgay) {
            const validate = {
                Field: 'DenNgay',
                Message: GoiDvMarketing.MessageTuNgayNotAllowGreaterThanDenNgay
            };
            this.validationErrors.push(validate);
        }

        const currentDate: Date = new Date();
        if (this.goiMarketing.DenNgay && this.goiMarketing.DenNgay < currentDate && this.goiMarketing.DenNgay >= this.goiMarketing.TuNgay) {
            const validate = {
                Field: 'DenNgay',
                Message: GoiDvMarketing.MessageTuNgayNotAllowGreaterThanCurrentTime
            };
            this.validationErrors.push(validate);
        }

        if (this.validationErrors && !this.validationErrors.some(x => x) && this.coQuaTang) {
            if (!this.goiMarketing.QuaTangKems || (this.goiMarketing.QuaTangKems && !this.goiMarketing.QuaTangKems.some(x => x))) {
                const validate = {
                    Field: 'dvTrongGoi',
                    Message: GoiDvMarketing.MessageTiLeCkNotNull
                };
                this.validationErrors.push(validate);
                this.notificationService.showError(GoiDvMarketing.MessageQuaTangKemNotEmpty);
            }

            if (this.goiMarketing.QuaTangKems && this.goiMarketing.QuaTangKems.some(x => !x.SoLuong)) {
                for (const quaTang of this.goiMarketing.QuaTangKems.filter(x => !x.SoLuong)) {
                    const validate = {
                        Field: 'dataItem[' + this.goiMarketing.QuaTangKems.indexOf(quaTang) + '].SoLuong',
                        Message: GoiDvMarketing.SoLuongNotNull
                    };
                    this.validationErrors.push(validate);
                }
            }
        }

        if (this.validationErrors && !this.validationErrors.some(x => x) && this.coKhuyenMai) {
            if (this.goiMarketing.KhuyenMaiKems && this.goiMarketing.KhuyenMaiKems.some(x => !x.SoLuong)) {
                for (const khuyenMai of this.goiMarketing.KhuyenMaiKems.filter(x => !x.SoLuong)) {
                    const validate = {
                        Field: 'dataItem[' + this.goiMarketing.KhuyenMaiKems.indexOf(khuyenMai) + '].SoLuong',
                        Message: GoiDvMarketing.SoLuongNotNull
                    };
                    this.validationErrors.push(validate);
                }
            }
            // if (this.goiMarketing.KhuyenMaiKems && this.goiMarketing.KhuyenMaiKems.some(x => !x.DonGiaKhuyenMai)) {
            //     for (const khuyenMai of this.goiMarketing.KhuyenMaiKems.filter(x => !x.DonGiaKhuyenMai)) {
            //         const validate = {
            //             Field: 'dataItem[' + this.goiMarketing.KhuyenMaiKems.indexOf(khuyenMai) + '].DonGiaKhuyenMai',
            //             Message: GoiDvMarketing.DonGiaKhuyenMaiNotNull
            //         };
            //         this.validationErrors.push(validate);
            //     }
            // }
            if (this.goiMarketing.KhuyenMaiKems && this.goiMarketing.KhuyenMaiKems.some(x => !x.SoNgaySuDung)) {
                for (const khuyenMai of this.goiMarketing.KhuyenMaiKems.filter(x => !x.SoNgaySuDung)) {
                    const validate = {
                        Field: 'dataItem[' + this.goiMarketing.KhuyenMaiKems.indexOf(khuyenMai) + '].SoNgaySuDung',
                        Message: GoiDvMarketing.SoNgaySuDungNotNull
                    };
                    this.validationErrors.push(validate);
                }
            }
        }

        if (this.validationErrors && !this.validationErrors.some(x => x)) {
            if (this.goiMarketing.NhomDichVus && this.goiMarketing.NhomDichVus.some(x => !x.SoLuong)) {
                for (const nhomDichVu of this.goiMarketing.NhomDichVus.filter(x => !x.SoLuong)) {
                    const validate = {
                        Field: 'dataItem[' + this.goiMarketing.NhomDichVus.indexOf(nhomDichVu) + '].SoLuong',
                        Message: GoiDvMarketing.SoLuongNotNull
                    };
                    this.validationErrors.push(validate);
                }
            }
            // if (this.goiMarketing.NhomDichVus && this.goiMarketing.NhomDichVus.some(x => !x.DonGiaTruocChietKhau)) {
            //     for (const nhomDichVu of this.goiMarketing.NhomDichVus.filter(x => !x.DonGiaTruocChietKhau)) {
            //         const validate = {
            //             Field: 'dataItem[' + this.goiMarketing.NhomDichVus.indexOf(nhomDichVu) + '].DonGiaTruocChietKhau',
            //             Message: GoiDvMarketing.DonGiaTruocChietKhauNotNull
            //         };
            //         this.validationErrors.push(validate);
            //     }
            // }
            // if (this.goiMarketing.NhomDichVus && this.goiMarketing.NhomDichVus.some(x => !x.DonGiaSauChietKhau)) {
            //     for (const nhomDichVu of this.goiMarketing.NhomDichVus.filter(x => !x.DonGiaSauChietKhau)) {
            //         const validate = {
            //             Field: 'dataItem[' + this.goiMarketing.NhomDichVus.indexOf(nhomDichVu) + '].DonGiaSauChietKhau',
            //             Message: GoiDvMarketing.DonGiaSauChietKhauNotNull
            //         };
            //         this.validationErrors.push(validate);
            //     }
            // }
        }
    }

    onKeyAddQua(keyInput: any) {
        if (keyInput.keyCode === 13) {
            if (this.quaTangDisabled !== true) {
                this.Add();
            } else {
                this.quaTangDisabled = false;
            }
        }
    }

    openComboboxQuaTang(isOpen: boolean) {
        this.quaTangDisabled = isOpen;
    }
    onCheckKhuyenMai() {
        this.ResetValidateFormForGridKhuyenMai();
        this.ResetValidateForGridKhuyenMai();
    }
    ResetValidateFormForGridKhuyenMai() {
        if (this.validationErrors && this.validationErrors.some(x => x.Field.includes('DvId') || x.Field.includes('LoaiGia') || x.Field.includes('SoLuong') || x.Field.includes('DonGiaKhuyenMai'))) {
            for (const validationItem of this.validationErrors.filter(x => x.Field.includes('DvId') || x.Field.includes('LoaiGia') || x.Field.includes('SoLuong') || x.Field.includes('DonGiaKhuyenMai'))) {
                this.validationErrors.splice(this.validationErrors.indexOf(validationItem), 1);
            }
        }
    }

    ResetValidateForGridKhuyenMai() {
        if (this.validationErrors && this.validationErrors.some(x => x.Field.includes('dataItemKhuyenMai'))) {
            for (const validationItem of this.validationErrors.filter(x => x.Field.includes('dataItemKhuyenMai'))) {
                this.validationErrors.splice(this.validationErrors.indexOf(validationItem), 1);
            }
        }
    }

    onChangeGoiDvLuaChon(event: any) {
        if (event == 3) {
            this.danhSachLoaiGia = null;
            this.khuyenMaiKem.LoaiGia = null;
        }
        this.ResetKhuyenMai();
    }
    ResetKhuyenMai() {
        this.khuyenMaiKem.DonGia = null;
        this.khuyenMaiKem.DonGiaKhuyenMai = 0;
        this.khuyenMaiKem.ThanhTien = null;
        this.khuyenMaiKem.MaDv = null;
        this.khuyenMaiKem.TenDv = null;
        this.khuyenMaiKem.Id = null;
        this.khuyenMaiKem.DvId = null;
        this.khuyenMaiKem.LoaiGia = null;
        this.khuyenMaiKem.SoLuong = 1;
        this.khuyenMaiKem.IdDatabase = null;
        this.khuyenMaiKem.GhiChu = null;
        this.khuyenMaiKem.Nhom = null;
        this.khuyenMaiKem.NhomDisplay = null;
        this.khuyenMaiKem.SoNgaySuDung = 30;
        this.ResetValidateFormForGridKhuyenMai();
    }

    onChangeDichVu(data: any) {
        if (data) {
            this.khuyenMaiKem.TenDv = data.DisplayName;
            this.khuyenMaiKem.DvId = data.KeyId;
            this.khuyenMaiKem.MaDv = data.Ma;
            switch (this.luaChonGoiDichVu) {
                case 1: {
                    this.danhSachLoaiGia = null;
                    this.khuyenMaiKem.LoaiGia = null;
                    this.apiService.post('GoiDichVu/LoaiGiaDichVuKhamBenh?idDichVuKhamBenhId=' + this.khuyenMaiKem.DvId).subscribe(
                        (resultData: any) => {
                            this.danhSachLoaiGia = resultData;
                            if (this.danhSachLoaiGia != null && this.danhSachLoaiGia.length > 0) {
                                this.khuyenMaiKem.LoaiGia = this.danhSachLoaiGia[0].KeyId;
                                this.onChangeLoaiGia(this.danhSachLoaiGia[0]);
                            }
                        });
                    break;
                }
                case 2: {
                    this.danhSachLoaiGia = null;
                    this.khuyenMaiKem.LoaiGia = null;
                    this.apiService.post('GoiDichVu/LoaiGiaNhomGiaDichVuKyThuatBenhVien?dichVuKyThuatId=' + this.khuyenMaiKem.DvId).subscribe(
                        (resultData: any) => {
                            this.danhSachLoaiGia = resultData;
                            if (this.danhSachLoaiGia != null && this.danhSachLoaiGia.length > 0) {
                                this.khuyenMaiKem.LoaiGia = this.danhSachLoaiGia[0].KeyId;
                                this.onChangeLoaiGia(this.danhSachLoaiGia[0]);
                            }
                        });
                    break;
                }
                case 3: {
                    this.danhSachLoaiGia = null;
                    this.khuyenMaiKem.LoaiGia = null;
                    this.apiService.post('GoiDichVu/LoaiGiaNhomGiaGiuongBenhVien?dichVuGiuongBenhVienId=' + this.khuyenMaiKem.DvId).subscribe(
                        (resultData: any) => {
                            this.danhSachLoaiGia = resultData;
                            if (this.danhSachLoaiGia != null && this.danhSachLoaiGia.length > 0) {
                                this.khuyenMaiKem.LoaiGia = this.danhSachLoaiGia[0].KeyId;
                                this.onChangeLoaiGia(this.danhSachLoaiGia[0]);
                            }
                        });
                    break;
                }
            }
            return;
        }
        else {
            this.danhSachLoaiGia = null;
            this.khuyenMaiKem.LoaiGia = null;
        }
        this.khuyenMaiKem.DonGia = null;
        this.khuyenMaiKem.DonGiaKhuyenMai = 0;
        this.khuyenMaiKem.ThanhTien = null;
    }

    onChangeLoaiGia(loaiGia: any) {
        this.khuyenMaiKem.LoaiGia = loaiGia.KeyId;
        this.khuyenMaiKem.LoaiGiaDisplay = loaiGia.DisplayName;
        if (this.validationErrors && this.validationErrors.some(x => x.Field.includes('DonGia'))) {
            for (const validationItem of this.validationErrors.filter(x => x.Field.includes('DonGia'))) {
                this.validationErrors.splice(this.validationErrors.indexOf(validationItem), 1);
            }
        }
        if (this.validationErrors && this.validationErrors.some(x => x.Field.includes('DonGiaKhuyenMai'))) {
            for (const validationItem of this.validationErrors.filter(x => x.Field.includes('DonGiaKhuyenMai'))) {
                this.validationErrors.splice(this.validationErrors.indexOf(validationItem), 1);
            }
        }
        if (this.khuyenMaiKem.DvId) {
            switch (this.luaChonGoiDichVu) {
                case 1: {
                    this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKhamBenh?dichVuKhamBenhBenhVienId=' + this.khuyenMaiKem.DvId +
                        '&nhomGiaDichVuKhamBenhBenhVienId=' + this.khuyenMaiKem.LoaiGia).subscribe(
                            (resultData: any) => {
                                this.khuyenMaiKem.DonGia = resultData;
                                this.khuyenMaiKem.DonGiaKhuyenMai = resultData;
                                this.khuyenMaiKem.ThanhTien = this.khuyenMaiKem.SoLuong != null ?
                                    resultData * this.khuyenMaiKem.SoLuong : resultData;
                            });
                    break;
                }
                case 2: {
                    this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKyThuat?dichVuKyThuatBenhVienId=' + this.khuyenMaiKem.DvId +
                        '&nhomGiaDichVuKyThuatBenhVienId=' + this.khuyenMaiKem.LoaiGia).subscribe(
                            (resultData: any) => {
                                this.khuyenMaiKem.DonGia = resultData;
                                this.khuyenMaiKem.DonGiaKhuyenMai = resultData;
                                this.khuyenMaiKem.ThanhTien = this.khuyenMaiKem.SoLuong != null ?
                                    resultData * this.khuyenMaiKem.SoLuong : resultData;
                            });
                    break;
                }
                case 3: {
                    this.apiService.post('GoiDichVu/GetChiPhiChoDichVuGiuong?dichVuGiuongBenhVienId=' + this.khuyenMaiKem.DvId +
                        '&nhomGiaId=' + this.khuyenMaiKem.LoaiGia).subscribe(
                            (resultData: any) => {
                                this.khuyenMaiKem.DonGia = resultData;
                                this.khuyenMaiKem.DonGiaKhuyenMai = resultData;
                                this.khuyenMaiKem.ThanhTien = this.khuyenMaiKem.SoLuong != null ?
                                    resultData * this.khuyenMaiKem.SoLuong : resultData;
                            });
                    break;
                }
            }
            return;
        }

        this.khuyenMaiKem.DonGia = null;
        this.khuyenMaiKem.DonGiaKhuyenMai = 0;
        this.khuyenMaiKem.ThanhTien = null;
    }

    ChangeSoLuong(soluong: number) {
        this.khuyenMaiKem.SoLuong = soluong;
        this.khuyenMaiKem.ThanhTien = this.khuyenMaiKem.DonGiaKhuyenMai != null ?
            this.khuyenMaiKem.DonGiaKhuyenMai * soluong : null;
    }

    ChangeSoLuongDataItem(soLuong: number, data: KhuyenMaiKem) {
        data.SoLuong = soLuong;
        data.ThanhTien = data.SoLuong != null ?
            data.DonGiaKhuyenMai * soLuong : data.DonGiaKhuyenMai;
    }

    ChangeDonGiaKhuyenMai(donGiaKhuyenMai: number) {
        this.khuyenMaiKem.ThanhTien = donGiaKhuyenMai != null ?
            donGiaKhuyenMai * this.khuyenMaiKem.SoLuong : null;
    }

    ChangeDonGiaKhuyenMaiDataItem(donGiaKhuyenMai: number, data: KhuyenMaiKem) {
        data.ThanhTien = data.SoLuong != null ?
            donGiaKhuyenMai * data.SoLuong : donGiaKhuyenMai;
    }
    openComboboxKhamBenh(isOpen: boolean) {
        this.khamBenhDisabled = isOpen;
    }

    openComboboxKyThuat(isOpen: boolean) {
        this.kyThuatDisabled = isOpen;
    }

    openComboboxLoaiGiaKhamBenh(isOpen: boolean) {
        this.loaiGiaKhamBenhDisabled = isOpen;
    }

    openComboboxLoaiGiaKyThuat(isOpen: boolean) {
        this.loaiGiaKyThuatDisabled = isOpen;
    }
    openComboboxLoaiGiaGiuong(isOpen: boolean) {
        this.loaiGiaGiuongDisabled = isOpen;
    }

    onKeyAddDv(keyInput: any, loai = 0) {
        if (keyInput.keyCode === 13) {
            this.AddKhuyenMai();
        }
    }

    AddKhuyenMai() {
        switch (this.luaChonGoiDichVu) {
            case 1: {
                this.validationFormClientForKhamBenh(this.khuyenMaiKem);
                this.AddingAfterValidationKhuyenMai(1);
                break;
            }
            case 2: {
                this.validationFormClientForKyThuat(this.khuyenMaiKem);
                this.AddingAfterValidationKhuyenMai(2);
                break;
            }
            case 3: {
                this.validationFormClientForGiuong(this.khuyenMaiKem);
                this.AddingAfterValidationKhuyenMai(3);
                break;
            }
        }
    }

    AddingAfterValidationKhuyenMai(loaiNhom: number) {
        if (this.validationErrors && !this.validationErrors.some(x => x)) {
            this.khuyenMaiKem.Nhom = loaiNhom;
            this.apiService.get('GoiDichVuMarketing/GetResultEnumDichVuTongHop?enumTongHop=' + this.khuyenMaiKem.Nhom).subscribe(
                (resultData: any) => {
                    this.idDichVuKhamBenhComponent = this.goiMarketing.KhuyenMaiKems.length + 1;

                    let goiDichVuModel = new KhuyenMaiKem();
                    goiDichVuModel = { ...this.khuyenMaiKem };
                    goiDichVuModel.IdDatabase = 0;
                    goiDichVuModel.Id = this.idDichVuKhamBenhComponent;
                    goiDichVuModel.NhomDisplay = resultData;
                    goiDichVuModel.GoiDichVuId = this.id ? this.id : 0;

                    this.goiMarketing.KhuyenMaiKems.push(goiDichVuModel);
                    this.setDataGridViewKhuyenMai();
                    this.gridKhuyenMaiKem.gridDataSource = { ...this.gridDataSource };
                    this.gridKhuyenMaiKem.setDataSource();
                    this.ResetKhuyenMai();
                }
            );
        }
    }

    setDataGridViewKhuyenMai() {
        this.gridDataSourceKhuyenMai = {
            data: [...this.goiMarketing.KhuyenMaiKems],
            total: this.goiMarketing.KhuyenMaiKems.length
        };
    }
    validationFormClientForKhamBenh(dataval: KhuyenMaiKem) {
        this.validationErrors = [];
        const array = [];
        if (dataval) {
            if (dataval.DvId === 0 || dataval.DvId == null) {
                array.push({ Field: 'DvId', Message: 'Yêu cầu chọn dịch vụ khám bệnh' });
            }

            if (dataval.LoaiGia === 0 || dataval.LoaiGia == null) {
                array.push({ Field: 'LoaiGia', Message: 'Yêu cầu chọn loại giá' });
            }

            if (dataval.SoLuong === 0 || dataval.SoLuong == null) {
                array.push({ Field: 'SoLuong', Message: 'Yêu cầu chọn số lượng' });
            }

            // if (dataval.DonGia === 0) {
            //     array.push({ Field: 'DonGia', Message: 'Không có đơn giá. Chọn lại dịch vụ hoặc loại giá' });
            // }
            // if (dataval.DonGiaKhuyenMai == null) {
            //     array.push({ Field: 'DonGiaKhuyenMai', Message: 'Yêu cầu nhập đơn giá KM' });
            // }
        }

        if (this.checkExistKhuyenMai(dataval.DvId, 1)) {
            array.push({ Field: 'DvId', Message: 'Dịch vụ khám bệnh này đã có trong danh sách' });
        }

        if (array.length > 0) { this.validationErrors = [...array]; }
    }

    validationFormClientForKyThuat(dataval: KhuyenMaiKem) {
        this.validationErrors = [];
        const array = [];
        if (dataval) {
            if (dataval.DvId === 0 || dataval.DvId == null) {
                array.push({ Field: 'DvId', Message: 'Yêu cầu chọn dịch vụ kỹ thuật' });
            }

            if (dataval.LoaiGia === 0 || dataval.LoaiGia == null) {
                array.push({ Field: 'LoaiGia', Message: 'Yêu cầu chọn loại giá' });
            }

            if (dataval.SoLuong === 0 || dataval.SoLuong == null) {
                array.push({ Field: 'SoLuong', Message: 'Yêu cầu chọn số lượng' });
            }

            // if (dataval.DonGia === 0) {
            //     array.push({ Field: 'DonGia', Message: 'Không có đơn giá. Chọn lại dịch vụ hoặc loại giá' });
            // }
            // if (dataval.DonGiaKhuyenMai == null) {
            //     array.push({ Field: 'DonGiaKhuyenMai', Message: 'Yêu cầu nhập đơn giá KM' });
            // }
        }

        // check lai kỹ thuat
        if (this.checkExistKhuyenMai(dataval.DvId, 2)) {
            array.push({ Field: 'DvId', Message: 'Dịch vụ kỹ thuật này đã có trong danh sách' });
        }

        if (array.length > 0) { this.validationErrors = [...array]; }
    }

    validationFormClientForGiuong(dataval: KhuyenMaiKem) {
        this.validationErrors = [];
        const array = [];
        if (dataval) {
            if (dataval.DvId === 0 || dataval.DvId == null) {
                array.push({ Field: 'DvId', Message: 'Yêu cầu chọn dịch vụ giường' });
            }

            if (dataval.LoaiGia === 0 || dataval.LoaiGia == null) {
                array.push({ Field: 'LoaiGia', Message: 'Yêu cầu chọn loại giá' });
            }

            if (dataval.SoLuong === 0 || dataval.SoLuong == null) {
                array.push({ Field: 'SoLuong', Message: 'Yêu cầu chọn số lượng' });
            }
            // if (dataval.DonGiaKhuyenMai == null) {
            //     array.push({ Field: 'DonGiaKhuyenMai', Message: 'Yêu cầu nhập đơn giá KM' });
            // }
        }

        // check lai giuong benh
        if (this.checkExistKhuyenMai(dataval.DvId, 3)) {
            array.push({ Field: 'DvId', Message: 'Dịch vụ giường này đã có trong danh sách' });
        }

        if (array.length > 0) { this.validationErrors = [...array]; }
    }

    checkExistKhuyenMai(dichVuKhamBenhBenhVienId: number, loaiNhom: number) {
        return this.goiMarketing.KhuyenMaiKems.some(x => x.Nhom === loaiNhom && x.DvId === dichVuKhamBenhBenhVienId);
    }
    ConfirmDeleteKM(dataItem: KhuyenMaiKem) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.DeleteKM(dataItem);
            }
        });
    }

    DeleteKM(dataItem: KhuyenMaiKem) {
        this.goiMarketing.KhuyenMaiKems.splice(this.goiMarketing.KhuyenMaiKems.indexOf(dataItem), 1);
        this.setDataGridViewKhuyenMai();
        this.gridKhuyenMaiKem.gridDataSource = { ...this.gridDataSourceKhuyenMai };
        this.gridKhuyenMaiKem.setDataSource();
        this.ResetValidateForGridKhuyenMai();
    }


    //Nhóm DV
    setDataGridViewNhomDichVu() {
        this.gridDataSourceNhomDichVu = {
            data: [...this.goiMarketing.NhomDichVus],
            total: this.goiMarketing.NhomDichVus.length
        };
    }
    ChangeSoLuongNhomDichVuDataItem(soLuong: number, data: NhomDichVu) {
        data.SoLuong = soLuong;
        data.ThanhTienBenhVien = data.SoLuong != null ?
            data.DonGiaBenhVien * data.SoLuong : data.DonGiaBenhVien;
        data.ThanhTienTruocChietKhau = data.SoLuong != null ?
            data.DonGiaTruocChietKhau * data.SoLuong : data.DonGiaTruocChietKhau;
        data.ThanhTienSauChietKhau = data.SoLuong != null ?
            data.DonGiaSauChietKhau * data.SoLuong : data.DonGiaSauChietKhau;
    }

    ChangeDonGiaTruocChietKhauDataItem(donGia: number, data: NhomDichVu) {
        if (donGia != undefined && donGia != null) {
            data.ThanhTienTruocChietKhau = data.SoLuong != null ?
                donGia * data.SoLuong : donGia;
        }
        else {
            data.DonGiaTruocChietKhau = 0;
        }
    }
    ChangeDonGiaSauChietKhauDataItem(donGia: number, data: NhomDichVu) {
        if (donGia != undefined && donGia != null) {
            data.ThanhTienSauChietKhau = data.SoLuong != null ?
                donGia * data.SoLuong : donGia;
        } else {
            data.DonGiaSauChietKhau = 0;
        }
    }
    confrim: any = null;
    showFormNhapTruocChietKhauPopup() {
        if (this.confrim != null) {
            this.dialog.closeAll();
            this.confrim = null;
        }
        this.confrim = this.dialog
            .open(NhapTruocChietKhauPopupComponent, {
                disableClose: true,
                width: "300px",
                data: {},
            })
            .afterClosed()
            .subscribe((result: TruocChietKhau) => {
                if (result != null) {
                    this.goiMarketing.NhomDichVus.forEach(item => {
                        if (result.LoaiChietKhau == 1) {
                            item.DonGiaTruocChietKhau = item.DonGiaBenhVien + item.DonGiaBenhVien * (result.ChietKhau / 100)
                        }
                        else {
                            item.DonGiaTruocChietKhau = item.DonGiaBenhVien - item.DonGiaBenhVien * (result.ChietKhau / 100)
                        }
                        this.ChangeDonGiaTruocChietKhauDataItem(item.DonGiaTruocChietKhau, item);
                    });
                }
            });
    }
    showFormNhapSauChietKhauPopup() {
        if (this.confrim != null) {
            this.dialog.closeAll();
            this.confrim = null;
        }
        this.confrim = this.dialog
            .open(NhapSauChietKhauPopupComponent, {
                disableClose: true,
                width: "300px",
                data: {},
            })
            .afterClosed()
            .subscribe((result: number) => {
                if (result != null) {
                    this.goiMarketing.NhomDichVus.forEach(item => {
                        item.DonGiaSauChietKhau = item.DonGiaTruocChietKhau - item.DonGiaTruocChietKhau * (result / 100);
                        this.ChangeDonGiaSauChietKhauDataItem(item.DonGiaSauChietKhau, item);
                    });
                }
            });
    }

    themLoaiGoi() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.dialog.open(LoaiDichVuPopupComponent, {
                disableClose: false,
                width: '1400px',
                data: {}
            }).afterClosed().subscribe(result => {

            });
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
