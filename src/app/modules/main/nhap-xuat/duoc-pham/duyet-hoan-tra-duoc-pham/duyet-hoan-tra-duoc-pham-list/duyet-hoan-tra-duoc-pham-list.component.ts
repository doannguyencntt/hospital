import { ChangeDetectorRef, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { FormControl } from '@angular/forms';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { HoanTraDuocPhamSearch, rangeDate } from '../duyet-hoan-tra-duoc-pham.model';
import { InPhieuHoanTraCompoment } from '../in-phieu-hoan-tra/in-phieu-hoan-tra.component';

import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icPrint from "@iconify/icons-ic/twotone-print";
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
	selector: 'app-duyet-hoan-tra-list',
	templateUrl: './duyet-hoan-tra-duoc-pham-list.component.html',
	styleUrls: ['./duyet-hoan-tra-duoc-pham-list.component.scss']
})

export class DuyetHoanTraDuocPhamListComponent implements OnInit {
	documentType: DocumentType;
	gridChaColumns: any[] = [];
	gridConColumns: any[] = [];
	filterColumns: any[] = [];
	theFirstSearch: any;
	duyetHoanTraDuocPham: HoanTraDuocPhamSearch;
	holdQuery: any = null;
	additionalSearchString: string = null;
	baseRoute: string = "/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham";

	yeuCauStartDate = null;
	yeuCauEndDate = null;
	duyetStartDate = null;
	duyetEndDate = null;

	urlGetDataGridParentAsync = "HoanTra/GetDanhSachDuyetHoanTraDuocPhamForGridAsync";
	urlGetDataGridChildAsync = "HoanTra/GetDanhSachDuyetHoanTraDuocPhamChiTietForGridAsync";
	urlGetTotalPageGridChild: string = "HoanTra/GetTotalDanhSachDuyetHoanTraDuocPhamChiTietForGridAsync";

	public groups: GroupDescriptor[] = [{
		field: 'Nhom', dir: 'asc', aggregates: []
	}];

	sortDuyetKho: SortDescriptor[] = [
		{
			field: "NgayYeuCau",
			dir: "desc"
		},
		{
			field: "SoPhieu",
			dir: "asc"
		}
	]

	sortDuyetKhoChild: SortDescriptor[] = [{
		field: "Id",
		dir: "asc"
	}]

	icicdone = icicdone;
	icclose = icClose;
	icEdit = icEdit;
	icSearch = icSearch;
	icMoreHoriz = icMoreHoriz;
	icFileExcel = icFileExcel;
	icFilterList = icFilterList;
	icPrint = icPrint;

	searchString: string = `{\"KhoDuocPhamId\":0,\"TenKhoDuocPham\":null,\"DangChoDuyet\":true,\"DaDuyet\":true,\"TuChoiDuyet\":true,\"LoaiNhapKho\":0,\"TenLoaiNhapKho\":null,\"SearchString\":\"\",\"RangeYeuCau\":{\"startDate\":null,\"endDate\":null},\"RangeDuyet\":{\"startDate\":null,\"endDate\":null}}`;
	searchCtrl = new FormControl;

	@ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
	@ViewChild('gridCha', { static: false }) gridCha: GridComponent;
	@ViewChild('vitriTemplate', { static: true }) vitriTemplate: TemplateRef<any>;
	@ViewChild('TinhTrangTemplate', { static: true }) TinhTrangTemplate: TemplateRef<any>;
	@ViewChild('TinhTrangBHYTTemplate', { static: true }) TinhTrangBHYTTemplate: TemplateRef<any>;
	@ViewChild('soPhieuTemplate', { static: true }) soPhieuTemplate: TemplateRef<any>;
	@ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
	@ViewChild('giaNhapTemplate', { static: true }) giaNhapTemplate: TemplateRef<any>;
	@ViewChild('giaBanTemplate', { static: true }) giaBanTemplate: TemplateRef<any>;
	@ViewChild('ngayYeuCauTemplate', { static: true }) ngayYeuCauTemplate: TemplateRef<any>;
	@ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
	@ViewChild('hsdTemplate', { static: true }) hsdTemplate: TemplateRef<any>;
	@ViewChild('soLuongHoanTraTemplate', { static: true }) soLuongHoanTraTemplate: TemplateRef<any>;
	@ViewChild('groupTemplate', { static: true }) groupTemplate: TemplateRef<any>;
	@ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

