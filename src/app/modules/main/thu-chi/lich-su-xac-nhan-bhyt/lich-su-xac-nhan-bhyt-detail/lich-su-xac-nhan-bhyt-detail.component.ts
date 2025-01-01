import { Component, OnInit, ViewChild, TemplateRef, HostListener } from '@angular/core';
import { ThongTinHanhChinh, ThongTinBaoHiemXaHoi } from '../lich-su-xac-nhan-bhyt.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { MatDialog } from '@angular/material';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from "src/app/core/services/notification.service";
import { ThongTinPhieuBHYTPdfPopupComponent } from '../thong-tin-phieu-linh-thuoc-pdf-popup/thong-tin-phieu-linh-thuoc-pdf-popup.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-lich-su-xac-nhan-bhyt-detail',
    templateUrl: './lich-su-xac-nhan-bhyt-detail.component.html',
    styleUrls: ['./lich-su-xac-nhan-bhyt-detail.component.scss']
})
export class LichSuXacNhanBhytDetailComponent implements OnInit {
    thongTinHanhChinh: ThongTinHanhChinh;
    thongTinBaoHiemXaHoi: ThongTinBaoHiemXaHoi;
    thongTinDuyet: any;
    thisId = 0;
    documentType: DocumentType;
    urlGetDataGrid = 'LichSuXacNhanBHYT/GetDataForGridXacNhanAsync';
    urlGetTotalPageGrid = 'LichSuXacNhanBHYT/GetTotalPageForGridXacNhanAsync';
    gridColumnsXacNhanBHYT: any[] = [];
    data: any = [];
    position = new FormControl('above');
    groups: GroupDescriptor[] = [{
        field: 'Nhom', aggregates: [
            { field: 'ThanhTienBenhVien', aggregate: 'sum' },
            { field: 'TTBHYTChiTra', aggregate: 'sum' },
            { field: 'BNThanhToan', aggregate: 'sum' }
        ]
    }];

    @ViewChild('donGiaBenhVienTemplate', { static: true }) donGiaBenhVienTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('templateDGBHYTCT', { static: true }) templateDGBHYTCT: TemplateRef<any>;
    @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
    @ViewChild('dgbhytThamKhaoTemplate', { static: true }) dgbhytThamKhaoTemplate: TemplateRef<any>;
    @ViewChild('thanhTienBHYTThamKhaoTemplate', { static: true }) thanhTienBHYTThamKhaoTemplate: TemplateRef<any>;
    @ViewChild('ttBHYTChiTraTemplate', { static: true }) ttBHYTChiTraTemplate: TemplateRef<any>;
    @ViewChild('orderTemplate', { static: true }) orderTemplate: TemplateRef<any>;
    @ViewChild('ttBHYTChiTraFooterTemplate', { static: true }) ttBHYTChiTraFooterTemplate: TemplateRef<any>;
    @ViewChild('ttBHYTChiTraGroupFooterTemplate', { static: true }) ttBHYTChiTraGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('tiLeTheoDvTemplate', { static: true }) tiLeTheoDvTemplate: TemplateRef<any>;
    @ViewChild('mucHuongTemplate', { static: true }) mucHuongTemplate: TemplateRef<any>;

    public totalThanhTien(field: any) {
        switch (field) {
            case 'ThanhTienBenhVien':
                return this.data.reduce((sum, item) => sum + item.ThanhTienBenhVien, 0);
        }
    }

    public totalTTBHYTChiTra(field: any) {
        switch (field) {
            case 'TTBHYTChiTra':
                return this.data.reduce((sum, item) => sum + item.TTBHYTChiTra, 0);
        }
    }

