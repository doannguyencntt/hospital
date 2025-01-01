import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LichSuHoatDongInfo } from '../lich-su-hoat-dong.model';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';

@Component({
    selector: 'app-lich-su-hoat-dong-list',
    templateUrl: './lich-su-hoat-dong-list.component.html',
    styleUrls: ['./lich-su-hoat-dong-list.component.scss']
})
export class LichSuHoatDongListComponent implements OnInit {
    documentType: DocumentType
    gridColumns: any[] = []
    lsHoatDongInfo: LichSuHoatDongInfo;
    displayResetButton: boolean = false;
    minDateDenNgay: Date = null;

    icFileExcel=icFileExcel;

    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent
    
    constructor(private dialog: MatDialog, private apiService: ApiService, private notificationService: NotificationService, private authService: AuthService) { }

    ngOnInit() {
        this.lsHoatDongInfo = new LichSuHoatDongInfo();
        this.documentType = DocumentType.QuanLyNhatKyHeThong;
        this.gridColumns = [
            { Field: "TenHoatDong", Title: "Hoạt động", Width: 200, Sortable: true },
            { Field: "NoiDung", Title: "Nội dung", MinWidth: 400, Sortable: true },
            { Field: "NgayTaoFormat", Title: "Ngày tạo", Width: 150, Sortable: true },
            { Field: "NguoiTao", Title: "Người tạo", Width: 150, Sortable: true },
        ]
    }

    onKey(event: any) {
        if (event.key == "Enter") {
            this.searchHistoryAction();
        }
    }

    searchHistoryAction() {
        let NguoiTaoQueryString = null;
        let HoatDongQueryString = null;
        let TuNgayQueryString = null;
        let DenNgayQueryString = null;
        let NoiDungQueryString = null;

        if (this.lsHoatDongInfo.TuNgay != null) {
            TuNgayQueryString = "\"" + this.ConvertDateTime(this.lsHoatDongInfo.TuNgay) + "\"";
            this.displayResetButton = true;
        }
        if (this.lsHoatDongInfo.DenNgay != null) {
            DenNgayQueryString = "\"" + this.ConvertDateTime(this.lsHoatDongInfo.DenNgay) + "\"";
            this.displayResetButton = true;
        }
        if (this.lsHoatDongInfo.NoiDung != null) {
            NoiDungQueryString = "\"" + this.lsHoatDongInfo.NoiDung + "\"";
            this.displayResetButton = true;
        }
        if (this.lsHoatDongInfo.NguoiTaoId != null) {
            NguoiTaoQueryString = this.lsHoatDongInfo.NguoiTaoId;
            this.displayResetButton = true;
        }

        if (this.lsHoatDongInfo.HoatDongId != null) {
            HoatDongQueryString = this.lsHoatDongInfo.HoatDongId;
            this.displayResetButton = true;
        }

        if (this.lsHoatDongInfo.TuNgay === null && this.lsHoatDongInfo.DenNgay === null
            && this.lsHoatDongInfo.NoiDung === null && this.lsHoatDongInfo.NguoiTaoId === 0
            && this.lsHoatDongInfo.HoatDongId === 0) {
            this.displayResetButton = false;
        }
        let queryString = "{\"NguoiTaoId\":" + NguoiTaoQueryString + ",\"HoatDong\":" + HoatDongQueryString + ",\"TuNgay\":" + TuNgayQueryString + ",\"DenNgay\":" + DenNgayQueryString + ",\"NoiDung\":" + NoiDungQueryString + "}";
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }

    reset() {
        this.lsHoatDongInfo.TuNgay = undefined;
        this.lsHoatDongInfo.DenNgay = undefined;
        this.lsHoatDongInfo.NoiDung = undefined;
        this.lsHoatDongInfo.NguoiTaoId = 0;
        this.lsHoatDongInfo.HoatDongId = 0;
        this.displayResetButton = false;
        let queryString = "{\"NguoiTaoId\":0,\"HoatDong\":0,\"TuNgay\":null,\"DenNgay\":null,\"NoiDung\":null}";
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

    exportExcel() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        
        if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>("NhatKyHeThong/ExportLichSuHoatDong", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                CommonService.downLoadFile(res, "application/vnd.ms-excel", "LichSuHoatDong" + dateTimeNow.getFullYear() + ".xlsx");
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
