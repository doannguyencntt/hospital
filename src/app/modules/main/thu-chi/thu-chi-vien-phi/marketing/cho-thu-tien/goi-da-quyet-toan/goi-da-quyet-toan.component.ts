import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/core/services/api.service";
import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { GoiDaQuyetToanMarketing } from "../cho-thu-tien-goi-marketing.model";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { ApiError } from "src/app/shared/models/api-error.model";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ThongTinQuyetToanPopup } from "../thong-tin-quyet-toan-popup/thong-tin-quyet-toan-popup.component";
import { Location } from '@angular/common';

@Component({
	selector: "app-goi-da-quyet-toan",
	templateUrl: "./goi-da-quyet-toan.component.html",
	styleUrls: ["./goi-da-quyet-toan.component.scss"],
})
export class GoiDaQuyetToanComponent implements OnInit {
	public documentType: DocumentType = DocumentType.ThuNgan;

	gridColumns: any[] = [];
	goiDaQuyetToanMarketing: GoiDaQuyetToanMarketing[] = [];
	benhNhanId: number = 0;
	loadingPopup: any;
	validationErrors: any[] = [];

	dataSource: any = {
		data: [],
		total: 0
	}

	@ViewChild("gridList", { static: false }) gridList: GridComponent;
	@ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
	@ViewChild('tongSoTienCongNoTemplate', { static: true }) tongSoTienCongNoTemplate: TemplateRef<any>;
	@ViewChild('tongSoTienCongNoGroupFooter', { static: true }) tongSoTienCongNoGroupFooter: TemplateRef<any>;
	@ViewChild('giaGoiTemplate', { static: true }) giaGoiTemplate: TemplateRef<any>;
	@ViewChild('daThuTemplate', { static: true }) daThuTemplate: TemplateRef<any>;
	@ViewChild('chuaThuTemplate', { static: true }) chuaThuTemplate: TemplateRef<any>;
	@ViewChild('traLaiTemplate', { static: true }) traLaiTemplate: TemplateRef<any>;

	@ViewChild('ngayDangGroupFooter', { static: true }) ngayDangGroupFooter: TemplateRef<any>;
	@ViewChild('daThuGroupFooter', { static: true }) daThuGroupFooter: TemplateRef<any>;
	@ViewChild('chuaThuGroupFooter', { static: true }) chuaThuGroupFooter: TemplateRef<any>;
	@ViewChild('tongDVGroupFooter', { static: true }) tongDVGroupFooter: TemplateRef<any>;
	@ViewChild('traLaiGroupFooter', { static: true }) traLaiGroupFooter: TemplateRef<any>;
	@ViewChild('tenGoiTemplate', { static: true }) tenGoiTemplate: TemplateRef<any>;
	@ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;

	constructor(private route: ActivatedRoute, private notificationService: NotificationService,
		private dialog: MatDialog, private authService: AuthService, private location: Location,
		private apiService: ApiService,) { }

	ngOnInit() {
		this.benhNhanId = this.route.snapshot.params.id;
		if (this.benhNhanId !== undefined && this.benhNhanId !== null) {
			this.getThongTinDaThuGoiQuyetToan(this.benhNhanId);
		}

		this.gridColumns = [
			{ Field: "TrangThaiDisplayName", Title: "Trạng thái", Width: 40, Sortable: false, Template: this.trangThaiTemplate },
			{ Field: "MaGoi", Title: "Mã Gói", Width: 30, Sortable: false },		
			{ Field: "TenGoi", Title: "Tên Gói", Width: 100, Sortable: false, Template: this.tenGoiTemplate },
			{ Field: "NgayDang", Title: "Ngày đăng", Width: 70, Sortable: false, TemplateFooter: this.ngayDangGroupFooter },
			{ Field: "GiaGoi", Title: "Gói giá", Width: 50, Sortable: false, Template: this.giaGoiTemplate },
			{ Field: "DaThu", Title: "Đã thu", Width: 50, Sortable: false, Template: this.daThuTemplate, TemplateFooter: this.daThuGroupFooter },
			{ Field: "ChuaThu", Title: "Chưa thu", Width: 50, Sortable: false, Template: this.chuaThuTemplate, TemplateFooter: this.chuaThuGroupFooter },
			{ Field: "TongDVDaDung", Title: "Tổng DV đã dùng", Width: 50, Sortable: false, Template: this.tongSoTienCongNoTemplate, TemplateFooter: this.tongSoTienCongNoGroupFooter },
			{ Field: "TraLaiBN", Title: "Trả lại", Width: 50, Sortable: false, Template: this.traLaiTemplate, TemplateFooter: this.traLaiGroupFooter },
			{ Field: "", Title: "", Width: 80, Sortable: false, Template: this.actionTemplate },
		];
	}

	getThongTinDaThuGoiQuyetToan(benhNhanId: number) {
		this.showLoadingPopup();
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			this.apiService.get(`ThuNganMarketing/GetDataGoiDaThuQuyetToan?benhNhanId=` + benhNhanId).subscribe((response: any) => {
				if (response != undefined && response != null) {
					this.dataSource.data = response.Data;
					this.goiDaQuyetToanMarketing = response.Data;
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
			case 'totalTongSoTienDaThu':
				return this.dataSource.data.reduce((sum, item) => sum + item.DaThu, 0);
			case 'totalTongSoTienChuaThu':
				return this.dataSource.data.reduce((sum, item) => sum + item.ChuaThu, 0);
			case 'totalTongSoTienCongNo':
				return this.dataSource.data.reduce((sum, item) => sum + item.TongDVDaDung, 0);
			case 'totalTongSoTienTraLai':
				return this.dataSource.data.reduce((sum, item) => sum + item.TraLaiBN, 0);
		}
	}

	QuyetToan(dataItem: any) {
		this.dialog
			.open(ThongTinQuyetToanPopup, {
				disableClose: true, width: "1500px", height: "auto",
				data: { TenGoi: dataItem.TenGoi, goiDichVuId: dataItem.Id, kiemTraQuyetToan: true }
			})
			.afterClosed()
			.subscribe((res) => {
				if (res != undefined && res != null && res != "") {
					this.getThongTinDaThuGoiQuyetToan(this.benhNhanId);
				}
			}, (err: ApiError) => {
				if (err.Message != "Validation Failed") {

				}
			});
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
