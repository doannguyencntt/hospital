import {Component, OnInit, ViewChild, TemplateRef, HostListener, Input} from "@angular/core";
import {ChoThuTien, TagItem, TimKiemThongTinBenhNhan, CommonThuTien, TrangThaiDaThuTien} from "../cho-thu-tien.model";
import {MatMenuTrigger, MatDialog} from "@angular/material";
import icSearch from "@iconify/icons-ic/twotone-search";
import {Router, ActivatedRoute} from "@angular/router";
import {DocumentType} from "src/app/shared/enum/document-type.enum";
import icCancel from "@iconify/icons-ic/cancel";
import icicclose from "@iconify/icons-ic/twotone-close";
import icExpandMore from "@iconify/icons-ic/expand-more";
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
import {stagger60ms} from "src/@vex/animations/stagger.animation";
import {fadeInUp400ms} from "src/@vex/animations/fade-in-up.animation";

@Component({
	selector: "app-danh-sach-da-quyet-toan",
	templateUrl: "./danh-sach-da-quyet-toan.component.html",
	styleUrls: ["./danh-sach-da-quyet-toan.component.scss"],
	animations: [stagger60ms, fadeInUp400ms],
})
export class DanhSachDaQuyetToan implements OnInit {
	@Input() tabActive: any = null;

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
	public trangThaiThuTien = new TrangThaiDaThuTien();
	gridThuNganChuaQuyetToanColumns: any[] = [];
	gridThuNganDaQuyetToanColumns: any[] = [];
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
	baseRoute: string = "/danh-sach-thu-tien";

	constructor(private router: Router, private location: Location, private route: ActivatedRoute, private apiService: ApiService, private notificationService: NotificationService, private authService: AuthService, private dialog: MatDialog) {}

	@ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;
	@ViewChild("templateTextSoTienChoXacNhan", {static: true}) templateTextSoTienChoXacNhan: TemplateRef<any>;
	@ViewChild("templateTextSoTienDaXacNhan", {static: true}) templateTextSoTienDaXacNhan: TemplateRef<any>;
	@ViewChild("templateTextSoTienDaQuyetToan", {static: true}) templateTextSoTienDaQuyetToan: TemplateRef<any>;
	@ViewChild("templateTextSoDuTK", {static: true}) templateTextSoDuTK: TemplateRef<any>;
	@ViewChild("templateSTT", {static: true})
	templateSTT: TemplateRef<any>;
	@ViewChild("gridList", {static: false}) gridList: GridComponent;
	@ViewChild("maBenhAnTemplate", {static: true}) maBenhAnTemplate: TemplateRef<any>;
	@ViewChild("maBenhAnemplate", {static: true}) maBenhAnemplate: TemplateRef<any>;
	@ViewChild("actionTemplate", {static: true}) actionTemplate: TemplateRef<any>;

	//Đã quyết toán
	@ViewChild("actionDaQuyetToanTemplate", {static: true}) actionDaQuyetToanTemplate: TemplateRef<any>;
	@ViewChild("templateTextDaQuyetToanSoDuTK", {static: true}) templateTextDaQuyetToanSoDuTK: TemplateRef<any>;

	public keyCode: string = "Enter";

	ngOnInit() {
		this.choThuTien.TabActive = this.tabActive;

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
		this.gridThuNganDaQuyetToanColumns = [
			{Field: "MaBenhAn", Title: "Mã Bệnh Án", Width: 100, Sortable: true, Template: this.maBenhAnTemplate},
			{Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true},
			{Field: "MaBN", Title: "Mã NB", Width: 70, Sortable: true},
			{Field: "HoTen", Title: "Họ tên", Width: 100, Sortable: true},
			{Field: "NamSinh", Title: "Năm Sinh", Width: 80, Sortable: true},
			{Field: "GioiTinhStr", Title: "Giới tính", Width: 100, Sortable: true},
			{Field: "DoiTuong", Title: "Đối tượng", Width: 100, Sortable: true},
			{Field: "KhoaKham", Title: "Khoa", Width: 100, Sortable: true},
			{ Field: "NgayVaoVienStr", Title: "Ngày vào viện", Width: 100, Sortable: true },
			{ Field: "NgayRaVienStr", Title: "Ngày ra viện", Width: 100, Sortable: true },
			// { Field: "SoTienDuTaiKhoan", Title: "Số dư tài khoản", Width: 120, Sortable: true, Template: this.templateTextDaQuyetToanSoDuTK },
			//{ Field: "", Title: "Trạng thái", Width: 150, Template: this.actionDaQuyetToanTemplate }
		];

		this.showTrangThaiThuNgan();
	}

	onTabSelect() {}

	backWithSearch() {
		if (this.route.snapshot.queryParams.loaiThanhToan !== undefined) {
			this.loaiThanhToan = this.route.snapshot.queryParams.loaiThanhToan;
		}
		if (this.route.snapshot.queryParams.loaiThanhToan !== undefined && LocalStorageHelper.getItem("additionalSearchStringThuNganNoiTru") != null) {
			this.additionalSearchString = LocalStorageHelper.getItem("additionalSearchStringThuNganNoiTru");
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
			LocalStorageHelper.setItem("additionalSearchStringThuNganNoiTru", null);
		}
	}

