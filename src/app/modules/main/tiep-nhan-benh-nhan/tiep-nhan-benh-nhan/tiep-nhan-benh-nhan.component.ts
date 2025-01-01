import { Component, OnInit, HostListener, ViewChild, TemplateRef, Renderer2, ChangeDetectorRef, OnDestroy, ViewRef } from '@angular/core';
import { BaoHiemYTe, ThongTinBenhNhan, dsLichSuKCB2018 } from '../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model';
import { TiepNhanBenhNhanViewModel, BenhNhanTiepNhanBenhNhanViewModel, ThemChiDinhDichVu, GetDonGiaVo, ChiDinhDichVuGridVo, ThemBaoHiemTuNhan, ThemBaoHiemTuNhanGridVo, BaoHiemTuNhanViewModel, ThemChiDinhDichVuKyThuat, ChiDinhDichVuKyThuatGridVo, DiaChiBHYT, ThemTaiLieuDinhKem, HoSoYeuCauTiepNhanViewModel, TaiLieuModel, GridLichSuKCB, TimKiemBenhNhanGridVo, DataTimKiem, TimKiemBenhNhanSearch, GridLichSuKiemTraTheBHYT, DanhSachDichVuGoiChon, DanhSachGoiChon, DanhSachDichVuChonTrongLanPopup, DichVuTrongGoiKhiThem, CheckDuSoLuongTonTrongGoi, DefaultValueTNBNModel, DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham } from '../tiep-nhan-benh-nhan.model';
import { GioiTinh } from 'src/app/shared/enum/common-type.enums';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { TiepNhanBenhNhanPopupComponent } from '../tiep-nhan-benh-nhan-popup/tiep-nhan-benh-nhan-popup.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage, TiepNhanBenhNhanMessage } from 'src/app/shared/configdata/system-message';
import { ActivatedRoute, Router } from '@angular/router';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { TiepNhanBenhNhanChoQuetComponent } from '../tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component';
import { DatePipe } from '@angular/common';
import { NotificationService } from 'src/app/core/services/notification.service';
import { TimeSelectorComponent, DatePickerComponent } from '@progress/kendo-angular-dateinputs';
import icInfo from '@iconify/icons-ic/baseline-info';
import { TinhTrangThe } from 'src/app/shared/enum/tinh-trang-the.enum';
import { TiepNhanBenhNhanErrorComponent } from '../tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component';
import { State, process } from '@progress/kendo-data-query';
import { GroupDescriptor } from '@progress/kendo-data-query';

import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icFind from '@iconify/icons-ic/search';
import icAdd from '@iconify/icons-ic/twotone-add';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Observable } from 'rxjs/Rx';
import { TiepNhanBenhNhanPopupHetHieuLucComponent } from '../tiep-nhan-benh-nhan-popup-het-hieu-luc/tiep-nhan-benh-nhan-popup-het-hieu-luc.component';
import { TiepNhanBenhNhanPopupKhongKiemTraDuocComponent } from '../tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component';
import { HttpParams } from '@angular/common/http';
import { TiepNhanBenhNhanPopupLichSuKcbComponent } from '../tiep-nhan-benh-nhan-popup-lich-su-kcb/tiep-nhan-benh-nhan-popup-lich-su-kcb.component';
import { DateTime } from 'luxon';
import { PopupTimKiemBenhNhanComponent } from '../popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';

