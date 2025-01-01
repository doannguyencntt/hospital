import { Component, EventEmitter, HostListener, Input, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { EnumTypeLoadingData, TrangThaiYeuCauDichVuKyThuat } from 'src/app/shared/enum/kham-benh.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LaiHangDoiTiemVacxin } from 'src/app/shared/enum/tiem-vacxin.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LookupItemVo } from 'src/app/shared/models/common.model';
import { ListTabStatusKhamTiemChung, TiemChungYeuCauDichVuKyThuatKhamSangLoc, YeuCauDichVuKyThuat } from '../../tiem-chung.model';
import { BenhNhanTiemChungTiepTheoPopupComponent } from '../benh-nhan-tiem-chung-tiep-theo-popup/benh-nhan-tiem-chung-tiep-theo-popup.component';
import { KhamSangLocChungComponent } from './kham-sang-loc-chung/kham-sang-loc-chung.component';
import { PopupInBanKiemTruocTiemComponent } from './popup-in-ban-kiem-truoc-tiem/popup-in-ban-kiem-truoc-tiem.component';
import { TheoDoiSauTiemComponent } from './theo-doi-sau-tiem/theo-doi-sau-tiem.component';
import { ThucHienTiemChungComponent } from './thuc-hien-tiem-chung/thuc-hien-tiem-chung.component';

declare var $: any;

