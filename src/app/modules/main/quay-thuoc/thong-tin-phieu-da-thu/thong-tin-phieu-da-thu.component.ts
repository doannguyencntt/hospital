import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ThongTinHuyPhieu, ThongTinSoPhieuDaThu, TrangThaiThuTienBenhNhan } from '../quay-thuoc.model';
import icEdit from "@iconify/icons-ic/twotone-edit";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { XacNhanHuyThuComponent } from '../xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component';
import { ThongTinPhieuPdfPopupComponent } from '../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import { XacNhanInViewModel } from '../lich-su-quay-thuoc/lich-su-quay-thuoc.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
@Component({
    selector: 'app-thong-tin-phieu-da-thu',
    templateUrl: './thong-tin-phieu-da-thu.component.html',
    styleUrls: ['./thong-tin-phieu-da-thu.component.scss']
})
export class ThongTinPhieuThuThuoc implements OnInit {
    @Input() yeuCauTiepNhanId: number;
    hostingName: string;
    src = '';
    icClose = icClose;
    public icEdit = icEdit;
    InPhieuThu: boolean;
    InBangKe: boolean;
    loaiPhieu: any;
    kiemtraPhieuInManhinh: boolean = false;
    public dataSoPhieus: any;
    confrim: any = null;
    thongTinSoPhieuDaThu = new ThongTinSoPhieuDaThu();
    trangThaiThuTienBenhNhan = new TrangThaiThuTienBenhNhan();
    documentType: DocumentType;

    constructor(private route: ActivatedRoute,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private authService: AuthService,
        private router: Router,
        private dialog: MatDialog) { }


    ngOnInit() {
        this.getThongSoPhieu();
    }

    public total(field: any) {
        switch (field) {
            case 'ThanhTien':
                return this.thongTinSoPhieuDaThu.DanhSachThuPhis
                    .reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'BHYTThanhToan':
                return this.thongTinSoPhieuDaThu.DanhSachThuPhis
                    .reduce((sum, item) => sum + item.BHYTThanhToan, 0);
            case 'TongCongNo':
                return this.thongTinSoPhieuDaThu.DanhSachThuPhis
                    .reduce((sum, item) => sum + item.TongCongNo, 0);
            case 'SoTienMG':
                return this.thongTinSoPhieuDaThu.DanhSachThuPhis
                    .reduce((sum, item) => sum + item.SoTienMG, 0);
            case 'DaThanhToan':
                return this.thongTinSoPhieuDaThu.DanhSachThuPhis
                    .reduce((sum, item) => sum + item.DaThanhToan, 0);
        }
    }

    getThongSoPhieu() {
        this.apiService.post<any>("QuayThuoc/GetSoPhieuQuayThuoc/" + this.yeuCauTiepNhanId).subscribe(resultData => {
            if (resultData !== undefined && resultData !== null) {
                this.dataSoPhieus = resultData;
                if (resultData.length > 0) {
                    this.xemThongTinPhieu(resultData[0].KeyId);
                }
            }
        });
    }

    xemThongTinPhieu(keyId: any) {
        let loading = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: {},
        });
        this.apiService.get<ThongTinSoPhieuDaThu>("QuayThuoc/GetThongTinPhieuThu/" + keyId).subscribe(resultData => {
            if (resultData !== undefined && resultData !== null) {
                this.thongTinSoPhieuDaThu = resultData;
                this.thongTinSoPhieuDaThu.SoPhieuId = keyId;
                this.thongTinSoPhieuDaThu.TenSoPhieu = resultData.SoPhieu;
                loading.close();
            }
        });
    }

    selectionChangeSoPhieu(event: any) {
        if (event != undefined && event != null) {
            this.thongTinSoPhieuDaThu.SoPhieuId = event.KeyId;
            this.thongTinSoPhieuDaThu.LoaiPhieu = event.LoaiPhieu;
            this.thongTinSoPhieuDaThu.TinhTrang = event.TinhTrang;
            this.thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan = event.LoaiPhieuThuChiThuNgan;
            this.xemThongTinPhieu(event.KeyId);
        } else {
            this.thongTinSoPhieuDaThu = new ThongTinSoPhieuDaThu();
        }
    }

    huyPhieuThu(thongTinSoPhieuDaThu: any, thuHoiPhieu: any) {
        let thongTinHuyPhieu = new ThongTinHuyPhieu();
        thongTinHuyPhieu.SoPhieu = thongTinSoPhieuDaThu.Id;
        thongTinHuyPhieu.TenPhieuThuChi = thongTinSoPhieuDaThu.LoaiPhieu;
        thongTinHuyPhieu.TenSoPhieu = this.thongTinSoPhieuDaThu.TenSoPhieu;
        thongTinHuyPhieu.LoaiPhieuThuChiThuNgan = this.thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan;

        let loaiType = true;
        this.dialog
            .open(XacNhanHuyThuComponent, { disableClose: true, width: "800px", data: { thongTinHuyPhieu, thuHoiPhieu, loaiType } })
            .afterClosed()
            .subscribe(resultData => {
                if (resultData != undefined && resultData !== null && resultData !== "") {
                    this.getThongSoPhieu();
                    this.notificationService.showSuccess("Hủy phiếu thu thành công.");
                }
            },
                (err: ApiError) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
    }

    phieuIn() {
        const self = this;
        const hosting = window.location.protocol + '//' + window.location.host;
        let xacNhanInData = new XacNhanInViewModel();
        xacNhanInData = {
            TaiKhoanBenhNhanThuId: this.thongTinSoPhieuDaThu.SoPhieuId,
            Hosting: hosting,
            InBangKe: false,
            InPhieuThu: true,
        };
        self.apiService.postExportPdf<any>('QuayThuoc/XacNhanIn', xacNhanInData).subscribe(
            resultData => {
                // var arrHtml = [{
                //     Html: resultData,
                //     TenFile: "InPhieuThu",
                //     PageSize: "A4",
                //     PageOrientation: "Landscape",
                // }];
                self.dialog.open(ThongTinPhieuPdfPopupComponent, {
                    disableClose: true,
                    width: '1000px',
                    data: { Model: resultData }
                }).afterClosed().subscribe(() => { });
            });
    }
}
