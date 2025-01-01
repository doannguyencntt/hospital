import { ChangeDetectorRef, Component, Inject, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import icClose from "@iconify/icons-ic/twotone-close";
import { GroupDescriptor, State, process } from "@progress/kendo-data-query";
import { ApiService } from "src/app/core/services/api.service";
import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { ApiError } from "src/app/shared/models/api-error.model";
import { ThongTinPhieuPdfPopupComponent } from "../../../common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component";
import { HuyQuyetToanGoi, ThongTinQuyetToan } from "../cho-thu-tien-goi-marketing.model";
import { HuyThongTinQuyetToanComponent } from "../huy-thong-tin-quyet-toan-popup/huy-thong-tin-quyet-toan-popup.component";
import { XemPhieuThuMarketing } from "../xem-phieu-thu-marketing/xem-phieu-thu-marketing.component";

@Component({
	selector: "app-thong-tin-quyet-toan-popup",
	templateUrl: "./thong-tin-quyet-toan-popup.component.html",
	styleUrls: ["./thong-tin-quyet-toan-popup.component.scss"],
})
export class ThongTinQuyetToanPopup implements OnInit {
	public documentType: DocumentType = DocumentType.ThuNgan;
	public thongTinQuyetToan = new ThongTinQuyetToan();
	public huyQuyetToanGoi = new HuyQuyetToanGoi();

	public kiemTraQuyetToan: boolean = false;
	public gridColumns: any[] = [];
	dataSource: any = {
		data: [],
		total: 0,
	};

	public icClose = icClose;
	public tenGoi: string = "";
	public goiDichVuId: number = 0;
	benhNhanId: number = 0;

	public loadingPopup: any;
	public validationErrors: any[] = [];
	groups: GroupDescriptor[] = [{
		field: 'Nhom', aggregates: [
			{ field: 'TTBV', aggregate: 'sum' },
			{ field: 'TTTruocCK', aggregate: 'sum' },
			{ field: 'TTSauCK', aggregate: 'sum' }
		]
	}];

	public state: State = {
		group: this.groups,
	};

	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<any>,
		private dialog: MatDialog, private authService: AuthService,
		private apiService: ApiService, private route: ActivatedRoute, private cdRef: ChangeDetectorRef,
		private notificationService: NotificationService) {
		this.tenGoi = data.TenGoi;
		this.goiDichVuId = data.goiDichVuId;
		this.kiemTraQuyetToan = data.kiemTraQuyetToan;
	}

	//============================================ Begin Dịch vụ đã dùng ========================================

	@ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
	@ViewChild('daDungDgbvTemplate', { static: true }) daDungDgbvTemplate: TemplateRef<any>;
	@ViewChild('daDungDGTruocCkTemplate', { static: true }) daDungDGTruocCkTemplate: TemplateRef<any>;

	@ViewChild('daDungDGSauCK', { static: true }) daDungDGSauCK: TemplateRef<any>;
	@ViewChild('daDungDGSauCKGroupFooter', { static: true }) daDungDGSauCKGroupFooter: TemplateRef<any>;

	@ViewChild('daDungTTBVTemplate', { static: true }) daDungTTBVTemplate: TemplateRef<any>;
	@ViewChild('daDungTTBVGroupFooter', { static: true }) daDungTTBVGroupFooter: TemplateRef<any>;

	@ViewChild('daDungTTTruocCKTemplate', { static: true }) daDungTTTruocCKTemplate: TemplateRef<any>;
	@ViewChild('daDungTTTruocCKGroupFooter', { static: true }) daDungTTTruocCKGroupFooter: TemplateRef<any>;


	@ViewChild('daDungTTSauCKTemplate', { static: true }) daDungTTSauCKTemplate: TemplateRef<any>;
	@ViewChild('daDungTTSauCKGroupFooter', { static: true }) daDungTTSauCKGroupFooter: TemplateRef<any>;


	@ViewChild('chuaDungTTBVTemplate', { static: true }) chuaDungTTBVTemplate: TemplateRef<any>;
	@ViewChild('chuaDungTTBVGroupFooter', { static: true }) chuaDungTTBVGroupFooter: TemplateRef<any>;

	@ViewChild('chuaDungTTTruocCKTemplate', { static: true }) chuaDungTTTruocCKTemplate: TemplateRef<any>;
	@ViewChild('chuaDungTTTruocCKGroupFooter', { static: true }) chuaDungTTTruocCKGroupFooter: TemplateRef<any>;


	@ViewChild('chuaDungTTSauCKTemplate', { static: true }) chuaDungTTSauCKTemplate: TemplateRef<any>;
	@ViewChild('chuaDungTTSauCKGroupFooter', { static: true }) chuaDungTTSauCKGroupFooter: TemplateRef<any>;

	//============================================ End Dịch vụ đã dùng ========================================

	ngOnInit() {
		this.benhNhanId = this.route.snapshot.params.id;
		if (this.data.goiDichVuId != undefined && this.data.goiDichVuId != null) {
			this.getThongTinDichVuTrongGoi(this.data.goiDichVuId);
		}
		this.gridColumns = [
			{ Field: 'Nhom', Title: 'Nhóm', Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
			{ Field: "MaDichVu", Title: "Mã", Width: 100, Sortable: true },
			{ Field: "TenDichVu", Title: "Tên DV", Width: 100, Sortable: true },
			{ Field: "LoaiGia", Title: "Loại Giá", Width: 70, Sortable: true },
			{ Field: "SoLuong", Title: "SL", Width: 50, Sortable: true },
			{ Field: "DGBV", Title: "ĐG BV", Width: 50, Sortable: true, Template: this.daDungDgbvTemplate },

			// { Field: "DGTruocCK", Title: "DG Trước CK", Width: 80, Sortable: true, Template: this.daDungDGTruocCkTemplate },
			// { Field: "DGSauCK", Title: "DG Sau CK", Width: 80, Sortable: true, Template: this.daDungDGSauCK, TemplateFooter: this.daDungDGSauCKGroupFooter },

			{ Field: "SoLuongDaDung", Title: "SL Đã dùng", Width: 80, Sortable: true },
			{ Field: "TTBVDaDung", Title: "TT BV Đã dùng", Width: 80, Sortable: true, Template: this.daDungTTBVTemplate, TemplateFooter: this.daDungTTBVGroupFooter },
			{ Field: "TTTruocCKDaDung", Title: "TT Trước CK Đã Dùng", Width: 80, Sortable: true, Template: this.daDungTTTruocCKTemplate, TemplateFooter: this.daDungTTTruocCKGroupFooter },
			{ Field: "TTSauCKDaDung", Title: "TT Sau CK Đã Dùng", Width: 80, Sortable: true, Template: this.daDungTTSauCKTemplate, TemplateFooter: this.daDungTTSauCKGroupFooter },

			{ Field: "SoLuongChuaDung", Title: "SL chưa dùng", Width: 50, Sortable: true },
			{ Field: "TTBVChuaDung", Title: "TT BV Chưa dùng", Width: 80, Sortable: true, Template: this.chuaDungTTBVTemplate, TemplateFooter: this.chuaDungTTBVGroupFooter },
			{ Field: "TTTruocCKChuaDung", Title: "TT Trước CK Chưa dùng", Width: 80, Sortable: true, Template: this.chuaDungTTTruocCKTemplate, TemplateFooter: this.chuaDungTTTruocCKGroupFooter },
			{ Field: "TTSauCKChuaDung", Title: "TT Sau CK Chưa dùng", Width: 80, Sortable: true, Template: this.chuaDungTTSauCKTemplate, TemplateFooter: this.chuaDungTTSauCKGroupFooter },
		];
	}

	getThongTinDichVuTrongGoi(goiDichVuId: number) {
		this.showLoadingPopup();
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			this.apiService.get(`ThuNganMarketing/GetThongTinDichVuTrongGoi/` + goiDichVuId).subscribe((data: any) => {
				if (data != undefined && data != null) {
					this.thongTinQuyetToan = data;
					this.thongTinQuyetToan.HuyTrongNgay = true;
					this.dataSource = process(this.thongTinQuyetToan.DanhSachDichVuTrongGois, this.state);
					if (this.kiemTraQuyetToan) {
						this.thongTinQuyetToan.SoTienTraLai = data.SoTienTraLai;						
					}
					else {
						var traLai = (this.thongTinQuyetToan.TongTienDaThu -
							this.thongTinQuyetToan.TongTienDaDung);
						this.thongTinQuyetToan.SoTienTraLai = traLai;
					}
				}
				this.closeAllDialogs();
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

	public total(field: any) {
		switch (field) {
			case 'TTBVDaDung':
				return this.thongTinQuyetToan.DanhSachDichVuTrongGois.reduce((sum, item) => sum + item.TTBVDaDung, 0);
			case 'TTTruocCKDaDung':
				return this.thongTinQuyetToan.DanhSachDichVuTrongGois.reduce((sum, item) => sum + item.TTTruocCKDaDung, 0);
			case 'TTSauCKDaDung':
				return this.thongTinQuyetToan.DanhSachDichVuTrongGois.reduce((sum, item) => sum + item.TTSauCKDaDung, 0);

			case 'TTBVChuaDung':
				return this.thongTinQuyetToan.DanhSachDichVuTrongGois.reduce((sum, item) => sum + item.TTBVChuaDung, 0);
			case 'TTTruocCKChuaDung':
				return this.thongTinQuyetToan.DanhSachDichVuTrongGois.reduce((sum, item) => sum + item.TTTruocCKChuaDung, 0);
			case 'TTSauCKChuaDung':
				return this.thongTinQuyetToan.DanhSachDichVuTrongGois.reduce((sum, item) => sum + item.TTSauCKChuaDung, 0);
		}
	}

	close() {
		this.dialog.closeAll();
	}

	clickTongTienDaDung(yeuCauGoiDichVuId: any, benhNhanId: any) {
		this.dialog.open(XemPhieuThuMarketing, {
			disableClose: false,
			width: '800px',
			data: { yeuCauGoiDichVuId: yeuCauGoiDichVuId, benhNhanId: benhNhanId }
		}).afterClosed().subscribe(result => {
			this.closeAllDialogs();
		});
	}

	QuyetToan() {
		this.validationErrors = [];
		this.cdRef.detectChanges();
		if (this.thongTinQuyetToan.HuyGoi && this.thongTinQuyetToan.LyDoHuyGoi == undefined
			&& this.thongTinQuyetToan.LyDoHuyGoi == null) {
			this.validationErrors.push({
				Message: "Vui lòng nhập lý do hủy gói",
				Field: "LyDoHuyGoi",
			});
			return;
		}
		this.showLoadingPopup();
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			var mes = `Bạn chắc chắn muốn quyết toán cho gói: <span class="green-text"> ${this.tenGoi.toUpperCase().bold()} </span> hay không ?`
			this.dialog.open(ConfirmComponent, {
				disableClose: false,
				width: '400px',
				data: { Title: "Xác nhận", Message: mes }
			}).afterClosed().subscribe(result => {
				if (result === 'Yes') {
					this.thongTinQuyetToan.BenhNhanId = this.benhNhanId;
					this.apiService.put(`ThuNganMarketing/QuyetToanDichVuTrongGoi`, this.thongTinQuyetToan).subscribe((data: any) => {
						this.notificationService.showSuccess("Quyết toán thành công.");
						if (data != undefined && data != null && data != 0) {
							this.inPhieuPdf(data);
						}
						this.dialog.closeAll();
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

	HuyQuyetToan() {
		this.validationErrors = [];
		this.cdRef.detectChanges();
		if (this.thongTinQuyetToan.HuyGoi && this.thongTinQuyetToan.LyDoHuyGoi == undefined
			&& this.thongTinQuyetToan.LyDoHuyGoi == null) {
			this.validationErrors.push({
				Message: "Vui lòng nhập lý do hủy gói",
				Field: "LyDoHuyGoi",
			});
			return;
		}
		this.showLoadingPopup();
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			var mes = `Bạn chắc chắn muốn hủy quyết toán cho gói: <span class="red-text"> ${this.tenGoi.toUpperCase().bold()} </span> hay không ?`
			this.dialog
				.open(HuyThongTinQuyetToanComponent, {
					disableClose: true, width: "800px", height: "auto",
					data: { Message: mes }
				})
				.afterClosed()
				.subscribe((message) => {
					if (message != undefined && message != null && message != "") {
						this.huyQuyetToanGoi.YeuCauGoiDichVuId = this.goiDichVuId;
						this.huyQuyetToanGoi.LyDoHuyQuyetToan = message;
						this.apiService.put(`ThuNganMarketing/HuyQuyetToanDichVuTrongGoi`, this.huyQuyetToanGoi).subscribe((data: any) => {
							this.dialogRef.close("Yes");
							this.notificationService.showSuccess("Hủy quyết toán thành công.");
						}, (err: ApiError) => {
							err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) :
								this.validationErrors = err.ValidationErrors;
							this.closeAllDialogs();
						});
					}
					this.closeAllDialogs();
				}, (err: ApiError) => {
					if (err.Message != "Validation Failed") {
						this.closeAllDialogs();
					}
				});
		}
		else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
			this.closeAllDialogs();
		}
	}

	inPhieuPdf(taiKhoanChiId: any) {
		let loading = this.dialog.open(LoadingComponent, {
			disableClose: true,
			width: "200px",
			height: "90px",
			data: {},
		});
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
							loading.close();
						});
				}
				else {
					loading.close();
					this.notificationService.showError("Chưa có thông tin dịch vụ.");
				}
			},
			(err: ApiError) => {
				if (err.Message !== "Validation Failed") {
					this.notificationService.showError(err.Message);
					loading.close();
				}
			}
		);
	}
	
	InBangKeSuDung() {
		this.showLoadingPopup();
		let hostingName = window.location.protocol + '//' + window.location.host;
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			this.apiService.post<Array<string>>("ThuNganMarketing/InBangKeSuDung?goiDichVuId=" + this.goiDichVuId + "&hostingName=" + hostingName).subscribe(
				(arrHtml) => {
					this.dialog
						.open(ThongTinPhieuPdfPopupComponent, {
							disableClose: false,
							width: "1000px",
							data: arrHtml,
						})
						.afterClosed()
						.subscribe((result) => { this.closeAllDialogs(); });
				},
				(err: ApiError) => {
					if (err.Message !== "Validation Failed") {
					}
				}
			);
		}
		else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
			this.closeAllDialogs();
		}
	}

	InBangKeDichVu() {
		this.showLoadingPopup();
		let hostingName = window.location.protocol + '//' + window.location.host;
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			this.apiService.get(`ThuNganMarketing/InBangKeDichVu?goiDichVuId=` + this.goiDichVuId + `&hostingName=` + hostingName).subscribe((data: any) => {
				if (data != undefined && data != null) {

				}
				this.closeAllDialogs();
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
