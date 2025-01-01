import { Component, OnInit, ViewChild, TemplateRef, HostListener, OnDestroy } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import icHourglass from '@iconify/icons-ic/twotone-hourglass-full';
import icDone from '@iconify/icons-ic/done';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icCode from '@iconify/icons-ic/code';
import icPerson from '@iconify/icons-ic/person';
import icDate from '@iconify/icons-ic/date-range';
import icComment from '@iconify/icons-ic/comment';
import icPermContactCalendar from '@iconify/icons-ic/perm-contact-calendar';
import icPhone from '@iconify/icons-ic/phone';
import icLocation from '@iconify/icons-ic/location-on';
import icWork from '@iconify/icons-ic/work';
import icGroup from '@iconify/icons-ic/group';
import icTimeLine from '@iconify/icons-ic/timeline';
import icOffer from '@iconify/icons-ic/local-offer';
import icPlay from '@iconify/icons-ic/play-circle-filled';
import icMoreHoriz from '@iconify/icons-ic/more-horiz';
import icEventNote from '@iconify/icons-ic/event-note';
import icCancel from '@iconify/icons-ic/cancel';
import icAssignment from '@iconify/icons-ic/assignment';
import icImages from '@iconify/icons-ic/assistant-photo';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MatDialog } from '@angular/material';
import { PhauThuatThuThuatTuongTrinhPTTTComponent } from './phau-thuat-thu-thuat-tuong-trinh/pttt-tuong-trinh-pttt/pttt-tuong-trinh-pttt.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { PhauThuatThuThuatTuVongPopupComponent } from './phau-thuat-thu-thuat-tu-vong-popup/phau-thuat-thu-thuat-tu-vong-popup.component';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PhauThuatThuThuat, ListStatusTabPhauThuatThuThuat, DichVuKyThuatChuaHoanThanhTrenHoanThanh, HangDoiPhauThuatThuThuat, TheoDoiSauPhauThuatThuThuat } from '../phau-thuat-thu-thuat.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { PhauThuatThuThuatKetLuanComponent } from './phau-thuat-thu-thuat-ket-luan/phau-thuat-thu-thuat-ket-luan.component';
import { EnumTrangThaiPhauThuatThuThuat, EnumTrangThaiTheoDoiSauPhauThuatThuThuat } from 'src/app/shared/enum/phau-thuat-thu-thuat.enum';
import { PhauThuatThuThuatTuongTrinhComponent } from './phau-thuat-thu-thuat-tuong-trinh/phau-thuat-thu-thuat-tuong-trinh.component';
import { PtttKetThucTuongTrinhPopupComponent } from './pttt-ket-thuc-tuong-trinh-popup/pttt-ket-thuc-tuong-trinh-popup.component';
import { KhongThucHienPtttPopupComponent } from './phau-thuat-thu-thuat-tuong-trinh/khong-thuc-hien-pttt-popup/khong-thuc-hien-pttt-popup.component';
import { PhauThuatThuThuatTheoDoiComponent } from './phau-thuat-thu-thuat-theo-doi/phau-thuat-thu-thuat-theo-doi.component';
import { PtttMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { Subscription } from 'rxjs';
import { HoatDongNhanVien } from 'src/app/shared/models/common.model';
import { PhauThuatThuThuatBnTiepTheoPopupComponent } from './phau-thuat-thu-thuat-bn-tiep-theo-popup/phau-thuat-thu-thuat-bn-tiep-theo-popup.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PhauThuatThuThuatCanLamSanComponent } from './phau-thuat-thu-thuat-can-lam-san/phau-thuat-thu-thuat-can-lam-san.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phau-thuat-thu-thuat-theo-ngay',
    templateUrl: './phau-thuat-thu-thuat-theo-ngay.component.html',
    styleUrls: ['./phau-thuat-thu-thuat-theo-ngay.component.scss'],
    animations: [stagger60ms, fadeInUp400ms],
})
export class PhauThuatThuThuatTheoNgayComponent implements OnInit, OnDestroy {
    icSearch = icSearch;
    icHourglass = icHourglass;
    icDone = icDone;
    icEdit = icEdit;
    icCode = icCode;
    icPerson = icPerson;
    icImages = icImages;
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

    searchBenhNhan = '';
    currentId: number = null; // giá trị dùng để lấy dữ iệu liên quan người bệnh
    tabActive = 'card0';
    templateKhoaPhong: string = null;
    tenKhoaPhong: string = null;
    phongKhamIdTruoc: number;
    phongKhamIdSau: number;
    checkPhongKhamDaChon = true;
    arrPhongKham: any[] = [];
    arrDoChiSoSinhTon: any[] = [];
    benhNhanHienTai: any;
    yeuCauTiepNhanId: any;
    trangThaiPhauThuatThuThuat = EnumTrangThaiPhauThuatThuThuat;
    currentUser: any;
    currentAccessUser: any;
    currentPhongBenhVienId: number = 0;
    subscription: Subscription;
    dichVuKyThuatChuaHoanThanhTrenHoanThanh = new DichVuKyThuatChuaHoanThanhTrenHoanThanh();
    yeuCauTiepNhanDangKhamId: number = 0;
    yeuCauTiepNhanBatDauKhamId: number = 0;
    loadingPopup: any;
    theoDoiSauPhauThuatThuThuat: TheoDoiSauPhauThuatThuThuat;

    isChoKham = false;
    isDangKham = false;
    isDichVuKhongCanTuongTrinh: boolean = false;

    isGetDataChoPhauThuatThuThuatDone = true;
    isGetDataDangPhauThuatThuThuatDone = true;
    isGetDataTheoDoiPhauThuatThuThuatDone = true;
    isGetDataCanLamSanDone = true;
    isGetDataDichVuKyThuatChuaHoanThanhTrenHoanThanhDone = true;

    isCLSDataChange = false;
    isTuongTrinhDataChange = false;
    isKetLuanDataChange = false;
    isTheoDoiDataChange = false;
    isTheoDoiChiSoSinhTon = false;
    isDaTuongTrinh = false;

    gridChuanBiPhauThuatThuThuatColumns: any[] = [];
    dataSourceChuanBiPhauThuatThuThuat = {
        data: [],
        total: 0,
    };

    gridVaoPhongPhauThuatThuThuatColumns: any[] = [];
    dataSourceVaoPhongPhauThuatThuThuat = {
        data: [],
        total: 0,
    };

    gridTheoDoiPhauThuatColumns: any[] = [];
    dataSourceTheoDoiPhauThuat = {
        data: [],
        total: 0,
    };

    tabDanhSachDaPT: boolean = false;
    tabDanhSachPT: boolean = true;

    lstStatusSelectedTab: ListStatusTabPhauThuatThuThuat = new ListStatusTabPhauThuatThuThuat();
    tuongTrinhHeader = 'tường trình';
    documentType: DocumentType = DocumentType.PhauThuatThuThuatTheoNgay;
    modelQRCode: any;
    isScanF1: boolean = false;
    @ViewChild('maBNChoPTTTTemplate', { static: true }) maBNChoPTTTTemplate: TemplateRef<any>;
    @ViewChild('maBNDangPTTTTemplate', { static: true }) maBNDangPTTTTemplate: TemplateRef<any>;
    @ViewChild('maBNDaPTTTTemplate', { static: true }) maBNDaPTTTTemplate: TemplateRef<any>;
    @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;
    @ViewChild('gioiTinhTemplate', { static: true }) gioiTinhTemplate: TemplateRef<any>;
    @ViewChild('tuoiTemplate', { static: true }) tuoiTemplate: TemplateRef<any>;
    @ViewChild('ptttTt', { static: false }) ptttTt: PhauThuatThuThuatTuongTrinhComponent;

