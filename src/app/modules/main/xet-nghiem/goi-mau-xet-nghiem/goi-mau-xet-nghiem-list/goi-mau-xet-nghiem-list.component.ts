import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Location } from '@angular/common';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GoiMauXetNghiemSearch } from '../goi-mau-xet-nghiem.model';
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
    selector: 'app-goi-mau-xet-nghiem-list',
    templateUrl: './goi-mau-xet-nghiem-list.component.html',
    styleUrls: ['./goi-mau-xet-nghiem-list.component.scss']
})

export class GoiMauXetNghiemListComponent implements OnInit {
    documentType: DocumentType = DocumentType.GoiMauXetNghiem;
    goiMauXetNghiemSearch: GoiMauXetNghiemSearch;
	searchCtrl = new FormControl;
    modelQRCode: any;
    holdQuery: any = null;
    firstSearchString: any;
    isScan: boolean = false;
    baseRoute: string = "/xet-nghiem/goi-mau";

    goiMauXetNghiemTuNgay: any;
    goiMauXetNghiemDenNgay: any;
    
    filterColumns: any[] = [];
    gridDanhSachXetNghiemColumns: any[] = [];
    gridNhomXetNghiemColumns: any[] = [];
    gridDichVuXetNghiemColumns: any[] = [];

    sortDanhSachXetNghiem: SortDescriptor[] = [ { field: "SoPhieu", dir: "asc" } ]
    sortNhomXetNghiem: SortDescriptor[] = [ { field: "MaTiepNhan", dir: "asc" }, { field: "NhomDichVuBenhVienId", dir: "asc" } ]
    sortDichVuXetNghiem: SortDescriptor[] = [ { field: "MaDichVu", dir: "asc" } ]

    // public groupNhomXetNghiem: GroupDescriptor[] = [{
	// 	field: 'XetNghiem', dir: 'asc', aggregates: []
	// }];
    
    urlGetDataDanhSachXetNghiem = "XetNghiem/GetDanhSachGoiMauXetNghiemForGrid";
	urlGetDataNhomXetNghiem = "XetNghiem/GetDanhSachGoiMauNhomXetNghiemForGrid";
    urlGetDataDichVuXetNghiem = "XetNghiem/GetDanhSachGoiMauDichVuXetNghiemForGrid";
    
    urlGetTotalPageNhomXetNghiem = "XetNghiem/GetTotalPagesDanhSachGoiMauNhomXetNghiemForGrid";
    urlGetTotalPageDichVuXetNghiem = "XetNghiem/GetTotalPagesDanhSachGoiMauDichVuXetNghiemForGrid";

    additionalSearchString: string = null;

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
        this.goiMauXetNghiemSearch = new GoiMauXetNghiemSearch();

