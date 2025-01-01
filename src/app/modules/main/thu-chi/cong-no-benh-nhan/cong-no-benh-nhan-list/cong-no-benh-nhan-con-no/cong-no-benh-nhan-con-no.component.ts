import { AfterContentInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-cong-no-benh-nhan-con-no',
  templateUrl: './cong-no-benh-nhan-con-no.component.html',
  styleUrls: ['./cong-no-benh-nhan-con-no.component.scss']
})

export class CongNoBenhNhanConNoComponent implements OnInit,AfterContentInit {
    documentType: DocumentType = DocumentType.CongNoBenhNhan;
    validationErrors: any[] = [];
    baseRoute: string = '/thu-ngan/cong-no-benh-nhan';
    holdQuery: any = null;
    _searchString: string = '';

    gridColumns: any[] = [];
    sortDanhSachBenhNhanConNo: SortDescriptor[] = [ { field: "MaBenhNhan", dir: "asc" }]

    urlGetDanhSachBenhNhanConNo = `CongNoBenhNhan/GetDanhSachBenhNhanConNo`;
    urlGetTotalPagesBenhNhanConNo = `CongNoBenhNhan/GetTotalPagesBenhNhanConNo`;

    @Input() searchString: string = '';
    
    @ViewChild('maBenhNhanTemplate', { static: true }) maBenhNhanTemplate: TemplateRef<any>;
    @ViewChild('gioiTinhTemplate', { static: true }) gioiTinhTemplate: TemplateRef<any>;
    @ViewChild('gridBenhNhanConNo', { static: true }) gridBenhNhanConNo: GridComponent;
    
    constructor(private location: Location, private router: Router,
                private authService: AuthService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.gridColumns = [
            { Field: "MaBenhNhan", Title: "Mã NB", Width: 120, Sortable: true, Template: this.maBenhNhanTemplate },
            { Field: "HoTen", Title: "Họ tên", Width: 200, Sortable: true },
            { Field: "GioiTinh", Title: "Giới tính", Width: 120, Sortable: true, Template: this.gioiTinhTemplate },
            { Field: "NamSinh", Title: "Năm sinh", Width: 120, Sortable: true },
            { Field: "SoDienThoai", Title: "Điện thoại", Width: 150, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 150, Sortable: true },
        ];

        this._searchString = this.searchString;
    }
    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        if(this._searchString!=null && this._searchString!="")
        {
            this.timKiem(this._searchString);
        }
        
    }
    timKiem(searchString) {
        if(this.gridBenhNhanConNo) {
            this.location.replaceState(`${this.baseRoute}?holdQuery=true`);
            this.gridBenhNhanConNo.urlGetData=this.urlGetDanhSachBenhNhanConNo;
            this.gridBenhNhanConNo.urlGetTotalPage=this.urlGetTotalPagesBenhNhanConNo;
            this.gridBenhNhanConNo.searchString = searchString;
            this.gridBenhNhanConNo.search();
        }
    }

    evtMaBenhNhanClicked(id) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.router.navigate([`/thu-ngan/cong-no-benh-nhan/chi-tiet/${id}`]);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
