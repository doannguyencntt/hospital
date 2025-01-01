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
import { BenhNhanThongTin, DanhSachThuoc, XacNhanInThuocVatTuViewModel } from '../lich-su-cap-thuoc-bhyt.model';
import { ThongTinPhieuPdfPopupComponent } from '../../../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-lich-su-cap-thuoc-bhyt-chi-tiet',
    templateUrl: './lich-su-cap-thuoc-bhyt-chi-tiet.component.html',
    styleUrls: ['./lich-su-cap-thuoc-bhyt-chi-tiet.component.scss']
})
export class LichSuCapThuocBHYTChiTietComponent implements OnInit {
    danhSachThuoc: DanhSachThuoc = new DanhSachThuoc();
    data: BenhNhanThongTin[];
    documentType: DocumentType;
    gridColumns: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private router: Router,
        private dialog: MatDialog,
        private authService: AuthService,
        private notificationService: NotificationService
    ) { }

    dataSourcedanhsachThuocBHYT: any = {
        data: [],
        total: 0
    };

    dataSourcedanhsachThuocKhongBHYT: any = {
        data: [],
        total: 0
    };

    idTKBNThu = '';
    phieuXuatId = this.route.snapshot.params.id;
    loaiDuocPhamVatTu = this.route.snapshot.params.loaiDuocPhamVatTu;
    isLaDuocPhamVatTu = this.loaiDuocPhamVatTu === "0" ? true : false;

    isPrint: boolean = false;
    isESC: boolean = false;

    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;   
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;

    ngOnInit() {
        this.showPopupLoadingIn();
        this.documentType = DocumentType.LichSuXuatThuocCapThuocBHYT;
        const maBN: number = this.route.snapshot.params.maBN;
        if (maBN != null) {
            this.GetThongTinBenhNhanXuatThuoc(maBN);
        }

        if (this.phieuXuatId != null && this.phieuXuatId != null) {
            this.GetThongTinDonThuocVatTu(this.phieuXuatId, this.loaiDuocPhamVatTu);
        }

        this.gridColumns = [
            { Field: 'STT', Title: '#', Width: 40, Sortable: false },
            { Field: 'TenDuocPham', Title: 'Tên Thuốc', Width: 190, Sortable: false, Hidden : this.isLaDuocPhamVatTu === false },
            { Field: 'TenDuocPham', Title: 'Tên Vật Tư', Width: 190, Sortable: false , Hidden : this.isLaDuocPhamVatTu === true},
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

    GetThongTinBenhNhanXuatThuoc(maBN: number) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService.post<any>('QuayThuoc/GetThongTinBenhNhanTheoMaBN?MaBN=' + maBN).subscribe(
                resultData => {
                    self.data = resultData;
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
   
    GetThongTinDonThuocVatTu(phieuXuatId: number, loaiDuocPhamVatTu: number) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService.post<Array<any>>
                ('QuayThuoc/GetDanhSachLichSuXuatThuocVatTuBHYT?phieuXuatId=' + phieuXuatId + '&loaiDuocPhamVatTu=' + loaiDuocPhamVatTu).subscribe(
                    resultData => {
                        self.dataSourcedanhsachThuocBHYT.data = resultData;
                        let index = 1;
                        self.dataSourcedanhsachThuocBHYT.data.forEach(x => {
                            x.STT = index;
                            index++;
                        });
                        self.danhSachThuoc.ThuocBHYT = [...self.dataSourcedanhsachThuocBHYT.data];                       
                    });
            self.apiService.post<Array<any>>
                ('QuayThuoc/GetDanhSachLichSuXuatThuocVatTukhongBHYT?phieuXuatId=' + phieuXuatId + '&loaiDuocPhamVatTu=' + loaiDuocPhamVatTu).subscribe(
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
        this.router.navigate(['lich-su-xuat-thuoc-cap-phat']);
    }

    InKeThuocKhongBhyt() {
        const self = this;
        this.showPopupLoadingIn();
        const hosting = window.location.protocol + '//' + window.location.host;
        let xacNhanInThuocVatTuData = new XacNhanInThuocVatTuViewModel();
        xacNhanInThuocVatTuData = {
            PhieuXuatId: self.phieuXuatId,
            Hosting: hosting,
            LoaiDuocPhamVatTu: self.loaiDuocPhamVatTu,
        };
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService.postExportPdf<any>('QuayThuoc/XacNhanInThuocVatTuKhongBhytXuatThuoc', xacNhanInThuocVatTuData).subscribe(
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

    InKeThuocBhyt() {
        const self = this;
        this.showPopupLoadingIn();
        const hosting = window.location.protocol + '//' + window.location.host;
        let xacNhanInThuocVatTuData = new XacNhanInThuocVatTuViewModel();
        xacNhanInThuocVatTuData = {
            PhieuXuatId: self.phieuXuatId,
            Hosting: hosting,           
            LoaiDuocPhamVatTu: self.loaiDuocPhamVatTu,
        };

        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService.postExportPdf<any>('QuayThuoc/XacNhanInThuocVatTuCoBhytXuatThuoc', xacNhanInThuocVatTuData).subscribe(
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
        if (event.keyCode == 83 && event.ctrlKey && this.isPrint == false) {
            event.preventDefault();
            this.isPrint = true;
        }
        else if (event.keyCode == 83 && this.isPrint == true) {
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
