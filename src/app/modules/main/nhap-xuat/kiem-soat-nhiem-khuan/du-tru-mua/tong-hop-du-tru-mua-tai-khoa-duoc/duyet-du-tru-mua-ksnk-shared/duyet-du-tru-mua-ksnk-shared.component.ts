import { Component, OnInit, EventEmitter, Output, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icInfo from '@iconify/icons-ic/baseline-info';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { TongHopDuTruMuaTaiKhoaDuoc } from '../tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-duyet-du-tru-mua-ksnk-shared',
  templateUrl: './duyet-du-tru-mua-ksnk-shared.component.html',
  styleUrls: ['./duyet-du-tru-mua-ksnk-shared.component.scss']
})

export class DuyetDuTruMuaKSNKSharedComponent implements OnInit {
  thongTinDuTruMuaVatTuTaiKhoaDuoc: TongHopDuTruMuaTaiKhoaDuoc;
  documentType: DocumentType;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  gridChildChildColumns: any[] = [];

  khos: any[] = [];
  hdts: any[] = [];
  validationErrors: any;
  trangThaiDuyet: boolean = null;
  icInfo = icInfo;
  gridDataSource: any = {};
  gridChildDataSource: any = {};
  data: any[] = [];
  loaiKhoThuoc: boolean = true;
  KhoaId: number = 0;
  KhoId: number = 0;
  TrangThai: number;
  // trường hợp tu chôi,đã duyệt  === true  , cho duyet == false
  isDisableTrangThai: boolean = false;
  IdTrangThai: number = 0;
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

    this.thongTinDuTruMuaVatTuTaiKhoaDuoc = new TongHopDuTruMuaTaiKhoaDuoc();
    const id: number = this.route.snapshot.params.id;
    const loaiKhoThuoc: number = this.route.snapshot.params.khoThuocId;

    if (loaiKhoThuoc != undefined || loaiKhoThuoc != null) {
      if (loaiKhoThuoc == 5) {
        this.loaiKhoThuoc = true; // khoa
      }
      if (loaiKhoThuoc != 5) {
        this.loaiKhoThuoc = false; // kho
      }
    }
    if (id != undefined && loaiKhoThuoc != undefined) {
      this.getById(id);
    }
    this.gridChildColumns = [
      { Field: 'STT', Title: '#', Width: 40, Sortable: false },
      { Field: 'Loai', Title: 'Loại', Width: 100, Sortable: false, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
      { Field: 'TenVatTu', Title: 'Tên', Width: 50, Sortable: false },
      { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
      { Field: 'HoatChat', Title: 'Quy cách', Width: 50, Sortable: false },
      { Field: 'NhaSX', Title: 'Hãng SX', Width: 50, Sortable: false },
      { Field: 'NuocSX', Title: 'Nước SX', Width: 50, Sortable: false },
      { Field: 'SLDuTru', Title: 'SL dự trù', Width: 150, Sortable: false },
      { Field: 'SLDuKienSuDungTrongKho', Title: 'SL d.kiến s.dụng trong kỳ', MinWidth: 30, Sortable: false },
      { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 150, Sortable: false },
      { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 150, Sortable: false, Template: this.tongTonKhoTemplate },
      { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 150, Sortable: false, Template: this.hDChuaNhanTemplate },
      { Field: 'SLDuTruTKhoDuyet', Title: 'T.Khoa duyệt', Width: 150, Sortable: false },
      { Field: 'SLDuTruKhoDuocDuyet', Title: 'K.dược duyệt', Width: 150, Sortable: false, Template: this.SLDuTruKhoDuocDuyet },
    ];
    this.gridColumns = [
      { Field: 'STT', Title: '#', Width: 40, Sortable: false, Template: this.sttTemplate },
      { Field: 'Loai', Title: 'Loại', Width: 100, Sortable: false, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
      { Field: 'TenVatTu', Title: 'Tên', Width: 50, Sortable: false },
      { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
      { Field: 'HoatChat', Title: 'Quy cách', Width: 50, Sortable: false },
      { Field: 'NhaSX', Title: 'Hãng SX', Width: 50, Sortable: false },
      { Field: 'NuocSX', Title: 'Nước SX', Width: 50, Sortable: false },
      { Field: 'SLDuTru', Title: 'SL dự trù', Width: 150, Sortable: false },
      { Field: 'SLDuKienSuDungTrongKho', Title: 'SL d.kiến s.dụng trong kỳ', Width: 150, Sortable: false },
      { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 150, Sortable: false },
      { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 150, Sortable: false, Template: this.tongTonKhoTemplate },
      { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 150, Sortable: false, Template: this.hDChuaNhanTemplate },
      { Field: 'SLDuTruTKhoaDuyet', Title: 'T.Khoa duyệt', Width: 150, Sortable: false, Template: this.sLDuTruKhoTDuocDuyet },
    ]
    this.gridChildChildColumns = [
      { Field: 'STT', Title: '#', Width: 50, Sortable: false, Template: this.sttTemplate },
      { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: true },
      { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: true },
      { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: true },
    ];
  }
  TooltipCustom(duTruDetail: any) {
    this.khos = [...duTruDetail.TongTonList];
    this.hdts = [...duTruDetail.HopDongChuahapList];
  }
  getById(id) {
    this.isDisableTrangThai = true;
    this.thongTinDuTruMuaVatTuTaiKhoaDuoc.LoaiDuyet = true;
    this.apiService.post<any>("YeuCauMuaKSNK/GetDataUpdate?id=" + id + "&typeLoaiKho=" + this.loaiKhoThuoc)
      .subscribe((resultData) => {

        if (resultData !== undefined && resultData != null) {
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.Id = resultData.Id;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.SoPhieu = resultData.SoPhieu;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoId = resultData.KhoaId;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.Khoa = resultData.TenKhoa;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KyDuTru = resultData.KyDuTru;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.NguoiYeuCauId = resultData.NguoiYeuCauId;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.TenNguoiYeuCau = resultData.TenNguoiYeuCau;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.NgayYeuCau = resultData.NgayYeuCau;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.GhiChu = resultData.GhiChu;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.TenKho = resultData.TenKho;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai = resultData.TrangThai;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThaiHienThi = resultData.TrangThaiHienThi;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoId = resultData.KhoId;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.LoaiDuTru = resultData.TenLoaiDuTru;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.LoaiDuTruId = resultData.LoaiDuTruId;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.LyDoTruongKhoaTuChoi = resultData.LyDoTuChoi;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList = resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocList;
          this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoaId = resultData.KhoaId;
          this.gridDataSource = {
            data: this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList,
            total: this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.length
          };
          this.setDataGridView();
          this.dataItem.emit(this.thongTinDuTruMuaVatTuTaiKhoaDuoc);
        }
      });
  }
  getSharedData() {
    this.thongTinDuTruMuaVatTuTaiKhoaDuoc;
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
  modelChangeSoLuongDuyet(event, dataItem) {
    if (event != null) {
      let index = this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.findIndex(x => x.Id == dataItem.Id);
      let vitri = this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.indexOf(dataItem);
      if (index != -1) {
        this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList[vitri].SLDuTruTKhoDuyet = event;
      }
    }
  }
  modelChangeSoLuongKDDuyet(event, dataItem) {
    if (event != null) {
      let index = this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.findIndex(x => x.Id == dataItem.Id);
      let vitri = this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.indexOf(dataItem);
      if (index != -1) {
        this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList[vitri].SLDuTruKhoDuocDuyet = event;
      }
    }
  }
}
