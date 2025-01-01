import { Component, ElementRef, EventEmitter, HostListener, Input, NgZone, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IntlService } from '@progress/kendo-angular-intl';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { YeuCauDichVuKyThuat } from 'src/app/modules/main/tiem-chung/tiem-chung.model';
import { ChiDinhDichVuKyThuatMultiSelectTiemChungViewModel, ChiDinhGoiDichVuTheoBenhNhanDichVuLoiTiemChung, ChiDinhGoiDichVuTheoBenhNhanTiemChung, ChiDinhGoiDichVuThuongDungDichVuLoiTiemChung, ChiDinhGoiDichVuThuongDungTiemChung, GoiCoChietKhauTiemChung, GoiDichVuTiemChung, GoiKhongChietKhauTiemChung, GridChiDinhDichVuTiemChungQueryInfoVo, GridItemYeuCauDichVuKyThuatTiemChung, ListInChiDinhTiemChung, LookupCheckItemTiemChung, TrangThaiYeuCauDichVuKyThuatTiemChungObjEnum, XoaChiDinhTiemChungViewModel, YeuCauGoiDichVuTiemChung } from './dich-vu.model';
import { EnumNhomGoiDichVu, EnumTypeComponent, EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { HinhThucKhamBenh } from 'src/app/shared/enum/kham-doan.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { GroupDescriptor, State } from '@progress/kendo-data-query';
import { DichVuChiDinhBacSiKhacPopupComponent } from '../dich-vu-chi-dinh-bac-si-khac-popup/dich-vu-chi-dinh-bac-si-khac-popup.component';
import { DichVuNhomDvThuongDungPopupComponent } from '../dich-vu-nhom-dv-thuong-dung-popup/dich-vu-nhom-dv-thuong-dung-popup.component';
import { DichVuNhomDichVuLoiPopupComponent } from '../dich-vu-nhom-dich-vu-loi-popup/dich-vu-nhom-dich-vu-loi-popup.component';

import icDelete from '@iconify/icons-ic/twotone-delete';
import icVisibility from '@iconify/icons-ic/visibility';
import icBlock from '@iconify/icons-ic/block';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icEdit from '@iconify/icons-ic/view-quilt';
import icInfo from '@iconify/icons-ic/twotone-info';
import icCheck from '@iconify/icons-ic/twotone-check';
import icHotel from '@iconify/icons-ic/baseline-hotel';
import icWarning from '@iconify/icons-ic/warning';
import icCancel from '@iconify/icons-ic/outline-cancel';
import icEditV2 from '@iconify/icons-ic/border-color';
import icReturn from '@iconify/icons-ic/arrow-upward';
import icDone from '@iconify/icons-ic/twotone-done';
import icHistory from '@iconify/icons-ic/twotone-history';
import { HuyDvDaHuyThanhToanPopupComponent } from '../huy-dv-da-huy-thanh-toan-popup/huy-dv-da-huy-thanh-toan-popup.component';
import { NhomDichVuLoiPopupComponent } from '../nhom-dich-vu-loi-popup/nhom-dich-vu-loi-popup.component';
import { CapNhatTtThucHienDvktPopupComponent } from '../cap-nhat-tt-thuc-hien-dvkt-popup/cap-nhat-tt-thuc-hien-dvkt-popup.component';
import { PopupChonLoaiInViewComponent } from 'src/app/modules/main/popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component';
import { LanKhamHienTaiSuDungGoiDichVuPopupComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-su-dung-goi-dich-vu-popup/lan-kham-hien-tai-su-dung-goi-dich-vu-popup.component';
import { LanKhamHienTaiNhomDichVuThuongDungPopupComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup.component';
import { CapNhatThongTinThucHienDvktPopupComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/cap-nhat-thong-tin-thuc-hien-dvkt-popup/cap-nhat-thong-tin-thuc-hien-dvkt-popup.component';
import { BoPhan } from 'src/app/shared/enum/bo-phan.enum';
import { ChiDinhGoiDichVuTheoBenhNhan, ChiDinhGoiDichVuTheoBenhNhanDichVuLoi } from 'src/app/modules/main/kham-benh/kham-benh.model';
import { LanKhamHienTaiNhomDichVuLoiPopupComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-loi-popup/lan-kham-hien-tai-nhom-dich-vu-loi-popup.component';
import { DichVuKhuyenMaiPopupComponent } from 'src/app/modules/main/dich-vu-khuyen-mai/dich-vu-khuyen-mai-popup/dich-vu-khuyen-mai-popup.component';

declare var jQuery: any;

@Component({
  selector: 'app-dich-vu',
  templateUrl: './dich-vu.component.html',
  styleUrls: ['./dich-vu.component.scss']
})

export class DichVuComponent implements OnInit {
    validationErrors: any;
    popupLoadingData: any;
    messVuotQuaTamUng: string = "Chỉ định này đã vượt quá số tiền tạm ứng của người bệnh.";
    nhomDichVuDangChon: EnumNhomGoiDichVu = EnumNhomGoiDichVu.DichVuKyThuat;
    hostingName: string;

    yeucautiepnhanId: number;

    icEdit = icEdit;
    icMoreHoriz = icMoreHoriz;
    icDelete = icDelete;
    icVisibility = icVisibility;
    icBlock = icBlock;
    icInfo = icInfo;
    icCheck = icCheck;
    icHotel = icHotel;
    icWarning = icWarning;
    icCancel = icCancel;
    icEditV2 = icEditV2;
    icReturn = icReturn;
    icDone = icDone;
    icHistory = icHistory;

    coGoiDichVu: boolean = false;
    coDichVuKhuyenMai: boolean = false;
    dichVuDonLeChecked: boolean = false;
    FlagDuocHuongBaoHiem: boolean = false;
    goiDichVuChecked: boolean = false;
    checkALlDichVuTrongGoi: boolean = false;
    changeGhiChu: boolean = false;
    isKhamNgoaiVien: boolean = false;
    public isCheckXacNhanIn: boolean = false;
    public checkAll: boolean = null;

    tongthanhtien: number = 0;
    tongtienBNThanhToan: number = 0;
    tenGoiChietKhau: string = "";
    tongThanhTienGoiChietKhau: number = 0;

    listChonDichVuChiDinh: any[] = [];
    goiDichVu: GoiDichVuTiemChung = new GoiDichVuTiemChung();
    goiCoChietKhau: GoiCoChietKhauTiemChung[] = [];
    goiKhongChietKhau: GoiKhongChietKhauTiemChung[] = [];;
    lstDichVuTheoGoiDangChon: Array<LookupCheckItemTiemChung> = [];
    listChonDichVuChiDinhReLoad: any[] = [];
    
    chiDinhDichVuKyThuatMultiselect: ChiDinhDichVuKyThuatMultiSelectTiemChungViewModel = new ChiDinhDichVuKyThuatMultiSelectTiemChungViewModel();
    yeuCauGoiDichVu: YeuCauGoiDichVuTiemChung = new YeuCauGoiDichVuTiemChung();
    trangThaiYCDVKT: TrangThaiYeuCauDichVuKyThuatTiemChungObjEnum = new TrangThaiYeuCauDichVuKyThuatTiemChungObjEnum();
    
    gridColumns: any[] = [];
    gridDataSource: any = {};
    public totalNotChietKhau(field: any) {
        switch (field) {
            case 'ThanhTien':
                return this.goiKhongChietKhau.reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'BHYTThanhToan':
                return this.goiKhongChietKhau.reduce((sum, item) => sum + item.BHYTThanhToan, 0);
            case 'SoTienMG':
                return this.goiKhongChietKhau.reduce((sum, item) => sum + item.SoTienMG, 0);
            case 'BNThanhToan':
                return this.goiKhongChietKhau.reduce((sum, item) => sum + item.BNThanhToan, 0);
        }
    };
    public stateNotChietKhau: State = { skip: 0, take: 15, group: [{ field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }, { field: 'BHYTThanhToan', aggregate: 'sum' }, { field: 'SoTienMG', aggregate: 'sum' }, { field: 'BNThanhToan', aggregate: 'sum' }] }] };
    groups: GroupDescriptor[] = [{ field: 'Nhom', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }, { field: 'BHYTThanhToan', aggregate: 'sum' }, { field: 'SoTienMG', aggregate: 'sum' }, { field: 'BNThanhToan', aggregate: 'sum' }] }];
    
    @Input() documentType: DocumentType = DocumentType.TiemChungKhamSangLoc;
    @Input() thongTinBenhNhan: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
    @Input() isDichVuKyThuatReadonly: boolean = false;
    
    @Input() data: any = null;
    @Input() isKhamDoan: boolean = false;
    @Input() hinhThucKhamBenh: HinhThucKhamBenh;
    @Input() isKhamDoanTatCa: boolean = false;

    @ViewChild('GridChiDinh', { read: GridComponent, static: false }) gridChild: GridComponent;
    @ViewChild('cboVTTHThuoc', { read: ComboboxComponent, static: false }) cboVTTHThuoc: ComboboxComponent;

    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
    @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
    @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('tenDichVuTemplate', { static: true }) tenDichVuTemplate: TemplateRef<any>;
    @ViewChild('dichVuTrongGoiTemplate', { static: true }) dichVuTrongGoiTemplate: TemplateRef<any>;
    @ViewChild('dichVuKhuyenMaiTemplate', { static: true }) dichVuKhuyenMaiTemplate: TemplateRef<any>;
    @ViewChild('congTienGroupFooterTemplate', { static: true }) congTienGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('tongTienFooterTemplate', { static: true }) tongTienFooterTemplate: TemplateRef<any>;
    @ViewChild('nhomGiaTemplate', { static: true }) nhomGiaTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
    @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaBaoHiemTemplate', { static: true }) donGiaBaoHiemTemplate: TemplateRef<any>;
    @ViewChild('duocHuongBaoHiemTemplate', { static: true }) duocHuongBaoHiemTemplate: TemplateRef<any>;
    @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('benhPhamTemplate', { static: true }) benhPhamTemplate: TemplateRef<any>;

    constructor(
        private apiService: ApiService,
        private authService: AuthService,
        public intl: IntlService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private el: ElementRef,
        private ngZone: NgZone) { }

    ngOnInit() {
        this.yeucautiepnhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
        this.coDichVuKhuyenMai = this.thongTinBenhNhan.CoDichVuKhuyenMai;

        this.checkAll = true;
        if (window.location.protocol == "http:") {
            this.hostingName = "http://" + window.location.host;
        } else {
            this.hostingName = "https://" + window.location.host;
        }
        this.gridColumns = [
            { Field: "Action", Title: "", Width: 75, Template: this.actionTemplate, Hidden: this.isDichVuKyThuatReadonly },
            { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
            { Field: "STT", Title: "#", Width: 20 ,Template: this.sttTemplate},
            { Field: "Ma", Title: "Mã", Width: 60 },
            { Field: "Nhom", Title: "Nhóm", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 150, ShowTooltip: true, Template: this.tenDichVuTemplate },
            { Field: "LaDichVuTrongGoi", Title: "DV Trong Gói", Width: 60, Template: this.dichVuTrongGoiTemplate, Hidden: this.isKhamDoan },
            { Field: "LaDichVuKhuyenMai", Title: "DV Khuyến Mại", Width: 60, Template: this.dichVuKhuyenMaiTemplate, Hidden: this.isKhamDoan },
            //{ Field: "TenTT43", Title: "Tên TT43", Width: 150, ShowTooltip: true },
            { Field: "TenLoaiGia", Title: "Loại Giá", Width: 80, TemplateGroupFooter: this.isKhamDoan ? null : this.congTienGroupFooterTemplate, TemplateFooter: this.isKhamDoan ? null : this.tongTienFooterTemplate, Template: this.nhomGiaTemplate },
            { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.isKhamDoan ? null : this.donGiaFooterTemplate, Hidden: this.isKhamDoan },
            { Field: "SoLuong", Title: "SL", Width: 59, Template: this.soLuongTemplate },
            {
                Field: "ThanhTien", Title: "Thành Tiền", Width: 100,
                Template: this.thanhTienTemplate,
                TemplateFooter: this.isKhamDoan ? null : this.thanhTienFooterTemplate,
                TemplateGroupFooter: this.isKhamDoan ? null : this.thanhTienGroupFooterTemplate, 
                Hidden: this.isKhamDoan
            },


            { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 80, Template: this.donGiaBaoHiemTemplate, Hidden: this.isKhamDoan },
            { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemTemplate, Hidden: this.isKhamDoan },

            // {
            //     Field: "BHYTThanhToan", Title: "BHYT TT", Width: 100,
            //     Template: this.bhytThanhToanTemplate,
            //     TemplateFooter: this.bhytThanhToanFooterTemplate,
            //     TemplateGroupFooter: this.bhytThanhToanGroupFooterTemplate
            // },

            // { Field: "SoTienMG", Title: "ST MG", Width: 120, Sortable: true,
            //                                                                 Template: this.soTienMGTemplate,
            //                                                                 TemplateFooter: this.soTienMGFooterTemplate,
            //                                                                 TemplateGroupFooter: this.soTienMGGroupFooterTemplate },

            // {
            //     Field: "BNThanhToan", Title: "BN TT", Width: 100,
            //     Template: this.bnThanhToanTemplate,
            //     TemplateFooter: this.bnThanhToanFooterTemplate,
            //     TemplateGroupFooter: this.bnThanhToanGroupFooterTemplate
            // },

            { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 150, Template: this.noiThucHienTemplate },
            { Field: "TrangThaiDichVu", Title: "Tình trạng", Width: 110, Template: this.trangThaiTemplate },
            // { Field: "NguoiThucHien", Title: "Người thực hiện", Width: 150, Template: this.nguoiThucHienTemplate },
            { Field: "TenNguoiThucHien", Title: "Người thực hiện", Width: 110 },
            //{ Field: "TenGiuongBenh", Title: "Số giường", Width: 90 },
            { Field: "BenhPhamXetNghiem", Title: "Bệnh phẩm", Width: 150, Template: this.benhPhamTemplate },
            { Field: "NguoiChiDinhDisplay", Title: "Người chỉ định", Width: 110 },
            { Field: "ThoiGianChiDinhDisplay", Title: "Thời gian chỉ định", Width: 110 },
        ];

        this.getDataGoiDichVuDefault(this.thongTinBenhNhan.YeuCauTiepNhanId, this.nhomDichVuDangChon);

        // kiểm tra đăng ký gói dịch vụ người bệnh
        this.kiemTraGoiDichVuCuaBenhNhan();
    }

    getDataGoiDichVuDefault(yeuCauTiepNhanId: any, nhomDichVuId: number = null) {
        this.showPopupLoadingData(EnumTypeLoadingData.View);
        this.tongthanhtien = 0;
        this.tongtienBNThanhToan = 0;
        this.tongThanhTienGoiChietKhau = 0;

        let obj = new GridChiDinhDichVuTiemChungQueryInfoVo(
            yeuCauTiepNhanId,
            null,
            nhomDichVuId,
            this.thongTinBenhNhan.Id
        );

        this.apiService.post<any>("TiemChung/GetGridDichVuKyThuatTiemChung", obj).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.goiKhongChietKhau = this.goiKhongChietKhau.concat(resultData);
                this.setDataGridView();
                this.SelectcheckAllboxIn(true);
            }
            else {
                this.closePopupLoadingData();
            }
        },
            (err: ApiError) => {
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    public total(field: any) {
        switch (field) {
            case 'ThanhTien':
                return this.goiCoChietKhau.reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'ThanhTienTrongGoi':
                return this.goiCoChietKhau.reduce((sum, item) => sum + item.ThanhTienTrongGoi, 0);
        }
    };

    huyDichVuKyThuatMultiselect() {
        if (this.dichVuDonLeChecked) {
            this.autoFocusElementFirst();
        }
        else {
            this.autoFocusElementFirst(EnumTypeComponent.KDropdown);
        }

        this.FlagDuocHuongBaoHiem = false;
        this.validationErrors = [];
        this.chiDinhDichVuKyThuatMultiselect = new ChiDinhDichVuKyThuatMultiSelectTiemChungViewModel();
    }

    themDichVuKyThuatMultiselect() {
        var self = this;
        this.validationErrors = [];
        // xử lý kiểm tra thêm trùng dịch vụ


        // xử lý thêm dịch vụ kỹ thuật
        if (self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs != undefined
            && self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs != null
            && self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs.length > 0) {
            self.chiDinhDichVuKyThuatMultiselect.YeuCauTiepNhanId = self.thongTinBenhNhan.YeuCauTiepNhanId;
            self.chiDinhDichVuKyThuatMultiselect.YeuCauKhamBenhId = self.thongTinBenhNhan.Id;
            self.apiService.post<boolean>("TiemChung/KiemTraChiDinhDichVuKyThuatDaCoTheoYeuCauTiepNhan", self.chiDinhDichVuKyThuatMultiselect).subscribe(resultData => {
                if (resultData) {
                    self.dialog.open(ConfirmComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Dịch vụ này đã được thêm vào trước đó. Bạn có chắc chắn muốn thêm dịch vụ này hay không?" }
                    }).afterClosed().subscribe(result => {
                        if (result == "Yes") {
                            self.xuLyKiemTraDichVuKyThuatTrungTrongGoi();
                        }
                        else
                        {
                            self.resetFocus();
                        }
                    });
                }
                else {
                    self.xuLyKiemTraDichVuKyThuatTrungTrongGoi();
                }
            },
                (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                });
        }
        else {
            self.xuLyKiemTraDichVuKyThuatTrungTrongGoi();
        }
    }

    xuLyKiemTraDichVuKyThuatTrungTrongGoi(){
        this.chiDinhDichVuKyThuatMultiselect.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
        //this.chiDinhDichVuKyThuatMultiselect.YeuCauKhamBenhId = this.thongTinBenhNhan.Id;
        if(this.documentType == DocumentType.KhamBenhDangKham)
        {
            this.chiDinhDichVuKyThuatMultiselect.IsKhamBenhDangKham = true;
        }
        var self = this;
        // cập nhật xử lý
        //1: kiểm tra có dịch vụ nào trùng trong gói ko -> hiện popup thông báo
        //2: xử lý thêm dịch vụ ko có trong gói và có trong gói(nếu có)

        // cập nhật ngày 02/06/2021: ko kiểm tra dịch vụ có trong gói nữa
        self.xuLyThemDichVuKyThuatMultiselect();
        // self.apiService.post<any>("KhamBenh/KiemTraDichVuKyThuatChiDinhCoTrongGoiCuaBenhNhan", self.chiDinhDichVuKyThuatMultiselect).subscribe(resultData => {
        //     if (resultData.Message != null && resultData.Message != '' && resultData.DichVuChiDinhCoTrongGois.length > 0) {
        //         self.dialog.open(ConfirmComponent, {
        //             disableClose: false,
        //             width: '800px',
        //             data: { Title: "Xác nhận", Message: resultData.Message }
        //         }).afterClosed().subscribe(result => {
        //             if (result == "Yes") {
        //                 self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatTuGois = resultData.DichVuChiDinhCoTrongGois;
        //             }
        //             self.xuLyThemDichVuKyThuatMultiselect();
        //         });
        //     }
        //     else {
        //         self.xuLyThemDichVuKyThuatMultiselect();
        //     }
        // },
        // (err: ApiError) => {
        //     self.validationErrors = err.ValidationErrors;
        //     if (err.Message != "Validation Failed") {
        //         self.notificationService.showError(err.Message);
        //     }
        // });
    }

    xuLyThemDichVuKyThuatMultiselect() {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.chiDinhDichVuKyThuatMultiselect.LoaiDangNhap = this.hinhThucKhamBenh;
        this.chiDinhDichVuKyThuatMultiselect.IsKhamDoanTatCa = this.isKhamDoanTatCa;
        this.apiService.post<any>("TiemChung/ThemYeuCauDichVuKyThuatMultiselect", this.chiDinhDichVuKyThuatMultiselect).subscribe(result => {
            this.huyDichVuKyThuatMultiselect();

            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            if (result.IsVuotQuaSoDuTaiKhoan) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }

            if (result && result.SoDuTaiKhoan != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoan) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoan;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanDisplay;
            }

            if (result && result.SoDuTaiKhoanConLai != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }

            this.getDataUpdateGripViewGoiKhac(this.thongTinBenhNhan.YeuCauTiepNhanId, EnumNhomGoiDichVu.DichVuKyThuat, null, false);
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    getDataUpdateGripViewGoiKhac(yeuCauTiepNhanId: number, nhomDichVuId: number = null,
        typeLoadingData: EnumTypeLoadingData = EnumTypeLoadingData.Update, showLoadingPopup: boolean = true) {
        if (showLoadingPopup) {
            this.showPopupLoadingData(typeLoadingData);
        }

        // kiểm tra đăng ký gói dịch vụ người bệnh
        this.kiemTraGoiDichVuCuaBenhNhan();

        let obj = new GridChiDinhDichVuTiemChungQueryInfoVo(
            yeuCauTiepNhanId,
            null,
            nhomDichVuId,
            this.thongTinBenhNhan.Id
        );

        this.apiService.post<any>("TiemChung/GetGridDichVuKyThuatTiemChung", obj).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                let goiDichVuModel = new GoiDichVuTiemChung();
                this.listChonDichVuChiDinh = []; // mỗi lần f5 là listChonDichVuChiDinh = 0
                goiDichVuModel.GoiKhacs = resultData;

                this.goiKhongChietKhau.splice(0, this.goiKhongChietKhau.length);
                if (this.gridDataSource != undefined && this.gridDataSource != null && this.gridDataSource.data != undefined && this.gridDataSource.data != null) {
                    this.gridDataSource.data.splice(0, this.gridDataSource.data.length);
                }
                this.gridChild.setDataSource();
                var self = this;
                this.ngZone.run(() => {
                    resultData.forEach(element => {
                        self.goiKhongChietKhau.push(element);
                        element.isCheckRowItem = true;
                    });

                    self.isCheckXacNhanIn = self.goiKhongChietKhau.length > 0;
                    self.setDataGridView();
                    self.SelectcheckAllboxIn(true);
                });
            }
            else {
                this.closePopupLoadingData();
            }
        },
            (err: ApiError) => {
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    async kiemTraGoiDichVuCuaBenhNhan() {
        this.apiService.get<boolean>("TiemChung/KiemTraDangKyGoiDichVuTheoBenhNhan?benhNhanId=" + this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhanId).subscribe(result => {
            this.coGoiDichVu = result;
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
    }

    setDataGridView() {
        this.gridDataSource = {
            data: this.goiKhongChietKhau,
            total: this.goiKhongChietKhau.length
        };
        this.gridChild.gridDataSource = this.gridDataSource;
        if (this.gridChild !== undefined)
            this.gridChild.setDataSource();

        this.tinhthanhtien(this.goiKhongChietKhau);
        this.closePopupLoadingData();
    }

    tinhthanhtien(modelGoiKoChietKhau: any) {
        this.tongthanhtien = 0;
        this.tongtienBNThanhToan = 0;
        modelGoiKoChietKhau.forEach(element => {
            if (element.ThanhTien !== null)
                this.tongthanhtien += element.ThanhTien;
            if (element.BNThanhToan !== null)
                this.tongtienBNThanhToan += element.BNThanhToan;
        });
    }

    SelectcheckAllboxIn(event: any) {
        let gridDataIn: any[] = [];
        if (this.gridChild.gridDataSource.data == undefined) {
            this.listChonDichVuChiDinh = [];
        }
        else {

            gridDataIn = this.gridChild.getAllDataFromDatasource();
            this.listChonDichVuChiDinh = [];
        }
        if (event == true) {

            gridDataIn.forEach(element => {
                element.isCheckRowItem = true;
                this.checkAll = true;
                let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == element.Id && x.nhomChiDinhId == element.NhomId);
                if (index == -1) {
                    var chiDinh = new ListInChiDinhTiemChung();
                    chiDinh.nhomChiDinhId = element.NhomId;
                    chiDinh.dichVuChiDinhId = element.Id;
                    this.listChonDichVuChiDinh.push(chiDinh);
                }
            })
        }
        else {

            gridDataIn.forEach(element => {
                element.isCheckRowItem = false;
            });
            this.listChonDichVuChiDinh = [];
        }
        this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
    }

    changeGhiChuCanLamSang(event) {
        if (this.changeGhiChu) {
            this.changeGhiChu = false;
            if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
                var obj = {
                    YeuCauKhamBenhId: this.thongTinBenhNhan.YeuCauKhamBenhId,
                    GhiChuCanLamSang: this.thongTinBenhNhan.YeuCauKhamBenh.GhiChuCanLamSang
                }
                this.apiService.put<any>("TiemChung/CapNhatGhiChuCanLamSang", obj).subscribe(result => {
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu ghi chú"]));
                },
                    (err: ApiError) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
            }
            else {
                this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
        }
    }

    changeGhiChuCLS(event)
    {
        this.changeGhiChu = true;
    }

    xemChiDinhCuaBacSiKhac() {
        this.dialog.open(DichVuChiDinhBacSiKhacPopupComponent, {
            disableClose: false,
            width: '1000px',
            data: {
                YeuCauTiepNhanId: this.thongTinBenhNhan.YeuCauTiepNhanId, 
                YeuCauKhamBenhId: this.thongTinBenhNhan.YeuCauKhamBenhId,
                GhiChuCanLamSang:this.thongTinBenhNhan.YeuCauKhamBenh.GhiChuCanLamSang}
        }).afterClosed().subscribe(() => {
        });
    }
    
    xemNhomDichVuThuongDung() {
        var self = this;
        let boPhan = BoPhan.TiemChung;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.dialog.open(LanKhamHienTaiNhomDichVuThuongDungPopupComponent, {
                disableClose: false,
                width: '1500px',
                data: { DocumentType: self.documentType , boPhan : boPhan }
            }).afterClosed().subscribe(yeuCauGoiThuongDung => {
                if(yeuCauGoiThuongDung)
                {
                    //yeuCauGoiThuongDung.YeuCauKhamBenhId = self.thongTinBenhNhan.Id;
                    yeuCauGoiThuongDung.YeuCauTiepNhanId = self.thongTinBenhNhan.YeuCauTiepNhanId;
                    yeuCauGoiThuongDung.LaPhauThuatThuThuat = true;
                    self.apiService.post<Array<ChiDinhGoiDichVuThuongDungDichVuLoiTiemChung>>("KhamBenh/KiemTraDichVuTrongGoiDaCoTheoYeuCauTiepNhan", yeuCauGoiThuongDung).subscribe(resultData => {
                        if (resultData && resultData.length > 0) {
                            self.dialog.open(DichVuNhomDichVuLoiPopupComponent, {
                                disableClose: false,
                                width: '1200px',
                                data: {arrDichVuCanhBao: resultData, DocumentType: this.documentType}
                            }).afterClosed().subscribe(dichVuKhongThems => {
                                if (dichVuKhongThems) {
                                    yeuCauGoiThuongDung.DichVuKhongThems = dichVuKhongThems;
                                    self.xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung);
                                }
                            });
                        }
                        else {
                            self.xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung);
                        }
                    },
                        (err: ApiError) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                        });
                }
            });
        }
        else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung: ChiDinhGoiDichVuThuongDungTiemChung) {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.apiService.post<any>("TiemChung/ThemYeuGoiDichVuThuongDung", yeuCauGoiThuongDung).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            if (result.IsVuotQuaSoDuTaiKhoan) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }

            if (result && result.SoDuTaiKhoan != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoan) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoan;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanDisplay;
            }

            if (result && result.SoDuTaiKhoanConLai != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }

            this.getDataUpdateGripViewGoiKhac(this.thongTinBenhNhan.YeuCauTiepNhanId, EnumNhomGoiDichVu.DichVuKyThuat, null, false);
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    xemGoiDichVu() {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.dialog.open(LanKhamHienTaiSuDungGoiDichVuPopupComponent, {
                disableClose: false,
                width: '1800px',
                data: { DocumentType: self.documentType, BenhNhanId: self.thongTinBenhNhan.YeuCauTiepNhan.BenhNhanId, IsPTTT: true }
            }).afterClosed().subscribe(yeuCauGoiMarketing => {
                if(yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "")
                {
                    //yeuCauGoiMarketing.YeuCauKhamBenhId = self.thongTinBenhNhan.Id;
                    yeuCauGoiMarketing.YeuCauTiepNhanId = self.thongTinBenhNhan.YeuCauTiepNhanId;
                    yeuCauGoiMarketing.IsPTTT = true;
                    self.apiService.post<Array<ChiDinhGoiDichVuTheoBenhNhanDichVuLoiTiemChung>>("TiemChung/KiemTraDichVuTrongGoiMarketingDaCoTheoYeuCauTiepNhan", yeuCauGoiMarketing).subscribe(resultData => {
                        if (resultData && resultData.length > 0) {
                            self.dialog.open(NhomDichVuLoiPopupComponent, {
                                disableClose: false,
                                width: '1200px',
                                data: {arrDichVuCanhBao: resultData, DocumentType: this.documentType}
                            }).afterClosed().subscribe(dichVuKhongThems => {
                                if (dichVuKhongThems) {
                                    yeuCauGoiMarketing.DichVuKhongThems = dichVuKhongThems;
                                    self.xuLyThemNhomDichVuMarketing(yeuCauGoiMarketing);
                                }
                            });
                        }
                        else {
                            self.xuLyThemNhomDichVuMarketing(yeuCauGoiMarketing);
                        }
                    },
                    (err: ApiError) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xuLyThemNhomDichVuMarketing(yeuCauGoiMarketing: ChiDinhGoiDichVuTheoBenhNhanTiemChung) {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.apiService.post<any>("TiemChung/ThemChiDinhGoiDichVuTheoBenhNhan", yeuCauGoiMarketing).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            if (result.IsVuotQuaSoDuTaiKhoan || result.IsVuotQuaBaoLanhGoi == true) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }

            if (result && result.SoDuTaiKhoan != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoan) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoan;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanDisplay;
            }

            if (result && result.SoDuTaiKhoanConLai != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }

            this.getDataUpdateGripViewGoiKhac(this.thongTinBenhNhan.YeuCauTiepNhanId, EnumNhomGoiDichVu.DichVuKyThuat, null, false);
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    cacDichVuKM() {
        this.dialog.open(DichVuKhuyenMaiPopupComponent, {
            disableClose: false,
            width: '1500px',
            data: { BenhNhanId: this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhanId, DocumentType: this.documentType }
        }).afterClosed().subscribe(() => {
        });
    }

    //===================================BVHD-3825==========================================
    xemGoiDichVuKhuyenMai() {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            // self.dialog.open(LanKhamHienTaiSuDungGoiDichVuPopupComponent, {
            self.dialog.open(DichVuKhuyenMaiPopupComponent, {
                disableClose: false,
                width: '1800px',
                data: { DocumentType: self.documentType, BenhNhanId: self.thongTinBenhNhan.YeuCauTiepNhan.BenhNhanId, IsPTTT: true }
            }).afterClosed().subscribe(yeuCauGoiMarketing => {
                if(yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "")
                {
                    yeuCauGoiMarketing.YeuCauTiepNhanId = self.thongTinBenhNhan.YeuCauTiepNhanId;
                    yeuCauGoiMarketing.IsPTTT = true;
                    self.apiService.post<Array<ChiDinhGoiDichVuTheoBenhNhanDichVuLoi>>("TiepNhanBenhNhan/KiemTraDichVuKhuyenMaiTrongGoiMarketingDaCoTheoYeuCauTiepNhan", yeuCauGoiMarketing).subscribe(resultData => {
                        if (resultData && resultData.length > 0) {
                            self.dialog.open(LanKhamHienTaiNhomDichVuLoiPopupComponent, {
                                disableClose: false,
                                width: '1200px',
                                data: {arrDichVuCanhBao: resultData, DocumentType: this.documentType}
                            }).afterClosed().subscribe(dichVuKhongThems => {
                                if (dichVuKhongThems) {
                                    yeuCauGoiMarketing.DichVuKhongThems = dichVuKhongThems;
                                    self.xuLyThemNhomDichVuKhuyenMai(yeuCauGoiMarketing);
                                }
                            });
                        }
                        else {
                            self.xuLyThemNhomDichVuKhuyenMai(yeuCauGoiMarketing);
                        }
                    },
                    (err: ApiError) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xuLyThemNhomDichVuKhuyenMai(yeuCauGoiMarketing: ChiDinhGoiDichVuTheoBenhNhan) {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.apiService.post<any>("TiepNhanBenhNhan/ThemChiDinhGoiDichVuKhuyenMaiTheoBenhNhanTiemChungTrucTiep", yeuCauGoiMarketing).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            if (result.IsVuotQuaSoDuTaiKhoan || result.IsVuotQuaBaoLanhGoi == true) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }

            if (result && result.SoDuTaiKhoan != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoan) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoan;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanDisplay;
            }

            if (result && result.SoDuTaiKhoanConLai != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }

            this.getDataUpdateGripViewGoiKhac(this.thongTinBenhNhan.YeuCauTiepNhanId, EnumNhomGoiDichVu.DichVuKyThuat, null, false);
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }
    //======================================================================================

    changeNhomDichVuKyThuat(event) {
        if (event == undefined || event == null) {
            this.chiDinhDichVuKyThuatMultiselect.TenNhomDichVu = null;
        }
        else {
            // cần kiểm tra lại kỹ hơn
            //this.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs = [];
            this.validationErrors = [];
        }
    }

    selectChangeNhomDichVuKyThuat(event) {
        if (event != undefined && event != null) {
            this.chiDinhDichVuKyThuatMultiselect.TenNhomDichVu = event.DisplayName;
        }
        else {
            this.chiDinhDichVuKyThuatMultiselect.TenNhomDichVu = null;
        }
    }

    changeMultiDichVuKyThuat(event) {
        if (event != undefined && event != null && event.length > 0) {
            if (!this.chiDinhDichVuKyThuatMultiselect.ShowComboboxNhomDichVuKyThuat) {
                this.closeChangeDichVuKyThuat(true);
            }
        }
        else {
            this.chiDinhDichVuKyThuatMultiselect.ShowComboboxNhomDichVuKyThuat = true;
            this.validationErrors = [];
        }
    }

    closeChangeDichVuKyThuat(event, xuLyThemDichVu: boolean = false) {
        var self = this;
        if (event && self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs != null && self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs.length > 0) {
            let nhomIdTemp: number = 0;
            let tenNhomTemp: string = "";

            let arrDichVu = self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs.slice();
            // arrDichVu.forEach(element => {
            for (let element of arrDichVu) {
                let elementObj = JSON.parse(element);
                if (nhomIdTemp != 0 && nhomIdTemp != elementObj.NhomId) {
                    self.chiDinhDichVuKyThuatMultiselect.ShowComboboxNhomDichVuKyThuat = false;
                    self.chiDinhDichVuKyThuatMultiselect.NhomDichVuBenhVienId = null;
                    self.chiDinhDichVuKyThuatMultiselect.TenNhomDichVu = null;
                    nhomIdTemp = 0;

                    if (xuLyThemDichVu) {
                        self.themDichVuKyThuatMultiselect();
                    }
                    return;
                }
                else {
                    nhomIdTemp = elementObj.NhomId;
                    tenNhomTemp = elementObj.TenNhom;
                }
            }

            if (nhomIdTemp != 0) {
                self.chiDinhDichVuKyThuatMultiselect.ShowComboboxNhomDichVuKyThuat = true;
                self.validationErrors = [];
                self.chiDinhDichVuKyThuatMultiselect.NhomDichVuBenhVienId = nhomIdTemp;
                self.chiDinhDichVuKyThuatMultiselect.TenNhomDichVu = tenNhomTemp;

                if (xuLyThemDichVu) {
                    self.themDichVuKyThuatMultiselect();
                }
            }
        }
    }

    autoFocusElementFirst(elementType: EnumTypeComponent = EnumTypeComponent.KInput) {
        let type = "";
        switch (elementType) {
            case EnumTypeComponent.KInput:
                type = ".k-input"; break;
            case EnumTypeComponent.KDropdown:
                type = ".k-dropdown-wrap"; break;

            default:
                type = ".k-input"; break;
        }


        const invalidControl = this.el.nativeElement.querySelector(type);
        if (invalidControl) {
            invalidControl.focus();
        }
    }

    resetFocus() {
        var $focused = jQuery(':focus');
        jQuery(".k-input").blur();
        setTimeout(function () {
            if ($focused.length > 0) {
                $focused.focus();
            }
        }, 100);
    }

    showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
        let mess = ""; //typeLoading == EnumTypeLoadingData.View ? "Đang tải dữ liệu..." : "Đang lưu dữ liệu...";
        switch (typeLoading) {
            case EnumTypeLoadingData.View:
                mess = "Đang tải dữ liệu..."; break;
            case EnumTypeLoadingData.Update:
                mess = "Đang lưu dữ liệu..."; break;
            case EnumTypeLoadingData.Delete:
                mess = "Đang xóa dữ liệu..."; break;
            case EnumTypeLoadingData.Cancel:
                mess = "Đang hủy dữ liệu..."; break;
            default: mess = "Đang tải dữ liệu...";
        }
        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: mess }
        });
    }

    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }

        this.dialog.afterAllClosed.subscribe(result => {
            switch (this.nhomDichVuDangChon) {
                case EnumNhomGoiDichVu.DichVuKhamBenh:
                    this.autoFocusElementFirst(); break;
                case EnumNhomGoiDichVu.DichVuKyThuat:
                    if (this.dichVuDonLeChecked) {
                        this.autoFocusElementFirst(); break;
                    }
                    else {
                        this.autoFocusElementFirst(EnumTypeComponent.KDropdown); break;
                    }
                case EnumNhomGoiDichVu.DichVuGiuongBenh:
                    this.autoFocusElementFirst(); break;
                
                case EnumNhomGoiDichVu.VatTuTieuHao: 
                    this.cboVTTHThuoc.onKeytoFocus(); break;

                default:
                    this.autoFocusElementFirst(); break;
            }
        });

        // this.dialog.closeAll();

        // this.dialog.afterAllClosed.subscribe(result => {
        //     switch (this.nhomDichVuDangChon) {
        //         case EnumNhomGoiDichVu.DichVuKhamBenh:
        //             this.autoFocusElementFirst(); break;
        //         case EnumNhomGoiDichVu.DichVuKyThuat:
        //             if (this.dichVuDonLeChecked) {
        //                 this.autoFocusElementFirst(); break;
        //             }
        //             else {
        //                 this.autoFocusElementFirst(EnumTypeComponent.KDropdown); break;
        //             }
        //         case EnumNhomGoiDichVu.DichVuGiuongBenh:
        //             this.autoFocusElementFirst(); break;

        //         default:
        //             this.autoFocusElementFirst(); break;
        //     }
        // });
    }

    // cập nhật kiểm tra dịch vụ khác 4 nhóm: PTTT, CDHA, TDCN, XN thì cho phép hoàn thành, hủy hoàn thành
    capNhatThongTinThucHienDichVu(dataItem: any, isThucHien: boolean = true) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            var newObj = {
                YeuCauDichVuKyThuatId: dataItem.Id,
                LaThucHienDichVu: isThucHien,
                DocumentType: this.documentType,
                YeuCauKhamBenhId: null
            }
            this.dialog.open(CapNhatThongTinThucHienDvktPopupComponent, {
                disableClose: false,
                width: '600px',
                data: newObj,
            }).afterClosed().subscribe((res) => {
                if(res) {
                    var mess = isThucHien ? "Cập nhật thông tin thực hiện dịch vụ" : "Hủy thông tin thực hiện dịch vụ"
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [mess]));
                    this.getDataUpdateGripViewGoiKhac(this.thongTinBenhNhan.YeuCauTiepNhanId, this.nhomDichVuDangChon, null, true);
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xoaGoiDichVuKhac(dataItem: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                this.showPopupLoadingData(EnumTypeLoadingData.Delete);
                let url = "";
                switch (dataItem.NhomId) {
                    //case 1: url = "KhamBenh/XoaDichVuKhamBenh"; break;
                    case 2: url = "TiemChung/XoaDichVuKyThuat"; break;
                    // case 3: url = "KhamBenh/XoaDichVuVatTuTieuHao"; break;
                    // case 4: url = "KhamBenh/XoaYeuCauDuocPham"; break;
                    //case 5: url = "KhamBenh/XoaDichVuGiuongBenh"; break;
                    default: break;
                }

                let xoaChiDinhViewModel = new XoaChiDinhTiemChungViewModel();
                xoaChiDinhViewModel.DichVuId = dataItem.Id;
                xoaChiDinhViewModel.YeuCauKhamBenhId = this.thongTinBenhNhan.Id;
                if (this.documentType == DocumentType.KhamBenhDangKham) {
                    xoaChiDinhViewModel.IsKhamBenhDangKham = true;
                }
                xoaChiDinhViewModel.IsKhamDoanTatCa = this.isKhamDoanTatCa;

                this.apiService.put<any>(url, xoaChiDinhViewModel).subscribe(result => {
                    if (result && result.SoDuTaiKhoan != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoan) {
                        this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoan;
                        this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanDisplay;
                    }
        
                    if (result && result.SoDuTaiKhoanConLai != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai) {
                        this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                        this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
                    }

                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa "]));
                    this.getDataUpdateGripViewGoiKhac(this.thongTinBenhNhan.YeuCauTiepNhanId, this.nhomDichVuDangChon, null, false);
                },
                    (err: ApiError) => {
                        this.notificationService.showError(err.Message);
                        this.closePopupLoadingData();
                    });
            }
        });
    }

    huyDichVuDaHuyThanhToan(dataItem) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(HuyDvDaHuyThanhToanPopupComponent, {
                disableClose: false,
                width: '600px',
                data: { Title: "Xác nhận", Message: "Bạn có chắc hủy dịch vụ này không?" }
            }).afterClosed().subscribe(result => {
                if (result != undefined && result != null && result != "") {
                    this.showPopupLoadingData(EnumTypeLoadingData.Cancel);
                    let url = "";
                    switch (dataItem.NhomId) {
                        //case 1: url = "TiemChung/XoaDichVuKhamBenh"; break;
                        case 2: url = "TiemChung/XoaDichVuKyThuat"; break;
                        default: break;
                    }

                    let xoaChiDinhViewModel = new XoaChiDinhTiemChungViewModel();
                    xoaChiDinhViewModel.DichVuId = dataItem.Id;
                    //xoaChiDinhViewModel.YeuCauKhamBenhId = this.thongTinBenhNhan.Id;
                    xoaChiDinhViewModel.LyDoHuyDichVu = result;

                    this.apiService.put<any>(url, xoaChiDinhViewModel).subscribe(result => {
                        if (result != undefined && result != null) {
                            if (result && result.SoDuTaiKhoan != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoan) {
                                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoan;
                                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanDisplay;
                            }

                            if (result && result.SoDuTaiKhoanConLai != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai) {
                                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
                            }
                        }
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy dịch vụ"]));
                        this.getDataUpdateGripViewGoiKhac(this.thongTinBenhNhan.YeuCauTiepNhanId, this.nhomDichVuDangChon, null, false);
                    },
                        (err: ApiError) => {
                            this.notificationService.showError(err.Message);
                            this.closePopupLoadingData();
                        });
                }
            });
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    checkboxIn(event: any, dataItem: any) {
        if (this.gridChild.gridDataSource.data == undefined) {
            this.listChonDichVuChiDinh = [];
        }
        let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == dataItem.Id && x.nhomChiDinhId == dataItem.NhomId);
        if (event == true) {
            if (index == -1) {
                var chiDinh = new ListInChiDinhTiemChung();
                chiDinh.nhomChiDinhId = dataItem.NhomId;
                chiDinh.dichVuChiDinhId = dataItem.Id;
                this.listChonDichVuChiDinh.push(chiDinh);
                if (this.listChonDichVuChiDinh.length == this.gridChild.gridDataSource.data.filter(sp=>sp.TrangThaiDichVuId != 4 && sp.TrangThaiDichVuId != 6).length) {
                    this.checkAll = true;
                }
            }
            else {
                if (this.listChonDichVuChiDinh.length == this.gridChild.gridDataSource.data.filter(sp=>sp.TrangThaiDichVuId != 4 && sp.TrangThaiDichVuId != 6).length) {
                    this.checkAll = true;
                }
                else {
                    this.checkAll = false;
                }
            }

            dataItem.isCheckRowItem = true;
        }
        else {
            this.checkAll = false;
            if (index >= 0) {
                this.listChonDichVuChiDinh.splice(index, 1)
            }
        }
        if (this.listChonDichVuChiDinh.length == this.gridChild.gridDataSource.data.filter(sp=>sp.TrangThaiDichVuId != 4 && sp.TrangThaiDichVuId != 6).length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
        this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
    }

    timeout = null;
    CapNhatGridItemDichVuKyThuat(dataItem, event, loaiCapNhat) {
        let gridItem = new GridItemYeuCauDichVuKyThuatTiemChung();
        gridItem.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
        gridItem.YeuCauDichVuKyThuatId = dataItem.Id;
        gridItem.YeuCauKhamBenhId = this.thongTinBenhNhan.Id;

        var showLoading: boolean = true;
        var reloadGrid: boolean = true;
        switch (loaiCapNhat) {
            case "NhomGia":
                gridItem.NhomGiaDichVuKyThuatBenhVienId = event;
                gridItem.IsUpdateLoaiGia = true; break;
            case "SoLan":
                gridItem.SoLan = event;
                gridItem.IsUpdateSoLan = true; break;
            case "NoiThucHien":
                gridItem.NoiThucHienId = event;
                gridItem.IsUpdateNoiThucHien = true;
                if (event == undefined || event == null) {
                    dataItem.NguoiThucHienId = null;
                    dataItem.TenNguoiThucHien = null;
                }
                break;
            case "NguoiThucHien":
                if (event == undefined || event == null) {
                    return;
                }
                gridItem.NguoiThucHienId = event;
                gridItem.IsUpdateNguoiThucHien = true;
                //showLoading = false;
                //reloadGrid = false;
                break;
            case "BenhPhamXetNghiem":
                gridItem.BenhPhamXetNghiem = event;
                gridItem.IsUpdateBenhPhamXetNghiem = true;
                break;

            case "SwapDichVuGoi":
                console.log('SwapDichVuGoi', event);
                gridItem.LaDichVuTrongGoi = event;
                gridItem.IsSwapDichVuGoi = true;
                if(dataItem.NhomId == 1)
                {
                    gridItem.IsDichVuKham = true;
                }
                break;
            
            case "SwapDichVuKhuyenMai":
                gridItem.LaDichVuKhuyenMai = event;
                gridItem.IsSwapDichVuKhuyenMai = true;
                if(dataItem.NhomId == 1)
                {
                    gridItem.IsDichVuKham = true;
                }
                break;
        }

        if (loaiCapNhat == "SoLan" || loaiCapNhat == "BenhPhamXetNghiem") {
            var self = this;
            var timeDelay = loaiCapNhat == "SoLan" ? 1000 : 2000;
            clearTimeout(self.timeout);
            self.timeout = setTimeout(function () {
                self.saveItemDichVuKyThuat(gridItem);
            }, timeDelay);
        }
        else {
            this.saveItemDichVuKyThuat(gridItem, showLoading, reloadGrid);
        }
    }

    saveItemDichVuKyThuat(gridItem, showLoading: boolean = true, reloadGrid: boolean = true) {
        if(this.documentType == DocumentType.KhamBenhDangKham)
        {
            gridItem.IsKhamBenhDangKham = true;
        }
        gridItem.IsKhamDoanTatCa = this.isKhamDoanTatCa;
        this.apiService.post<any>("TiemChung/CapNhatGridItemDichVuKyThuat", gridItem).subscribe(result => {
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));

                if (result && result.SoDuTaiKhoan != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoan) {
                    this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoan;
                    this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanDisplay;
                }
    
                if (result && result.SoDuTaiKhoanConLai != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai) {
                    this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                    this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
                }

                if (reloadGrid) {
                    this.getDataUpdateGripViewGoiKhac(this.thongTinBenhNhan.YeuCauTiepNhanId, this.nhomDichVuDangChon, null, showLoading); // false
                }
            },
            (err: ApiError) => {
                this.focusElementById('txtSoLuongDVKT' + gridItem.YeuCauDichVuKyThuatId);
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
    }

    focusElementById(tagId: string){
        var $focused = jQuery('#'+tagId).find(".k-input");
        jQuery(".k-input").blur();
        setTimeout(function () {
            if ($focused.length > 0) {
                $focused.focus();
            }
        }, 100);
    }

    XacNhanIn(kieuin) {
        this.listChonDichVuChiDinhReLoad = [];
        let gridData = this.gridChild.getAllDataFromDatasource();

        gridData.forEach(ele => {
            this.listChonDichVuChiDinh.forEach(lstChiDinh => {
                if (lstChiDinh.dichVuChiDinhId == ele.Id && lstChiDinh.nhomChiDinhId == ele.NhomId) {
                    this.listChonDichVuChiDinhReLoad.push(lstChiDinh);
                }
            });
        })
        let listGridSelect :any[]= [];
        gridData.forEach(elements => {
           this.listChonDichVuChiDinh.forEach(lstChiDinh => {
               if (lstChiDinh.dichVuChiDinhId == elements.Id && lstChiDinh.nhomChiDinhId == elements.NhomId && elements.TrangThaiDichVuId != 4) {
                   listGridSelect.push(elements);
               }
           });
       });
        let dataIn = {
            YeuCauTiepNhanId: this.thongTinBenhNhan.YeuCauTiepNhanId,
            // YeuCauKhamBenhid: this.benhNhanHienTai.Id,
            ListDichVuChiDinh: this.listChonDichVuChiDinhReLoad,
            InChungChiDinh : kieuin,   
            hosting: window.location.protocol + "//" + window.location.host,
            KieuInChung : true ,
            EnumInChiDinhKhamBenhNgoaiTru: 1 , // để tạm,
            Loai:3,
            listGridSelect: listGridSelect
        }
        
        
        let dialogRef = this.dialog.open(PopupChonLoaiInViewComponent, {
            width: '1000px',
            data: { Model: dataIn }
        });
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        // enter
        if (event.keyCode == 13) {
            if (this.dialog.openDialogs.length > 0) {
                return;
            }
            if (this.nhomDichVuDangChon == EnumNhomGoiDichVu.DichVuKyThuat) {
                event.preventDefault();
                this.closeChangeDichVuKyThuat(true, true);
            }
        }
    }
}