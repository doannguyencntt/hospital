import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { KyDuTruSearch } from '../ky-du-tru.model';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';

import icAdd from '@iconify/icons-ic/twotone-add';
import icDone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDetail from '@iconify/icons-ic/twotone-apps';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCopy from '@iconify/icons-ic/content-copy';

@Component({
	selector: 'app-ky-du-tru-list',
	templateUrl: './ky-du-tru-list.component.html',
	styleUrls: ['./ky-du-tru-list.component.scss']
})

export class KyDuTruListComponent implements OnInit {
    documentType: DocumentType = DocumentType.KyDuTru;
    kyDuTruSearch: KyDuTruSearch;
    searchCtrl = new FormControl;
    baseRoute: string = "/danh-muc/nhom-he-thong/benh-vien/ky-du-tru";

    holdQuery: any = null;
    additionalSearchString: string = null;
    firstSearchString: any;
      
    apDungStartDate = null;
	apDungEndDate = null;
	lapStartDate = null;
	lapEndDate = null;

    gridColumns: any[] = [];
    filterColumns: any[] = [];

    icAdd = icAdd;
	icdone = icDone;
	icclose = icClose;
	icDelete = icDelete;
	icEdit = icEdit;
	icMoreHoriz = icMoreHoriz;
    icDetail = icDetail;
    icSearch = icSearch;
    icFileExcel = icFileExcel;
    icFilterList = icFilterList;
    icCopy = icCopy;

	@ViewChild('tuNgayTemplate', { static: true }) tuNgayTemplate: TemplateRef<any>;
	@ViewChild('denNgayTemplate', { static: true }) denNgayTemplate: TemplateRef<any>;
	@ViewChild('ngayTaoTemplate', { static: true }) ngayTaoTemplate: TemplateRef<any>;
	@ViewChild('ngayBatDauLapTemplate', { static: true }) ngayBatDauLapTemplate: TemplateRef<any>;
	@ViewChild('ngayKetThucLapTemplate', { static: true }) ngayKetThucLapTemplate: TemplateRef<any>;
	@ViewChild('nhanVienTaoTemplate', { static: true }) nhanVienTaoTemplate: TemplateRef<any>;
	@ViewChild('hieuLucTemplate', { static: true }) hieuLucTemplate: TemplateRef<any>;
	@ViewChild('groupTemplate', { static: true }) groupTemplate: TemplateRef<any>;
	@ViewChild(GridComponent, {static: false}) gridChild: GridComponent;
	
	constructor(private authService: AuthService, private notificationService: NotificationService, private apiService: ApiService,
				private dialog: MatDialog, private router: Router, private route: ActivatedRoute, private location: Location) { }