import { MultiselectComponent } from 'src/app/shared/component/dropdowns/multiselect/multiselect.component';
import { TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent } from '../tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { TextboxComponent } from 'src/app/shared/component/inputs/textbox/textbox.component';
import { DatepickerComponent } from 'src/app/shared/component/dates/datepicker/datepicker.component';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent } from '../in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component';
import { PopupMarketingTiepNhanBenhNhanComponent } from '../popup-marketing-tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan.component';
import { PopupDichVuCheckTrungComponent } from '../popup-dich-vu-check-trung/popup-dich-vu-check-trung.component';
import { LookupItemVo } from '../../thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { DichVuKhuyenMaiPopupComponent } from '../../dich-vu-khuyen-mai/dich-vu-khuyen-mai-popup/dich-vu-khuyen-mai-popup.component';
import { LanKhamHienTaiNhomDichVuThuongDungPopupComponent } from '../../kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup.component';
import { EnumNhomGoiDichVu, EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { ChiDinhGoiDichVuTheoBenhNhan, ChiDinhGoiDichVuThuongDung, ChiDinhGoiDichVuThuongDungDichVuLoi } from '../../kham-benh/kham-benh.model';
import { LanKhamHienTaiNhomDichVuLoiPopupComponent } from '../../kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-loi-popup/lan-kham-hien-tai-nhom-dich-vu-loi-popup.component';
import { InPhieuXnCovidComponent } from '../in-phieu-xn-covid/in-phieu-xn-covid.component';
import { XnCovidPopupComponent } from '../xn-covid-popup/xn-covid-popup.component';
import { BoPhan } from 'src/app/shared/enum/bo-phan.enum';
declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'app-tiep-nhan-benh-nhan',
    templateUrl: './tiep-nhan-benh-nhan.component.html',
    styleUrls: ['./tiep-nhan-benh-nhan.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class TiepNhanBenhNhanComponent implements OnInit, OnDestroy {

    icMoreHoriz = icMoreHoriz;
    icEdit = icEdit;
    icDelete = icDelete;
    icFind = icFind;

    icAdd = icAdd;

    hostingName: string;

    thongTinBenhNhan: ThongTinBenhNhan;
    modelQRCode: BaoHiemYTe;
    isSearchQRCodeEnable: boolean = true;
    tiepNhanBenhNhan: TiepNhanBenhNhanViewModel;
    isDungTuyenDisplay: string = null;
    isDungTuyen: boolean = false;
    isOutOfDate: boolean = false;
    soTuoiDisplay: string;
    documentType: DocumentType;
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

    isScanF1 = false;

    idYeuCauTiepNhan: number = 0;

    //ngay thang nam sinh
    under6yearsold: boolean = false;

    // voucher
    public loaiVoucher: number = 0;
    public voucherLookupItemVo: Array<LookupItemVo>;

    //Tim kiem benh nhan
    lstBenhNhan: TimKiemBenhNhanGridVo[] = new Array<TimKiemBenhNhanGridVo>();
    modelTimKiemBenhNhan: TimKiemBenhNhanGridVo = new TimKiemBenhNhanGridVo();
    totalBenhNhan: number = 0;
    queryInfoNguoiLienHeQuanHuyen: LookupQueryInfo = new LookupQueryInfo();
    queryInfoNguoiLienHePhuongXa: LookupQueryInfo = new LookupQueryInfo();


    //message kiem tra tren BHYT
    messageThanhCong: string = "Kiểm tra thành công";
    messageKhongThanhCong: string = "Kiểm tra không thành công";

    //
    isActiveAction: any = null;

    //
    maDichVuPrev: number = null;
    //countCheck: number = 0;
    maDichVuDisabled: boolean = false;

    //update 29/10/2020

    id: number;

    danhSachDichVuTrongGoiDaChonTrongYCTN: DanhSachDichVuGoiChon[] = new Array<DanhSachDichVuGoiChon>();
    danhSachGoiDaChonTrongYCTN: DanhSachGoiChon[] = new Array<DanhSachGoiChon>();
    danhSachDichVuGoiDaChon: Array<ThemChiDinhDichVu> = new Array<ThemChiDinhDichVu>();

    displayToolTipGrid: string = null;
    suDungGoiMarketingModelTemp: boolean = false;
    disabledCheckboxMarketing: boolean = false;
    popupLoadingData: any;

    danhSachDichVuDaChonTrongLanPopup: Array<DanhSachDichVuChonTrongLanPopup> = new Array<DanhSachDichVuChonTrongLanPopup>();

    dichVuSarsCoVs:number[]=[];
    loaiBenhPhamText:string =null;
    loaiBenhPham:number =null;
    showbuttonLuuVaInPhieuXetNghiem:boolean = false;
    loadingDataPopup: any;
    
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

    // số tiền mg
    @ViewChild('soTienMgKhamBenhTemplate', { static: true }) soTienMgKhamBenhTemplate: TemplateRef<any>;
    @ViewChild('soTienMgKhamBenhFooterTemplate', { static: true }) soTienMgKhamBenhFooterTemplate: TemplateRef<any>;
    @ViewChild('soTienMgKhamBenhGroupFooterTemplate', { static: true }) soTienMgKhamBenhGroupFooterTemplate: TemplateRef<any>;

    // người bệnh thanh toán
    @ViewChild('bnThanhToanKhamBenhTemplate', { static: true }) bnThanhToanKhamBenhTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanKhamBenhFooterTemplate', { static: true }) bnThanhToanKhamBenhFooterTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanKhamBenhGroupFooterTemplate', { static: true }) bnThanhToanKhamBenhGroupFooterTemplate: TemplateRef<any>;

    //action
    @ViewChild('actionKhamBenhTemplate', { static: true }) actionKhamBenhTemplate: TemplateRef<any>;

    //
    @ViewChild("tabStrip", { static: false }) tabStrip: TabStripComponent;

    // group
    groupKhamBenh: GroupDescriptor[] = [
        {
            field: 'Nhom', aggregates: [
                { field: 'ThanhTien', aggregate: 'sum' },
                { field: 'BnThanhToan', aggregate: 'sum' },
                { field: 'SoTienMG', aggregate: 'sum' },
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

    // số tiền mg
    @ViewChild('soTienMgKyThuatTemplate', { static: true }) soTienMgKyThuatTemplate: TemplateRef<any>;
    @ViewChild('soTienMgKyThuatFooterTemplate', { static: true }) soTienMgKyThuatFooterTemplate: TemplateRef<any>;
    @ViewChild('soTienMgKyThuatGroupFooterTemplate', { static: true }) soTienMgKyThuatGroupFooterTemplate: TemplateRef<any>;

    // người bệnh thanh toán
    @ViewChild('bnThanhToanKyThuatTemplate', { static: true }) bnThanhToanKyThuatTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanKyThuatFooterTemplate', { static: true }) bnThanhToanKyThuatFooterTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanKyThuatGroupFooterTemplate', { static: true }) bnThanhToanKyThuatGroupFooterTemplate: TemplateRef<any>;

    //action
    @ViewChild('actionKyThuatTemplate', { static: true }) actionKyThuatTemplate: TemplateRef<any>;

    // group
    groupKyThuat: GroupDescriptor[] = [{
        field: 'Nhom', aggregates: [
            { field: 'ThanhTien', aggregate: 'sum' },
            { field: 'SoTienMG', aggregate: 'sum' },
            { field: 'BnThanhToan', aggregate: 'sum' }
        ]
    }];

    //end of ky thuat

    //the begin of khong chiet khau

    // đơn giá
    @ViewChild('donGiaKhongChietKhauFooterTemplate', { static: true }) donGiaKhongChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaKhongChietKhauTemplate', { static: true }) donGiaKhongChietKhauTemplate: TemplateRef<any>;
    @ViewChild('donGiaBHYTTemplate', { static: true }) donGiaBHYTTemplate: TemplateRef<any>;


    @ViewChild('tenDichVuKhongChietKhauFooterTemplate', { static: true }) tenDichVuKhongChietKhauFooterTemplate: TemplateRef<any>;

    // thành tiền
    @ViewChild('thanhTienKhongChietKhauTemplate', { static: true }) thanhTienKhongChietKhauTemplate: TemplateRef<any>;
    @ViewChild('thanhTienKhongChietKhauFooterTemplate', { static: true }) thanhTienKhongChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienKhongChietKhauGroupFooterTemplate', { static: true }) thanhTienKhongChietKhauGroupFooterTemplate: TemplateRef<any>;

    // bhyt thanh toán
    @ViewChild('bhytThanhToanKhongChietKhauTemplate', { static: true }) bhytThanhToanKhongChietKhauTemplate: TemplateRef<any>;
    @ViewChild('bhytThanhToanKhongChietKhauFooterTemplate', { static: true }) bhytThanhToanKhongChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('bhytThanhToanKhongChietKhauGroupFooterTemplate', { static: true }) bhytThanhToanKhongChietKhauGroupFooterTemplate: TemplateRef<any>;

    // số tiền mg
    @ViewChild('soTienMgKhongChietKhauTemplate', { static: true }) soTienMgKhongChietKhauTemplate: TemplateRef<any>;
    @ViewChild('soTienMgKhongChietKhauFooterTemplate', { static: true }) soTienMgKhongChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('soTienMgKhongChietKhauGroupFooterTemplate', { static: true }) soTienMgKhongChietKhauGroupFooterTemplate: TemplateRef<any>;

    // người bệnh thanh toán
    @ViewChild('bnThanhToanKhongChietKhauTemplate', { static: true }) bnThanhToanKhongChietKhauTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanKhongChietKhauFooterTemplate', { static: true }) bnThanhToanKhongChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanKhongChietKhauGroupFooterTemplate', { static: true }) bnThanhToanKhongChietKhauGroupFooterTemplate: TemplateRef<any>;

    // nơi thực hiện
    @ViewChild('noiThucHienKhongChietKhauTemplate', { static: true }) noiThucHienKhongChietKhauTemplate: TemplateRef<any>;

    // nhân viên chỉ định
    @ViewChild('nhanVienChiDinhTemplate', { static: true }) nhanVienChiDinhTemplate: TemplateRef<any>;

    // checkbox được hưởng bhyt
    @ViewChild('duocHuongBHYTTemplate', { static: true }) duocHuongBHYTTemplate: TemplateRef<any>;

    //Loai gia grid
    @ViewChild('loaiGiaTemplate', { static: true }) loaiGiaTemplate: TemplateRef<any>;

    //STT grid
    @ViewChild('sttKhongChietKhauTemplate', { static: true }) sttKhongChietKhauTemplate: TemplateRef<any>;
    @ViewChild('sttCoChietKhauTemplate', { static: true }) sttCoChietKhauTemplate: TemplateRef<any>;

    //So luong grid
    @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;

    //action
    @ViewChild('actionKhongChietKhauTemplate', { static: true }) actionKhongChietKhauTemplate: TemplateRef<any>;

    // group
    groupKhongChietKhau: GroupDescriptor[] = [
        {
            field: 'Nhom', aggregates: [
                { field: 'ThanhTien', aggregate: 'sum' },
                { field: 'BHYTThanhToan', aggregate: 'sum' },
                { field: 'SoTienMG', aggregate: 'sum' },
                { field: 'BnThanhToan', aggregate: 'sum' }
            ]
        }
    ];

    //end of khong chiet khau

    //start chiet khau

    // đơn giá
    @ViewChild('donGiaChietKhauTemplate', { static: true }) donGiaChietKhauTemplate: TemplateRef<any>;
    @ViewChild('donGiaChietKhauFooterTemplate', { static: true }) donGiaChietKhauFooterTemplate: TemplateRef<any>;

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
    @ViewChild('NgaySinhCoBHYT', { static: false }) NgaySinhCoBHYT: DatepickerComponent;
    @ViewChild('NgaySinhKhongCoBHYT', { static: false }) NgaySinhKhongCoBHYT: DatepickerComponent;

    @ViewChild('dichVuCombobox', { static: false }) dichVuCombobox: ComboboxComponent;

    @ViewChild('comboboxQuanHuyen', { static: true }) comboboxQuanHuyen: ComboboxComponent;
    @ViewChild('comboboxPhuongXa', { static: true }) comboboxPhuongXa: ComboboxComponent;

    @ViewChild('tenDvTemplate', { static: true }) tenDvTemplate: TemplateRef<any>;

    @ViewChild('dichVuTrongGoiTemplate', { static: true }) dichVuTrongGoiTemplate: TemplateRef<any>;
    @ViewChild('dichVuKhuyenMaiTemplate', { static: true }) dichVuKhuyenMaiTemplate: TemplateRef<any>;

    // @ViewChild('comboboxNoiThucHien1', { static: true }) comboboxNoiThucHien1: ComboboxComponent;
    // @ViewChild('comboboxNoiThucHien2', { static: true }) comboboxNoiThucHien2: ComboboxComponent;

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
    thanhTienDichVuChiDinhBaoGomDichVuTrongGoi: number = 0;

    @ViewChild('voucherList', { static: false }) voucherList: MultiselectComponent;
    @ViewChild("multiselect", { static: false }) public multiselect: any;

    // cập nhật điều kiện tạo mới yctn
    urlPageUpdateYCTN: string = null;
    errMessageKhongChoPhepTaoMoiYCTN: string = null;
    changeMaTheBHYT: boolean = false;
    loading: boolean = false;

    constructor(private apiService: ApiService, private dialog: MatDialog
        , private authService: AuthService, private router: Router
        , private notificationService: NotificationService, private route: ActivatedRoute
        , private renderer: Renderer2, private cdRef: ChangeDetectorRef) { }

    ngOnDestroy(): void {
        //console.log("ngOnDestroy");
        //this.cdRef.detectChanges();
        //this.cdRef.markForCheck();
        //console.log("ngOnDestroy");
        this.dialog.ngOnDestroy();
    }

    ngOnInit() {
        this.errMessageKhongChoPhepTaoMoiYCTN = null;
        this.urlPageUpdateYCTN = null;
        this.changeMaTheBHYT = false;
        this.id = this.route.snapshot.params.id;

        this.getListDichVuSarsCoVs();
        
        if (this.id != undefined) {
            this.getBenhNhan(this.id, true);
        } else {
            this.getDefaultDataTNBN();
        }

        console.log("ngOnInit - Id = ", this.id);

        if (window.location.protocol == "http:") {
            this.hostingName = "http://" + window.location.host;
        } else {
            this.hostingName = "https://" + window.location.host;
        }

        this.danhSachDichVuTrongGoiDaChonTrongYCTN = new Array<DanhSachDichVuGoiChon>();
        this.danhSachGoiDaChonTrongYCTN = new Array<DanhSachGoiChon>();
        this.danhSachDichVuGoiDaChon = new Array<ThemChiDinhDichVu>();

        this.suDungGoiMarketingModelTemp = false;
        this.disabledCheckboxMarketing = false;

        this.danhSachDichVuDaChonTrongLanPopup = new Array<DanhSachDichVuChonTrongLanPopup>();


        this.getSoTienBHYTSeThanhToan();

        this.getListTenTrieuChungKham();

        this.setDefaultData();
        this.thongTinBenhNhan = new ThongTinBenhNhan();
        this.lichSuKCB = new Array<GridLichSuKCB>();
        this.lichSuKiemTraTheBHYTGrid = new Array<GridLichSuKiemTraTheBHYT>();

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
            {
                Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 140, Sortable: true,
                TemplateFooter: this.donGiaKhamBenhFooterTemplate
            },
            { Field: "LoaiGia", Title: "Loại Giá", Width: 80, Sortable: true },
            { Field: "SoLuong", Title: "SL", Width: 30, Sortable: true },
            {
                Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: true,
                Template: this.donGiaKhamBenhTemplate
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
            // {
            //     Field: "SoTienMG", Title: "Số tiền MG", Width: 100, Sortable: true,
            //     Template: this.soTienMgKhamBenhTemplate,
            //     TemplateFooter: this.soTienMgKhamBenhFooterTemplate,
            //     TemplateGroupFooter: this.soTienMgKhamBenhGroupFooterTemplate
            // },
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
            // { Field: "TLMGDisplay", Title: "TL MG", Width: 45, Sortable: true },
            // {
            //     Field: "SoTienMG", Title: "Số tiền MG", Width: 100, Sortable: true,
            //     Template: this.soTienMgKyThuatTemplate,
            //     TemplateFooter: this.soTienMgKyThuatFooterTemplate,
            //     TemplateGroupFooter: this.soTienMgKyThuatGroupFooterTemplate
            // },
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
                Field: "TenNhanVienChiDinh", Title: "Nhân viên chỉ định", Width: 230, Sortable: true
            },
            { Field: "ActionKyThuat", Title: "", Width: 50, Template: this.actionKyThuatTemplate }
        ];

        this.gridKhongChietKhauColumns = [
            {
                Field: "id", Title: "#", Width: 50, Sortable: true,
                Template: this.sttKhongChietKhauTemplate
            },
            { Field: "Ma", Title: "Mã", Width: 90, Sortable: true },
            { Field: "Nhom", Title: "Nhóm", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            {
                Field: "TenDichVu", Title: "Tên Dịch Vụ"
                , MinWidth: 200, Sortable: true, ShowTooltip: true
                , TemplateFooter: this.donGiaKhongChietKhauFooterTemplate
                , TemplateGroupFooter: this.tenDichVuKhongChietKhauFooterTemplate
                , Template: this.tenDvTemplate
            },
            { Field: "GoiCoChietKhauId", Title: "DV Trong Gói", Width: 60, Template: this.dichVuTrongGoiTemplate },
            { Field: "YeuCauGoiDichVuKhuyenMaiId", Title: "DV Khuyến Mại", Width: 60, Template: this.dichVuKhuyenMaiTemplate },
            {
                Field: "LoaiGia", Title: "Loại Giá", Width: 100, Sortable: true,
                Template: this.loaiGiaTemplate
            },


            {
                Field: "SoLuong", Title: "SL", Width: 50, Sortable: true,
                Template: this.soLuongTemplate
            },
            {
                Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: true,
                Template: this.donGiaKhongChietKhauTemplate
            },
            {
                Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Sortable: true,
                Template: this.thanhTienKhongChietKhauTemplate,
                TemplateFooter: this.thanhTienKhongChietKhauFooterTemplate
                , TemplateGroupFooter: this.thanhTienKhongChietKhauGroupFooterTemplate
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
            // { Field: "TLMGDisplay", Title: "TL MG", Width: 60, Sortable: true },
            // {
            //     Field: "SoTienMG", Title: "Số tiền MG", Width: 100, Sortable: true,
            //     Template: this.soTienMgKhongChietKhauTemplate,
            //     TemplateFooter: this.soTienMgKhongChietKhauFooterTemplate,
            //     TemplateGroupFooter: this.soTienMgKhongChietKhauGroupFooterTemplate
            // },
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
            { Field: "ActionKhongChietKhau", Title: "", Width: 50, Template: this.actionKhongChietKhauTemplate }
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
            }
        ];

        //documenttype
        this.documentType = DocumentType.YeuCauTiepNhan;

        this.tiepNhanBenhNhan = new TiepNhanBenhNhanViewModel;

        this.tiepNhanBenhNhan.TinhThanhId = 1;
        //set load first quan huyen combobox
        //console.log("TNBN = ", this.comboboxQuanHuyen);
        if (this.comboboxQuanHuyen != null && this.comboboxQuanHuyen != undefined) {
            this.comboboxQuanHuyen.queryInfo.ParameterDependencies = "{tinhThanh:" + this.tiepNhanBenhNhan.TinhThanhId + "}";
        }

        this.tiepNhanBenhNhan.BenhNhan = new BenhNhanTiepNhanBenhNhanViewModel();
        this.tiepNhanBenhNhan.GridLichSuKCB = new Array<GridLichSuKCB>();
        this.tiepNhanBenhNhan.GridLichSuKiemTraTheBHYT = new Array<GridLichSuKiemTraTheBHYT>();

        this.lstBHTN = new Array<ThemBaoHiemTuNhanGridVo>();

        this.setValueForGridBHTN();
        this.huyBHTN();

        this.setDataForDichVuKyThuat();
        this.setDataForDichVuKhamBenh();
        this.setDataForDichVuKhac();
        this.setDataForTaiLieuDinhKem();
        this.refreshGrid();

        this.themChiDinhDichVuModel = new ThemChiDinhDichVu();
        this.themChiDinhGoiModel = new ThemChiDinhDichVu();

        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
        //this.themChiDinhDichVuModel.DoiTuongUuDaiId = this.tiepNhanBenhNhan.DoiTuongUuDaiId;
        this.clearThongTinTaiKhoanBenhNhan();
        this.clearThemTaiLieu();
        this.queryInfoNguoiLienHeQuanHuyen.ParameterDependencies = "{tinhThanhLienHe:" + this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId + "}";
        this.queryInfoNguoiLienHePhuongXa.ParameterDependencies = "{quanHuyenLienHe:" + this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId + "}";



        //console.log("isCheckedBHYT = ", this.isCheckedBHYT);
        
        this.HoVaTenTextbox.focus();

       
    }

    setSoPhanTramHuongBHYTForThemChiDinh() {
        this.themChiDinhDichVuModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        this.themChiDinhGoiModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
    }

    getBenhNhan(id: number, isCheckTheBHYT: boolean = false) {
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
                //console.log("getBenhNhan", this.tiepNhanBenhNhan);
                console.log("ngOnInit - tiepNhanBenhNhan = ", this.tiepNhanBenhNhan);

                this.tiepNhanBenhNhan.ThoiDiemTiepNhan = new Date();
                this.tiepNhanBenhNhan.ThoiGianTiepNhan = new Date();
                this.benhNhanId = this.tiepNhanBenhNhan.BenhNhanId;

                //
                this.getDanhSachGoiBenhNhan(this.benhNhanId);
                //

                this.setThongTinTaiKhoanBenhNhan(this.tiepNhanBenhNhan.BenhNhanId);

                if (this.tiepNhanBenhNhan.TuNhap != true && this.tiepNhanBenhNhan.CoBHYT) {
                    //this.isDisableNhapTayForUpdate = true;
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

                // this.isHaveBHYTUpdated = resultData.CoBHYT
                //     //console.log("getBenhNhan", this.tiepNhanBenhNhan)
                //     ;

                this.tiepNhanBenhNhan.BenhNhan.GioiTinhDisplay = resultData.BenhNhan.GioiTinh == 1 ? "Nam" : "Nữ";

                //let ngayThangNamSinh = new Date();
                //ngayThangNamSinh.setDate(resultData.BenhNhan.NgaySinh);
                //ngayThangNamSinh.setMonth(resultData.BenhNhan.ThangSinh);
                //ngayThangNamSinh.setFullYear(resultData.BenhNhan.NamSinh, resultData.BenhNhan.ThangSinh, resultData.BenhNhan.NgaySinh);
                //this.tiepNhanBenhNhan.BenhNhan.NgayThangNamSinh = ngayThangNamSinh;

                if (resultData.BenhNhan.NamSinh != null && resultData.BenhNhan.ThangSinh != null && resultData.BenhNhan.NgaySinh != null) {
                    let ngayThangNamSinh = new Date(resultData.BenhNhan.NgayThangNamSinh);
                    this.getAge(ngayThangNamSinh, new Date);

                }
                //console.log("------------: ", this.tiepNhanBenhNhan)
                if (this.tiepNhanBenhNhan.BHYTMucHuong == null) {
                    this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                    //this.isHaveBHYTForTheFistLoad = false;
                }
                if (this.tiepNhanBenhNhan.IsCheckedBHYT) {
                    let dateToCheck = new Date(this.tiepNhanBenhNhan.BHYTNgayHetHan);
                    //console.log("dateToCheck ", this.tiepNhanBenhNhan.BHYTNgayHetHan, dateToCheck)
                    this.checkOutOfDateBHYT(dateToCheck);
                }
                else {
                    this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;
                }
                this.tiepNhanBenhNhan.YeuCauKhacGrid = [];
                //
                this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
                //Chi dinh dich vu
                //this.setDataForDichVuKhac();
                this.setDataForTaiLieuDinhKem();
                this.refreshGrid();
                this.dialog.closeAll();

                // if(this.tiepNhanBenhNhan.CoBHYT == true && this.tiepNhanBenhNhan.TuNhap != true && isCheckTheBHYT)
                // {
                //     this.kiemTraTheBHYTKhiTaoYCTNMoi();
                // }

                //Do quận huyện nó không bind do cơ chế chạy trước sau nên ta set lại cho comboxQuanHuyen này
                //this.bindComboboxQuanHuyen(resultData);   

                this.xuLyKiemTraBenhNhanDuDieuKienTaoMoiYCTN();
            },
            () => {
                this.dialog.closeAll();
                //console.log("error")
            });
    }

    bindComboboxQuanHuyen(resultData){
        if(this.comboboxQuanHuyen != undefined && this.comboboxQuanHuyen != null){
            this.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
            this.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
            this.comboboxQuanHuyen.getDataForLookup();
        } 
    }
    
    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        //console.log("keyEvent = ", event);
        if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
            event.preventDefault();
            this.QuetMaQRCodeClick();
        }
        else if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 == true) {
            event.preventDefault();
        }
        //f1 - CoBHYT
        else if (event.keyCode == 112 && event.ctrlKey) {
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
            //console.log("Ok");
            this.CoUuDaiChange(true);
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
        else if (event.keyCode == 83 && event.ctrlKey && !event.shiftKey) {
            if(this.errMessageKhongChoPhepTaoMoiYCTN == null || this.errMessageKhongChoPhepTaoMoiYCTN =='')
            {
                this.luuPhieu();
            }
            event.preventDefault();
        }
        else if (event.keyCode == 83 && event.ctrlKey && event.shiftKey) {
            //console.log("-----Successfully---");
            if(this.errMessageKhongChoPhepTaoMoiYCTN == null || this.errMessageKhongChoPhepTaoMoiYCTN =='')
            {
                this.luuVaInPhieu();
            }
            event.preventDefault();
        }
        else if (event.keyCode == 27) {
            this.huy();
            event.preventDefault();
        }
    }

    removeTaiLieu(data: HoSoYeuCauTiepNhanViewModel) {
        //console.log("removeTaiLieu = ", data);
        // this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans = this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.filter(p => p.TenGuid != data.TenGuid
        //     && p.Ten != data.Ten && p.LoaiHoSoYeuCauTiepNhanId != data.LoaiHoSoYeuCauTiepNhanId
        //     && p.MoTa != data.MoTa);
        this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.splice(this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.indexOf(data), 1);
        this.setDataForTaiLieuDinhKem();
    }

    uploadTaiLieuDone($event) {
        this.themTaiLieu.TaiLieu = $event;
        if (!(this.cdRef as ViewRef).destroyed) {
            this.cdRef.detectChanges();
        }
    }

    clearThemTaiLieu() {
        this.themTaiLieu = new ThemTaiLieuDinhKem();
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

    setDataForTaiLieuDinhKem() {
        //console.log("abc = ", this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.length);
        this.gridDataTaiLieuDinhKem = {
            data: this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans,
            total: this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.length
        };
    }

    clearThongTinTaiKhoanBenhNhan() {
        this.thongTinTaiKhoanBenhNhan = null;
    }

    getSoTienBHYTSeThanhToan() {
        this.apiService.get<any>("TiepNhanBenhNhan/GetSoTienBHYTSeThanhToan").subscribe(
            resultData => {
                this.soTienBHYTSeThanhToan = resultData;
                //console.log("getSoTienBHYTSeThanhToan = ", this.soTienBHYTSeThanhToan);
            }
        )
    }

    CoUuDaiChange($event) {
        //console.log("CoUuDaiChange = ", $event)
        if (this.tiepNhanBenhNhan.DoiTuongUuDaiId != null) {
            if ($event == false) {
                this.removeDoiTuongMienGiamForGirdChiDinhDichVu();
            }
            else {
                this.addDoiTuongMienGiamForGridChiDinhDichVu();
            }
        }
    }

    addBHYTForGridChiDinhDichVu() {
        //khac
        for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
            const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
            if (item.Nhom == "DỊCH VỤ KHÁM BỆNH" && item.GiaBHYT != 0) {
                item.BHYTThanhToan = item.GiaBHYT;
                item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                item.DuocHuongBHYT = true;
            }
        }

        this.setGiaBHYT();

        this.setDataForDichVuKhac();
        this.refreshGrid();
    }

    removeBHYTForGridChiDinhDichVu() {
        //kham benh
        // for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.length; index++) {
        //     const item = this.tiepNhanBenhNhan.YeuCauKhamBenhGrid[index];
        //     if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0) {
        //         item.BHYTThanhToan = 0;
        //         item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
        //         item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
        //     }
        // }

        //dich vu ky thuat

        //khac
        for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
            const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
            if (item.Nhom == "DỊCH VỤ KHÁM BỆNH" && item.BHYTThanhToan != 0) {
                item.BHYTThanhToan = 0;
                item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                item.DuocHuongBHYT = false;
            }
        }

        this.setDataForDichVuKhac();
        this.setDataForDichVuKhamBenh();
        this.refreshGrid();
    }

    removeDoiTuongMienGiamForGirdChiDinhDichVu() {

        //kham benh
        // for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.length; index++) {
        //     const item = this.tiepNhanBenhNhan.YeuCauKhamBenhGrid[index];
        //     if (item.SoTienMG != 0 && item.TLMG != 0) {
        //         item.TLMG = 0
        //         item.SoTienMG = 0;
        //         item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
        //     }
        // }

        // //dich vu ky thuat
        // for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKyThuatGrid.length; index++) {
        //     const item = this.tiepNhanBenhNhan.YeuCauKyThuatGrid[index];
        //     if (item.SoTienMG != 0 && item.TLMG != 0) {
        //         item.TLMG = 0
        //         item.SoTienMG = 0;
        //         item.BnThanhToan = item.ThanhTien - item.SoTienMG;
        //         //console.log(item.SoTienMG, item.BnThanhToan, item.BHYTThanhToan, item.ThanhTien );
        //     }
        // }
        //khac
        for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
            const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
            if (item.SoTienMG != 0 && item.TLMG != 0 && item.IsGoiCoChietKhau != true) {
                item.TLMG = 0;
                item.TLMGDisplay = "0 %";
                item.SoTienMG = 0;
                item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
            }
        }

        this.setDataForDichVuKhac();
        //this.setDataForDichVuKhamBenh();
        //this.setDataForDichVuKyThuat();
        this.refreshGrid();
    }

    addDoiTuongMienGiamForGridChiDinhDichVu() {
        //khac
        for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
            const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
            if (item.IsGoiCoChietKhau != true) {
                let url: string;
                if (item.Nhom == 'DỊCH VỤ KHÁM BỆNH') {
                    url = "TiepNhanBenhNhan/GetTyLeMienGiamKhamBenh/";
                }
                else if (item.Nhom == 'DỊCH VỤ KỸ THUẬT') {
                    url = "TiepNhanBenhNhan/GetTyLeMienGiamKyThuat/";
                }
                if (url != undefined) {
                    this.apiService.post<number>(url + "?doiTuongId="
                        + this.tiepNhanBenhNhan.DoiTuongUuDaiId + "&maDichVuId=" + item.MaDichVuId).subscribe(
                            resultData => {
                                if (resultData != undefined && resultData != null && resultData != 0) {
                                    item.TLMG = resultData;
                                    item.TLMGDisplay = resultData + " %";
                                    item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * resultData / 100;
                                    item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                                }
                                else {
                                    item.TLMG = 0;
                                    item.TLMGDisplay = "0 %";
                                    item.SoTienMG = 0;
                                    item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                                }

                                this.setDataForDichVuKhac();
                                this.refreshGrid();
                            },
                            () => {
                            });
                }

            }
        }

    }

    setDuocHuongBHYT(CoBHYT: boolean = false, LyDoVaoVien: number = 1) {
        let dateNow = new Date((new Date()).toDateString());
        // console.log("setDuocHuongBHYT = ", CoBHYT, LyDoVaoVien
        // , this.tiepNhanBenhNhan.BHYTNgayHieuLuc, this.tiepNhanBenhNhan.BHYTNgayHieuLuc < dateNow, this.tiepNhanBenhNhan.BHYTNgayHetHan);
        //console.log("setDuocHuongBHYT = ", this.tiepNhanBenhNhan.BHYTNgayHetHan >= dateNow, this.tiepNhanBe nhNhan.BHYTNgayHetHan, dateNow.getDate)

        // dùng để kiểm tra hạn dùng của thẻ BHYT
        let compareDate = false;
        if (this.tiepNhanBenhNhan.BHYTNgayHetHan != undefined && this.tiepNhanBenhNhan.BHYTNgayHetHan != null) {
            let now = new Date();
            let ngay = now.getDate();
            let thang = now.getMonth();
            let nam = now.getFullYear();
            let dateNowFormat = new Date(nam, thang, ngay);

            let ngayDenHanTheBHYTTemp = this.tiepNhanBenhNhan.BHYTNgayHetHan;
            var type = typeof ngayDenHanTheBHYTTemp;
            if (type == "string") {
                ngayDenHanTheBHYTTemp = new Date(this.tiepNhanBenhNhan.BHYTNgayHetHan,);
            }

            let ngayDenHanTheBHYT = ngayDenHanTheBHYTTemp.getDate();
            let thangDenHanTheBHYT = ngayDenHanTheBHYTTemp.getMonth();
            let namDenHanTheBHYT = ngayDenHanTheBHYTTemp.getFullYear();
            let ngayDenHanTheBHYTFormat = new Date(namDenHanTheBHYT, thangDenHanTheBHYT, ngayDenHanTheBHYT);

            compareDate = ngayDenHanTheBHYTFormat >= dateNowFormat;
        }

        if (CoBHYT && LyDoVaoVien == 1 && compareDate){ //&& this.tiepNhanBenhNhan.BHYTNgayHetHan >= dateNow) 
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

    setDonGiaThanhTienGrid(item: ChiDinhDichVuGridVo) {
        item.ThanhTien = item.DonGia * item.SoLuong;
        //Chi tinh trong truong hop khong co bhyt
        item.BnThanhToan = item.ThanhTien;
    }

    setGiaBHYT() {
        //console.log("setGiaBHYT = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
        //this.setGiaBHYTSoLanKham();
        let soLanKham = 1;
        let tyLeLan1 = 0;
        let tyLeLan2 = 0;
        let tyLeLan3 = 0;
        let tyLeLan4 = 0;
        let tyLeLan5 = 0;
        ;
        this.apiService.get<Array<number>>("TiepNhanBenhNhan/GetTyLeSoLanHuongBHYTDichVu").subscribe(
            resultData => {
                if (resultData != null && resultData != undefined) {
                    //console.log("setGiaBHYTSoLanKham = ", resultData, resultData[0],  resultData[1]);
                    tyLeLan1 = resultData[0];
                    tyLeLan2 = resultData[1];
                    tyLeLan3 = resultData[2];
                    tyLeLan4 = resultData[3];
                    tyLeLan5 = resultData[4];
                    //console.log("Trươc = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
                    if (this.tiepNhanBenhNhan.YeuCauKhacGrid != null && this.tiepNhanBenhNhan.YeuCauKhacGrid != undefined) {
                        for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                            //console.log("Solan = ", soLanKham, " , TyLe = ",tyLeLan1, tyLeLan2, tyLeLan3, tyLeLan4, tyLeLan5);
                            const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                            //console.log("index = ", item, soLanKham);
                            this.setDonGiaThanhTienGrid(item);
                            //
                            if (item.DuocHuongBHYT == true && item.GiaBHYT != 0) {
                                if (soLanKham == 1) {
                                    item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan1 / 100;
                                    soLanKham = soLanKham + 1;
                                }
                                else if (soLanKham == 2) {
                                    item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan2 / 100;
                                    soLanKham = soLanKham + 1;
                                }
                                else if (soLanKham == 3) {
                                    item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan3 / 100;
                                    soLanKham = soLanKham + 1;

                                }
                                else if (soLanKham == 4) {
                                    item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan4 / 100;
                                    soLanKham = soLanKham + 1;

                                }
                                else if (soLanKham == 5) {
                                    item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan5 / 100;
                                    soLanKham = soLanKham + 1;

                                }
                                else {
                                    item.BHYTThanhToan = item.GiaBHYT * item.TiLeBaoHiemThanhToan / 100 * 0 / 100;
                                    soLanKham = soLanKham + 1;

                                }
                                item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                                item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                            }
                        }
                    }

                    //this.setDataForDichVuKhac();
                    //console.log("Sau = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
                }
                let bhytKhacKhamBenh = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.BHYTThanhToan, 0);

                if (bhytKhacKhamBenh != 0 && bhytKhacKhamBenh < this.soTienBHYTSeThanhToan) {
                    for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                        const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                        if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && this.tiepNhanBenhNhan.BHYTMucHuong != null) {
                            item.BHYTThanhToan = item.BHYTThanhToan;
                            item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                            item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                        }
                    }
                }
                else if (bhytKhacKhamBenh != 0 && bhytKhacKhamBenh >= this.soTienBHYTSeThanhToan) {
                    for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                        const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                        if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && this.tiepNhanBenhNhan.BHYTMucHuong != null) {
                            item.BHYTThanhToan = item.BHYTThanhToan * this.tiepNhanBenhNhan.BHYTMucHuong / 100;
                            item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                            item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                        }
                    }

                }
                //console.log("tiepNhanBenhNhan.BHYTMucHuong = ", this.tiepNhanBenhNhan.BHYTMucHuong);
                this.setDataForDichVuKhac();
                this.refreshGrid();
            }


        )


    }

    setGiaBHYTSoLanKham() {


    }

    getListTenTrieuChungKham() {
        this.apiService.get<Array<string>>("TiepNhanBenhNhan/GetListTenTrieuChungKhamAsync").subscribe(
            resultData => {
                this.TrieuChungTiepNhanResource = resultData;
                //this.getDefaultDataForLyDoTiepNhan();
            }
        )
    }

    getDefaultDataForLyDoTiepNhan() {
        this.apiService.get<any>('TiepNhanBenhNhan/GetLyDoTiepNhanDefaultData').subscribe((result) => {
            this.tiepNhanBenhNhan.LyDoTiepNhanId = result.Result.Id;
            this.tiepNhanBenhNhan.LyDoTiepNhanText = result.Result.Ten;
        })
    }

    getDefaultDataTNBN() {
        this.apiService.get<DefaultValueTNBNModel>('TiepNhanBenhNhan/GetDefaultDataTNBN').subscribe((result) => {
            if (result != undefined) {
                if (result.DanTocId != 0 && result.DanTocId != null) {
                    this.tiepNhanBenhNhan.DanTocId = result.DanTocId;
                }
                if (result.HinhThucDenId != 0 && result.HinhThucDenId != null) {
                    this.tiepNhanBenhNhan.HinhThucDenId = result.HinhThucDenId;
                }
                if (result.LyDoTiepNhanId != 0 && result.LyDoTiepNhanId != null) {
                    this.tiepNhanBenhNhan.LyDoTiepNhanId = result.LyDoTiepNhanId;
                }
                if (result.QuocTichId != 0 && result.QuocTichId != null) {
                    this.tiepNhanBenhNhan.QuocTichId = result.QuocTichId;
                }
                if (result.TinhThanhPhoId != 0 && result.TinhThanhPhoId != null) {
                    this.tiepNhanBenhNhan.TinhThanhId = result.TinhThanhPhoId;
                }
            }
        })
    }

    // click(){
    //     this.tiepNhanBenhNhan.LyDoTiepNhanId = 27
    // }

    refreshGrid() {

        if (!(this.cdRef as ViewRef).destroyed) {
            this.cdRef.detectChanges();
        }

        if (this.gridChildKhamBenh != undefined) {
            this.gridChildKhamBenh.setDataSource();
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

        if (this.gridChildKyThuat != undefined) {
            this.gridChildKyThuat.setDataSource();
        }

        if (this.gridTaiLieuDinhKem != undefined) {
            this.gridTaiLieuDinhKem.setDataSource();
        }
    }

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
    ngAfterContentInit() {
        var self = this;
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

    checkOutOfDateBHYT(date: Date) {
        //console.log("checkOutOfDateBHYT ");
        let dateNow = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        if (date.getTime() < dateNow.getTime()) {
            this.isActivePopup = true;
            this.isOutOfDate = true;
            this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.HetHieuLuc;
            //this.notificationService.showError("Thẻ bảo hiểm này đã hết hiệu lực, bạn phải chuyển qua khám nhân dân");

            let dialogRef = this.dialog.open(TiepNhanBenhNhanPopupHetHieuLucComponent, {
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
                //console.log("DiaChiBHYT = ", resultData);
                if(!coDiaChi)
                {
                    this.tiepNhanBenhNhan.TinhThanhId = null;
                    this.tiepNhanBenhNhan.QuanHuyenId = null;
                    this.tiepNhanBenhNhan.PhuongXaId = null;
                    this.tiepNhanBenhNhan.DiaChi = null;
                }
                
                var self = this;
                setTimeout(function () {
                    if (!coDiaChi) {
                        self.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
                        self.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
                        self.tiepNhanBenhNhan.PhuongXaId = resultData.PhuongXaId;
                        self.tiepNhanBenhNhan.DiaChi = soNha;
                    }

                    if (self.under6yearsold && !coDiaChiGiamHo) {
                        self.cloneDiaChiNguoiGiamHo();
                    }
                }, 600);

                //this.comboboxPhuongXa;
                // if(this.comboboxPhuongXa != null && this.comboboxPhuongXa != undefined){
                //     this.comboboxPhuongXa.queryInfo.ParameterDependencies = "{tinhThanh:"+ resultData.QuanHuyenId +"}";
                // }
                // if(this.comboboxQuanHuyen != null && this.comboboxQuanHuyen != undefined){
                //     this.comboboxQuanHuyen.queryInfo.ParameterDependencies = "{quanHuyen:"+ resultData.TinhThanhId +"}";
                // }
                // this.comboboxPhuongXa.getDataForLookup();
                // this.comboboxQuanHuyen.getDataForLookup();
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
        let maTheArray = model.maThe.split("");
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
        this.themChiDinhDichVuModel.BHYTMucHuong = this.soPhanTramHuongBHYT;
        this.themChiDinhGoiModel.BHYTMucHuong = this.soPhanTramHuongBHYT;

        //

        this.tiepNhanBenhNhan.HoTen = model.hoTen;

        if (model.ngaySinh.indexOf("/") == -1) {
            this.tiepNhanBenhNhan.NamSinh = +model.ngaySinh;
        }
        else {
            var dateParts = model.ngaySinh.split("/");
            if(dateParts.length == 3)
            {
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
        //     resultData => {
        //         this.thongTinTaiKhoanBenhNhan = resultData;

        //     },
        //     () => {
        //         //return null;
        //         //console.log("error")
        //     });


        this.checkTNBNToDay(model.maThe);

        this.apiService.post<any>("TiepNhanBenhNhan/GetThongTinBenhNhan?maSoBHYT=" + model.maThe + "&benhNhanId="+ this.benhNhanId).subscribe(
            resultData => {
                if (resultData != null) {
                    //this.tiepNhanBenhNhan.DiaChi = resultData.DiaChi; //BVHD-3768
                    this.tiepNhanBenhNhan.SoDienThoai = resultData.SoDienThoai;
                    this.tiepNhanBenhNhan.SoChungMinhThu = resultData.SoChungMinhThu;
                    this.tiepNhanBenhNhan.Email = resultData.Email;
                    this.tiepNhanBenhNhan.NgheNghiepId = resultData.NgheNghiepId;
                    this.tiepNhanBenhNhan.SoDienThoai = resultData.SoDienThoai;
                    this.tiepNhanBenhNhan.GioiTinh = resultData.GioiTinh;
                    this.tiepNhanBenhNhan.NoiLamViec = resultData.NoiLamViec;
                    this.tiepNhanBenhNhan.QuocTichId = resultData.QuocTichId;
                }
            },
            () => {
                //return null;
                //console.log("error")
            });

        this.apiService.post<any>("TiepNhanBenhNhan/GetIdBenhNhan?maSoBHYT=" + model.maThe + "&benhNhanId="+ this.benhNhanId).subscribe(
            resultData => {
                if(resultData)
                {
                    this.benhNhanId = resultData;
                    this.getDanhSachGoiBenhNhan(this.benhNhanId);
                }
            },
            () => {
                //return null;
                //console.log("error")
            });

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
        this.apiService.post<any>("TiepNhanBenhNhan/IsDungTuyen?maBenhVien=" + model.maDKBD).subscribe(
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

        //
        //test
        //model.isConnectSuccessfully = false;
        //
        if (model.isConnectSuccessfully == false) {
            //console.log("model.isConnectSuccessfully");
            this.tiepNhanBenhNhan.IsCheckedBHYT = false;
            this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;

            let dialogRef = this.dialog.open(TiepNhanBenhNhanPopupKhongKiemTraDuocComponent, {
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
        this.cdRef.detectChanges();
        //console.log("aaaaa= ", this.tiepNhanBenhNhan)
    }

    luuVaInPhieu() {
        var self = this;
        self.validationErrors = null;
        let comfrim = "lưu và in phiếu khám bệnh cho người bệnh";
        this.tiepNhanBenhNhan.NoiGioiThieu = null;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {

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
                    this.tiepNhanBenhNhan.ThoiGianTiepNhan = new Date();
                    self.apiService.post<any>("TiepNhanBenhNhan/LuuPhieuKham", this.tiepNhanBenhNhan).subscribe(
                        resultData => {
                            self.loading = false;
                            //console.log("result", resultData)
                            //self.router.navigate(['tiep-nhan-trong-ngay/']);
                            //this.getSharedPrintForm(resultData);
                            let loaiDichVuKyThuat = 4;
                            let loaiDichVuKhamBenh = 3;
                            let kiemtraLoaiDichVuKhamBenh = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(x => x.LoaiDichVuKhac == loaiDichVuKhamBenh).length;
                            let kiemtraLoaiDichVuKyThuat = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(x => x.LoaiDichVuKhac == loaiDichVuKyThuat).length;
                            if (kiemtraLoaiDichVuKhamBenh > 0 && kiemtraLoaiDichVuKyThuat > 0) {
                                this.getSharePrintPopup(resultData);
                            }
                            else {
                                this.getSharedPrintForm(resultData);
                            }
                            this.idYeuCauTiepNhan = resultData;
                            //confirm
                            this.dialog.open(ConfirmComponent, {
                                disableClose: false,
                                width: '400px',
                                data: { Title: "Xác nhận", Message: TiepNhanBenhNhanMessage.MessageDangKyTiepTheo }
                            }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
                                if (result == "Yes") {
                                    //self.router.navigate(['tiep-nhan-trong-ngay/']);
                                    //kiểm tra dịch vu trong yêu cầu tiếp nhận đó sài gói marketing trong gói
                                    this.kiemTraDichVuTrongGoi();
                                }
                                else {
                                    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
                                        this.router.navigate(['them-yeu-cau-tiep-nhan']));
                                    self.ngOnInit();
                                }
                            });

                        },
                        (err: any) => {
                            //console.log("err", err)
                            // trường hợp bhyt chưa đóng là không cho tạo mới 
                            self.loading = false;
                            if (err != undefined && err.Status == 503) {
                                this.dialog.open(ConfirmComponent, {
                                    disableClose: false,
                                    width: '400px',
                                    data: { Title: "Xác nhận", Message: TiepNhanBenhNhanMessage.MessageDaTaoYCTN }
                                }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
                                    if (result == "Yes") {
                                        //self.router.navigate(['tiep-nhan-trong-ngay/']);
                                        //self.router.navigateByUrl('tiep-nhan-trong-ngay/chinh-sua/' + );
                                        this.checkTNBNToDay(this.tiepNhanBenhNhan.BHYTMaSoThe, this.tiepNhanBenhNhan.BenhNhanId);
                                        this.getDanhSachGoiBenhNhan(this.tiepNhanBenhNhan.BenhNhanId);
                                    }
                                    else {
                                    }
                                });
                            }
                            else {
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
                            }
                        });



                    //
                }
                else
                {
                    self.loading = false;
                }
            });
        }
        else
        {
            self.loading = false;
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    kiemTraDichVuTrongGoi() {        
        this.apiService.get<any>("TiepNhanBenhNhan/KiemTraTatCaDichVuTrongGoi/" + this.idYeuCauTiepNhan).subscribe(resultData => {            
            if (resultData.Item1) {
                this.router.navigateByUrl('/danh-sach-thu-goi-marketing/chi-tiet-cho-quyet-toan-marketing/' +  resultData.Item2);              
            } else {
                this.router.navigateByUrl('danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/' + this.idYeuCauTiepNhan + "?loaiThanhToan=" + 1 + "&yctn=true");
            }
        });
    }


    // testin(){
    //   console.log("testin");
    //   this.onPrintPDF(60);
    // }
    // getSharedPrintForm(id: any) {
    //   return new Promise(resolve => {
    //     this.apiService.get<any>("TiepNhanBenhNhan/InPhieuKhamBenh?id=" + id + "&hostingName=" + this.hostingName).subscribe(resultData => {
    //       resolve(resultData);
    //     });
    //   });
    // }
    getSharePrintPopup(id: any) {
        this.apiService.get<any>("TiepNhanBenhNhan/InPhieuKhamBenh?id=" + id + "&hostingName=" + this.hostingName).subscribe(resultData => {
            let dialogRef = this.dialog.open(InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent, {
                width: '1000px',
                height: 'auto',
                data: { Model: resultData }
            }).afterClosed().subscribe(result => {
            });
        });
    }
    getSharedPrintForm(id: any) {
        this.apiService.get<any>("TiepNhanBenhNhan/InPhieuKhamBenh?id=" + id + "&hostingName=" + this.hostingName).subscribe(resultData => {
            //var self = this;
            //console.log("onPrintPDF = ", resultData);

            const tmpPhieuKham =
                '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU ĐĂNG KÝ KHÁM</th></tr></table>';
            const tmpPhieuCLS =
                '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU CHỈ ĐỊNH CẬN LÂM SÀNG</th></tr></table>';

            const tmpPhieuXNCoVId =
                '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU CHỈ ĐỊNH XÉT NGHIỆM TEST NHANH KHÁNG NGUYÊN SARS-CoV-2 </th></tr></table>';
  
    
            resultData = resultData.replaceAll(tmpPhieuKham, '').replaceAll(tmpPhieuCLS, '').replaceAll(tmpPhieuXNCoVId,'');
            const WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
            if(WindowPrt != null  && WindowPrt != undefined)
            {
                WindowPrt.focus();
                WindowPrt.close();
                WindowPrt.document.write(resultData);
                WindowPrt.document.close();
    
                var typeSize = "A5";
                var typeLayout = "landscape";
    
                var contents = WindowPrt.document.documentElement.innerHTML;
                var frame1 = this.renderer.createElement('iframe');
                frame1.name = "frame1";
                frame1.style.position = "absolute";
                frame1.style.top = "-1000000px";
                document.body.appendChild(frame1);
                var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
                frameDoc.document.open();
                frameDoc.document.write('<html><head><title>DIV Contents</title><style>*{ box-sizing: border-box;} @media print {@page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet">');
                frameDoc.document.write('</head><body>');
                frameDoc.document.write(contents);
                frameDoc.document.write('</body></html>');
                frameDoc.document.close();
                setTimeout(function () {
                    window.frames["frame1"].focus();
                    window.frames["frame1"].print();
                    document.body.removeChild(frame1);
                }, 500);
            }
        });


    }


    luuPhieu() {

        var self = this;
        self.validationErrors = null;
        let comfrim = "lưu phiếu khám bệnh cho người bệnh";
        if(self.tiepNhanBenhNhan.YeuCauKhacGrid == undefined || self.tiepNhanBenhNhan.YeuCauKhacGrid.length == 0)
        {
            comfrim = "lưu thông tin cho người bệnh";
        }
        self.tiepNhanBenhNhan.NoiGioiThieu = null;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
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
                    self.tiepNhanBenhNhan.ThoiGianTiepNhan = new Date();
                    self.apiService.post<any>("TiepNhanBenhNhan/LuuPhieuKham", this.tiepNhanBenhNhan).subscribe(
                        resultData => {
                            self.loading = false;
                            //console.log("result", resultData)
                            //self.router.navigate(['tiep-nhan-trong-ngay/']);

                            // if(){

                            // }
                            this.idYeuCauTiepNhan = resultData;
                            //confirm
                            this.dialog.open(ConfirmComponent, {
                                disableClose: false,
                                width: '400px',
                                data: { Title: "Xác nhận", Message: TiepNhanBenhNhanMessage.MessageDangKyTiepTheo }
                            }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
                                if (result == "Yes") {
                                    //self.router.navigate(['tiep-nhan-trong-ngay/']);
                                    // self.router.navigateByUrl('danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/' + this.idYeuCauTiepNhan + "?loaiThanhToan=" + 1 + "&yctn=true");
                                    this.kiemTraDichVuTrongGoi();
                                }
                                else {
                                    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
                                        this.router.navigate(['them-yeu-cau-tiep-nhan']));
                                    self.ngOnInit();
                                }
                            });

                        },
                        (err: any) => {
                            self.loading = false;
                            //console.log("err", err)
                            // self.validationErrors = err.ValidationErrors;
                            if (err != undefined && err.Status == 503) {
                                this.dialog.open(ConfirmComponent, {
                                    disableClose: false,
                                    width: '400px',
                                    data: { Title: "Xác nhận", Message: TiepNhanBenhNhanMessage.MessageDaTaoYCTN }
                                }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
                                    if (result == "Yes") {
                                        //self.router.navigate(['tiep-nhan-trong-ngay/']);
                                        //self.router.navigateByUrl('tiep-nhan-trong-ngay/chinh-sua/' + );
                                        this.checkTNBNToDay(this.tiepNhanBenhNhan.BHYTMaSoThe, this.tiepNhanBenhNhan.BenhNhanId);
                                        this.getDanhSachGoiBenhNhan(this.tiepNhanBenhNhan.BenhNhanId);
                                    }
                                    else {
                                    }
                                });
                            }
                            else {
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
                            }
                        });



                    //
                }
                else{
                    self.loading = false;
                }
            });
        }
        else{
            self.loading = false;
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    xemThemThongTinBHYT() {
        //console.log("xemThemThongTinBHYT")
        let dialogRef = this.dialog.open(TiepNhanBenhNhanPopupComponent, {
            disableClose: false,
            width: '800px',
            height: '500px',
            data: this.tiepNhanBenhNhan,
        });
        dialogRef.afterClosed().subscribe(result => {

        });
    }

    huy() {
        //this.router.navigate(['tiep-nhan-trong-ngay/']);
        this.ngOnInit();

    }
    getBenhVienByMa(ma: string) {
        ;
        this.apiService.post<string>("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + ma).subscribe(
            resultData => {
                return resultData;

            },
            () => {
                //return null;
                //console.log("error")
            });
        return null;
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
                let dialogRef = this.dialog.open(TiepNhanBenhNhanErrorComponent, {
                    disableClose: false,
                    width: '700px',
                    height: '300px',
                    data: this.tiepNhanBenhNhan,
                });
                dialogRef.afterClosed().subscribe(result => {
                    document.getElementById("SoTheBHYTisAutoFocus").focus();
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
    postTimKiem: any = null;
    timeOutTimKiem: any = null;
    timKiemBenhNhan(model: TimKiemBenhNhanGridVo) {
        var self = this;
        if (self.timeOutTimKiem != null) {
            clearTimeout(self.timeOutTimKiem);
            self.timeOutTimKiem = null;
        }
        self.timeOutTimKiem = setTimeout(function () {
            self.setModelTimKiemBenhNhan();
            self.lstBenhNhan = new Array<TimKiemBenhNhanGridVo>();
            self.totalBenhNhan = 0;
            if (self.postTimKiem != null) {
                self.postTimKiem.unsubscribe();
                self.postTimKiem = null;
            }
            self.postTimKiem = self.apiService.post<Array<TimKiemBenhNhanGridVo>>("TiepNhanBenhNhan/GetBenhNhanTimKiem", model).subscribe(
                resultData => {
                    //console.log("timKiemBenhNhan = ", resultData);
                    self.lstBenhNhan = resultData;
                    if (resultData != undefined && resultData != null) {
                        self.totalBenhNhan = resultData.length;
                        let index = 1;
                        self.lstBenhNhan.forEach(obj => {
                            obj.STT = index;
                            index = index + 1;
                        });
                    }
                    //console.log("timKiemBenhNhan = ", this.lstBenhNhan);
                },
                (err: ApiError) => {
                });
        }, 500);

    }

    postTimKiemForEnter: any = null;
    timeOutTimKiemForEnter: any = null;
    timKiemBenhNhanForEnter(model: TimKiemBenhNhanGridVo) {
        var self = this;
        if (self.timeOutTimKiemForEnter != null) {
            clearTimeout(self.timeOutTimKiemForEnter);
            self.timeOutTimKiemForEnter = null;
        }
        self.timeOutTimKiemForEnter = setTimeout(function () {
            self.setModelTimKiemBenhNhan();
            self.lstBenhNhan = new Array<TimKiemBenhNhanGridVo>();
            self.totalBenhNhan = 0;
            if (self.postTimKiemForEnter != null) {
                self.postTimKiemForEnter.unsubscribe();
                self.postTimKiemForEnter = null;
            }
            self.postTimKiemForEnter = self.apiService.post<Array<TimKiemBenhNhanGridVo>>("TiepNhanBenhNhan/GetBenhNhanTimKiem", model).subscribe(
                resultData => {
                    self.lstBenhNhan = resultData;
                    if (resultData != undefined && resultData != null) {
                        self.totalBenhNhan = resultData.length;
                        let index = 1;
                        self.lstBenhNhan.forEach(obj => {
                            obj.STT = index;
                            index = index + 1;
                        });

                        //
                        if (resultData.length == 1) {
                            // self.router.navigate(['tiep-nhan-trong-ngay/chinh-sua/' + resultData[0].Id]);
                            self.checkTNBNToDay(resultData[0].MaBHYT, resultData[0].Id);
                        }
                        else if (resultData.length > 1) {
                            self.timKiemBenhNhanPopup();
                        }
                    }
                    //console.log("timKiemBenhNhan = ", this.lstBenhNhan);
                },
                (err: ApiError) => {
                });
        }, 500);

    }

    setModelTimKiemBenhNhan() {
        this.modelTimKiemBenhNhan.MaBHYT = this.tiepNhanBenhNhan.BHYTMaSoThe;
        this.modelTimKiemBenhNhan.HoTen = this.tiepNhanBenhNhan.HoTen;
        this.modelTimKiemBenhNhan.NgaySinhDisplay = this.tiepNhanBenhNhan.NgayThangNamSinhDisplay;
        this.modelTimKiemBenhNhan.NamSinh = this.tiepNhanBenhNhan.NamSinh;
        //this.modelTimKiemBenhNhan.GioiTinh = this.tiepNhanBenhNhan.GioiTinh;
        this.modelTimKiemBenhNhan.SoChungMinhThu = this.tiepNhanBenhNhan.SoChungMinhThu;
        this.modelTimKiemBenhNhan.SoDienThoai = this.tiepNhanBenhNhan.SoDienThoai;
        this.modelTimKiemBenhNhan.DiaChi = this.tiepNhanBenhNhan.DiaChi;
    }

    onKeyTimKiemBenhNhan($event) {
        if ($event.keyCode === 13) {

            if (this.totalBenhNhan <= 0) {
                return;
            }
            else {
                this.timKiemBenhNhanPopup();
            }
        }
        else {
            this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
        }
    }

    onKeyTimKiemBenhNhanForLogicNewCMNDVaSdt($event) {
        //console.log("onKeyTimKiemBenhNhanForLogicNewCMNDVaSdt = ", $event.keyCode);
        if ($event.keyCode === 13) {
            this.timKiemBenhNhanForEnter(this.modelTimKiemBenhNhan);
        }
        else {
            this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
        }
    }

    onKeySdt($event) {
        this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
    }

    //cheat for tab on [BVHD-1506]
    onKeyScanner(event) {
        //console.log("onKeyScanner = ", event);
        if (event.keyCode === 9) {
            //console.log(this.HoVaTenTextbox);
            this.HoVaTenTextbox.focus();
        }
    }

    onKeyLookBN(event) {
        if (event.keyCode === 9) {
            if (this.tiepNhanBenhNhan.CoBHYT == true) {
                //console.log(this.NgaySinhCoBHYT);
                //this.NgaySinhCoBHYT.focusManual();
            }
            else {
                //console.log(this.NgaySinhKhongCoBHYT);
                //this.NgaySinhKhongCoBHYT.focusManual();
            }
        }
    }

    onKeyHinhThucDen(event) {
        // if (event.keyCode === 9) {
        //     this.tabStrip.selectTab(0);
        //     let self = this;
        //     setTimeout(function () {
        //         //console.log("setTimeout = ", self.dichVuCombobox);
        //         if (self.dichVuCombobox != undefined) {
        //             self.dichVuCombobox.focusManual();
        //         }
        //     }, 100);
        // }
    }

    onKey(event: any, isSoTheBHYT: boolean, loai: number = 1) {
        if (isSoTheBHYT == true) {
            this.bindMucHuongFromSoTheBHYT(this.tiepNhanBenhNhan.BHYTMaSoThe);
        }
        //console.log("onKey = ", event);
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
        if (event.keyCode === 13) {
            if (loai == 3 && this.tiepNhanBenhNhan.NgayThangNamSinh != null && this.tiepNhanBenhNhan.NgayThangNamSinh != undefined) {
                this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);
            }
            this.checkTNBNToDay(this.tiepNhanBenhNhan.BHYTMaSoThe);
        }

        this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
        //console.log("onKey = ", this.isCheckedBHYT);
        if (this.isCheckedBHYT == true || this.tiepNhanBenhNhan.CoBHYT != true) return;

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


                    let dialogRef = this.dialog.open(TiepNhanBenhNhanChoQuetComponent, {
                        disableClose: true,
                        width: '500px',
                        height: '250px',
                        data: this.thongTinBenhNhan,
                    });
                    dialogRef.afterClosed().subscribe(result => {
                        //console.log("close = ", result);

                        //console.log("close = ", this.tiepNhanBenhNhan);
                        if (result === undefined) {
                            //cheat vi khong hieu sao ra duoc
                        }
                        // else if (result == null || (result != null && result.maKetQua == "050")) {
                        else if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
                            //this.clearData();
                            //this.notificationService.showError(TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan);
                            //
                            //console.log("TiepNhanBenhNhanErrorComponent = ", this.tiepNhanBenhNhan);
                            this.tiepNhanBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
                            let dialogRef = this.dialog.open(TiepNhanBenhNhanErrorComponent, {
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

    blur($event: any, isSoTheBHYT: boolean, loai: number = 1) {
        if (isSoTheBHYT == true && this.changeMaTheBHYT != true) {
            return;
        }

        if (isSoTheBHYT == true) {
            this.bindMucHuongFromSoTheBHYT(this.tiepNhanBenhNhan.BHYTMaSoThe);
        }

        this.checkTNBNToDay(this.tiepNhanBenhNhan.BHYTMaSoThe);

        if (loai == 3 && this.tiepNhanBenhNhan.NgayThangNamSinh != null && this.tiepNhanBenhNhan.NgayThangNamSinh != undefined) {
            this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);
        }
        //console.log("blur = ", this.isCheckedBHYT);
        if (this.isCheckedBHYT == true || this.tiepNhanBenhNhan.CoBHYT != true) return;

        if (this.tiepNhanBenhNhan.TuNhap == true && this.isScanF1 == false && !(this.tiepNhanBenhNhan.BHYTMaSoThe != null && this.tiepNhanBenhNhan.BHYTMaSoThe.includes("$"))) return;

        this.isCheckedBHYT = true;
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


                let dialogRef = this.dialog.open(TiepNhanBenhNhanChoQuetComponent, {
                    disableClose: true,
                    width: '500px',
                    height: '250px',
                    data: this.thongTinBenhNhan,
                });
                dialogRef.afterClosed().subscribe(result => {
                    //console.log("close = ", result, typeof(result));
                    if (result === undefined) {
                        //console.log("undefined");
                        //cheat vi khong hieu sao ra duoc
                    }
                    // else if (result == null || (result != null && result.maKetQua == "050")) {
                    else if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
                        //this.clearData();
                        //this.notificationService.showError(TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan);
                        //console.log("null");
                        //
                        //console.log("TiepNhanBenhNhanErrorComponent = ", this.tiepNhanBenhNhan);
                        this.tiepNhanBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
                        let dialogRef = this.dialog.open(TiepNhanBenhNhanErrorComponent, {
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

    clearData() {
        let soTheBHYT = this.tiepNhanBenhNhan.BHYTMaSoThe;
        let hoVaTen = this.tiepNhanBenhNhan.HoTen;
        let ngaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
        this.ngOnInit();

        this.tiepNhanBenhNhan.BHYTMaSoThe = soTheBHYT;
        this.tiepNhanBenhNhan.HoTen = hoVaTen;
        this.tiepNhanBenhNhan.NgayThangNamSinh = ngaySinh;
    }

    TinhThanhPhoChange($event) {
        if ($event == undefined || $event == null) {
            //this.tiepNhanBenhNhan.TinhThanhId = $event;
            this.tiepNhanBenhNhan.QuanHuyenId = null;
            this.tiepNhanBenhNhan.PhuongXaId = null;
        }
        // else {
		// 	this.comboboxQuanHuyen.getDataForLookup();
		// }

        if (this.under6yearsold) {
            this.cloneDiaChiNguoiGiamHo();
        }
        if(this.under6yearsold == false)
        {
            this.cloneDiaChiNguoiGiamLonHon6Tuoi();
        }

    }

    TinhThanhPhoNguoiLienHeChange($event) {
        //console.log("TinhThanhPhoNguoiLienHeChange = ", $event);
        this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = null;
        this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
    }

    QuanHuyenChange($event) {
        //this.tiepNhanBenhNhan.QuanHuyenId = $event;
        // if($event == null || $event == undefined){
        //     this.tiepNhanBenhNhan.PhuongXaId = null;
        // }
        // else{
        //     this.tiepNhanBenhNhan.ph
        // }

        if ($event == undefined || $event == null) {
            this.tiepNhanBenhNhan.PhuongXaId = null;
        }

        if (this.under6yearsold) {
            this.cloneDiaChiNguoiGiamHo();
        }
        if(this.under6yearsold == false)
        {
            this.cloneDiaChiNguoiGiamLonHon6Tuoi();
        }
    }

    PhuongXaChange($event) {
        this.tiepNhanBenhNhan.PhuongXaId = $event;
        if ($event != null && $event != undefined) {
            this.apiService.post<any>("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + $event).subscribe(
                resultData => {
                    this.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
                    this.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
                    this.comboboxQuanHuyen.getDataForLookup();

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


        if (this.under6yearsold) {
            this.cloneDiaChiNguoiGiamHo();
        }
        if(this.under6yearsold == false)
        {
            this.cloneDiaChiNguoiGiamLonHon6Tuoi();
        }

    }

    QuanHuyenNguoiLienHeChange($event) {
        //console.log("QuanHuyenNguoiLienHeChange = ", $event);
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
    ThongTinBenhNhanHoTenChange($event: string) {
        //console.log("ThongTinBenhNhanHoTenChange = ", $event);
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
        this.changeMaTheBHYT = true;
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
            if (this.under6yearsold == false) {
                this.cloneDiaChiNguoiGiamLonHon6Tuoi();
            }

            // kiểm tra khi change ngày tháng năm sinh, nếu ko nhập vào data mà khi đó filed năm sinh đã có thì sẽ ko clear data năm sinh
            if(this.tiepNhanBenhNhan.NamSinh == undefined || this.tiepNhanBenhNhan.NamSinh == null)
            {
                this.tiepNhanBenhNhan.NamSinh = null;
            }
        }
        //console.log("ThongTinBenhNhanNgaySinhChange = ", $event, "type of: ", typeof($event));
    }
    QuetMaQRCodeClick() {
        let elementBarcode: HTMLElement = document.getElementById('barcodeActive') as HTMLElement;
        if (elementBarcode != undefined) {
            elementBarcode.click();
            this.isScanF1 = true;
        }
    }

    test($event) {
        console.log("test = ", $event);
    }


    setUpDataTooltip(dataItem) {
        this.displayToolTipGrid = dataItem.TenGoiChietKhau;
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
        this.setDataForDichVuKyThuat();
        this.setDataForDichVuKhamBenh();
        this.refreshGrid();

        this.removeThemDichVuValue();
        this.removeThemGoiValue();
    }

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
        //this.themChiDinhGoiModel.DoiTuongUuDaiId = this.tiepNhanBenhNhan.DoiTuongUuDaiId;

        this.loaiTiepNhan = null;
        this.isGoiCoChietKhau = null;
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
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
        //console.log("checkValidAddChiDinhDichVuKhac = ", this.tiepNhanBenhNhan.YeuCauKhacGrid, this.loaiTiepNhan, id);
        let model = this.tiepNhanBenhNhan.YeuCauKhacGrid
            //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
            .find(obj => obj.MaDichVuId == id && obj.Nhom == nhom);
        //console.log("checkValidAddChiDinhDichVuKhac = ", model, nhom);
        if (model != undefined) {
            return false;
        }
        return true;
    }

    checkValidAddGoiCoChietKhau(id: number) {
        //console.log("checkValidAddChiDinhDichVuKhac = ", this.tiepNhanBenhNhan.YeuCauKhacGrid, this.loaiTiepNhan, id);
        let model = this.tiepNhanBenhNhan.YeuCauKhacGrid
            //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
            .find(obj => obj.GoiCoChietKhauId == id);
        //console.log("checkValidAddChiDinhDichVuKhac = ", model, nhom);
        if (model != undefined) {
            return false;
        }
        return true;
    }

    checkValidAddGoiKhongCoChietKhau(id: number, nhom: string) {
        //console.log("checkValidAddChiDinhDichVuKhac = ", this.tiepNhanBenhNhan.YeuCauKhacGrid, nhom, id);
        let model = this.tiepNhanBenhNhan.YeuCauKhacGrid
            .filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
            .find(obj => obj.MaDichVuId == id && obj.Nhom == nhom);
        //console.log("checkValidAddChiDinhDichVuKhac = ", model, nhom);
        if (model != undefined) {
            return false;
        }
        return true;
    }

    checkValidAddChiDinhDichVuKhamBenh(id: number) {
        ;
        let model = this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null).find(obj => obj.MaDichVuId == id);
        if (model != undefined) {
            return false;
        }
        return true;
    }

    checkValidAddChiDinhDichVuKyThuat(id: number) {
        //console.log("checkValidAddChiDinhDichVuKhamBenh = ", this.tiepNhanBenhNhan.YeuCauKhamBenhGrid,id);
        let model = this.tiepNhanBenhNhan.YeuCauKyThuatGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null).find(obj => obj.MaDichVuId == id);
        //console.log("checkValidAddBHTN = ", index);
        if (model != undefined) {
            return false;
        }
        return true;
    }



    // themChiDinhDichVu() {
    //     var self = this;

    //     let isValid = this.checkValidAddChiDinhDichVuKhamBenh(this.themChiDinhDichVuModel.MaDichVuId);
    //     if (isValid == false) return;

    //     self.validationErrors = null;

    //     self.apiService.post<ChiDinhDichVuGridVo>("TiepNhanBenhNhan/ThemDichVu", this.themChiDinhDichVuModel).subscribe(
    //         resultData => {
    //             if (resultData != undefined && resultData != null) {
    //                 //console.log(resultData);
    //                 this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.push(resultData);
    //                 this.setDataForDichVuKhamBenh();
    //                 this.setGiaBHYT();
    //                 this.refreshGrid();
    //                 this.removeThemDichVuValue();
    //             }
    //             else {
    //             }
    //         },
    //         (err: any) => {
    //             ;
    //             // self.validationErrors = err.ValidationErrors;
    //             //console.log(err);
    //             if (err != undefined && err.ValidationErrors != null) {
    //                 self.validationErrors = err.ValidationErrors;
    //             }
    //             else if (err != undefined && err.Errors == null) {
    //                 //self.validationErrors.push({ "Message": err.Message });
    //                 self.notificationService.showError(err.Message);
    //             }
    //         });
    // }

    themChiDinhDichVuGoiNew() {
        if (this.isGoiCoChietKhau) {
            this.themChiDinhDichVuKhacKhamBenh(2);
        }
        else if (this.isGoiCoChietKhau == false || this.isGoiCoChietKhau == null) {
            this.themChiDinhDichVuKhacKhamBenh(1);
        }
    }

    themChiDinhDichVuNew() {
        //console.log("themChiDinhDichVuNew = ", this.loaiTiepNhan, this.danhSachDichVuDaChonTrongLanPopup);
        // if(this.tiepNhanBenhNhan.BenhNhanId != null && this.tiepNhanBenhNhan.BenhNhanId != 0){

        // }
        // else{
        //     if (this.loaiTiepNhan == 1) {
        //         this.themChiDinhDichVuKhacKhamBenh(3);
        //     }
        //     else if (this.loaiTiepNhan == 2) {
        //         this.themChiDinhDichVuKhacKhamBenh(4);
        //     }
        //     else {
        //         this.themChiDinhDichVuKhacKhamBenh(5);
        //     }
        // }
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


        model.DanhSachDichVuChonTrongLanPopup = this.danhSachDichVuDaChonTrongLanPopup;

        //check trung
        let self = this;
        let itemExist = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.MaDichVuId == model.DichVuThem.MaDichVuId && o.Nhom == model.DichVuThem.TenNhomDichVu);

        if (itemExist.length > 0) {
            self.dialog.open(PopupDichVuCheckTrungComponent, {
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
        else {
            this.themDichVu(model);
        }



    }

    themDichVu(model) {
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

        // this.apiService.post<DichVuTrongGoiKhiThem>("TiepNhanBenhNhan/CheckDuSoLuongTonTrongGoiForCreate", model).subscribe(
        //     resultData => {
        //         if (resultData != undefined && resultData != null) {
        //             //console.log("DichVuTrongGoiKhiThem = ", resultData);
        //             dataRes = resultData;
        //             this.dialog.open(ConfirmComponent, {
        //                 disableClose: false,
        //                 width: '400px',
        //                 data: { Title: "Xác nhận", Message: CommonService.format(TiepNhanBenhNhanMessage.MessageConfirmThemVaoGoi, [resultData.TenDichVu, resultData.TenChuongTrinh, this.tiepNhanBenhNhan.HoTen]) }
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

        //                     self.danhSachDichVuGoiDaChon.push(item);
        //                     self.themChiDinhDichVuKhacKhamBenh(6, self.danhSachDichVuGoiDaChon);
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

    themChiDinhDichVuKhacKhamBenh(loaiDichVuKhac: number, lstDataGoi: Array<ThemChiDinhDichVu> = null) {
        //1: goi khong co chiet khau, 2: goi co chiet khau, 3: dich vu kham benh, 4: dich vu ky thuat, 5: dich vu giuong
        //bỏ check trùng 29/10/2020 Tuan said: "e sửa lại ko cần check trùng luôn : 2:04PM"
        // if (loaiDichVuKhac == 2) {
        //     let isValid = this.checkValidAddGoiCoChietKhau(this.themChiDinhGoiModel.MaDichVuGoiId);
        //     if (isValid == false) {
        //         this.notificationService.showError(TiepNhanBenhNhanMessage.MessageGoiTonTai);
        //         return;
        //     };
        // }
        // else if(loaiDichVuKhac == 1){
        //     //let isValid = this.checkValidAddChiDinhDichVuKhac(this.themChiDinhGoiModel.MaDichVuId);
        //     //if (isValid == false) return;
        // }
        // else {
        //     let isValid = this.checkValidAddChiDinhDichVuKhac(this.themChiDinhDichVuModel.MaDichVuId);
        //     if (isValid == false && loaiDichVuKhac != 1 && loaiDichVuKhac != 2){
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
        
        this.validationErrors = null;

        let urlDefault = "TiepNhanBenhNhan/ThemDichVu";
        if (loaiDichVuKhac == 4) {
            urlDefault = "TiepNhanBenhNhan/ThemDichVuKyThuat";
        }
        else if (loaiDichVuKhac == 5) {
            urlDefault = "TiepNhanBenhNhan/ThemDichVuGiuong";
        }
        //Goi new
        else if (loaiDichVuKhac == 6) {
            urlDefault = "TiepNhanBenhNhan/ThemDichVuTuGoi";
        }
        else if (loaiDichVuKhac == 1) {
            urlDefault = "TiepNhanBenhNhan/ThemGoiKhongChietKhau";
            this.themChiDinhDichVuModel.LaGoi = true;
            this.themChiDinhGoiModel.LaGoi = true;
            this.themChiDinhDichVuModel.MaDichVuId = this.themChiDinhDichVuModel.MaDichVuGoiId;
            this.themChiDinhGoiModel.MaDichVuId = this.themChiDinhGoiModel.MaDichVuGoiId;
        }
        else if (loaiDichVuKhac == 2) {
            urlDefault = "TiepNhanBenhNhan/ThemGoiCoChietKhau";
            this.themChiDinhDichVuModel.LaGoi = true;
            this.themChiDinhGoiModel.LaGoi = true;
            this.themChiDinhDichVuModel.MaDichVuId = this.themChiDinhDichVuModel.MaDichVuGoiId;
            this.themChiDinhGoiModel.MaDichVuId = this.themChiDinhGoiModel.MaDichVuGoiId;
        }

        if (loaiDichVuKhac == 6) {
            this.apiService.postArray<ChiDinhDichVuGridVo[]>(urlDefault, lstDataGoi).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        //console.log(resultData);
                        //
                        resultData.forEach(obj => {
                            this.tiepNhanBenhNhan.YeuCauKhacGrid.push(obj);
                        });
                        this.setDataForDichVuKhac();
                        this.setGiaBHYT();
                        //this.refreshGrid();
                        this.removeThemDichVuValue();
                        this.removeThemGoiValue();
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
        else if (loaiDichVuKhac == 1 || loaiDichVuKhac == 2) {
            this.apiService.post<ChiDinhDichVuGridVo[]>(urlDefault, this.themChiDinhGoiModel).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        //console.log(resultData);
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
                        resultData.forEach(obj => {
                            if (loaiDichVuKhac == 1) {
                                let isValid = this.checkValidAddGoiKhongCoChietKhau(obj.MaDichVuId, obj.Nhom);
                                if (isValid != false) {
                                    obj.LoaiDichVuKhac = loaiDichVuKhac;
                                    this.tiepNhanBenhNhan.YeuCauKhacGrid.push(obj);
                                }
                            }
                            else {
                                obj.LoaiDichVuKhac = loaiDichVuKhac;
                                this.tiepNhanBenhNhan.YeuCauKhacGrid.push(obj);
                            }


                        });
                        this.setDataForDichVuKhac();
                        this.setGiaBHYT();
                        //this.refreshGrid();
                        this.removeThemDichVuValue();
                        this.removeThemGoiValue();
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
            this.apiService.post<ChiDinhDichVuGridVo>(urlDefault, this.themChiDinhDichVuModel).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        resultData.LoaiDichVuKhac = loaiDichVuKhac;
                        this.tiepNhanBenhNhan.YeuCauKhacGrid.push(resultData);
                        this.setDataForDichVuKhac();
                        this.setGiaBHYT();
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

    public aggregatesKhamBenh: any[] = [{ field: 'ThanhTien', aggregate: 'sum' }
        , { field: 'BHYTThanhToan', aggregate: 'sum' }, { field: 'SoTienMG', aggregate: 'sum' }
        , { field: 'BnThanhToan', aggregate: 'sum' }];

    public stateKhamBenh: State = {
        skip: 0,
        take: 200,
        group: [{ field: 'Nhom', aggregates: this.aggregatesKhamBenh }]
    };


    public totalKhamBenh(field: any) {
        switch (field) {
            case 'ThanhTien':
                return this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'BHYTThanhToan':
                return this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.reduce((sum, item) => sum + item.BHYTThanhToan, 0);
            case 'SoTienMG':
                return this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.reduce((sum, item) => sum + item.SoTienMG, 0);
            case 'BnThanhToan':
                return this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.reduce((sum, item) => sum + item.BnThanhToan, 0);
        }
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
                    .reduce((sum, item) => (sum + (item.GoiCoChietKhauId != null ? item.ThanhTienSauChietKhau : item.ThanhTien)), 0); //sum + item.ThanhTien, 0);
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



    public aggregatesKyThuat: any[] = [{ field: 'ThanhTien', aggregate: 'sum' }
        , { field: 'SoTienMG', aggregate: 'sum' }
        , { field: 'BnThanhToan', aggregate: 'sum' }];

    public stateKyThuat: State = {
        skip: 0,
        take: 200,
        group: [{ field: 'Nhom', aggregates: this.aggregatesKyThuat }]
    };

    public totalKyThuat(field: any) {
        switch (field) {
            case 'ThanhTien':
                return this.tiepNhanBenhNhan.YeuCauKyThuatGrid.reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'SoTienMG':
                return this.tiepNhanBenhNhan.YeuCauKyThuatGrid.reduce((sum, item) => sum + item.SoTienMG, 0);
            case 'BnThanhToan':
                return this.tiepNhanBenhNhan.YeuCauKyThuatGrid.reduce((sum, item) => sum + item.BnThanhToan, 0);
        }
    };

    setDataForDichVuKyThuat() {
        this.gridDataKyThuatDisplay = {
            data: this.tiepNhanBenhNhan.YeuCauKyThuatGrid,
            total: this.tiepNhanBenhNhan.YeuCauKyThuatGrid.length
        };
    }

    setDataForDichVuKhamBenh() {
        this.gridDataKhamBenhDisplay = {
            data: this.tiepNhanBenhNhan.YeuCauKhamBenhGrid,
            total: this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.length
        };
    }

    setDataForDichVuKhac() {
        if(this.tiepNhanBenhNhan.YeuCauKhacGrid != null)
        {
            if(this.tiepNhanBenhNhan.YeuCauKhacGrid.length == 0)
            {
                this.showbuttonLuuVaInPhieuXetNghiem = false;
            }else{
                if(this.showbuttonLuuVaInPhieuXetNghiem == false)
                {
                    this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(element => {
                        this.showbuttonLuuVaInPhieuXetNghiem = this.dichVuSarsCoVs.includes(element.MaDichVuId);
                    });
                }
               
            }
        }
        
        this.gridDataKhacCoChietKhauArray = [];
        this.gridDataKhacDisplay = {
            data: this.tiepNhanBenhNhan.YeuCauKhacGrid,
            //.filter(obj => obj.IsGoiCoChietKhau == false || obj.IsGoiCoChietKhau == null),
            total: this.tiepNhanBenhNhan.YeuCauKhacGrid,
            //.filter(obj => obj.IsGoiCoChietKhau == false || obj.IsGoiCoChietKhau == null).length
        };
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

        //console.log("setDataForDichVuKhac = ", this.gridDataKhacCoChietKhauArray);
        this.setSoLuongChoGridKhac();
    }

    setSoLuongChoGridKhac() {
        this.soLuongGoiCoChietKhau = this.gridDataKhacCoChietKhauArray.length - 1;
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


    SoLuongChange($event: number) {
        if (this.themChiDinhDichVuModel.DonGia != undefined && this.themChiDinhDichVuModel.DonGia != null
            && $event != undefined && $event != null) {
            this.themChiDinhDichVuModel.ThanhTien = this.themChiDinhDichVuModel.DonGia * $event;
        }
        else {
            this.themChiDinhDichVuModel.ThanhTien = null;
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


    // MaDichVuKyThuatChange($event: number) {
    //     let model = new GetDonGiaVo();
    //     if ($event != undefined && $event != null) {
    //         this.validationErrors = null;

    //         //console.log($event);
    //         model.DichVuKhamBenhBenhVienId = $event;
    //         //model.NhomGiaDichVuKhamBenhBenhVienId = this.themChiDinhDichVuModel.LoaiGiaId;
    //         this.apiService.post<any>("TiepNhanBenhNhan/GetDonGiaKyThuat", model).subscribe(
    //             resultData => {
    //                 if (resultData != undefined && resultData != null) {
    //                     this.themChiDinhDichVuKyThuatModel.DonGia = resultData;
    //                     this.setThanhTienForDichVuKyThuatModel();
    //                 }
    //                 else {
    //                     this.themChiDinhDichVuKyThuatModel.DonGia = null;
    //                     this.setThanhTienForDichVuKyThuatModel();
    //                 }
    //             },
    //             (err: any) => {
    //             });
    //     }
    //     else {
    //         this.themChiDinhDichVuKyThuatModel.DonGia = null;
    //     }


    // }

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

    modelChangeDichVu($event) {
        //console.log("modelChangeDichVu = ", $event);
        // if(this.maDichVuDisabled && $event != null && $event != undefined){
        //     this.maDichVuDisabled = false;
        // }
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

    MaDichVuSelectionChange($event) {
        //console.log("MaDichVuSelectionChange = ", $event);
        //let self = this;
        this.themChiDinhDichVuModel.NoiThucHienId = null;
        this.themChiDinhDichVuModel.SoLuong = 1;
        if ($event != undefined && $event != null) {
            //this.maDichVuPrev = $event.KeyId;
            //this.countCheck++;
            //console.log("MaDichVuSelectionChange = ", $event);
            if ($event.Loai == "DVKT") {
                this.MaDichVuChange($event.KeyId, 4, true);
                this.loaiTiepNhan = 2;
                // setTimeout(() => {
                //     console.log("self.comboboxNoiThucHien2 = ", self.comboboxNoiThucHien2);
                //     self.comboboxNoiThucHien2.getDataForLookup();
                //   }, 500);
            }
            else if ($event.Loai == "DV Giường") {
                this.MaDichVuChange($event.KeyId, 5);
                this.loaiTiepNhan = 3;
            }
            else {
                this.MaDichVuChange($event.KeyId);
                this.loaiTiepNhan = 1;
                //this.comboboxNoiThucHien1.getDataForLookup();
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
        //this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
        this.cdRef.detectChanges();
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
            this.themChiDinhDichVuModel.LoaiGiaId = null;
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

    huyBHTN() {
        this.isUpdateGrid = false;
        this.clearThemBHTN();
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

    enableUpdateGird(id: number) {
        this.isUpdateGrid = true;
        this.isIdNeedUpdate = id;
    }

    disableUpdateGrid() {
        this.isUpdateGrid = false;
        this.isIdNeedUpdate = null;
        this.clearThemBHTN();
    }

    clearThemBHTN() {
        this.themBaoHiemTuNhanModel = new ThemBaoHiemTuNhan();
    }

    removeGridBHTN(id: number) {

        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result == 'Yes') {
                let index = this.lstBHTN.find(obj => obj.CongTyBaoHiemTuNhanId == id);
                this.lstBHTN.splice(this.lstBHTN.indexOf(index), 1)
                this.gridDataSourceBHTN = {
                    data: this.lstBHTN,
                    total: this.lstBHTN.length
                }
                this.updateBHTN();
            }
        });
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

    updateGridBHTN(dataItem: ThemBaoHiemTuNhanGridVo) {
        this.isUpdateGrid = true;

        //set
        this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId = dataItem.CongTyBaoHiemTuNhanId;
        this.themBaoHiemTuNhanModel.DiaChi = dataItem.DiaChi;
        this.themBaoHiemTuNhanModel.MaSoThe = dataItem.MaSoThe;
        this.themBaoHiemTuNhanModel.NgayHetHan = dataItem.NgayHetHan;
        this.themBaoHiemTuNhanModel.NgayHieuLuc = dataItem.NgayHieuLuc;
        this.themBaoHiemTuNhanModel.SoDienThoai = dataItem.SoDienThoai;
        //this.themBaoHiemTuNhanModel.STT = dataItem.STT;
        this.enableUpdateGird(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
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

    removeGridKhamBenh(dataItem) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result == 'Yes') {
                //console.log("removeGridKhamBenh = ", dataItem);
                this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.splice(this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.indexOf(dataItem), 1);
                this.setDataForDichVuKhamBenh();
                this.setGiaBHYT();
                this.refreshGrid();
            }
        });
    }

    removeGridKyThuat(dataItem) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result == 'Yes') {
                //console.log("removeGridKhamBenh = ", dataItem);
                this.tiepNhanBenhNhan.YeuCauKyThuatGrid.splice(this.tiepNhanBenhNhan.YeuCauKyThuatGrid.indexOf(dataItem), 1);
                this.setDataForDichVuKyThuat();
                this.refreshGrid();
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

                //this.tiepNhanBenhNhan.YeuCauKhacGrid.splice(this.tiepNhanBenhNhan.YeuCauKhacGrid.indexOf(dataItem), 1);
                this.tiepNhanBenhNhan.YeuCauKhacGrid = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(obj =>
                    obj != dataItem);

                this.setDataForDichVuKhac();
                this.setGiaBHYT();
                this.refreshGrid();
                //console.log("removeGridKhac = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
                //this.cdRef.detectChanges();
                this.removeDanhSachTongCongFromDanhSachDaChon(dataItem);

                this.notificationService.showSuccess(TiepNhanBenhNhanMessage.MessageRemoveDichVuSuccessfully);
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

                let goiCoChietKhauId = item.data[0].items[0].GoiCoChietKhauId;
                //console.log("removeGridKhacCoChietKhau1 = ", goiCoChietKhauId);


                this.tiepNhanBenhNhan.YeuCauKhacGrid = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(obj => obj.GoiCoChietKhauId != goiCoChietKhauId);


                // let index = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(obj => obj.GoiCoChietKhauId == goiCoChietKhauId);
                // index.forEach(obj => {
                //   this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.GoiCoChietKhauId == goiCoChietKhauId)
                //         .splice(this.tiepNhanBenhNhan.YeuCauKhacGrid.indexOf(obj), 1);
                // });




                //console.log("removeGridKhacCoChietKhau = ", index);

                this.setDataForDichVuKhac();

                this.refreshGrid();
            }
        });
    }

    // noiThucHienGridChange($event, dataItem) {
    //     //console.log("noiThucHienGridChange = ", $event, dataItem);
    // }

    coBHYTChange($event) {
        //console.log("coBHYTChange = ", $event);
        // if ($event == true && this.tiepNhanBenhNhan.LyDoVaoVien == 1) {
        //     this.themChiDinhDichVuModel.DuocHuongBHYT = true;
        //     this.themChiDinhDichVuModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        // }
        // else {
        //     this.themChiDinhDichVuModel.DuocHuongBHYT = false;
        //     this.themChiDinhDichVuModel.BHYTMucHuong = null;
        //     this.removeBHYTForGridChiDinhDichVu();
        // }
        if ($event != true) {
            this.tiepNhanBenhNhan.TuNhap = false;
            this.HoVaTenTextbox.focus();
            this.tiepNhanBenhNhan.LyDoVaoVien = null;
        }
        else
        {
            this.tiepNhanBenhNhan.LyDoVaoVien = 1;
        }

        this.xuLyKiemTraBenhNhanDuDieuKienTaoMoiYCTN($event);
        this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
    }

    tuNhapChange($event) {
        if ($event == true) {
            this.tiepNhanBenhNhan.CoBHYT = true;
            this.tiepNhanBenhNhan.IsCheckedBHYT = null;
            this.tiepNhanBenhNhan.LyDoVaoVien = 1;
        }
        if ($event == false) {
            this.tiepNhanBenhNhan.CoBHYT = false;
            this.coBHYTChange(false);
            this.tiepNhanBenhNhan.LyDoVaoVien = null;
        }
    }

    mucHuongChange($event) {
        this.tiepNhanBenhNhan.BHYTMucHuong = $event;
        this.setGiaBHYT();
    }

    blurNgayHetHieuLuc($event) {
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
    }
    onKeyNgayHetHieuLuc($event) {
        if ($event.keyCode === 13) {
            this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
        }
    }

    onKeyNgayCotHieuLuc($event) {
        if ($event.keyCode === 13) {
            this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
        }
    }

    blurNgayCoHieuLuc($event) {
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
    }

    blurBHYTDiaChi($event) {
        this.setDiaChiBHYTForModel(this.tiepNhanBenhNhan.BHYTDiaChi);
    }
    onKeyBHYTDiaChi($event) {
        if ($event.keyCode === 13) {
            this.setDiaChiBHYTForModel(this.tiepNhanBenhNhan.BHYTDiaChi);
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

    lyDoVaoVienChange($event) {
        //console.log("tuyenChuyenChange = ", $event);
        // if ($event == 1 && this.tiepNhanBenhNhan.CoBHYT == true) {
        //     this.themChiDinhDichVuModel.DuocHuongBHYT = true;
        //     this.themChiDinhDichVuModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        //     this.addBHYTForGridChiDinhDichVu();
        // }
        // else {
        //     this.themChiDinhDichVuModel.DuocHuongBHYT = false;
        //     this.themChiDinhDichVuModel.BHYTMucHuong = null;
        //     this.removeBHYTForGridChiDinhDichVu();
        // }
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, $event);
    }

    onTabSelect($event) {
        this.removeThemDichVuValue();
        this.removeThemGoiValue();
        //console.log("onTabSelect = ", $event);
        if ($event != null && $event.index == 2 && this.under6yearsold) {
            this.cloneDiaChiNguoiGiamHo();
        }
        if(this.under6yearsold == false)
        {
            this.cloneDiaChiNguoiGiamLonHon6Tuoi();
        }
    }

    lichSuKBC() {
        let dialogRef = this.dialog.open(TiepNhanBenhNhanPopupLichSuKcbComponent, {
            disableClose: false,
            width: '1000px',
            height: '409px',
            data: this.lichSuKCB,
        });
        dialogRef.afterClosed().subscribe(result => {

        });
    }

    lichSuKiemTraTheBHYT() {
        let dialogRef = this.dialog.open(TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent, {
            disableClose: false,
            width: '1200px',
            height: '500px',
            data: this.lichSuKiemTraTheBHYTGrid,
        });
        dialogRef.afterClosed().subscribe(result => {

        });
    }

    duocHuongBHYTChange($event, maDichVuId, nhom) {

        let item = this.tiepNhanBenhNhan.YeuCauKhacGrid
            .filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
            .find(obj => obj.MaDichVuId == maDichVuId && obj.Nhom == nhom);
        //console.log("duocHuongBHYTChange = ", maDichVuId, nhom, $event, item);
        item.DuocHuongBHYT = $event;
        if ($event) {
            item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100;
            item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
            item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
        }
        else {
            item.BHYTThanhToan = 0;
            item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
            item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
        }
        this.setGiaBHYT();

        //this.setDataForDichVuKhac();
        //this.refreshGrid();
    }

    setThongTinTaiKhoanBenhNhan(id: number) {
        this.apiService.post<any>("TiepNhanBenhNhan/GetThongTinTaiKhoanBenhNhan?idbenhNhan=" + id).subscribe(
            resultData => {
                this.thongTinTaiKhoanBenhNhan = resultData;

            },
            () => {
                //return null;
                //console.log("error")
            });
    }

    timKiemBenhNhanPopup() {
        let dataTimKiem = new DataTimKiem();
        dataTimKiem.searchBenhNhan = new TimKiemBenhNhanGridVo();
        dataTimKiem.searchBenhNhan = this.modelTimKiemBenhNhan;
        dataTimKiem.data = new Array<TimKiemBenhNhanGridVo>();
        dataTimKiem.data = this.lstBenhNhan;
        let dialogRef = this.dialog.open(PopupTimKiemBenhNhanComponent, {
            disableClose: false,
            width: '1400px',
            height: '600px',
            data: dataTimKiem,
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result != null && result != undefined) {
                // console.log("data:", result)
                this.benhNhanIdPopup = result.Id;
                this.coYeuCauGoiDichVu = result.CoYeuCauGoiDichVu;
                //this.checkTNBNToDay(result.BHYTMaSoThe, result.Id);
                this.checkTNBNToDay(result.BHYTMaSoThe, result.Id, true);
                this.validationErrors = null;
                //this.setThongTinTaiKhoanBenhNhan(result.Id);
                //console.log("timKiemBenhNhanPopup = ", result);
                //this.cdRef.detectChanges();
                //set bhtn
                if (result.BaoHiemTuNhans.length > 0) {
                    this.lstBHTN = new Array<ThemBaoHiemTuNhanGridVo>();
                    result.BaoHiemTuNhans.forEach(item => {
                        let model = new ThemBaoHiemTuNhanGridVo();
                        model.CongTyBaoHiemTuNhanId = item.BHTNCongTyBaoHiemId;
                        model.CongTyDisplay = item.CongTyDisplay;
                        model.DiaChi = item.BHTNDiaChi;
                        model.MaSoThe = item.BHTNMaSoThe;
                        model.NgayHetHan = item.BHTNNgayHetHan;
                        let dateNgayHetHan = new Date(model.NgayHetHan);
                        model.NgayHetHanDisplay = CommonService.formatDate(dateNgayHetHan, "dd/mm/yyyy");
                        model.NgayHieuLuc = item.BHTNNgayHieuLuc;
                        let dateNgayHieuLuc = new Date(model.NgayHieuLuc);
                        model.NgayHieuLucDisplay = CommonService.formatDate(dateNgayHieuLuc, "dd/mm/yyyy");
                        model.SoDienThoai = item.BHTNSoDienThoai;
                        this.lstBHTN.push(model);
                    });
                    this.setValueForGridBHTN();
                }


                //set benh nhan
                this.tiepNhanBenhNhan.BenhNhanId = result.Id;
                this.benhNhanId = result.Id;

                //người giám hộ
                this.tiepNhanBenhNhan.NguoiLienHeHoTen = result.NguoiLienHeHoTen;
                this.tiepNhanBenhNhan.NguoiLienHeQuanHeNhanThanId = result.NguoiLienHeQuanHeNhanThanId;
                this.tiepNhanBenhNhan.NguoiLienHeSoDienThoai = result.NguoiLienHeSoDienThoai;
                this.tiepNhanBenhNhan.NguoiLienHeEmail = result.NguoiLienHeEmail;
                this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = result.NguoiLienHeTinhThanhId;
                this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = result.NguoiLienHeQuanHuyenId;
                this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = result.NguoiLienHePhuongXaId;
                this.tiepNhanBenhNhan.NguoiLienHeDiaChi = result.NguoiLienHeDiaChi;

                //Nơi giới thiệu , hiển thị nơi giới thiệu              
                this.tiepNhanBenhNhan.HinhThucDenId = result.HinhThucDenId;
                this.tiepNhanBenhNhan.NoiGioiThieuId = result.NoiGioiThieuId;

                //Do quận huyện nó không bind do cơ chế chạy trước sau nên ta set lại cho comboxQuanHuyen này
                //this.bindComboboxQuanHuyen(result)

                this.getDanhSachGoiBenhNhan(this.benhNhanId);

                this.setValueFromBenhNhanToYeuCauTiepNhan(result);

                this.timKiemBenhNhan(this.modelTimKiemBenhNhan);

                this.xuLyKiemTraBenhNhanDuDieuKienTaoMoiYCTN();
            }
        });
    }

    checkTNBNToDay(maThe: string, id: number = 0, khongDongPopup: boolean = false) {
        // Hàm này lúc dev cũ viết nhằm mục đích là tự động chuyển sang trang cập nhật YCTN nếu API trả về id YCTN, 
        // Nhưng theo logic mới thì đã bỏ tự động chuyển trang, nếu muốn chuyển sang cập nhật YCTN phải chọn button ở góc dưới cùng bên trái

        // var idOld = this.route.snapshot.params.id;
        // if (idOld == null || idOld <= 0) {
        //     this.apiService.post<any>("TiepNhanBenhNhan/GetYeuCauTiepNhanOfBenhNhan?maSoBHYT=" + maThe + "&id=" + id).subscribe(
        //         resultData => {
        //             if (resultData != null) {
        //                 if(!khongDongPopup)
        //                 {
        //                     this.dialog.closeAll();
        //                 }

        //                 // cập nhật điều kiện tạo mới yctn
        //                 //this.router.navigate(['danh-sach-tiep-nhan/chinh-sua/' + resultData]);
        //                 // chuyển về xử lý chung ở function kiểm tra lỗi tạo mới YCTN
        //                 //this.urlPageUpdateYCTN = 'danh-sach-tiep-nhan/chinh-sua/' + resultData;
        //             }
        //             else
        //             {
        //                 // cập nhật điều kiện tạo mới yctn
        //                 //this.urlPageUpdateYCTN = null;
        //             }
        //         },
        //         () => {
        //             //return null;
        //             //console.log("error")
        //         });
        // }


    }

    setValueFromBenhNhanToYeuCauTiepNhan(benhNhan: BenhNhanTiepNhanBenhNhanViewModel) {
        this.tiepNhanBenhNhan.BHYTMaDKBD = benhNhan.BHYTMaDKBD;
        this.tiepNhanBenhNhan.BHYTDiaChi = benhNhan.BHYTMaDKBD;
        this.tiepNhanBenhNhan.BHYTMaSoThe = benhNhan.BHYTMaSoThe;
        this.tiepNhanBenhNhan.BHYTNgayDu5Nam = benhNhan.BHYTNgayDu5Nam;
        this.tiepNhanBenhNhan.BHYTDuocMienCungChiTra = benhNhan.BHYTDuocMienCungChiTra;
        this.tiepNhanBenhNhan.BHYTNgayHieuLuc = benhNhan.BHYTNgayHieuLuc;
        this.tiepNhanBenhNhan.BHYTNgayHetHan = benhNhan.BHYTNgayHetHan;
        this.tiepNhanBenhNhan.BHYTCoQuanBHXH = benhNhan.BHYTCoQuanBHXH;
        this.tiepNhanBenhNhan.CoBHTN = benhNhan.CoBHTN;
        this.tiepNhanBenhNhan.CoBHYT = benhNhan.CoBHYT;
        if(this.tiepNhanBenhNhan.CoBHYT == true)
        {
            this.tiepNhanBenhNhan.LyDoVaoVien = 1;
        }
        else
        {
            this.tiepNhanBenhNhan.LyDoVaoVien = null;
        }
        this.tiepNhanBenhNhan.NgaySinh = benhNhan.NgaySinh;
        this.tiepNhanBenhNhan.NamSinh = benhNhan.NamSinh;
        this.tiepNhanBenhNhan.ThangSinh = benhNhan.ThangSinh;

        this.tiepNhanBenhNhan.NgayThangNamSinh = benhNhan.NgayThangNamSinh;
        this.tiepNhanBenhNhan.HoTen = benhNhan.HoTen;

        this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);

        this.tiepNhanBenhNhan.TinhThanhId = 0;
        var self=this;
        setTimeout(function () {
            self.tiepNhanBenhNhan.TinhThanhId = benhNhan.TinhThanhId;
            self.tiepNhanBenhNhan.QuanHuyenId = benhNhan.QuanHuyenId;
            self.tiepNhanBenhNhan.PhuongXaId = benhNhan.PhuongXaId;        
        },1000);        

        this.tiepNhanBenhNhan.QuocTichId = benhNhan.QuocTichId;
        //this.tiepNhanBenhNhan.DanTocId = benhNhan.DanTocId;
        this.tiepNhanBenhNhan.DiaChi = benhNhan.DiaChi;
        this.tiepNhanBenhNhan.SoDienThoai = benhNhan.SoDienThoai;
        this.tiepNhanBenhNhan.SoChungMinhThu = benhNhan.SoChungMinhThu;
        this.tiepNhanBenhNhan.Email = benhNhan.Email;
        this.tiepNhanBenhNhan.NgheNghiepId = benhNhan.NgheNghiepId;
        this.tiepNhanBenhNhan.GioiTinh = benhNhan.GioiTinh;
        //this.tiepNhanBenhNhan.BHYTMaKhuVuc = benhNhan.BHYTMaKhuVuc;
        this.tiepNhanBenhNhan.BHYTNgayDuocMienCungChiTra = benhNhan.BHYTNgayDuocMienCungChiTra;
        this.tiepNhanBenhNhan.NoiLamViec = benhNhan.NoiLamViec;

        //BHYT information
        // this.tiepNhanBenhNhan.NgayThangNamSinhDisplay = benhNhan.NgayThangNamSinhDisplay;
        // this.tiepNhanBenhNhan.NgayDu5NamDisplay = benhNhan.BHYTNgayDu5NamDisplay;
        // this.apiService.post<string>("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + benhNhan.BHYTMaDKBD).subscribe(
        //     resultData => {
        //         this.tiepNhanBenhNhan.NoiDangKyBHYT = resultData;

        //     },
        //     () => {
        //         //return null;
        //         //console.log("error")
        //     });

        if (benhNhan.CoBHYT != true) return;

        //if (this.isCheckedBHYT == true) return;
        this.isCheckedBHYT = true;

        this.thongTinBenhNhan.MaThe = this.tiepNhanBenhNhan.BHYTMaSoThe;
        this.thongTinBenhNhan.TenBenhNhan = this.tiepNhanBenhNhan.HoTen;
        this.thongTinBenhNhan.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
        this.thongTinBenhNhan.NamSinh = this.tiepNhanBenhNhan.NamSinh;

        var datePipe = new DatePipe("en-US");
        this.thongTinBenhNhan.NgaySinhDisplay = datePipe.transform(this.tiepNhanBenhNhan.NgayThangNamSinh, 'dd/MM/yyyy');

        if (this.thongTinBenhNhan.MaThe != null && this.thongTinBenhNhan.TenBenhNhan != null
            && (this.thongTinBenhNhan.NgaySinh != null || this.thongTinBenhNhan.NamSinh != null)) {


            //console.log("thongTinBenhNhan = ", this.thongTinBenhNhan);
            let dialogRef = this.dialog.open(TiepNhanBenhNhanChoQuetComponent, {
                disableClose: true,
                width: '500px',
                height: '250px',
                data: this.thongTinBenhNhan,
            });
            dialogRef.afterClosed().subscribe(result => {
                //console.log("close = ", result);
                if (result === undefined) {
                    //cheat vi khong hieu sao ra duoc
                }

                // else if (result == null || (result != null && result.maKetQua == "050")) {
                else if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
                    //this.clearData();
                    //this.notificationService.showError(TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan);

                    //
                    this.tiepNhanBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
                    let dialogRef = this.dialog.open(TiepNhanBenhNhanErrorComponent, {
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

        /////////////
    }

    onSelectChangeVoucher(voucherId: any) {
        var last = voucherId[voucherId.length - 1];
        if (last == undefined)
            this.loaiVoucher = 0;

        this.apiService.post<any>("ThuNgan/GetMaVoucher?loaiVoucher=" + this.loaiVoucher).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.voucherLookupItemVo = resultData;
                this.voucherLookupItemVo.forEach(element => {
                    if (element.KeyId == last) {
                        this.loaiVoucher = element.LoaiVoucher;
                    }
                });
            }
        });
    }

    getDanhSachGoiBenhNhan(benhNhanId: number) {
        this.apiService.post<any>("TiepNhanBenhNhan/GetMarketingForBenhNhan?benhNhanId=" + benhNhanId).subscribe(resultData => {
            this.danhSachGoiDaChonTrongYCTN = resultData;
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

    removeGoi(item) {
        //console.log("removeGoi = ", item, this.tiepNhanBenhNhan.YeuCauKhacGrid);

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
                this.removeGoiOnDichVu(item);
            }
            else {
                this.removeDichVuGoi(item);
            }
        });

        this.removeGoiDaChon(item.ChuongTrinhGoiDichVuId);

    }


    removeGoiDaChon(id) {
        this.danhSachGoiDaChonTrongYCTN = this.danhSachGoiDaChonTrongYCTN.filter(o => o.ChuongTrinhGoiDichVuId != id);
        this.danhSachDichVuDaChonTrongLanPopup = this.danhSachDichVuDaChonTrongLanPopup.filter(o => o.ChuongTrinhGoiDichVuId != id);
    }

    removeDichVuGoi(item) {
        console.log("removeDichVuGoi = ", item, this.tiepNhanBenhNhan.YeuCauKhacGrid);

        this.tiepNhanBenhNhan.YeuCauKhacGrid = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.GoiCoChietKhauId != item.ChuongTrinhGoiDichVuId);
        this.setDataForDichVuKhac();
        this.refreshGrid();
    }
    removeGoiOnDichVu(item) {
        // this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(o => {
        //     if(item.ChuongTrinhGoiDichVuId == o.GoiCoChietKhauId){
        //         o.
        //     }
        // });
        for (let i = 0; i < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; i++) {
            let object = this.tiepNhanBenhNhan.YeuCauKhacGrid[i];
            if (item.ChuongTrinhGoiDichVuId == object.GoiCoChietKhauId) {
                object.GoiCoChietKhauId = null;
                object.IsGoiCoChietKhau = false;
            }
        }

        this.setDataForDichVuKhac();
        this.refreshGrid();
    }

    openPopupGoiDichVu(danhSachGoiDaChon: DanhSachGoiChon = null) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {

            self.dialog.open(PopupMarketingTiepNhanBenhNhanComponent, {
                disableClose: false,
                width: '1800px',
                data: {
                    data: this.danhSachGoiDaChonTrongYCTN, benhNhanId: this.tiepNhanBenhNhan.BenhNhanId
                    , danhSachDichVuGoiDaChon: this.danhSachDichVuDaChonTrongLanPopup, itemPopup: danhSachGoiDaChon
                    , danhSachDichVuDangCo: this.tiepNhanBenhNhan.YeuCauKhacGrid
                }
            }).afterClosed().subscribe(result => {
                //console.log('openPopupGoiDichVu', result);

                if (result != undefined && result.length > 0) {
                    this.danhSachDichVuGoiDaChon = new Array<ThemChiDinhDichVu>();
                    result.forEach(e => {
                        let item = new ThemChiDinhDichVu();
                        item.LaGoi = true;
                        item.TenNhomDichVu = e.TenNhomDichVu;
                        item.MaDichVuId = e.DichVuId;
                        item.SoLuong = e.SoLuongDungLanNay;
                        item.chuongTrinhGoiDichVuId = e.ChuongTrinhGoiDichVuId;
                        item.YeuCauGoiDichVuId = e.YeuCauGoiDichVuId;
                        //cheat cho lẹ
                        item.DuocHuongBHYT = this.themChiDinhDichVuModel.DuocHuongBHYT;

                        this.danhSachDichVuGoiDaChon.push(item);
                    });
                    this.themChiDinhDichVuKhacKhamBenh(6, this.danhSachDichVuGoiDaChon);
                    this.copyDanhSachTongCong(result);
                    this.updateDanhSachGoiChon(result);
                }

                if (result == undefined && this.disabledCheckboxMarketing != true && this.danhSachDichVuDaChonTrongLanPopup.length == 0) {
                    this.suDungGoiMarketingModelTemp = false;
                }

                // if(yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "")
                // {

                // }
            });
        }
        else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
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

    removeDanhSachTongCongFromDanhSachDaChon(data) {
        //console.log("removeDanhSachTongCongFromDanhSachDaChon = ", data, this.danhSachDichVuDaChonTrongLanPopup);
        if (data.IsGoiCoChietKhau) {
            let item = this.danhSachDichVuDaChonTrongLanPopup.filter(e => e.YeuCauGoiDichVuId == data.GoiCoChietKhauIdTemp && e.DichVuId == data.MaDichVuId)[0];
            // this.danhSachDichVuDaChonTrongLanPopup 
            // = this.danhSachDichVuDaChonTrongLanPopup.filter(e => e.ChuongTrinhGoiDichVuId != data.GoiCoChietKhauId && e.DichVuId != data.MaDichVuId);
            this.danhSachDichVuDaChonTrongLanPopup
                = this.danhSachDichVuDaChonTrongLanPopup.filter(e => e != item);

            //console.log("Co chiet khau, ", this.danhSachDichVuDaChonTrongLanPopup);
        }
        //let item = this.danhSachDichVuDaChonTrongLanPopup.filter(e => e.TenChuongTrinh == o.ThuocGoi);
    }

    copyDanhSachTongCong(data: Array<DanhSachDichVuChonTrongLanPopup>) {
        data.forEach(o => {
            // let item = this.danhSachDichVuDaChonTrongLanPopup.filter(e => e == data);

            // if(item == undefined || item.length == 0){
            //     this.danhSachDichVuDaChonTrongLanPopup.push(data);
            // }
            //code tiep
            this.danhSachDichVuDaChonTrongLanPopup.push(o);
        })
    }

    updateDanhSachGoiChon(data: Array<DanhSachDichVuChonTrongLanPopup>) {
        console.log("updateDanhSachGoiChon = ", data);
        data.forEach(o => {
            let item = this.danhSachGoiDaChonTrongYCTN.filter(e => e.TenChuongTrinh == o.ThuocGoi);

            if (item == undefined || item.length == 0) {
                let itemAdd = new DanhSachGoiChon();
                itemAdd.BenhNhanId = this.tiepNhanBenhNhan.BenhNhanId;
                itemAdd.ChuongTrinhGoiDichVuId = o.ChuongTrinhGoiDichVuId;
                itemAdd.IsFromMarketing = o.IsFromMarketing;
                itemAdd.TenChuongTrinh = o.ThuocGoi;
                itemAdd.YeuCauGoiDichVuId = o.YeuCauGoiDichVuId;
                itemAdd.DaThanhToan = o.DaThanhToan;
                itemAdd.TenGoiDichVu = o.TenGoi;
                this.danhSachGoiDaChonTrongYCTN.push(itemAdd);
            }
        })
    }

    onOpenChange() {
        this.voucherList.getDataForLookup();
    }

    soNhaDuongPhoChange(model) {
        this.tiepNhanBenhNhan.DiaChi = model;

        if (this.under6yearsold) {
            this.cloneDiaChiNguoiGiamHo();
        }
        if(this.under6yearsold == false)
        {
            this.cloneDiaChiNguoiGiamLonHon6Tuoi();
        }
        //console.log("change = ", model, model != null && model != undefined, model != "");
        //console.log("soNhaDuongPhoChange123 = ", model);
        // if(model != null && model != undefined && model != ""){
        //     let arrayDiaChi = model.split(" ");
        //     let resultString = "";
        //     //console.log("soNhaDuongPhoChange = ", arrayDiaChi);
        //     
        //     arrayDiaChi.forEach(e => {
        //         if(e != undefined && e != null && e != ""){
        //             if(resultString == ""){
        //                 resultString = e[0].toUpperCase() + e.slice(1);
        //             }
        //             else{
        //                 resultString = resultString + " " +  e[0].toUpperCase() + e.slice(1);
        //             }
        //         }
        //         else if(e == ""){
        //             resultString = resultString + " ";
        //         }
        //     });
        //     this.tiepNhanBenhNhan.DiaChi = resultString;
        //     //this.tiepNhanBenhNhan.DiaChi = model[0].toUpperCase() + model.slice(1);
        // }
    }
    // noiThucHienChange($event){
    //     if($event != null && $event != undefined && $event.length > 0)
    //     {
    //         this.themChiDinhDichVuModel.NoiThucHienId = $event[0].KeyId;
    //     }
    // }

    // noiThucHienGridChange($event, dataItem) {

    //     // let model = this.tiepNhanBenhNhan.YeuCauKhacGrid.find(obj => obj == dataItem);
    //     // ;
    //     // console.log("noiThucHienGridChange = ", $event, dataItem, model);
    //     // if ($event != null && $event != undefined && $event.length > 0) {
    //     //     //this.themChiDinhDichVuModel.NoiThucHienId = $event[0].KeyId;
    //     //     if (model != undefined  && model.NoiThucHienId === null) {
    //     //         model.NoiThucHienId = $event[0].KeyId;
    //     //     }
    //     // }
    //     // else {
    //     //     if (model != undefined && model.NoiThucHienId === null) {
    //     //         model.NoiThucHienId = $event[0].KeyId;
    //     //     }
    //     //     //this.themChiDinhDichVuModel.NoiThucHienId = null;
    //     // }
    // }

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

        // this.soTuoiDisplay = dateNow.getFullYear() - event + " Tuổi " + 0 + " Tháng " + 0 + " Ngày ";
        if(this.under6yearsold == true)
        {
            this.cloneDiaChiNguoiGiamHo();
        }
        if(this.under6yearsold == false)
        {
            this.cloneDiaChiNguoiGiamLonHon6Tuoi();
        }
       
    }

    getAge(date_1, date_2) {

        if((date_1 == undefined || date_1 == null) && this.tiepNhanBenhNhan.NamSinh != undefined && this.tiepNhanBenhNhan.NamSinh != null && this.tiepNhanBenhNhan.NamSinh != 0)
        {
            date_1 = new Date(this.tiepNhanBenhNhan.NamSinh, 1, 1);
        }
        date_1 = new Date(date_1);
        date_2 = new Date(date_2);

        //convert to UTC
        let date2_UTC = new Date(Date.UTC(date_2.getFullYear(), date_2.getMonth(), date_2.getDate()));
        let date1_UTC = new Date(Date.UTC(date_1.getFullYear(), date_1.getMonth(), date_1.getDate()));


        //console.log(date1_UTC, date2_UTC, date_1, date_2);
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
            this.cloneDiaChiNguoiGiamLonHon6Tuoi();
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

    tabscripChange(event) {
        //console.log("tabscripChange = ", event, event.path[0].id == "k-tabstrip-tab-0");
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

    cloneDiaChiNguoiGiamHo() {
        this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = this.tiepNhanBenhNhan.TinhThanhId;
        this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = this.tiepNhanBenhNhan.QuanHuyenId;
        this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = this.tiepNhanBenhNhan.PhuongXaId;
        this.tiepNhanBenhNhan.NguoiLienHeDiaChi = this.tiepNhanBenhNhan.DiaChi;
    }

    cloneDiaChiNguoiGiamLonHon6Tuoi() {
        this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = null;
        this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = null;
        this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
        this.tiepNhanBenhNhan.NguoiLienHeDiaChi = null;
    }


    ngayCoHieuLucChange($event) {
        //console.log("ngayCoHieuLucChange, event = ", $event, " , ngaycohieuluc = ", this.tiepNhanBenhNhan.BHYTNgayHieuLuc, this.tiepNhanBenhNhan.BHYTNgayHetHan);
        if ($event != null && $event != undefined) {
            //let dateFormat = new Date($event);
            //this.tiepNhanBenhNhan.BHYTNgayHetHan = new Date(dateFormat.getFullYear() + 1, dateFormat.getMonth(), dateFormat.getDate());

            //BVHD-3518: mặc định là ngà 31/12 của năm hiện tại
            let currentDate = new Date();
            this.tiepNhanBenhNhan.BHYTNgayHetHan = new Date(currentDate.getFullYear(), 11, 31);
        }

    }

    soLuongGridChange($event, dataItem) {
        let data = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o == dataItem);
        if ($event != null && $event != undefined && $event != 0) {
            data[0].SoLuong = $event;
            this.setGiaBHYT();
        }
        else {
            data[0].SoLuong = 0;
            this.setGiaBHYT();
        }

        this.updateSoLuongForDichVuGoi(data[0]);
    }

    updateSoLuongForDichVuGoi(data: ChiDinhDichVuGridVo) {
        //console.log("updateSoLuongForDichVuGoi = ", data, this.danhSachDichVuDaChonTrongLanPopup, this.tiepNhanBenhNhan.YeuCauKhacGrid);
        if (data.IsGoiCoChietKhau) {
            let item = this.danhSachDichVuDaChonTrongLanPopup.filter(o => o.DichVuId == data.MaDichVuId
                && o.ThuocGoi == data.TenGoiChietKhau);

            if (item != undefined && item.length > 0) {
                item[0].SoLuongDungLanNay = data.SoLuong;
            }
        }
    }

    loaiGiaGridChange($event, dataItem) {
        //console.log($event, dataItem);
        let data = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o == dataItem);
        if ($event != null && $event != undefined && dataItem != null && dataItem != undefined) {
            let url = "TiepNhanBenhNhan/GetDonGiaKyThuat";
            if (dataItem.Nhom == "DỊCH VỤ KỸ THUẬT") {
                url = "TiepNhanBenhNhan/GetDonGiaKyThuat";
            }
            else if (dataItem.Nhom == "DỊCH VỤ GIƯỜNG") {
                url = "TiepNhanBenhNhan/GetDonGiaGiuongBenh";
            }
            else {
                url = "TiepNhanBenhNhan/GetDonGia";
            }

            let model: any = {};
            model.NhomGiaDichVuKhamBenhBenhVienId = $event;
            model.DichVuKhamBenhBenhVienId = data[0].MaDichVuId;
            this.apiService.post<any>(url, model).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        //console.log("Gia = ", resultData);
                        if(url == "TiepNhanBenhNhan/GetDonGiaKyThuat")
                        {
                            data[0].DonGia = resultData.DonGia;
                        }
                        else
                        {
                            data[0].DonGia = resultData;
                        }
                        this.setGiaBHYT();
                    }
                    else {
                        //console.log("Gia = ", 0);
                        data[0].DonGia = 0;
                        this.setGiaBHYT();
                    }
                },
                (err: any) => {
                });
        }
        else {
            //console.log("Gia = ", 0);
            data[0].DonGia = 0;
            this.setGiaBHYT();
        }

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

    kiemTraThongTinMaVoucher(maVoucher: any) {
        this.listVoucherItem = [];
        this.apiService.post<any>("TiepNhanBenhNhan/KiemTraVoucherHopLe?maVoucher=" + maVoucher)
            .subscribe((resultData) => {
                if (resultData.Item1 === 0) {
                    this.notificationService.showError(resultData.Item2);
                    this.newBarcode = "";
                } else {

                    let kiemTraMaVoucher: boolean = false;
                    if (this.tiepNhanBenhNhan.LstMaVoucher.length > 0) {
                        this.tiepNhanBenhNhan.LstMaVoucher.forEach(element => {
                            var dataVoucher = element.split("|");
                            if (dataVoucher[1] === maVoucher) {
                                kiemTraMaVoucher = true;
                            }
                        });
                    }
                    if (!kiemTraMaVoucher) {
                        this.notificationService.showSuccess(resultData.Item2);
                        //neu voucher thành công
                        this.value.push(maVoucher);
                        this.tiepNhanBenhNhan.LstMaVoucher.push(resultData.Item1 + "|" + maVoucher);
                        this.listVoucherItem.push(resultData.Item1 + "|" + maVoucher);
                        this.newBarcode = "";
                    }

                }
            });
    }

    public open(): void {
        this.multiselect.toggle(false);
    }

    removeTag(ev: any) {
        let maVouchers = [];
        if (this.tiepNhanBenhNhan.LstMaVoucher.length > 0) {
            this.tiepNhanBenhNhan.LstMaVoucher.forEach(element => {
                var dataVoucher = element.split("|");
                if (dataVoucher[1] !== ev.dataItem) {
                    maVouchers.push(dataVoucher[0] + "|" + dataVoucher[1])
                }
            });
            this.listVoucherItem = maVouchers;
            this.tiepNhanBenhNhan.LstMaVoucher = maVouchers;
            this.newBarcode = "";
            //this.listVoucherItem = this.value;
        }
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

    cacDichVuKM() {
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
            let dichVuDangChons = [];
            this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(element => {
                if(element.YeuCauGoiDichVuKhuyenMaiId != null && element.YeuCauGoiDichVuKhuyenMaiId != 0)
                {
                    let dichVu = {
                        Id: 0, // mặc định khi chưa lưu vào DB
                        DichVuBenhVienId: element.MaDichVuId,
                        NhomGiaId: element.LoaiGiaId,
                        NhomId: element.NhomId, //EnumNhomGoiDichVu.DichVuKyThuat, // là nhóm dịch vụ kỹ thuật
                        YeuCauGoiDichVuId: element.YeuCauGoiDichVuKhuyenMaiId,
                        SoLuong: element.SoLuong
                    };
                    dichVuDangChons.push(dichVu);
                }
            });
            self.dialog.open(DichVuKhuyenMaiPopupComponent, {
                disableClose: false,
                width: '1800px',
                data: { DocumentType: self.documentType, BenhNhanId: self.benhNhanIdPopup, DichVuDangChons: dichVuDangChons}
            }).afterClosed().subscribe(yeuCauGoiMarketing => {
                if(yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "")
                {
                    let dateNow = new Date((new Date()).toDateString());
                    yeuCauGoiMarketing.YeuCauTiepNhanId = 0;
                    yeuCauGoiMarketing.DuocHuongBaoHiem = this.tiepNhanBenhNhan.CoBHYT && this.tiepNhanBenhNhan.LyDoVaoVien == 1 && this.tiepNhanBenhNhan.BHYTNgayHetHan >= dateNow;
                    self.xuLyThemNhomDichVuKhuyenMai(yeuCauGoiMarketing);
                }
            });
        }
        else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xuLyThemNhomDichVuKhuyenMai(yeuCauGoiMarketing: ChiDinhGoiDichVuTheoBenhNhan) {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        //ThemYeuGoiDichVuThuongDungTaoMoiYCTN
        this.apiService.post<any>("TiepNhanBenhNhan/ThemChiDinhGoiDichVuKhuyenMaiKhiTaoYeuCauTiepNhan", yeuCauGoiMarketing).subscribe(result => {
            if (result) {
                result.DichVuKhamBenhs.forEach(element => {
                    element.LoaiDichVuKhac = 3;
                    this.tiepNhanBenhNhan.YeuCauKhacGrid.push(element);
                });

                result.DichVuKyThuats.forEach(element => {
                    element.LoaiDichVuKhac = 4;
                    this.tiepNhanBenhNhan.YeuCauKhacGrid.push(element);
                });

                this.setDataForDichVuKhac();
                this.setGiaBHYT();
                this.refreshGrid();
                this.removeThemDichVuValue();
                this.removeThemGoiValue();

                let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
                this.notificationService.showSuccess(mess);
            }
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

    showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
        let mess = "";
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

        this.loadingDataPopup = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: mess }
        });
    }

    closePopupLoadingData() {
        if (this.loadingDataPopup) {
            this.loadingDataPopup.close();
        }
    }

    //======================================================================================


    // cap nhat goi marketing
    changeDichVuTrongGoi(event, dataItem) {
        if (dataItem.IsDichVuTrongGoi) {
            if (event) {
                dataItem.IsGoiCoChietKhau = true;
                dataItem.GoiCoChietKhauId = dataItem.GoiCoChietKhauIdTemp;
            }
            else {
                dataItem.IsGoiCoChietKhau = false;
                dataItem.GoiCoChietKhauId = null;
            }
        }
    }

    tinhThanhTienDichVuBaoGomTrongGoiTheGroup(group, value) {
        console.log('tinhThanhTienDichVuBaoGomTrongGoiTheGroup', group, value);
        console.log('tinhThanhTienDichVuBaoGomTrongGoi')
        console.log('this.tiepNhanBenhNhan.YeuCauKhacGrid', this.tiepNhanBenhNhan.YeuCauKhacGrid);
        return this.tiepNhanBenhNhan.YeuCauKhacGrid
            .reduce((sum, item) => (sum + (item.GoiCoChietKhauId != null ? item.ThanhTienSauChietKhau : item.ThanhTien)), 0);
        // event.Data.forEach(element => {
        //     let donGia = element.GoiCoChietKhauId != null ? element.DonGiaSauChietKhau : element.DonGia;
        //     this.thanhTienDichVuChiDinhBaoGomDichVuTrongGoi += donGia * element.SoLuong;
        // });
    }

    // nhóm dịch vụ thường dùng
    xemNhomDichVuThuongDung() {
        var self = this;
        let boPhan = BoPhan.TiepNhanNgoaiTru;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.dialog.open(LanKhamHienTaiNhomDichVuThuongDungPopupComponent, {
                disableClose: false,
                width: '1500px',
                data: { DocumentType: self.documentType, boPhan: boPhan }
            }).afterClosed().subscribe(yeuCauGoiThuongDung => {
                if (yeuCauGoiThuongDung) {
                    yeuCauGoiThuongDung.DanhSachDichVuChons = self.tiepNhanBenhNhan.YeuCauKhacGrid;
                    self.apiService.post<Array<ChiDinhGoiDichVuThuongDungDichVuLoi>>("TiepNhanBenhNhan/KiemTraDichVuTrongGoiDaCoTheoDichVuTrongGrid", yeuCauGoiThuongDung).subscribe(resultData => {
                        if (resultData && resultData.length > 0) {
                            self.dialog.open(LanKhamHienTaiNhomDichVuLoiPopupComponent, {
                                disableClose: false,
                                width: '1200px',
                                data: { arrDichVuCanhBao: resultData, DocumentType: this.documentType }
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

    xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung: ChiDinhGoiDichVuThuongDung) {
        // code toàn cheat, giờ cũng phải cheat theo
        let dateNow = new Date((new Date()).toDateString());
        yeuCauGoiThuongDung.DuocHuongBaoHiem = this.tiepNhanBenhNhan.CoBHYT && this.tiepNhanBenhNhan.LyDoVaoVien == 1 && this.tiepNhanBenhNhan.BHYTNgayHetHan >= dateNow;
        this.apiService.post<any>("TiepNhanBenhNhan/ThemYeuGoiDichVuThuongDungTaoMoiYCTN", yeuCauGoiThuongDung).subscribe(result => {
            if (result) {
                result.DichVuKhamBenhs.forEach(element => {
                    element.LoaiDichVuKhac = 3;
                    this.tiepNhanBenhNhan.YeuCauKhacGrid.push(element);
                    
                });

                result.DichVuKyThuats.forEach(element => {
                    element.LoaiDichVuKhac = 4;
                    this.tiepNhanBenhNhan.YeuCauKhacGrid.push(element);
                    // this.setDataForDichVuKhac();
                    // this.setGiaBHYT();
                    // this.refreshGrid();
                });

                this.setDataForDichVuKhac();
                this.setGiaBHYT();
                this.refreshGrid();
                this.removeThemDichVuValue();
                this.removeThemGoiValue();

                let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
                this.notificationService.showSuccess(mess);
            }
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
    }

    // cập nhật điều kiện tạo mới yctn
    //================================================================================================
    chuyenVeTrangCapNhatYCTN(){
        this.router.navigate([this.urlPageUpdateYCTN]);
    }

    xuLyKiemTraBenhNhanDuDieuKienTaoMoiYCTN(coTheBHYT: boolean = null) {
        if (this.tiepNhanBenhNhan.BenhNhanId != undefined
            && this.tiepNhanBenhNhan.BenhNhanId != null
            && this.tiepNhanBenhNhan.BenhNhanId != 0) {
            console.log('this.tiepNhanBenhNhan.CoBHYT', this.tiepNhanBenhNhan.CoBHYT);
            let laKiemTraCungNgay = coTheBHYT == null ? this.tiepNhanBenhNhan.CoBHYT != true : coTheBHYT != true;
            this.apiService.post<any>("TiepNhanBenhNhan/KiemTraDieuKienTaoMoiYeuCauTiepNhan?benhNhanId=" + this.tiepNhanBenhNhan.BenhNhanId + "&laKiemTraCungNgay=" + laKiemTraCungNgay).subscribe(
                resultData => {
                    this.errMessageKhongChoPhepTaoMoiYCTN = resultData.ErrorMessage;
                    if(resultData.YeuCauTiepNhanId != null)
                    {
                        this.urlPageUpdateYCTN = 'danh-sach-tiep-nhan/chinh-sua/' + resultData.YeuCauTiepNhanId;
                    }
                },
                (err: ApiError) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
        }
    }

    kiemTraTheBHYTKhiTaoYCTNMoi(){
        this.isCheckedBHYT = true;

        this.thongTinBenhNhan.MaThe = this.tiepNhanBenhNhan.BHYTMaSoThe;
        this.thongTinBenhNhan.TenBenhNhan = this.tiepNhanBenhNhan.HoTen;
        this.thongTinBenhNhan.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
        this.thongTinBenhNhan.NamSinh = this.tiepNhanBenhNhan.NamSinh;

        var datePipe = new DatePipe("en-US");
        this.thongTinBenhNhan.NgaySinhDisplay = datePipe.transform(this.tiepNhanBenhNhan.NgayThangNamSinh, 'dd/MM/yyyy');

        if (this.thongTinBenhNhan.MaThe != null && this.thongTinBenhNhan.TenBenhNhan != null
            && (this.thongTinBenhNhan.NgaySinh != null || this.thongTinBenhNhan.NamSinh != null)) {
            this.dialog.open(TiepNhanBenhNhanChoQuetComponent, {
                disableClose: true,
                width: '500px',
                height: '250px',
                data: this.thongTinBenhNhan,
            }).afterClosed().subscribe(result => {
                if (result === undefined) {
                    //cheat vi khong hieu sao ra duoc
                }
                // else if (result == null || (result != null && result.maKetQua == "050")) {
                else if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
                    this.tiepNhanBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
                    this.dialog.open(TiepNhanBenhNhanErrorComponent, {
                        disableClose: false,
                        width: '700px',
                        height: '300px',
                        data: this.tiepNhanBenhNhan,
                    }).afterClosed().subscribe(resultData => {
                        this.isCheckedBHYT = false;
                        if (resultData == 2) {
                            this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                            this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;
                            this.tiepNhanBenhNhan.CoBHYT = true;
                            this.tiepNhanBenhNhan.TuNhap = true;
                        }
                        else if (resultData == 1) {
                            this.tiepNhanBenhNhan.CoBHYT = false;
                            this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;
                            this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                        }
                        else if (resultData != undefined) {
                            this.setValueBHYT(result);
                        }
                    });
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
    //================================================================================================

    // BVHD-3481
    //================================================================================================
    xuLyTaoYeuCauTiepNhan(coInPhieu: boolean = false) {
        this.loading = true;
        this.validationErrors = [];
        if (this.tiepNhanBenhNhan.BenhNhanId == null || this.tiepNhanBenhNhan.BenhNhanId == 0) {
            this.apiService.post<any>("TiepNhanBenhNhan/KiemTraBenhNhanTrongHeThong", this.tiepNhanBenhNhan).subscribe(result => {
                if (result != null) {
                    this.dialog.open(ConfirmComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: result.Message }
                    }).afterClosed().subscribe(result => {
                        if (result == "Yes") {
                            if (coInPhieu) {
                                this.luuVaInPhieu();
                            }
                            else {
                                this.luuPhieu();
                            }
                        }
                        else{
                            this.loading = false;
                        }
                    });
                }
                else {
                    if (coInPhieu) {
                        this.luuVaInPhieu();
                    }
                    else {
                        this.luuPhieu();
                    }
                }
            },
            (err: ApiError) => {
                var self = this;
                self.loading = false;
                if (err != undefined && err.ValidationErrors != null) {
                    let itemGiamHoValidate = err.ValidationErrors.find(p => p.Field == "NguoiLienHeHoTen"
                        || p.Field == "NguoiLienHeQuanHeNhanThanId" || p.Field == "NguoiLienHeSoDienThoai");
                    if (itemGiamHoValidate != null && itemGiamHoValidate != undefined) {
                        self.tabStrip.selectTab(2);;
                    }

                    self.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
        }
        else {
            if (coInPhieu) {
                this.luuVaInPhieu();
            }
            else {
                this.luuPhieu();
            }
        }
    }
    //================================================================================================
    
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
}
