import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import { LichSuSMS } from '../lich-su-sms.model';
import { SortDescriptor } from '@progress/kendo-data-query';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';

@Component({
    selector: 'app-lich-su-sms-list',
    templateUrl: './lich-su-sms-list.component.html',
    styleUrls: ['./lich-su-sms-list.component.scss']
})
export class LichSuSMSListComponent implements OnInit {
    documentType: DocumentType
    gridColumns: any[] = []
    searchString: string;
    parameters: LichSuSMS;
    displayResetButton: boolean = false;
    sortGrid: SortDescriptor[] = [
        {
            field: "NgayGui",
            dir: 'desc'
        }
    ];

    icFileExcel=icFileExcel;

    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent
    
    constructor(private dialog: MatDialog, private apiService: ApiService, private notificationService: NotificationService, private authService: AuthService) { }

    ngOnInit() {
        this.parameters = new LichSuSMS();
        this.documentType = DocumentType.QuanLyLichSuSMS;
        this.gridColumns = [
            { Field: "GoiDen", Title: "Gửi đến", Width: 150, Sortable: true },
            { Field: "NoiDung", Title: "Nội dung", MinWidth: 400, Sortable: true },
            { Field: "TenTrangThai", Title: "Trạng thái", Width: 150, Sortable: true },
            { Field: "NgayGui", Title: "Ngày gửi", Width: 150, Sortable: true },
        ]
    }

    Timkiem() {
        let goiDenQueryString = null;
        let TuNgayQueryString = null;
        let DenNgayQueryString = null;
        let NoiDungQueryString = null;

        let TrangThaiQueryString = null;

        if (this.parameters.TuNgay != null) {
            TuNgayQueryString = "\"" + this.ConvertDateTime(this.parameters.TuNgay) + "\"";
            this.displayResetButton = true;
        }
        if (this.parameters.DenNgay != null) {
            DenNgayQueryString = "\"" + this.ConvertDateTime(this.parameters.DenNgay) + "\"";
            this.displayResetButton = true;
        }
        if (this.parameters.GoiDen != null) {
            goiDenQueryString = "\"" + this.parameters.GoiDen + "\"";
            this.displayResetButton = true;
        }
        if (this.parameters.NoiDung != null) {
            NoiDungQueryString = "\"" + this.parameters.NoiDung + "\"";
            this.displayResetButton = true;
        }
        if (this.parameters.TrangThai != null) {
            TrangThaiQueryString = this.parameters.TrangThai;
            this.displayResetButton = true;
        } else {
            TrangThaiQueryString = 0;
            TrangThaiQueryString = +this.parameters.TrangThai;
        }

        if (this.parameters.TuNgay === null && this.parameters.DenNgay === null
            && this.parameters.GoiDen === null && this.parameters.NoiDung === null
            && this.parameters.TrangThai === 0) {
            this.displayResetButton = false;
        }

        let queryString = "{\"GoiDen\":" + goiDenQueryString + ",\"TrangThai\":" + TrangThaiQueryString + ",\"TuNgay\":" + TuNgayQueryString + ",\"DenNgay\":" + DenNgayQueryString + ",\"Noidung\":" + NoiDungQueryString + "}";
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }

    reset() {
        this.parameters.TuNgay = undefined;
        this.parameters.DenNgay = undefined;
        this.parameters.GoiDen = null;
        this.parameters.NoiDung = undefined;
        this.parameters.TrangThai = 0;
        let queryString = "{\"GoiDen\":null,\"TrangThai\":0,\"TuNgay\":null,\"DenNgay\":null,\"Noidung\":null}";
        this.gridChild._additionalSearchString = queryString;
        this.displayResetButton = false;
        this.gridChild.search();
    }

    ConvertDateTime(datime): String {
        var date = new Date(datime);
        var year = date.getFullYear();
        var rawMonth = parseInt(String(date.getMonth())) + 1;
        var month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
        var rawDay = parseInt(String(date.getDate()));
        var day = rawDay < 10 ? '0' + rawDay : rawDay;
        return year + '-' + month + '-' + day;
    }

    exportExcel() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        
        if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>("LichSuSMS/ExportLichSuSMS", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                CommonService.downLoadFile(res, "application/vnd.ms-excel", "LichSuSMS" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            })
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