@Component({
    selector: 'app-thong-tin-tiem-chung-shared',
    templateUrl: './thong-tin-tiem-chung-shared.component.html',
    styleUrls: ['./thong-tin-tiem-chung-shared.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ThongTinTiemChungSharedComponent implements OnInit {
    activeTab = 'card0';
    loadingDataPopup: any;
    validationErrors: any;
    subscription: Subscription;
    
    messVuotQuaTamUng: string = "Chỉ định này đã vượt quá số tiền tạm ứng của người bệnh.";
    messKhongKhopHuongDanBYT: string = "Kết luận này không khớp với hướng dẫn của BYT.";
    messLuuSangLocThanhCong: string = "Lưu thông tin khám sàng lọc chung";

    lstTabStatus: ListTabStatusKhamTiemChung = new ListTabStatusKhamTiemChung();
    
    @Input() documentType: DocumentType = DocumentType.TiemChungThucHienTiem;
    @Input() thongTinBenhNhan: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
    @Input() phongKhamHienTai: LookupItemVo = null;

    @Input() isTabKhamLocChungReadOnly: boolean = false;
    @Input() isTabThucHienTiemReadOnly: boolean = false;

    @Input() isTabThucHienTiemDisplayed: boolean = false;
    @Input() isTabTheoDoiDisplayed: boolean = false;

    @Input() isTabThucHienTiemDefault: boolean = false;
    @Input() isTabTheoDoiDefault: boolean = false;

    @Input() isPopupLichSuTiemChung: boolean = false;
    @Input() isLichSuTiemChung: boolean = false;

    @Output() outputKhamSangLocBenhNhanTiepTheo = new EventEmitter();
    @Output() outputKhamSangLocLuuThanhCong = new EventEmitter();
    @Output() outputClearBenhNhanHienTai = new EventEmitter();

    @ViewChild(TheoDoiSauTiemComponent, { static: false }) theoDoiSauTiemComponent: TheoDoiSauTiemComponent;
    @ViewChild(KhamSangLocChungComponent, { static: false }) khamSangLocChungComponent: KhamSangLocChungComponent;
    @ViewChild(ThucHienTiemChungComponent, { static: false }) thucHienTiemChungChild: ThucHienTiemChungComponent;

    constructor(private dialog: MatDialog, private notificationService: NotificationService, private broadcastService: BroadcastService,
                private apiService: ApiService, private authService: AuthService) { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.thongTinBenhNhan && changes.thongTinBenhNhan.currentValue) {
            if (this.isTabThucHienTiemDefault) {
                this.deselectedTab();
                this.lstTabStatus.tabThucHienTiemSelected = true;
            } else if (this.isTabTheoDoiDefault && !this.thongTinBenhNhan.IsKhongTiemChung) {
                this.deselectedTab();
                this.lstTabStatus.tabTheoDoiSelected = true;
            } else {
                this.deselectedTab();
                this.lstTabStatus.tabKhamSangLocChungSelected = true;
            }
        }
    }

    ngAfterContentInit() {
        this.subscription = this.broadcastService.on('XoaVacxinThanhCong', (event) => {
            if (event.message) {
                this.xuLyLuuKhamSangLoc();
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    changeTab(element: any, event: any) {
        const self = this;

        setTimeout(() => {
            self.scrollTo(element);
        }, 100);

        if (event.index === 0) {
            self.deselectedTab();
            self.lstTabStatus.tabKhamSangLocChungSelected = true;
        } else if (event.index === 1) {
            self.deselectedTab();
            self.lstTabStatus.tabLichSuTiemSelected = true;
        } else if (event.index === 2) {
            self.deselectedTab();
            self.lstTabStatus.tabThucHienTiemSelected = true;
        } else if (event.index === 3) {
            self.deselectedTab();
            self.lstTabStatus.tabTheoDoiSelected = true;
        }
    }

    deselectedTab() {
        this.lstTabStatus.tabKhamSangLocChungSelected = false;
        this.lstTabStatus.tabLichSuTiemSelected = false;
        this.lstTabStatus.tabThucHienTiemSelected = false;
        this.lstTabStatus.tabTheoDoiSelected = false;
    }

    scrollTo(element) {
        $('.sidenav-content').animate({
            scrollTop: $('#' + element).position().top + 85,
        });

        this.activeTab = element;
    }

    xuLyQuayLaiChuaKham() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn quay lại chưa khám cho người bệnh này không?' }
            }).afterClosed().subscribe(result => {
                if (result == 'Yes') {
                    this.showPopupLoadingData();
                    this.apiService.put("TiemChung/XuLyTiemChungQuayLaiChuaKhamAsync?yeuCauDichVuKyThuatId=" + this.thongTinBenhNhan.Id).subscribe(() => {
                        this.closePopupLoadingData();
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Quay lại chưa khám"]));
                        window.location.reload();
                    }, (err: ApiError) => {
                        if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                        }
                        this.closePopupLoadingData();
                    });
                }
            });
        }
        else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    luuKhamSangLoc(hangDoi: any = null, isHoanThanhKhamSangLoc: boolean = false, chuyenPhongNoiBo: any = null, message: string = 'Bạn chắc chắn lưu khám sàng lọc cho khách hàng này hay chưa?') {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: message }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.xuLyLuuKhamSangLoc(hangDoi, isHoanThanhKhamSangLoc, chuyenPhongNoiBo, message)
            } else {
                if(hangDoi) {
                    hangDoi.HoanThanhKham = false;
                    this.outputKhamSangLocBenhNhanTiepTheo.emit(hangDoi);
                } else {
                    let obj = {
                        phongBenhVien: chuyenPhongNoiBo,
                        isHoanThanhKhamSangLoc: isHoanThanhKhamSangLoc,
                        isGetData: false,
                        hangDoi: hangDoi
                    }
                    
                    this.outputKhamSangLocLuuThanhCong.emit(obj);
                }
            }
        });
    }

    xuLyLuuKhamSangLoc(hangDoi: any = null, isHoanThanhKhamSangLoc: boolean = false, chuyenPhongNoiBo: any = null, message: string = 'Bạn chắc chắn lưu khám sàng lọc cho khách hàng này hay chưa?') {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.thongTinBenhNhan.validationErrors = null;

        if(this.khamSangLocChungComponent.processDynamicComponent()) {
            this.apiService.post<any>('TiemChung/LuuKhamSangLocChung', this.thongTinBenhNhan).subscribe(res => {
                let mess = CommonService.format(SystemMessage.ActionSuccessfully, [`${this.messLuuSangLocThanhCong}`]);
                
                // if (res.IsVuotQuaSoDuTaiKhoan || res.IsKhacKetLuanVoiBYT) {
                if (res.IsVuotQuaSoDuTaiKhoan) {
                    if(res.IsVuotQuaSoDuTaiKhoan) {
                        mess = `${mess}\n${this.messVuotQuaTamUng}`; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                    }

                    // if(res.IsKhacKetLuanVoiBYT) {
                    //     mess = `${mess}\n${this.messKhongKhopHuongDanBYT}`;
                    // }
                    this.notificationService.showWarning(mess);
                }
                else {
                    this.notificationService.showSuccess(mess);
                }

                this.closePopupLoadingData();

                if(hangDoi) {
                    hangDoi.HoanThanhKham = false;
                    this.outputKhamSangLocBenhNhanTiepTheo.emit(hangDoi);
                } else if(isHoanThanhKhamSangLoc) {
                    this.hoanThanhKhamSangLoc();
                }

                let obj = {
                    phongBenhVien: chuyenPhongNoiBo,
                    isHoanThanhKhamSangLoc: isHoanThanhKhamSangLoc,
                    isGetData: true
                }

                this.outputKhamSangLocLuuThanhCong.emit(obj);
            }, (err: any) => {
                err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.thongTinBenhNhan.validationErrors = err.ValidationErrors;
                this.closePopupLoadingData();
            });
        } else {
            this.closePopupLoadingData();
        }
    }

    hoanThanhKhamSangLoc() {
        this.showPopupLoadingData(EnumTypeLoadingData.View);

        let obj = {
            PhongKhamHienTaiId: this.phongKhamHienTai.KeyId,
            LoaiHangDoi: LaiHangDoiTiemVacxin.KhamSangLoc
        }

        this.apiService.post<any>(`TiemChung/GetYeuCauKhamTiemChungTiepTheo`, obj).subscribe((result) => {
            this.closePopupLoadingData();

            this.dialog.open(BenhNhanTiemChungTiepTheoPopupComponent, {
                disableClose: true,
                width: '1000px',
                data: result
            })
            .afterClosed()
            .subscribe(dialogRes => {
                if (dialogRes == "boQua" || dialogRes == null || dialogRes == 0) {
                    if(this.thongTinBenhNhan.isDataKhamSangLocChungChange) {
                        let obj = {
                            isHoanThanhKhamSangLoc: false,
                            isGetData: true
                        }
    
                        this.outputKhamSangLocLuuThanhCong.emit(obj);
                    }
                } else if (dialogRes && dialogRes == 'tuChon') {
                    this.apiService.post<any>(`TiemChung/XuLyHoanThanhCongDoanKhamTiemChungHienTaiCuaBenhNhan?yeuCauDichVuKyThuatId=${this.thongTinBenhNhan.Id}&hoanThanhKham=${true}`).subscribe(res => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [`Hoàn thành khám sàng lọc chung`]));
                        this.outputClearBenhNhanHienTai.emit(true);
                        this.closePopupLoadingData();
                    }, (err: any) => {
                        err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.thongTinBenhNhan.validationErrors = err.ValidationErrors;
                    });
                } else if(dialogRes && dialogRes > 0) {
                    let hangDoi = {
                        Id: dialogRes,
                        YeuCauTiemVacxinId: null,
                        hoanThanhKham: true
                    }

                    this.outputKhamSangLocBenhNhanTiepTheo.emit(hangDoi); 
                };
            });
        }, (err) => {
            this.notificationService.showError(err);
            this.dialog.closeAll();
        });
    }

    luuVaHoanThanhKhamSangLoc() {
        if(this.thongTinBenhNhan.isDataKhamSangLocChungChange || this.thongTinBenhNhan.KhamSangLocTiemChung.Id == 0) {
            this.luuKhamSangLoc(null, true);
        } else {
            this.hoanThanhKhamSangLoc();
        }
    }

    inPhieuKhamSangLoc() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            if(this.thongTinBenhNhan.isDataKhamSangLocChungChange || this.thongTinBenhNhan.KhamSangLocTiemChung.Id == 0) {
                this.notificationService.showError('Vui lòng lưu thông tin khám sàng lọc');
                return false;
            }

            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn in bản kiểm trước tiêm chủng này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    this.showPopupLoadingData(EnumTypeLoadingData.View);
                    
                    let inBanKiemTruocTiemChung = {
                        YeuCauDichVuKyThuatKhamSangLocId: this.thongTinBenhNhan.Id,
                        Hosting: window.location.protocol + "//" + window.location.host
                    }

                    this.apiService.post<any>(`TiemChung/InBanKiemTruocTiemChungDoiVoiTreEm`, inBanKiemTruocTiemChung).subscribe((res) => {
                        this.closePopupLoadingData();

                        this.dialog.open(PopupInBanKiemTruocTiemComponent, {
                            disableClose: true,
                            width: '1200px',
                            // height: "550px",
                            data: res
                        }).afterClosed().subscribe(() => {
                        });
                    }, (err: ApiError) => {
                        err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                        this.closePopupLoadingData();
                    });
                }
            })
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    moLaiKhamSangLoc() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn mở lại khám sàng lọc cho khách hàng này hay không?' }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
            }
        });
    }

    luuThucHienTiem(isHoanThanhTiem: boolean = false) {
        if (isHoanThanhTiem) {
            this.showPopupLoadingData(EnumTypeLoadingData.View);
            let obj = {
                PhongKhamHienTaiId: this.phongKhamHienTai.KeyId,
                LoaiHangDoi: LaiHangDoiTiemVacxin.ThucHienTiem
            }

            this.apiService.post<any>(`TiemChung/GetYeuCauKhamTiemChungTiepTheo`, obj).subscribe((result) => {
                this.closePopupLoadingData();
                this.dialog.open(BenhNhanTiemChungTiepTheoPopupComponent, {
                    disableClose: true,
                    width: '1000px',
                    data: result
                })
                    .afterClosed()
                    .subscribe(dialogRes => {
                        if (dialogRes == "boQua" || dialogRes == null || dialogRes == 0) {

                        } else if (dialogRes && dialogRes == 'tuChon') {
                            this.xuLyLuuThongTinThucHienTiem(isHoanThanhTiem);
                        } else if (dialogRes && dialogRes > 0) {
                            let phongHienTaiId = Number(this.authService.getPhongLamViecId());
                            let arrVacxin = result.KhamSangLocTiemChung.YeuCauDichVuKyThuats
                                    .filter(x => x.NoiThucHienId == phongHienTaiId && x.TrangThai != TrangThaiYeuCauDichVuKyThuat.DaHuy)
                                    .sort((n1,n2) => (n1.TiemChung.TrangThaiTiemChung - n2.TiemChung.TrangThaiTiemChung) || (n2.TiemChung.MuiSo - n1.TiemChung.MuiSo));
                            var yeuCauVacxinId = arrVacxin.length > 0 ? arrVacxin[0].Id : dialogRes;
                            this.xuLyLuuThongTinThucHienTiem(isHoanThanhTiem, dialogRes, yeuCauVacxinId);
                        };
                    });
            }, (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
        }
        else {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn cập nhật thông tin thực hiện tiêm này hay không?' }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    this.xuLyLuuThongTinThucHienTiem();
                }
            });
        }
    }

    xuLyLuuThongTinThucHienTiem(isHoanThanhTiem: boolean = false, hangDoiTiepTheoId: number = null, yeuCauTiemVacxinId: number = null) {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.validationErrors = [];

        var thongTinTiem = new TiemChungYeuCauDichVuKyThuatKhamSangLoc();
        thongTinTiem.Id = this.thongTinBenhNhan.KhamSangLocTiemChung.Id;
        thongTinTiem.NoiTheoDoiSauTiemId = this.thongTinBenhNhan.KhamSangLocTiemChung.NoiTheoDoiSauTiemId;
        thongTinTiem.YeuCauDichVuKyThuats = this.thucHienTiemChungChild.getDataThongTinTiemVacxin();
        thongTinTiem.IsHoanThanhTiem = isHoanThanhTiem;

        this.apiService.put("TiemChung/XuLyLuuThongTinThucHienTiem", thongTinTiem)
            .subscribe(
                (resultData) => {
                    this.closePopupLoadingData();
                    let mess = "Lưu";
                    if (isHoanThanhTiem) {
                        mess = "Lưu và hoàn thành tiêm";
                    }
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [mess]));
                    if (isHoanThanhTiem) {
                        if (hangDoiTiepTheoId == null) {
                            // xử lý hoàn thành công đoạn khám
                            //this.thongTinBenhNhan = new YeuCauDichVuKyThuat();
                            this.outputClearBenhNhanHienTai.emit(true);
                        }
                        else {
                            let hangDoi = {
                                Id: hangDoiTiepTheoId,
                                YeuCauTiemVacxinId: yeuCauTiemVacxinId,
                                hoanThanhKham: false,
                                clearDataBenhNhan: true
                            }
                            this.outputKhamSangLocBenhNhanTiepTheo.emit(hangDoi);
                        }
                    }
                    else
                    {
                        this.thucHienTiemChungChild.disabledDataVacxinDaTiem();
                    }
                },
                (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                    this.closePopupLoadingData();
                }
            );
    }

    luuTheoDoiSauTiem() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn cập nhật theo dõi này hay không?' }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.theoDoiSauTiemComponent.luuTheoDoiSauTiem();
            }
        });
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

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        let self = this;

        if (self.thongTinBenhNhan.Id !== 0) {
            // kiểm tra lưu // ctr + s
            if (event.ctrlKey && event.keyCode == 83) {
                // Chỉ định CLS
                if (self.lstTabStatus.tabKhamSangLocChungSelected) {
                    event.preventDefault();
                    
                    if(!self.isTabKhamLocChungReadOnly && self.thongTinBenhNhan.isDataKhamSangLocChungChange) {
                        self.luuKhamSangLoc();
                    }
                } else if (self.lstTabStatus.tabLichSuTiemSelected) {
                    event.preventDefault();
                } else if (self.lstTabStatus.tabThucHienTiemSelected) {
                    event.preventDefault();

                    if (!self.isTabThucHienTiemReadOnly) {
                        self.luuThucHienTiem()
                    }
                } else if (self.lstTabStatus.tabTheoDoiSelected) {
                    event.preventDefault();

                    if(!self.isTabKhamLocChungReadOnly && !self.thongTinBenhNhan.IsKhongTiemChung) {
                        self.luuTheoDoiSauTiem();
                    }
                }
            } else if (event.ctrlKey && event.keyCode == 72) {
                // Chỉ định CLS
                if (self.lstTabStatus.tabKhamSangLocChungSelected) {
                    event.preventDefault();
                    
                    if(!self.isTabKhamLocChungReadOnly) {
                        self.luuVaHoanThanhKhamSangLoc();
                    }
                } else if (self.lstTabStatus.tabLichSuTiemSelected) {
                    event.preventDefault();
                } else if (self.lstTabStatus.tabThucHienTiemSelected) {
                    event.preventDefault();

                    if (!self.isTabThucHienTiemReadOnly) {
                        self.luuThucHienTiem(true)
                    }
                } else if (self.lstTabStatus.tabTheoDoiSelected) {
                    event.preventDefault();
                }
            }
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
    }
}