        if (this.route.snapshot.queryParams.holdQuery != undefined) {
			this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        
        if (this.holdQuery != null && LocalStorageHelper.getItem('additionalSearchStringGoiMauXetNghiem') != null) {
			this.additionalSearchString = LocalStorageHelper.getItem('additionalSearchStringGoiMauXetNghiem');     
			this.goiMauXetNghiemSearch = JSON.parse(this.additionalSearchString);
		} else {
			LocalStorageHelper.setItem('additionalSearchStringGoiMauXetNghiem', null);
			this.additionalSearchString = JSON.stringify(this.goiMauXetNghiemSearch);
        }

        this.convertDateTimeToUTC();
        this.firstSearchString = JSON.stringify(this.goiMauXetNghiemSearch);
        this.reverseDateTime();

        this.gridDanhSachXetNghiemColumns = [
			{ Field: "SoPhieu", Title: "Số phiếu", Width: 100, Sortable: true, Template: this.soPhieuDanhSachXetNghiemTemplate },
			{ Field: "NguoiGoiMauId", Title: "Người gửi mẫu", Width: 150, Sortable: true, Template: this.nguoiGoiMauDanhSachXetNghiemTemplate },
			{ Field: "NgayGoiMau", Title: "Ngày gửi mẫu", Width: 150, Sortable: true, Template: this.ngayGoiMauDanhSachXetNghiemTemplate },
			// { Field: "SoLuongMau", Title: "SL Mẫu (KQ/Tổng)", Width: 100, Sortable: false },
			{ Field: "TinhTrang", Title: "Tình trạng", Width: 150, Sortable: true, Template: this.tinhTrangDanhSachXetNghiemTemplate },
			{ Field: "NoiTiepNhanId", Title: "Nơi tiếp nhận", Width: 150, Sortable: true, Template: this.noiTiepNhanDanhSachXetNghiemTemplate },
			{ Field: "NguoiNhanMauId", Title: "Người nhận mẫu", Width: 150, Sortable: true, Template: this.nguoiNhanMauDanhSachXetNghiemTemplate },
			{ Field: "NgayNhanMau", Title: "Ngày nhận mẫu", Width: 150, Sortable: true, Template: this.ngayNhanMauDanhSachXetNghiemTemplate },
			{ Field: "Action", Title: "", Width: 50, Template: this.actionDanhSachXetNghiemTemplate }
        ];
        
        this.gridNhomXetNghiemColumns = [
			{ Field: "NhomDichVuBenhVienId", Title: "Xét nghiệm", Width: 120, Sortable: false, Template: this.nhomDichVuBenhVienNhomXetNghiemTemplate },
            { Field: "Barcode", Title: "Mã Barcode", Width: 80, Sortable: false },
            { Field: "LoaiMauXetNghiems", Title: "Loại mẫu", Width: 120, Sortable: false, Template: this.loaiMauNhomXetNghiemTemplate },
			{ Field: "MaTiepNhan", Title: "Mã TN", Width: 80, Sortable: false },
			{ Field: "MaBenhNhan", Title: "Mã NB", Width: 80, Sortable: false },
			{ Field: "HoTen", Title: "Họ tên", Width: 120, Sortable: false },
			{ Field: "NamSinh", Title: "Năm sinh", Width: 50, Sortable: false },
			{ Field: "GioiTinh", Title: "Giới tính", Width: 50, Sortable: false, Template: this.gioiTinhNhomXetNghiemTemplate },
			// { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Sortable: true, Template: this.tinhTrangNhomXetNghiemTemplate }
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

    // getAdditionalSearchStringForGridNhomDichVuXetNghiem(phieuGoiMauXetNghiemId: number) {
    //     this.convertDateTimeToUTC();
    //     var query = JSON.stringify(this.goiMauXetNghiemSearch);
    //     this.reverseDateTime();

    //     return `${query.replace(`}`, `,"PhieuGoiMauXetNghiemId":"${phieuGoiMauXetNghiemId}"}`)}`;
    // }

    // getAdditionalSearchStringForGridDichVuXetNghiem(phienXetNghiemId, nhomDichVuBenhVienId) {
    //     return `{ PhienXetNghiemId: ${phienXetNghiemId}, NhomDichVuBenhVienId: ${nhomDichVuBenhVienId} }`
    // }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (event.keyCode == 81 && event.ctrlKey && this.isScan != true) {
            this.isScan = true;
            event.preventDefault();
            this.QuetMaQRCodeClick();
        }
    }

    checkboxChange($event, choNhanMau: boolean = false, daNhanMau: boolean = false) { 
		this.router.navigateByUrl("/xet-nghiem/goi-mau?holdQuery=true"); 

		if (choNhanMau) {
		  this.goiMauXetNghiemSearch.ChoNhanMau = $event;
		}
		else if (daNhanMau) {
		  this.goiMauXetNghiemSearch.DaNhanMau = $event;
		}

		this.timKiem();
    }

