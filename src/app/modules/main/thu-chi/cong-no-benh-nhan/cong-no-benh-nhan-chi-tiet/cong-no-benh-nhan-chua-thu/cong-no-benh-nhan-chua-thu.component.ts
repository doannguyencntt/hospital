import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CongNoBenhNhanTraNoPopupComponent } from '../cong-no-benh-nhan-tra-no-popup/cong-no-benh-nhan-tra-no-popup.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { MatDialog } from '@angular/material';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiService } from 'src/app/core/services/api.service';
import { ThongTinPhieuPdfPopupComponent } from '../../../thu-chi-vien-phi/common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonPdfPopupComponent } from '../../../thu-chi-vien-phi/common/common-pdf-popup/common-pdf-popup.component';
import { ThongTinPhieuNoiTruPopupComponent } from '../../../thu-chi-vien-phi/noi-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component';

@Component({
    selector: 'app-cong-no-benh-nhan-chua-thu',
    templateUrl: './cong-no-benh-nhan-chua-thu.component.html',
    styleUrls: ['./cong-no-benh-nhan-chua-thu.component.scss']
})

export class CongNoBenhNhanChuaThuComponent implements OnInit {
    documentType: DocumentType = DocumentType.CongNoBenhNhan;
    validationErrors: any[] = [];
    hostingName: string;
    loadingPopup: any;

    gridColumns: any[] = [];
    gridData: any;
    sortDanhSachBenhNhanConNo: SortDescriptor[] = [{ field: "SoPhieuNo", dir: "asc" }]

    urlGetDanhSachBenhNhanConNo = `CongNoBenhNhan/GetDanhSachThongTinChuaThuNo`;
    urlGetTotalPagesBenhNhanConNo = `CongNoBenhNhan/GetTotalPagesThongTinChuaThuNo`;

    @Input() benhNhanId: number;
    @Output() outputDaThuDuTienBenhNhan = new EventEmitter();

    @ViewChild('soPhieuNoTemplate', { static: true }) soPhieuNoTemplate: TemplateRef<any>;
    @ViewChild('ngayTemplate', { static: true }) ngayTemplate: TemplateRef<any>;
    @ViewChild('soTienCongNoTemplate', { static: true }) soTienCongNoTemplate: TemplateRef<any>;
    @ViewChild('soTienDaThuTemplate', { static: true }) soTienDaThuTemplate: TemplateRef<any>;
    @ViewChild('soTienChuaThuTemplate', { static: true }) soTienChuaThuTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('tongTienFooterTemplate', { static: true }) tongTienFooterTemplate: TemplateRef<any>;
    @ViewChild('tongSoTienCongNoFooterTemplate', { static: true }) tongSoTienCongNoFooterTemplate: TemplateRef<any>;
    @ViewChild('tongSoTienDaThuFooterTemplate', { static: true }) tongSoTienDaThuFooterTemplate: TemplateRef<any>;
    @ViewChild('tongSoTienChuaThuFooterTemplate', { static: true }) tongSoTienChuaThuFooterTemplate: TemplateRef<any>;
    @ViewChild('gridChuaThu', { static: true }) gridChuaThu: GridComponent;

    constructor(private dialog: MatDialog, private authService: AuthService, private notificationService: NotificationService, private apiService: ApiService) { }

    ngOnInit() {
        this.hostingName = window.location.protocol == "http:" ? `http://${window.location.host}` : `https://${window.location.host}`;

        this.gridColumns = [
            { Field: "SoPhieuNo", Title: "Số phiếu nợ", Width: 150, Sortable: true, Template: this.soPhieuNoTemplate },
            { Field: "MaTiepNhan", Title: "Mã TN", Width: 150, Sortable: true },
            { Field: "Ngay", Title: "Ngày", Width: 150, Sortable: true, Template: this.ngayTemplate, TemplateFooter: this.tongTienFooterTemplate },
            { Field: "SoTienCongNo", Title: "ST công nợ", Width: 150, Sortable: true, Template: this.soTienCongNoTemplate, TemplateFooter: this.tongSoTienCongNoFooterTemplate },
            { Field: "SoTienDaThu", Title: "ST đã thu", Width: 150, Sortable: true, Template: this.soTienDaThuTemplate, TemplateFooter: this.tongSoTienDaThuFooterTemplate },
            { Field: "SoTienChuaThu", Title: "ST chưa thu", Width: 150, Sortable: true, Template: this.soTienChuaThuTemplate, TemplateFooter: this.tongSoTienChuaThuFooterTemplate },
            { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },
        ];
    }

