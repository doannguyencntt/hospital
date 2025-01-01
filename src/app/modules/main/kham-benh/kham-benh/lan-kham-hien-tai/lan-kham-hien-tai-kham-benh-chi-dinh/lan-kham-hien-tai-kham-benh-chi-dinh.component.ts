import { Component, OnInit, Input, TemplateRef, ViewChild, HostListener, Output, EventEmitter, ElementRef, SimpleChanges, NgZone } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { IntlService } from '@progress/kendo-angular-intl';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { State, GroupDescriptor } from '@progress/kendo-data-query';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LookupItemVo } from 'src/app/shared/models/common.model';
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
import { SelectAllCheckboxState, RowClassArgs } from '@progress/kendo-angular-grid';
import {
    YeuCauKhamBenh,
    YeuCauDichVuKyThuat,
    GoiDichVu,
    GoiCoChietKhau,
    GoiKhongChietKhau,
    YeuCauDichVuGiuongBenh,
    YeuCauVatTuBenhVien,
    YeuCauGoiDichVu,
    YeuCauDuocPham,
    ThongTinDichVuKhamTiepTheo,
    GridItemYeuCauDichVuKyThuat,
    ListInChiDinh,
    LookupCheckItem,
    TrangThaiYeuCauKhamBenhObjEnum,
    TrangThaiYeuCauDichVuKyThuatObjEnum,
    XoaChiDinhViewModel,
    ChiDinhDichVuKyThuatMultiselectViewModel,
    ChiDinhGhiNhanVatTuThuoc, GridItemGhiNhanVTTHThuoc, 
    ChiDinhGoiDichVuThuongDung,
    ChiDinhGoiDichVuTheoBenhNhan,
    ChiDinhGoiDichVuThuongDungDichVuLoi,
    ChiDinhGoiDichVuTheoBenhNhanDichVuLoi,
    GridChiDinhDichVuQueryInfoVo,
    DataChiDinhTheoLoaiDichVuGroup,
    XoaNhieuChiDinhViewModel,
    DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham,
    XetNghiemCovid,
    
} from '../../../kham-benh.model';
import { InBangKhamBenhChiDinhComponent } from '../in-bang-kham-benh-chi-dinh/in-bang-kham-benh-chi-dinh.component';
import { EnumNhomGoiDichVu, EnumTypeLoadingData, EnumTypeComponent, TrangThaiYeuCauKhamBenh,LoaiDichVuKyThuat } from 'src/app/shared/enum/kham-benh.enum';
import { DropdownlistComponent } from 'src/app/shared/component/dropdowns/dropdownlist/dropdownlist.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LanKhamHienTaiSoDoGiuongPopupComponent } from '../lan-kham-hien-tai-so-do-giuong-popup/lan-kham-hien-tai-so-do-giuong-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { LanKhamHienTaiChiDinhCuaBacSiKhacPopupComponent } from '../lan-kham-hien-tai-chi-dinh-cua-bac-si-khac-popup/lan-kham-hien-tai-chi-dinh-cua-bac-si-khac-popup.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { getDate } from 'date-fns';
import { LanKhamHienTaiNhomDichVuThuongDungPopupComponent } from '../lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup.component';
import { LanKhamHienTaiSuDungGoiDichVuPopupComponent } from '../lan-kham-hien-tai-su-dung-goi-dich-vu-popup/lan-kham-hien-tai-su-dung-goi-dich-vu-popup.component';
import { LanKhamHienTaiNhomDichVuLoiPopupComponent } from '../lan-kham-hien-tai-nhom-dich-vu-loi-popup/lan-kham-hien-tai-nhom-dich-vu-loi-popup.component';
import { HinhThucKhamBenh } from 'src/app/shared/enum/kham-doan.enum';
import { HuyDichVuHuyThanhToanPopupComponent } from '../huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component';
import { DichVuKhuyenMaiPopupComponent } from 'src/app/modules/main/dich-vu-khuyen-mai/dich-vu-khuyen-mai-popup/dich-vu-khuyen-mai-popup.component';
import { PtttGhiNhanCapNhatPopupComponent } from 'src/app/modules/main/phau-thuat-thu-thuat/phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tuong-trinh/pttt-ghi-nhan-cap-nhat-popup/pttt-ghi-nhan-cap-nhat-popup.component';
import { LanKhamHienTaiCapNhatGhiNhanVtthThuocPopupComponent } from '../lan-kham-hien-tai-cap-nhat-ghi-nhan-vtth-thuoc-popup/lan-kham-hien-tai-cap-nhat-ghi-nhan-vtth-thuoc-popup.component';
import { PTTTHoanTraThuocVatTuVo } from 'src/app/modules/main/phau-thuat-thu-thuat/phau-thuat-thu-thuat.model';
import { PtttGhiNhanHoanTraPopupComponent } from 'src/app/modules/main/phau-thuat-thu-thuat/phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tuong-trinh/pttt-ghi-nhan-hoan-tra-popup/pttt-ghi-nhan-hoan-tra-popup.component';
import { LanKhamHienTaiHoanTraThuocVtthPopupComponent } from '../lan-kham-hien-tai-hoan-tra-thuoc-vtth-popup/lan-kham-hien-tai-hoan-tra-thuoc-vtth-popup.component';
import { PopupChonLoaiInViewComponent } from 'src/app/modules/main/popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component';
import { CapNhatThongTinThucHienDvktPopupComponent } from '../cap-nhat-thong-tin-thuc-hien-dvkt-popup/cap-nhat-thong-tin-thuc-hien-dvkt-popup.component';
import { EnumLoaiNoiChiDinh } from 'src/app/shared/enum/phau-thuat-thu-thuat.enum';
import { XnCovidSarscov2PopupComponent } from '../xn-covid-sarscov2-popup/xn-covid-sarscov2-popup.component';
import { XnSarsCov2PopupComponent } from '../../xn-sars-cov2-popup/xn-sars-cov2-popup.component';
import { BoPhan } from 'src/app/shared/enum/bo-phan.enum';
declare var jQuery: any;

@Component({
    selector: 'app-lan-kham-hien-tai-kham-benh-chi-dinh',
    templateUrl: './lan-kham-hien-tai-kham-benh-chi-dinh.component.html',
    styleUrls: ['./lan-kham-hien-tai-kham-benh-chi-dinh.component.scss'],
})
export class LanKhamHienTaiKhamBenhChiDinhComponent implements OnInit {
    //,AfterViewInit,OnDestroy
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

    loaiDataSource: any;
    validationErrors: any;
    isProcessAdd: boolean;
    // documentType: DocumentType;
    LuaChonChiDinh: number = 3; // gán mặc định chọn chỉ định dvkt
    gridColumns: any[] = [];
    phongBenhVienId: number;
    yeuCauDichVuKyThuat: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
    yeuCauKhamBenh: YeuCauKhamBenh = new YeuCauKhamBenh();
    yeuCauDichVuGiuong: YeuCauDichVuGiuongBenh = new YeuCauDichVuGiuongBenh();
    yeuCauVatTuBenhVien: YeuCauVatTuBenhVien = new YeuCauVatTuBenhVien();
    yeuCauGoiDichVu: YeuCauGoiDichVu = new YeuCauGoiDichVu();
    yeuCauDuocPham: YeuCauDuocPham = new YeuCauDuocPham();
    format = "n2";
    goiDichVu: GoiDichVu = new GoiDichVu();
    goiCoChietKhau: GoiCoChietKhau[] = [];
    goiKhongChietKhau: GoiKhongChietKhau[] = [];
    benhNhanHienTai = new YeuCauKhamBenh();
    coDichVuKhuyenMai: boolean = false;
    tongthanhtien: number = 0;
    tongtienBNThanhToan: number = 0;
    tenGoiChietKhau: string = "";
    tongThanhTienTrongGoi: number = 0;
    thanhTienTrongGoi: number = 0;
    tongThanhTienGoiChietKhau: number = 0;
    tLchietKhau: string = "";
    ListNoiThucHien: any;
    goiDichVuLookup: LookupItemVo = { "DisplayName": null, "KeyId": null };

    dichVuDonLeChecked: boolean = false;
    goiDichVuChecked: boolean = false;
    @Output() valueChangeShowTuongTrinh: EventEmitter<any> = new EventEmitter<any>();
    thongTinDichVuKham: ThongTinDichVuKhamTiepTheo = new ThongTinDichVuKhamTiepTheo();
    FlagDuocHuongBaoHiem: boolean = false;
    nhomChiDinhId: number = 0;
    dichVuChiDinhId: number = 0;
    listChonDichVuChiDinh: any[] = [];
    listChonDichVuChiDinhReLoad: any[] = [];
    firstLoadData: boolean = true;
    public checkAll: boolean = null;
    public checkItem: boolean = null;

    gridVTTHThuocColumns: any[] = [];
    gridDataSourceVTTHThuoc: any = {};
    hienThiNutInChiDinh : boolean = true ;
    isKhamNgoaiVien: boolean = false;
    thongTinHoanTraThuocVatTu: PTTTHoanTraThuocVatTuVo = new PTTTHoanTraThuocVatTuVo();

    showbuttonLuuVaInPhieuXetNghiem:boolean = false;
    dichVuSarsCoVs:number[]=[];
    loaiBenhPhamText:string =null;
    loaiBenhPham:number =null;
    bieuHienLamSang:string =null;
    dichTeSarsCoV2:string =null;

    @Input() data: any = null;
    @Input() templateKp: any = null;
    @Input() tenKp: any = null;
    @Input() coBHYT: boolean = null;
    @Input() documentType: DocumentType = DocumentType.KhamBenh;
    @Input() isKhamDoan: boolean = false;
    @Input() hinhThucKhamBenh: HinhThucKhamBenh;
    @Input() isKhamDoanTatCa: boolean = false;
    @Input() isReadOnly: boolean = false;

    //@ViewChild('GridChiDinh', { static: true }) gridChild: GridComponent;
    @ViewChild('GridChiDinh', { read: GridComponent, static: false }) gridChild: GridComponent;
    @ViewChild('gridVTTHThuoc', { read: GridComponent, static: false }) gridChildVTTHThuoc: GridComponent;

    trangThaiYCKB: TrangThaiYeuCauKhamBenhObjEnum = new TrangThaiYeuCauKhamBenhObjEnum();
    trangThaiYCDVKT: TrangThaiYeuCauDichVuKyThuatObjEnum = new TrangThaiYeuCauDichVuKyThuatObjEnum();

    chiDinhDichVuKyThuatMultiselect: ChiDinhDichVuKyThuatMultiselectViewModel = new ChiDinhDichVuKyThuatMultiselectViewModel();
    messVuotQuaTamUng: string = "Chỉ định này đã vượt quá số tiền tạm ứng của người bệnh.";
    enumLoaiDichVuKyThuat = LoaiDichVuKyThuat;
    constructor(
        private apiService: ApiService,
        private authService: AuthService,
        public intl: IntlService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private el: ElementRef,
        private ngZone: NgZone
    ) { }

