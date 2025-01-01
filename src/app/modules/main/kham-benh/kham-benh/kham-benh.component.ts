import {
    Component,
    OnInit,
    ViewChild,
    TemplateRef,
    ChangeDetectorRef,
    HostListener,
    Input,
    OnDestroy
} from "@angular/core";
import icSearch from "@iconify/icons-ic/twotone-search";
import icHourglass from "@iconify/icons-ic/twotone-hourglass-full";
import icDone from "@iconify/icons-ic/done";
import icEdit from "@iconify/icons-ic/sharp-edit";
import icCode from "@iconify/icons-ic/code";
import icPerson from "@iconify/icons-ic/person";
import icWc from "@iconify/icons-ic/wc";
import icDate from "@iconify/icons-ic/date-range";
import icComment from "@iconify/icons-ic/comment";
import icPermContactCalendar from "@iconify/icons-ic/perm-contact-calendar";
import icPhone from "@iconify/icons-ic/phone";
import icLocation from "@iconify/icons-ic/location-on";
import icWork from "@iconify/icons-ic/work";
import icGroup from "@iconify/icons-ic/group";
import icTimeLine from "@iconify/icons-ic/timeline";
import icOffer from "@iconify/icons-ic/local-offer";
import icPlay from "@iconify/icons-ic/play-circle-filled";
import icMoreHoriz from "@iconify/icons-ic/more-horiz";
import icEventNote from "@iconify/icons-ic/event-note";
import icCancel from "@iconify/icons-ic/cancel";
import icAssignment from "@iconify/icons-ic/assignment";
import icSwap from "@iconify/icons-ic/swap-horiz";
import { stagger60ms } from "src/@vex/animations/stagger.animation";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { MatDialog } from "@angular/material";
import { LanKhamHienTaiBenhNhanTiepTheoPopupComponent } from "./lan-kham-hien-tai/lan-kham-hien-tai-benh-nhan-tiep-theo-popup/lan-kham-hien-tai-benh-nhan-tiep-theo-popup.component";
import {
    YeuCauKhamBenh,
    SoLuongYeuCauHienTai,
    BenhVienHangDoi,
    ThongTinKhamPrevious,
    YeuCauKhamBenhPrevious,
    ListStatusSelectTabKhamBenh,
    HangDoiKhamBenhInputViewModel,
    KhamBenhTemplateDichVuKhamSucKhoe,
    PhieuKhamBenhVo,
    CapNhatPhieuDuongThai,
} from "../kham-benh.model";
import { PanelBarItemModel } from "@progress/kendo-angular-layout";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { CommonService } from "src/app/core/utilities/common.helper";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { ApiService } from "src/app/core/services/api.service";
import {
    LookupItemVo,
    HoatDongNhanVien,
} from "src/app/shared/models/common.model";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { LanKhamHienTaiBenhNhanDangLamChiDinhPopupComponent } from "./lan-kham-hien-tai/lan-kham-hien-tai-benh-nhan-dang-lam-chi-dinh-popup/lan-kham-hien-tai-benh-nhan-dang-lam-chi-dinh-popup.component";
import {
    EnumTrangThaiYeuCauTiepNhan,
    TrangThaiYeuCauDichVuKyThuat,
    TrangThaiYeuCauKhamBenh,
} from "src/app/shared/enum/kham-benh.enum";
import { ApiError } from "src/app/shared/models/api-error.model";
import { PhieuKhamBenhVaoVienPopupComponent } from "./lan-kham-hien-tai/phieu-kham-benh-vao-vien-popup/phieu-kham-benh-vao-vien-popup.component";
import { PhauThuatThuThuatTuongTrinhComponent } from "./lan-kham-hien-tai/phau-thuat-thu-thuat-tuong-trinh/phau-thuat-thu-thuat-tuong-trinh.component";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { BroadcastService } from "src/app/core/services/broadcast.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NghiHuongBhytConfirmPopupComponent } from './lan-kham-hien-tai/nghi-huong-bhyt-confirm-popup/nghi-huong-bhyt-confirm-popup.component';
import { LanKhamHienTaiChuyenKhamComponent } from './lan-kham-hien-tai/lan-kham-hien-tai-chuyen-kham/lan-kham-hien-tai-chuyen-kham.component';
import { HinhThucKhamBenh } from "src/app/shared/enum/kham-doan.enum";
import { Location } from "@angular/common";
import { GroupDescriptor } from "@progress/kendo-data-query";
import { LanKhamHienTaiChuyenPhongKhamPopupComponent } from "../lan-kham-hien-tai/lan-kham-hien-tai-chuyen-phong-kham-popup/lan-kham-hien-tai-chuyen-phong-kham-popup.component";
import { KhamBenhThongTinDoiTuongPopupComponent } from "./kham-benh-thong-tin-doi-tuong-popup/kham-benh-thong-tin-doi-tuong-popup.component";
import { NgayDuongThaiXacNhanPopupComponent } from "./ngay-duong-thai-xac-nhan-popup/ngay-duong-thai-xac-nhan-popup.component";
import { KetLuanNguoiBenhHangDoiChungPopupComponent } from "./ket-luan-nguoi-benh-hang-doi-chung-popup/ket-luan-nguoi-benh-hang-doi-chung-popup.component";
import { KhamBenhDichVuChuaThucHienPopupComponent } from "./kham-benh-dich-vu-chua-thuc-hien-popup/kham-benh-dich-vu-chua-thuc-hien-popup.component";

declare const Waypoint: any;
declare var jQuery: any;
declare var window: Window & typeof globalThis;
@Component({
    selector: "app-kham-benh",
    templateUrl: "./kham-benh.component.html",
    styleUrls: ["./kham-benh.component.scss"],
    animations: [stagger60ms, fadeInUp400ms],
})
export class KhamBenhComponent implements OnInit, OnDestroy {
    icSearch = icSearch;
    icHourglass = icHourglass;
    icDone = icDone;
    icEdit = icEdit;
    icCode = icCode;
    icPerson = icPerson;
    icWc = icWc;
    icDate = icDate;
    icComment = icComment;
    icPhone = icPhone;
    icPermContactCalendar = icPermContactCalendar;
    icLocation = icLocation;
    icWork = icWork;
    icGroup = icGroup;
    icTimeLime = icTimeLine;
    icOffer = icOffer;
    icPlay = icPlay;
    icMoreHoriz = icMoreHoriz;
    icEventNote = icEventNote;
    icCancel = icCancel;
    icAssignment = icAssignment;
    icSwap = icSwap;
    searchBenhNhan: string = null;
    currentId: number = null; // giá trị dùng để lấy dữ iệu liên quan người bệnh
    tabActive: string = "card0";
    templateKhoaPhong: string = null;
    tenKhoaPhong: string = null;

    phongKhamIdTruoc: number;
    phongKhamIdSau: number;
    checkPhongKhamDaChon: boolean = true;
    arrPhongKham: any[] = [];

    // biến tạm gán value
    ChucVu: string = null;
    HoTen: string = null;

    benhNhanHienTai: BenhVienHangDoi;
    phieuKhamBenhVo: PhieuKhamBenhVo = new PhieuKhamBenhVo();
    arrBenhNhanChuanBiKham: Array<YeuCauKhamBenh> = [];
    arrDoChiSoSinhTon: any[] = [];

    documentType: DocumentType = DocumentType.KhamBenh;
    @ViewChild("chuanBiKhamActionTemplate", { static: true })
    chuanBiKhamActionTemplate: TemplateRef<any>;
    @ViewChild("maTNTemplate", { static: true }) maTNTemplate: TemplateRef<any>;
    @ViewChild("hoTenTemplate", { static: true }) hoTenTemplate: TemplateRef<any>;
    @ViewChild("tienTrinhTemplate", { static: true }) tienTrinhTemplate: TemplateRef<any>;
    @ViewChild("ChuanBiKham", { static: true }) gridChuanBiKham: GridComponent;
    @ViewChild("DangDoiKetLuan", { static: true }) gridDoiKetLuan: GridComponent;
    @ViewChild(PhauThuatThuThuatTuongTrinhComponent, { static: false })
    phauThuatThuThuatComponent;
    @ViewChild("ngayKhamBenhGroupHeaderTemplate", { static: true }) ngayKhamBenhGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild("maTNHangDoiChungTemplate", { static: true }) maTNHangDoiChungTemplate: TemplateRef<any>;
    @ViewChild("hoTenHangDoiChungTemplate", { static: true }) hoTenHangDoiChungTemplate: TemplateRef<any>;

    @ViewChild("maTNHangDoiChungKetLuanTemplate", { static: true }) maTNHangDoiChungKetLuanTemplate: TemplateRef<any>;
    @ViewChild("hoTenHangDoiChungKetLuanTemplate", { static: true }) hoTenHangDoiChungKetLuanTemplate: TemplateRef<any>;
    gridChuanBiKhamColumns: any[] = [];
    dataSourceChuanBiKham = {
        data: [],
        total: 0,
    };

    gridChuanBiKhamHangDoiChungColumns: any[] = [];
    dataSourceChuanBiKhamHangDoiChung = {
        data: [],
        total: 0,
    };

    gridChoKetLuanHangDoiChungColumns: any[] = [];
    dataSourceChoKetLuanHangDoiChung = {
        data: [],
        total: 0,
    };

    gridLamChiDinhColumns: any[] = [];
    dataSourceLamChiDinh = {
        data: [],
        total: 0,
    };

    gridDoiKetLuanColumns: any[] = [];
    dataSourceDoiKetLuan = {
        data: [],
        total: 0,
    };

    gridChuanBiKhamKhoaKhamNhieuColumns: any[] = [];
    gridDoiKetLuanKhoaKhamNhieuColumns: any[] = [];
    //========================================
    phongKhamBenh: HoatDongNhanVien;
    phongKhamHienTai: LookupItemVo = {
        DisplayName: null,
        KeyId: Number(this.authService.getPhongLamViecId()),
    };

    slYeuCauHienTai: SoLuongYeuCauHienTai = new SoLuongYeuCauHienTai();

    yeuCauDichVuKyThuatDaHoanThanh: TrangThaiYeuCauDichVuKyThuat =
        TrangThaiYeuCauDichVuKyThuat.DaThucHien;
    yeuCauKhamBenhDangKetLuan: TrangThaiYeuCauKhamBenh =
        TrangThaiYeuCauKhamBenh.DangDoiKetLuan;
    maTiepNhan: number = 0;
    validationKetLuanErrors: any;
    thongTinKhamTemp: ThongTinKhamPrevious;
    yeuCauKhamBenhPrevious: YeuCauKhamBenhPrevious;
    keyPrev: number = null;

    // cần update
    lstStatusSelectTabKhambenh: ListStatusSelectTabKhamBenh = new ListStatusSelectTabKhamBenh();
    isDuoi6Tuoi: boolean = false;
    Duoi6TuoiDisplay: string = "";
    subscription: Subscription;
    isSelectedParentTabKhamBenh: boolean = true;
    modelQRCode: any;
    isScanF1: boolean = false;

    isKhamDoan: boolean = false;
    isKhamDoanTatCa: boolean = false;
    loginNoiVien: HinhThucKhamBenh = HinhThucKhamBenh.NoiVien;
    hinhThucKham: HinhThucKhamBenh = HinhThucKhamBenh.NoiVien;
    baseRoute: string = "/kham-benh";
    isLoadingKhamDoan: boolean = false;

    arrNgayCoBenhNhanDuocChon: Date[] = [];
    arrBenhNhanChuyenPhongId: number[] = [];

    groupHangCho: GroupDescriptor[] = [{ field: 'NgayKhamBenh', dir: 'asc', aggregates: [] }];

    searchStringHangDoiHienTai: string = "";

    showHangDoiChung: boolean = false;

    //BVHD-3574
    LaChuyenKhoaKhamNhieu: boolean = false;
    showChiTietHanhChinh: boolean = false;
    //BVHD-3698- giấy nghỉ dưỡng thai
    cauHinhDichVuKhamThai = 14;
    yeuCauTiepNhanDangThucHien: EnumTrangThaiYeuCauTiepNhan = EnumTrangThaiYeuCauTiepNhan.DangThucHien;

    constructor(
        private router: Router,
        private dialog: MatDialog,
        private ref: ChangeDetectorRef,
        private broadcastService: BroadcastService,
        private apiService: ApiService,
        private authService: AuthService,
        private notificationService: NotificationService,
        private route: ActivatedRoute,
        private location:Location
    ) { }

    currentUser: any;
    popupLoadingData: any;
    ngOnInit() {
        this.closePopupLoadingData();
        this.benhNhanHienTai = new BenhVienHangDoi();

        // cập nhật cho phần khám đoàn
        // cập nhật lại: các hàm get thông tin yêu cầu khám bệnh, thông tin hành chính, hàng đợi, v
                    //template khám các cơ quan, v
                    //phím tắt phần mở tab kết luận của khám đoàn và title hot key
                    // màn hình lịch sử v

        // kiểm tra trường hợp login vào ngoại viện
        let menuInfo = this.authService.getAccessUser();
        this.hinhThucKham = menuInfo.HinhThucKhamBenh;
        if (this.hinhThucKham == HinhThucKhamBenh.KhamDoanNgoaiVien) {
            this.location.replaceState(this.baseRoute + '?IsKhamDoan=true');
            this.isKhamDoan = true;
        }
        else {
            this.route.queryParams.subscribe(param => {
                this.isKhamDoan = param['IsKhamDoan'] == 'true';
                this.isKhamDoanTatCa = param['IsKhamDoanTatCa'] == 'true';
            });
        }
        if(this.isKhamDoan)
        {
            this.documentType = DocumentType.KhamDoanKhamBenh;
        }
        // BVHD-3574 cập nhật 22/11/2021: hiển thị thông tin bệnh nhân khám theo dịch vụ chứ ko phải theo khoa
        // else
        // {
        //     this.kiemTraKhoaHienTaiCoNhieuNguoiBenh();
        // }
        //================================================================

        this.gridChuanBiKhamColumns = [
            {
                Field: "MaYeuCauTiepNhan",
                Title: "Mã TN",
                Width: 60,
                Sortable: false,
                Template: this.maTNTemplate
            },
            {
                Field: "HoTen",
                Title: "Họ tên",
                MinWidth: 100,
                Sortable: false,
                ShowTooltip: true,
                Template: this.hoTenTemplate
            },
            { Field: "TenGioiTinh", Title: "GT", Width: 35, Sortable: false },
            // { Field: "Tuoi", Title: "Tuổi", Width: 30, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 35, Sortable: false },
            //{ Field: "TienTrinh", Title: "DV", Width: 30, Sortable: false, Template: this.tienTrinhTemplate, Hidden: !this.isKhamDoan },
            //{ Field: "Action", Title: "", Width: 65, Template: this.chuanBiKhamActionTemplate }
            { Field: "NgayKhamBenh", Title: "Ngày khám bệnh", Width: 100, Sortable: false, Hidden: true, TemplateGroupHeader: this.ngayKhamBenhGroupHeaderTemplate }
        ];

        this.gridChuanBiKhamHangDoiChungColumns = [
            {
                Field: "MaYeuCauTiepNhan",
                Title: "Mã TN",
                Width: 60,
                Sortable: false,
                Template: this.maTNHangDoiChungTemplate
            },
            {
                Field: "HoTen",
                Title: "Họ tên",
                MinWidth: 100,
                Sortable: false,
                ShowTooltip: true,
                Template: this.hoTenHangDoiChungTemplate
            },
            { Field: "TenGioiTinh", Title: "GT", Width: 35, Sortable: false },
            // { Field: "Tuoi", Title: "Tuổi", Width: 30, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 35, Sortable: false },
            //{ Field: "TienTrinh", Title: "DV", Width: 30, Sortable: false, Template: this.tienTrinhTemplate, Hidden: !this.isKhamDoan },
            { Field: "NgayKhamBenh", Title: "Ngày khám bệnh", Width: 100, Sortable: false, Hidden: true, TemplateGroupHeader: this.ngayKhamBenhGroupHeaderTemplate }
        ];

        this.gridChoKetLuanHangDoiChungColumns = [
            {
                Field: "MaYeuCauTiepNhan",
                Title: "Mã TN",
                Width: 60,
                Sortable: false,
                Template: this.maTNHangDoiChungKetLuanTemplate
            },
            {
                Field: "HoTen",
                Title: "Họ tên",
                MinWidth: 100,
                Sortable: false,
                ShowTooltip: true,
                Template: this.hoTenHangDoiChungKetLuanTemplate
            },
            { Field: "TenGioiTinh", Title: "GT", Width: 35, Sortable: false },
            // { Field: "Tuoi", Title: "Tuổi", Width: 30, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 35, Sortable: false },
            //{ Field: "TienTrinh", Title: "DV", Width: 30, Sortable: false, Template: this.tienTrinhTemplate, Hidden: !this.isKhamDoan },
            { Field: "NgayKhamBenh", Title: "Ngày khám bệnh", Width: 100, Sortable: false, Hidden: true, TemplateGroupHeader: this.ngayKhamBenhGroupHeaderTemplate }
        ];

        this.gridLamChiDinhColumns = [
            {
                Field: "MaYeuCauTiepNhan",
                Title: "Mã TN",
                Width: 60,
                Sortable: false,
                Template: this.maTNTemplate
            },
            {
                Field: "HoTen",
                Title: "Họ tên",
                MinWidth: 100,
                Sortable: false,
                ShowTooltip: true,
                Template: this.hoTenTemplate
            },
            { Field: "TenGioiTinh", Title: "GT", Width: 35, Sortable: false },
            // { Field: "Tuoi", Title: "Tuổi", Width: 30, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 35, Sortable: false },
            { Field: "NgayKhamBenh", Title: "Ngày khám bệnh", Width: 100, Sortable: false, Hidden: true, TemplateGroupHeader: this.ngayKhamBenhGroupHeaderTemplate }
        ];

        this.gridDoiKetLuanColumns = [
            {
                Field: "MaYeuCauTiepNhan",
                Title: "Mã TN",
                Width: 60,
                Sortable: false,
                Template: this.maTNTemplate
            },
            {
                Field: "HoTen",
                Title: "Họ tên",
                MinWidth: 100,
                Sortable: false,
                ShowTooltip: true,
                Template: this.hoTenTemplate
            },
            { Field: "TenGioiTinh", Title: "GT", Width: 35, Sortable: false },
            // { Field: "Tuoi", Title: "Tuổi", Width: 30, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 35, Sortable: false },
            //{ Field: "TienTrinh", Title: "DV", Width: 30, Sortable: false, Template: this.tienTrinhTemplate, Hidden: !this.isKhamDoan },
            { Field: "NgayKhamBenh", Title: "Ngày khám bệnh", Width: 100, Sortable: false, Hidden: true, TemplateGroupHeader: this.ngayKhamBenhGroupHeaderTemplate }
        ];


        //BVHD-3574
        this.gridChuanBiKhamKhoaKhamNhieuColumns = [
            { Field: "HoTen", Title: "Họ tên", MinWidth: 100, Sortable: false, ShowTooltip: true, Template: this.hoTenTemplate},
            { Field: "TenGioiTinh", Title: "GT", Width: 36, Sortable: false },
            { Field: "NgayKhamBenh", Title: "Ngày khám bệnh", Width: 100, Sortable: false, Hidden: true, TemplateGroupHeader: this.ngayKhamBenhGroupHeaderTemplate }
        ];

        this.gridDoiKetLuanKhoaKhamNhieuColumns = [
            { Field: "HoTen", Title: "Họ tên", MinWidth: 100, Sortable: false, ShowTooltip: true, Template: this.hoTenTemplate},
            { Field: "TenGioiTinh", Title: "GT", Width: 36, Sortable: false },
            { Field: "NgayKhamBenh", Title: "Ngày khám bệnh", Width: 100, Sortable: false, Hidden: true, TemplateGroupHeader: this.ngayKhamBenhGroupHeaderTemplate }
        ];

        //this.getThongTinNhanVien();
        //================================================================


        //this.phongKhamHienTai.KeyId = Number(this.authService.getPhongLamViecId());
        this.chonPhongKham(this.phongKhamHienTai.KeyId);
    }

