import { searchLichSuEmail } from '../lich-su-email.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-lich-su-email-list',
    templateUrl: './lich-su-email-list.component.html',
    styleUrls: ['./lich-su-email-list.component.scss']
})

export class LichSuEmailListComponent implements OnInit {
    documentType: DocumentType;
    gridColumns: any[] = [];
    searchInfo: searchLichSuEmail;

    minDateDenNgay: Date = null;
    displayResetButton: boolean = false;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild('urlTemplate', { static: true }) urlTemplate: TemplateRef<any>;
    @ViewChild('noiDungTemplate', { static: true }) noiDungTemplate: TemplateRef<any>;

    icFileExcel=icFileExcel;

    constructor(private dialog: MatDialog, private apiService: ApiService, private notificationService: NotificationService, private authService: AuthService) { }

    ngOnInit() {
        this.searchInfo = new searchLichSuEmail();
        this.documentType = DocumentType.QuanLyLichSuEmail;
        this.gridColumns = [
            { Field: "GoiDen", Title: "Gửi đến", Width: 200, Sortable: true },
            { Field: "TieuDe", Title: "Tiêu đề", Width: 200, Sortable: true },
            { Field: "NoiDung", Title: "Nội dung", MinWidth: 400, Sortable: true, Template: this.noiDungTemplate },
            { Field: "TapTinDinhKem", Title: "Tập tin đính kèm", Width: 150, Sortable: true, Template: this.urlTemplate },
            { Field: "TenTrangThai", Title: "Trạng thái", Width: 150, Sortable: true },
            { Field: "NgayGuiFormat", Title: "Ngày gửi", Width: 150, Sortable: true }
        ];
    }

    searchHistoryEmail() {
        let goiDenQueryString = null;
        let TuNgayQueryString = null;
        let DenNgayQueryString = null;
        let TieuDeQueryString = null;

        let TrangThaiQueryString = null;

        if (this.searchInfo.TuNgay != null) {
            TuNgayQueryString = "\"" + this.ConvertDateTime(this.searchInfo.TuNgay) + "\"";
            this.displayResetButton = true;
        }
        if (this.searchInfo.DenNgay != null) {
            DenNgayQueryString = "\"" + this.ConvertDateTime(this.searchInfo.DenNgay) + "\"";
            this.displayResetButton = true;
        }
        if (this.searchInfo.GoiDen != null) {
            goiDenQueryString = "\"" + this.searchInfo.GoiDen + "\"";
            this.displayResetButton = true;
        }
        if (this.searchInfo.TieuDe != null) {
            TieuDeQueryString = "\"" + this.searchInfo.TieuDe + "\"";
            this.displayResetButton = true;
        }
        if (this.searchInfo.TrangThai != null) {
            TrangThaiQueryString = this.searchInfo.TrangThai;
            this.displayResetButton = true;
        }

        if (this.searchInfo.TuNgay === null && this.searchInfo.DenNgay === null
            && this.searchInfo.GoiDen === null && this.searchInfo.TieuDe === null
            && this.searchInfo.TrangThai === 0) {
            this.displayResetButton = false;
        }
        let queryString = "{\"GoiDen\":" + goiDenQueryString + ",\"TrangThai\":" + TrangThaiQueryString + ",\"TuNgay\":" + TuNgayQueryString + ",\"DenNgay\":" + DenNgayQueryString + ",\"TieuDe\":" + TieuDeQueryString + "}";
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }

    reset() {
        this.searchInfo.GoiDen = undefined;
        this.searchInfo.TuNgay = undefined;
        this.searchInfo.DenNgay = undefined;
        this.searchInfo.TieuDe = undefined;
        this.searchInfo.TrangThai = 0;
        this.displayResetButton = false;
        let queryString = "{\"GoiDen\":null,\"TrangThai\":0,\"TuNgay\":null,\"DenNgay\":null,\"TieuDe\":null}";
        this.gridChild._additionalSearchString = queryString;
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

    changeValueStart(event: any) {
        this.minDateDenNgay = new Date(event);
        if (this.searchInfo.DenNgay != null
            && this.searchInfo.TuNgay > this.searchInfo.DenNgay) {
            this.searchInfo.DenNgay = this.minDateDenNgay;
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
            this.apiService.postExportExcel<string>("LichSuEmail/ExportLichSuEmail", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                CommonService.downLoadFile(res, "application/vnd.ms-excel", "LichSuEmail" + dateTimeNow.getFullYear() + ".xlsx");
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
