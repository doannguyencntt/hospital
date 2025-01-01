import { Component, OnInit, ChangeDetectorRef, ViewChild, HostListener, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { BenhNhanThongTin } from '../danh-sach-cap-thuoc-bhyt.model';


import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { danhSachThuoc, XemTruocBangKeThuoc } from '../../../quay-thuoc.model';
import { ThongTinPhieuPdfPopupComponent } from '../../../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';

@Component({
    selector: 'app-don-thuoc-cap-thuoc-chi-tiet',
    templateUrl: './don-thuoc-cap-thuoc-chi-tiet.component.html',
    styleUrls: ['./don-thuoc-cap-thuoc-chi-tiet.component.scss']
})

export class ChoCapThuocBHYTChiTietComponent implements OnInit {
    tabIndex: number = 0;
    tiepNhanId: number = 0;
    benhNhanId: number = 0;

    benhnhanThongTin: BenhNhanThongTin;
    apDungCongNoThuoc: boolean = false;
    xemTruocBangKeThuoc: XemTruocBangKeThuoc = new XemTruocBangKeThuoc();

    gridColumns: any[] = [];
    danhSachThuoc: danhSachThuoc;


    @ViewChild('tabQuayThuoc', { static: true }) tabQuayThuoc: TabStripComponent;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;

    dataSourcedanhsachThuocBHYT: any = {
        data: [],
        total: 0
    };

    dataSourcedanhsachThuocKhongBHYT: any = {
        data: [],
        total: 0
    };

    constructor(private route: ActivatedRoute, private notificationService: NotificationService,
        private dialog: MatDialog, private apiService: ApiService, private router: Router, private cdRef: ChangeDetectorRef) { }

    ngOnInit() {
        this.tiepNhanId = this.route.snapshot.params.id;
        this.benhNhanId = this.route.snapshot.params.idsub;

        this.benhnhanThongTin = new BenhNhanThongTin();
        this.GetThongTinBenhNhan(this.benhNhanId, this.tiepNhanId);

        this.danhSachThuoc = new danhSachThuoc();
        this.GetThongTinDonThuoc(this.tiepNhanId);
        this.gridColumns = [
            { Field: "STT", Title: "#", Width: 40, Sortable: false },
            { Field: "TenDuocPham", Title: "Tên Thuốc", Width: 190, Sortable: false },
            { Field: "NongDoVaHamLuong", Title: "Nồng độ / hàm lượng", Width: 185, Sortable: false },
            { Field: "MaHoatChat", Title: "Hoạt chất", Width: 185, Sortable: false },
            { Field: "DonViTinh", Title: "ĐVT", Width: 94, Sortable: false },
            { Field: "SoLuongMua", Title: "SL Mua", Width: 110, Sortable: false },
            { Field: "DonGia", Title: "Đơn giá", Width: 129, Sortable: false, Template: this.donGiaTemplate },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 147, Sortable: false, Template: this.thanhTienTemplate },
            { Field: "Solo", Title: "Số lô", Width: 109, Sortable: false },
            { Field: "HanSuDungHientThi", Title: "Hạn sử dụng", Width: 146, Sortable: false },
        ];
    }

    GetThongTinBenhNhan(benhNhanId: number, tiepNhanId: number) {
        this.apiService.post<any>("QuayThuoc/GetThongTinBenhNhan?benhNhanId=" + benhNhanId + "&tiepNhanId=" + tiepNhanId).subscribe(
            resultData => {
                this.benhnhanThongTin = resultData;
            }, () => { });
    }

    Huy() {
        this.router.navigate(['danh-sach-don-thuoc-cho-cap-thuoc'], { queryParams: { holdQuery: true } });
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
    }

    changeTab() {
        this.tabQuayThuoc.selectTab(1);
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

    GetThongTinDonThuoc(id: number) {
        var self = this;
        var dialogRef = self.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
        this.apiService.post<Array<any>>("QuayThuoc/GetDanhSachXuatThuocBHYT?tiepNhanId=" + id).subscribe(
            resultData => {
                this.dataSourcedanhsachThuocBHYT.data = resultData;
                let index = 1;
                this.dataSourcedanhsachThuocBHYT.data.forEach(x => {
                    x.STT = index;
                    index++;
                });
                this.danhSachThuoc.ThuocBHYT = [...this.dataSourcedanhsachThuocBHYT.data]
            },
            () => { });
        // this.apiService.post<Array<any>>("QuayThuoc/GetDanhSachXuatThuocKhongBHYT?tiepNhanId=" + id).subscribe(
        //     resultData => {
        //         this.dataSourcedanhsachThuocKhongBHYT.data = resultData;
        //         let index = 1;
        //         this.dataSourcedanhsachThuocKhongBHYT.data.forEach(x => {
        //             x.STT = index;
        //             index++;
        //         });
        //         this.danhSachThuoc.ThuocKhongBHYT = [...this.dataSourcedanhsachThuocKhongBHYT.data]
        //     },
        //     () => { });
        dialogRef.close();
    }
   
    GuiData() {
        this.danhSachThuoc.Id = this.tiepNhanId;
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn xuất đơn thuốc này?" }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result == "Yes") {
                this.apiService.post<any>("QuayThuoc/XuatDonThuocBHYT", this.danhSachThuoc).subscribe(
                    resultData => {
                        if (resultData != null && resultData != undefined && resultData != "") {
                            this.notificationService.showError(resultData);
                        } else {
                            this.router.navigate(['danh-sach-don-thuoc-cho-cap-thuoc'], { queryParams: { holdQuery: false } });
                        }
                    },
                    (err: any) => {

                    });
            }
        });
    }

    KeThuoc() {
        this.showPopupLoadingIn();
        var data = {
            Hosting: null,
            TiepNhanId: this.tiepNhanId
        }
        data.Hosting = window.location.protocol + '//' + window.location.host;
        this.apiService.postExportPdf<any>("QuayThuoc/XacNhanInThuocCoBhyt", data).subscribe(
            (resultData) => {
                if (resultData != undefined && resultData != null) {
                    this.dialog.open(ThongTinPhieuPdfPopupComponent, {
                        disableClose: true,
                        width: '1000px',
                        data: { Model: resultData }
                    }).afterClosed().subscribe(() => {
                        this.closePopupLoadingData();
                    });
                }

            }, (err: ApiError) => {
                if (err.Message !== 'Validation Failed') {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
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
