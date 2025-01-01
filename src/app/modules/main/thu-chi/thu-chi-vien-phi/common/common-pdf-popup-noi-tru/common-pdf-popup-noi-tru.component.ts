import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import icClose from "@iconify/icons-ic/twotone-close";
import { debug } from "console";
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { CommonService } from "src/app/core/utilities/common.helper";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiError } from "src/app/shared/models/api-error.model";
import icFullscreen from "@iconify/icons-ic/twotone-fullscreen";
import icFullscreenExit from "@iconify/icons-ic/twotone-fullscreen-exit";
import { LoaiBangKeChiPhi } from "../../ngoai-tru/cho-thu-tien/cho-thu-tien.model";
declare var jQuery: any;

@Component({
	selector: "common-pdf-popup-noi-tru",
	templateUrl: "./common-pdf-popup-noi-tru.component.html",
	styleUrls: ["./common-pdf-popup-noi-tru.component.scss"],
})

export class CommonPdfPopupNoiTruComponent implements OnInit {
	icClose = icClose;
	arrFilePdf: Array<any> = [];
	arrFileUrl: Array<any> = [];
	popupLoadingData: any;

	icFullscreen = icFullscreen;
	icFullscreenExit = icFullscreenExit;
	isFullscreen: boolean = false;
	yeuCauTiepNhanId: any;
	loaiBangKeChiPhi: any;

	loadingPopup: any;
	Width: number = 800;
	Height: number = 600;

