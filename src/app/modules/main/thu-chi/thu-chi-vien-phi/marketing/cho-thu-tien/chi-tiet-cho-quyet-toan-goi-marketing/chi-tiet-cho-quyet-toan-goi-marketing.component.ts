import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, HostListener } from "@angular/core";
import icSearch from "@iconify/icons-ic/twotone-search";
import icCheck from "@iconify/icons-ic/twotone-check";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseService } from "src/app/core/services/base.service";
import { MatDialog } from "@angular/material/dialog";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { ApiService } from "src/app/core/services/api.service";
import { ApiError } from "src/app/shared/models/api-error.model";
import { HttpParams } from "@angular/common/http";
import { NotificationService } from "src/app/core/services/notification.service";
import { MultiselectComponent } from "src/app/shared/component/dropdowns/multiselect/multiselect.component";
import { TabStripComponent } from "@progress/kendo-angular-layout";
import { ViewImagePdfComponent } from "src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component";
import { ThongTinPhieuPdfPopupComponent } from "../../../common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component";
import { ThongTinBenhNhan } from "../cho-thu-tien-goi-marketing.model";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from "src/app/core/services/auth.service";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { CommonPdfPopupComponent } from "../../../common/common-pdf-popup/common-pdf-popup.component";
import { ThongTinPhieuNoiTruPopupComponent } from "../../../noi-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component";
@Component({
	selector: "app-chi-tiet-cho-quyet-toan-goi-marketing",
	templateUrl: "./chi-tiet-cho-quyet-toan-goi-marketing.component.html",
	styleUrls: ["./chi-tiet-cho-quyet-toan-goi-marketing.component.scss"],
})

export class ChiTietChoQuyetToanMarketing implements OnInit {
	public documentType: DocumentType = DocumentType.ThuNgan;

	public thongTinBenhNhan: ThongTinBenhNhan;
	public dataSourceChanged: any;
	public soDuTaiKhoanBenhNhan: number;
	public showCanhBaoSoTienNhap: any;
	public thongTinBenhNhantam: any = [];
	public validationErrors: any[] = [];
	public checkSeletedTienMat: any;
	public flagCheckSeletedTienMat

	public benhNhanId: number = 0;
	public typeThanhToan: number = 0;
	public icSearch = icSearch;
	public tabIndex: number = 0;
	public danhsachBHTN: any = [];
	public icCheck = icCheck;
	public confrim: any = null;
	public standardMG: number = 0;
	public listVouchers: number[] = [];
	public listTmpVouchers: number[] = [];
	public thuNganValidationErrors: any;
	public loadingPopup: any;

	public danhSachChuaThanhToans = { data: [], SoTienBenhNhan: 0, HoTen: "", SoLuongBYHTChuaXN: 0 };
	constructor(private route: ActivatedRoute, private authService: AuthService,
		private dialog: MatDialog, private apiService: ApiService, private router: Router,
		private cdRef: ChangeDetectorRef, private notificationService: NotificationService,
		private baseService: BaseService) {
		this.baseService.controllerName = "ThuNgan";
	}

	@ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
	@ViewChild("voucherList", { static: false }) voucherList: MultiselectComponent;
	@ViewChild("actionTemplateSTCongNo", { static: true }) actionTemplateSTCongNo: TemplateRef<any>;
	@ViewChild("actionTemplateSubmitCongNo", { static: true }) actionTemplateSubmitCongNo: TemplateRef<any>;
	@ViewChild("tabDanhSachThuTien", { static: false }) tabDanhSachThuTien: TabStripComponent;
	@ViewChild("multiselect", { static: false }) public multiselect: any;
	onTabSelect(event: any) { }

	public formGroup;
	gridBaoHiemTNs: any[] = [];
	dataSourceDanhSachBHTN = {
		data: [],
		total: 0,
	};

	ngOnInit() {
		this.thongTinBenhNhan = {} as ThongTinBenhNhan;
		this.benhNhanId = this.route.snapshot.params.id;
		if (this.benhNhanId !== undefined && this.benhNhanId !== null) {
			this.getThongTinBenhNhan(this.benhNhanId);
		}
		this.dataSourceDanhSachBHTN.data = this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans;
		this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans;		
	}

	loadingThanhCong(loading: any) {
		if (loading) {
			this.dialog.closeAll();
		}
	}

	getThongTinBenhNhan(benhNhanId) {
		this.showLoadingPopup();
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			this.apiService.get(`ThuNganMarketing/GetThongTinBenhNhan?benhNhanId=` + benhNhanId).subscribe((response: any) => {
				if (response != undefined && response != null) {
					this.thongTinBenhNhan = response;
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

	ngAfterViewChecked() {
		this.cdRef.detectChanges();
	}

	public totalTienCongNo(field: any) {
		switch (field) {
			case "SoTienCongNo":
				return this.dataSourceDanhSachBHTN.data.reduce((sum, item) => sum + item.SoTienCongNo, 0);
		}
	}

	onKey(event: any) {
		if (event.keyCode === 13) {
		}
	}

	inPhieuPdf(taiKhoanThuId: any, taiKhoanChiId: any, loaiTypes: any) {
		this.showLoadingPopup();

		let idYeuCauTiepNhan = 0;
		let phieuHoanUngIds = "";

		this.dialog
			.open(ThongTinPhieuNoiTruPopupComponent, {
				disableClose: false,
				width: "1000px",
				data: { taiKhoanThuId, taiKhoanChiId, idYeuCauTiepNhan, loaiTypes, phieuHoanUngIds },
			})
			.afterClosed()
			.subscribe((result) => {
				this.closeAllDialogs();
			});
	}

	BackToList() {
		this.router.navigate(["/danh-sach-thu-goi-marketing"], { queryParamsHandling: "preserve" });
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

	@HostListener("document:keydown", ["$event"])
	keyEvent(event: KeyboardEvent) {
		if (event.keyCode == 83 && event.ctrlKey) {
			if (this.tabIndex == 0) {
				//this.ThuTien();
			}
			event.preventDefault();
		}

		if (event.keyCode == 27 && !event.ctrlKey) {
			this.BackToList();
			event.preventDefault();
		}
		if (event.keyCode == 81 && event.ctrlKey) {
			event.preventDefault();
		}
	}

}
