import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SortDescriptor } from '@progress/kendo-data-query';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LichSuTiemChungSearch } from '../../tiem-chung.model';
import { Location } from '@angular/common';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';

import icicclose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';

@Component({
    selector: 'app-lich-su-tiem-chung',
    templateUrl: './lich-su-tiem-chung.component.html',
    styleUrls: ['./lich-su-tiem-chung.component.scss'],
    animations: [ stagger60ms, fadeInUp400ms ],
    encapsulation: ViewEncapsulation.None
})

export class LichSuTiemChungComponent implements OnInit {
    documentType: DocumentType = DocumentType.TiemChungLichSuTiem;
    baseRoute: string = '/tiem-chung/lich-su-tiem';
    holdQuery: any = null;
    additionalSearchString: string = null;
    firstSearchString: any;

    lichSuTiemChungGridColumns: any[] = [];
    sort: SortDescriptor[] = [{ field: "ThoiDiemKham", dir: 'desc' }];
    lichSuTiemChungSearch: LichSuTiemChungSearch = new LichSuTiemChungSearch();

    tempThoiDiemKhamStartDate: Date;
    tempThoiDiemKhamEndDate: Date;

    icSearch = icSearch;
    icicclose = icicclose;
    icFileExcel = icFileExcel;
    icFilterList = icFilterList;

    @ViewChild('gridLichSuTiemChung', { static: true }) gridLichSuTiemChung: GridComponent;

    @ViewChild('chiTietTemplate', { static: true }) chiTietTemplate: TemplateRef<any>;
    @ViewChild('thoiDiemKhamTemplate', { static: true }) thoiDiemKhamTemplate: TemplateRef<any>;
    @ViewChild('bacSiKhamTemplate', { static: true }) bacSiKhamTemplate: TemplateRef<any>;
    @ViewChild('loaiPhanUngSauTiemTemplate', { static: true }) loaiPhanUngSauTiemTemplate: TemplateRef<any>;
    @ViewChild('thoiGianHenTiemTemplate', { static: true }) thoiGianHenTiemTemplate: TemplateRef<any>;

    constructor(private router: Router, private location: Location, private route: ActivatedRoute,
                private authService: AuthService, private notificationService: NotificationService) { }

    ngOnInit() {
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
			this.holdQuery = this.route.snapshot.queryParams.holdQuery;
		}

        if (this.holdQuery != null && LocalStorageHelper.getItem('additionalSearchStringLichSuTiemChung') != null) {
			this.additionalSearchString = LocalStorageHelper.getItem('additionalSearchStringLichSuTiemChung');     
			this.lichSuTiemChungSearch = JSON.parse(this.additionalSearchString);
			if (this.lichSuTiemChungSearch.ThoiDiemKham.startDate != null)
                this.lichSuTiemChungSearch.ThoiDiemKham.startDate = new Date(this.lichSuTiemChungSearch.ThoiDiemKham.startDate);
			if (this.lichSuTiemChungSearch.ThoiDiemKham.endDate != null)
                this.lichSuTiemChungSearch.ThoiDiemKham.endDate = new Date(this.lichSuTiemChungSearch.ThoiDiemKham.endDate);
		} else {
            this.lichSuTiemChungSearch.ThoiDiemKham.startDate = new Date();
            this.lichSuTiemChungSearch.ThoiDiemKham.endDate = new Date();
            
			LocalStorageHelper.setItem('additionalSearchStringLichSuTiemChung', null);
			this.additionalSearchString = JSON.stringify(this.lichSuTiemChungSearch);
		}

        this.convertToUTCDateTime();
        this.firstSearchString = JSON.stringify(this.lichSuTiemChungSearch);
        this.reverseFromUTCDateTime();
        