    @ViewChild(PhauThuatThuThuatTuongTrinhPTTTComponent, { static: false }) shared;
    @ViewChild(PhauThuatThuThuatCanLamSanComponent, { static: false }) phauThuatThuThuatCanLamSanComponent: PhauThuatThuThuatCanLamSanComponent;
    @ViewChild(PhauThuatThuThuatKetLuanComponent, { static: false }) phauThuatThuThuatKetLuanComponent: PhauThuatThuThuatKetLuanComponent;
    @ViewChild(PhauThuatThuThuatTheoDoiComponent, { static: false }) phauThuatThuThuatTheoDoiComponent: PhauThuatThuThuatTheoDoiComponent;

    constructor(
        private dialog: MatDialog, private apiService: ApiService, private authService: AuthService,
        private notificationService: NotificationService,
        private broadcastService: BroadcastService
    ) { }

    ngOnInit() {
        this.benhNhanHienTai = { Id: 0, YeuCauTiepNhan: {} };

        this.gridChuanBiPhauThuatThuThuatColumns = [
            { Field: 'MaBN', Title: 'Mã NB', Width: 55, Sortable: true, ReverseEllipsis: true, Template: this.maBNChoPTTTTemplate },
            { Field: 'HoTen', Title: 'Tên NB', Width: 135, Sortable: true, Template: this.hoTenTemplate },
            { Field: 'TenGioiTinh', Title: 'GT', Width: 50, Sortable: true, Template: this.gioiTinhTemplate },
            { Field: 'Tuoi', Title: 'Tuổi', Width: 45, Sortable: true, Template: this.tuoiTemplate }
        ];

        this.gridVaoPhongPhauThuatThuThuatColumns = [
            { Field: 'MaBN', Title: 'Mã NB', Width: 55, Sortable: true, ReverseEllipsis: true, Template: this.maBNDangPTTTTemplate },
            { Field: 'HoTen', Title: 'Tên NB', Width: 135, Sortable: true, Template: this.hoTenTemplate },
            { Field: 'TenGioiTinh', Title: 'GT', Width: 50, Sortable: true, Template: this.gioiTinhTemplate },
            { Field: 'Tuoi', Title: 'Tuổi', Width: 45, Sortable: true, Template: this.tuoiTemplate }
        ];

        this.gridTheoDoiPhauThuatColumns = [
            { Field: 'MaBN', Title: 'Mã NB', Width: 55, Sortable: true, ReverseEllipsis: true, Template: this.maBNDaPTTTTemplate },
            { Field: 'HoTen', Title: 'Tên NB', Width: 135, Sortable: true, Template: this.hoTenTemplate },
            { Field: 'TenGioiTinh', Title: 'GT', Width: 50, Sortable: true, Template: this.gioiTinhTemplate },
            { Field: 'Tuoi', Title: 'Tuổi', Width: 45, Sortable: true, Template: this.tuoiTemplate }
        ];

        this.currentAccessUser = this.authService.getAccessUser();
        this.currentAccessUser.PhongBenhVienId = this.authService.getPhongLamViecId();
        this.getBenhNhanDangTuongTrinh();
    }

    ChuyenPhongNoiBo(item: any) {
        let phongBenhVienId = this.authService.getPhongLamViecId();

        if (phongBenhVienId !== item.KeyId) {
            if (this.benhNhanHienTai.Id != 0) {
                let isDataChanges = this.kiemTraDataChanges();

                if (isDataChanges) {
                    return;
                } else {
                    this.xuLyChuyenPhongKham(item);
                }
            } else {
                this.xuLyChuyenPhongKham(item);
            }
        } else {
            this.broadcastService.broadcast({
                name: 'ChuyenPhongThanhCong',
                message: true,
            });
        }
    }

    xuLyChuyenPhongKham(item) {
        this.currentAccessUser.PhongBenhVienId = item.KeyId;
        this.luuHoatDongNhanVien(this.currentAccessUser.PhongBenhVienId);
        this.getBenhNhanDangTuongTrinh();

        this.broadcastService.broadcast({
            name: 'ChuyenPhongThanhCong',
            message: true,
        });
    }

    luuHoatDongNhanVien(phongKhamBenhId: number) {
        let hoatDongNhanVien: HoatDongNhanVien = new HoatDongNhanVien(phongKhamBenhId);
        this.authService.setPhongLamViecId(phongKhamBenhId);
        this.apiService.post('HoatDongNhanVien/LuuHoatDongNhanVien', hoatDongNhanVien).subscribe((resultData) => {
        });
    }

    tabDataChanged(evt: any, tab: any) {
        switch (tab) {
            // case 'PhauThuatThuThuatCanLamSan':
            //     this.isCLSDataChange = evt;
            //     break;
            case 'PhauThuatThuThuatKetLuan':
                this.isKetLuanDataChange = evt;
                break;
            case 'PhauThuatThuThuatTheoDoi':
                this.isTheoDoiDataChange = evt;
                break;
            case 'PhauThuatThuThuatTheoDoiChiSoSinhTon':
                this.isTheoDoiChiSoSinhTon = evt;
                break;
        }
    }

    getDataCanLamSanDone(evt) {
        this.isGetDataCanLamSanDone = evt;
        this.closeAllDialogs();
    }

    changeTab(element: any, event: any) {
        const self = this;

        // setTimeout(() => {
        //     self.scrollTo(element);
        // }, 100);

        if (event.index === 0) {
            self.deselectedTab();
            self.lstStatusSelectedTab.selectedTabCanLamSan = true;
        }
        if (event.index === 1) {
            self.deselectedTab();
            self.lstStatusSelectedTab.selectedTabTuongTrinh = true;
        }
        if (event.index === 2) {
            self.deselectedTab();
            self.lstStatusSelectedTab.selectedTabKetLuan = true;
        }
        if (event.index === 3) {
            self.deselectedTab();
            self.lstStatusSelectedTab.selectedTabTheoDoi = true;
            self.phauThuatThuThuatTheoDoiComponent.getTheoDoiSauPhauThuatThuThuat();
        }
    }

    deselectedTab() {
        this.lstStatusSelectedTab.selectedTabCanLamSan = false;
        this.lstStatusSelectedTab.selectedTabTuongTrinh = false;
        this.lstStatusSelectedTab.selectedTabKetLuan = false;
        this.lstStatusSelectedTab.selectedTabTheoDoi = false;
    }

    scrollTo(element) {
        $('.sidenav-content').animate({
            scrollTop: $('#' + element).position().top + 85,
        });

        this.tabActive = element;
    }