    clearSearch() {
		if (this.goiMauXetNghiemSearch.SearchString == "" || this.goiMauXetNghiemSearch.SearchString == null) {
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

    convertDateTimeToUTC() {
		if(this.goiMauXetNghiemSearch.RangeNgayGoiMau.startDate) {
			this.goiMauXetNghiemTuNgay = new Date(this.goiMauXetNghiemSearch.RangeNgayGoiMau.startDate); 
			this.goiMauXetNghiemSearch.RangeNgayGoiMau.startDate = new Date(Date.UTC(this.goiMauXetNghiemTuNgay.getFullYear(), this.goiMauXetNghiemTuNgay.getMonth(), this.goiMauXetNghiemTuNgay.getDate(), this.goiMauXetNghiemTuNgay.getHours(), this.goiMauXetNghiemTuNgay.getMinutes()));
		}

		if(this.goiMauXetNghiemSearch.RangeNgayGoiMau.endDate) {
			this.goiMauXetNghiemDenNgay = new Date(this.goiMauXetNghiemSearch.RangeNgayGoiMau.endDate);
			this.goiMauXetNghiemSearch.RangeNgayGoiMau.endDate = new Date(Date.UTC(this.goiMauXetNghiemDenNgay.getFullYear(), this.goiMauXetNghiemDenNgay.getMonth(), this.goiMauXetNghiemDenNgay.getDate(), this.goiMauXetNghiemDenNgay.getHours(), this.goiMauXetNghiemDenNgay.getMinutes()));
		}
	}

	reverseDateTime() {
		if(this.goiMauXetNghiemSearch.RangeNgayGoiMau.startDate) {
			this.goiMauXetNghiemSearch.RangeNgayGoiMau.startDate = new Date(this.goiMauXetNghiemTuNgay.getFullYear(), this.goiMauXetNghiemTuNgay.getMonth(), this.goiMauXetNghiemTuNgay.getDate(), this.goiMauXetNghiemTuNgay.getHours(), this.goiMauXetNghiemTuNgay.getMinutes());
		}

		if(this.goiMauXetNghiemSearch.RangeNgayGoiMau.endDate) {
			this.goiMauXetNghiemSearch.RangeNgayGoiMau.endDate = new Date(this.goiMauXetNghiemDenNgay.getFullYear(), this.goiMauXetNghiemDenNgay.getMonth(), this.goiMauXetNghiemDenNgay.getDate(), this.goiMauXetNghiemDenNgay.getHours(), this.goiMauXetNghiemDenNgay.getMinutes());
		}
	}
    
    exportExcel() {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });	

            this.apiService.postExportExcel<string>('XetNghiem/ExportGoiMauXetNghiem', this.gridDanhSachXetNghiem._gridQueryInfo).subscribe(resultData => {
				const dateTimeNow = new Date();
                CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'GoiMauXetNghiem' + dateTimeNow.getFullYear() + '.xlsx');
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
    
    xoaPhieuGoiMauXetNghiem(dataItem) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "400px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn xoá phiếu gửi mẫu này không?",
            },
        })
        .afterClosed()
        .subscribe((result) => {
            /* result is a string:Yes,No,No answer*/
            if (result == "Yes") {
                this.apiService.delete<any>("XetNghiem/XoaPhieuGoiMauXetNghiem?id=" + dataItem.Id).subscribe((res) => {
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa']));
                    this.timKiem();
                }, (err: ApiError) => {
                    this.notificationService.showError(err.Message);
                });
            }
        });
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
                this.goiMauXetNghiemSearch.SearchString = dataTimKiem[0];
            } else {
                this.goiMauXetNghiemSearch.SearchString = evt.slice(0, -1);
            }

            this.timKiem();
        } else {
            this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
        }
        this.isScan = false;
    }
    
    xemChiTiet(id: number) {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
		  this.router.navigate(["/xet-nghiem/goi-mau/chi-tiet/" + id]);
		} else {
		  this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
    }
    
    timKiem() {
        if(this.gridDanhSachXetNghiem) {
            this.location.replaceState(this.baseRoute + '?holdQuery=true');
            
            let QueryString = null;
            this.gridDanhSachXetNghiem._additionalSearchString = null;
            QueryString = this.goiMauXetNghiemSearch.SearchString;
            
            this.convertDateTimeToUTC();
            var query = JSON.stringify(this.goiMauXetNghiemSearch);
            
            this.gridDanhSachXetNghiem._additionalSearchString = query;
            this.gridDanhSachXetNghiem.searchString = QueryString;
            this.gridDanhSachXetNghiem.search();
    
            this.reverseDateTime();

            LocalStorageHelper.setItem("additionalSearchStringGoiMauXetNghiem", JSON.stringify(this.goiMauXetNghiemSearch));
        }
    }

    getAdditionalSearchStringNhomDichVu(dataItem) {
        this.convertDateTimeToUTC();
        var query = JSON.stringify(this.goiMauXetNghiemSearch);
        this.reverseDateTime();
        
        return `${query.substr(0, query.length - 1)},"PhieuGoiMauXetNghiemId":"${dataItem.Id}"}`;
    }

    // getLoaiMauDisplay(dataItem) {
    //     if(dataItem) {
    //         return dataItem.LoaiMauXetNghiems.map(p => p.LoaiMauDisplay).join(', ');
    //     }
    // }
}
