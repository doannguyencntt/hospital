import { Component, OnInit, ChangeDetectorRef, ViewChild, HostListener } from '@angular/core';
import { BenhNhanThongTin, ThongTinDonThuoc, ThongTinDuocPham, XemTruocBangKeThuoc } from '../quay-thuoc.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { QuayThuocHinhThucThanhToanComponent } from '../quay-thuoc-hinh-thuc-thanh-toan/quay-thuoc-hinh-thuc-thanh-toan.component';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ThongTinPhieuPdfPopupComponent } from '../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
    selector: 'app-quay-thuoc-mua-thuoc',
    templateUrl: './quay-thuoc-mua-thuoc.component.html',
    styleUrls: ['./quay-thuoc-mua-thuoc.component.scss']
})

export class QuayThuocMuaThuocComponent implements OnInit {
    tt: number = this.route.snapshot.params.tt;
    ttcheck: number = this.route.snapshot.params.ttcheck;
    benhnhanThongTin: BenhNhanThongTin;
    apDungCongNoThuoc: boolean = false;
    thongTinTam: any = [];
    viTri: number = 0;
    tongTienBNThanhToan: number = 0;
    thongTinMienGiamVos: any;
    apDungMienGiam: boolean = false;
    flagAllowLoadThuoc: boolean = true;
    xemTruocBangKeThuoc: XemTruocBangKeThuoc = new XemTruocBangKeThuoc();

    tabIndex: number = 0;

    @ViewChild('tabQuayThuoc', { static: true }) tabQuayThuoc: TabStripComponent;
    @ViewChild(QuayThuocHinhThucThanhToanComponent, { static: false }) quayThuocHinhThucThanhToan;

    constructor(private route: ActivatedRoute, private notificationService: NotificationService,
        private dialog: MatDialog, private apiService: ApiService, private router: Router, private cdRef: ChangeDetectorRef) { }

    ngOnInit() {
        const tiepNhanId: number = this.route.snapshot.params.id;
        const benhNhanId: number = this.route.snapshot.params.idsub;

        this.benhnhanThongTin = new BenhNhanThongTin();
        this.GetThongTinBenhNhan(benhNhanId, tiepNhanId);

    }

    GetThongTinBenhNhan(benhNhanId: number, tiepNhanId: number) {
        this.apiService.post<any>("QuayThuoc/GetThongTinBenhNhan?benhNhanId=" + benhNhanId + "&tiepNhanId=" + tiepNhanId).subscribe(
            resultData => {
                this.benhnhanThongTin = resultData;
            }, () => { });
    }

    onTabSelect(event: any) {
        this.tabIndex = event.index;
        if (event.index == 1) {
            this.flagAllowLoadThuoc = false;
        } else {
            this.flagAllowLoadThuoc = true;
        }
    }
    // 2 đã thanh toán --- 1 chưa thanh toán --- 3 là cả 2
    Huy() {
        if (this.ttcheck == 1) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck, hoQuerysearch: false } });
        }
        if (this.ttcheck == 2) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck, hoQuerysearch: false } });
        }
        if (this.ttcheck == 3) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck, hoQuerysearch: false } });
        }
        if (this.ttcheck == 0) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck, hoQuerysearch: false } });
        }
    }

    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }

    afterChangedCongNo() {
        this.cdRef.detectChanges();
        this.apDungCongNoThuoc = false;
    }

    afterChangedMienGiam() {
        this.cdRef.detectChanges();
        this.apDungMienGiam = false;
    }

    getBaoHiem(data: any) {
        this.apDungCongNoThuoc = data.apDungCongNoThuoc;
        this.thongTinTam = data.thongTinTam;
        this.viTri = data.viTri;
    }


    getMg(data: any) {
        this.apDungMienGiam = data.apDungMienGiam;
        this.thongTinMienGiamVos = data.thongTinMienGiam;
    }

    danhSachChuaThanhToan(data: any[]) {
        let bnThanhToan = 0;
        if (data != undefined && data != null) {
            data.forEach(ele => {
                bnThanhToan += ele.BNConPhaiThanhToan;
            });
        }
        this.tongTienBNThanhToan = bnThanhToan;
        this.xemTruocBangKeThuoc.DanhSachDonThuocs = data;
    }

    changeTab() {
        this.tabQuayThuoc.selectTab(1);
        this.flagAllowLoadThuoc = false;
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
            this.tabQuayThuoc.selectTab(0);
            event.preventDefault();
        }

        if (event.keyCode == 113 && event.ctrlKey) {
            // ctrl + f2
            this.tabQuayThuoc.selectTab(1);
            event.preventDefault();
        }

        if (event.keyCode == 27 && !event.ctrlKey) {
            // esc
            this.Huy();
            event.preventDefault();
        }
    }

}
