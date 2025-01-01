import { Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LichSuTiemChungSearch, YeuCauDichVuKyThuat } from '../../../tiem-chung.model';
import { LichSuTiemChungPopupSharedComponent } from '../../lich-su-tiem-chung-popup-shared/lich-su-tiem-chung-popup-shared.component';

@Component({
  selector: 'app-lich-su-tiem',
  templateUrl: './lich-su-tiem.component.html',
  styleUrls: ['./lich-su-tiem.component.scss']
})

export class LichSuTiemComponent implements OnInit {
    documentType: DocumentType = DocumentType.TiemChungLichSuTiem;
    lichSuTiemChungSearch: LichSuTiemChungSearch = new LichSuTiemChungSearch();

    lichSuTiemChungGridColumns: any[] = [];
    sort: SortDescriptor[] = [{ field: "ThoiDiemKham", dir: 'desc' }];
    
    @ViewChild('gridLichSuTiem', { static: true }) gridLichSuTiem: GridComponent;

    @ViewChild('chiTietTemplate', { static: true }) chiTietTemplate: TemplateRef<any>;
    @ViewChild('thoiDiemKhamTemplate', { static: true }) thoiDiemKhamTemplate: TemplateRef<any>;
    @ViewChild('bacSiKhamTemplate', { static: true }) bacSiKhamTemplate: TemplateRef<any>;
    @ViewChild('trangThaiSauTiemTemplate', { static: true }) trangThaiSauTiemTemplate: TemplateRef<any>;
    @ViewChild('thoiGianHenTiemTemplate', { static: true }) thoiGianHenTiemTemplate: TemplateRef<any>;

    @Input() thongTinBenhNhan: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
    
    constructor(private dialog: MatDialog, private authService: AuthService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.lichSuTiemChungGridColumns = [
            { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 100, Sortable: true, Template: this.chiTietTemplate },
            { Field: "HoTen", Title: "Tên người bệnh", Width: 100, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 100, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 150, Sortable: true },
            { Field: "MuiTiem", Title: "Mũi tiêm", Width: 100, Sortable: true },
            { Field: "ThoiDiemKham", Title: "Thời điểm khám", Width: 100, Sortable: true, Template: this.thoiDiemKhamTemplate },
            { Field: "BacSiKhamId", Title: "Bác sĩ khám", Width: 100, Sortable: true, Template: this.bacSiKhamTemplate },
            { Field: "LoaiPhanUngSauTiem", Title: "Trạng thái sau tiêm", Width: 100, Sortable: true, Template: this.trangThaiSauTiemTemplate },
            { Field: "ThoiGianHenTiem", Title: "Thời gian hẹn tiêm", Width: 100, Sortable: true, Template: this.thoiGianHenTiemTemplate }
        ];
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.thongTinBenhNhan && changes.thongTinBenhNhan.currentValue) {
            this.lichSuTiemChungSearch.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
            this.lichSuTiemChungSearch.BenhNhanId = this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhanId;
            this.lichSuTiemChungSearch.YeuCauDichVuKyThuatKhamSangLocId = this.thongTinBenhNhan.Id;
            
            this.filterGridLichSuTiem();
        }
    }

    filterGridLichSuTiem() {
        let queryString = JSON.stringify(this.lichSuTiemChungSearch);

        this.gridLichSuTiem.additionalSearchString = queryString;
        this.gridLichSuTiem.search();
    }

    chiTiet(id: any) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.dialog.open(LichSuTiemChungPopupSharedComponent, {
                disableClose: false,
                width: '1500px',
                height: 'auto',
                data: {
                    YeuCauKhamTiemChungId: id
                },
            }).afterClosed().subscribe((res) => {
            });
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
