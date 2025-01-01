import {Component, OnInit, ViewChild, TemplateRef, HostListener} from "@angular/core";
import {ChoThuTien, CommonThuTien, TagItem, TimKiemThongTinBenhNhan, TrangThaiThuTien} from "../cho-thu-tien.model";
import {MatMenuTrigger, MatDialog} from "@angular/material";
import icSearch from "@iconify/icons-ic/twotone-search";
import {Router, ActivatedRoute} from "@angular/router";
import {DocumentType} from "src/app/shared/enum/document-type.enum";
import icCancel from "@iconify/icons-ic/cancel";
import {FormControl} from "@angular/forms";
import {GridComponent} from "src/app/shared/component/grid/grid.component";
import {CommonService} from "src/app/core/utilities/common.helper";
import {LocalStorageHelper} from "src/app/core/utilities/local-storage.helper";
import {ApiService} from "src/app/core/services/api.service";
import {NotificationService} from "src/app/core/services/notification.service";
import {AuthService} from "src/app/core/services/auth.service";
import {SecurityOperation} from "src/app/shared/enum/security-operation.enum";
import {SystemMessage} from "src/app/shared/configdata/system-message";
import {LoadingComponent} from "src/app/shared/component/dialogs/loading/loading.component";
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import {Location} from "@angular/common";
import icFilterList from "@iconify/icons-ic/twotone-filter-list";
import icExpandMore from "@iconify/icons-ic/expand-more";
import icicclose from "@iconify/icons-ic/twotone-close";

@Component({
	selector: "app-danh-sach-da-thu-tien-benh-nhan",
	templateUrl: "./danh-sach-da-thu-tien-benh-nhan.component.html",
	styleUrls: ["./danh-sach-da-thu-tien-benh-nhan.component.scss"],
})
export class DanhSachThuNganDaThuTienBenhNhanComponent implements OnInit {
	public queryStrings: any;
	public loaiThanhToan: string = "0";
	public kiemTraDanhSachThanhToan: boolean = true;
	public kiemTraDanhSachDaThanhToan: boolean = false;
	public _pageSize = 20;
	public allDaThuChuaThu: boolean = true;
	public dathu: boolean = true;
	public chuaThu: boolean = true;
	public timKiemThongTinBenhNhan = {} as TimKiemThongTinBenhNhan;
	public STT: number = 1;
	public commonThuTien = new CommonThuTien();
	public trangThaiThuTien = new TrangThaiThuTien();

	gridThuNganColumns: any[] = [];
	gridThuNganChoThuPhiColumns: any[] = [];
	gridThuNganChoThuDaThuPhiColumns: any[] = [];
	icSearch = icSearch;
	icCancel = icCancel;
	icExpandMore = icExpandMore;
	listTagSearch: Array<TagItem>;
	public listTagShowOnHeader: Array<TagItem>;
	choThuTien = new ChoThuTien();
	choThuTienTamChoDong = new ChoThuTien();
	choThuTienDefault = new ChoThuTien();
	showCancelSearch: boolean = false;
	searchString: string;
	icicclose = icicclose;
	searchCtrl = new FormControl();
	documentType: DocumentType;
	modelQRCode: any;
	isScanF1: boolean = false;
	additionalSearchString: string = null;
	icFileExcel = icFileExcel;
	showTrangThaiTN: boolean = false;
	icFilterList = icFilterList;
	baseRoute: string = "/danh-sach-thu-dich-vu";
	constructor(private router: Router, private location: Location, private route: ActivatedRoute, private apiService: ApiService, private notificationService: NotificationService, private authService: AuthService, private dialog: MatDialog) {}
	@ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;
	@ViewChild("templateTextSoTienChoXacNhan", {static: true}) templateTextSoTienChoXacNhan: TemplateRef<any>;
	@ViewChild("templateTextSoTienDaXacNhan", {static: true}) templateTextSoTienDaXacNhan: TemplateRef<any>;
	@ViewChild("templateTextSoTienDaTamUng", {static: true}) templateTextSoTienDaTamUng: TemplateRef<any>;
	@ViewChild("templateTextSoDuTK", {static: true}) templateTextSoDuTK: TemplateRef<any>;
	@ViewChild("templateSTT", {static: true})
	templateSTT: TemplateRef<any>;
	@ViewChild("gridList", {static: false}) gridList: GridComponent;
	@ViewChild("maTNTemplate", {static: true}) maTNTemplate: TemplateRef<any>;
	@ViewChild("actionTemplate", {static: true}) actionTemplate: TemplateRef<any>;
	public keyCode: string = "Enter";

