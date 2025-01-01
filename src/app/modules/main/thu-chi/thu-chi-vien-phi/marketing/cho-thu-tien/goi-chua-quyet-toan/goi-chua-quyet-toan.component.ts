import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ApiError } from "src/app/shared/models/api-error.model";
import { ThongTinQuyetToanPopup } from "../thong-tin-quyet-toan-popup/thong-tin-quyet-toan-popup.component";
import { ThuTienMarketingPopupComponent } from "../thu-tien-marketing-popup/thu-tien-marketing-popup.component";
import { Location } from '@angular/common';
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { GoiChuaQuyetToanMarketing } from "../cho-thu-tien-goi-marketing.model";
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { AuthService } from "src/app/core/services/auth.service";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { ActivatedRoute } from "@angular/router";
import { ThongTinBenhNhan } from "../cho-thu-tien-goi-marketing.model";
import { ThongTinPhieuPdfPopupComponent } from "../../../common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component";
import { ThongTinChuyenGoiBenhNhanComponent } from "../thong-tin-chuyen-goi-benh-nhan-popup/thong-tin-chuyen-goi-benh-nhan-popup.component";
declare var $: any;

@Component({
	selector: "app-goi-chua-quyet-toan",
	templateUrl: "./goi-chua-quyet-toan.component.html",
	styleUrls: ["./goi-chua-quyet-toan.component.scss"],
})

export class GoiChuaQuyetToanComponent implements OnInit {
	@Input() TenBenhNhan: string = "";
	@Input() ThongTinBenhNhan: ThongTinBenhNhan = null;

	public documentType: DocumentType = DocumentType.ThuNgan;

	gridColumns: any[] = [];
	validationErrors: any[] = [];
	goiChuaQuyetToanMarketing: GoiChuaQuyetToanMarketing[] = [];
	goiChuaQuyetToanMarketingTam: GoiChuaQuyetToanMarketing[] = [];

	loadingPopup: any;
	benhNhanId: any;

	public dataSource: any = {
		data: [],
		total: 0
	}

	constructor(private route: ActivatedRoute,
		private notificationService: NotificationService, private cdRef: ChangeDetectorRef,
		private dialog: MatDialog, private location: Location, private authService: AuthService,
		private apiService: ApiService) { }

	@ViewChild("gridList", { static: true }) gridList: GridComponent;
	@ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
	@ViewChild('tongSoTienCongNoTemplate', { static: true }) tongSoTienCongNoTemplate: TemplateRef<any>;
	@ViewChild('ngungSuDungTemplate', { static: true }) ngungSuDungTemplate: TemplateRef<any>;

	@ViewChild('tongSoTienDaThuGroupFooter', { static: true }) tongSoTienDaThuGroupFooter: TemplateRef<any>;
	@ViewChild('tongSoTienChuaThuGroupFooter', { static: true }) tongSoTienChuaThuGroupFooter: TemplateRef<any>;
	@ViewChild('tongSoTienCongNoGroupFooter', { static: true }) tongSoTienCongNoGroupFooter: TemplateRef<any>;

	@ViewChild('tenGoiTemplate', { static: true }) tenGoiTemplate: TemplateRef<any>;
	@ViewChild('giaGoiTemplate', { static: true }) giaGoiTemplate: TemplateRef<any>;
	@ViewChild('daThuTemplate', { static: true }) daThuTemplate: TemplateRef<any>;
	@ViewChild('chuaThuTemplate', { static: true }) chuaThuTemplate: TemplateRef<any>;
	@ViewChild('ngayDangTemplate', { static: true }) ngayDangTemplate: TemplateRef<any>;

	@ViewChild('ngayDangGroupFooter', { static: true }) ngayDangGroupFooter: TemplateRef<any>;

	marketing: string = "marketing";

	ngOnInit() {
		this.benhNhanId = this.route.snapshot.params.id;
		if (this.benhNhanId !== undefined && this.benhNhanId !== null) {
			this.getThongTinChuaThuGoiQuyetToan(this.benhNhanId);
		}
		this.gridColumns = [
			{ Field: "MaGoi", Title: "Mã Gói", Width: 30, Sortable: false },
			{ Field: "TenGoi", Title: "Tên Gói", Width: 100, Sortable: false, Template: this.tenGoiTemplate },
			{ Field: "NgayDang", Title: "Ngày đăng", Width: 70, Sortable: false, Template: this.ngayDangTemplate, TemplateFooter: this.ngayDangGroupFooter },
			{ Field: "GiaGoi", Title: "Gói giá", Width: 50, Sortable: false, Template: this.giaGoiTemplate },

			{ Field: "DaThu", Title: "Đã thu", Width: 50, Sortable: false, Template: this.daThuTemplate, TemplateFooter: this.tongSoTienDaThuGroupFooter },
			{ Field: "ChuaThu", Title: "Chưa thu", Width: 80, Sortable: false, Template: this.chuaThuTemplate, TemplateFooter: this.tongSoTienChuaThuGroupFooter },
			{ Field: "TongDVDaDung", Title: "Tổng DV đã dùng", Width: 60, Sortable: false, Template: this.tongSoTienCongNoTemplate, TemplateFooter: this.tongSoTienCongNoGroupFooter },

			{ Field: "NgungSuDung", Title: "Tạm ngưng", Width: 50, Sortable: false, Template: this.ngungSuDungTemplate },
			{ Field: "", Title: "", Width: 100, Sortable: false, Template: this.actionTemplate },
		];
	}

