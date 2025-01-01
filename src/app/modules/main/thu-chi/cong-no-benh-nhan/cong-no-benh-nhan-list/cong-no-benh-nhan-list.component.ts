import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CongNoBenhNhanSearch, ListTabCongNoBenhNhan } from '../cong-no-benh-nhan.model';
import { CongNoBenhNhanConNoComponent } from './cong-no-benh-nhan-con-no/cong-no-benh-nhan-con-no.component';
import { CongNoBenhNhanHetNoComponent } from './cong-no-benh-nhan-het-no/cong-no-benh-nhan-het-no.component';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GridQueryInfo } from 'src/app/shared/models/common.model';

import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';

@Component({
  selector: 'app-cong-no-benh-nhan-list',
  templateUrl: './cong-no-benh-nhan-list.component.html',
  styleUrls: ['./cong-no-benh-nhan-list.component.scss']
})

export class CongNoBenhNhanListComponent implements OnInit {
    documentType: DocumentType = DocumentType.CongNoBenhNhan;
    searchCtrl = new FormControl;
    holdQuery: any = null;
    filterColumns: any[] = [];
    loadingPopup: any;

    congNoBenhNhanSearch: CongNoBenhNhanSearch = new CongNoBenhNhanSearch();

    icSearch = icSearch;
    icFileExcel = icFileExcel;
    icFilterList = icFilterList;

    @ViewChild(CongNoBenhNhanConNoComponent, { static: false }) congNoBenhNhanConNoShared: CongNoBenhNhanConNoComponent;
    @ViewChild(CongNoBenhNhanHetNoComponent, { static: false }) congNoBenhNhanHetNoShared: CongNoBenhNhanHetNoComponent;

    constructor(private route: ActivatedRoute, private dialog: MatDialog, 
                private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
			this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        
        if (this.holdQuery != null && LocalStorageHelper.getItem('additionalSearchStringCongNoBenhNhan') != null) {
			this.congNoBenhNhanSearch = JSON.parse(LocalStorageHelper.getItem('additionalSearchStringCongNoBenhNhan'));
		} else {
			LocalStorageHelper.setItem('additionalSearchStringCongNoBenhNhan', null);
        }

        this.filterColumns = [
			{ Field: "MaBenhNhan", Title: "Mã NB" },
            { Field: "HoTen", Title: "Họ tên" },
            { Field: "GioiTinh", Title: "Giới tính" },
            { Field: "NamSinh", Title: "Năm sinh" },
            { Field: "SoDienThoai", Title: "Điện thoại" },
            { Field: "DiaChi", Title: "Địa chỉ"},
        ];
    }

    changeTab(evt) {
        switch(evt.index) {
            case 0:
                this.deselectTab();
                this.congNoBenhNhanSearch.listTabCongNoBenhNhan.tabConNoSelected = true;
                break;
            case 1:
                this.deselectTab();
                this.congNoBenhNhanSearch.listTabCongNoBenhNhan.tabHetNoSelected = true;
                break;
        }

        this.setLocalStorage();
    }

    deselectTab() {
        this.congNoBenhNhanSearch.listTabCongNoBenhNhan.tabConNoSelected = false;
        this.congNoBenhNhanSearch.listTabCongNoBenhNhan.tabHetNoSelected = false;
    }

    clearSearch() {
        if(!this.congNoBenhNhanSearch.searchString || this.congNoBenhNhanSearch.searchString === '') {
            if(this.congNoBenhNhanSearch.listTabCongNoBenhNhan.tabConNoSelected) {
                if(this.congNoBenhNhanConNoShared) {
                    this.congNoBenhNhanConNoShared.timKiem(this.congNoBenhNhanSearch.searchString);
                }
            }

            if(this.congNoBenhNhanSearch.listTabCongNoBenhNhan.tabHetNoSelected) {
                if(this.congNoBenhNhanHetNoShared) {
                    this.congNoBenhNhanHetNoShared.timKiem(this.congNoBenhNhanSearch.searchString);
                }
            }
        }

        this.setLocalStorage();
    }

    onKey(event: any) {
		if (event.key == "Enter") {
            if(this.congNoBenhNhanSearch.listTabCongNoBenhNhan.tabConNoSelected) {
                if(this.congNoBenhNhanConNoShared) {
                    this.congNoBenhNhanConNoShared.timKiem(this.congNoBenhNhanSearch.searchString);
                }
            }

            if(this.congNoBenhNhanSearch.listTabCongNoBenhNhan.tabHetNoSelected) {
                if(this.congNoBenhNhanHetNoShared) {
                    this.congNoBenhNhanHetNoShared.timKiem(this.congNoBenhNhanSearch.searchString);
                }
            }
        }
        
        this.setLocalStorage();
    }

    setLocalStorage() {
        LocalStorageHelper.setItem("additionalSearchStringCongNoBenhNhan", JSON.stringify(this.congNoBenhNhanSearch));
    }

    exportExcel() {
        this.showLoadingPopup();

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            let isConNo = this.congNoBenhNhanSearch.listTabCongNoBenhNhan.tabConNoSelected ? true : false;

            let searchText = this.congNoBenhNhanSearch.searchString;
            searchText = CommonService.convertSpecialXML(searchText);
            searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
            searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));

            let gridQueryInfo = new GridQueryInfo(0, 10, 10, searchText, null, [{Field: 'MaBenhNhan', Dir: 'asc'}]);

            this.apiService.postExportExcel<string>(`CongNoBenhnhan/ExportCongNoBenhNhan?isConNo=${isConNo}`, gridQueryInfo).subscribe(res => {
                this.closeAllDialogs();
                
                this.congNoBenhNhanSearch.listTabCongNoBenhNhan 
                const dateTimeNow = new Date();
                CommonService.downLoadFile(res, 'application/vnd.ms-excel', `${isConNo ? 'CongNoBenhNhan-ConNo' : 'CongNoBenhNhan-HetNo'}` + dateTimeNow.getFullYear() + '.xlsx');
            }, (err: any) => {
                this.notificationService.showError(err.Message);
            });
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
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

    closeAllDialogs() {
        if (this.loadingPopup) {
            this.loadingPopup.close();
            this.loadingPopup = null;
        }
    }
}
