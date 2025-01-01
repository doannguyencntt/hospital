import { Component, OnInit ,EventEmitter,Output,ViewChild, TemplateRef} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { TongHopDuTruMuaTaiKhoaDuoc ,TrangThaiDuyet,TongHopDuTruTuaTaiKhoaDuocSearch,ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc,ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild} from '../tong-hop-du-tru-mua-tai-khoa-duoc.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icInfo from '@iconify/icons-ic/baseline-info';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-duyet-du-tru-mua-duoc-pham-shared',
  templateUrl: './duyet-du-tru-mua-duoc-pham-shared.component.html',
  styleUrls: ['./duyet-du-tru-mua-duoc-pham-shared.component.scss']
})
export class DuyetDuTruMuaDuocPhamSharedComponent implements OnInit {

  thongTinDuTruMuaDuocPhamTaiKhoaDuoc :TongHopDuTruMuaTaiKhoaDuoc;
  documentType: DocumentType;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  gridChildChildKhoColumns: any[] = [];
  gridChildChildKhoaColumns: any[] = [];
  

  khos: any[] = [];
  hdts: any[] = [];
  validationErrors : any;
  trangThaiDuyet: boolean = null;
  icInfo = icInfo;
  gridDataSource: any = {};   
  gridChildDataSource: any = {}; 
  data : any[] =[];
  loaiKhoThuoc : boolean = true;
  KhoaId : number = 0;
  KhoId : number = 0;
  TrangThai : number ;
 // trường hợp tu chôi,đã duyệt  === true  , cho duyet == false
 isDisableTrangThai : boolean = false;
  IdTrangThai : number = 0;
  groups: GroupDescriptor[] = [{ field: 'Loai' }];
 @ViewChild('gridCreate', { read: GridComponent, static: false }) gridChild: GridComponent;
 @ViewChild('tongTonKhoTemplate', { static: true }) tongTonKhoTemplate: TemplateRef<any>;
 @ViewChild('hDChuaNhanTemplate', { static: true }) hDChuaNhanTemplate: TemplateRef<any>;
 @ViewChild('tongTonKhoTemplateDuyet', { static: true }) tongTonKhoTemplateDuyet: TemplateRef<any>;
 @ViewChild('hDChuaNhanTemplateDuyet', { static: true }) hDChuaNhanTemplateDuyet: TemplateRef<any>;
 @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
 @ViewChild('loaiTemplate', { static: true }) loaiTemplate: TemplateRef<any>;
 @ViewChild('sLDuTruKhoTDuocDuyet', { static: true }) sLDuTruKhoTDuocDuyet: TemplateRef<any>;
 @ViewChild('SLDuTruKhoDuocDuyet', { static: true }) SLDuTruKhoDuocDuyet: TemplateRef<any>;
 @ViewChild('loaiNhomGroupHeaderTemplate', { static: true }) loaiNhomGroupHeaderTemplate: TemplateRef<any>;
 @Output() trangThaiYeuCau: EventEmitter<TrangThaiDuyet> = new EventEmitter<TrangThaiDuyet>();
 @Output() dataItem: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
) { }
  ngOnInit() {
    
    this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc = new TongHopDuTruMuaTaiKhoaDuoc();
    const id : number = this.route.snapshot.params.id;
    const loaiKhoThuoc : number = this.route.snapshot.params.khoThuocId;
  
    if(loaiKhoThuoc != undefined || loaiKhoThuoc != null)
    {
      if(loaiKhoThuoc == 5)
      {
        this.loaiKhoThuoc = true; // khoa
      }
      if(loaiKhoThuoc != 5)
      {
        this.loaiKhoThuoc = false; // kho
      }
    }  
    if(id != undefined && loaiKhoThuoc != undefined )
    {
      this.getById(id);
    }
    this.gridChildColumns = [
      { Field: 'STT', Title: '#', Width: 40, Sortable: false},
      { Field: 'Loai', Title: 'Loại', Width: 100, Sortable: false ,Hidden: true,TemplateGroupHeader:this.loaiNhomGroupHeaderTemplate},
      { Field: 'TenDuocPham', Title: 'Tên', MinWidth: 50, Sortable: false },
      { Field: 'HoatChat', Title: 'Hoạt chất', Width: 50, Sortable: false },
      { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 50, Sortable: false},
      { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false},
      { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false},
      { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false},
      { Field: 'NhaSX', Title: 'Nhà SX', Width: 50, Sortable: false },
      { Field: 'NuocSX', Title: 'Nước SX', Width: 50, Sortable: false},
   
      { Field: 'SLDuTru', Title: 'SL dự trù', Width: 80, Sortable: false },
      { Field: 'SLDuKienSuDungTrongKho', Title: 'SL d.kiến s.dụng trong kỳ', Width: 80, Sortable: false },
      { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 80, Sortable: false },
      { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 80, Sortable: false ,Template: this.tongTonKhoTemplate},
      { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 80, Sortable: false ,Template: this.hDChuaNhanTemplate},
      { Field: 'SLDuTruTKhoDuyet', Title: 'T.Khoa duyệt', Width: 100, Sortable: false },
      { Field: 'SLDuTruKhoDuocDuyet', Title: 'K.dược duyệt', Width: 100, Sortable: false,Template: this.SLDuTruKhoDuocDuyet  },
  ];
  this.gridColumns = [
    { Field: 'STT', Title: '#', Width: 40, Sortable: false,Template: this.sttTemplate},
    { Field: 'Loai', Title: 'Loại', Width: 100, Sortable: false ,Hidden: true,TemplateGroupHeader:this.loaiNhomGroupHeaderTemplate},
    { Field: 'TenDuocPham', Title: 'Tên', MinWidth: 100, Sortable: false },
    { Field: 'HoatChat', Title: 'Hoạt chất', Width: 80, Sortable: false },
    { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 80, Sortable: false},
    { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false},
    { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false},
    { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false},
    { Field: 'NhaSX', Title: 'Nhà SX', Width: 100, Sortable: false },
    { Field: 'NuocSX', Title: 'Nước SX', Width: 100, Sortable: false},
    { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
    { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: false },
    { Field: 'SLDuKienSuDungTrongKho', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
    { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 100, Sortable: false },
    { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 100, Sortable: false ,Template: this.tongTonKhoTemplate},
    { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 100, Sortable: false ,Template: this.hDChuaNhanTemplate},
    { Field: 'SLDuTruTKhoaDuyet', Title: 'T.Khoa duyệt', Width: 100, Sortable: false,Template: this.sLDuTruKhoTDuocDuyet },
]
this.gridChildChildKhoColumns =[
  { Field: 'STT', Title: '#', Width: 50, Sortable: false,Template:this.sttTemplate},
    { Field: 'Nhom', Title: 'Nhóm', Width: 150, Sortable: true },
    { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: true },
    { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: true},
    { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: true },
];
this.gridChildChildKhoaColumns =[
  { Field: 'STT', Title: '#', Width: 50, Sortable: false,Template:this.sttTemplate},
    { Field: 'Nhom', Title: 'Nhóm', Width: 150, Sortable: true },
    { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: true },
    { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: true},
    { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: true },
    { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
];
  }
  TooltipCustom(duTruDetail: any) {
    this.khos = [...duTruDetail.TongTonList];
    this.hdts = [...duTruDetail.HopDongChuahapList];
}
getById(id)
{
  this.isDisableTrangThai = true;
  this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LoaiDuyet = true;
  this.apiService.post<any>("YeuCauMuaDuocPham/GetDataUpdate?id=" + id + "&typeLoaiKho=" + this.loaiKhoThuoc)
    .subscribe((resultData) => {

      if (resultData !== undefined && resultData != null) {
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Id = resultData.Id;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.SoPhieu = resultData.SoPhieu;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoId = resultData.KhoaId;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Khoa = resultData.TenKhoa;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KyDuTru = resultData.KyDuTru;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.NguoiYeuCauId = resultData.NguoiYeuCauId;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TenNguoiYeuCau = resultData.TenNguoiYeuCau;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.NgayYeuCau = resultData.NgayYeuCau;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.GhiChu = resultData.GhiChu;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TenKho = resultData.TenKho;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai = resultData.TrangThai;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThaiHienThi = resultData.TrangThaiHienThi;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoId = resultData.KhoId;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LoaiDuTru = resultData.TenLoaiDuTru;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LoaiDuTruId = resultData.LoaiDuTruId;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LyDoTruongKhoaTuChoi = resultData.LyDoTuChoi;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList = resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocList;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoaId = resultData.KhoaId;
        this.gridDataSource = {
          data: this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList,
          total: this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.length
        };
        this.setDataGridView();
        this.dataItem.emit(this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc);
      }
    });
}
getSharedData() {
  this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc;
}
setDataGridView() {
  this.gridChild.gridDataSource = this.gridDataSource;

  if (this.gridChild !== undefined)
    this.gridChild.setDataSource();
}
setDataGridViewRefesh() {
  this.gridChild.gridDataSource = this.gridDataSource;
  if (this.gridChild !== undefined)
    this.gridChild.setDataSource();
}
modelChangeSoLuongDuyet(event ,dataItem){
  if(event != null)
  {
    let index = this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.findIndex(x=>x.Id == dataItem.Id);
    let vitri = this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.indexOf(dataItem);
    if(index != -1)
    {
      this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList[vitri].SLDuTruTKhoDuyet = event;
    }
  }
}
modelChangeSoLuongKDDuyet(event ,dataItem){
  if(event != null)
  {
    let index = this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.findIndex(x=>x.Id == dataItem.Id);
    let vitri = this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.indexOf(dataItem);
    if(index != -1)
    {
      this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList[vitri].SLDuTruKhoDuocDuyet = event;
    }
  }
}
}
