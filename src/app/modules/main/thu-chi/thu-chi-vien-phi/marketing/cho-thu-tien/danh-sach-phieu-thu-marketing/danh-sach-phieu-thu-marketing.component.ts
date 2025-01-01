import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "src/app/core/utilities/common.helper";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { timKiemThongTinPhieuThu } from "../cho-thu-tien-goi-marketing.model";
import icSearch from "@iconify/icons-ic/twotone-search";
import { MatDialog } from "@angular/material";
import { NotificationService } from "src/app/core/services/notification.service";
import { ApiError } from "src/app/shared/models/api-error.model";
import { ThongTinHuyPhieu } from "src/app/modules/main/quay-thuoc/quay-thuoc.model";
import { XacNhanHuyThuComponent } from "../../../common/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiService } from "src/app/core/services/api.service";
import { ChiTietPhieuThuMarketingComponent } from "../chi-tiet-phieu-thu-marketing/chi-tiet-phieu-thu-marketing.component";
import { Location } from '@angular/common';
import { ThongTinPhieuPdfPopupComponent } from "../../../common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component";
@Component({
	selector: "app-danh-sach-phieu-thu-marketing",
	templateUrl: "./danh-sach-phieu-thu-marketing.component.html",
	styleUrls: ["./danh-sach-phieu-thu-marketing.component.scss"],
})

export class ThongTinPhieuThu implements OnInit {
	timKiemThongTinPhieuThu = new timKiemThongTinPhieuThu();
	benhNhanId: number = 0;
	searchCtrl = new FormControl();
	icSearch = icSearch;
	loadingPopup: any;
	queryString: any;
	gridColumns: any[] = [];
	dataSource: any = {
		data: [],
		total: 0
	}

	constructor(private route: ActivatedRoute, private dialog: MatDialog,
		private notificationService: NotificationService,private location: Location,
		private apiService: ApiService) { }

	@ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
	@ViewChild('soTienThuTemplate', { static: true }) soTienThuTemplate: TemplateRef<any>;
	@ViewChild('thuCuaGoiTemplate', { static: true }) thuCuaGoiTemplate: TemplateRef<any>;
	@ViewChild('tongSoTienThuGroupFooter', { static: true }) tongSoTienThuGroupFooter: TemplateRef<any>;
	@ViewChild('nguoithuGroupFooter', { static: true }) nguoithuGroupFooter: TemplateRef<any>;
	@ViewChild('giaGoiTemplate', { static: true }) giaGoiTemplate: TemplateRef<any>;
	@ViewChild('daThuTemplate', { static: true }) daThuTemplate: TemplateRef<any>;
	@ViewChild('chuaThuTemplate', { static: true }) chuaThuTemplate: TemplateRef<any>;
	@ViewChild("gridList", { static: false }) gridList: GridComponent;

	@ViewChild('loaiPhieuTemplate', { static: true }) loaiPhieuTemplate: TemplateRef<any>;
	@ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;