	ngOnInit() {
        this.kyDuTruSearch = new KyDuTruSearch();

        if (this.route.snapshot.queryParams.holdQuery != undefined) {
			this.holdQuery = this.route.snapshot.queryParams.holdQuery;
		}

		if (this.holdQuery != null && LocalStorageHelper.getItem('additionalSearchStringKyDuTru') != null) {
			this.additionalSearchString = LocalStorageHelper.getItem('additionalSearchStringKyDuTru');     
			this.kyDuTruSearch = JSON.parse(this.additionalSearchString);

			if (this.kyDuTruSearch.RangeApDung.startDate != null)
				this.kyDuTruSearch.RangeApDung.startDate = new Date(this.kyDuTruSearch.RangeApDung.startDate);
			if (this.kyDuTruSearch.RangeApDung.endDate != null)
				this.kyDuTruSearch.RangeApDung.endDate = new Date(this.kyDuTruSearch.RangeApDung.endDate);
			if (this.kyDuTruSearch.RangeLap.startDate != null)
				this.kyDuTruSearch.RangeLap.startDate = new Date(this.kyDuTruSearch.RangeLap.startDate);
			if (this.kyDuTruSearch.RangeLap.endDate != null)
                this.kyDuTruSearch.RangeLap.endDate = new Date(this.kyDuTruSearch.RangeLap.endDate);
                
            this.convertDateTimeToUTC();
            this.firstSearchString = JSON.stringify(this.kyDuTruSearch);
            this.reverseDateTime();
		} else {
			LocalStorageHelper.setItem('additionalSearchStringKyDuTru', null);
			this.additionalSearchString = JSON.stringify(this.kyDuTruSearch);
		}

		this.gridColumns = [
            // { Field: "TuNgay", Title: "Từ ngày", Width: 200, Sortable: true, Template: this.tuNgayTemplate },
            // { Field: "DenNgay", Title: "Đến ngày", Width: 200, Sortable: true, Template: this.denNgayTemplate },
            { Field: "KyDuTru", Title: "Kỳ dự trù", Width: 200, Sortable: true, LinkDetail: true },
            { Field: "ApDung", Title: "Áp dụng", Width: 200, Sortable: true },
            { Field: "NgayBatDauLap", Title: "Ngày bắt đầu lập", Width: 200, Sortable: true, Template: this.ngayBatDauLapTemplate },
            { Field: "NgayKetThucLap", Title: "Ngày kết thúc lập", Width: 200, Sortable: true, Template: this.ngayKetThucLapTemplate },
            { Field: "NhanVienTaoId", Title: "Người tạo", Width: 200, Sortable: true, Template: this.nhanVienTaoTemplate },
            { Field: "NgayTao", Title: "Ngày tạo", Width: 200, Sortable: true, Template: this.ngayTaoTemplate },
            { Field: "HieuLuc", Title: "Tình trạng", Width: 150, Sortable: false, Template: this.hieuLucTemplate },
            { Field: "Action", Title: "", Width: 50, Template: this.groupTemplate }
        ];

        this.filterColumns = [
			// { Field: "TuNgay", Title: "Từ ngày" },
            // { Field: "DenNgay", Title: "Đến ngày" },
            { Field: "KyDuTru", Title: "Kỳ dự trù" },
            { Field: "ApDung", Title: "Áp dụng" },
            { Field: "NhanVienTaoId", Title: "Người tạo" },
            { Field: "NgayTao", Title: "Ngày tạo" },
            { Field: "NgayBatDauLap", Title: "Ngày bắt đầu lập" },
            { Field: "NgayKetThucLap", Title: "Ngày kết thúc lập" },
            { Field: "HieuLuc", Title: "Tình trạng" }
        ];
    }
    
