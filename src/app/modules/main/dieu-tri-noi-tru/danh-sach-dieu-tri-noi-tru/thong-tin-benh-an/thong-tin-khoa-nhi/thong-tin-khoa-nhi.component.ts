import { Component, Input, OnInit, TemplateRef, ViewChild } from "@angular/core";
import icAddCircle from "@iconify/icons-ic/add-circle";
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { Common, ThongTinBenhAnKhoaNhi, ThongTinChuanDoanKemTheo } from "../thong-tin-benh-an.model";
import icDelete from "@iconify/icons-ic/twotone-delete";
import { MatDialog } from "@angular/material";
import { GridComponent } from "@progress/kendo-angular-grid";
import { Router } from "@angular/router";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { AuthService } from "src/app/core/services/auth.service";
import { CommonService } from "src/app/core/utilities/common.helper";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { ChiTietDieuTriNoiTruViewModel } from "../../../dieu-tri-noi-tru.model";
import { ApiError } from "src/app/shared/models/api-error.model";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { PhieuKhamBenhNoiTruPopupComponent } from "../phieu-kham-benh-noi-tru-popup/phieu-kham-benh-noi-tru-popup.component";
import icAdd from '@iconify/icons-ic/twotone-add';
import { NoiDungMauLoiDanBacSiPopupComponent } from "../noi-dung-mau-loi-dan-bac-si-popup/noi-dung-mau-loi-dan-bac-si-popup.component";
@Component({
	selector: "app-thong-tin-khoa-nhi",
	templateUrl: "./thong-tin-khoa-nhi.component.html",
	styleUrls: ["./thong-tin-khoa-nhi.component.scss"],
})
export class ThongTinBenhAnKhoaNhiComponent implements OnInit {
	@Input() yeuCauTiepNhanId: any = null;
	@Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
	@Input() LoaiBenhAn: any = null;

	icAdd = icAdd;
	common = new Common();
	icDelete = icDelete;
	format: string = "n1";
	current: Date = new Date();
	gridColumnLienQuanBenhs: any = [];
	gridChanDoanKemTheoColumns: any[] = [];
	gridChanDoanPhanBietColumns: any[] = [];
	gridColumnChiSoSinhTons: any[] = [];
	validationErrors: any[] = [];

	dataSourceICDsPhuKhac: any = {
		data: [],
		total: 0,
	};

	dataSourceChuanDoanPhanBiets: any = {
		data: [],
		total: 0,
	};

	dataSourceChiSoSinhTons: any = {
		data: [],
		total: 0,
	};

	public sampleData: any[] = [];
	icAddCircle = icAddCircle;
	documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
	thongTinBenhAnKhoaNhi = new ThongTinBenhAnKhoaNhi();

	urlGetDataGridTienSuBenhLienAsync = "DieuTriNoiTru/GetTienSuBenhLienQuanForGrid";
	urlGetTotalPageGridTienSuBenhLienAsync = "DieuTriNoiTru/GetTotalPagesTienSuBenhLienQuanForGrid";

	urlGetDataGridChiSoSinhTonAsync = "DieuTriNoiTru/GetChiSoSinhTonForGrid";
	urlGetTotalPageGridChiSoSinhTonAsync = "DieuTriNoiTru/GetTotalPagesChiSoSinhTonForGrid";

	urlGetDataGridChuanDoanKemTheoAsync = "DieuTriNoiTru/GetChuanDoanKemTheoForGrid";
	urlGetTotalPageGridChuanDoanKemTheoAsync = "DieuTriNoiTru/GetTotalPagesChuanDoanKemTheoForGrid";

	urlGetDataGridChuanDoanPhanBietTheoAsync = "DieuTriNoiTru/GetChuanDoanPhanBietForGrid";
	urlGetTotalPageGridChuanDoanPhanBietTheoAsync = "DieuTriNoiTru/GetTotalPagesChuanDoanPhanBietForGrid";

	@ViewChild("thoiGianTemplate", { static: true }) thoiGianTemplate: TemplateRef<any>;
	@ViewChild("icdTemplate", { static: true }) icdTemplate: TemplateRef<any>;
	@ViewChild("chanDoanTemplate", { static: true }) chanDoanTemplate: TemplateRef<any>;
	@ViewChild("actionTemplate", { static: true }) actionTemplate: TemplateRef<any>;

