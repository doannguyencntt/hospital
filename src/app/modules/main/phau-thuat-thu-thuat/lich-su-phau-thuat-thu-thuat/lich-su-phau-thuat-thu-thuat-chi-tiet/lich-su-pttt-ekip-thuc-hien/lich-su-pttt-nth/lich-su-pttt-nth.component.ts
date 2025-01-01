import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';


@Component({
    selector: 'app-lich-su-pttt-nth',
    templateUrl: './lich-su-pttt-nth.component.html',
    styleUrls: ['./lich-su-pttt-nth.component.scss']
})
export class LichSuPtttNthComponent implements OnInit {
    @Input() yeuCauDichVuKyThuatId: number;
    gridNguoiThucHienColumns: any[] = [];
    isFirstLoadData: boolean = true;
    documentType: DocumentType = DocumentType.LichSuPhauThuatThuThuat;
    validationErrors: any;
    @ViewChild('gridPttt', { read: GridComponent, static: false }) gridPttt: GridComponent;
    constructor() { }

    ngOnInit() {
        this.gridNguoiThucHienColumns = [
            { Field: "ChucDanh", Title: "Chức danh", Sortable: false, Width: 120 },
            { Field: "HoTen", Title: "Họ tên", Sortable: false, Width: 120 },
            { Field: "VaiTro", Title: "Vai trò", Sortable: false, Width: 120 },
        ];
    }

    ngOnChanges() {
        this.refreshGrid();
    }

    refreshGrid() {
        var self = this;
        if (self.yeuCauDichVuKyThuatId != null && self.gridPttt != undefined) {
            self.gridPttt._additionalSearchString = self.yeuCauDichVuKyThuatId.toString();
            self.gridPttt.search();
        }
    }


}