    // GOI CÓ CHIET KHAU
    public state: State = { skip: 0, take: 15, group: [{ field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }, { field: 'ThanhTienTrongGoi', aggregate: 'sum' }] }] };
    public total(field: any) {
        switch (field) {
            case 'ThanhTien':
                return this.goiCoChietKhau.reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'ThanhTienTrongGoi':
                return this.goiCoChietKhau.reduce((sum, item) => sum + item.ThanhTienTrongGoi, 0);
        }
    };
    gridData: any;
    listChietKhau: any[] = [];
    // GOI KHONG CÓ CHIET KHAU

    //Goi Khacs

    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
    @ViewChild('bhytThanhToanTemplate', { static: true }) bhytThanhToanTemplate: TemplateRef<any>;
    @ViewChild('bhytThanhToanGroupFooterTemplate', { static: true }) bhytThanhToanGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('bhytThanhToanFooterTemplate', { static: true }) bhytThanhToanFooterTemplate: TemplateRef<any>;
    @ViewChild('soTienMGTemplate', { static: true }) soTienMGTemplate: TemplateRef<any>;
    @ViewChild('soTienMGFooterTemplate', { static: true }) soTienMGFooterTemplate: TemplateRef<any>;
    @ViewChild('soTienMGGroupFooterTemplate', { static: true }) soTienMGGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanTemplate', { static: true }) bnThanhToanTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanFooterTemplate', { static: true }) bnThanhToanFooterTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanGroupFooterTemplate', { static: true }) bnThanhToanGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;
    @ViewChild('tLMGTemplate', { static: true }) tLMGTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('tongTienFooterTemplate', { static: true }) tongTienFooterTemplate: TemplateRef<any>;
    @ViewChild('congTienGroupFooterTemplate', { static: true }) congTienGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('nhomGiaTemplate', { static: true }) nhomGiaTemplate: TemplateRef<any>;
    @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
    @ViewChild('nguoiThucHienTemplate', { static: true }) nguoiThucHienTemplate: TemplateRef<any>;
    @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderVTTHThuocTemplate', { static: true }) nhomGroupHeaderVTTHThuocTemplate: TemplateRef<any>;

    // private dropdownLoaiGiaDVKham: DropdownlistComponent;
    // @ViewChild('dropdownLoaiGiaDVKham', { static: true }) set content(content: DropdownlistComponent) {
    //     if (content) {
    //         this.dropdownLoaiGiaDVKham = content
    //     }
    // }

    @ViewChild('dropdownLoaiGiaDVKham', { read: DropdownlistComponent, static: false }) dropdownLoaiGiaDVKham: DropdownlistComponent;

    @ViewChild('noiThucHienGB', { read: ComboboxComponent, static: false }) dropdownNoiThucHienGB: ComboboxComponent;
    @ViewChild('giuongTrongPhong', { read: ComboboxComponent, static: false }) dropdownGiuongTrongPhong: ComboboxComponent;
    @ViewChild('donGiaBaoHiemTemplate', { static: true }) donGiaBaoHiemTemplate: TemplateRef<any>;
    @ViewChild('duocHuongBaoHiemTemplate', { static: true }) duocHuongBaoHiemTemplate: TemplateRef<any>;

    @ViewChild('actionVTTHThuocTemplate', { static: true }) actionVTTHThuocTemplate: TemplateRef<any>;
    @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
    @ViewChild('stttTemplate', { static: true }) stttTemplate: TemplateRef<any>;
    @ViewChild('duocHuongBaoHiemGhiNhanVHTTTemplate', { static: true }) duocHuongBaoHiemGhiNhanVHTTTemplate: TemplateRef<any>;
    @ViewChild('tinhPhiGhiNhanVHTTTemplate', { static: true }) tinhPhiGhiNhanVHTTTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGhiNhanVTTHThuocGroupFooterTemplate', { static: true }) thanhTienGhiNhanVTTHThuocGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGhiNhanVTTHThuocFooterTemplate', { static: true }) thanhTienGhiNhanVTTHThuocFooterTemplate: TemplateRef<any>;
    @ViewChild('soLuongGhiNhanVTTHThuocTemplate', { static: true }) soLuongGhiNhanVTTHThuocTemplate: TemplateRef<any>;

    @ViewChild('cboVTTHThuoc', { read: ComboboxComponent, static: false }) cboVTTHThuoc: ComboboxComponent;
    @ViewChild('tenDichVuTemplate', { static: true }) tenDichVuTemplate: TemplateRef<any>;
    @ViewChild('benhPhamTemplate', { static: true }) benhPhamTemplate: TemplateRef<any>;

    @ViewChild('dichVuTrongGoiTemplate', { static: true }) dichVuTrongGoiTemplate: TemplateRef<any>;
    @ViewChild('dichVuKhuyenMaiTemplate', { static: true }) dichVuKhuyenMaiTemplate: TemplateRef<any>;

    @ViewChild('donGiaVTTHThuocTemplate', { static: true }) donGiaVTTHThuocTemplate: TemplateRef<any>;
    @ViewChild('thanhTienVTTHThuocTemplate', { static: true }) thanhTienVTTHThuocTemplate: TemplateRef<any>;
    @ViewChild('donGiaBaoHiemVTTHThuocTemplate', { static: true }) donGiaBaoHiemVTTHThuocTemplate: TemplateRef<any>;

    @ViewChild('actionHeaderTemplate', { static: true }) actionHeaderTemplate: TemplateRef<any>;
    gridDataNotChietKhau: any;
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

    groupsGhiNhanVTHHThuoc: GroupDescriptor[] = [{ field: 'TenDichVu', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
    public totalGhiNhanVTTHThuoc(field: any) {
        if (this.gridDataSourceVTTHThuoc.data != undefined) {
            switch (field) {
                case 'ThanhTien':
                    return this.gridDataSourceVTTHThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
        }
    };
    ///Goi Khacs
    yeucautiepnhanId: number;
    hostingName: string;
    nhomDichVuDangChon: EnumNhomGoiDichVu = EnumNhomGoiDichVu.DichVuKyThuat;
    lstDichVuTheoGoiDangChon: Array<LookupCheckItem> = [];
    checkALlDichVuTrongGoi: boolean = false;

    popupLoadingData: any;
    //showComboboxNhomDichVuKyThuat: boolean = true;
    //@ViewChild('GridChiDinh', { static: true }) gridChiDinhData: GridComponent;

    isSelectingItem: boolean = false;
    chiDinhGhiNhanVatTuThuoc: ChiDinhGhiNhanVatTuThuoc = new ChiDinhGhiNhanVatTuThuoc();
    showGhiNhanCoBHYT: boolean = true;
    coGoiDichVu: boolean = false;
    changeGhiChu: boolean = false;

    ngOnInit() {
        // console.log("data chi dinh: ", this.data)
        this.phongBenhVienId = this.data.PhongBenhVienId;
        this.benhNhanHienTai = this.data.YeuCauKhamBenh;
        this.yeucautiepnhanId = this.data.YeuCauKhamBenh.YeuCauTiepNhanId;
        this.coDichVuKhuyenMai = this.data.CoDichVuKhuyenMai;
        this.dichVuDonLeChecked = true;
        this.isKhamNgoaiVien = this.hinhThucKhamBenh == HinhThucKhamBenh.KhamDoanNgoaiVien;

        if (this.isKhamDoan) { // đối với khám đoàn, thì đều hiện tất cả dịch vụ -> update 28/04/2021
            this.isKhamDoanTatCa = true;
        }

        this.checkAll = true;
        if (window.location.protocol == "http:") {
            this.hostingName = "http://" + window.location.host;
        } else {
            this.hostingName = "https://" + window.location.host;
        }
        this.gridColumns = [
            { Field: "Action", Title: "", Width: 75, Template: this.actionTemplate, Hidden: this.isReadOnly, TemplateHeader: this.actionHeaderTemplate },
            { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate, Hidden: this.isReadOnly },
            { Field: "STT", Title: "#", Width: 20 ,Template: this.stttTemplate},
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

        this.gridVTTHThuocColumns = [
            { Field: "Action", Title: "", Width: 100, Template: this.actionVTTHThuocTemplate, Hidden: this.isReadOnly },
            { Field: "STT", Title: "#", Width: 20, Template: this.sttTemplate },
            { Field: "MaDichVuYeuCau", Title: "Mã", Width: 60 },
            { Field: "TenDichVu", Title: "TenDichVu", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderVTTHThuocTemplate },
            { Field: "TenDichVuYeuCau", Title: "Tên vật tư/thuốc", MinWidth: 150, ShowTooltip: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 60 },
            { Field: "TenKho", Title: "Tên kho", Width: 150},
            { Field: "TenDuongDung", Title: "Đường dùng", Width: 100 },
            { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaVTTHThuocTemplate, TemplateFooter: this.donGiaFooterTemplate },
            { Field: "SoLuong", Title: "SL", Width: 59, Template: this.soLuongGhiNhanVTTHThuocTemplate},
            { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienVTTHThuocTemplate, TemplateFooter: this.thanhTienGhiNhanVTTHThuocFooterTemplate, TemplateGroupFooter: this.thanhTienGhiNhanVTTHThuocGroupFooterTemplate },
            { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 100, Template: this.donGiaBaoHiemVTTHThuocTemplate},
            { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemGhiNhanVHTTTemplate },
            { Field: "TinhPhi", Title: "Tính phí", Width: 60, Template: this.tinhPhiGhiNhanVHTTTemplate },
            { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 100},
            { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 100},
            { Field: "ThoiGianChiDinhDisplay", Title: "Thời gian chỉ định", Width: 110 },
        ];

        //this.setDataGridView();
        // this.GetDataNoiThucHienDichVu();
        this.getDataGoiDichVuDefault(this.data.YeuCauKhamBenh, this.nhomDichVuDangChon);

        // gán mặc định data
        this.yeuCauKhamBenh.TinhPhi = true;
        this.yeuCauDichVuGiuong.TinhPhi = true;

        // kiểm tra đăng ký gói dịch vụ người bệnh
        this.kiemTraGoiDichVuCuaBenhNhan();
        this.getListDichVuSarsCoVs();
        this.getInfoSarsCoVTheoYeuCauTiepNhans();
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

    getDataGoiDichVuDefault(dataModel: any, nhomDichVuId: number = null) {
        this.showPopupLoadingData(EnumTypeLoadingData.View);
        this.tongthanhtien = 0;
        this.tongtienBNThanhToan = 0;
        this.tongThanhTienGoiChietKhau = 0;
        //yeu cau khac

        // let obj = {
        //     "YeuCauTiepNhanId": dataModel.YeuCauTiepNhanId,
        //     "YeuCauKhamBenhId": dataModel.Id,
        //     "NhomDichVuId": nhomDichVuId,
        //     "IsKhamDoanTatCa": this.isKhamDoanTatCa
        // };

        let obj = new GridChiDinhDichVuQueryInfoVo(
            dataModel.YeuCauTiepNhanId,
            dataModel.Id,
            nhomDichVuId,
            this.isKhamDoanTatCa
        );
        // let url = "KhamBenh/GetDataDefaulDichVuKhac?yeuCauTiepNhanId=" + dataModel.YeuCauTiepNhanId + "&yeuCauKhamBenhId=" + dataModel.Id + (nhomDichVuId != null ? "&nhomDichVuId=" + nhomDichVuId : '');
        // this.apiService.get<any>(url).subscribe(resultData => {
        this.apiService.post<any>("KhamBenh/GetDataDefaulDichVuKhac", obj).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.goiKhongChietKhau = this.goiKhongChietKhau.concat(resultData);
                //this.gridDataNotChietKhau = process(this.goiKhongChietKhau, this.stateNotChietKhau);
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

    getDataUpdateGripViewDelete(IdDichVu: number) {
        for (const chiTiet of this.goiKhongChietKhau) {
            if (chiTiet.Id === IdDichVu) {
                var position = this.goiKhongChietKhau.indexOf(chiTiet);
                break;
            }
        }
        this.goiKhongChietKhau.splice(position, 1);
        this.setDataGridView();
        this.gridChild.setDataSource();
    }

    getDataUpdateGripViewGoiKhac(yeuCauTiepNhanId: number, yeuCauKhamBenhId: number, nhomDichVuId: number = null,
        typeLoadingData: EnumTypeLoadingData = EnumTypeLoadingData.Update, showLoadingPopup: boolean = true) {
        if (showLoadingPopup) {
            this.showPopupLoadingData(typeLoadingData);
        }

        // kiểm tra đăng ký gói dịch vụ người bệnh
        this.kiemTraGoiDichVuCuaBenhNhan();
        // let obj = {
        //     "YeuCauTiepNhanId": yeuCauTiepNhanId,
        //     "YeuCauKhamBenhId": yeuCauKhamBenhId,
        //     "NhomDichVuId": nhomDichVuId,
        //     "IsKhamDoanTatCa": this.isKhamDoanTatCa
        // }

        let obj = new GridChiDinhDichVuQueryInfoVo(
            yeuCauTiepNhanId,
            yeuCauKhamBenhId,
            nhomDichVuId,
            this.isKhamDoanTatCa
        );
        // var url = "KhamBenh/GetDataDefaulDichVuKhac?yeuCauTiepNhanId=" + yeuCauTiepNhanId + "&yeuCauKhamBenhId=" + yeuCauKhamBenhId + (nhomDichVuId != null ? "&nhomDichVuId=" + nhomDichVuId : "");
        // this.apiService.get<any>(url).subscribe(resultData => {
        this.apiService.post<any>("KhamBenh/GetDataDefaulDichVuKhac", obj).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                let goiDichVuModel = new GoiDichVu();
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

    // 1: loading, 2: update data
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

    themGoiKhongChietKhau() {
        var self = this;
        this.validationErrors = [];

        this.yeuCauGoiDichVu.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        this.yeuCauGoiDichVu.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
        self.apiService.post<boolean>("KhamBenh/KiemTraChiDinhGoiDichVuDaCoDichVuTheoYeuCauTiepNhan", this.yeuCauGoiDichVu).subscribe(resultData => {
            if (resultData) {
                self.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: '400px',
                    data: { Title: "Xác nhận", Message: "Có dịch vụ đã được thêm vào trước đó. Bạn có chắc chắn muốn thêm những dịch vụ này hay không?" }
                }).afterClosed().subscribe(result => {
                    if (result == "Yes") {
                        self.xuLyThemGoiKhongChietKhau();
                    }
                });
            }
            else {
                self.xuLyThemGoiKhongChietKhau();
            }
        },
            (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
    }

    xuLyThemGoiKhongChietKhau() {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);

        this.apiService.post<any>("KhamBenh/ThemGoiKhongChietKhau", this.yeuCauGoiDichVu).subscribe(result => {
            //this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]);
            if (result.IsVuotQuaSoDuTaiKhoan) {
                mess += this.messVuotQuaTamUng;//"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }
            if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                this.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
            }
            if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                this.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }
            this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, EnumNhomGoiDichVu.DichVuKyThuat, null, false);
            this.huyGoiKhongChietKhau();
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    // this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionUnsuccessfully + err.Message, ["Thêm"]));
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    chonGoiCoChietKhau(event: any) {
        this.tenGoiChietKhau = event.DisplayName;
    }

    chonGoiKhongChietKhau(event: any) {
        this.tenGoiChietKhau = event.DisplayName;
    }

    changeGoiDichVu(event) {
        if (event == undefined || event == null) {
            this.yeuCauGoiDichVu = new YeuCauGoiDichVu();
        }
        else {
            this.apiService.get<Array<LookupCheckItem>>("KhamBenh/GetListIdDichVuTheoGoi?goiDichVuId=" + event).subscribe(resultData => {
                if (resultData !== undefined && resultData != null) {
                    this.yeuCauGoiDichVu.DichVuChiDinhTheoGois = resultData.map(x => x['KeyId']);
                    this.lstDichVuTheoGoiDangChon = resultData;
                    this.checkALlDichVuTrongGoi = true;
                }
                else {
                    this.yeuCauGoiDichVu.DichVuChiDinhTheoGois = null;
                    this.lstDichVuTheoGoiDangChon = [];
                }
            });
        }
    }

    GetDataNoiThucHienDichVu() {
        this.apiService.get<any>("KhamBenh/GetDataNoiThucHienDichVu").subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.ListNoiThucHien = resultData;
            }
        });
    }

    getLoaiGiaData() {
        this.apiService.get<any>("KhamBenh/GetDataLoaiGiaDichVu").subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.loaiDataSource = resultData
            }
        });
    }

    onChangeNTH(id: number, event: any, vitriDefault: number) {

    }

    chonDichVuKyThuat(event: any) {
        if (event !== null && event !== undefined) {
            if (event.KeyId !== null && event.KeyId !== undefined) {
                this.yeuCauDichVuKyThuat.TenDichVu = event.DichVu;
                this.yeuCauDichVuKyThuat.DichVuKyThuatBenhVienId = event.KeyId;
                this.yeuCauDichVuKyThuat.MaDichVu = event.Ma;
                this.yeuCauDichVuKyThuat.MaGiaDichVu = event.MaGiaDichVu;
                this.yeuCauDichVuKyThuat.NhomGiaDichVuKyThuatBenhVienId = event.NhomGiaDichVuKyThuatBenhVienId;
                this.yeuCauDichVuKyThuat.Gia = event.Gia;
                this.yeuCauDichVuKyThuat.NhomChiPhi = event.NhomChiPhi;
                this.yeuCauDichVuKyThuat.LoaiDichVuKyThuat = event.LoaiDichVuKyThuat;
                this.yeuCauDichVuKyThuat.NhomDichVuBenhVienId = event.NhomDichVuBenhVienId;
            }
        }
    }

    changeDataDichVuKyThuat(event: any) {
        if (event != undefined && event != null) {
            this.apiService.get<any>("KhamBenh/GetChiDinhThongTinDichVuKyThuat?dichVuKyThuatBenhVienId=" + event).subscribe(result => {
                this.yeuCauDichVuKyThuat.TenDichVu = result.DichVu;
                this.yeuCauDichVuKyThuat.DichVuKyThuatBenhVienId = result.KeyId;
                this.yeuCauDichVuKyThuat.MaDichVu = result.Ma;
                this.yeuCauDichVuKyThuat.MaGiaDichVu = result.MaGiaDichVu;
                this.yeuCauDichVuKyThuat.NhomGiaDichVuKyThuatBenhVienId = result.NhomGiaDichVuKyThuatBenhVienId;
                this.yeuCauDichVuKyThuat.Gia = result.Gia;
                this.yeuCauDichVuKyThuat.NhomChiPhi = result.NhomChiPhi;
                this.yeuCauDichVuKyThuat.LoaiDichVuKyThuat = result.LoaiDichVuKyThuat;
                this.yeuCauDichVuKyThuat.NhomDichVuBenhVienId = result.NhomDichVuBenhVienId;
                this.yeuCauDichVuKyThuat.TenNhomDichVu = result.TenNhomDichVuBenhVien;
            });
        }
    }

    chonDichVuKhamBenh(event: any) {
        if (event !== null && event !== undefined) {
            if (event.KeyId !== null && event.KeyId !== undefined) {
                this.yeuCauKhamBenh.TenDichVu = event.DichVu;
                this.yeuCauKhamBenh.DichVuKhamBenhBenhVienId = event.KeyId;
                this.yeuCauKhamBenh.MaDichVu = event.Ma;
                this.yeuCauKhamBenh.MaDichVuTT37 = event.MaDichVuTT37;
                this.yeuCauKhamBenh.NhomGiaDichVuKhamBenhBenhVienId = event.NhomGiaDichVuKhamBenhBenhVienId;
                this.yeuCauKhamBenh.Gia = event.Gia;
            }
        }
    }

    chonDichVuGiuong(event: any) {
        if (event !== null && event !== undefined) {
            if (event.KeyId !== null && event.KeyId !== undefined) {
                this.yeuCauDichVuGiuong.Ten = event.DichVu;
                this.yeuCauDichVuGiuong.DichVuGiuongBenhVienId = event.KeyId;
                this.yeuCauDichVuGiuong.Ma = event.Ma;
                this.yeuCauDichVuGiuong.MaTT37 = event.MaTT37;
                this.yeuCauDichVuGiuong.NhomGiaDichVuGiuongBenhVienId = event.NhomGiaDichVuGiuongBenhVienId;
                this.yeuCauDichVuGiuong.Gia = event.Gia;
                this.yeuCauDichVuGiuong.ThanhTien = event.Gia * 1;
                this.yeuCauDichVuGiuong.LoaiGiuong = event.LoaiGiuong;
                this.FlagDuocHuongBaoHiem = this.data.YeuCauKhamBenh.DuocHuongBaoHiem && this.data.YeuCauTiepNhan.CoBHYT && event.CoGiaBaoHiem;
                this.yeuCauDichVuGiuong.DuocHuongBaoHiem = this.FlagDuocHuongBaoHiem && this.yeuCauDichVuGiuong.TinhPhi;
            }
        }
    }

    chonDuocPham(event: any) {
        if (event !== null && event !== undefined) {
            if (event.KeyId !== null && event.KeyId !== undefined) {
                this.yeuCauDuocPham.Ten = event.DichVu;
                this.yeuCauDuocPham.DuocPhamBenhVienId = event.KeyId;
                this.yeuCauDuocPham.MaHoatChat = event.Ma;
                this.yeuCauDuocPham.HoatChat = event.HoatChat;
                this.yeuCauDuocPham.SoDangKy = event.SoDangKy;
                //this.yeuCauDuocPham.ma = event.MaTT37;
                //this.yeuCauDuocPham.NhomChiPhi =  event.NhomGiaDichVuGiuongBenhVienId;
                this.yeuCauDuocPham.Gia = event.Gia;
            }
        }
    }

    chonVatTu(event) {
        if (event !== null && event !== undefined) {
            if (event.KeyId !== null && event.KeyId !== undefined) {
                this.yeuCauVatTuBenhVien.Ten = event.DichVu;
                this.yeuCauVatTuBenhVien.VatTuBenhVienId = event.KeyId;
                this.yeuCauVatTuBenhVien.Ma = event.Ma;
                // this.yeuCauVatTuBenhVien.NhomGiaDichVuGiuongBenhVienId =  event.NhomGiaDichVuGiuongBenhVienId;
                this.yeuCauVatTuBenhVien.Gia = event.Gia;
            }
        }
    }

    themDichVuKyThuat() {
        var self = this;
        this.validationErrors = [];

        if (self.yeuCauDichVuKyThuat.DichVuKyThuatBenhVienId != undefined && self.yeuCauDichVuKyThuat.DichVuKyThuatBenhVienId != null && self.yeuCauDichVuKyThuat.DichVuKyThuatBenhVienId != 0) {
            var param = "?yeuCauTiepNhanId=" + self.benhNhanHienTai.YeuCauTiepNhanId + "&dichVuBenhVienId=" + self.yeuCauDichVuKyThuat.DichVuKyThuatBenhVienId + "&nhomDichVu=" + EnumNhomGoiDichVu.DichVuKyThuat;
            self.apiService.get<boolean>("KhamBenh/KiemTraChiDinhDichVuDaCoTheoYeuCauTiepNhan" + param).subscribe(resultData => {
                if (resultData) {
                    self.dialog.open(ConfirmComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Dịch vụ này đã được thêm vào trước đó. Bạn có chắc chắn muốn thêm dịch vụ này hay không?" }
                    }).afterClosed().subscribe(result => {
                        if (result == "Yes") {
                            self.xuLyThemDichVuKyThuat();
                        }
                    });
                }
                else {
                    self.xuLyThemDichVuKyThuat();
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
            self.xuLyThemDichVuKyThuat();
        }
    }

    xuLyThemDichVuKyThuat() {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.yeuCauDichVuKyThuat.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        this.yeuCauDichVuKyThuat.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
        this.apiService.post<any>("KhamBenh/ThemYeuCauDichVuKyThuat", this.yeuCauDichVuKyThuat).subscribe(result => {
            this.huyDichVuKyThuat();
            if (result.ChuyenHangDoiSangLamChiDinh) {
                this.benhNhanHienTai.TrangThai = TrangThaiYeuCauKhamBenh.DangLamChiDinh;
            }
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]);
            if (result.IsVuotQuaSoDuTaiKhoan) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }
            if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                this.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
            }
            if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                this.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }
            // let phongBenhVienId = this.authService.getPhongLamViecId();
            // let nhanVienId = this.authService.getAccessUser().Id;
            // let yeuCauKhamBenhId = this.benhNhanHienTai.Id;
            // this.willShowTabPhauThuatThuThuat(phongBenhVienId, nhanVienId, yeuCauKhamBenhId);
            this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, EnumNhomGoiDichVu.DichVuKyThuat, null, false);
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    // willShowTabPhauThuatThuThuat(phongBenhVienId: any, nhanVienId: any, yeuCauKhamBenhId: any) {
    //     if (
    //         this.authService.hasPermission(this.documentType, SecurityOperation.View)
    //     ) {
    //         this.apiService
    //             .get<any>(
    //                 "KhamBenh/WillShowTabPhauThuat?phongBenhVienId=" +
    //                 phongBenhVienId + "&nhanVienId=" + nhanVienId + "&yeuCauKhamBenhId=" + yeuCauKhamBenhId
    //             )
    //             .subscribe((resultData) => {
    //                 if (resultData !== undefined && resultData != null) {
    //                     this.valueChangeShowTuongTrinh.emit(resultData);
    //                 }
    //             });
    //     }
    // }

    themDichVuKhamBenh() {
        var self = this;
        self.validationErrors = [];

        if (self.yeuCauKhamBenh.DichVuKhamBenhBenhVienId != undefined && self.yeuCauKhamBenh.DichVuKhamBenhBenhVienId != null && self.yeuCauKhamBenh.DichVuKhamBenhBenhVienId != 0) {
            var param = "?yeuCauTiepNhanId=" + self.benhNhanHienTai.YeuCauTiepNhanId + "&dichVuBenhVienId=" + self.yeuCauKhamBenh.DichVuKhamBenhBenhVienId + "&nhomDichVu=" + EnumNhomGoiDichVu.DichVuKhamBenh;
            self.apiService.get<boolean>("KhamBenh/KiemTraChiDinhDichVuDaCoTheoYeuCauTiepNhan" + param).subscribe(resultData => {
                if (resultData) {
                    self.dialog.open(ConfirmComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Dịch vụ này đã được thêm vào trước đó. Bạn có chắc chắn muốn thêm dịch vụ này hay không?" }
                    }).afterClosed().subscribe(result => {
                        if (result == "Yes") {
                            self.xuLyKiemTraDichVuKhamBenhTrungTrongGoi();
                        }
                        else
                        {
                            self.resetFocus();
                        }
                    });
                }
                else {
                    self.xuLyKiemTraDichVuKhamBenhTrungTrongGoi();
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
            self.xuLyKiemTraDichVuKhamBenhTrungTrongGoi();
        }
    }

    xuLyKiemTraDichVuKhamBenhTrungTrongGoi(){
        this.yeuCauKhamBenh.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        this.yeuCauKhamBenh.YeuCauKhamBenhTruocId = this.benhNhanHienTai.Id;

        if(this.documentType == DocumentType.KhamBenhDangKham || this.benhNhanHienTai.IsKhamBenhDangKham)
        {
            this.yeuCauKhamBenh.IsKhamBenhDangKham = true;
        }
        var self = this;
        // cập nhật xử lý
        //1: kiểm tra có dịch vụ nào trùng trong gói ko -> hiện popup thông báo
        //2: xử lý thêm dịch vụ ko có trong gói và có trong gói(nếu có)
        self.apiService.post<any>("KhamBenh/KiemTraDichVuKhamBenhChiDinhCoTrongGoiCuaBenhNhan", self.yeuCauKhamBenh).subscribe(resultData => {
            if (resultData.Message != null && resultData.Message != '' && resultData.DichVuChiDinhCoTrongGois.length > 0) {
                self.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: '800px',
                    data: { Title: "Xác nhận", Message: resultData.Message }
                }).afterClosed().subscribe(result => {
                    if (result == "Yes") {
                        self.yeuCauKhamBenh.DichVuKhamBenhTuGoi = resultData.DichVuChiDinhCoTrongGois[0];
                        //self.xuLyThemDichVuKhamBenh();
                    }
                    self.xuLyThemDichVuKhamBenh();
                });
            }
            else {
                self.xuLyThemDichVuKhamBenh();
            }
        },
        (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
        });
    }

    dangXuLy:boolean=false;
    xuLyThemDichVuKhamBenh() {
        if(this.dangXuLy)
            return;
        this.dangXuLy=true;
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.apiService.post<any>("KhamBenh/ThemYeuCauKhamBenh", this.yeuCauKhamBenh).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]);
            if (result.IsVuotQuaSoDuTaiKhoan) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }
            if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                this.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
            }
            if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                this.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }
            this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, EnumNhomGoiDichVu.DichVuKhamBenh, null, false);
            this.huyDichVuKhamBenh();
            this.dangXuLy=false;
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
                this.dangXuLy=false;
            });
    }

    themDichVuGiuong() {
        var self = this;
        this.validationErrors = [];

        if (self.yeuCauDichVuGiuong.DichVuGiuongBenhVienId != undefined && self.yeuCauDichVuGiuong.DichVuGiuongBenhVienId != null && self.yeuCauDichVuGiuong.DichVuGiuongBenhVienId != 0) {
            var param = "?yeuCauTiepNhanId=" + self.benhNhanHienTai.YeuCauTiepNhanId + "&dichVuBenhVienId=" + self.yeuCauDichVuGiuong.DichVuGiuongBenhVienId + "&nhomDichVu=" + EnumNhomGoiDichVu.DichVuGiuongBenh;
            self.apiService.get<boolean>("KhamBenh/KiemTraChiDinhDichVuDaCoTheoYeuCauTiepNhan" + param).subscribe(resultData => {
                if (resultData) {
                    self.dialog.open(ConfirmComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Dịch vụ này đã được thêm vào trước đó. Bạn có chắc chắn muốn thêm dịch vụ này hay không?" }
                    }).afterClosed().subscribe(result => {
                        if (result == "Yes") {
                            self.xulyThemDichVuGiuong();
                        }
                    });
                }
                else {
                    self.xulyThemDichVuGiuong();
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
            self.xulyThemDichVuGiuong();
        }
    }

    xulyThemDichVuGiuong() {
        if(this.dangXuLy)
            return;
        this.dangXuLy=true;
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.yeuCauDichVuGiuong.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId //when have data real
        this.yeuCauDichVuGiuong.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
        this.apiService.post<any>("KhamBenh/ThemYeuCauGiuongBenh", this.yeuCauDichVuGiuong).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]);
            if (result.IsVuotQuaSoDuTaiKhoan) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }
            if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                this.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
            }
            if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                this.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }
            this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, EnumNhomGoiDichVu.DichVuGiuongBenh, null, false);
            this.huyDichVuGiuong();
            this.dangXuLy=false;
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
                this.dangXuLy=false;
            });
    }

    themGhiNhanVatTuBenhVien(ghiNhanNew: ChiDinhGhiNhanVatTuThuoc = null){
        var self = this;
        self.validationErrors = [];

        if(ghiNhanNew == null)
        {
            self.showPopupLoadingData(EnumTypeLoadingData.Update);
        }
        self.chiDinhGhiNhanVatTuThuoc.YeuCauTiepNhanId = self.benhNhanHienTai.YeuCauTiepNhanId;
        self.chiDinhGhiNhanVatTuThuoc.YeuCauKhamBenhId = self.benhNhanHienTai.Id;

        if(self.documentType == DocumentType.KhamBenhDangKham || this.benhNhanHienTai.IsKhamBenhDangKham)
        {
            self.chiDinhGhiNhanVatTuThuoc.IsKhamBenhDangKham = true;
        }

        if(ghiNhanNew != null)
        {
            ghiNhanNew.YeuCauTiepNhanId = self.benhNhanHienTai.YeuCauTiepNhanId;
            ghiNhanNew.YeuCauKhamBenhId = self.benhNhanHienTai.Id;
            ghiNhanNew.IsKhamBenhDangKham = self.chiDinhGhiNhanVatTuThuoc.IsKhamBenhDangKham;

            self.xuLyThemGhiNhanVatTuBenhVien(ghiNhanNew, true);
        }
        else {
            var obj = {
                "YeuCauTiepNhanId": self.benhNhanHienTai.YeuCauTiepNhanId,
                "YeuCauKhamBenhId": self.benhNhanHienTai.Id,
                "DichVuChiDinhId": self.chiDinhGhiNhanVatTuThuoc.DichVuChiDinhId,
                "DichVuGhiNhanId": self.chiDinhGhiNhanVatTuThuoc.DichVuGhiNhanId
            }
            self.apiService.post<boolean>("KhamBenh/KiemTraTrungGhiNhanVTTHThuoc", obj).subscribe(resultData => {
                if (resultData) {
                    self.dialog.open(ConfirmComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "VTTTH/Thuốc này đã được thêm vào trước đó. Bạn có chắc chắn muốn thêm hay không?" }
                    }).afterClosed().subscribe(result => {
                        if (result == "Yes") {
                            self.xuLyThemGhiNhanVatTuBenhVien(self.chiDinhGhiNhanVatTuThuoc);
                        }
                        else
                        {
                            self.huyGhiNhanVatTuBenhVien();
                            self.closePopupLoadingData();
                        }
                    });
                }
                else {
                    self.xuLyThemGhiNhanVatTuBenhVien(self.chiDinhGhiNhanVatTuThuoc);
                }
            },
                (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                });
        }
    }

    xuLyThemGhiNhanVatTuBenhVien(chiDinh: any, isUpdate: boolean = false) {
        if(this.dangXuLy)
            return;
        this.dangXuLy=true;
        var self = this;
        chiDinh.LoaiNoiChiDinh = EnumLoaiNoiChiDinh.YeuCauKhamBenh
        self.apiService.post<any>("KhamBenh/ThemGhiNhanVatTuBenhVien", chiDinh).subscribe(result => {
            if (result != undefined && result != null) {
                if (result.SoDuTaiKhoan != self.benhNhanHienTai.SoDuTaiKhoan) {
                    self.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                    self.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
                }
                if (result.SoDuTaiKhoanConLai != self.benhNhanHienTai.SoDuTaiKhoanConLai) {
                    self.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                    self.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
                }
            }
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, [isUpdate ? "Cập nhật" : "Thêm"]);
            self.notificationService.showSuccess(mess);

            if (self.chiDinhGhiNhanVatTuThuoc.LoaiKho == 5) {
                self.xuatGhiNhanVatTuBenhVien(false);
            }
            else {
                self.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.Update, false);
            }
            self.huyGhiNhanVatTuBenhVien();
            self.dangXuLy=false;
        },
            (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingData();
                self.dangXuLy=false;
            });
    }

    themVatTuBenhVien() {
        // this.validationErrors = [];
        // this.yeuCauVatTuBenhVien.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId //when have data real
        // this.yeuCauVatTuBenhVien.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
        // this.yeuCauVatTuBenhVien.BaoHiemChiTra = this.benhNhanHienTai.BaoHiemChiTra //when have data real
        // this.yeuCauVatTuBenhVien.GiaBaoHiemThanhToan = this.benhNhanHienTai.GiaBaoHiemThanhToan  //when have data real
        // this.apiService.post<any>("KhamBenh/ThemCauYeuVatTuBenhVien", this.yeuCauVatTuBenhVien).subscribe(() => {
        //     this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]));
        //     this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, EnumNhomGoiDichVu.VatTuTieuHao);
        //     this.huyVatTuBenhVien();
        // },
        //     (err: ApiError) => {
        //         this.validationErrors = err.ValidationErrors;
        //         if (this.validationErrors === null)
        //             this.notificationService.showSuccess(err.Message);
        //     });
    }

    themDuocPhamBenhVien() {
        // this.validationErrors = [];
        // this.yeuCauDuocPham.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId //when have data real
        // this.yeuCauDuocPham.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
        // this.yeuCauDuocPham.BaoHiemChiTra = this.benhNhanHienTai.BaoHiemChiTra //when have data real
        // this.yeuCauDuocPham.GiaBaoHiemThanhToan = this.benhNhanHienTai.GiaBaoHiemThanhToan  //when have data real
        // this.apiService.post<any>("KhamBenh/ThemYeuCauDuocPhamBenhVien", this.yeuCauDuocPham).subscribe(() => {
        //     this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]));
        //     this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, EnumNhomGoiDichVu.DuocPham);
        //     this.huyDuocPhamBenhVien();
        // },
        //     (err: ApiError) => {
        //         this.validationErrors = err.ValidationErrors;
        //         if (this.validationErrors === null)
        //             this.notificationService.showSuccess(err.Message);
        //     });
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
                    case 1: url = "KhamBenh/XoaDichVuKhamBenh"; break;
                    case 2: url = "KhamBenh/XoaDichVuKyThuat"; break;
                    // case 3: url = "KhamBenh/XoaDichVuVatTuTieuHao"; break;
                    // case 4: url = "KhamBenh/XoaYeuCauDuocPham"; break;
                    case 5: url = "KhamBenh/XoaDichVuGiuongBenh"; break;
                    default: break;
                }

                let xoaChiDinhViewModel = new XoaChiDinhViewModel();
                xoaChiDinhViewModel.DichVuId = dataItem.Id;
                xoaChiDinhViewModel.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
                if (this.documentType == DocumentType.KhamBenhDangKham || this.benhNhanHienTai.IsKhamBenhDangKham) {
                    xoaChiDinhViewModel.IsKhamBenhDangKham = true;
                }
                xoaChiDinhViewModel.IsKhamDoanTatCa = this.isKhamDoanTatCa;

                this.apiService.post<any>(url, xoaChiDinhViewModel).subscribe(result => {
                    // if (dataItem.NhomId == 2) {
                    //     let phongBenhVienId = this.authService.getPhongLamViecId();
                    //     let nhanVienId = this.authService.getAccessUser().Id;
                    //     let yeuCauKhamBenhId = this.benhNhanHienTai.Id;
                    //     this.willShowTabPhauThuatThuThuat(phongBenhVienId, nhanVienId, yeuCauKhamBenhId);
                    // }
                    if (result != undefined && result != null) {
                        if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                            this.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                            this.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
                        }
                        if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                            this.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                            this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
                        }
                    }
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa "]));
                    this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, this.nhomDichVuDangChon, null, false);
                },
                    (err: ApiError) => {
                        this.notificationService.showError(err.Message);
                        this.closePopupLoadingData();
                    });
            }
        });
    }

    huyDichVuKyThuat() {
        // this.autoFocusElementFirst();
        if (this.dichVuDonLeChecked) {
            this.autoFocusElementFirst();
        }
        else {
            this.autoFocusElementFirst(EnumTypeComponent.KDropdown);
        }

        this.FlagDuocHuongBaoHiem = false;
        this.validationErrors = [];
        this.yeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
        this.huyGoiKhongChietKhau();
    }

    huyGoiKhongChietKhau() {
        this.autoFocusElementFirst(EnumTypeComponent.KDropdown);
        this.yeuCauGoiDichVu = new YeuCauGoiDichVu();
        this.lstDichVuTheoGoiDangChon = [];
    }

    huyDichVuKhamBenh() {
        this.autoFocusElementFirst();
        this.FlagDuocHuongBaoHiem = false;
        this.validationErrors = [];
        this.yeuCauKhamBenh = new YeuCauKhamBenh();
        this.yeuCauKhamBenh.TinhPhi = true;
        this.FlagDuocHuongBaoHiem = false;
        if (this.dropdownLoaiGiaDVKham != undefined) {
            this.dropdownLoaiGiaDVKham.getDataForLookup();
        }
    }

    huyDichVuGiuong() {
        this.autoFocusElementFirst();
        this.FlagDuocHuongBaoHiem = false;
        this.validationErrors = [];
        this.yeuCauDichVuGiuong = new YeuCauDichVuGiuongBenh();
        this.yeuCauDichVuGiuong.TinhPhi = true;
        this.FlagDuocHuongBaoHiem = false;
    }

    huyGhiNhanVatTuBenhVien() {
        this.FlagDuocHuongBaoHiem = false;
        this.validationErrors = [];

        // let dichVuChiDinhId = this.chiDinhGhiNhanVatTuThuoc.DichVuChiDinhId;
        // let dichVuChiDinhDisplay = this.chiDinhGhiNhanVatTuThuoc.TenDichVuChiDinh;
        // let khoId = this.chiDinhGhiNhanVatTuThuoc.KhoId;
        // let tenKho = this.chiDinhGhiNhanVatTuThuoc.TenKho;

        // this.chiDinhGhiNhanVatTuThuoc = new ChiDinhGhiNhanVatTuThuoc();

        // this.chiDinhGhiNhanVatTuThuoc.DichVuChiDinhId = dichVuChiDinhId;
        // this.chiDinhGhiNhanVatTuThuoc.TenDichVuChiDinh = dichVuChiDinhDisplay;
        // this.chiDinhGhiNhanVatTuThuoc.KhoId = khoId;
        // this.chiDinhGhiNhanVatTuThuoc.TenKho = tenKho;

        this.chiDinhGhiNhanVatTuThuoc.DichVuGhiNhanId = null;
        this.chiDinhGhiNhanVatTuThuoc.TenDichVuGhiNhan = null;
        this.chiDinhGhiNhanVatTuThuoc.strDonViTinh = null;
        this.chiDinhGhiNhanVatTuThuoc.SoLuong = null;

        if(this.benhNhanHienTai.DuocHuongBaoHiem && this.data.YeuCauTiepNhan.CoBHYT)
        {
            this.showGhiNhanCoBHYT = true;
            if(this.chiDinhGhiNhanVatTuThuoc.LaDuocPhamBHYT == null)
            {
                this.chiDinhGhiNhanVatTuThuoc.LaDuocPhamBHYT = true;
            }
        }
        else
        {
            this.showGhiNhanCoBHYT = false;
            this.chiDinhGhiNhanVatTuThuoc.LaDuocPhamBHYT = false;
        }
    }

    huyDuocPhamBenhVien() {
        this.FlagDuocHuongBaoHiem = false;
        this.validationErrors = [];
        this.yeuCauDuocPham = new YeuCauDuocPham();
    }

    chonLoaiDichVu(event) {
        if (event !== null && event !== undefined)
            if (event.KeyId !== null && event.KeyId !== undefined) {
                this.yeuCauDichVuKyThuat.TenLoai = event.DisplayName;
                this.yeuCauDichVuKyThuat.LoaiDichVuKyThuat = event.KeyId;
            }
    }

    chonNoiThucHienDVKT(event) {
        if (event !== null && event !== undefined)
            if (event.KeyId !== null && event.KeyId !== undefined) {
                this.yeuCauDichVuKyThuat.NoiThucHienId = event.PhongKhamId;
                this.yeuCauDichVuKyThuat.NoiThucHien = event.DisplayName;
            }
    }

    chonNoiThucHien(event) {
        if (event !== null && event !== undefined)
            if (event.KeyId !== null && event.KeyId !== undefined)
                this.yeuCauDichVuKyThuat.NoiThucHien = event.DisplayName;
    }

    chonChiDinhVatTu(event) {
        if (event !== null && event !== undefined)
            if (event.KeyId !== null && event.KeyId !== undefined) {
                this.yeuCauVatTuBenhVien.NoiCapVatTuId = event.PhongKhamId;
                this.yeuCauVatTuBenhVien.NhanVienCapVatTuId = event.NhanVienId;
                this.yeuCauVatTuBenhVien.NoiChiDinh = event.DisplayName;
            }
    }

    chonNoiChiDinhGiuong(event) {
        if (event !== null && event !== undefined)
            if (event.KeyId !== null && event.KeyId !== undefined) {
                //this.yeuCauDichVuGiuong.NhanVienChiDinhId = event.BacSiId;
                this.yeuCauDichVuGiuong.NoiThucHienId = event.PhongKhamId;
                this.yeuCauDichVuGiuong.NoiChiDinh = event.DisplayName;
            }
    }

    chonNoiKhamBenh(event) {
        if (event !== null && event !== undefined)
            if (event.KeyId !== null && event.KeyId !== undefined) {
                this.yeuCauKhamBenh.NoiChiDinhId = event.PhongKhamId;
                this.yeuCauKhamBenh.NoiThucHien = event.DisplayName;
                this.yeuCauKhamBenh.NhanVienChiDinhId = event.BacSiId;
            }
    }

    chonDuocPhamChiDinh(event) {
        if (event !== null && event !== undefined)
            if (event.KeyId !== null && event.KeyId !== undefined) {
                this.yeuCauDuocPham.NoiChiDinh = event.DisplayName;
                this.yeuCauDuocPham.NoiCapThuocId = event.PhongKhamId;
                this.yeuCauDuocPham.NhanVienCapThuocId = event.NhanVienId;
            }
    }

    selectLuaChonChiDinh(event) {
        if (event !== undefined && event != null) {
            switch (event) {
                case 1:
                    this.nhomDichVuDangChon = EnumNhomGoiDichVu.DichVuKhamBenh;
                    this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, this.nhomDichVuDangChon, EnumTypeLoadingData.View);
                    this.huyDichVuKhamBenh(); 
                    this.hienThiNutInChiDinh = true ;
                    break;
                case 3:
                    this.nhomDichVuDangChon = EnumNhomGoiDichVu.DichVuKyThuat
                    this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, this.nhomDichVuDangChon, EnumTypeLoadingData.View);
                    //this.huyDichVuKyThuat(); this.dichVuDonLeChecked = true; break;
                    this.hienThiNutInChiDinh = true ;
                    this.huyDichVuKyThuatMultiselect(); this.dichVuDonLeChecked = true; break;
                   
                case 4:
                    this.nhomDichVuDangChon = EnumNhomGoiDichVu.DichVuGiuongBenh;
                    this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, this.nhomDichVuDangChon, EnumTypeLoadingData.View);
                    this.huyDichVuGiuong(); 
                    this.hienThiNutInChiDinh = true ;
                    break;
                case 5:
                    this.nhomDichVuDangChon = EnumNhomGoiDichVu.VatTuTieuHao
                    //this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, this.nhomDichVuDangChon, EnumTypeLoadingData.View);
                    this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.View);
                    this.huyGhiNhanVatTuBenhVien(); 
                    this.hienThiNutInChiDinh = false ;
                    break;
            }
        }
        this.FlagDuocHuongBaoHiem = false;
        this.validationErrors = [];
    }

    updateNoiThucHien(event: any, modeldata: any, dataItem: any) {
        if (event !== null && event !== undefined) {
            let url = "";
            let modelUpdate = {
                YeuCauId: modeldata.Id,
                KhoaPhongId: event,
                BacSiId: 0,
            }
            switch (modeldata.NhomId) {
                case 1: url = "UpdateNoiChiDinhKhamBenh";
                    break;
                case 2: url = "UpdateNoiChiDinhKyThuat";
                    break;
                case 3: url = "UpdateNoiChiDinhVatTuTieuHao";
                    break;
                case 4: url = "UpdateNoiChiDinhDuocPham";
                    break;
                case 5: url = "UpdateNoiChiDinhGiuongBenh";
                    break;
                default:
                    break;
            }
            this.apiService.post<any>("KhamBenh/" + url, modelUpdate).subscribe(() => {
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật "]));
            },
                (err: ApiError) => {
                    this.notificationService.showError(CommonService.format(SystemMessage.ActionUnsuccessfully, ["Cập nhật "]));
                });
        }
    }

    XacNhanIn(kieuin) {
        this.listChonDichVuChiDinhReLoad = [];
        let gridData = this.gridChild.getAllDataFromDatasource();
        gridData.forEach(elements => {
            this.listChonDichVuChiDinh.forEach(lstChiDinh => {
                if (lstChiDinh.dichVuChiDinhId == elements.Id && lstChiDinh.nhomChiDinhId == elements.NhomId) {
                    this.listChonDichVuChiDinhReLoad.push(lstChiDinh);
                }
            });
        });
        let listGridSelect :any[]= [];
         gridData.forEach(elements => {
            this.listChonDichVuChiDinh.forEach(lstChiDinh => {
                if (lstChiDinh.dichVuChiDinhId == elements.Id && lstChiDinh.nhomChiDinhId == elements.NhomId && elements.TrangThaiDichVuId !=4 && elements.TrangThaiDichVuId !=6) {
                    listGridSelect.push(elements);
                }
            });
        });
        let dataIn = {
            YeuCauTiepNhanId: this.benhNhanHienTai.YeuCauTiepNhanId,
            YeuCauKhamBenhid: this.benhNhanHienTai.Id,
            ListDichVuChiDinh: this.listChonDichVuChiDinhReLoad,
            InChungChiDinh: kieuin,
            hosting: window.location.protocol + "//" + window.location.host,
            KieuInChung: true,
            GhiChuCanLamSang: this.data.YeuCauKhamBenh.GhiChuCanLamSang,
            IsKhamDoanTatCa : this.isKhamDoanTatCa,
            EnumInChiDinhKhamBenhNgoaiTru: 1 , // để tạm,
            listGridSelect: listGridSelect,
            Loai: 1 // ngoại trú hay nội trú
        }
       
        // let dialogRef = this.dialog.open(InBangKhamBenhChiDinhComponent, {
        //     width: '1000px',
        //     data: { Model: dataIn }
        // }).afterClosed().subscribe(result => {

        // });
        let dialogRef = this.dialog.open(PopupChonLoaiInViewComponent, {
            width: '1000px',
            data: { Model: dataIn }
        });
    }

    onChangeDonGiaKhamBenh(event) {
        if (event != undefined && event != null) {
            this.yeuCauKhamBenh.ThanhTien = event * 1;
        }
        else {
            this.yeuCauKhamBenh.ThanhTien = null;
        }
    }

    onChangeDonGiaDichVuGiuong(event) {
        if (event == undefined && event == null) {
            this.yeuCauDichVuGiuong.Gia = null;
            this.yeuCauDichVuGiuong.ThanhTien = null;
            this.FlagDuocHuongBaoHiem = false;
        }
    }

    getThongTinThanhToan(event: any) {
        if (event != undefined && event != null && this.yeuCauKhamBenh.DichVuKhamBenhBenhVienId != null && this.yeuCauKhamBenh.DichVuKhamBenhBenhVienId != 0
            && this.yeuCauKhamBenh.NhomGiaDichVuKhamBenhBenhVienId != null) {

            this.thongTinDichVuKham = new ThongTinDichVuKhamTiepTheo(this.benhNhanHienTai.YeuCauTiepNhanId,
                this.benhNhanHienTai.Id, this.yeuCauKhamBenh.DichVuKhamBenhBenhVienId, this.yeuCauKhamBenh.NhomGiaDichVuKhamBenhBenhVienId);

            this.apiService.post<any>("KhamBenh/GetDonGia", this.thongTinDichVuKham).subscribe(
                resultData => {
                    this.yeuCauKhamBenh.Gia = resultData.GiaDichVuKham;
                    // this.yeuCauKhamBenh.GiaBaoHiemThanhToan = resultData.GiaBHTT;
                    this.yeuCauKhamBenh.ThanhTien = this.yeuCauKhamBenh.Gia;
                    this.FlagDuocHuongBaoHiem = resultData.FlagDuocHuongBaoHiem;
                    this.yeuCauKhamBenh.DuocHuongBaoHiem = resultData.DuocHuongBaoHiem;

                    this.thongTinDichVuKham = new ThongTinDichVuKhamTiepTheo();
                });
        } else {
            this.yeuCauKhamBenh.Gia = null;
            this.yeuCauKhamBenh.GiaBaoHiemThanhToan = null;
            this.yeuCauKhamBenh.ThanhTien = null;
            this.yeuCauKhamBenh.DuocHuongBaoHiem = false;
        }
    }

    chonDichVuKham(event) {
        if (event != undefined && event != null) {
            this.yeuCauKhamBenh.MaDichVu = event.Ma;
            this.yeuCauKhamBenh.TenDichVu = event.Ten;
        }
        else {
            this.yeuCauKhamBenh.MaDichVu = null;
        }
    }

    timeout = null;
    CapNhatGridItemDichVuKyThuat(dataItem, event, loaiCapNhat) {
        let gridItem = new GridItemYeuCauDichVuKyThuat();
        gridItem.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        gridItem.YeuCauDichVuKyThuatId = dataItem.Id;
        gridItem.YeuCauKhamBenhId = this.benhNhanHienTai.Id;

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
        if(this.documentType == DocumentType.KhamBenhDangKham || this.benhNhanHienTai.IsKhamBenhDangKham)
        {
            gridItem.IsKhamBenhDangKham = true;
        }
        gridItem.IsKhamDoanTatCa = this.isKhamDoanTatCa;
        this.apiService.post<any>("KhamBenh/CapNhatGridItemDichVuKyThuat", gridItem).subscribe(
            resultData => {
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật "]));

                if (resultData != undefined && resultData != null) {
                    if (resultData.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                        this.benhNhanHienTai.SoDuTaiKhoan = resultData.SoDuTaiKhoan;
                        this.benhNhanHienTai.SoDuTaiKhoanDisplay = resultData.SoDuTaiKhoanDisplay;
                    }
                    if (resultData.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                        this.benhNhanHienTai.SoDuTaiKhoanConLai = resultData.SoDuTaiKhoanConLai;
                        this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = resultData.SoDuTaiKhoanConLaiDisplay;
                    }
                }

                // const phongBenhVienId = this.authService.getPhongLamViecId();
                // const nhanVienId = this.authService.getAccessUser().Id;
                // const yeuCauKhamBenhId = this.benhNhanHienTai.Id;
                // this.willShowTabPhauThuatThuThuat(phongBenhVienId, nhanVienId, yeuCauKhamBenhId);

                if (reloadGrid) {
                    this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, this.nhomDichVuDangChon, null, showLoading); // false
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

    changeSoLan(dataItem, loaiCapNhat) {
        var self = this;
        setTimeout(function () {
            self.CapNhatGridItemDichVuKyThuat(dataItem.Id, dataItem.SoLuong, loaiCapNhat);
        }, 500);
    }
    // nam ho
    // nam ho
    public checkboxOnly: boolean = true;

    public selectAllState: SelectAllCheckboxState = 'unchecked';
    public isCheckAll: boolean = false;

    public isCheckXacNhanIn: boolean = false;
    checkboxIn(event: any, dataItem: any) {
        if (this.gridChild.gridDataSource.data == undefined) {
            this.listChonDichVuChiDinh = [];
        }
        let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == dataItem.Id && x.nhomChiDinhId == dataItem.NhomId);
        if (event == true) {
            if (index == -1) {
                var chiDinh = new ListInChiDinh();
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

            // xử lý check nhóm dịch vụ
            let nameGr = 'ckbGroup-' + dataItem.Nhom;
            var ckbGroup = <HTMLInputElement>document.getElementById(nameGr);
            if (!ckbGroup.checked) {
                ckbGroup.checked = true;
            }
        }
        else {
            this.checkAll = false;
            if (index >= 0) {
                this.listChonDichVuChiDinh.splice(index, 1)
            }

            // xử lý uncheck nhóm dịch vụ
            let indexItemCheckedTrongNhom = this.gridChild.gridDataSource.data.findIndex(x => x.Nhom == dataItem.Nhom && x.isCheckRowItem == true);
            if (indexItemCheckedTrongNhom == -1) {
                let nameGr = 'ckbGroup-' + dataItem.Nhom;
                var ckbGroup = <HTMLInputElement>document.getElementById(nameGr);
                if (ckbGroup.checked) {
                    ckbGroup.checked = false;
                }
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
                    var chiDinh = new ListInChiDinh();
                    chiDinh.nhomChiDinhId = element.NhomId;
                    chiDinh.dichVuChiDinhId = element.Id;
                    this.listChonDichVuChiDinh.push(chiDinh);
                }

                // xử lý check nhóm dịch vụ
                let nameGr = 'ckbGroup-' + element.Nhom;
                var ckbGroup = <HTMLInputElement>document.getElementById(nameGr);
                if (!ckbGroup.checked) {
                    ckbGroup.checked = true;
                }
            })
        }
        else {

            gridDataIn.forEach(element => {
                element.isCheckRowItem = false;

                // xử lý uncheck nhóm dịch vụ
                let nameGr = 'ckbGroup-' + element.Nhom;
                var ckbGroup = <HTMLInputElement>document.getElementById(nameGr);
                if (ckbGroup.checked) {
                    ckbGroup.checked = false;
                }
            });
            this.listChonDichVuChiDinh = [];
        }
        this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
    }
    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {

        if (this.isCheckXacNhanIn) {
            // ctrl + p
            if (event.ctrlKey && event.keyCode == 80) {
                event.preventDefault();
                if (this.dialog.openDialogs.length > 0) {
                    return;
                }
                this.XacNhanIn(0); // in mặc đinh là 0
            }
        }


        // ctr + s
        if (event.ctrlKey && event.keyCode == 83) {
            event.preventDefault();
            if (this.dialog.openDialogs.length > 0) {
                return;
            }
            if (this.nhomDichVuDangChon == EnumNhomGoiDichVu.DichVuKhamBenh) {
                this.themDichVuKhamBenh();
            }
            else if (this.nhomDichVuDangChon == EnumNhomGoiDichVu.DichVuKyThuat) {
                //this.themDichVuKyThuat();
                this.themDichVuKyThuatMultiselect();
            }
            else if (this.nhomDichVuDangChon == EnumNhomGoiDichVu.DichVuGiuongBenh) {
                this.themDichVuGiuong();
            }
        }

        // esc
        if (event.keyCode == 27) {
            event.preventDefault();
            if (this.dialog.openDialogs.length > 0) {
                return;
            }
            if (this.nhomDichVuDangChon == EnumNhomGoiDichVu.DichVuKhamBenh) {
                this.huyDichVuKhamBenh();
            }
            else if (this.nhomDichVuDangChon == EnumNhomGoiDichVu.DichVuKyThuat) {
                //this.huyDichVuKyThuat();
                this.huyDichVuKyThuatMultiselect();
            }
            else if (this.nhomDichVuDangChon == EnumNhomGoiDichVu.DichVuGiuongBenh) {
                this.huyDichVuGiuong();
            }
        }

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

    autoCheckDuocHuongBaoHiem(value, item) {
        item.DuocHuongBaoHiem = this.FlagDuocHuongBaoHiem && value;
    }

    autoHideShowTinhPhi(value, item) {
        item.TinhPhi = !value;
    }

    changeCheckBoxGoiDichVu(event) {
        this.huyGoiKhongChietKhau();
    }

    changeCheckAllDichVu(event) {
        if (event) {
            this.checkALlDichVuTrongGoi = true;
            this.yeuCauGoiDichVu.DichVuChiDinhTheoGois = this.lstDichVuTheoGoiDangChon.map(x => x['KeyId']);
            this.lstDichVuTheoGoiDangChon.forEach(item => {
                item.IsCheck = true;
            });
        }
        else {
            this.checkALlDichVuTrongGoi = false;
            this.yeuCauGoiDichVu.DichVuChiDinhTheoGois = [];
            this.lstDichVuTheoGoiDangChon.forEach(item => {
                item.IsCheck = false;
            });
        }
    }

    changeDichVuTrongGoi(event, keyId) {
        let index = this.yeuCauGoiDichVu.DichVuChiDinhTheoGois.findIndex(x => x == keyId);
        if (event) {
            if (index == -1) {
                this.yeuCauGoiDichVu.DichVuChiDinhTheoGois.push(keyId);
                if (this.yeuCauGoiDichVu.DichVuChiDinhTheoGois.length > 0 && this.yeuCauGoiDichVu.DichVuChiDinhTheoGois.length == this.lstDichVuTheoGoiDangChon.length) {
                    this.checkALlDichVuTrongGoi = true;
                }
            }
        }
        else {
            if (index != -1) {
                this.yeuCauGoiDichVu.DichVuChiDinhTheoGois.splice(index, 1);
                this.checkALlDichVuTrongGoi = false;
            }
        }
    }

    xemSoDoGiuong() {
        let data = new YeuCauDichVuGiuongBenh();
        data.NoiThucHienId = this.yeuCauDichVuGiuong.NoiThucHienId;
        data.TenNoiThucHien = this.yeuCauDichVuGiuong.TenNoiThucHien;
        data.GiuongBenhId = this.yeuCauDichVuGiuong.GiuongBenhId;
        data.TenGiuongBenh = this.yeuCauDichVuGiuong.TenGiuongBenh;
        data.DichVuGiuongBenhVienId = this.yeuCauDichVuGiuong.DichVuGiuongBenhVienId;

        this.dialog
            .open(LanKhamHienTaiSoDoGiuongPopupComponent, {
                disableClose: true,
                width: "900px",
                data: data
            })
            .afterClosed().subscribe(result => {
                // xử lý gán lại giá trị phòng - giường nếu có chọn
                if (result != undefined && result != null && result != "") {
                    this.validationErrors = [];
                    this.yeuCauDichVuGiuong.NoiThucHienId = result.NoiThucHienId;
                    this.yeuCauDichVuGiuong.TenNoiThucHien = result.TenNoiThucHien;
                    this.yeuCauDichVuGiuong.GiuongBenhId = result.GiuongBenhId;
                    this.yeuCauDichVuGiuong.TenGiuongBenh = result.TenGiuongBenh;
                    this.yeuCauDichVuGiuong.IdWhereNoiThucHienChiDinh = result.NoiThucHienId;
                    this.dropdownNoiThucHienGB.filterChange(null);
                    this.yeuCauDichVuGiuong.IdWhereGiuongBenh = result.GiuongBenhId;
                    this.dropdownGiuongTrongPhong.filterChange(null);

                }
            });
    }

    xemChiDinhCuaBacSiKhac() {
        this.dialog.open(LanKhamHienTaiChiDinhCuaBacSiKhacPopupComponent, {
            disableClose: false,
            width: '1000px',
            data: {YeuCauTiepNhanId: this.benhNhanHienTai.YeuCauTiepNhanId, YeuCauKhamBenhId: this.benhNhanHienTai.Id,GhiChuCanLamSang:this.data.YeuCauKhamBenh.GhiChuCanLamSang}
        }).afterClosed().subscribe(() => {
        });
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
            //invalidControl.blur();
        }
    }

    autoUnFocusElementFirst(elementType: EnumTypeComponent = EnumTypeComponent.KInput) {
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
            invalidControl.blur();
        }

        // if (document.activeElement instanceof HTMLElement) {
        //     console.log('blur');
        //     document.activeElement.blur();
        // }
    }

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
            // this.chiDinhDichVuKyThuatMultiselect.NhomDichVuBenhVienId = null;
            // this.chiDinhDichVuKyThuatMultiselect.TenNhomDichVu = null;
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
                    this.themDichVuKyThuatMultiselect();
                }
            }
        }
    }

    themDichVuKyThuatMultiselect() {
        var self = this;
        this.validationErrors = [];

        // xử lý kiểm tra thêm trùng dịch vụ


        // xử lý thêm dịch vụ kỹ thuật


        if (self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs != undefined
            && self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs != null
            && self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs.length > 0) {

            self.showPopupLoadingData(EnumTypeLoadingData.Update);
            self.chiDinhDichVuKyThuatMultiselect.YeuCauTiepNhanId = self.benhNhanHienTai.YeuCauTiepNhanId;
            self.chiDinhDichVuKyThuatMultiselect.YeuCauKhamBenhId = self.benhNhanHienTai.Id;
            self.apiService.post<boolean>("KhamBenh/KiemTraChiDinhDichVuKyThuatDaCoTheoYeuCauTiepNhan", self.chiDinhDichVuKyThuatMultiselect).subscribe(resultData => {
                self.closePopupLoadingData();
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
                    self.closePopupLoadingData();
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

    huyDichVuKyThuatMultiselect() {
        if (this.dichVuDonLeChecked) {
            this.autoFocusElementFirst();
        }
        else {
            this.autoFocusElementFirst(EnumTypeComponent.KDropdown);
        }

        this.FlagDuocHuongBaoHiem = false;
        this.validationErrors = [];
        this.chiDinhDichVuKyThuatMultiselect = new ChiDinhDichVuKyThuatMultiselectViewModel();
        // this.huyGoiKhongChietKhau();
    }

    xuLyKiemTraDichVuKyThuatTrungTrongGoi(){
        this.chiDinhDichVuKyThuatMultiselect.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        this.chiDinhDichVuKyThuatMultiselect.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
        if(this.documentType == DocumentType.KhamBenhDangKham || this.benhNhanHienTai.IsKhamBenhDangKham)
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

        //BVHD-3761
        //=======================================================================================================
        let arrDichVu = this.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs.slice();
        arrDichVu.forEach(element => {
            let elementObj = JSON.parse(arrDichVu[0]);
            this.showbuttonLuuVaInPhieuXetNghiem = this.dichVuSarsCoVs.includes(elementObj.DichVuId);
            
        });
       
        if(this.showbuttonLuuVaInPhieuXetNghiem == true)
        {
            
            this.apiService.post
            this.dialog
            .open(XnSarsCov2PopupComponent, {
                width: "600px",
                data: { LoaiMauXetNghiem:this.loaiBenhPham,LoaiMauXetNghiemText:this.loaiBenhPhamText,BieuHienLamSang:this.bieuHienLamSang,DichTeSarsCoV2:this.dichTeSarsCoV2}
            })
            .afterClosed()
            .subscribe((result) => {
                if (result != undefined) {
                     this.chiDinhDichVuKyThuatMultiselect.BieuHienLamSang = result.BieuHienLamSang;
                     this.chiDinhDichVuKyThuatMultiselect.DichTeSarsCoV2 = result.DichTeSarsCoV2;
                     this.ThemDichVuSarsCov2();
                }
                else{
                    this.ThemDichVuSarsCov2();
                }

            });
        //=======================================================================================================
        }
        else{
            this.apiService.post<any>("KhamBenh/ThemYeuCauDichVuKyThuatMultiselect", this.chiDinhDichVuKyThuatMultiselect).subscribe(result => {
                this.huyDichVuKyThuatMultiselect();
    
                // if(result.ChuyenHangDoiSangLamChiDinh)
                // {
                //     this.benhNhanHienTai.TrangThai = TrangThaiYeuCauKhamBenh.DangLamChiDinh;
                // }
    
                let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]);
                if (result.IsVuotQuaSoDuTaiKhoan) {
                    mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                    this.notificationService.showWarning(mess);
                }
                else {
                    this.notificationService.showSuccess(mess);
                }
    
                if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                    this.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                    this.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
                }
                if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                    this.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                    this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
                }
    
                // let phongBenhVienId = this.authService.getPhongLamViecId();
                // let nhanVienId = this.authService.getAccessUser().Id;
                // let yeuCauKhamBenhId = this.benhNhanHienTai.Id;
                //this.willShowTabPhauThuatThuThuat(phongBenhVienId, nhanVienId, yeuCauKhamBenhId);
    
                this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, EnumNhomGoiDichVu.DichVuKyThuat, null, false);
            },
                (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                    this.closePopupLoadingData();
                });
        }

      
    }

    changeDichVuDonLe(event) {
        if (event && this.nhomDichVuDangChon == EnumNhomGoiDichVu.DichVuKyThuat) {
            this.huyDichVuKyThuatMultiselect();
        }
    }
    
    chonDichVuTieuHao(event){
        if(event != undefined && event != null)
        {
            this.chiDinhGhiNhanVatTuThuoc.strDonViTinh = event.DonViTinh;
        }
        else
        {
            this.chiDinhGhiNhanVatTuThuoc.strDonViTinh = null;
        }
    }

    getGridDataGhiNhanVTHHThuoc(typeLoadingData: EnumTypeLoadingData = EnumTypeLoadingData.Update, showLoadingPopup: boolean = true) {
        if (showLoadingPopup) {
            this.showPopupLoadingData(typeLoadingData);
        }

        var url = "KhamBenh/GetGridDataGhiNhanVTTHThuoc?yeuCauKhamBenhId=" + this.benhNhanHienTai.Id;
        this.apiService.get<any>(url).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.gridDataSourceVTTHThuoc = {
                    data: resultData,
                    total: resultData.length
                }
                this.gridChildVTTHThuoc.gridDataSource = this.gridDataSourceVTTHThuoc
                this.gridChildVTTHThuoc.setDataSource();
                this.closePopupLoadingData();
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

    timeoutVTTHThuoc = null;
    CapNhatGridItemGhiNhaVTTHThuoc(resultUpdate: any, dataItem) {
        //this.showPopupLoadingData(EnumTypeLoadingData.Update);
        let gridItem = new GridItemGhiNhanVTTHThuoc();
        gridItem.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        gridItem.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
        gridItem.YeuCauGhiNhanVTTHThuocId = dataItem.Id;
        gridItem.IsCapNhatSoLuong = true;
        gridItem.IsCapNhatTinhPhi = true;
        gridItem.SoLuong = resultUpdate.SoLuong;
        gridItem.TinhPhi = resultUpdate.TinhPhi;

        var self = this;
        clearTimeout(self.timeoutVTTHThuoc);
        self.timeoutVTTHThuoc = setTimeout(function () {
            self.saveItemGhiNhanVatTuTieuHao(gridItem, true);
        }, 1000);
    }

    changeTinhPhiGhiNhanVTTH(tinhPhi: boolean, dataItem)
    {
        let gridItem = new GridItemGhiNhanVTTHThuoc();
        gridItem.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        gridItem.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
        gridItem.YeuCauGhiNhanVTTHThuocId = dataItem.Id;
        gridItem.IsCapNhatTinhPhi = true;
        gridItem.TinhPhi = tinhPhi;
        this.saveItemGhiNhanVatTuTieuHao(gridItem);
    }

    saveItemGhiNhanVatTuTieuHao(gridItem, showLoading: boolean = true) {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        if(this.documentType == DocumentType.KhamBenhDangKham || this.benhNhanHienTai.IsKhamBenhDangKham)
        {
            gridItem.IsKhamBenhDangKham = true;
        }
        this.apiService.post<any>("KhamBenh/CapNhatGridItemGhiNhanVTTHThuoc", gridItem).subscribe(
            resultData => {
                if (resultData != undefined && resultData != null) {
                    if (resultData.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                        this.benhNhanHienTai.SoDuTaiKhoan = resultData.SoDuTaiKhoan;
                        this.benhNhanHienTai.SoDuTaiKhoanDisplay = resultData.SoDuTaiKhoanDisplay;
                    }
                    if (resultData.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                        this.benhNhanHienTai.SoDuTaiKhoanConLai = resultData.SoDuTaiKhoanConLai;
                        this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = resultData.SoDuTaiKhoanConLaiDisplay;
                    }
                }
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật "]));
                this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.Update, false);
            },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    XoaGhiNhanVTTHThuoc(dataItem, updateDetail: any = null) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, [updateDetail != null ? 'cập nhật' : 'xóa']) }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                this.showPopupLoadingData(EnumTypeLoadingData.Delete);
                let gridItem = new GridItemGhiNhanVTTHThuoc();
                gridItem.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
                gridItem.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
                gridItem.YeuCauGhiNhanVTTHThuocId = dataItem.Id;
                if (this.documentType == DocumentType.KhamBenhDangKham || this.benhNhanHienTai.IsKhamBenhDangKham) {
                    gridItem.IsKhamBenhDangKham = true;
                }

                this.apiService.post<any>("KhamBenh/XuLyXoaYeuCauGhiNhanVTTHThuoc", gridItem).subscribe(result => {
                    if (result != undefined && result != null) {
                        if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                            this.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                            this.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
                        }
                        if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                            this.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                            this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
                        }
                    }
                    if(updateDetail == null) // trường hợp xóa trực tiếp
                    {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
                        this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.Update, false);
                    }
                    else // trường hợp xóa cũ và thêm lại theo số lượng mới
                    {
                        let ghiNhanNew = new ChiDinhGhiNhanVatTuThuoc();
                        ghiNhanNew.DichVuChiDinhId = dataItem.DichVuChiDinhId;
                        ghiNhanNew.DichVuGhiNhanId = dataItem.DichVuGhiNhanId;
                        ghiNhanNew.KhoId = dataItem.KhoId;
                        ghiNhanNew.LoaiKho = dataItem.LoaiKho;
                        ghiNhanNew.LaDuocPhamBHYT = dataItem.LaBHYT;
                        ghiNhanNew.SoLuong = updateDetail.SoLuong;
                        ghiNhanNew.TinhPhi = updateDetail.TinhPhi;
                        ghiNhanNew.strDonViTinh = "DVT"; // cheat validation
                        this.themGhiNhanVatTuBenhVien(ghiNhanNew);
                    }
                },
                    (err: ApiError) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                        this.closePopupLoadingData();
                    });
            }
        });
    }

    xuatGhiNhanVatTuBenhVien(isShowPopupLoading: boolean = true){
        if(isShowPopupLoading)
        {
            this.showPopupLoadingData(EnumTypeLoadingData.Update);
        }
        let gridItem = new GridItemGhiNhanVTTHThuoc();
        gridItem.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        gridItem.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
        if(this.documentType == DocumentType.KhamBenhDangKham || this.benhNhanHienTai.IsKhamBenhDangKham)
        {
            gridItem.IsKhamBenhDangKham = true;
        }
        this.apiService.post<any>("KhamBenh/XuLyXuatYeuCauGhiNhanVTTHThuoc", gridItem).subscribe(
            resultData => {
                if(isShowPopupLoading)
                {
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xuất"]));
                }
                this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.Update, false);
            },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    onKeyEnterAddItem(event: any) {
        if (event.key == "Enter" && !this.isSelectingItem) {
          if (this.isSelectingItem != true) {
              if(this.nhomDichVuDangChon == EnumNhomGoiDichVu.DichVuKhamBenh)
              {
                  this.themDichVuKhamBenh();
              }
              else if(this.nhomDichVuDangChon == EnumNhomGoiDichVu.DichVuKyThuat)
              {
                this.themDichVuKyThuatMultiselect();
              }
              else if(this.nhomDichVuDangChon == EnumNhomGoiDichVu.VatTuTieuHao)
              {
                  this.themGhiNhanVatTuBenhVien();
              }
          }
          else {
            this.isSelectingItem = false;
          }
        }
    }

    openCombobox(event: any) {
        if(event){
            this.isSelectingItem = true;
        }
        else{
            this.isSelectingItem = false;
        }
    }

    // openMultiselect(event: any) {
    //     if(event)
    //         this.isSelectingItem = true;
    // }

    // closeMultiselect(event: any) {
    //     if(event)
    //         this.isSelectingItem = false;
    // }

    resetFocus() {
        var $focused = jQuery(':focus');
        jQuery(".k-input").blur();
        setTimeout(function () {
            if ($focused.length > 0) {
                $focused.focus();
            }
        }, 100);

    }

    xemNhomDichVuThuongDung() {
        var self = this;
        let boPhan = BoPhan.KhamBenh;        
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.dialog.open(LanKhamHienTaiNhomDichVuThuongDungPopupComponent, {
                disableClose: false,
                width: '1500px',
                data: { DocumentType: self.documentType , boPhan : boPhan }
            }).afterClosed().subscribe(yeuCauGoiThuongDung => {
                if(yeuCauGoiThuongDung)
                {
                    yeuCauGoiThuongDung.YeuCauKhamBenhId = self.benhNhanHienTai.Id;
                    yeuCauGoiThuongDung.YeuCauTiepNhanId = self.benhNhanHienTai.YeuCauTiepNhanId;

                    //BVHD-3575: trường hợp dv khám chỉ định từ nội trú, thì ko cho phép chỉ định dv khám nữa
                    yeuCauGoiThuongDung.IsPTTT = self.benhNhanHienTai.LaChiDinhTuNoiTru;
                    yeuCauGoiThuongDung.LaPhauThuatThuThuat = this.benhNhanHienTai.LaChiDinhTuNoiTru;
                    if(self.documentType == DocumentType.KhamBenhDangKham || this.benhNhanHienTai.IsKhamBenhDangKham)
                    {
                        yeuCauGoiThuongDung.IsKhamBenhDangKham = true;
                    }
                    self.apiService.post<Array<ChiDinhGoiDichVuThuongDungDichVuLoi>>("KhamBenh/KiemTraDichVuTrongGoiDaCoTheoYeuCauTiepNhan", yeuCauGoiThuongDung).subscribe(resultData => {
                        if (resultData && resultData.length > 0) {
                            self.dialog.open(LanKhamHienTaiNhomDichVuLoiPopupComponent, {
                                disableClose: false,
                                width: '1200px',
                                data: {arrDichVuCanhBao: resultData, DocumentType: this.documentType}
                            }).afterClosed().subscribe(dichVuKhongThems => {
                                if (dichVuKhongThems) {
                                    yeuCauGoiThuongDung.DichVuKhongThems = dichVuKhongThems;
                                    self.xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung);
                                }
                                // else
                                // {
                                //     self.xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung);
                                // }
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

    xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung: ChiDinhGoiDichVuThuongDung) {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.apiService.post<any>("KhamBenh/ThemYeuGoiDichVuThuongDung", yeuCauGoiThuongDung).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]);
            if (result.IsVuotQuaSoDuTaiKhoan) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }

            if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                this.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
            }
            if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                this.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }
            this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, EnumNhomGoiDichVu.DichVuKyThuat, null, false);
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    async kiemTraGoiDichVuCuaBenhNhan() {
        this.apiService.get<boolean>("KhamBenh/KiemTraDangKyGoiDichVuTheoBenhNhan?benhNhanId=" + this.data.YeuCauTiepNhan.BenhNhanId).subscribe(result => {
            this.coGoiDichVu = result;
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
    }

    xemGoiDichVu() {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.dialog.open(LanKhamHienTaiSuDungGoiDichVuPopupComponent, {
                disableClose: false,
                width: '1800px',
                //BVHD-3575: nếu dv khám đang khám là chỉ định từ nội trú thì ko cho phép chỉ định dv khám nữa
                //IsPTTT: false
                data: { DocumentType: self.documentType, BenhNhanId: self.data.YeuCauTiepNhan.BenhNhanId, IsPTTT: self.benhNhanHienTai.LaChiDinhTuNoiTru, IsKhamBenhDangKham: self.benhNhanHienTai.IsKhamBenhDangKham }
            }).afterClosed().subscribe(yeuCauGoiMarketing => {
                if(yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "")
                {
                    yeuCauGoiMarketing.YeuCauKhamBenhId = self.benhNhanHienTai.Id;
                    yeuCauGoiMarketing.YeuCauTiepNhanId = self.benhNhanHienTai.YeuCauTiepNhanId;
                    self.apiService.post<Array<ChiDinhGoiDichVuTheoBenhNhanDichVuLoi>>("KhamBenh/KiemTraDichVuTrongGoiMarketingDaCoTheoYeuCauTiepNhan", yeuCauGoiMarketing).subscribe(resultData => {
                        if (resultData && resultData.length > 0) {
                            self.dialog.open(LanKhamHienTaiNhomDichVuLoiPopupComponent, {
                                disableClose: false,
                                width: '1200px',
                                data: {arrDichVuCanhBao: resultData, DocumentType: this.documentType}
                            }).afterClosed().subscribe(dichVuKhongThems => {
                                if (dichVuKhongThems) {
                                    yeuCauGoiMarketing.DichVuKhongThems = dichVuKhongThems;
                                    self.xuLyThemNhomDichVuMarketing(yeuCauGoiMarketing);
                                }
                            });
                            // self.dialog.open(ConfirmComponent, {
                            //     disableClose: false,
                            //     width: '400px',
                            //     data: { Title: "Xác nhận", Message: resultData }
                            // }).afterClosed().subscribe(result => {
                            //     if (result == "Yes") {
                            //         self.xuLyThemNhomDichVuMarketing(yeuCauGoiMarketing);
                            //     }
                            //     else
                            //     {
                            //         self.resetFocus();
                            //     }
                            // });
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

    xuLyThemNhomDichVuMarketing(yeuCauGoiMarketing: ChiDinhGoiDichVuTheoBenhNhan) {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.apiService.post<any>("KhamBenh/ThemChiDinhGoiDichVuTheoBenhNhan", yeuCauGoiMarketing).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            if (result.IsVuotQuaSoDuTaiKhoan || result.IsVuotQuaBaoLanhGoi == true) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }

            if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                this.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
            }
            if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                this.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }
            this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, EnumNhomGoiDichVu.DichVuKyThuat, null, false);
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    changeGhiChuCLS(event)
    {
        this.changeGhiChu = true;
    }

    changeGhiChuCanLamSang(event) {
        if (this.changeGhiChu) {
            this.changeGhiChu = false;
            if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
                var obj = {
                    YeuCauKhamBenhId: this.data.YeuCauKhamBenh.Id,
                    GhiChuCanLamSang: this.data.YeuCauKhamBenh.GhiChuCanLamSang
                }
                this.apiService.put<any>("KhamBenh/CapNhatGhiChuCanLamSang", obj).subscribe(result => {
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

    huyDichVuDaHuyThanhToan(dataItem)
    {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(HuyDichVuHuyThanhToanPopupComponent, {
                disableClose: false,
                width: '600px',
                data: { Title: "Xác nhận", Message: "Bạn có chắc hủy dịch vụ này không?" }
              }).afterClosed().subscribe(result => {
                if (result != undefined && result != null && result != "") {
                    this.showPopupLoadingData(EnumTypeLoadingData.Cancel);
                    let url = "";
                    switch (dataItem.NhomId) {
                        case 1: url = "KhamBenh/XoaDichVuKhamBenh"; break;
                        case 2: url = "KhamBenh/XoaDichVuKyThuat"; break;
                        default: break;
                    }
    
                    let xoaChiDinhViewModel = new XoaChiDinhViewModel();
                    xoaChiDinhViewModel.DichVuId = dataItem.Id;
                    xoaChiDinhViewModel.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
                    xoaChiDinhViewModel.LyDoHuyDichVu = result;
                    xoaChiDinhViewModel.IsKhamDoanTatCa = this.isKhamDoanTatCa;
                    if (this.documentType == DocumentType.KhamBenhDangKham || this.benhNhanHienTai.IsKhamBenhDangKham) {
                        xoaChiDinhViewModel.IsKhamBenhDangKham = true;
                    }
    
                    this.apiService.post<any>(url, xoaChiDinhViewModel).subscribe(result => {
                        if (result != undefined && result != null) {
                            if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                                this.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                                this.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
                            }
                            if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                                this.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                                this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
                            }
                        }
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy dịch vụ "]));
                        this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, this.nhomDichVuDangChon, null, false);
                    },
                        (err: ApiError) => {
                            this.notificationService.showError(err.Message);
                            this.closePopupLoadingData();
                        });
                }
              });
        }
        else
        {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    cacDichVuKM() {
        let documentType = "KhamBenh";
        if(this.documentType == DocumentType.KhamBenhDangKham)
        {
            documentType = "KhamBenhDangKham";
        }
        this.dialog.open(DichVuKhuyenMaiPopupComponent, {
            disableClose: false,
            width: '1500px',
            data: { BenhNhanId: this.data.YeuCauTiepNhan.BenhNhanId , DocumentType: documentType }
        }).afterClosed().subscribe(() => {
        });
    }

    //===================================BVHD-3825==========================================
    xemGoiDichVuKhuyenMai() {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            let documentType = "KhamBenh";
            if (self.documentType == DocumentType.KhamBenhDangKham) {
                documentType = "KhamBenhDangKham";
            }
            // self.dialog.open(LanKhamHienTaiSuDungGoiDichVuPopupComponent, {
            self.dialog.open(DichVuKhuyenMaiPopupComponent, {
                disableClose: false,
                width: '1800px',
                //BVHD-3575: nếu dv khám đang khám là chỉ định từ nội trú thì ko cho phép chỉ định dv khám nữa
                //IsPTTT: false
                data: { DocumentType: self.documentType, BenhNhanId: self.data.YeuCauTiepNhan.BenhNhanId, IsPTTT: self.benhNhanHienTai.LaChiDinhTuNoiTru == true, IsKhamBenhDangKham: self.benhNhanHienTai.IsKhamBenhDangKham }
            }).afterClosed().subscribe(yeuCauGoiMarketing => {
                if(yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "")
                {
                    yeuCauGoiMarketing.YeuCauKhamBenhId = self.benhNhanHienTai.Id;
                    yeuCauGoiMarketing.YeuCauTiepNhanId = self.benhNhanHienTai.YeuCauTiepNhanId;
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
        this.apiService.post<any>("TiepNhanBenhNhan/ThemChiDinhGoiDichVuKhuyenMaiTheoBenhNhan", yeuCauGoiMarketing).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            if (result.IsVuotQuaSoDuTaiKhoan || result.IsVuotQuaBaoLanhGoi == true) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }

            if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                this.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
            }
            if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                this.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }
            this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, EnumNhomGoiDichVu.DichVuKyThuat, null, false);
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

    chonKho(khoId: number) {
        // this.chiDinhGhiNhanVatTuThuoc.SoLuong = null;
        // this.chiDinhGhiNhanVatTuThuoc.DichVuGhiNhanId = null;
        // this.chiDinhGhiNhanVatTuThuoc.strDonViTinh = null;
        this.huyGhiNhanVatTuBenhVien();
        
        if (khoId != undefined && khoId != null) {
            this.apiService.get<any>("KhamBenh/GetLoaiKhoAsync?khoId=" + khoId).subscribe(resultData => {
                if (resultData !== undefined && resultData != null) {
                    this.chiDinhGhiNhanVatTuThuoc.LoaiKho = resultData;
                }
            })
        } else {
            this.chiDinhGhiNhanVatTuThuoc.LoaiKho = null;

        }
    }

    // cập nhật ghi nhận VTTH/Thuốc
    suaVatTuThuoc(dataItem: any) {
        this.validationErrors = null;
        let vatTuThuocEdit = Object.assign({}, dataItem);
        vatTuThuocEdit.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(LanKhamHienTaiCapNhatGhiNhanVtthThuocPopupComponent, {
                disableClose: false,
                width: '600px',
                data: vatTuThuocEdit,
            }).afterClosed().subscribe((res) => {
                if(res) {
                    console.log('res', res);
                    if(dataItem.LoaiKho == 5)
                    {
                        this.XoaGhiNhanVTTHThuoc(dataItem, res);
                    }
                    else{
                        this.CapNhatGridItemGhiNhaVTTHThuoc(res, dataItem);
                    }
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    hoanTra(dataItem: any) {
        this.validationErrors = null;

        this.thongTinHoanTraThuocVatTu.Id = dataItem.Id;

        this.thongTinHoanTraThuocVatTu.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        this.thongTinHoanTraThuocVatTu.KhoId = dataItem.KhoId;
        this.thongTinHoanTraThuocVatTu.SoLuong = dataItem.SoLuong;

        this.thongTinHoanTraThuocVatTu.CoYeuCauTraVTTuBenhNhanChiTiet = dataItem.CoYeuCauTraVTTuBenhNhanChiTiet;
        this.thongTinHoanTraThuocVatTu.DuocHuongBaoHiem = dataItem.DuocHuongBaoHiem;
        this.thongTinHoanTraThuocVatTu.YeuCauBenhVienId = dataItem.YeuCauId;
        this.thongTinHoanTraThuocVatTu.NhomYeuCauId = dataItem.NhomYeuCauId;
        // this.thongTinHoanTraThuocVatTu.LaTuTruc = dataItem.LaTuTruc;
        // this.thongTinHoanTraThuocVatTu.LaDichTruyen = dataItem.LaTuTruc;

        this.thongTinHoanTraThuocVatTu.LaDuocPham = dataItem.LaDuocPham;

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(LanKhamHienTaiHoanTraThuocVtthPopupComponent, {
                disableClose: false,
                width: '1000px',
                data: this.thongTinHoanTraThuocVatTu,
            }).afterClosed().subscribe(() => {
                this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.Update, false);
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    // cập nhật kiểm tra dịch vụ khác 4 nhóm: PTTT, CDHA, TDCN, XN thì cho phép hoàn thành, hủy hoàn thành
    capNhatThongTinThucHienDichVu(dataItem: any, isThucHien: boolean = true) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            var newObj = {
                YeuCauDichVuKyThuatId: dataItem.Id,
                LaThucHienDichVu: isThucHien,
                DocumentType: this.documentType,
                YeuCauKhamBenhId: this.benhNhanHienTai.Id,
                LaKhamDoanTatCa: this.isKhamDoanTatCa,
                IsKhamBenhDangKham: this.benhNhanHienTai.IsKhamBenhDangKham
            }
            this.dialog.open(CapNhatThongTinThucHienDvktPopupComponent, {
                disableClose: false,
                width: '600px',
                data: newObj,
            }).afterClosed().subscribe((res) => {
                if(res) {
                    var mess = isThucHien ? "Cập nhật thông tin thực hiện dịch vụ" : "Hủy thông tin thực hiện dịch vụ"
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [mess]));
                    this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, this.nhomDichVuDangChon, null, true);
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }


    //BVHD-3745
    //======================================================================================
    changeCheckNhomDichVu(event, tenNhom) {
        let gridDataIn: any[] = [];
        if (this.gridChild.gridDataSource.data == undefined) {
            this.listChonDichVuChiDinh = [];
        }
        else {

            gridDataIn = this.gridChild.getAllDataFromDatasource();
            // this.listChonDichVuChiDinh = [];
        }

        if (event.target.checked) {
            let coItemChuaCheck = false;
            gridDataIn.forEach(element => {
                if (element.Nhom == tenNhom) {
                    element.isCheckRowItem = true;
                    //this.checkAll = true;
                    let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == element.Id && x.nhomChiDinhId == element.NhomId);
                    if (index == -1) {
                        var chiDinh = new ListInChiDinh();
                        chiDinh.nhomChiDinhId = element.NhomId;
                        chiDinh.dichVuChiDinhId = element.Id;
                        this.listChonDichVuChiDinh.push(chiDinh);
                    }
                }

                if(element.isCheckRowItem != true)
                {
                    coItemChuaCheck = true;
                }
            });

            if(!coItemChuaCheck){
                this.checkAll = true;
            }
        }
        else {
            gridDataIn.forEach(element => {
                if (element.Nhom == tenNhom) {
                    element.isCheckRowItem = false;
                    this.checkAll = false;

                    let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == element.Id && x.nhomChiDinhId == element.NhomId);
                    if (index != -1) {
                        this.listChonDichVuChiDinh.splice(index, 1);
                    }
                }
            });
        }
        this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
    }

    xuLyXoaNhieuDichVu() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
            this.showPopupLoadingData(EnumTypeLoadingData.Delete);
            let gridData = this.gridChild.getAllDataFromDatasource();
            let listGridSelect: XoaNhieuChiDinhViewModel[] = [];
            gridData.forEach(element => {
                this.listChonDichVuChiDinh.forEach(lstChiDinh => {
                    if (lstChiDinh.dichVuChiDinhId == element.Id && lstChiDinh.nhomChiDinhId == element.NhomId) {
                        var newItemDelete = new XoaNhieuChiDinhViewModel();
                        newItemDelete.DichVuId = element.Id;
                        newItemDelete.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
                        newItemDelete.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
                        newItemDelete.LaDichVuKham = element.NhomId == EnumNhomGoiDichVu.DichVuKhamBenh;
                        if (this.documentType == DocumentType.KhamBenhDangKham || this.benhNhanHienTai.IsKhamBenhDangKham) {
                            newItemDelete.IsKhamBenhDangKham = true;
                        }
                        newItemDelete.IsKhamDoanTatCa = this.isKhamDoanTatCa;
                        listGridSelect.push(newItemDelete);
                    }
                });
            });

            let xoaObj = {
                XoaNhieuChiDinhDichVuChiTiets: listGridSelect
            };
            //KhamBenh/XoaDichVuKyThuat
            this.apiService.post<any>("KhamBenh/XoaNhieuDichVu", xoaObj).subscribe(result => {
                if (result != undefined && result != null) {
                    if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                        this.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                        this.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
                    }
                    if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                        this.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                        this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
                    }
                }
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
                this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, this.nhomDichVuDangChon, null, false);
            },
                (err: ApiError) => {
                    this.notificationService.showError(err.Message);
                    this.closePopupLoadingData();
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    //BVHD-3761
    //=======================================================================================================
    InPhieuXN(){
        
        let yeuCauDichVuKyThuatIds:any[] = [];
        let gridData = this.gridChild.getAllDataFromDatasource();
        gridData.forEach(elements => {
            this.listChonDichVuChiDinh.forEach(lstChiDinh => {
                if (lstChiDinh.dichVuChiDinhId == elements.Id && 
                    lstChiDinh.nhomChiDinhId == elements.NhomId && 
                    lstChiDinh.nhomChiDinhId == 2) {
                        yeuCauDichVuKyThuatIds.push(lstChiDinh.dichVuChiDinhId);
                }
            });
        });
        
        let hosting = window.location.protocol + "//" + window.location.host;
        let model={
            YeuCauDichVuKyThuatIds:yeuCauDichVuKyThuatIds,
            Hosting:hosting,
            YeuCauTiepNhanId:this.benhNhanHienTai.YeuCauTiepNhanId
        };
        if(yeuCauDichVuKyThuatIds.length == 0)
        {
            let mess = "Chưa chọn dịch vụ xét nghiệm test nhanh Sars-Cov 2 cần in";
            this.notificationService.showError(mess);
        }
        else{
            this.apiService
            .post<any>(
              "TiepNhanBenhNhan/InPhieuXetNghiemCovidBacSiKhacChiDinh",model
            )
            
            .subscribe((resultData) => {
                if(resultData != null && resultData !="")
                {
                    let dialogRef = this.dialog.open(XnCovidSarscov2PopupComponent, {
                        width: '1000px',
                        height: 'auto',
                        data: { Model: resultData }
                      }).afterClosed().subscribe(result => {
                      });
                }
                else{
                    let mess = "Không có dịch vụ xét nghiệm test nhanh Sars-Cov 2 cần in";
                    this.notificationService.showError(mess);
                }
            });
        }
      
      }
      //=======================================================================================================
      // BVHD-3761
    //================================================================================================
    getListDichVuSarsCoVs(){
        this.apiService.get<DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham>("TiepNhanBenhNhan/GetSarsCoVs").subscribe(
            resultData => {
                this.dichVuSarsCoVs = [];
                this.dichVuSarsCoVs =resultData.Ids;
                this.loaiBenhPham = resultData.LoaiMauXetNghiem
                this.loaiBenhPhamText = resultData.LoaiMauXetNghiemText
            });
    }
    getInfoSarsCoVTheoYeuCauTiepNhans(){
        this.apiService.get<XetNghiemCovid>("TiepNhanBenhNhan/GetInfoSarsCoVTheoYeuCauTiepNhan?id=" + this.yeucautiepnhanId).subscribe(
            resultData => {
                this.bieuHienLamSang = resultData.BieuHienLamSang;
                this.dichTeSarsCoV2 = resultData.DichTeSarsCoV2;
            });
    }
    ThemDichVuSarsCov2(){
        this.apiService.post<any>("KhamBenh/ThemYeuCauDichVuKyThuatMultiselect", this.chiDinhDichVuKyThuatMultiselect).subscribe(result => {
            this.huyDichVuKyThuatMultiselect();

            // if(result.ChuyenHangDoiSangLamChiDinh)
            // {
            //     this.benhNhanHienTai.TrangThai = TrangThaiYeuCauKhamBenh.DangLamChiDinh;
            // }

            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]);

            this.getInfoSarsCoVTheoYeuCauTiepNhans();

            if (result.IsVuotQuaSoDuTaiKhoan) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }

            if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                this.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
            }
            if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                this.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }

            // let phongBenhVienId = this.authService.getPhongLamViecId();
            // let nhanVienId = this.authService.getAccessUser().Id;
            // let yeuCauKhamBenhId = this.benhNhanHienTai.Id;
            //this.willShowTabPhauThuatThuThuat(phongBenhVienId, nhanVienId, yeuCauKhamBenhId);

            this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, EnumNhomGoiDichVu.DichVuKyThuat, null, false);
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }
    //================================================================================================
}