	@ViewChild("actionSinhHieuTemplate", { static: true }) actionSinhHieuTemplate: TemplateRef<any>;
	@ViewChild("huyetApTemplate", { static: true }) huyetApTemplate: TemplateRef<any>;
	@ViewChild("thanNhietTemplate", { static: true }) thanNhietTemplate: TemplateRef<any>;
	@ViewChild("nhipTimTemplate", { static: true }) nhipTimTemplate: TemplateRef<any>;
	@ViewChild("nhipThoTemplate", { static: true }) nhipThoTemplate: TemplateRef<any>;
	@ViewChild("canNangTemplate", { static: true }) canNangTemplate: TemplateRef<any>;
	@ViewChild("chieuCaoTemplate", { static: true }) chieuCaoTemplate: TemplateRef<any>;
	@ViewChild("BMITemplate", { static: true }) BMITemplate: TemplateRef<any>;
	@ViewChild("glassgowTemplate", { static: true }) glassgowTemplate: TemplateRef<any>;
	@ViewChild("spO2Template", { static: true }) spO2Template: TemplateRef<any>;

	@ViewChild("teniCDsPhuKhacTemplate", { static: true }) teniCDsPhuKhacTemplate: TemplateRef<any>;
	@ViewChild("ghiChuICDsPhuKhacTemplate", { static: true }) ghiChuICDsPhuKhacTemplate: TemplateRef<any>;
	@ViewChild("actionICDsPhuKhacTemplate", { static: true }) actionICDsPhuKhacTemplate: TemplateRef<any>;
	@ViewChild("iCDKhacs", { static: true }) gridICDsPhuKhac: GridComponent;
	@ViewChild("ghiChuTemplateEdit", { static: true }) ghiChuTemplateEdit: TemplateRef<any>;
	@ViewChild("actionICDsPhanBietTemplate", { static: true }) actionICDsPhanBietTemplate: TemplateRef<any>;
	@ViewChild("teniCDsPhanBietTemplate", { static: true }) teniCDsPhanBietTemplate: TemplateRef<any>;

	constructor(
		private authService: AuthService,
		private apiService: ApiService,
		private notificationService: NotificationService,
		private dialog: MatDialog,
		private router: Router
	) { }

	TinhTrangSauSinhSelectItems = [
		{ Value: 1, Text: "Đẻ thường" },
		{ Value: 2, Text: "Forceps" },
		{ Value: 3, Text: "Giác hút" },
		{ Value: 4, Text: "Đẻ phẩu thuật" },
		{ Value: 5, Text: "Đẻ chỉ huy" },
		{ Value: 6, Text: "Khác" },
	];

	NuoiDuongSelectItems = [
		{ Value: 1, Text: "Sữa mẹ" },
		{ Value: 2, Text: "Nuôi nhân tạo" },
		{ Value: 3, Text: "Hổn hợp" },
	];

	ChamSocSelectItems = [
		{ Value: 1, Text: "Tại vườn trẻ" },
		{ Value: 2, Text: "Tại nhà" },
	];

	ngOnInit() {
		this.dieuTriNoiTruModel = this.dieuTriNoiTruModel != null ? this.dieuTriNoiTruModel : new ChiTietDieuTriNoiTruViewModel();
		this.thongTinBenhAnKhoaNhi = {} as ThongTinBenhAnKhoaNhi;
		this.gridColumnLienQuanBenhs = [
			{ Field: "KyHieu", Title: "Ký hiệu", Width: 100, Sortable: true },
			{ Field: "ThoiGian", Title: "Thời gian(tính theo tháng)", Width: 150, Sortable: true, Template: this.thoiGianTemplate },
		];

		this.gridChanDoanKemTheoColumns = [
			{ Field: "TenICD", Title: "ICD", Width: 120, Template: this.teniCDsPhuKhacTemplate },
			{ Field: "ChuanDoan", Title: "Chẩn đoán", Width: 100, Template: this.ghiChuICDsPhuKhacTemplate, TemplateEdit: this.ghiChuTemplateEdit },
			{ Field: "Action", Title: "", Width: 50, Template: this.actionICDsPhuKhacTemplate },
		];

		this.gridChanDoanPhanBietColumns = [
			{ Field: "TenICD", Title: "ICD", Width: 120, Template: this.teniCDsPhanBietTemplate },
			{ Field: "ChuanDoan", Title: "Chẩn đoán", Width: 100, Template: this.ghiChuICDsPhuKhacTemplate, TemplateEdit: this.ghiChuTemplateEdit },
			{ Field: "Action", Title: "", Width: 50, Template: this.actionICDsPhanBietTemplate },
		];

		this.getThongTinBenhAnNoiKhoaNhi(this.yeuCauTiepNhanId);
	}

