import { Component, OnInit, TemplateRef, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ChiSoSinhTon, DacDiemTreSoSinhSauSinh } from '../thong-tin-benh-an.model';

@Component({
    selector: 'app-so-sinh-sau-khi-sinh',
    templateUrl: './so-sinh-sau-khi-sinh.component.html',
    styleUrls: ['./so-sinh-sau-khi-sinh.component.scss']
})

export class SoSinhSauKhiSinhComponent implements OnInit, OnChanges {
    @Input() dataSourceSoSinhSauDes: any = null;
    icAdd = icAdd;
    icDelete = icDelete;
    icAddCircle = icAddCircle;
    icEdit = icEdit;
    icSave = icSave;
    documentType: DocumentType;
    format: string = 'n1'
    isAllowAdd: boolean = true;
    dataSourceSinhHieu: any = {
        data: [],
        total: 0
    };
    gridColumnSoSinhSauDes: any[] = [];

    constructor(
        private apiService: ApiService,
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService) { }
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    ngOnInit() {
        this.gridColumnSoSinhSauDes = [
            { Field: "Diem", Title: "Điểm", Width: 100 },
            { Field: "SuGianNoLongNguc", Title: "Sự Giản Nở Lồng Ngực", Width: 150 },
            { Field: "CoKeoCoLienSuon", Title: "Cơ kéo cơ liên sườn", Width: 100 },
            { Field: "CoKeoMuiUc", Title: "Cơ kéo mũi ức", Width: 100 },
            { Field: "DapCanhMui", Title: "Đập cánh mũi", Width: 150 },
            { Field: "Reni", Title: "Reni", Width: 150 },
            { Field: "Action", Title: "", Width: 70}
        ];
    }

    ngOnChanges(changes: SimpleChanges) {

    }

    // them() {
    //     let newItem = new DacDiemTreSoSinhSauSinh();
    //     newItem.Diem = this.dataSourceSoSinhSauDes.data.length + 1;
    //     this.dataSourceSoSinhSauDes.data.push(newItem);
    // }
    // xoa(item: any) {
    //     this.dialog.open(ConfirmComponent, {
    //         disableClose: false,
    //         width: '400px',
    //         data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    //     }).afterClosed().subscribe(result => {
    //         if (result === 'Yes') {
    //             this.dataSourceSoSinhSauDes.data.splice(this.dataSourceSoSinhSauDes.data.findIndex(x => x == item), 1);
    //         }
    //     });
    // }
}