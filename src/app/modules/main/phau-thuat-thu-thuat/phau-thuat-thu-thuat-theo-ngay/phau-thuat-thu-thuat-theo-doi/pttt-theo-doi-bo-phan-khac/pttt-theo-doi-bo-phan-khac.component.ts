import { Component, OnInit, ViewChild, TemplateRef, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { KhamTheoDoiBoPhanKhac } from '../../../phau-thuat-thu-thuat.model';

import icAddCircle from '@iconify/icons-ic/add-circle';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';

@Component({
    selector: 'app-pttt-theo-doi-bo-phan-khac',
    templateUrl: './pttt-theo-doi-bo-phan-khac.component.html',
    styleUrls: ['./pttt-theo-doi-bo-phan-khac.component.scss']
})

export class PtttTheoDoiBoPhanKhacComponent implements OnInit {
    icAddCircle= icAddCircle;
    icDelete = icDelete;
    icEdit = icEdit;
    icSave = icSave;

    benhNhanHienTai: any = null;
    documentType: DocumentType.PhauThuatThuThuatTheoNgay;

    gridKhamKhacColumns: any[] = [];
    dataSourceKhamKhac: any = {
        data: [],
        total: 0
    }

    isShowView: boolean = false;
    @ViewChild('boPhanTemplate', { static: true }) boPhanTemplate: TemplateRef<any>;
    @ViewChild('moTaTemplate', { static: true }) moTaTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

    @Input() data: any = null;
    @Input() dataKhamBoPhanKhac: any = null;
    @Input() validationErrors: any;
    @Input() isReadonly: boolean = false;
    @Input() isChangeData: boolean = false;

    @Output() outputPTTTTheoDoiBoPhanKhacDataChanged = new EventEmitter();

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
        this.benhNhanHienTai = this.data;

        this.gridKhamKhacColumns = [
            { Field: "Ten", Title: "Bộ phận", Width: 100,Sortable: false, Template: this.boPhanTemplate },
            { Field: "NoiDung", Title: "Mô tả", Width: 220, Sortable: false,Template: this.moTaTemplate },
            { Field: "Action", Title: "", Width: 20, Sortable: false,Template: this.actionTemplate }
        ];

        this.dataSourceKhamKhac.data = this.dataKhamBoPhanKhac;
    }

    onDataChange() {
        if(!this.isChangeData) {
            this.isChangeData = true;
            this.outputPTTTTheoDoiBoPhanKhacDataChanged.emit(true);
        }
    }

    themKhamKhac(){
        let boPhanKhac = new KhamTheoDoiBoPhanKhac();
        this.dataSourceKhamKhac.data.push(boPhanKhac);

        this.onDataChange();
    }

    xoa(dataItem) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
              this.dataSourceKhamKhac.data.splice(this.dataSourceKhamKhac.data.findIndex(x => x == dataItem), 1);
            }
        });
    }
}
