import { Component, OnInit, ViewChild, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { DuyetYeuCauLinhDuocPham, TrangThaiDuyetYeuCauLinh } from '../duyet-yeu-cau-linh-thuoc.model';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-duyet-yeu-cau-linh-thuoc-truc-tiep-shared',
  templateUrl: './duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component.html',
  styleUrls: ['./duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component.scss']
})
export class DuyetYeuCauLinhThuocTrucTiepSharedComponent implements OnInit {

  icDelete = icDelete;
  icEdit = icEdit;

  yeuCauLinhId: number = null;

  documentType: DocumentType;

  gridDataSource: any = {};
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  groups: GroupDescriptor[] = [{ field: 'Nhom', dir: 'asc', aggregates: [] }];
  sortChild: SortDescriptor[] = [{field: 'STT', dir: 'asc'}];

  yeuCauLinh: DuyetYeuCauLinhDuocPham;
  urlGetDataGrid: string = "YeuCauLinhDuocPham/GetDuocPhamYeuCauLinhTrucTiepDataForGrid";
  urlGetTotalPageGrid: string = "YeuCauLinhDuocPham/GetDuocPhamYeuCauLinhTrucTiepTotalPageForGrid";
  urlGetDataGridBenhNhan: string = "YeuCauLinhDuocPham/GetBenhNhanTheoDuocPhamCanLinhTrucTiepDataForGrid";
  urlGetTotalPageGridBenhNhan: string = "YeuCauLinhDuocPham/GetBenhNhanTheoDuocPhamCanLinhTrucTiepTotalPageForGrid";

  @ViewChild('slXuatTemplate', { static: true }) slXuatTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  @Input() documentype: DocumentType;
  @Input() validationErrors: any;

  @Output() trangThaiYeuCau: EventEmitter<TrangThaiDuyetYeuCauLinh> = new EventEmitter<TrangThaiDuyetYeuCauLinh>();
  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.yeuCauLinh = new DuyetYeuCauLinhDuocPham();

    let id = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.yeuCauLinhId = id;
      this.getById(id);
    }

    // this.gridColumns = [
    //   { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
    //   { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
    //   { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
    //   { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
    //   { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
    //   { Field: "DuongDung", Title: "ĐD", Width: 80 },
    //   { Field: "DonViTinh", Title: "ĐVT", Width: 80 },
    //   { Field: "HangSanXuat", Title: "Hãng SX", Width: 150 },
    //   { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
    //   { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
    //   { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120 },
    //   { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
    //   { Field: "SoLuongTon", Title: "SL Tồn", Width: 90 },
    //   { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 90 }
    // ]

    this.gridChildColumns = [
      { Field: "STT", Title: "#", Width: 20, Template: this.sttTemplate },
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 120 },
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 120 },
      { Field: "HoTen", Title: "Họ tên", Width: 180 },
      // { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
      // { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120 },
      // { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
      { Field: "SoLuong", Title: "SL", Width: 80 }
    ]
  }

  getById(id: number) {
    this.apiService.get<DuyetYeuCauLinhDuocPham>("YeuCauLinhDuocPham/GetYeuCauLinhDuocPhamTrucTiep?id=" + id)
      .subscribe((resultData) => {
        if (resultData !== undefined && resultData != null) {
          this.yeuCauLinh = resultData;
          this.trangThaiYeuCau.emit(new TrangThaiDuyetYeuCauLinh(this.yeuCauLinh.TenTrangThai, this.yeuCauLinh.DuocDuyet));

          if(this.yeuCauLinh.DuocDuyet == false)
          {
            this.gridColumns = [
              { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
              { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
              { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
              { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
              { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
              { Field: "DuongDung", Title: "Đường dùng", Width: 80 },
              { Field: "DonViTinh", Title: "ĐVT", Width: 80 },
              { Field: "HangSanXuat", Title: "Hãng SX", Width: 150 },
              { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
              // { Field: "SoLuongTon", Title: "SL Tồn", Width: 90 },
              { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 90 }
            ]
          }
          else
          {
            this.gridColumns = [
              { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
              { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
              { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
              { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
              { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
              { Field: "DuongDung", Title: "Đường dùng", Width: 80 },
              { Field: "DonViTinh", Title: "ĐVT", Width: 80 },
              { Field: "HangSanXuat", Title: "Hãng SX", Width: 150 },
              { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
              { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
              { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120 },
              { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
              { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
              { Field: "SoLuongTon", Title: "SL Tồn", Width: 90, Hidden:  this.yeuCauLinh.DuocDuyet == true},
              { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 90 }
            ]
          }
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
