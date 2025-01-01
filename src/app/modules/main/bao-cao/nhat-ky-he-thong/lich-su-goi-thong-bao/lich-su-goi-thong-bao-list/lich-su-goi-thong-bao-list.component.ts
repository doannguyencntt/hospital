import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-lich-su-goi-thong-bao-list',
    templateUrl: './lich-su-goi-thong-bao-list.component.html',
    styleUrls: ['./lich-su-goi-thong-bao-list.component.scss']
})
export class LichSuThongBaoListComponent implements OnInit {
    goiDenQueryString: string;
    noiDungQueryString: string;
    trangThaiQueryString: number = 0;
    tenTrangThaiQueryString: string = "Tất cả";
    ngayGuiTuQueryString: Date;
    ngayGuiDenQueryString: Date;
    minDateDenNgay: Date = null;
    displayResetButton = false;
    documentType: DocumentType;
    gridColumns: any[] = [];

    icFileExcel=icFileExcel;

    @ViewChild('headerTemplate', { static: true }) headerTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;

    constructor(private dialog: MatDialog, private apiService: ApiService, private notificationService: NotificationService, private authService: AuthService) { }

    ngOnInit() {
        this.documentType = DocumentType.QuanLyLichSuThongBao;
        this.gridColumns = [
            { Field: "GoiDen", Title: "Gửi đến", Width: 200, Sortable: true },
            { Field: "NoiDung", Title: "Nội dung", MinWidth: 400, Sortable: true },
            { Field: "TenTrangThai", Title: "Trạng thái", Width: 150, Sortable: true },
            { Field: "NgayGui", Title: "Ngày gửi", Width: 150, Sortable: true },
        ]

    }

    findLichSuThongBao() {

        let GoiDen = null;
        let NoiDung = null;
        let TrangThai = null;
        let NgayGuiTu = null;
        let NgayGuiDen = null;

        if (this.goiDenQueryString != null || this.goiDenQueryString != undefined) {
            GoiDen = "\"" + this.goiDenQueryString + "\"";
            this.displayResetButton = true;
        }
        if (this.noiDungQueryString != null || this.noiDungQueryString != undefined) {
            NoiDung = "\"" + this.noiDungQueryString + "\"";
            this.displayResetButton = true;
        }
        if (this.trangThaiQueryString != null || this.trangThaiQueryString != undefined) {
            TrangThai = "\"" + this.trangThaiQueryString + "\"";
            this.displayResetButton = true;
        }
        if (this.ngayGuiTuQueryString != null || this.ngayGuiTuQueryString != undefined) {
            NgayGuiTu = "\"" + this.ngayGuiTuQueryString.toLocaleDateString() + "\"";
            this.displayResetButton = true;
        }
        if (this.ngayGuiDenQueryString != null || this.ngayGuiDenQueryString != undefined) {
            NgayGuiDen = "\"" + this.ngayGuiDenQueryString.toLocaleDateString() + "\"";
            this.displayResetButton = true;
        }

        if (this.goiDenQueryString === null && this.noiDungQueryString === null
            && this.trangThaiQueryString === 0 && this.ngayGuiTuQueryString === null
            && this.ngayGuiDenQueryString === null) {
            this.displayResetButton = false;
        }
        let queryString = "{\"GoiDen\":" + GoiDen + ",\"NoiDung\":" + NoiDung + ",\"TrangThai\":" + TrangThai + ",\"NgayGuiTu\":" + NgayGuiTu + ",\"NgayGuiDen\":" + NgayGuiDen + "}";
        console.log("findLichSuThongBao = ", queryString);
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }

    reset() {
        this.goiDenQueryString = undefined;
        this.noiDungQueryString = undefined;
        this.trangThaiQueryString = 0;
        this.ngayGuiTuQueryString = undefined;
        this.ngayGuiDenQueryString = undefined;
        this.displayResetButton = false;
        let queryString = "{\"GoiDen\":\"\",\"NoiDung\":null,\"TrangThai\":\"0\",\"NgayGuiTu\":null,\"NgayGuiDen\":null}";
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }

    changeValueStart(event: any) {
        this.minDateDenNgay = new Date(event);
        if (this.ngayGuiDenQueryString != null
            && this.ngayGuiTuQueryString > this.ngayGuiDenQueryString) {
            this.ngayGuiDenQueryString = this.minDateDenNgay;
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
            this.apiService.postExportExcel<string>("LichSuThongBao/ExportLichSuThongBao", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                CommonService.downLoadFile(res, "application/vnd.ms-excel", "LichSuThongBao" + dateTimeNow.getFullYear() + ".xlsx");
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