    getDichVuKyThuatChuaHoanThanhTrenHoanThanh() {
        this.isGetDataDichVuKyThuatChuaHoanThanhTrenHoanThanhDone = false;

        this.apiService.get<any>(`PhauThuatThuThuat/GetDichVuKyThuatChuaHoanThanhTrenHoanThanh?yeuCauTiepNhanId=${this.benhNhanHienTai.YeuCauTiepNhanId}`).subscribe(res => {
            this.isGetDataDichVuKyThuatChuaHoanThanhTrenHoanThanhDone = true;
            if (res) {
                this.dichVuKyThuatChuaHoanThanhTrenHoanThanh = res;
            }
            this.closeAllDialogs();
            // if (res) {
            //     this.dichVuKyThuatChuaHoanThanhTrenHoanThanh = res;
            //     this.closeAllDialogs();
            // } else {
            //     this.closeAllDialogs();
            // }
        }, (err) => {
            this.notificationService.showError(err);
            this.isGetDataDichVuKyThuatChuaHoanThanhTrenHoanThanhDone = true;
            this.closeAllDialogs();
        });
    }

    getDanhSachBenhNhanChoKhamHienTai() {
        if (this.currentAccessUser.PhongBenhVienId != 0) {
            this.isGetDataChoPhauThuatThuThuatDone = false;
            this.isGetDataDangPhauThuatThuThuatDone = false;
            this.isGetDataTheoDoiPhauThuatThuThuatDone = false;

            this.getDanhSachBenhNhanChoPhauThuatThuThuatHienTai();
            this.getDanhSachBenhNhanDangPhauThuatThuThuatHienTai();
            this.getDanhSachTheoDoiPhauThuatThuThuatHienTaiAsync();
        }
    }

    getDanhSachBenhNhanChoPhauThuatThuThuatHienTai() {
        this.apiService.get<Array<PhauThuatThuThuat>>
            // tslint:disable-next-line: max-line-length
            (`PhauThuatThuThuat/GetDanhSachChoPhauThuatThuThuatHienTaiAsync?phongKhamHienTaiId=${this.currentAccessUser.PhongBenhVienId}&searchString=${this.searchBenhNhan}&yeuCauTiepNhanHienTaiId=${this.benhNhanHienTai.YeuCauTiepNhanId ? this.benhNhanHienTai.YeuCauTiepNhanId : 0}`)
            .subscribe((res) => {
                if (res) {
                    this.dataSourceChuanBiPhauThuatThuThuat.data = res;
                    this.dataSourceChuanBiPhauThuatThuThuat.total = res.length;
                } else {
                    this.dataSourceChuanBiPhauThuatThuThuat.data = null;
                }

                this.isGetDataChoPhauThuatThuThuatDone = true;
                this.closeAllDialogs();
            }, (err) => {
                this.isGetDataChoPhauThuatThuThuatDone = true;
                this.closeAllDialogs();
                this.notificationService.showError(err);
            });
    }

    getDanhSachBenhNhanDangPhauThuatThuThuatHienTai() {
        this.apiService.get<Array<PhauThuatThuThuat>>
            // tslint:disable-next-line: max-line-length
            (`PhauThuatThuThuat/GetDanhSachDangPhauThuatThuThuatHienTaiAsync?phongKhamHienTaiId=${this.currentAccessUser.PhongBenhVienId}&searchString=${this.searchBenhNhan}&yeuCauTiepNhanHienTaiId=${this.benhNhanHienTai.YeuCauTiepNhanId ? this.benhNhanHienTai.YeuCauTiepNhanId : 0}`)
            .subscribe((res) => {
                if (res) {
                    this.dataSourceVaoPhongPhauThuatThuThuat.data = res;
                    this.dataSourceVaoPhongPhauThuatThuThuat.total = res.length;
                } else {
                    this.dataSourceVaoPhongPhauThuatThuThuat.data = null;
                }

                this.isGetDataDangPhauThuatThuThuatDone = true;
                this.closeAllDialogs();
            }, (err) => {
                this.isGetDataDangPhauThuatThuThuatDone = true;
                this.closeAllDialogs();

                this.notificationService.showError(err);
            });
    }

    getDanhSachTheoDoiPhauThuatThuThuatHienTaiAsync() {
        this.apiService.get<Array<PhauThuatThuThuat>>
            // tslint:disable-next-line: max-line-length
            (`PhauThuatThuThuat/GetDanhSachTheoDoiPhauThuatThuThuatHienTaiAsync?phongKhamHienTaiId=${this.currentAccessUser.PhongBenhVienId}&searchString=${this.searchBenhNhan}&yeuCauTiepNhanHienTaiId=${this.benhNhanHienTai.YeuCauTiepNhanId ? this.benhNhanHienTai.YeuCauTiepNhanId : 0}`)
            .subscribe((res) => {
                if (res) {
                    this.dataSourceTheoDoiPhauThuat.data = res;
                    this.dataSourceTheoDoiPhauThuat.total = res.length;
                } else {
                    this.dataSourceTheoDoiPhauThuat.data = null;
                }

                this.isGetDataTheoDoiPhauThuatThuThuatDone = true;
                this.closeAllDialogs();
            }, (err) => {
                this.isGetDataTheoDoiPhauThuatThuThuatDone = true;
                this.closeAllDialogs();

                this.notificationService.showError(err);
            });
    }

