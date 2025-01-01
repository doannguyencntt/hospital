import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    selector: 'app-nhom-dich-vu-loi-popup',
    templateUrl: './nhom-dich-vu-loi-popup.component.html',
    styleUrls: ['./nhom-dich-vu-loi-popup.component.scss']
})

export class NhomDichVuLoiPopupComponent implements OnInit {
    icClose = icClose;
  
    documentType: DocumentType;
    gridColumns: any[] = [];
    gridDataSource = {
        data: [],
        total: 0,
    };
  
    @ViewChild('grid', { static: true }) gridChild: GridComponent;
    @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<NhomDichVuLoiPopupComponent>) { }
  
    ngOnInit() {
        this.documentType = this.data.DocumentType;
        
        this.gridColumns = [
            { Field: "STT", Title: "#", Width: 30, Sortable: false, Template: this.sttTemplate },
            { Field: "TenGoiDichVu", Title: "Nhóm", Width: 150, Sortable: true },
            { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 150, Sortable: false },
            { Field: "TenLoi", Title: "Cảnh báo", Width: 100, Sortable: false },
            { Field: "Action", Title: "", Width: 80, Template: this.actionTemplate },
        ];
        this.gridDataSource.data = this.data.arrDichVuCanhBao;
    }
  
    chonDichVuKhongThem(){
        this.dialogRef.close(this.gridDataSource.data.filter(x => x.KhongThem));
    }
  
    close(answer) {
        this.dialogRef.close(answer);
    }
}