	themChanDoanKemTheo() {
		this.dataSourceICDsPhuKhac.data.push(new ThongTinChuanDoanKemTheo());
	}

	themChanDoanPhanBiet() {
		this.dataSourceChuanDoanPhanBiets.data.push(new ThongTinChuanDoanKemTheo());
	}

	HuyBenhAn() {
		this.getThongTinBenhAnNoiKhoaNhi(this.yeuCauTiepNhanId);
	}

	onDataBoundChuanDoanKemTheo(dataChuanDoanKemTheo: any) {
		if (dataChuanDoanKemTheo && dataChuanDoanKemTheo.Data.length > 0) {
			this.thongTinBenhAnKhoaNhi.ChuanDoanKemTheos = dataChuanDoanKemTheo.Data;
			this.dataSourceChuanDoanPhanBiets.data = [];
			this.dataSourceICDsPhuKhac.data = [];
		}
	}

	luuBenhAn() {
		this.thongTinBenhAnKhoaNhi.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
		this.thongTinBenhAnKhoaNhi.ChiSoSinhTons = this.dataSourceChiSoSinhTons.data;
		this.thongTinBenhAnKhoaNhi.ChuanDoanKemTheos = this.dataSourceICDsPhuKhac.data;
		this.thongTinBenhAnKhoaNhi.ChuanDoanPhanBiets = this.dataSourceChuanDoanPhanBiets.data;
		this.apiService.post<any>("DieuTriNoiTru/LuuHoacCapNhatThongTinBenhAnNhiKhoa", this.thongTinBenhAnKhoaNhi).subscribe(
			() => {
				this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
			},
			(err: ApiError) => {
				err.ValidationErrors === null || err.ValidationErrors.length == 0
					? this.notificationService.showError(err.Message)
					: (this.validationErrors = err.ValidationErrors);
			}
		);
	}

	luuBenhAnVaInPhieu() {
		var self = this;
		self.thongTinBenhAnKhoaNhi.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
		self.thongTinBenhAnKhoaNhi.ChiSoSinhTons = self.dataSourceChiSoSinhTons.data;
		self.thongTinBenhAnKhoaNhi.ChuanDoanKemTheos = self.dataSourceICDsPhuKhac.data;
		self.thongTinBenhAnKhoaNhi.ChuanDoanPhanBiets = self.dataSourceChuanDoanPhanBiets.data;
		self.apiService.post<any>("DieuTriNoiTru/LuuHoacCapNhatThongTinBenhAnNhiKhoa", self.thongTinBenhAnKhoaNhi).subscribe(() => {
			var showDialog = self.dialog.open(LoadingComponent, {
				disableClose: true,
				width: "200px",
				height: "90px",
				data: { Title: "Đang tải dữ liệu..." },
			});
			self.apiService.post<any>("DieuTriNoiTru/InPhieuKhamBenhNoiTru?noiTruBenhAnId=" + self.dieuTriNoiTruModel.Id).subscribe(
				(resData) => {
					if (resData != undefined && resData != null) {
						showDialog.close();
						self.dialog
							.open(PhieuKhamBenhNoiTruPopupComponent, {
								disableClose: false,
								width: "1200px",
								data: { Title: "PHIẾU KHÁM BỆNH", Data: resData },
							})
							.afterClosed()
							.subscribe(() => {
								showDialog.close();
							});
					}
				},
				(err: ApiError) => {
					self.validationErrors = err.ValidationErrors;
					if (err.Message != "Validation Failed") {
						self.notificationService.showError(err.Message);
					}
					showDialog.close();
				}
			);
		});
	}