	ngOnInit() {
		this.documentType = DocumentType.ThuNgan;
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
		this.gridThuNganColumns = [
			{Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate},
			{Field: "MaBN", Title: "Mã NB", Width: 70, Sortable: true},
			{Field: "HoTen", Title: "Họ tên", MinWidth: 90, Sortable: true},
			{Field: "NamSinh", Title: "Năm Sinh", Width: 80, Sortable: true},
			{Field: "GioiTinhStr", Title: "Giới tính", Width: 100, Sortable: true},
			{Field: "DoiTuong", Title: "Đối tượng", Width: 100, Sortable: true},
			{Field: "SoTienTamUng", Title: "Số tiền đã tạm ứng", Width: 150, Sortable: true, Template: this.templateTextSoTienDaTamUng},
			{Field: "SoTienBNDaTT", Title: "Số tiền đã thu", Sortable: false, Width: 200, Template: this.templateTextSoTienDaXacNhan},
			{Field: "ThoiDiemTiepNhanDisplay", Title: "Tiếp nhận lúc", Sortable: true, Width: 150},
		];
		this.showTrangThaiThuNgan();
	}

	backWithSearch() {
		if (this.route.snapshot.queryParams.loaiThanhToan !== undefined) {
			this.loaiThanhToan = this.route.snapshot.queryParams.loaiThanhToan;
		}
		if (this.route.snapshot.queryParams.loaiThanhToan !== undefined && LocalStorageHelper.getItem("additionalSearchStringThuNgan") != null) {
			this.additionalSearchString = LocalStorageHelper.getItem("additionalSearchStringThuNgan");
			this.choThuTien = new ChoThuTien();
			this.choThuTien = JSON.parse(this.additionalSearchString);
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
			LocalStorageHelper.setItem("additionalSearchStringThuNgan", null);
		}
	}

	showTrangThaiThuNgan() {
		if (this.choThuTien.DaThu) this.getInputSearchValue(true, "chothu", "Chờ Thu");
		this.updateSreachString();
	}

