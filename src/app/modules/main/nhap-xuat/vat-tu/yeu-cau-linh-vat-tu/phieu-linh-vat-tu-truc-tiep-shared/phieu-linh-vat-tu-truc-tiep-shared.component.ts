import { Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { KhoLinhTu, ThongTinLinhTuKho, LinhTrucTiepVatTu, LinhVatTuTrucTiep, TrangThaiDuyetYeuCauLinh, DaDuyet, KhoId, SearchDanhSachThongVatTu, VatTuTonKhoKhongDu } from '../yeu-cau-linh-vat-tu.model';
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
import { ListIds } from '../../../duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

declare var jQuery: any;

@Component({
  selector: 'app-phieu-linh-vat-tu-truc-tiep-shared',
  templateUrl: './phieu-linh-vat-tu-truc-tiep-shared.component.html',
  styleUrls: ['./phieu-linh-vat-tu-truc-tiep-shared.component.scss']
})
export class PhieuLinhVatTuTrucTiepSharedComponent implements OnInit {

  linhTrucTiep = {} as LinhVatTuTrucTiep;
  linhTrucTiepVatTuObject = new LinhVatTuTrucTiep();
  validationErrors: any;
  documentType: DocumentType;
  phieuLinhTrucTiep = {} as KhoLinhTu;
  thongtinLinhTuKho: LinhVatTuTrucTiep;
  thongtinVatTuchitiet: LinhVatTuTrucTiep[] = [];
  thongtinVatTuchitietObject: LinhVatTuTrucTiep;
  linhTrucTiepVatTuitem: LinhTrucTiepVatTu = new LinhTrucTiepVatTu();
  linhTrucTiepVatTu: LinhTrucTiepVatTu[] = [];
  thongTinLinhTuKho: ThongTinLinhTuKho;
  daDuyet: DaDuyet;
  gridDataSource: any = {};
  gridDataSourceCreate: any = {};
  gridColumns: any[] = [];
  gridColumnTuChois: any[] = [];
  gridChildColumns: any[] = [];
  gridColumnsDaDuyet: any[] = [];
  linhVeKhoa = "";
  nguoiYeuCau = "";
  ngayYeuCau: Date;
  nguoiDuyet = "";
  ngayDuyet = null;
  ghiChu = "";
  lyDoKhongDuyet = "";
  urlGetDataChild: string = "YeuCauLinhVatTu/GetAllYeuCauLinhThuocTuKho";
  urlGetDataDaTaoChild: string = "YeuCauLinhVatTu/GetAllYeuCauLinhThuocTuKhoDaTao";
  searchDanhSachThongVatTu = new SearchDanhSachThongVatTu();
  khoLinhIdSearch: number = 0;
  phongLinhIdSearch: number = 0;
  dateBatDau: string = "";
  dateKetThuc: string = "";
  linhTrucTiepMasterName :string = "masterLinhTT";
  checkChild :boolean = false;
  @Input() isCreate: any;
  @Output() quyenUpdate = new EventEmitter<any>();
  @Output() trangThaiYeuCau: EventEmitter<TrangThaiDuyetYeuCauLinh> = new EventEmitter<TrangThaiDuyetYeuCauLinh>();
  @ViewChild('slYeuCauTemplate', { static: true }) slYeuCauTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('checkBoxChildTemplate', { static: true }) checkBoxChildTemplate: TemplateRef<any>;
  @ViewChild('gridCreate', { read: GridComponent, static: false }) gridChild: GridComponent;
  @ViewChild('gridCha', { read: GridComponent, static: false }) gridCha: GridComponent;
  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
  @Input() isDaTao: boolean = false;
  @Input() validationErrorsLinhTT: any;
  trangThaiDuyet: boolean;
  groups: GroupDescriptor[] = [{ field: 'LoaiThuoc' }];
  groupChilds: GroupDescriptor[] = [{ field: 'MaTN' }];
  constructor(private notificationService: NotificationService, private cdRef: ChangeDetectorRef, private dialog: MatDialog, private apiService: ApiService, private route: ActivatedRoute, private baseService: BaseService, private authService: AuthService) { }
  yeuCauLinhVatTuId: number = 0;
  getNhanVienId: any;
  ishowpopupComBoBox: boolean = false;
  phonglamViecId: any;
  isShowDuyet: boolean = false;
  ishowTrangThaiDuyet: boolean = false;
  showGridTrangThai: boolean;
  trangThaiShowDuyet: boolean = false;
  quyenUpdatePhieu: boolean = false;
  KiemTraCheckGrid: boolean = false;
  popupLoadingData: any = null;
 
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let khoLinhId = params['KhoLinhId'];
      let phongLinhVeId = 0;
      this.khoLinhIdSearch = khoLinhId;
      this.phongLinhIdSearch = phongLinhVeId;
      if (khoLinhId != undefined && phongLinhVeId != undefined && khoLinhId > 0) {
        this.showGridTrangThai = true;
        this.quyenUpdatePhieu = true;
        this.KiemTraCheckGrid = true;
        this.apiService.post<any>('YeuCauLinhVatTu/ThongTinDanhSachCanLinh?idKhoLinh=' + khoLinhId + "&phongLinhVeId=" + phongLinhVeId).subscribe(
          resultData => {

            this.linhTrucTiepVatTuObject.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
            this.linhTrucTiepVatTuObject.KhoNhapId = resultData.LinhVePhongId;
            this.linhVeKhoa = resultData.LinhVeKhoa;
            this.ngayYeuCau = new Date();
            this.nguoiYeuCau = resultData.NguoiYeuCau;
            this.ghiChu = resultData.GhiChu;
            this.phieuLinhTrucTiep.KeyId = parseInt(khoLinhId);
            this.phonglamViecId = phongLinhVeId;
            this.apiService.post<Array<any>>('YeuCauLinhVatTu/GetData',{idKhoLinh:parseInt(khoLinhId),phongLinhVeId:phongLinhVeId,dateSearchStart: "",dateSearchEnd:""}).subscribe(
            // this.apiService.post<Array<any>>('YeuCauLinhVatTu/GetData?idKhoLinh=' + parseInt(khoLinhId) + '&phongDangNhapId=' + phongLinhVeId).subscribe(
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
    });
    this.gridChildColumns = [
      { Field: "STT", Title: "#", Width: 60 },
      { Field: "MaTN", Title: "Mã TN", Width: 100 },
      { Field: "MaBN", Title: "Mã NB", Width: 100 },
      { Field: "HoTen", Title: "Họ tên", Width: 180 },
      { Field: "SLYeuCau", Title: "SL", Width: 120 },
      { Field: "Action", Title: "", Width: 80 }
    ]

    this.gridColumns = [
      { Field: "CheckBox", Title: "", Width: 40, Template: this.checkBoxChildTemplate, Hidden: this.isCreate },
      { Field: "LoaiThuoc", Title: "LoaiThuoc", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate, },
      // { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      // { Field: "HoatChat", Title: "Mã vật tư", Width: 180 },
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 180 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSX", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "SoLuongTon", Title: "SL tồn", Width: 100 },
      { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
      { Field: "DVKham", Title: "DV Khám", Width: 180 },
      { Field: "BacSyKeToa", Title: "BS kê toa", Width: 120 },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
      { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
    ];
    this.gridColumnTuChois = [
      { Field: "CheckBox", Title: "", Width: 40, Template: this.checkBoxChildTemplate, Hidden: this.isCreate },
      { Field: "LoaiThuoc", Title: "LoaiThuoc", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate, },
      // { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      // { Field: "HoatChat", Title: "Mã vật tư", Width: 180 },
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 180 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSX", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      //{ Field: "SoLuongTon", Title: "SL tồn", Width: 100 },
      { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
      { Field: "DVKham", Title: "DV Khám", Width: 180 },
      { Field: "BacSyKeToa", Title: "BS kê toa", Width: 120 },
      { Field: "NgayDieuTriTuChoi", Title: "Ngày điều trị", Width: 120 },
      { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
    ]
    this.gridColumnsDaDuyet = [
      { Field: "CheckBox", Title: "", Width: 40, Template: this.checkBoxChildTemplate, Hidden: this.isCreate },
      { Field: "LoaiThuoc", Title: "LoaiThuoc", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate, },
      // { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      // { Field: "HoatChat", Title: "Mã vật tư", Width: 180 },
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 180 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSX", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      //{ Field: "SoLuongTon", Title: "SL tồn", Width: 100 },
      { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
      { Field: "DVKham", Title: "DV Khám", Width: 180 },
      { Field: "BacSyKeToa", Title: "BS kê toa", Width: 120 },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
      { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
    ];
    this.phieuLinhTrucTiep = new KhoLinhTu();
    this.daDuyet = new DaDuyet();
    this.ngayYeuCau = new Date();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.getTrangThaiDuyet(id);
      this.isCreate = true;
      if (this.isCreate == true) {
        this.ishowpopupComBoBox = true;
      }
      this.isDaTao = true;
      this.yeuCauLinhVatTuId = id;
    }
    this.phonglamViecId = this.authService.getPhongLamViecId();
    this.getNhanVienId = this.authService.getAccessUser();
  }
  ChonKhoLinhChange(data: any) {
    this.linhVeKhoa = "";
    this.ngayYeuCau = null;
    this.nguoiYeuCau = "";
    this.ghiChu = "";
    this.gridChild.gridDataSource = [];
    this.showGridTrangThai = true;
    if (this.ishowpopupComBoBox == false) {
      if (data == undefined || data == null) {
        this.linhTrucTiepVatTuObject.KhoXuatId = null;
        this.gridDataSource = {
          data: [],
          total: 0
        };
        this.setDataGridViewRefesh();
      } else {
        this.phieuLinhTrucTiep.KeyId = data.KeyId;
        this.phieuLinhTrucTiep.DisplayName = data.DisplayName;
        this.apiService.post<Array<any>>('YeuCauLinhVatTu/ThongTinLinhTuKho?idKhoLinh=' + data.KeyId).subscribe(
          resultData => {
            this.linhTrucTiepVatTuObject.NhanVienYeuCauId = resultData[0].NhanVienYeuCauId;
            this.linhTrucTiepVatTuObject.KhoNhapId = resultData[0].linhVeKhoaId;
            this.linhVeKhoa = resultData[0].linhVeKhoa;
            this.ngayYeuCau = new Date();
            this.nguoiYeuCau = resultData[0].NguoiYeuCau;
            this.ghiChu = resultData[0].GhiChu;
            this.apiService.post<Array<any>>('YeuCauLinhVatTu/GetData?idKhoLinh=' + data.KeyId + '&phongDangNhapId=' + resultData[0].linhVeKhoaId).subscribe(
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
    }
    else {
      if (data == undefined || data == null) {
        this.linhTrucTiepVatTuObject.KhoXuatId = null;
        this.gridDataSource = {
          data: [],
          total: 0
        };
        this.setDataGridViewRefesh();
      } else {
        var self = this;
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có muốn thay đổi kho ?",
          },
        }).afterClosed().subscribe((res) => {
          this.phieuLinhTrucTiep.KeyId = data.KeyId;
          this.phieuLinhTrucTiep.DisplayName = data.DisplayName;
          this.apiService.post<Array<any>>('YeuCauLinhVatTu/ThongTinLinhTuKho?idKhoLinh=' + data.KeyId).subscribe(
            resultData => {

              this.linhTrucTiepVatTuObject.NhanVienYeuCauId = resultData[0].NhanVienYeuCauId;
              this.linhTrucTiepVatTuObject.KhoNhapId = resultData[0].linhVeKhoaId;
              this.linhVeKhoa = resultData[0].linhVeKhoa;
              this.ngayYeuCau = new Date();
              this.nguoiYeuCau = resultData[0].NguoiYeuCau;
              this.ghiChu = resultData[0].GhiChu;
              this.apiService.post<Array<any>>('YeuCauLinhVatTu/GetData?idKhoLinh=' + data.KeyId + '&phongDangNhapId=' + resultData[0].linhVeKhoaId).subscribe(
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
        });
      }
    }

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
  OnDataBound(dataChild) {
  }
  getSharedData() {
    //thong tin login 
    this.validationErrors = [];
    this.linhTrucTiepVatTuObject.GhiChu = this.ghiChu;
       //thong tin login 
       this.validationErrors = [];
       this.linhTrucTiepVatTuObject.GhiChu = this.ghiChu;
       //-----------------xử lý phiếu linh từ ngày - đến ngày---------------------//
       //----Từ ngày-------------------------------------------------------------//
       if(this.searchDanhSachThongVatTu.TuNgay !=null)
       {
         this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopTuNgay =this.searchDanhSachThongVatTu.TuNgay;
       }
       else{
         let yeuCauVatTuBenhViens :any[]=[];
   
         yeuCauVatTuBenhViens = this.gridDichVuDuocCheck();
   
         if(yeuCauVatTuBenhViens.length != 0)
         {
           let listSortNhoNhatDenLonNhat = yeuCauVatTuBenhViens.sort((a, b) => (new Date(a.NgayDieuTri) > new Date(b.NgayDieuTri)) ? 1 : -1)
   
   
           this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopTuNgay =new Date(listSortNhoNhatDenLonNhat[0].NgayDieuTri);
         }
       }
       //----đến ngày-------------------------------------------------------------//
       if(this.searchDanhSachThongVatTu.DenNgay !=null)
       {
         this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopDenNgay =this.searchDanhSachThongVatTu.DenNgay;
       }
       else{
        this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopDenNgay = null;
       }
       //--------------end xử lý phiếu linh từ ngày - đến ngày---------------------//

    if (this.phieuLinhTrucTiep.KeyId != null) {
      this.linhTrucTiepVatTuObject.KhoXuatId = this.phieuLinhTrucTiep.KeyId;
    }

    // yeucau vat tu benh vien
    if (this.gridDataSource.data == null || this.gridDataSource.data == undefined) {
      // this.validationErrors = [];
    }
    else {
      this.linhTrucTiepVatTuObject.YeuCauVatTuBenhViensTT = new Array<KhoId>();
      this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds = new Array<ListIds>();
      this.linhTrucTiepVatTuObject.DanhSachVatTuTonKhongDus = new Array<VatTuTonKhoKhongDu>();
      this.gridDataSource.data.forEach(element => {
        if (element.IsCheckRowItem == true) {
          element.ListYeuCauVatTuBenhViens.forEach(item => {
            if (item.IsCheckRowItem == true) {
              let index = this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds.findIndex(sp=>sp == item.Id);
              if(index == -1)
              {
                this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds.push(item.Id);
                let vtKhongDuTon ={
                  VatTuId:item.VatTuId,
                  TenVatTu:item.TenVatTu,
                  SoLuongTon:item.SoLuongTon,
                  SoLuongYeuCau:item.SLYeuCau
              };
              this.linhTrucTiepVatTuObject.DanhSachVatTuTonKhongDus.push(vtKhongDuTon);
              }
             
            }
          });
        }
      });
    }

    this.setDataGridView();
    return this.linhTrucTiepVatTuObject;
  }
  getTrangThaiDuyet(id) {
    this.apiService.post<boolean>('YeuCauLinhVatTu/GetTrangThaiDuyet?IdYeuCauLinh=' + id).subscribe(
      resultData => {
        this.trangThaiDuyet = resultData;
        if (this.trangThaiDuyet == true) {
          this.trangThaiYeuCau.emit(new TrangThaiDuyetYeuCauLinh("Đã duyệt", resultData));
          this.apiService.post<DaDuyet>('YeuCauLinhVatTu/GetDaDuyet?IdYeuCauLinh=' + id).subscribe(
            resultData => {
              this.daDuyet.NguoiDuyet = resultData.NguoiDuyet;
              this.daDuyet.NgayDuyet = resultData.NgayDuyet;
              if (this.daDuyet.NguoiDuyet != null && this.daDuyet.NgayDuyet != null) {
                this.isShowDuyet = true;
                this.isDaTao = true;
                this.showGridTrangThai = true;
              }
            });
        }
        else if (this.trangThaiDuyet == false) {
          this.trangThaiYeuCau.emit(new TrangThaiDuyetYeuCauLinh("Từ chối duyệt", resultData));
          this.apiService.post<DaDuyet>('YeuCauLinhVatTu/GetDaDuyet?IdYeuCauLinh=' + id).subscribe(
            resultData => {
              this.daDuyet.NguoiDuyet = resultData.NguoiDuyet;
              this.daDuyet.NgayDuyet = resultData.NgayDuyet;
              if (this.daDuyet.NguoiDuyet != null && this.daDuyet.NgayDuyet != null) {
                this.trangThaiShowDuyet = true;
                this.isDaTao = true;
                this.showGridTrangThai = false;
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
    this.linhTrucTiepVatTuObject.Id = id;
    self.apiService.get<LinhVatTuTrucTiep>("YeuCauLinhVatTu/GetALL?id=" + id).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.phieuLinhTrucTiep.KeyId = resultData.KhoXuatId;
          this.phieuLinhTrucTiep.DisplayName = resultData.TenKhoXuat;
          this.lyDoKhongDuyet = resultData.LyDoKhongDuyet;
          self.apiService.post<ThongTinLinhTuKho>('YeuCauLinhVatTu/ThongTinLinhTuKhoDaTao?idYeuCauLinhDP=' + id).subscribe(
            resultDatas => {
              this.linhTrucTiepVatTuObject.NhanVienYeuCauId = resultDatas[0].NhanVienYeuCauId;
              this.linhTrucTiepVatTuObject.KhoNhapId = resultDatas[0].LinhVePhongId;
              this.linhVeKhoa = resultDatas[0].LinhVeKhoa;
              this.nguoiYeuCau = resultDatas[0].NguoiYeuCau;
              let dataTime = resultDatas[0].NgayYeuCau;
              this.ngayYeuCau = dataTime;
              this.ghiChu = resultDatas[0].GhiChu;
              this.phonglamViecId = resultDatas[0].NoiChiDinhId;
              this.phonglamViecId = resultDatas[0].NoiChiDinhId;
              if (this.getNhanVienId.AccessToken.Id == this.linhTrucTiepVatTuObject.NhanVienYeuCauId) {
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
                this.showGridTrangThai = false;
              }
              this.apiService.post<Array<any>>('YeuCauLinhVatTu/GetDataDaTao?idKhoLinh=' + resultData.KhoXuatId + '&idYeuCauLinhVatTu=' + id + '&phongDangNhapId=' + resultDatas[0].NoiChiDinhId + "&trangThai=" + trangThai).subscribe(
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

  changeTuNgay(event){
    this.timkiem();
  }
  changeDenNgay(event){
    this.timkiem();
  }
  blur() {
    this.timkiem();
  }
  timkiem() {
    if (this.khoLinhIdSearch != undefined && this.phongLinhIdSearch != undefined && this.khoLinhIdSearch > 0) {
      this.showGridTrangThai = true;
      this.quyenUpdatePhieu = true;
      this.KiemTraCheckGrid = true;
      this.loadingPage();

      this.apiService.post<any>('YeuCauLinhVatTu/ThongTinDanhSachCanLinh?idKhoLinh=' + this.khoLinhIdSearch + "&phongLinhVeId=" + this.phongLinhIdSearch).subscribe(
        resultData => {

          this.linhTrucTiepVatTuObject.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
          this.linhTrucTiepVatTuObject.KhoNhapId = resultData.LinhVePhongId;
          this.linhVeKhoa = resultData.LinhVeKhoa;
          this.ngayYeuCau = new Date();
          this.nguoiYeuCau = resultData.NguoiYeuCau;
          this.ghiChu = resultData.GhiChu;
          this.phieuLinhTrucTiep.KeyId = this.khoLinhIdSearch;
          this.phonglamViecId = this.phongLinhIdSearch;
          this.dateBatDau = CommonService.formatDateTime(this.searchDanhSachThongVatTu.TuNgay, "mm/dd/yyyy");
          this.dateKetThuc = CommonService.formatDateTime(this.searchDanhSachThongVatTu.DenNgay, "mm/dd/yyyy");
          this.apiService.post<Array<any>>('YeuCauLinhVatTu/GetData',{idKhoLinh:this.khoLinhIdSearch,phongLinhVeId:this.phongLinhIdSearch,dateSearchStart: this.dateBatDau,dateSearchEnd:this.dateKetThuc}).subscribe(
          // this.apiService.post<Array<any>>('YeuCauLinhVatTu/GetData?idKhoLinh=' + this.khoLinhIdSearch + '&phongDangNhapId=' + this.phongLinhIdSearch + "&dateSearchStart=" + this.dateBatDau + "&dateSearchEnd=" + this.dateKetThuc).subscribe(
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

  extCheckboxSelections(event) {
    this.cdRef.detectChanges();
    let tmpArray: any[] = event;
    let tmp: any[] = [];
    this.linhTrucTiepVatTuObject.CheckKhiTao = tmpArray;
    let gridCheckCu :any[]=[];
    if(this.linhTrucTiepVatTuObject.CheckKhiTao.length != 0)
    {
      let dataCheck :any[]=[];
      for (let i = 0; i < this.gridDataSource.data.length ; i++) {
        for (let j = 0; j < this.linhTrucTiepVatTuObject.CheckKhiTao.length; j++) {
           if(this.linhTrucTiepVatTuObject.CheckKhiTao[j] == this.gridDataSource.data[i].YeuCauTiepNhanId)
           {
             if(this.checkChild == false)
             {
              this.gridDataSource.data[i].IsCheckRowItem = true;
              if(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.length == this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.filter(sp=>sp.IsCheckRowItem == false).length)
              {
                this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.forEach(elements => {
                  if(elements.SoLuongTon >= elements.SLYeuCau)
                    {
                      elements.IsCheckRowItem = true;
                    }
                });
              }
              this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens);
              break;
             }
             else{
               this.gridDataSource.data[i].IsCheckRowItem = true;
               if(this.gridDataSource.data[i].IsCheckRowItem == true)
               {
                if(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.length == this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.filter(sp=>sp.IsCheckRowItem == false).length)
                {
                  this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.forEach(elements => {
                    if(elements.SoLuongTon >= elements.SLYeuCau)
                    {
                      elements.IsCheckRowItem = true;
                    }
                  });
                }
               }
              
              this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens);
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
          //  else{
            
          //   this.gridDataSource.data[i].IsCheckRowItem = false;
          //   this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.forEach(elements => {
          //       elements.IsCheckRowItem = false;
          //     });
          //     this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens);
          //  }
        }
      }
      this.linhTrucTiepVatTuObject.CheckKhiTao.forEach(element => {
        var index = gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == element);
        if(index != -1)
        {
          let dd = gridCheckCu.filter(sp=>sp.YeuCauTiepNhanId ==element);//.IsCheckRowItem = false
          gridCheckCu.splice(gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == element), 1)
        }
      });
      gridCheckCu.forEach(element => {
        element.IsCheckRowItem = false;
        element.ListYeuCauVatTuBenhViens.forEach(elements => {
            elements.IsCheckRowItem = false;
          });
          this.getDataSourceChild(element.ListYeuCauVatTuBenhViens);
      });
    }
    else{
      this.gridDataSource.data.forEach(element => {
       
         element.IsCheckRowItem = false;
         element.ListYeuCauVatTuBenhViens.forEach(elements => {
         elements.IsCheckRowItem = false;
         });
         this.getDataSourceChild(element.ListYeuCauVatTuBenhViens);
      });
    }

  
   
  }
  // grid item con 
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
        let inxdex =element.ListYeuCauVatTuBenhViens.findIndex(sp=>sp.IsCheckRowItem ==true);
        if(inxdex != -1)
        {
          this.checkChild = true;
          let indexChange = element.ListYeuCauVatTuBenhViens.filter(sp=>sp.Id == dataItem.Id) ;
          if(indexChange.length == 1)
          {
            indexChange.forEach(element => {
              element.IsCheckRowItem = event;
            });
            
          }
          let inxdex =element.ListYeuCauVatTuBenhViens.filter(sp=>sp.IsCheckRowItem == false);
          if(element.ListYeuCauVatTuBenhViens.length == inxdex.length)
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
            let inxdex =element.ListYeuCauVatTuBenhViens.filter(sp=>sp.IsCheckRowItem == false);
            if(element.ListYeuCauVatTuBenhViens.length == inxdex.length)
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

  getDataSourceChild(parentItem: any) {
    return {
      data: parentItem,
      total: parentItem.length
    };
  }
  gridDichVuDuocCheck(){
    let yeuCauVatTuBenhViens :any[]=[];
    this.gridDataSource.data.forEach(element => {
      if(element.IsCheckRowItem == true)
      {
        element.ListYeuCauVatTuBenhViens.forEach(item => {
          if(item.IsCheckRowItem == true)
          {
            let index = this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds.findIndex(sp=>sp == item.Id);
            if(index == -1)
            {
              yeuCauVatTuBenhViens.push(item);
            }
          }
          
        });
      }
    });
    return yeuCauVatTuBenhViens;
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
