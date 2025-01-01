import { Component, OnInit, Inject } from "@angular/core";
import icClose from "@iconify/icons-ic/twotone-close";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ApiService } from "src/app/core/services/api.service";
import { ApiError } from "src/app/shared/models/api-error.model";
import { NotificationService } from "src/app/core/services/notification.service";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { AuthService } from "src/app/core/services/auth.service";
import { HuyXuatThuocTrongNgay } from "../quay-thuoc.model";


@Component({
	selector: "app-xac-nhan-phieu-huy-thu-ban-thuoc",
	templateUrl: "./xac-nhan-phieu-huy-thu-ban-thuoc.component.html",
	styleUrls: ["./xac-nhan-phieu-huy-thu-ban-thuoc.component.scss"],
})

export class XacNhanHuyThuBanThuocComponent implements OnInit {
	loadingPopup: any;
	documentType: DocumentType = DocumentType.QuayThuoc;
	huyXuatThuocTrongNgay = new HuyXuatThuocTrongNgay();

	validationErrors: any[];
	icClose = icClose;

	constructor(@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogRef: MatDialogRef<any>,
		private authService: AuthService, private dialog: MatDialog,
		private notificationService: NotificationService,
		private apiService: ApiService) { }

	ngOnInit() {
		this.huyXuatThuocTrongNgay = this.data.huyXuatThuocTrongNgay;
	}

	modelChangeThuHoiPhieu(e: any) {
		if (e) {
			let currentUser = this.authService.getAccessUser();
			this.apiService.get<any>("NhanVien/GetNhanVienProflie/" + currentUser.Id).subscribe((resultData) => {
				this.huyXuatThuocTrongNgay.NguoiThuHoiId = currentUser.Id;
				this.huyXuatThuocTrongNgay.TenNguoiThuHoi = resultData.HoTen;
				this.huyXuatThuocTrongNgay.ThoiGianThuHoi = new Date();
			});
		} else {
			this.huyXuatThuocTrongNgay.NguoiThuHoiId = null;
			this.huyXuatThuocTrongNgay.TenNguoiThuHoi = null;
			this.huyXuatThuocTrongNgay.ThoiGianThuHoi = null;
		}
	}

	xacNhanThongTinHuy() {
		this.showLoadingPopup();		
		this.apiService.post<any>(`QuayThuoc/HuyBanThuocTrongNgay`, this.huyXuatThuocTrongNgay).subscribe(
			(resultData) => {
				this.closeAllDialogs();
				this.dialogRef.close("Yes");
			},
			(err: ApiError) => {
				err.ValidationErrors === null || err.ValidationErrors.length == 0 ? 
				      this.notificationService.showError(err.Message)
					: (this.validationErrors = err.ValidationErrors);
				this.closeAllDialogs();
			}
		);
	}

	close() {
		this.dialog.closeAll();
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
}
