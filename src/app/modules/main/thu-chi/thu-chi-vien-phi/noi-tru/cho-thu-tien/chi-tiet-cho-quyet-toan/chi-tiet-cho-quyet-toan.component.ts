import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, ViewRef, HostListener, ViewEncapsulation } from "@angular/core";
import { ThongTinBenhNhan, ThuTien, DanhSachCongNo, ThongTinCongTyBaoHiemTuNhans, ThongTinMienGiamTheoDoiTuongUuDai, ThongTinMienGiamThem, ThongTinMienGiamVo, ThongTinMienGiamVoucher, TrangThaiThuTien, LookupItemVo, TaiLieuDinhKemGiayMiemGiamVo, ThongTinVoucherTheoYeuCauTiepNhan, CommonThuTien } from "../cho-thu-tien.model";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseService } from "src/app/core/services/base.service";
import { DsChuaThuTienComponent } from "../ds-chua-thu-tien/ds-chua-thu-tien.component";
import { MatDialog } from "@angular/material/dialog";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { ApiService } from "src/app/core/services/api.service";
import icCheck from "@iconify/icons-ic/twotone-check";
import { ApiError } from "src/app/shared/models/api-error.model";
import { HttpParams } from "@angular/common/http";
import { NotificationService } from "src/app/core/services/notification.service";
import { ChiTietThuTienTamUngComponent } from "../chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component";
import { FormControl, FormGroup } from "@angular/forms";
import { MultiselectComponent } from "src/app/shared/component/dropdowns/multiselect/multiselect.component";
import { TabStripComponent } from "@progress/kendo-angular-layout";
import { ViewImagePdfComponent } from "src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component";
import icSearch from "@iconify/icons-ic/twotone-search";
import { ChiTietSuDungPopupComponent } from "src/app/modules/main/dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/phong-giuong-bs-dieu-tri/chi-tiet-su-dung-popup/chi-tiet-su-dung-popup.component";
import { XacNhanPhieuThuComponent } from "../../../common/xac-nhan-phieu-thu/xac-nhan-phieu-thu.component";
import { ThongTinDichVuChuaDuocXacNhanComponent } from "../../../common/thong-tin-dich-vu-chua-duoc-xac-nhan/thong-tin-dich-vu-chua-duoc-xac-nhan.component";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from "src/app/core/services/auth.service";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { LoaiBangKeChiPhi, QuyetToanDichVuTrongGoiVo } from "../../../ngoai-tru/cho-thu-tien/cho-thu-tien.model";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { DichVuKhuyenMaiKemTheoGoi } from "../dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component";
import { ThongTinPhieuNoiTruPopupComponent } from "../thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component";
import { CommonPdfPopupComponent } from "../../../common/common-pdf-popup/common-pdf-popup.component";
import { Console } from "console";
import { ThuTamUngKhiQuyetToanComponent } from "../thu-tam-ung-khi-quyet-toan-popup/thu-tam-ung-khi-quyet-toan-popup.component";
import { CommonPdfPopupNoiTruComponent } from "../../../common/common-pdf-popup-noi-tru/common-pdf-popup-noi-tru.component";

@Component({
	selector: "app-chi-tiet-cho-quyet-toan",
	templateUrl: "./chi-tiet-cho-quyet-toan.component.html",
	styleUrls: ["./chi-tiet-cho-quyet-toan.component.scss"],
	encapsulation: ViewEncapsulation.None
})

export class ChiTietChoQuyetToanComponent implements OnInit {
	public documentType: DocumentType = DocumentType.ThuNgan;
	public thongTinBenhNhan: ThongTinBenhNhan;
	public thongTinBenhNhantam: any = [];
	public commonThuTien = new CommonThuTien();
	public trangThaiThanhToan = new TrangThaiThuTien();
	public apDungMiemGiam: boolean = false;
	public thongTinMienGiamVo: ThongTinMienGiamVo;
	public thongTinVoucherTheoYeuCauTiepNhan: ThongTinVoucherTheoYeuCauTiepNhan;
	public thongTinMienGiamTheoDoiTuongUuDai = {} as ThongTinMienGiamTheoDoiTuongUuDai;
	public thongTinMienGiamVoucher = {} as ThongTinMienGiamVoucher;
	public thongTinMienGiamThem = {} as ThongTinMienGiamThem;
	public kiemTraThongTinBaoHiemTN: boolean = false;
	public refreshFlagApDung: boolean = false;
	public showCanhBaoSoTienNhap: boolean = false;
	public loaiVoucher: number = 0;
	public listOldVouchers = [];
	public checkedMGTGiaTri: boolean = true;
	public checkedMGTTiLe: boolean = false;
	public checkHiddenSoTienConLai: boolean = false;
	public selectMoneyTienBNDua: any[] = null;
	public selectMoneyTienMat: any[] = null;
	public selectMoneyTienChuyenKhoan: any[] = null;
	public selectMoneyTienPos: any[] = null;
	public radioThuTien: boolean = true;
	public radioThuTamUng: boolean = false;
	public radioTraLaiBN: boolean = false;
	public radioTraNo: boolean = false;
	public voucherLookupItemVo: Array<LookupItemVo>;
	public idYeuCauTiepNhan: number = 0;
	public loaiThanhToan: boolean = true;
	public typeThanhToan: number = 0;
	public loadingPopup: any;
	public ktCoPhieuThuCongNo : boolean = false;
	public setDefeautTienMat: any = [this.commonThuTien.TienMat];
	public hinhThucThanhToan: any = [
		{
			KeyId: this.commonThuTien.TienMat,
			DisplayName: this.commonThuTien.TienMatText,
			Selected: false,
			Change: false,
		},
		{
			KeyId: this.commonThuTien.ChuyenKhoan,
			DisplayName: this.commonThuTien.ChuyenKhoanText,
			Selected: false,
			Change: false,
		},
		{
			KeyId: this.commonThuTien.Pos,
			DisplayName: this.commonThuTien.PosText,
			Selected: false,
			Change: false,
		}
	];

	format: string = 'n2';
	chiTienQuyetToan = new QuyetToanDichVuTrongGoiVo();

	allowedExtensions: string[] = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG", ".pdf", ".PDF"];
	icSearch = icSearch;
	tabIndex: number = 0;
	selectedValueThuPhi: string = this.commonThuTien.ThuTien;
	danhsachBHTN: any = [];
	icCheck = icCheck;
	validationErrors: any[] = [];

	soLuongDichVuChuaDuocBHYTXN: number = 0;
	hostingName: string;
	taiKhoanThuId: any;
	dataSourceChanged: boolean = false;
	dataSourceChangedTamUng: boolean = false;
	dataSourceChangedHuyThanhToan: boolean = false;
	dataSourceChangedThuNo: boolean = false;
	danhSachCongNos: DanhSachCongNo[] = [];
	soDuTaiKhoanBenhNhan: number = 0;
	soTienQuyBHYTTTTrongGoi: number = 0;
	apDungCongNo: boolean = false;
	apCapNhatThanhToan: boolean = false;
	position: number = 0;
	flagShowThongTinMienGiam: boolean = false;
	flagShowDoiTuongUuDai: boolean = false;
	flagEnableVoucher: boolean = false;
	flagEnableMGThem: boolean = false;
	disabledMGThem: boolean = false;
	disabledVoucher: boolean = false;
	disabledTiLeMG: boolean = true;
	disabledSoTienMG: boolean = false;
	flagCheckSeletedTienMat: boolean = false;
	flagCheckSeletedChuyenKhoan: boolean = false;
	flagCheckSeletedPos: boolean = false;
	flagCheckSeletedCongNo: boolean = false;
	checkSeletedTienMat: boolean = false;
	checkSeletedChuyenKhoan: boolean = false;
	checkSeletedPos: boolean = false;
	checkSeletedCongNo: boolean = false;
	arrayThanhToans: any[] = [];
	arrayThanhToanstmp: any[] = [];
	isExistFile: boolean = false;
	flagApDung: boolean = false;
	flagShowDoiTuongUuDaiOrVoucher: boolean = false;
	confrim: any = null;
	standardMG: number = 0;
	listVouchers: number[] = [];
	listTmpVouchers: number[] = [];
	thuNganValidationErrors: any;
	thuTien: ThuTien;
	tongTienBNThanhToan: number = 0;
	loaiThuChiTien: boolean = false;
	ktQTBHYTTheoGoi: boolean = false;
	isTienBNTraOrTraBN: boolean = false;

	tienPhaiTraBenhNhan: number = 0;

	titleActive: string = "Chưa thu";
	ktKhuyenMaiDichVu: any;
	ktSuDungGoi: number;


	danhSachChuaThanhToans = {
		data: [],
		SoTienBenhNhan: 0,
		HoTen: "",
		SoLuongBYHTChuaXN: 0,
	};

	danhSachChuaXacNhanBHYT = {
		data: []
	};

	gridBaoHiemTNs: any[] = [];
	dataSourceDanhSachBHTN = {
		data: [],
		total: 0,
	};

	public dataCongNo = this.dataSourceDanhSachBHTN.data;
	public taiLieuDinhKemGiayMiemGiamVo = new TaiLieuDinhKemGiayMiemGiamVo();
	dataSourceDanhSachCongNo: any = { data: [], total: 0 };

	public listVoucherItem: Array<string> = [];
	newBarcode: string = "";
	public value: any = [];
	modelQRCode: any;
	soTienCongNoTam: number = 0;

	public apDungCongNoTrongGoi: boolean = false;
	public dataSourceChangedTrongGoi: boolean = false;

	public formGroup;

