import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import icSearch from '@iconify/icons-ic/twotone-search';
import { HangDoTiemChungInputViewModel, ListParentTabStatusTiemChung, YeuCauDichVuKyThuat } from '../../tiem-chung.model';
import { EnumTrangThaiHangDoi, LaiHangDoiTiemVacxin } from 'src/app/shared/enum/tiem-vacxin.enum';
import { EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { MatDialog } from '@angular/material';
import { HoatDongNhanVien, LookupItemVo } from 'src/app/shared/models/common.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ThongTinTiemChungSharedComponent } from '../thong-tin-tiem-chung-shared/thong-tin-tiem-chung-shared.component';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hang-doi-shared',
  templateUrl: './hang-doi-shared.component.html',
  styleUrls: ['./hang-doi-shared.component.scss']
})

export class HangDoiSharedComponent implements OnInit {
    subscription: Subscription;

    popupLoadingData: any;
    phongKhamHienTai: LookupItemVo = {
        DisplayName: null,
        KeyId: Number(this.authService.getPhongLamViecId()),
    };
    
    modelQRCode: any;
    isScanF1: boolean = false;
    searchBenhNhan: string;
    
    gridHangDoiColumns: any[] = [];
    dataSourceChuanBiKham = {
        data: [],
        total: 0,
    };
    yeuCauKhamTiemChung: YeuCauDichVuKyThuat;
    
    icSearch = icSearch;

    lstParentTabStatus: ListParentTabStatusTiemChung = new ListParentTabStatusTiemChung();
    hangDoiThucHienTiem: LaiHangDoiTiemVacxin = LaiHangDoiTiemVacxin.ThucHienTiem;
    
    @Input() documentType: DocumentType = DocumentType.TiemChungThucHienTiem;
    @Input() loaiHangDoi: LaiHangDoiTiemVacxin = LaiHangDoiTiemVacxin.KhamSangLoc;
    @Input() isTabKhamLocChungReadOnly: boolean = false;
    @Input() isTabThucHienTiemDisplayed: boolean = false;
    @Input() isTabThucHienTiemReadOnly: boolean = false;

    @Input() isTabThucHienTiemDefault: boolean = false;
    @Input() isTabTheoDoiDefault: boolean = false;
    
    @ViewChild("maTNTemplate", { static: true }) maTNTemplate: TemplateRef<any>;
    @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;
    @ViewChild('gioiTinhTemplate', { static: true }) gioiTinhTemplate: TemplateRef<any>;
    @ViewChild('tuoiTemplate', { static: true }) tuoiTemplate: TemplateRef<any>;
    
    @ViewChild(ThongTinTiemChungSharedComponent, { static: false }) ThongTinTiemChungSharedComponent: ThongTinTiemChungSharedComponent;
    
    constructor(
        private dialog: MatDialog,
        private authService: AuthService,
        private apiService: ApiService,
        private notificationService: NotificationService,
        private broadcastService: BroadcastService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.gridHangDoiColumns = [
            { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 75, Sortable: true, Template: this.maTNTemplate },
            { Field: "HoTen", Title: "Họ tên", Width: 100, Sortable: true, ShowTooltip: true, Template: this.hoTenTemplate },
            { Field: "TenGioiTinh", Title: "GT", Width: 35, Sortable: true },
            { Field: "Tuoi", Title: "Tuổi", Width: 30, Sortable: true }
        ];

        this.phongKhamHienTai.KeyId = Number(this.authService.getPhongLamViecId());

        this.getDanhSachBenhNhanChoKhamHienTai(this.phongKhamHienTai.KeyId);
        this.getBenhNhanDangKham(this.phongKhamHienTai.KeyId);
    }