    public totalBNConPhaiThanhToan(field: any) {
        switch (field) {
            case 'BNThanhToan':
                return this.data.reduce((sum, item) => sum + item.BNThanhToan, 0);
        }
    }

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private router: Router,
        private dialog: MatDialog,
        private notificationService: NotificationService
    ) { }


    ngOnInit() {
        this.thisId = this.route.snapshot.params.id;
        this.documentType = DocumentType.LichSuXacNhanBHYT;
        const id: number = this.route.snapshot.params.id;

        this.thongTinBaoHiemXaHoi = {
            SoThe: '',
            NgayHieuLucStr: '',
            NgayHetHanStr: '',
            NoiDangKyKhamBenh: '',
            TuyenKham: '',
            GiayChuyenVien: '',
            GiayMiemCungTriTra: '',
            MucHuong: 0,
            GiayChuyenVienId: 0,
            GiayMienCungTriTraId: 0
        };

        this.thongTinHanhChinh = {
            Id: 1,
            MaTN: '',
            MaBN: '',
            HoTen: '',
            NamSinh: 1990,
            DiaChi: '',
            SoDienThoaiStr: '',
            Email: '',
            DoiTuongUuDai: '',
            CongTyUuDai: '',
            TenGioiTinh: ''
        };

        this.thongTinDuyet = {
            NhanVienDuyet: '',
            ThoiDiemDuyet: ''
        };

        this.gridColumnsXacNhanBHYT = [
            { Field: 'STT', Title: '#', Width: 40, Sortable: false, Template: this.orderTemplate },
            { Field: 'Nhom', Title: 'Nhóm', Width: 200, Hidden: true },
            { Field: 'MaDichVu', Title: 'Mã', Width: 80 },
            { Field: 'TenDichVu', Title: 'Tên dịch vụ', MinWidth: 150 },
            { Field: 'LoaiGia', Title: 'Loại giá', Width: 80 },
            { Field: 'SoLuong', Title: 'SL', Width: 40 },
            {
                Field: 'DonGiaBenhVien', Title: 'ĐG doanh thu', Width: 120, Template: this.donGiaBenhVienTemplate,
                TemplateGroupFooter: this.donGiaGroupFooterTemplate, TemplateFooter: this.donGiaFooterTemplate
            },
            {
                Field: 'ThanhTienBenhVien', Title: 'Thành Tiền', Width: 120, Template: this.thanhTienTemplate,
                TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate
            },
            { Field: 'DGBHYTThamKhao', Title: 'ĐG BHYT', Width: 120, Template: this.dgbhytThamKhaoTemplate },
            { Field: 'ThanhTienBHYTThamKhao', Title: 'Thành tiền BHYT', Width: 120, Template: this.thanhTienBHYTThamKhaoTemplate },
            { Field: 'TiLeDv', Title: 'Tỉ lệ theo dịch vụ (%)', Width: 161, Template: this.tiLeTheoDvTemplate },
            { Field: 'MucHuong', Title: 'Mức hưởng (%)', Width: 118, Template: this.mucHuongTemplate },
            { Field: 'DGBHYTChiTra', Title: 'ĐG BHYT chi trả', Width: 120, Template: this.templateDGBHYTCT },
            {
                Field: 'TTBHYTChiTra', Title: 'TT BHYT Chi Trả', Width: 120, Template: this.ttBHYTChiTraTemplate,
                TemplateFooter: this.ttBHYTChiTraFooterTemplate, TemplateGroupFooter: this.ttBHYTChiTraGroupFooterTemplate
            },
        ];

        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }

    getById(id: number) {
        this.apiService.post<any>('LichSuXacNhanBHYT/GetById?id=' + id).subscribe(
            (resultData: any) => {
                if (resultData !== undefined && resultData != null) {
                    this.thongTinBaoHiemXaHoi = {
                        SoThe: resultData.BHYTMaSoThe,
                        NgayHieuLucStr: resultData.BHYTngayHieuLucStr,
                        NgayHetHanStr: resultData.BHYTngayHetHanStr,
                        NoiDangKyKhamBenh: resultData.DKBD,
                        TuyenKham: resultData.LyDoVaoVienDisplay,
                        GiayChuyenVien: resultData.GiayChuyenVienDisplay,
                        GiayChuyenVienId: resultData.GiayChuyenVienId,
                        GiayMiemCungTriTra: resultData.GiayMienCungChiTraDisplay,
                        GiayMienCungTriTraId: resultData.BHYTGiayMienCungChiTraId,
                        MucHuong: resultData.BHYTMucHuong
                    };

                    this.thongTinHanhChinh = {
                        Id: id,
                        MaTN: resultData.MaYeuCauTiepNhan,
                        MaBN: resultData.BenhNhan.MaBN,
                        HoTen: resultData.HoTen,
                        NamSinh: resultData.NamSinh,
                        DiaChi: resultData.DiaChi,
                        SoDienThoaiStr: resultData.SoDienThoai,
                        Email: resultData.Email,
                        DoiTuongUuDai: resultData.DoiTuongUuDai != null ? resultData.DoiTuongUuDai.Ten : '',
                        CongTyUuDai: resultData.CongTyUuDai != null ? resultData.CongTyUuDai.Ten : '',
                        TenGioiTinh: resultData.GioiTinh === 1 ? 'Nam' : 'Nữ'
                    };

                    this.thongTinDuyet = {
                        NhanVienDuyet: resultData.NhanVienDuyet,
                        ThoiDiemDuyet: resultData.ThoiDiemDuyet
                    };
                }
            });
    }

    onHuy() {
        this.router.navigate(['/lich-su-xac-nhan-bhyt/ngoai-tru'], {
            queryParamsHandling: 'preserve',
        });
    }

    viewDocument(idFile: number, type: number) {
        this.apiService.post('XacNhanBHYT/GetDocument?idFile=' + idFile + '&type=' + type).subscribe(
            (result: any) => {
                if (result.MoTa === undefined) {
                    result.MoTa = null;
                }
                const params = new HttpParams({
                    fromObject: {
                        tenGuid: result.TenGuid,
                        duongDan: result.DuongDan
                    }
                });
                this.apiService.get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params).subscribe((resp) => {
                    if (resp) {
                        if (result.TenGuid.indexOf('.pdf') !== -1 || result.TenGuid.indexOf('.PDF') !== -1) {
                            this.dialog.open(ViewImagePdfComponent, {
                                disableClose: false,
                                width: '1000px',
                                height: '600px',
                                data: {
                                    Type: 'PDF', Title: 'Xem tài liệu',
                                    Description: (result.MoTa !== null ? result.MoTa : ''), Src: resp
                                }
                            });
                        } else {
                            this.dialog.open(ViewImagePdfComponent, {
                                disableClose: false,
                                width: '1000px',
                                height: '600px',
                                data: {
                                    Type: 'Image', Title: 'Xem ảnh',
                                    Description: (result.MoTa !== null ? result.MoTa : ''), Src: resp
                                }
                            });
                        }

                    }
                });
            });
    }

    onDataBoundChild(event: any) {
        this.data = event.Data;
    }


    phieuLinhThuocBenhNhanBHYT() {
        let loading = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: {},
        });
        let hostingName = window.location.protocol + '//' + window.location.host;
        this.apiService.post<String>("XacNhanBHYT/PhieuLinhThuocBenhNhanXacNhanBHYT?baoHiemYteId=" + this.thisId + "&hostingName=" + hostingName).subscribe(
            arrHtml => {
                var arrHtmls = [{
                    Html: arrHtml,
                    TenFile: "PhieuLinhThuocBenhNhanBHYT",
                    PageSize: "A4",
                    PageOrientation: "Portrait",
                }];

                this.dialog
                    .open(ThongTinPhieuBHYTPdfPopupComponent, {
                        disableClose: false,
                        width: "1000px",
                        data: arrHtmls,
                    })
                    .afterClosed()
                    .subscribe(result => { loading.close() });
            },
            (err: ApiError) => {
                if (err.Message !== "Validation Failed") {
                    this.notificationService.showError(err.Message);
                    loading.close();
                }
            }
        );
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 27 && !event.ctrlKey) {
            // esc
            this.onHuy();
            event.preventDefault();
        }
    }
}
