import { Component, OnInit, ViewChild, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import { ActivatedRoute } from '@angular/router';
import { DuyetYeuCauLinhVatTu, DuyetYeuCauLinhVatTuChiTiet, TrangThaiDuyetYeuCauLinh } from '../duyet-yeu-cau-linh-vat-tu.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';


@Component({
  selector: 'app-duyet-yeu-cau-linh-vat-tu-bu-shared',
  templateUrl: './duyet-yeu-cau-linh-vat-tu-bu-shared.component.html',
  styleUrls: ['./duyet-yeu-cau-linh-vat-tu-bu-shared.component.scss']
})
export class DuyetYeuCauLinhVatTuBuSharedComponent implements OnInit {

  icDelete = icDelete;
  icEdit = icEdit;

  yeuCauLinhId: number = null;

  gridDataSource: any = {};
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  groups: GroupDescriptor[] = [{ field: 'Nhom', dir: 'asc', aggregates: [] }];
  sortChild: SortDescriptor[] = [{field: 'STT', dir: 'asc'}];

  yeuCauLinh: DuyetYeuCauLinhVatTu;
  urlGetDataGrid: string = "YeuCauLinhVatTu/GetVatTuYeuCauLinhBuDataForGrid";
  urlGetTotalPageGrid: string = "YeuCauLinhVatTu/GetVatTuYeuCauLinhBuTotalPageForGrid";
  urlGetDataGridChild: string = "YeuCauLinhVatTu/GetBenhNhanTheoVatTuCanLinhBuDataForGrid";
  urlGetTotalPageGridChild: string = "YeuCauLinhVatTu/GetBenhNhanTheoVatTuCanLinhBuTotalPageForGrid";

  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  @Input() documentype: DocumentType;
  @Input() validationErrors: any;

  @Output() hideDuyetbtn: EventEmitter<any> = new EventEmitter<any>();
  @Output() trangThaiYeuCau: EventEmitter<TrangThaiDuyetYeuCauLinh> = new EventEmitter<TrangThaiDuyetYeuCauLinh>();
  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.yeuCauLinh = new DuyetYeuCauLinhVatTu();

    let id = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.yeuCauLinhId = id;
      this.getById(id);
    }

    // this.gridColumns = [
    //   { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
    //   { Field: "TenVatTu", Title: "Tên vật tư", Width: 180 },
    //   { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
    //   { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
    //   { Field: "HangSanXuat", Title: "Hãng SX", Width: 180 },
    //   { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
    //   { Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
    //   { Field: "SoLuongCanBu", Title: "SL Cần bù", Width: 100 }
    // ]

    this.gridChildColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 120 },
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 120 },
      { Field: "HoTen", Title: "Họ tên", Width: 180 },
      { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
      { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120 },
      { Field: "NgayDieuTriString", Title: "Ngày điều  trị", Width: 120 },
      { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
      { Field: "SoLuong", Title: "SL", Width: 80 }
    ]
  }

  getById(id: number) {
    this.apiService.get<DuyetYeuCauLinhVatTu>("YeuCauLinhVatTu/GetYeuCauLinhVatTuBu?id=" + id)
      .subscribe((resultData) => {
        if (resultData !== undefined && resultData != null) {
          this.yeuCauLinh = resultData;
          this.trangThaiYeuCau.emit(new TrangThaiDuyetYeuCauLinh(this.yeuCauLinh.TenTrangThai, this.yeuCauLinh.DuocDuyet));

          this.gridColumns = [
            { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 180 },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 180 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
            { Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Hidden:  this.yeuCauLinh.DuocDuyet != null },
            { Field: "SoLuongCanBu", Title: "SL Cần bù", Width: 100 }
          ]
        }
      },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }

  getData(){
    return this.yeuCauLinh;
  }
}
