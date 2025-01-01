import { Component, Inject, OnInit, Optional, TemplateRef, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "src/app/core/utilities/common.helper";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { timKiemThongTinPhieuThu } from "../cho-thu-tien-goi-marketing.model";
import icSearch from "@iconify/icons-ic/twotone-search";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { NotificationService } from "src/app/core/services/notification.service";
import { ApiError } from "src/app/shared/models/api-error.model";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiService } from "src/app/core/services/api.service";
import { ThongTinPhieuPdfPopupComponent } from "../../../common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component";
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
	selector: "app-xem-phieu-thu-marketing",
	templateUrl: "./xem-phieu-thu-marketing.component.html",
	styleUrls: ["./xem-phieu-thu-marketing.component.scss"],
})
export class XemPhieuThuMarketing implements OnInit {
	timKiemThongTinPhieuThu = new timKiemThongTinPhieuThu();
	benhNhanId: number = 0;
	searchCtrl = new FormControl();
	icSearch = icSearch;
	loadingPopup: any;
	queryString: any;
	gridColumns: any[] = [];
	icClose = icClose;
	dataSource: any = {
		data: [],
		total: 0
	}

	constructor(private route: ActivatedRoute, private dialog: MatDialog,
		private notificationService: NotificationService,
		private dialogRef: MatDialogRef<any>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: any,
		private apiService: ApiService) {
		this.timKiemThongTinPhieuThu.BenhNhanId = data.benhNhanId;
		this.timKiemThongTinPhieuThu.GoiDichDichVuId = data.yeuCauGoiDichVuId;
	}

	@ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
	@ViewChild('soTienThuTemplate', { static: true }) soTienThuTemplate: TemplateRef<any>;
	@ViewChild('thuCuaGoiTemplate', { static: true }) thuCuaGoiTemplate: TemplateRef<any>;
	@ViewChild('tongSoTienThuGroupFooter', { static: true }) tongSoTienThuGroupFooter: TemplateRef<any>;
	@ViewChild('nguoithuGroupFooter', { static: true }) nguoithuGroupFooter: TemplateRef<any>;
	@ViewChild('giaGoiTemplate', { static: true }) giaGoiTemplate: TemplateRef<any>;
	@ViewChild('daThuTemplate', { static: true }) daThuTemplate: TemplateRef<any>;
	@ViewChild('chuaThuTemplate', { static: true }) chuaThuTemplate: TemplateRef<any>;
	@ViewChild("gridList", { static: false }) gridList: GridComponent;

	ngOnInit() {
		this.benhNhanId = this.route.snapshot.params.id;
		let dateNow = new Date();

		this.timKiemThongTinPhieuThu.ThoiDiemTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
		this.timKiemThongTinPhieuThu.ThoiDiemDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);

		if (this.timKiemThongTinPhieuThu.ThoiDiemTuFormat != null) {
			this.timKiemThongTinPhieuThu.FromDate = CommonService.formatDateTime(this.timKiemThongTinPhieuThu.ThoiDiemTuFormat, "dd/mm/yyyy");
		} else {
			this.timKiemThongTinPhieuThu.FromDate = null;
		}

		if (this.timKiemThongTinPhieuThu.ThoiDiemDenFormat != null) {
			this.timKiemThongTinPhieuThu.ToDate = CommonService.formatDateTime(this.timKiemThongTinPhieuThu.ThoiDiemDenFormat, "dd/mm/yyyy");
		} else {
			this.timKiemThongTinPhieuThu.ToDate = null;
		}

		this.queryString = JSON.stringify(this.timKiemThongTinPhieuThu);

		this.gridColumns = [
			{ Field: "SoPhieuThu", Title: "Số phiếu thu", Width: 140, Sortable: true },
			{ Field: "ThuCuaGoi", Title: "Thu của gói", Width: 100, Sortable: true, Template: this.thuCuaGoiTemplate },
			{ Field: "NgayThuDisplay", Title: "Ngày thu", Width: 70, Sortable: true },
			{ Field: "NguoiThu", Title: "Người thu", Width: 80, Sortable: true, TemplateFooter: this.nguoithuGroupFooter },
			{ Field: "SoTienThu", Title: "Số tiền thu", Width: 150, Sortable: true, Template: this.soTienThuTemplate, TemplateFooter: this.tongSoTienThuGroupFooter },
			{ Field: "", Title: "", Width: 80, Sortable: true, Template: this.actionTemplate },
		];
	}

	onDataBound(event: any) {
		if (event != undefined && event != null) {
			this.dataSource.data = event.Data;
		}
	}

	public totalSoTienThu(field: any) {
		switch (field) {
			case 'totalSoTienThu':
				return this.dataSource.data.reduce((sum, item) => sum + item.SoTienThu, 0);
		}
	}

	huy() {
		this.dialogRef.close(null);
	}

	InPhieu(dataItem: any) {
		this.inPhieuPdf(dataItem.Id);
	}

	inPhieuPdf(taiKhoanThuId: any) {
		this.showLoadingPopup();
		let hostingName = window.location.protocol + '//' + window.location.host;
		this.apiService.post<Array<string>>("ThuNganMarketing/GetHtmlPhieuThuTamUngMarketing?taiKhoanThuId=" + taiKhoanThuId + "&hostingName=" + hostingName).subscribe(
			(arrHtml) => {
				if (arrHtml.length > 0) {
					this.dialog
						.open(ThongTinPhieuPdfPopupComponent, {
							disableClose: false,
							width: "1000px",
							data: arrHtml,
						})
						.afterClosed()
						.subscribe(() => {
							this.closeAllDialogs();
						});
				}
				else {
					this.closeAllDialogs();
					this.notificationService.showError("Chưa có thông tin dịch vụ.");
				}
			},
			(err: ApiError) => {
				if (err.Message !== "Validation Failed") {
					this.notificationService.showError(err.Message);
					this.closeAllDialogs();
				}
			}
		);
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