    add() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/ky-du-tru/them']);
    }

	updateTinhTrang(dataItem: any) {
        let self = this;
        let comfirm = dataItem.HieuLuc ? "ngừng sử dụng" : "sử dụng";
    
        if(self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "kỳ dự trù"]) }
            }).afterClosed().subscribe(res => {/* result is a string:Yes,No,No answer*/
                if (res == "Yes") {
                    self.apiService.post(`KyDuTru/KichHoatTrangThai?id=${dataItem.Id}`).subscribe(() => {
                        self.gridChild.search();
            
                        dataItem.HieuLuc ?
                        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Ngừng sử dụng"])) :
                        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Sử dụng"]));
                    }, (err: any) => {
                        self.notificationService.showError(err.Message);
                    });
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
	}
	
	edit(dataItem) {
        if(dataItem) {
            this.router.navigate([`/danh-muc/nhom-he-thong/benh-vien/ky-du-tru/chinh-sua/${dataItem.Id}`]);
        }
    }

    delete(dataItem) {
        if(dataItem) {
            if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
                this.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: '400px',
                    data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
                }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
                    if (result == 'Yes') {
                        this.apiService.delete(`KyDuTru/${dataItem.Id}`).subscribe(() => {
                            this.gridChild.search();
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa']));
                        }, (err: ApiError) => {
                            this.notificationService.showError(err.Message);
                        });
                    }
                });
            } else {
                this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
        }
    }

    copy(dataItem) {
        if(dataItem) {
            this.router.navigateByUrl(`/danh-muc/nhom-he-thong/benh-vien/ky-du-tru/them?clone=${dataItem.Id}`);
        }
    }

	exportExcel() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
          
        if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>("KyDuTru/ExportKyDuTru", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                CommonService.downLoadFile(res, "application/vnd.ms-excel", "KyDuTru" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            })
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    
    checkboxChange(event, duocPham: boolean = false, vatTu: boolean = false) { 
		if (duocPham) {
            this.kyDuTruSearch.DuocPham = event;
		}
		else if (vatTu) {
            this.kyDuTruSearch.VatTu = event;
        }

		this.timKiem();
    }
    
    timKiem() {
        if(this.gridChild) {
            this.location.replaceState(this.baseRoute + '?holdQuery=true');
            
            let QueryString = null;
            this.gridChild._additionalSearchString = null;
            QueryString = this.kyDuTruSearch.SearchString;
    
            this.convertDateTimeToUTC();
            
            var query = JSON.stringify(this.kyDuTruSearch);
            this.gridChild._additionalSearchString = query;
            this.gridChild.searchString = QueryString;
            this.gridChild.search();
    
            this.reverseDateTime();
            LocalStorageHelper.setItem("additionalSearchStringKyDuTru", JSON.stringify(this.kyDuTruSearch));   
        }
    }

    convertDateTimeToUTC() {
		if(this.kyDuTruSearch.RangeApDung.startDate) {
			this.apDungStartDate = new Date(this.kyDuTruSearch.RangeApDung.startDate); 
			this.kyDuTruSearch.RangeApDung.startDate = new Date(Date.UTC(this.apDungStartDate.getFullYear(), this.apDungStartDate.getMonth(), this.apDungStartDate.getDate(), this.apDungStartDate.getHours(), this.apDungStartDate.getMinutes()));
		}

		if(this.kyDuTruSearch.RangeApDung.endDate) {
			this.apDungEndDate = new Date(this.kyDuTruSearch.RangeApDung.endDate);
			this.kyDuTruSearch.RangeApDung.endDate = new Date(Date.UTC(this.apDungEndDate.getFullYear(), this.apDungEndDate.getMonth(), this.apDungEndDate.getDate(), this.apDungEndDate.getHours(), this.apDungEndDate.getMinutes()));
		}

		if(this.kyDuTruSearch.RangeLap.startDate) {
			this.lapStartDate = new Date(this.kyDuTruSearch.RangeLap.startDate); 
			this.kyDuTruSearch.RangeLap.startDate = new Date(Date.UTC(this.lapStartDate.getFullYear(), this.lapStartDate.getMonth(), this.lapStartDate.getDate(), this.lapStartDate.getHours(), this.lapStartDate.getMinutes()));
		}

		if(this.kyDuTruSearch.RangeLap.endDate) {
			this.lapEndDate = new Date(this.kyDuTruSearch.RangeLap.endDate);
			this.kyDuTruSearch.RangeLap.endDate = new Date(Date.UTC(this.lapEndDate.getFullYear(), this.lapEndDate.getMonth(), this.lapEndDate.getDate(), this.lapEndDate.getHours(), this.lapEndDate.getMinutes()));
		}
	}

	reverseDateTime() {
		if(this.kyDuTruSearch.RangeApDung.startDate) {
			this.kyDuTruSearch.RangeApDung.startDate = new Date(this.apDungStartDate.getFullYear(), this.apDungStartDate.getMonth(), this.apDungStartDate.getDate(), this.apDungStartDate.getHours(), this.apDungStartDate.getMinutes());
		}

		if(this.kyDuTruSearch.RangeApDung.endDate) {
			this.kyDuTruSearch.RangeApDung.endDate = new Date(this.apDungEndDate.getFullYear(), this.apDungEndDate.getMonth(), this.apDungEndDate.getDate(), this.apDungEndDate.getHours(), this.apDungEndDate.getMinutes());
		}
	
		if(this.kyDuTruSearch.RangeLap.startDate) {
			this.kyDuTruSearch.RangeLap.startDate = new Date(this.lapStartDate.getFullYear(), this.lapStartDate.getMonth(), this.lapStartDate.getDate(), this.lapStartDate.getHours(), this.lapStartDate.getMinutes());
		}

		if(this.kyDuTruSearch.RangeLap.endDate) {
			this.kyDuTruSearch.RangeLap.endDate = new Date(this.lapEndDate.getFullYear(), this.lapEndDate.getMonth(), this.lapEndDate.getDate(), this.lapEndDate.getHours(), this.lapEndDate.getMinutes());
		}
	}

    onKey(event: any) {
		if (event.key == "Enter") {
		  	this.timKiem();
		}
    }

    onKeyNgayApDung(event: any) {
		if (event.key == "Enter") {
		  	this.timKiem();
		}
	}

	onKeyNgayLap(event: any) {
		if (event.key == "Enter") {
		  	this.timKiem();
		}
	}
    
    clearSearch() {
		if (this.kyDuTruSearch.SearchString == "" || this.kyDuTruSearch.SearchString == null) {
			this.timKiem();
		}
    }
    
    changeNgayApDungRange(ev: any) {
		this.timKiem();
	}

	changeNgayLapRange(ev: any) {
		this.timKiem();
	}
}
