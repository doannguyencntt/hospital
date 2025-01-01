import { Component, OnInit, HostListener, Input, ViewChild } from "@angular/core";
import { stagger60ms } from "src/@vex/animations/stagger.animation";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { ChoThuTien, TagItem } from "../cho-thu-tien-goi-marketing.model";
import icExpandMore from "@iconify/icons-ic/expand-more";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonService } from "src/app/core/utilities/common.helper";
import { LocalStorageHelper } from "src/app/core/utilities/local-storage.helper";
import icSearch from "@iconify/icons-ic/twotone-search";
import { FormControl } from "@angular/forms";
import { Location } from '@angular/common';


@Component({
	selector: "danh-sach-cho-quyet-toan-goi-marketing",
	templateUrl: "./danh-sach-cho-quyet-toan-goi-marketing.component.html",
	styleUrls: ["./danh-sach-cho-quyet-toan-goi-marketing.component.scss"],
	animations: [stagger60ms, fadeInUp400ms],
})

export class DanhSachChoQuyetToanMarketing implements OnInit {
	@Input() tabActive: any = null;
	choThuTien = new ChoThuTien();
	public queryStrings: any;
	public searchString: any;
	public _pageSize = 20;
	public listTagSearch: Array<TagItem>;
	public gridThuNganChuaQuyetToanColumns: any;
	public keyCode: string = "Enter";
	public documentType: DocumentType;
	public listTagShowOnHeader: Array<TagItem>;
	public icExpandMore = icExpandMore;
	public additionalSearchString: string = null;
	public icSearch = icSearch;
	public searchCtrl = new FormControl();
	baseRoute: string = "/danh-sach-thu-goi-marketing";

	public sortConfig = [
		{
			field: "ChuaThanhToan",
			dir: "desc",
		}
	];

	@ViewChild("gridList", { static: true }) gridList: GridComponent;
	@ViewChild("maBenhNhanTemplate", { static: true }) maBenhNhanTemplate;
	@ViewChild("actionTemplate", { static: true }) actionTemplate;

	constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

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

		this.gridThuNganChuaQuyetToanColumns = [
			{ Field: "MaBN", Title: "Mã Bệnh Nhân", Width: 100, Sortable: true, Template: this.maBenhNhanTemplate },
			{ Field: "HoTen", Title: "Họ tên", Width: 100, Sortable: true },
			{ Field: "NamSinh", Title: "Năm Sinh", Width: 80, Sortable: true },
			{ Field: "GioiTinhStr", Title: "Giới tính", Width: 100, Sortable: true },
			{ Field: "CMND", Title: "CMND", Width: 100, Sortable: true },
			{ Field: "DiaChi", Title: "Địa chỉ", Width: 100, Sortable: true },
			{ Field: "", Title: "Trạng thái", Width: 150, Template: this.actionTemplate },
		];
	}

	backWithSearch() {
		if (this.route.snapshot.queryParams.holdQuery != undefined) {
			let holdQuery = this.route.snapshot.queryParams.holdQuery;
			if (holdQuery != null && holdQuery) {
				this.additionalSearchString = LocalStorageHelper.getItem("additionalSearchStringThuNganMarketing");
				this.choThuTien = new ChoThuTien();
				this.choThuTien = JSON.parse(this.additionalSearchString);
				if (this.choThuTien != undefined && this.choThuTien != null) {
					if (this.choThuTien.ThoiDiemTiepNhanTuFormat != undefined && this.choThuTien.ThoiDiemTiepNhanTuFormat != null && this.choThuTien.ThoiDiemTiepNhanTuFormat != "") {
						this.choThuTien.ThoiDiemTiepNhanTuFormat = new Date(this.choThuTien.ThoiDiemTiepNhanTuFormat);
					}
					if (this.choThuTien.ThoiDiemTiepNhanDenFormat != undefined && this.choThuTien.ThoiDiemTiepNhanDenFormat != null && this.choThuTien.ThoiDiemTiepNhanDenFormat != "") {
						this.choThuTien.ThoiDiemTiepNhanDenFormat = new Date(this.choThuTien.ThoiDiemTiepNhanDenFormat);
					}
					this.searchString = this.choThuTien.SearchString;
					if (this.gridList != undefined) {
						this.gridList.searchString = this.choThuTien.SearchString;
					}
				} else {
					LocalStorageHelper.setItem("additionalSearchStringThuNganMarketing", null);
				}
			} else {
				LocalStorageHelper.setItem("additionalSearchStringThuNganMarketing", null);
			}
		}
	}

	extEnterChangePage(event: any) {

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
		this.choThuTien = new ChoThuTien();
		
		this.location.replaceState(this.baseRoute + '?holdQuery=true');
		var searchText = this.searchString != undefined ? this.searchString : "";

		if (this.gridList != undefined) {
			this.gridList.searchString = searchText;
			this.gridList._additionalSearchString = searchText;
			this.gridList.search();
		}

		this.choThuTien.SearchString = searchText;
		this.choThuTien.TabActive = 1;
		var queryString = JSON.stringify(this.choThuTien);
		LocalStorageHelper.setItem("additionalSearchStringThuNganMarketing", queryString);
	}

	QuetMaQRCodeClick() {

	}

	thongTinChiTietThanhToan(id: any) {
		this.router.navigateByUrl("/danh-sach-thu-goi-marketing/chi-tiet-cho-quyet-toan-marketing/" + id);
	}

	@HostListener("document:keydown", ["$event"])
	keyEvent(event: KeyboardEvent) {
		if (event.keyCode == 81 && event.ctrlKey) {
			event.preventDefault();
		}
	}
}