    getSoLuongYeuCauHienTai(phongKhamHienTaiId: number) {
        // this.apiService
        //     .get<SoLuongYeuCauHienTai>(
        //         "KhamBenh/GetSoLuongYeuCauHienTai?phongKhamId=" + phongKhamHienTaiId + "&laKhamDoan=" + this.isKhamDoan
        //     )
        //     .subscribe((resultData) => {
        //         if (resultData !== undefined && resultData != null) {
        //             this.slYeuCauHienTai = resultData;

        //             this.refeshDataGridHangDoi(phongKhamHienTaiId);
        //             // //get data ds chờ khám
        //             // this.getDanhSachBenhNhanChoKhamHienTai(phongKhamHienTaiId);

        //             // // get data ds làm chỉ định
        //             // this.getDanhSachBenhNhanDangLamChiDinhHienTai(phongKhamHienTaiId);

        //             // // get data ds đợi kết luận
        //             // this.getDanhSachBenhNhanDoiKetLuanHienTai(phongKhamHienTaiId);
        //         } else {
        //             this.slYeuCauHienTai = new SoLuongYeuCauHienTai();
        //         }
        //     });

        this.slYeuCauHienTai = new SoLuongYeuCauHienTai();
        this.refeshDataGridHangDoi(phongKhamHienTaiId);
    }

    onResetTuongTrinh() {
        const phongBenhVienId = this.authService.getPhongLamViecId();
        const nhanVienId = this.authService.getAccessUser().Id;
        const yeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
        this.phauThuatThuThuatComponent.getListPhauThuatThuThuatTemplate(
            phongBenhVienId,
            nhanVienId,
            yeuCauKhamBenhId
        );
        this.benhNhanHienTai.YeuCauKhamBenh.IsChangePhauThuat = false;
    }

    onSaveTuongTrinh() {
        this.phauThuatThuThuatComponent.SaveTuongTrinh();
        this.benhNhanHienTai.YeuCauKhamBenh.IsChangePhauThuat = false;
    }

    // áp dụng hàng chờ mới cho màn hình khám bệnh: chỉ có hàng chờ khám và kết luận
    refeshDataGridHangDoi(phongKhamHienTaiId: number, searchString: string = "") {
        // get data ds chờ khám
        this.getDanhSachBenhNhanChoKhamHienTai(phongKhamHienTaiId, searchString);

        // get data ds làm chỉ định
        // if(!this.LaChuyenKhoaKhamNhieu)
        // {
        // this.getDanhSachBenhNhanDangLamChiDinhHienTai(phongKhamHienTaiId, searchString);
        // }

        // get data ds đợi kết luận
        this.getDanhSachBenhNhanDoiKetLuanHienTai(phongKhamHienTaiId, searchString);

        // get data ds chờ khám của hàng chờ chung\
        if(this.showHangDoiChung)
        {
            this.getDanhSachBenhNhanChoKhamHangDoiChung(phongKhamHienTaiId, searchString);
            if(!this.isKhamDoan)
            {
                this.getDanhSachBenhNhanChoKetLuanHangDoiChung(phongKhamHienTaiId, searchString);
            }
        }

        this.searchStringHangDoiHienTai = searchString;
    }
    getDanhSachBenhNhanChoKhamHienTai(
        phongKhamId: number,
        searchString: string = ""
    ) {
        this.apiService
            .get<Array<YeuCauKhamBenh>>(
                "KhamBenh/GetDanhSachChoKhamHienTaiAsync?phongKhamHienTaiId=" +
                phongKhamId +
                "&searchString=" +
                searchString +
                "&laKhamDoan=" +
                this.isKhamDoan
            )
            .subscribe((resultData) => {
                if (resultData !== undefined && resultData != null) {
                    // this.dataSourceChuanBiKham.data = resultData;

                    this.dataSourceChuanBiKham = {
                        data: resultData,
                        total: resultData.length,
                    };
                    if (this.dataSourceChuanBiKham.data.length != this.slYeuCauHienTai.ChuanBiKham) {
                        this.slYeuCauHienTai.ChuanBiKham = this.dataSourceChuanBiKham.data.length;
                    }
                } else {
                    // this.dataSourceChuanBiKham.data = null;
                    this.dataSourceChuanBiKham = {
                        data: [],
                        total: 0,
                    };;
                    this.slYeuCauHienTai.ChuanBiKham = 0;
                }
            });
    }

    getDanhSachBenhNhanDangLamChiDinhHienTai(
        phongKhamId: number,
        searchString: string = ""
    ) {
        if (!this.isKhamDoan) {
            this.apiService
                .get<Array<YeuCauKhamBenh>>(
                    "KhamBenh/GetDanhSachLamChiDinhHienTaiAsync?phongKhamHienTaiId=" +
                    phongKhamId +
                    "&searchString=" +
                    searchString
                )
                .subscribe((resultData) => {
                    if (resultData !== undefined && resultData != null) {
                        // this.dataSourceLamChiDinh.data = resultData;

                        this.dataSourceLamChiDinh = {
                            data: resultData,
                            total: resultData.length,
                        };
                        if (this.dataSourceLamChiDinh.data.length != this.slYeuCauHienTai.DangLamChiDinh) {
                            this.slYeuCauHienTai.DangLamChiDinh = this.dataSourceLamChiDinh.data.length;
                        }
                    } else {
                        // this.dataSourceLamChiDinh.data = null;

                        this.dataSourceLamChiDinh = {
                            data: [],
                            total: 0,
                        };
                        this.slYeuCauHienTai.DangLamChiDinh = 0;
                    }
                });
        }
    }

    getDanhSachBenhNhanDoiKetLuanHienTai(
        phongKhamId: number,
        searchString: string = ""
    ) {
        //GetDanhSachDoiKetLuanHienTaiAsync
        this.apiService
            .get<Array<YeuCauKhamBenh>>(
                "KhamBenh/GetDanhSachDoiKetLuanHienTaiAsync?phongKhamHienTaiId=" +
                phongKhamId +
                "&searchString=" +
                searchString +
                "&laKhamDoan=" +
                this.isKhamDoan
            )
            .subscribe((resultData) => {
                if (resultData !== undefined && resultData != null) {
                    // this.dataSourceDoiKetLuan.data = resultData;

                    this.dataSourceDoiKetLuan = {
                        data: resultData,
                        total: resultData.length,
                    };
                    if (this.dataSourceDoiKetLuan.data.length != this.slYeuCauHienTai.DangDoiKetLuan) {
                        this.slYeuCauHienTai.DangDoiKetLuan = this.dataSourceDoiKetLuan.data.length;
                    }
                } else {
                    // this.dataSourceDoiKetLuan.data = null;

                    this.dataSourceDoiKetLuan = {
                        data: [],
                        total: 0,
                    };;
                    this.slYeuCauHienTai.DangDoiKetLuan = 0;
                }
            });
    }

    refreshHangDoi(phongKhamId: number) {
        // get số lượng yêu cầu hiện tại theo phòng
        this.getSoLuongYeuCauHienTai(phongKhamId);
    }

    chonPhongKham(item: any) {
        if (this.checkPhongKhamDaChon) {
            this.arrPhongKham.push(item);
            //Load lần đầu tiên chạy chon mặc đinh phòng và người bệnh đang khám
            if (item) {
                this.refreshHangDoi(item);
                // xử lý get người bệnh hiện tại
                this.getBenhNhanDangKham(item, this.benhNhanHienTai.Id);
            }
            this.checkPhongKhamDaChon = false;
        }
    }

    selectionChangePhongKham(item: any) {
        this.ChuyenPhongKham(item);
    }