	getInputSearchValue(obj: any, keyValue: any, titleValue: any) {
		let index = this.listTagSearch.findIndex(x => x.Key == keyValue);
		if (obj) {
			let valueFormat = undefined;
			if (obj) {
				valueFormat = obj;
				let item = new TagItem();
				item.Key = keyValue;
				item.Value = valueFormat;
				item.Title = titleValue;
				this.listTagSearch.push(item);
			} else {
				this.listTagSearch[index].Value = valueFormat;
			}
		} else {
			if (index != -1) {
				this.listTagSearch.splice(index, 1);
			}
		}
		this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));
	}

	updateSreachString() {
		var queryString = JSON.stringify(this.choThuTien);
		this.queryStrings = queryString;
		if (this.gridList != undefined) {
			this.gridList.searchString = this.choThuTien.SearchString;
			this.gridList.search();
		}
	}

	thoiDiemTNChange() {
		this.TimkiemNangCao();
	}

	cancelSearch() {
		this.choThuTien = new ChoThuTien();
		this.listTagSearch = new Array<TagItem>();
		this.listTagShowOnHeader = new Array<TagItem>();
		var queryString = JSON.stringify(this.choThuTien);

		if (this.gridList != undefined) {
			this.gridList._additionalSearchString = queryString;
			this.gridList.search();
		}

		this.showCancelSearch = false;
	}

	closeMenu() {
		this.choThuTien.DaThu = false;
		this.listTagShowOnHeader = [];
		this.listTagSearch = [];
		if (this.choThuTienTamChoDong.DaThu == true) {
			this.choThuTien.DaThu = true;
			this.getInputSearchValue(true, "dathu", "Đã Thu");
		}
	}

	TimkiemNangCao() {
		this.location.replaceState(this.baseRoute + "?loaiThanhToan=0");

		this.trangThaiCommon();
		var searchText = this.searchString != undefined ? this.searchString : "";
		this.choThuTien.SearchString = searchText;

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

		this.choThuTien.TabActive = 2;
		var queryString = JSON.stringify(this.choThuTien);
		if (this.gridList != undefined) {
			this.gridList.searchString = searchText;
			this.gridList._additionalSearchString = queryString;
			this.gridList.search();
		}
		LocalStorageHelper.setItem("additionalSearchStringThuNgan", queryString);
		this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0;
	}

	Timkiem() {
		this.trangThaiCommon();
		this.choThuTien.SearchString = this.searchString;
		this.choThuTien.TabActive = 2;

		var queryString = JSON.stringify(this.choThuTien);
		let QueryString = null;
		if (this.searchString != null) {
			QueryString = this.searchString;
			this.showTrangThaiTN = true;
		}
		if (this.gridList != undefined) {
			this.gridList.searchString = QueryString;
			this.gridList._additionalSearchString = queryString;
			this.gridList.search();
		}
		LocalStorageHelper.setItem("additionalSearchStringThuNgan", queryString);
		this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0;
	}

	timeoutSearchChange: any;
	searchChanges(event) {
		//xóa sreach trước đó
		var self = this;
		if (this.timeoutSearchChange != null) {
			clearTimeout(this.timeoutSearchChange);
			this.timeoutSearchChange = null;
		}
		this.timeoutSearchChange = setTimeout(function () {
			if (event !== undefined && event !== null && event.endsWith("@")) {
				var dataTimKiem = event.split("|");
				if (dataTimKiem.length > 1) {
					self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
					self.searchString = dataTimKiem[0];
				} else {
					self.searchString = event.slice(0, -1);
					self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = event.slice(0, -1);
				}
				self.getThongTinYeuCauBenhNhan(self.timKiemThongTinBenhNhan);
			}
			if (event != undefined && (event == null || event == "")) {
				self.gridList.searchString = null;
				//self.TimkiemNangCao();
			}
		}, 100);
	}

	onKey(event: any) {
		if (event.key == "Enter") {
			this.TimkiemNangCao();
		}
	}

	clearSearch() {
		this.searchString = "";
		if (this.gridList != undefined) {
			this.gridList.search();
		}
	}

	trangThaiCommon() {
		if (this.choThuTien.DaThu === false) {
			this.choThuTien.DaThu = true;
			this.getInputSearchValue(true, "dathu", "Đã Thu");
		}
		this.choThuTienTamChoDong.DaThu = false;
		if (this.choThuTien.DaThu) this.choThuTienTamChoDong.DaThu = true;
		if (this.choThuTien.NamSinh != null) this.choThuTien.NamSinh = Math.round(this.choThuTien.NamSinh);
		this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));
	}

	cancelTagSearch(tagKey: any) {
		if (tagKey === "dathu") {
			this.choThuTien.DaThu = false;
		}
		if (tagKey != null && tagKey != undefined) {
			this.listTagSearch.splice(
				this.listTagSearch.findIndex(x => x.Key == tagKey),
				1
			);
			this.listTagShowOnHeader.splice(
				this.listTagShowOnHeader.findIndex(x => x.Key == tagKey),
				1
			);
			if (this.listTagSearch.length == 0) {
				this.cancelSearch();
				return;
			}
			for (let item in this.choThuTien) {
				if (item == tagKey) {
					this.choThuTien[item] = this.choThuTienDefault[item];
				}
			}
			this.TimkiemNangCao();
		}
	}

	checkTrangThai(event: any, type: number) {
		if (type == 1) {
			this.choThuTien.DaThu = event;
			this.router.navigateByUrl("/danh-sach-thu-dich-vu?loaiThanhToan=" + type);
		}
		this.TimkiemNangCao();
	}

	routerLink(id: any, dathu: any) {
		this.choThuTien.TabActive = 2;
		var queryString = JSON.stringify(this.choThuTien);
		LocalStorageHelper.setItem("additionalSearchStringThuNgan", queryString);

		this.router.navigateByUrl("/danh-sach-thu-dich-vu/thong-tin-chi-tiet-da-thu-tien/" + id + "?loaiThanhToan=" + 1);
	}

	thongTinChiTietThanhToan(id: any, dathu: any) {
		this.routerLink(id, dathu);
	}

	extEnterChangePage(data: any) {
		this.routerLink(data.Id, data);
	}

	sortConfig = [
		{
			field: "Id",
			dir: "desc",
		},
	];

	QuetMaQRCodeClick() {
		let elementBarcode: HTMLElement = document.getElementById("barcodeActive") as HTMLElement;
		if (elementBarcode != undefined) {
			elementBarcode.click();
		}
	}

	changeQR($event) {
		if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
			this.modelQRCode = $event;
			var dataTimKiem = $event.split("|");
			if (dataTimKiem.length > 1) {
				this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
			} else {
				this.searchString = $event.slice(0, -1);
				this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = $event.slice(0, -1);
			}
			this.getThongTinYeuCauBenhNhan(this.timKiemThongTinBenhNhan);
		} else {
			this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
		}
		this.isScanF1 = false;
	}

	getThongTinYeuCauBenhNhan(timKiemThongTinBenhNhan: TimKiemThongTinBenhNhan) {
		this.apiService.post<any>("ThuNgan/GetThuNganByMaBNVaMaTT/", timKiemThongTinBenhNhan).subscribe(resultData => {
			if (resultData !== null && resultData !== undefined) {
				this.router.navigateByUrl("/danh-sach-thu-dich-vu/thong-tin-chi-tiet-da-thu-tien/" + resultData.Id + "?loaiThanhToan=" + 1);
			} else {
				this.notificationService.showError(this.commonThuTien.ErrorKhongTimThayThongTin);
			}
		});
	}

	exportExcel() {
		const self = this;
		self.showPopupLoadingData();
		if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
			var queryString = JSON.stringify(this.choThuTien);
			var searchText = self.searchString != undefined ? self.searchString : "";
			searchText = CommonService.convertSpecialXML(searchText);
			searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
			searchText = btoa(unescape(encodeURIComponent("<AdvancedQueryParameters>" + searchText + "</AdvancedQueryParameters>")));

			var queryObject: any = {
				skip: 0,
				modifiedBy: 0,
				take: 50,
				searchString: searchText,
				additionalSearchString: queryString,
				searchTerms: searchText,
				sort: self.sortConfig,
				lazyLoadPage: true,
			};

			self.apiService.postExportExcel<string>("ThuNgan/ExportThuNgan", queryObject).subscribe(
				resultData => {
					self.closePopupLoadingData();
					const dateTimeNow = new Date();
					CommonService.downLoadFile(resultData, "application/vnd.ms-excel", "ThuNgan" + dateTimeNow.getFullYear() + ".xlsx");
				},
				(err: any) => {
					self.notificationService.showError(err.Message);
					self.closePopupLoadingData();
				}
			);
		} else {
			self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
	}

	showPopupLoadingData() {
		this.dialog.open(LoadingComponent, {
			disableClose: true,
			width: "200px",
			height: "90px",
			data: {Title: "Đang xuất excel..."},
		});
	}

	closePopupLoadingData() {
		this.dialog.closeAll();
	}

	@HostListener("document:keydown", ["$event"])
	keyEvent(event: KeyboardEvent) {
		if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
			event.preventDefault();
			this.QuetMaQRCodeClick();
		}
	}
}
