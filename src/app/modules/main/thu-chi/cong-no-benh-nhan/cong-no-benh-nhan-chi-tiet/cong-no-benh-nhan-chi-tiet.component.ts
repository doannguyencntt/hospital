import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CongNoBenhNhanThongTinHanhChinh, ListTabLichSuThuCongNoBenhNhan } from '../cong-no-benh-nhan.model';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { SortDescriptor } from '@progress/kendo-data-query';
import icPrint from '@iconify/icons-ic/twotone-print';
import { ThongTinPhieuPdfPopupComponent } from '../../thu-chi-vien-phi/common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import { CommonPdfPopupComponent } from '../../thu-chi-vien-phi/common/common-pdf-popup/common-pdf-popup.component';
import { ThongTinPhieuNoiTruPopupComponent } from '../../thu-chi-vien-phi/noi-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component';
@Component({
    selector: 'app-cong-no-benh-nhan-chi-tiet',
    templateUrl: './cong-no-benh-nhan-chi-tiet.component.html',
    styleUrls: ['./cong-no-benh-nhan-chi-tiet.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})

export class CongNoBenhNhanChiTietComponent implements OnInit {
    documentType: DocumentType = DocumentType.CongNoBenhNhan;
    loadingPopup: any;
    benhNhanId: number = 0;
    hostingName: string;

    listTabLichSuThuCongNoBenhNhan: ListTabLichSuThuCongNoBenhNhan = new ListTabLichSuThuCongNoBenhNhan(); l
    congNoBenhNhanThongTinHanhChinh: CongNoBenhNhanThongTinHanhChinh = new CongNoBenhNhanThongTinHanhChinh();

    gridThongTinThuNoColumns: any[] = [];
    gridThongTinThuNoData: any;
    sortThongTinThuNo: SortDescriptor[] = [{ field: "SoPhieuThu", dir: "asc" }]

    urlGetDanhSachThongTinThuNo = `CongNoBenhNhan/GetDanhSachThongTinThuNo`;
    urlTotalPagesThongTinThuNo = `CongNoBenhNhan/GetTotalPagesThongTinThuNo`;

    icPrint = icPrint;

    @ViewChild('soPhieuNoTemplate', { static: true }) soPhieuNoTemplate: TemplateRef<any>;
    @ViewChild('ngayTemplate', { static: true }) ngayTemplate: TemplateRef<any>;
    @ViewChild('soTienThuTemplate', { static: true }) soTienThuTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('tongTienFooterTemplate', { static: true }) tongTienFooterTemplate: TemplateRef<any>;
    @ViewChild('tongSoTienThuFooterTemplate', { static: true }) tongSoTienThuFooterTemplate: TemplateRef<any>;

    constructor(private route: ActivatedRoute, private dialog: MatDialog, private router: Router,
        private authService: AuthService, private notificationService: NotificationService, private apiService: ApiService) { }

    ngOnInit() {
        this.benhNhanId = this.route.snapshot.params.id;
        this.hostingName = window.location.protocol == "http:" ? `http://${window.location.host}` : `https://${window.location.host}`;

        if (this.benhNhanId) {
            this.getThongTinHanhChinhBenhNhan();
        }

        this.gridThongTinThuNoColumns = [
            { Field: "SoPhieuThu", Title: "Số phiếu thu", Width: 150, Sortable: true },
            { Field: "SoPhieuNo", Title: "Số phiếu nợ", Width: 150, Sortable: true, Template: this.soPhieuNoTemplate },
            { Field: "MaTiepNhan", Title: "Mã TN", Width: 150, Sortable: true },
            { Field: "Ngay", Title: "Ngày", Width: 150, Sortable: true, Template: this.ngayTemplate, TemplateFooter: this.tongTienFooterTemplate },
            { Field: "SoTienThu", Title: "Số tiền thu", Width: 150, Sortable: true, Template: this.soTienThuTemplate, TemplateFooter: this.tongSoTienThuFooterTemplate },
            { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },
        ];
    }

    getThongTinHanhChinhBenhNhan() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.showLoadingPopup();

            this.apiService.get(`CongNoBenhNhan/GetCongNoBenhNhanTTHC?benhNhanId=${this.benhNhanId}`).subscribe((res: any) => {
                this.congNoBenhNhanThongTinHanhChinh = res;
                this.closeAllDialogs();
            }, (err: ApiError) => {
                this.notificationService.showError(err.Message);
                this.closeAllDialogs();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    showLoadingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        }
    }

    showSavingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang lưu...' }
            });
        }
    }

    closeAllDialogs() {
        if (this.loadingPopup) {
            this.loadingPopup.close();
            this.loadingPopup = null;
        }
    }

    changeTab(evt) {
        switch (evt.index) {
            case 0:
                this.deselectTab();
                this.listTabLichSuThuCongNoBenhNhan.tabChuaThuSelected = true;
                break;
            case 1:
                this.deselectTab();
                this.listTabLichSuThuCongNoBenhNhan.tabDaThuSelected = true;
                break;
        }
    }

    deselectTab() {
        this.listTabLichSuThuCongNoBenhNhan.tabChuaThuSelected = false;
        this.listTabLichSuThuCongNoBenhNhan.tabDaThuSelected = false;
    }

    back() {
        this.router.navigateByUrl("/thu-ngan/cong-no-benh-nhan?holdQuery=true");
    }

    evtDataBoundGridThongTinThuNo(evt) {
        if (evt) {
            this.gridThongTinThuNoData = evt;
        }
    }

    getTongTien() {
        if (this.gridThongTinThuNoData) {
            let tongTien = 0;

            this.gridThongTinThuNoData.Data.forEach(item => {
                tongTien += item.SoTienThu;
            })

            return tongTien;
        }

        return 0;
    }

    evtDaThuDuTienBenhNhan(evt) {
        if (evt) {
            this.getThongTinHanhChinhBenhNhan();
        }
    }   

    xemSoPhieuNo(taiKhoanBenhNhanThuId) {
        let typeLoai = "InPhieuThu"
        this.inPhieuPdf(taiKhoanBenhNhanThuId, 0, typeLoai);
    }

    inPhieuPdf(taiKhoanThuId: any, taiKhoanChiId: any, loaiTypes: any) {
        let loading = this.dialog.open(LoadingComponent, {
			disableClose: true,
			width: "200px",
			height: "90px",
			data: { Title: 'Đang tải...' }			
		});

		let idYeuCauTiepNhan = 0;
        let phieuHoanUngIds ="";
		this.dialog
		.open(ThongTinPhieuNoiTruPopupComponent, {
			disableClose: false,
			width: "1000px",
			data: { taiKhoanThuId, taiKhoanChiId, idYeuCauTiepNhan, loaiTypes, phieuHoanUngIds },
		})
		.afterClosed()
		.subscribe((result) => {
			this.router.navigate(["/danh-sach-thu-tien-noi-tru"]);
			loading.close();
		});
    }

    xemSoPhieuThu(taiKhoanBenhNhanThuId) {
        this.showLoadingPopup();
        let arrFileUrl: Array<any> = [];
        let arrFilePdf: Array<any> = [];
        let hostingName = window.location.protocol + '//' + window.location.host;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportPdf<any>(`CongNoBenhNhan/GetHTMLPhieuThuNoBenhNhan?taiKhoanBenhNhanThuId=${taiKhoanBenhNhanThuId}&hostingName=${hostingName}`).subscribe(
                (file) => {
                    let newBlob = new Blob([file], { type: "application/pdf" });
                    let datalocalURL = window.URL.createObjectURL(newBlob);
                    arrFileUrl.push(datalocalURL);
                    arrFilePdf.push(file);
                    this.dialog
                        .open(CommonPdfPopupComponent, {
                            disableClose: false,
                            width: "1000px",
                            data: {arrFileUrl , arrFilePdf},
                        })
                        .afterClosed()
                        .subscribe((result) => { 
                            this.closeAllDialogs();
                        });
                },
                (err: ApiError) => {
                    if (err.Message !== "Validation Failed") {
                        this.closeAllDialogs();
                    }
                }
            );
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}