	validationICDPhuErrors: any[] = [];
	validationICDPhanBietErrors: any[] = [];
	LuuThongTinBenhAnKhoaNhi(inPhieu: any) {
		for (let i = 0; i < this.dataSourceICDsPhuKhac.data.length; i++) {
			if (this.dataSourceICDsPhuKhac.data[i].ICD === null) {
				this.validationICDPhuErrors = [];
				this.validationICDPhuErrors.push({ Message: "ICD yêu cầu nhập", Field: "thongTinBenhAnKhoaNhi.ChuanDoanKemTheos[" + i + "].ICD" });
				return true;
			}
		}
		for (let i = 0; i < this.dataSourceChuanDoanPhanBiets.data.length; i++) {
			if (this.dataSourceChuanDoanPhanBiets.data[i].ICD === null) {
				this.validationICDPhanBietErrors = [];
				this.validationICDPhanBietErrors.push({ Message: "ICD yêu cầu nhập", Field: "thongTinBenhAnKhoaNhi.ChuanDoanPhanBiets[" + i + "].ICD" });
				return true;
			}
		}

		if (inPhieu) {
			if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
				this.luuBenhAn();
			} else {
				this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
			}
		} else {
			if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
				this.dialog
					.open(ConfirmComponent, {
						disableClose: false,
						width: "400px",
						data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) },
					})
					.afterClosed()
					.subscribe((result) => {
						if (result === "Yes") {
							this.luuBenhAn();
						}
					});
			} else {
				this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
			}
		}
	}

	getThongTinBenhAnNoiKhoaNhi(id: any) {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			this.apiService.get<any>("DieuTriNoiTru/GetThongTinBenhAnNhiKhoa/" + id).subscribe((resultData) => {
				if (resultData !== null && resultData !== undefined) {
					this.thongTinBenhAnKhoaNhi = resultData;
					this.dataSourceChiSoSinhTons.data = this.thongTinBenhAnKhoaNhi.ChiSoSinhTons != null ? this.thongTinBenhAnKhoaNhi.ChiSoSinhTons : [];
					this.dataSourceICDsPhuKhac.data = this.thongTinBenhAnKhoaNhi.ChuanDoanKemTheos != null ? this.thongTinBenhAnKhoaNhi.ChuanDoanKemTheos : [];
					this.dataSourceChuanDoanPhanBiets.data =
						this.thongTinBenhAnKhoaNhi.ChuanDoanPhanBiets != null ? this.thongTinBenhAnKhoaNhi.ChuanDoanPhanBiets : [];
				}
			});
		} else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
	}

	onChangeSetTenICDPhu(dataItem: any, rowIndex: number) {
		if (dataItem != undefined && dataItem != null && rowIndex != undefined && rowIndex != null) {
			this.dataSourceICDsPhuKhac.data[rowIndex].TenICD = dataItem.DisplayName;
			this.dataSourceICDsPhuKhac.data[rowIndex].ChuanDoan = dataItem.Ten;
		} else {
			this.dataSourceICDsPhuKhac.data[rowIndex].TenICD = null;
			this.dataSourceICDsPhuKhac.data[rowIndex].ChuanDoan = null;
		}
	}

	onChangeChuanDoanPhanBiet(dataItem: any, rowIndex: number) {
		if (dataItem != undefined && dataItem != null && rowIndex != undefined && rowIndex != null) {
			this.dataSourceChuanDoanPhanBiets.data[rowIndex].TenICD = dataItem.DisplayName;
			this.dataSourceChuanDoanPhanBiets.data[rowIndex].ChuanDoan = dataItem.Ten;
		} else {
			this.dataSourceChuanDoanPhanBiets.data[rowIndex].TenICD = null;
			this.dataSourceChuanDoanPhanBiets.data[rowIndex].ChuanDoan = null;
		}
	}

	xoaICDPhanBiet(item: any) {
		this.dataSourceChuanDoanPhanBiets.data.splice(
			this.dataSourceChuanDoanPhanBiets.data.findIndex((x: any) => x == item),
			1
		);
	}

	xoaICDPhanKemTheo(item: any) {
		this.dataSourceICDsPhuKhac.data.splice(
			this.dataSourceICDsPhuKhac.data.findIndex((x: any) => x == item),
			1
		);
	}

	iCDSelectionChange(dataItem: any) {
		if (dataItem != undefined && dataItem != null) {
			this.thongTinBenhAnKhoaNhi.TenICDChinh = dataItem.DisplayName;
			this.thongTinBenhAnKhoaNhi.ChuanDoan = dataItem.Ten;
		} else {
			this.thongTinBenhAnKhoaNhi.TenICDChinh = null;
			this.thongTinBenhAnKhoaNhi.ChuanDoan = null;
			this.thongTinBenhAnKhoaNhi.ICDChinh = null;
		}
	}

	showPopupDuLieuMacDinh() {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
			this.dialog.open(NoiDungMauLoiDanBacSiPopupComponent, {
				disableClose: false,
				width: '1400px',
				data: { "LoaiBenhAn": this.LoaiBenhAn }
			}).afterClosed().subscribe(result => {

			});
		}
		else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
	}

	selectionChangeLoiDanBS(event: any) {
		if (event != undefined && event != null) {
			this.thongTinBenhAnKhoaNhi.HuongXuLyLoiDanBs = event.HuongXuLyLoiDanBacSi;
		}
		else {
			this.thongTinBenhAnKhoaNhi.HuongXuLyLoiDanBs = null;
		}
	}
}