    ngAfterContentInit() {
        this.subscription = this.broadcastService.on('ChuyenPhong', (event) => {
            if (event.message) {
                this.ChuyenPhongNoiBo(event.message);
            }
        });

        this.subscription = this.broadcastService.on('TiemChungThemChiDinhGoiDichVuTheoBenhNhanThanhCong', (event) => {
            if (event.message) {
                this.getBenhNhanDangKham(this.phongKhamHienTai.KeyId);
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
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
    }

    // changeTabParent(element: any, event: any) {
    //     this.lstParentTabStatus.tabDanhSachHoanThanhKhamSelected = !this.lstParentTabStatus.tabDanhSachHoanThanhKhamSelected;
    //     this.lstParentTabStatus.tabHangDoiSelected = !this.lstParentTabStatus.tabHangDoiSelected;
    // }


    onParentTabSelect(event) {
        if (event.index == 0 || event.title == 'HÀNG ĐỢI') {
            // dùng để ràng buộc hot key
            this.lstParentTabStatus.tabHangDoiSelected = true;

            // reload hàng chờ
            this.getDanhSachBenhNhanChoKhamHienTai(
                this.phongKhamHienTai.KeyId,
                this.searchBenhNhan == null ? "" : this.searchBenhNhan
            );
        }
        else {
            this.lstParentTabStatus.tabHangDoiSelected = false;
        }
    }

    //=================== Hàng đợi =========================================================================
    getDanhSachBenhNhanChoKhamHienTai(phongKhamId: number, searchString: string = "") {
        var obj = {
            PhongKhamHienTaiId: phongKhamId,
            SearchString: searchString,
            LoaiHangDoi: this.loaiHangDoi
        }
        this.apiService.post<Array<any>>("TiemChung/GetDanhSachChoKhamHienTai", obj)
            .subscribe((resultData) => {
                if (resultData !== undefined && resultData != null) {
                    this.dataSourceChuanBiKham = {
                        data: resultData,
                        total: resultData.length,
                    };
                } else {
                    this.dataSourceChuanBiKham = {
                        data: [],
                        total: 0,
                    };
                }
            });
    }

    timKiemBenhNhan(event: any) {
        if (event.key == "Enter") {
            this.getDanhSachBenhNhanChoKhamHienTai(
                this.phongKhamHienTai.KeyId,
                this.searchBenhNhan == null ? "" : this.searchBenhNhan
            );
        }
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
            this.getDanhSachBenhNhanChoKhamHienTai(this.phongKhamHienTai.KeyId);
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
            this.getDanhSachBenhNhanChoKhamHienTai(
                this.phongKhamHienTai.KeyId,
                this.searchBenhNhan == null ? "" : this.searchBenhNhan
            );
        } else {
            this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
        }
        this.isScanF1 = false;
    }

    batDauKham(hangDoi: any) {
        if (
            hangDoi == undefined ||
            hangDoi == null ||
            hangDoi.Id == this.yeuCauKhamTiemChung.Id
        ) {
            return;
        }
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.showPopupLoadingData();
            if (this.yeuCauKhamTiemChung.Id != 0 && this.yeuCauKhamTiemChung.isDataKhamSangLocChungChange) {
                this.ThongTinTiemChungSharedComponent.luuKhamSangLoc(hangDoi);
                // this.XuLyBatDauKhamBenhNhan(hangDoi.Id, hangDoi.YeuCauTiemVacxinId);
            } else {
                this.XuLyBatDauKhamBenhNhan(hangDoi.Id, hangDoi.YeuCauTiemVacxinId);
            }
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    XuLyBatDauKhamBenhNhan(hangDoiId: number, hangDoiVacxinId: number = null, hoanThanhKham: boolean = false) {
        let hangDoiInput = new HangDoTiemChungInputViewModel();
        hangDoiInput.HangDoiDangKhamId = this.yeuCauKhamTiemChung.Id;
        hangDoiInput.HangDoiBatDauKhamId = hangDoiId;
        hangDoiInput.HangDoiVacXinId = hangDoiVacxinId;
        hangDoiInput.HoanThanhKham = hoanThanhKham;
        hangDoiInput.LoaiHangDoi = this.loaiHangDoi
        this.apiService
            .post("TiemChung/XuLyBatDauKhamBenhNhan", hangDoiInput)
            .subscribe(
                (resultData) => {
                    this.getDanhSachBenhNhanChoKhamHienTai(this.phongKhamHienTai.KeyId, this.searchBenhNhan);

                    // get người bệnh hiện tại
                    this.getBenhNhanDangKham(this.phongKhamHienTai.KeyId, hangDoiId);
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Bắt đầu khám",]));
                },
                (err: ApiError) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                    this.closePopupLoadingData();
                }
            );
    }

    getBenhNhanDangKham(phongKhamId: number, yeuCauKhamTiemChungId: number = null) {
        this.closePopupLoadingData();
        this.yeuCauKhamTiemChung = new YeuCauDichVuKyThuat();

        this.showPopupLoadingData();
        var obj = {
            "PhongKhamHienTaiId": phongKhamId,
            "YeuCauKhamTiemChungId": yeuCauKhamTiemChungId,
            "TrangThaiHangDoi": EnumTrangThaiHangDoi.DangKham,
            "LoaiHangDoi": this.loaiHangDoi
        }
        this.apiService.post<YeuCauDichVuKyThuat>("TiemChung/GetYeuCauKhamTiemChungDangKhamTheoPhongKham", obj)
            .subscribe(
                (resultData) => {
                    if (resultData !== undefined && resultData != null) {
                        this.yeuCauKhamTiemChung = resultData;
                        // this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj = JSON.parse(
                        //     this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplate
                        // );
                        
                        // this.bindDataDynamicComponent();

                        // this.ganThongTinKhamTamThoi();
                        // this.ganThongTinYeuCauKhamBenhPerevious();

                        // this.unSelectedTab();
                        // let phongBenhVienId = this.authService.getPhongLamViecId();
                        // let nhanVienId = this.authService.getAccessUser().Id;
                        // this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                        // this.isSelectedParentTabKhamBenh = true;

                        if (
                            this.yeuCauKhamTiemChung.YeuCauTiepNhan.NamSinh != null &&
                            this.yeuCauKhamTiemChung.YeuCauTiepNhan.ThangSinh != null &&
                            this.yeuCauKhamTiemChung.YeuCauTiepNhan.NgaySinh != null
                        ) {
                            var ngaySinh = new Date(
                                this.yeuCauKhamTiemChung.YeuCauTiepNhan.ThangSinh +
                                "/" +
                                this.yeuCauKhamTiemChung.YeuCauTiepNhan.NgaySinh +
                                "/" +
                                this.yeuCauKhamTiemChung.YeuCauTiepNhan.NamSinh +
                                "/"
                            );
                            this.getAge(ngaySinh, new Date());
                        }

                        this.closePopupLoadingData();
                    } else {
                        this.yeuCauKhamTiemChung = new YeuCauDichVuKyThuat();
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

    getAge(date_1, date_2) {
        let yAppendix, mAppendix, dAppendix;

        let days = date_2.getDate() - date_1.getDate();

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
            this.yeuCauKhamTiemChung.IsDuoi6Tuoi = true;
        } else {
            this.yeuCauKhamTiemChung.IsDuoi6Tuoi = false;
        }

        this.yeuCauKhamTiemChung.Duoi6TuoiDisplay =
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
    //========================================================================================================

    evtKhamSangLocBenhNhanTiepTheo(hangDoi) {
        if(hangDoi.clearDataBenhNhan != undefined && hangDoi.clearDataBenhNhan == true)
        {
            this.yeuCauKhamTiemChung = new YeuCauDichVuKyThuat();
        }
        this.XuLyBatDauKhamBenhNhan(hangDoi.Id, hangDoi.YeuCauTiemVacxinId, hangDoi.hoanThanhKham);
    }

    evtKhamSangLocLuuThanhCong(obj) {
        if(obj) {
            if(obj.phongBenhVien) {
                this.xuLyChuyenPhongKham(obj.phongBenhVien);
            } else if (!obj.isHoanThanhKhamSangLoc && obj.isGetData) {
                this.getBenhNhanDangKham(this.phongKhamHienTai.KeyId);
            }
        }
    }

    //Broadcast
    ChuyenPhongNoiBo(item: any) {
        let phongBenhVienId = this.authService.getPhongLamViecId();
        
        if (phongBenhVienId !== item.KeyId) {
            if (this.yeuCauKhamTiemChung && this.yeuCauKhamTiemChung.Id != 0 && this.yeuCauKhamTiemChung.isDataKhamSangLocChungChange) {
                if(this.ThongTinTiemChungSharedComponent.lstTabStatus.tabKhamSangLocChungSelected) {
                    this.ThongTinTiemChungSharedComponent.luuKhamSangLoc(null, null, item, 'Bạn có muốn lưu khám sàng lọc cho khách hàng này hay không?');
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
        this.phongKhamHienTai.KeyId = item.KeyId;
        this.yeuCauKhamTiemChung = new YeuCauDichVuKyThuat();
        this.luuHoatDongNhanVien(item.KeyId);

        //this.phongKhamHienTai.KeyId = Number(this.authService.getPhongLamViecId());

        // this.getDanhSachBenhNhanChoKhamHienTai(this.phongKhamHienTai.KeyId);
        // this.getBenhNhanDangKham(this.phongKhamHienTai.KeyId);

        // this.broadcastService.broadcast({
        //     name: 'ChuyenPhongThanhCong',
        //     message: true,
        // });

        // if (item) {
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

    luuHoatDongNhanVien(phongKhamBenhId: number) {
        let hoatDongNhanVien: HoatDongNhanVien = new HoatDongNhanVien(phongKhamBenhId);
        this.authService.setPhongLamViecId(phongKhamBenhId);
        this.apiService.post('HoatDongNhanVien/LuuHoatDongNhanVien', hoatDongNhanVien).subscribe((resultData) => { 
            this.broadcastService.broadcast({
                name: 'ChuyenPhongThanhCong',
                message: true,
            });
            this.refreshPage();

        });
    }
    //====================

    evtClearBenhNhanHienTai(event)
    {
        if(event)
        {
            this.yeuCauKhamTiemChung = new YeuCauDichVuKyThuat();
            this.getDanhSachBenhNhanChoKhamHienTai(
                this.phongKhamHienTai.KeyId,
                this.searchBenhNhan == null ? "" : this.searchBenhNhan
            );
        }
    }
}