	constructor(private route: ActivatedRoute, private dialog: MatDialog,
		private authService: AuthService, private apiService: ApiService,
		private router: Router, private cdRef: ChangeDetectorRef,
		private notificationService: NotificationService, private baseService: BaseService) {
		this.baseService.controllerName = "ThuNgan";
	}

	@ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
	@ViewChild("voucherList", { static: false }) voucherList: MultiselectComponent;
	@ViewChild(DsChuaThuTienComponent, { static: false }) dsChuaThuTienComponent: DsChuaThuTienComponent;
	@ViewChild(ChiTietThuTienTamUngComponent, { static: false }) ChiTietThuTienTamUngComponent: ChiTietThuTienTamUngComponent;
	@ViewChild("actionTemplateSTCongNo", { static: true }) actionTemplateSTCongNo: TemplateRef<any>;
	@ViewChild("actionTemplateSubmitCongNo", { static: true }) actionTemplateSubmitCongNo: TemplateRef<any>;
	@ViewChild("tabDanhSachThuTien", { static: false }) tabDanhSachThuTien: TabStripComponent;
	@ViewChild("multiselect", { static: false }) public multiselect: any;

	clearRadio() {
		this.radioThuTien = false;
		this.radioThuTamUng = false;
		this.radioTraLaiBN = false;
		this.radioTraNo = false;
	}

	changeValue(event: any) {
		this.clearRadio();
		switch (event) {
			case this.commonThuTien.ThuTien:
				this.radioThuTien = true;
				break;
			case this.commonThuTien.ThuTamUng:
				this.radioThuTamUng = true;
				break;
			case this.commonThuTien.TraLaiBenhNhan:
				this.radioTraLaiBN = true;
				break;
			case this.commonThuTien.BenhNhanTraTien:
				this.radioTraNo = true;
				break;
		}
		this.selectedValueThuPhi = event;
	}

	ngOnInit() {
		if (window.location.protocol == this.commonThuTien.Http) {
			this.hostingName = this.commonThuTien.Http + "//" + window.location.host;
		} else {
			this.hostingName = this.commonThuTien.Http + "//" + window.location.host;
		}
		this.thongTinBenhNhan = {} as ThongTinBenhNhan;
		this.tongTienBNThanhToan = 0;
		this.selectedValueThuPhi;

		this.loaiThanhToan = this.route.snapshot.queryParams.loaiThanhToan == 1 ? true : false;

		this.idYeuCauTiepNhan = this.route.snapshot.params.id;
		if (this.idYeuCauTiepNhan !== undefined && this.idYeuCauTiepNhan !== null) {
			this.getThongTinYeuCauBenhNhan(this.idYeuCauTiepNhan);
			this.GetThongTheVoucher();
			this.kiemTraYeuCauTiepNhanCoKhuyenMai();
			this.kiemTraSuDungGoi();
			if (this.loaiThanhToan) {
				this.kiemTraDichVuTrongGoiCoBHYT(this.idYeuCauTiepNhan);

			}
		}
		this.dataSourceDanhSachBHTN.data = this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans;
		this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans;
		this.gridBaoHiemTNs = [
			{ Field: "TenCongTy", Title: "Công ty", Width: 200, Sortable: false, },
			{ Field: "CongNo", Title: "CÔNG NỢ", Width: 150, Sortable: true, Template: this.actionTemplateSTCongNo, },
		];

		this.danhSachChuaThanhToan;
		this.thuTien = {} as ThuTien;
		this.checkSeletedTienMat = true;
		this.flagCheckSeletedTienMat = true;
		this.thuTien.NgayThu = new Date();
		this.thuTien.NoiDungThu = this.commonThuTien.NoiDungThu;
		this.defeautSoTien();
		this.changeValue(this.commonThuTien.ThuTien);
		this.getThongTinMienGiam(this.idYeuCauTiepNhan);

		this.thuTien.SoTienCongNo = 0;

		this.chiTienQuyetToan.NgayThu = new Date();
		this.chiTienQuyetToan.NoiDungThu = this.commonThuTien.NoiDungThuGoi;
	}

	onTabSelect(event: any) {
		if (event.title === "Chưa thu") {
			this.titleActive = event.title;
			if (this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans != undefined &&
				this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans != null &&
				this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.length > 0) {
				this.apDungCongNo = true;
			}
		} else if (event.title === "Quyết toán gói marketing") {
			this.titleActive = event.title;
		}
		else {
			this.titleActive = event.title;
			this.tongTienBNThanhToan = 0;
		}
	}