    getBenhNhanDangTuongTrinh() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        }

        this.apiService.get<any>(`PhauThuatThuThuat/GetThongTinBenhNhanDangTuongTrinh?phongKhamHienTaiId=${this.currentAccessUser.PhongBenhVienId}`).subscribe((res) => {
            if (res) {
                this.isGetDataCanLamSanDone = false;
                this.benhNhanHienTai = res;
                this.yeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
                this.yeuCauTiepNhanDangKhamId = this.benhNhanHienTai.YeuCauTiepNhanId;
                // this.yeuCauTiepNhanBenhNhanKeTiepId = this.benhNhanHienTai.YeuCauTiepNhanId;

                this.deselectedTab();
                this.lstStatusSelectedTab.selectedTabCanLamSan = true;
                this.getDanhSachBenhNhanChoKhamHienTai();
                this.getDichVuKyThuatChuaHoanThanhTrenHoanThanh();
            } else {
                this.benhNhanTiepTheo(0, true);
                // this.getDanhSachBenhNhanChoKhamHienTai();
            }
        }, (err) => {
            this.notificationService.showError(err);
            this.closeAllDialogs();
        });
    }

    closeAllDialogs() {
        if (this.isGetDataChoPhauThuatThuThuatDone && this.isGetDataDangPhauThuatThuThuatDone && this.isGetDataTheoDoiPhauThuatThuThuatDone && this.isGetDataCanLamSanDone && this.isGetDataDichVuKyThuatChuaHoanThanhTrenHoanThanhDone) {
            if (this.loadingPopup) {
                this.loadingPopup.close();
                this.loadingPopup = null;
            }
        }
    }

    refreshHangDoi() {
        // get số lượng yêu cầu hiện tại theo phòng
        // this.getSoLuongYeuCauHienTai(phongKhamId);
    }

    benhNhanTiepTheo(yeuCauTiepNhanId: number, isGetBenhNhanDangTuongTrinh = false) {
        if (yeuCauTiepNhanId === 0) {
            // this.benhNhanHienTai = null;
            this.benhNhanHienTai.YeuCauTiepNhanId = 0;
            this.benhNhanHienTai.Id = 0;

            if (!this.loadingPopup) {
                this.loadingPopup = this.dialog.open(LoadingComponent, {
                    disableClose: true,
                    width: '200px',
                    height: '90px',
                    data: { Title: 'Đang tải...' }
                });
            }

            if (!isGetBenhNhanDangTuongTrinh) {
                this.huyKhamBenhNhan();
            } else {
                this.getDanhSachBenhNhanChoKhamHienTai();
            }
            // this.cdRef.detectChanges();
            // this.getDanhSachBenhNhanChoKhamHienTai();
        }

        this.getBenhNhanDangKham(yeuCauTiepNhanId);
    }

    kiemTraDataChanges() {
        if (this.benhNhanHienTai.Id != 0) {
            if (this.lstStatusSelectedTab.selectedTabCanLamSan) {
                if (this.isCLSDataChange) {
                    this.notificationService.showError(PtttMessage.MessageSaveDataTabCLSRequired);
                    return true;
                } else {
                    return false;
                }
            } else if (this.lstStatusSelectedTab.selectedTabTuongTrinh) {

            } else if (this.lstStatusSelectedTab.selectedTabKetLuan) {
                if (this.isKetLuanDataChange) {
                    this.notificationService.showError(PtttMessage.MessageSaveDataTabKetLuanRequired);
                    return true;
                } else {
                    return false;
                }
            } else if (this.lstStatusSelectedTab.selectedTabTheoDoi) {
                if (this.isTheoDoiDataChange) {
                    this.notificationService.showError(PtttMessage.MessageSaveDataTabTheoDoiRequired);
                    return true;
                } else if (this.isTheoDoiChiSoSinhTon) {
                    this.notificationService.showError(PtttMessage.MessageSaveDataTabTheoDoiChiSoSinhTonRequired);
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }

    getBenhNhanDangKham(yeuCauTiepNhanId: number) {
        if (isNaN(yeuCauTiepNhanId)) {
            return;
        }

        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        }

        if (yeuCauTiepNhanId == 0 || !yeuCauTiepNhanId) {
            this.closeAllDialogs();
            return;
        }

        let isDataChanges = this.kiemTraDataChanges();
        if (isDataChanges) {
            this.closeAllDialogs();
            return;
        }

        // this.yeuCauTiepNhanBenhNhanKeTiepId = yeuCauTiepNhanId;

        let hangDoiPhauThuatThuThuat = new HangDoiPhauThuatThuThuat();
        hangDoiPhauThuatThuThuat.YeuCauTiepNhanDangKhamId = this.yeuCauTiepNhanDangKhamId;
        hangDoiPhauThuatThuThuat.YeuCauTiepNhanBatDauKhamId = yeuCauTiepNhanId;
        hangDoiPhauThuatThuThuat.PhongBenhVienId = this.currentAccessUser.PhongBenhVienId;

        this.apiService.post(`PhauThuatThuThuat/BatDauKhamBenhNhanPTTT`, hangDoiPhauThuatThuThuat).subscribe(res => {
            this.xuLyGetBenhNhanDangKham(yeuCauTiepNhanId);
        }, err => {
            this.isGetDataCanLamSanDone = true;
            this.notificationService.showError(err);
            this.closeAllDialogs();
        })
    }

    xuLyGetBenhNhanDangKham(yeuCauTiepNhanId: number) {
        this.deselectedTab();
        this.lstStatusSelectedTab.selectedTabCanLamSan = true;
        if (yeuCauTiepNhanId === 0) {
            // this.benhNhanHienTai = null;
            // this.benhNhanHienTai.Id = 0;
            // this.isChoosingPatient = false;
            this.closeAllDialogs();
            return;
        }
        this.isDaTuongTrinh = false;
        // if (this.ptttTt != null) {
        //     const phongBv = this.currentAccessUser;
        //     this.ptttTt.yctnId = yeuCauTiepNhanId;
        //     const url = 'PhauThuatThuThuat/GetListPtttBn?noiThucHienId=' + phongBv.PhongBenhVienId + '&yctnId=' + yeuCauTiepNhanId;
        //     this.ptttTt.LoadDsPttt(url, false, false);
        //     this.ptttTt.GetDvKhongThucHien();
        // }
        // this.dialog.open(LoadingComponent, {
        //     disableClose: true,
        //     width: '200px',
        //     height: '90px',
        //     data: { Title: 'Đang tải...' }
        // });

        this.isGetDataCanLamSanDone = false;
        this.yeuCauTiepNhanId = yeuCauTiepNhanId;

        this.apiService.get<any>(`PhauThuatThuThuat/GetThongTinBenhNhanTheoYeuCauTiepNhan?yeuCauTiepNhanId=${yeuCauTiepNhanId}&phongKhamHienTai=${this.currentAccessUser.PhongBenhVienId}`).subscribe((res) => {
            if (res) {
                this.benhNhanHienTai = res;
                this.yeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
                // this.trangThaiPhauThuatThuThuat = this.benhNhanHienTai.TrangThaiPhauThuatThuThuat;
                this.yeuCauTiepNhanDangKhamId = this.benhNhanHienTai.YeuCauTiepNhanId;

                if (this.ptttTt != null) {
                    const phongBv = this.currentAccessUser;
                    this.ptttTt.yctnId = yeuCauTiepNhanId;
                    const url = 'PhauThuatThuThuat/GetListPtttBn?noiThucHienId=' + phongBv.PhongBenhVienId + '&yctnId=' + yeuCauTiepNhanId + '&IsTuongTrinhLai=' + this.benhNhanHienTai.IsTuongTrinhLai;
                    this.ptttTt.LoadDsPttt(url, false, false);
                    this.ptttTt.GetDvKhongThucHien();
                }

                // this.closeAllDialogs();
                this.getDanhSachBenhNhanChoKhamHienTai();
                this.getDichVuKyThuatChuaHoanThanhTrenHoanThanh();
                // this.isChoosingPatient = false;

            } else {
                this.benhNhanHienTai = { Id: 0, YeuCauTiepNhan: {} };
                // this.closeAllDialogs();
                this.getDanhSachBenhNhanChoKhamHienTai();
                // this.isChoosingPatient = false;
            }
        }, (err) => {
            // this.isChoosingPatient = false;
            this.isGetDataCanLamSanDone = true;
            this.notificationService.showError(err);
            this.closeAllDialogs();
        });
    }

    formatMaBenhNhan(data) {
        console.log(data);
    }

    timKiemBenhNhan(evt) {
        if (evt.key === 'Enter') {
            this.getDanhSachBenhNhanChoKhamHienTai();
        }
    }

    timeoutSearchChange: any;
    searchBenhNhanChange(value) {
        var self = this;
        clearTimeout(self.timeoutSearchChange);

        if(value) {
            if(typeof value == 'string' && value.endsWith('@')) {
                self.timeoutSearchChange = setTimeout(function () {
                    self.modelQRCode = value;
                    self.changeQR(self.modelQRCode);
                }, 10);
            } else {
                self.timeoutSearchChange = setTimeout(function () {
                    self.getDanhSachBenhNhanChoKhamHienTai();
                }, 1000);
            }
        } else {
            self.modelQRCode = null;

            self.timeoutSearchChange = setTimeout(function () {
                self.getDanhSachBenhNhanChoKhamHienTai();
            }, 1000);
        }
    }

    bnVang(hangDoi: any) {
        // if (
        //     this.authService.hasPermission(
        //         this.documentType,
        //         SecurityOperation.Update
        //     )
        // ) {

        // } else {
        //     this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        // }

        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: {
                Title: 'Xác nhận',
                Message: `Bạn chắc chắn xác nhận người bệnh (Mã TN: ${hangDoi.MaYeuCauTiepNhan}, Họ tên: ${hangDoi.HoTen}) không có mặt ở đây hay không?`,
            },
        })
            .afterClosed()
            .subscribe((result) => {
                if (result == 'Yes') {
                    // xử lý đẩy vị trí hàng đợi người bệnh ra sau
                    this.apiService.post('PhauThuatThuThuat/XuLyBenhNhanVang?id=' + hangDoi.Id).subscribe(() => {
                        this.getDanhSachBenhNhanChoKhamHienTai();
                    });
                }
            }, (err) => {
                this.notificationService.showError(err);
            });
    }

    // savePhauThuatThuThuat() {
    //     this.dialog.open(ConfirmComponent, {
    //         //disableClose: true,
    //         width: '1000px',
    //         data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn lưu thông tin phẫu thuật thủ thuật cho người bệnh " + this.benhNhanHienTai.YeuCauTiepNhan.HoTen.bold() + " không?" }
    //     }).afterClosed().subscribe(result => {
    //         if (result == 'Yes') {
    //             // if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {

    //             // }
    //             var phauThuatThuThuat: any = this.shared.pTTT;
    //                 phauThuatThuThuat.YeuCauDichVuKyThuatId = this.yeuCauDvktId;
    //                 this.apiService
    //                     .post<any>("PhauThuatThuThuat/SaveOperation", phauThuatThuThuat)
    //                     .subscribe(resultData => {
    //                         this.notificationService.showError(resultData.Error);
    //                     });
    //         }
    //     });
    // }

    // startPhauThuatThuThuat() {
    //     this.dialog.open(ConfirmComponent, {
    //         //disableClose: true,
    //         width: '1000px',
    //         data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn tiến hành phẫu thuật thủ thuật cho người bệnh " + this.benhNhanHienTai.YeuCauTiepNhan.HoTen.bold() + " không?" }
    //     }).afterClosed().subscribe(result => {
    //         if (result == 'Yes') {
    //             // if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {

    //             // }
    //             var phauThuatThuThuat: any = this.shared.pTTT;
    //                 phauThuatThuThuat.YeuCauDichVuKyThuatId = this.yeuCauDvktId;
    //                 this.apiService
    //                     .post<any>("PhauThuatThuThuat/StartOperation", phauThuatThuThuat)
    //                     .subscribe(resultData => {
    //                         if (resultData.ThanhCong == true) {
    //                             this.benhNhanHienTai = { Id: 0, YeuCauTiepNhan: {} };
    //                             this.notificationService.showError(resultData.Error);
    //                             this.getDanhSachBenhNhanChoKhamHienTai();
    //                         } else {
    //                             this.notificationService.showError(resultData.Error);
    //                         }
    //                     });
    //         }
    //     });
    // }

    // endPhauThuatThuThuat() {
    //     this.dialog.open(ConfirmComponent, {
    //         //disableClose: true,
    //         width: '1000px',
    //         data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn kết thúc phẫu thuật thủ thuật cho người bệnh " + this.benhNhanHienTai.YeuCauTiepNhan.HoTen.bold() + " không?" }
    //     }).afterClosed().subscribe(result => {
    //         if (result == 'Yes') {
    //             // if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
    //             //
    //             // }
    //             var phauThuatThuThuat: any = this.shared.pTTT;
    //                 phauThuatThuThuat.YeuCauDichVuKyThuatId = this.yeuCauDvktId;
    //                 this.apiService
    //                     .post<any>("PhauThuatThuThuat/FinishOperation", phauThuatThuThuat)
    //                     .subscribe(resultData => {
    //                         if (resultData.ThanhCong == true) {
    //                             this.benhNhanHienTai = { Id: 0, YeuCauTiepNhan: {} };
    //                             this.notificationService.showError(resultData.Error);
    //                             this.getDanhSachBenhNhanChoKhamHienTai();
    //                         } else {
    //                             this.notificationService.showError(resultData.Error);
    //                         }
    //                     });
    //         }
    //     });
    // }

    changeTabParent(element: any, event: any) {
        this.tabDanhSachPT = !this.tabDanhSachPT;
        this.tabDanhSachDaPT = !this.tabDanhSachDaPT;
    }
    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (this.tabDanhSachPT) {
            let self = this;

            // if (self.benhNhanHienTai.Id !== 0 && self.isSelectedParentTabKhamBenh) {
            if (self.benhNhanHienTai.Id !== 0) {
                // kiểm tra lưu // ctr + s
                if (event.ctrlKey && event.keyCode == 83) {
                    // Chỉ định CLS
                    if (self.lstStatusSelectedTab.selectedTabCanLamSan) {
                        event.preventDefault();
                        self.phauThuatThuThuatCanLamSanComponent.themDichVuKyThuatMultiselect();
                    } else if (self.lstStatusSelectedTab.selectedTabTuongTrinh) {
                        // if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan) {
                        //     event.preventDefault();
                        //     this.luuKetLuan();
                        // } else if (!this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan) {
                        //     event.preventDefault();
                        // }
                        event.preventDefault();
                        // if (this.ptttTt.ptttCombobox.ptttId
                        //     !=null && this.ptttTt.isDangPhauThuat && !this.ptttTt.IsDaTuongTrinh) {
                        //     this.ketPhucPhauThuatThuThuat();
                        // }
                    } else if (self.lstStatusSelectedTab.selectedTabKetLuan) {
                        event.preventDefault();
                        self.luuKetLuan();
                    } else if (self.lstStatusSelectedTab.selectedTabTheoDoi) {
                        event.preventDefault();
                        self.phauThuatThuThuatTheoDoiComponent.luuLanKham();
                    }
                }

                // esc
                if (event.keyCode === 27) {
                    if (self.lstStatusSelectedTab.selectedTabCanLamSan) {
                        event.preventDefault();
                        self.phauThuatThuThuatCanLamSanComponent.huyDichVuKyThuatMultiselect();
                    } else if (self.lstStatusSelectedTab.selectedTabTuongTrinh) {
                        event.preventDefault();
                        // self.cancelEkipThucHien();
                    } else if (self.lstStatusSelectedTab.selectedTabKetLuan) {
                        event.preventDefault();
                        self.huyKetLuan();
                    } else if (self.lstStatusSelectedTab.selectedTabTheoDoi) {
                        event.preventDefault();
                        self.phauThuatThuThuatTheoDoiComponent.huyLanKham();
                    }
                }

                // if (self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                //     // kiểm tra hủy
                //     if (
                //         event.keyCode == 27 &&
                //         this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh
                //     ) {
                //         event.preventDefault();
                //         this.cancelChangeData();
                //     } else if (
                //         event.keyCode == 27 &&
                //         !this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh
                //     ) {
                //         event.preventDefault();
                //     }
                // } else if (self.lstStatusSelectTabKhambenh.selectedTabChanDoan) {
                //     if (
                //         event.keyCode == 27 &&
                //         this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan
                //     ) {
                //         event.preventDefault();
                //         this.cancelChangeDataKetLuan();
                //     } else if (
                //         event.keyCode == 27 &&
                //         !this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan
                //     ) {
                //         event.preventDefault();
                //     }
                // } else if (self.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt) {
                //     // tường trình pt/tt

                //     // tslint:disable-next-line: deprecation
                //     if (
                //         event.keyCode === 27 &&
                //         this.benhNhanHienTai.YeuCauKhamBenh.IsChangePhauThuat
                //     ) {
                //         event.preventDefault();
                //         self.onResetTuongTrinh();
                //     } else if (
                //         event.keyCode === 27 &&
                //         !this.benhNhanHienTai.YeuCauKhamBenh.IsChangePhauThuat
                //     ) {
                //         event.preventDefault();
                //     }
                // }


                // ctrl + f1
                const kendoTab = 'card';
                if (event.ctrlKey && event.keyCode === 112) {
                    event.preventDefault();

                    self.deselectedTab();
                    self.lstStatusSelectedTab.selectedTabCanLamSan = true;
                    self.scrollTo(kendoTab);
                }

                // ctrl + f2
                if (event.ctrlKey && event.keyCode === 113) {
                    event.preventDefault();

                    // if(this.isChoKham) {
                    self.deselectedTab();
                    self.lstStatusSelectedTab.selectedTabTuongTrinh = true;
                    self.scrollTo(kendoTab);
                    // }
                }

                // ctrl + f3
                if (event.ctrlKey && event.keyCode === 114) {
                    event.preventDefault();

                    if (this.isDaTuongTrinh && (this.benhNhanHienTai.TrangThaiPhauThuatThuThuat == this.trangThaiPhauThuatThuThuat.DangPhauThuat || this.benhNhanHienTai.TrangThaiPhauThuatThuThuat == this.trangThaiPhauThuatThuThuat.TheoDoi)) {
                        self.deselectedTab();
                        self.lstStatusSelectedTab.selectedTabKetLuan = true;
                        self.scrollTo(kendoTab);
                    }
                }

                // ctrl + f5
                if (event.ctrlKey && event.keyCode === 116) {
                    event.preventDefault();

                    if (this.benhNhanHienTai.TrangThaiPhauThuatThuThuat == this.trangThaiPhauThuatThuThuat.TheoDoi) {
                        self.deselectedTab();
                        self.lstStatusSelectedTab.selectedTabTheoDoi = true;
                        self.phauThuatThuThuatTheoDoiComponent.getTheoDoiSauPhauThuatThuThuat();
                        self.scrollTo(kendoTab);
                    }
                }


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


            } else {
                if (event.ctrlKey &&
                    (
                        event.keyCode === 27 || // esc
                        event.keyCode === 39 || // right arrow
                        event.keyCode === 72 || // h
                        event.keyCode === 80 || // p
                        event.keyCode === 83 || // s
                        event.keyCode === 112 || // f1
                        event.keyCode === 113 || // f2
                        event.keyCode === 114 || // f3
                        event.keyCode === 116 // f5
                    )
                ) {
                    event.preventDefault();
                }
            }

            if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
                this.isScanF1 = true;
                event.preventDefault();
                this.QuetMaQRCodeClick();
            }
        }
    }

    // tslint:disable-next-line: use-lifecycle-interface
    ngAfterContentInit() {
        this.subscription = this.broadcastService.on('ChuyenPhong', (event) => {
            if (event.message) {
                this.ChuyenPhongNoiBo(event.message);
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    WillShowKetLuan(willShow: boolean) {
        if (willShow === true) {
            this.isDaTuongTrinh = willShow;
            this.apiService.get<any>(`PhauThuatThuThuat/GetTrangThaiPhauThuatThuThuat?phongKhamHienTaiId=${this.currentAccessUser.PhongBenhVienId}&yeuCauTiepNhanId=${this.benhNhanHienTai.YeuCauTiepNhanId}`).subscribe((res) => {
                if (res) {
                    this.benhNhanHienTai.TrangThaiPhauThuatThuThuat = res;
                }
            }, (err) => {
                this.notificationService.showError(err);
            });
        }
    }

    NavigateKetLuan(willNavigate: boolean) {
        if (willNavigate === true) {
            this.deselectedTab();
            this.lstStatusSelectedTab.selectedTabKetLuan = true;
        }
    }

    ChuyenBenhNhanNext(willChuyen: boolean) {
        if (willChuyen) {
            if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
                this.apiService.get<any>
                    // tslint:disable-next-line: max-line-length
                    (`PhauThuatThuThuat/GetThongTinBenhNhanTiepTheo?phongKhamHienTaiId=${this.currentAccessUser.PhongBenhVienId}&yeuCauTiepNhanHienTaiId=${this.yeuCauTiepNhanId}`)
                    .subscribe((res) => {
                        if (res) {
                            this.dialog.open(PhauThuatThuThuatBnTiepTheoPopupComponent, {
                                disableClose: true,
                                width: '1000px',
                                data: res
                            })
                                .afterClosed()
                                .subscribe(dialogRes => {
                                    if (dialogRes) {
                                        this.benhNhanTiepTheo(res.YeuCauTiepNhanId);
                                    } else {
                                        this.benhNhanTiepTheo(0);
                                    }
                                });
                        } else {
                            this.benhNhanTiepTheo(0);
                        }
                    }, (err) => {
                        this.dialog.closeAll();
                        this.notificationService.showError(err);
                    });
            } else {
                this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
        } else {
            this.benhNhanTiepTheo(0);
        }
    }

    benhNhanTuVong() {
        const tuVongRes = {
            isTuongTrinh: true,
            IsDaTuongTrinh: this.ptttTt.IsDaTuongTrinh,
            YcdvktId: this.ptttTt.ycdvktId,
        };
        this.dialog.open(PhauThuatThuThuatTuVongPopupComponent, {
            disableClose: true,
            width: '600px',
            data: tuVongRes
        })
            .afterClosed()
            .subscribe((res) => {
                if (res === 'confirm') {
                    if (this.dataSourceChuanBiPhauThuatThuThuat != null && this.dataSourceChuanBiPhauThuatThuThuat.data.some(x => x)) {
                        this.getThongTinBenhNhanTiepTheoPopup();
                    }

                    if (this.dataSourceChuanBiPhauThuatThuThuat != null && !this.dataSourceChuanBiPhauThuatThuThuat.data.some(x => x)) {
                        this.benhNhanTiepTheo(0);
                    }
                }
            });
    }

    benhNhanTuVongKhiTheoDoi() {
        const tuVongRes = {
            isTheoDoi: true,
            isDangTheoDoi: this.benhNhanHienTai.TrangThaiPhauThuatThuThuat === EnumTrangThaiPhauThuatThuThuat.TheoDoi,
            yeuCauTiepNhanId: this.benhNhanHienTai.YeuCauTiepNhanId,
            theoDoiSauPhauThuatThuThuatId: this.phauThuatThuThuatTheoDoiComponent.getTheoDoiSauPhauThuatThuThuatId(),
            nhanVienKetLuanId: this.currentAccessUser.Id,
            phongBenhVienId: this.currentAccessUser.PhongBenhVienId
        };

        this.dialog.open(PhauThuatThuThuatTuVongPopupComponent, {
            disableClose: true,
            width: '600px',
            data: tuVongRes
        }).afterClosed().subscribe((res) => {
            if (res === 'confirm') {
                if (this.dataSourceChuanBiPhauThuatThuThuat != null && this.dataSourceChuanBiPhauThuatThuThuat.data.some(x => x)) {
                    this.getThongTinBenhNhanTiepTheoPopup();
                }

                if (this.dataSourceChuanBiPhauThuatThuThuat != null && !this.dataSourceChuanBiPhauThuatThuThuat.data.some(x => x)) {
                    this.benhNhanTiepTheo(0);
                }
            }
        });
    }

    getThongTinBenhNhanTiepTheoPopup() {
        this.apiService.get<any>(`PhauThuatThuThuat/GetThongTinBenhNhanTiepTheo?phongKhamHienTaiId=${this.currentAccessUser.PhongBenhVienId}&yeuCauTiepNhanHienTaiId=${this.benhNhanHienTai.YeuCauTiepNhanId}`).subscribe((res) => {
            if (res) {
                this.dialog.closeAll();

                this.dialog.open(PhauThuatThuThuatBnTiepTheoPopupComponent, {
                    disableClose: true,
                    width: '1000px',
                    data: res
                })
                    .afterClosed()
                    .subscribe(dialogRes => {
                        if (dialogRes) {
                            this.benhNhanTiepTheo(res.YeuCauTiepNhanId);
                        } else {
                            this.benhNhanTiepTheo(0);
                        }
                    });
            } else {
                this.benhNhanTiepTheo(0);
            }
        }, (err) => {
            this.notificationService.showError(err);
            this.dialog.closeAll();
        });
    }

    huyKetLuan() {
        this.phauThuatThuThuatKetLuanComponent.huyKetLuan();
    }

    luuKetLuan() {
        this.phauThuatThuThuatKetLuanComponent.luuKetLuan();
    }

    chuyenGiaoBenhNhan() {
        this.phauThuatThuThuatTheoDoiComponent.chuyenGiaoBenhNhan();
    }

    chuyenGiaoKetLuan() {
        this.theoDoiSauPhauThuatThuThuat = new TheoDoiSauPhauThuatThuThuat();
        this.theoDoiSauPhauThuatThuThuat.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
        this.theoDoiSauPhauThuatThuThuat.TrangThai = EnumTrangThaiTheoDoiSauPhauThuatThuThuat.KetThucTheoDoi;
        this.theoDoiSauPhauThuatThuThuat.TrangThaiPhauThuatThuThuat = EnumTrangThaiPhauThuatThuThuat.ChuyenGiao;
        this.theoDoiSauPhauThuatThuThuat.PhongBenhVienId = this.currentAccessUser.PhongBenhVienId;
        this.theoDoiSauPhauThuatThuThuat.NhanVienKetLuanId = this.currentAccessUser.Id;
        this.theoDoiSauPhauThuatThuThuat.BacSiPhuTrachTheoDoiId = 0;
        this.theoDoiSauPhauThuatThuThuat.DieuDuongPhuTrachTheoDoiId = 0;
        this.theoDoiSauPhauThuatThuThuat.ThoiDiemBatDauTheoDoi = null;
        this.theoDoiSauPhauThuatThuThuat.ThoiDiemKetThucTheoDoi = null;
        this.theoDoiSauPhauThuatThuThuat.GhiChuTheoDoi = '';
        this.theoDoiSauPhauThuatThuThuat.IsChuyenGiaoTuTuongTrinh = true;

        this.apiService.post<any>('PhauThuatThuThuat/ChuyenGiaoSauPhauThuatThuThuat', this.theoDoiSauPhauThuatThuThuat).subscribe(res => {
            if (res) {
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully,
                    [`Chuyển giao NB ${this.benhNhanHienTai.HoTen}`]));

                //GetThongTinBenhNhanTiepTheo
                this.apiService.get<any>(
                    `PhauThuatThuThuat/GetThongTinBenhNhanTiepTheo?phongKhamHienTaiId=${this.currentAccessUser.PhongBenhVienId}&yeuCauTiepNhanHienTaiId=${this.benhNhanHienTai.YeuCauTiepNhanId}`)
                    .subscribe((result) => {
                        if (result) {
                            this.dialog.open(PhauThuatThuThuatBnTiepTheoPopupComponent, {
                                disableClose: true,
                                width: '1000px',
                                data: result
                            })
                                .afterClosed()
                                .subscribe(dialogRes => {
                                    if (dialogRes) {
                                        this.benhNhanTiepTheo(result.YeuCauTiepNhanId);
                                    } else {
                                        this.benhNhanTiepTheo(0);
                                    }
                                });
                        } else {
                            this.benhNhanTiepTheo(0);
                        }
                    }, (err) => {
                        this.dialog.closeAll();
                        this.notificationService.showError(err);
                    });
            }
        }, (err) => {
            this.notificationService.showError(err.Message);
        })
    }

    ketPhucPhauThuatThuThuat() {
        this.dialog.open(PtttKetThucTuongTrinhPopupComponent, {
            disableClose: true,
            width: '600px',
            data: this.ptttTt.ycdvktId
        })
            .afterClosed()
            .subscribe((res) => {
                if (res === 'confirm') {
                    const phongBvId = this.currentAccessUser;
                    const yctnId = this.yeuCauTiepNhanId;
                    const url = 'PhauThuatThuThuat/GetListPtttBn?noiThucHienId=' + phongBvId.PhongBenhVienId + '&yctnId=' + yctnId + '&IsTuongTrinhLai=' + this.benhNhanHienTai.IsTuongTrinhLai;

                    if (this.dataSourceChuanBiPhauThuatThuThuat != null && this.dataSourceChuanBiPhauThuatThuThuat.data.some(x => x)) {
                        this.ptttTt.LoadDsPttt(url);
                        this.ptttTt.GetDvKhongThucHien();
                    }

                    if (this.dataSourceChuanBiPhauThuatThuThuat != null && !this.dataSourceChuanBiPhauThuatThuThuat.data.some(x => x)) {
                        this.ptttTt.LoadDsPttt(url, true, false);
                        this.ptttTt.GetDvKhongThucHien();
                    }
                }
            });
    }

    RutLui() {
        this.dialog.open(KhongThucHienPtttPopupComponent, {
            disableClose: true,
            width: '600px',
            data: this.ptttTt.ycdvktId
        })
            .afterClosed()
            .subscribe((res) => {
                if (res === 'confirm') {
                    const phongBvId = this.currentAccessUser;
                    const yctnId = this.yeuCauTiepNhanId;
                    const url = 'PhauThuatThuThuat/GetListPtttBn?noiThucHienId=' + phongBvId.PhongBenhVienId + '&yctnId=' + yctnId + '&IsTuongTrinhLai=' + this.benhNhanHienTai.IsTuongTrinhLai;

                    if (this.dataSourceChuanBiPhauThuatThuThuat != null && this.dataSourceChuanBiPhauThuatThuThuat.data.some(x => x)) {
                        this.ptttTt.LoadDsPttt(url);
                        this.ptttTt.GetDvKhongThucHien();
                    }

                    if (this.dataSourceChuanBiPhauThuatThuThuat != null && !this.dataSourceChuanBiPhauThuatThuThuat.data.some(x => x)) {
                        this.ptttTt.LoadDsPttt(url, true, false);
                        this.ptttTt.GetDvKhongThucHien();
                    }
                }
            });
    }

    UpdateTabTuongTrinhHeader(tuongTrinhHeader: string) {
        this.tuongTrinhHeader = tuongTrinhHeader;
    }

    phauThuatThuThuatCLSDataChangedAfterAddAndRemove(evt) {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        }

        this.getDichVuKyThuatChuaHoanThanhTrenHoanThanh();
    }

    phauThuatThuThuatCLSOutOfYeuCauDichVuKyThuats(evt) {
        this.getBenhNhanDangTuongTrinh();
    }

    finishKetLuan(evt) {
        if (evt) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: PtttMessage.MessageChuyenTabKetLuanQuaTheoDoi }
            }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
                this.benhNhanHienTai.TrangThaiPhauThuatThuThuat = EnumTrangThaiPhauThuatThuThuat.TheoDoi;

                if (result === 'Yes') {
                    this.deselectedTab();
                    this.lstStatusSelectedTab.selectedTabTheoDoi = true;

                    if (this.phauThuatThuThuatTheoDoiComponent) {
                        this.phauThuatThuThuatTheoDoiComponent.getTheoDoiSauPhauThuatThuThuat();
                    }
                }
            });
        }
    }

    huyKhamBenhNhan() {
        let hangDoiPhauThuatThuThuat = new HangDoiPhauThuatThuThuat();
        hangDoiPhauThuatThuThuat.PhongBenhVienId = this.currentAccessUser.PhongBenhVienId;

        this.apiService.post(`PhauThuatThuThuat/HuyKhamBenhNhanPTTT`, hangDoiPhauThuatThuThuat).subscribe(res => {
            this.isGetDataCanLamSanDone = true; //k load khi k có NB
            this.isGetDataDichVuKyThuatChuaHoanThanhTrenHoanThanhDone = true; //k load khi k có NB

            this.getDanhSachBenhNhanChoKhamHienTai();
        }, err => {
            this.notificationService.showError(err);
            this.closeAllDialogs();
        })
    }

    SoDuTaiKhoanChanged(evt) {
        if (evt) {
            this.benhNhanHienTai.SoDuTaikhoan = evt.SoDuTaiKhoan;
            this.benhNhanHienTai.SoDuTaiKhoanDisplay = evt.SoDuTaiKhoanDisplay;
        }
    }

    SoDuTaiKhoanUocLuongConLaiChanged(evt) {
        if (evt) {
            this.benhNhanHienTai.SoDuTaiKhoanUocLuongConLai = evt.SoDuTaiKhoanUocLuongConLai;
            this.benhNhanHienTai.SoDuTaiKhoanUocLuongConLaiDisplay = evt.SoDuTaiKhoanUocLuongConLaiDisplay;
        }
    }

    QuetMaQRCodeClick() {
        let elementBarcode: HTMLElement = document.getElementById(
            'barcodeActive'
        ) as HTMLElement;
        if (elementBarcode != undefined) {
            elementBarcode.click();
        }
    }

    changeQR(event) {
        if (event != null && typeof event == 'string' && event.endsWith('@')) {
            // this.modelQRCode = event;
            var dataTimKiem = event.split('|');
            if (dataTimKiem.length > 1) {
                this.searchBenhNhan = dataTimKiem[0];
            } else {
                this.searchBenhNhan = event.slice(0, -1);
            }
            this.getDanhSachBenhNhanChoKhamHienTai();
        } else {
            this.notificationService.showError('Không tìm thấy thông tin cần tìm.');
        }
        this.isScanF1 = false;
    }

    DichVuKhongCanTuongTrinhChanged(evt) {
        this.isDichVuKhongCanTuongTrinh = evt;
    }

    khongTuongTrinh() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: {
                Title: 'Xác nhận',
                Message: `Bạn chắc chắn không tường trình cho dịch vụ này?`,
            },
        }).afterClosed().subscribe((result) => {
            if (result == 'Yes') {
                let khongTuongTrinh = {
                    YeuCauTiepNhanId: this.yeuCauTiepNhanId,
                    YeuCauDichVuKyThuatId: this.ptttTt.ycdvktId,
                    PhongBenhVienId: this.currentAccessUser.PhongBenhVienId
                };

                this.apiService.post(`PhauThuatThuThuat/KhongTuongTrinh`, khongTuongTrinh).subscribe(res => {
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [`Không tường trình`]));
                    
                    // copy từ func ketPhucPhauThuatThuThuat
                    const phongBvId = this.currentAccessUser.PhongBenhVienId;
                    const yctnId = this.yeuCauTiepNhanId;
                    const url = 'PhauThuatThuThuat/GetListPtttBn?noiThucHienId=' + phongBvId + '&yctnId=' + yctnId + '&IsTuongTrinhLai=' + this.benhNhanHienTai.IsTuongTrinhLai;

                    if (this.dataSourceChuanBiPhauThuatThuThuat != null && this.dataSourceChuanBiPhauThuatThuThuat.data.some(x => x)) {
                        this.ptttTt.LoadDsPttt(url);
                        this.ptttTt.GetDvKhongThucHien();
                    }

                    if (this.dataSourceChuanBiPhauThuatThuThuat != null && !this.dataSourceChuanBiPhauThuatThuThuat.data.some(x => x)) {
                        this.ptttTt.LoadDsPttt(url, true, false);
                        this.ptttTt.GetDvKhongThucHien();
                    }
                }, err => {
                    this.notificationService.showError(err);
                    this.closeAllDialogs();
                })
            }
        }, (err) => {
            this.notificationService.showError(err);
        });
    }

    ketPhucTuongTrinhLai() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: {
                Title: 'Xác nhận',
                Message: `Bạn chắc chắn hoàn thành tường trình lại cho tất cả dịch vụ?`,
            },
        }).afterClosed().subscribe((result) => {
            if (result == 'Yes') {
                if (!this.loadingPopup) {
                    this.loadingPopup = this.dialog.open(LoadingComponent, {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang tải...' }
                    });
                }

                this.apiService.post(`PhauThuatThuThuat/HoanThanhTuongTrinhLai?phongBenhVienId=${this.currentAccessUser.PhongBenhVienId}&yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe(res => {
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [`Hoàn thành tường trình lại`]));

                    this.apiService.get<any>(`PhauThuatThuThuat/GetThongTinBenhNhanTiepTheo?phongKhamHienTaiId=${this.currentAccessUser.PhongBenhVienId}&yeuCauTiepNhanHienTaiId=${this.yeuCauTiepNhanId}`).subscribe((res) => {
                        if(res) {
                            this.dialog.open(PhauThuatThuThuatBnTiepTheoPopupComponent, {
                                disableClose: true,
                                width: '1000px',
                                data: res
                            })
                            .afterClosed()
                            .subscribe(dialogRes => {
                                if(dialogRes) {
                                    this.benhNhanTiepTheo(res.YeuCauTiepNhanId);
                                } else {
                                    this.benhNhanTiepTheo(0);
                                }
                            });
                        } else {
                            this.benhNhanTiepTheo(0);
                        }
                    }, (err) => {
                        this.dialog.closeAll();
                        this.notificationService.showError(err);
                    });
                }, err => {
                    this.notificationService.showError(err);
                    this.closeAllDialogs();
                })
            }
        }, (err) => {
            this.notificationService.showError(err);
        });
    }
}