    ngAfterContentInit() {
        this.subscription = this.broadcastService.on("ChuyenPhong", (event) => {
            if (event.message) {
                this.ChuyenPhongNoiBo(event.message);
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ChuyenPhongNoiBo(item: any) {
        //nếu nó cố tình chọn cùng phòng hiện tại ko cho
        let phongBenhVienId = this.authService.getPhongLamViecId();
        if (phongBenhVienId !== item.KeyId) {
            if (this.benhNhanHienTai.Id != 0 && (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan || this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh)) {
                if(this.isKhamDoan)
                {
                    if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                        this.saveChangeData(null);
                    }
                    else
                    {
                        this.xuLyChuyenPhongKham(item);
                    }
                }
                else
                {
                this.benhNhanHienTai.validationErrors = null;
                this.validationKetLuanErrors = [];
                //this.ref.markForCheck();
                this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = this.processDynamicComponent();
                this.loadingPage();
                this.apiService
                    .post<any>("KhamBenh/LuuThongTinKhamBenh", this.benhNhanHienTai)
                    .subscribe(
                        (resultData) => {
                            this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;

                            this.benhNhanHienTai.isShowPanelItemKhamBenh = false;
                            this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs =
                                resultData.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs;
                            this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets =
                                resultData.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets;
                            this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs =
                                resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs;
                            this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs =
                                resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs;
                            this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus =
                                resultData.YeuCauTiepNhan.KetQuaSinhHieus;

                            if (resultData.YeuCauKhamBenh.IcdchinhId != 0 && resultData.YeuCauKhamBenh.IcdchinhId != null) {
                                this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId =
                                    resultData.YeuCauKhamBenh.IcdchinhId;
                            }
                            if (resultData.YeuCauKhamBenh.TenICDChinh != null && resultData.YeuCauKhamBenh.TenICDChinh != "") {
                                this.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh =
                                    resultData.YeuCauKhamBenh.TenICDChinh;
                            }
                            if (resultData.YeuCauKhamBenh.GhiChuICDChinh != null && resultData.YeuCauKhamBenh.GhiChuICDChinh != "") {
                                this.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh =
                                    resultData.YeuCauKhamBenh.GhiChuICDChinh;
                            }

                            if (this.benhNhanHienTai.YeuCauKhamBenh.CoKeToa != true && this.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa != true) {
                                this.benhNhanHienTai.YeuCauKhamBenh.CoKeToa = null;
                            }
                            this.ganThongTinKhamTamThoi();

                            // xử lý lưu tab chẩn đoán
                            this.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = false;
                            this.benhNhanHienTai.YeuCauKhamBenh.CoInKeToa = false;
                            this.apiService
                                .post<any>("KhamBenh/LuuKetLuan", this.benhNhanHienTai.YeuCauKhamBenh)
                                .subscribe(
                                    (res) => {
                                        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = res.YeuCauKhamBenhICDKhacs;
                                        this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
                                        this.xuLyChuyenPhongKham(item);
                                    },
                                    (err: ApiError) => {
                                        this.validationKetLuanErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            this.notificationService.showError(err.Message);
                                        } else if (
                                            err.Message == "Validation Failed" &&
                                            !this.lstStatusSelectTabKhambenh.selectedTabChanDoan
                                        ) {
                                            this.unSelectedTab();
                                            this.lstStatusSelectTabKhambenh.selectedTabChanDoan = true;
                                            this.notificationService.showError(
                                                "Yêu cầu nhập đầy đủ các trường bắt buộc trong tab chẩn đoán"
                                            );
                                        }
                                        this.phongKhamHienTai.KeyId = this.arrPhongKham[
                                            this.arrPhongKham.length - 1
                                        ];
                                        this.closePopupLoadingData();
                                    }
                                );
                        },
                        (err: ApiError) => {
                            this.benhNhanHienTai.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                this.notificationService.showError(err.Message);
                            } else if (
                                err.Message == "Validation Failed" &&
                                !this.lstStatusSelectTabKhambenh.selectedTabKhamBenh
                            ) {
                                this.unSelectedTab();
                                this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                                this.notificationService.showError(
                                    "Yêu cầu nhập đầy đủ các trường bắt buộc trong tab khám bệnh"
                                );
                            }
                            this.phongKhamHienTai.KeyId = this.arrPhongKham[
                                this.arrPhongKham.length - 1
                            ];
                            this.closePopupLoadingData();
                        }
                    );
                    
                }
            } else {
                this.xuLyChuyenPhongKham(item);
            }
        } else {
            this.closePopupLoadingData();
            this.broadcastService.broadcast({
                name: "ChuyenPhongThanhCong",
                message: true,
            });
        }

    }

    ChuyenPhongKham(item: any) {
        if (
            this.authService.hasPermission(
                this.documentType,
                SecurityOperation.Update
            )
        ) {
            var self = this;
            this.dialog
                .open(ConfirmComponent, {
                    disableClose: false,
                    width: "400px",
                    data: {
                        Title: "Xác nhận",
                        Message: "Bạn có muốn chuyển phòng khám bệnh không?",
                        ButtonYes: "CÓ",
                        ButtonNo: "KHÔNG",
                    },
                })
                .afterClosed()
                .subscribe((result) => {
                    // console.log('ChuyenPhongKham');
                    /* result is a string:Yes,No,No answer*/
                    var hasResult = false;
                    if (result == "Yes") {
                        hasResult = false;

                        // xử lý lưu thông tin người bệnh đang khám vào chuyển phòng khám
                        if (self.benhNhanHienTai.Id != 0) {
                            self.benhNhanHienTai.validationErrors = null;
                            self.validationKetLuanErrors = [];
                            self.ref.detectChanges();

                            self.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = self.processDynamicComponent();
                            self.loadingPage();
                            self.apiService
                                .post<any>("KhamBenh/LuuThongTinKhamBenh", self.benhNhanHienTai)
                                .subscribe(
                                    (resultData) => {
                                        self.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;

                                        self.benhNhanHienTai.isShowPanelItemKhamBenh = false;
                                        self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs =
                                            resultData.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs;
                                        self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets =
                                            resultData.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets;
                                        self.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs =
                                            resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs;
                                        self.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs =
                                            resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs;
                                        self.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus =
                                            resultData.YeuCauTiepNhan.KetQuaSinhHieus;

                                        if (resultData.YeuCauKhamBenh.IcdchinhId != 0 && resultData.YeuCauKhamBenh.IcdchinhId != null) {
                                            self.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId =
                                                resultData.YeuCauKhamBenh.IcdchinhId;
                                        }
                                        if (resultData.YeuCauKhamBenh.TenICDChinh != null && resultData.YeuCauKhamBenh.TenICDChinh != "") {
                                            self.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh =
                                                resultData.YeuCauKhamBenh.TenICDChinh;
                                        }
                                        if (resultData.YeuCauKhamBenh.GhiChuICDChinh != null && resultData.YeuCauKhamBenh.GhiChuICDChinh != "") {
                                            self.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh =
                                                resultData.YeuCauKhamBenh.GhiChuICDChinh;
                                        }

                                        if (self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa != true && self.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa != true) {
                                            self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa = null;
                                        }
                                        self.ganThongTinKhamTamThoi();

                                        // xử lý lưu tab chẩn đoán
                                        self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = false;
                                        self.benhNhanHienTai.YeuCauKhamBenh.CoInKeToa = false;
                                        self.apiService
                                            .post<any>("KhamBenh/LuuKetLuan", self.benhNhanHienTai.YeuCauKhamBenh)
                                            .subscribe(
                                                (res) => {
                                                    self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = res.YeuCauKhamBenhICDKhacs;
                                                    hasResult = true;
                                                    self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
                                                    self.xuLyChuyenPhongKham(item);
                                                },
                                                (err: ApiError) => {
                                                    self.validationKetLuanErrors = err.ValidationErrors;
                                                    if (err.Message != "Validation Failed") {
                                                        self.notificationService.showError(err.Message);
                                                    } else if (
                                                        err.Message == "Validation Failed" &&
                                                        !self.lstStatusSelectTabKhambenh.selectedTabChanDoan
                                                    ) {
                                                        self.unSelectedTab();
                                                        self.lstStatusSelectTabKhambenh.selectedTabChanDoan = true;
                                                        self.notificationService.showError(
                                                            "Yêu cầu nhập đầy đủ các trường bắt buộc trong tab chẩn đoán"
                                                        );
                                                    }
                                                    self.phongKhamHienTai.KeyId =
                                                        self.arrPhongKham[self.arrPhongKham.length - 1];
                                                    self.closePopupLoadingData();
                                                }
                                            );
                                    },
                                    (err: ApiError) => {
                                        self.benhNhanHienTai.validationErrors =
                                            err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        } else if (
                                            err.Message == "Validation Failed" &&
                                            !self.lstStatusSelectTabKhambenh.selectedTabKhamBenh
                                        ) {
                                            self.unSelectedTab();
                                            self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                                            self.notificationService.showError(
                                                "Yêu cầu nhập đầy đủ các trường bắt buộc trong tab khám bệnh"
                                            );
                                        }
                                        self.phongKhamHienTai.KeyId =
                                            self.arrPhongKham[self.arrPhongKham.length - 1];
                                        self.closePopupLoadingData();
                                    }
                                );
                        } else {
                            self.xuLyChuyenPhongKham(item);
                        }
                    } else {
                        if (result == "No") {
                            hasResult = false;
                        }
                        self.phongKhamHienTai.KeyId =
                            self.arrPhongKham[self.arrPhongKham.length - 1];
                        //self.chonPhongKham(self.arrPhongKham[self.arrPhongKham.length - 1])
                    }
                    if (hasResult) {
                        self.phongKhamBenh = {} as HoatDongNhanVien;
                        self.LuuHoatDongNhanVien(self.phongKhamBenh);
                    }
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xuLyChuyenPhongKham(item) {
        this.phongKhamHienTai.KeyId = item.KeyId;
        this.arrPhongKham.push(this.phongKhamHienTai.KeyId);
        this.phongKhamBenh = {} as HoatDongNhanVien;
        this.LuuHoatDongNhanVien(this.phongKhamBenh);

        //chọn phòng khám nào load data phần đó
        // if (item) {
        //     this.refreshHangDoi(item.KeyId);
        //     // xử lý get người bệnh hiện tại theo phòng khám
        //     this.getBenhNhanDangKham(item.KeyId, 0);
        // }
        // this.broadcastService.broadcast({
        //     name: "ChuyenPhongThanhCong",
        //     message: true,
        // });
        // this.closePopupLoadingData();

        // if (item) {
        //     // window.location.reload();
        //     // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        //     // this.router.onSameUrlNavigation = 'reload';
        //     // console.log('this.router.url', this.router.url);
        //     // let url = this.router.url;

        //     // // trường hợp url có truyền thêm param
        //     // let urlTree = this.router.parseUrl(url);
        //     // let paramObj = Object.assign({}, urlTree.queryParams);
        //     // urlTree.queryParams = {};
        //     // var urlWithoutParam = urlTree.toString();
        //     // this.router.navigate([urlWithoutParam], { queryParams: paramObj });
        //     this.refreshPage();
        // }
    }

    refreshPage() {
        var currentUrl = this.router.url.lastIndexOf("?") >= 0 ? this.router.url.substr(0, this.router.url.lastIndexOf("?")) : this.router.url;
        var queryParams = null;
        this.route.queryParams
            .subscribe(params => {
                queryParams = params;
            });
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this.router.navigate([currentUrl], { queryParams: queryParams })
        );
    }

    LuuHoatDongNhanVien(HoatDongNhanVien: HoatDongNhanVien) {
        this.authService.setPhongLamViecId(this.phongKhamHienTai.KeyId);
        this.phongKhamBenh.PhongKhamBenhId = this.phongKhamHienTai.KeyId;
        this.apiService
            .post("HoatDongNhanVien/LuuHoatDongNhanVien", this.phongKhamBenh)
            .subscribe((resultData) => {
                this.closePopupLoadingData();
                this.broadcastService.broadcast({
                    name: "ChuyenPhongThanhCong",
                    message: true,
                });

                this.refreshPage();
            },
                (err: ApiError) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                    this.closePopupLoadingData();
                });
    }

    scrollTo(element) {
        jQuery(".sidenav-content").animate({
            scrollTop: jQuery("#" + element).position().top + (this.isKhamDoan ? 60 : 85),
        });
        this.tabActive = element;
        //console.log("tabActive: ", this.tabActive)
    }

    getBenhNhanDangKham(phongKhamId: number, hangDoiId: number) {
        this.closePopupLoadingData();
        this.benhNhanHienTai = new BenhVienHangDoi();
        this.benhNhanHienTai.isShowPanelItemKhamBenh = false;
        this.benhNhanHienTai.isShowPanelItemKetLuan = false;

        this.showPopupLoadingData();
        this.apiService
            .get<BenhVienHangDoi>(
                "KhamBenh/GetYeuCauKhamBenhDangKhamTheoPhongKham?phongKhamId=" +
                phongKhamId +
                "&hangDoiId=" +
                hangDoiId + 
                "&laKhamDoan=" +
                this.isKhamDoan
            )
            .subscribe(
                (resultData) => {
                    if (resultData !== undefined && resultData != null) {
                        //BVHD-3574
                        this.LaChuyenKhoaKhamNhieu = resultData.LaDichVuKhamNhieu;

                        this.benhNhanHienTai = resultData;
                        this.maTiepNhan = this.benhNhanHienTai.YeuCauTiepNhanId;
                        // console.log(resultData)
                        //this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplate = '{"ComponentDynamics":[{"Type":4,"Id":"group","Label":"Mắt","fxFlex":"100%","fxFlexSm":"100%","groupItems":[{"Type":1,"Id":"ThiLucKhongKinh","Label":"Thị lực không kính","Value":null,"fxFlex":"20%","fxFlexSm":"20%"},{"Type":2,"Id":"ThiLucKhongKinhMatTrai","Label":"Mắt trái","Value":null,"fxFlex":"40%","fxFlexSm":"40%", "placeholder":null},{"Type":2,"Id":"ThiLucKhongKinhMatPhai","Label":"Mắt phải","Value":null,"fxFlex":"40%","fxFlexSm":"40%", "placeholder":null},{"Type":1,"Id":"NhanAp","Label":"Nhãn áp","Value":null,"fxFlex":"20%","fxFlexSm":"20%"},{"Type":2,"Id":"NhanApMatTrai","Label":"Mắt trái","Value":null,"fxFlex":"40%","fxFlexSm":"40%", "placeholder":"mmhg"},{"Type":2,"Id":"NhanApMatPhai","Label":"Mắt phải","Value":null,"fxFlex":"40%","fxFlexSm":"40%", "placeholder":"mmhg"},{"Type":1,"Id":"ThiLucCoKinh","Label":"Thị lực có kính","Value":null,"fxFlex":"20%","fxFlexSm":"20%"},{"Type":2,"Id":"ThiLucCoKinhTrai","Label":"Mắt trái","Value":null,"fxFlex":"40%","fxFlexSm":"40%", "placeholder":null},{"Type":2,"Id":"ThiLucCoKinhPhai","Label":"Mắt phải","Value":null,"fxFlex":"40%","fxFlexSm":"40%", "placeholder":null}]},{"Type":3,"Id":"TuanHoan","Label":"Tuần hoàn","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"HoHap","Label":"Hô hấp","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"TieuHoa","Label":"Tiêu hóa","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"ThanTietNieuSinhDuc","Label":"Thận - Tiết niệu - Sinh dục","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"ThanKinh","Label":"Thần kinh","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"CoXuongKhop","Label":"Cơ - Xương - Khớp","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"RangHamMat","Label":"Răng - Hàm - Mặt","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"NoiTietDinhDuong","Label":"Nội tiết - Dinh dưỡng","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"SanPhuKhoa","Label":"Sản phụ khoa","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"DaLieu","Label":"Da liễu","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true}]}';
                        this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj = JSON.parse(
                            this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplate
                        );
                        
                        this.bindDataDynamicComponent();

                        if(this.isKhamDoan)
                        {
                            this.benhNhanHienTai.YeuCauKhamBenh.IsKhamDoan = true;
                            this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(element => {
                                element.TemplateKhamCacCoQuanObj = JSON.parse(element.ThongTinKhamTheoDichVuTemplate);
                                this.bindDataDynamicComponent(element.TemplateKhamCacCoQuanObj, element.ThongTinKhamTheoDichVuData);
                            });
                        }

                        this.ganThongTinKhamTamThoi();
                        this.ganThongTinYeuCauKhamBenhPerevious();

                        this.unSelectedTab();
                        let phongBenhVienId = this.authService.getPhongLamViecId();
                        let nhanVienId = this.authService.getAccessUser().Id;
                        let yeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
                        this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                        this.isSelectedParentTabKhamBenh = true;

                        if (
                            this.benhNhanHienTai.YeuCauTiepNhan.NamSinh != null &&
                            this.benhNhanHienTai.YeuCauTiepNhan.ThangSinh != null &&
                            this.benhNhanHienTai.YeuCauTiepNhan.NgaySinh != null
                        ) {
                            var ngaySinh = new Date(
                                this.benhNhanHienTai.YeuCauTiepNhan.ThangSinh +
                                "/" +
                                this.benhNhanHienTai.YeuCauTiepNhan.NgaySinh +
                                "/" +
                                this.benhNhanHienTai.YeuCauTiepNhan.NamSinh +
                                "/"
                            );
                            this.getAge(ngaySinh, new Date());
                        }

                        this.closePopupLoadingData();
                    } else {
                        this.benhNhanHienTai = new BenhVienHangDoi();
                        this.closePopupLoadingData();
                    }
                },
                (err: ApiError) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                    this.closePopupLoadingData();
                }
            );
    }

    timKiemBenhNhan(event: any) {
        if (event.key == "Enter") {
            this.refeshDataGridHangDoi(
                this.phongKhamHienTai.KeyId,
                this.searchBenhNhan == null ? "" : this.searchBenhNhan
            );
        }
    }

    hoanThanhKham(isNhapVien: boolean = false) {
        if (
            this.authService.hasPermission(
                this.documentType,
                SecurityOperation.Update
            )
        ) {
            var self = this;
            self.validationKetLuanErrors = null;
            self.benhNhanHienTai.validationErrors = null;
            self.ref.detectChanges();
            if (
                self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator == true ||
                self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator == false
            ) {
                self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = null;
            }
            if (self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa != true && self.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa != true) {
                self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa = null;
            }

            if (!self.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham) {
                self.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham = true;
            }
            ///------------- xử lý lưu thông tin tab khám bệnh
            self.showPopupLoadingData();
            self.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = self.processDynamicComponent();

            self.apiService
                .post<any>("KhamBenh/LuuThongTinKhamBenh", self.benhNhanHienTai)
                .subscribe(
                    (resultData) => {
                        self.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;
                        self.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham = false;

                        self.benhNhanHienTai.isShowPanelItemKhamBenh = false;
                        self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs =
                            resultData.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs;
                        self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets =
                            resultData.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets;
                        self.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs =
                            resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs;
                        self.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs =
                            resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs;
                        self.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus =
                            resultData.YeuCauTiepNhan.KetQuaSinhHieus;

                        // if (resultData.YeuCauKhamBenh.IcdchinhId != 0 && resultData.YeuCauKhamBenh.IcdchinhId != null) {
                        //     self.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId =
                        //         resultData.YeuCauKhamBenh.IcdchinhId;
                        // }
                        // if (resultData.YeuCauKhamBenh.TenICDChinh != null && resultData.YeuCauKhamBenh.TenICDChinh != "") {
                        //     self.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh =
                        //         resultData.YeuCauKhamBenh.TenICDChinh;
                        // }
                        // if (resultData.YeuCauKhamBenh.GhiChuICDChinh != null && resultData.YeuCauKhamBenh.GhiChuICDChinh != "") {
                        //     self.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh =
                        //         resultData.YeuCauKhamBenh.GhiChuICDChinh;
                        // }

                        self.ganThongTinKhamTamThoi();

                        ///------------- xử lý lưu thông tin tab chẩn đoán ---> cần update lại api
                        self.apiService
                            .post<any>("KhamBenh/CapNhatThongTinQuayLaiYeuCauKhamTruoc", self.benhNhanHienTai.YeuCauKhamBenh)
                            .subscribe(
                                (resultData) => {
                                    if (isNhapVien) {
                                        self.inPhieuKhamHoanThanhKham("tuChon");
                                    } else {
                                        let dialogRefTiepTheo = self.dialog
                                            .open(LanKhamHienTaiBenhNhanTiepTheoPopupComponent, {
                                                disableClose: false,
                                                width: "600px",
                                                data: {
                                                    phongKhamHienTaiId: self.phongKhamHienTai.KeyId,
                                                    hangDoiHienTaiId: self.benhNhanHienTai.Id,
                                                    laKhamDoan: self.isKhamDoan,
                                                    searchBenhNhan: self.searchStringHangDoiHienTai
                                                },
                                            })
                                            .afterClosed()
                                            .subscribe((result) => {
                                                self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
                                                if (result == "tuChon") {
                                                    // cập nhật người bệnh hiện tại thành chờ làm chỉ định/ hoàn thành khám
                                                    self.ganThongTinYeuCauKhamBenhPerevious();
                                                    this.dialog
                                                        .open(ConfirmComponent, {
                                                            disableClose: false,
                                                            width: "500px",
                                                            data: {
                                                                Title: "Xác nhận",
                                                                Message:
                                                                    "Bạn có muốn in phiếu khám cho người bệnh này không ?",
                                                            },
                                                        })
                                                        .afterClosed()
                                                        .subscribe((res) => {
                                                            if (res == "Yes") {
                                                                self.inPhieuKhamHoanThanhKham(result);
                                                            } else {
                                                                self.apiService
                                                                    .post(
                                                                        "KhamBenh/XuLyHoanThanhCongDoanKhamHienTaiCuaBenhNhan?hangDoiHienTaiId=" +
                                                                        self.benhNhanHienTai.Id +
                                                                        "&hoanThanhKham=true"
                                                                    )
                                                                    .subscribe(
                                                                        (resultData) => {
                                                                            // clear data người bệnh hiện tại
                                                                            self.benhNhanHienTai = new BenhVienHangDoi();
                                                                            self.refreshHangDoi(
                                                                                self.phongKhamHienTai.KeyId
                                                                            );
                                                                            self.closePopupLoadingData();
                                                                        },
                                                                        (err: ApiError) => {
                                                                            self.benhNhanHienTai.validationErrors =
                                                                                err.ValidationErrors;
                                                                            if (err.Message != "Validation Failed") {
                                                                                self.notificationService.showError(
                                                                                    err.Message
                                                                                );
                                                                            }
                                                                            self.closePopupLoadingData();
                                                                        }
                                                                    );
                                                            }
                                                        });
                                                } else if (
                                                    result == "boQua" ||
                                                    result == null ||
                                                    result == 0
                                                ) {
                                                    // giữ nguyên màn hình hiện tại
                                                    this.dialog
                                                        .open(ConfirmComponent, {
                                                            disableClose: false,
                                                            width: "500px",
                                                            data: {
                                                                Title: "Xác nhận",
                                                                Message:
                                                                    "Bạn có muốn in phiếu khám cho người bệnh này không ?",
                                                            },
                                                        })
                                                        .afterClosed()
                                                        .subscribe((res) => {
                                                            if (res == "Yes") {
                                                                self.inPhieuKhamHoanThanhKham(result);
                                                            } else {
                                                                self.closePopupLoadingData();
                                                            }
                                                        });
                                                } else if (result > 0) {
                                                    // result là id hàng đợi tiếp theo
                                                    self.ganThongTinYeuCauKhamBenhPerevious();
                                                    this.dialog
                                                        .open(ConfirmComponent, {
                                                            disableClose: false,
                                                            width: "500px",
                                                            data: {
                                                                Title: "Xác nhận",
                                                                Message:
                                                                    "Bạn có muốn in phiếu khám cho người bệnh này không ?",
                                                            },
                                                        })
                                                        .afterClosed()
                                                        .subscribe((res) => {
                                                            if (res == "Yes") {
                                                                self.inPhieuKhamHoanThanhKham(result);
                                                            } else {
                                                                self.XuLyBatDauKhamBenhNhan(result, true);
                                                            }
                                                        });
                                                }
                                            });
                                    }

                                },
                                (err: ApiError) => {
                                    self.validationKetLuanErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                    self.closePopupLoadingData();
                                }
                            );
                    },
                    (err: ApiError) => {
                        self.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham = false;
                        if (!self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                            self.unSelectedTab();
                            self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                            self.notificationService.showError(
                                "Yêu cầu nhập đầy đủ các trường bắt buộc trong tab khám bệnh"
                            );
                        }
                        self.benhNhanHienTai.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                    }
                );
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    chonBenhNhanTiepTheoKhiIn(results: any) {
        let self = this;
        if (results == "tuChon") {
            self.apiService
                .post(
                    "KhamBenh/XuLyHoanThanhCongDoanKhamHienTaiCuaBenhNhan?hangDoiHienTaiId=" +
                    self.benhNhanHienTai.Id +
                    "&hoanThanhKham=true"
                )
                .subscribe(
                    () => {
                        // clear data người bệnh hiện tại
                        self.benhNhanHienTai = new BenhVienHangDoi();
                        self.refreshHangDoi(self.phongKhamHienTai.KeyId);
                        self.closePopupLoadingData();
                    },
                    (err: ApiError) => {
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                    }
                );
        } else if (results == "boQua" || results == null || results == 0) {
            self.closePopupLoadingData();
        } else if (results > 0) {
            self.XuLyBatDauKhamBenhNhan(results, true);
            // self.apiService
            //     .post(
            //         "KhamBenh/XuLyBatDauKhamBenhNhan?hangDoiDangKhamId=" +
            //         this.benhNhanHienTai.Id +
            //         "&hangDoiBatDauKhamId=" +
            //         results +
            //         "&hoanThanhKham=true"
            //     )
            //     .subscribe(
            //         () => {
            //             //get người bệnh hiện tại và refresh hàng đợi
            //             self.refreshHangDoi(self.phongKhamHienTai.KeyId);
            //             self.getBenhNhanDangKham(self.phongKhamHienTai.KeyId, results);
            //             self.isHoanThanKhamProcess = false;
            //             self.closePopupLoadingData();
            //         },
            //         (err: ApiError) => {
            //             if (err.Message != "Validation Failed") {
            //                 self.notificationService.showError(err.Message);
            //             }
            //             self.isHoanThanKhamProcess = false;
            //             self.closePopupLoadingData();
            //         }
            //     );
        }
    }

    inPhieuKhamHoanThanhKham(result: any) {
        this.phieuKhamBenhVo.YeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
        if(this.benhNhanHienTai.YeuCauKhamBenh.CoNhapVien == true){
            this.phieuKhamBenhVo.CoKhamBenhVaoVien = true;
        }
        this.phieuKhamBenhVo.CoKhamBenh = true;
        if(this.phieuKhamBenhVo.CoKhamBenh && this.phieuKhamBenhVo.CoKhamBenhVaoVien){
            this.phieuKhamBenhVo.CoHeader = true;
        }
        this.apiService.post<any>("KhamBenh/InPhieuKhamBenh", this.phieuKhamBenhVo).subscribe(
            resultData => {
                if (resultData != null) {
                    this.dialog
                        .open(PhieuKhamBenhVaoVienPopupComponent, {
                            disableClose: true,
                            width: "1000px",
                            data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
                        })
                        .afterClosed()
                        .subscribe(() => {
                            this.chonBenhNhanTiepTheoKhiIn(result);
                        });
                }
            },
            (err: ApiError) => {
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                };
                this.closePopupLoadingData();
            });
    }

    inPhieuKham() {
        var self = this;
        self.validationKetLuanErrors = [];
        self.ref.detectChanges();
        this.phieuKhamBenhVo.YeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
        this.phieuKhamBenhVo.CoKhamBenh = true;
        this.phieuKhamBenhVo.CoKhamBenhVaoVien = false;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.showPopupLoadingData();
            self.apiService.post<any>("KhamBenh/InPhieuKhamBenh", this.phieuKhamBenhVo).subscribe(
                resultData => {
                    if (resultData != null) {
                        self.closePopupLoadingData();
                        self.dialog.open(PhieuKhamBenhVaoVienPopupComponent, {
                            disableClose: true,
                            width: "1000px",
                            data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
                        });
                    }
                },
                (err: ApiError) => {
                    self.validationKetLuanErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    };
                    self.closePopupLoadingData();
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    inPhieuKhamVaoVien() {
        var self = this;
        self.validationKetLuanErrors = [];
        self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = false;
        if (self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa != true && this.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa != true) {
            self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa = null;
        }
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.benhNhanHienTai.YeuCauKhamBenh.CoInKeToa = false;
            self.apiService.post<any>("KhamBenh/LuuKetLuan", self.benhNhanHienTai.YeuCauKhamBenh).subscribe(
                (res) => {
                    self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = res.YeuCauKhamBenhICDKhacs;
                    self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
                    self.ganThongTinYeuCauKhamBenhPerevious();
                    this.phieuKhamBenhVo.YeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
                    this.phieuKhamBenhVo.CoKhamBenhVaoVien = true;
                    this.phieuKhamBenhVo.CoKhamBenh = false;
                    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
                        self.showPopupLoadingData();
                        self.apiService.post<any>("KhamBenh/InPhieuKhamBenh", this.phieuKhamBenhVo).subscribe(
                            resultData => {
                                if (resultData != null) {
                                    self.closePopupLoadingData();
                                    self.dialog.open(PhieuKhamBenhVaoVienPopupComponent, {
                                        disableClose: true,
                                        width: "1000px",
                                        data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
                                    });
                                }
                            },
                            (err: ApiError) => {
                                self.validationKetLuanErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                };
                                self.closePopupLoadingData();
                            });
                    } else {
                        self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                    }
                },
                (err: ApiError) => {
                    self.validationKetLuanErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                    //console.log(this.validationKetLuanErrors)
                    self.closePopupLoadingData();
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    batDauDoChiSoSinhTon(data: any) {
        // this.arrBenhNhanChuanBiKham.find(x => x.Id == bnId).ProgessChiSoSinhTon = true;
        this.gridChuanBiKham.gridDataSource.data.find(
            (x) => x.Id == data.Id
        ).ProgessChiSoSinhTon = true;
        this.arrDoChiSoSinhTon.push(data);
        // xử lý expand grid
        //this.gridChild.onExpandRowDetail(rowIndex);
    }

    huyDoChiSoSinhTon(bnId: number) {
        //if (!this.arrBenhNhanChuanBiKham.find(x => x.Id == bnId).IsCheckedChiSoSinhTon) {
        //var temp = this.arrBenhNhanChuanBiKham.find(x => x.Id == bnId).ChiSoSinhTon = new ChiSoSinhTon();
        //}
        //this.arrBenhNhanChuanBiKham.find(x => x.Id == bnId).ProgessChiSoSinhTon = false;
        this.gridChuanBiKham.gridDataSource.data.find(
            (x) => x.Id == bnId
        )[0] = this.arrDoChiSoSinhTon.find((x) => x.Id == bnId)[0];
        this.gridChuanBiKham.gridDataSource.data.find(
            (x) => x.Id == bnId
        ).ProgessChiSoSinhTon = false;
    }

    luuDoChiSoSinhTon(data: any) {
        //this.arrBenhNhanChuanBiKham.find(x => x.Id == data.Id).ProgessChiSoSinhTon = false;
        // xử lý lưu vào DB
    }

    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: "200px",
                height: "90px",
                data: { Title: "Đang tải dữ liệu..." },
            });
        }

    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }

    batDauKham(hangDoi: any) {
        if (
            hangDoi == undefined ||
            hangDoi == null ||
            hangDoi.Id == this.benhNhanHienTai.Id
        ) {
            return;
        }
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.showPopupLoadingData();
            if (this.benhNhanHienTai.Id != 0 && (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan || this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh)) {
                if(this.isKhamDoan)
                {
                    if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                        this.saveChangeData(hangDoi.Id);
                    }
                    else
                    {
                        this.XuLyBatDauKhamBenhNhan(hangDoi.Id);
                    }
                }
                else
                {
                    var self = this;
                    self.validationKetLuanErrors = [];
                    self.ref.detectChanges();
                    self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = false;
                    self.benhNhanHienTai.YeuCauKhamBenh.CoInKeToa = false;
                    if (self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa != true && self.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa != true) {
                        self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa = null;
                    }

                    self.apiService
                        .post<any>("KhamBenh/LuuKetLuan", self.benhNhanHienTai.YeuCauKhamBenh)
                        .subscribe(
                            (res) => {
                                self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = res.YeuCauKhamBenhICDKhacs;
                                self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
                                self.ganThongTinYeuCauKhamBenhPerevious();

                                if (self.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                                    self.benhNhanHienTai.validationErrors = null;
                                    self.ref.detectChanges();

                                    self.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = self.processDynamicComponent();
                                    self.apiService
                                        .post<any>(
                                            "KhamBenh/LuuThongTinKhamBenh",
                                            self.benhNhanHienTai
                                        )
                                        .subscribe(
                                            (resultData) => {
                                                self.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;

                                                self.benhNhanHienTai.isShowPanelItemKhamBenh = false;
                                                self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs =
                                                    resultData.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs;
                                                self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets =
                                                    resultData.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets;
                                                self.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs =
                                                    resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs;
                                                self.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs =
                                                    resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs;
                                                self.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus =
                                                    resultData.YeuCauTiepNhan.KetQuaSinhHieus;

                                                if (resultData.YeuCauKhamBenh.IcdchinhId != 0 && resultData.YeuCauKhamBenh.IcdchinhId != null) {
                                                    self.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId =
                                                        resultData.YeuCauKhamBenh.IcdchinhId;
                                                }
                                                if (resultData.YeuCauKhamBenh.TenICDChinh != null && resultData.YeuCauKhamBenh.TenICDChinh != "") {
                                                    self.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh =
                                                        resultData.YeuCauKhamBenh.TenICDChinh;
                                                }
                                                if (resultData.YeuCauKhamBenh.GhiChuICDChinh != null && resultData.YeuCauKhamBenh.GhiChuICDChinh != "") {
                                                    self.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh =
                                                        resultData.YeuCauKhamBenh.GhiChuICDChinh;
                                                }

                                                self.ganThongTinKhamTamThoi();

                                                self.XuLyBatDauKhamBenhNhan(hangDoi.Id);
                                            },
                                            (err: ApiError) => {
                                                self.benhNhanHienTai.validationErrors =
                                                    err.ValidationErrors;
                                                if (err.Message != "Validation Failed") {
                                                    self.notificationService.showError(err.Message);
                                                } else if (
                                                    err.Message == "Validation Failed" &&
                                                    !self.lstStatusSelectTabKhambenh.selectedTabKhamBenh
                                                ) {
                                                    self.unSelectedTab();
                                                    self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                                                    self.notificationService.showError(
                                                        "Yêu cầu nhập đầy đủ các trường bắt buộc trong tab khám bệnh"
                                                    );
                                                }
                                                this.closePopupLoadingData();
                                            }
                                        );
                                } else {
                                    self.XuLyBatDauKhamBenhNhan(hangDoi.Id);
                                }
                            },
                            (err: ApiError) => {
                                self.validationKetLuanErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                } else if (
                                    err.Message == "Validation Failed" &&
                                    !self.lstStatusSelectTabKhambenh.selectedTabChanDoan
                                ) {
                                    self.unSelectedTab();
                                    self.lstStatusSelectTabKhambenh.selectedTabChanDoan = true;
                                    self.notificationService.showError(
                                        "Yêu cầu nhập đầy đủ các trường bắt buộc trong tab chẩn đoán"
                                    );
                                }
                                this.closePopupLoadingData();
                            }
                        );
                }
            } else {
                this.XuLyBatDauKhamBenhNhan(hangDoi.Id);
            }
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    XuLyBatDauKhamBenhNhan(hangDoiId, hoanThanhKham = false) {
        let hangDoiInput = new HangDoiKhamBenhInputViewModel();
        hangDoiInput.HangDoiDangKhamId = this.benhNhanHienTai.Id;
        hangDoiInput.HangDoiBatDauKhamId = hangDoiId;
        hangDoiInput.HoanThanhKham = hoanThanhKham;
        hangDoiInput.LaKhamDoan = this.isKhamDoan;
        this.apiService
            .post("KhamBenh/XuLyBatDauKhamBenhNhan", hangDoiInput)
            // .post(
            //     "KhamBenh/XuLyBatDauKhamBenhNhan?hangDoiDangKhamId=" +
            //     this.benhNhanHienTai.Id +
            //     "&hangDoiBatDauKhamId=" +
            //     hangDoiId
            // )
            .subscribe(
                (resultData) => {
                    // this.refreshHangDoi(this.phongKhamHienTai.KeyId);
                    this.refeshDataGridHangDoi(this.phongKhamHienTai.KeyId, this.searchStringHangDoiHienTai);

                    // get người bệnh hiện tại
                    this.getBenhNhanDangKham(this.phongKhamHienTai.KeyId, hangDoiId);
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Bắt đầu khám",]));
                    //this.closePopupLoadingData();
                },
                (err: ApiError) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                    this.closePopupLoadingData();
                }
            );
    }

    bnVang(hangDoi: any) {
        if (
            this.authService.hasPermission(
                this.documentType,
                SecurityOperation.Update
            )
        ) {
            var self = this;
            self.dialog
                .open(ConfirmComponent, {
                    disableClose: false,
                    width: "400px",
                    data: {
                        Title: "Xác nhận",
                        Message:
                            "Bạn chắc chắn xác nhận người bệnh (Mã TN: " +
                            hangDoi.YeuCauTiepNhan.MaYeuCauTiepNhan +
                            " , Họ tên: " +
                            hangDoi.YeuCauTiepNhan.HoTen +
                            ") không có mặt ở đây hay không?",
                    },
                })
                .afterClosed()
                .subscribe((result) => {
                    if (result == "Yes") {
                        self.showPopupLoadingData();
                        // xử lý đẩy vị trí hàng đợi người bệnh ra sau
                        let hangDoiKhamBenhInputViewModel = new HangDoiKhamBenhInputViewModel();
                        hangDoiKhamBenhInputViewModel.HangDoiDangKhamId = hangDoi.Id;
                        hangDoiKhamBenhInputViewModel.PhongBenhVienId = self.phongKhamHienTai.KeyId;
                        self.apiService
                            .post("KhamBenh/XuLyBenhNhanVang", hangDoiKhamBenhInputViewModel)
                            // .post(
                            //     "KhamBenh/XuLyBenhNhanVang?hangDoiId=" +
                            //     hangDoi.Id +
                            //     "&phongBenhVienId=" +
                            //     self.phongKhamHienTai.KeyId
                            // )
                            .subscribe(
                                (resultData) => {
                                    self.benhNhanHienTai = new BenhVienHangDoi();
                                    self.getSoLuongYeuCauHienTai(self.phongKhamHienTai.KeyId);
                                    self.closePopupLoadingData();
                                },
                                (err: ApiError) => {
                                    if (err.Message != "Validation Failed") {
                                        this.notificationService.showError(err.Message);
                                    }
                                    self.closePopupLoadingData();
                                }
                            );
                    }
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    showPopupBenhNhanLamChiDinh() {
        let dialogRef = this.dialog.open(
            LanKhamHienTaiBenhNhanDangLamChiDinhPopupComponent,
            {
                disableClose: false,
                width: "1150px",
                data: this.phongKhamHienTai.KeyId,
            }
        );
        var self = this;
        dialogRef.afterClosed().subscribe((result) => {
            if (result != undefined && result != null && result != "") {
                self.apiService
                    .post(
                        "KhamBenh/XuLyChuyenBenhNhanVaoHangDoiKetLuan?hangDoiId=" + result
                    )
                    .subscribe((resultData) => {
                        self.notificationService.showSuccess(
                            CommonService.format(SystemMessage.ActionSuccessfully, [
                                "Chuyển người bệnh vào hàng đợi kết luận",
                            ])
                        );
                        self.refreshHangDoi(self.phongKhamHienTai.KeyId);
                    });
            }
        });
    }

    collapseAll() {
        this.benhNhanHienTai.isExpandPanelItemKhamBenh = false;
        this.benhNhanHienTai.isExpandPanelItemKetLuan = false;
    }
    chuyenDen(element: any, event: any, isKhamDoan:boolean =false) {
        var self = this;
        if (!(self.isKhamDoan && event.index == 0)) {
            setTimeout(function () {
                self.scrollTo(element);
            }, 100);
        }
        if (event.index == 0 || event.title == "KHÁM BỆNH") {
            self.unSelectedTab();
            self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
        }
        if (event.index == 1 || event.title == "LỊCH SỬ KHÁM") {
            self.unSelectedTab();
            self.lstStatusSelectTabKhambenh.selectedTabLichSuKham = true;
        }
        if (event.index == 2 || event.title == "CHỈ ĐỊNH") {
            self.unSelectedTab();
            self.lstStatusSelectTabKhambenh.selectedTabChiDinh = true;
        }
        if (event.index == 3 || event.title == "KQ CLS") {
            self.unSelectedTab();
            self.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = true;
        }
        
        if (event.index == 5 || event.title == "TƯỜNG TRÌNH PT/TT") {
            self.unSelectedTab();
            self.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt = true;
            self.validationKetLuanErrors = [];
        }
        if(!isKhamDoan){
            if (event.index == 4 || event.title == "CHẨN ĐOÁN") {
                self.unSelectedTab();
                self.lstStatusSelectTabKhambenh.selectedTabChanDoan = true;
                self.validationKetLuanErrors = [];
            }
        }else{
            if (event.index == 4 || event.title == "TƯ VẤN THUỐC") {
                self.unSelectedTab();
                self.lstStatusSelectTabKhambenh.selectedTabTuVanThuocKhamDoan = true;
                self.validationKetLuanErrors = [];
            }
        }
        
    }

    chonTab(element) {
        if (element == "card2") {
            this.benhNhanHienTai.isExpandPanelItemKetLuan = !this.benhNhanHienTai
                .isExpandPanelItemKetLuan;
        }
    }
    stateChange(data: Array<PanelBarItemModel>) {
        const focusedEvent: PanelBarItemModel = data.filter(
            (item) => item.focused === true
        )[0];
        if (focusedEvent.title == "KHÁM BỆNH") {
            this.benhNhanHienTai.isExpandPanelItemKhamBenh = !this.benhNhanHienTai
                .isExpandPanelItemKhamBenh;
        }
        if (focusedEvent.title == "KẾT LUẬN") {
            this.benhNhanHienTai.isExpandPanelItemKetLuan = !this.benhNhanHienTai
                .isExpandPanelItemKetLuan;
        }
    }

    getshareDataChung() {
        return this.benhNhanHienTai;
    }

    // getThongTinNhanVien() {
    //     var currentId = this.authService.getAccessUser().Id;
    //     this.apiService
    //         .get<any>("NhanVien/GetNhanVien/" + currentId)
    //         .subscribe((resultData) => {
    //             if (resultData !== undefined && resultData != null) {
    //                 this.ChucVu = resultData.TextTenQuyenHan + ":";
    //                 this.HoTen = resultData.HoTen;
    //             }
    //         })
    // }

    ganThongTinYeuCauKhamBenhPerevious() {

        //let yeuCauKhamBenhICDKhacs = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs.slice();

        const yeuCauKhamBenhICDKhacs = [];
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs.forEach(val => yeuCauKhamBenhICDKhacs.push(Object.assign({}, val)));

        this.yeuCauKhamBenhPrevious = new YeuCauKhamBenhPrevious(this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId, this.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh,
            this.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh, this.benhNhanHienTai.YeuCauKhamBenh.CoTaiKham,
            this.benhNhanHienTai.YeuCauKhamBenh.NgayTaiKham, this.benhNhanHienTai.YeuCauKhamBenh.GhiChuTaiKham,
            this.benhNhanHienTai.YeuCauKhamBenh.CoNhapVien,
            this.benhNhanHienTai.YeuCauKhamBenh.CoChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.KhoaPhongNhapVienId,
            this.benhNhanHienTai.YeuCauKhamBenh.TenKhoaPhongNhapVien, this.benhNhanHienTai.YeuCauKhamBenh.TinhTrangBenhNhanChuyenVien,
            this.benhNhanHienTai.YeuCauKhamBenh.LoaiLyDoChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.ThoiDiemChuyenVien,
            this.benhNhanHienTai.YeuCauKhamBenh.PhuongTienChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.NhanVienHoTongChuyenVienId,
            this.benhNhanHienTai.YeuCauKhamBenh.HoTenNhanVienHoTong, this.benhNhanHienTai.YeuCauKhamBenh.LyDoNhapVien,
            this.benhNhanHienTai.YeuCauKhamBenh.BenhVienChuyenVienId, this.benhNhanHienTai.YeuCauKhamBenh.TenBenhVienChuyenVien,
            this.benhNhanHienTai.YeuCauKhamBenh.LyDoChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.CoTuVong,
            this.benhNhanHienTai.YeuCauKhamBenh.TomTatKetQuaCLS, this.benhNhanHienTai.YeuCauKhamBenh.CachGiaiQuyet, this.benhNhanHienTai.YeuCauKhamBenh.GhiChu,
            this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.YeuCauKhamBenhId, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.LoaiDichVuKyThuat,
            this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DichVuKyThuatBenhVienId, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomGiaDichVuKyThuatBenhVienId,
            this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.MaDichVu, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.MaGiaDichVu,
            this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenDichVu, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenDichVuHienThi,
            this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomChiPhi, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.Gia,
            this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.SoLan, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DuocHuongBaoHiem,
            this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TrangThai, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TrangThaiThanhToan,
            this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhanVienChiDinhId, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemChiDinh,
            this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemDangKy, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenNhomDichVu,
            this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomDichVuBenhVienId, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DieuTriNgoaiTru,
            this.benhNhanHienTai.YeuCauKhamBenh.CoDieuTriNgoaiTru, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemBatDauDieuTri,
            this.benhNhanHienTai.YeuCauKhamBenh.CoKeToa, this.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa,
            this.benhNhanHienTai.YeuCauKhamBenh.KetQuaXetNghiemCLS, this.benhNhanHienTai.YeuCauKhamBenh.PhuongPhapTrongDieuTri,
            yeuCauKhamBenhICDKhacs);
    }


    cancelChangeDataKetLuan() {
        this.validationKetLuanErrors = [];
        this.ref.detectChanges();

        this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId = this.yeuCauKhamBenhPrevious.IcdchinhId;
        this.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh = this.yeuCauKhamBenhPrevious.TenICDChinh;
        this.benhNhanHienTai.YeuCauKhamBenh.CoTaiKham = this.yeuCauKhamBenhPrevious.CoTaiKham;
        this.benhNhanHienTai.YeuCauKhamBenh.NgayTaiKham = this.yeuCauKhamBenhPrevious.NgayTaiKham;
        this.benhNhanHienTai.YeuCauKhamBenh.GhiChuTaiKham = this.yeuCauKhamBenhPrevious.GhiChuTaiKham;
        this.benhNhanHienTai.YeuCauKhamBenh.CoNhapVien = this.yeuCauKhamBenhPrevious.CoNhapVien;
        this.benhNhanHienTai.YeuCauKhamBenh.CoChuyenVien = this.yeuCauKhamBenhPrevious.CoChuyenVien;
        this.benhNhanHienTai.YeuCauKhamBenh.KhoaPhongNhapVienId = this.yeuCauKhamBenhPrevious.KhoaPhongNhapVienId;
        this.benhNhanHienTai.YeuCauKhamBenh.TenKhoaPhongNhapVien = this.yeuCauKhamBenhPrevious.TenKhoaPhongNhapVien;
        this.benhNhanHienTai.YeuCauKhamBenh.TinhTrangBenhNhanChuyenVien = this.yeuCauKhamBenhPrevious.TinhTrangBenhNhanChuyenVien;
        this.benhNhanHienTai.YeuCauKhamBenh.LoaiLyDoChuyenVien = this.yeuCauKhamBenhPrevious.LoaiLyDoChuyenVien;
        this.benhNhanHienTai.YeuCauKhamBenh.ThoiDiemChuyenVien = this.yeuCauKhamBenhPrevious.ThoiDiemChuyenVien;
        this.benhNhanHienTai.YeuCauKhamBenh.PhuongTienChuyenVien = this.yeuCauKhamBenhPrevious.PhuongTienChuyenVien;
        this.benhNhanHienTai.YeuCauKhamBenh.NhanVienHoTongChuyenVienId = this.yeuCauKhamBenhPrevious.NhanVienHoTongChuyenVienId;
        this.benhNhanHienTai.YeuCauKhamBenh.HoTenNhanVienHoTong = this.yeuCauKhamBenhPrevious.HoTenNhanVienHoTong;
        this.benhNhanHienTai.YeuCauKhamBenh.LyDoNhapVien = this.yeuCauKhamBenhPrevious.LyDoNhapVien;
        this.benhNhanHienTai.YeuCauKhamBenh.BenhVienChuyenVienId = this.yeuCauKhamBenhPrevious.BenhVienChuyenVienId;
        this.benhNhanHienTai.YeuCauKhamBenh.TenBenhVienChuyenVien = this.yeuCauKhamBenhPrevious.TenBenhVienChuyenVien;
        this.benhNhanHienTai.YeuCauKhamBenh.LyDoChuyenVien = this.yeuCauKhamBenhPrevious.LyDoChuyenVien;
        this.benhNhanHienTai.YeuCauKhamBenh.KetQuaXetNghiemCLS = this.yeuCauKhamBenhPrevious.KetQuaXetNghiemCLS;
        this.benhNhanHienTai.YeuCauKhamBenh.PhuongPhapTrongDieuTri = this.yeuCauKhamBenhPrevious.PhuongPhapTrongDieuTri;
        this.benhNhanHienTai.YeuCauKhamBenh.CoTuVong = this.yeuCauKhamBenhPrevious.CoTuVong;
        this.benhNhanHienTai.YeuCauKhamBenh.TomTatKetQuaCLS = this.yeuCauKhamBenhPrevious.TomTatKetQuaCLS;
        this.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh = this.yeuCauKhamBenhPrevious.GhiChuICDChinh;
        this.benhNhanHienTai.YeuCauKhamBenh.CachGiaiQuyet = this.yeuCauKhamBenhPrevious.CachGiaiQuyet;
        this.benhNhanHienTai.YeuCauKhamBenh.GhiChu = this.yeuCauKhamBenhPrevious.GhiChu;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomChiPhi = this.yeuCauKhamBenhPrevious.NhomChiPhi;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.Gia = this.yeuCauKhamBenhPrevious.Gia;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.SoLan = this.yeuCauKhamBenhPrevious.SoLan;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DuocHuongBaoHiem = this.yeuCauKhamBenhPrevious.DuocHuongBaoHiem;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TrangThai = this.yeuCauKhamBenhPrevious.TrangThai;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TrangThaiThanhToan = this.yeuCauKhamBenhPrevious.TrangThaiThanhToan;
        this.benhNhanHienTai.YeuCauKhamBenh.NhanVienChiDinhId = this.yeuCauKhamBenhPrevious.NhanVienChiDinhId;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemChiDinh = this.yeuCauKhamBenhPrevious.ThoiDiemChiDinh;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemDangKy = this.yeuCauKhamBenhPrevious.ThoiDiemDangKy;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenNhomDichVu = this.yeuCauKhamBenhPrevious.TenNhomDichVu;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomDichVuBenhVienId = this.yeuCauKhamBenhPrevious.NhomDichVuBenhVienId;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DieuTriNgoaiTru = this.yeuCauKhamBenhPrevious.DieuTriNgoaiTru;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemBatDauDieuTri = this.yeuCauKhamBenhPrevious.ThoiDiemBatDauDieuTri;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenDichVuHienThi = this.yeuCauKhamBenhPrevious.TenDichVuHienThi;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DichVuKyThuatBenhVienId = this.yeuCauKhamBenhPrevious.DichVuKyThuatBenhVienId;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.LoaiDichVuKyThuat = this.yeuCauKhamBenhPrevious.LoaiDichVuKyThuat;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.YeuCauKhamBenhId = this.yeuCauKhamBenhPrevious.YeuCauKhamBenhId;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.YeuCauTiepNhanId = this.yeuCauKhamBenhPrevious.YeuCauTiepNhanId;
        this.benhNhanHienTai.YeuCauKhamBenh.CoDieuTriNgoaiTru = this.yeuCauKhamBenhPrevious.CoDieuTriNgoaiTru;

        //this.benhNhanHienTai.YeuCauKhamBenh.CoKeToa = this.yeuCauKhamBenhPrevious.CoKeToa;
        this.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa = this.yeuCauKhamBenhPrevious.KhongKeToa;


        const yeuCauKhamBenhICDKhacs = [];
        this.yeuCauKhamBenhPrevious.YeuCauKhamBenhICDKhacs.forEach(val => yeuCauKhamBenhICDKhacs.push(Object.assign({}, val)));
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = yeuCauKhamBenhICDKhacs;

        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = this.yeuCauKhamBenhPrevious.YeuCauKhamBenhICDKhacs.slice();

        this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
    }

    luuKetLuan() {
        var self = this;
        self.validationKetLuanErrors = [];
        self.ref.detectChanges();
        // if (this.benhNhanHienTai.YeuCauKhamBenh.CoNhapVien == true) {
        //     self.hoanThanhKham(true);
        // } else {
        self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = false;
        if (self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa != true && this.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa != true) {
            self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa = null;
        }
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.loadingPage();
            self.benhNhanHienTai.YeuCauKhamBenh.CoInKeToa = false;
            self.apiService.post<any>("KhamBenh/LuuKetLuan", self.benhNhanHienTai.YeuCauKhamBenh).subscribe(
                (res) => {
                    //console.log("resultKetLuan: ", res)
                    self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = res.YeuCauKhamBenhICDKhacs;
                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                    self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
                    self.ganThongTinYeuCauKhamBenhPerevious();
                    self.closePopupLoadingData();
                },
                (err: ApiError) => {
                    self.validationKetLuanErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                    //console.log(this.validationKetLuanErrors)
                    self.closePopupLoadingData();
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
        // }

    }

    ganThongTinKhamTamThoi() {
        // let yeuCauKhamBenhKhamBoPhanKhacs = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs.slice();
        // let yeuCauKhamBenhChanDoanPhanBiets = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets.slice();
        const yeuCauKhamBenhKhamBoPhanKhacs = [];
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs.forEach(val => yeuCauKhamBenhKhamBoPhanKhacs.push(Object.assign({}, val)));

        const yeuCauKhamBenhChanDoanPhanBiets = [];
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets.forEach(val => yeuCauKhamBenhChanDoanPhanBiets.push(Object.assign({}, val)));

        //let ketQuaSinhHieus = Object.assign([], this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus); //this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus.slice();

        //trường hợp sửa data đã lưu trực tiếp trên grid
        const ketQuaSinhHieus = [];
        this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus.forEach(val => ketQuaSinhHieus.push(Object.assign({}, val)));


        // let khamBenhBenhNhanDiUngThuocs = this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs.slice();
        // let khamBenhBenhNhanTienSuBenhs = this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs.slice();
        // let yeuCauKhamBenhBoPhanTonThuongs = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhBoPhanTonThuongs.slice();
        const khamBenhBenhNhanDiUngThuocs = [];
        this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs.forEach(val => khamBenhBenhNhanDiUngThuocs.push(Object.assign({}, val)));

        const khamBenhBenhNhanTienSuBenhs = [];
        this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs.forEach(val => khamBenhBenhNhanTienSuBenhs.push(Object.assign({}, val)));

        const yeuCauKhamBenhBoPhanTonThuongs = [];
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhBoPhanTonThuongs.forEach(val => yeuCauKhamBenhBoPhanTonThuongs.push(Object.assign({}, val)));


        let ThongTinKhamTheoDichVuTemplateObj = JSON.stringify(
            this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj
        );

        ketQuaSinhHieus.forEach(element => {
            if (element.IsUpdate) {
                element.IsUpdate = false;
            }
        });

        // khám đoàn
        const templateDichVuKhamSucKhoes = [];
        if (this.isKhamDoan) {
            this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(val => {
                var newObj = new KhamBenhTemplateDichVuKhamSucKhoe(
                    val.YeuCauKhamBenhId,
                    val.ChuyenKhoaKhamSucKhoe,
                    val.TenChuyenKhoa,
                    val.ThongTinKhamTheoDichVuTemplate,
                    { "ComponentDynamics": [] },
                    val.ThongTinKhamTheoDichVuData,
                    val.IsDaKham,
                    val.IsDungChuyenKhoaLogin);
                val.TemplateKhamCacCoQuanObj.ComponentDynamics.forEach(element => {
                    newObj.TemplateKhamCacCoQuanObj.ComponentDynamics.push(Object.assign({}, element));
                });
                templateDichVuKhamSucKhoes.push(newObj);
            });
        }

        this.thongTinKhamTemp = new ThongTinKhamPrevious(
            //BVHD-3706
            // this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan,
            this.benhNhanHienTai.YeuCauKhamBenh.TrieuChungTiepNhan,
            
            this.benhNhanHienTai.YeuCauKhamBenh.BenhSu,
            this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanCuaNoiGioiThieu,
            this.benhNhanHienTai.YeuCauKhamBenh.KhamToanThan,
            this.benhNhanHienTai.YeuCauKhamBenh.TuanHoan,
            this.benhNhanHienTai.YeuCauKhamBenh.HoHap,
            this.benhNhanHienTai.YeuCauKhamBenh.TieuHoa,
            this.benhNhanHienTai.YeuCauKhamBenh.ThanTietNieuSinhDuc,
            this.benhNhanHienTai.YeuCauKhamBenh.ThanKinh,
            this.benhNhanHienTai.YeuCauKhamBenh.CoXuongKhop,
            this.benhNhanHienTai.YeuCauKhamBenh.TaiMuiHong,
            this.benhNhanHienTai.YeuCauKhamBenh.RangHamMat,
            this.benhNhanHienTai.YeuCauKhamBenh.NoiTietDinhDuong,
            this.benhNhanHienTai.YeuCauKhamBenh.SanPhuKhoa,
            this.benhNhanHienTai.YeuCauKhamBenh.DaLieu,
            this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoICDId,
            this.benhNhanHienTai.YeuCauKhamBenh.TenChanDoanSoBoICD,
            this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoGhiChu,
            ThongTinKhamTheoDichVuTemplateObj,
            yeuCauKhamBenhKhamBoPhanKhacs,
            yeuCauKhamBenhChanDoanPhanBiets,
            ketQuaSinhHieus,
            khamBenhBenhNhanDiUngThuocs,
            khamBenhBenhNhanTienSuBenhs,
            yeuCauKhamBenhBoPhanTonThuongs,
            templateDichVuKhamSucKhoes,
            null,
            this.benhNhanHienTai.YeuCauKhamBenh.NoiDungKhamBenh
        );
    }

    cancelChangeData() {
        this.benhNhanHienTai.validationErrors = null;
        this.ref.detectChanges();

        //BVHD-3706
        // this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan = this.thongTinKhamTemp.TrieuChungTiepNhan;
        this.benhNhanHienTai.YeuCauKhamBenh.TrieuChungTiepNhan = this.thongTinKhamTemp.TrieuChungTiepNhan;

        this.benhNhanHienTai.YeuCauKhamBenh.BenhSu = this.thongTinKhamTemp.BenhSu;
        this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanCuaNoiGioiThieu = this.thongTinKhamTemp.ChanDoanCuaNoiGioiThieu;

        this.benhNhanHienTai.YeuCauKhamBenh.KhamToanThan = this.thongTinKhamTemp.KhamToanThan;
        this.benhNhanHienTai.YeuCauKhamBenh.TuanHoan = this.thongTinKhamTemp.TuanHoan;
        this.benhNhanHienTai.YeuCauKhamBenh.HoHap = this.thongTinKhamTemp.HoHap;
        this.benhNhanHienTai.YeuCauKhamBenh.TieuHoa = this.thongTinKhamTemp.TieuHoa;
        this.benhNhanHienTai.YeuCauKhamBenh.ThanTietNieuSinhDuc = this.thongTinKhamTemp.ThanTietNieuSinhDuc;

        this.benhNhanHienTai.YeuCauKhamBenh.ThanKinh = this.thongTinKhamTemp.ThanKinh;
        this.benhNhanHienTai.YeuCauKhamBenh.CoXuongKhop = this.thongTinKhamTemp.CoXuongKhop;
        this.benhNhanHienTai.YeuCauKhamBenh.TaiMuiHong = this.thongTinKhamTemp.TaiMuiHong;
        this.benhNhanHienTai.YeuCauKhamBenh.RangHamMat = this.thongTinKhamTemp.RangHamMat;
        this.benhNhanHienTai.YeuCauKhamBenh.NoiTietDinhDuong = this.thongTinKhamTemp.NoiTietDinhDuong;
        this.benhNhanHienTai.YeuCauKhamBenh.SanPhuKhoa = this.thongTinKhamTemp.SanPhuKhoa;
        this.benhNhanHienTai.YeuCauKhamBenh.DaLieu = this.thongTinKhamTemp.DaLieu;
        this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoICDId = this.thongTinKhamTemp.ChanDoanSoBoICDId;
        this.benhNhanHienTai.YeuCauKhamBenh.TenChanDoanSoBoICD = this.thongTinKhamTemp.TenChanDoanSoBoICD;
        this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoGhiChu = this.thongTinKhamTemp.ChanDoanSoBoGhiChu;
        this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj = JSON.parse(
            this.thongTinKhamTemp.ThongTinKhamTheoDichVuTemplateObj
        );

        // this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs = this.thongTinKhamTemp.YeuCauKhamBenhKhamBoPhanKhacs.slice();
        // this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets = this.thongTinKhamTemp.YeuCauKhamBenhChanDoanPhanBiets.slice();
        const yeuCauKhamBenhKhamBoPhanKhacs = [];
        this.thongTinKhamTemp.YeuCauKhamBenhKhamBoPhanKhacs.forEach(val => yeuCauKhamBenhKhamBoPhanKhacs.push(Object.assign({}, val)));
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs = yeuCauKhamBenhKhamBoPhanKhacs;

        const yeuCauKhamBenhChanDoanPhanBiets = [];
        this.thongTinKhamTemp.YeuCauKhamBenhChanDoanPhanBiets.forEach(val => yeuCauKhamBenhChanDoanPhanBiets.push(Object.assign({}, val)));
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets = yeuCauKhamBenhChanDoanPhanBiets;


        //this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus = this.thongTinKhamTemp.KetQuaSinhHieus.slice();
        // trường hợp sửa data đã lưu trực tiếp trên grid
        const ketQuaSinhHieus = [];
        this.thongTinKhamTemp.KetQuaSinhHieus.forEach(val => ketQuaSinhHieus.push(Object.assign({}, val)));
        this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus = ketQuaSinhHieus;


        // this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs = this.thongTinKhamTemp.KhamBenhBenhNhanDiUngThuocs.slice();
        // this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs = this.thongTinKhamTemp.KhamBenhBenhNhanTienSuBenhs.slice();
        // this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhBoPhanTonThuongs = this.thongTinKhamTemp.YeuCauKhamBenhBoPhanTonThuongs.slice();
        const khamBenhBenhNhanDiUngThuocs = [];
        this.thongTinKhamTemp.KhamBenhBenhNhanDiUngThuocs.forEach(val => khamBenhBenhNhanDiUngThuocs.push(Object.assign({}, val)));
        this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs = khamBenhBenhNhanDiUngThuocs;

        const khamBenhBenhNhanTienSuBenhs = [];
        this.thongTinKhamTemp.KhamBenhBenhNhanTienSuBenhs.forEach(val => khamBenhBenhNhanTienSuBenhs.push(Object.assign({}, val)));
        this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs = khamBenhBenhNhanTienSuBenhs;

        const yeuCauKhamBenhBoPhanTonThuongs = [];
        this.thongTinKhamTemp.YeuCauKhamBenhBoPhanTonThuongs.forEach(val => yeuCauKhamBenhBoPhanTonThuongs.push(Object.assign({}, val)));
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhBoPhanTonThuongs = yeuCauKhamBenhBoPhanTonThuongs;

        //khám đoàn
        // const templateDichVuKhamSucKhoes = [];
        // this.thongTinKhamTemp.TemplateDichVuKhamSucKhoes.forEach(val => templateDichVuKhamSucKhoes.push(Object.assign({}, val)));
        // this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes = templateDichVuKhamSucKhoes.slice();
        const templateDichVuKhamSucKhoes = [];
        if (this.isKhamDoan) {
            this.thongTinKhamTemp.TemplateDichVuKhamSucKhoes.forEach(val => {
                var newObj = new KhamBenhTemplateDichVuKhamSucKhoe(
                    val.YeuCauKhamBenhId,
                    val.ChuyenKhoaKhamSucKhoe,
                    val.TenChuyenKhoa,
                    val.ThongTinKhamTheoDichVuTemplate,
                    { "ComponentDynamics": [] },
                    val.ThongTinKhamTheoDichVuData,
                    val.IsDaKham,
                    val.IsDungChuyenKhoaLogin);
                val.TemplateKhamCacCoQuanObj.ComponentDynamics.forEach(element => {
                    newObj.TemplateKhamCacCoQuanObj.ComponentDynamics.push(Object.assign({}, element));
                });
                templateDichVuKhamSucKhoes.push(newObj);
            });
        }
        this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes = templateDichVuKhamSucKhoes.slice();

        //BVHD-3574
        this.benhNhanHienTai.YeuCauKhamBenh.NoiDungKhamBenh = this.thongTinKhamTemp.NoiDungKhamBenh;

        this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;
    }

    saveChangeData(hangDoiId: number = null, ignoreCheckValidPhanLoaiSucKhoeId: boolean = false) {
        if (
            this.authService.hasPermission(
                this.documentType,
                SecurityOperation.Update
            )
        ) {
            this.benhNhanHienTai.validationErrors = null;
            this.ref.detectChanges();

            this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = this.processDynamicComponent();
            if(ignoreCheckValidPhanLoaiSucKhoeId)
            {
                // biến IsDuChuyenKhoaKhamSucKhoeChinh chỉ dùng để lưu, hoàn thành khám ở khám đoàn tất cả => vì có kết hợp chức năng kết luận
                // còn lưu, hoàn thành khám từng dv khám KSK thì ko cần check phân loại
                this.benhNhanHienTai.YeuCauTiepNhan.IsDuChuyenKhoaKhamSucKhoeChinh = false;
            }
            this.loadingPage();
            this.apiService
                .post<any>("KhamBenh/LuuThongTinKhamBenh", this.benhNhanHienTai)
                .subscribe(
                    (resultData) => {
                        this.notificationService.showSuccess(
                            CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"])
                        );

                        this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;

                        this.benhNhanHienTai.isShowPanelItemKhamBenh = false;
                        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs =
                            resultData.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs;
                        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets =
                            resultData.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets;
                        this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs =
                            resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs;
                        this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs =
                            resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs;
                        this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus =
                            resultData.YeuCauTiepNhan.KetQuaSinhHieus;

                        if (resultData.YeuCauKhamBenh.IcdchinhId != 0 && resultData.YeuCauKhamBenh.IcdchinhId != null) {
                            this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId =
                                resultData.YeuCauKhamBenh.IcdchinhId;
                        }
                        if (resultData.YeuCauKhamBenh.TenICDChinh != null && resultData.YeuCauKhamBenh.TenICDChinh != "") {
                            this.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh =
                                resultData.YeuCauKhamBenh.TenICDChinh;
                        }
                        if (resultData.YeuCauKhamBenh.GhiChuICDChinh != null && resultData.YeuCauKhamBenh.GhiChuICDChinh != "") {
                            this.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh =
                                resultData.YeuCauKhamBenh.GhiChuICDChinh;
                        }

                        this.ganThongTinKhamTamThoi();
                        if(hangDoiId != null)
                        {
                            this.XuLyBatDauKhamBenhNhan(hangDoiId);
                        }
                        else
                        {
                            this.closePopupLoadingData();
                        }
                    },
                    (err: ApiError) => {
                        if (!this.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                            this.unSelectedTab();
                            this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                            this.notificationService.showError(
                                "Yêu cầu nhập đầy đủ các trường bắt buộc trong tab khám bệnh"
                            );
                        }
                        this.benhNhanHienTai.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                        this.closePopupLoadingData();
                    }
                );
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }


    loadingPage() {
        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }

    @HostListener("document:keydown", ["$event"])
    keyEvent(event: KeyboardEvent) {
        var self = this;

        if (self.benhNhanHienTai.Id != 0 && self.isSelectedParentTabKhamBenh) {
            // kiểm tra lưu // ctr + s
            if (event.ctrlKey && event.keyCode == 83) {
                if (self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                    if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                        event.preventDefault();
                        if (this.dialog.openDialogs.length > 0) {
                            return;
                        }
                        this.saveChangeData();
                    } else if (!this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                        event.preventDefault();
                    }
                }
                //KẾT LUẬN
                else if (self.lstStatusSelectTabKhambenh.selectedTabChanDoan) {
                    if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan) {
                        event.preventDefault();
                        if (this.dialog.openDialogs.length > 0) {
                            return;
                        }
                        this.luuKetLuan();
                    } else if (!this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan) {
                        event.preventDefault();
                    }
                }

                // tường trình pt/tt
                else if (self.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt) {
                    event.preventDefault();
                    if (this.dialog.openDialogs.length > 0) {
                        return;
                    }
                    if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangePhauThuat) {
                        self.onSaveTuongTrinh();
                    }
                }
            }

            // esc
            if (self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                // kiểm tra hủy
                if (
                    event.keyCode == 27 &&
                    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh
                ) {
                    event.preventDefault();
                    this.cancelChangeData();
                } else if (
                    event.keyCode == 27 &&
                    !this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh
                ) {
                    event.preventDefault();
                }
            } else if (self.lstStatusSelectTabKhambenh.selectedTabChanDoan) {
                if (
                    event.keyCode == 27 &&
                    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan
                ) {
                    event.preventDefault();
                    this.cancelChangeDataKetLuan();
                } else if (
                    event.keyCode == 27 &&
                    !this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan
                ) {
                    event.preventDefault();
                }
            } else if (self.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt) {
                // tường trình pt/tt

                // tslint:disable-next-line: deprecation
                if (
                    event.keyCode === 27 &&
                    this.benhNhanHienTai.YeuCauKhamBenh.IsChangePhauThuat
                ) {
                    event.preventDefault();
                    self.onResetTuongTrinh();
                } else if (
                    event.keyCode === 27 &&
                    !this.benhNhanHienTai.YeuCauKhamBenh.IsChangePhauThuat
                ) {
                    event.preventDefault();
                }
            }

            // ctrl + f1
            let kendoTab = "card";
            if (event.ctrlKey && event.keyCode == 112) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                    if(!self.isKhamDoan)
                    {
                        self.scrollTo(kendoTab);
                    }
                }, 100);
            }

            // ctrl + f2
            if (event.ctrlKey && event.keyCode == 113) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    self.lstStatusSelectTabKhambenh.selectedTabLichSuKham = true;
                    self.scrollTo(kendoTab);
                }, 100);
            }

            // ctrl + f3
            if (event.ctrlKey && event.keyCode == 114) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    self.lstStatusSelectTabKhambenh.selectedTabChiDinh = true;
                    self.scrollTo(kendoTab);
                }, 100);
            }

            // ctrl + f5
            if (event.ctrlKey && event.keyCode == 116) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    self.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = true;
                    self.scrollTo(kendoTab);
                }, 100);
            }

            // ctrl + f6
            if (event.ctrlKey && event.keyCode == 117) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    if(!self.isKhamDoan)
                    {
                        self.lstStatusSelectTabKhambenh.selectedTabChanDoan = true;
                    }
                    else
                    {
                        self.lstStatusSelectTabKhambenh.selectedTabTuVanThuocKhamDoan = true;
                    }
                    self.scrollTo(kendoTab);
                }, 100);
            }

            // ctrl + f7
            // if (event.ctrlKey && event.keyCode == 118) {
            //     event.preventDefault();
            //     setTimeout(function () {
            //         self.unSelectedTab();
            //         self.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt = true;
            //         self.scrollTo(kendoTab);
            //     }, 100);
            // }

            // ctrl + T
            // if (event.ctrlKey && event.keyCode == 39) {
            //     if (self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
            //         event.preventDefault();
            //         self.unSelectedTab();
            //         self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
            //         self.bnTiepTheo();
            //     }
            //     else {
            //         event.preventDefault();
            //     }
            // }

            // ctrl + p
            if (event.ctrlKey && event.keyCode == 80) {
                event.preventDefault();
            }

            // ctrl + H

            if (event.ctrlKey && event.keyCode == 72) {
                if (self.lstStatusSelectTabKhambenh.selectedTabChanDoan && self.benhNhanHienTai.YeuCauKhamBenh.CoDieuTriNgoaiTru != true){
                    event.preventDefault();
                    if (this.dialog.openDialogs.length > 0) {
                        return;
                    }
                    //self.hoanThanhKham();
                    self.kiemTraDichVuChuaThucHien();
                }
                else if(self.isKhamDoan && self.lstStatusSelectTabKhambenh.selectedTabKhamBenh){
                    event.preventDefault();
                    if (this.dialog.openDialogs.length > 0) {
                        return;
                    }
                    //this.luuVaHoanThanhKhamDoan();
                    self.kiemTraDichVuChuaThucHien(true);
                }
                else {
                    event.preventDefault();
                }
            }
        } else {
            if (
                event.ctrlKey &&
                (event.keyCode == 83 ||
                    event.keyCode == 27 ||
                    event.keyCode == 112 ||
                    event.keyCode == 113 ||
                    event.keyCode == 114 ||
                    event.keyCode == 115 ||
                    event.keyCode == 116 ||
                    event.keyCode == 117 ||
                    event.keyCode == 39 ||
                    event.keyCode == 80 ||
                    event.keyCode == 72)
            ) {
                event.preventDefault();
            }
        }

        if (self.isSelectedParentTabKhamBenh) {
            // scan
            if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
                this.isScanF1 = true;
                event.preventDefault();
                this.QuetMaQRCodeClick();
            }
        }
    }
    huy() {
        this.cancelChangeDataKetLuan();
    }

    processDynamicComponent(thongTinTempLateObj: any = null) {
        let dataKhamTheoTemplate: any;
        let lstDataKhamTheoTemplate: any[] = [];
        if(this.isKhamDoan)
        {
            let tempplate = this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.find(x => x.IsDungChuyenKhoaLogin);
            if(tempplate != null)
            {
                this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj 
                    = tempplate.TemplateKhamCacCoQuanObj != null && tempplate.TemplateKhamCacCoQuanObj != "" ? Object.assign({}, tempplate.TemplateKhamCacCoQuanObj) : null;
            }
        }
        let thongTinKhamTheoDichVuTemplateObj = thongTinTempLateObj == null ? this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj : thongTinTempLateObj;
        // console.log('processDynamicComponent', thongTinKhamTheoDichVuTemplateObj);

        if (
            thongTinKhamTheoDichVuTemplateObj !== null
        ) {
            thongTinKhamTheoDichVuTemplateObj.ComponentDynamics.forEach(
                (item) => {
                    if (
                        item.groupItems != undefined &&
                        item.groupItems != null &&
                        item.groupItems.length > 0
                    ) {
                        item.groupItems.forEach((element) => {
                            if (element.Value != undefined && element.Value !== null) {
                                dataKhamTheoTemplate = {
                                    Id: element.Id,
                                    Value: element.Value,
                                };
                                lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
                            }
                        });
                    } else if (item.Value != undefined && item.Value !== null) {
                        dataKhamTheoTemplate = {
                            Id: item.Id,
                            Value: item.Value,
                        };
                        lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
                    }
                }
            );

            let strLstDataKhamTheoTemplate = JSON.stringify(lstDataKhamTheoTemplate);
            let saveTemplate =
                '{"DataKhamTheoTemplate": ' + strLstDataKhamTheoTemplate + "}";
            return saveTemplate;
        }
        return null;
    }

    bindDataDynamicComponent(thongTinTempLateObj: any = null, thongTinDataObj: any = null) {
        if (this.isKhamDoan) {
            let tempplate = this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.find(x => x.IsDungChuyenKhoaLogin);
            if(tempplate != null)
            {
                this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj 
                    = tempplate.TemplateKhamCacCoQuanObj != null && tempplate.TemplateKhamCacCoQuanObj != "" ? Object.assign({}, tempplate.TemplateKhamCacCoQuanObj) : null;
                this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = tempplate.ThongTinKhamTheoDichVuData;
            }
        }
        let strData = thongTinDataObj == null ? this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData : thongTinDataObj;
        let thongTinKhamTheoDichVuTemplateObj = thongTinTempLateObj == null ? this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj : thongTinTempLateObj;
        if (strData != undefined && strData != null) {
            let dataObj = JSON.parse(strData);
            let itemTemp = null;
            if (thongTinKhamTheoDichVuTemplateObj !== null) {
                thongTinKhamTheoDichVuTemplateObj.ComponentDynamics.forEach(
                    (item) => {
                        if (
                            item.groupItems != undefined &&
                            item.groupItems != null &&
                            item.groupItems.length > 0
                        ) {
                            item.groupItems.forEach((element) => {
                                itemTemp = dataObj.DataKhamTheoTemplate.find(
                                    (x) => x.Id == element.Id
                                );
                                if (itemTemp != null) {
                                    element.Value = itemTemp.Value;
                                }
                            });
                        } else {
                            itemTemp = dataObj.DataKhamTheoTemplate.find(
                                (x) => x.Id == item.Id
                            );
                            if (itemTemp != null) {
                                item.Value = itemTemp.Value;
                            }
                        }
                    }
                );
            }
        }
    }

    unSelectedTab() {
        this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = false;
        this.lstStatusSelectTabKhambenh.selectedTabLichSuKham = false;
        this.lstStatusSelectTabKhambenh.selectedTabChiDinh = false;
        this.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = false;
        this.lstStatusSelectTabKhambenh.selectedTabChanDoan = false;
        this.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt = false;
        this.lstStatusSelectTabKhambenh.selectedTabTuVanThuocKhamDoan = false;
    }

    timeoutSearchChange: any;
    searchChange(event) {
        var self = this;
        if (event != null && typeof event == "string" && event.endsWith("@")) {
            self.timeoutSearchChange = setTimeout(function () {
                self.modelQRCode = event;
                self.changeQR(self.modelQRCode);
            }, 10);
        }
        else if (event == null || event == "") {
            this.modelQRCode = null;
            this.refeshDataGridHangDoi(this.phongKhamHienTai.KeyId);
        }
    }

    getAge(date_1, date_2) {
        // //convert to UTC
        // let date2_UTC = new Date(
        //     Date.UTC(
        //         date_2.getUTCFullYear(),
        //         date_2.getUTCMonth(),
        //         date_2.getUTCDate()
        //     )
        // );
        // let date1_UTC = new Date(
        //     Date.UTC(
        //         date_1.getUTCFullYear(),
        //         date_1.getUTCMonth(),
        //         date_1.getUTCDate()
        //     )
        // );

        let yAppendix, mAppendix, dAppendix;

        // let days = date_2.getDate() - date_1.getDate() + 1;
        let days = date_2.getDate() - date_1.getDate();//Thach edit

        if (days < 0) {
            date_2.setMonth(date_2.getMonth() - 1);
            days += this.DaysInMonth(date_2);
        }

        let months = date_2.getMonth() - date_1.getMonth();
        if (months < 0) {
            date_2.setFullYear(date_2.getFullYear() - 1);
            months += 12;
        }
        let years = date_2.getFullYear() - date_1.getFullYear();

        if (years > 1) yAppendix = " years";
        else yAppendix = " year";
        if (months > 1) mAppendix = " months";
        else mAppendix = " month";
        if (days > 1) dAppendix = " days";
        else dAppendix = " day";

        if ((years < 6 && years >= 0) || (years == 6 && months == 0 && days == 0)) {
            this.isDuoi6Tuoi = true;
        } else {
            this.isDuoi6Tuoi = false;
        }

        this.Duoi6TuoiDisplay =
            years + " Tuổi " + months + " Tháng " + days + " Ngày ";
    }

    DaysInMonth(date2_UTC) {
        let monthStart: any = new Date(
            date2_UTC.getFullYear(),
            date2_UTC.getMonth(),
            1
        );
        let monthEnd: any = new Date(
            date2_UTC.getFullYear(),
            date2_UTC.getMonth() + 1,
            1
        );
        let monthLength: any = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
        return monthLength;
    }

    onParentTabSelect(event) {
        if (event.index == 0 || event.title == 'Khám bệnh') {
            // dùng để ràng buộc hot key
            this.isSelectedParentTabKhamBenh = true;

            // reload hàng chờ
            this.refreshHangDoi(this.phongKhamHienTai.KeyId);
        }
        else {
            this.isSelectedParentTabKhamBenh = false;
        }
    }

    inGiayNghiHuongBHXH() {
        this.apiService.post<any>("KhamBenh/KiemTraYeuCauKhamBenh?yeuCauKhamBenhId=" + this.benhNhanHienTai.YeuCauKhamBenhId).subscribe(
            resultData1 => {
                this.dialog.open(NghiHuongBhytConfirmPopupComponent, {
                    disableClose: true,
                    width: "800px",
                    data: { BenhNhanHienTai: this.benhNhanHienTai, DocumentType: this.documentType }
                });
            }, (err: ApiError) => {
                this.validationKetLuanErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            }
        )
    }


    // tạm thời chưa sử dụng đến, vì feedback này đang pending
    xuLyChuyenDichVuKham() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            var self = this;
            self.dialog
                .open(LanKhamHienTaiChuyenKhamComponent, {
                    disableClose: false,
                    width: "800px",
                    data: {
                        "YeuCauTiepNhanId": self.benhNhanHienTai.YeuCauTiepNhanId,
                        "YeuCauKhamBenhId": self.benhNhanHienTai.YeuCauKhamBenhId,
                        "IsKhamBenhDangKham": false
                    }
                })
                .afterClosed()
                .subscribe((result) => {
                    if (result !== undefined && result !== null) // xử lý chuyển dịch vụ khám
                    {
                        this.dialog.open(ConfirmComponent, {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Để chuyển dịch vụ khám, bạn có đồng ý xóa tất cả các dịch vụ, thuốc, vật tư đã chỉ định không?",
                            },
                        }).afterClosed().subscribe((res) => {
                            if (res == "Yes") {
                                self.loadingPage();
                                result.PhongBenhVienHangDoiTruocId = self.benhNhanHienTai.Id;
                                self.apiService.post("KhamBenh/XuLyChuyenDichVuKham", result)
                                    .subscribe(resultData => {
                                        self.benhNhanHienTai = new BenhVienHangDoi();
                                        self.refreshHangDoi(self.phongKhamHienTai.KeyId);
                                        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chuyển khám "]));

                                        // xử lý người bệnh tiếp theo
                                        let dialogRefTiepTheo = self.dialog
                                            .open(LanKhamHienTaiBenhNhanTiepTheoPopupComponent, {
                                                disableClose: false,
                                                width: "600px",
                                                data: {
                                                    phongKhamHienTaiId: self.phongKhamHienTai.KeyId,
                                                    hangDoiHienTaiId: self.benhNhanHienTai.Id,
                                                    chuyenKham: true,
                                                    searchBenhNhan: self.searchStringHangDoiHienTai
                                                },
                                            }).afterClosed()
                                            .subscribe((result) => {
                                                if (result != undefined && result != null && result > 0) {
                                                    // result là id hàng đợi tiếp theo
                                                    self.XuLyBatDauKhamBenhNhan(result, false);
                                                }
                                                else //if (result == "tuChon") {
                                                {
                                                    self.closePopupLoadingData();
                                                }
                                            });
                                    },
                                        (err: ApiError) => {
                                            self.closePopupLoadingData();
                                            if (err.Message != "Validation Failed") {
                                                self.notificationService.showError(err.Message);
                                            }
                                        });
                            }
                        });

                    }
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    QuetMaQRCodeClick() {
        let elementBarcode: HTMLElement = document.getElementById(
            "barcodeActive"
        ) as HTMLElement;
        if (elementBarcode != undefined) {
            elementBarcode.click();
        }
    }

    changeQR(event) {
        if (event != null && typeof event == "string" && event.endsWith("@")) {
            // this.modelQRCode = event;
            var dataTimKiem = event.split("|");
            if (dataTimKiem.length > 1) {
                this.searchBenhNhan = dataTimKiem[0];
            } else {
                this.searchBenhNhan = event.slice(0, -1);
            }
            this.refeshDataGridHangDoi(
                this.phongKhamHienTai.KeyId,
                this.searchBenhNhan == null ? "" : this.searchBenhNhan
            );
        } else {
            this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
        }
        this.isScanF1 = false;
    }

    //========================================================
    // phần xử lý khám đoàn
    // luuVaHoanThanhKhamDoan() {
    //     if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
    //         this.dialog.open(ConfirmComponent, {
    //             disableClose: false,
    //             width: '400px',
    //             data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn hoàn thành khám cho người bệnh này không?' }
    //         }).afterClosed().subscribe(result => {
    //             if (result == 'Yes') {

    //             }
    //         });
    //     }
    //     else {
    //         this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    //     }
    // }

    luuVaHoanThanhKhamDoan() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn hoàn thành khám cho người bệnh này không?' }
            }).afterClosed().subscribe(res => {
                if (res == "Yes") {
                    var self = this;
                    self.benhNhanHienTai.validationErrors = null;
                    self.ref.detectChanges();

                    self.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = self.processDynamicComponent();

                    // biến IsDuChuyenKhoaKhamSucKhoeChinh chỉ dùng để lưu, hoàn thành khám ở khám đoàn tất cả => vì có kết hợp chức năng kết luận
                    // còn lưu, hoàn thành khám từng dv khám KSK thì ko cần check phân loại
                    self.benhNhanHienTai.YeuCauTiepNhan.IsDuChuyenKhoaKhamSucKhoeChinh = false;
                    self.loadingPage();
                    self.apiService
                        .post<any>("KhamBenh/LuuThongTinKhamBenh", self.benhNhanHienTai)
                        .subscribe(
                            (resultData) => {
                                // 22/11/2021: cập nhật KSK ko mặc định tự chọn người bệnh khi hoàn thành khám
                                self.ganThongTinYeuCauKhamBenhPerevious();
                                self.apiService
                                    .post(
                                        "KhamBenh/XuLyHoanThanhCongDoanKhamHienTaiCuaBenhNhan?hangDoiHienTaiId=" +
                                        self.benhNhanHienTai.Id +
                                        "&hoanThanhKham=true"
                                    )
                                    .subscribe(
                                        (resultData) => {
                                            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hoàn thành khám"]));
                                            // clear data người bệnh hiện tại
                                            self.benhNhanHienTai = new BenhVienHangDoi();
                                            self.refreshHangDoi(self.phongKhamHienTai.KeyId);
                                            self.closePopupLoadingData();
                                        },
                                        (err: ApiError) => {
                                            self.benhNhanHienTai.validationErrors = err.ValidationErrors;
                                            if (err.Message != "Validation Failed") {
                                                self.notificationService.showError(err.Message);
                                            }
                                            self.closePopupLoadingData();
                                        }
                                    );

                                // let dialogRefTiepTheo = self.dialog
                                //     .open(LanKhamHienTaiBenhNhanTiepTheoPopupComponent, {
                                //         disableClose: false,
                                //         width: "600px",
                                //         data: {
                                //             phongKhamHienTaiId: self.phongKhamHienTai.KeyId,
                                //             hangDoiHienTaiId: self.benhNhanHienTai.Id,
                                //             laKhamDoan: self.isKhamDoan,
                                //             searchBenhNhan: self.searchStringHangDoiHienTai
                                //         },
                                //     })
                                //     .afterClosed()
                                //     .subscribe((result) => {
                                //         self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
                                //         if (result == "tuChon") {
                                //             // cập nhật người bệnh hiện tại thành chờ làm chỉ định/ hoàn thành khám
                                //             self.ganThongTinYeuCauKhamBenhPerevious();
                                //             self.apiService
                                //                 .post(
                                //                     "KhamBenh/XuLyHoanThanhCongDoanKhamHienTaiCuaBenhNhan?hangDoiHienTaiId=" +
                                //                     self.benhNhanHienTai.Id +
                                //                     "&hoanThanhKham=true"
                                //                 )
                                //                 .subscribe(
                                //                     (resultData) => {
                                //                         // clear data người bệnh hiện tại
                                //                         self.benhNhanHienTai = new BenhVienHangDoi();
                                //                         self.refreshHangDoi(self.phongKhamHienTai.KeyId);
                                //                         self.closePopupLoadingData();
                                //                     },
                                //                     (err: ApiError) => {
                                //                         self.benhNhanHienTai.validationErrors = err.ValidationErrors;
                                //                         if (err.Message != "Validation Failed") {
                                //                             self.notificationService.showError(err.Message);
                                //                         }
                                //                         self.closePopupLoadingData();
                                //                     }
                                //                 );
                                //         } else if (result == "boQua" || result == null || result == 0) {
                                //             // giữ nguyên màn hình hiện tại
                                //             self.closePopupLoadingData();
                                //         } else if (result > 0) {
                                //             // result là id hàng đợi tiếp theo
                                //             self.ganThongTinYeuCauKhamBenhPerevious();
                                //             self.XuLyBatDauKhamBenhNhan(result, true);
                                //         }
                                //     });
                            },
                            (err: ApiError) => {
                                if (!self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                                    self.unSelectedTab();
                                    self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                                    self.notificationService.showError("Yêu cầu nhập đầy đủ các trường bắt buộc trong tab khám bệnh");
                                }
                                self.benhNhanHienTai.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                }
                                self.closePopupLoadingData();
                            }
                        );
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    chuyenLoaiKham() {
        // cần xử lý lưu data trước khi chuyển
        this.isLoadingKhamDoan = true;

        var url = "/kham-benh"
        if(!this.isKhamDoan)
        {
            if(this.isKhamDoanTatCa)
            {
                url = "/kham-doan/kham-doan-tat-ca-phong";
            }
            else
            {
                url = "/kham-doan/tiep-nhan" + url; 
            }
        }
        this.router.navigate([url], { queryParams: { IsKhamDoan: !this.isKhamDoan } });

        // self.isLoadingKhamDoan = true;
        // self.router.routeReuseStrategy.shouldReuseRoute = () => false;
        // self.router.onSameUrlNavigation = 'reload';
        // self.router.navigate([this.baseRoute], { queryParams: { IsKhamDoan: !this.isKhamDoan } });


        // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        //     this.router.navigate(['/kham-benh'], { queryParams: { IsKhamDoan: !this.isKhamDoan } })
        // );
    }
    //========================================================


    //=================== Cập nhật thêm chức năng quay lại chưa khám ========================
    xuLyQuayLaiChuaKham() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn quay lại chưa khám cho người bệnh này không?' }
            }).afterClosed().subscribe(result => {
                if (result == 'Yes') {
                    this.showPopupLoadingData();
                    this.apiService.put("KhamBenh/XuLyQuayLaiChuaKham?hangDoiId=" + this.benhNhanHienTai.Id)
                        .subscribe(
                            () => {
                                this.closePopupLoadingData();
                                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Quay lại chưa khám"]));
                                this.benhNhanHienTai = new BenhVienHangDoi();
                                this.refeshDataGridHangDoi(this.phongKhamHienTai.KeyId);
                            },
                            (err: ApiError) => {
                                if (err.Message != "Validation Failed") {
                                    this.notificationService.showError(err.Message);
                                }
                                this.closePopupLoadingData();
                            }
                        );
                }
            });
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    //=============================================================================================

    //=================== Cập nhật thêm chức năng chuyển phòng khám của bệnh nhân =================
    chonBenhNhanCanChuyenPhong(event) {
        this.arrNgayCoBenhNhanDuocChon = [];
        this.arrBenhNhanChuyenPhongId = event;
        if (event) {
            this.dataSourceChuanBiKham.data.forEach(benhNhan => {
                let index = event.findIndex(x => x == benhNhan.Id);
                if (index !== -1 && this.arrNgayCoBenhNhanDuocChon.findIndex(x => x == benhNhan.NgayKhamBenh) === -1) {
                    this.arrNgayCoBenhNhanDuocChon.push(benhNhan.NgayKhamBenh);
                }
            });
        }
    }

    kiemTraNgayCoBenhNhanChonChuyenPhong(ngay: Date): boolean {
        console.log('kiemTraNgayCoBenhNhanChonChuyenPhong', ngay);
        let index = this.arrNgayCoBenhNhanDuocChon.findIndex(x => x == ngay);
        return index !== -1;
    }

    chuyenPhongKhamBenhNhanDangChon(hangDoiId: number = null)
    {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            let hangDoiIds: number[] = [];
            if(hangDoiId != null)
            {
                hangDoiIds.push(hangDoiId);
            }
            else
            {
                hangDoiIds = this.arrBenhNhanChuyenPhongId.slice();
            }
            this.dialog.open(LanKhamHienTaiChuyenPhongKhamPopupComponent, {
                disableClose: false,
                width: '600px',
                data: {
                    DocumentType: this.documentType,
                    HangDoiIds: hangDoiIds,
                    PhongHienTaiId: this.phongKhamHienTai.KeyId
                }
            }).afterClosed().subscribe((res) => {
                if (res === true) {
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chuyển phòng khám"]));
                    if(hangDoiId != null)
                    {
                        this.benhNhanHienTai = new BenhVienHangDoi();
                    }
                    // this.refreshHangDoi(this.phongKhamHienTai.KeyId);
                    this.refeshDataGridHangDoi(this.phongKhamHienTai.KeyId, this.searchStringHangDoiHienTai);
                    if(this.gridChuanBiKham != undefined)
                    {
                        this.gridChuanBiKham.checkedByList = [];
                    }
                }
            });
            
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    //=============================================================================================


    //=========================================== BVHD-3392 =======================================
    getDanhSachBenhNhanChoKhamHangDoiChung(
        phongKhamId: number,
        searchString: string = ""
    ) {
        this.apiService
            .get<Array<YeuCauKhamBenh>>(
                "KhamBenh/GetDanhSachChoKhamHangDoiChungAsync?phongKhamHienTaiId=" +
                phongKhamId +
                "&searchString=" +
                searchString +
                "&laKhamDoan=" +
                this.isKhamDoan
            )
            .subscribe((resultData) => {
                if (resultData !== undefined && resultData != null) {
                    this.dataSourceChuanBiKhamHangDoiChung = {
                        data: resultData,
                        total: resultData.length,
                    };
                    if (this.dataSourceChuanBiKhamHangDoiChung.data.length != this.slYeuCauHienTai.ChuanBiKhamHangDoiChung) {
                        this.slYeuCauHienTai.ChuanBiKhamHangDoiChung = this.dataSourceChuanBiKhamHangDoiChung.data.length;
                    }
                } else {
                    this.dataSourceChuanBiKhamHangDoiChung = {
                        data: [],
                        total: 0,
                    };
                    this.slYeuCauHienTai.ChuanBiKhamHangDoiChung = 0;
                }
            });
    }

    xuLyShowHangDoiChung(){
        this.showHangDoiChung = !this.showHangDoiChung;
        if(this.showHangDoiChung)
        {
            this.getDanhSachBenhNhanChoKhamHangDoiChung(this.phongKhamHienTai.KeyId, this.searchStringHangDoiHienTai);
            if(!this.isKhamDoan)
            {
                this.getDanhSachBenhNhanChoKetLuanHangDoiChung(this.phongKhamHienTai.KeyId, this.searchStringHangDoiHienTai);
            }
        }
    }
    
    xuLyBatDauKhamNguoiBenhTuHangDoiChung(dataItem) {
        if (dataItem) {
            if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
                this.dialog
                    .open(ConfirmComponent, {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message:
                                "Bạn có muốn bắt đầu khám cho người bệnh " + dataItem.HoTen + " từ danh sách Người bệnh đợi khám không?",
                        },
                    })
                    .afterClosed()
                    .subscribe((res) => {
                        if (res == "Yes") {
                            this.showPopupLoadingData();
                            let obj = {
                                HangDoiIds: [dataItem.Id],
                                PhongHienTaiId: this.phongKhamHienTai.KeyId,
                                PhongThucHienId: this.phongKhamHienTai.KeyId
                            }
                            this.apiService.put<any>("KhamBenh/XuLyChuyenPhongThucHienDichVuKham", obj).subscribe(
                                resultData => {
                                    this.closePopupLoadingData();
                                    this.batDauKham(dataItem);
                                    this.showHangDoiChung = false;
                                },
                                (err: ApiError) => {
                                    if (err.Message != "Validation Failed") {
                                        this.notificationService.showError(err.Message);
                                    }
                                    this.closePopupLoadingData();
                                }
                            );
                        }
                    });
            } else {
                this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
        }
    }
    //=============================================================================================

    //=================== Cập nhật thêm chức năng quay lại chưa khám khám đoàn theo phòng ========================
    xuLyQuayLaiChuaKhamKhamDoanTheoPhong() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn quay lại chưa khám cho người bệnh này không?' }
            }).afterClosed().subscribe(result => {
                if (result == 'Yes') {
                    this.showPopupLoadingData();
                    this.apiService.put("KhamBenh/XuLyQuayLaiChuaKhamKhamDoanTheoPhong?hangDoiId=" + this.benhNhanHienTai.Id)
                        .subscribe(
                            () => {
                                this.closePopupLoadingData();
                                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Quay lại chưa khám"]));
                                this.benhNhanHienTai = new BenhVienHangDoi();
                                this.unSelectedTab();
                                this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                                this.refeshDataGridHangDoi(this.phongKhamHienTai.KeyId);
                            },
                            (err: ApiError) => {
                                if (err.Message != "Validation Failed") {
                                    this.notificationService.showError(err.Message);
                                }
                                this.closePopupLoadingData();
                            }
                        );
                }
            });
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    //=============================================================================================

    //============================================BVHD-3574========================================
    kiemTraKhoaHienTaiCoNhieuNguoiBenh() {
        if (!this.isKhamDoan && !this.isKhamDoanTatCa) {
            this.apiService.get<boolean>("KhamBenh/KiemTraKhoaHienTaiCoNhieuNguoiBenh")
                .subscribe(result => {
                    this.LaChuyenKhoaKhamNhieu = result;
                },
                    (err: ApiError) => {
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    }
                );
        }
    }


    capNhatDoiTuong() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
          this.dialog.open(KhamBenhThongTinDoiTuongPopupComponent, {
            disableClose: false,
            width: '1600px',
            data: {
              "YeuCauTiepNhanId": this.benhNhanHienTai.YeuCauTiepNhanId
            }
          }).afterClosed().subscribe(result => {
            if(result)
            {
              // xử lý load lại thông tin đối tượng
              this.refreshPage();
            }
          });
        }
        else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    //=============================================================================================
    //----------------------------BVHD-3698--------------------------------------------------------
    inGiayNghiDuongThai() {
        let dataYCKB =  {
            YeuCauKhamBenhId :this.benhNhanHienTai.YeuCauKhamBenhId,
            TuNgay:null,
            DenNgay:null,
        };
        this.dialog.open(NgayDuongThaiXacNhanPopupComponent, {
            disableClose: false,
            width: '400px',
            data: dataYCKB
          });
    }
    //----------------------------end BVHD-3698----------------------------------------------------


    //=============================================================================================
    //----------------------------BVHD-3751--------------------------------------------------------
    getDanhSachBenhNhanChoKetLuanHangDoiChung(
        phongKhamId: number,
        searchString: string = ""
    ) {
        this.apiService
            .get<Array<YeuCauKhamBenh>>(
                "KhamBenh/GetDanhSachChoKetLuanHangDoiChungAsync?phongKhamHienTaiId=" +
                phongKhamId +
                "&searchString=" +
                searchString
            )
            .subscribe((resultData) => {
                if (resultData !== undefined && resultData != null) {
                    this.dataSourceChoKetLuanHangDoiChung = {
                        data: resultData,
                        total: resultData.length,
                    };
                    if (this.dataSourceChoKetLuanHangDoiChung.data.length != this.slYeuCauHienTai.ChoKetLuanHangDoiChung) {
                        this.slYeuCauHienTai.ChoKetLuanHangDoiChung = this.dataSourceChoKetLuanHangDoiChung.data.length;
                    }
                } else {
                    this.dataSourceChoKetLuanHangDoiChung = {
                        data: [],
                        total: 0,
                    };
                    this.slYeuCauHienTai.ChoKetLuanHangDoiChung = 0;
                }
            });
    }

    xuLyKetLuanNguoiBenhTuHangDoiChung(dataItem) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(KetLuanNguoiBenhHangDoiChungPopupComponent, {
                disableClose: false,
                width: '1600px',
                data: {
                    DocumentType: this.documentType,
                    HangDoiId: dataItem.Id,
                    PhongThucHienId: dataItem.NoiDangKyId
                }
            }).afterClosed().subscribe((res) => {
                if (res === true) {
                    // this.refeshDataGridHangDoi(this.phongKhamHienTai.KeyId, this.searchStringHangDoiHienTai);
                    // if (this.gridChuanBiKham != undefined) {
                    //     this.gridChuanBiKham.checkedByList = [];
                    // }
                    this.getDanhSachBenhNhanChoKetLuanHangDoiChung(this.phongKhamHienTai.KeyId, this.searchStringHangDoiHienTai);
                }
            });

        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    //----------------------------end BVHD-3751----------------------------------------------------

    //=============================================================================================
    //----------------------------BVHD-3797--------------------------------------------------------
    kiemTraDichVuChuaThucHien(laKhamDoan: boolean = false) {
        if (
            this.authService.hasPermission(
                this.documentType,
                SecurityOperation.Update
            )
        ) {
            this.apiService.get<Array<YeuCauKhamBenh>>("KhamBenh/KiemTraCoDichVuChuaThucHien?yeuCauKhamBenhId=" + this.benhNhanHienTai.YeuCauKhamBenhId)
                .subscribe((resultData) => {
                    if (resultData !== undefined && resultData !== null && resultData.length > 0) {
                        this.dialog.open(KhamBenhDichVuChuaThucHienPopupComponent, {
                            disableClose: false,
                            width: '600px',
                            data: {
                              "DichVus": resultData
                            }
                          }).afterClosed().subscribe(result => {
                              if (result == "Yes") {
                                  if (laKhamDoan) {
                                      this.luuVaHoanThanhKhamDoan();
                                  }
                                  else {
                                      this.hoanThanhKham();
                                  }
                              }
                          });
                    } else {
                        if (laKhamDoan) {
                            this.luuVaHoanThanhKhamDoan();
                        }
                        else {
                            this.hoanThanhKham();
                        }
                    }
                });
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    //----------------------------end BVHD-3797----------------------------------------------------
}