	ngOnInit() {
		this.benhNhanId = this.route.snapshot.params.id;
		let dateNow = new Date();
		this.timKiemThongTinPhieuThu.BenhNhanId = this.benhNhanId;

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
			{ Field: "SoPhieuThu", Title: "Số phiếu thu", Width: 50, Sortable: true },

			{ Field: "", Title: "Loại Phiếu", Width: 50, Sortable: true, Template: this.loaiPhieuTemplate },
			{ Field: "", Title: "Trạng thái", Width: 50, Sortable: true, Template: this.tinhTrangTemplate },

			{ Field: "ThuCuaGoi", Title: "Thu của gói", Width: 100, Sortable: true, Template: this.thuCuaGoiTemplate },
			{ Field: "NgayThuDisplay", Title: "Ngày thu", Width: 70, Sortable: true },
			{ Field: "NguoiThu", Title: "Người thu", Width: 50, Sortable: true, TemplateFooter: this.nguoithuGroupFooter },		

			{ Field: "SoTienThu", Title: "Số tiền", Width: 50, Sortable: true, Template: this.soTienThuTemplate, TemplateFooter: this.tongSoTienThuGroupFooter },
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

	thoiDiemTNChange() {
		this.TimkiemNangCao();
	}

	onKey(event: any) {
		if (event.key == "Enter") {
			this.TimkiemNangCao();
		}
	}

	chonGoiDichDichVuChange(event: any) {
		if (event) {
			this.timKiemThongTinPhieuThu.GoiDichDichVuId = event.KeyId;
		}
		else {
			this.timKiemThongTinPhieuThu.GoiDichDichVuId = null;
		}
		this.TimkiemNangCao();
	}

	TimkiemNangCao() {
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

		this.timKiemThongTinPhieuThu.BenhNhanId = this.benhNhanId;
		var queryString = JSON.stringify(this.timKiemThongTinPhieuThu);
		if (this.gridList != undefined) {
			this.gridList._additionalSearchString = queryString;
			this.gridList.search();
		}
	}

	HuyThu(dataItem: any, thuHoi: string) {
		let thuHoiPhieu = thuHoi === 'ThuHoi' ? !dataItem.ThuHoiPhieu : dataItem.ThuHoiPhieu;
		let loaiType = "Marketing";
		let thongTinHuyPhieu = new ThongTinHuyPhieu();
		thongTinHuyPhieu.SoPhieu = dataItem.Id;
		thongTinHuyPhieu.TenPhieuThuChi = dataItem.LoaiPhieu;
		thongTinHuyPhieu.TenSoPhieu = dataItem.TenSoPhieu;
		thongTinHuyPhieu.LoaiPhieuThuChiThuNgan = dataItem.LoaiPhieuThuChiThuNgan;
		
		this.dialog
			.open(XacNhanHuyThuComponent, { disableClose: true, width: "800px", data: { thongTinHuyPhieu, thuHoiPhieu, loaiType } })
			.afterClosed()
			.subscribe((res) => {
				if (res != undefined && res != null && res != "") {
					this.gridList.search();
					this.notificationService.showSuccess("Hủy phiếu thu thành công.");
				}
			},
				(err: ApiError) => {
					if (err.Message != "Validation Failed") {
						this.notificationService.showError(err.Message);
					}
				});
	}

	xemThongTinPhieuThu(dataItem: any) {
		this.dialog
			.open(ChiTietPhieuThuMarketingComponent, {
				disableClose: true, width: "800px",
				data: { thongTinPhieuThu: dataItem }
			})
			.afterClosed()
			.subscribe((res) => {
				if (res != undefined && res != null && res != "") {
				}
			},
				(err: ApiError) => {
					if (err.Message != "Validation Failed") {
						this.notificationService.showError(err.Message);
					}
				});
	}

	InPhieu(dataItem: any) {
		this.inPhieuPdf(dataItem.Id);
	}

	InPhieuThuMarketing(dataItem: any){
		this.inPhieuThuMarketingPdf(dataItem.Id);
	}

	InPhieuHoanUng(dataItem: any){
		this.inHoanUngPhieuPdf(dataItem.Id);
	}

	inHoanUngPhieuPdf(taiKhoanChiId: any) {
		this.showLoadingPopup();
		let hostingName = window.location.protocol + '//' + window.location.host;
		this.apiService.post<Array<string>>("ThuNganMarketing/GetHtmlPhieuThuHoanUngMarketing?taiKhoanChiId=" + taiKhoanChiId + "&hostingName=" + hostingName).subscribe(
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

	inPhieuThuMarketingPdf(taiKhoanChiId: any) {
		this.showLoadingPopup();
		let hostingName = window.location.protocol + '//' + window.location.host;
		this.apiService.post<Array<string>>
		("ThuNganMarketing/GetHtmlPhieuThuMarketing?taiKhoanChiId=" + taiKhoanChiId + "&hostingName=" + hostingName).subscribe(
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

	BackToList() {
		this.location.back();
	}
}
