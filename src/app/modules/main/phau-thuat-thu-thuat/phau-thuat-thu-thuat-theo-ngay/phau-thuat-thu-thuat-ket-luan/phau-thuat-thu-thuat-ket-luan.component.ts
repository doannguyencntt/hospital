import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';

import { EnumNhomChucDanh } from 'src/app/shared/enum/nhom-chuc-danh-enum';
import { EnumTrangThaiPhauThuatThuThuat, EnumTrangThaiTheoDoiSauPhauThuatThuThuat } from 'src/app/shared/enum/phau-thuat-thu-thuat.enum';
import { TheoDoiSauPhauThuatThuThuat } from '../../phau-thuat-thu-thuat.model';

import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';

import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { PhauThuatThuThuatBnTiepTheoPopupComponent } from '../phau-thuat-thu-thuat-bn-tiep-theo-popup/phau-thuat-thu-thuat-bn-tiep-theo-popup.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
    selector: 'app-phau-thuat-thu-thuat-ket-luan',
    templateUrl: './phau-thuat-thu-thuat-ket-luan.component.html',
    styleUrls: ['./phau-thuat-thu-thuat-ket-luan.component.scss']
})
export class PhauThuatThuThuatKetLuanComponent implements OnInit {
    isChangeData: boolean = false;
    isDataNotChanged: boolean = true; //cấm dùng hotkeys
    isSavingData: boolean = false;
    isRefreshingData: boolean = false;
    isFirstTime: boolean = true;

    enumBacSiPhuTrach: EnumNhomChucDanh = EnumNhomChucDanh.BacSi;
    enumDieuDuongPhuTrach: EnumNhomChucDanh = EnumNhomChucDanh.DieuDuong;
    enumTheoDoi = EnumTrangThaiPhauThuatThuThuat;
    enumTrangThaiPhauThuatThuThuat = EnumTrangThaiPhauThuatThuThuat;

    theoDoiSauPhauThuatThuThuat: TheoDoiSauPhauThuatThuThuat;

    radioKetLuan = [
        { Value: EnumTrangThaiPhauThuatThuThuat.TheoDoi, Text: 'Theo dõi' },
        { Value: EnumTrangThaiPhauThuatThuThuat.ChuyenGiao, Text: 'Chuyển giao NB ' }
    ];

    validationErrors: any[] = [];

    @Input() thongTinBenhNhan: any = null;
    @Input() currentAccessUser: any = null;

    @Output() outputBenhNhanTiepTheo = new EventEmitter();
    @Output() outputPhauThuatThuThuatKetLuanDataChanged = new EventEmitter();
    @Output() thongTinBenhNhanChanged = new EventEmitter();

