import {Component, OnInit, Inject} from "@angular/core";
import icClose from "@iconify/icons-ic/twotone-close";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {ApiService} from "src/app/core/services/api.service";
import {ApiError} from "src/app/shared/models/api-error.model";
import {NotificationService} from "src/app/core/services/notification.service";
import {LoadingComponent} from "src/app/shared/component/dialogs/loading/loading.component";
import {SecurityOperation} from "src/app/shared/enum/security-operation.enum";
import {DocumentType} from "src/app/shared/enum/document-type.enum";
import {AuthService} from "src/app/core/services/auth.service";
import {SystemMessage} from "src/app/shared/configdata/system-message";
import { ThongTinHuyPhieu } from "../quay-thuoc.model";


@Component({
	selector: "app-xac-nhan-phieu-huy-thu",
	templateUrl: "./xac-nhan-phieu-huy-thu.component.html",
	styleUrls: ["./xac-nhan-phieu-huy-thu.component.scss"],
})
export class XacNhanHuyThuComponent implements OnInit {
	documentType: DocumentType = DocumentType.QuayThuoc;
	thongTinHuyPhieu = new ThongTinHuyPhieu();
	loaiType : any;

	validationErrors: any[];
	icClose = icClose;
	thuHoiPhieu: boolean = false;
	constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<any>, private authService: AuthService, private dialog: MatDialog, private notificationService: NotificationService, private apiService: ApiService) {}

	ngOnInit() {
		this.thongTinHuyPhieu = this.data.thongTinHuyPhieu;
		this.thuHoiPhieu = this.data.thuHoiPhieu;
		this.loaiType = this.data.loaiType;

		this.thongTinHuyPhieu.ThuHoiPhieu = false;
		if (this.thuHoiPhieu) {
			let currentUser = this.authService.getAccessUser();
			this.apiService.get<any>("NhanVien/GetNhanVienProflie/" + currentUser.Id).subscribe((resultData) => {
				this.thongTinHuyPhieu.NguoiThuHoiId = currentUser.Id;
				this.thongTinHuyPhieu.TenNguoiThuHoi = resultData.HoTen;
				this.thongTinHuyPhieu.ThoiGianThuHoi = new Date();
			});
		}
	}

	close() {
		this.dialog.closeAll();
	}

	modelChangeThuHoiPhieu(e: any) {
		if (e) {
			let currentUser = this.authService.getAccessUser();
			this.apiService.get<any>("NhanVien/GetNhanVienProflie/" + currentUser.Id).subscribe((resultData) => {
				this.thongTinHuyPhieu.NguoiThuHoiId = currentUser.Id;
				this.thongTinHuyPhieu.TenNguoiThuHoi = resultData.HoTen;
				this.thongTinHuyPhieu.ThoiGianThuHoi = new Date();
			});
		} else {
			this.thongTinHuyPhieu.NguoiThuHoiId = null;
			this.thongTinHuyPhieu.TenNguoiThuHoi = null;
			this.thongTinHuyPhieu.ThoiGianThuHoi = null;
		}
	}

	xacNhanThongTinHuy() {
		var loading = this.dialog.open(LoadingComponent, {
			disableClose: true,
			width: "200px",
			height: "90px",
			data: {},
		});
		if (this.loaiType) {
			if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
				if (this.thuHoiPhieu) {
					this.apiService.post<any>("QuayThuoc/CapnhatNguoiThuHoiPhieuThuThuoc", this.thongTinHuyPhieu).subscribe(
						(resultData) => {
							this.dialog.closeAll();
							this.dialogRef.close("Yes");
						},
						(err: ApiError) => {
							err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : (this.validationErrors = err.ValidationErrors);
							loading.close();
						}
					);
				} else {
					this.apiService.post<any>("QuayThuoc/HuyPhieuThuThuoc", this.thongTinHuyPhieu).subscribe(
						(resultData) => {
							this.dialog.closeAll();
							this.dialogRef.close("Yes");
						},
						(err: ApiError) => {
							err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : (this.validationErrors = err.ValidationErrors);
							loading.close();
						}
					);
				}
			} else {
				this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
			}
		} else {
			if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
				if (this.thuHoiPhieu) {
					this.apiService.post<any>("QuayThuoc/CapnhatNguoiThuHoiPhieuThuThuoc", this.thongTinHuyPhieu).subscribe(
						(resultData) => {
							this.dialog.closeAll();
							this.dialogRef.close("Yes");
						},
						(err: ApiError) => {
							err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : (this.validationErrors = err.ValidationErrors);
							loading.close();
						}
					);
				} else {
					this.apiService.post<any>("QuayThuoc/HuyThanhToan", this.thongTinHuyPhieu).subscribe(
						(resultData) => {
							this.dialog.closeAll();
							this.dialogRef.close("Yes");
						},
						(err: ApiError) => {
							err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : (this.validationErrors = err.ValidationErrors);
							loading.close();
						}
					);
				}
			} else {
				this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
			}
		}
	}
}
