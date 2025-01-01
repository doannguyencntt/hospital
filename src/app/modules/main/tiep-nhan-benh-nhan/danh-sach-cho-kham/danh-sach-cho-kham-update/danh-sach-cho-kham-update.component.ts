import { Component, OnInit, HostListener, ChangeDetectorRef, ViewChild, TemplateRef, OnDestroy, ViewRef } from '@angular/core';
import { TiepNhanBenhNhanViewModel, BenhNhanTiepNhanBenhNhanViewModel, ThemTaiLieuDinhKem, ThemChiDinhDichVu, ThemChiDinhDichVuKyThuat, ThemBaoHiemTuNhan, ThemBaoHiemTuNhanGridVo, ChiDinhDichVuGridVo, DiaChiBHYT, GridLichSuKCB, TimKiemBenhNhanGridVo, BaoHiemTuNhanViewModel, GetDonGiaVo, GridUpdate, AddGoiForUpdateView, HoSoYeuCauTiepNhanViewModel, ListChiDinhNeedUpdate, GridLichSuKiemTraTheBHYT, DanhSachGoiChon, DanhSachDichVuChonTrongLanPopup, CheckDuSoLuongTonTrongGoi, DichVuTrongGoiKhiThem, DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham } from '../../tiep-nhan-benh-nhan.model';
import { ThongTinBenhNhan, BaoHiemYTe } from '../../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model';
import { GioiTinh } from 'src/app/shared/enum/common-type.enums';
import icInfo from '@iconify/icons-ic/twotone-info';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage, TiepNhanBenhNhanMessage } from 'src/app/shared/configdata/system-message';
import { DatePipe } from '@angular/common';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { DanhSachChoKhamPopupComponent } from '../danh-sach-cho-kham-popup/danh-sach-cho-kham-popup.component';
import { DanhSachChoKhamChoQuyetComponent } from '../danh-sach-cho-kham-cho-quyet/danh-sach-cho-kham-cho-quyet.component';
import { TinhTrangThe } from 'src/app/shared/enum/tinh-trang-the.enum';
import { DanhSachChoKhamErrorComponent } from '../danh-sach-cho-kham-error/danh-sach-cho-kham-error.component';
import { ApiError } from 'src/app/shared/models/api-error.model';

import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icFind from '@iconify/icons-ic/search';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { State, process } from '@progress/kendo-data-query';
import { PopupHetHieuLucComponent } from '../popup-het-hieu-luc/popup-het-hieu-luc.component';
import { PopupKhongKiemTraDuocComponent } from '../popup-khong-kiem-tra-duoc/popup-khong-kiem-tra-duoc.component';
import { PopupChoQuetComponent } from '../popup-cho-quet/popup-cho-quet.component';
import { PopupErrorComponent } from '../popup-error/popup-error.component';
import { PopupLichSuKhamChuaBenhComponent } from '../popup-lich-su-kham-chua-benh/popup-lich-su-kham-chua-benh.component';
import { PopupThemGoiComponent } from '../popup-them-goi/popup-them-goi.component';
import { HttpParams } from '@angular/common/http';

