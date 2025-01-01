import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { Location } from '@angular/common';
import { SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { FormControl } from '@angular/forms';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { NhanMauXetNghiemSearch } from '../nhan-mau-xet-nghiem.model';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';

import icDone from '@iconify/icons-ic/check-circle';
import icClear from '@iconify/icons-ic/highlight-off';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';

@Component({
    selector: 'app-nhan-mau-xet-nghiem-list',
    templateUrl: './nhan-mau-xet-nghiem-list.component.html',
    styleUrls: ['./nhan-mau-xet-nghiem-list.component.scss']
})

export class NhanMauXetNghiemListComponent implements OnInit {
    documentType: DocumentType = DocumentType.NhanMauXetNghiem;
    nhanMauXetNghiemSearch: NhanMauXetNghiemSearch;
	searchCtrl = new FormControl;
    modelQRCode: any;
    holdQuery: any = null;
    firstSearchString: any;
    isScan: boolean = false;
    baseRoute: string = "/xet-nghiem/nhan-mau";
    
    nhanMauXetNghiemTuNgay: any;
    nhanMauXetNghiemDenNgay: any;
    
    filterColumns: any[] = [];
    gridDanhSachXetNghiemColumns: any[] = [];
    gridNhomXetNghiemColumns: any[] = [];
    gridDichVuXetNghiemColumns: any[] = [];

    sortDanhSachXetNghiem: SortDescriptor[] = [ { field: "SoPhieu", dir: "asc" } ]
    sortNhomXetNghiem: SortDescriptor[] = [ { field: "MaTiepNhan", dir: "asc" }, { field: "NhomDichVuBenhVienId", dir: "asc" } ]
    sortDichVuXetNghiem: SortDescriptor[] = [ { field: "MaDichVu", dir: "asc" } ]
    
    urlGetDataDanhSachXetNghiem = "XetNghiem/GetDanhSachNhanMauXetNghiemForGrid";
	urlGetDataNhomXetNghiem = "XetNghiem/GetDanhSachNhanMauNhomXetNghiemForGrid";
    urlGetDataDichVuXetNghiem = "XetNghiem/GetDanhSachNhanMauDichVuXetNghiemForGrid";
    
    urlGetTotalPageNhomXetNghiem = "XetNghiem/GetTotalPagesDanhSachNhanMauNhomXetNghiemForGrid";
    urlGetTotalPageDichVuXetNghiem = "XetNghiem/GetTotalPagesDanhSachNhanMauDichVuXetNghiemForGrid";

    additionalSearchString: string = null;
    additionalSearchStringNhomDichVu: string = null;
    additionalSearchStringDichVu: string = null;

    icicdone = icicdone;
  	icclose = icClose;
  	icEdit = icEdit;
	icSearch = icSearch;
	icMoreHoriz = icMoreHoriz;
  	icFileExcel = icFileExcel;
    icFilterList = icFilterList;
    icDone = icDone;
    icClear = icClear;
    
    // DSXetNghiem
    @ViewChild('soPhieuDanhSachXetNghiemTemplate', { static: true }) soPhieuDanhSachXetNghiemTemplate: TemplateRef<any>;
    @ViewChild('tinhTrangDanhSachXetNghiemTemplate', { static: true }) tinhTrangDanhSachXetNghiemTemplate: TemplateRef<any>;
    @ViewChild('nguoiGoiMauDanhSachXetNghiemTemplate', { static: true }) nguoiGoiMauDanhSachXetNghiemTemplate: TemplateRef<any>;
    @ViewChild('nguoiNhanMauDanhSachXetNghiemTemplate', { static: true }) nguoiNhanMauDanhSachXetNghiemTemplate: TemplateRef<any>;
    @ViewChild('ngayGoiMauDanhSachXetNghiemTemplate', { static: true }) ngayGoiMauDanhSachXetNghiemTemplate: TemplateRef<any>;
    @ViewChild('ngayNhanMauDanhSachXetNghiemTemplate', { static: true }) ngayNhanMauDanhSachXetNghiemTemplate: TemplateRef<any>;
    @ViewChild('noiTiepNhanDanhSachXetNghiemTemplate', { static: true }) noiTiepNhanDanhSachXetNghiemTemplate: TemplateRef<any>;
    @ViewChild('actionDanhSachXetNghiemTemplate', { static: true }) actionDanhSachXetNghiemTemplate: TemplateRef<any>;

    // NhomXetNghiem
    @ViewChild('nhomDichVuBenhVienNhomXetNghiemTemplate', { static: true }) nhomDichVuBenhVienNhomXetNghiemTemplate: TemplateRef<any>;
	@ViewChild('gioiTinhNhomXetNghiemTemplate', { static: true }) gioiTinhNhomXetNghiemTemplate: TemplateRef<any>;
	@ViewChild('loaiMauNhomXetNghiemTemplate', { static: true }) loaiMauNhomXetNghiemTemplate: TemplateRef<any>;
    
    // DichVuXetNghiem
    @ViewChild('thoiGianChiDinhDichVuXetNghiemTemplate', { static: true }) thoiGianChiDinhDichVuXetNghiemTemplate: TemplateRef<any>;
    @ViewChild('nguoiChiDinhDichVuXetNghiemTemplate', { static: true }) nguoiChiDinhDichVuXetNghiemTemplate: TemplateRef<any>;
    @ViewChild('loaiMauDichVuXetNghiemTemplate', { static: true }) loaiMauDichVuXetNghiemTemplate: TemplateRef<any>;

    @ViewChild('gridDanhSachXetNghiem', { static: false }) gridDanhSachXetNghiem: GridComponent;
    
    constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute, private location: Location,
                private authService: AuthService, private notificationService: NotificationService, private apiService: ApiService) { }

    ngOnInit() {
        this.nhanMauXetNghiemSearch = new NhanMauXetNghiemSearch();

        if (this.route.snapshot.queryParams.holdQuery != undefined) {
			this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        
        if (this.holdQuery != null && LocalStorageHelper.getItem('additionalSearchStringNhanMauXetNghiem') != null) {
			this.additionalSearchString = LocalStorageHelper.getItem('additionalSearchStringNhanMauXetNghiem');     
			this.nhanMauXetNghiemSearch = JSON.parse(this.additionalSearchString);
		} else {
			LocalStorageHelper.setItem('additionalSearchStringNhanMauXetNghiem', null);
			this.additionalSearchString = JSON.stringify(this.nhanMauXetNghiemSearch);
        }

        this.convertDateTimeToUTC();
        this.firstSearchString = JSON.stringify(this.nhanMauXetNghiemSearch);
        this.reverseDateTime();

        this.gridDanhSachXetNghiemColumns = [
			{ Field: "SoPhieu", Title: "Số phiếu", Width: 100, Sortable: true, Template: this.soPhieuDanhSachXetNghiemTemplate },
			{ Field: "NguoiGoiMauId", Title: "Người gửi mẫu", Width: 130, Sortable: true, Template: this.nguoiGoiMauDanhSachXetNghiemTemplate },
			{ Field: "NgayGoiMau", Title: "Ngày gửi mẫu", Width: 100, Sortable: true, Template: this.ngayGoiMauDanhSachXetNghiemTemplate },
			{ Field: "SoLuongMau", Title: "SL Mẫu (KQ/Tổng)", Width: 100, Sortable: false },
			{ Field: "TinhTrang", Title: "Tình trạng", Width: 100, Sortable: true, Template: this.tinhTrangDanhSachXetNghiemTemplate },
			{ Field: "NoiTiepNhanId", Title: "Nơi tiếp nhận", Width: 130, Sortable: true, Template: this.noiTiepNhanDanhSachXetNghiemTemplate },
			{ Field: "NguoiNhanMauId", Title: "Người nhận mẫu", Width: 130, Sortable: true, Template: this.nguoiNhanMauDanhSachXetNghiemTemplate },
			{ Field: "NgayNhanMau", Title: "Ngày nhận mẫu", Width: 100, Sortable: true, Template: this.ngayNhanMauDanhSachXetNghiemTemplate },
			{ Field: "Action", Title: "", Width: 100, Template: this.actionDanhSachXetNghiemTemplate }
        ];
        
        this.gridNhomXetNghiemColumns = [
			{ Field: "NhomDichVuBenhVienId", Title: "Xét nghiệm", Width: 120, Sortable: false, Template: this.nhomDichVuBenhVienNhomXetNghiemTemplate },
            { Field: "Barcode", Title: "Mã Barcode", Width: 80, Sortable: false },
            { Field: "LoaiMauXetNghiems", Title: "Loại mẫu", Width: 120, Sortable: false, Template: this.loaiMauNhomXetNghiemTemplate },
			{ Field: "MaTiepNhan", Title: "Mã TN", Width: 80, Sortable: false },
			{ Field: "MaBenhNhan", Title: "Mã NB", Width: 80, Sortable: false },
			{ Field: "HoTen", Title: "Họ tên", Width: 120, Sortable: false },
			{ Field: "NamSinh", Title: "Năm sinh", Width: 50, Sortable: false },
			{ Field: "GioiTinh", Title: "Giới tính", Width: 50, Sortable: false, Template: this.gioiTinhNhomXetNghiemTemplate }
        ]

        this.gridDichVuXetNghiemColumns = [
            { Field: "MaDichVu", Title: "Mã DV", Width: 50, Sortable: false },
            { Field: "TenDichVu", Title: "Tên DV", Width: 150, Sortable: false },
            { Field: "ThoiGianChiDinh", Title: "Thời gian chỉ định", Width: 100, Sortable: false, Template: this.thoiGianChiDinhDichVuXetNghiemTemplate },
			{ Field: "NguoiChiDinhId", Title: "Người chỉ định", Width: 130, Sortable: false, Template: this.nguoiChiDinhDichVuXetNghiemTemplate },
			{ Field: "BenhPham", Title: "Bệnh phẩm", Width: 100, Sortable: false },
			{ Field: "LoaiMau", Title: "Loại mẫu", Width: 50, Sortable: false, Template: this.loaiMauDichVuXetNghiemTemplate }
        ]

        this.filterColumns = [
			{ Field: "SoPhieu", Title: "Số phiếu" },
			{ Field: "NguoiGoiMauId", Title: "Người gửi mẫu" },
			{ Field: "NgayGoiMau", Title: "Ngày gửi mẫu" },
			{ Field: "SoLuongMau", Title: "SL Mẫu (KQ/Tổng)" },
			{ Field: "TinhTrang", Title: "Tình trạng" },
			{ Field: "NoiTiepNhan", Title: "Nơi tiếp nhận" },
			{ Field: "NguoiNhanMauId", Title: "Người nhận mẫu" },
			{ Field: "NgayNhanMau", Title: "Ngày nhận mẫu" }
		];
    }

    xemChiTiet(id: number) {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
		  this.router.navigate(["/xet-nghiem/nhan-mau/chi-tiet/" + id]);
		} else {
		  this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
    }

    checkboxChange($event, choNhanMau: boolean = false, daNhanMau: boolean = false) { 
		this.router.navigateByUrl("/xet-nghiem/nhan-mau?holdQuery=true"); 

		if (choNhanMau) {
		  this.nhanMauXetNghiemSearch.ChoNhanMau = $event;
		}
		else if (daNhanMau) {
		  this.nhanMauXetNghiemSearch.DaNhanMau = $event;
		}

		this.timKiem();
    }

    clearSearch() {
		if (this.nhanMauXetNghiemSearch.SearchString == "" || this.nhanMauXetNghiemSearch.SearchString == null) {
			this.timKiem();
		}
    }
    
    onKey(event: any) {
		if (event.key == "Enter") {
		  	this.timKiem();
		}
    }
    
    onKeyTuNgay(event: any) {
		if (event.key == "Enter") {
            this.timKiem();
		}
	}

	onKeyDenNgay(event: any) {
		if (event.key == "Enter") {
            this.timKiem();
		}
    }
    
    changeTuNgay(ev: any) {
		this.timKiem();
	}

	changeDenNgay(ev: any) {
		this.timKiem();
    }
    
    exportExcel() {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });	

            this.apiService.postExportExcel<string>('XetNghiem/ExportNhanMauXetNghiem', this.gridDanhSachXetNghiem._gridQueryInfo).subscribe(resultData => {
				const dateTimeNow = new Date();
                CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'NhanMauXetNghiem' + dateTimeNow.getFullYear() + '.xlsx');
                this.dialog.closeAll();
			},
			(err: any) => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
			});
		} else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
    }

    timKiem() {
        if(this.gridDanhSachXetNghiem) {
            this.location.replaceState(this.baseRoute + '?holdQuery=true');
            
            let QueryString = null;
            this.gridDanhSachXetNghiem._additionalSearchString = null;
            QueryString = this.nhanMauXetNghiemSearch.SearchString;
            
            this.convertDateTimeToUTC();
            var query = JSON.stringify(this.nhanMauXetNghiemSearch);
            
            this.gridDanhSachXetNghiem._additionalSearchString = query;
            this.gridDanhSachXetNghiem.searchString = QueryString;
            this.gridDanhSachXetNghiem.search();
    
            this.reverseDateTime();

            LocalStorageHelper.setItem("additionalSearchStringNhanMauXetNghiem", JSON.stringify(this.nhanMauXetNghiemSearch));
        }
    }

    convertDateTimeToUTC() {
		if(this.nhanMauXetNghiemSearch.RangeNgayGoiMau.startDate) {
			this.nhanMauXetNghiemTuNgay = new Date(this.nhanMauXetNghiemSearch.RangeNgayGoiMau.startDate); 
			this.nhanMauXetNghiemSearch.RangeNgayGoiMau.startDate = new Date(Date.UTC(this.nhanMauXetNghiemTuNgay.getFullYear(), this.nhanMauXetNghiemTuNgay.getMonth(), this.nhanMauXetNghiemTuNgay.getDate(), this.nhanMauXetNghiemTuNgay.getHours(), this.nhanMauXetNghiemTuNgay.getMinutes()));
		}

		if(this.nhanMauXetNghiemSearch.RangeNgayGoiMau.endDate) {
			this.nhanMauXetNghiemDenNgay = new Date(this.nhanMauXetNghiemSearch.RangeNgayGoiMau.endDate);
			this.nhanMauXetNghiemSearch.RangeNgayGoiMau.endDate = new Date(Date.UTC(this.nhanMauXetNghiemDenNgay.getFullYear(), this.nhanMauXetNghiemDenNgay.getMonth(), this.nhanMauXetNghiemDenNgay.getDate(), this.nhanMauXetNghiemDenNgay.getHours(), this.nhanMauXetNghiemDenNgay.getMinutes()));
		}
	}

	reverseDateTime() {
		if(this.nhanMauXetNghiemSearch.RangeNgayGoiMau.startDate) {
			this.nhanMauXetNghiemSearch.RangeNgayGoiMau.startDate = new Date(this.nhanMauXetNghiemTuNgay.getFullYear(), this.nhanMauXetNghiemTuNgay.getMonth(), this.nhanMauXetNghiemTuNgay.getDate(), this.nhanMauXetNghiemTuNgay.getHours(), this.nhanMauXetNghiemTuNgay.getMinutes());
		}

		if(this.nhanMauXetNghiemSearch.RangeNgayGoiMau.endDate) {
			this.nhanMauXetNghiemSearch.RangeNgayGoiMau.endDate = new Date(this.nhanMauXetNghiemDenNgay.getFullYear(), this.nhanMauXetNghiemDenNgay.getMonth(), this.nhanMauXetNghiemDenNgay.getDate(), this.nhanMauXetNghiemDenNgay.getHours(), this.nhanMauXetNghiemDenNgay.getMinutes());
		}
	}
    
    tiepNhanMau(dataItem) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "400px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn tiếp nhận (các) mẫu này không?",
            },
        })
        .afterClosed()
        .subscribe((result) => {
            /* result is a string:Yes,No,No answer*/
            if (result == "Yes") {
                this.apiService.post(`XetNghiem/TiepNhanMau?phieuGoiMauXetNghiemId=${dataItem.Id}`).subscribe((res) => {
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Tiếp nhận mẫu"]));
                    this.timKiem();
                }, (err: ApiError) => {
                    this.notificationService.showError(err.Message);
                });
            }
        });
    }
    
    getAdditionalSearchStringNhomDichVu(dataItem) {
        this.convertDateTimeToUTC();
        var query = JSON.stringify(this.nhanMauXetNghiemSearch);
        this.reverseDateTime();
        
        return `${query.substr(0, query.length - 1)},"PhieuGoiMauXetNghiemId":"${dataItem.Id}"}`;
    }
	
	QuetMaQRCodeClick() {
		let elementBarcode: HTMLElement = document.getElementById(
            "barcodeActive"
        ) as HTMLElement;
        if (elementBarcode != undefined) {
            elementBarcode.click();
        }
	}

	changeQR(evt) {
		if (evt != null && typeof evt == "string" && evt.endsWith("@")) {
            var dataTimKiem = evt.split("@");

            if (dataTimKiem.length > 1) {
                this.nhanMauXetNghiemSearch.SearchString = dataTimKiem[0];
            } else {
                this.nhanMauXetNghiemSearch.SearchString = evt.slice(0, -1);
            }

            this.timKiem();
        } else {
            this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
        }
        this.isScan = false;
	}
}
