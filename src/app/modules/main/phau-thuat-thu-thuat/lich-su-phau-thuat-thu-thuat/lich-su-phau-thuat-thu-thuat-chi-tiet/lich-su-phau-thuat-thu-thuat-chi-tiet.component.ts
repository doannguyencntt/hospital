import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ThongTinBenhNhanPTTT } from '../../phau-thuat-thu-thuat.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-lich-su-phau-thuat-thu-thuat-chi-tiet',
    templateUrl: './lich-su-phau-thuat-thu-thuat-chi-tiet.component.html',
    styleUrls: ['./lich-su-phau-thuat-thu-thuat-chi-tiet.component.scss']
})
export class LichSuPhauThuatThuThuatChiTietComponent implements OnInit {
    thongTinBenhNhan: ThongTinBenhNhanPTTT;
    yeuCauTiepNhanId: number = null;
    yeuCauDichVuKyThuatId: number = null;
    dichVuKyThuatHoanThanh: any = null;
    dichVuKyThuatTuongTrinh: any = null;
    dataThongTinLichSuEkipPTTT: any = null;
    validationErrors: any;
    thongTinKhamTheoDoiData: string = null;
    dataKhamKhacChiTiets: any = null;
    
    //BVHD-3860
    laKhongThucHien: boolean = false;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private apiService: ApiService,
        private dialog: MatDialog,
        private location: Location,
        private notificationService: NotificationService) { }

    ngOnInit() {
        this.thongTinBenhNhan = new ThongTinBenhNhanPTTT();

        //BVHD-3860
        if (this.route.snapshot.params.laKhongThucHien != undefined) {
            this.laKhongThucHien = this.route.snapshot.params.laKhongThucHien == 'true' || this.route.snapshot.params.laKhongThucHien == true;
        }

        if (this.route.snapshot.params.id) {
            this.yeuCauDichVuKyThuatId = this.route.snapshot.params.id;
            this.getBenhNhanDangKham(this.yeuCauDichVuKyThuatId);
            // this.getThongTinLichSuEkipPTTT(this.yeuCauTiepNhanId);
        }
    }

    showPopupLoadingData() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
    }

    closePopupLoadingData() {
        this.dialog.closeAll();
    }

    getBenhNhanDangKham(id: number) {
        this.showPopupLoadingData();
        this.apiService.get<any>("PhauThuatThuThuat/ThongTinBenhNhanPTTT?yeuCauDichVuKyThuatId=" + id).subscribe((resultData) => {
            if (resultData != undefined && resultData != null) {
                this.thongTinBenhNhan = resultData;
                this.closePopupLoadingData();
                //console.log("this.thongTinBenhNhan Lich Su PTTT: ", this.thongTinBenhNhan)
                this.apiService.get<any>("PhauThuatThuThuat/GetDichVuKyThuatChuaHoanThanhTrenHoanThanhCanLamSang?yeuCauTiepNhanId=" + this.thongTinBenhNhan.YeuCauTiepNhanId).subscribe(res => {
                    if (res != undefined && res != null) {
                        this.dichVuKyThuatHoanThanh = res;
                        //console.log("this.dichVuKyThuatHoanThanh: ", this.dichVuKyThuatHoanThanh)
                    }
                }, (err) => {
                    this.notificationService.showError(err);
                });
                let obj = {
                    YeuCauTiepNhanId: this.thongTinBenhNhan.YeuCauTiepNhanId,
                    LanThucThien: this.thongTinBenhNhan.LanThucThien
                }
                this.apiService.post<any>("PhauThuatThuThuat/DichVuDaTuongTrinh", obj).subscribe(res => {
                    if (res != undefined && res != null) {
                        this.dichVuKyThuatTuongTrinh = res;
                        console.log("this.dichVuKyThuatTuongTrinh: ", this.dichVuKyThuatTuongTrinh)
                    }
                }, (err) => {
                    this.notificationService.showError(err);
                });
            } else {
                this.closePopupLoadingData();
            }
        }
            ,
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                    this.closePopupLoadingData();
                }
                this.closePopupLoadingData();
            });
    }

    getThongTinLichSuEkipPTTT(id: number) {
        this.showPopupLoadingData();
        this.apiService.get<any>("PhauThuatThuThuat/ThongTinLichSuEkipPTTT?yeuCauDichVuKyThuatId=" + id).subscribe((resultData) => {
            if (resultData != undefined && resultData != null) {
                this.dataThongTinLichSuEkipPTTT = resultData;
                //console.log("data Ekip: ", this.dataThongTinLichSuEkipPTTT);
                this.closePopupLoadingData();
            } else {
                this.closePopupLoadingData();
            }
        }
            ,
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                    this.closePopupLoadingData();
                }
                this.closePopupLoadingData();
            });
    }
    quayLai() {
        // this.router.navigate(['/lich-su-phau-thuat-thu-thuat']);
        this.location.back();
    }

    @HostListener("document:keydown", ["$event"])
    keyEvent(event: KeyboardEvent) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.quayLai();
            event.preventDefault();
        }
    }
}