	danhSachChiPhiThuTamUng: any;

	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService, private dialog: MatDialog, private notificationService: NotificationService) { }

	ngOnInit() {
		this.yeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
		this.loaiBangKeChiPhi = this.data.loaiBangKeChiPhi;
		this.danhSachChiPhiThuTamUng = this.data.danhSachChiPhiThuTamUng;

		this.getALlFilePDFFromHtml(this.data);
		this.fullscreen();
	}

	getALlFilePDFFromHtml(data: any) {
		this.arrFileUrl = data.arrFileUrl;
		this.arrFilePdf = data.arrFilePdf;
	}

	downloadAllFile() {
		const dateTimeNow = new Date();
		this.arrFilePdf.forEach((file) => {
			CommonService.downLoadFile(file, "application/pdf", "PhieuTongHop" + dateTimeNow.getFullYear() + ".pdf");
		});
	}

	showPopupLoadingData() {
		if (this.popupLoadingData == undefined || this.popupLoadingData == null || this.popupLoadingData.openDialogs == undefined || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
			this.popupLoadingData = this.dialog.open(LoadingComponent, {
				disableClose: true,
				width: "200px",
				height: "90px",
				data: { Title: "Đang tải dữ liệu..." },
			});
		}
	}

	closePopupLoadingData() {
		if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
			this.popupLoadingData.close();
		}
	}

	fullscreen() {
		this.fullScreenDialog(this.isFullscreen, this.Height, this.Width, 200);
		this.isFullscreen = !this.isFullscreen;
	}

	public fullScreenDialog(isFullscreen: boolean, Height: any, Width: any, heightHeaderFooter: number) {
		if (isFullscreen) {
			jQuery(".cdk-overlay-pane").css({ "height": (Height != null ? Height : "auto"), "width": Width, "max-width": Width });
			jQuery(".mat-dialog-content").css({ "height": Height - (heightHeaderFooter != null ? heightHeaderFooter : 0), "max-height": Height - (heightHeaderFooter != null ? heightHeaderFooter : 0) });
		}
		else {
			jQuery(".cdk-overlay-pane").css({ "height": "97%", "width": "100%", "max-width": "97%" });
			jQuery(".mat-dialog-content").css({ "height": (jQuery(window).height() - (heightHeaderFooter != null ? heightHeaderFooter : 150)), "max-height": jQuery(window).height() - (heightHeaderFooter != null ? heightHeaderFooter : 150) });
		}
	}


	ketXuatBangKeChiPhiExcel() {
		switch (this.loaiBangKeChiPhi) {
			case LoaiBangKeChiPhi.XemTruocBangKe:
				this.xemTruocBangKe();
				break;
			case LoaiBangKeChiPhi.BangKeChoThu:
				this.xemBangKeChoThu();
				break;
			case LoaiBangKeChiPhi.BangKeDaThu:
				this.xemBangKeDaThu();
				break;
			default:
				break;
		}
	}

	xemBangKeChoThu() {
		this.showLoadingPopup();
		this.apiService.postExportExcel<any>("ThuNganNoiTru/XuatBangKeNoiTruChoThuExcel", this.danhSachChiPhiThuTamUng)
			.subscribe(res => {
				res.yeuCauTiepNhanId
				this.showLoadingPopup();
				if (res.byteLength != 4) {
					let dateTimeNow = new Date();
					CommonService.downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeNoiTruChoThu" + dateTimeNow.getFullYear() + ".xlsx");
				}
				this.closeAllDialogs();
			}, err => {
				this.notificationService.showError(err.Message);
				this.closeAllDialogs();
			});

		this.apiService.postExportExcel<any>("ThuNganNoiTru/XuatBangKeNoiTruTrongGoiChoThuExcel", this.danhSachChiPhiThuTamUng)
			.subscribe(res => {
				this.showLoadingPopup();
				if (res.byteLength != 4) {
					let dateTimeNow = new Date();
					CommonService.downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeNoiTruTrongGoiChoThu" + dateTimeNow.getFullYear() + ".xlsx");
				}
				this.closeAllDialogs();
			}, err => {
				this.notificationService.showError(err.Message);
				this.closeAllDialogs();
			});
	}

	xemTruocBangKe() {
		this.showLoadingPopup();
		this.apiService.postExportExcel<any>("ThuNganNoiTru/XuatBangKeNoiTruCoBHYTExcel?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId)
			.subscribe(res => {
				this.showLoadingPopup();
				if (res.byteLength != 4) {
					let dateTimeNow = new Date();
					CommonService.downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeCoBHYTChuaQuyetToan" + dateTimeNow.getFullYear() + ".xlsx");
				}
				this.closeAllDialogs();
			}, err => {
				this.notificationService.showError(err.Message);
				this.closeAllDialogs();
			});

		this.apiService.postExportExcel<any>("ThuNganNoiTru/XuatBangKeNoiTruExcel?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId)
			.subscribe(res => {
				this.showLoadingPopup();
				if (res.byteLength != 4) {
					let dateTimeNow = new Date();
					CommonService.downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeChuaQuyetToan" + dateTimeNow.getFullYear() + ".xlsx");
				}
				this.closeAllDialogs();
			}, err => {
				this.notificationService.showError(err.Message);
				this.closeAllDialogs();
			});

		this.apiService.postExportExcel<any>("ThuNganNoiTru/XuatBangKeChuaQuyetToanTrongGoiDvExcel?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId)
			.subscribe(res => {
				this.showLoadingPopup();
				if (res.byteLength != 4) {
					let dateTimeNow = new Date();
					CommonService.downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeNgoaiTruTrongGoiDv" + dateTimeNow.getFullYear() + ".xlsx");
				}
				this.closeAllDialogs();
			}, err => {
				this.notificationService.showError(err.Message);
				this.closeAllDialogs();
			});
	}

	xemBangKeDaThu() {
		this.showLoadingPopup();
		this.apiService.postExportExcel<any>("ThuNganNoiTru/XuatBangKeNoiTruCoBHYTExcelDaThu?taiKhoanThuId=" + this.data.taiKhoanThuId)
			.subscribe(res => {
				this.showLoadingPopup();
				if (res.byteLength != 4) {
					let dateTimeNow = new Date();
					CommonService.downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeNoiTruCoBHYT" + dateTimeNow.getFullYear() + ".xlsx");
				}
				this.closeAllDialogs();
			}, err => {
				this.notificationService.showError(err.Message);
				this.closeAllDialogs();
			});

		this.apiService.postExportExcel<any>("ThuNganNoiTru/XuatBangKeNoiTruExcelDaThu?taiKhoanThuId=" + this.data.taiKhoanThuId)
			.subscribe(res => {
				this.showLoadingPopup();
				if (res.byteLength != 4) {
					let dateTimeNow = new Date();
					CommonService.downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeNoiTru" + dateTimeNow.getFullYear() + ".xlsx");
				}
				this.closeAllDialogs();
			}, err => {
				this.notificationService.showError(err.Message);
				this.closeAllDialogs();
			});

		this.apiService.postExportExcel<any>("ThuNganNoiTru/XuatBangKeNoiTruTrongGoiDvDaThu?taiKhoanThuId=" + this.data.taiKhoanThuId)
			.subscribe(res => {
				this.showLoadingPopup();
				if (res.byteLength != 4) {
					let dateTimeNow = new Date();
					CommonService.downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeNgoaiTruTrongGoiDv" + dateTimeNow.getFullYear() + ".xlsx");
				}
				this.closeAllDialogs();
			}, err => {
				this.notificationService.showError(err.Message);
				this.closeAllDialogs();
			});
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
}
