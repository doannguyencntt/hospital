import { Component, Inject, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { LaiHangDoiTiemVacxin } from 'src/app/shared/enum/tiem-vacxin.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { YeuCauDichVuKyThuat } from '../../tiem-chung.model';
import { LookupItemVo } from 'src/app/shared/models/common.model';

import icClose from '@iconify/icons-ic/close';

@Component({
    selector: 'app-lich-su-tiem-chung-popup-shared',
    templateUrl: './lich-su-tiem-chung-popup-shared.component.html',
    styleUrls: ['./lich-su-tiem-chung-popup-shared.component.scss']
})

export class LichSuTiemChungPopupSharedComponent implements OnInit {
    popupLoadingData: any;
    documentType: DocumentType = DocumentType.TiemChungLichSuTiem;
    loaiHangDoi: LaiHangDoiTiemVacxin = LaiHangDoiTiemVacxin.LichSuTiem;
    
    phongKhamHienTai: LookupItemVo = {
        DisplayName: null,
        KeyId: Number(this.authService.getPhongLamViecId()),
    };

    yeuCauKhamTiemChung: YeuCauDichVuKyThuat;
    yeuCauKhamTiemChungId: number = null;

    icClose = icClose;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private dialogRef: MatDialogRef<any>, private location: Location,
                private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) {
        this.yeuCauKhamTiemChungId = this.data.YeuCauKhamTiemChungId;
    }

    ngOnInit() {
        this.getBenhNhanDangKham(this.phongKhamHienTai.KeyId, this.yeuCauKhamTiemChungId);
    }

    getBenhNhanDangKham(phongKhamId: number, yeuCauKhamTiemChungId: number = null) {
        this.closePopupLoadingData();
        this.yeuCauKhamTiemChung = new YeuCauDichVuKyThuat();

        this.showPopupLoadingData();

        var obj = {
            "YeuCauKhamTiemChungId": yeuCauKhamTiemChungId,
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

    close() {
		this.dialogRef.close('close');
	}
}