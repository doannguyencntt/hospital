import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { ThongTinDonThuoc, KhachVangLai, XemTruocBangKeThuoc } from '../quay-thuoc.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { QuayThuocKhachVangLaiChoThanhToanComponent } from '../quay-thuoc-khach-vang-lai-cho-thanh-toan/quay-thuoc-khach-vang-lai-cho-thanh-toan.component';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiService } from 'src/app/core/services/api.service';
import { ThongTinPhieuPdfPopupComponent } from '../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
    selector: 'app-quay-thuoc-khach-vang-lai',
    templateUrl: './quay-thuoc-khach-vang-lai.component.html',
    styleUrls: ['./quay-thuoc-khach-vang-lai.component.scss']
})

export class QuayThuocKhachVangLaiComponent implements OnInit {
    thongTinBenhNhan: KhachVangLai;
    kendoTabSelected = 1;
    validationErrorForThongTin: any;
    donThuocIds: any;
    MaBN: number;
    SDT: string;
    TenBenhNhan: string;
    ttCheck: number;
    ThongTinBenhNhanDaThuTien: any;
    yctnId: number = 0;
    benhNhanId: number = 0;
    trangThai: number = 0;
    @ViewChild('tabVangLai', { static: true }) tabVangLai: TabStripComponent;
    flagAllowLoadThuoc: boolean = true;
    xemTruocBangKeThuoc: XemTruocBangKeThuoc = new XemTruocBangKeThuoc();

    tabIndex: number = 0;
    @ViewChild(QuayThuocKhachVangLaiChoThanhToanComponent, { static: false }) quayThuocHinhThucThanhToan;

    constructor(private route: ActivatedRoute,
        private notificationService: NotificationService,
        private router: Router, private dialog: MatDialog,
        private apiService: ApiService,) { }

    ngOnInit() {
        this.route
            .queryParams
            .subscribe(v => {
                this.donThuocIds = v;
            });
        this.route.queryParams.subscribe(params => {
            this.ttCheck = params.page;
        });
        if (this.ttCheck == undefined) {
            this.route.queryParams.subscribe(params => {
                this.ttCheck = params.ttCheck;
            });
        }
        this.route.queryParams.subscribe(params => {
            this.MaBN = params.MaBN;
        });
        this.route.queryParams.subscribe(params => {
            this.TenBenhNhan = params.TenBenhNhan;
        });
        this.route.queryParams.subscribe(params => {
            this.SDT = params.SDT;
        });
    }


    onTabSelect(event: any) {
        this.tabIndex = event.index;
        if (event.index == 1) {
            this.flagAllowLoadThuoc = false;
        } else {
            this.flagAllowLoadThuoc = true;
        }
    }

    Huy() {
        this.route.queryParams.subscribe(v => {
            if (v.page != null) {
                this.ttCheck = v.page;
            }
        });
        this.route.queryParams.subscribe(v => {
            if (v.ttCheck != null) {
                this.ttCheck = v.ttCheck;
            }
        });
        if (this.ttCheck == 1) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttCheck } });
        }
        if (this.ttCheck == 2) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttCheck } });
        }
        if (this.ttCheck == 3) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttCheck } });
        }
        if (this.ttCheck == 0) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttCheck } });
        }
    }
    switchValueChanges(data: any) {
        this.thongTinBenhNhan = data;
    }

    switchValueChangesChoThanhToan(data: any) {
        this.validationErrorForThongTin = data;
    }

    changeTab(event) {
        this.trangThai = event;

    }

    MaTiepNhanBenhNhanDaThuTien(event) {
        this.ThongTinBenhNhanDaThuTien = event;
        if (this.ThongTinBenhNhanDaThuTien != undefined) {
            this.yctnId = event.YeuCauTiepNhanId;
            this.benhNhanId = event.BenhNhanId;
            if (this.trangThai == 1) {
                this.router.navigate(['nha-thuoc/mua-thuoc/' + this.yctnId + '/' + this.benhNhanId + '/' + this.trangThai + '/' + this.ttCheck]);
            }
            else {
                this.router.navigate(['nha-thuoc/mua-thuoc/' + this.yctnId + '/' + this.benhNhanId + '/' + this.trangThai + '/' + this.ttCheck]);
            }
            this.ngOnInit();
        }
    }

    danhSachChuaThanhToan(data: any[]) {       
        this.xemTruocBangKeThuoc.DanhSachDonThuocs = data;
    }

    inXemTruocBangKeThuoc() {        
        
        this.showPopupLoadingIn();
        this.xemTruocBangKeThuoc.Hosting = window.location.protocol + '//' + window.location.host;
        this.xemTruocBangKeThuoc.YeuCauTiepNhanId = this.route.snapshot.params.id;

        if (this.xemTruocBangKeThuoc.DanhSachDonThuocs === undefined &&
            this.xemTruocBangKeThuoc.DanhSachDonThuocs === null && this.xemTruocBangKeThuoc.DanhSachDonThuocs.length === 0) {
            this.notificationService.showError("Không có thuốc và vật tư.");
            return;
        }
        else {
            this.apiService.postExportPdf<any>('QuayThuoc/XemTruocBangKeThuoc', this.xemTruocBangKeThuoc).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        this.dialog.open(ThongTinPhieuPdfPopupComponent, {
                            disableClose: true,
                            width: '1000px',
                            data: { Model: resultData }
                        }).afterClosed().subscribe(() => {
                            this.closePopupLoadingData();
                        });
                    }
                },
                (err: ApiError) => {
                    this.closePopupLoadingData();
                });
        }

    }

    showPopupLoadingIn() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '250px',
            height: '90px',
            data: { Title: 'Đang loading...' },
        });
    }

    closePopupLoadingData() {
        this.dialog.closeAll();
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (event.keyCode == 83 && event.ctrlKey) {
            // ctrl + s
            if (this.tabIndex == 0) {
                this.quayThuocHinhThucThanhToan.ThuTien();
            }
            event.preventDefault();
        }

        if (event.keyCode == 112 && event.ctrlKey) {
            // ctrl + f1
            this.tabVangLai.selectTab(0);
            event.preventDefault();
        }

        if (event.keyCode == 113 && event.ctrlKey) {
            // ctrl + f2
            this.tabVangLai.selectTab(1);
            event.preventDefault();
        }

        if (event.keyCode == 27 && !event.ctrlKey) {
            // esc
            this.Huy();
            event.preventDefault();
        }
    }
}