	getThongTinChuaThuGoiQuyetToan(benhNhanId: number) {
		this.showLoadingPopup();
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			this.apiService.get(`ThuNganMarketing/GetDataGoiChuaThuQuyetToan?benhNhanId=` + benhNhanId).subscribe((response: any) => {
				if (response != undefined && response != null) {
					this.dataSource.data = response.Data;
					this.goiChuaQuyetToanMarketing = [];
					this.goiChuaQuyetToanMarketing = response.Data;
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

	extCheckboxSelection(event: any[]) {
		this.goiChuaQuyetToanMarketing.forEach((element) => {
			{
				return (element.CheckedDefault = false);
			}
		});
		if (event.length > 0) {
			for (let index = 0; index < event.length; index++) {
				this.goiChuaQuyetToanMarketing.forEach((element) => {
					{
						if (element.Id == event[index]) {
							element.CheckedDefault = true;
							element.SoTienThuLanNay = element.ChuaThu;
							return (element);
						}
					}
				});
			}
		}
	}

	huyCheckBoxSelection() {
		this.goiChuaQuyetToanMarketing.forEach((element) => {
			{
				if ($('#' + 'marketingselectCheckboxId' + element.Id).prop('checked')) {
					$('#' + 'marketingselectCheckboxId' + element.Id).trigger('click');
				}
			}
		});

	}

	public totalTongSoTienCongNo(field: any) {
		switch (field) {
			case 'DaThu':
				return this.dataSource.data.reduce((sum, item) => sum + item.DaThu, 0);
			case 'ChuaThu':
				return this.dataSource.data.reduce((sum, item) => sum + item.ChuaThu, 0);
			case 'totalTongSoTienCongNo':
				return this.dataSource.data.reduce((sum, item) => sum + item.TongDVDaDung, 0);
		}
	}

	QuyetToan(dataItem: any) {
		this.showLoadingPopup();
		this.dialog
			.open(ThongTinQuyetToanPopup, {
				disableClose: true, width: "1500px", height: "auto",
				data: { TenGoi: dataItem.TenGoi, goiDichVuId: dataItem.Id, kiemTraQuyetToan: false }
			})
			.afterClosed()
			.subscribe((res) => {
				//this.notificationService.showSuccess("Quyết toán thành công.");
				this.getThongTinChuaThuGoiQuyetToan(this.benhNhanId);
				this.huyCheckBoxSelection();
				this.closeAllDialogs();
			}, (err: ApiError) => {
				if (err.Message != "Validation Failed") {
					this.closeAllDialogs();
				}
			});
	}

	ThuTien() {
		this.goiChuaQuyetToanMarketingTam = [...this.goiChuaQuyetToanMarketing.filter(c => c.CheckedDefault == true)];
		var dataChonThanhToanTien = this.goiChuaQuyetToanMarketingTam;
		if (dataChonThanhToanTien.length === 0) {
			this.notificationService.showError("Vui lòng chọn dịch vụ để thanh toán");
			return true;
		}
		this.dialog
			.open(ThuTienMarketingPopupComponent,
				{
					disableClose: true,
					width: "800px",
					height: "auto",
					data: { dataChonThanhToan: dataChonThanhToanTien, benhNhanId: this.benhNhanId, tenBenhNhan: this.TenBenhNhan }
				}
			)
			.afterClosed()
			.subscribe((taiKhoanThuId) => {
				if (taiKhoanThuId != undefined && taiKhoanThuId != null && taiKhoanThuId != "") {
					this.inPhieuPdf(taiKhoanThuId);
					this.gridList.search();
				}
			}, (err: ApiError) => {
				if (err.Message != "Validation Failed") {

				}
			});
	}

	chuyenGoi(dataItem: any) {
		let goiDichVuId = dataItem.Id;
		let tenGoiDichVu = dataItem.TenGoi
		let maGoiMoi = dataItem.MaGoi
		this.dialog
			.open(ThongTinChuyenGoiBenhNhanComponent, {
				disableClose: true, width: "1500px", height: "auto",
				data: {
					TenBenhNhan: this.ThongTinBenhNhan.HoTen,
					NgayThangNamSinh: this.ThongTinBenhNhan.NgayThangNamSinh,
					SoDienThoai: this.ThongTinBenhNhan.SoDienThoai,
					YeuCauGoiDichVuId: goiDichVuId,
					TenGoiDichVu: tenGoiDichVu,
					MaGoiMoi: maGoiMoi
				}
			})
			.afterClosed()
			.subscribe((res) => {
				this.getThongTinChuaThuGoiQuyetToan(this.benhNhanId);
				this.gridList.search();
			}, (err: ApiError) => {
				if (err.Message != "Validation Failed") {
					this.closeAllDialogs();
				}
			});
	}

	inPhieuPdf(taiKhoanThuId: any) {
		let loading = this.dialog.open(LoadingComponent, {
			disableClose: true,
			width: "200px",
			height: "90px",
			data: {},
		});
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
							this.getThongTinChuaThuGoiQuyetToan(this.benhNhanId);
							this.gridList.search();
							this.huyCheckBoxSelection();
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

	ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }

	BackToList() {
		this.location.back();
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