    constructor(private apiService: ApiService, private notificationService: NotificationService, private dialog: MatDialog) {
        this.theoDoiSauPhauThuatThuThuat = new TheoDoiSauPhauThuatThuThuat();
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.thongTinBenhNhan && changes.thongTinBenhNhan.currentValue) {
            this.theoDoiSauPhauThuatThuThuat.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
            this.isChangeData = true;
            this.huyKetLuan();
        }
    }

    onDataChange(evt) {
        if(!this.isChangeData) {
            this.isChangeData = true;
            this.outputPhauThuatThuThuatKetLuanDataChanged.emit(true);
            this.isDataNotChanged = false;
        }
    }

    clearData() {
        this.theoDoiSauPhauThuatThuThuat.BacSiPhuTrachTheoDoiId = 0;
        this.theoDoiSauPhauThuatThuThuat.BacSiPhuTrachTheoDoiDisplay = '';
        this.theoDoiSauPhauThuatThuThuat.DieuDuongPhuTrachTheoDoiId = 0;
        this.theoDoiSauPhauThuatThuThuat.DieuDuongPhuTrachTheoDoiDisplay = '';
        this.theoDoiSauPhauThuatThuThuat.ThoiDiemKetThucTheoDoi = null;
        this.theoDoiSauPhauThuatThuThuat.GhiChuTheoDoi = null;
        this.theoDoiSauPhauThuatThuThuat.TrangThaiPhauThuatThuThuat = EnumTrangThaiPhauThuatThuThuat.TheoDoi;
        this.isRefreshingData = false;
    }

    getTheoDoiSauPhauThuatThuThuat() {
        if(!this.isFirstTime) {
            this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        } else {
            this.isFirstTime = false;
        }
        
        this.apiService.get<any>(`PhauThuatThuThuat/GetTheoDoiSauPhauThuatThuThuatByYeuCauTiepNhan?yeuCauTiepNhanId=${this.thongTinBenhNhan.YeuCauTiepNhanId}&isTuongTrinhLai=${this.thongTinBenhNhan.IsTuongTrinhLai}`).subscribe(res => {
            if(res) {
                this.theoDoiSauPhauThuatThuThuat = res;

                if(this.thongTinBenhNhan.IsTuongTrinhLai && this.thongTinBenhNhan.IsTuongTrinhLaiCoKetLuan && !this.thongTinBenhNhan.IsTuongTrinhLaiCoTheoDoi) {
                    this.theoDoiSauPhauThuatThuThuat.TrangThaiPhauThuatThuThuat = EnumTrangThaiPhauThuatThuThuat.ChuyenGiao;
                } else {
                    this.theoDoiSauPhauThuatThuThuat.TrangThaiPhauThuatThuThuat = EnumTrangThaiPhauThuatThuThuat.TheoDoi;
                }

                this.dialog.closeAll();
                this.isRefreshingData = false;
            }
        }, (err) => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
            this.isRefreshingData = false;
        })
    }

    huyKetLuan() {
        if(this.isRefreshingData || !this.isChangeData) {
            return;
        }

        this.isRefreshingData = true;
        this.isChangeData = false;
        this.outputPhauThuatThuThuatKetLuanDataChanged.emit(false);
        this.isDataNotChanged = true;
        this.validationErrors = null;
        
        if(this.thongTinBenhNhan.TrangThaiPhauThuatThuThuat == this.enumTrangThaiPhauThuatThuThuat.TheoDoi || this.thongTinBenhNhan.IsTuongTrinhLaiCoKetLuan) {
            this.getTheoDoiSauPhauThuatThuThuat();
        } else {
            this.clearData();
        }
    }

    luuKetLuan() {
        if(this.isDataNotChanged == true || this.isSavingData == true) {
            return;
        }

        this.validationErrors = null;
        this.isSavingData = true;
        this.theoDoiSauPhauThuatThuThuat.PhongBenhVienId = this.currentAccessUser.PhongBenhVienId;
        // this.theoDoiSauPhauThuatThuThuat.ThoiDiemBatDauTheoDoi = new Date();
        if(this.theoDoiSauPhauThuatThuThuat.TrangThaiPhauThuatThuThuat == EnumTrangThaiPhauThuatThuThuat.TheoDoi) {
            this.apiService.post<any>(`PhauThuatThuThuat/TheoDoiSauPhauThuatThuThuat`, this.theoDoiSauPhauThuatThuThuat).subscribe(res => {
                if(res) {
                    this.theoDoiSauPhauThuatThuThuat.Id = res.Id;
                    this.isChangeData = false;
                    this.outputPhauThuatThuThuatKetLuanDataChanged.emit(false);
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [`Lưu thông tin theo dõi NB ${this.thongTinBenhNhan.HoTen}`]));
                    this.thongTinBenhNhanChanged.emit(true);
                    this.isDataNotChanged = true;
                    this.isSavingData = false;
                    // this.outputBenhNhanTiepTheo.emit(res.YeuCauTiepNhanId);
                }
            }, (err) => {
                this.isSavingData = false;
                err.ValidationErrors === null ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                return;
            })
        } else {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: "Bạn có muốn chuyển giao NB về Khoa chỉ định ban đầu không?" }
            }).afterClosed().subscribe(result => {
                if (result === "Yes") {
                    this.isChangeData = false;
                    this.outputPhauThuatThuThuatKetLuanDataChanged.emit(false);
                    this.isDataNotChanged = true;

                    // Cập nhật trạng thái
                    this.theoDoiSauPhauThuatThuThuat.TrangThai = EnumTrangThaiTheoDoiSauPhauThuatThuThuat.KetThucTheoDoi;
                    this.theoDoiSauPhauThuatThuThuat.PhongBenhVienId = this.currentAccessUser.PhongBenhVienId;
                    this.theoDoiSauPhauThuatThuThuat.NhanVienKetLuanId = this.currentAccessUser.Id;
                    this.theoDoiSauPhauThuatThuThuat.BacSiPhuTrachTheoDoiId = 0;
                    this.theoDoiSauPhauThuatThuThuat.DieuDuongPhuTrachTheoDoiId = 0;
                    this.theoDoiSauPhauThuatThuThuat.ThoiDiemBatDauTheoDoi = null;
                    this.theoDoiSauPhauThuatThuThuat.ThoiDiemKetThucTheoDoi = null;
                    
                    this.apiService.post<any>("PhauThuatThuThuat/ChuyenGiaoSauPhauThuatThuThuat", this.theoDoiSauPhauThuatThuThuat).subscribe(res => {
                        if(res) {
                            this.isSavingData = false;
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [`Chuyển giao NB ${this.thongTinBenhNhan.HoTen}`]));

                            //GetThongTinBenhNhanTiepTheo
                            this.apiService.get<any>(`PhauThuatThuThuat/GetThongTinBenhNhanTiepTheo?phongKhamHienTaiId=${this.currentAccessUser.PhongBenhVienId}&yeuCauTiepNhanHienTaiId=${this.thongTinBenhNhan.YeuCauTiepNhanId}`).subscribe((res) => {
                                if(res) {
                                    this.dialog.open(PhauThuatThuThuatBnTiepTheoPopupComponent, {
                                        disableClose: true,
                                        width: '1000px',
                                        data: res
                                    })
                                    .afterClosed()
                                    .subscribe(dialogRes => {
                                        if(dialogRes) {
                                            this.outputBenhNhanTiepTheo.emit(res.YeuCauTiepNhanId);
                                        } else {
                                            this.outputBenhNhanTiepTheo.emit(0);
                                        }
                                    });
                                } else {
                                    this.outputBenhNhanTiepTheo.emit(0);
                                }
                            }, (err) => {
                                this.dialog.closeAll();
                                this.notificationService.showError(err);
                            });
                        }
                    }, (err) => {
                        this.isSavingData = false;
                        this.notificationService.showError(err.Message);
                    })
                } else {
                    this.isSavingData = false;
                }
            });
        }
    }
}
