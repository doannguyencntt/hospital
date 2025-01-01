import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { VoucherChiTietPopupComponent } from '../voucher-chi-tiet-popup/voucher-chi-tiet-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { VoucherSearch } from '../voucher.model';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { FormControl } from '@angular/forms';

import icDone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDetail from '@iconify/icons-ic/twotone-apps';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icAdd from '@iconify/icons-ic/twotone-add';

@Component({
    selector: 'app-voucher-list',
    templateUrl: './voucher-list.component.html',
    styleUrls: ['./voucher-list.component.scss']
})

export class VoucherListComponent implements OnInit {
    documentType: DocumentType = DocumentType.VoucherMarketing;

    baseRoute: string = "/marketing/ct-marketing/voucher";
    voucherSearch: VoucherSearch;
    holdQuery: any = null;
    additionalSearchString: string = null;
    firstSearchString: any;
    searchCtrl = new FormControl;

    voucherTuNgay: any;
    voucherDenNgay: any;

    gridColumns: any[] = [];
    filterColumns: any[] = [];

    icdone = icDone;
    icclose = icClose;
    icDelete = icDelete;
    icEdit = icEdit;
    icMoreHoriz = icMoreHoriz;
    icDetail = icDetail;
    icSearch = icSearch;
  	icFileExcel = icFileExcel;
    icFilterList = icFilterList;
    icAdd = icAdd;

    @ViewChild('soLuongPhatHanhTemplate', { static: true }) soLuongPhatHanhTemplate: TemplateRef<any>;
    @ViewChild('tuNgayTemplate', { static: true }) tuNgayTemplate: TemplateRef<any>;
    @ViewChild('denNgayTemplate', { static: true }) denNgayTemplate: TemplateRef<any>;
    @ViewChild('groupTemplate', { static: true }) groupTemplate: TemplateRef<any>;
    @ViewChild(GridComponent, {static: false}) gridChild: GridComponent;
    
    constructor(private authService: AuthService, private notificationService: NotificationService, private apiService: ApiService,
                private dialog: MatDialog, private router: Router, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        this.voucherSearch = new VoucherSearch();

        if (this.route.snapshot.queryParams.holdQuery != undefined) {
			this.holdQuery = this.route.snapshot.queryParams.holdQuery;
		}

		if (this.holdQuery != null && LocalStorageHelper.getItem('additionalSearchStringVoucherMarketing') != null) {
			this.additionalSearchString = LocalStorageHelper.getItem('additionalSearchStringVoucherMarketing');     
			this.voucherSearch = JSON.parse(this.additionalSearchString);
		} else {
			LocalStorageHelper.setItem('additionalSearchStringVoucherMarketing', null);
			this.additionalSearchString = JSON.stringify(this.voucherSearch);
        }

        this.firstSearchString = JSON.stringify(this.voucherSearch);
        
        this.gridColumns = [
            { Field: "Ma", Title: "Mã voucher", Width: 150, Sortable: true, LinkDetail: true },
            { Field: "Ten", Title: "Tên", MinWidth: 200, Sortable: true },
            { Field: "SoLuongPhatHanh", Title: "SL phát hành", Width: 150, Sortable: true, Template: this.soLuongPhatHanhTemplate },
            { Field: "TuNgay", Title: "Thời gian bắt đầu", Width: 150, Sortable: true, Template: this.tuNgayTemplate },
            { Field: "DenNgay", Title: "Thời gian kết thúc", Width: 150, Sortable: true, Template: this.denNgayTemplate },
            { Field: "Action", Title: "", Width: 50, Template: this.groupTemplate }
        ];

        this.filterColumns = [
            { Field: "Ma", Title: "Mã voucher" },
            { Field: "Ten", Title: "Tên" },
            { Field: "SoLuongPhatHanh", Title: "SL phát hành" },
            { Field: "TuNgay", Title: "Thời gian bắt đầu" },
            { Field: "DenNgay", Title: "Thời gian kết thúc" }
        ];
    }

    edit(dataItem) {
        if(dataItem) {
            this.router.navigate([`/marketing/ct-marketing/voucher/chinh-sua/${dataItem.Id}`]);
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
                        this.apiService.delete(`Voucher/${dataItem.Id}`).subscribe(() => {
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

    chiTiet(dataItem) {
        if(dataItem) {
            this.dialog.open(VoucherChiTietPopupComponent, {
                disableClose: true,
                width: '1000px',
                height: 'auto',
                data: dataItem
            })
            .afterClosed()
            .subscribe((res) => {
            });
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
            this.apiService.postExportExcel<string>("Voucher/ExportChuongTrinhMarketingTheoVoucher", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                CommonService.downLoadFile(res, "application/vnd.ms-excel", "ChuongTrinhMarketingTheoVoucher" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            })
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    onKey(event: any) {
		if (event.key == "Enter") {
		  	this.timKiem();
		}
    }
    
    clearSearch() {
		if (this.voucherSearch.SearchString == "" || this.voucherSearch.SearchString == null) {
			this.timKiem();
		}
    }
    
    timKiem() {
        if(this.gridChild) {
            this.location.replaceState(this.baseRoute + '?holdQuery=true');

            let QueryString = null;
            this.gridChild._additionalSearchString = null;
            QueryString = this.voucherSearch.SearchString;
            
            this.convertDateTimeToUTC();
            var query = JSON.stringify(this.voucherSearch);
            
            this.gridChild._additionalSearchString = query;
            this.gridChild.searchString = QueryString;
            this.gridChild.search();
    
            this.reverseDateTime();

            LocalStorageHelper.setItem("additionalSearchStringVoucherMarketing", JSON.stringify(this.voucherSearch));
        }
    }

    convertDateTimeToUTC() {
		if(this.voucherSearch.RangeNgayApDung.startDate) {
			this.voucherTuNgay = new Date(this.voucherSearch.RangeNgayApDung.startDate); 
			this.voucherSearch.RangeNgayApDung.startDate = new Date(Date.UTC(this.voucherTuNgay.getFullYear(), this.voucherTuNgay.getMonth(), this.voucherTuNgay.getDate(), this.voucherTuNgay.getHours(), this.voucherTuNgay.getMinutes()));
		}

		if(this.voucherSearch.RangeNgayApDung.endDate) {
			this.voucherDenNgay = new Date(this.voucherSearch.RangeNgayApDung.endDate);
			this.voucherSearch.RangeNgayApDung.endDate = new Date(Date.UTC(this.voucherDenNgay.getFullYear(), this.voucherDenNgay.getMonth(), this.voucherDenNgay.getDate(), this.voucherDenNgay.getHours(), this.voucherDenNgay.getMinutes()));
		}
	}

	reverseDateTime() {
		if(this.voucherSearch.RangeNgayApDung.startDate) {
			this.voucherSearch.RangeNgayApDung.startDate = new Date(this.voucherTuNgay.getFullYear(), this.voucherTuNgay.getMonth(), this.voucherTuNgay.getDate(), this.voucherTuNgay.getHours(), this.voucherTuNgay.getMinutes());
		}

		if(this.voucherSearch.RangeNgayApDung.endDate) {
			this.voucherSearch.RangeNgayApDung.endDate = new Date(this.voucherDenNgay.getFullYear(), this.voucherDenNgay.getMonth(), this.voucherDenNgay.getDate(), this.voucherDenNgay.getHours(), this.voucherDenNgay.getMinutes());
		}
	}
    
    add() {
        this.router.navigate(['/marketing/ct-marketing/voucher/them']);
    }
}
