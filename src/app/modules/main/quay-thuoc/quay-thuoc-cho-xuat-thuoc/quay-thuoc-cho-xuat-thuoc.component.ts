import { Component, OnInit, ViewChild, TemplateRef, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { danhSachThuoc } from '../quay-thuoc.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { InBangThuTienPopUpComponent } from '../in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ThongTinPhieuPdfPopupComponent } from '../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
    selector: 'app-quay-thuoc-cho-xuat-thuoc',
    templateUrl: './quay-thuoc-cho-xuat-thuoc.component.html',
    styleUrls: ['./quay-thuoc-cho-xuat-thuoc.component.scss']
})
export class QuayThuocChoXuatThuocComponent implements OnInit, OnChanges {
    id: number = this.route.snapshot.params.id;
    gridColumns: any[] = [];
    danhSachThuoc: danhSachThuoc;

    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @Input() flagOnce: boolean;
    @Input() trangThaiXuatThuoc: number;
    @Input() ttcheck: number;
    dataSourcedanhsachThuocBHYT: any = {
        data: [],
        total: 0
    };
    dataSourcedanhsachThuocKhongBHYT: any = {
        data: [],
        total: 0
    };
    constructor(private route: ActivatedRoute, private dialog: MatDialog, private apiService: ApiService, private router: Router, private notificationService: NotificationService) { }

    ngOnInit() {
        this.danhSachThuoc = new danhSachThuoc();
        this.GetThongTinDonThuoc(this.id);
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

    ngOnChanges() {
        if (this.flagOnce == false) {
            this.GetThongTinDonThuoc(this.id);
            this.flagOnce = true;
        }
    }
    loadingPage() {
        var self = this;
        var dialogRef = self.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
    }
    GetThongTinDonThuoc(id: number) {
        var self = this;
        var dialogRef = self.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
        // this.apiService.post<Array<any>>("QuayThuoc/GetDanhSachXuatThuocBHYT?tiepNhanId=" + id).subscribe(
        //     resultData => {
        //         this.dataSourcedanhsachThuocBHYT.data = resultData;
        //         let index = 1;
        //         this.dataSourcedanhsachThuocBHYT.data.forEach(x => {
        //             x.STT = index;
        //             index++;
        //         });
        //         this.danhSachThuoc.ThuocBHYT = [...this.dataSourcedanhsachThuocBHYT.data]
        //     },
        //     () => { });
        this.apiService.post<Array<any>>("QuayThuoc/GetDanhSachXuatThuocKhongBHYT?tiepNhanId=" + id).subscribe(
            resultData => {
                this.dataSourcedanhsachThuocKhongBHYT.data = resultData;
                let index = 1;
                this.dataSourcedanhsachThuocKhongBHYT.data.forEach(x => {
                    x.STT = index;
                    index++;
                });
                this.danhSachThuoc.ThuocKhongBHYT = [...this.dataSourcedanhsachThuocKhongBHYT.data]
            },
            () => { });
            dialogRef.close();
    }
    GuiData() {
        this.danhSachThuoc.Id = this.id;
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
                            if (this.ttcheck == 1) {
                                this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck ,hoQuerysearch:false} });
                            }
                            if (this.ttcheck == 2) {
                                this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck ,hoQuerysearch:false} });
                            }
                            if (this.ttcheck == 3) {
                                this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck,hoQuerysearch:false } });
                            }
                            if (this.ttcheck == 0) {
                                this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck,hoQuerysearch:false } });
                            }
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
            TiepNhanId: this.id
        }
        
        data.Hosting  = window.location.protocol + '//' + window.location.host;
        this.apiService.postExportPdf<any>("QuayThuoc/XacNhanInThuocCoBhyt", data).subscribe(
            (resultData) => {               
                if(resultData !=undefined && resultData != null)
                {
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
}
