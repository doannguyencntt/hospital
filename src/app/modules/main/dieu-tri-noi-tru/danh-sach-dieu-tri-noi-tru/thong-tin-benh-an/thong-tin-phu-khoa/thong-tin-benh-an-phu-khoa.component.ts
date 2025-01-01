import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from "@angular/core";
import icAddCircle from "@iconify/icons-ic/add-circle";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { ThongTinBenhAnPhuKhoa, ThongTinChuanDoanKemTheo } from "../thong-tin-benh-an.model";
import icDelete from "@iconify/icons-ic/twotone-delete";
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { AuthService } from "src/app/core/services/auth.service";
import { MatDialog } from "@angular/material";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { CommonService } from "src/app/core/utilities/common.helper";
import { ChiTietDieuTriNoiTruViewModel } from "../../../dieu-tri-noi-tru.model";
import { PhieuKhamBenhNoiTruPopupComponent } from "../phieu-kham-benh-noi-tru-popup/phieu-kham-benh-noi-tru-popup.component";
import { ApiError } from "src/app/shared/models/api-error.model";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { NoiDungMauLoiDanBacSiPopupComponent } from "../noi-dung-mau-loi-dan-bac-si-popup/noi-dung-mau-loi-dan-bac-si-popup.component";
import icAdd from '@iconify/icons-ic/twotone-add';

@Component({
	selector: "app-thong-tin-benh-an-phu-khoa",
	templateUrl: "./thong-tin-benh-an-phu-khoa.component.html",
	styleUrls: ["./thong-tin-benh-an-phu-khoa.component.scss"],
})
export class ThongTinBenhAnPhuKhoaComponent implements OnInit {
	@Input() yeuCauTiepNhanId: any = null;
	@Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
	@Input() LoaiBenhAn: any = null;

	validationErrors: any[] = [];
	thongTinBenhAnPhuKhoa = new ThongTinBenhAnPhuKhoa();
	gridChanDoanPhanBietColumns: any[] = [];
	currentNam: number;
	icAdd = icAdd;
	
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

	gridColumnChiSoSinhTons: any[] = [];
	gridChanDoanKemTheoColumns: any[] = [];
	public sampleData: any[] = [];
	icAddCircle = icAddCircle;
	documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
	icDelete = icDelete;

	@ViewChild("thoiGianTemplate", { static: true }) thoiGianTemplate: TemplateRef<any>;
	@ViewChild("icdTemplate", { static: true }) icdTemplate: TemplateRef<any>;
	@ViewChild("chanDoanTemplate", { static: true }) chanDoanTemplate: TemplateRef<any>;
	@ViewChild("actionTemplate", { static: true }) actionTemplate: TemplateRef<any>;

	@ViewChild("teniCDsPhuKhacTemplate", { static: true }) teniCDsPhuKhacTemplate: TemplateRef<any>;
	@ViewChild("ghiChuICDsPhuKhacTemplate", { static: true }) ghiChuICDsPhuKhacTemplate: TemplateRef<any>;
	@ViewChild("actionICDsPhuKhacTemplate", { static: true }) actionICDsPhuKhacTemplate: TemplateRef<any>;
	@ViewChild("ghiChuTemplateEdit", { static: true }) ghiChuTemplateEdit: TemplateRef<any>;
	@ViewChild("teniCDsPhanBietTemplate", { static: true }) teniCDsPhanBietTemplate: TemplateRef<any>;
	@ViewChild("actionICDsPhanBietTemplate", { static: true }) actionICDsPhanBietTemplate: TemplateRef<any>;

	tienThaiSelectItems = [
		{ Value: 1, Text: "Sinh (đủ tháng)" },
		{ Value: 2, Text: "Sớm (đẻ non)" },
		{ Value: 3, Text: "Sẩy (nạo, hút)" },
		{ Value: 4, Text: "Sống" },
	];
	constructor(
		private authService: AuthService,
		private apiService: ApiService,
		private dialog: MatDialog,
		private notificationService: NotificationService,
		private cdRef: ChangeDetectorRef
	) { }

