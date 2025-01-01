import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

import icPrint from '@iconify/icons-ic/twotone-print';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { ThongTinPhieuPdfPopupComponent } from '../../../thu-chi-vien-phi/common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ThongTinPhieuNoiTruPopupComponent } from '../../../thu-chi-vien-phi/noi-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component';
import { CommonPdfPopupComponent } from '../../../thu-chi-vien-phi/common/common-pdf-popup/common-pdf-popup.component';


@Component({
  selector: 'app-cong-no-benh-nhan-da-thu',
  templateUrl: './cong-no-benh-nhan-da-thu.component.html',
  styleUrls: ['./cong-no-benh-nhan-da-thu.component.scss']
})

export class CongNoBenhNhanDaThuComponent implements OnInit {
    documentType: DocumentType = DocumentType.CongNoBenhNhan;
    validationErrors: any[] = [];
    hostingName: string;
    loadingPopup: any;
    
    gridColumns: any[] = [];
    gridData: any;
    sortDanhSachBenhNhanConNo: SortDescriptor[] = [ { field: "SoPhieuThu", dir: "asc" }]

    urlGetDanhSachBenhNhanConNo = `CongNoBenhNhan/GetDanhSachThongTinDaThuNo`;
    urlGetTotalPagesBenhNhanConNo = `CongNoBenhNhan/GetTotalPagesThongTinDaThuNo`;

    icPrint = icPrint;

    @Input() benhNhanId: number;
    
    @ViewChild('soPhieuNoTemplate', { static: true }) soPhieuNoTemplate: TemplateRef<any>;
    @ViewChild('ngayTemplate', { static: true }) ngayTemplate: TemplateRef<any>;
    @ViewChild('soTienThuTemplate', { static: true }) soTienThuTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('tongTienFooterTemplate', { static: true }) tongTienFooterTemplate: TemplateRef<any>;
    @ViewChild('tongSoTienThuFooterTemplate', { static: true }) tongSoTienThuFooterTemplate: TemplateRef<any>;

    constructor(private dialog: MatDialog, private authService: AuthService, private notificationService: NotificationService, private apiService: ApiService) { }

    ngOnInit() {
        this.hostingName = window.location.protocol == "http:" ? `http://${window.location.host}` : `https://${window.location.host}`;

        this.gridColumns = [
            { Field: "SoPhieuThu", Title: "Số phiếu thu", Width: 150, Sortable: true },
            { Field: "SoPhieuNo", Title: "Số phiếu nợ", Width: 150, Sortable: true, Template: this.soPhieuNoTemplate },
            { Field: "MaTiepNhan", Title: "Mã TN", Width: 150, Sortable: true },
            { Field: "Ngay", Title: "Ngày", Width: 150, Sortable: true, Template: this.ngayTemplate, TemplateFooter: this.tongTienFooterTemplate },
            { Field: "SoTienThu", Title: "Số tiền thu", Width: 150, Sortable: true, Template: this.soTienThuTemplate, TemplateFooter: this.tongSoTienThuFooterTemplate },
            { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },
        ];
    }

    evtDataBoundGridBenhNhanDaThu(evt) {
        if(evt) {
            this.gridData = evt;
        }
    }

    getTongTien() {
        if(this.gridData) {
            let tongTien = 0;

            this.gridData.Data.forEach(item => {
                tongTien += item.SoTienThu;
            })

            return tongTien;
        }

        return 0;
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
        let phieuHoanUngIds ="";
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

    xemSoPhieuThu(taiKhoanBenhNhanThuId) {
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
                    this.dialog
                        .open(CommonPdfPopupComponent, {
                            disableClose: false,
                            width: "1000px",
                            data: {arrFileUrl , arrFilePdf},
                        })
                        .afterClosed()
                        .subscribe((result) => {  this.closeAllDialogs();});
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
