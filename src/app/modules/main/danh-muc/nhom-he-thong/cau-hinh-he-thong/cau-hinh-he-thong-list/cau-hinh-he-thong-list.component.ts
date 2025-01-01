import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { searchLoaiCauHinh, Cauhinh } from '../cau-hinh-he-thong.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { FormControl } from '@angular/forms';
import icSearch from '@iconify/icons-ic/twotone-search';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { GroupDescriptor } from '@progress/kendo-data-query';


@Component({
    selector: 'app-cau-hinh-he-thong-list',
    templateUrl: './cau-hinh-he-thong-list.component.html',
    styleUrls: ['./cau-hinh-he-thong-list.component.scss']
})
export class CauHinhHeThongListComponent implements OnInit {
    cauHinh: Cauhinh
    documentType: DocumentType;
    searchString: string;
    gridColumns: any[] = [];
    searchInfo: searchLoaiCauHinh;
    icSearch = icSearch;
    icEdit = icEdit;
    icMoreHoriz = icMoreHoriz;
    searchCtrl = new FormControl();

    @Input() searchPlaceHolder: string = "Nhập từ khóa...";

    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;


    groups: GroupDescriptor[] = [{ field: 'TenLoaiCauHinh' }];
    @ViewChild('groupTemplate', { static: true }) groupTemplate: TemplateRef<any>;
    @ViewChild('moTaTemplate', { static: true }) moTaTemplate: TemplateRef<any>;
    @ViewChild('loaiGroupHeaderTemplate', { static: true }) loaiGroupHeaderTemplate: TemplateRef<any>;
    constructor(private authService: AuthService, private router: Router, private notificationService: NotificationService) {
    }

    ngOnInit() {
        this.searchInfo = new searchLoaiCauHinh();
        this.documentType = DocumentType.QuanLyCacCauHinh;
        this.gridColumns = [
            { Field: "Description", Title: "Mô tả", MinWidth: 400, Sortable: true, LinkDetail: true, Template: this.moTaTemplate },
            { Field: "TenLoaiCauHinh", Title: "Tên loại cấu hình", Width: 200, Sortable: true, Hidden: true,TemplateGroupHeader:this.loaiGroupHeaderTemplate },
            { Field: "Value", Title: "Giá trị", Width: 200, Sortable: true, Hidden: true },
            { Field: "Action", Title: "", Width: 50, Template: this.groupTemplate },
        ];
    }

    searchCauHinh() {
        let LoaiCauHinhQueryString = null;
        let SearchQueryString = null;

        if (this.searchInfo.CauHinh != null) {
            LoaiCauHinhQueryString = this.searchInfo.CauHinh;
        }
        if (this.searchString != null) {
            SearchQueryString = "\"" + this.searchString + "\"";
        }
        const queryString = "{\"LoaiCauHinh\":" + LoaiCauHinhQueryString + ",\"Description\":" + SearchQueryString + "}";
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }

    onKey(event: any) {
        if (event.key == 'Enter') {
            this.searchCauHinh();
        }

    }

    searchChange() {
        if (this.searchString == null || this.searchString == '') {
            this.searchCauHinh();
        }
    }

    onDropDownLoaiCauHinh(event: any) {
        let SearchQueryString = null;
        if (this.searchString != null) {
            SearchQueryString = "\"" + this.searchString + "\"";
        }

        let queryString = "{\"LoaiCauHinh\":" + event.KeyId + ",\"Description\":" + SearchQueryString + "}";
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }

    edit(id: number, isCauHinh) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            if (isCauHinh) {
                this.router.navigateByUrl("/danh-muc/nhom-he-thong/cau-hinh-he-thong/thong-so-mac-dinh" + "/chinh-sua/" + id + "?loaiCauHinh=" + 1);
            } else {
                this.router.navigateByUrl("/danh-muc/nhom-he-thong/cau-hinh-he-thong/thong-so-mac-dinh" + "/chinh-sua/" + id + "?loaiCauHinh=" + 2);
            }
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
