import { Component, OnInit, ViewChild, TemplateRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { MatDialog } from '@angular/material';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ThongTinPhieuPdfPopupComponent } from '../../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import { BenhNhanThongTin, DanhSachThuoc, XacNhanInViewModel } from '../danh-sach-lich-su-huy-ban-thuoc.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-lich-su-huy-ban-thuoc-detail',
    templateUrl: './lich-su-huy-ban-thuoc-detail.component.html',
    styleUrls: ['./lich-su-huy-ban-thuoc-detail.component.scss']
})

export class LichSuHuyBanThuocDetailComponent implements OnInit {
    danhSachThuoc: DanhSachThuoc = new DanhSachThuoc();
    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private router: Router,
        private dialog: MatDialog,
        private authService: AuthService,
        private notificationService: NotificationService
    ) { }

    data: BenhNhanThongTin[];
    documentType: DocumentType;
    gridColumns: any[] = [];
    dataSourcedanhsachThuocBHYT: any = {
        data: [],
        total: 0
    };
    dataSourcedanhsachThuocKhongBHYT: any = {
        data: [],
        total: 0
    };
    idTKBNThu = '';
    idTaiKhoanBenhNhanThu = this.route.snapshot.params.idTaiKhoanBenhNhanThu;
    idTiepNhan = this.route.snapshot.params.id;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    ngOnInit() {
        this.documentType = DocumentType.LichSuQuayThuoc;
        const idBenhNhan: number = this.route.snapshot.params.idBenhNhan;
        const id: number = this.idTiepNhan;
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' }
        });

        if (idBenhNhan != null && id != null) {
            this.GetThongTinBenhNhanXuatThuoc(id, idBenhNhan);

        }
        if (id != null && this.idTaiKhoanBenhNhanThu != null) {
            this.GetThongTinDonThuoc(id, this.idTaiKhoanBenhNhanThu);

        }
        this.gridColumns = [
            { Field: 'STT', Title: '#', Width: 40, Sortable: false },
            { Field: 'TenDuocPham', Title: 'Tên Thuốc-Vật tư', Width: 190, Sortable: false },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ / hàm lượng', Width: 185, Sortable: false },
            { Field: 'MaHoatChat', Title: 'Hoạt chất', Width: 185, Sortable: false },
            { Field: 'DonViTinh', Title: 'ĐVT', Width: 94, Sortable: false },
            { Field: 'SoLuongMua', Title: 'SL Mua', Width: 110, Sortable: false },
            { Field: 'DonGia', Title: 'Đơn giá', Width: 129, Sortable: false, Template: this.donGiaTemplate },
            { Field: 'ThanhTien', Title: 'Thành tiền', Width: 147, Sortable: false, Template: this.thanhTienTemplate },
            { Field: 'Solo', Title: 'Số lô', Width: 109, Sortable: false },
            { Field: 'HanSuDungHientThi', Title: 'Hạn sử dụng', Width: 146, Sortable: false },
        ];

    }
    GetThongTinBenhNhanXuatThuoc(id: number, idBenhNhan: number) {
        const self = this;

        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService.post<any>('QuayThuoc/GetThongTinBenhNhanXuatThuoc?ycTiepNhanId=' + id + '&idBenhNhan=' + idBenhNhan).subscribe(
                resultData => {
                    self.data = resultData;
                    console.log(resultData);
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    GetThongTinDonThuoc(id: number, idTaiKhoanBenhNhanThu: number) {
        const self = this;

        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {            
            self.apiService.post<Array<any>>
                ('QuayThuoc/GetDanhSachHuyThuocKhongBHYTLS?tiepNhanId=' + id + '&idTaiKhoanThu=' + idTaiKhoanBenhNhanThu).subscribe(
                    resultData => {
                        self.dataSourcedanhsachThuocKhongBHYT.data = resultData;
                        let index = 1;
                        self.dataSourcedanhsachThuocKhongBHYT.data.forEach(x => {
                            x.STT = index;
                            index++;
                        });
                        self.danhSachThuoc.ThuocKhongBHYT = [...self.dataSourcedanhsachThuocKhongBHYT.data];
                        self.dialog.closeAll();
                    });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    Close() {
        this.router.navigate(['lich-su-huy-ban-thuoc']);
    }

    InPhieuThu() {
        const self = this;
        this.showPopupLoadingIn();
        const hosting = window.location.protocol + '//' + window.location.host;

        let xacNhanInData = new XacNhanInViewModel();
        xacNhanInData = {
            TaiKhoanBenhNhanThuId: self.idTaiKhoanBenhNhanThu,
            Hosting: hosting,
            InBangKe: false,
            InPhieuThu: true,
        };

        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService.postExportPdf<any>('QuayThuoc/XacNhanIn', xacNhanInData).subscribe(
                resultData => {
                    self.dialog.open(ThongTinPhieuPdfPopupComponent, {
                        disableClose: true,
                        width: '1000px',
                        data: { Model: resultData }
                    }).afterClosed().subscribe(() => {
                        this.closePopupLoadingData();
                     }); 
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            this.closePopupLoadingData();
        }
    }

    InKeThuocKhongBhyt() {
        const self = this;
        this.showPopupLoadingIn();
        const hosting = window.location.protocol + '//' + window.location.host;

        let xacNhanInData = new XacNhanInViewModel();
        xacNhanInData = {
            TaiKhoanBenhNhanThuId: self.idTaiKhoanBenhNhanThu,
            Hosting: hosting,
            InBangKe: true,
            InPhieuThu: false,
        };

        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService.postExportPdf<any>('QuayThuoc/XacNhanHuyBanThuocIn', xacNhanInData).subscribe(
                resultData => {
                    self.dialog.open(ThongTinPhieuPdfPopupComponent, {
                        disableClose: true,
                        width: '1000px',
                        data: { Model: resultData }
                    }).afterClosed().subscribe(() => { 
                        this.closePopupLoadingData();
                    }); 
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            this.closePopupLoadingData();
        }
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (event.keyCode == 83 && event.ctrlKey) {
            // ctrl + s
            this.InPhieuThu();
            event.preventDefault();
        }

        if (event.keyCode == 27 && !event.ctrlKey) {
            // esc
            this.Close();
            this.dialog.closeAll();
            event.preventDefault();
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
}
