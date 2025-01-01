import { Component, OnInit, Inject } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-khong-thuc-hien-pttt-list-popup',
    templateUrl: './khong-thuc-hien-pttt-list-popup.component.html',
    styleUrls: ['./khong-thuc-hien-pttt-list-popup.component.scss']
})
export class KhongThucHienPtttListPopupComponent implements OnInit {
    documentType: DocumentType = DocumentType.PhauThuatThuThuatTheoNgay;
    popup: any;
    ycdvktId;
    gridKhongThucHien: any;

    icClose = icClose;
    dataSourcePtttKhongThucHien = {
        data: [],
        total: 0
    };

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialog: MatDialog) { }

    ngOnInit() {
        const self = this;
        self.documentType = DocumentType.PhauThuatThuThuatTheoNgay;
        self.dataSourcePtttKhongThucHien.data = self.data;
        self.dataSourcePtttKhongThucHien.total = self.data.length;
        self.gridKhongThucHien = [
            { Field: 'TenDv', Title: 'Tên Dịch Vụ', ShowTooltip: true, Width: 334 },
            {
                Field: 'LyDoHuy', Title: 'Lý Do Hủy', Width: 385, ShowTooltip: true
            },
            {
                Field: 'NguoiHuy', Title: 'Người Hủy', Width: 187, ShowTooltip: true
            }
        ];
    }

    close() {
        this.dialog.closeAll();
    }
}
