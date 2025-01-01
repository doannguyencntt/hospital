import { Component, OnInit, ViewChild, TemplateRef, Input, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { ApiService } from 'src/app/core/services/api.service';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { DuTruMuaDuocPhamTaiKhoaChiTietVo, DuyetDuTruMuaDuocPhamViewModel, ThongTinLyDoHuyDuyetTaiKhoa, TongHopDuTruMuaThuocTaiKhoa } from '../tong-hop-du-tru-mua-thuoc-tai-khoa.model';

@Component({
  selector: 'app-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared',
  templateUrl: './du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component.html',
  styleUrls: ['./du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component.scss']
})

export class TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent implements OnInit {
  documentType: DocumentType;
  danhSachTongHopDuTruMuaThuocTaiKhoa: TongHopDuTruMuaThuocTaiKhoa;
  duTruMuaDuocPhamTaiKhoaChiTietVo: DuTruMuaDuocPhamTaiKhoaChiTietVo[] = [];
  duyetDuTruMuaDuocPhamViewModel = {} as DuyetDuTruMuaDuocPhamViewModel;
  thongTinLyDoHuyDuyetTaiKhoa = {} as ThongTinLyDoHuyDuyetTaiKhoa;

  confrim: any;
  popupSavingData: any = null;
  validationErrors: any = null;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];

  sortDuTruChild: SortDescriptor[] =
    [{
      field: "Id",
      dir: "asc"
    }];

  urlGetData = "YeuCauMuaDuocPham/GetDuTruMuaDuocPhamChiTietForGridAsyncChild";
  urlGetTotal = "YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamChiTietForGridAsyncChild";

  urlGetDataChild = "YeuCauMuaDuocPham/GetDuTruMuaDuocPhamTaiKhoaChiTietForGridAsyncChild";
  urlGetTotalChild = "YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamTaiKhoaChiTietForGridAsyncChild";
  public duTruMuaDuocPhamId: any = 0;
  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  @ViewChild('nhomSLTKDuyet', { static: true }) nhomSLTKDuyet: TemplateRef<any>;
  // @ViewChild(TongHopDuTruMuaThuocTaiKhoaSharedComponent, { static: true }) shared: any;
  @Input() trangThaiVo: any;
  @Input() validationErrorsDuocPham: any;
  @Input() isCreate: boolean;
  @Output() hideGuibtn: EventEmitter<any> = new EventEmitter<any>();
  constructor(private apiService: ApiService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoa;
    this.danhSachTongHopDuTruMuaThuocTaiKhoa = new TongHopDuTruMuaThuocTaiKhoa();
    let id = this.route.snapshot.params.id;
    if (id != undefined && id != null) {
      this.getThongTinTongHopDuTruMuaTaiKhoa(id);
    }

    this.duTruMuaDuocPhamId = id;
    this.gridColumns = [
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDuocPham", Title: "Tên", Width: 100, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 100, ShowTooltip: true },
      { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 80 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
      { Field: "SoDangKy", Title: "SDK", Width: 50 },      
      { Field: "DuongDung", Title: "Đường Dùng", Width: 50 },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 100 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "NhomDuPhong", Title: "Nhóm Đ.Trị/D.Phòng", Width: 100 },
      { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 100 },
      { Field: "SoLuongDuKienSuDung", Title: "SL D.KIẾN S.DỤNG TRONG KỲ", Width: 100 },
      { Field: "SoLuongDuTruTruongKhoaDuyet", Title: "T.Khoa Duyệt", Width: 100 },
    ];

    this.gridChildColumns = [
      { Field: "TenNhomDieuTriDuPhong", Title: "Nhóm", Width: 100},
      { Field: "TenKho", Title: "Kho", Width: 120},
      { Field: "KyDuTruDisplay", Title: "Kỳ dự trù", Width: 80 },
      { Field: "SoLuongDuTruDisplay", Title: "SL dự trù", Width: 50 },
      { Field: "SoLuongDuKienSuDungDisplay", Title: "SL d.kiến trong kỳ", Width: 50 },
    ];
  }

  getThongTinTongHopDuTruMuaTaiKhoa(id: any) {
    this.apiService.get<any>("YeuCauMuaDuocPham/GetThongTinDuTruDuocPhamTaiKhoa/" + id)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.danhSachTongHopDuTruMuaThuocTaiKhoa = resultData;
          console.log("data: ", resultData)
        }
      });
  }

  onDataBound(event) {
    if (event != undefined && event.Data.length > 0) {
      this.duTruMuaDuocPhamTaiKhoaChiTietVo = event.Data;
    }
  }

  getSharedData() {
    return this.danhSachTongHopDuTruMuaThuocTaiKhoa;
  }
}
