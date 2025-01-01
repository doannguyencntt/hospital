import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from "@angular/core";
import icAddCircle from "@iconify/icons-ic/add-circle";
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { rangeDate } from "src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham.model";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { RangeDate, ThongTinBenhAnSanKhoa, ThongTinChuanDoanKemTheo, TienSuSanKhoa } from "../thong-tin-benh-an.model";
import icDelete from "@iconify/icons-ic/twotone-delete";
import { Router } from "@angular/router";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { AuthService } from "src/app/core/services/auth.service";
import { MatDialog } from "@angular/material";
import { CommonService } from "src/app/core/utilities/common.helper";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { ChiTietDieuTriNoiTruViewModel } from "../../../dieu-tri-noi-tru.model";
import { PhieuKhamBenhNoiTruPopupComponent } from "../phieu-kham-benh-noi-tru-popup/phieu-kham-benh-noi-tru-popup.component";
import { ApiError } from "src/app/shared/models/api-error.model";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { NoiDungMauLoiDanBacSiPopupComponent } from "../noi-dung-mau-loi-dan-bac-si-popup/noi-dung-mau-loi-dan-bac-si-popup.component";
import icAdd from '@iconify/icons-ic/twotone-add';
@Component({
	selector: "app-thong-tin-benh-an-san-khoa-mo-thuong",
	templateUrl: "./thong-tin-benh-an-san-khoa-mo-thuong.component.html",
	styleUrls: ["./thong-tin-benh-an-san-khoa-mo-thuong.component.scss"],
})
export class ThongTinBenhAnSanKhoaMoThuongComponent implements OnInit {
	@Input() yeuCauTiepNhanId: any = null;
	@Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
	@Input() LoaiBenhAn: any = null;

	format: string = 'n1';
	icAdd = icAdd;
	thongTinBenhAnSanKhoa = new ThongTinBenhAnSanKhoa();
	icDelete = icDelete;
	validationErrors: any[] = [];
	currentNam: number;

	dataSourceChiSoSinhTons: any = {
		data: [],
		total: 0,
	};

	dataSourceChuanDoanPhanBiets: any = {
		data: [],
		total: 0,
	};

	dataSourceICDsPhuKhac: any = {
		data: [],
		total: 0,
	};

	dataTienSuSanKhoas: any = {
		data: [],
		total: 0,
	};

	dataSourceTreSoSinhs: any = {
		data: [],
		total: 0,
	};

	dataSourceLanPhauThuats: any = {
		data: [],
		total: 0,
	};

	gridColumnLienQuanBenhs: any = [];
	gridChanDoanKemTheoColumns: any[] = [];
	gridColumnChiSoSinhTons: any[] = [];
	gridColumnLanPhauThuats: any[] = [];
	gridColumnDacTinhTreSoSinhs: any[] = [];
	gridChanDoanPhanBietColumns: any[] = [];
	rangeDate = new RangeDate();

	public sampleData: any[] = [];
	icAddCircle = icAddCircle;
	documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
	@ViewChild("thoiGianTemplate", { static: true }) thoiGianTemplate: TemplateRef<any>;
	@ViewChild("icdTemplate", { static: true }) icdTemplate: TemplateRef<any>;
	@ViewChild("chanDoanTemplate", { static: true }) chanDoanTemplate: TemplateRef<any>;
	@ViewChild("actionTemplate", { static: true }) actionTemplate: TemplateRef<any>;
	@ViewChild("teniCDsPhanBietTemplate", { static: true }) teniCDsPhanBietTemplate: TemplateRef<any>;
	@ViewChild("teniCDsPhuKhacTemplate", { static: true }) teniCDsPhuKhacTemplate: TemplateRef<any>;
	@ViewChild("ghiChuICDsPhuKhacTemplate", { static: true }) ghiChuICDsPhuKhacTemplate: TemplateRef<any>;
	@ViewChild("actionICDsPhuKhacTemplate", { static: true }) actionICDsPhuKhacTemplate: TemplateRef<any>;
	@ViewChild("ghiChuTemplateEdit", { static: true }) ghiChuTemplateEdit: TemplateRef<any>;
	@ViewChild("actionICDsPhanBietTemplate", { static: true }) actionICDsPhanBietTemplate: TemplateRef<any>;

