import { Component, OnInit, ViewChild, TemplateRef, HostListener, Input } from "@angular/core";
import { MatMenuTrigger, MatDialog } from "@angular/material";
import icSearch from "@iconify/icons-ic/twotone-search";
import { Router, ActivatedRoute } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import icCancel from "@iconify/icons-ic/cancel";
import icicclose from "@iconify/icons-ic/twotone-close";
import icExpandMore from "@iconify/icons-ic/expand-more";
import { FormControl } from "@angular/forms";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { CommonService } from "src/app/core/utilities/common.helper";
import { LocalStorageHelper } from "src/app/core/utilities/local-storage.helper";
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { AuthService } from "src/app/core/services/auth.service";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import { Location } from "@angular/common";
import icFilterList from "@iconify/icons-ic/twotone-filter-list";
import { stagger60ms } from "src/@vex/animations/stagger.animation";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { ChoThuTien, TagItem, TimKiemThongTinBenhNhan } from "../cho-thu-tien-goi-marketing.model";

@Component({
	selector: "app-danh-sach-da-quyet-toan-goi-marketing",
	templateUrl: "./danh-sach-da-quyet-toan-goi-marketing.component.html",
	styleUrls: ["./danh-sach-da-quyet-toan-goi-marketing.component.scss"],
	animations: [stagger60ms, fadeInUp400ms],
})

export class DanhSachDaQuyetToanMarketing implements OnInit {
	@Input() tabActive: any = null;
	choThuTien = new ChoThuTien();
	public queryStrings: any;
	public searchString: any;
	public _pageSize = 20;
	public listTagSearch: Array<TagItem>;
	public gridThuNganDaQuyetToanColumns: any;
	public keyCode: string = "Enter";
	public documentType: DocumentType;
	public listTagShowOnHeader: Array<TagItem>;
	public icExpandMore = icExpandMore;
	public additionalSearchString: string = null;
	public icSearch = icSearch;
	public searchCtrl = new FormControl();
	public sortConfig = [
		{
			field: "Id",
			dir: "asc",
		}
	];

	@ViewChild("gridList", { static: false }) gridList: GridComponent;
	@ViewChild("maBenhNhanTemplate", { static: true }) maBenhNhanTemplate;
	@ViewChild("actionTemplate", { static: true }) actionTemplate;

	constructor(private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		this.documentType = DocumentType.ThuNgan;

		this.choThuTien.TabActive = this.tabActive;
		this.listTagSearch = new Array<TagItem>();

		let dateNow = new Date();
		this.choThuTien.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
		this.choThuTien.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
		
		if (this.choThuTien.ThoiDiemTiepNhanTuFormat != null) {
			this.choThuTien.FromDate = CommonService.formatDateTime(this.choThuTien.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
		} else {
			this.choThuTien.FromDate = null;
		}

		if (this.choThuTien.ThoiDiemTiepNhanDenFormat != null) {
			this.choThuTien.ToDate = CommonService.formatDateTime(this.choThuTien.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
		} else {
			this.choThuTien.ToDate = null;
		}

		this.backWithSearch();

		this.gridThuNganDaQuyetToanColumns = [
			{ Field: "MaBN", Title: "Mã Bệnh Nhân", Width: 100, Sortable: true, Template: this.maBenhNhanTemplate },
			{ Field: "HoTen", Title: "Họ tên", Width: 80, Sortable: true },
			{ Field: "NamSinh", Title: "Năm Sinh", Width: 80, Sortable: true },
			{ Field: "GioiTinhStr", Title: "Giới tính", Width: 100, Sortable: true },
			{ Field: "CMND", Title: "CMND", Width: 100, Sortable: true },
			{ Field: "DiaChi", Title: "Địa chỉ", Width: 250, Sortable: true }			
		];
	}

	backWithSearch() {
		if (LocalStorageHelper.getItem("additionalSearchStringThuNganMarketing") != null) {
			this.additionalSearchString = LocalStorageHelper.getItem("additionalSearchStringThuNganMarketing");
			this.choThuTien = new ChoThuTien();

			this.choThuTien = JSON.parse(this.additionalSearchString);
			if(this.choThuTien != undefined && this.choThuTien != null){
				if (this.choThuTien.ThoiDiemTiepNhanTuFormat != undefined && this.choThuTien.ThoiDiemTiepNhanTuFormat != null && this.choThuTien.ThoiDiemTiepNhanTuFormat != "") {
					this.choThuTien.ThoiDiemTiepNhanTuFormat = new Date(this.choThuTien.ThoiDiemTiepNhanTuFormat);
				}
				if (this.choThuTien.ThoiDiemTiepNhanDenFormat != undefined && this.choThuTien.ThoiDiemTiepNhanDenFormat != null && this.choThuTien.ThoiDiemTiepNhanDenFormat != "") {
					this.choThuTien.ThoiDiemTiepNhanDenFormat = new Date(this.choThuTien.ThoiDiemTiepNhanDenFormat);
				}
				this.searchString = this.choThuTien.SearchString;
				if (this.gridList != undefined) {
					this.gridList.searchString = this.choThuTien.SearchString;
					this.TimkiemNangCao();
				}
			}
			else {
				LocalStorageHelper.setItem("additionalSearchStringThuNganMarketing", null);
			}
		} else {
			LocalStorageHelper.setItem("additionalSearchStringThuNganMarketing", null);
		}

	}

	extEnterChangePage(event:any) {

	}

	clearSearch() {
		this.searchString = "";
		if (this.gridList != undefined) {
			this.gridList.search();
		}
	}

	onKey(event: any) {
		if (event.key == "Enter") {
			this.TimkiemNangCao();
		}
	}

	searchChanges(event: any) {
		if (event != undefined && (event == null || event == "")) {
			this.gridList.searchString = null;
			//this.TimkiemNangCao();
		}		
	}

	TimkiemNangCao() {
		var searchText = this.searchString != undefined ? this.searchString : "";
		
		if (this.gridList != undefined) {
			this.gridList.searchString = searchText;
			this.gridList._additionalSearchString = searchText;
			this.gridList.search();
		}

		this.choThuTien.TabActive = 2;
		this.choThuTien.SearchString = searchText;
		var queryString = JSON.stringify(this.choThuTien);
		LocalStorageHelper.setItem("additionalSearchStringThuNganMarketing", queryString);
	}

	QuetMaQRCodeClick() {

	}

	thongTinChiTietThanhToan(id: any) {
		this.router.navigateByUrl("/danh-sach-thu-goi-marketing/chi-tiet-da-quyet-toan-marketing/" + id);
	}

	@HostListener("document:keydown", ["$event"])
	keyEvent(event: KeyboardEvent) {
		if (event.keyCode == 81 && event.ctrlKey) {
			event.preventDefault();
		}
	}
}
