import { Component, OnInit, Inject, ChangeDetectorRef, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import icClose from "@iconify/icons-ic/twotone-close";
import { ApiService } from "src/app/core/services/api.service";
import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { ApiError } from "src/app/shared/models/api-error.model";
import * as _ from "underscore";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import icRight from '@iconify/icons-ic/chevron-right';
import icRightLast from '@iconify/icons-ic/last-page';
import icLeft from '@iconify/icons-ic/chevron-left';
import icLeftLast from '@iconify/icons-ic/first-page';
import { ChonGoiMarketing, DanhSachDichVuTrongGoi, DichVuTrongGoi, LuuThongTinChuyenGoiMoi } from "../cho-thu-tien-goi-marketing.model";
import { GroupDescriptor, State, process } from "@progress/kendo-data-query";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { RowClassArgs } from "@progress/kendo-angular-grid";
import { isThisSecond } from "date-fns";
@Component({
	selector: "app-thong-tin-chuyen-goi-benh-nhan-popup",
	templateUrl: "./thong-tin-chuyen-goi-benh-nhan-popup.component.html",
	styleUrls: ["./thong-tin-chuyen-goi-benh-nhan-popup.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class ThongTinChuyenGoiBenhNhanComponent implements OnInit {
	public documentType: DocumentType = DocumentType.ThuNgan;
	loadingPopup: any;

	dsDichVuTrongGoiChuaChuyen: DichVuTrongGoi[] = [];
	dsDichVuTrongGoiDaChuyen: DichVuTrongGoi[] = [];

	chonGoiMarketing: ChonGoiMarketing = new ChonGoiMarketing();
	luuThongTinChuyenGoiMoi: LuuThongTinChuyenGoiMoi = new LuuThongTinChuyenGoiMoi();

	icRight = icRight;
	icLeft = icLeft;
	tenBenhNhan: string = null;
	ngayThangNamSinh: string = null;
	soDienThoai: string = null;

	yeuCauGoiDichVuId: number = null;
	tenGoiDichVu: string = null;
	maGoiMoi: string = null;
	format: string = 'n2';

	icClose = icClose;
	validationErrors: any;


	goiChuaChuyen: any = {
		data: [],
		total: 0,
	};

	goiDaChuyen: any = {
		data: [],
		total: 0,
	};

	groups: GroupDescriptor[] = [{
		field: 'NhomDisplay', aggregates: [
			{ field: 'TTBV', aggregate: 'sum' },
			{ field: 'TTTruocCK', aggregate: 'sum' },
			{ field: 'TTSauCK', aggregate: 'sum' }
		]
	}];

	public state: State = {
		group: this.groups,
	};

	public gridColumnGoiChuaChuyens: any[] = [];
	public gridColumnGoiDaChuyens: any[] = [];

	//============================================ Gói chưa chuyển  ========================================

	urlGetDataGridChild1: string = "DanhMucMarketing/GetDataDichVuGoiForGridAsync";
	urlGetTotalPageGridChild1: string = "DanhMucMarketing/GetTotalDichVuGoiPageForGridAsync";

	//============================================ Gói chưa chuyển  ========================================

	@ViewChild('transferTemplate1', { static: true }) transferTemplate1: TemplateRef<any>;
	@ViewChild('sTTTemplateGrid1', { static: true }) sTTTemplateGrid1: TemplateRef<any>;
	@ViewChild('nhomGroupHeaderChuaChuyenTemplate', { static: true }) nhomGroupHeaderChuaChuyenTemplate: TemplateRef<any>;

	@ViewChild('gridGoiChuaChuyen', { static: false }) gridGoiChuaChuyen: GridComponent;
	@ViewChild('gridGoiDaChuyen', { static: false }) gridGoiDaChuyen: GridComponent;
	@ViewChild('maDichVuChuaChuyenFooter', { static: true }) maDichVuChuaChuyenFooter: TemplateRef<any>;
	@ViewChild('soluongGoiChuaChuyenTemplate', { static: true }) soluongGoiChuaChuyenTemplate: TemplateRef<any>;
	@ViewChild('dgbvChuaChuyenTemplate', { static: true }) dgbvChuaChuyenTemplate: TemplateRef<any>;
	@ViewChild('donGiaTruocCKChuaChuyenTemplate', { static: true }) donGiaTruocCKChuaChuyenTemplate: TemplateRef<any>;
	@ViewChild('donGiaSauCKChuaChuyenTemplate', { static: true }) donGiaSauCKChuaChuyenTemplate: TemplateRef<any>;
	@ViewChild('thanhTienTruocCKChuaChuyenTemplate', { static: true }) thanhTienTruocCKChuaChuyenTemplate: TemplateRef<any>;
	@ViewChild('thanhTienSauCKChuaChuyenTemplate', { static: true }) thanhTienSauCKChuaChuyenTemplate: TemplateRef<any>;
	@ViewChild('thanhTienBvChuaChuyenTemplate', { static: true }) thanhTienBvChuaChuyenTemplate: TemplateRef<any>;


	@ViewChild('tongChiDonGiaTruocCKFooterChuaChuyenTemplate', { static: true }) tongChiDonGiaTruocCKFooterChuaChuyenTemplate: TemplateRef<any>;
	@ViewChild('tongChiDonGiaSauChietKhauFooterChuaChuyenTemplate', { static: true }) tongChiDonGiaSauChietKhauFooterChuaChuyenTemplate: TemplateRef<any>;
	@ViewChild('tongChiThanhTienBenhVienFooterChuaChuyenTemplate', { static: true }) tongChiThanhTienBenhVienFooterChuaChuyenTemplate: TemplateRef<any>;
	@ViewChild('thanhTienTruocCKFooterChuaChuyenTemplate', { static: true }) thanhTienTruocCKFooterChuaChuyenTemplate: TemplateRef<any>;
	@ViewChild('thanhTienSauCKFooterChuaChuyenTemplate', { static: true }) thanhTienSauCKFooterChuaChuyenTemplate: TemplateRef<any>;



	//============================================ Gói đã chuyển  ========================================
	@ViewChild('transferTemplate2', { static: true }) transferTemplate2: TemplateRef<any>;
	@ViewChild('sTTTemplateGrid2', { static: true }) sTTTemplateGrid2: TemplateRef<any>;

	@ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

	@ViewChild('dgbvTemplate', { static: true }) dgbvTemplate: TemplateRef<any>;
	@ViewChild('daDungDGTruocCkTemplate', { static: true }) daDungDGTruocCkTemplate: TemplateRef<any>;
	@ViewChild('soluongGoiDaChuyenTemplate', { static: true }) soluongGoiDaChuyenTemplate: TemplateRef<any>;

	@ViewChild('donGiaTruocCKTemplate', { static: true }) donGiaTruocCKTemplate: TemplateRef<any>;
	@ViewChild('donGiaSauCKTemplate', { static: true }) donGiaSauCKTemplate: TemplateRef<any>;

	@ViewChild('thanhTienTruocCKTemplate', { static: true }) thanhTienTruocCKTemplate: TemplateRef<any>;
	@ViewChild('thanhTienSauCKTemplate', { static: true }) thanhTienSauCKTemplate: TemplateRef<any>;


	@ViewChild('maDichVuFooter', { static: true }) maDichVuFooter: TemplateRef<any>;
	@ViewChild('thanhTienBvDaChuyenTemplate', { static: true }) thanhTienBvDaChuyenTemplate: TemplateRef<any>;

	@ViewChild('tongChiDonGiaTruocCKFooterDaChuyenTemplate', { static: true }) tongChiDonGiaTruocCKFooterDaChuyenTemplate: TemplateRef<any>;
	@ViewChild('tongChiDonGiaSauChietKhauFooterDaChuyenTemplate', { static: true }) tongChiDonGiaSauChietKhauFooterDaChuyenTemplate: TemplateRef<any>;
	@ViewChild('tongChiThanhTienBenhVienFooterDaChuyenTemplate', { static: true }) tongChiThanhTienBenhVienFooterDaChuyenTemplate: TemplateRef<any>;
	@ViewChild('thanhTienTruocCKFooterDaChuyenTemplate', { static: true }) thanhTienTruocCKFooterDaChuyenTemplate: TemplateRef<any>;
	@ViewChild('thanhTienSauCKFooterDaChuyenTemplate', { static: true }) thanhTienSauCKFooterDaChuyenTemplate: TemplateRef<any>;


	//============================================ End  Gói đã chuyển ========================================

	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService,
		public sanitizer: DomSanitizer, private notificationService: NotificationService,
		private authService: AuthService, private dialog: MatDialog,
		private dialogRef: MatDialogRef<any>, private cdRef: ChangeDetectorRef) { }

	ngOnInit() {
		this.tenBenhNhan = this.data.TenBenhNhan;
		this.ngayThangNamSinh = this.data.NgayThangNamSinh;
		this.soDienThoai = this.data.SoDienThoai;
		this.yeuCauGoiDichVuId = this.data.YeuCauGoiDichVuId;
		this.tenGoiDichVu = this.data.TenGoiDichVu;
		this.maGoiMoi = this.data.MaGoiMoi;

		this.gridColumnGoiChuaChuyens = [
			{ Field: 'NhomDisplay', Title: 'Nhóm', Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderChuaChuyenTemplate },

			{ Field: "", Title: "", Width: 40, Sortable: true, Template: this.transferTemplate1 },
			{ Field: "", Title: "STT", Width: 60, Sortable: true, Template: this.sTTTemplateGrid1 },

			{ Field: "Ma", Title: "Mã", Width: 100, Sortable: true, TemplateFooter: this.maDichVuChuaChuyenFooter },

			{ Field: "Ten", Title: "Tên DV", Width: 100, Sortable: true },
			{ Field: "LoaiGia", Title: "Loại Giá", Width: 70, Sortable: true },

			{ Field: "SoLuong", Title: "SL", Width: 150, Sortable: true },
			{ Field: "DonGiaBenhVien", Title: "ĐG BV", Width: 150, Sortable: true, Template: this.dgbvChuaChuyenTemplate },

			{ Field: "DonGiaTruocChietKhau", Title: "Đơn Giá trước CK", Width: 200, Sortable: false, Template: this.donGiaTruocCKChuaChuyenTemplate, TemplateFooter: this.tongChiDonGiaTruocCKFooterChuaChuyenTemplate },

			{ Field: "DonGiaSauChietKhau", Title: "Đơn Giá sau ck", Width: 200, Sortable: false, Template: this.donGiaSauCKChuaChuyenTemplate, TemplateFooter: this.tongChiDonGiaSauChietKhauFooterChuaChuyenTemplate },
			{ Field: "ThanhTienBenhVien", Title: "thành tiền BV", Width: 150, Sortable: true, Template: this.thanhTienBvChuaChuyenTemplate, TemplateFooter: this.tongChiThanhTienBenhVienFooterChuaChuyenTemplate },

			{ Field: "ThanhTienTruocChietKhau", Title: "Thành Tiền trước ck", Width: 150, Sortable: false, Template: this.thanhTienTruocCKChuaChuyenTemplate, TemplateFooter: this.thanhTienTruocCKFooterChuaChuyenTemplate },
			{ Field: "ThanhTienSauChietKhau", Title: "Thành Tiền sau ck", Width: 150, Sortable: false, Template: this.thanhTienSauCKChuaChuyenTemplate, TemplateFooter: this.thanhTienSauCKFooterChuaChuyenTemplate },
		];

		this.gridColumnGoiDaChuyens = [
			{ Field: 'NhomDisplay', Title: 'Nhóm', Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },

			{ Field: "", Title: "", Width: 40, Sortable: true, Template: this.transferTemplate2 },
			{ Field: "", Title: "STT", Width: 60, Sortable: true, Template: this.sTTTemplateGrid2 },

			{ Field: "Ma", Title: "Mã", Width: 100, Sortable: true, TemplateFooter: this.maDichVuFooter },
			{ Field: "Ten", Title: "Tên DV", Width: 100, Sortable: true },
			{ Field: "LoaiGia", Title: "Loại Giá", Width: 70, Sortable: true },

			{ Field: "SoLuong", Title: "SL", Width: 150, Sortable: true, Template: this.soluongGoiDaChuyenTemplate },
			{ Field: "DonGiaBenhVien", Title: "ĐG BV", Width: 150, Sortable: true, Template: this.dgbvTemplate },

			{ Field: "DonGiaTruocChietKhau", Title: "Đơn Giá trước CK", Width: 200, Sortable: false, Template: this.donGiaTruocCKTemplate, TemplateFooter: this.tongChiDonGiaTruocCKFooterDaChuyenTemplate },
			{ Field: "DonGiaSauChietKhau", Title: "Đơn Giá sau ck", Width: 200, Sortable: false, Template: this.donGiaSauCKTemplate, TemplateFooter: this.tongChiDonGiaSauChietKhauFooterDaChuyenTemplate },
			{ Field: "ThanhTienBenhVien", Title: "thành tiền BV", Width: 150, Sortable: true, Template: this.thanhTienBvDaChuyenTemplate, TemplateFooter: this.tongChiThanhTienBenhVienFooterDaChuyenTemplate },

			{ Field: "ThanhTienTruocChietKhau", Title: "Thành Tiền trước ck", Width: 150, Sortable: false, Template: this.thanhTienTruocCKTemplate, TemplateFooter: this.thanhTienTruocCKFooterDaChuyenTemplate },
			{ Field: "ThanhTienSauChietKhau", Title: "Thành Tiền sau ck", Width: 150, Sortable: false, Template: this.thanhTienSauCKTemplate, TemplateFooter: this.thanhTienSauCKFooterDaChuyenTemplate },
		];

		if (this.yeuCauGoiDichVuId !== undefined && this.yeuCauGoiDichVuId != null) {
			this.getThongTinDichVuTrongGoiDaChuyen(this.yeuCauGoiDichVuId);
		}
	}

	getThongTinDichVuTrongGoiDaChuyen(goiDichVuId: number) {
		this.showLoadingPopup();
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			this.apiService.get(`ThuNganMarketing/GetThongTinGoiDichVuCuaBenhNhan/` + goiDichVuId).subscribe((resultData: any) => {
				if (resultData != undefined && resultData != null) {
					this.goiDaChuyen = process(resultData, this.state);
					this.dsDichVuTrongGoiDaChuyen = resultData;
					this.closeAllDialogs();
				}
			}, (err: ApiError) => {
				err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) :
					this.validationErrors = err.ValidationErrors;
				this.closeAllDialogs();
			});
		}
		else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
			this.closeAllDialogs();
		}
	}

	getThongTinDichVuTrongGoiChuaChuyen(dateItem: any) {
		this.showLoadingPopup();
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			this.apiService.get(`ThuNganMarketing/GetThongTinGoiDichVuMoiMuonChuyen/` + dateItem.KeyId)
				.subscribe((resultData: any) => {
					if (resultData != undefined && resultData != null) {
						this.dsDichVuTrongGoiChuaChuyen = resultData;

						this.dsDichVuTrongGoiChuaChuyen.forEach(e => {
							e.HighLightClass = this.dsDichVuTrongGoiDaChuyen.
							filter(x => x.Nhom === e.Nhom && x.DichVuBenhVienId === e.DichVuBenhVienId).length > 0 ? `` : `bg-row-lightblue`;
						});

						this.goiChuaChuyen = process(resultData, this.state);

						this.chonGoiMarketing.KeyId = dateItem.KeyId;
						this.chonGoiMarketing.DisplayName = dateItem.DisplayName;

						this.luuThongTinChuyenGoiMoi.TenGoiMoi = dateItem.Ten;
						this.luuThongTinChuyenGoiMoi.MaGoiMoi = dateItem.Ma;

						this.closeAllDialogs();
					}
				}, (err: ApiError) => {
					err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) :
						this.validationErrors = err.ValidationErrors;
					this.closeAllDialogs();
				});
		}
		else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
			this.closeAllDialogs();
		}
	}

	public totalChuaChuyen(field: any) {
		if (this.dsDichVuTrongGoiChuaChuyen.length > 0) {
			switch (field) {
				case 'DonGiaBenhVien':
					return this.dsDichVuTrongGoiChuaChuyen.reduce((sum, item) => sum + item.DonGiaBenhVien, 0);
				case 'DonGiaTruocChietKhau':
					return this.dsDichVuTrongGoiChuaChuyen.reduce((sum, item) => sum + item.DonGiaTruocChietKhau, 0);
				case 'DonGiaSauChietKhau':
					return this.dsDichVuTrongGoiChuaChuyen.reduce((sum, item) => sum + item.DonGiaSauChietKhau, 0);
				case 'ThanhTienBenhVien':
					return this.dsDichVuTrongGoiChuaChuyen.reduce((sum, item) => sum + item.ThanhTienBenhVien, 0);
				case 'ThanhTienTruocChietKhau':
					return this.dsDichVuTrongGoiChuaChuyen.reduce((sum, item) => sum + item.ThanhTienTruocChietKhau, 0);
				case 'ThanhTienSauChietKhau':
					return this.dsDichVuTrongGoiChuaChuyen.reduce((sum, item) => sum + item.ThanhTienSauChietKhau, 0);
			}
		}
	}

	public totalDaChuyen(field: any) {
		switch (field) {
			case 'DonGiaBenhVien':
				return this.dsDichVuTrongGoiDaChuyen.reduce((sum, item) => sum + item.DonGiaBenhVien, 0);
			case 'DonGiaTruocChietKhau':
				return this.dsDichVuTrongGoiDaChuyen.reduce((sum, item) => sum + item.DonGiaTruocChietKhau, 0);
			case 'DonGiaSauChietKhau':
				return this.dsDichVuTrongGoiDaChuyen.reduce((sum, item) => sum + item.DonGiaSauChietKhau, 0);
			case 'ThanhTienBenhVien':
				return this.dsDichVuTrongGoiDaChuyen.reduce((sum, item) => sum + item.ThanhTienBenhVien, 0);
			case 'ThanhTienTruocChietKhau':
				return this.dsDichVuTrongGoiDaChuyen.reduce((sum, item) => sum + item.ThanhTienTruocChietKhau, 0);
			case 'ThanhTienSauChietKhau':
				return this.dsDichVuTrongGoiDaChuyen.reduce((sum, item) => sum + item.ThanhTienSauChietKhau, 0);
		}
	}

	close() {
		this.dialogRef.close();
	}

	selectionChangeGoiMarketing(dateItem: any) {
		if (dateItem != undefined && dateItem !== null) {
			this.getThongTinDichVuTrongGoiChuaChuyen(dateItem);
		}
		else {
			this.clearData();
		}
	}

	clearData() {
		this.luuThongTinChuyenGoiMoi.TenGoiMoi = null;
		this.luuThongTinChuyenGoiMoi.MaGoiMoi = null;

		this.dsDichVuTrongGoiChuaChuyen = [];
		this.getThongTinDichVuTrongGoiDaChuyen(this.yeuCauGoiDichVuId);
		this.refreshGrid();
	}

	modelChangeSoLuong(dataItem: any, soluong: any) {
		dataItem.ThanhTienTruocChietKhau = dataItem.DonGiaTruocChietKhau * soluong;
		dataItem.ThanhTienSauChietKhau = dataItem.DonGiaSauChietKhau * soluong;
		dataItem.ThanhTienBenhVien = dataItem.DonGiaBenhVien * soluong;
	}

	modelChangeDonGiaTruocChiecKhau(dataItem: any, donGiaTruocCK: any) {
		dataItem.ThanhTienTruocChietKhau = dataItem.SoLuong * donGiaTruocCK;
	}

	modelChangeDonGiaSauChiecKhau(dataItem: any, donGiaSauK: any) {
		dataItem.ThanhTienSauChietKhau = dataItem.SoLuong * donGiaSauK;
	}

	dieuChuyenGoiChuaChuyenGrid1(dataItem: any) {

		this.dsDichVuTrongGoiChuaChuyen.splice(this.dsDichVuTrongGoiChuaChuyen.findIndex((x: any) => x == dataItem), 1);
		this.dsDichVuTrongGoiDaChuyen.push(dataItem);

		this.refreshGrid();
	}

	dieuChuyenGoiDaChuyenGrid2(dataItem: any) {

		this.dsDichVuTrongGoiDaChuyen.splice(this.dsDichVuTrongGoiDaChuyen.findIndex((x: any) => x == dataItem), 1);
		this.dsDichVuTrongGoiChuaChuyen.push(dataItem);

		this.refreshGrid();
	}

	refreshGrid() {
		this.goiChuaChuyen = process(this.dsDichVuTrongGoiChuaChuyen, this.state);
		this.goiDaChuyen = process(this.dsDichVuTrongGoiDaChuyen, this.state);
	}

	huyChuyenGoi() {
		this.dialogRef.close();
	}

	luuChuyenGoi() {
		this.validationErrors = [];
		this.cdRef.detectChanges();

		if (this.luuThongTinChuyenGoiMoi.TenGoiMoi === null || this.luuThongTinChuyenGoiMoi.TenGoiMoi === "") {
			this.validationErrors.push({
				Message: "Vui lòng nhập tên gói mới",
				Field: "TenGoiMoi",
			});
			return true;
		}

		if (this.luuThongTinChuyenGoiMoi.MaGoiMoi === null || this.luuThongTinChuyenGoiMoi.MaGoiMoi === "") {
			this.validationErrors.push({
				Message: "Vui lòng nhập mã gói mới",
				Field: "MaGoiMoi",
			});
			return true;
		}

		if (this.dsDichVuTrongGoiDaChuyen.length === 0) {
			this.notificationService.showError(`vui lòng chọn gói để chuyển`);
			return true;
		}


		if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
			this.dialog.open(ConfirmComponent, {
				disableClose: false,
				width: "500px",
				data: {
					Title: "Xác nhận",
					Message: `Bạn chắc chắn muốn chuyển gói <span class="green-text">${this.luuThongTinChuyenGoiMoi.TenGoiMoi.toUpperCase().bold()}</span> này không?`
				},
			}).afterClosed().subscribe((res) => {
				if (res == "Yes") {
					this.showSavingPopup();

					this.luuThongTinChuyenGoiMoi.YeuCauGoiDichVuId = this.yeuCauGoiDichVuId;
					this.luuThongTinChuyenGoiMoi.DichVuTrongGoiMarketingModels = this.dsDichVuTrongGoiDaChuyen;

					this.apiService.post(`ThuNganMarketing/LuuThongTinMuonChuyenGoiMoi`, this.luuThongTinChuyenGoiMoi)
						.subscribe((kqChuyenGoi: any) => {

							this.notificationService.showSuccess(`Chuyển gói thành công.`);
							this.dialogRef.close("Yes");

							this.closeAllDialogs();
						}, (err: ApiError) => {
							err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
							this.closeAllDialogs();
						});
				}
			})
		} else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
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