	kiemTraDichVuTrongGoiCoBHYT(id: number) {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			this.apiService.get(`ThuNganNoiTru/KiemTraDichVuTrongGoiCoBHYT?yeuCauTiepNhanId=` + id).subscribe((response: any) => {
				if (response != undefined && response != null) {
					this.ktQTBHYTTheoGoi = response;
				}
			}, (err: ApiError) => {
				err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) :
					this.validationErrors = err.ValidationErrors;
			});
		}
		else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
	}

	danhSachGoiCoBHYT(dsGoiBHYTs: any[]) {
		if (dsGoiBHYTs != undefined && dsGoiBHYTs != null) {
			let traTienBN = dsGoiBHYTs.reduce((sum, item) => sum + item.SoTienQuyetToan, 0);
			this.tongTienBNThanhToan = Math.round(traTienBN);
			this.chiTienQuyetToan.TienMat = Math.round(traTienBN);
		}
		this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus = dsGoiBHYTs;
	}

	luuTamChiPhiThanhCongTrongGoi(isCapNhatThanhCong: any) {
		if (isCapNhatThanhCong) {
			this.getSoTienQuyBHYTTTTrongGoi(this.idYeuCauTiepNhan);
		}
	}

	quyetToanDichVuTrongGoiCoBHYT() {
		if (this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus.length > 0) {
			var kiemTraBHYTXacNhan = this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus
				.filter(dataItem => dataItem.DuocHuongBHYT === true && dataItem.KiemTraBHYTXacNhan !== true);
			if (kiemTraBHYTXacNhan.length > 0) {
				this.notificationService.showError("Vui lòng xác nhận BHYT cho gói");
				return;
			}
		}

		this.showLoadingPopup();
		if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
			var mes = `Bạn chắc chắn muốn quyết toán cho bệnh nhân: <span class="green-text"> ${this.thongTinBenhNhan.HoTen.toUpperCase().bold()} </span>
			           với cố tiền chi là <span class="green-text">${this.tongTienBNThanhToan.toLocaleString("vi-VI").bold()}</span> hay không ?`

			this.dialog.open(ConfirmComponent, {
				disableClose: false,
				width: '400px',
				data: { Title: "Xác nhận", Message: mes }
			}).afterClosed().subscribe(result => {
				if (result === 'Yes') {
					this.chiTienQuyetToan.Id = this.idYeuCauTiepNhan;
					this.apiService.put(`ThuNganNoiTru/QuyetToanDichVuTrongGoiCoBHYT`, this.chiTienQuyetToan).subscribe((data: any) => {
						this.dialog.closeAll();
						if (data.Error != undefined && data.Error != null) {
							this.notificationService.showError(data.Error);
						} else {
							let typeLoai = "";
							let phieuHoanUngIds = "";
							if (data.PhieuQuyetToanId != undefined && data.PhieuQuyetToanId != null && data.PhieuQuyetToanId != 0) {
								typeLoai += "InPhieuThu,InBangKeChiPhiGoiKhamChuaBenhStr";
							}
							if (data.PhieuHoanUngIds != undefined && data.PhieuHoanUngIds != null && data.PhieuHoanUngIds.length > 0) {
								data.PhieuHoanUngIds.forEach(element => {
									phieuHoanUngIds += element + ",";
								});
							}
							this.inPhieuPdf(data.PhieuQuyetToanId, 0, typeLoai, phieuHoanUngIds);
						}

					}, (err: ApiError) => {
						err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) :
							this.validationErrors = err.ValidationErrors;
						this.closeAllDialogs();
					});
				}
				this.closeAllDialogs();
			});
		}
		else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
			this.closeAllDialogs();
		}
	}

	kiemTraYeuCauTiepNhanCoKhuyenMai() {
		this.apiService.get<any>(`ThuNganNoiTru/KiemTraYeuCauTiepNhanCoKhuyenMai?yeuCauTiepNhanId=` + this.idYeuCauTiepNhan)
			.subscribe(ktKhuyenMaiDichVu => {
				this.ktKhuyenMaiDichVu = ktKhuyenMaiDichVu;
			});
	}

	kiemTraThongTinTruocKhiThuTien(): string {
		//Kiểm tra danh sách chua thu đã xác nhận bhyt chưa
		let kiemTraDanhSachXNBHYT = this.danhSachChuaThanhToans.data.
			filter(element => element.DuocHuongBHYT === true &&
				element.KiemTraBHYTXacNhan !== true);

		if (kiemTraDanhSachXNBHYT != undefined && kiemTraDanhSachXNBHYT != null
			&& kiemTraDanhSachXNBHYT.length > 0) {
			return this.commonThuTien.ErrorChuaXacNhanTienBHYT;
		}

		if (this.tongTienBNThanhToan != 0 && !this.flagCheckSeletedTienMat &&
			!this.flagCheckSeletedChuyenKhoan && !this.flagCheckSeletedPos &&
			!this.flagCheckSeletedCongNo) {
			return this.commonThuTien.VuiLongChonHTTT;
		}

		if (this.tongTienBNThanhToan != 0 && this.danhSachChuaThanhToans.data.length == 0) {
			return this.commonThuTien.VuiLongChonDVTT;

		}

		//=================================xác nhận bảo hiểm y tế chưa show message ========================	
		if (this.danhSachChuaThanhToans.data.length > 0) {
			let checkXacNhanBaoHiemYte = this.danhSachChuaThanhToans.data
				.filter(element => element.DuocHuongBHYT === true && element.KiemTraBHYTXacNhan === false);
			if (checkXacNhanBaoHiemYte.length > 0) {
				return this.commonThuTien.ErrorXacNhanBHYT;
			}
		}

		//================================xác nhận bảo hiểm y tế chưa show message ==========================

		if (this.flagCheckSeletedTienMat) {
			if (this.thuTien.TienBenhNhanDua != 0 && this.thuTien.TienBenhNhanDua < this.thuTien.TienMat) {
				return this.commonThuTien.ErrorSoTienBenhNhanDuaKhongDung;
			}
		}
	}

	showThongBaoSoTienBenhNhan(): [boolean, number] {
		let soTienBenhNhanTra = 0;
		if (this.tongTienBNThanhToan !== this.thuTien.SoTienCongNo)
			soTienBenhNhanTra = this.tienPhaiTraBenhNhan;
		else
			soTienBenhNhanTra = this.thuTien.SoTienCongNo;

		let duaLaiBenhNhan = (this.soDuTaiKhoanBenhNhan + this.soTienQuyBHYTTTTrongGoi) - this.tongTienBNThanhToan - this.thuTien.SoTienCongNo > 0;
		if (duaLaiBenhNhan) {
			soTienBenhNhanTra = (this.soDuTaiKhoanBenhNhan + this.soTienQuyBHYTTTTrongGoi) - this.tongTienBNThanhToan - this.thuTien.SoTienCongNo;
		}

		if (this.tongTienBNThanhToan === this.thuTien.SoTienCongNo || duaLaiBenhNhan)
			this.defeautSoTien();

		return [duaLaiBenhNhan, soTienBenhNhanTra]
	}

	thanhToanKemDichVuTrongGoi() {
		this.validationErrors = [];
		this.cdRef.detectChanges();
		let hoten = this.thongTinBenhNhan.HoTen;

		if (this.tongTienBNThanhToan != 0 && this.setDefeautTienMat.length === 0) {
			this.validationErrors.push({
				Message: this.commonThuTien.ShowVuiLongChonHTTT,
				Field: this.commonThuTien.HinhThucThanhToan,
			});
			return true;
		}

		let showThongBaoLoiThuTien = this.kiemTraThongTinTruocKhiThuTien();
		if (showThongBaoLoiThuTien != undefined && showThongBaoLoiThuTien != "") {
			this.notificationService.showError(showThongBaoLoiThuTien);
			return true;
		}

		if (this.thuTien.NoiDungThu == "") {
			this.validationErrors.push({
				Message: this.commonThuTien.NoiDungThuMessage,
				Field: this.commonThuTien.NoiDungThuField,
			});
			return true;
		}

		let [duaLaiBenhNhan, soTienBenhNhanTra] = this.showThongBaoSoTienBenhNhan();

		if (this.confrim != null) {
			this.dialog.closeAll();
			this.confrim = null;
		}

		this.confrim = this.dialog
			.open(ThongTinDichVuChuaDuocXacNhanComponent, {
				disableClose: true,
				width: "800px",
				data: { soTienBenhNhanTra, hoten, duaLaiBenhNhan },
			})
			.afterClosed()
			.subscribe((result) => {
				if (result == "Yes") {

					this.showLoadingPopup();

					//========================XỬ LÝ CÔNG NỢ=================================

					//========================START KIỂM TRA TOA THUỐC==========================
					let kiemTraToaThuoc = false;
					for (let index = 0; index < this.danhSachChuaThanhToans.data.length; index++) {
						const element = this.danhSachChuaThanhToans.data[index].Nhom.indexOf(":");
						if (element > 0) {
							kiemTraToaThuoc = true;
						}
					}

					this.danhSachCongNos = [];
					if (this.dataSourceDanhSachBHTN.data != null) {
						this.dataSourceDanhSachBHTN.data.forEach((element) => {
							let danhSachCongNo = {} as DanhSachCongNo;
							if (element.SoTienCongNo !== null && element.SoTienCongNo !== undefined) {
								danhSachCongNo.CongTyCongNoId = element.Id;
								danhSachCongNo.SoTienCongNo = element.SoTienCongNo;
								this.danhSachCongNos.push(danhSachCongNo);
							}
						});
						this.thuTien.DanhSachCongNos = this.danhSachCongNos;
					}

					if (this.danhSachChuaThanhToans.data != null) {
						this.thuTien.DanhSachChiPhiKhamChuaBenhDaChons = this.danhSachChuaThanhToans.data;
					}

					this.thuTien.Id = this.idYeuCauTiepNhan;
					this.apiService.post<any>("ThuNganNoiTru/ThuPhiNoiTruVaQuyetToanDichVuTrongGoi", this.thuTien).subscribe(
						(ketQuaKhiThanhToan) => {
							this.dataSourceChanged = true;
							this.notificationService.showSuccess(this.commonThuTien.ThuTienThanhCong);
							this.tongTienBNThanhToan = this.tienPhaiTraBenhNhan = 0;
							this.setDefeautTienMat = [1];
							this.defeautSoTien();

							//====================checked res thành công ==============================================
							if (ketQuaKhiThanhToan.PhieuThuIds != undefined && ketQuaKhiThanhToan.PhieuThuIds != null &&
								ketQuaKhiThanhToan.PhieuThuIds.length > 0) {

								this.taiKhoanThuId = ketQuaKhiThanhToan.PhieuThuId;
								let phieuHoanUngId = 0;

								let phieuHoanUngIds = "";
								let taiKhoanThus = "";

								//===================Thông tin Phiếu thu,Phiếu chi,Bảng kê================							
								this.loadSoTienQuyBHYTVaTamUng(this.idYeuCauTiepNhan);
								//===================Tắt loading của thu ngân hoàn thành==================

								this.dialog.open(XacNhanPhieuThuComponent, {
									width: "400px",
									disableClose: true,
									data: {
										kiemTraToaThuoc,
										phieuHoanUngId,
									},
								})
									.afterClosed()
									.subscribe((result) => {
										if (result != null && result.length != 0) {
											let typeLoai = "";
											result.forEach((loaiPhieu) => {
												switch (loaiPhieu) {
													case this.commonThuTien.InPhieuThu:
														typeLoai += "InPhieuThu,";
														break;
													case this.commonThuTien.BangKeThuoc:
														typeLoai += "BangKeThuoc,";
														break;
													case this.commonThuTien.InPhieuHoanUng:
														typeLoai += "InPhieuHoanUng,";
														break;
													case this.commonThuTien.InCPKhamNgoaiTru:
														typeLoai += "InCPKhamNoiTru";
														break;
												}
											});
											//typeLoai += "InCPKhamNoiTru,InBangKeChiPhiGoiKhamChuaBenhStr"

											if (ketQuaKhiThanhToan.PhieuThuIds != undefined && ketQuaKhiThanhToan.PhieuThuIds != null &&
												ketQuaKhiThanhToan.PhieuThuIds.length > 0) {
												ketQuaKhiThanhToan.PhieuThuIds.forEach(element => {
													taiKhoanThus += element + ",";
												});
											}

											if (ketQuaKhiThanhToan.PhieuHoanUngIds != undefined && ketQuaKhiThanhToan.PhieuHoanUngIds != null &&
												ketQuaKhiThanhToan.PhieuHoanUngIds.length > 0) {
												ketQuaKhiThanhToan.PhieuHoanUngIds.forEach(element => {
													phieuHoanUngIds += element + ",";
												});
											}
											this.inPhieuPhieuThuVaThuGoiMarketingPdf(taiKhoanThus, 0, typeLoai, phieuHoanUngIds);
										} else {
											this.ngOnInit();
										}
										this.showLoadingPopup();
									});
								//====================Thông tin Phiếu thu,Phiếu chi,Bảng kê===============
							}
						},
						(err: ApiError) => {
							this.validationErrors = err.ValidationErrors;
							if (err.Message != "Validation Failed") {
								this.notificationService.showError(err.Message);
							}
							this.closeAllDialogs();
						}
					);
				}
			});
	}

	inPhieuPhieuThuVaThuGoiMarketingPdf(taiKhoanThuId: string, taiKhoanChiId: any, loaiTypes: any, phieuHoanUngIds: string) {

		let arrFileUrl: Array<any> = [];
		let arrFilePdf: Array<any> = [];
		let hostingName = window.location.protocol + '//' + window.location.host;

		this.showLoadingPopup();


		this.apiService.postExportPdf<any>("ThuNganNoiTru/XemNhieuPhieuThu?hostingName=" + hostingName + "&taiKhoanThuIds=" + taiKhoanThuId + "&phieuHoanUngIds=" + phieuHoanUngIds+ "&loaiTypes=" + loaiTypes)
			.subscribe(
				(file) => {
					let newBlob = new Blob([file], { type: "application/pdf" });
					let datalocalURL = window.URL.createObjectURL(newBlob);

					arrFileUrl.push(datalocalURL);
					arrFilePdf.push(file);

					if (arrFilePdf.length > 0) {
						this.dialog
							.open(CommonPdfPopupComponent, {
								disableClose: false,
								width: "1000px",
								data: { arrFileUrl, arrFilePdf },
							})
							.afterClosed()
							.subscribe((result) => {
								this.router.navigate(["/danh-sach-thu-tien-noi-tru"]);
								this.closeAllDialogs();
							});
					} else {
						this.notificationService.showError("Không có thông tin.");
						this.closeAllDialogs();
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

	dichVuKhuyenMai() {
		this.showLoadingPopup();
		this.dialog.open(DichVuKhuyenMaiKemTheoGoi, {
			disableClose: true,
			width: "1400px",
			data: { benhNhanId: this.thongTinBenhNhan.BenhNhanId, yeuCauTiepNhanId: this.idYeuCauTiepNhan },
		}).afterClosed().subscribe((res) => {
			this.dataSourceChanged = true;
			this.closeAllDialogs();
		});
	}

	danhSachChuaThanhToan(data: any[]) {

		this.danhSachChuaThanhToans.data = data;
		this.danhSachChuaThanhToans.HoTen = this.thongTinBenhNhan.HoTen;
		let benhNhanPhaiTra = 0;

		if (this.danhSachChuaThanhToans != undefined && this.danhSachChuaThanhToans != null) {
			benhNhanPhaiTra = this.danhSachChuaThanhToans.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0);
		}


		//Trường hợp tính cho tiền thanh toán người bệnh  
		this.tongTienBNThanhToan = Math.round(benhNhanPhaiTra + 0.0000001);

		//reset số tiền công nợ vì khi mà KH change grid giá trị sẽ khác.
		this.thuTien.SoTienCongNo = 0;

		//Kiểm tra số tiền đã có sư thay đổi hay không 
		//this.loadSoTienQuyBHYTVaTamUng(this.idYeuCauTiepNhan);	

		//Công thức bind đầu tiên tính xem số tiền trả lại bệnh nhân hay thu tiền bệnh nhân	(run first test)	
		//tienPhaiTraBenhNhan biến này đang đặt sai tên phải (số tiền cần thu bên nhân)
		let kiemTraSoTien = (this.soDuTaiKhoanBenhNhan + this.soTienQuyBHYTTTTrongGoi) - this.tongTienBNThanhToan - this.thuTien.SoTienCongNo;

		//Nếu kiemTraSoTien > 0 số tiền trả lại bệnh nhân ngược lại số tiền thu của bệnh nhân.
		this.isTienBNTraOrTraBN = kiemTraSoTien <= 0;

		if (this.isTienBNTraOrTraBN) {
			this.tienPhaiTraBenhNhan = (this.tongTienBNThanhToan - this.thuTien.SoTienCongNo) - this.soDuTaiKhoanBenhNhan - this.soTienQuyBHYTTTTrongGoi;
			this.clearDataSetDefaut((this.tongTienBNThanhToan - this.thuTien.SoTienCongNo) - this.soDuTaiKhoanBenhNhan - this.soTienQuyBHYTTTTrongGoi);
		}
	}

	clearDataSetDefaut(soTien: any) {
		this.clearHinhThucThanhToan();
		this.hinhThucThanhToan[0];
		this.setDefeautTienMat = [1];
		this.defeautSoTien();
		this.checkSeletedTienMat = true;
		this.flagCheckSeletedTienMat = true;
		this.thuTien.TienMat = Math.round(soTien);
		if (this.thuTien.TienBenhNhanDua > 0) {
			this.thuTien.TienTraLaiBenhNhan = this.thuTien.TienBenhNhanDua - this.thuTien.TienMat;
		}
	}

	loadingThanhCong(loading: any) {
		if (loading) {
			this.dialog.closeAll();
		}
	}

	afterApDungHuyThanhCong(ev: any) {
		if (ev) {
			this.loadSoTienQuyBHYTVaTamUng(this.idYeuCauTiepNhan);
		}
	}

	onChangeLoaiMg(value: any) {
		switch (value) {
			case 1:
				this.checkedMGTGiaTri = true;
				this.checkedMGTTiLe = false;
				this.disabledSoTienMG = false;
				this.disabledTiLeMG = true;
				this.checkHiddenSoTienConLai = false;
				break;
			case 2:
				this.checkedMGTGiaTri = false;
				this.checkedMGTTiLe = true;
				this.disabledSoTienMG = true;
				this.disabledTiLeMG = false;
				this.checkHiddenSoTienConLai = true;
				break;
		}
		this.thongTinMienGiamThem.SoTienMG = 0;
		this.thongTinMienGiamThem.TiLeMienGiam = 0;
	}

	huyThanhCong(daHuy: boolean) {
		if (daHuy) {
			var loaiThanhToan = this.route.snapshot.queryParams.loaiThanhToan;
			if (loaiThanhToan === "1") {
				this.loaiThanhToan = true;
				this.apCapNhatThanhToan = true;
				this.apDungCongNo = true;

				this.loadSoTienQuyBHYTVaTamUng(this.idYeuCauTiepNhan);
				this.kiemTraDichVuTrongGoiCoBHYT(this.idYeuCauTiepNhan);

				this.dataSourceChangedHuyThanhToan = true;
				this.dataSourceChanged = true;

				window.location.href = "/danh-sach-thu-tien-noi-tru/chi-tiet-cho-quyet-toan/" + this.idYeuCauTiepNhan + "?loaiThanhToan=1";
			} else {
				window.location.href = "/danh-sach-thu-tien-noi-tru/chi-tiet-cho-quyet-toan/" + this.idYeuCauTiepNhan + "?loaiThanhToan=2";
			}

		}
	}

	capnhatThanhCong(yeuCauTiepNhanId: number) {
		this.loaiThanhToan = true;
		this.apCapNhatThanhToan = true;
		this.apDungCongNo = true;
		this.router.navigateByUrl("/danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/" + yeuCauTiepNhanId + "?loaiThanhToan=1");
	}

	async getThongTinYeuCauBenhNhan(id) {
		let responseThongTinBenhNhan = await this.baseService.getById<any>(id).toPromise();
		this.thongTinBenhNhan = responseThongTinBenhNhan;
		await this.loadSoTienQuyBHYTVaTamUng(this.idYeuCauTiepNhan);
		if (responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans != undefined &&
			responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans != null &&
			responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.length > 0) {
			const isDoneBindCongTyBHTN = this.bindCongTyBHTNBenhNhan(responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans);
			if (isDoneBindCongTyBHTN) {
				this.kiemTraThongTinBaoHiemTN = true;
			}
		}
	}

	bindCongTyBHTNBenhNhan(thongTinCongTyBaoHiemTuNhans: any): boolean {
		this.dataSourceDanhSachBHTN.data = thongTinCongTyBaoHiemTuNhans;
		this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.forEach((element) => {
			var congNoItem = new ThongTinCongTyBaoHiemTuNhans();
			congNoItem.Id = element.Id;
			congNoItem.SoTienCongNo = element.SoTienCongNo;
			congNoItem.TenCongTy = element.TenCongTy;
			this.thongTinBenhNhantam.push(congNoItem);
		});
		return true;
	}

	ngAfterViewChecked() {
		this.cdRef.detectChanges();
	}

	public totalTienCongNo(field: any) {
		switch (field) {
			case "SoTienCongNo":
				//  this.setLastItem(4);
				return this.dataSourceDanhSachBHTN.data.reduce((sum, item) => sum + item.SoTienCongNo, 0);
		}
	}

	getSoDuTaiKhoanBenhNhan(id: number) {
		this.apiService.get<number>("ThuNganNoiTru/SoDuTaiKhoanTamUngBenhNhan/" + id).subscribe((resultData) => {
			if (resultData !== null && resultData !== undefined) {
				this.soDuTaiKhoanBenhNhan = resultData;
			}
		});
	}

	getSoTienQuyBHYTTTTrongGoi(id: number) {
		this.apiService.get<number>("ThuNganNoiTru/SoTienQuyBHYTTTTrongGoi/" + id).subscribe((resultData) => {
			if (resultData !== null && resultData !== undefined) {
				this.soTienQuyBHYTTTTrongGoi = resultData;
			}
		});
	}

	loadSoTienQuyBHYTVaTamUng(yeuCauTiepNhanId: number) {
		this.getSoDuTaiKhoanBenhNhan(yeuCauTiepNhanId);
		this.getSoTienQuyBHYTTTTrongGoi(yeuCauTiepNhanId);
		this.kiemTraCoPhieuThuCongNo(yeuCauTiepNhanId);
	}

	kiemTraCoPhieuThuCongNo(event: any) {
		this.apiService.get<any>("ThuNganNoiTru/KiemTraCoPhieuThuCongNo/" + this.idYeuCauTiepNhan).subscribe(
			(resultData) => {
				this.ktCoPhieuThuCongNo = resultData;
			},
			() => { }
		);
	}

	kiemTraSuDungGoi() {
		this.apiService.get<any>("ThuNganNoiTru/KiemTraSuDungGoi/" + this.idYeuCauTiepNhan).subscribe((resultData) => {
			if (resultData) {
				this.ktSuDungGoi = resultData;
			}
		});
	}

	chiTietGoiMarketing() {
		if (this.ktSuDungGoi != undefined && this.ktSuDungGoi != null) {
			this.router.navigateByUrl("/danh-sach-thu-goi-marketing/chi-tiet-cho-quyet-toan-marketing/" + this.ktSuDungGoi);
		}
	}

	uploadFileDone(tapTin: any) {
		this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam = tapTin;
		if (!(this.cdRef as ViewRef).destroyed) {
			this.cdRef.detectChanges();
		}
		if (tapTin != null) {
			this.thuNganValidationErrors = [];
		}
		if (this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam != null) {
			var thongTinMGThem = {
				IdYeuCauTiepNhan: this.idYeuCauTiepNhan,
				TaiLieuDinhKem: this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam,
			};
			this.apiService.post<any>("ThuNgan/ThemThongTinMiemGiamThemVaVoucher", thongTinMGThem).subscribe(
				(resultData) => {
					if (resultData) {
						this.cdRef.detectChanges();
					}
					this.notificationService.showSuccess(this.commonThuTien.ApDungGiayMiemGiamThanhCong);
				},
				() => { }
			);
			this.getThongTinMienGiam(this.idYeuCauTiepNhan);
		}
	}

	removeEvent(event: any) {
		var thongTinMGThem = {
			IdYeuCauTiepNhan: this.idYeuCauTiepNhan,
			TaiLieuDinhKem: this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam,
		};
		this.apiService.post<any>("ThuNgan/XoaThongTinMienGiam", thongTinMGThem).subscribe(
			(resultData) => {
				if (resultData) {
					this.getThongTinMienGiam(this.idYeuCauTiepNhan);
				}
				this.notificationService.showSuccess(this.commonThuTien.XoaMiemGiamThanhCong);
			},
			() => { }
		);
	}

	onKey(event: any) {
		if (event.keyCode === 13) {
		}
	}

	onKeyTienMatonKeyTienMat() {
		this.thuTien.TienTraLaiBenhNhan = 0;
		this.thuTien.TienBenhNhanDua = 0;
	}

	changeValueTienBenhNhanDua(ev: any) {
		this.thuTien.TienTraLaiBenhNhan = this.thuTien.TienBenhNhanDua - this.thuTien.TienMat;
		if (this.thuTien.TienTraLaiBenhNhan < 0) {
			this.thuTien.TienTraLaiBenhNhan = 0;
		}
	}

	tienTrongTaiKhoan(soDuTK: number) {
		this.soDuTaiKhoanBenhNhan = soDuTK;
		this.dataSourceChanged = true;
		this.dataSourceChangedTamUng = true;
	}

	tienTrongTaiKhoanTralaiBN(soDuTK: number) {
		this.soDuTaiKhoanBenhNhan = soDuTK;
	}

	tienTrongTaiKhoanBNTraTien(soDuTK: number) {
		this.soDuTaiKhoanBenhNhan = soDuTK;
	}

	thuTienBenhNhan() {
		this.validationErrors = [];
		this.cdRef.detectChanges();

		if (this.tongTienBNThanhToan != 0 && this.setDefeautTienMat.length === 0) {
			this.validationErrors.push({
				Message: this.commonThuTien.ShowVuiLongChonHTTT,
				Field: this.commonThuTien.HinhThucThanhToan,
			});
			return true;
		}

		let showThongBaoLoiThuTien = this.kiemTraThongTinTruocKhiThuTien();
		if (showThongBaoLoiThuTien != undefined && showThongBaoLoiThuTien != "") {
			this.notificationService.showError(showThongBaoLoiThuTien);
			return true;
		}

		if (this.thuTien.NoiDungThu == "") {
			this.validationErrors.push({
				Message: this.commonThuTien.NoiDungThuMessage,
				Field: this.commonThuTien.NoiDungThuField,
			});
			return true;
		}

		let [duaLaiBenhNhan, soTienBenhNhanTra] = this.showThongBaoSoTienBenhNhan();
		let hoten = this.thongTinBenhNhan.HoTen;

		if (this.confrim != null) {
			this.dialog.closeAll();
			this.confrim = null;
		}

		this.confrim = this.dialog
			.open(ThongTinDichVuChuaDuocXacNhanComponent, {
				disableClose: true,
				width: "800px",
				data: { soTienBenhNhanTra, hoten, duaLaiBenhNhan },
			})
			.afterClosed()
			.subscribe((result) => {
				if (result == "Yes") {
					//========================XỬ LÝ CÔNG NỢ=================================

					//========================START KIỂM TRA TOA THUỐC==========================
					let kiemTraToaThuoc = false;
					for (let index = 0; index < this.danhSachChuaThanhToans.data.length; index++) {
						const element = this.danhSachChuaThanhToans.data[index].Nhom.indexOf(":");
						if (element > 0) {
							kiemTraToaThuoc = true;
						}
					}
					//======================================================================
					//========================xử lý công nợ=================================
					this.danhSachCongNos = [];
					if (this.dataSourceDanhSachBHTN.data != null) {
						this.dataSourceDanhSachBHTN.data.forEach((element) => {
							let danhSachCongNo = {} as DanhSachCongNo;
							if (element.SoTienCongNo !== null && element.SoTienCongNo !== undefined) {
								danhSachCongNo.CongTyCongNoId = element.Id;
								danhSachCongNo.SoTienCongNo = element.SoTienCongNo;
								this.danhSachCongNos.push(danhSachCongNo);
							}
						});
						this.thuTien.DanhSachCongNos = this.danhSachCongNos;
					}
					//========================END KIỂM TRA TOA THUỐC============================
					this.danhSachCongNos = [];
					if (this.dataSourceDanhSachBHTN.data != null) {
						this.dataSourceDanhSachBHTN.data.forEach((element) => {
							let danhSachCongNo = {} as DanhSachCongNo;
							if (element.SoTienCongNo !== null && element.SoTienCongNo !== undefined) {
								danhSachCongNo.CongTyCongNoId = element.Id;
								danhSachCongNo.SoTienCongNo = element.SoTienCongNo;
								this.danhSachCongNos.push(danhSachCongNo);
							}
						});
						this.thuTien.DanhSachCongNos = this.danhSachCongNos;
					}
					this.thuTien.Id = this.idYeuCauTiepNhan;
					//==========================END XỬ LÝ CÔNG NỢ============================================
					if (this.danhSachChuaThanhToans.data != null) {
						this.thuTien.DanhSachChiPhiKhamChuaBenhDaChons = this.danhSachChuaThanhToans.data;
					}
					this.apiService.post<any>("ThuNganNoiTru/ThuTienPhiBenhNhan", this.thuTien).subscribe(
						(ketQuaKhiThanhToan) => {
							this.dataSourceChanged = true;
							this.notificationService.showSuccess(this.commonThuTien.ThuTienThanhCong);
							this.tongTienBNThanhToan = this.tienPhaiTraBenhNhan = 0;
							this.setDefeautTienMat = [1];
							this.defeautSoTien();
							//====================checked res thành công ==============================================
							if (ketQuaKhiThanhToan != undefined && ketQuaKhiThanhToan != null) {
								this.taiKhoanThuId = ketQuaKhiThanhToan.PhieuThuId;
								let phieuHoanUngId = ketQuaKhiThanhToan.PhieuHoanUngId;
								//===================Thông tin Phiếu thu,Phiếu chi,Bảng kê================							
								this.loadSoTienQuyBHYTVaTamUng(this.idYeuCauTiepNhan);
								//===================Tắt loading của thu ngân hoàn thành==================
								this.dialog
									.open(XacNhanPhieuThuComponent, {
										width: "400px",
										disableClose: true,
										data: {
											kiemTraToaThuoc,
											phieuHoanUngId,
										},
									})
									.afterClosed()
									.subscribe((result) => {
										if (result != null && result.length != 0) {
											let typeLoai = "";
											result.forEach((loaiPhieu) => {
												switch (loaiPhieu) {
													case this.commonThuTien.InPhieuThu:
														typeLoai += "InPhieuThu,";
														break;
													case this.commonThuTien.BangKeThuoc:
														typeLoai += "BangKeThuoc,";
														break;
													case this.commonThuTien.InPhieuHoanUng:
														typeLoai += "InPhieuHoanUng,";
														break;
												}
											});
											typeLoai += "InCPKhamNoiTru"
											this.inPhieuPdf(this.taiKhoanThuId, phieuHoanUngId, typeLoai, "");
										} else {
											this.ngOnInit();
										}
									});
								//====================Thông tin Phiếu thu,Phiếu chi,Bảng kê===============
							}
						},
						(err: ApiError) => {
							this.validationErrors = err.ValidationErrors;
							if (err.Message != "Validation Failed") {
								this.notificationService.showError(err.Message);
							}
						}
					);
				}
			});
		// };
	}

	inPhieuPdf(taiKhoanThuId: any, taiKhoanChiId: any, loaiTypes: any, phieuHoanUngIds: string) {
		this.showLoadingPopup();

		let idYeuCauTiepNhan = this.idYeuCauTiepNhan;
		this.dialog
			.open(ThongTinPhieuNoiTruPopupComponent, {
				disableClose: false,
				width: "1000px",
				data: { taiKhoanThuId, taiKhoanChiId, idYeuCauTiepNhan, loaiTypes, phieuHoanUngIds },
			})
			.afterClosed()
			.subscribe((result) => {
				this.router.navigate(["/danh-sach-thu-tien-noi-tru"]);
				this.closeAllDialogs();
			});
	}

	async xemTaiLieu(dataItem) {
		const params = new HttpParams({
			fromObject: {
				tenGuid: dataItem.TenGuid,
				duongDan: dataItem.DuongDan,
			},
		});
		this.apiService.get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params).subscribe((resp) => {
			if (resp) {
				if (dataItem.TenGuid.indexOf(".pdf") != -1 || dataItem.TenGuid.indexOf(".PDF") != -1) {
					this.dialog.open(ViewImagePdfComponent, {
						disableClose: false,
						width: "1000px",
						height: "600px",
						data: {
							Type: "PDF",
							Title: "Xem tài liệu",
							Description: resp.MoTa !== null ? resp.MoTa : "",
							Src: resp,
						},
					});
				} else {
					this.dialog.open(ViewImagePdfComponent, {
						disableClose: false,
						width: "1000px",
						height: "600px",
						data: {
							Type: "Image",
							Title: "Xem ảnh",
							Description: resp.MoTa !== null ? resp.MoTa : "",
							Src: resp,
						},
					});
				}
			}
		});
	}

	defeautSoTien() {
		this.thuTien.TienMat = 0;
		this.thuTien.POS = 0;
		this.thuTien.ChuyenKhoan = 0;
		this.thuTien.TienTraLaiBenhNhan = 0;
		this.thuTien.TienBenhNhanDua = 0;
	}

	modelChangeTienCongNo(event: any) {
		let kiemTraSoTien = (this.soDuTaiKhoanBenhNhan + this.soTienQuyBHYTTTTrongGoi) - this.tongTienBNThanhToan - event;
		this.isTienBNTraOrTraBN = kiemTraSoTien <= 0;
		if (this.isTienBNTraOrTraBN) {
			this.tienPhaiTraBenhNhan = (this.tongTienBNThanhToan - event) - this.soDuTaiKhoanBenhNhan - this.soTienQuyBHYTTTTrongGoi;
			this.clearDataSetDefaut((this.tongTienBNThanhToan - event) - this.soDuTaiKhoanBenhNhan - this.soTienQuyBHYTTTTrongGoi);
		}
	}

	modelChangeCongNo(event: any, type: any) {
		let total = this.tienPhaiTraBenhNhan - this.thuTien.TienMat - this.thuTien.ChuyenKhoan - this.thuTien.POS;
		this.selectMoneyTienPos = [total, 0];
		this.thuTien.SoTienCongNo = event;

		this.valueChangeInput(type);
	}

	modelChangePos(event: any, type: any) {
		let total = this.tienPhaiTraBenhNhan - this.thuTien.TienMat - this.thuTien.ChuyenKhoan;
		this.selectMoneyTienPos = [total, 0];
		this.thuTien.POS = event;

		this.valueChangeInput(type);
	}

	modelChangeChuyenKhoan(event: any, type: any) {
		let total = this.tienPhaiTraBenhNhan - this.thuTien.TienMat - this.thuTien.POS;
		this.selectMoneyTienChuyenKhoan = [total, 0];
		this.thuTien.ChuyenKhoan = event;

		this.valueChangeInput(type);
	}

	modelChangeTienMat(event: any, type: any) {
		let total = this.tienPhaiTraBenhNhan - this.thuTien.ChuyenKhoan - this.thuTien.POS;
		this.selectMoneyTienMat = [total, 0];

		this.thuTien.TienTraLaiBenhNhan = this.thuTien.TienBenhNhanDua - this.thuTien.TienMat;
		if (this.thuTien.TienTraLaiBenhNhan < 0) {
			this.thuTien.TienTraLaiBenhNhan = 0;
		}

		this.thuTien.TienMat = event;
		this.valueChangeInput(type);
	}

	modelChangeTienBNDua(ev: any) {
		this.selectMoneyTienBNDua = [this.tienPhaiTraBenhNhan, 100000000000];
		this.thuTien.TienTraLaiBenhNhan = this.thuTien.TienBenhNhanDua - this.thuTien.TienMat;
		if (this.thuTien.TienTraLaiBenhNhan < 0) {
			this.thuTien.TienTraLaiBenhNhan = 0;
		}
	}

	valueChangeInput(type: number) {
		if (this.thuTien.TienTraLaiBenhNhan < 0) {
			this.thuTien.TienTraLaiBenhNhan = 0;
		}
		this.hinhThucThanhToan.forEach((item) => {
			if (item.KeyId == type) {
				item.Change = true;
			}
		});
		var itemNotChanges = this.hinhThucThanhToan.filter((o) => o.Selected == true && o.Change == false);
		if (itemNotChanges.length == 1) {
			this.changeSoTienWhenInput(itemNotChanges[0].KeyId);
		} else {
			if (itemNotChanges.length == 0 && this.hinhThucThanhToan.filter((o) => o.Selected == true).length == 2) {
				var items = this.hinhThucThanhToan.filter((o) => o.Selected == true && o.KeyId != type);
				this.changeSoTienWhenInput(items[0].KeyId);
			}
		}
		if (this.thuTien.TienMat + this.thuTien.ChuyenKhoan + this.thuTien.POS != this.tienPhaiTraBenhNhan) {
			this.showCanhBaoSoTienNhap = true;
		} else {
			this.showCanhBaoSoTienNhap = false;
		}
		this.changeTienTraLaiBenhNhan();
	}

	changeSoTienWhenInput(item: any) {
		switch (item) {
			case this.commonThuTien.TienMat:
				this.thuTien.TienMat = this.tienPhaiTraBenhNhan - this.thuTien.ChuyenKhoan - this.thuTien.POS < 0 ? 0 : this.tienPhaiTraBenhNhan - this.thuTien.ChuyenKhoan - this.thuTien.POS;
				break;
			case this.commonThuTien.ChuyenKhoan:
				this.thuTien.ChuyenKhoan = this.tienPhaiTraBenhNhan - this.thuTien.TienMat - this.thuTien.POS < 0 ? 0 : this.tienPhaiTraBenhNhan - this.thuTien.TienMat - this.thuTien.POS;
				break;
			case this.commonThuTien.Pos:
				this.thuTien.POS = this.tienPhaiTraBenhNhan - this.thuTien.ChuyenKhoan - this.thuTien.TienMat < 0 ? 0 : this.tienPhaiTraBenhNhan - this.thuTien.ChuyenKhoan - this.thuTien.TienMat;
				break;
		}
	}

	selectionChangeHinhThucThanhToan(event: any) {
		this.clearHinhThucThanhToan();
		this.defeautSoTien();
		this.showCanhBaoSoTienNhap = false;
		if (event != null && event.length === 1) {
			this.changeSoTienWhenInput(event[0].KeyId);
		}

		event.forEach((element) => {
			switch (element) {
				case this.commonThuTien.TienMat:
					this.flagCheckSeletedTienMat = true;
					break;
				case this.commonThuTien.ChuyenKhoan:
					this.flagCheckSeletedChuyenKhoan = true;
					break;
				case this.commonThuTien.Pos:
					this.flagCheckSeletedPos = true;
					break;
			}
		});

		this.hinhThucThanhToan.forEach((item) => {
			item.Change = false;
		});

		//Cập nhật trạng thái chọn
		this.hinhThucThanhToan.forEach((item) => {
			if (event.filter((o) => o == item.KeyId).length > 0) {
				item.Selected = true;
				//Nếu chỉ chọn 1 loại HTTT thì số tiền = số tiền phải thu
				if (event.length == 1) {
					switch (item.KeyId) {
						case this.commonThuTien.TienMat:
							this.thuTien.TienMat = this.tienPhaiTraBenhNhan;
							break;
						case this.commonThuTien.ChuyenKhoan:
							this.thuTien.ChuyenKhoan = this.tienPhaiTraBenhNhan;
							break;
						case this.commonThuTien.Pos:
							this.thuTien.POS = this.tienPhaiTraBenhNhan;
							break;
					}
				}
			} else {
				item.Selected = false;
			}
		});
		this.cdRef.detectChanges();
	}

	clearHinhThucThanhToan() {
		this.flagCheckSeletedTienMat = false;
		this.flagCheckSeletedChuyenKhoan = false;
		this.flagCheckSeletedPos = false;
		this.flagCheckSeletedCongNo = false;

		this.checkSeletedTienMat = false;
		this.checkSeletedChuyenKhoan = false;
		this.checkSeletedPos = false;
		this.checkSeletedCongNo = false;
	}

	changeTienTraLaiBenhNhan() {
		if (this.thuTien.TienBenhNhanDua > this.thuTien.TienMat) {
			this.thuTien.TienTraLaiBenhNhan = this.thuTien.TienBenhNhanDua - this.thuTien.TienMat;
		} else {
			this.thuTien.TienTraLaiBenhNhan = 0;
		}
	}

	soTienBenhNhanCanThanhToan(): number {
		let totalBHYT = 0;
		let totalThanhTien = 0;
		if (this.danhSachChuaThanhToans.data != undefined && this.danhSachChuaThanhToans.data != null) {
			this.danhSachChuaThanhToans.data.forEach(element => {
				if (element.CheckedDefault === true) {
					totalThanhTien += element.ThanhTien;
					totalBHYT += element.BHYTThanhToan;
				}
			});
		}
		return (Math.round((totalThanhTien - totalBHYT) * 100) / 100);
	}

	soTienBenhNhanCanThanhToanTrongGoi(): number {
		let totalBHYT = 0;
		let totalThanhTien = 0;
		if (this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus != undefined &&
			this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus != null) {
			this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus.forEach(element => {
				if (element.CheckedDefault === true) {
					totalThanhTien += element.ThanhTien;
					totalBHYT += element.BHYTThanhToan;
				}
			});
		}
		return (Math.round((totalThanhTien - totalBHYT) * 100) / 100);
	}

	apDungCongNoChoPhanChuaThu(soTienCongApDungCongTy, id) {
		this.soTienCongNoTam = soTienCongApDungCongTy;
		let soTienNBCanThanhToan = this.soTienBenhNhanCanThanhToan();
		if (soTienCongApDungCongTy >= 0) {
			if (this.danhSachChuaThanhToans.data.length > 0 &&
				soTienCongApDungCongTy > soTienNBCanThanhToan) {
				this.notificationService.showError(this.commonThuTien.ApDungCongNoKhongLonSoTienThanhToanDichVu);
			}
			else {
				this.apDungCongNo = true;
				this.apDungMiemGiam = false;

				for (const tam of this.thongTinBenhNhantam) {
					if (tam.Id === id) {
						this.position = this.thongTinBenhNhantam.indexOf(tam);
						tam.SoTienCongNo = soTienCongApDungCongTy;
					}
				}

				this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.filter((e) => (e.SoTienCongNo = 0));
				this.notificationService.showSuccess(this.commonThuTien.ApDungCongNoThanhCong);
			}
		}
	}

	apDungCongNoChoPhanThuTrongGoi(soTienCongApDungCongTy, id) {
		this.soTienCongNoTam = soTienCongApDungCongTy;
		let soTienNBCanThanhToan = this.soTienBenhNhanCanThanhToanTrongGoi();
		if (soTienCongApDungCongTy >= 0) {
			if (this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus.length > 0 &&
				soTienCongApDungCongTy > soTienNBCanThanhToan) {
				this.notificationService.showError(this.commonThuTien.ApDungCongNoKhongLonSoTienThanhToanDichVu);
			}
			else {
				this.apDungCongNoTrongGoi = true;
				for (const tam of this.thongTinBenhNhantam) {
					if (tam.Id === id) {
						this.position = this.thongTinBenhNhantam.indexOf(tam);
						tam.SoTienCongNo = soTienCongApDungCongTy;
					}
				}

				this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.filter((e) => (e.SoTienCongNo = 0));
				this.notificationService.showSuccess(this.commonThuTien.ApDungCongNoThanhCong);
			}
		}
	}

	apDungCongNoCongTyBHTN(soTienCongApDungCongTy: any, id: number) {
		if (this.titleActive === "Chưa thu") {
			this.apDungCongNoChoPhanChuaThu(soTienCongApDungCongTy, id);
		}
		if (this.titleActive === "Quyết toán gói marketing") {
			this.apDungCongNoChoPhanThuTrongGoi(soTienCongApDungCongTy, id);
		}
	}

	onKeyCongNo(event: any, soTienCongNo: any, id: number) {
		if (event.key == "Enter") {
			this.apDungCongNoCongTyBHTN(soTienCongNo, id);
		}
	}

	kiemTraDSCongNo(check: any) {
		if (check) {
			this.getThongTinMienGiam(this.idYeuCauTiepNhan);
			this.apDungMiemGiam = true;
		}
	}

	getThongTinMienGiam(id: number) {
		this.apiService.get<any>("ThuNgan/GetThongTinMienGiam?yeuCauTiepNhanId=" + id).subscribe((resultData) => {
			if (resultData !== null && resultData !== undefined) {
				this.flagShowDoiTuongUuDaiOrVoucher = true;
				if (resultData.ThongTinMienGiamTheoDoiTuongUuDaiVo != null || resultData.ThongTinMienGiamTheoDoiTuongUuDaiVo != undefined) {
					this.flagShowDoiTuongUuDai = true;
					this.flagApDung = true;
					this.flagShowDoiTuongUuDaiOrVoucher = false;
					this.thongTinMienGiamTheoDoiTuongUuDai = {
						CongTyUudai: resultData.ThongTinMienGiamTheoDoiTuongUuDaiVo.CongTyUudai,
						DoiTuongUuDai: resultData.ThongTinMienGiamTheoDoiTuongUuDaiVo.DoiTuongUuDai,
						DichVuMiemGiamTheoTiLes: resultData.ThongTinMienGiamTheoDoiTuongUuDaiVo.DichVuMiemGiamTheoTiLes,
					};
				}

				if (resultData.ThongTinMienGiamVoucherVo != null || resultData.ThongTinMienGiamVoucherVo != undefined) {
					this.flagEnableVoucher = true;
					this.flagApDung = true;
					if (resultData.ThongTinMienGiamVoucherVo.MaVouchers.length > 0) {
						this.listVouchers = [];
						this.listTmpVouchers = [];
						resultData.ThongTinMienGiamVoucherVo.MaVouchers.forEach((element) => {
							this.listVouchers.push(element.KeyId);
							this.listOldVouchers.push(element.KeyId);
							this.listTmpVouchers.push(element.KeyId);
						});
					}
					if (this.flagEnableVoucher === true) {
						this.disabledVoucher = true;
					}
					this.thongTinMienGiamVoucher = {
						MaVouchers: resultData.ThongTinMienGiamVoucherVo.MaVouchers,
						DichVuMiemGiamTheoTiLes: resultData.ThongTinMienGiamVoucherVo.DichVuMiemGiamTheoTiLes,
						LoaiVoucher: resultData.ThongTinMienGiamVoucherVo.LoaiVoucher,
						TenVoucher: resultData.ThongTinMienGiamVoucherVo.TenVoucher,
						SoTienVoucherMiemGiam: resultData.ThongTinMienGiamVoucherVo.SoTienVoucherMiemGiam,
					};
					this.loaiVoucher = resultData.ThongTinMienGiamVoucherVo.LoaiVoucher;
				}

				if (resultData.ThongTinMienGiamThemVo != null || resultData.ThongTinMienGiamThemVo != undefined) {
					this.flagEnableMGThem = true;
					this.flagApDung = true;
					if (this.flagEnableMGThem === true) {
						this.disabledMGThem = true;
					}

					this.taiLieuDinhKemGiayMiemGiamVo = this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam;

					// số tiền mg mà nhập vào bé hơn standardMG thì sẽ báo lỗi
					this.standardMG = this.thongTinMienGiamThem.SoTienMG;

					if (this.thongTinMienGiamThem.SoTienMG != 0) {
						this.disabledSoTienMG = false;
						this.checkedMGTGiaTri = true;
						this.formGroup = new FormGroup({
							loaiMG: new FormControl("one"),
						});
					}

					if (this.thongTinMienGiamThem.TiLeMienGiam != 0) {
						this.disabledTiLeMG = false;
						this.checkedMGTTiLe = true;
						this.checkHiddenSoTienConLai = true;
						this.formGroup = new FormGroup({
							loaiMG: new FormControl("two"),
						});
					}
					if (this.thongTinMienGiamThem != null &&
						this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam != null &&
						this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam.Ten != null) {
						this.isExistFile = true;
					}
				} else {
					this.formGroup = new FormGroup({
						loaiMG: new FormControl(),
					});
				}
			}
		});
	}

	onApplyMGThem() {
		this.refreshFlagApDung = true;
		this.thongTinMienGiamVo = {
			ThongTinMienGiamTheoDoiTuongUuDaiVo: this.thongTinMienGiamTheoDoiTuongUuDai,
			ThongTinMienGiamVoucherVo: this.thongTinMienGiamVoucher,
			ThongTinMienGiamThemVo: this.thongTinMienGiamThem,
		};
		var loaiMGThem = 1;

		if (this.checkedMGTGiaTri) {
			loaiMGThem = 1;
		}

		if (this.checkedMGTTiLe) {
			loaiMGThem = 2;
		}

		if (this.thongTinMienGiamThem.SoTienMG != 0) {
			this.thongTinMienGiamThem.TiLeMienGiam = 0;
		}

		if (this.thongTinMienGiamThem.TiLeMienGiam != 0) {
			this.thongTinMienGiamThem.SoTienMG = 0;
		}
		var thongTinMGThem = {
			ValidateVoucher: this.flagEnableVoucher,
			IdYeuCauTiepNhan: this.idYeuCauTiepNhan,
			ListVouchers: this.listVouchers,
			ValidateMGThem: this.flagEnableMGThem,
			LoaiMienGiamThem: loaiMGThem,
			LyDoMienGiam: this.thongTinMienGiamThem.LyDoMiemGiam,
			TaiLieuDinhKem: this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam,
			SoTienMG: this.thongTinMienGiamThem.SoTienMG,
			TiLeMienGiam: this.thongTinMienGiamThem.TiLeMienGiam,
			SoTienMGConLai: this.thongTinMienGiamThem.SoTienMGConLai,
			BenhNhanId: this.thongTinBenhNhan.BenhNhanId,
			NhanVienDuyetMienGiamThemId: this.thongTinMienGiamThem.NhanVienDuyetMienGiamThemId,
		};
		this.thuNganValidationErrors = null;
		this.apiService.post<any>("ThuNgan/ThemThongTinMiemGiamThemVaVoucher", thongTinMGThem).subscribe(
			(resultData) => {
				this.refreshFlagApDung = true;
				if (resultData) {
					this.getThongTinMienGiam(this.idYeuCauTiepNhan);
				}
				this.apDungMiemGiam = true;
				this.refreshFlagApDung = false;
				this.notificationService.showSuccess(this.commonThuTien.ApDungMiemGiamThanhCong);
			},
			(err: ApiError) => {
				this.thuNganValidationErrors = err.ValidationErrors;
				this.apDungMiemGiam = false;
				this.refreshFlagApDung = false;
			}
		);

		//nếu số tiền nó == 0 không cần chia lại tiền miễm giảm
		if (this.tongTienBNThanhToan < 0) {
			this.apDungMiemGiam = false;
		}
	}

	onChangeVoucher(data: any) {
		if (data === false) {
			this.flagEnableVoucher = false;
			if (this.flagEnableVoucher == false && this.flagEnableMGThem == false) {
				this.flagApDung = false;
			}
			if (this.flagEnableMGThem == true) {
				this.flagApDung = true;
			}
		} else {
			this.flagEnableVoucher = true;
			this.flagApDung = true;
		}
	}

	onChangeMienGiam(data: any) {
		if (data === false) {
			this.flagEnableMGThem = false;
			if (this.flagEnableVoucher == false && this.flagEnableMGThem == false) {
				this.flagApDung = false;
			}
			if (this.flagEnableVoucher == true) {
				this.flagApDung = true;
			}
			if (Object.entries(this.thongTinMienGiamTheoDoiTuongUuDai).length != 0) {
				this.flagApDung = true;
			}
		} else {
			this.flagEnableMGThem = true;
			this.flagApDung = true;
		}
	}

	onOpenChange() {
		this.voucherList.getDataForLookup();
	}

	QuetMaQRCodeClick() {
		let elementBarcode: HTMLElement = document.getElementById("barcodeActive") as HTMLElement;
		if (elementBarcode != undefined) {
			elementBarcode.click();
		}
	}

	changeQR($event) {
		if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
			this.modelQRCode = $event;
			var maVoucher = $event.split("@");
			if (maVoucher.length > 1) {
				this.kiemTraThongTinMaVoucher(maVoucher[0]);
			} else {
				this.notificationService.showError("Mã voucher không hợp lệ.");
			}
		}
	}

	kiemTraThongTinMaVoucher(maVoucher: any) {
		this.apiService.post<any>("ThuNgan/KiemTraThongTinMaVoucher?maVoucher=" + maVoucher + "&yeuCauTiepNhanId=" + this.idYeuCauTiepNhan + "&benhNhanId=" + this.thongTinBenhNhan.BenhNhanId).subscribe((resultData) => {
			if (resultData.Item1) {
				this.notificationService.showError(resultData.Item2);
				this.newBarcode = "";
			} else {
				this.notificationService.showSuccess(resultData.Item2);
				this.GetThongTheVoucher();
				this.dataSourceChanged = true;
			}
		});
	}

	public open(): void {
		this.multiselect.toggle(false);
	}

	removeTag(ev: any) {
		this.listVoucherItem = this.value;
		if (this.value != null) {
			this.KiemTraTheVoucherSuDung(ev.dataItem);
		}
	}

	blur() {
		if (this.newBarcode != "") {
			this.kiemTraThongTinMaVoucher(this.newBarcode);
		}
	}

	onKeyBarCode(event: any) {
		if (event.keyCode === 13) {
			this.multiselect.blur();
			this.multiselect.focus();
		}
	}

	public filterChange(filter: any): void {
		if (filter != null && filter != "") {
			this.newBarcode = filter;
		}
	}

	GetThongTheVoucher() {
		this.value = [];
		this.apiService.get<any>("ThuNgan/GetMaVoucher?yeucauTiepNhanId=" + this.idYeuCauTiepNhan).subscribe((resultData) => {
			if (resultData !== null && resultData !== undefined) {
				resultData.forEach((element) => {
					this.value.push(element.DisplayName);
					this.listVoucherItem.push(element.DisplayName);
					this.newBarcode = "";
				});
			}
		});
	}

	KiemTraTheVoucherSuDung(theVoucher: any) {
		let thongTinVoucherTheoYeuCauTiepNhan = {} as ThongTinVoucherTheoYeuCauTiepNhan;
		thongTinVoucherTheoYeuCauTiepNhan.TheVoucher = theVoucher;
		thongTinVoucherTheoYeuCauTiepNhan.YeucauTiepNhanId = this.idYeuCauTiepNhan;
		this.apiService.post<any>("ThuNgan/KiemTraTheVoucherSuDung", thongTinVoucherTheoYeuCauTiepNhan).subscribe((resultData) => {
			if (resultData !== null && resultData !== undefined) {
				this.GetThongTheVoucher();
				this.notificationService.showError(resultData.Item2);
				this.newBarcode = "";
				if (!resultData.Item1) {
					this.dataSourceChanged = true;
				}
			}
		});
	}

	chiTietSuDungGiuongTheoNgay() {
		this.dialog
			.open(ChiTietSuDungPopupComponent, {
				disableClose: false,
				width: "1400px",
				data: {
					yeuCauTiepNhanId: this.idYeuCauTiepNhan,
					benhNhanId: this.thongTinBenhNhan.BenhNhanId
				},
			})
			.afterClosed()
			.subscribe(() => {
				this.dataSourceChanged = true;
			});
	}

	BackToList() {
		let yctn = this.route.snapshot.queryParams.yctn;
		if (yctn) {
			this.router.navigateByUrl("/them-yeu-cau-tiep-nhan");
		} else {
			this.router.navigate(["/danh-sach-thu-tien-noi-tru"], {
				queryParamsHandling: "preserve",
			});
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

	xemBangKeNoiTruChoThu() {
		this.showLoadingPopup();
		let arrFileUrl: Array<any> = [];
		let arrFilePdf: Array<any> = [];

		this.thuTien.Id = this.idYeuCauTiepNhan;
		if (this.danhSachChuaThanhToans.data.length === 0) {
			this.notificationService.showError("Bảng chi phí chưa có dịch vụ.");
			this.closeAllDialogs();
			return true;
		}

		if (this.danhSachChuaThanhToans.data != null) {
			this.thuTien.DanhSachChiPhiKhamChuaBenhDaChons = this.danhSachChuaThanhToans.data;
		}

		this.apiService.postExportPdf<any>("ThuNganNoiTru/InBangKeNoiTruChoThu", this.thuTien).subscribe(
			(file) => {
				let newBlob = new Blob([file], { type: "application/pdf" });
				let datalocalURL = window.URL.createObjectURL(newBlob);
				arrFileUrl.push(datalocalURL);
				arrFilePdf.push(file);
				if (arrFilePdf.length > 0) {
					this.dialog
						.open(CommonPdfPopupNoiTruComponent, {
							disableClose: false,
							width: "1000px",
							data: { arrFileUrl, arrFilePdf, danhSachChiPhiThuTamUng: this.thuTien, loaiBangKeChiPhi: LoaiBangKeChiPhi.BangKeChoThu },
						})
						.afterClosed()
						.subscribe(() => {
							this.closeAllDialogs();
						});
				} else {
					this.notificationService.showError("Bảng chi phí chưa có dịch vụ.");
					this.closeAllDialogs();
				}

			},
			(err: ApiError) => {
				this.notificationService.showError(err.Message);
				this.closeAllDialogs();
			}
		);
	}

	xemBangKeNoiTruTrongGoiChoThu() {
		this.showLoadingPopup();
		let arrFileUrl: Array<any> = [];
		let arrFilePdf: Array<any> = [];

		this.chiTienQuyetToan.Id = this.idYeuCauTiepNhan;
		if (this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus.length === 0) {
			this.notificationService.showError("Bảng chi phí chưa có dịch vụ.");
			this.closeAllDialogs();
			return true;
		}

		this.apiService.postExportPdf<any>("ThuNganNoiTru/InBangKeNoiTruTrongGoiChoThu", this.chiTienQuyetToan).subscribe(
			(file) => {
				let newBlob = new Blob([file], { type: "application/pdf" });
				let datalocalURL = window.URL.createObjectURL(newBlob);
				arrFileUrl.push(datalocalURL);
				arrFilePdf.push(file);
				if (arrFilePdf.length > 0) {
					this.dialog
						.open(CommonPdfPopupNoiTruComponent, {
							disableClose: false,
							width: "1000px",
							data: { arrFileUrl, arrFilePdf, danhSachChiPhiThuTamUng: this.chiTienQuyetToan, loaiBangKeChiPhi: LoaiBangKeChiPhi.BangKeChoThu },
						})
						.afterClosed()
						.subscribe(() => {
							this.closeAllDialogs();
						});
				} else {
					this.notificationService.showError("Bảng chi phí chưa có dịch vụ.");
					this.closeAllDialogs();
				}

			},
			(err: ApiError) => {
				this.notificationService.showError(err.Message);
				this.closeAllDialogs();
			}
		);
	}

	thuTamUngKhiQuyetToan() {
		let hoTenNguoiBenh = this.thongTinBenhNhan.HoTen;
		let tongTienBNThanhToan = this.tongTienBNThanhToan;
		let idYeuCauTiepNhan = this.idYeuCauTiepNhan;

		if (this.confrim != null) {
			this.dialog.closeAll();
			this.confrim = null;
		}
		this.confrim = this.dialog.open(ThuTamUngKhiQuyetToanComponent, {
			disableClose: true,
			width: "600px",
			data: { hoTenNguoiBenh, tongTienBNThanhToan, idYeuCauTiepNhan },
		}).afterClosed().subscribe((result) => {
			if (result === "Yes") {
				this.getSoDuTaiKhoanBenhNhan(this.idYeuCauTiepNhan);
				this.notificationService.showSuccess("Thu tạm ứng thành công");
			}
		});
	}

	@HostListener("document:keydown", ["$event"])
	keyEvent(event: KeyboardEvent) {
		if (event.keyCode == 83 && event.ctrlKey) {
			if (this.tabIndex == 0) {
				this.thuTienBenhNhan();
			}
			event.preventDefault();
		}

		if (event.keyCode == 112 && event.ctrlKey) {
			if (this.loaiThanhToan === true) {
				this.tabDanhSachThuTien.selectTab(0);
				event.preventDefault();
			}
		}
		if (event.keyCode == 113 && event.ctrlKey) {
			if (this.loaiThanhToan === true) {
				//ctrl + f7
				this.tabDanhSachThuTien.selectTab(1);
				event.preventDefault();
			}
		}
		if (event.keyCode == 27 && !event.ctrlKey) {
			this.BackToList();
			event.preventDefault();
		}
		if (event.keyCode == 81 && event.ctrlKey) {
			event.preventDefault();
			this.QuetMaQRCodeClick();
		}
	}
}