	constructor(private authService: AuthService, private apiService: ApiService, private dialog: MatDialog, private notificationService: NotificationService, private router: Router, private cdRef: ChangeDetectorRef) { }

	ngOnInit() {
		let year = new Date();
		this.currentNam = year.getFullYear();

		this.dieuTriNoiTruModel = this.dieuTriNoiTruModel != null ? this.dieuTriNoiTruModel : new ChiTietDieuTriNoiTruViewModel();
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

		this.getThongTinBenhAnNoiSanKhoa(this.yeuCauTiepNhanId);
	}

	themChiSoSinhTon() { }

	HuyBenhAn() {
		this.getThongTinBenhAnNoiSanKhoa(this.yeuCauTiepNhanId);
	}

	getThongTinBenhAnNoiSanKhoa(id: any) {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			this.apiService.get<any>("DieuTriNoiTru/GetThongTinBenhAnSanKhoaMo/" + id).subscribe((resultData) => {
				if (resultData !== null && resultData !== undefined) {
					this.thongTinBenhAnSanKhoa = resultData;

					this.thongTinBenhAnSanKhoa.TuNgayDenNgay = new RangeDate();
					this.thongTinBenhAnSanKhoa.TuNgayDenNgay.startDate = this.thongTinBenhAnSanKhoa.TuNgayDenNgay != null && this.thongTinBenhAnSanKhoa.TuNgayDenNgay.startDate != null ? new Date(this.thongTinBenhAnSanKhoa.TuNgayDenNgay.startDate) : new Date();
					this.thongTinBenhAnSanKhoa.TuNgayDenNgay.endDate = new Date(this.thongTinBenhAnSanKhoa.TuNgayDenNgay.endDate);

					this.dataTienSuSanKhoas.data = this.thongTinBenhAnSanKhoa.TienSuSanKhoas != null ? this.thongTinBenhAnSanKhoa.TienSuSanKhoas : [];
					this.dataSourceChiSoSinhTons.data = this.thongTinBenhAnSanKhoa.ChiSoSinhTons != null ? this.thongTinBenhAnSanKhoa.ChiSoSinhTons : [];
					this.dataSourceICDsPhuKhac.data = this.thongTinBenhAnSanKhoa.ChuanDoanKemTheos != null ? this.thongTinBenhAnSanKhoa.ChuanDoanKemTheos : [];
					this.dataSourceChuanDoanPhanBiets.data = this.thongTinBenhAnSanKhoa.ChuanDoanPhanBiets != null ? this.thongTinBenhAnSanKhoa.ChuanDoanPhanBiets : [];
					this.dataSourceTreSoSinhs.data = this.thongTinBenhAnSanKhoa.DacĐiemTreSoSinhs != null ? this.thongTinBenhAnSanKhoa.DacĐiemTreSoSinhs : [];
					this.dataSourceLanPhauThuats.data = this.thongTinBenhAnSanKhoa.LanPhauThuats != null ? this.thongTinBenhAnSanKhoa.LanPhauThuats : [];
				}
			});
		} else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
	}

	luuBenhAn() {
		this.thongTinBenhAnSanKhoa.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
		this.thongTinBenhAnSanKhoa.ChiSoSinhTons = this.dataSourceChiSoSinhTons.data;
		this.thongTinBenhAnSanKhoa.ChuanDoanKemTheos = this.dataSourceICDsPhuKhac.data;
		this.thongTinBenhAnSanKhoa.ChuanDoanPhanBiets = this.dataSourceChuanDoanPhanBiets.data;
		this.thongTinBenhAnSanKhoa.TienSuSanKhoas = this.dataTienSuSanKhoas.data;
		this.thongTinBenhAnSanKhoa.DacĐiemTreSoSinhs = this.dataSourceTreSoSinhs.data;
		this.thongTinBenhAnSanKhoa.LanPhauThuats = this.dataSourceLanPhauThuats.data;
		this.apiService.post<any>("DieuTriNoiTru/LuuHoacCapNhatThongTinBASanKhoaMo", this.thongTinBenhAnSanKhoa).subscribe(
			(resultData) => {
				this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
			},
			(err: ApiError) => {
				err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : (this.validationErrors = err.ValidationErrors);
			}
		);
	}

	luuBenhAnVaInPhieu() {
		var self = this;
		self.thongTinBenhAnSanKhoa.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
		self.thongTinBenhAnSanKhoa.ChiSoSinhTons = self.dataSourceChiSoSinhTons.data;
		self.thongTinBenhAnSanKhoa.ChuanDoanKemTheos = self.dataSourceICDsPhuKhac.data;
		self.thongTinBenhAnSanKhoa.ChuanDoanPhanBiets = self.dataSourceChuanDoanPhanBiets.data;
		self.thongTinBenhAnSanKhoa.TienSuSanKhoas = self.dataTienSuSanKhoas.data;
		self.thongTinBenhAnSanKhoa.DacĐiemTreSoSinhs = self.dataSourceTreSoSinhs.data;
		self.thongTinBenhAnSanKhoa.LanPhauThuats = self.dataSourceLanPhauThuats.data;
		self.apiService.post<any>("DieuTriNoiTru/LuuHoacCapNhatThongTinBASanKhoaMo", self.thongTinBenhAnSanKhoa).subscribe(() => {
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

	thongGhiChuPara(thongTinGhiChuPara: any) {
		// this.thongTinBenhAnSanKhoa.GhiChuPara = thongTinGhiChuPara;
		this.thongTinBenhAnSanKhoa.Para = thongTinGhiChuPara;
	}

	ktLanKinhCuoiNgay(selectDateTime: any) {
		this.validationErrors = [];
		this.cdRef.detectChanges();
		var date = new Date();
		if (selectDateTime != undefined && selectDateTime != null) {
			var selectDate = new Date(selectDateTime);
			if (selectDate.getDate() > date.getDate()) {


				this.validationErrors.push({
					Message: "Kinh lần cuối ngày không được lớn hơn ngày hiện tại",
					Field: "KinhCuoiNgay",
				});
			}
		}
	}

	validationICDPhuErrors: any[] = [];
	validationICDPhanBietErrors: any[] = [];
	LuuThongTinBenhAnSanKhoa(inPhieu) {
		this.validationICDPhuErrors = [];
		for (let i = 0; i < this.dataSourceICDsPhuKhac.data.length; i++) {
			if (this.dataSourceICDsPhuKhac.data[i].ICD === null) {
				this.validationICDPhuErrors.push({ Message: "ICD yêu cầu nhập", Field: "thongTinBenhAnSanKhoa.ChuanDoanKemTheos[" + i + "].ICD" });
				return true;
			}
		}
		this.validationICDPhanBietErrors = [];
		for (let i = 0; i < this.dataSourceChuanDoanPhanBiets.data.length; i++) {
			if (this.dataSourceChuanDoanPhanBiets.data[i].ICD === null) {
				this.validationICDPhanBietErrors.push({ Message: "ICD yêu cầu nhập", Field: "thongTinBenhAnSanKhoa.ChuanDoanPhanBiets[" + i + "].ICD" });
				return true;
			}
		}
		//====kiểm tra lỗi tiền sử sản phụ khoa===
		if (this.validationErrors != undefined && this.validationErrors.length > 0) {
			return true;
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

	TinhTuoiCoKinh(event: any) {
		this.validationErrors = [];
		this.cdRef.detectChanges();
		this.thongTinBenhAnSanKhoa.TuoiCoKinh = this.thongTinBenhAnSanKhoa.NamSinh != null ?
			(event - this.thongTinBenhAnSanKhoa.NamSinh > 0 ? event - this.thongTinBenhAnSanKhoa.NamSinh : 0) : 0;
		
		if (event != undefined && event != null && event - this.thongTinBenhAnSanKhoa.NamSinh < 0) {
			this.validationErrors.push({
				Message: "Chọn năm lớn hơn năm sinh " + this.thongTinBenhAnSanKhoa.NamSinh,
				Field: "BatDauThayKinhNam",
			});
		}
	}

	TuoiLayChong(event: any) {
		this.validationErrors = [];
		this.cdRef.detectChanges();
		this.thongTinBenhAnSanKhoa.TuoiLayChong = this.thongTinBenhAnSanKhoa.NamSinh != null ? (event - this.thongTinBenhAnSanKhoa.NamSinh > 0 ? event - this.thongTinBenhAnSanKhoa.NamSinh : 0) : 0;
		if (event != undefined && event != null && event - this.thongTinBenhAnSanKhoa.NamSinh < 0) {
			this.validationErrors.push({
				Message: "Chọn năm lớn hơn măm sinh " + this.thongTinBenhAnSanKhoa.NamSinh,
				Field: "LayChongNam",
			});
		}
	}

	TuoiHetKinh(event: any) {
		this.validationErrors = [];
		this.cdRef.detectChanges();
		this.thongTinBenhAnSanKhoa.TuoiHetKinh = this.thongTinBenhAnSanKhoa.NamSinh != null ? (event - this.thongTinBenhAnSanKhoa.NamSinh > 0 ? event - this.thongTinBenhAnSanKhoa.NamSinh : 0) : 0;
		if (event != undefined && event != null && event - this.thongTinBenhAnSanKhoa.NamSinh < 0) {
			this.validationErrors.push({
				Message: "Chọn năm lớn hơn măm sinh " + this.thongTinBenhAnSanKhoa.NamSinh,
				Field: "NamHetKinh",
			});
		}
	}

	themChanDoanKemTheo() {
		this.dataSourceICDsPhuKhac.data.push(new ThongTinChuanDoanKemTheo());
	}

	themChanDoanPhanBiet() {
		this.dataSourceChuanDoanPhanBiets.data.push(new ThongTinChuanDoanKemTheo());
	}

	onDataBoundChuanDoanKemTheo(dataChuanDoanKemTheo: any) {
		if (dataChuanDoanKemTheo && dataChuanDoanKemTheo.Data.length > 0) {
			this.thongTinBenhAnSanKhoa.ChuanDoanKemTheos = dataChuanDoanKemTheo.Data;
		}
	}

	iCDSelectionChange(dataItem: any) {
		if (dataItem != undefined && dataItem != null) {
			this.thongTinBenhAnSanKhoa.TenICDChinh = dataItem.DisplayName;
			this.thongTinBenhAnSanKhoa.ChuanDoan = dataItem.Ten;
		} else {
			this.thongTinBenhAnSanKhoa.TenICDChinh = null;
			this.thongTinBenhAnSanKhoa.ChuanDoan = null;
			this.thongTinBenhAnSanKhoa.ICDChinh = null;
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

	onChangeChuanDoanPhanBiet(dataItem: any, rowIndex: number) {
		if (dataItem != undefined && dataItem != null && rowIndex != undefined && rowIndex != null) {
			this.dataSourceChuanDoanPhanBiets.data[rowIndex].TenICD = dataItem.DisplayName;
			this.dataSourceChuanDoanPhanBiets.data[rowIndex].ChuanDoan = dataItem.Ten;
		} else {
			this.dataSourceChuanDoanPhanBiets.data[rowIndex].TenICD = null;
			this.dataSourceChuanDoanPhanBiets.data[rowIndex].ChuanDoan = null;
		}
	}

	selectionGetDoLot(dataItem: any) {
		if (dataItem != undefined && dataItem != null) {
			this.thongTinBenhAnSanKhoa.TenDoLot = dataItem.DisplayName;
		} else {
			this.thongTinBenhAnSanKhoa.TenDoLot = null;
		}
	}

	selectionGetTinhTrangVoOi(dataItem: any) {
		if (dataItem != undefined && dataItem != null) {
			this.thongTinBenhAnSanKhoa.TenTinhTrangVoOi = dataItem.DisplayName;
		} else {
			this.thongTinBenhAnSanKhoa.TenTinhTrangVoOi = null;
		}
	}
	selectionGetVoOi(dataItem: any) {
		if (dataItem != undefined && dataItem != null) {
			this.thongTinBenhAnSanKhoa.TenVoOi = dataItem.DisplayName;
		} else {
			this.thongTinBenhAnSanKhoa.TenVoOi = null;
		}
	}

	selectionNhanVienTheoDoi(dataItem: any) {
		if (dataItem != undefined && dataItem != null) {
			this.thongTinBenhAnSanKhoa.TenNhanVienTheoDoi = dataItem.DisplayName;
		} else {
			this.thongTinBenhAnSanKhoa.TenNhanVienTheoDoi = null;
		}
	}

	selectionChucVu(dataItem: any) {
		if (dataItem != undefined && dataItem != null) {
			this.thongTinBenhAnSanKhoa.TenChucDanh = dataItem.DisplayName;
		} else {
			this.thongTinBenhAnSanKhoa.TenChucDanh = null;
		}
	}

	selectionPhuongPhapDe(dataItem: any) {
		if (dataItem != undefined && dataItem != null) {
			this.thongTinBenhAnSanKhoa.TenPhuongPhapDe = dataItem.DisplayName;
		} else {
			this.thongTinBenhAnSanKhoa.TenPhuongPhapDe = null;
		}
	}

	selectionTangSinhMon(dataItem: any) {
		if (dataItem != undefined && dataItem != null) {
			this.thongTinBenhAnSanKhoa.TenTangSinhMon = dataItem.DisplayName;
		} else {
			this.thongTinBenhAnSanKhoa.TenTangSinhMon = null;
		}
	}

	selectionGetCoTuCung(dataItem: any) {
		if (dataItem != undefined && dataItem != null) {
			this.thongTinBenhAnSanKhoa.TenCoTuCung = dataItem.DisplayName;
		} else {
			this.thongTinBenhAnSanKhoa.TenCoTuCung = null;
		}
	}

	ktTuNgay(selectToDate) {
		var date = new Date();
		if (selectToDate != undefined && selectToDate != null) {
			var selectDate = new Date(selectToDate);
			if (selectDate > date) {
				this.validationErrors = [];
				this.cdRef.detectChanges();
				this.validationErrors.push({
					Message: "Chọn ngày phải nhỏ hơn ngày hiện tại",
					Field: "TuNgay",
				});
			}
			else if (selectDate > this.thongTinBenhAnSanKhoa.TuNgayDenNgay.endDate) {
				this.validationErrors = [];
				this.cdRef.detectChanges();
				this.validationErrors.push({
					Message: "Chọn ngày phải nhỏ hơn đến ngày của thai kỳ",
					Field: "TuNgay",
				});
			}
		}
	}

	ktDenNgay(selectFromDate) {
		this.validationErrors = [];
		this.cdRef.detectChanges();

		var date = new Date();
		if (selectFromDate != undefined && selectFromDate != null) {
			var selectDate = new Date(selectFromDate);
			if (selectDate > date) {
				this.validationErrors = [];
				this.cdRef.detectChanges();
				this.validationErrors.push({
					Message: "Chọn ngày phải nhỏ hơn ngày hiện tại",
					Field: "DenNgay",
				});
			}
			else if (selectDate < this.thongTinBenhAnSanKhoa.TuNgayDenNgay.startDate) {
				this.validationErrors = [];
				this.cdRef.detectChanges();
				this.validationErrors.push({
					Message: "Chọn đến ngày phải lớn hơn ngày bắt đầu",
					Field: "DenNgay",
				});
			}
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
			this.thongTinBenhAnSanKhoa.HuongXuLyLoiDanBs = event.HuongXuLyLoiDanBacSi;
		}
		else {
			this.thongTinBenhAnSanKhoa.HuongXuLyLoiDanBs = null;
		}
	}
}
