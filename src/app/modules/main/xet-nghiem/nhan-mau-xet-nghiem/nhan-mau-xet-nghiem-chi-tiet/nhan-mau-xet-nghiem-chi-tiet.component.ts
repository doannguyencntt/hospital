import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { SortDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { NhanMauXetNghiemTuChoiPopupComponent } from '../nhan-mau-xet-nghiem-tu-choi-popup/nhan-mau-xet-nghiem-tu-choi-popup.component';
import { ThongTinPhieuGoiMauXetNghiem } from '../../goi-mau-xet-nghiem/goi-mau-xet-nghiem.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

import icDone from '@iconify/icons-ic/check-circle';
import icClear from '@iconify/icons-ic/highlight-off';

@Component({
	selector: 'app-nhan-mau-xet-nghiem-chi-tiet',
	templateUrl: './nhan-mau-xet-nghiem-chi-tiet.component.html',
	styleUrls: ['./nhan-mau-xet-nghiem-chi-tiet.component.scss']
})

export class NhanMauXetNghiemChiTietComponent implements OnInit {
	documentType: DocumentType = DocumentType.GoiMauXetNghiem;
	thongTinPhieuGoiMauXetNghiem = new ThongTinPhieuGoiMauXetNghiem();
	phieuGoiMauXetNghiemId: number = 0;
    tongSoLuongMauGoi: number = 0;
    thongTinTuChoi: any;
    allowTiepNhanMau: boolean = false;

	currentAccessUser: any;
    idPhong: any;
    currentUserInformation: any;
    
    additionalSearchStringNhomDichVu: string = null;
	
	gridNhomXetNghiemColumns: any[] = [];
	gridDichVuXetNghiemColumns: any[] = [];

	urlGetDataNhomXetNghiem = "XetNghiem/GetDanhSachNhanMauNhomXetNghiemForGrid";
    urlGetDataDichVuXetNghiem = "XetNghiem/GetDanhSachNhanMauDichVuXetNghiemForGrid";
    
    urlGetTotalPageNhomXetNghiem = "XetNghiem/GetTotalPagesDanhSachNhanMauNhomXetNghiemForGrid";
    urlGetTotalPageDichVuXetNghiem = "XetNghiem/GetTotalPagesDanhSachNhanMauDichVuXetNghiemForGrid";
	
	sortNhomXetNghiem: SortDescriptor[] = [ { field: "MaTiepNhan", dir: "asc" }, { field: "NhomDichVuBenhVienId", dir: "asc" } ]
    sortDichVuXetNghiem: SortDescriptor[] = [ { field: "MaDichVu", dir: "desc" } ]
    
    icDone = icDone;
    icClear = icClear;

    @ViewChild('nhomDichVuBenhVienNhomXetNghiemTemplate', { static: true }) nhomDichVuBenhVienNhomXetNghiemTemplate: TemplateRef<any>;
	@ViewChild('gioiTinhNhomXetNghiemTemplate', { static: true }) gioiTinhNhomXetNghiemTemplate: TemplateRef<any>;
    @ViewChild('loaiMauNhomXetNghiemTemplate', { static: true }) loaiMauNhomXetNghiemTemplate: TemplateRef<any>;
    @ViewChild('actionNhomXetNghiemTemplate', { static: true }) actionNhomXetNghiemTemplate: TemplateRef<any>;
    
    @ViewChild('thoiGianChiDinhDichVuXetNghiemTemplate', { static: true }) thoiGianChiDinhDichVuXetNghiemTemplate: TemplateRef<any>;
    @ViewChild('nguoiChiDinhDichVuXetNghiemTemplate', { static: true }) nguoiChiDinhDichVuXetNghiemTemplate: TemplateRef<any>;
    @ViewChild('loaiMauDichVuXetNghiemTemplate', { static: true }) loaiMauDichVuXetNghiemTemplate: TemplateRef<any>;

    @ViewChild('gridNhomXetNghiem', { static: false }) gridNhomXetNghiem: GridComponent;
    
	constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute,
        		private authService: AuthService, private notificationService: NotificationService, private apiService: ApiService) { }

	ngOnInit() {
		this.phieuGoiMauXetNghiemId = this.route.snapshot.params.id;

        if (this.phieuGoiMauXetNghiemId) {
            this.currentAccessUser = this.authService.getAccessUser();
            this.idPhong = this.authService.getPhongLamViecId();

            this.getChiTietPhieuGoiMauXetNghiem(this.phieuGoiMauXetNghiemId);
            this.getSoLuongMauCoTheTuChoi(this.phieuGoiMauXetNghiemId);
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
            { Field: "Action", Title: "", Width: 100, Template: this.actionNhomXetNghiemTemplate }
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

    getSoLuongMauCoTheTuChoi(id: number) {
		this.apiService.get(`XetNghiem/TinhSoLuongMauCoTheTuChoi?phieuGoiMauId=${id}`).subscribe((res: any) => {
            if(res != null && res > 0) {
                this.allowTiepNhanMau = true;
                return;
            }

            this.allowTiepNhanMau = false;
		}, (err: ApiError) => {
			this.notificationService.showError(err.Message);
		});
    }

    getChiTietPhieuGoiMauXetNghiem(id: number) {
		this.apiService.get(`XetNghiem/GetPhieuGoiMauXetNghiem?id=${id}`).subscribe((res: any) => {
            this.thongTinPhieuGoiMauXetNghiem = res;
		}, (err: ApiError) => {
			this.notificationService.showError(err.Message);
			this.router.navigate(['/xet-nghiem/nhan-mau']);
		});
    }
    
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

	quayLai() {
		this.router.navigateByUrl("/xet-nghiem/nhan-mau?holdQuery=true");
	}

	tiepNhanMau() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "400px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn tiếp nhận (các) mẫu này không?",
            },
        })
        .afterClosed()
        .subscribe((result) => {
            /* result is a string:Yes,No,No answer*/
            if (result == "Yes") {
                this.apiService.post(`XetNghiem/TiepNhanMau?phieuGoiMauXetNghiemId=${this.phieuGoiMauXetNghiemId}`).subscribe((res) => {
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Tiếp nhận mẫu"]));
                    // this.quayLai();
                    this.getChiTietPhieuGoiMauXetNghiem(this.phieuGoiMauXetNghiemId);
                    this.getSoLuongMauCoTheTuChoi(this.phieuGoiMauXetNghiemId);
                    this.getTongSoLuongMauGoi(this.phieuGoiMauXetNghiemId);
                    this.getAdditionalSearchStringNhomDichVu(this.phieuGoiMauXetNghiemId);
                }, (err: ApiError) => {
                    this.notificationService.showError(err.Message);
                });
            }
        });
    }

	tuChoiMau(dataItem) {
		this.dialog.open(NhanMauXetNghiemTuChoiPopupComponent, {
            disableClose: true,
            width: '600px',
            height: 'auto',
            data: { dataItem: dataItem }
        })
        .afterClosed()
        .subscribe((res) => {
			if (res === 'Yes') {
                if(this.gridNhomXetNghiem) {
                    this.gridNhomXetNghiem.search();
                    this.getSoLuongMauCoTheTuChoi(this.phieuGoiMauXetNghiemId);
                }
			}
		});
    }
    
    tooltipCustom(loaiMauXetNghiem: any) {
        this.thongTinTuChoi = loaiMauXetNghiem;
    }
}
