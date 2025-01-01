import { Component, OnInit, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import { YeuCauKhamBenh } from '../../../kham-benh.model';


@Component({
    selector: 'app-lich-su-kham-benh-tien-su-benh',
    templateUrl: './lich-su-kham-benh-tien-su-benh.component.html',
    styleUrls: ['./lich-su-kham-benh-tien-su-benh.component.scss']
})
export class LichSuKhamBenhTienSuBenhComponent implements OnInit {

    urlGetDataGridTienSuBenh: string = "KhamBenh/GetDataForGridAsyncTienSuBenh";
    urlGetTotalPageGridTienSuBenh: string = "";

    icAdd = icAdd;
    icDelete = icDelete;
    icAddCircle = icAddCircle;
    icEdit = icEdit;
    icSave = icSave;
    gridTienSuBenhColumns: any[] = [];
    documentType: DocumentType;
    dataSourceTienSu: any = {
        data: [],
        total: 0
    }
    validationErrors: any;
    count: number = 1; // biến này chỉ dùng để gán tạm giá trị
    benhNhanHienTai = new YeuCauKhamBenh();
    @Input() data: any = null;
    @Input() yeuCauKhamBenhId: number;
    @Input() BenhNhan: number;
    constructor() { }

    ngOnInit() {
        this.benhNhanHienTai = this.data;
        // this.documentType = DocumentType.KhamBenh; 
        this.gridTienSuBenhColumns = [
            { Field: "LoaiTienSuBenh", Title: "Loại tiền sử bệnh", Sortable: false, Width: 120 },
            { Field: "TenBenh", Title: "Tên Bệnh", Sortable: false, Width: 120 },
        ];
        
    }
}