	ngOnInit() {
		let year = new Date();
		this.currentNam = year.getFullYear();

		this.dieuTriNoiTruModel = this.dieuTriNoiTruModel != null ? this.dieuTriNoiTruModel : new ChiTietDieuTriNoiTruViewModel();
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
		this.gridColumnChiSoSinhTons = [
			{ Field: "Mach", Title: "MẠCH (NHỊP/PHÚT)", Width: 100, Sortable: true },
			{ Field: "NhietDo", Title: "NHIỆT ĐỘ (°C)", Width: 150, Sortable: true },
			{ Field: "HuyetAp", Title: "HUYẾT ÁP (MMHG)", Width: 100, Sortable: true },
			{ Field: "NhipTho", Title: "NHỊP THỞ (LẦN/PHÚT)", Width: 150, Sortable: true },
			{ Field: "CanNang", Title: "CÂN NẶNG (KG)", Width: 100, Sortable: true },
			{ Field: "ChieuCao", Title: "CHIỀU CAO (CM)", Width: 150, Sortable: true },
			{ Field: "BMI", Title: "BMI (KG/M²)", Width: 100, Sortable: true },
			{ Field: "Glassgow", Title: "GLASSGOW", Width: 80, Sortable: true },
			{ Field: "Spo2", Title: "SPO2(%)", Width: 80, Sortable: true },
			{ Field: "NhanVienThucHien", Title: "NHÂN VIÊN THỰC HIỆN", Width: 150, Sortable: true },
			{ Field: "NgayThucHien", Title: "NGÀY THỰC HIỆN", Width: 150, Sortable: true },
		];

		this.getThongTinBenhAnNoiKhoaNhi(this.yeuCauTiepNhanId);
	}

	themChiSoSinhTon() { }