import { MultiselectComponent } from 'src/app/shared/component/dropdowns/multiselect/multiselect.component';
import { PopupLichSuKiemTraBhytComponent } from '../popup-lich-su-kiem-tra-bhyt/popup-lich-su-kiem-tra-bhyt.component';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { TextboxComponent } from 'src/app/shared/component/inputs/textbox/textbox.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { TheBenhNhanPopupComponent } from '../the-benh-nhan-popup/the-benh-nhan-popup.component';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { VongDeoTayPopupComponent } from '../vong-deo-tay-popup/vong-deo-tay-popup.component';
import { DisplayNameTinhTrangDichVu } from 'src/app/shared/constants/nhom-dich-vu-constant';
import { Location } from '@angular/common';
import icAdd from '@iconify/icons-ic/twotone-add';
import icCancel from '@iconify/icons-ic/outline-cancel';
import icDone from '@iconify/icons-ic/twotone-done';
import icHistory from '@iconify/icons-ic/twotone-history';
import { PopupMarketingTnbnUpdateComponent } from '../popup-marketing-tnbn-update/popup-marketing-tnbn-update.component';
import { CheckDuSoLuongTonTrongGoiListDichVu, modelUpdateView } from '../danh-sach-cho-kham.model';
import { PopupDichVuCheckTrungUpdateComponent } from '../popup-dich-vu-check-trung-update/popup-dich-vu-check-trung-update.component';
import { LookupItemVo, ThongTinVoucherTheoYeuCauTiepNhan } from '../../../thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.model';
import { HuyDichVuHuyThanhToanPopupComponent } from '../huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component';
import { DichVuKhuyenMaiPopupComponent } from '../../../dich-vu-khuyen-mai/dich-vu-khuyen-mai-popup/dich-vu-khuyen-mai-popup.component';
import { LanKhamHienTaiNhomDichVuThuongDungPopupComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup.component';
import { ChiDinhGoiDichVuTheoBenhNhan, ChiDinhGoiDichVuTheoBenhNhanDichVuLoi, ChiDinhGoiDichVuThuongDung, ChiDinhGoiDichVuThuongDungDichVuLoi, ListInChiDinh } from '../../../kham-benh/kham-benh.model';
import { LanKhamHienTaiNhomDichVuLoiPopupComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-loi-popup/lan-kham-hien-tai-nhom-dich-vu-loi-popup.component';
import { EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { PopupChonLoaiInViewComponent } from '../../../popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component';
import { CapNhatThongTinThucHienDvktPopupComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/cap-nhat-thong-tin-thuc-hien-dvkt-popup/cap-nhat-thong-tin-thuc-hien-dvkt-popup.component';
import { XnCovidPopupComponent } from '../../xn-covid-popup/xn-covid-popup.component';
import { InPhieuDangKyKhamPopupComponent } from '../in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component';
import { InPhieuXnCovidComponent } from '../../in-phieu-xn-covid/in-phieu-xn-covid.component';
import { Messages$5 } from '@progress/kendo-angular-dateinputs';
import { BoPhan } from 'src/app/shared/enum/bo-phan.enum';

declare var $: any;

@Component({
    selector: 'app-danh-sach-cho-kham-update',
    templateUrl: './danh-sach-cho-kham-update.component.html',
    styleUrls: ['./danh-sach-cho-kham-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class DanhSachChoKhamUpdateComponent implements OnInit, OnDestroy {


    id: number;

    //#region Define

    //message kiem tra tren BHYT
    messageThanhCong: string = "Kiểm tra thành công";
    messageKhongThanhCong: string = "Kiểm tra không thành công";


    icMoreHoriz = icMoreHoriz;
    icEdit = icEdit;
    icDelete = icDelete;
    icFind = icFind;
    icAdd = icAdd;
    icCancel = icCancel;
    icDone = icDone;
    icHistory = icHistory;

    hostingName: string;

    thongTinBenhNhan: ThongTinBenhNhan;
    modelQRCode: BaoHiemYTe;
    isSearchQRCodeEnable: boolean = true;
    tiepNhanBenhNhan: TiepNhanBenhNhanViewModel;
    tiepNhanBenhNhanClone: TiepNhanBenhNhanViewModel;
    isDungTuyenDisplay: string = null;
    isDungTuyen: boolean = false;
    isOutOfDate: boolean = false;
    soTuoiDisplay: string;
    documentType: DocumentType;
    documentTypeChinhSuaThongTinHanhChinh: DocumentType;
    validationErrors: any[] = [];

    hoTenDaTimKiem: string;
    maSoTheDaTimKiem: string;
    ngaySinhDaTimKiem: Date;
    icInfo = icInfo;

    soPhanTramHuongBHYT: number = null;

    gridColumns: any[] = [];
    gridKhamBenhColumns: any[] = [];
    gridKyThuatColumns: any[] = [];
    gridKhongChietKhauColumns: any[] = [];
    gridCoChietKhauColumns: any[] = [];
    gridTaiLieuDinhKemColumns: any[] = [];

    themTaiLieu: ThemTaiLieuDinhKem = new ThemTaiLieuDinhKem();
    gridDataTaiLieuDinhKem: any;

    TrieuChungTiepNhanResource: any;
    themChiDinhDichVuModel: ThemChiDinhDichVu = new ThemChiDinhDichVu();
    themChiDinhGoiModel: ThemChiDinhDichVu = new ThemChiDinhDichVu();

    themBaoHiemTuNhanModel: ThemBaoHiemTuNhan = new ThemBaoHiemTuNhan();

    gridDataSourceBHTN: any;
    lstBHTN: ThemBaoHiemTuNhanGridVo[] = [];
    isIdNeedUpdate: number = null;

    isUpdateGrid: boolean = false;

    //gridDataKhamBenh: ChiDinhDichVuGridVo[] = [];
    gridDataKhamBenhDisplay: any;
    gridDataKyThuatDisplay: any;

    gridDataKhacDisplay: any;
    gridDataKhacCoChietKhauDisplay: ChiDinhDichVuGridVo[];
    gridDataKhacCoChietKhauArray: any[] = [];

    soLuongGoiCoChietKhau: number = 0;
    soLuongGoiKhongChietKhau: number = 0;

    isSetValue: boolean = false;
    isCheckedBHYT: boolean = false;
    isActivePopup: boolean = false;

    thongTinTaiKhoanBenhNhan: any;

    soTienBHYTSeThanhToan: number = 0;

    benhNhanId: number = 0;
    benhNhanIdPopup: number = 0;
    coYeuCauGoiDichVu: boolean = false;
    diaChiBHYT: DiaChiBHYT = new DiaChiBHYT();

    lichSuKCB: GridLichSuKCB[] = new Array<GridLichSuKCB>();

    lichSuKiemTraTheBHYTGrid: GridLichSuKiemTraTheBHYT[] = new Array<GridLichSuKiemTraTheBHYT>();

    //1 kham benh, 2 ky thuat, 3 giuong
    loaiTiepNhan: number = null;
    isGoiCoChietKhau: boolean = null;

    //
    duocHuongBHYT = false;

    enableDuocHuongBHYT = false;

    //Tim kiem benh nhan
    lstBenhNhan: TimKiemBenhNhanGridVo[] = new Array<TimKiemBenhNhanGridVo>();
    modelTimKiemBenhNhan: TimKiemBenhNhanGridVo = new TimKiemBenhNhanGridVo();
    totalBenhNhan: number = 0;

    queryInfoNguoiLienHeQuanHuyen: LookupQueryInfo = new LookupQueryInfo();
    queryInfoNguoiLienHePhuongXa: LookupQueryInfo = new LookupQueryInfo();
    //update
    isHaveBHYTUpdated: boolean = false;

    //

    isScanF1: boolean = false;
    //
    // voucher
    public loaiVoucher: number = 0;
    public voucherLookupItemVo: Array<LookupItemVo>;

    //
    isChinhSuaThongTinBenhNhan: boolean = false;
    //
    removeBHYT: boolean = false;

    isDisableNhapTayForUpdate: boolean = false;

    //ngay thang nam sinh
    under6yearsold: boolean = false;

    isActiveAction: any = null;

    //#endregion Define

    isAddOrDeleteGrid: boolean = false;

    isHaveBHYTForTheFistLoad: boolean = true;

    maDichVuDisabled: boolean = false;

    showInChiDinh : boolean = false;

    tinhTrangDangThucHien: string = DisplayNameTinhTrangDichVu.DangThucHien;
    tinhTrangChuaThucHien: string = DisplayNameTinhTrangDichVu.ChuaThucHien;
    tinhTrangDaThucHien: string = DisplayNameTinhTrangDichVu.DaThucHien;
    tinhTrangDaHuy: string = DisplayNameTinhTrangDichVu.DaHuy;

    tinhTrangChuaKham: string = DisplayNameTinhTrangDichVu.ChuaKham;
    tinhTrangDangKham: string = DisplayNameTinhTrangDichVu.DangKham;
    tinhTrangDaKham: string = DisplayNameTinhTrangDichVu.DaKham;
    tinhTrangDangLamChiDinh: string = DisplayNameTinhTrangDichVu.DangLamChiDinh;
    tinhTrangDangDoiKetLuan: string = DisplayNameTinhTrangDichVu.DangDoiKetLuan;

    displayToolTipGrid: string = null;
    suDungGoiMarketingModelTemp: boolean = false;
    disabledCheckboxMarketing: boolean = false;

    danhSachGoiDaChonTrongYCTN: DanhSachGoiChon[] = new Array<DanhSachGoiChon>();
    danhSachDichVuGoiDaChon: Array<ThemChiDinhDichVu> = new Array<ThemChiDinhDichVu>();
    danhSachDichVuDaChonTrongLanPopup: Array<DanhSachDichVuChonTrongLanPopup> = new Array<DanhSachDichVuChonTrongLanPopup>();

    dichVuSarsCoVs:number[]=[];
    loaiBenhPhamText:string =null;
    loaiBenhPham:number =null;
    showbuttonLuuVaInPhieuXetNghiem:boolean = false;

    //#region grid
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('gridBHTN', { static: false }) gridChildBHTN: GridComponent;
    @ViewChild('gridKhamBenh', { static: false }) gridChildKhamBenh: GridComponent;
    @ViewChild('gridKyThuat', { static: false }) gridChildKyThuat: GridComponent;
    @ViewChild('gridCoChietKhau', { static: false }) gridChildCoChietKhau: GridComponent;
    @ViewChild('gridKhongChietKhau', { static: false }) gridChildKhongChietKhau: GridComponent;

    @ViewChild('gridTaiLieuDinhKem', { static: false }) gridTaiLieuDinhKem: GridComponent;

    //the begin of kham benh

    // đơn giá
    @ViewChild('donGiaKhamBenhFooterTemplate', { static: true }) donGiaKhamBenhFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaKhamBenhTemplate', { static: true }) donGiaKhamBenhTemplate: TemplateRef<any>;

    // thành tiền
    @ViewChild('thanhTienKhamBenhTemplate', { static: true }) thanhTienKhamBenhTemplate: TemplateRef<any>;
    @ViewChild('thanhTienKhamBenhFooterTemplate', { static: true }) thanhTienKhamBenhFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienKhamBenhGroupFooterTemplate', { static: true }) thanhTienKhamBenhGroupFooterTemplate: TemplateRef<any>;

    // bhyt thanh toán
    @ViewChild('bhytThanhToanKhamBenhTemplate', { static: true }) bhytThanhToanKhamBenhTemplate: TemplateRef<any>;
    @ViewChild('bhytThanhToanKhamBenhFooterTemplate', { static: true }) bhytThanhToanKhamBenhFooterTemplate: TemplateRef<any>;
    @ViewChild('bhytThanhToanKhamBenhGroupFooterTemplate', { static: true }) bhytThanhToanKhamBenhGroupFooterTemplate: TemplateRef<any>;


    // người bệnh thanh toán
    @ViewChild('bnThanhToanKhamBenhTemplate', { static: true }) bnThanhToanKhamBenhTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanKhamBenhFooterTemplate', { static: true }) bnThanhToanKhamBenhFooterTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanKhamBenhGroupFooterTemplate', { static: true }) bnThanhToanKhamBenhGroupFooterTemplate: TemplateRef<any>;

    //action
    @ViewChild('actionKhamBenhTemplate', { static: true }) actionKhamBenhTemplate: TemplateRef<any>;

    //Loai gia grid
    @ViewChild('loaiGiaTemplate', { static: true }) loaiGiaTemplate: TemplateRef<any>;

    //STT grid
    @ViewChild('sttKhongChietKhauTemplate', { static: true }) sttKhongChietKhauTemplate: TemplateRef<any>;
    @ViewChild('sttCoChietKhauTemplate', { static: true }) sttCoChietKhauTemplate: TemplateRef<any>;


    //So luong grid
    @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;

    // group
    groupKhamBenh: GroupDescriptor[] = [
        {
            field: 'Nhom', aggregates: [
                { field: 'ThanhTien', aggregate: 'sum' },
                { field: 'BnThanhToan', aggregate: 'sum' },
                //{ field: 'SoTienMG', aggregate: 'sum' },
                { field: 'BHYTThanhToan', aggregate: 'sum' }
            ]
        }
    ];

    //end of kham benh

    // the begin of ky thuat

    // đơn giá
    @ViewChild('donGiaKyThuatFooterTemplate', { static: true }) donGiaKyThuatFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaKyThuatTemplate', { static: true }) donGiaKyThuatTemplate: TemplateRef<any>;

    // thành tiền
    @ViewChild('thanhTienKyThuatTemplate', { static: true }) thanhTienKyThuatTemplate: TemplateRef<any>;
    @ViewChild('thanhTienKyThuatFooterTemplate', { static: true }) thanhTienKyThuatFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienKyThuatGroupFooterTemplate', { static: true }) thanhTienKyThuatGroupFooterTemplate: TemplateRef<any>;


    // người bệnh thanh toán
    @ViewChild('bnThanhToanKyThuatTemplate', { static: true }) bnThanhToanKyThuatTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanKyThuatFooterTemplate', { static: true }) bnThanhToanKyThuatFooterTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanKyThuatGroupFooterTemplate', { static: true }) bnThanhToanKyThuatGroupFooterTemplate: TemplateRef<any>;

    //action
    @ViewChild('actionKyThuatTemplate', { static: true }) actionKyThuatTemplate: TemplateRef<any>;

    //
    @ViewChild("tabStrip", { static: false }) tabStrip: TabStripComponent;

    // group
    groupKyThuat: GroupDescriptor[] = [{
        field: 'Nhom', aggregates: [
            { field: 'ThanhTien', aggregate: 'sum' },
            //{ field: 'SoTienMG', aggregate: 'sum' },
            { field: 'BnThanhToan', aggregate: 'sum' }
        ]
    }];

    //end of ky thuat

    //the begin of khong chiet khau

    // đơn giá
    @ViewChild('donGiaKhongChietKhauFooterTemplate', { static: true }) donGiaKhongChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaKhongChietKhauTemplate', { static: true }) donGiaKhongChietKhauTemplate: TemplateRef<any>;

    // thành tiền
    @ViewChild('thanhTienKhongChietKhauTemplate', { static: true }) thanhTienKhongChietKhauTemplate: TemplateRef<any>;
    @ViewChild('thanhTienKhongChietKhauFooterTemplate', { static: true }) thanhTienKhongChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienKhongChietKhauGroupFooterTemplate', { static: true }) thanhTienKhongChietKhauGroupFooterTemplate: TemplateRef<any>;

    // bhyt thanh toán
    @ViewChild('bhytThanhToanKhongChietKhauTemplate', { static: true }) bhytThanhToanKhongChietKhauTemplate: TemplateRef<any>;
    @ViewChild('bhytThanhToanKhongChietKhauFooterTemplate', { static: true }) bhytThanhToanKhongChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('bhytThanhToanKhongChietKhauGroupFooterTemplate', { static: true }) bhytThanhToanKhongChietKhauGroupFooterTemplate: TemplateRef<any>;

    // số tiền mg

    // người bệnh thanh toán
    @ViewChild('bnThanhToanKhongChietKhauTemplate', { static: true }) bnThanhToanKhongChietKhauTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanKhongChietKhauFooterTemplate', { static: true }) bnThanhToanKhongChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanKhongChietKhauGroupFooterTemplate', { static: true }) bnThanhToanKhongChietKhauGroupFooterTemplate: TemplateRef<any>;

    // nơi thực hiện
    @ViewChild('noiThucHienKhongChietKhauTemplate', { static: true }) noiThucHienKhongChietKhauTemplate: TemplateRef<any>;

    // checkbox được hưởng bhyt
    @ViewChild('duocHuongBHYTTemplate', { static: true }) duocHuongBHYTTemplate: TemplateRef<any>;

    //action
    @ViewChild('actionKhongChietKhauTemplate', { static: true }) actionKhongChietKhauTemplate: TemplateRef<any>;
    @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
    // group
    groupKhongChietKhau: GroupDescriptor[] = [
        {
            field: 'Nhom', aggregates: [
                { field: 'ThanhTien', aggregate: 'sum' },
                { field: 'BHYTThanhToan', aggregate: 'sum' },
                //{ field: 'SoTienMG', aggregate: 'sum' },
                { field: 'BnThanhToan', aggregate: 'sum' }
            ]
        }
    ];

    //end of khong chiet khau

    //start chiet khau

    // đơn giá
    @ViewChild('donGiaChietKhauTemplate', { static: true }) donGiaChietKhauTemplate: TemplateRef<any>;
    @ViewChild('donGiaChietKhauFooterTemplate', { static: true }) donGiaChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaBHYTTemplate', { static: true }) donGiaBHYTTemplate: TemplateRef<any>;


    // thành tiền
    @ViewChild('thanhTienChietKhauTemplate', { static: true }) thanhTienChietKhauTemplate: TemplateRef<any>;
    @ViewChild('thanhTienChietKhauFooterTemplate', { static: true }) thanhTienChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienChietKhauGroupFooterTemplate', { static: true }) thanhTienChietKhauGroupFooterTemplate: TemplateRef<any>;

    // tỷ lệ chiết khấu
    @ViewChild('tyLeChietKhauCoChietKhauTemplate', { static: true }) tyLeChietKhauCoChietKhauTemplate: TemplateRef<any>;

    // được giảm trong gói
    @ViewChild('duocGiamTrongGoiCoChietKhauTemplate', { static: true }) duocGiamTrongGoiCoChietKhauTemplate: TemplateRef<any>;
    @ViewChild('duocGiamTrongGoiCoChietKhauFooterTemplate', { static: true }) duocGiamTrongGoiCoChietKhauFooterTemplate: TemplateRef<any>;

    // thành tiền trong gói
    @ViewChild('thanhTienTrongGoiChietKhauTemplate', { static: true }) thanhTienTrongGoiChietKhauTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTrongGoiChietKhauFooterTemplate', { static: true }) thanhTienTrongGoiChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTrongGoiChietKhauGroupFooterTemplate', { static: true }) thanhTienTrongGoiChietKhauGroupFooterTemplate: TemplateRef<any>;

    // nơi thực hiện
    @ViewChild('noiThucHienChietKhauTemplate', { static: true }) noiThucHienChietKhauTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

    //
    @ViewChild('taiLieuTemplate', { static: true }) taiLieuTemplate: TemplateRef<any>;
    @ViewChild('actionTaiLieuTemplate', { static: true }) actionTaiLieuTemplate: TemplateRef<any>;

    @ViewChild('HoVaTenTextbox', { static: false }) HoVaTenTextbox: TextboxComponent;

    @ViewChild('dichVuCombobox', { static: false }) dichVuCombobox: ComboboxComponent;

    @ViewChild('tenDvTemplate', { static: true }) tenDvTemplate: TemplateRef<any>;
    // action
    groupChietKhau: GroupDescriptor[] = [
        {
            field: 'Nhom', aggregates: [
                { field: 'ThanhTien', aggregate: 'sum' },
                { field: 'ThanhTienTrongGoi', aggregate: 'sum' }
            ]
        }
    ];

    //end chiết khấu

    thanhTienTongCong: number = 0;
    bnThanhToanTongCong: number = 0;
    popupLoadingData: any;

    @ViewChild('voucherList', { static: false }) voucherList: MultiselectComponent;
    @ViewChild("multiselect", { static: false }) public multiselect: any;

    @ViewChild('dichVuTrongGoiTemplate', { static: true }) dichVuTrongGoiTemplate: TemplateRef<any>;
    @ViewChild('dichVuKhuyenMaiTemplate', { static: true }) dichVuKhuyenMaiTemplate: TemplateRef<any>;
    //#endregion grid
    // update check in chỉ định
    @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
    @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
    listChonDichVuChiDinh: any[] = [];
    listChonDichVuChiDinhReLoad: any[] = [];
    @ViewChild('gridInChiDinh', { read: GridComponent, static: false }) gridInChiDinh: GridComponent;
    firstLoadData: boolean = true;
    public checkAll: boolean = null;
    public checkItem: boolean = null;

    constructor(private apiService: ApiService, private dialog: MatDialog
        , private authService: AuthService, private router: Router
        , private notificationService: NotificationService
        , private location: Location

        , private route: ActivatedRoute, private cdRef: ChangeDetectorRef) { }

    ngOnDestroy(): void {
        //console.log("ngOnDestroy");
        //this.cdRef.detectChanges();

    }

    ngOnInit() {

        this.id = this.route.snapshot.params.id;

        if (window.location.protocol == "http:") {
            this.hostingName = "http://" + window.location.host;
        } else {
            this.hostingName = "https://" + window.location.host;
        }
        this.getListDichVuSarsCoVs();
       
        //chua co documenttype
        this.documentType = DocumentType.YeuCauTiepNhan;
        this.documentTypeChinhSuaThongTinHanhChinh = DocumentType.YeuCauTiepNhanChinhSuaThongTinHanhChinh;

        //role
        if (this.authService.hasPermission(this.documentTypeChinhSuaThongTinHanhChinh, SecurityOperation.Update)) {
            this.isChinhSuaThongTinBenhNhan = true;
        }
        if (this.id != undefined) {
            this.getBenhNhan(this.id);
        }

        //#region clone create view

        this.getSoTienBHYTSeThanhToan();
        this.getListTenTrieuChungKham();
        this.setDefaultData();
        this.thongTinBenhNhan = new ThongTinBenhNhan();
        this.lichSuKCB = new Array<GridLichSuKCB>();

        this.gridTaiLieuDinhKemColumns = [
            { Field: "LoaiDisplay", Title: "Loại", Width: 200, Sortable: true },
            { Field: "Ten", Title: "Tài liệu", MinWidth: 200, Sortable: true, Template: this.taiLieuTemplate },
            { Field: "MoTa", Title: "Mô tả", Width: 200, Sortable: true },
            { Field: "Action", Title: "", Width: 60, Template: this.actionTaiLieuTemplate },
        ];

        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 50, Sortable: true },
            { Field: "CongTyDisplay", Title: "Công ty", Width: 250, Sortable: true },
            { Field: "MaSoThe", Title: "Số thẻ", Width: 150, Sortable: true },
            { Field: "NgayHieuLucDisplay", Title: "Từ ngày", Width: 100, Sortable: true },
            { Field: "NgayHetHanDisplay", Title: "Đến ngày", Width: 100, Sortable: true },
            { Field: "SoDienThoai", Title: "Điện thoại", Width: 100, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 200, Sortable: true },
            { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
        ];

        this.gridKhamBenhColumns = [
            { Field: "Ma", Title: "Mã", Width: 80, Sortable: true },
            { Field: "Nhom", Title: "Nhóm", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 140, Sortable: true },
            { Field: "LoaiGia", Title: "Loại Giá", Width: 80, Sortable: true },
            { Field: "SoLuong", Title: "SL", Width: 30, Sortable: true },
            {
                Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: true,
                Template: this.donGiaKhamBenhTemplate,
                TemplateFooter: this.donGiaKhamBenhFooterTemplate
            },
            {
                Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Sortable: true,
                Template: this.thanhTienKhamBenhTemplate,
                TemplateFooter: this.thanhTienKhamBenhFooterTemplate,
                TemplateGroupFooter: this.thanhTienKhamBenhGroupFooterTemplate
            },
            {
                Field: "BHYTThanhToan", Title: "BHYT Thanh Toán", Width: 100, Sortable: true,
                Template: this.bhytThanhToanKhamBenhTemplate,
                TemplateFooter: this.bhytThanhToanKhamBenhFooterTemplate,
                TemplateGroupFooter: this.bhytThanhToanKhamBenhGroupFooterTemplate
            },
            // { Field: "TLMGDisplay", Title: "TL MG", Width: 45, Sortable: true },
            {
                Field: "BnThanhToan", Title: "BN thanh toán", Width: 150, Sortable: true,
                Template: this.bnThanhToanKhamBenhTemplate,
                TemplateFooter: this.bnThanhToanKhamBenhFooterTemplate,
                TemplateGroupFooter: this.bnThanhToanKhamBenhGroupFooterTemplate
            },
            {
                Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230, Sortable: true
            },
            { Field: "ActionKhamBenh", Title: "", Width: 50, Template: this.actionKhamBenhTemplate }
        ];

        this.gridKyThuatColumns = [
            { Field: "Nhom", Title: "Nhóm", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "Ma", Title: "Mã", Width: 80, Sortable: true },
            { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 140, Sortable: true },
            { Field: "LoaiGia", Title: "Loại Giá", Width: 80, Sortable: true },
            { Field: "SoLuong", Title: "SL", Width: 30, Sortable: true },
            {
                Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: true,
                Template: this.donGiaKyThuatTemplate,
                TemplateFooter: this.donGiaKyThuatFooterTemplate
            },
            {
                Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Sortable: true,
                Template: this.thanhTienKyThuatTemplate,
                TemplateFooter: this.thanhTienKyThuatFooterTemplate,
                TemplateGroupFooter: this.thanhTienKyThuatGroupFooterTemplate
            },
            //{ Field: "TLMGDisplay", Title: "TL MG", Width: 45, Sortable: true },
            {
                Field: "BnThanhToan", Title: "BN thanh toán", Width: 100, Sortable: true,
                Template: this.bnThanhToanKyThuatTemplate,
                TemplateFooter: this.bnThanhToanKyThuatFooterTemplate,
                TemplateGroupFooter: this.bnThanhToanKyThuatGroupFooterTemplate
            },
            {
                Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230, Sortable: true
            },
            {
                Field: "TenNhanVienChiDinh", Title: "Nhân viên chỉ định", Width: 180, Sortable: true
            },
            { Field: "ActionKyThuat", Title: "", Width: 50, Template: this.actionKyThuatTemplate }
        ];

        this.gridKhongChietKhauColumns = [
            {
                Field: "id", Title: "#", Width: 90, Sortable: true,
                Template: this.sttKhongChietKhauTemplate
            },
            { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
            { Field: "Ma", Title: "Mã", Width: 80, Sortable: true },
            { Field: "Nhom", Title: "Nhóm", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            {
                Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 200, Sortable: true, ShowTooltip: true,
                TemplateFooter: this.donGiaKhongChietKhauFooterTemplate
                , Template: this.tenDvTemplate
            },
            { Field: "GoiCoChietKhauId", Title: "DV Trong Gói", Width: 60, Template: this.dichVuTrongGoiTemplate },
            { Field: "LaDichVuKhuyenMai", Title: "DV Khuyến Mại", Width: 60, Template: this.dichVuKhuyenMaiTemplate},
            {
                Field: "LoaiGia", Title: "Loại Giá", Width: 100, Sortable: true,
                Template: this.loaiGiaTemplate
            },

            {
                Field: "SoLuong", Title: "SL", Width: 80, Sortable: true,
                Template: this.soLuongTemplate
            },
            {
                Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: true,
                Template: this.donGiaKhongChietKhauTemplate
            },
            {
                Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Sortable: true,
                Template: this.thanhTienKhongChietKhauTemplate,
                TemplateGroupFooter: this.thanhTienKhongChietKhauGroupFooterTemplate,
                TemplateFooter: this.thanhTienKhongChietKhauFooterTemplate,
            },

            {
                Field: "GiaBHYT", Title: "ĐG BHYT", Width: 100, Sortable: true,
                Template: this.donGiaBHYTTemplate
            },
            {
                Field: "DuocHuongBHYT", Title: "ĐH BHYT", Width: 60, Sortable: false,
                Template: this.duocHuongBHYTTemplate
            },
            // {
            //     Field: "BHYTThanhToan", Title: "BHYT Thanh Toán", Width: 100, Sortable: true,
            //     Template: this.bhytThanhToanKhongChietKhauTemplate,
            //     TemplateFooter: this.bhytThanhToanKhongChietKhauFooterTemplate,
            //     TemplateGroupFooter: this.bhytThanhToanKhongChietKhauGroupFooterTemplate
            // },
            // // { Field: "TLMGDisplay", Title: "TL MG", Width: 60, Sortable: true },
            // {
            //     Field: "BnThanhToan", Title: "BN thanh toán", Width: 100, Sortable: true,
            //     Template: this.bnThanhToanKhongChietKhauTemplate,
            //     TemplateFooter: this.bnThanhToanKhongChietKhauFooterTemplate,
            //     TemplateGroupFooter: this.bnThanhToanKhongChietKhauGroupFooterTemplate
            // },
            {
                Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230, Sortable: true,
                Template: this.noiThucHienKhongChietKhauTemplate
            },
            {
                Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 180, Sortable: true
            },
            { Field: "ThoiGianChiDinhDisplay", Title: "Thời gian chỉ định", Width: 110 },
            {
                Field: "TinhTrangDisplay", Title: "Tình trạng", Width: 100, Sortable: true, Template: this.tinhTrangTemplate
            },
            { Field: "ActionKhongChietKhau", Title: "", Width: 75, Template: this.actionKhongChietKhauTemplate }
        ];

        this.gridCoChietKhauColumns = [
            {
                Field: "id", Title: "#", Width: 90, Sortable: true,
                Template: this.sttCoChietKhauTemplate
            },
            { Field: "Nhom", Title: "Nhóm", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "Ma", Title: "Mã", Width: 80, Sortable: true },
            { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 200, Sortable: true, ShowTooltip: true },
            { Field: "LoaiGia", Title: "Loại Giá", Width: 80, Sortable: true },
            { Field: "SoLuong", Title: "SL", Width: 30, Sortable: true },
            {
                Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: true,
                Template: this.donGiaChietKhauTemplate,
                TemplateFooter: this.donGiaChietKhauFooterTemplate
            },
            {
                Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Sortable: true,
                Template: this.thanhTienChietKhauTemplate,
                TemplateFooter: this.thanhTienChietKhauFooterTemplate,
                TemplateGroupFooter: this.thanhTienChietKhauGroupFooterTemplate
            },
            {
                Field: "TyLeChietKhauDisplay", Title: "TL CK", Width: 100, Sortable: true,
                Template: this.tyLeChietKhauCoChietKhauTemplate,
            },
            {
                Field: "DuocGiamTrongGoi", Title: "DG Trong Gói", Width: 100, Sortable: true,
                Template: this.duocGiamTrongGoiCoChietKhauTemplate,
                TemplateFooter: this.duocGiamTrongGoiCoChietKhauFooterTemplate
            },
            {
                Field: "ThanhTienTrongGoi", Title: "TT Trong Gói", Width: 100, Sortable: true,
                Template: this.thanhTienTrongGoiChietKhauTemplate,
                TemplateFooter: this.thanhTienTrongGoiChietKhauFooterTemplate,
                TemplateGroupFooter: this.thanhTienTrongGoiChietKhauGroupFooterTemplate
            },
            {
                Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230, Sortable: true,
                Template: this.noiThucHienChietKhauTemplate
            },
            {
                Field: "TenNhanVienChiDinh", Title: "Nhân viên chỉ định", Width: 180, Sortable: true
            },
            {
                Field: "TinhTrangDisplay", Title: "Tình trạng", Width: 100, Sortable: true,
            }
        ];
        
        //chua co documenttype
        //this.documentType = DocumentType.DanhMucBenhVien;
        this.tiepNhanBenhNhan = new TiepNhanBenhNhanViewModel;
        this.tiepNhanBenhNhan.BenhNhan = new BenhNhanTiepNhanBenhNhanViewModel();

        this.tiepNhanBenhNhanClone = new TiepNhanBenhNhanViewModel;
        this.tiepNhanBenhNhanClone.BenhNhan = new BenhNhanTiepNhanBenhNhanViewModel();

        this.lstBHTN = new Array<ThemBaoHiemTuNhanGridVo>();

        this.setValueForGridBHTN();
        this.huyBHTN();

        //this.setDataForDichVuKyThuat();
        //this.setDataForDichVuKhamBenh();

        //this.setDataForTaiLieuDinhKem();
        this.refreshGrid();

        this.themChiDinhDichVuModel = new ThemChiDinhDichVu();
        this.themChiDinhGoiModel = new ThemChiDinhDichVu();

        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
        //this.themChiDinhDichVuModel.DoiTuongUuDaiId = this.tiepNhanBenhNhan.DoiTuongUuDaiId;

        this.clearThongTinTaiKhoanBenhNhan();
        this.clearThemTaiLieu();

        //#endregion clone create view

        this.queryInfoNguoiLienHeQuanHuyen.ParameterDependencies = "{tinhThanhLienHe:" + this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId + "}";
        this.queryInfoNguoiLienHePhuongXa.ParameterDependencies = "{quanHuyenLienHe:" + this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId + "}";
              
        if (this.id != undefined) {
            this.getThongTinVoucher(this.id);
        }
        
    }

    cloneTiepNhanBenhNhan() {
        this.tiepNhanBenhNhanClone = JSON.parse(JSON.stringify(this.tiepNhanBenhNhan));
        //console.log("cloneTiepNhanBenhNhan = ", this.tiepNhanBenhNhanClone);
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        //console.log(event);
        if (this.isHaveBHYTForTheFistLoad != true) {
            if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
                event.preventDefault();
                this.QuetMaQRCodeClick();
            }
            else if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 == true) {
                event.preventDefault();
            }
        }
        //f1 - CoBHYT
        if (event.keyCode == 112 && event.ctrlKey) {
            //console.log("Ok");
            this.coBHYTChange(true);
            this.tiepNhanBenhNhan.CoBHYT = true;
            event.preventDefault();
        }
        //f2 - TuNhap
        else if (event.keyCode == 113 && event.ctrlKey) {
            //console.log("Ok");
            this.tuNhapChange(true);
            this.tiepNhanBenhNhan.TuNhap = true;
            event.preventDefault();
        }
        //f3 - Có giấy chuyển viện
        else if (event.keyCode == 114 && event.ctrlKey) {
            //console.log("Ok");
            this.tiepNhanBenhNhan.DuocChuyenVien = true;
            event.preventDefault();
        }
        //f5 - Có giấy miễn cùng chi trả
        else if (event.keyCode == 116 && event.ctrlKey) {
            //console.log("Ok");
            this.tiepNhanBenhNhan.BHYTDuocMienCungChiTra = true;
            event.preventDefault();
        }
        //f6 - Có miễn giảm
        else if (event.keyCode == 117 && event.ctrlKey) {
            //console.log("f6 Ok");
            //this.CoUuDaiChange(true);
            this.tiepNhanBenhNhan.DuocUuDai = true;
            event.preventDefault();
        }
        //f7 - Có BHTN
        else if (event.keyCode == 118 && event.ctrlKey) {
            //console.log("Ok");
            this.tiepNhanBenhNhan.CoBHTN = true;
            event.preventDefault();
        }
        //f8 - Chỉ định dịch vụ
        else if (event.keyCode == 119 && event.ctrlKey) {
            this.tabStrip.selectTab(0);

            this.onTabSelect(0);
            event.preventDefault();
        }
        else if (event.keyCode == 120 && event.ctrlKey) {
            this.tabStrip.selectTab(1);

            this.onTabSelect(1);
            event.preventDefault();
        }
        else if (event.keyCode == 121 && event.ctrlKey) {
            this.tabStrip.selectTab(2);

            this.onTabSelect(2);
            event.preventDefault();
        }
        else if (event.keyCode == 122 && event.ctrlKey) {
            this.tabStrip.selectTab(3);

            this.onTabSelect(3);
            event.preventDefault();
        }
        else if (event.keyCode == 123 && event.ctrlKey) {
            this.tabStrip.selectTab(4);

            this.onTabSelect(4);
            event.preventDefault();
        }
        else if (event.keyCode == 83 && event.ctrlKey) {
            this.luuPhieu();
            event.preventDefault();
        }
        // else if(event.keyCode == 83 && event.ctrlKey && event.shiftKey){
        //     //this.luuVaInPhieu();
        //     event.preventDefault();
        // }
        else if (event.keyCode == 27) {
            this.huy();
            event.preventDefault();
        }
    }

    QuetMaQRCodeClick() {
        let elementBarcode: HTMLElement = document.getElementById('barcodeActive') as HTMLElement;
        if (elementBarcode != undefined) {
            elementBarcode.click();
            this.isScanF1 = true;
        }
    }

    //#region clear data

    setDefaultData() {
        this.isDungTuyenDisplay = null;
        this.isDungTuyen = false;
        this.isSearchQRCodeEnable = true;
        this.soTuoiDisplay = null;
        this.hoTenDaTimKiem = null;
        this.maSoTheDaTimKiem = null;
        this.ngaySinhDaTimKiem = null;
        this.soPhanTramHuongBHYT = null;

        this.totalBenhNhan = 0;
        this.lstBenhNhan = new Array<TimKiemBenhNhanGridVo>();
        this.modelTimKiemBenhNhan = new TimKiemBenhNhanGridVo();

        this.isOutOfDate = false;
    }

    clearThongTinTaiKhoanBenhNhan() {
        this.thongTinTaiKhoanBenhNhan = null;
    }

    clearThemTaiLieu() {
        this.themTaiLieu = new ThemTaiLieuDinhKem();
    }

    clearData() {
        let soTheBHYT = this.tiepNhanBenhNhan.BHYTMaSoThe;
        let hoVaTen = this.tiepNhanBenhNhan.HoTen;
        let ngaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
        //this.ngOnInit();
        this.clearDataUpdateThongTinBHYT();

        this.tiepNhanBenhNhan.BHYTMaSoThe = soTheBHYT;
        this.tiepNhanBenhNhan.HoTen = hoVaTen;
        this.tiepNhanBenhNhan.NgayThangNamSinh = ngaySinh;
    }


    //#endregion clear data


    congTyBaoHiemChange($event: number) {
        this.validationErrors = null;

        this.apiService.post<ThemBaoHiemTuNhan>("TiepNhanBenhNhan/GetThongTinBHTN/?congTyBaoHiemTuNhanId=" + $event).subscribe(
            resultData => {
                if (resultData != undefined && resultData != null) {
                    this.themBaoHiemTuNhanModel.DiaChi = resultData.DiaChi;
                    this.themBaoHiemTuNhanModel.SoDienThoai = resultData.SoDienThoai;
                }
                else {
                    this.themBaoHiemTuNhanModel.DiaChi = null;
                    this.themBaoHiemTuNhanModel.SoDienThoai = null;
                }
            },
            (err: any) => {
                this.themBaoHiemTuNhanModel.DiaChi = null;
                this.themBaoHiemTuNhanModel.SoDienThoai = null;
            });
    }

    setThongTinTaiKhoanBenhNhan(idBenhNhan: number,idYeuCauTiepNhan:number) {
        this.apiService.post<any>("TiepNhanBenhNhan/GetThongTinTaiKhoanBenhNhan?idBenhNhan=" + idBenhNhan+"&idYeuCauTiepNhan="+idYeuCauTiepNhan).subscribe(
            resultData => {
                this.thongTinTaiKhoanBenhNhan = resultData;

            },
            () => {
                //return null;
                //console.log("error")
            });
    }

    getBenhNhan(id: number) {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
        this.apiService.post<TiepNhanBenhNhanViewModel>("TiepNhanBenhNhan/GetYeuCauKhamBenh?id=" + id).subscribe(
            resultData => {
                if (resultData == null || resultData == undefined) return;
                this.tiepNhanBenhNhan = resultData;
                // console.log("getBenhNhan", this.tiepNhanBenhNhan);
                this.benhNhanIdPopup = this.tiepNhanBenhNhan.BenhNhanId;
                this.coYeuCauGoiDichVu = this.tiepNhanBenhNhan.CoYeuCauGoiDichVu;

                this.benhNhanId = this.tiepNhanBenhNhan.BenhNhanId;

                //
                this.getDanhSachGoiBenhNhan(this.benhNhanId);
                //

                this.setThongTinTaiKhoanBenhNhan(this.tiepNhanBenhNhan.BenhNhanId,id);

                if (this.tiepNhanBenhNhan.TuNhap != true && this.tiepNhanBenhNhan.CoBHYT) {
                    this.isDisableNhapTayForUpdate = true;
                }

                this.lichSuKCB = this.tiepNhanBenhNhan.GridLichSuKCB;
                this.lichSuKiemTraTheBHYTGrid = this.tiepNhanBenhNhan.GridLichSuKiemTraTheBHYT;

                if (resultData.LoaiVoucher == null) {
                    this.loaiVoucher = 0;
                }
                else {
                    this.loaiVoucher = resultData.LoaiVoucher;
                }
                // thong tin BHYT
                if (resultData.BHYTNgayHieuLuc != null && resultData.BHYTNgayHieuLuc != undefined) {
                    let ngayCoHieuLuc = new Date(resultData.BHYTNgayHieuLuc);

                    this.tiepNhanBenhNhan.NgayCoHieuLucDisplay = CommonService.formatDate(ngayCoHieuLuc, "dd/mm/yyyy");
                    //console.log("getBenhNhan = ", ngayCoHieuLuc, this.tiepNhanBenhNhan.NgayCoHieuLucDisplay);

                }
                if (resultData.BHYTNgayHetHan != null && resultData.BHYTNgayHetHan != undefined) {
                    let ngayHetHan = new Date(resultData.BHYTNgayHetHan);
                    this.tiepNhanBenhNhan.NgayHetHieuLucDisplay = CommonService.formatDate(ngayHetHan, "dd/mm/yyyy");
                }
                if (resultData.BHYTNgayDu5Nam != null && resultData.BHYTNgayDu5Nam != undefined) {
                    let ngayDu5Nam = new Date(resultData.BHYTNgayDu5Nam);
                    this.tiepNhanBenhNhan.NgayDu5NamDisplay = CommonService.formatDate(ngayDu5Nam, "dd/mm/yyyy");
                }
                if (resultData.BHYTMaDKBD != null && resultData.BHYTMaDKBD != undefined) {
                    //this.setSoPhanTramHuongBHYT(resultData.BHYTMaSoThe)
                    //this.setTuyenKhamBenh(resultData.BHYTMaDKBD);
                    this.setSoPhanTramHuongBHYTForThemChiDinh();

                    this.apiService.post<string>("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + resultData.BHYTMaDKBD).subscribe(
                        resultData => {
                            this.tiepNhanBenhNhan.NoiDangKyBHYT = resultData;

                        },
                        () => {
                            //return null;
                            //console.log("error")
                        });
                }


                // BHTN
                //this.lstBHTN = resultData.BaoHiemTuNhans;
                if (resultData.BaoHiemTuNhans != undefined && resultData.BaoHiemTuNhans != null) {
                    resultData.BaoHiemTuNhans.forEach(item => {
                        let model = new ThemBaoHiemTuNhanGridVo();
                        model.Id = item.Id;
                        model.CongTyBaoHiemTuNhanId = item.BHTNCongTyBaoHiemId;
                        model.CongTyDisplay = item.CongTyDisplay;
                        model.DiaChi = item.BHTNDiaChi;
                        model.MaSoThe = item.BHTNMaSoThe;
                        model.SoDienThoai = item.BHTNSoDienThoai;


                        model.NgayHetHan = item.BHTNNgayHetHan;
                        if (item.BHTNNgayHetHan != null) {
                            let dateNgayHetHan = new Date(model.NgayHetHan);
                            model.NgayHetHanDisplay = CommonService.formatDate(dateNgayHetHan, "dd/mm/yyyy");
                        }
                        else {
                            model.NgayHetHanDisplay = null;
                        }

                        model.NgayHieuLuc = item.BHTNNgayHieuLuc;
                        if (item.BHTNNgayHieuLuc != null) {
                            let dateNgayHieuLuc = new Date(model.NgayHieuLuc);
                            model.NgayHieuLucDisplay = CommonService.formatDate(dateNgayHieuLuc, "dd/mm/yyyy");
                        }
                        else {
                            model.NgayHieuLucDisplay = null;
                        }

                        this.lstBHTN.push(model);
                    });

                    this.setValueForGridBHTN();
                }
                // BHTN

                this.isHaveBHYTUpdated = resultData.CoBHYT
                    //console.log("getBenhNhan", this.tiepNhanBenhNhan)
                    ;

                this.tiepNhanBenhNhan.BenhNhan.GioiTinhDisplay = resultData.BenhNhan.GioiTinh == 1 ? "Nam" : "Nữ";

                //let ngayThangNamSinh = new Date();
                //ngayThangNamSinh.setDate(resultData.BenhNhan.NgaySinh);
                //ngayThangNamSinh.setMonth(resultData.BenhNhan.ThangSinh);
                //ngayThangNamSinh.setFullYear(resultData.BenhNhan.NamSinh, resultData.BenhNhan.ThangSinh, resultData.BenhNhan.NgaySinh);
                //this.tiepNhanBenhNhan.BenhNhan.NgayThangNamSinh = ngayThangNamSinh;

                if (resultData.BenhNhan.NamSinh != null && resultData.BenhNhan.ThangSinh != null && resultData.BenhNhan.NgaySinh != null) {
                    let ngayThangNamSinh = null;
                    if(resultData.BenhNhan.NgayThangNamSinh != undefined && resultData.BenhNhan.NgayThangNamSinh != null)
                    {
                        ngayThangNamSinh = new Date(resultData.BenhNhan.NgayThangNamSinh);
                    }
                    else
                    {
                        let thang = (resultData.BenhNhan.ThangSinh == null || resultData.BenhNhan.ThangSinh == 0) ? 1 : resultData.BenhNhan.ThangSinh;
                        let ngay = (resultData.BenhNhan.NgaySinh == null || resultData.BenhNhan.NgaySinh == 0) ? 1 : resultData.BenhNhan.NgaySinh;
                        ngayThangNamSinh = new Date(resultData.BenhNhan.NamSinh, thang, ngay);
                    }
                    
                    this.getAge(ngayThangNamSinh, new Date);

                }
                //console.log("------------: ", this.tiepNhanBenhNhan)
                if (this.tiepNhanBenhNhan.BHYTMucHuong == null) {
                    this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                    this.isHaveBHYTForTheFistLoad = false;
                }
                if (this.tiepNhanBenhNhan.IsCheckedBHYT) {
                    let dateToCheck = new Date(this.tiepNhanBenhNhan.BHYTNgayHetHan);
                    //console.log("dateToCheck ", this.tiepNhanBenhNhan.BHYTNgayHetHan, dateToCheck)
                    this.checkOutOfDateBHYT(dateToCheck);
                }
                else {
                    this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;
                }

                //
                this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
                //Chi dinh dich vu
                this.setDataForDichVuKhac();
                this.setDataForTaiLieuDinhKem();
                this.refreshGrid();
                this.dialog.closeAll();

                this.cloneTiepNhanBenhNhan();
            },
            () => {
                this.dialog.closeAll();
                //console.log("error")
            });
    }

    //#region grid
    public aggregatesKhamBenh: any[] = [{ field: 'ThanhTien', aggregate: 'sum' }
        , { field: 'BHYTThanhToan', aggregate: 'sum' }
        , { field: 'BnThanhToan', aggregate: 'sum' }];

    public stateKhamBenh: State = {
        skip: 0,
        take: 200,
        group: [{ field: 'Nhom', aggregates: this.aggregatesKhamBenh }]
    };

    public totalKhac(field: any, goiCoChietkhauId: any = 0) {
        //.filter(o => o.GoiCoChietKhauId == goiCoChietkhauId)
        //console.log("totalKhac = ", goiCoChietkhauId);
        switch (field) {
            case 'TongThanhTien':
                return (this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.ThanhTien, 0)) + (this.tiepNhanBenhNhan.YeuCauKhacGrid
                        //.filter(o => o.IsGoiCoChietKhau == true)
                        .reduce((sum, item) => sum + item.ThanhTien, 0));

            case 'ThanhTien':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'ThanhTienGoiChietKhau':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.GoiCoChietKhauId == goiCoChietkhauId)
                    .reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'TongThanhTienGoiChietKhau':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == true)
                    .reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'BHYTThanhToan':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.BHYTThanhToan, 0);
            case 'SoTienMG':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.SoTienMG, 0);
            case 'BnThanhToan':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.BnThanhToan, 0);

            case 'TongBnThanhToan':
                return (this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.BnThanhToan, 0)) + (this.tiepNhanBenhNhan.YeuCauKhacGrid
                        //.filter(o => o.IsGoiCoChietKhau == true)
                        .reduce((sum, item) => sum + item.ThanhTienTrongGoi, 0));

            case 'ThanhTienTrongGoi':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.GoiCoChietKhauId == goiCoChietkhauId)
                    .reduce((sum, item) => sum + item.ThanhTienTrongGoi, 0);
            case 'TongThanhTienTrongGoi':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == true)
                    .reduce((sum, item) => sum + item.ThanhTienTrongGoi, 0);

            case 'TongThanhTienGoi':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    .reduce((sum, item) => sum + item.ThanhTien, 0);

            case 'TongThanhTienBNTra':
                return (this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.BnThanhToan, 0)) + this.tiepNhanBenhNhan.YeuCauKhacGrid
                        //.filter(o => o.IsGoiCoChietKhau == true)
                        .reduce((sum, item) => sum + item.ThanhTienTrongGoi, 0);
        }
    };


    //#endregion grid

    getSoTienBHYTSeThanhToan() {
        this.apiService.get<any>("TiepNhanBenhNhan/GetSoTienBHYTSeThanhToan").subscribe(
            resultData => {
                this.soTienBHYTSeThanhToan = resultData;
                //console.log("getSoTienBHYTSeThanhToan = ", this.soTienBHYTSeThanhToan);
            }
        )
    }
    getListTenTrieuChungKham() {
        this.apiService.get<Array<string>>("TiepNhanBenhNhan/GetListTenTrieuChungKhamAsync").subscribe(
            resultData => {
                this.TrieuChungTiepNhanResource = resultData;
            }
        )
    }

    refreshGrid() {

        if (!(this.cdRef as ViewRef).destroyed) {
            this.cdRef.detectChanges();
        }

        if (this.gridChildBHTN != undefined) {
            this.gridChildBHTN.setDataSource();
        }

        if (this.gridChildCoChietKhau != undefined) {
            this.gridChildCoChietKhau.setDataSource();
        }

        //console.log("grid ko chiet khau ", this.gridChildKhongChietKhau)

        if (this.gridChildKhongChietKhau != undefined) {
            this.gridChildKhongChietKhau.setDataSource();
        }

        if (this.gridTaiLieuDinhKem != undefined) {
            this.gridTaiLieuDinhKem.setDataSource();
        }

        //this.cdRef.detectChanges();
    }

    //#region BHTN


    setValueForGridBHTN() {
        //console.log(this.lstBHTN);
        let index = 1;
        this.lstBHTN.forEach(obj => {
            obj.STT = index;
            index = index + 1;
        });

        this.updateBHTN();
        this.gridDataSourceBHTN = {
            data: this.lstBHTN,
            total: this.lstBHTN.length
        }
    }
    updateBHTN() {
        this.tiepNhanBenhNhan.BaoHiemTuNhans = new Array<BaoHiemTuNhanViewModel>();
        this.lstBHTN.forEach(obj => {
            let model = new BaoHiemTuNhanViewModel();
            //model.YeuCauTiepNhanId = obj.YeuCauTiepNhanId;
            model.Id = obj.Id;
            model.BHTNCongTyBaoHiemId = obj.CongTyBaoHiemTuNhanId;
            model.BHTNDiaChi = obj.DiaChi;
            model.BHTNMaSoThe = obj.MaSoThe;
            model.BHTNNgayHetHan = obj.NgayHetHan;
            model.BHTNNgayHieuLuc = obj.NgayHieuLuc;
            model.BHTNSoDienThoai = obj.SoDienThoai;
            this.tiepNhanBenhNhan.BaoHiemTuNhans.push(model);
        });
        //console.log("updateBHTN = ", this.tiepNhanBenhNhan.BaoHiemTuNhans);
    }

    huyBHTN() {
        this.isUpdateGrid = false;
        this.clearThemBHTN();
    }

    clearThemBHTN() {
        this.themBaoHiemTuNhanModel = new ThemBaoHiemTuNhan();
    }

    ThemBHTN() {
        this.validationErrors = null;
        let isValid = this.checkValidAddBHTN(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
        if (isValid == false) {
            this.notificationService.showError(TiepNhanBenhNhanMessage.MessageThemBHTN);
            return;
        }
        this.apiService.post<ThemBaoHiemTuNhanGridVo>("TiepNhanBenhNhan/ThemThongTinBHTN", this.themBaoHiemTuNhanModel).subscribe(
            resultData => {
                if (resultData != undefined && resultData != null) {
                    this.lstBHTN.push(resultData);
                    this.setValueForGridBHTN();
                    this.clearThemBHTN();
                }
                else {
                }
            },
            (err: any) => {
                // self.validationErrors = err.ValidationErrors;
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    //self.validationErrors.push({ "Message": err.Message });
                    this.notificationService.showError(err.Message);
                }

            });
    }

    updateGridBHTN(dataItem: ThemBaoHiemTuNhanGridVo) {
        console.log("updateGridBHTN");
        this.validationErrors = null;
        this.apiService.post<any>("TiepNhanBenhNhan/IsHaveCongNo/?yeuCauTiepNhanId=" + this.id
            + "&congTyId=" + dataItem.CongTyBaoHiemTuNhanId).subscribe(
                resultData => {
                    if (resultData != null && resultData != undefined && resultData == false) {
                        this.isUpdateGrid = true;

                        //set
                        this.themBaoHiemTuNhanModel.Id = dataItem.Id;
                        this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId = dataItem.CongTyBaoHiemTuNhanId;
                        this.themBaoHiemTuNhanModel.DiaChi = dataItem.DiaChi;
                        this.themBaoHiemTuNhanModel.MaSoThe = dataItem.MaSoThe;
                        this.themBaoHiemTuNhanModel.NgayHetHan = dataItem.NgayHetHan;
                        this.themBaoHiemTuNhanModel.NgayHieuLuc = dataItem.NgayHieuLuc;
                        this.themBaoHiemTuNhanModel.SoDienThoai = dataItem.SoDienThoai;
                        //this.themBaoHiemTuNhanModel.STT = dataItem.STT; 
                        this.enableUpdateGird(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
                    }
                    else {
                        this.notificationService.showError(TiepNhanBenhNhanMessage.MessageBHTNCongNoCapNhat);
                    }
                },
                (err: any) => {
                    if (err != undefined && err.ValidationErrors != null) {
                        this.validationErrors = err.ValidationErrors;
                    }
                    else if (err != undefined && err.Errors == null) {
                        //self.validationErrors.push({ "Message": err.Message });
                        this.notificationService.showError(err.Message);
                    }
                });


    }

    SuaBHTN() {
        let index = this.lstBHTN.find(obj => obj.CongTyBaoHiemTuNhanId == this.isIdNeedUpdate);
        // this.lstBHTN.splice(this.lstBHTN.indexOf(index), 1);

        // let isValid = this.checkValidAddBHTN(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);

        if (this.isIdNeedUpdate != this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId) {
            let isValid = this.checkValidAddBHTN(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
            if (isValid == false) {
                this.disableUpdateGrid();
                return;
            };
        }

        this.validationErrors = null;

        //
        //this.lstBHTN[this.lstBHTN.indexOf(index)] = this.themBaoHiemTuNhanModel;
        this.lstBHTN.splice(this.lstBHTN.indexOf(index), 1)

        this.apiService.post<ThemBaoHiemTuNhanGridVo>("TiepNhanBenhNhan/ThemThongTinBHTN", this.themBaoHiemTuNhanModel).subscribe(
            resultData => {
                if (resultData != undefined && resultData != null) {
                    this.lstBHTN.push(resultData);
                    this.setValueForGridBHTN();
                    this.disableUpdateGrid();
                }
                else {
                }
            },
            (err: any) => {
                // self.validationErrors = err.ValidationErrors;
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    //self.validationErrors.push({ "Message": err.Message });
                    this.notificationService.showError(err.Message);
                }
            });

    }

    enableUpdateGird(id: number) {
        this.isUpdateGrid = true;
        this.isIdNeedUpdate = id;
    }

    disableUpdateGrid() {
        this.isUpdateGrid = false;
        this.isIdNeedUpdate = null;
        this.clearThemBHTN();
    }

    checkValidAddBHTN(id: number) {
        //console.log("checkValidAddBHTN = ", this.lstBHTN,id);
        let model = this.lstBHTN.find(obj => obj.CongTyBaoHiemTuNhanId == id);
        //console.log("checkValidAddBHTN = ", index);
        if (model != undefined) {
            return false;
        }
        return true;
    }

    //#endregion BHTN



    //#region chi dinh dich vu
    onTabSelect($event) {
        this.removeThemDichVuValue();
        this.removeThemGoiValue();
        if ($event != null && $event.index == 2 && this.under6yearsold) {
            this.cloneDiaChiNguoiGiamHo();
        }
        if(this.under6yearsold == false)
        {
            this.cloneDiaChiNguoiGiamHoLonHon6Tuoi();
        }
    }


    MaDichVuGoiSelectionChange($event) {
        //console.log("abc = ", $event);
        if ($event != null && $event != undefined) {
            if ($event.IsCoChietKhau) {
                this.isGoiCoChietKhau = true;
            }
            else {
                this.isGoiCoChietKhau = false;
            }
        }
        else {
            this.isGoiCoChietKhau = null;
        }
    }

    MaDichVuSelectionChange($event) {
        //console.log("abc = ", $event);
        //this.loaiTiepNhan = 1;
        this.themChiDinhDichVuModel.SoLuong = 1;
        if ($event != undefined && $event != null) {
            if ($event.Loai == "DVKT") {
                this.MaDichVuChange($event.KeyId, 4, true);
                this.loaiTiepNhan = 2;
            }
            else if ($event.Loai == "DV Giường") {
                this.MaDichVuChange($event.KeyId, 5);
                this.loaiTiepNhan = 3;
            }
            else {
                this.MaDichVuChange($event.KeyId);
                this.loaiTiepNhan = 1;
            }
        }
        else {
            this.themChiDinhDichVuModel.DonGia = null;
            this.themChiDinhDichVuModel.NoiThucHienId = null;
            this.setThanhTienForDichVuModel();
            this.loaiTiepNhan = 1;
        }
        //
        if ($event != null && $event != undefined) {
            this.SetEnableDuocHuongBHYT($event.KeyId, this.loaiTiepNhan);
        }

        this.cdRef.detectChanges();
        //this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
    }

    SetEnableDuocHuongBHYT(dichVuId: number, loai: number) {
        this.apiService.post<boolean>("TiepNhanBenhNhan/DuocHuongBHYT?dichVuId=" + dichVuId + "&loai=" + loai).subscribe(
            resultData => {
                if (resultData != null && resultData != undefined) {
                    this.enableDuocHuongBHYT = resultData;
                    // if(resultData == false){
                    //     this.themChiDinhDichVuModel.DuocHuongBHYT = false;
                    // }
                    // else{
                    //     //this.themChiDinhDichVuModel.DuocHuongBHYT = true;
                    // }
                    this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
                }
            },
            (err: any) => {
            });
    }


    MaDichVuChange($event: number, loaiDichVu: number = 0, isCheckValidDonGia: boolean = false) {
        //console.log("MaDichVuChange = ", $event);
        let urlDefault = "TiepNhanBenhNhan/GetDonGia";

        if (loaiDichVu == 4) {
            urlDefault = "TiepNhanBenhNhan/GetDonGiaKyThuat";
            // this.themChiDinhDichVuModel.LoaiGiaId = 1;
            this.themChiDinhDichVuModel.LoaiGiaId = 0;
        }
        else if (loaiDichVu == 5) {
            urlDefault = "TiepNhanBenhNhan/GetDonGiaGiuongBenh";
            this.themChiDinhDichVuModel.LoaiGiaId = 1;
        }

        let model = new GetDonGiaVo();
        if ($event != undefined && $event != null
            && (loaiDichVu == 4 || (this.themChiDinhDichVuModel.LoaiGiaId != null && this.themChiDinhDichVuModel.LoaiGiaId != undefined))) {
            //console.log($event);
            model.DichVuKhamBenhBenhVienId = $event;
            model.NhomGiaDichVuKhamBenhBenhVienId = this.themChiDinhDichVuModel.LoaiGiaId;
            model.IsCheckValidDonGia = isCheckValidDonGia;
            this.apiService.post<any>(urlDefault, model).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        if(loaiDichVu == 4)
                        {
                            this.themChiDinhDichVuModel.LoaiGiaId = resultData.NhomGiaDichVuKhamBenhBenhVienId;
                            this.themChiDinhDichVuModel.DonGia = resultData.DonGia;
                        }
                        else
                        {
                            this.themChiDinhDichVuModel.DonGia = resultData;
                        }
                        this.setThanhTienForDichVuModel();

                    }
                    else {
                        this.themChiDinhDichVuModel.DonGia = null;
                        this.setThanhTienForDichVuModel();

                    }
                },
                (err: ApiError) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
        }
        else {
            this.themChiDinhDichVuModel.DonGia = null;
            this.setThanhTienForDichVuModel();

        }


    }

    setThanhTienForDichVuModel() {
        if (this.themChiDinhDichVuModel.DonGia != undefined && this.themChiDinhDichVuModel.DonGia != null
            && this.themChiDinhDichVuModel.SoLuong != undefined && this.themChiDinhDichVuModel.SoLuong != null) {
            this.themChiDinhDichVuModel.ThanhTien = this.themChiDinhDichVuModel.DonGia * this.themChiDinhDichVuModel.SoLuong;
        }
        else {
            this.themChiDinhDichVuModel.ThanhTien = null;
        }
    }

    SoLuongChange($event: number) {
        if (this.themChiDinhDichVuModel.DonGia != undefined && this.themChiDinhDichVuModel.DonGia != null
            && $event != undefined && $event != null) {
            this.themChiDinhDichVuModel.ThanhTien = this.themChiDinhDichVuModel.DonGia * $event;
        }
        else {
            this.themChiDinhDichVuModel.ThanhTien = null;
        }
    }

    setDataForDichVuKhac() {
        if(this.tiepNhanBenhNhan.YeuCauKhacGrid != null)
        {
            this.apiService.get<DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham>("TiepNhanBenhNhan/GetSarsCoVs").subscribe(
                resultData => {
                    this.dichVuSarsCoVs = [];
                    this.dichVuSarsCoVs =resultData.Ids;
                    this.loaiBenhPham = resultData.LoaiMauXetNghiem
                    this.loaiBenhPhamText = resultData.LoaiMauXetNghiemText
                    if (this.tiepNhanBenhNhan.YeuCauKhacGrid.length == 0) {
                        this.showbuttonLuuVaInPhieuXetNghiem = false;
                    } else {
                        if (this.showbuttonLuuVaInPhieuXetNghiem == false) {
                            this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(element => {
                                this.showbuttonLuuVaInPhieuXetNghiem = this.dichVuSarsCoVs.includes(element.MaDichVuId);
                            });
                        }

                    }
                });
        }

        this.gridDataKhacCoChietKhauArray = [];
        if(this.tiepNhanBenhNhan.YeuCauKhacGrid.length != 0)
        {
            this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(element => {
                if(element.isCheckValueRowItemCuoiCung == true)
                {
                    element.isCheckRowItem = true;
                }
            });
        }
        this.gridDataKhacDisplay = {
            data: this.tiepNhanBenhNhan.YeuCauKhacGrid
            //.filter(obj => obj.IsGoiCoChietKhau == false || obj.IsGoiCoChietKhau == null)
            ,
            total: this.tiepNhanBenhNhan.YeuCauKhacGrid
                //.filter(obj => obj.IsGoiCoChietKhau == false || obj.IsGoiCoChietKhau == null)
                .length
        };
        if(this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(s=>s.isCheckRowItem == true).length == this.tiepNhanBenhNhan.YeuCauKhacGrid.length)
        {
            this.checkAll =true; 
        }
        else{
            this.checkAll =false;   
        }
       
        if(this.tiepNhanBenhNhan.YeuCauKhacGrid.length != 0)
        {
            this.showInChiDinh = true;
        }
        //this.cdRef.detectChanges();
        //console.log("setDataForDichVuKhac = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
        // let arrayNhomGoiCoChietKhau: string[] = [];
        // this.gridDataKhacCoChietKhauDisplay = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(obj => obj.IsGoiCoChietKhau == true);
        // this.gridDataKhacCoChietKhauDisplay.forEach(e => {
        //     if (!arrayNhomGoiCoChietKhau.some(o => o == e.TenGoiChietKhau)) {
        //         arrayNhomGoiCoChietKhau.push(e.TenGoiChietKhau);
        //     }
        // });

        // arrayNhomGoiCoChietKhau.forEach(e => {
        //     let resultArray: ChiDinhDichVuGridVo[] = [];
        //     this.gridDataKhacCoChietKhauDisplay.forEach(o => {
        //         //let result = new ChiDinhDichVuGridVo();
        //         if (e == o.TenGoiChietKhau) {
        //             //result = o;
        //             resultArray.push(o);
        //         }
        //     });

        //     this.gridDataKhacCoChietKhauArray.push(process(resultArray, this.stateKhamBenh));
        // });

        //console.log("setDataForDichVuKhac = ", this.gridDataKhacCoChietKhauArray, this.gridDataKhacDisplay);
        this.setSoLuongChoGridKhac();
    }

    setSoLuongChoGridKhac() {
        this.soLuongGoiCoChietKhau = this.gridDataKhacCoChietKhauArray.length - 1;
    }

    themChiDinhDichVuGoiNew() {
        if (!this.checkValidateUpdateThongTinBHYT()) {
            this.notificationService.showError(TiepNhanBenhNhanMessage.MessageBHYTThayDoi);
            return;
        }
        if (this.isGoiCoChietKhau) {
            this.themChiDinhDichVuKhacKhamBenh(2);
        }
        else if (this.isGoiCoChietKhau == false || this.isGoiCoChietKhau == null) {
            this.themChiDinhDichVuKhacKhamBenh(1);
        }
    }

    themChiDinhDichVuNew() {
        if (!this.checkValidateUpdateThongTinBHYT()) {
            this.notificationService.showError(TiepNhanBenhNhanMessage.MessageBHYTThayDoi);
            return;
        }
        //console.log("themChiDinhDichVuNew = ", this.loaiTiepNhan);
        // if (this.loaiTiepNhan == 1) {
        //     this.themChiDinhDichVuKhacKhamBenh(3);
        // }
        // else if (this.loaiTiepNhan == 2) {
        //     this.themChiDinhDichVuKhacKhamBenh(4);
        // }
        // else {
        //     this.themChiDinhDichVuKhacKhamBenh(5);
        // }

        //start update goi
        let model = new CheckDuSoLuongTonTrongGoi();
        model.DichVuThem = this.themChiDinhDichVuModel;
        model.DichVuThem.benhNhanId = this.tiepNhanBenhNhan.BenhNhanId;
        if (this.loaiTiepNhan == 1) {
            //1: KB, 2: DVKT, 3: DVG
            model.DichVuThem.TenNhomDichVu = 'DỊCH VỤ KHÁM BỆNH'
        }
        else if (this.loaiTiepNhan == 2) {
            model.DichVuThem.TenNhomDichVu = 'DỊCH VỤ KỸ THUẬT'
        }
        else {
            model.DichVuThem.TenNhomDichVu = 'DỊCH VỤ GIƯỜNG'
        }


        //model.DanhSachDichVuChonTrongLanPopup = this.danhSachDichVuDaChonTrongLanPopup;
        model.DanhSachDichVuChonTrongLanPopup = new Array<DanhSachDichVuChonTrongLanPopup>();

        let self = this;
        
        let itemExist = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.MaDichVuId == model.DichVuThem.MaDichVuId && o.Nhom == model.DichVuThem.TenNhomDichVu);

        if (itemExist.length > 0) {
            self.dialog.open(PopupDichVuCheckTrungUpdateComponent, {
                disableClose: false,
                width: '400px',
            }).afterClosed().subscribe(result => {
                if (result == true) {
                    this.themDichVu(model);
                }
                else {

                }
            });
        }
        else{
            this.themDichVu(model);
        }

            //end update goi
    }

    themDichVu(model){
        let self = this;
        let dataRes = new DichVuTrongGoiKhiThem();

        // cập nhật ngày 02/06/2021: ko kiểm tra dịch vụ có trong gói nữa
        if (this.loaiTiepNhan == 1) {
            this.themChiDinhDichVuKhacKhamBenh(3);
        }
        else if (this.loaiTiepNhan == 2) {
            this.themChiDinhDichVuKhacKhamBenh(4);
        }
        else {
            this.themChiDinhDichVuKhacKhamBenh(5);
        }

        // this.apiService.post<DichVuTrongGoiKhiThem>("TiepNhanBenhNhan/CheckDuSoLuongTonTrongGoi", model).subscribe(
        //     resultData => {
        //         if (resultData != undefined && resultData != null) {
        //             //console.log("DichVuTrongGoiKhiThem = ", resultData);
        //             dataRes = resultData;
        //             this.dialog.open(ConfirmComponent, {
        //                 disableClose: false,
        //                 width: '400px',
        //                 data: { Title: "Xác nhận", Message: CommonService.format(TiepNhanBenhNhanMessage.MessageConfirmThemVaoGoi, [resultData.TenDichVu, resultData.TenChuongTrinh, self.tiepNhanBenhNhan.HoTen]) }
        //             }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        //                 if (result == "Yes") {
        //                     //
        //                     self.danhSachDichVuGoiDaChon = new Array<ThemChiDinhDichVu>();
                            
        //                     let item = new ThemChiDinhDichVu();
        //                     item.LaGoi = true;
        //                     item.TenNhomDichVu = model.DichVuThem.TenNhomDichVu;
        //                     item.MaDichVuId = model.DichVuThem.MaDichVuId;
        //                     item.SoLuong = model.DichVuThem.SoLuong;
        //                     item.chuongTrinhGoiDichVuId = dataRes.ChuongTrinhGoiDichVuId;
        //                     //cheat cho lẹ
        //                     item.DuocHuongBHYT = model.DichVuThem.DuocHuongBHYT;
        //                     item.YeuCauGoiDichVuId = dataRes.YeuCauGoiDichVuId;
        //                     item.ThuocGoi = dataRes.TenChuongTrinh;

        //                     item.yeuCauTiepNhanId = self.id;
        //                     item.benhNhanId = self.tiepNhanBenhNhan.BenhNhanId;

        //                     //them noi thuc hien khac voi add view
        //                     item.NoiThucHienId = model.DichVuThem.NoiThucHienId;

        //                     self.danhSachDichVuGoiDaChon.push(item);
        //                     self.addOneDvGoi(self.danhSachDichVuGoiDaChon);
        //                     self.addDanhSachTongCongFromDanhSachDaChon(self.danhSachDichVuGoiDaChon);
        //                     //self.router.navigate(['tiep-nhan-trong-ngay/']);
        //                     //self.router.navigateByUrl('danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/' + this.idYeuCauTiepNhan + "?loaiThanhToan=" + 1 + "&yctn=true");
        //                 }
        //                 else {
        //                     //self.ngOnInit();
        //                     if (this.loaiTiepNhan == 1) {
        //                         this.themChiDinhDichVuKhacKhamBenh(3);
        //                     }
        //                     else if (this.loaiTiepNhan == 2) {
        //                         this.themChiDinhDichVuKhacKhamBenh(4);
        //                     }
        //                     else {
        //                         this.themChiDinhDichVuKhacKhamBenh(5);
        //                     }
        //                 }
        //             });
        //         }
        //         else {
        //             if (this.loaiTiepNhan == 1) {
        //                 this.themChiDinhDichVuKhacKhamBenh(3);
        //             }
        //             else if (this.loaiTiepNhan == 2) {
        //                 this.themChiDinhDichVuKhacKhamBenh(4);
        //             }
        //             else {
        //                 this.themChiDinhDichVuKhacKhamBenh(5);
        //             }
        //         }
        //     },
        //     (err: any) => {
        //         if (err != undefined && err.ValidationErrors != null) {
        //             this.validationErrors = err.ValidationErrors;
        //         }
        //         else if (err != undefined && err.Errors == null) {
        //             this.notificationService.showError(err.Message);
        //         }
        //     });
        
    }

    addOneDvGoi(lstModelDichVu: ThemChiDinhDichVu[]) {
        let modelCheck = new CheckDuSoLuongTonTrongGoiListDichVu();
        modelCheck.LstDichVuThem = lstModelDichVu;

        
       


        let model = new modelUpdateView();
        model.Data = lstModelDichVu;
        model.YeuCauTiepNhanId = this.id;
        model.BenhNhanid = this.tiepNhanBenhNhan.BenhNhanId;
        model.MucHuongBHYT = this.tiepNhanBenhNhan.BHYTMucHuong;

        

        this.apiService.post<any>("TiepNhanBenhNhan/CheckDuSoLuongTonTrongGoiLstDichVu", modelCheck).subscribe(
            resultData => {
                if (resultData != undefined && resultData != null && resultData) {
                    //add goi
                    this.apiService.post<any>("TiepNhanBenhNhan/ThemDichVuFromGoiUpdateView", model).subscribe(
                        resultData => {
                            //this.dialogRef.close(resultData);
                            if (resultData != null && resultData != undefined) {
                                this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                                this.setDataForDichVuKhac();
                                this.refreshGrid();
                                this.removeThemDichVuValue();
                                this.removeThemGoiValue();
                                this.getDanhSachGoiBenhNhan(this.tiepNhanBenhNhan.BenhNhanId);
                            }
                        },
                        (err: any) => {
                            if (err != undefined && err.ValidationErrors != null) {
                                this.validationErrors = err.ValidationErrors;
                            }
                            else if (err != undefined && err.Errors == null) {
                                this.notificationService.showError(err.Message);
                            }
                        });
                }
                else {
                    //ex
                    this.notificationService.showError(TiepNhanBenhNhanMessage.MessageErrorDVOnGoi);
                }
            },
            (err: any) => {
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    this.notificationService.showError(err.Message);
                }
            });

    }

    addDanhSachTongCongFromDanhSachDaChon(data: Array<ThemChiDinhDichVu>) {
        data.forEach(o => {
            let item = new DanhSachDichVuChonTrongLanPopup();
            item.TenNhomDichVu = o.TenNhomDichVu;
            item.DichVuId = o.MaDichVuId;
            item.SoLuongDungLanNay = o.SoLuong;
            item.ChuongTrinhGoiDichVuId = o.chuongTrinhGoiDichVuId;
            item.BenhNhanId = this.tiepNhanBenhNhan.BenhNhanId;
            item.YeuCauGoiDichVuId = o.YeuCauGoiDichVuId;
            item.ThuocGoi = o.ThuocGoi;
            this.danhSachDichVuDaChonTrongLanPopup.push(item);
        })
    }

    checkValidateUpdateThongTinBHYT() {
        if (this.tiepNhanBenhNhan.CoBHYT != this.tiepNhanBenhNhanClone.CoBHYT
            || this.tiepNhanBenhNhan.TuNhap != this.tiepNhanBenhNhanClone.TuNhap
            || this.tiepNhanBenhNhan.MaDKBD != this.tiepNhanBenhNhanClone.MaDKBD
            || this.tiepNhanBenhNhan.BHYTMucHuong != this.tiepNhanBenhNhanClone.BHYTMucHuong
            || this.tiepNhanBenhNhan.BHYTDiaChi != this.tiepNhanBenhNhanClone.BHYTDiaChi
            || this.tiepNhanBenhNhan.LyDoVaoVien != this.tiepNhanBenhNhanClone.LyDoVaoVien
            || this.tiepNhanBenhNhan.BHYTNgayHieuLuc != this.tiepNhanBenhNhanClone.BHYTNgayHieuLuc
            || this.tiepNhanBenhNhan.BHYTNgayHetHan != this.tiepNhanBenhNhanClone.BHYTNgayHetHan
            || this.tiepNhanBenhNhan.BHYTNgayDu5Nam != this.tiepNhanBenhNhanClone.BHYTNgayDu5Nam) {
            return false;
        }
        return true;
    }

    checkValidAddGoiCoChietKhau(id: number) {
        //console.log("checkValidAddGoiCoChietKhau = ", this.tiepNhanBenhNhan.YeuCauKhacGrid, this.loaiTiepNhan, id);
        let model = this.tiepNhanBenhNhan.YeuCauKhacGrid
            //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
            .find(obj => obj.GoiCoChietKhauId == id);
        //console.log("checkValidAddChiDinhDichVuKhac = ", model, nhom);
        if (model != undefined) {
            return false;
        }
        return true;
    }

    themChiDinhDichVuKhacKhamBenh(loaiDichVuKhac: number, lstDataGoi: Array<ThemChiDinhDichVu> = null) {

        //bỏ check trùng 29/10/2020 Tuan said: "e sửa lại ko cần check trùng luôn : 2:04PM"
        // if (loaiDichVuKhac == 1 || loaiDichVuKhac == 2) {
        //     let isValid = this.checkValidAddGoiCoChietKhau(this.themChiDinhGoiModel.MaDichVuGoiId);
        //     //console.log("isValid = ", isValid, this.themChiDinhGoiModel);
        //     if (isValid == false) {
        //         this.notificationService.showError(TiepNhanBenhNhanMessage.MessageGoiTonTai);
        //         return;
        //     };
        // }
        // else {
        //     let isValid = this.checkValidAddChiDinhDichVuKhac(this.themChiDinhDichVuModel.MaDichVuId);
        //     if (isValid == false && loaiDichVuKhac != 1 && loaiDichVuKhac != 2) {
        //         this.notificationService.showError(TiepNhanBenhNhanMessage.MessageDichVuTonTai);
        //         return;
        //     };
        // }
        this.showbuttonLuuVaInPhieuXetNghiem = this.dichVuSarsCoVs.includes(this.themChiDinhDichVuModel.MaDichVuId);
        if(this.showbuttonLuuVaInPhieuXetNghiem == true)
        {
            this.dialog
            .open(XnCovidPopupComponent, {
                width: "600px",
                data: { LoaiMauXetNghiem:this.loaiBenhPham,LoaiMauXetNghiemText:this.loaiBenhPhamText}
            })
            .afterClosed()
            .subscribe((result) => {
                if (result != undefined) {
                     this.tiepNhanBenhNhan.BieuHienLamSang = result.BieuHienLamSang;
                     this.tiepNhanBenhNhan.DichTeSarsCoV2 = result.DichTeSarsCoV2;
                }

            });
        }




        let self = this;

        this.validationErrors = null;

        this.themChiDinhDichVuModel.yeuCauTiepNhanId = this.id;
        
        // xử lý list id check trước đó => sau mỗi lần thêm grid refesh những giá trị item check trước đó sẻ mất
        if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
            let gridData = this.gridInChiDinh.getAllDataFromDatasource();
            gridData.forEach(elements => {
                // this.listChonDichVuChiDinh.forEach(lstChiDinh => {
                //     if (lstChiDinh.dichVuChiDinhId == elements.Id && lstChiDinh.nhomChiDinhId == elements.NhomId && elements) {
                //         let obj = {
                //             Id: elements.Id,
                //             NhomId: elements.NhomId
                //         };
                //         this.listChonDichVuChiDinhReLoad.push(obj);
                //     }
                // });
                if(elements.isCheckRowItem == true)
                {
                        let obj = {
                            Id: elements.Id,
                            NhomId: elements.NhomId
                        };
                        this.listChonDichVuChiDinhReLoad.push(obj);
                }
            });
        }
        this.themChiDinhDichVuModel.ListDichVuCheckTruocDos = this.listChonDichVuChiDinhReLoad;
       
        let urlDefault = "TiepNhanBenhNhan/ThemDichVuForUpdateView";
        if (loaiDichVuKhac == 4) {
            urlDefault = "TiepNhanBenhNhan/ThemDichVuKyThuatForUpdateView";
        }
        else if (loaiDichVuKhac == 5) {
            urlDefault = "TiepNhanBenhNhan/ThemDichVuGiuongForUpdateView";
        }
        //Goi new
        else if (loaiDichVuKhac == 6) {
            urlDefault = "TiepNhanBenhNhan/ThemDichVuTuGoiUpdateView";
        }
        else if (loaiDichVuKhac == 1) {
            urlDefault = "TiepNhanBenhNhan/ThemGoiKhongChietKhau";
            this.themChiDinhDichVuModel.LaGoi = true;
            this.themChiDinhGoiModel.LaGoi = true;
            this.themChiDinhDichVuModel.MaDichVuId = this.themChiDinhDichVuModel.MaDichVuGoiId;
            this.themChiDinhGoiModel.MaDichVuId = this.themChiDinhGoiModel.MaDichVuGoiId;

            //console.log("ThemGoiKhongChietKhau = ", this.duocHuongBHYT);
            this.themChiDinhGoiModel.DuocHuongBHYT = this.duocHuongBHYT;
        }
        else if (loaiDichVuKhac == 2) {
            urlDefault = "TiepNhanBenhNhan/ThemGoiCoChietKhau";
            this.themChiDinhDichVuModel.LaGoi = true;
            this.themChiDinhGoiModel.LaGoi = true;
            this.themChiDinhDichVuModel.MaDichVuId = this.themChiDinhDichVuModel.MaDichVuGoiId;
            this.themChiDinhGoiModel.MaDichVuId = this.themChiDinhGoiModel.MaDichVuGoiId;
        }
        if (loaiDichVuKhac == 6) {

        }
        else if (loaiDichVuKhac == 1 || loaiDichVuKhac == 2) {
            //console.log("themChiDinhDichVuKhacKhamBenh = ", loaiDichVuKhac, urlDefault);
            this.apiService.post<ChiDinhDichVuGridVo[]>(urlDefault, this.themChiDinhGoiModel).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        //console.log("----------- ",resultData);
                        // resultData.forEach(obj => {
                        //     obj.LoaiDichVuKhac = loaiDichVuKhac;
                        //     this.tiepNhanBenhNhan.YeuCauKhacGrid.push(obj);
                        //     this.setDataForDichVuKhac();
                        //     this.setGiaBHYT();
                        //     this.refreshGrid();
                        //     this.removeThemDichVuValue();

                        // });
                        //check validate
                        let added = true;
                        resultData.forEach(obj => {
                            if (loaiDichVuKhac == 2) {
                                let modelValid = this.tiepNhanBenhNhan.YeuCauKhacGrid
                                    .find(o => o.MaDichVuId == obj.MaDichVuId && o.Nhom == obj.Nhom);
                                if (modelValid != null && modelValid != undefined) {
                                    added = false;
                                }
                            }
                        });
                        if (!added) {
                            this.notificationService.showError(TiepNhanBenhNhanMessage.MessageDichVuTrongGoiTonTai);
                            return
                        };
                        //

                        let model = new AddGoiForUpdateView();
                        model.LstGrid = new Array<ChiDinhDichVuGridVo>();
                        model.YeuCauTiepNhanId = this.id;
                        model.LstGrid = resultData;
                        model.MucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;

                        let dialogRef = this.dialog.open(PopupThemGoiComponent, {
                            disableClose: false,
                            width: '1000px',
                            height: '450px',
                            data: model,
                        });
                        dialogRef.afterClosed().subscribe(result => {
                            //console.log("close = ", result);
                            //this.clearData();
                            //this.isActivePopup = false;
                            if (result != undefined && result != null) {
                                self.tiepNhanBenhNhan.YeuCauKhacGrid = result;
                                self.setDataForDichVuKhac();
                                self.refreshGrid();
                            }
                            self.removeThemDichVuValue();
                            self.removeThemGoiValue();
                        });
                    }
                    else {
                    }
                },
                (err: any) => {
                    // self.validationErrors = err.ValidationErrors;
                    this.themChiDinhDichVuModel.LaGoi = false;
                    this.themChiDinhGoiModel.LaGoi = false;
                    if (err != undefined && err.ValidationErrors != null) {
                        this.validationErrors = err.ValidationErrors;
                    }
                    else if (err != undefined && err.Errors == null) {
                        //self.validationErrors.push({ "Message": err.Message });
                        this.notificationService.showError(err.Message);
                    }
                });
        }
        else {
            this.apiService.post<any>(urlDefault, this.themChiDinhDichVuModel).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        //resultData.LoaiDichVuKhac = loaiDichVuKhac;
                        // this.tiepNhanBenhNhan.YeuCauKhacGrid.push(resultData);
                        // this.setDataForDichVuKhac();
                        // this.setGiaBHYT();
                        // this.refreshGrid();

                        this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                        this.setDataForDichVuKhac();
                        this.refreshGrid();
                        this.removeThemDichVuValue();
                        this.removeThemGoiValue();
                    }
                    else {
                    }
                },
                (err: any) => {
                    // self.validationErrors = err.ValidationErrors;
                    if (err != undefined && err.ValidationErrors != null) {
                        this.validationErrors = err.ValidationErrors;
                    }
                    else if (err != undefined && err.Errors == null) {
                        //self.validationErrors.push({ "Message": err.Message });
                        this.notificationService.showError(err.Message);
                    }
                });
        }
    }


    checkValidAddChiDinhDichVuKhac(id: number) {
        let nhom = 'DỊCH VỤ KHÁM BỆNH';
        if (this.loaiTiepNhan == 2) {
            nhom = 'DỊCH VỤ KỸ THUẬT'
        }
        else if (this.loaiTiepNhan == 1) {
            nhom = 'DỊCH VỤ KHÁM BỆNH';
        }
        else {
            nhom = 'DỊCH VỤ GIƯỜNG';
        }
        let model = this.tiepNhanBenhNhan.YeuCauKhacGrid
            //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
            .find(obj => obj.MaDichVuId == id && obj.Nhom == nhom);
        //console.log("checkValidAddChiDinhDichVuKhac = ", model, nhom);
        if (model != undefined) {
            return false;
        }
        return true;
    }

    //#endregion chi dinh dich vu

    //#region tai lieu dinh kem

    setDataForTaiLieuDinhKem() {
        //console.log("abc = ", this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.length);
        this.gridDataTaiLieuDinhKem = {
            data: this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans,
            total: this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.length
        };
    }

    //#endregion tai lieu dinh kem

    //#region BHYT
    setValueBHYT(model: BaoHiemYTe) {
        //console.log("setValueBHYT = ", model, this.isSetValue);
        if (model != null && model.maSoBHXH == null && this.isSetValue == false && model != undefined || this.isActivePopup == true) return;
        this.isSetValue = true;

        let STT = 1;
        this.lichSuKCB = new Array<GridLichSuKCB>();
        if (model.dsLichSuKCB2018 != null && model.dsLichSuKCB2018 != undefined) {
            model.dsLichSuKCB2018.forEach(element => {
                let childModel = new GridLichSuKCB();
                childModel.STT = STT;
                childModel.MaTheBHYT = model.maThe;
                childModel.HoVaTen = model.hoTen;
                childModel.NgayVaoVien = element.ngayVaoDisplay;
                childModel.NgayRaVien = element.ngayRaDisplay;

                childModel.CoSoKCB = element.coSoKCB;
                childModel.MaCoSoKCB = element.maCSKCB;

                childModel.KetQuaDieuTri = element.kqDieuTriDisplay;
                childModel.KetQuaDieuTriNumber = +element.kqDieuTri;

                childModel.LyDoVaoVien = element.lyDoVVDisplay;
                childModel.LyDoVaoVienNumber = +element.lyDoVV;

                childModel.TinhTrangRaVien = element.tinhTrangDisplay;
                childModel.TinhTrangRaVienNumber = +element.tinhTrang;

                childModel.NgayVaoDateTime = element.ngayVaoDateTime;
                childModel.NgayRaDateTime = element.ngayRaDateTime;
                this.lichSuKCB.push(childModel);
                STT = STT + 1;
            });
            this.tiepNhanBenhNhan.GridLichSuKCB = this.lichSuKCB;
        }

        //
        let STT2 = 1;
        this.lichSuKiemTraTheBHYTGrid = new Array<GridLichSuKiemTraTheBHYT>();
        if (model.dsLichSuKT2018 != null && model.dsLichSuKT2018 != undefined) {
            model.dsLichSuKT2018.forEach(element => {
                let childModel = new GridLichSuKiemTraTheBHYT();
                childModel.STT = STT2;
                childModel.UserKiemTra = element.userKT;
                childModel.ThoiGianKiemTra = element.thoiGianKTDisplay;
                childModel.thoiGianKTDateTime = element.thoiGianKTDateTime;

                childModel.TenCSKCB = element.tenCSKCB;
                childModel.MaCSKCB = element.maCSKCB;

                childModel.NoiDungThongBao = element.thongBao;

                this.lichSuKiemTraTheBHYTGrid.push(childModel);
                STT2 = STT2 + 1;
            });
            this.tiepNhanBenhNhan.GridLichSuKiemTraTheBHYT = this.lichSuKiemTraTheBHYTGrid;
        }
        //console.log("setValueBHYT = ", model)
        this.tiepNhanBenhNhan.BHYTMaSoThe = model.maThe;

        //set muc do huong quyen loi bao hiem
        this.setSoPhanTramHuongBHYT(model.maThe);
        //

        this.tiepNhanBenhNhan.HoTen = model.hoTen;

        // var dateParts = model.ngaySinh.split("/");
        // this.tiepNhanBenhNhan.NgayThangNamSinh = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
        // this.tiepNhanBenhNhan.NamSinh = this.tiepNhanBenhNhan.NgayThangNamSinh.getFullYear();
        // this.tiepNhanBenhNhan.NgayThangNamSinhDisplay = model.ngaySinh,
        if (model.ngaySinh.indexOf("/") == -1) {
            this.tiepNhanBenhNhan.NamSinh = +model.ngaySinh;
        }
        else {
            var dateParts = model.ngaySinh.split("/");
            if (dateParts.length == 3) {
                this.tiepNhanBenhNhan.NgayThangNamSinh = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
                this.tiepNhanBenhNhan.NamSinh = this.tiepNhanBenhNhan.NgayThangNamSinh.getFullYear();
                this.tiepNhanBenhNhan.NgayThangNamSinhDisplay = model.ngaySinh;
            }
        }

            this.tiepNhanBenhNhan.GioiTinh = model.gioiTinh == 'Nam' ? GioiTinh.Nam : GioiTinh.Nu;
        this.tiepNhanBenhNhan.GioiTinhDisplay = model.gioiTinh;


        //this.tiepNhanBenhNhan.NoiDangKyBHYT = this.getBenhVienByMa(model.maDKBD);

        this.apiService.post<string>("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + model.maDKBD).subscribe(
            resultData => {
                this.tiepNhanBenhNhan.NoiDangKyBHYT = resultData;

            },
            () => {
                //return null;
                //console.log("error")
            });

        // this.apiService.post<any>("TiepNhanBenhNhan/GetThongTinTaiKhoanBenhNhan?maSoBHYT=" + model.maThe).subscribe(
        //   resultData => {
        //     this.thongTinTaiKhoanBenhNhan = resultData;

        //   },
        //   () => {
        //     //return null;
        //     //console.log("error")
        //   });

        // this.apiService.post<any>("TiepNhanBenhNhan/GetThongTinBenhNhan?maSoBHYT=" + model.maThe).subscribe(
        //   resultData => {
        //     if (resultData != null) {
        //       this.tiepNhanBenhNhan.DiaChi = resultData.DiaChi;
        //       this.tiepNhanBenhNhan.SoDienThoai = resultData.SoDienThoai;
        //       this.tiepNhanBenhNhan.SoChungMinhThu = resultData.SoChungMinhThu;
        //       this.tiepNhanBenhNhan.Email = resultData.Email;
        //       this.tiepNhanBenhNhan.NgheNghiepId = resultData.NgheNghiepId;
        //       this.tiepNhanBenhNhan.SoDienThoai = resultData.SoDienThoai;
        //       this.tiepNhanBenhNhan.GioiTinh = resultData.GioiTinh;
        //       this.tiepNhanBenhNhan.NoiLamViec = resultData.NoiLamViec;
        //       this.tiepNhanBenhNhan.QuocTichId = resultData.QuocTichId;
        //     }
        //   },
        //   () => {
        //     //return null;
        //     //console.log("error")
        //   });

        //Vu Le & Thach comment 13/08/2020. Ly Do: chưa rõ
        // this.apiService.post<any>("TiepNhanBenhNhan/GetIdBenhNhan?maSoBHYT=" + model.maThe).subscribe(
        //     resultData => {
        //         this.benhNhanId = resultData;
        //         console.log(this.benhNhanId)
        //     },
        //     () => {
        //         //return null;
        //         //console.log("error")
        //     });

        this.tiepNhanBenhNhan.BHYTDiaChi = model.diaChi;
        this.setDiaChiBHYTForModel(model.diaChi);

        //popup
        this.tiepNhanBenhNhan.MaDKBD = model.maDKBD;
        this.tiepNhanBenhNhan.BHYTMaDKBD = model.maDKBD;


        this.tiepNhanBenhNhan.NgayCoHieuLucDisplay = model.gtTheTu;
        var dateParts2 = model.gtTheTu.split("/");
        this.tiepNhanBenhNhan.BHYTNgayHieuLuc = new Date(+dateParts2[2], +dateParts2[1] - 1, +dateParts2[0]);

        if (model.gtTheDen != undefined && model.gtTheDen != null) {
            this.tiepNhanBenhNhan.NgayHetHieuLucDisplay = model.gtTheDen;
            var dateParts3 = model.gtTheDen.split("/");
            this.tiepNhanBenhNhan.BHYTNgayHetHan = new Date(+dateParts3[2], +dateParts3[1] - 1, +dateParts3[0]);
        }


        this.tiepNhanBenhNhan.NgayDu5NamDisplay = model.ngayDu5Nam;
        this.tiepNhanBenhNhan.DiaChiDisplay = model.diaChi;
        this.tiepNhanBenhNhan.cqBHXH = model.cqBHXH;
        this.tiepNhanBenhNhan.BHYTCoQuanBHXH = model.cqBHXH;

        if (model.ngayDu5Nam != null && model.ngayDu5Nam != undefined && model.ngayDu5Nam != "") {
            var dateParts4 = model.ngayDu5Nam.split("/");
            this.tiepNhanBenhNhan.BHYTNgayDu5Nam = new Date(+dateParts4[2], +dateParts4[1] - 1, +dateParts4[0]);
        }
        //
        this.setTuyenKhamBenh(model.maDKBD);
        //
        //test
        //model.isConnectSuccessfully = false;
        //
        if (model.isConnectSuccessfully == false) {
            //console.log("model.isConnectSuccessfully");
            this.tiepNhanBenhNhan.IsCheckedBHYT = false;
            this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;

            let dialogRef = this.dialog.open(PopupKhongKiemTraDuocComponent, {
                disableClose: true,
                width: '700px',
                height: '300px',
                data: this.tiepNhanBenhNhan,
            });
            dialogRef.afterClosed().subscribe(result => {
                //console.log("TiepNhanBenhNhanPopupKhongKiemTraDuocComponent = ",result);
                if (result == true) {
                    this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                    this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;
                    this.tiepNhanBenhNhan.CoBHYT = true;
                    this.tiepNhanBenhNhan.TuNhap = true;
                }
                else if (result == false) {
                    this.tiepNhanBenhNhan.CoBHYT = false;
                    this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;
                    this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                }
                else if (result != undefined) {
                    //console.log("------- ", result);
                    this.setValueBHYT(result);
                }
            });

        }
        else {
            this.tiepNhanBenhNhan.IsCheckedBHYT = true;
            this.checkOutOfDateBHYT(this.tiepNhanBenhNhan.BHYTNgayHetHan);
        }

        //Get tuoi
        this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);

        //disable search qr code
        this.isSearchQRCodeEnable = false;

        //set value da tim kiem
        this.hoTenDaTimKiem = model.hoTen;
        this.maSoTheDaTimKiem = model.maThe;
        this.ngaySinhDaTimKiem = this.tiepNhanBenhNhan.NgayThangNamSinh
        //

        //console.log("setValueBHYT = ", this.tiepNhanBenhNhan)
        this.isSetValue = false;
    }
    onKey(event: any, isSoTheBHYT: boolean, loai: number = 1) {

        if (isSoTheBHYT == true) {
            this.bindMucHuongFromSoTheBHYT(this.tiepNhanBenhNhan.BHYTMaSoThe);
        }

        // if(loai == 1){
        //     this.modelTimKiemBenhNhan.MaBHYT = this.tiepNhanBenhNhan.BHYTMaSoThe;
        // }
        // else if(loai == 2){
        //     this.modelTimKiemBenhNhan.HoTen = this.tiepNhanBenhNhan.HoTen;
        // }
        // else if(loai == 3){
        //     this.modelTimKiemBenhNhan.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
        //     //console.log("-------------: ",this.tiepNhanBenhNhan.NgayThangNamSinh);
        // }
        //this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
        //console.log("onKey = ", this.tiepNhanBenhNhan.HoTen);
        if (event.keyCode === 13) {
            if (loai == 3 && this.tiepNhanBenhNhan.NgayThangNamSinh != null && this.tiepNhanBenhNhan.NgayThangNamSinh != undefined) {
                this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);
            }
        }

        if (this.isCheckedBHYT == true || this.isHaveBHYTUpdated == true || this.tiepNhanBenhNhan.CoBHYT != true) return;

        if (this.tiepNhanBenhNhan.TuNhap == true && this.isScanF1 == false && !(this.tiepNhanBenhNhan.BHYTMaSoThe != null && this.tiepNhanBenhNhan.BHYTMaSoThe.includes("$"))) return;

        this.isCheckedBHYT = true;
        let isQrCodeScan = false;
        if (isSoTheBHYT == true && this.tiepNhanBenhNhan.BHYTMaSoThe != null
            && this.tiepNhanBenhNhan.BHYTMaSoThe != null && this.tiepNhanBenhNhan.BHYTMaSoThe.includes("$")) {
            //console.log("successfully");
            this.inputQrCode(this.tiepNhanBenhNhan.BHYTMaSoThe);
            isQrCodeScan = true;
        }
        if (this.isSearchQRCodeEnable == true && isQrCodeScan == false) {
            //console.log("enter submit");
            if (event.keyCode === 13) {
                this.thongTinBenhNhan.MaThe = this.tiepNhanBenhNhan.BHYTMaSoThe;
                this.thongTinBenhNhan.TenBenhNhan = this.tiepNhanBenhNhan.HoTen;
                this.thongTinBenhNhan.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
                this.thongTinBenhNhan.NamSinh = this.tiepNhanBenhNhan.NamSinh;

                var datePipe = new DatePipe("en-US");
                this.thongTinBenhNhan.NgaySinhDisplay = datePipe.transform(this.tiepNhanBenhNhan.NgayThangNamSinh, 'dd/MM/yyyy');

                //console.log("---------: ", this.thongTinBenhNhan.MaThe == null, this.thongTinBenhNhan.MaThe == "" );
                if (this.thongTinBenhNhan.MaThe != null && this.thongTinBenhNhan.MaThe != ""
                    && this.thongTinBenhNhan.TenBenhNhan != null && this.thongTinBenhNhan.TenBenhNhan != ""
                    && (this.thongTinBenhNhan.NgaySinh != null || this.thongTinBenhNhan.NamSinh != null)) {


                    let dialogRef = this.dialog.open(PopupChoQuetComponent, {
                        disableClose: true,
                        width: '500px',
                        height: '250px',
                        data: this.thongTinBenhNhan,
                    });
                    dialogRef.afterClosed().subscribe(result => {
                        //console.log("close = ", result);
                        // if (result == null || (result != null && result.maKetQua == "050")) {
                        if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
                            //this.clearData();
                            //this.notificationService.showError(TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan);

                            //
                            this.tiepNhanBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
                            let dialogRef = this.dialog.open(PopupErrorComponent, {
                                disableClose: false,
                                width: '700px',
                                height: '300px',
                                data: this.tiepNhanBenhNhan,
                            });
                            dialogRef.afterClosed().subscribe(result => {
                                //document.getElementById("SoTheBHYTisAutoFocus").focus();
                                this.isCheckedBHYT = false;
                                if (result == 2) {
                                    this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                                    this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;
                                    this.tiepNhanBenhNhan.CoBHYT = true;
                                    this.tiepNhanBenhNhan.TuNhap = true;
                                }
                                else if (result == 1) {
                                    this.tiepNhanBenhNhan.CoBHYT = false;
                                    this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;
                                    this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                                }
                                else if (result != undefined) {
                                    //console.log("------- ", result);
                                    this.setValueBHYT(result);
                                }
                            });
                            //

                        }
                        else {
                            //console.log("onkey = ",event, this.tiepNhanBenhNhan.BHYTMaSoThe)

                            this.isCheckedBHYT = false;
                            this.setValueBHYT(result);
                        }
                    });



                }

                else {
                    this.isCheckedBHYT = false;
                }
                //console.log(this.tiepNhanBenhNhan.BHYTMaSoThe);
            }
            else {
                this.isCheckedBHYT = false;
            }
        }
        else {
            this.isCheckedBHYT = false;
        }
    }

    blurMaNoiDKBD($event) {
        this.setNoiDKBD(this.tiepNhanBenhNhan.BHYTMaDKBD);
    }

    onKeyMaNoiDKBD($event) {
        if ($event.keyCode === 13) {
            this.setNoiDKBD(this.tiepNhanBenhNhan.BHYTMaDKBD);
        }
    }

    setNoiDKBD(ma: string) {
        this.apiService.post<string>("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + ma).subscribe(
            resultData => {
                this.tiepNhanBenhNhan.NoiDangKyBHYT = resultData;

            },
            () => {
                //return null;
                //console.log("error")
            });
    }

    blur($event: any, isSoTheBHYT: boolean, loai: number = 1) {
        //console.log("blur", $event);

        if (loai == 3 && this.tiepNhanBenhNhan.NgayThangNamSinh != null && this.tiepNhanBenhNhan.NgayThangNamSinh != undefined) {
            this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);
        }

        if (this.isCheckedBHYT == true || this.isHaveBHYTUpdated == true || this.tiepNhanBenhNhan.CoBHYT != true) return;

        if (this.tiepNhanBenhNhan.TuNhap == true && this.isScanF1 == false && !(this.tiepNhanBenhNhan.BHYTMaSoThe != null && this.tiepNhanBenhNhan.BHYTMaSoThe.includes("$"))) return;

        this.isCheckedBHYT = true;

        if (isSoTheBHYT == true) {
            this.bindMucHuongFromSoTheBHYT(this.tiepNhanBenhNhan.BHYTMaSoThe);
        }

        if (this.isSearchQRCodeEnable == true && !(this.tiepNhanBenhNhan.BHYTMaSoThe != null && this.tiepNhanBenhNhan.BHYTMaSoThe.includes("$"))) {
            this.thongTinBenhNhan.MaThe = this.tiepNhanBenhNhan.BHYTMaSoThe;
            this.thongTinBenhNhan.TenBenhNhan = this.tiepNhanBenhNhan.HoTen;
            this.thongTinBenhNhan.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
            this.thongTinBenhNhan.NamSinh = this.tiepNhanBenhNhan.NamSinh;

            var datePipe = new DatePipe("en-US");
            this.thongTinBenhNhan.NgaySinhDisplay = datePipe.transform(this.tiepNhanBenhNhan.NgayThangNamSinh, 'dd/MM/yyyy');

            if (this.thongTinBenhNhan.MaThe != null && this.thongTinBenhNhan.MaThe != ""
                && this.thongTinBenhNhan.TenBenhNhan != null && this.thongTinBenhNhan.TenBenhNhan != ""
                && (this.thongTinBenhNhan.NgaySinh != null || this.thongTinBenhNhan.NamSinh != null)) {


                let dialogRef = this.dialog.open(PopupChoQuetComponent, {
                    disableClose: true,
                    width: '500px',
                    height: '250px',
                    data: this.thongTinBenhNhan,
                });
                dialogRef.afterClosed().subscribe(result => {
                    //console.log("close = ", result);
                    // if (result == null || (result != null && result.maKetQua == "050")) {
                    if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
                        this.clearData();
                        //this.notificationService.showError(TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan);
                        
                        //
                        this.tiepNhanBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
                        let dialogRef = this.dialog.open(PopupErrorComponent, {
                            disableClose: true,
                            width: '700px',
                            height: '300px',
                            data: this.tiepNhanBenhNhan,
                        });
                        dialogRef.afterClosed().subscribe(result => {
                            //console.log("PopupErrorComponent ", result);
                            //document.getElementById("SoTheBHYTisAutoFocus").focus();
                            this.isCheckedBHYT = false;
                            if (result == 2) {
                                this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                                this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;
                                this.tiepNhanBenhNhan.CoBHYT = true;
                                this.tiepNhanBenhNhan.TuNhap = true;
                            }
                            else if (result == 1) {
                                this.tiepNhanBenhNhan.CoBHYT = false;
                                this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;
                                this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                            }
                            else if (result != undefined) {
                                //console.log("------- ", result);
                                this.setValueBHYT(result);
                            }
                        });
                        //
                    }
                    else {

                        this.isCheckedBHYT = false;
                        this.setValueBHYT(result);
                    }
                });
            }
            else {
                this.isCheckedBHYT = false;
            }
        }
        else {
            this.isCheckedBHYT = false;
        }
    }

    inputQrCode(qrCode: string) {
        this.apiService.post<any>("BHYT/GetInfoFromURL/?model=" + qrCode).subscribe(
            resultData => {
                if (resultData != undefined) {
                    this.modelQRCode = resultData;
                    this.setValueBHYT(this.modelQRCode);
                }
            },
            (err: ApiError) => {
                //
                if (err.Message != "Validation Failed" && err.Message != null && err.Message != '') {
                    this.tiepNhanBenhNhan.MessageErrFromBHYT = err.Message;
                }
                else {
                    this.tiepNhanBenhNhan.MessageErrFromBHYT = null;
                }
                let dialogRef = this.dialog.open(PopupErrorComponent, {
                    disableClose: false,
                    width: '700px',
                    height: '300px',
                    data: this.tiepNhanBenhNhan,
                });
                dialogRef.afterClosed().subscribe(result => {
                    document.getElementById("SoTheBHYTisAutoFocus").focus();
                    this.isCheckedBHYT = false;
                    if (result == 2) {
                        this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                        this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;
                        this.tiepNhanBenhNhan.CoBHYT = true;
                        this.tiepNhanBenhNhan.TuNhap = true;
                    }
                    else if (result == 1) {
                        this.tiepNhanBenhNhan.CoBHYT = false;
                        this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;
                        this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                    }
                    else if (result != undefined) {
                        //console.log("------- ", result);
                        this.setValueBHYT(result);
                    }
                });
                //

            });

    }

    setTuyenKhamBenh(maDKBD: string) {
        this.apiService.post<any>("TiepNhanBenhNhan/IsDungTuyen?maBenhVien=" + maDKBD).subscribe(
            resultData => {
                //console.log("IsDungTuyen",resultData)
                if (resultData == true) {
                    this.isDungTuyenDisplay = "Đúng tuyến";
                    this.isDungTuyen = true;
                    this.tiepNhanBenhNhan.LyDoVaoVien = 1;
                }
                else {
                    this.isDungTuyenDisplay = "Đúng tuyến";
                    this.isDungTuyen = true;
                    this.tiepNhanBenhNhan.LyDoVaoVien = 1;
                }
                this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
            },
            () => {
                //console.log("error")
            });

    }

    setSoPhanTramHuongBHYT(maThe: string) {
        let maTheArray = maThe.split("");
        if (maTheArray[2] == '1') {
            this.soPhanTramHuongBHYT = 100;
        }
        else if (maTheArray[2] == '2') {
            this.soPhanTramHuongBHYT = 100;
        }
        else if (maTheArray[2] == '3') {
            this.soPhanTramHuongBHYT = 95;
        }
        else if (maTheArray[2] == '4') {
            this.soPhanTramHuongBHYT = 80;
        }
        else {
            this.soPhanTramHuongBHYT = 100;
        }
        this.tiepNhanBenhNhan.BHYTMucHuong = this.soPhanTramHuongBHYT;
        // this.themChiDinhDichVuModel.BHYTMucHuong = this.soPhanTramHuongBHYT;
        // this.themChiDinhGoiModel.BHYTMucHuong = this.soPhanTramHuongBHYT;
        this.setSoPhanTramHuongBHYTForThemChiDinh()
    }

    setSoPhanTramHuongBHYTForThemChiDinh() {
        this.themChiDinhDichVuModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        this.themChiDinhGoiModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
    }

    blurDiaChi($event) {
        this.setDiaChiBHYTForModel(this.tiepNhanBenhNhan.BHYTDiaChi);
    }

    onKeyDiaChi($event) {
        if ($event.keyCode === 13) {
            this.setDiaChiBHYTForModel(this.tiepNhanBenhNhan.BHYTDiaChi);
        }
    }

    setDiaChiBHYTForModel(diaChi: string) {
        let self = this;
        var coDiaChi = self.kiemTraDiaChiDaCo(); // BVHD-3768
        var coDiaChiGiamHo = self.kiemTraDiaChiDaCo(true); // BVHD-3768

        if ((diaChi == undefined || diaChi == null || diaChi == '')) // && !coDiaChi) {
        {
            if (!coDiaChi) {
                this.tiepNhanBenhNhan.TinhThanhId = null;
                this.tiepNhanBenhNhan.QuanHuyenId = null;
                this.tiepNhanBenhNhan.PhuongXaId = null;
                this.tiepNhanBenhNhan.DiaChi = null;
            }
            return;
        }
        let lstDiaChi = diaChi.split(",");
        if ((lstDiaChi.length < 3))// && !coDiaChi) {
        {
            if (!coDiaChi) {
                this.tiepNhanBenhNhan.TinhThanhId = null;
                this.tiepNhanBenhNhan.QuanHuyenId = null;
                this.tiepNhanBenhNhan.PhuongXaId = null;
                this.tiepNhanBenhNhan.DiaChi = null;
            }
            return;
        }
        let tinhThanhPho = lstDiaChi[lstDiaChi.length - 1].trim();
        let quanHuyen = lstDiaChi[lstDiaChi.length - 2].trim();
        let phuongXa = lstDiaChi[lstDiaChi.length - 3].trim();
        let soNha = null;
        if (lstDiaChi.length >= 4) {
            let index = diaChi.indexOf(lstDiaChi[lstDiaChi.length - 3]);
            soNha = diaChi.slice(0, index - 1);
        }
        let model = new DiaChiBHYT();
        model.TinhThanh = tinhThanhPho;
        model.QuanHuyen = quanHuyen;
        model.PhuongXa = phuongXa;

        this.apiService.post<DiaChiBHYT>("TiepNhanBenhNhan/GetDiaChiBHYT", model).subscribe(
            resultData => {
                //cheat cho combobox hoat dong
                if (!coDiaChi) {
                    this.tiepNhanBenhNhan.PhuongXaId = null;
                    this.tiepNhanBenhNhan.QuanHuyenId = null;
                    this.tiepNhanBenhNhan.TinhThanhId = null;
                    this.tiepNhanBenhNhan.DiaChi = null;
                }

                setTimeout(function () {
                    if (!coDiaChi) {
                        self.tiepNhanBenhNhan.PhuongXaId = resultData.PhuongXaId;
                        self.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
                        self.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
                        self.tiepNhanBenhNhan.DiaChi = soNha;
                    }

                    if (self.under6yearsold && !coDiaChiGiamHo) {
                        self.cloneDiaChiNguoiGiamHo();
                    }
                    if(this.under6yearsold == false)
                    {
                        this.cloneDiaChiNguoiGiamHoLonHon6Tuoi();
                    }
                }, 500);

                // dev cũ cheat
                //this.tiepNhanBenhNhan.DiaChi = soNha;
            },
            () => {
                //return null;
                //console.log("error")
            });

    }

    kiemTraDiaChiDaCo(laGiamHo: boolean = false)
    {
        if(laGiamHo)
        {
            return this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId || this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId || this.tiepNhanBenhNhan.NguoiLienHePhuongXaId || this.tiepNhanBenhNhan.NguoiLienHeDiaChi;
        }
        else{
            return this.tiepNhanBenhNhan.TinhThanhId || this.tiepNhanBenhNhan.QuanHuyenId || this.tiepNhanBenhNhan.PhuongXaId || this.tiepNhanBenhNhan.DiaChi;
        }
    }

    // ngayHetHieuLucChange($event)
    // {
    //   if($event != null && $event != undefined){
    //     //console.log("ngayHetHieuLucChange = ", $event);
    //     this.tiepNhanBenhNhan.BHYTNgayHetHan = $event;
    //     this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
    //   }
    // }

    blurNgayHetHieuLuc($event) {
        // if (this.removeBHYT != false) return;
        // this.removeBHYT = true;
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
        //this.setDuocHuongBHYTAndChangeGrid();
    }
    onKeyNgayHetHieuLuc($event) {
        if ($event.keyCode === 13) {
            // if (this.removeBHYT != false) return;
            // this.removeBHYT = true;
            this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
            //this.setDuocHuongBHYTAndChangeGrid();
        }
    }

    blurNgayCoHieuLuc($event) {
        // if (this.removeBHYT != false) return;
        // this.removeBHYT = true;
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
        //this.setDuocHuongBHYTAndChangeGrid();
    }
    onKeyNgayCoHieuLuc($event) {
        if ($event.keyCode === 13) {
            // if (this.removeBHYT != false) return;
            // this.removeBHYT = true;
            this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
            //this.setDuocHuongBHYTAndChangeGrid();
        }
    }

    setDuocHuongBHYTAndChangeGrid() {
        let dateNow = new Date();
        let dateNgayHetHan = new Date(this.tiepNhanBenhNhan.BHYTNgayHetHan);
        //console.log("setDuocHuongBHYTAndChangeGrid = ", dateNgayHetHan
        //, this.tiepNhanBenhNhan.CoBHYT && this.tiepNhanBenhNhan.LyDoVaoVien == 1 && dateNgayHetHan > dateNow);
        if (this.tiepNhanBenhNhan.CoBHYT && this.tiepNhanBenhNhan.LyDoVaoVien == 1 && dateNgayHetHan > dateNow) {

        }
        else {
            this.lyDoVaoVienChange(this.tiepNhanBenhNhan.LyDoVaoVien, true);
        }
    }

    setDuocHuongBHYT(CoBHYT: boolean = false, LyDoVaoVien: number = 1) {
        //console.log("setDuocHuongBHYT");
        let dateNow = new Date((new Date()).toDateString());
        // console.log("setDuocHuongBHYT = ", CoBHYT, LyDoVaoVien
        // , this.tiepNhanBenhNhan.BHYTNgayHieuLuc, this.tiepNhanBenhNhan.BHYTNgayHieuLuc < dateNow, this.tiepNhanBenhNhan.BHYTNgayHetHan);
        let dateNgayHetHan = new Date(this.tiepNhanBenhNhan.BHYTNgayHetHan);
        let dateCoHieuLuc = new Date(this.tiepNhanBenhNhan.BHYTNgayHieuLuc);
        //console.log("setDuocHuongBHYT = ", CoBHYT, LyDoVaoVien, LyDoVaoVien == 1, dateNgayHetHan > dateNow
        //, dateNgayHetHan, dateNow)
        if (CoBHYT && LyDoVaoVien == 1 && dateNgayHetHan >= dateNow && dateCoHieuLuc <= dateNow) {
            //console.log("setDuocHuongBHYT = ", CoBHYT, LyDoVaoVien, LyDoVaoVien == 1, this.tiepNhanBenhNhan.BHYTNgayHetHan)
            this.themChiDinhDichVuModel.DuocHuongBHYT = true;
            this.themChiDinhGoiModel.DuocHuongBHYT = true;
            this.duocHuongBHYT = true;

            this.themChiDinhDichVuModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
            this.themChiDinhGoiModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
            this.addBHYTForGridChiDinhDichVu();
        }
        else {
            this.themChiDinhDichVuModel.DuocHuongBHYT = false;
            this.themChiDinhGoiModel.DuocHuongBHYT = false;
            this.duocHuongBHYT = false;

            this.themChiDinhDichVuModel.BHYTMucHuong = null;
            this.themChiDinhGoiModel.BHYTMucHuong = null;
            this.removeBHYTForGridChiDinhDichVu();
        }

        if (!this.enableDuocHuongBHYT) {
            this.themChiDinhDichVuModel.DuocHuongBHYT = false;
            this.themChiDinhGoiModel.DuocHuongBHYT = false;
        }

        //console.log("setDuocHuongBHYT = ", this.duocHuongBHYT)
    }

    kiemTraTheBHYTHieuLucHienTai(){
        let dateNow = new Date((new Date()).toDateString());
        let dateNgayHetHan = new Date(this.tiepNhanBenhNhan.BHYTNgayHetHan);
        let dateCoHieuLuc = new Date(this.tiepNhanBenhNhan.BHYTNgayHieuLuc);
        return this.tiepNhanBenhNhan.CoBHYT == true && this.tiepNhanBenhNhan.LyDoVaoVien == 1 && dateNgayHetHan >= dateNow && dateCoHieuLuc <= dateNow;
    }

    addBHYTForGridChiDinhDichVu() {
        //khac
        // for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
        //     const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
        //     // console.log("addBHYTForGridChiDinhDichVu = ", item.GiaBHYT);
        //     // if (item.DuocHuongBHYT == true && item.GiaBHYT != 0) {
        //     //   item.BHYTThanhToan = item.GiaBHYT;
        //     //   //item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
        //     //   item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan;
        //     // }
        // }

        //this.setGiaBHYT();
        //this.addOrRemoveListDichVuToServer();

        // this.setDataForDichVuKhac();
        // this.refreshGrid();
    }

    removeBHYTForGridChiDinhDichVu() {
        //dich vu ky thuat

        //khac
        for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
            const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
            if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0) {
                //item.BHYTThanhToan = 0;
                //item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                //item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan;
                item.DuocHuongBHYT = false;
            }
        }

        //this.addOrRemoveListDichVuToServer();

        // this.setDataForDichVuKhac();
        // this.refreshGrid();
    }

    addOrRemoveListDichVuToServer() {

        if (this.isAddOrDeleteGrid) return;

        this.isAddOrDeleteGrid = true;

        let modelUpdate = new GridUpdate();
        this.setValueParamsUpdateListDichVu(modelUpdate);

        this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/AddOrDeleteListDichVuToServer", modelUpdate).subscribe(
            resultData => {
                //console.log("duocHuongBHYTChange = ", resultData);
                this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                this.setDataForDichVuKhac();
                this.refreshGrid();

                this.isAddOrDeleteGrid = false;
            },
            (err: any) => {
                this.isAddOrDeleteGrid = false;
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    //self.validationErrors.push({ "Message": err.Message });
                    this.notificationService.showError(err.Message);
                }
            });
    }

    setValueParamsUpdateListDichVu(modelUpdate: GridUpdate) {
        modelUpdate.lstChiDinhDichVu = new Array<ListChiDinhNeedUpdate>();

        modelUpdate.model = this.tiepNhanBenhNhan;
        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        modelUpdate.HoTen = this.tiepNhanBenhNhan.HoTen;
        modelUpdate.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;

        this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(obj => {
            if (obj.IsGoiCoChietKhau != true) {
                let dichVu = new ListChiDinhNeedUpdate();
                dichVu.Nhom = obj.Nhom;
                dichVu.DichVuId = obj.MaDichVuId;

                modelUpdate.lstChiDinhDichVu.push(dichVu);
            }
        })
    }
    // setGiaBHYT() {
    //     //console.log("setGiaBHYT = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
    //     //this.setGiaBHYTSoLanKham();
    //     let soLanKham = 1;
    //     let tyLeLan1 = 0;
    //     let tyLeLan2 = 0;
    //     let tyLeLan3 = 0;
    //     let tyLeLan4 = 0;
    //     let tyLeLan5 = 0;
    //     ;
    //     this.apiService.get<Array<number>>("TiepNhanBenhNhan/GetTyLeSoLanHuongBHYTDichVu").subscribe(
    //         resultData => {
    //             if (resultData != null && resultData != undefined) {
    //                 //console.log("setGiaBHYTSoLanKham = ", resultData, resultData[0],  resultData[1]);
    //                 tyLeLan1 = resultData[0];
    //                 tyLeLan2 = resultData[1];
    //                 tyLeLan3 = resultData[2];
    //                 tyLeLan4 = resultData[3];
    //                 tyLeLan5 = resultData[4];
    //                 //console.log("Trươc = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
    //                 if (this.tiepNhanBenhNhan.YeuCauKhacGrid != null && this.tiepNhanBenhNhan.YeuCauKhacGrid != undefined) {
    //                     for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
    //                         const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
    //                         //console.log("index = ", item, soLanKham);
    //                         if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && item.GiaBHYT != 0) {
    //                             if (item.Nhom == 'DỊCH VỤ KHÁM BỆNH') {
    //                                 if (soLanKham == 1) {
    //                                     item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan1 / 100;
    //                                     soLanKham = soLanKham + 1;
    //                                 }
    //                                 else if (soLanKham == 2) {
    //                                     item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan2 / 100;
    //                                     soLanKham = soLanKham + 1;
    //                                 }
    //                                 else if (soLanKham == 3) {
    //                                     item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan3 / 100;
    //                                     soLanKham = soLanKham + 1;

    //                                 }
    //                                 else if (soLanKham == 4) {
    //                                     item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan4 / 100;
    //                                     soLanKham = soLanKham + 1;

    //                                 }
    //                                 else if (soLanKham == 5) {
    //                                     item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan5 / 100;
    //                                     soLanKham = soLanKham + 1;

    //                                 }
    //                                 else {
    //                                     item.BHYTThanhToan = item.GiaBHYT * item.TiLeBaoHiemThanhToan / 100 * 0 / 100;
    //                                     soLanKham = soLanKham + 1;

    //                                 }
    //                             }
    //                             else {
    //                                 item.BHYTThanhToan = item.GiaBHYT * item.TiLeBaoHiemThanhToan / 100;
    //                             }

    //                             item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
    //                             item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
    //                         }
    //                     }
    //                 }

    //                 //this.setDataForDichVuKhac();
    //                 //console.log("Sau = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
    //             }
    //             let bhytKhacKhamBenh = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
    //                 .reduce((sum, item) => sum + item.BHYTThanhToan, 0);

    //             if (bhytKhacKhamBenh != 0 && bhytKhacKhamBenh < this.soTienBHYTSeThanhToan) {
    //                 for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
    //                     const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
    //                     if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && this.tiepNhanBenhNhan.BHYTMucHuong != null) {
    //                         item.BHYTThanhToan = item.BHYTThanhToan;
    //                         item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
    //                         item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
    //                     }
    //                 }
    //             }
    //             else if (bhytKhacKhamBenh != 0 && bhytKhacKhamBenh >= this.soTienBHYTSeThanhToan) {
    //                 for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
    //                     const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
    //                     if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && this.tiepNhanBenhNhan.BHYTMucHuong != null) {
    //                         item.BHYTThanhToan = item.BHYTThanhToan * this.tiepNhanBenhNhan.BHYTMucHuong / 100;
    //                         item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
    //                         item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
    //                     }
    //                 }

    //             }

    //             this.setDataForDichVuKhac();
    //             this.refreshGrid();
    //         }


    //     )


    // }

    checkOutOfDateBHYT(date: Date) {
        //console.log("checkOutOfDateBHYT ");
        let dateNow = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        ;
        //console.log("checkOutOfDateBHYT: ", dateNow, date, date.getTime() , dateNow.getTime())
        if (date.getTime() < dateNow.getTime()) {
            this.isActivePopup = true;
            this.isOutOfDate = true;
            this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.HetHieuLuc;
            //this.notificationService.showError("Thẻ bảo hiểm này đã hết hiệu lực, bạn phải chuyển qua khám nhân dân");

            let dialogRef = this.dialog.open(PopupHetHieuLucComponent, {
                disableClose: true,
                width: '700px',
                height: '300px',
                data: this.tiepNhanBenhNhan,
            });
            dialogRef.afterClosed().subscribe(result => {
                //console.log("close = ", result);
                //this.clearData();
                this.isActivePopup = false;
                if (result == 1) {
                    this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.HetHieuLuc;
                    this.clearData();
                }
                else if (result == 2) {
                    this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                    this.tiepNhanBenhNhan.CoBHYT = true;
                    this.tiepNhanBenhNhan.TuNhap = true;
                }
                else {
                    this.tiepNhanBenhNhan.CoBHYT = false;
                    this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.HetHieuLuc;
                }

            });

        }
        else {
            this.isOutOfDate = false;
            this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.ConHieuLuc;

        }
        this.tiepNhanBenhNhan.isOutOfDate = this.isOutOfDate;
        //console.log(date, dateNow);
        //console.log("checkOutOfDateBHYT = ", date.getTime(), " ---- ",  dateNow.getTime(), " ---- ", this.isOutOfDate)
    }
    //#endregion BHYT


    //#region upload file

    uploadFileDone(tapTin: any) {
        //console.log(tapTin);
        this.tiepNhanBenhNhan.GiayChuyenVien = tapTin;
        if (!(this.cdRef as ViewRef).destroyed) {
            this.cdRef.detectChanges();
        }
        //console.log("aaaaa= ", this.tiepNhanBenhNhan)
    }

    uploadFileMienCungChiTraDone(tapTin: any) {
        //console.log(tapTin);
        this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra = tapTin;
        if (!(this.cdRef as ViewRef).destroyed) {
            this.cdRef.detectChanges();
        }
        //console.log("aaaaa= ", this.tiepNhanBenhNhan)
    }

    uploadTaiLieuDone($event) {
        this.themTaiLieu.TaiLieu = $event;
        if (!(this.cdRef as ViewRef).destroyed) {
            this.cdRef.detectChanges();
        }
    }

    //#endregion upload file

    //#region lich su kham chua benh

    lichSuKBC() {
        let dialogRef = this.dialog.open(PopupLichSuKhamChuaBenhComponent, {
            disableClose: false,
            width: '1000px',
            height: '409px',
            data: this.lichSuKCB,
        });
        dialogRef.afterClosed().subscribe(result => {

        });
    }

    lichSuKiemTraTheBHYT() {
        let dialogRef = this.dialog.open(PopupLichSuKiemTraBhytComponent, {
            disableClose: false,
            width: '1200px',
            height: '500px',
            data: this.lichSuKiemTraTheBHYTGrid,
        });
        dialogRef.afterClosed().subscribe(result => {

        });
    }


    //#endregion lich su kham chua benh

    //#region dropdownlist change
    QuanHuyenChange($event) {
        this.tiepNhanBenhNhan.QuanHuyenId = $event;
        //console.log("QuanHuyenChange = ", $event)
        this.tiepNhanBenhNhan.PhuongXaId = null;

        if (this.under6yearsold) {
            this.cloneDiaChiNguoiGiamHo();
        }
        if(this.under6yearsold == false)
        {
            this.cloneDiaChiNguoiGiamHoLonHon6Tuoi();
        }
    }

    PhuongXaChange($event) {
        if ($event != null && $event != undefined) {
            this.apiService.post<any>("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + $event).subscribe(
                resultData => {
                    this.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
                    this.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;

                    if(this.validationErrors != undefined && this.validationErrors != null && this.validationErrors.length > 0)
                    {
                        if (this.validationErrors && this.validationErrors.some(x => x.Field.includes('QuanHuyenId') || x.Field.includes('TinhThanhId'))) {
                            for (const validationItem of this.validationErrors.filter(x => x.Field.includes('QuanHuyenId') || x.Field.includes('TinhThanhId'))) {
                                this.validationErrors.splice(this.validationErrors.indexOf(validationItem), 1);
                            }
                        }
                    }
                },
                (err: any) => {
                });
        }
        else {
            this.tiepNhanBenhNhan.TinhThanhId = null;
            this.tiepNhanBenhNhan.QuanHuyenId = null;
        }
    }

    QuanHuyenNguoiLienHeChange($event) {
        console.log("QuanHuyenNguoiLienHeChange = ", $event);
        this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
    }

    TinhThanhPhoChange($event) {
        //console.log("TinhThanhPhoChange = ", $event)
        this.tiepNhanBenhNhan.QuanHuyenId = null;
        this.tiepNhanBenhNhan.PhuongXaId = null;

    }

    TinhThanhPhoNguoiLienHeChange($event) {
        console.log("TinhThanhPhoNguoiLienHeChange = ", $event);
        this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = null;
        this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
    }

    KhoaKhamChange($event) {
        //this.tiepNhanBenhNhan.PhongKhamVaBacSiId = null;
        this.apiService.post<any>("TiepNhanBenhNhan/SetPhongKham?KhoaKhamId=" + $event).subscribe(
            resultData => {
                this.tiepNhanBenhNhan.PhongKhamVaBacSiId = resultData;
            },
            (err: any) => {
            });
    }
    ThongTinBenhNhanHoTenChange($event) {
        if ($event != null) {
            //this.tiepNhanBenhNhan.HoTen = $event.toUpperCase();
        }
        if (this.hoTenDaTimKiem == $event && this.ngaySinhDaTimKiem == this.tiepNhanBenhNhan.NgayThangNamSinh
            && this.maSoTheDaTimKiem == this.tiepNhanBenhNhan.BHYTMaSoThe) {
            this.isSearchQRCodeEnable = false;
        }
        else {
            this.isSearchQRCodeEnable = true;
        }
    }

    ThongTinBenhNhanMaSoTHeChange($event) {
        if ($event != null) {
            this.tiepNhanBenhNhan.BHYTMaSoThe = $event.toUpperCase();
        }
        if (this.maSoTheDaTimKiem == $event && this.ngaySinhDaTimKiem == this.tiepNhanBenhNhan.NgayThangNamSinh
            && this.hoTenDaTimKiem == this.tiepNhanBenhNhan.HoTen) {
            this.isSearchQRCodeEnable = false;
        }
        else {
            this.isSearchQRCodeEnable = true;
        }
    }
    ThongTinBenhNhanNgaySinhChange($event) {
        if (this.hoTenDaTimKiem == this.tiepNhanBenhNhan.HoTen && this.ngaySinhDaTimKiem == $event
            && this.maSoTheDaTimKiem == this.tiepNhanBenhNhan.BHYTMaSoThe) {
            this.isSearchQRCodeEnable = false;
        }
        else {
            this.isSearchQRCodeEnable = true;
        }
        if (this.tiepNhanBenhNhan.NgayThangNamSinh != null) {
            this.tiepNhanBenhNhan.NamSinh = this.tiepNhanBenhNhan.NgayThangNamSinh.getFullYear();
            this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);
        }
        if ($event == null || $event == undefined) {
            this.under6yearsold = false;
            if(this.under6yearsold == false)
            {
                this.cloneDiaChiNguoiGiamHoLonHon6Tuoi();
            }

            // kiểm tra khi change ngày tháng năm sinh, nếu ko nhập vào data mà khi đó filed năm sinh đã có thì sẽ ko clear data năm sinh
            if(this.tiepNhanBenhNhan.NamSinh == undefined || this.tiepNhanBenhNhan.NamSinh == null)
            {
                this.tiepNhanBenhNhan.NamSinh = null;
            }
        }
    }

    LoaiDichVuKhacChange($event) {
        this.removeThemDichVuValue();
        //this.themChiDinhDichVuModel.LoaiDichVuKhac = $event;
    }

    loaiTiepNhanChange($event) {
        if ($event == 1) {
            this.tiepNhanBenhNhan.YeuCauKyThuatGrid = [];
            this.tiepNhanBenhNhan.YeuCauKhacGrid = [];
        }
        else if ($event == 2) {
            this.tiepNhanBenhNhan.YeuCauKhamBenhGrid = [];
            this.tiepNhanBenhNhan.YeuCauKhacGrid = [];
        }
        else {
            this.tiepNhanBenhNhan.YeuCauKhamBenhGrid = [];
            this.tiepNhanBenhNhan.YeuCauKyThuatGrid = [];
        }

        this.setDataForDichVuKhac();
        this.refreshGrid();

        this.removeThemDichVuValue();
        this.removeThemGoiValue();
    }



    //#endregion dropdownlist change

    removeThemDichVuValue() {
        //console.log("removeThemDichVuValue");
        this.themChiDinhDichVuModel = new ThemChiDinhDichVu();
        //this.setDuocHuongBHYT();
        this.themChiDinhDichVuModel.ThanhTien = null;
        //this.themChiDinhDichVuModel.DoiTuongUuDaiId = this.tiepNhanBenhNhan.DoiTuongUuDaiId;

        this.loaiTiepNhan = null;
        this.isGoiCoChietKhau = null;
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
    }

    removeThemGoiValue() {
        //console.log("removeThemDichVuValue");
        this.themChiDinhGoiModel = new ThemChiDinhDichVu();
        //this.setDuocHuongBHYT();
        this.themChiDinhGoiModel.ThanhTien = null;
        //this.themChiDinhDichVuModel.DoiTuongUuDaiId = this.tiepNhanBenhNhan.DoiTuongUuDaiId;

        this.loaiTiepNhan = null;
        this.isGoiCoChietKhau = null;
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
    }


    //#region update for grid

    duocHuongBHYTChange($event, id, nhom) {
        //console.log("duocHuongBHYTChange = ", $event, maDichVuId, nhom);
        let modelUpdate = new GridUpdate();
        modelUpdate.model = this.tiepNhanBenhNhan;
        modelUpdate.isChecked = $event;
        modelUpdate.maDichVuId = id;
        modelUpdate.nhom = nhom;
        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        modelUpdate.HoTen = this.tiepNhanBenhNhan.HoTen;
        modelUpdate.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;

        this.validationErrors = null;
        this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/CheckOrUncheckBHYTForDichVu", modelUpdate).subscribe(
            resultData => {
                //console.log("duocHuongBHYTChange = ", resultData);
                this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                this.setDataForDichVuKhac();
                this.refreshGrid();
            },
            (err: any) => {
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    //self.validationErrors.push({ "Message": err.Message });
                    this.notificationService.showError(err.Message);
                }
            });

    }

    changDuocHuongBHYT($event, dataItem) {
        if (!this.checkValidateUpdateThongTinBHYT()) {
            this.notificationService.showError(TiepNhanBenhNhanMessage.MessageBHYTThayDoi);
            return;
        }

        let modelUpdate = new GridUpdate();
        modelUpdate.isChecked = $event;
        modelUpdate.maDichVuId = dataItem.Id;
        modelUpdate.nhom = dataItem.Nhom;
        modelUpdate.yeuCauTiepNhanId = this.id;

        this.validationErrors = null;
        this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/CapNhatDuocHuongBHYTDichVu", modelUpdate).subscribe(
            resultData => {
                this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                this.setDataForDichVuKhac();
                this.refreshGrid();
            },
            (err: any) => {
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    this.notificationService.showError(err.Message);
                }
                dataItem.DuocHuongBHYT = !$event;
            });
    }


    noiThucHienGridChange($event, dataItem) {
        //console.log("noiThucHienGridChange = ", $event, dataItem);
        if ($event == undefined) {
            this.notificationService.showError(TiepNhanBenhNhanMessage.MessagePhaiChonNoiThucHien);
            return;
        }
        let modelUpdate = new GridUpdate();
        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.maDichVuId = dataItem.Id;
        modelUpdate.nhom = dataItem.Nhom;
        modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        modelUpdate.model = this.tiepNhanBenhNhan;
        modelUpdate.NoiThucHienId = $event;

        this.validationErrors = null;
        this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/NoiThucHienChange", modelUpdate).subscribe(
            resultData => {
                //console.log("noiThucHienGridChange = ", resultData);
                if (resultData == null) return;
                this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                this.setDataForDichVuKhac();
                this.refreshGrid();
            },
            (err: any) => {
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    //self.validationErrors.push({ "Message": err.Message });
                    this.notificationService.showError(err.Message);
                }
            });

    }

    removeGridKhac(dataItem) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result == 'Yes') {   
                //console.log("removeGridKhac = ", dataItem);
                let modelUpdate = new GridUpdate();
                modelUpdate.yeuCauTiepNhanId = this.id;
                modelUpdate.maDichVuId = dataItem.Id;
                modelUpdate.nhom = dataItem.Nhom;
                modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                modelUpdate.model = this.tiepNhanBenhNhan;

                this.listChonDichVuChiDinhReLoad = [];
                if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
                    let gridData = this.gridInChiDinh.getAllDataFromDatasource();
                    gridData.forEach(elements => {
                        if (elements.isCheckRowItem == true) {
                            let obj = {
                                Id: elements.Id,
                                NhomId: elements.NhomId
                            };
                            this.listChonDichVuChiDinhReLoad.push(obj);
                        }
                    });
                }
                modelUpdate.ListDichVuCheckTruocDos = this.listChonDichVuChiDinhReLoad;
                this.validationErrors = null;
                this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/RemoveDichVu", modelUpdate).subscribe(
                    resultData => {
                        //console.log("duocHuongBHYTChange = ", resultData);
                        this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                        this.setDataForDichVuKhac();
                        this.refreshGrid();
                        this.getDanhSachGoiBenhNhan(this.tiepNhanBenhNhan.BenhNhanId);
        
                        this.notificationService.showSuccess(TiepNhanBenhNhanMessage.MessageRemoveDichVuSuccessfully);
                    },
                    (err: any) => {
                        if (err != undefined && err.ValidationErrors != null) {
                            this.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            //self.validationErrors.push({ "Message": err.Message });
                            this.notificationService.showError(err.Message);
                        }
                    });         
            }
        });

    }

    removeGridKhacCoChietKhau(item) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result == 'Yes') {   
                //console.log("removeGridKhacCoChietKhau = ", item);
                let modelUpdate = new GridUpdate();
                modelUpdate.yeuCauTiepNhanId = this.id;
                modelUpdate.maDichVuId = item.data[0].items[0].GoiCoChietKhauId;
                //modelUpdate.nhom = item.Nhom;
                modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                modelUpdate.model = this.tiepNhanBenhNhan;
        
                this.validationErrors = null;
                this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/RemoveDichVuCoChietKhau", modelUpdate).subscribe(
                    resultData => {
                        //console.log("duocHuongBHYTChange = ", resultData);
                        this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                        this.setDataForDichVuKhac();
                        this.refreshGrid();
                    },
                    (err: any) => {
                        if (err != undefined && err.ValidationErrors != null) {
                            this.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            //self.validationErrors.push({ "Message": err.Message });
                            this.notificationService.showError(err.Message);
                        }
                    });         
            }
        });

    }

    changeQR($event) {
        if ($event != null) {
            this.modelQRCode = $event;

            this.setValueBHYT(this.modelQRCode);
        }
        else {
        }
        this.isScanF1 = false;
        //console.log("changeQR = ", $event);
    }

    huy() {
        // this.router.navigate(['danh-sach-tiep-nhan/']);
        this.location.back();
    }

    cloneDiaChiNguoiGiamHo() {
        this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = this.tiepNhanBenhNhan.TinhThanhId;
        this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = this.tiepNhanBenhNhan.QuanHuyenId;
        this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = this.tiepNhanBenhNhan.PhuongXaId;
        this.tiepNhanBenhNhan.NguoiLienHeDiaChi = this.tiepNhanBenhNhan.DiaChi;
    }
    cloneDiaChiNguoiGiamHoLonHon6Tuoi() {
        this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = null;
        this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = null;
        this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
        this.tiepNhanBenhNhan.NguoiLienHeDiaChi = null;
    }
    luuPhieu() {
        var self = this;
        self.validationErrors = null;
        let comfrim = "lưu phiếu khám bệnh cho bệnh nhân";
        if(self.tiepNhanBenhNhan.YeuCauKhacGrid == undefined || self.tiepNhanBenhNhan.YeuCauKhacGrid.length == 0)
        {
            comfrim = "lưu thông tin cho người bệnh";
        }

        this.tiepNhanBenhNhan.NguoiGioiThieu = null;
        this.tiepNhanBenhNhan.NoiGioiThieu = null;
        //console.log("-----: ", this.documentType);
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            //console.log("success");
            if (this.isActiveAction != null) {
                this.dialog.closeAll();
                this.isActiveAction = null;
            }

            this.isActiveAction = this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfrim, ""]) }
            }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
                if (result == "Yes") {
                    self.apiService.post<any>("TiepNhanBenhNhan/UpdateYeuCauKhamBenh", this.tiepNhanBenhNhan).subscribe(
                        resultData => {
                            //console.log("result", resultData)
                            //self.router.navigate(['danh-sach-tiep-nhan/']);
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thay đổi"]));
                            //self.ngOnInit();
                            window.location.reload();
                            //confirm


                        },
                        (err: any) => {
                            // self.validationErrors = err.ValidationErrors;
                            if (err != undefined && err.ValidationErrors != null) {
                                let itemGiamHoValidate = err.ValidationErrors.find(p => p.Field == "NguoiLienHeHoTen"
                                    || p.Field == "NguoiLienHeQuanHeNhanThanId" || p.Field == "NguoiLienHeSoDienThoai");
                                if (itemGiamHoValidate != null && itemGiamHoValidate != undefined) {
                                    self.tabStrip.selectTab(2);;
                                }

                                self.validationErrors = err.ValidationErrors;
                            }
                            else if (err != undefined && err.Errors == null) {
                                //self.validationErrors.push({ "Message": err.Message });
                                self.notificationService.showError(err.Message);
                            }
                        });



                    //
                }
            });
        }
    }

    themTaiLieuButton() {
        // if(this.themTaiLieu.LoaiId != null && this.themTaiLieu.TaiLieu != null){
        //     console.log(this.themTaiLieu);

        this.validationErrors = null;
        this.apiService.post<any>("TiepNhanBenhNhan/GetNameLoaiTaiLieuDinhKem", this.themTaiLieu).subscribe(
            resultData => {
                let taiLieuNew = new HoSoYeuCauTiepNhanViewModel();
                taiLieuNew.Ma = this.themTaiLieu.TaiLieu.Ma;
                taiLieuNew.Ten = this.themTaiLieu.TaiLieu.Ten;
                taiLieuNew.TenGuid = this.themTaiLieu.TaiLieu.TenGuid;
                taiLieuNew.MoTa = this.themTaiLieu.MoTa;
                taiLieuNew.DuongDan = this.themTaiLieu.TaiLieu.DuongDan;
                taiLieuNew.KichThuoc = this.themTaiLieu.TaiLieu.KichThuoc;
                taiLieuNew.LoaiHoSoYeuCauTiepNhanId = this.themTaiLieu.LoaiId;
                taiLieuNew.LoaiDisplay = resultData;
                taiLieuNew.DuongDanTmp = this.themTaiLieu.TaiLieu.DuongDanTmp;

                taiLieuNew.AddNew = true;
                this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.push(taiLieuNew);
                this.setDataForTaiLieuDinhKem();

                this.clearThemTaiLieu();
            },
            (err: any) => {
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    //self.validationErrors.push({ "Message": err.Message });
                    this.notificationService.showError(err.Message);
                }
            });


        //}
    }

    removeTaiLieu(data: HoSoYeuCauTiepNhanViewModel) {
        //console.log("removeTaiLieu = ", data);
        // this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans = this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.filter(p => p.TenGuid != data.TenGuid
        //     && p.Ten != data.Ten && p.LoaiHoSoYeuCauTiepNhanId != data.LoaiHoSoYeuCauTiepNhanId
        //     && p.MoTa != data.MoTa);
        this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.splice(this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.indexOf(data), 1);
        this.setDataForTaiLieuDinhKem();
    }

    viewTaiLieu(file: HoSoYeuCauTiepNhanViewModel) {
        //console.log("viewTaiLieu = ", dataItem);
        let duongDan = file.DuongDan;

        if (file.AddNew) {
            duongDan = file.DuongDanTmp;
        }

        const params = new HttpParams(
            {
                fromObject: {
                    tenGuid: file.TenGuid,
                    duongDan: duongDan,
                }
            });
        // let response = await this.apiService.get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params).toPromise();
        this.apiService.get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params).subscribe((resp) => {
            if (resp) {

                if (file.TenGuid.indexOf(".pdf") != -1 || file.TenGuid.indexOf(".PDF") != -1) {
                    var html = "<div class=\"showFile\">";
                    html += "<div class=\"overlay\"></div>";
                    html += "<div class=\"middle\">";
                    html += "<div class=\"inner\">";
                    html += "<span class=\"close\" onclick=\"$('.showFile').detach();\">X</span>";
                    html += "<iframe src='" + resp + "' style=\"width:770px; height:570px;\" frameborder=\"0\"></iframe>";
                    html += "</div>";
                    html += "</div>";
                    html += "</div>"
                    $(html).appendTo('app-main');
                }
                else {
                    var html = "<div class=\"showFile\">";
                    html += "<div class=\"overlay\"></div>";
                    html += "<div class=\"middle\">";
                    html += "<div class=\"inner\">";
                    html += "<span class=\"close\" onclick=\"$('.showFile').detach();\">X</span>";
                    html += "<img src='" + resp + "' alt='' style=\"max-width: 770px;max-height: 570px;\"/>";
                    html += "</div>";
                    html += "</div>";
                    html += "</div>"
                    $(html).appendTo('app-main');
                }

            }
        })

    }
    //#endregion update for grid

    removeGridBHTN(id: number) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result == 'Yes') {   
                this.validationErrors = null;
                this.apiService.post<any>("TiepNhanBenhNhan/IsHaveCongNo/?yeuCauTiepNhanId=" + this.id
                    + "&congTyId=" + id).subscribe(
                        resultData => {
                            if (resultData != null && resultData != undefined && resultData == false) {
                                //remove BHTN
                                let index = this.lstBHTN.find(obj => obj.CongTyBaoHiemTuNhanId == id);
                                this.lstBHTN.splice(this.lstBHTN.indexOf(index), 1)
                                this.gridDataSourceBHTN = {
                                    data: this.lstBHTN,
                                    total: this.lstBHTN.length
                                }
                                this.updateBHTN();
                            }
                            else {
                                this.notificationService.showError(TiepNhanBenhNhanMessage.MessageBHTNCongNo);
                            }
                        },
                        (err: any) => {
                            if (err != undefined && err.ValidationErrors != null) {
                                this.validationErrors = err.ValidationErrors;
                            }
                            else if (err != undefined && err.Errors == null) {
                                //self.validationErrors.push({ "Message": err.Message });
                                this.notificationService.showError(err.Message);
                            }
                        });    
            }
        });

    }

    LoaiGiaChange($event: number) {
        let model = new GetDonGiaVo();
        if ($event != undefined && $event != null
            && this.themChiDinhDichVuModel.MaDichVuId != null && this.themChiDinhDichVuModel.MaDichVuId != undefined) {
            //console.log($event);
            model.NhomGiaDichVuKhamBenhBenhVienId = $event;
            model.DichVuKhamBenhBenhVienId = this.themChiDinhDichVuModel.MaDichVuId;
            this.apiService.post<any>("TiepNhanBenhNhan/GetDonGia", model).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        this.themChiDinhDichVuModel.DonGia = resultData;
                        this.setThanhTienForDichVuModel();
                    }
                    else {
                        this.themChiDinhDichVuModel.DonGia = null;
                        this.setThanhTienForDichVuModel();
                    }
                },
                (err: any) => {
                });
        }
        else {
            this.themChiDinhDichVuModel.DonGia = null;
        }

    }

    DonGiaChange($event) {
        if (this.themChiDinhDichVuModel.SoLuong != undefined && this.themChiDinhDichVuModel.SoLuong != null
            && $event != undefined && $event != null) {
            this.themChiDinhDichVuModel.ThanhTien = this.themChiDinhDichVuModel.SoLuong * $event;
        }
        else {
            this.themChiDinhDichVuModel.ThanhTien = null;
        }
    }

    lyDoVaoVienChange($event, removeBHYT: boolean = false) {
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, $event);
        // if ($event == 3 || removeBHYT == true) {
        //     this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, $event) 
        //     //{

        //     // let modelUpdate = new GridUpdate();
        //     // modelUpdate.lstChiDinhDichVu = new Array<ListChiDinhNeedUpdate>();

        //     // ;

        //     // modelUpdate.yeuCauTiepNhanId = this.id;
        //     // modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        //     // modelUpdate.HoTen = this.tiepNhanBenhNhan.HoTen;
        //     // modelUpdate.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;

        //     // this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(obj => {
        //     //     if (obj.IsGoiCoChietKhau != true) {
        //     //         let dichVu = new ListChiDinhNeedUpdate();
        //     //         dichVu.Nhom = obj.Nhom;
        //     //         dichVu.DichVuId = obj.MaDichVuId;

        //     //         modelUpdate.lstChiDinhDichVu.push(dichVu);
        //     //     }
        //     // })

        //     // this.validationErrors = null;
        //     // this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/HuyBHYTChoChiDinhDichVu", modelUpdate).subscribe(
        //     //     resultData => {
        //     //         //console.log("duocHuongBHYTChange = ", resultData);
        //     //         this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
        //     //         this.setDataForDichVuKhac();
        //     //         this.refreshGrid();

        //     //         this.removeBHYT = false;
        //     //     },
        //     //     (err: any) => {
        //     //         this.removeBHYT = false;
        //     //         if (err != undefined && err.ValidationErrors != null) {
        //     //             this.validationErrors = err.ValidationErrors;
        //     //         }
        //     //         else if (err != undefined && err.Errors == null) {
        //     //             //self.validationErrors.push({ "Message": err.Message });
        //     //             this.notificationService.showError(err.Message);
        //     //         }
        //     //     });

        // }
    }

    tuNhapChange($event) {
        if ($event == true) {
            this.tiepNhanBenhNhan.CoBHYT = true;
            this.tiepNhanBenhNhan.IsCheckedBHYT = null;
            this.tiepNhanBenhNhan.LyDoVaoVien = 1;
        }
        else
        {
            this.tiepNhanBenhNhan.LyDoVaoVien = null;
        }
        if ($event == false && this.id != null && this.id != undefined) {
            this.tiepNhanBenhNhan.CoBHYT = false;
            
            this.isHaveBHYTForTheFistLoad = false;
            this.isHaveBHYTUpdated = false;
            this.coBHYTChange(false);
            this.tiepNhanBenhNhan.LyDoVaoVien = null;
        }
    }

    blurBHYTMucHuong($event) {
        //console.log("blurBHYTMucHuong");
        this.mucHuongChange();
    }

    onKeyBHYTMucHuong($event) {
        if ($event.keyCode === 13) {
            //console.log("onKeyBHYTMucHuong");
            this.mucHuongChange();
        }
    }

    soNhaDuongPhoChange(model) {

        this.tiepNhanBenhNhan.DiaChi = model;

        if (this.under6yearsold) {
            this.cloneDiaChiNguoiGiamHo();
        }
        if(this.under6yearsold == false)
        {
            this.cloneDiaChiNguoiGiamHoLonHon6Tuoi();
        }
        // if(model != null && model != undefined && model != ""){
        //     this.tiepNhanBenhNhan.DiaChi = model[0].toUpperCase() + model.slice(1);
        // }
        // if (model != null && model != undefined && model != "") {
        //     let arrayDiaChi = model.split(" ");
        //     let resultString = "";
        //     //console.log("soNhaDuongPhoChange = ", arrayDiaChi);
        //     
        //     arrayDiaChi.forEach(e => {
        //         if (e != undefined && e != null && e != "") {
        //             if (resultString == "") {
        //                 resultString = e[0].toUpperCase() + e.slice(1);
        //             }
        //             else {
        //                 resultString = resultString + " " + e[0].toUpperCase() + e.slice(1);
        //             }
        //         }
        //         else if (e == "") {
        //             resultString = resultString + " ";
        //         }
        //     });
        //     this.tiepNhanBenhNhan.DiaChi = resultString;
        //     //this.tiepNhanBenhNhan.DiaChi = model[0].toUpperCase() + model.slice(1);
        // }
    }

    mucHuongChange() {
        //this.tiepNhanBenhNhan.BHYTMucHuong = $event;

        let modelUpdate = new GridUpdate();
        modelUpdate.model = this.tiepNhanBenhNhan;
        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        modelUpdate.HoTen = this.tiepNhanBenhNhan.HoTen;
        modelUpdate.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;

        //this.validationErrors = null;
        // this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/SetMucHuongChoDichVu", modelUpdate).subscribe(
        //     resultData => {
        //         //console.log("duocHuongBHYTChange = ", resultData);
        //         this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
        //         this.setDataForDichVuKhac();
        //         this.refreshGrid();
        //     },
        //     (err: any) => {
        //         if (err != undefined && err.ValidationErrors != null) {
        //             this.validationErrors = err.ValidationErrors;
        //         }
        //         else if (err != undefined && err.Errors == null) {
        //             //self.validationErrors.push({ "Message": err.Message });
        //             this.notificationService.showError(err.Message);
        //         }
        //     });
    }

    bindMucHuongFromSoTheBHYT(soTheBHYT: string) {
        if (soTheBHYT != undefined && soTheBHYT != null && soTheBHYT.length >= 3) {
            let maTheArray = soTheBHYT.split("");
            if (maTheArray[2] == '1') {
                this.tiepNhanBenhNhan.BHYTMucHuong = 100;
            }
            else if (maTheArray[2] == '2') {
                this.tiepNhanBenhNhan.BHYTMucHuong = 100;
            }
            else if (maTheArray[2] == '3') {
                this.tiepNhanBenhNhan.BHYTMucHuong = 95;
            }
            else if (maTheArray[2] == '4') {
                this.tiepNhanBenhNhan.BHYTMucHuong = 80;
            }
            else {
                this.tiepNhanBenhNhan.BHYTMucHuong = 100;
            }
        }
    }

    coBHYTChange($event) {
        this.tiepNhanBenhNhan.CoBHYT = $event;

        this.isDisableNhapTayForUpdate = false;

        if ($event != true) {
            this.tiepNhanBenhNhan.TuNhap = false;

            this.isHaveBHYTForTheFistLoad = false;
            this.isHaveBHYTUpdated = false;
            
            this.HoVaTenTextbox.focus();
            this.tiepNhanBenhNhan.LyDoVaoVien = null;
            this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
            // let modelUpdate = new GridUpdate();
            // modelUpdate.lstChiDinhDichVu = new Array<ListChiDinhNeedUpdate>();

            // ;

            // modelUpdate.yeuCauTiepNhanId = this.id;
            // modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
            // modelUpdate.HoTen = this.tiepNhanBenhNhan.HoTen;
            // modelUpdate.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;

            // this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(obj => {
            //     if (obj.IsGoiCoChietKhau != true) {
            //         let dichVu = new ListChiDinhNeedUpdate();
            //         dichVu.Nhom = obj.Nhom;
            //         dichVu.DichVuId = obj.MaDichVuId;

            //         modelUpdate.lstChiDinhDichVu.push(dichVu);
            //     }
            // })


            // this.validationErrors = null;
            // this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/HuyBHYTChoChiDinhDichVuForCoBHYTChange", modelUpdate).subscribe(
            //     resultData => {
            //         //console.log("duocHuongBHYTChange = ", resultData);
            //         this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
            //         this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
            //         this.setDataForDichVuKhac();
            //         this.refreshGrid();
            //     },
            //     (err: any) => {
            //         if (err != undefined && err.ValidationErrors != null) {
            //             this.validationErrors = err.ValidationErrors;
            //         }
            //         else if (err != undefined && err.Errors == null) {
            //             //self.validationErrors.push({ "Message": err.Message });
            //             this.notificationService.showError(err.Message);
            //         }
            //     });
            this.clearDataUpdateThongTinBHYTFromModel();
        }
        else {
            this.tiepNhanBenhNhan.LyDoVaoVien = 1;
            this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
        }
    }

    clearDataUpdateThongTinBHYTFromModel() {
        this.tiepNhanBenhNhan.CoBHYT = false;
        this.tiepNhanBenhNhan.TuNhap = false;
        this.tiepNhanBenhNhan.BHYTCoQuanBHXH = null;
        this.tiepNhanBenhNhan.BHYTDiaChi = null;
        this.tiepNhanBenhNhan.BHYTMaDKBD = null;
        this.tiepNhanBenhNhan.BHYTMaSoThe = null;
        this.tiepNhanBenhNhan.BHYTMucHuong = null;
        this.tiepNhanBenhNhan.BHYTNgayDu5Nam = null;
        this.tiepNhanBenhNhan.BHYTNgayHetHan = null;
        this.tiepNhanBenhNhan.BHYTNgayHieuLuc = null;
        //this.tiepNhanBenhNhan.IsCheckedBHYT = model.IsCheckedBHYT;
        this.tiepNhanBenhNhan.LyDoVaoVien = 1;
        this.tiepNhanBenhNhan.NoiDangKyBHYT = null;
    }

    clearDataUpdateThongTinBHYT() {
        this.tiepNhanBenhNhan.BHYTCoQuanBHXH = null;
        this.tiepNhanBenhNhan.BHYTDiaChi = null;
        this.tiepNhanBenhNhan.BHYTMaDKBD = null;
        this.tiepNhanBenhNhan.BHYTMaSoThe = null;
        this.tiepNhanBenhNhan.BHYTMucHuong = null;
        this.tiepNhanBenhNhan.BHYTNgayDu5Nam = null;
        this.tiepNhanBenhNhan.BHYTNgayHetHan = null;
        this.tiepNhanBenhNhan.BHYTNgayHieuLuc = null;
        //this.tiepNhanBenhNhan.IsCheckedBHYT = model.IsCheckedBHYT;
        this.tiepNhanBenhNhan.LyDoVaoVien = 1;
        this.tiepNhanBenhNhan.NoiDangKyBHYT = null;
    }

    // onSelectChangeVoucher(voucherId: any) {
    //     var last = voucherId[voucherId.length - 1];
    //     if (last == undefined)
    //         this.loaiVoucher = 0;

    //     this.apiService.post<any>("ThuNgan/GetMaVoucher?loaiVoucher=" + this.loaiVoucher + "&yeucauTiepNhanId=" + this.id).subscribe(resultData => {
    //         if (resultData !== null && resultData !== undefined) {
    //             this.voucherLookupItemVo = resultData;
    //             this.voucherLookupItemVo.forEach(element => {
    //                 if (element.KeyId == last) {
    //                     this.loaiVoucher = element.LoaiVoucher;
    //                 }
    //             });
    //         }
    //     });
    // }
    onOpenChange() {
        this.voucherList.getDataForLookup();
    }

    NamSinhChange(event) {
        //console.log("NamSinhChange = ", event);
        let dateNow = new Date();
        if (event >= dateNow.getFullYear() - 6) {
            this.under6yearsold = true;
            this.soTuoiDisplay = dateNow.getFullYear() - event + " Tuổi " + 0 + " Tháng " + 0 + " Ngày ";
            this.cloneDiaChiNguoiGiamHo();
        }
        else {
            this.under6yearsold = false;
            this.soTuoiDisplay = dateNow.getFullYear() - event + " Tuổi";
        }

        //this.soTuoiDisplay = dateNow.getFullYear() - event + " Tuổi " + 0 + " Tháng " + 0 + " Ngày ";
        if(this.under6yearsold == true)
        {
            this.cloneDiaChiNguoiGiamHo();
        }
        if(this.under6yearsold == false)
        {
            this.cloneDiaChiNguoiGiamHoLonHon6Tuoi();
        }
    }

    getAge(date_1, date_2) {
        //console.log("getAge = ",date_1, date_2);
        // if(){

        if ((date_1 == undefined || date_1 == null) && this.tiepNhanBenhNhan.NamSinh != undefined && this.tiepNhanBenhNhan.NamSinh != null && this.tiepNhanBenhNhan.NamSinh != 0) {
            date_1 = new Date(this.tiepNhanBenhNhan.NamSinh, 1, 1);
        }
        
        date_1 = new Date(date_1);
        date_2 = new Date(date_2);
        // }
        //convert to UTC
        let date2_UTC = new Date(Date.UTC(date_2.getFullYear(), date_2.getMonth(), date_2.getDate()));
        let date1_UTC = new Date(Date.UTC(date_1.getFullYear(), date_1.getMonth(), date_1.getDate()));


        let yAppendix, mAppendix, dAppendix;


        //--------------------------------------------------------------
        let days = date2_UTC.getDate() - date1_UTC.getDate();
        if (days < 0) {

            date2_UTC.setMonth(date2_UTC.getMonth() - 1);
            days += this.DaysInMonth(date2_UTC);
        }
        //--------------------------------------------------------------
        let months = date2_UTC.getMonth() - date1_UTC.getMonth();
        if (months < 0) {
            date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
            months += 12;
        }
        //--------------------------------------------------------------
        let years = date2_UTC.getFullYear() - date1_UTC.getFullYear();




        if (years > 1) yAppendix = " years";
        else yAppendix = " year";
        if (months > 1) mAppendix = " months";
        else mAppendix = " month";
        if (days > 1) dAppendix = " days";
        else dAppendix = " day";

        if ((years < 6 && years >= 0) || (years == 6 && months == 0 && days == 0)) {
            this.under6yearsold = true;
            this.soTuoiDisplay = years + " Tuổi " + months + " Tháng " + days + " Ngày ";
            this.cloneDiaChiNguoiGiamHo();
        }
        else {
            this.under6yearsold = false;
            this.soTuoiDisplay = years + " Tuổi";
            this.cloneDiaChiNguoiGiamHoLonHon6Tuoi();
          
        }

        //this.soTuoiDisplay = years + " Tuổi " + months + " Tháng " + days + " Ngày ";
        //console.log(years + yAppendix + ", " + months + mAppendix + ", and " + days + dAppendix);
    }


    DaysInMonth(date2_UTC) {
        let monthStart: any = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
        let monthEnd: any = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
        let monthLength: any = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
        return monthLength;
    }

    InTheBenhNhanTiepNhan() {
        this.dialog
            .open(TheBenhNhanPopupComponent, {
                disableClose: true,
                width: "466px",
                data: this.id,
            });
    }

    InVongDeoTay() {
        this.dialog
            .open(VongDeoTayPopupComponent, {
                disableClose: true,
                height: "780px",
                width: "200px",
                data: this.id,
            });
    }
    //cheat for tab on [BVHD-1506]
    onKeyScanner(event) {
        //console.log("onKeyScanner = ", event);
        if (event.keyCode === 9) {
            //console.log(this.HoVaTenTextbox);
            this.HoVaTenTextbox.focus();
        }
    }

    onKeyHinhThucDen(event) {
        if (event.keyCode === 9) {
            this.tabStrip.selectTab(0);
            let self = this;
            setTimeout(function () {
                //console.log("setTimeout = ", self.dichVuCombobox);
                if (self.dichVuCombobox != undefined) {
                    self.dichVuCombobox.focusManual();
                }
            }, 100);
        }
    }

    tabscripChange(event) {
        //console.log("tabscripChange = ", $event);
        if (event.keyCode === 9 && (event.path != null && event.path[0].id == "k-tabstrip-tab-0")) {
            this.tabStrip.selectTab(0);
            let self = this;
            setTimeout(function () {
                //console.log("setTimeout = ", self.dichVuCombobox);
                if (self.dichVuCombobox != undefined) {
                    self.dichVuCombobox.focusManual();
                }
            }, 100);
        }
    }

    ngayCoHieuLucChange($event) {
        //console.log("ngayCoHieuLucChange, event = ", $event, " , ngaycohieuluc = ", this.tiepNhanBenhNhan.BHYTNgayHieuLuc, this.tiepNhanBenhNhan.BHYTNgayHetHan);
        if ($event != null && $event != undefined) {
            //console.log("ngayCoHieuLucChange, event = ", $event, " , ngaycohieuluc = ", this.tiepNhanBenhNhan.BHYTNgayHieuLuc, this.tiepNhanBenhNhan.BHYTNgayHetHan);
            // let dateFormat = new Date($event);
            // this.tiepNhanBenhNhan.BHYTNgayHetHan = new Date(dateFormat.getFullYear() + 1, dateFormat.getMonth(), dateFormat.getDate());

            //BVHD-3518: mặc định là ngà 31/12 của năm hiện tại
            let currentDate = new Date();
            this.tiepNhanBenhNhan.BHYTNgayHetHan = new Date(currentDate.getFullYear(), 11, 31);
        }

    }

    OnChangeHinhThucDen(dataEvent: any) {
        if (dataEvent != undefined && dataEvent.KeyId === 2) {
            this.tiepNhanBenhNhan.NoiGioiThieuId = 1;
        }
    }

    loaiGiaGridChange($event, dataItem) {
        if ($event == undefined || $event == null) {
            this.notificationService.showError(TiepNhanBenhNhanMessage.MessagePhaiChonLoaiGia);
            this.refreshGrid();
            return;
        }

        let modelUpdate: any = {};
        modelUpdate.lstChiDinhDichVu = new Array<ListChiDinhNeedUpdate>();

        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.yeuCauId = dataItem.Id;
        modelUpdate.nhom = dataItem.Nhom;
        modelUpdate.loaiGiaId = $event

        this.validationErrors = null;
        this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/LoaiGiaGridChange", modelUpdate).subscribe(
            resultData => {
                //console.log("duocHuongBHYTChange = ", resultData);
                this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
                this.setDataForDichVuKhac();
                this.refreshGrid();
            },
            (err: any) => {
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    //self.validationErrors.push({ "Message": err.Message });
                    this.notificationService.showError(err.Message);
                }
            });

    }

    soLuongGridChange($event, dataItem) {
        // if ($event == undefined || $event == null) {
        //     this.notificationService.showError(TiepNhanBenhNhanMessage.MessagePhaiChonSoLuong);
        //     this.refreshGrid();
        //     return;
        // }

        // let modelUpdate: any = {};
        // modelUpdate.lstChiDinhDichVu = new Array<ListChiDinhNeedUpdate>();

        // modelUpdate.yeuCauTiepNhanId = this.id;
        // modelUpdate.yeuCauId = dataItem.Id;
        // modelUpdate.nhom = dataItem.Nhom;
        // modelUpdate.soLuong = $event

        // this.validationErrors = null;
        // this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/SoLuongGridChange", modelUpdate).subscribe(
        //     resultData => {
        //         //console.log("duocHuongBHYTChange = ", resultData);
        //         this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
        //         this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
        //         this.setDataForDichVuKhac();
        //         this.refreshGrid();
        //     },
        //     (err: any) => {
        //         if (err != undefined && err.ValidationErrors != null) {
        //             this.validationErrors = err.ValidationErrors;
        //         }
        //         else if (err != undefined && err.Errors == null) {
        //             //self.validationErrors.push({ "Message": err.Message });
        //             this.notificationService.showError(err.Message);
        //         }
        //     });
    }

    soLuongBlur(dataItem){
        //console.log("soLuongBlur = ", dataItem);
        let $event = dataItem.SoLuong;
        if ($event == undefined || $event == null) {
            this.notificationService.showError(TiepNhanBenhNhanMessage.MessagePhaiChonSoLuong);
            this.refreshGrid();
            return;
        }

        let modelUpdate: any = {};
        modelUpdate.lstChiDinhDichVu = new Array<ListChiDinhNeedUpdate>();

        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.yeuCauId = dataItem.Id;
        modelUpdate.nhom = dataItem.Nhom;
        modelUpdate.soLuong = $event

        this.validationErrors = null;
        this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/SoLuongGridChange", modelUpdate).subscribe(
            resultData => {
                //console.log("duocHuongBHYTChange = ", resultData);
                this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
                this.setDataForDichVuKhac();
                this.refreshGrid();
            },
            (err: any) => {
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    //self.validationErrors.push({ "Message": err.Message });
                    this.notificationService.showError(err.Message);
                }
            });
    }

    onKeyMaDichVu($event) {
        if ($event.keyCode == 13) {
            if (this.maDichVuDisabled != true) {
                this.themChiDinhDichVuNew();
            }
            else {
                this.maDichVuDisabled = false;
            }
        }

        //this.countCheck++;
    }

    openCombobox($event) {
        //console.log("openCombobox = ", $event);
        //this.countCheck = 0;
        if ($event) {
            this.maDichVuDisabled = true;
        }
        else {
            this.maDichVuDisabled = false;
        }
    }

    getDanhSachGoiBenhNhan(benhNhanId: number) {
        this.apiService.post<any>("TiepNhanBenhNhan/GetMarketingForBenhNhan?benhNhanId=" + benhNhanId).subscribe(resultData => {
            this.danhSachGoiDaChonTrongYCTN = resultData;
            //console.log("getDanhSachGoiBenhNhan = ", resultData);
            if (resultData !== null && resultData !== undefined && resultData.length > 0) {
                this.suDungGoiMarketingModelTemp = true;
                this.disabledCheckboxMarketing = true;
            }
            else {
                this.suDungGoiMarketingModelTemp = false;
                this.disabledCheckboxMarketing = false;
            }
        });
    }


    setUpDataTooltip(dataItem) {
        //console.log("setUpDataTooltip = ", dataItem, dataItem.Id, dataItem.TenGoiChietKhau);
        this.displayToolTipGrid = dataItem.TenGoiChietKhau;
    }

    suDungGoiMarketingChange(event) {
        //console.log("suDungGoiMarketingChange = ", event);
        if (event) {
            this.openPopupGoiDichVu();
        }
    }

    showPopupMarketingWithHyperlink(item) {
        //console.log("showPopupMarketingWithHyperlink = ", item);
        this.openPopupGoiDichVu(item);
    }

    openPopupGoiDichVu(danhSachGoiDaChon: DanhSachGoiChon = null) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            let duocHuongBHYT = this.kiemTraTheBHYTHieuLucHienTai();

            //----------------------------//
            this.listChonDichVuChiDinhReLoad = [];
            this.listChonDichVuChiDinh = [];
            if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
                let gridData = this.gridInChiDinh.getAllDataFromDatasource();



                gridData.forEach(elements => {
                    if (elements.isCheckRowItem == true) {

                        let obj = {
                            Id: elements.Id,
                            NhomId: elements.NhomId
                        };
                        this.listChonDichVuChiDinhReLoad.push(obj);
                    }
                });
            }
         //---------------------------//
            self.dialog.open(PopupMarketingTnbnUpdateComponent, {
                disableClose: false,
                width: '1800px',
                data: {
                    benhNhanId: this.tiepNhanBenhNhan.BenhNhanId, itemPopup: danhSachGoiDaChon
                    , duocHuongBHYT: duocHuongBHYT //this.themChiDinhDichVuModel.DuocHuongBHYT
                    , yctnId: this.id
                    , mucHuong: this.tiepNhanBenhNhan.BHYTMucHuong
                    , danhSachDichVuDangCo: this.tiepNhanBenhNhan.YeuCauKhacGrid
                    ,ListDichVuCheckTruocDos:this.listChonDichVuChiDinhReLoad
                }
            }).afterClosed().subscribe(result => {
                if (result != undefined && result != null) {
                    self.tiepNhanBenhNhan.YeuCauKhacGrid = result;
                    self.setDataForDichVuKhac();
                    self.getDanhSachGoiBenhNhan(self.tiepNhanBenhNhan.BenhNhanId);
                    self.refreshGrid();
                }
                self.removeThemDichVuValue();
                self.removeThemGoiValue();

                let findDvGoi = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau)
                if (result == undefined && this.disabledCheckboxMarketing != true
                    && findDvGoi.length == 0) {
                    this.suDungGoiMarketingModelTemp = false;
                }
            });
        }
        else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    removeGoi(item) {
        console.log("removeGoi = ", item, this.tiepNhanBenhNhan.YeuCauKhacGrid);

        item.YeuCauTiepNhanId = this.id;

        if (this.isActiveAction != null) {
            this.dialog.closeAll();
            this.isActiveAction = null;
        }

        this.isActiveAction = this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: TiepNhanBenhNhanMessage.MessageConfirmRemoveGoi }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result == "Yes") {
                this.removeGoiGiuLaiDichVu(item);

            }
            else {
                this.removeGoiKhongGiuLaiDichVu(item);
            }
        });

        //this.removeGoiDaChon(item.ChuongTrinhGoiDichVuId);

    }


    removeGoiGiuLaiDichVu(model) {
        this.apiService.post<any>("TiepNhanBenhNhan/XoaGoiGiuLaiDichVu", model).subscribe(
            resultData => {
                //this.dialogRef.close(resultData);
                if (resultData != null && resultData != undefined) {
                    this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                    this.setDataForDichVuKhac();
                    this.refreshGrid();
                    this.removeThemDichVuValue();
                    this.removeThemGoiValue();
                    this.getDanhSachGoiBenhNhan(this.tiepNhanBenhNhan.BenhNhanId);
                }
            },
            (err: any) => {
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    this.notificationService.showError(err.Message);
                }
            });
    }

    removeGoiKhongGiuLaiDichVu(model) {
        this.apiService.post<any>("TiepNhanBenhNhan/XoaGoiKhongGiuLaiDichVu", model).subscribe(
            resultData => {
                //this.dialogRef.close(resultData);
                if (resultData != null && resultData != undefined) {
                    this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                    this.setDataForDichVuKhac();
                    this.refreshGrid();
                    this.removeThemDichVuValue();
                    this.removeThemGoiValue();
                    this.getDanhSachGoiBenhNhan(this.tiepNhanBenhNhan.BenhNhanId);
                }
            },
            (err: any) => {
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    this.notificationService.showError(err.Message);
                }
            });
    }

    //============================================================Xử lý thông tin voucher========================================//
    public listVoucherItem: Array<string> = [];
    newBarcode: string = "";
    public value: any = [];
    modelQRCodeVoucher: any;

    QuetMaQRCodeVoucherClick() {
        let elementBarcode: HTMLElement = document.getElementById("barcodeActive") as HTMLElement;
        if (elementBarcode != undefined) {
            elementBarcode.click();
        }
    }

    changeVoucherQR($event) {
        if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
            this.modelQRCodeVoucher = $event;
            var maVoucher = $event.split("@");
            if (maVoucher.length > 1) {
                this.kiemTraThongTinMaVoucher(maVoucher[0]);
            } else {
                this.notificationService.showError("Mã voucher không hợp lệ.")
            }
        }
    }
    
    getThongTinVoucher(id : any){  
        this.apiService.get<any>("ThuNgan/GetMaVoucher?yeucauTiepNhanId=" + id).subscribe(
            resultData => {
                if(resultData !== undefined && resultData !== null){
                    this.tiepNhanBenhNhan.LstMaVoucher =[];
                    resultData.forEach(item => {
                        this.value.push(item.DisplayName);   
                        this.listVoucherItem.push(item.KeyId + "|" + item.DisplayName);                   
                    });
                    this.tiepNhanBenhNhan.LstMaVoucher = this.listVoucherItem;  
                }               
            }
        )
    }

    kiemTraThongTinMaVoucher(maVoucher: any) {
        this.tiepNhanBenhNhan.LstMaVoucher =[];        
        this.apiService.post<any>("TiepNhanBenhNhan/KiemTraVoucherHopLe?maVoucher=" + maVoucher)
            .subscribe((resultData) => {               
                if (resultData.Item1 === 0) {
                    this.value = []; 
                    this.notificationService.showError(resultData.Item2);
                    this.newBarcode = "";
                } else {
                    this.notificationService.showSuccess(resultData.Item2);
                    //====================neu voucher thành công====================
                    this.value.push(maVoucher);                                 
                    this.listVoucherItem.push(resultData.Item1 + "|" + maVoucher);
                    this.newBarcode = "";
                }
            });            
        this.tiepNhanBenhNhan.LstMaVoucher = this.listVoucherItem;
    }

    public open(): void {
        this.multiselect.toggle(false);
    }

    removeTag(ev:any) {       
        this.KiemTraTheVoucherSuDung(ev.dataItem);       
    }

    KiemTraTheVoucherSuDung(theVoucher: any){
        let thongTinVoucherTheoYeuCauTiepNhan = {} as ThongTinVoucherTheoYeuCauTiepNhan;
        thongTinVoucherTheoYeuCauTiepNhan.TheVoucher = theVoucher;
        thongTinVoucherTheoYeuCauTiepNhan.YeucauTiepNhanId = this.id;
        this.apiService.post<any>("TiepNhanBenhNhan/KiemTraTheVoucherSuDung", thongTinVoucherTheoYeuCauTiepNhan)
          .subscribe((resultData) => {                 
            if (resultData.Item1) { 
                this.value = [];                 
              this.notificationService.showError(resultData.Item2);   
              this.getThongTinVoucher(this.id);
              this.newBarcode = "";  
              return true;           
            }else{    
                let maVouchers = [];                               
                if(this.tiepNhanBenhNhan.LstMaVoucher.length > 0){
                    this.tiepNhanBenhNhan.LstMaVoucher.forEach(element => {
                        var dataVoucher =  element.split("|");
                          if(dataVoucher[1] !== theVoucher){
                              maVouchers.push(dataVoucher[0] + "|" + dataVoucher[1])
                          }
                      });
                      this.listVoucherItem = maVouchers;
                      this.tiepNhanBenhNhan.LstMaVoucher = maVouchers;
                      this.newBarcode = "";                       
                } 
            }     
          });         
    }

    blurVoucher() {
        if (this.newBarcode != "") {
            this.kiemTraThongTinMaVoucher(this.newBarcode);
        };
    }

    onKeyBarCode(event: any) {
        if (event.keyCode === 13) {
            this.multiselect.blur();
            this.multiselect.focus();
        }
    }

    public filterChange(filter: any): void {
        if (filter != null && filter != "") {
            this.newBarcode = filter;
        }
    }
    showTaoYCTNMoi(){
        if(this.tiepNhanBenhNhan.ThoiGianTiepNhan!=null)
        {
            var now=new Date();
            if(typeof(this.tiepNhanBenhNhan.ThoiGianTiepNhan)=="object" && typeof this.tiepNhanBenhNhan.ThoiGianTiepNhan.getMonth === 'function')
            {
                return new Date(this.tiepNhanBenhNhan.ThoiGianTiepNhan.getFullYear(),this.tiepNhanBenhNhan.ThoiGianTiepNhan.getMonth(),this.tiepNhanBenhNhan.ThoiGianTiepNhan.getDate())<
                new Date(now.getFullYear(),now.getMonth(),now.getDate());
            }
            else
            {
                if(typeof(this.tiepNhanBenhNhan.ThoiGianTiepNhan)=="string")
                {
                    var tgtnTemp=new Date(this.tiepNhanBenhNhan.ThoiGianTiepNhan);
                    return new Date(tgtnTemp.getFullYear(),tgtnTemp.getMonth(),tgtnTemp.getDate())<
                    new Date(now.getFullYear(),now.getMonth(),now.getDate());
                }
                return false;
            }
        }
        return false;
    }
    taoYCTNMoi(){
        var self=this;
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn tạo YCTN mới cho NB này?" }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result == "Yes") {              
                this.apiService.post<any>("TiepNhanBenhNhan/GetYeuCauTiepNhanOfBenhNhanNgoaiNgay?maSoBHYT=" + (self.tiepNhanBenhNhan.BHYTMaSoThe!=null && self.tiepNhanBenhNhan.BHYTMaSoThe!="" && self.tiepNhanBenhNhan.BHYTMaSoThe!="null" && self.tiepNhanBenhNhan.BHYTMaSoThe!="NULL"?self.tiepNhanBenhNhan.BHYTMaSoThe:"") + "&id=" + self.tiepNhanBenhNhan.BenhNhanId).subscribe(
                resultData => {
                    if (resultData != null) {
                        this.dialog.closeAll();
                        this.router.navigate(['them-yeu-cau-tiep-nhan/' + resultData]);
                    }
                },
                () => {
                    //return null;
                    //console.log("error")
                });
            }
            else {
            }
        });
    }
    public checkboxOnly: boolean = true;
    public isCheckAll: boolean = false;

    public isCheckXacNhanIn: boolean = false;
    checkboxIn(event: any, dataItem: any) {
        if (this.gridInChiDinh.gridDataSource.data == undefined) {
            this.listChonDichVuChiDinh = [];
        }
        let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == dataItem.Id && x.nhomChiDinhId == dataItem.NhomId);
        if (event == true) {
            if (index == -1) {
                var chiDinh = new ListInChiDinh();
                chiDinh.nhomChiDinhId = dataItem.NhomId;
                chiDinh.dichVuChiDinhId = dataItem.Id;
                this.listChonDichVuChiDinh.push(chiDinh);
                if (this.listChonDichVuChiDinh.length == this.gridDataKhacDisplay.data.filter(sp=> ((sp.TrangThaiYeuCauKhamBenh != null && sp.TrangThaiYeuCauKhamBenh != 6)  ||
                                                                                               (sp.TrangThaiYeuCauDichVuKyThuat != null && sp.TrangThaiYeuCauDichVuKyThuat != 4))).length) {
                    this.checkAll = true;
                }
            }
            else {
                if (this.listChonDichVuChiDinh.length == this.gridDataKhacDisplay.data.filter(sp=> ((sp.TrangThaiYeuCauKhamBenh != null && sp.TrangThaiYeuCauKhamBenh != 6)  ||
                                                                                               (sp.TrangThaiYeuCauDichVuKyThuat != null && sp.TrangThaiYeuCauDichVuKyThuat != 4))).length) {
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
        if (this.listChonDichVuChiDinh.length == this.gridDataKhacDisplay.data.filter(sp=> ((sp.TrangThaiYeuCauKhamBenh != null && sp.TrangThaiYeuCauKhamBenh != 6)  ||
                                                                                       (sp.TrangThaiYeuCauDichVuKyThuat != null && sp.TrangThaiYeuCauDichVuKyThuat != 4))).length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
        this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
    }

    SelectcheckAllboxIn(event: any) {
        let gridDataIn: any[] = [];
        if(this.gridInChiDinh != null)
        {
            if (this.gridInChiDinh.gridDataSource.data == undefined) {
                this.listChonDichVuChiDinh = [];
            }
            else {
                if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
                    gridDataIn = this.gridInChiDinh.getAllDataFromDatasource();
                    this.listChonDichVuChiDinh = [];
                    gridDataIn.forEach(element => {
                        if(element.isCheckRowItem == true)
                        {
                            var chiDinh = new ListInChiDinh();
                            chiDinh.nhomChiDinhId = element.NhomId;
                            chiDinh.dichVuChiDinhId = element.Id;
                            this.listChonDichVuChiDinh.push(chiDinh);
                        }
                    });
                }
                else{
                    this.listChonDichVuChiDinh = [];
                }
            }
        }
        else{
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
    inChiDinh(kieuIn){
        this.listChonDichVuChiDinhReLoad = [];
        if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
            let gridData = this.gridInChiDinh.getAllDataFromDatasource();
            gridData.forEach(elements => {
                if (elements.isCheckRowItem == true) {
                    let obj = {
                        nhomChiDinhId: elements.NhomId,
                        dichVuChiDinhId: elements.Id
                    };
                    this.listChonDichVuChiDinhReLoad.push(obj);
                }
            });
            let listGridSelect: any[] = [];
            gridData.forEach(elements => {
                if (elements.isCheckRowItem == true) {
                    listGridSelect.push(elements);
                }
            });
            let dataIn = {
                YeuCauTiepNhanId: this.id,
                YeuCauKhamBenhid: 0,
                ListDichVuChiDinh: this.listChonDichVuChiDinhReLoad, // grid
                InChungChiDinh: kieuIn,
                hosting: window.location.protocol + "//" + window.location.host,
                KieuInChung: true,
                GhiChuCanLamSang: "",
                IsKhamDoanTatCa: false, // khám đoàn k có
                EnumInChiDinhKhamBenhNgoaiTru: 1, // để tạm,
                listGridSelect: listGridSelect,
                Loai: 1,
                InDichVuBacSiChiDinh: true
            };

            let dialogRef = this.dialog.open(PopupChonLoaiInViewComponent, {
                width: '1000px',
                data: { Model: dataIn }
            });
        }
        else{
            this.notificationService.showError("Không có dịch vụ chỉ định.");
        }
    }
    huyDichVuDaHuyThanhToan(dataItem) {
        this.dialog.open(HuyDichVuHuyThanhToanPopupComponent, {
            disableClose: false,
            width: '600px',
            data: { Title: "Xác nhận", Message: "Bạn có chắc hủy dịch vụ này không?" }
        }).afterClosed().subscribe(result => {
            if (result != undefined && result != null && result != "") {
                let modelUpdate = new GridUpdate();
                modelUpdate.yeuCauTiepNhanId = this.id;
                modelUpdate.maDichVuId = dataItem.Id;
                modelUpdate.nhom = dataItem.Nhom;
                modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                modelUpdate.model = this.tiepNhanBenhNhan;
                modelUpdate.LyDoHuyDichVu = result;
             
                this.validationErrors = null;
                this.listChonDichVuChiDinhReLoad = [];
                if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
                    let gridData = this.gridInChiDinh.getAllDataFromDatasource();
                    gridData.forEach(elements => {
                        if (elements.isCheckRowItem == true) {
                            let obj = {
                                nhomChiDinhId: elements.NhomId,
                                dichVuChiDinhId: elements.Id
                            };
                            this.listChonDichVuChiDinhReLoad.push(obj);
                        }
                    });
                }
                modelUpdate.ListDichVuCheckTruocDos = this.listChonDichVuChiDinhReLoad;
                this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/RemoveDichVu", modelUpdate).subscribe(
                    resultData => {
                        this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                        this.setDataForDichVuKhac();
                        this.refreshGrid();
                        this.getDanhSachGoiBenhNhan(this.tiepNhanBenhNhan.BenhNhanId);

                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy dịch vụ "]));
                    },
                    (err: any) => {
                        if (err != undefined && err.ValidationErrors != null) {
                            this.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            this.notificationService.showError(err.Message);
                        }
                    });
            }
        });
    }

    cacDichVuKM(){
        this.dialog.open(DichVuKhuyenMaiPopupComponent, {
            disableClose: false,
            width: '1500px',
            data: { BenhNhanId: this.benhNhanIdPopup, DocumentType: "YeuCauTiepNhan" }
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
                data: { DocumentType: self.documentType, BenhNhanId: self.tiepNhanBenhNhan.BenhNhanId }
            }).afterClosed().subscribe(yeuCauGoiMarketing => {
                if(yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "")
                {
                    yeuCauGoiMarketing.YeuCauTiepNhanId = self.id;
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
        if (!this.checkValidateUpdateThongTinBHYT()) {
            this.notificationService.showError(TiepNhanBenhNhanMessage.MessageBHYTThayDoi);
            return;
        }
        if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
            let gridData = this.gridInChiDinh.getAllDataFromDatasource();

            if(yeuCauGoiMarketing.ChiDinhDichVuGridVos == undefined || yeuCauGoiMarketing.ChiDinhDichVuGridVos == null)
            {
                yeuCauGoiMarketing.ChiDinhDichVuGridVos = [];
            }

            gridData.forEach(elements => {
                yeuCauGoiMarketing.ChiDinhDichVuGridVos.push(elements);
            });
        }

        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.apiService.post<any>("TiepNhanBenhNhan/ThemChiDinhGoiDichVuKhuyenMaiTheoTiepNhan", yeuCauGoiMarketing).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            this.notificationService.showSuccess(mess);

            // reload grid
            if (result == null) return;
            this.tiepNhanBenhNhan.YeuCauKhacGrid = result;
            this.setDataForDichVuKhac();
            this.refreshGrid();
            this.closePopupLoadingData();
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    changeDichVuKhuyenMai(event, dataItem){
        let modelUpdate: any = {};
        modelUpdate.lstChiDinhDichVu = new Array<ListChiDinhNeedUpdate>();

        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.yeuCauId = dataItem.Id;
        modelUpdate.nhom = dataItem.Nhom;
        modelUpdate.LaDichVuKhuyenMai = event;
        modelUpdate.soLuong = dataItem.SoLuong;

        this.validationErrors = null;
        this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/ChuyenDoiDichVuKhuyenMai", modelUpdate).subscribe(
            resultData => {
                this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                this.setDataForDichVuKhac();
                this.refreshGrid();
            },
            (err: any) => {
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    this.notificationService.showError(err.Message);
                }
            });
    }
    //======================================================================================

    changeDichVuTrongGoi(event, dataItem){
        let modelUpdate: any = {};
        modelUpdate.lstChiDinhDichVu = new Array<ListChiDinhNeedUpdate>();

        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.yeuCauId = dataItem.Id;
        modelUpdate.nhom = dataItem.Nhom;
        modelUpdate.LaDichVuTrongGoi = event;
        modelUpdate.soLuong = dataItem.SoLuong;

        this.validationErrors = null;
        this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/ChuyenDoiDichVuTrongVaNgoaiGoi", modelUpdate).subscribe(
            resultData => {
                this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                // this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
                this.setDataForDichVuKhac();
                this.refreshGrid();
            },
            (err: any) => {
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    this.notificationService.showError(err.Message);
                }
            });
    }

    // nhóm dịch vụ thường dùng
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
    }
    xemNhomDichVuThuongDung() {
        var self = this;
        let boPhan = BoPhan.TiepNhanNgoaiTru;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.dialog.open(LanKhamHienTaiNhomDichVuThuongDungPopupComponent, {
                disableClose: false,
                width: '1500px',
                data: { DocumentType: self.documentType , boPhan : boPhan }
            }).afterClosed().subscribe(yeuCauGoiThuongDung => {
                if (yeuCauGoiThuongDung) {
                    self.showPopupLoadingData(EnumTypeLoadingData.Update);
                    yeuCauGoiThuongDung.YeuCauKhamBenhId = 0; // dùng ké viewmodel bên khám bệnh
                    yeuCauGoiThuongDung.YeuCauTiepNhanId = self.id;
                    self.apiService.post<Array<ChiDinhGoiDichVuThuongDungDichVuLoi>>("KhamBenh/KiemTraDichVuTrongGoiDaCoTheoYeuCauTiepNhan", yeuCauGoiThuongDung).subscribe(resultData => {
                        if (resultData && resultData.length > 0) {
                            self.closePopupLoadingData();
                            self.dialog.open(LanKhamHienTaiNhomDichVuLoiPopupComponent, {
                                disableClose: false,
                                width: '1200px',
                                data: { arrDichVuCanhBao: resultData, DocumentType: this.documentType }
                            }).afterClosed().subscribe(dichVuKhongThems => {
                                if (dichVuKhongThems) {
                                    self.showPopupLoadingData(EnumTypeLoadingData.Update);
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
                            self.closePopupLoadingData();
                        });
                }
            });
        }
        else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung: ChiDinhGoiDichVuThuongDung) {
        if (!this.checkValidateUpdateThongTinBHYT()) {
            this.notificationService.showError(TiepNhanBenhNhanMessage.MessageBHYTThayDoi);
            return;
        }
        if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
            let gridData = this.gridInChiDinh.getAllDataFromDatasource();

            gridData.forEach(elements => {
                yeuCauGoiThuongDung.ChiDinhDichVuGridVos.push(elements);
            });
        }
        
        this.apiService.post<any>("TiepNhanBenhNhan/ThemYeuGoiDichVuThuongDung", yeuCauGoiThuongDung).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]);
            this.notificationService.showSuccess(mess);

            // reload grid
            if (result == null) return;
            this.tiepNhanBenhNhan.YeuCauKhacGrid = result;
            this.setDataForDichVuKhac();
            this.refreshGrid();
            this.closePopupLoadingData();
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
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
                if (res) {
                    var mess = isThucHien ? "Cập nhật thông tin thực hiện dịch vụ" : "Hủy thông tin thực hiện dịch vụ"
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [mess]));

                    this.apiService.get<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/GetGridDichVuDaChiDinh?yeuCauTiepNhanId=" + this.id).subscribe(
                        resultData => {
                            this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                            this.setDataForDichVuKhac();
                            this.refreshGrid();
                        },
                        (err: any) => {
                            if (err != undefined && err.ValidationErrors != null) {
                                this.validationErrors = err.ValidationErrors;
                            }
                            else if (err != undefined && err.Errors == null) {
                                this.notificationService.showError(err.Message);
                            }
                        });
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
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
    //================================================================================================
    //BVHD-3761
    //=======================================================================================================
    InPhieuXN(){
        let hosting =window.location.protocol + "//" + window.location.host;
        this.apiService
        .get<any>(
          "TiepNhanBenhNhan/InPhieuXetNghiemCovid?id=" +
          this.id +
          "&hostingName=" +
           hosting
        )
        
        .subscribe((resultData) => {
            if(resultData != null && resultData !="")
            {
                let dialogRef = this.dialog.open(InPhieuXnCovidComponent, {
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