    evtDataBoundGridBenhNhanChuaThu(evt) {
        if (evt) {
            this.gridData = evt;
        }
    }

    getTongSoTienCongNo() {
        if (this.gridData) {
            let tongTien = 0;

            this.gridData.Data.forEach(item => {
                tongTien += item.SoTienCongNo;
            })

            return tongTien;
        }

        return 0;
    }

    getTongSoTienDaThu() {
        if (this.gridData) {
            let tongTien = 0;

            this.gridData.Data.forEach(item => {
                tongTien += item.SoTienDaThu;
            })

            return tongTien;
        }

        return 0;
    }

    getTongSoTienChuaThu() {
        if (this.gridData) {
            let tongTien = 0;

            this.gridData.Data.forEach(item => {
                tongTien += item.SoTienChuaThu;
            })

            return tongTien;
        }

        return 0;
    }

    traNo(taiKhoanBenhNhanThuId) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(CongNoBenhNhanTraNoPopupComponent, {
                disableClose: true,
                width: '500px',
                // height: "600px",
                data: { taiKhoanBenhNhanThuId: taiKhoanBenhNhanThuId }
            }).afterClosed().subscribe((res) => {
                if (!Number.isNaN(Number(res))) {
                    this.xemSoPhieuThuNoBenhNhan(res);
                    this.gridChuaThu.search();

                    if (res === 0) {
                        this.outputDaThuDuTienBenhNhan.emit(true);
                    }
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xemSoPhieuThuNoBenhNhan(taiKhoanBenhNhanThuId) {
        this.showLoadingPopup();
        let hostingName = window.location.protocol + '//' + window.location.host;
        let arrFileUrl: Array<any> = [];
        let arrFilePdf: Array<any> = [];
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportPdf<any>(`CongNoBenhNhan/GetHTMLPhieuThuNoBenhNhan?taiKhoanBenhNhanThuId=${taiKhoanBenhNhanThuId}&hostingName=${hostingName}`).subscribe(
                (file) => {
                    let newBlob = new Blob([file], { type: "application/pdf" });
                    let datalocalURL = window.URL.createObjectURL(newBlob);
                    arrFileUrl.push(datalocalURL);
                    arrFilePdf.push(file);
                    if (arrFilePdf.length > 0) {
                        this.dialog
                            .open(CommonPdfPopupComponent, {
                                disableClose: false,
                                width: "1000px",
                                data: { arrFileUrl, arrFilePdf },
                            })
                            .afterClosed()
                            .subscribe((result) => {
                                this.closeAllDialogs();
                            });
                    }
                    else { { } }
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

    closeAllDialogs() {
        if (this.loadingPopup) {
            this.loadingPopup.close();
            this.loadingPopup = null;
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
        let phieuHoanUngIds = "";
        this.dialog
            .open(ThongTinPhieuNoiTruPopupComponent, {
                disableClose: false,
                width: "1000px",
                data: { taiKhoanThuId, taiKhoanChiId, idYeuCauTiepNhan, loaiTypes, phieuHoanUngIds },
            })
            .afterClosed()
            .subscribe((result) => {
                loading.close();
            });

    }



    xemDanhSachDaThu(taiKhoanBenhNhanThuId) {
        let arrFileUrl: Array<any> = [];
        let arrFilePdf: Array<any> = [];
        this.showLoadingPopup();
        let hostingName = window.location.protocol + '//' + window.location.host;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportPdf<any>(`CongNoBenhNhan/GetHtmlTatCaPhieuThuNoBenhNhan?taiKhoanBenhNhanThuChinhId=${taiKhoanBenhNhanThuId}&hostingName=${hostingName}`).subscribe(
                (file) => {

                    let newBlob = new Blob([file], { type: "application/pdf" });
                    let datalocalURL = window.URL.createObjectURL(newBlob);

                    arrFileUrl.push(datalocalURL);
                    arrFilePdf.push(file);

                    this.dialog
                        .open(CommonPdfPopupComponent, {
                            disableClose: false,
                            width: "1000px",
                            data: { arrFileUrl, arrFilePdf },
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