	constructor(private dialog: MatDialog, private elem: ElementRef, private router: Router, private route: ActivatedRoute, private cd: ChangeDetectorRef, private location: Location,
		private authService: AuthService, private notificationService: NotificationService, private apiService: ApiService) { }

	ngOnInit() {
		this.documentType = DocumentType.DuyetYeuCauHoanTraDuocPham;
		
		this.duyetHoanTraDuocPham = new HoanTraDuocPhamSearch();
		let  start= new Date();
		start.setHours(0,0,0,0);
		let  end = new Date();
		this.duyetHoanTraDuocPham.RangeYeuCau.startDate =start;
		this.duyetHoanTraDuocPham.RangeYeuCau.endDate =end;
		this.duyetHoanTraDuocPham.RangeDuyet = new rangeDate();

		if (this.route.snapshot.queryParams.holdQuery != undefined) {
			this.holdQuery = this.route.snapshot.queryParams.holdQuery;
		}

		if (this.holdQuery != null && LocalStorageHelper.getItem('additionalSearchStringDuyetHoanTraDuocPham') != null) {
			this.additionalSearchString = LocalStorageHelper.getItem('additionalSearchStringDuyetHoanTraDuocPham');
			this.duyetHoanTraDuocPham = JSON.parse(this.additionalSearchString);

			if (this.duyetHoanTraDuocPham.RangeYeuCau.startDate != null)
				this.duyetHoanTraDuocPham.RangeYeuCau.startDate = new Date(this.duyetHoanTraDuocPham.RangeYeuCau.startDate);
			if (this.duyetHoanTraDuocPham.RangeYeuCau.endDate != null)
				this.duyetHoanTraDuocPham.RangeYeuCau.endDate = new Date(this.duyetHoanTraDuocPham.RangeYeuCau.endDate);
			if (this.duyetHoanTraDuocPham.RangeDuyet.startDate != null)
				this.duyetHoanTraDuocPham.RangeDuyet.startDate = new Date(this.duyetHoanTraDuocPham.RangeDuyet.startDate);
			if (this.duyetHoanTraDuocPham.RangeDuyet.endDate != null)
				this.duyetHoanTraDuocPham.RangeDuyet.endDate = new Date(this.duyetHoanTraDuocPham.RangeDuyet.endDate);
		} else {
			LocalStorageHelper.setItem('additionalSearchStringDuyetHoanTraDuocPham', null);
			this.additionalSearchString = JSON.stringify(this.duyetHoanTraDuocPham);
		}

		this.filterColumns = [
			{ Field: "SoPhieu", Title: "Số phiếu", MinWidth: 200, Sortable: true, Template: this.soPhieuTemplate },
			{ Field: "TenNhanVienYeuCau", Title: "Người yêu cầu" },
			{ Field: "TenKhoCanHoanTra", Title: "Hoàn trả từ kho" },
			{ Field: "TenKhoNhanHoanTra", Title: "Hoàn trả về kho" },
			{ Field: "NgayYeuCau", Title: "Ngày yêu cầu" },
			{ Field: "TinhTrangDuyet", Title: "Tình trạng" },
			{ Field: "TenNhanVienDuyet", Title: "Người Duyệt" },
			{ Field: "NgayDuyet", Title: "Ngày Duyệt" },

		];

		this.gridChaColumns = [
			{ Field: "SoPhieu", Title: "Mã", Width: 100, Sortable: true, Template: this.soPhieuTemplate },
			{ Field: "TenNhanVienYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
			{ Field: "TenKhoCanHoanTra", Title: "Hoàn trả từ kho", Width: 200, Sortable: true },
			{ Field: "TenKhoNhanHoanTra", Title: "Hoàn trả về kho", Width: 200, Sortable: true },
			{ Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
			{ Field: "TinhTrangDuyet", Title: "Tình trạng", Width: 150, Sortable: true, Template: this.TinhTrangTemplate },
			{ Field: "TenNhanVienDuyet", Title: "Người Duyệt", Width: 150, Sortable: true },
			{ Field: "NgayDuyet", Title: "Ngày Duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
			{ Field: "Action", Title: "", Width: 50, Template: this.groupTemplate }
		];

		this.gridConColumns = [
			{ Field: "Nhom", Title: "", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
			{ Field: "Ma", Title: "Mã", Width: 100 },
			{ Field: "DuocPham", Title: "Tên Dược Phẩm", Width: 100 },
			{ Field: "DonViTinh", Title: "ĐVT", Width: 100 },
			{ Field: "LoaiBHYT", Title: "Loại", Width: 140, Template: this.TinhTrangBHYTTemplate },
			{ Field: "SoLo", Title: "Số Lô", Width: 100 },
			{ Field: "HanSuDung", Title: "HSD", Width: 140, Template: this.hsdTemplate },
			{ Field: "SoLuongHoanTra", Title: "SL H.Trả", Width: 100, Template: this.soLuongHoanTraTemplate }
		];

		
		this.theFirstSearch = JSON.stringify(this.duyetHoanTraDuocPham);
	}

	xemChiTiet(id: number) {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
			this.router.navigate(["/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/chi-tiet/" + id]);
		} else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
	}

	CheckboxChange($event, dangChoDuyet: boolean = false, tuChoiDuyet: boolean = false, daDuyet: boolean = false) {
		this.router.navigateByUrl("/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham?holdQuery=true");

		if (dangChoDuyet) {
			this.duyetHoanTraDuocPham.DangChoDuyet = $event;
		}
		else if (tuChoiDuyet) {
			this.duyetHoanTraDuocPham.TuChoiDuyet = $event;
		}
		else if (daDuyet) {
			this.duyetHoanTraDuocPham.DaDuyet = $event;
		}

		this.Timkiem();
	}

	Timkiem() {
		this.location.replaceState(this.baseRoute + '?holdQuery=true');

		let QueryString = null;
		this.gridChild._additionalSearchString = null;
		QueryString = this.duyetHoanTraDuocPham.SearchString;

		this.convertDateTimeToUTC();

		var query = JSON.stringify(this.duyetHoanTraDuocPham);
		this.gridChild._additionalSearchString = query;
		this.gridChild.searchString = QueryString;
		this.gridChild.search();

		this.reverseDateTime();
		LocalStorageHelper.setItem("additionalSearchStringDuyetHoanTraDuocPham", JSON.stringify(this.duyetHoanTraDuocPham));

		this.cd.detectChanges();
	}

	convertDateTimeToUTC() {
		if (this.duyetHoanTraDuocPham.RangeYeuCau.startDate) {
			this.yeuCauStartDate = new Date(this.duyetHoanTraDuocPham.RangeYeuCau.startDate);
			this.duyetHoanTraDuocPham.RangeYeuCau.startDate = new Date(Date.UTC(this.yeuCauStartDate.getFullYear(), this.yeuCauStartDate.getMonth(), this.yeuCauStartDate.getDate(), this.yeuCauStartDate.getHours(), this.yeuCauStartDate.getMinutes()));
		}

		if (this.duyetHoanTraDuocPham.RangeYeuCau.endDate) {
			this.yeuCauEndDate = new Date(this.duyetHoanTraDuocPham.RangeYeuCau.endDate);
			this.duyetHoanTraDuocPham.RangeYeuCau.endDate = new Date(Date.UTC(this.yeuCauEndDate.getFullYear(), this.yeuCauEndDate.getMonth(), this.yeuCauEndDate.getDate(), this.yeuCauEndDate.getHours(), this.yeuCauEndDate.getMinutes()));
		}

		if (this.duyetHoanTraDuocPham.RangeDuyet.startDate) {
			this.duyetStartDate = new Date(this.duyetHoanTraDuocPham.RangeDuyet.startDate);
			this.duyetHoanTraDuocPham.RangeDuyet.startDate = new Date(Date.UTC(this.duyetStartDate.getFullYear(), this.duyetStartDate.getMonth(), this.duyetStartDate.getDate(), this.duyetStartDate.getHours(), this.duyetStartDate.getMinutes()));
		}

		if (this.duyetHoanTraDuocPham.RangeDuyet.endDate) {
			this.duyetEndDate = new Date(this.duyetHoanTraDuocPham.RangeDuyet.endDate);
			this.duyetHoanTraDuocPham.RangeDuyet.endDate = new Date(Date.UTC(this.duyetEndDate.getFullYear(), this.duyetEndDate.getMonth(), this.duyetEndDate.getDate(), this.duyetEndDate.getHours(), this.duyetEndDate.getMinutes()));
		}
	}

	reverseDateTime() {
		if (this.duyetHoanTraDuocPham.RangeYeuCau.startDate) {
			this.duyetHoanTraDuocPham.RangeYeuCau.startDate = new Date(this.yeuCauStartDate.getFullYear(), this.yeuCauStartDate.getMonth(), this.yeuCauStartDate.getDate(), this.yeuCauStartDate.getHours(), this.yeuCauStartDate.getMinutes());
		}

		if (this.duyetHoanTraDuocPham.RangeYeuCau.endDate) {
			this.duyetHoanTraDuocPham.RangeYeuCau.endDate = new Date(this.yeuCauEndDate.getFullYear(), this.yeuCauEndDate.getMonth(), this.yeuCauEndDate.getDate(), this.yeuCauEndDate.getHours(), this.yeuCauEndDate.getMinutes());
		}

		if (this.duyetHoanTraDuocPham.RangeDuyet.startDate) {
			this.duyetHoanTraDuocPham.RangeDuyet.startDate = new Date(this.duyetStartDate.getFullYear(), this.duyetStartDate.getMonth(), this.duyetStartDate.getDate(), this.duyetStartDate.getHours(), this.duyetStartDate.getMinutes());
		}

		if (this.duyetHoanTraDuocPham.RangeDuyet.endDate) {
			this.duyetHoanTraDuocPham.RangeDuyet.endDate = new Date(this.duyetEndDate.getFullYear(), this.duyetEndDate.getMonth(), this.duyetEndDate.getDate(), this.duyetEndDate.getHours(), this.duyetEndDate.getMinutes());
		}
	}

	onKey(event: any) {
		if (event.key == "Enter") {
			this.Timkiem();
		}
	}

	onKeyNgayNhap(event: any) {
		if (event.key == "Enter") {
			this.Timkiem();
		}
	}

	onKeyNgayDuyet(event: any) {
		if (event.key == "Enter") {
			this.Timkiem();
		}
	}

	clearSearch() {
		if (this.duyetHoanTraDuocPham.SearchString == "" || this.duyetHoanTraDuocPham.SearchString == null) {
			this.Timkiem();
			// this.gridChild.searchString = "";
			// this.gridChild.search();
		}
	}

	changeNgayNhapRange(ev: any) {
		this.Timkiem();
	}

	changeNgayDuyetRange(ev: any) {
		this.Timkiem();
	}

	exportExcel() {
		const self = this;
		self.showPopupLoadingData();
		if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
			self.apiService.postExportExcel<string>('HoanTra/ExportDuyetHoanTraDuocPham', self.gridCha._gridQueryInfo).subscribe(resultData => {
				self.closePopupLoadingData();
				const dateTimeNow = new Date();

				CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'DuyetHoanTraDuocPham' + dateTimeNow.getFullYear() + '.xlsx');
			},
				(err: any) => {
					self.notificationService.showError(err.Message);
				});
		} else {
			self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
	}

	showPopupLoadingData() {
		this.dialog.open(LoadingComponent, {
			disableClose: true,
			width: '200px',
			height: '90px',
			data: { Title: 'Đang xuất excel...' }
		});
	}

	closePopupLoadingData() {
		this.dialog.closeAll();
	}

	inYeuCauHoanTraDuocPham(id) {
		this.dialog.open(InPhieuHoanTraCompoment, {
			disableClose: true,
			width: "1200px",
			data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: id, LaDuocPham: true, LaTuTruc: true , DuocDuyet: true },
		}).afterClosed().subscribe((result) => { });
	}
}