	HuyBenhAn() {
		this.getThongTinBenhAnNoiKhoaNhi(this.yeuCauTiepNhanId);
	}
	getThongTinBenhAnNoiKhoaNhi(id: any) {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			this.apiService.get<any>("DieuTriNoiTru/GetThongTinBenhAnPhuKhoa/" + id).subscribe((resultData) => {
				if (resultData !== null && resultData !== undefined) {
					this.thongTinBenhAnPhuKhoa = resultData;

					this.dataSourceChiSoSinhTons.data = this.thongTinBenhAnPhuKhoa.ChiSoSinhTons != null ? this.thongTinBenhAnPhuKhoa.ChiSoSinhTons : [];
					this.dataSourceICDsPhuKhac.data = this.thongTinBenhAnPhuKhoa.ChuanDoanKemTheos != null ? this.thongTinBenhAnPhuKhoa.ChuanDoanKemTheos : [];
					this.dataSourceChuanDoanPhanBiets.data =
						this.thongTinBenhAnPhuKhoa.ChuanDoanPhanBiets != null ? this.thongTinBenhAnPhuKhoa.ChuanDoanPhanBiets : [];
				}
			});
		} else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
	}
	luuBenhAn() {
		this.thongTinBenhAnPhuKhoa.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
		this.thongTinBenhAnPhuKhoa.ChiSoSinhTons = this.dataSourceChiSoSinhTons.data;
		this.thongTinBenhAnPhuKhoa.ChuanDoanKemTheos = this.dataSourceICDsPhuKhac.data;
		this.thongTinBenhAnPhuKhoa.ChuanDoanPhanBiets = this.dataSourceChuanDoanPhanBiets.data;
		this.apiService.post<any>("DieuTriNoiTru/LuuHoacCapNhatThongTinBenhAnPhuKhoa", this.thongTinBenhAnPhuKhoa).subscribe(
			(resultData) => {
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
		self.thongTinBenhAnPhuKhoa.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
		self.thongTinBenhAnPhuKhoa.ChiSoSinhTons = self.dataSourceChiSoSinhTons.data;
		self.thongTinBenhAnPhuKhoa.ChuanDoanKemTheos = self.dataSourceICDsPhuKhac.data;
		self.thongTinBenhAnPhuKhoa.ChuanDoanPhanBiets = self.dataSourceChuanDoanPhanBiets.data;
		self.apiService.post<any>("DieuTriNoiTru/LuuHoacCapNhatThongTinBenhAnPhuKhoa", self.thongTinBenhAnPhuKhoa).subscribe(() => {
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
	LuuThongTinBenhAnNoiKhoaPhuKhoa(inPhieu: any) {
		this.validationICDPhuErrors = [];
		for (let i = 0; i < this.dataSourceICDsPhuKhac.data.length; i++) {
			if (this.dataSourceICDsPhuKhac.data[i].ICD === null) {
				this.validationICDPhuErrors.push({ Message: "ICD yêu cầu nhập", Field: "thongTinBenhAnPhuKhoa.ChuanDoanKemTheos[" + i + "].ICD" });
				return true;
			}
		}
		this.validationICDPhanBietErrors = [];
		for (let i = 0; i < this.dataSourceChuanDoanPhanBiets.data.length; i++) {
			if (this.dataSourceChuanDoanPhanBiets.data[i].ICD === null) {
				this.validationICDPhanBietErrors.push({ Message: "ICD yêu cầu nhập", Field: "thongTinBenhAnPhuKhoa.ChuanDoanPhanBiets[" + i + "].ICD" });
				return true;
			}
		}

		//====kiểm tra lỗi tiền sử sản phụ khoa===
		if (this.validationErrors.length > 0) {
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

	themChanDoanKemTheo() {
		this.dataSourceICDsPhuKhac.data.push(new ThongTinChuanDoanKemTheo());
	}

	themChanDoanPhanBiet() {
		this.dataSourceChuanDoanPhanBiets.data.push(new ThongTinChuanDoanKemTheo());
	}

	iCDSelectionChange(dataItem: any) {
		if (dataItem != undefined && dataItem != null) {
			this.thongTinBenhAnPhuKhoa.TenICDChinh = dataItem.DisplayName;
			this.thongTinBenhAnPhuKhoa.ChuanDoan = dataItem.Ten;
		} else {
			this.thongTinBenhAnPhuKhoa.TenICDChinh = null;
			this.thongTinBenhAnPhuKhoa.ChuanDoan = null;
			this.thongTinBenhAnPhuKhoa.ICDChinh = null;
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

	TinhTuoiCoKinh(event: any) {
		this.validationErrors = [];
		this.cdRef.detectChanges();

		this.thongTinBenhAnPhuKhoa.TuoiCoKinh =
			this.thongTinBenhAnPhuKhoa.NamSinh != null ? (event - this.thongTinBenhAnPhuKhoa.NamSinh > 0 ? event - this.thongTinBenhAnPhuKhoa.NamSinh : 0) : 0;
		if (event != undefined && event != null && event - this.thongTinBenhAnPhuKhoa.NamSinh < 0) {

			this.validationErrors.push({
				Message: "Chọn năm lớn hơn năm sinh " + this.thongTinBenhAnPhuKhoa.NamSinh,
				Field: "BatDauThayKinhNam",
			});
		}
	}

	TuoiLayChong(event: any) {
		this.validationErrors = [];
		this.cdRef.detectChanges();
		this.thongTinBenhAnPhuKhoa.TuoiLayChong =
			this.thongTinBenhAnPhuKhoa.NamSinh != null ? (event - this.thongTinBenhAnPhuKhoa.NamSinh > 0 ? event - this.thongTinBenhAnPhuKhoa.NamSinh : 0) : 0;
		if (event != undefined && event != null && event - this.thongTinBenhAnPhuKhoa.NamSinh < 0) {

			this.validationErrors.push({
				Message: "Chọn năm lớn hơn măm sinh " + this.thongTinBenhAnPhuKhoa.NamSinh,
				Field: "LayChongNam",
			});
		}
	}

	TuoiHetKinh(event: any) {
		this.validationErrors = [];
		this.cdRef.detectChanges();
		this.thongTinBenhAnPhuKhoa.TuoiHetKinh =
			this.thongTinBenhAnPhuKhoa.NamSinh != null ? (event - this.thongTinBenhAnPhuKhoa.NamSinh > 0 ? event - this.thongTinBenhAnPhuKhoa.NamSinh : 0) : 0;
		if (event != undefined && event != null && event - this.thongTinBenhAnPhuKhoa.NamSinh < 0) {

			this.validationErrors.push({
				Message: "Chọn năm lớn hơn măm sinh " + this.thongTinBenhAnPhuKhoa.NamSinh,
				Field: "NamHetKinh",
			});
		}
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

	ktThoiGianDauBung(ev: any) {
		this.thongTinBenhAnPhuKhoa.ThoiGianTruoc = false;
		this.thongTinBenhAnPhuKhoa.ThoiGianTrong = false;
		this.thongTinBenhAnPhuKhoa.ThoiGianSau = false;
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
			this.thongTinBenhAnPhuKhoa.HuongXuLyLoiDanBs = event.HuongXuLyLoiDanBacSi;
		}
		else {
			this.thongTinBenhAnPhuKhoa.HuongXuLyLoiDanBs = null;
		}
	}
}
