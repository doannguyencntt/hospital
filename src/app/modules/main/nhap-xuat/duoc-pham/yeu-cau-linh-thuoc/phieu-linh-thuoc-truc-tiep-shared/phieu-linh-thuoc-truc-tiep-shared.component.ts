import { Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { KhoLinhTu, ThongTinLinhTuKho, LinhTrucTiepDuocPham, QueryInfoQueryInfo,LinhDuocPhamTrucTiep, TrangThaiDuyetYeuCauLinh, DaDuyet, KhoId, LinhDuocPhamTrucTiepViewModel,SearchDanhSachThongDuocPham, ListIds, DuocPhamTonKhoKhongDu } from '../yeu-cau-linh-thuoc.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { Converter } from 'showdown';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import data from '@iconify/icons-ic/twotone-keyboard-voice';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

 
declare var jQuery: any;
@Component({
  selector: 'app-phieu-linh-thuoc-truc-tiep-shared',
  templateUrl: './phieu-linh-thuoc-truc-tiep-shared.component.html',
  styleUrls: ['./phieu-linh-thuoc-truc-tiep-shared.component.scss']
})
export class PhieuLinhThuocTrucTiepSharedComponent implements OnInit {
  linhTrucTiep = {} as LinhDuocPhamTrucTiep;
  linhTrucTiepDuocPhamObject = new LinhDuocPhamTrucTiep();
  validationErrors: any;
  documentType: DocumentType;
  phieuLinhTrucTiep = {} as KhoLinhTu;
  thongtinLinhTuKho: LinhDuocPhamTrucTiep;
  thongtinduocphamchitiet: LinhDuocPhamTrucTiep[] = [];
  thongtinduocphamchitietObject: LinhDuocPhamTrucTiep;
  linhTrucTiepDuocPhamitem: LinhTrucTiepDuocPham = new LinhTrucTiepDuocPham();
  linhTrucTiepDuocPham: LinhTrucTiepDuocPham[] = [];
  thongTinLinhTuKho: ThongTinLinhTuKho;
  searchDanhSachThongDuocPham = new  SearchDanhSachThongDuocPham();
  lyDoKhongDuyet = "";
  daDuyet: DaDuyet;
  gridDataSource: any = {};
  gridDataSourceCreate: any = {};
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  gridColumnTuChois: any[] = [];
  gridColumnsDaDuyet: any[] = [];
  gridDataSources: any = {};
  LinhVeKhoa = "";
  nguoiYeuCau = "";
  ngayYeuCau: Date;
  nguoiDuyet = "";
  ngayDuyet = null;
  ghiChu = "";
  urlGetDataChild: string = "YeuCauLinhDuocPham/GetAllYeuCauLinhThuocTuKho";
  urlGetDataDaTaoChild: string = "YeuCauLinhDuocPham/GetAllYeuCauLinhThuocTuKhoDaTao";
  KiemTraCheckGrid: boolean = false;
  yeuCauTiepNhanIdCheck : number = 0;
  gridCheckCu: any[] = [];
  linhTrucTiepMasterName :string = "masterLinhTT";
  checkChild :boolean = false;
  @Input() isCreate: any;
  @Output() trangThaiYeuCau: EventEmitter<TrangThaiDuyetYeuCauLinh> = new EventEmitter<TrangThaiDuyetYeuCauLinh>();
  @Output() quyenUpdate = new EventEmitter<any>();
  @ViewChild('slYeuCauTemplate', { static: true }) slYeuCauTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('checkBoxChildTemplate', { static: true }) checkBoxChildTemplate: TemplateRef<any>;
  @ViewChild('gridCreate', { read: GridComponent, static: false }) gridChild: GridComponent;
  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
  
  @ViewChild('gridChildCreate', { read: GridComponent, static: false }) gridChildCreate: GridComponent;
  @ViewChild('gridCha', { read: GridComponent, static: false }) gridCha: GridComponent;
  
  @Input() isDaTao: boolean = false;
  @Input() validationErrorsLinhTT: any;
  trangThaiDuyet: boolean = null;
  groups: GroupDescriptor[] = [{ field: 'LoaiThuoc' }];
  groupChilds: GroupDescriptor[] = [{ field: 'MaTN' }];
  constructor(private notificationService: NotificationService, private cdRef: ChangeDetectorRef, private dialog: MatDialog, private apiService: ApiService, private route: ActivatedRoute, private baseService: BaseService, private authService: AuthService) { }
  yeuCauLinhDuocPhamId: number = 0;
  ishowpopupComBoBox: boolean = false;
  phonglamViecId: any;
  getNhanVienId: any;
  khoLinhIdSearch : number = 0;
  phongLinhIdSearch : number = 0;
  isShowDuyet: boolean = false;
  trangThaiShowDuyet: boolean = false;
  ishowTrangThaiDuyet: boolean = false;
  showGridTrangThai: boolean;
  quyenUpdatePhieu: boolean = false;
   dateBatDau : string ="";
   dateKetThuc : string ="";
   stringListCheckCha : string = "0";
   trangThaiDuyetChiTiet :boolean =false;
   popupLoadingData: any = null;
 
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let khoLinhId = params['KhoLinhId'];
      let phongLinhVeId = 0; // tmp
      this.khoLinhIdSearch = khoLinhId;
      this.phongLinhIdSearch = phongLinhVeId;
      if (khoLinhId != undefined && phongLinhVeId != undefined && khoLinhId > 0 ) {
        this.showGridTrangThai = true; // tao mới nên có grid child con
        this.quyenUpdatePhieu = true;
        this.KiemTraCheckGrid = true;
        this.dialog.open(LoadingComponent, {
          disableClose: true,
          width: '200px',
          height: '90px',
          data: { Title: 'Đang tải dữ liệu...' }
        });
        this.apiService.post<any>('YeuCauLinhDuocPham/ThongTinDanhSachCanLinh?idKhoLinh=' + khoLinhId + "&phongLinhVeId=" + phongLinhVeId).subscribe(
          resultData => {
            this.linhTrucTiepDuocPhamObject.NhanVienYeuCauId = this.getNhanVienId.AccessToken.Id;
            this.linhTrucTiepDuocPhamObject.KhoNhapId = resultData.LinhVePhongId;
            this.LinhVeKhoa = resultData.LinhVeKhoa;
            this.ngayYeuCau = new Date();
            this.nguoiYeuCau = resultData.NguoiYeuCau;
            this.phieuLinhTrucTiep.KeyId = parseInt(khoLinhId);
            this.phonglamViecId = phongLinhVeId;
            this.apiService.post<Array<any>>('YeuCauLinhDuocPham/GetData',{idKhoLinh:parseInt(khoLinhId),phongDangNhapId:phongLinhVeId,dateSearchStart: "",dateSearchEnd:""}).subscribe(
              resultData => {
                this.gridDataSource = {
                  data: resultData,
                  total: resultData.length
                };
                let STT = 1;
                resultData.forEach(element => {
                  element.STT = STT;
                  STT++;
                });
                resultData = resultData.sort((a, b) => (a.STT > b.STT) ? 1 : -1)
                this.setDataGridView();
                this.dialog.closeAll();
              },
              (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  this.notificationService.showError(err.Message);
                }
                this.dialog.closeAll();
              });
          },
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.dialog.closeAll();
          });
      }
    });

    this.phieuLinhTrucTiep = new KhoLinhTu();
    this.linhTrucTiepDuocPhamObject.YeuCauLinhDuocPhamChiTiets = new Array<LinhTrucTiepDuocPham>();
    this.daDuyet = new DaDuyet();
    this.ngayYeuCau = new Date();
    this.gridChildColumns = [
      { Field: "STT", Title: "#", Width: 60 },
      { Field: "MaTN", Title: "Mã TN", Width: 100 },
      { Field: "MaBN", Title: "Mã NB", Width: 100 },
      { Field: "HoTen", Title: "Họ tên", Width: 180 },
      { Field: "SLYeuCau", Title: "Sl", Width: 120 },
    ];

    this.gridColumns = [
      { Field: "CheckBox", Title: "", Width: 40, Template: this.checkBoxChildTemplate ,Hidden: this.isCreate},
      { Field: "LoaiThuoc", Title: "LoaiThuoc", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
      // { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
      { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
      { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSX", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "DVKham", Title: "DV Khám", Width: 180 },
      { Field: "BacSyKeToa", Title: "BS kê toa", Width: 120 },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 }, // nội trú => ngày điều trị ; ngoại trú => thời điểm chỉ định
      { Field: "NgayKe", Title: "Ngày kê", Width: 120 }, // thời điểm chỉ định
      { Field: "SoLuongTon", Title: "SL tồn", Width: 180 },
      { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
      { Field: "Action", Title: "", Width: 80 }
    ];
    this.gridColumnTuChois = [
      { Field: "LoaiThuoc", Title: "LoaiThuoc", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
      { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
      { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSX", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      //{ Field: "SoLuongTon", Title: "SL tồn", Width: 180 },
      { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
      { Field: "Action", Title: "", Width: 80 }
    ];

    this.gridColumnsDaDuyet = [
      { Field: "CheckBox", Title: "", Width: 40, Template: this.checkBoxChildTemplate ,Hidden: this.isCreate},
      { Field: "LoaiThuoc", Title: "LoaiThuoc", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
      // { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
      { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
      { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSX", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "DVKham", Title: "DV Khám", Width: 180 },
      { Field: "BacSyKeToa", Title: "BS kê toa", Width: 120 },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 }, // nội trú => ngày điều trị ; ngoại trú => thời điểm chỉ định
      { Field: "NgayKe", Title: "Ngày kê", Width: 120 }, // thời điểm chỉ định
      // { Field: "SoLuongTon", Title: "SL tồn", Width: 180 },
      { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
      { Field: "Action", Title: "", Width: 80 }
    ];
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.getTrangThaiDuyet(id);
      this.isCreate = true;
      if (this.isCreate == true) {
        this.ishowpopupComBoBox = true;
      }
      this.isDaTao = true;
      this.yeuCauLinhDuocPhamId = id;
    }
    this.phonglamViecId = this.authService.getPhongLamViecId();
    this.getNhanVienId = this.authService.getAccessUser();
  }

  ChonKhoLinhChange(data: any) {

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
  
  getSharedData() {
    
    //thong tin login 
    this.validationErrors = [];
    this.linhTrucTiepDuocPhamObject.GhiChu = this.ghiChu;
    //-----------------xử lý phiếu linh từ ngày - đến ngày---------------------//
    //----Từ ngày-------------------------------------------------------------//
    if(this.searchDanhSachThongDuocPham.TuNgay !=null)
    {
      this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopTuNgay =this.searchDanhSachThongDuocPham.TuNgay;
    }
    else{
      let yeuCauDuocPhamBenhViens :any[]=[];

      yeuCauDuocPhamBenhViens = this.gridDichVuDuocCheck();

      if(yeuCauDuocPhamBenhViens.length != 0)
      {
        let listSortNhoNhatDenLonNhat = yeuCauDuocPhamBenhViens.sort((a, b) => (new Date(a.NgayDieuTri) > new Date(b.NgayDieuTri)) ? 1 : -1)


        this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopTuNgay =new Date(listSortNhoNhatDenLonNhat[0].NgayDieuTri);
      }
    }
    //----đến ngày-------------------------------------------------------------//
    if(this.searchDanhSachThongDuocPham.DenNgay !=null)
    {
      this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopDenNgay =this.searchDanhSachThongDuocPham.DenNgay;
    }
    else{
      this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopDenNgay = null;
    }
    //--------------end xử lý phiếu linh từ ngày - đến ngày---------------------//


    if (this.phieuLinhTrucTiep.KeyId != null) {
      this.linhTrucTiepDuocPhamObject.KhoXuatId = this.phieuLinhTrucTiep.KeyId;
    }

    // yeucau duoc pham benh vien
    if (this.gridDataSource.data == null || this.gridDataSource.data == undefined) {
      this.validationErrors = [];
    }
    else {
      this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhViensTT = new Array<KhoId>()
      this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds = new Array<ListIds>();
      this.linhTrucTiepDuocPhamObject.DanhSachDuocPhamTonKhongDus = new Array<DuocPhamTonKhoKhongDu>();
      this.gridDataSource.data.forEach(element => {
        if(element.IsCheckRowItem == true)
        {
          element.ListYeuCauDuocPhamBenhViens.forEach(item => {
            if(item.IsCheckRowItem == true)
            {
              let index = this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds.findIndex(sp=>sp == item.Id);
              if(index == -1)
              {
                this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds.push(item.Id);
                let dpKhongDuTon ={
                    DuocPhamId:item.DuocPhamId,
                    TenDuocPham:item.TenDuocPham,
                    SoLuongTon:item.SoLuongTon,
                    SoLuongYeuCau:item.SLYeuCau
                };
                this.linhTrucTiepDuocPhamObject.DanhSachDuocPhamTonKhongDus.push(dpKhongDuTon);
              }
            }
          });
        }
        
      });
    }
  
    this.setDataGridView();
    return this.linhTrucTiepDuocPhamObject;
  }

  getTrangThaiDuyet(id) {
    this.apiService.post<boolean>('YeuCauLinhDuocPham/GetTrangThaiDuyet?IdYeuCauLinh=' + id).subscribe(
      resultData => {
        this.trangThaiDuyet = resultData;
        if (this.trangThaiDuyet == true) {
          this.trangThaiYeuCau.emit(new TrangThaiDuyetYeuCauLinh("Đã duyệt", resultData));
          this.apiService.post<DaDuyet>('YeuCauLinhDuocPham/GetDaDuyet?IdYeuCauLinh=' + id).subscribe(
            resultData => {
              this.daDuyet.NguoiDuyet = resultData.NguoiDuyet;
              this.daDuyet.NgayDuyet = resultData.NgayDuyet;
              if (this.daDuyet.NguoiDuyet != null && this.daDuyet.NgayDuyet != null) {
                this.isShowDuyet = true;
                this.isDaTao = true;
                this.showGridTrangThai = true;
                this.trangThaiShowDuyet = false;
                
                this.trangThaiDuyetChiTiet = true;
              }
            });
        }
        else if (this.trangThaiDuyet == false) {
          this.trangThaiYeuCau.emit(new TrangThaiDuyetYeuCauLinh("Từ chối duyệt", resultData));
          this.apiService.post<DaDuyet>('YeuCauLinhDuocPham/GetDaDuyet?IdYeuCauLinh=' + id).subscribe(
            resultData => {
              this.daDuyet.NguoiDuyet = resultData.NguoiDuyet;
              this.daDuyet.NgayDuyet = resultData.NgayDuyet;
              if (this.daDuyet.NguoiDuyet != null && this.daDuyet.NgayDuyet != null) {
                this.isShowDuyet = true;
                this.isDaTao = true;
                this.showGridTrangThai = false;
                this.trangThaiShowDuyet = true;
              }
            });
        }
        else {
          this.trangThaiYeuCau.emit(new TrangThaiDuyetYeuCauLinh("Đang chờ duyệt", resultData));
          this.daDuyet.NguoiDuyet = null;
          this.daDuyet.NgayDuyet = null;
          if (this.daDuyet.NguoiDuyet == null && this.daDuyet.NgayDuyet == null) {
            this.isShowDuyet = false;
            this.isDaTao = false;
            this.showGridTrangThai = true;

            this.trangThaiDuyetChiTiet = true;
          }
        }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }

  getById(id: number) {
    var self = this;
    this.linhTrucTiepDuocPhamObject.Id = id;
    self.apiService.get<LinhDuocPhamTrucTiep>("YeuCauLinhDuocPham/GetALL?id=" + id).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.phieuLinhTrucTiep.KeyId = resultData.KhoXuatId;
          this.phieuLinhTrucTiep.DisplayName = resultData.TenKhoXuat;
          this.daDuyet.NgayDuyet = resultData.NgayDuyet;
          this.lyDoKhongDuyet = resultData.LyDoKhongDuyet;
          self.apiService.post<ThongTinLinhTuKho>('YeuCauLinhDuocPham/ThongTinLinhTuKhoDaTao?idYeuCauLinhDP=' + id).subscribe(
            resultDatas => {
              this.linhTrucTiepDuocPhamObject.NhanVienYeuCauId = resultDatas[0].NhanVienYeuCauId;
              this.linhTrucTiepDuocPhamObject.KhoNhapId = resultDatas[0].LinhVePhongId;
              this.LinhVeKhoa = resultDatas[0].LinhVeKhoa;
              this.nguoiYeuCau = resultDatas[0].NguoiYeuCau;
              let dataTime = resultDatas[0].NgayYeuCau;
              this.ngayYeuCau = dataTime;
              this.ghiChu = resultDatas[0].GhiChu;
              this.phonglamViecId = resultDatas[0].NoiChiDinhId;
              if (this.getNhanVienId.AccessToken.Id == this.linhTrucTiepDuocPhamObject.NhanVienYeuCauId) {
                this.quyenUpdatePhieu = true;
                this.quyenUpdate.emit(true);
              }
              let trangThai = 0;
              if (this.trangThaiDuyet == true) {
                trangThai = 1;
              }
              else if (this.trangThaiDuyet == null) {
                trangThai = 1;
              }
              else {
                trangThai = 0;
              }
              this.apiService.post<Array<any>>('YeuCauLinhDuocPham/GetDataDaTao?idKhoLinh=' + resultData.KhoXuatId + '&idYeuCauLinhDuocPham=' + id + '&phongDangNhapId=' + resultDatas[0].NoiChiDinhId + "&trangThai=" + trangThai).subscribe(
                resultData => {
                  this.gridDataSource = {
                    data: resultData,
                    total: resultData.length
                  };
                  let STT = 1;
                  resultData.forEach(element => {
                    element.STT = STT;
                    STT++;
                  });
                  resultData = resultData.sort((a, b) => (a.STT > b.STT) ? 1 : -1)
                  this.setDataGridView();
                },
                (err: ApiError) => {
                  this.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                  }
                });
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });

        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }

  extCheckboxSelections(event) {
    this.cdRef.detectChanges();
    let tmpArray: any[] = event;
    let tmp: any[] = [];
    this.linhTrucTiepDuocPhamObject.CheckKhiTao = tmpArray;
    let gridCheckCu :any[]=[];
    if(this.linhTrucTiepDuocPhamObject.CheckKhiTao.length != 0)
    {
      let dataCheck :any[]=[];
      for (let i = 0; i < this.gridDataSource.data.length ; i++) {
        for (let j = 0; j < this.linhTrucTiepDuocPhamObject.CheckKhiTao.length; j++) {
           if(this.linhTrucTiepDuocPhamObject.CheckKhiTao[j] == this.gridDataSource.data[i].YeuCauTiepNhanId)
           {
             if(this.checkChild == false)
             {
              this.gridDataSource.data[i].IsCheckRowItem = true;
              if(this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.length == this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.filter(sp=>sp.IsCheckRowItem == false).length)
              {
                this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.forEach(elements => {
                  if(elements.SoLuongTon >= elements.SLYeuCau)
                  {
                    elements.IsCheckRowItem = true;
                  }
                });
              }
              this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens);
              break;
             }
             else{
               this.gridDataSource.data[i].IsCheckRowItem = true;
               if(this.gridDataSource.data[i].IsCheckRowItem == true)
               {
                if(this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.length == this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.filter(sp=>sp.IsCheckRowItem == false).length)
                {
                  this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.forEach(elements => {
                    if(elements.SoLuongTon >= elements.SLYeuCau)
                    {
                      elements.IsCheckRowItem = true;
                    }
                  });
                }
               }
              
              this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens);
              break;
             }
            
           }
           else{
             let index = gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == this.gridDataSource.data[i].YeuCauTiepNhanId);
             if(index == -1)
             {
              gridCheckCu.push(this.gridDataSource.data[i]);
             }
           }
        }
      }
      this.linhTrucTiepDuocPhamObject.CheckKhiTao.forEach(element => {
        var index = gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == element);
        if(index != -1)
        {
          let dd = gridCheckCu.filter(sp=>sp.YeuCauTiepNhanId ==element);//.IsCheckRowItem = false
          gridCheckCu.splice(gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == element), 1)
        }
      });
      gridCheckCu.forEach(element => {
        element.IsCheckRowItem = false;
        element.ListYeuCauDuocPhamBenhViens.forEach(elements => {
            elements.IsCheckRowItem = false;
          });
          this.getDataSourceChild(element.ListYeuCauDuocPhamBenhViens);
      });
    }
    else{
      this.gridDataSource.data.forEach(element => {
       
         element.IsCheckRowItem = false;
         element.ListYeuCauDuocPhamBenhViens.forEach(elements => {
         elements.IsCheckRowItem = false;
         });
         this.getDataSourceChild(element.ListYeuCauDuocPhamBenhViens);
      });
    }

  
   
  }

  OnDataBound(dataChild) {
  }

  changeTuNgay(event){
    this.timkiem();
  }

  changeDenNgay(event){
    this.timkiem();
  }

  timkiem(){
    if (this.khoLinhIdSearch != undefined && this.phongLinhIdSearch != undefined && this.khoLinhIdSearch > 0 ) {
      this.showGridTrangThai = true; // tao mới nên có grid child con
      this.quyenUpdatePhieu = true;
      this.KiemTraCheckGrid = true;
      this.loadingPage();
     
      this.apiService.post<any>('YeuCauLinhDuocPham/ThongTinDanhSachCanLinh?idKhoLinh=' + this.khoLinhIdSearch + "&phongLinhVeId=" + this.phongLinhIdSearch).subscribe(
        resultData => {
          this.linhTrucTiepDuocPhamObject.NhanVienYeuCauId = this.getNhanVienId.AccessToken.Id;
          this.linhTrucTiepDuocPhamObject.KhoNhapId = resultData.LinhVePhongId;
          this.LinhVeKhoa = resultData.LinhVeKhoa;
          this.ngayYeuCau = new Date();
          this.nguoiYeuCau = resultData.NguoiYeuCau;
          this.phieuLinhTrucTiep.KeyId = this.khoLinhIdSearch;
          this.phonglamViecId = this.phongLinhIdSearch;
          this.dateBatDau = CommonService.formatDateTime(this.searchDanhSachThongDuocPham.TuNgay, "mm/dd/yyyy");
          this.dateKetThuc = CommonService.formatDateTime(this.searchDanhSachThongDuocPham.DenNgay, "mm/dd/yyyy");
          this.apiService.post<Array<any>>('YeuCauLinhDuocPham/GetData',{idKhoLinh:this.khoLinhIdSearch,phongDangNhapId:this.phongLinhIdSearch,dateSearchStart: this.dateBatDau,dateSearchEnd:this.dateKetThuc}).subscribe(

          // this.apiService.post<Array<any>>('YeuCauLinhDuocPham/GetData?idKhoLinh=' + this.khoLinhIdSearch + '&phongDangNhapId=' + this.phongLinhIdSearch + "&dateSearchStart=" + this.dateBatDau + "&dateSearchEnd=" + this.dateKetThuc).subscribe(
            resultData => {
              this.gridDataSource = {
                data: resultData,
                total: resultData.length
              };
              let arrayNull: any[] = [];
              this.extCheckboxSelections(arrayNull);
              this.gridCha.onSelectAllChange('unchecked');
 
              let STT = 1;
              resultData.forEach(element => {
                element.STT = STT;
                STT++;
              });
              resultData = resultData.sort((a, b) => (a.STT > b.STT) ? 1 : -1)
              this.setDataGridView();
              this.closePopupLoadingData();
            },
            (err: ApiError) => {
              this.closePopupLoadingData();
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
        },
        (err: ApiError) => {
          this.closePopupLoadingData();
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    }
  }
  
  checkboxGridChild(event,dataItem){
    if(event == true)
    {
      dataItem.IsCheckRowItem = true;
    }
    else{
      dataItem.IsCheckRowItem = false;
    }
  //   let mySelection: number[] = [];
    this.gridDataSource.data.forEach(element => {
      if(dataItem.YeuCauTiepNhanId == element.Id)
      {
        let inxdex =element.ListYeuCauDuocPhamBenhViens.findIndex(sp=>sp.IsCheckRowItem ==true);
        if(inxdex != -1)
        {
          this.checkChild = true;
          let indexChange = element.ListYeuCauDuocPhamBenhViens.filter(sp=>sp.Id == dataItem.Id) ;
          if(indexChange.length == 1)
          {
            indexChange.forEach(element => {
              element.IsCheckRowItem = event;
            });
            
          }
          let inxdex =element.ListYeuCauDuocPhamBenhViens.filter(sp=>sp.IsCheckRowItem == false);
          if(element.ListYeuCauDuocPhamBenhViens.length == inxdex.length)
          {
            if (!jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId'+element.Id).prop('unchecked')) {
              jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId'+element.Id).trigger('click');
            }
          }
          if (!jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId'+element.Id).prop('checked')) {
            jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId'+element.Id).trigger('click');
          }
          
          return;
        }
        else{
            this.checkChild = true;
            let inxdex =element.ListYeuCauDuocPhamBenhViens.filter(sp=>sp.IsCheckRowItem == false);
            if(element.ListYeuCauDuocPhamBenhViens.length == inxdex.length)
            {
              if (!jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId'+element.Id).prop('unchecked')) {
                jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId'+element.Id).trigger('click');
              }
            }
          return ;
        }
      }
   });
   //this.checkChild = false;
  }

  checkboxGridCha(event,dataItem){
    if(event == true)
    {
      dataItem.IsCheckRowItem = true;
    }
  }

  getDataSourceChild(parentItem:any){    
    return {
      data: parentItem,
      total: parentItem.length
    };
  }

  gridDichVuDuocCheck(){
    let yeuCauDuocPhamBenhViens :any[]=[];
    this.gridDataSource.data.forEach(element => {
      if(element.IsCheckRowItem == true)
      {
        element.ListYeuCauDuocPhamBenhViens.forEach(item => {
          if(item.IsCheckRowItem == true)
          {
            let index = this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds.findIndex(sp=>sp == item.Id);
            if(index == -1)
            {
              yeuCauDuocPhamBenhViens.push(item);
            }
          }
          
        });
      }
    });
    return yeuCauDuocPhamBenhViens;
  }
  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }
}