        this.lichSuTiemChungGridColumns = [
            { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 80, Sortable: true, Template: this.chiTietTemplate },
            { Field: "HoTen", Title: "Tên người bệnh", Width: 100, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 60, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 200, Sortable: true },
            // { Field: "MuiTiem", Title: "Mũi tiêm", Width: 100, Sortable: true },
            { Field: "ThoiDiemKham", Title: "Thời điểm khám", Width: 100, Sortable: true, Template: this.thoiDiemKhamTemplate },
            { Field: "BacSiKhamId", Title: "Bác sĩ khám", Width: 100, Sortable: true, Template: this.bacSiKhamTemplate },
            { Field: "LoaiPhanUngSauTiem", Title: "Trạng thái sau tiêm", Width: 100, Sortable: true, Template: this.loaiPhanUngSauTiemTemplate },
            { Field: "ThoiGianHenTiem", Title: "Thời gian hẹn tiêm", Width: 100, Sortable: true, Template: this.thoiGianHenTiemTemplate }
        ];
    }

    chiTiet(id: any) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.router.navigate(["/tiem-chung/lich-su-tiem/chi-tiet/" + id]);
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    evtSearchOnKey(event: any) {
        if (event.key === "Enter") {
            this.timKiemNangCao();
        }
    }

    evtSearchChanged(event: any) {
        if (!event) {
            this.timKiemNangCao();
        }
    }

    evtThoiDiemKhamOnKey(event: any) {
		if (event.key == "Enter") {
		  	this.timKiemNangCao();
		}
	}

    // evtThoiDiemKhamChanged(event: any) {
	// 	this.timKiemNangCao();
	// }

    evtThoiGianCachLichHenOnKey(event: any) {
        if (event.key == "Enter") {
            this.timKiemNangCao();
        }
    }

    evtSearchCleared() {
        this.lichSuTiemChungSearch.SearchString = '';
        this.timKiemNangCao();
    }

    timKiemNangCao() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');

        this.convertToUTCDateTime();
        let queryString = JSON.stringify(this.lichSuTiemChungSearch);
        this.reverseFromUTCDateTime();

        LocalStorageHelper.setItem("additionalSearchStringLichSuTiemChung", JSON.stringify(this.lichSuTiemChungSearch));
        this.gridLichSuTiemChung._additionalSearchString = queryString;
        this.gridLichSuTiemChung.search();
    }

    convertToUTCDateTime() {
        if(this.lichSuTiemChungSearch.ThoiDiemKham.startDate) {
            this.tempThoiDiemKhamStartDate = new Date(this.lichSuTiemChungSearch.ThoiDiemKham.startDate); 
            this.lichSuTiemChungSearch.ThoiDiemKham.startDate = new Date(Date.UTC(this.tempThoiDiemKhamStartDate.getFullYear(), this.tempThoiDiemKhamStartDate.getMonth(), this.tempThoiDiemKhamStartDate.getDate(), this.tempThoiDiemKhamStartDate.getHours(), this.tempThoiDiemKhamStartDate.getMinutes()));
        }
    
        if(this.lichSuTiemChungSearch.ThoiDiemKham.endDate) {
            this.tempThoiDiemKhamEndDate = new Date(this.lichSuTiemChungSearch.ThoiDiemKham.endDate); 
            this.lichSuTiemChungSearch.ThoiDiemKham.endDate = new Date(Date.UTC(this.tempThoiDiemKhamEndDate.getFullYear(), this.tempThoiDiemKhamEndDate.getMonth(), this.tempThoiDiemKhamEndDate.getDate(), this.tempThoiDiemKhamEndDate.getHours(), this.tempThoiDiemKhamEndDate.getMinutes()));
        }
    }
    
    reverseFromUTCDateTime() {
        if(this.lichSuTiemChungSearch.ThoiDiemKham.startDate) {
            this.lichSuTiemChungSearch.ThoiDiemKham.startDate = new Date(this.tempThoiDiemKhamStartDate.getFullYear(), this.tempThoiDiemKhamStartDate.getMonth(), this.tempThoiDiemKhamStartDate.getDate(), this.tempThoiDiemKhamStartDate.getHours(), this.tempThoiDiemKhamStartDate.getMinutes());
        }
    
        if(this.lichSuTiemChungSearch.ThoiDiemKham.endDate) {
            this.lichSuTiemChungSearch.ThoiDiemKham.endDate = new Date(this.tempThoiDiemKhamEndDate.getFullYear(), this.tempThoiDiemKhamEndDate.getMonth(), this.tempThoiDiemKhamEndDate.getDate(), this.tempThoiDiemKhamEndDate.getHours(), this.tempThoiDiemKhamEndDate.getMinutes());
        }
    }
}