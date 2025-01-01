import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { SortDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ThongTinPhieuGoiMauXetNghiem } from '../goi-mau-xet-nghiem.model';
import { ApiError } from 'src/app/shared/models/api-error.model';

import icDelete from '@iconify/icons-ic/twotone-delete';
import icDone from '@iconify/icons-ic/check-circle';
import icClear from '@iconify/icons-ic/highlight-off';

@Component({
	selector: 'app-goi-mau-xet-nghiem-chi-tiet',
	templateUrl: './goi-mau-xet-nghiem-chi-tiet.component.html',
	styleUrls: ['./goi-mau-xet-nghiem-chi-tiet.component.scss']
})
export class GoiMauXetNghiemChiTietComponent implements OnInit {
	documentType: DocumentType = DocumentType.GoiMauXetNghiem;
	thongTinPhieuGoiMauXetNghiem = new ThongTinPhieuGoiMauXetNghiem();
	phieuGoiMauXetNghiemId: number = 0;
	tongSoLuongMauGoi: number = 0;
	thongTinTuChoi: any;

	currentAccessUser: any;
    idPhong: any;
	currentUserInformation: any;
	
	gridNhomXetNghiemColumns: any[] = [];
	gridDichVuXetNghiemColumns: any[] = [];

	urlGetDataNhomXetNghiem = "XetNghiem/GetDanhSachGoiMauNhomXetNghiemForGrid";
    urlGetDataDichVuXetNghiem = "XetNghiem/GetDanhSachGoiMauDichVuXetNghiemForGrid";
    
    urlGetTotalPageNhomXetNghiem = "XetNghiem/GetTotalPagesDanhSachGoiMauNhomXetNghiemForGrid";
    urlGetTotalPageDichVuXetNghiem = "XetNghiem/GetTotalPagesDanhSachGoiMauDichVuXetNghiemForGrid";
	
	sortNhomXetNghiem: SortDescriptor[] = [ { field: "MaTiepNhan", dir: "asc" }, { field: "NhomDichVuBenhVienId", dir: "asc" } ]
	sortDichVuXetNghiem: SortDescriptor[] = [ { field: "MaDichVu", dir: "desc" } ]

	additionalSearchStringNhomDichVu: string = null;
	// additionalSearchStringDichVu: string = null;

	icDelete = icDelete;
	icDone = icDone;
    icClear = icClear;

	@ViewChild('nhomDichVuBenhVienNhomXetNghiemTemplate', { static: true }) nhomDichVuBenhVienNhomXetNghiemTemplate: TemplateRef<any>;
	@ViewChild('gioiTinhNhomXetNghiemTemplate', { static: true }) gioiTinhNhomXetNghiemTemplate: TemplateRef<any>;
	@ViewChild('loaiMauNhomXetNghiemTemplate', { static: true }) loaiMauNhomXetNghiemTemplate: TemplateRef<any>;

	@ViewChild('thoiGianChiDinhDichVuXetNghiemTemplate', { static: true }) thoiGianChiDinhDichVuXetNghiemTemplate: TemplateRef<any>;
	@ViewChild('nguoiChiDinhDichVuXetNghiemTemplate', { static: true }) nguoiChiDinhDichVuXetNghiemTemplate: TemplateRef<any>;
	@ViewChild('loaiMauDichVuXetNghiemTemplate', { static: true }) loaiMauDichVuXetNghiemTemplate: TemplateRef<any>;

	constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute,
        		private authService: AuthService, private notificationService: NotificationService, private apiService: ApiService) { }

	ngOnInit() {
		this.phieuGoiMauXetNghiemId = this.route.snapshot.params.id;

        if (this.phieuGoiMauXetNghiemId) {
            this.currentAccessUser = this.authService.getAccessUser();
			this.idPhong = this.authService.getPhongLamViecId();
			
			this.getChiTietPhieuGoiMauXetNghiem(this.phieuGoiMauXetNghiemId);
			this.getTongSoLuongMauGoi(this.phieuGoiMauXetNghiemId);
			this.getAdditionalSearchStringNhomDichVu(this.phieuGoiMauXetNghiemId);
        } else {
            return;
        }
		
		this.gridNhomXetNghiemColumns = [
			{ Field: "NhomDichVuBenhVienId", Title: "Xét nghiệm", Width: 120, Sortable: false, Template: this.nhomDichVuBenhVienNhomXetNghiemTemplate },
            { Field: "Barcode", Title: "Mã Barcode", Width: 80, Sortable: false },
            { Field: "LoaiMauXetNghiems", Title: "Loại mẫu", Width: 120, Sortable: false, Template: this.loaiMauNhomXetNghiemTemplate },
			{ Field: "MaTiepNhan", Title: "Mã TN", Width: 80, Sortable: false },
			{ Field: "MaBenhNhan", Title: "Mã NB", Width: 80, Sortable: false },
			{ Field: "HoTen", Title: "Họ tên", Width: 120, Sortable: false },
			{ Field: "NamSinh", Title: "Năm sinh", Width: 50, Sortable: false },
			{ Field: "GioiTinh", Title: "Giới tính", Width: 50, Sortable: false, Template: this.gioiTinhNhomXetNghiemTemplate },
        ]

        this.gridDichVuXetNghiemColumns = [
            { Field: "MaDichVu", Title: "Mã DV", Width: 50, Sortable: false },
            { Field: "TenDichVu", Title: "Tên DV", Width: 150, Sortable: false },
            { Field: "ThoiGianChiDinh", Title: "Thời gian chỉ định", Width: 100, Sortable: false, Template: this.thoiGianChiDinhDichVuXetNghiemTemplate },
			{ Field: "NguoiChiDinhId", Title: "Người chỉ định", Width: 130, Sortable: false, Template: this.nguoiChiDinhDichVuXetNghiemTemplate },
			{ Field: "BenhPham", Title: "Bệnh phẩm", Width: 100, Sortable: false },
			{ Field: "LoaiMau", Title: "Loại mẫu", Width: 50, Sortable: false, Template: this.loaiMauDichVuXetNghiemTemplate }
        ]
	}

	getChiTietPhieuGoiMauXetNghiem(id: number) {
		this.apiService.get(`XetNghiem/GetPhieuGoiMauXetNghiem?id=${id}`).subscribe((res: any) => {
			this.thongTinPhieuGoiMauXetNghiem = res;
		}, (err: ApiError) => {
			this.notificationService.showError(err.Message);
			this.router.navigate(['/xet-nghiem/goi-mau']);
		});
	}

	// getAdditionalSearchStringForGridDichVuXetNghiem(phienXetNghiemId, nhomDichVuBenhVienId) {
    //     return `{ PhienXetNghiemId: ${phienXetNghiemId}, NhomDichVuBenhVienId: ${nhomDichVuBenhVienId} }`
	// }
	
	getTongSoLuongMauGoi(id: number) {
		this.apiService.get(`XetNghiem/GetTongSoLuongMauGoiMauXetNghiem?id=${id}`).subscribe((res: any) => {
			this.tongSoLuongMauGoi = res;
		}, (err: ApiError) => {
			this.notificationService.showError(err.Message);
		});
	}

	getAdditionalSearchStringNhomDichVu(phieuGoiMauXetNghiemId: number) {
        this.additionalSearchStringNhomDichVu = `{ "PhieuGoiMauXetNghiemId":"${phieuGoiMauXetNghiemId}" }`;
    }

	// expandDichVu(evt) {
    //     if(evt && evt.dataItem) {
    //         this.additionalSearchStringDichVu = `{ PhienXetNghiemId: ${evt.dataItem.PhienXetNghiemId}, NhomDichVuBenhVienId: ${evt.dataItem.NhomDichVuBenhVienId} }`
    //     }
	// }
	
	getLoaiMauDisplay(dataItem) {
        if(dataItem) {
            return dataItem.LoaiMauXetNghiems.map(p => p.LoaiMauDisplay).join(', ');
        }
	}
	
	tooltipCustom(loaiMauXetNghiem: any) {
        this.thongTinTuChoi = loaiMauXetNghiem;
    }

	quayLai() {
		this.router.navigateByUrl("/xet-nghiem/goi-mau?holdQuery=true");
	}
}
