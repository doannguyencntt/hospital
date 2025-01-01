import { Component, OnInit, Input} from '@angular/core';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { YeuCauKhamBenh } from 'src/app/modules/main/kham-benh/kham-benh.model';

@Component({
  selector: 'app-lich-su-kham-benh-di-ung-thuoc',
  templateUrl: './lich-su-kham-benh-di-ung-thuoc.component.html',
  styleUrls: ['./lich-su-kham-benh-di-ung-thuoc.component.scss']
})
export class LichSuKhamBenhDiUngThuocComponent implements OnInit {
  icAdd = icAdd;
  icDelete = icDelete;
  icAddCircle = icAddCircle;
  icEdit = icEdit;
  icSave = icSave;


  validationErrors: any;
  gridDiUngThuocColumns: any[] = [];
  documentType: DocumentType;
  count: number = 1; // biến này chỉ dùng để gán tạm giá trị
  dataSourceDiUng: any = {
    data: [],
    total: 0
  }
  benhNhanHienTai = new YeuCauKhamBenh();
  @Input() data: any = null;
  @Input() yeuCauKhamBenhId: number;
  @Input() BenhNhan: number;
  urlGetData: string = "KhamBenh/GetDataForGridAsyncDiUngThuoc";
  urlGetTotalPage: string = "KhamBenh/GetTotalPageForGridAsyncDiUngThuoc"
  constructor() { }

  ngOnInit() {
    this.benhNhanHienTai = this.data;
    // this.documentType = DocumentType.KhamBenh;
    this.gridDiUngThuocColumns = [
      { Field: "TenLoaiDiUng", Title: "Loại dị ứng", Width: 100 },
      { Field: "TenDiUng", Title: "Tên dị ứng ", Width: 280 },
      { Field: "BieuHienDiUng", Title: "Biểu hiện dị ứng", Width: 250 },
      { Field: "TenMucDo", Title: "Mức độ", Width: 120, },
    ];
  }
}
