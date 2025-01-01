import { Component, OnInit, Input, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { DuyetYeuCauLinhDuocPham, DuyetYeuCauLinhDuocPhamChiTiet, TrangThaiDuyetYeuCauLinh } from '../duyet-yeu-cau-linh-thuoc.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-duyet-yeu-cau-linh-thuoc-thuong-shared',
  templateUrl: './duyet-yeu-cau-linh-thuoc-thuong-shared.component.html',
  styleUrls: ['./duyet-yeu-cau-linh-thuoc-thuong-shared.component.scss']
})
export class DuyetYeuCauLinhThuocThuongSharedComponent implements OnInit {

  documentType: DocumentType;
  icDelete = icDelete;
  icEdit = icEdit;

  gridDataSource: any = {};
  gridColumns: any[] = [];
  // groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  groups: GroupDescriptor[] = [{ field: 'Nhom', dir: 'asc', aggregates: [] }];

  yeuCauLinh: DuyetYeuCauLinhDuocPham;

  @ViewChild('slXuatTemplate', { static: true }) slXuatTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;//
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('gridDuocPham', { read: GridComponent, static: false }) gridDuocPham: GridComponent;

  @Input() documentype: DocumentType;
  @Input() validationErrors: any;

  @Output() hideDuyetbtn: EventEmitter<any> = new EventEmitter<any>();
  @Output() trangThaiYeuCau: EventEmitter<TrangThaiDuyetYeuCauLinh> = new EventEmitter<TrangThaiDuyetYeuCauLinh>();

  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.yeuCauLinh = new DuyetYeuCauLinhDuocPham();
    this.yeuCauLinh.DuyetYeuCauLinhDuocPhamChiTiets = new Array<DuyetYeuCauLinhDuocPhamChiTiet>();

    let id = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
    }

    // this.gridColumns = [
    //   { Field: "STT", Title: "#", Width: 50 , Template: this.sttTemplate},
    //   { Field: "TenDuocPham", Title: "Tên dược phẩm", MinWidth: 120 },
    //   { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
    //   { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
    //   { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 200 },
    //   { Field: "DuongDung", Title: "Đường dùng", Width: 120 },
    //   { Field: "DVT", Title: "ĐVT", Width: 100 },
    //   { Field: "HangSanXuat", Title: "Hãng SX", Width: 200 },
    //   { Field: "NuocSanXuat", Title: "Nước SX", Width: 120 },
    //   { Field: "SLTon", Title: "SL Tồn", Width: 120 },
    //   { Field: "SoLuong", Title: "SL Yêu Cầu", Width: 120 },
    //   { Field: "SoLuongCoTheXuat", Title: "SL Có thể xuất", Width: 120, Template: this.slXuatTemplate }
    // ]
  }

  getById(id: number) {
    this.apiService.get<DuyetYeuCauLinhDuocPham>("YeuCauLinhDuocPham/GetYeuCauLinhDuocPhamThuong?id=" + id)
      .subscribe((resultData) => {
        if (resultData !== undefined && resultData != null) {
          this.yeuCauLinh = resultData;
          this.gridColumns = [
            { Field: "STT", Title: "#", Width: 50 , Template: this.sttTemplate},
            { Field: "TenDuocPham", Title: "Tên dược phẩm", MinWidth: 120 },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
            { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 200 },
            { Field: "DuongDung", Title: "Đường dùng", Width: 120 },
            { Field: "DVT", Title: "ĐVT", Width: 100 },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 200 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 120 },
            { Field: "SLTon", Title: "SL Tồn", Width: 120, Hidden:  this.yeuCauLinh.DuocDuyet != null  },
            { Field: "SoLuong", Title: "SL Yêu Cầu", Width: 120},
            { Field: "SoLuongCoTheXuat", Title: "SL Có thể xuất", Width: 120, Template: this.slXuatTemplate }
          ];

          this.trangThaiYeuCau.emit(new TrangThaiDuyetYeuCauLinh(this.yeuCauLinh.TenTrangThai, this.yeuCauLinh.DuocDuyet));
          this.gridDataSource = {
            data: this.yeuCauLinh.DuyetYeuCauLinhDuocPhamChiTiets,
            total: this.yeuCauLinh.DuyetYeuCauLinhDuocPhamChiTiets.length
          }

          if(this.gridDuocPham != undefined)
          {
            this.gridDuocPham.gridDataSource = this.gridDataSource;
            this.gridDuocPham.setDataSource();
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

  changeSoLuongCoTheXuat(event, dataItem)
  {
    if(event != undefined && event != null)
    {
      if(event < dataItem.SoLuong)
      {
        //update 05/15/2021 cho phep SL duyet nho hon SL yeu cau
        //this.hideDuyetbtn.emit(true);
      }
      else if(event > dataItem.SoLuong)
      {
        dataItem.SoLuongCoTheXuat = dataItem.SoLuong;
      }
      // else
      // {
      //   var index = this.gridDataSource.data.findIndex(x => x.SoLuongCoTheXuat < x.SoLuong);
      //   this.hideDuyetbtn.emit(index != -1);
      // }
    }
  }
}