	showTrangThaiThuNgan() {
		if (this.choThuTien.CongNo) this.getInputSearchValue(true, "congno", "Công nợ");
		if (this.choThuTien.DaQuyetToan) this.getInputSearchValue(true, "daquyettoan", "Đã quyết toán");
		//============================= TÌM KIẾM THEO TRẠNG THÁI ==========================================
		this.updateSreachString();
	}

	getInputSearchValue(obj: any, keyValue: any, titleValue: any) {
		let index = this.listTagSearch.findIndex((x) => x.Key == keyValue);
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
		this.choThuTien.CongNo = false;
		this.choThuTien.DaQuyetToan = false;
		this.listTagShowOnHeader = [];
		this.listTagSearch = [];
		if (this.choThuTienTamChoDong.CongNo == true) {
			this.choThuTien.CongNo = true;
			this.getInputSearchValue(true, "congno", "Công nợ");
		}
		if (this.choThuTienTamChoDong.DaQuyetToan == true) {
			this.choThuTien.DaQuyetToan = true;
			this.getInputSearchValue(true, "daquyettoan", "Đã quyết toán");
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

		var queryString = JSON.stringify(this.choThuTien);
		if (this.gridList != undefined) {
			this.gridList.searchString = searchText;
			this.gridList._additionalSearchString = queryString;
			this.gridList.search();
		}

		this.choThuTien.TabActive = 2;
		LocalStorageHelper.setItem("additionalSearchStringThuNganNoiTru", queryString);
		this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0;
		// this.trigger.closeMenu();
	}

	Timkiem() {
		this.trangThaiCommon();
		this.choThuTien.SearchString = this.searchString;
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

		LocalStorageHelper.setItem("additionalSearchStringThuNganNoiTru", queryString);
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
			this.Timkiem();
		}
	}

	clearSearch() {
		this.searchString = "";
		if (this.gridList != undefined) {
			this.gridList.search();
		}
	}

	trangThaiCommon() {
		if (this.choThuTien.CongNo === false && this.choThuTien.DaQuyetToan === false) {
			this.choThuTien.CongNo = true;
			this.choThuTien.DaQuyetToan = true;
			this.getInputSearchValue(true, "", "Công nợ");
			this.getInputSearchValue(true, "daquyettoan", "Đã quyết toán");
		}
		this.choThuTienTamChoDong.CongNo = false;
		this.choThuTienTamChoDong.DaQuyetToan = false;
		if (this.choThuTien.CongNo) this.choThuTienTamChoDong.CongNo = true;
		if (this.choThuTien.DaQuyetToan) this.choThuTienTamChoDong.DaQuyetToan = true;

		if (this.choThuTien.NamSinh != null) this.choThuTien.NamSinh = Math.round(this.choThuTien.NamSinh);
		this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));
	}

	cancelTagSearch(tagKey: any) {
		if (tagKey === "congno") {
			this.choThuTien.CongNo = false;
		}
		if (tagKey === "datamung") {
			this.choThuTien.DaQuyetToan = false;
		}
		if (tagKey != null && tagKey != undefined) {
			this.listTagSearch.splice(
				this.listTagSearch.findIndex((x) => x.Key == tagKey),
				1
			);
			this.listTagShowOnHeader.splice(
				this.listTagShowOnHeader.findIndex((x) => x.Key == tagKey),
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
			this.choThuTien.CongNo = event;
			this.router.navigateByUrl("/danh-sach-thu-dich-vu?loaiThanhToan=" + type);
		}
		this.TimkiemNangCao();
	}

	thongTinChiTietThanhToan(id: any, dathu: any) {
		this.choThuTien.TabActive = 2;
		var queryString = JSON.stringify(this.choThuTien);
		LocalStorageHelper.setItem("additionalSearchStringThuNganNoiTru", queryString);
		this.router.navigateByUrl("/danh-sach-thu-tien-noi-tru/chi-tiet-da-quyet-toan/" + id + "?loaiThanhToan=" + this.trangThaiThuTien.DaQuyetToan);
	}

	extEnterChangePage(data: any) {
		this.router.navigateByUrl("/danh-sach-thu-tien-noi-tru/chi-tiet-da-quyet-toan/" + data.Id + "?loaiThanhToan=" + this.trangThaiThuTien.DaQuyetToan);
	}

	sortDaQuyetToanConfig = [
		{
			field: "CongNo",
			dir: "desc",
		},
		{
			field: "DaQuyetToan",
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
		this.apiService.post<any>("ThuNgan/GetThuNganByMaBNVaMaTT/", timKiemThongTinBenhNhan).subscribe((resultData) => {
			if (resultData !== null && resultData !== undefined) {
				if (resultData.Id !== 0) {
					if (resultData.Type) {
						this.router.navigateByUrl("/danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/" + resultData.Id + "?loaiThanhToan=" + 1);
					} else {
						this.router.navigateByUrl("/danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/" + resultData.Id + "?loaiThanhToan=" + 2);
					}
				}
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
				sort: self.sortDaQuyetToanConfig,
				lazyLoadPage: true,
			};

			self.apiService.postExportExcel<string>("ThuNgan/ExportThuNgan", queryObject).subscribe(
				(resultData) => {
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
