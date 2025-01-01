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
declare var jQuery: any;
@Component({
	selector: "thong-tin-phieu-thu-popup",
	templateUrl: "./thong-tin-phieu-thu-popup.component.html",
	styleUrls: ["./thong-tin-phieu-thu-popup.component.scss"],
})
export class ThongTinPhieuNgoaiTruPopupComponent implements OnInit {
	icClose = icClose;
	arrFilePdf: Array<any> = [];
	arrFileUrl: Array<any> = [];
	popupLoadingData: any;
	loadingPopup: any;

	icFullscreen = icFullscreen;
	icFullscreenExit = icFullscreenExit;
	isFullscreen: boolean = false;

	Width: number = 800;
	Height: number = 600;
	tamUng: boolean = false;

	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService, private dialog: MatDialog, private notificationService: NotificationService) { }

	ngOnInit() {
		this.getALlFilePDFFromHtml(this.data);		
		this.tamUng = this.data.tamUng != undefined ? true : false ;
		this.fullscreen();
	}

	getALlFilePDFFromHtml(data: any) {
		this.showPopupLoadingData();
		let hostingName = window.location.protocol + '//' + window.location.host;
		this.apiService.postExportPdf<any>("ThuNgan/InPhieuThu?taiKhoanThuId=" + data.taiKhoanThuId + "&taiKhoanChiId=" + data.taiKhoanChiId + "&yeuCauTiepNhanId=" + data.idYeuCauTiepNhan + "&hostingName=" + hostingName + "&loaiTypes=" + data.loaiTypes + "&phieuHoanUngIds=" + data.phieuHoanUngIds).subscribe(
			(file) => {
				let newBlob = new Blob([file], { type: "application/pdf" });
				let datalocalURL = window.URL.createObjectURL(newBlob);
				this.arrFileUrl.push(datalocalURL);
				this.arrFilePdf.push(file);
				this.closePopupLoadingData();
			},
			(err: ApiError) => {
				if (err.Message !== "Validation Failed") {
					this.notificationService.showError(err.Message);
					this.closePopupLoadingData();
				}
			}
		);
	}

	ketXuatBangKeChiPhiExcel() {
		this.apiService.postExportExcel<any>("ThuNgan/XuatBangKeNgoaiTruCoBHYTExcelDaThu?yeuCauTiepNhanId=" + this.data.idYeuCauTiepNhan)
			.subscribe(res => {
				this.showLoadingPopup();
				if (res.byteLength != 4) {
					let dateTimeNow = new Date();
					CommonService.downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeNgoaiTruCoBHYT" + dateTimeNow.getFullYear() + ".xlsx");
				}
				this.closeAllDialogs();
			}, err => {
				this.notificationService.showError(err.Message);
				this.closeAllDialogs();
			});

		this.apiService.postExportExcel<any>("ThuNgan/XuatBangKeNgoaiTruExcelDaThu?yeuCauTiepNhanId=" + this.data.idYeuCauTiepNhan)
			.subscribe(res => {
				this.showLoadingPopup();
				if (res.byteLength != 4) {
					let dateTimeNow = new Date();
					CommonService.downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeNgoaiTru" + dateTimeNow.getFullYear() + ".xlsx");
				}
				this.closeAllDialogs();
			}, err => {
				this.notificationService.showError(err.Message);
				this.closeAllDialogs();
			});

		this.apiService.postExportExcel<any>("ThuNgan/XuatBangKeNgoaiTruTrongGoiDvDaThu?yeuCauTiepNhanId=" + this.data.idYeuCauTiepNhan)
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

	downloadAllFile() {
		const dateTimeNow = new Date();
		this.arrFilePdf.forEach((file) => {
			CommonService.downLoadFile(file, "application/pdf", "PhieuThuNgan" + dateTimeNow.getFullYear() + ".pdf");
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
