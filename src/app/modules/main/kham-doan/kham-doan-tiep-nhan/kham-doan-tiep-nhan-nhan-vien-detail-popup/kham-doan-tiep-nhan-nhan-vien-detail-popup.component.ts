import { Component, ElementRef, HostListener, Inject, Input, OnInit, TemplateRef, ViewChild, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icInfo from '@iconify/icons-ic/twotone-info';
import { GroupDescriptor, State } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { GioiTinh } from 'src/app/shared/enum/common-type.enums';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { HinhThucKhamBenh, TrangThaiYeuCauTiepNhan, NhomDichVuChiDinhKhamSucKhoe } from 'src/app/shared/enum/kham-doan.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { TrangThaiYeuCauDichVuKyThuatObjEnum, TrangThaiYeuCauKhamBenhObjEnum } from '../../../kham-benh/kham-benh.model';
import { PhieuDangKyKhamSucKhoePopupComponent } from '../phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component';
import { SoKhamSucKhoeDinhKyPopupComponent } from '../so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component';
import { HopDongKhamSucKhoeNhanVien, YeuCauTiepNhanKhamSucKhoe, TiepNhanDichVuChiDinh, TiepNhanDichVuChiDinhMultiselect, DichVuGoiChungXoaChuaBatDauKham, ListInChiDinh } from '../../kham-doan.model';
import { TiepNhanDichVuChiDinhQuery, DichVuChiDinhKhamSucKhoeBenhNhanQueryVo, CapNhatGridDichVuKhamSucKhoeNhanVien, DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham, XetNghiemCovid } from '../kham-doan-tiep-nhan.model';
import { KetQuaKhamSucKhoePopupComponent } from '../ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { KhamDoanTiepNhanInHoSoPopupComponent } from '../kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component';
import { KhamDoanTiepNhanFilePopupComponent } from '../kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component';
import { BangHuongDanKhamSucKhoePopupComponent } from '../bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component';
import { Jsonp } from '@angular/http';
import { LookupItemVo, LookupQueryInfo } from 'src/app/shared/models/common.model';
import { InDichVuChiDinhNgoaiGoiComponent } from '../in-dich-vu-chi-dinh-ngoai-goi/in-dich-vu-chi-dinh-ngoai-goi.component';
import { XnCovidSarscov2PopupComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/xn-covid-sarscov2-popup/xn-covid-sarscov2-popup.component';
import { XnSarsCov2PopupComponent } from '../../../kham-benh/kham-benh/xn-sars-cov2-popup/xn-sars-cov2-popup.component';
declare var jQuery: any;

@Component({
  selector: 'app-kham-doan-tiep-nhan-nhan-vien-detail-popup',
  templateUrl: './kham-doan-tiep-nhan-nhan-vien-detail-popup.component.html',
  styleUrls: ['./kham-doan-tiep-nhan-nhan-vien-detail-popup.component.scss']
})
export class KhamDoanTiepNhanNhanVienDetailPopupComponent implements OnInit,AfterContentInit {

  icClose = icClose;
  icDelete = icDelete;
  icInfo = icInfo;

  documentType: DocumentType = DocumentType.KhamDoanTiepNhan;
  validationErrors: any = [];
  validationDichVuErrors: any = [];
  format: string = 'n2';
  popupLoadingData: any;
  id: number;

  gridColumns: any[] = [];
  gridColumnDichVuThems: any[] = [];

  // grid dataSource dùng cho trường hợp chưa bắt đầu khám
  dataGoiKham: TiepNhanDichVuChiDinh[] = [];
  dataSourceGoiKham = {
    data: [],
    total: 0,
  };
  dataDichVuThem: TiepNhanDichVuChiDinh[] = [];
  dataSourceDichVuThem = {
    data: [],
    total: 0,
  };
  
  groupThemDichVus: GroupDescriptor[] = [{ field: 'TenNhomDichVu', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
  public total(field: any) {
    switch (field) {
      case 'ThanhTien':
        return this.dataDichVuThem.reduce((sum, item) => sum + item.ThanhTien, 0);
    }
  };
  groups: GroupDescriptor[] = [{ field: 'TenNhomDichVu', dir: null }];

  public totalDichVuGoi(field: any) {
    switch (field) {
      case 'DonGiaUuDai':
        return this.dataGoiKham.reduce((sum, item) => sum + item.DonGiaUuDai, 0);
    }
  };

  thongTinHanhChinhNhanVien: YeuCauTiepNhanKhamSucKhoe = new YeuCauTiepNhanKhamSucKhoe();
  yeuCauTiepNhanHoanThanh: TrangThaiYeuCauTiepNhan = TrangThaiYeuCauTiepNhan.DaHoanTat;
  isHoanThanhKham: boolean = false;
  isChuaKham: boolean = false;
  gioiTinhNam: GioiTinh = GioiTinh.Nam;
  hinhThucKham: HinhThucKhamBenh = HinhThucKhamBenh.NoiVien;
  isSelectItem: boolean = false;
  themDichVu: TiepNhanDichVuChiDinh = new TiepNhanDichVuChiDinh();
  queryDichVuDaChiDinh: string = null;
  queryDichVuChiDinhTrongGoi: string = null;
  tongTienDichVuDaChiDinh: number = 0;
  tongTienUuDai: number = 0;
  tongThanhTienTatCaDichVu: number = 0;
  laDichVuKham: NhomDichVuChiDinhKhamSucKhoe = NhomDichVuChiDinhKhamSucKhoe.KhamBenh;
  hasDichVuThem: boolean = false; // todo: cần update case đã bắt đầu khám(hiện đang bị nháy) 

  themDichVuMultiselect: TiepNhanDichVuChiDinhMultiselect = new TiepNhanDichVuChiDinhMultiselect();
  

  trangThaiYCKB: TrangThaiYeuCauKhamBenhObjEnum = new TrangThaiYeuCauKhamBenhObjEnum();
  trangThaiYCDVKT: TrangThaiYeuCauDichVuKyThuatObjEnum = new TrangThaiYeuCauDichVuKyThuatObjEnum();
  tiepNhanDichVuChiDinhQuery: TiepNhanDichVuChiDinhQuery = new TiepNhanDichVuChiDinhQuery();

  // đây là biến tạm, cần cập nhật lại
  daBatDauKham: boolean = false;
  //-------------------------------

  queryInfoDichVuTrongGoi: LookupQueryInfo = new LookupQueryInfo();
  arrGoiKhamDangChiDinh: Array<string> = [];
  tenGoiKhamHienTaiDisplay: string = null;
  isDichVuPhatSinh: boolean = false;
  isShowGridDichVuGoi: boolean = false;

  showbuttonLuuVaInPhieuXetNghiem:boolean = false;
  dichVuSarsCoVs:number[]=[];
  loaiBenhPhamText:string =null;
  loaiBenhPham:number =null;
  bieuHienLamSang:string =null;
  dichTeSarsCoV2:string =null;
  
  @ViewChild('tenDichVuTemplate', { static: true }) tenDichVuTemplate: TemplateRef<any>;
  @ViewChild('loaiGiaTemplate', { static: true }) loaiGiaTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;
  @ViewChild('noiThucHienThemDichVuTemplate', { static: true }) noiThucHienThemDichVuTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaMoiTemplate', { static: true }) donGiaMoiTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('thoiDiemChiDinhTemplate', { static: true }) thoiDiemChiDinhTemplate: TemplateRef<any>;
  
  @ViewChild('actionDichVuThemTemplate', { static: true }) actionDichVuThemTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  @ViewChild('comboboxQuanHuyen', { static: true }) comboboxQuanHuyen: ComboboxComponent;
  @ViewChild('comboboxPhuongXa', { static: true }) comboboxPhuongXa: ComboboxComponent;
  @ViewChild('gridGoiDichVuChuaKham', { read: GridComponent, static: false }) gridGoiDichVuChuaKham: GridComponent;
  @ViewChild('gridGoiDichVuDaChiDinh', { read: GridComponent, static: false }) gridGoiDichVuDaChiDinh: GridComponent;
  @ViewChild('gridDichVuThemChuaKham', { read: GridComponent, static: false }) gridDichVuThemChuaKham: GridComponent;
  @ViewChild('gridDichVuThemDaChiDinh', { read: GridComponent, static: false }) gridDichVuThemDaChiDinh: GridComponent;

  @ViewChild('donGiaUuDaiLabelTemplate', { static: true }) donGiaUuDaiLabelTemplate: TemplateRef<any>;
  @ViewChild('donGiaUuDaiFooterTemplate', { static: true }) donGiaUuDaiFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaUuDaiTemplate', { static: true }) donGiaUuDaiTemplate: TemplateRef<any>;

  @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;

  @Input() Id:number;  
  @Input() IsDichVuPhatSinh:boolean;
  @Output() saveDone: EventEmitter<any> = new EventEmitter<any>();


  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien = new HopDongKhamSucKhoeNhanVien();
    if(this.Id!=null)
    {
      this.id = this.Id;
    }
    else
    {
      this.id = this.route.snapshot.params.id;
    }
    
    this.id = (this.id === undefined || this.id === null) ? 0 : this.id;
    if(this.IsDichVuPhatSinh!=null)
    {
      this.isDichVuPhatSinh = this.IsDichVuPhatSinh;
    }
    else
    {
      this.route.queryParams.subscribe(param => {
        this.isDichVuPhatSinh = param['IsDichVuPhatSinh'] == 'true';
      });
  
    }
    
    this.isShowGridDichVuGoi = !this.isDichVuPhatSinh;

    //get hình thức khám bệnh
    // hinhThucKham
    let menuInfo = this.authService.getAccessUser();
    this.hinhThucKham = menuInfo.HinhThucKhamBenh;
    this.getDataNhanVien(this.id);

    this.gridColumnDichVuThems = [
      { Field: "CheckBox", Title: "", Width: 70, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
      { Field: "Ma", Title: "Mã DV", Width: 70},
      { Field: "TenNhomDichVu", Title: "Nhóm dịch vụ", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ten", Title: "Tên DV", Width: 160, Template: this.tenDichVuTemplate },
      { Field: "LoaiGiaId", Title: "Loại giá", Width: 90, Template: this.loaiGiaTemplate},
      { Field: "SoLan", Title: "SL", Width: 50, Template: this.soLuongTemplate},
      { Field: "DonGiaMoi", Title: "Đơn giá", Width: 120, TemplateFooter: this.donGiaGroupFooterTemplate, Template: this.donGiaMoiTemplate},
      { Field: "ThanhTien", Title: "Thành tiền", Width: 120, TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate, Template: this.thanhTienTemplate},
      { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 100, Template: this.noiThucHienThemDichVuTemplate},
      { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Template: this.tinhTrangTemplate},
      { Field: "ThoiDiemChiDinh", Title: "Thời điểm chỉ định", Width: 90, Template: this.thoiDiemChiDinhTemplate},
      { Field: "Action", Title: "", Width: 40, Template: this.actionDichVuThemTemplate}
    ]

    this.gridColumns = [
      { Field: "Ma", Title: "Mã DV", Width: 70},
      { Field: "TenNhomDichVu", Title: "Nhóm dịch vụ", Width: 50, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ten", Title: "Tên DV", Width: 220, Template: this.tenDichVuTemplate, TemplateFooter: this.donGiaUuDaiLabelTemplate},
      { Field: "TenLoaiGia", Title: "Loại giá", Width: 60},
      { Field: "DonGiaUuDai", Title: "Đơn giá", Width: 120, TemplateFooter: this.donGiaUuDaiFooterTemplate, Template: this.donGiaUuDaiTemplate},
      { Field: "SoLan", Title: "SL", Width: 50},
      { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 100, Template: this.noiThucHienTemplate},
      { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Template: this.tinhTrangTemplate},
      { Field: "ThoiDiemChiDinh", Title: "Thời điểm chỉ định", Width: 90, Template: this.thoiDiemChiDinhTemplate},
      { Field: "Action", Title: "", Width: 40, Template: this.actionTemplate}
    ]
    this.getListDichVuSarsCoVs();
    
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    jQuery("#form-content").css({"height":jQuery(window).height()-250})
  }
  showPopupLoadingData() {
    if (this.popupLoadingData == undefined
      || this.popupLoadingData == null
      || this.popupLoadingData.openDialogs == undefined
      || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
      this.popupLoadingData = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: "200px",
        height: "90px",
        data: { Title: "Đang tải dữ liệu..." },
      });
    }

  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  getDataNhanVien(id: number, isShowIn: boolean = false) {
    if(!isShowIn)
    {
      this.showPopupLoadingData();
    }
    this.apiService
      .get<YeuCauTiepNhanKhamSucKhoe>("KhamDoan/GetThongTinHanhChinhNhanVien?hopDongKhamNhanVienId=" + id)
      .subscribe(
        (resultData) => {
          this.thongTinHanhChinhNhanVien = resultData;
          this.isHoanThanhKham = this.thongTinHanhChinhNhanVien.TrangThaiYeuCauTiepNhan == TrangThaiYeuCauTiepNhan.DaHoanTat || this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.HuyKham;
          this.queryDichVuChiDinhTrongGoi = JSON.stringify(
            new DichVuChiDinhKhamSucKhoeBenhNhanQueryVo(
              this.thongTinHanhChinhNhanVien.Id,
              this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.GoiKhamSucKhoeId,
              false));

          this.queryDichVuDaChiDinh = JSON.stringify(
            new DichVuChiDinhKhamSucKhoeBenhNhanQueryVo(
              this.thongTinHanhChinhNhanVien.Id,
              this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.GoiKhamSucKhoeId,
              true));

          if (this.thongTinHanhChinhNhanVien.Id == 0) {
            this.isChuaKham = true;
            this.daBatDauKham = false;
            this.hasDichVuThem = false;
            // viết api get thông tin dịch vụ gói khám
            this.tiepNhanDichVuChiDinhQuery.HopDongKhamSucKhoeNhanVienId = id;
            this.tiepNhanDichVuChiDinhQuery.NgayThangNamSinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh;
            this.tiepNhanDichVuChiDinhQuery.NamSinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh;
            this.tiepNhanDichVuChiDinhQuery.GioiTinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.GioiTinh;
            this.tiepNhanDichVuChiDinhQuery.TinhTrangHonNhan = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhTrangHonNhan;
            this.tiepNhanDichVuChiDinhQuery.CoMangThai = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.CoMangThai;
            this.getDanhSachDichVuTheoGoiKhamCuaBenhNhan(false);
          }
          else
          {
            this.isChuaKham = false;
            this.daBatDauKham = true;
            this.hasDichVuThem = true;
            this.getInfoSarsCoVTheoYeuCauTiepNhans();
          }
          if(isShowIn)
          {
            this.inHoSo(id);
          }
          this.closePopupLoadingData();
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        }
      );
  }

  getDanhSachDichVuTheoGoiKhamCuaBenhNhan(isShowLoading: boolean = true) {
    if (this.isChuaKham) {
      if (isShowLoading) {
        this.showPopupLoadingData();
      }
      this.apiService
        .post<Array<TiepNhanDichVuChiDinh>>("KhamDoan/GetDanhSachDichVuTheoGoiKhamCuaBenhNhan", this.tiepNhanDichVuChiDinhQuery)
        .subscribe((resultData) => {
          if (resultData !== undefined || resultData !== null) {
            this.dataGoiKham = [];
            this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois = this.dataGoiKham = this.dataGoiKham.concat(resultData);
            this.setDataGridView();
            this.closePopupLoadingData();
          }
          else {
            this.closePopupLoadingData();
          }
        }, (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
    }
  }

  setDataGridView() {
    this.dataSourceGoiKham = {
      data: this.dataGoiKham,
      total: this.dataGoiKham.length
    };
    this.gridGoiDichVuChuaKham.gridDataSource = this.dataSourceGoiKham;
    if (this.gridGoiDichVuChuaKham !== undefined) {
      this.gridGoiDichVuChuaKham.setDataSource();
    }

    this.arrGoiKhamDangChiDinh = [];
    this.dataGoiKham.forEach(element => {
      let index = this.arrGoiKhamDangChiDinh.findIndex(x => x == element.TenGoiKhamSucKhoe);
      if (index === -1) {
        this.arrGoiKhamDangChiDinh.push(element.TenGoiKhamSucKhoe);
      }
    });
    this.tenGoiKhamHienTaiDisplay = this.arrGoiKhamDangChiDinh.join(", ");
  }

  setDataGridDichVuThemView() {
    this.hasDichVuThem = this.dataDichVuThem != undefined && this.dataDichVuThem.length > 0;
    this.dataSourceDichVuThem = {
        data: this.dataDichVuThem,
        total: this.dataDichVuThem.length
    };
    if (this.gridDichVuThemChuaKham !== undefined)
    {
      this.gridDichVuThemChuaKham.gridDataSource = this.dataSourceDichVuThem;
      this.gridDichVuThemChuaKham.setDataSource();
    }
  }

  changeGioiTinh(event){
    this.tiepNhanDichVuChiDinhQuery.GioiTinh = event;
    if(event == GioiTinh.Nam)
    {
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.CoMangThai = false;
      this.tiepNhanDichVuChiDinhQuery.CoMangThai = false;
    }
    this.getDanhSachDichVuTheoGoiKhamCuaBenhNhan();
  }

  xuLyInHoSo(){
    this.inHoSo(this.id);
  }

  xuLyBatDauKham() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog
        .open(ConfirmComponent, {
          disableClose: false,
          width: "400px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có chắc chắn muốn bắt đầu khám sức khỏe cho người bệnh này?",
          },
        })
        .afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.showPopupLoadingData();
            this.apiService.put<any>("KhamDoan/XuLyLuuThongTinHopDongKhamNhanVien", this.thongTinHanhChinhNhanVien).subscribe(res => {
              let mess = "Bắt đầu khám";
              // if (this.thongTinHanhChinhNhanVien.Id != 0) {
              //   mess = "Lưu";
              // }
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [mess]));
              //this.closePopupLoadingData();
              this.getDataNhanVien(this.id, true);
              // this.closePopupLoadingData();
              // this.inHoSo(this.id);
              this.saveDone.emit(1);
            }, err => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupLoadingData();
            });
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  TinhThanhPhoChange(event) {
    if (event == undefined || event == null) {
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuanHuyenId = null;
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.PhuongXaId = null;
    }
  }

  QuanHuyenChange(event) {
    if (event == undefined || event == null) {
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.PhuongXaId = null;
    }
  }

  PhuongXaChange(event) {
    this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.PhuongXaId = event;
    if (event != null && event != undefined) {
      this.apiService.post<any>("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(
        resultData => {
          this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhThanhId = resultData.TinhThanhId;
          this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuanHuyenId = resultData.QuanHuyenId;
          this.comboboxQuanHuyen.getDataForLookup();
        },
        (err: any) => {
        });
    }
    else {
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhThanhId = null;
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuanHuyenId = null;
    }
  }

  ThongTinBenhNhanNgaySinhChange(event) {
    this.tiepNhanDichVuChiDinhQuery.NgayThangNamSinh = event;
    if (this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh != null) {
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh.getFullYear();
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Tuoi = new Date().getFullYear() - this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh;
    }
  }

  namSinhChange(event)
  {
    this.tiepNhanDichVuChiDinhQuery.NamSinh = event;
    this.getDanhSachDichVuTheoGoiKhamCuaBenhNhan();
  }

  changeTinhTrangHonNhan(event)
  {
    this.tiepNhanDichVuChiDinhQuery.TinhTrangHonNhan = event;
    this.getDanhSachDichVuTheoGoiKhamCuaBenhNhan();
  }

  changeMangThai(event)
  {
    this.tiepNhanDichVuChiDinhQuery.CoMangThai = event;
    this.getDanhSachDichVuTheoGoiKhamCuaBenhNhan();
  }

  loaiGiaChange(event, text) {
    if (text == 'dichvu') {
      if (event != undefined && event != null) {
        if(event.Loai ==  NhomDichVuChiDinhKhamSucKhoe.KhamBenh)
        {
          this.themDichVu.LaDichVuKham = true;
          this.themDichVu.LoaiDichVuKyThuat = null;
        }
        else
        {
          this.themDichVu.LaDichVuKham = false;
          this.themDichVu.LoaiDichVuKyThuat = event.LoaiDichVuKyThuat;
        }
        
        this.themDichVu.DichVuBenhVienId = event.KeyId;
        this.themDichVu.Ma = event.Ma;
        this.themDichVu.Ten = event.Ten;
        this.themDichVu.SoLan = 1;

        this.themDichVu.LoaiDichVu = event.Loai;
        this.themDichVu.TenNhomDichVu = event.TenLoaiDichVu;
        this.themDichVu.NoiThucHienId = null;
      }
      else {
        this.themDichVu.LoaiDichVuKyThuat = null;
        this.themDichVu.LaDichVuKham = null;
        this.themDichVu.DichVuBenhVienId = null;
        this.themDichVu.Ma = null;
        this.themDichVu.Ten = null;
        this.themDichVu.SoLan = null;

        this.themDichVu.LoaiDichVu = null;
        this.themDichVu.TenNhomDichVu = null;
        this.themDichVu.NoiThucHienId = null;
      }
    }

    if (text == 'gia') {
      if (event != undefined && event != null) {
        this.themDichVu.LoaiGiaId = event;
      }
      else {
        this.themDichVu.LoaiGiaId = null;
      }
    }

    if (this.themDichVu.DichVuBenhVienId != null) {
      if(this.themDichVu.GoiKhamSucKhoeId == null)
      {
        if (this.themDichVu.LoaiGiaId != null) {
          let obj = {
            DichVuKhamBenhHoacKyThuatBenhVienId: this.themDichVu.DichVuBenhVienId,
            NhomGiaDichVuKhamBenhHoacKyThuatBenhVienId: this.themDichVu.LoaiGiaId,
            LaDichVuKham: this.themDichVu.LaDichVuKham
          }
          this.apiService.post<any>("KhamDoan/GetDonGiaBenhVien", obj).subscribe(
            resultData => {
              if (resultData != undefined && resultData != null) {
                this.themDichVu.DonGiaBenhVien = this.themDichVu.DonGiaMoi = resultData;
                this.themDichVu.ThanhTien = this.themDichVu.DonGiaBenhVien * this.themDichVu.SoLan;
              }
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
        }
      }
      else
      {
        let obj = {
          DichVuKhamBenhHoacKyThuatBenhVienId: this.themDichVu.DichVuBenhVienId,
          NhomGiaDichVuKhamBenhHoacKyThuatBenhVienId: 0,
          LaDichVuKham: this.themDichVu.LaDichVuKham,
          GoiKhamSucKhoeId: this.themDichVu.GoiKhamSucKhoeId
        }
        this.apiService.post<any>("KhamDoan/GetThongTinGiaDichVuTrongGoi", obj).subscribe(
          resultData => {
            if (resultData != undefined && resultData != null) {
              this.themDichVu.LoaiGiaId = resultData.NhomGiaDichVuBenhVienId;
              this.themDichVu.DonGiaBenhVien = this.themDichVu.DonGiaMoi = resultData.DonGiaBenhVien;
              this.themDichVu.ThanhTien = this.themDichVu.DonGiaBenhVien * this.themDichVu.SoLan;
              this.themDichVu.DonGiaUuDai = resultData.DonGiaUuDai;
              this.themDichVu.DonGiaChuaUuDai = resultData.DonGiaChuaUuDai;
              this.themDichVu.NoiThucHienId = resultData.NoiThucHienId;
              this.themDichVu.ChuyenKhoaKhamSucKhoe = resultData.ChuyenKhoaKhamSucKhoe;
              this.themDichVu.TenGoiKhamSucKhoe = resultData.TenGoiKhamSucKhoe;
            }
          },
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          });
      }
    }
  }

  changeSoLan(event) {
    if (event && this.themDichVu.DonGiaMoi) {
      this.themDichVu.ThanhTien = this.themDichVu.DonGiaMoi * event;
    }
    else {
      this.themDichVu.ThanhTien = 0;
    }
  }

  changeDonGiaMoi(event) {
    if (event && this.themDichVu.SoLan) {
      this.themDichVu.ThanhTien = event * this.themDichVu.SoLan;
    }
    else {
      this.themDichVu.ThanhTien = 0;
    }
  }

  changeSoLuongGridDichVu(event, dataItem) {
    if (this.isChuaKham) {
      if (event) {
        dataItem.ThanhTien = event * dataItem.DonGiaMoi;
      }
      else {
        dataItem.ThanhTien = 0;
      }
    }
    else {
      this.CapNhatGridItemDichVuK(dataItem, event, 'SoLan');
    }
  }

  changeDonGiaGridDichVu(event, dataItem) {
    if (this.isChuaKham) {
      if (event) {
        dataItem.ThanhTien = event * dataItem.SoLan;
      }
      else {
        dataItem.ThanhTien = 0;
      }
    }
    else {
      this.CapNhatGridItemDichVuK(dataItem, event, 'DonGia');
    }
  }

  changeNoiThucHienGridDichVu(event, dataItem, rowIndex) {
    console.log('changeNoiThucHienGridDichVu', dataItem);
    if (!this.isChuaKham && event) {
      this.CapNhatGridItemDichVuK(dataItem, event, 'NoiThucHien', rowIndex);
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectItem != true) {
        this.xuLyThemDichVu();
      }
      else {
        this.isSelectItem = false;
      }
    }
  }

  openCombobox(event: any) {
    if (event) {
      this.isSelectItem = true;
    }
    else {
      this.isSelectItem = false;
    }
  }

  onDataBoundDichVuDaChiDinh(event)
  {
    this.dataIn =event;
    if(event)
    {
      this.tongTienDichVuDaChiDinh = event.Data.reduce((sum, item) => sum + item.ThanhTien, 0);
      this.hasDichVuThem = event.Data.length > 0;
    }
    else
    {
      this.tongTienDichVuDaChiDinh = 0;
      this.hasDichVuThem = false;
    }
   
    this.tongThanhTienTatCaDichVu = this.tongTienDichVuDaChiDinh + this.tongTienUuDai;
  }

  dataBoundGridDichVuTrongGoi(event)
  {
    this.arrGoiKhamDangChiDinh = [];
    if(event)
    {
      event.Data.forEach(element => {
        let index = this.arrGoiKhamDangChiDinh.findIndex(x => x == element.TenGoiKhamSucKhoe);
        if(index === -1)
        {
          this.arrGoiKhamDangChiDinh.push(element.TenGoiKhamSucKhoe);
        }
      });

      this.tongTienUuDai = event.Data.reduce((sum, item) => sum + item.DonGiaUuDai, 0);
    }
    else
    {
      this.tongTienUuDai = 0;
    }
    this.tenGoiKhamHienTaiDisplay = this.arrGoiKhamDangChiDinh.join(", ");
    this.tongThanhTienTatCaDichVu = this.tongTienDichVuDaChiDinh + this.tongTienUuDai;
  }

  // action
  xuLyThemDichVu() {
    this.showPopupLoadingData();
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.validationDichVuErrors = [];
      //YeuCauTiepNhanId
      if (!this.isChuaKham) {
        this.themDichVu.YeuCauTiepNhanId = this.thongTinHanhChinhNhanVien.Id;
      }

      // kiểm tra trùng dv khám đối với trường hợp chưa bắt đầu khám, dv mới thêm là tạm trên UI
      if(this.isChuaKham)
      {
        if(this.themDichVu.LaDichVuKham)
        {
          let indexGridDVThem = this.dataSourceDichVuThem.data.findIndex(x => x.DichVuBenhVienId == this.themDichVu.DichVuBenhVienId);
          let indexGridDVGoi = this.dataSourceGoiKham.data.findIndex(x => x.DichVuBenhVienId == this.themDichVu.DichVuBenhVienId);
          if(indexGridDVThem != -1 || indexGridDVGoi != -1)
          {
            this.notificationService.showError("Dịch vụ khám bệnh này đã tồn tại");
            this.closePopupLoadingData();
            return;
          }
        }

        if(this.themDichVu.GoiKhamSucKhoeId != null)
        {
          // this.themDichVu.SoLanChuaLuu = 
          //   this.dataSourceDichVuThem.data.filter(x => x.DichVuBenhVienId == this.themDichVu.DichVuBenhVienId 
          //                                             && x.GoiKhamSucKhoeId == this.themDichVu.GoiKhamSucKhoeId)
          //                                 .reduce((sum, item) => sum + item.SoLan, 0);

          this.themDichVu.SoLanChuaLuu = 
            this.dataSourceGoiKham.data.filter(x => x.DichVuBenhVienId == this.themDichVu.DichVuBenhVienId 
                                                      && x.GoiKhamSucKhoeId == this.themDichVu.GoiKhamSucKhoeId)
                                          .reduce((sum, item) => sum + item.SoLan, 0);
        }
      }

      this.apiService.post<any>("KhamDoan/KiemTraThemDichVuKhamSucKhoe", this.themDichVu).subscribe(res => {
        if (this.isChuaKham) {
          if(this.themDichVu.GoiKhamSucKhoeId != null)
          {
            this.dataGoiKham = [];
            this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois.push(Object.assign({}, res));
            this.dataGoiKham = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois;
            this.setDataGridView();
          }
          else
          {
            this.hasDichVuThem = true;
            this.dataDichVuThem = [];
            this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems.push(Object.assign({}, res));
            this.dataDichVuThem = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems;
            this.setDataGridDichVuThemView();
          }
          this.xuLyHuyThemDichVu();
        }
        else {
          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
          this.xuLyHuyThemDichVu();
          if(this.themDichVu.GoiKhamSucKhoeId != null)
          {
            
          }
          else
          {
            this.hasDichVuThem = true;
          }
          if (this.gridGoiDichVuDaChiDinh !== undefined) {
            this.gridGoiDichVuDaChiDinh.search();
          }
          if (this.gridDichVuThemDaChiDinh !== undefined) {
            this.gridDichVuThemDaChiDinh.search();
          }
        }
        this.closePopupLoadingData();
      }, err => {
        this.validationDichVuErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyHuyThemDichVu(){
    this.validationDichVuErrors = [];
    // let loaiNhomId = this.themDichVu.LoaiNhomDichVuId;
    this.themDichVu = new TiepNhanDichVuChiDinh();
    this.themDichVu.LoaiNhomDichVuId = 0; // giá trị default của nhóm hệ thống
  }

  getIndexDichVuTrongGoi(dataItem): number{
    return this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois.findIndex(x => x == dataItem);
  }

  xuLyXoaDichVuKhamTrongGoi(dataItem, index) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result == "Yes") {
        if (this.isChuaKham) { // trường hợp chưa bắt đầu khám
          // this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois.splice(index, 1);
          let index = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois.findIndex(x => x == dataItem);
          if(index != -1)
          {
            this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois.splice(index, 1);
            this.setDataGridView();
          }

          if(dataItem.LaGoiChung)
          {
            this.xoaDichVuDaChiDinhTrongGoiChung(dataItem);
          }
        }
        else {
          if(dataItem.LaGoiChung)
          {
            this.xoaDichVuDaChiDinhTrongGoiChung(dataItem, true);
          }
          else
          {
            this.xoaDichVuDaChiDinh(dataItem, true);
          }
          
        }
      }
    });
  }

  xuLyXoaDichVuKhamThem(dataItem, index){
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result == "Yes") {
        if (this.isChuaKham) { // trường hợp chưa bắt đầu khám
          //this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems.splice(index, 1);
          let index = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems.findIndex(x => x == dataItem);
          if(index != -1)
          {
            this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems.splice(index, 1);
            this.setDataGridDichVuThemView();
          }
        }
        else {
          this.xoaDichVuDaChiDinh(dataItem);
        }
      }
    });
  }

  xoaDichVuDaChiDinh(dataItem: any, isGridGoi: boolean = false, showLoading: boolean = true, xoaKemYeuCauDichVu: boolean = false) {
    if(showLoading)
    {
      this.showPopupLoadingData();
    }

    let xoaChiDinh = new CapNhatGridDichVuKhamSucKhoeNhanVien();
    xoaChiDinh.YeuCauTiepNhanId = this.thongTinHanhChinhNhanVien.Id;
    // xoaChiDinh.LoaiDichVu = dataItem.LoaiDichVu;
    xoaChiDinh.LaDichVuKham = dataItem.LaDichVuKham;
    xoaChiDinh.YeuCauDichVuBenhVienId = dataItem.Id;

    if(xoaKemYeuCauDichVu)
    {
      xoaChiDinh.XoaDichVuDaChiDinhTrongGoiChung = true;
      xoaChiDinh.GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = dataItem.GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId;
      xoaChiDinh.GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = dataItem.GoiKhamSucKhoeChungDichVuKyThuatNhanVienId;
    }

    this.apiService.post<any>("KhamDoan/XuLyXoaDichVuKhamSucKhoeChiDinh", xoaChiDinh).subscribe(result => {
      this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
      if (isGridGoi) {
        this.gridGoiDichVuDaChiDinh.search();
      }
      else {
        this.gridDichVuThemDaChiDinh.search();
      }
      this.closePopupLoadingData();
    },
      (err: ApiError) => {
        this.notificationService.showError(err.Message);
        this.closePopupLoadingData();
      });
  }

  xuLyLuuThongTinHanhChinh() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog
        .open(ConfirmComponent, {
          disableClose: false,
          width: "400px",
          data: {
            Title: "Xác nhận",
            Message: CommonService.format(SystemMessage.MessConfirm, ["lưu"]),
          },
        })
        .afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.showPopupLoadingData();
            this.apiService.put<any>("KhamDoan/XuLyLuuThongTinHopDongKhamNhanVien", this.thongTinHanhChinhNhanVien).subscribe(res => {
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              this.closePopupLoadingData();
              this.saveDone.emit(2);
              //this.quayLai();
            }, err => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupLoadingData();
            });
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  //BVHD-3707
  xuLyQuayLaiChuaKhamNhieuNhanVien(){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog
        .open(ConfirmComponent, {
          disableClose: false,
          width: "400px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có chắc chắn muốn quay lại chưa khám cho nhân viên đang chọn không?",
          },
        })
        .afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.showPopupLoadingData();
            let arrayHopDongNhanVienId = {
              HopDongKhamSucKhoeNhanVienIds: [this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Id]
            };
            this.apiService.put<any>("KhamDoan/XuLyQuayLaiChuaKhamNhieuNhanVien", arrayHopDongNhanVienId).subscribe(res => {
              let mess = "Quay lại chưa khám";
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [mess]));
              this.closePopupLoadingData();
              window.location.reload();
            }, err => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupLoadingData();
            });
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  timeout = null;
  CapNhatGridItemDichVuK(dataItem, event, loaiCapNhat, rowIndex = null) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      let gridItem = new CapNhatGridDichVuKhamSucKhoeNhanVien();
      gridItem.YeuCauTiepNhanId = this.thongTinHanhChinhNhanVien.Id;
      // gridItem.LoaiDichVu = dataItem.LoaiDichVu;
      gridItem.LaDichVuKham = dataItem.LaDichVuKham;
      gridItem.YeuCauDichVuBenhVienId = dataItem.Id;

      switch (loaiCapNhat) {
        case "DonGia":
          gridItem.DonGia = event;
          gridItem.IsUpdateDonGia = true; break;
        case "SoLan":
          gridItem.SoLan = event;
          gridItem.IsUpdateSoLan = true; break;
        case "NoiThucHien":
          gridItem.NoiThucHienId = event;
          gridItem.IsUpdateNoiThucHien = true;
          break;
      }

      if (loaiCapNhat == "SoLan" || loaiCapNhat == "DonGia") {
        var self = this;
        clearTimeout(self.timeout);
        self.timeout = setTimeout(function () {
          self.saveItemDichVu(gridItem);
        }, 1000);
      }
      else {
        this.saveItemDichVu(gridItem);
      }

    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  saveItemDichVu(gridItem) {
    this.showPopupLoadingData();
    this.apiService.post<any>("KhamDoan/CapNhatGridItemDichVuKhamSucKhoeNhanVien", gridItem).subscribe(
      resultData => {
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật "]));
        //reload grid
        if(this.gridDichVuThemDaChiDinh != undefined)
        {
          this.gridDichVuThemDaChiDinh.search();
        }
        if(this.gridGoiDichVuDaChiDinh != undefined)
        {
          this.gridGoiDichVuDaChiDinh.search();
        }
        this.closePopupLoadingData();
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
  }

  inHoSoTungPhieu(phieuIn: any, id: number) {
    if (phieuIn == 1) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
        this.dialog.open(SoKhamSucKhoeDinhKyPopupComponent, {
          disableClose: false,
          width: '1000px',
          data: id
        }).afterClosed().subscribe(result => {
        });
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
    if (phieuIn == 2) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
        this.dialog.open(PhieuDangKyKhamSucKhoePopupComponent, {
          disableClose: false,
          width: '1000px',
          data: id
        }).afterClosed().subscribe(result => {
        });
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
    if (phieuIn == 3) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
        this.dialog.open(KetQuaKhamSucKhoePopupComponent, {
          disableClose: false,
          width: '1000px',
          data: id
        }).afterClosed().subscribe(result => {
        });
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
    if (phieuIn == 4) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
        this.dialog.open(BangHuongDanKhamSucKhoePopupComponent, {
          disableClose: false,
          width: '1000px',
          data: id
        }).afterClosed().subscribe(result => {
        });
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
  }

  inHoSo(hopDongKhamSucKhoeNhanVienId: number) {
    this.dialog.open(KhamDoanTiepNhanInHoSoPopupComponent, {
      disableClose: false,
      width: '300px',
      data: {}
    }).afterClosed().subscribe(result => {
      if (result) {
        this.dialog.open(KhamDoanTiepNhanFilePopupComponent, {
          disableClose: false,
          width: '1000px',
          data: { "Id": hopDongKhamSucKhoeNhanVienId, "HoSoDaChon": result }
        }).afterClosed().subscribe(result => {
          //this.quayLai();
        },
          (err: ApiError) => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          });
      }
      else {
        //this.quayLai();
      }
    });
  }

  changeDichVuChiDinh(event)
  {
    this.validationDichVuErrors = [];
    this.themDichVu.IsFirstLoad = true;
  }

  quayLai() {
    this.location.back();
  }

  changeLoaiNhomDichVu(event)
  {
    this.xuLyHuyThemDichVu();
    this.themDichVu.LoaiNhomDichVuId = event;
    if(event && event != 0)
    {
      this.themDichVu.GoiKhamSucKhoeId = event;
    }
    else
    {
      this.themDichVu.GoiKhamSucKhoeId = null;
    }
  }

  getQueryInfoLookupDichVuTrongGoi(){
    if(this.themDichVu.GoiKhamSucKhoeId != null)
    {
      this.tiepNhanDichVuChiDinhQuery.HopDongKhamSucKhoeNhanVienId = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Id;
      this.tiepNhanDichVuChiDinhQuery.NgayThangNamSinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh;
      this.tiepNhanDichVuChiDinhQuery.NamSinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh;
      this.tiepNhanDichVuChiDinhQuery.GioiTinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.GioiTinh;
      this.tiepNhanDichVuChiDinhQuery.TinhTrangHonNhan = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhTrangHonNhan;
      this.tiepNhanDichVuChiDinhQuery.CoMangThai = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.CoMangThai;
      this.tiepNhanDichVuChiDinhQuery.GoiKhamSucKhoeId = this.themDichVu.GoiKhamSucKhoeId;
      this.queryInfoDichVuTrongGoi.ParameterDependencies = JSON.stringify(this.tiepNhanDichVuChiDinhQuery);
    }
    else
    {
      this.queryInfoDichVuTrongGoi.ParameterDependencies = null;
    }
    return this.queryInfoDichVuTrongGoi;
  }
  public listDichVuIds = new Array<number>();
  extCheckboxSelections(event){
    this.listDichVuIds = event;
  }
  InDichVu(){
    this.listChonDichVuChiDinhReLoad = [];
    if(this.gridDichVuThemDaChiDinh != undefined && this.gridDichVuThemDaChiDinh != null)
    {
      let gridData = this.gridDichVuThemDaChiDinh.getAllDataFromDatasource();
      gridData.forEach(elements => {
          this.listChonDichVuChiDinh.forEach(lstChiDinh => {
              if (lstChiDinh.DichVuChiDinhId == elements.Id && lstChiDinh.NhomChiDinhId == elements.NhomId) {
                  this.listChonDichVuChiDinhReLoad.push(lstChiDinh);
              }
          });
      });
      if(this.listChonDichVuChiDinhReLoad.length != 0)
      {
        let voInChiDinhNgoaiGoiKhamDoan ={
          YeuCauTiepNhanId : this.thongTinHanhChinhNhanVien.Id,
          //ListDichVuKyThuatIds:this.listDichVuIds,
          Hosting : window.location.protocol + "//" + window.location.host,
          DichVuChiDinhIns : this.listChonDichVuChiDinhReLoad
        };
        this.showPopupLoadingData();
        this.apiService.post<any>("KhamDoan/InDichVuChiDinhPhatSinh", voInChiDinhNgoaiGoiKhamDoan).subscribe(
          resultData => {
            this.dialog.open(InDichVuChiDinhNgoaiGoiComponent, {
              disableClose: true,
              width: '1000px',
              data: { Model: resultData }
            }).afterClosed().subscribe(() => {
            });
            this.closePopupLoadingData();
    
          },
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
          });
      }else{
        this.notificationService.showError("Chưa chọn dịch vụ in.");
      }
    }
    else{
      this.notificationService.showError("Không có dịch vụ phát sinh.");
    }
    
    
  }

  changeLookupNoiThucHien(event, laHeThong: boolean = false)
  {
    if(laHeThong && this.themDichVu.IsFirstLoad)
    {
      if(event && event.length > 0 && this.themDichVu.DichVuBenhVienId && !this.themDichVu.NoiThucHienId)
      {
        this.themDichVu.NoiThucHienId = event[0].KeyId;
        this.themDichVu.IsFirstLoad = false;
      }
    }
  }


  //=================================================== BVHD-3619 ============================================================
  changeLoaiNhomDichVuMultiselect(event)
  {
    this.xuLyHuyThemDichVuMultiselect();
    this.themDichVuMultiselect.LoaiNhomDichVuId = event;
    if(event && event != 0)
    {
      this.themDichVuMultiselect.GoiKhamSucKhoeId = event;
    }
    else
    {
      this.themDichVuMultiselect.GoiKhamSucKhoeId = null;
    }
  }

  chonNhomDichVuMultiselect(event)
  {
    var self = this;
    self.timeout = setTimeout(function () {
      if (event) {
        self.themDichVuMultiselect.LaGoiPhatSinh = event.LaGoiPhatSinh;
      }
      else {
        self.themDichVuMultiselect.LaGoiPhatSinh = false;
      }
    }, 500);
  }

  getQueryInfoLookupDichVuTrongGoiMultiselect(){
    if(this.themDichVuMultiselect.GoiKhamSucKhoeId != null)
    {
      this.tiepNhanDichVuChiDinhQuery.HopDongKhamSucKhoeNhanVienId = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Id;
      this.tiepNhanDichVuChiDinhQuery.NgayThangNamSinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh;
      this.tiepNhanDichVuChiDinhQuery.NamSinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh;
      this.tiepNhanDichVuChiDinhQuery.GioiTinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.GioiTinh;
      this.tiepNhanDichVuChiDinhQuery.TinhTrangHonNhan = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhTrangHonNhan;
      this.tiepNhanDichVuChiDinhQuery.CoMangThai = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.CoMangThai;
      this.tiepNhanDichVuChiDinhQuery.GoiKhamSucKhoeId = this.themDichVuMultiselect.GoiKhamSucKhoeId;
      this.queryInfoDichVuTrongGoi.ParameterDependencies = JSON.stringify(this.tiepNhanDichVuChiDinhQuery);
    }
    else
    {
      this.queryInfoDichVuTrongGoi.ParameterDependencies = null;
    }
    return this.queryInfoDichVuTrongGoi;
  }
  
  xuLyThemDichVuMultiselect(){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.showPopupLoadingData();
      this.validationDichVuErrors = [];
      //YeuCauTiepNhanId
      if (!this.isChuaKham) {
        this.themDichVuMultiselect.YeuCauTiepNhanId = this.thongTinHanhChinhNhanVien.Id;
      }

      // kiểm tra trùng dv khám đối với trường hợp chưa bắt đầu khám, dv mới thêm là tạm trên UI
      // if(this.isChuaKham)
      // {
      //   if(this.themDichVu.LaDichVuKham)
      //   {
      //     let indexGridDVThem = this.dataSourceDichVuThem.data.findIndex(x => x.DichVuBenhVienId == this.themDichVu.DichVuBenhVienId);
      //     let indexGridDVGoi = this.dataSourceGoiKham.data.findIndex(x => x.DichVuBenhVienId == this.themDichVu.DichVuBenhVienId);
      //     if(indexGridDVThem != -1 || indexGridDVGoi != -1)
      //     {
      //       this.notificationService.showError("Dịch vụ khám bệnh này đã tồn tại");
      //       this.closePopupLoadingData();
      //       return;
      //     }
      //   }

      //   if(this.themDichVu.GoiKhamSucKhoeId != null)
      //   {
      //     this.themDichVu.SoLanChuaLuu = 
      //       this.dataSourceGoiKham.data.filter(x => x.DichVuBenhVienId == this.themDichVu.DichVuBenhVienId 
      //                                                 && x.GoiKhamSucKhoeId == this.themDichVu.GoiKhamSucKhoeId)
      //                                     .reduce((sum, item) => sum + item.SoLan, 0);
      //   }
      // }

      this.themDichVuMultiselect.DichVuThems = [];
      this.dataSourceDichVuThem.data.forEach(dvThem => {
        this.themDichVuMultiselect.DichVuThems.push(Object.assign({}, dvThem));
      });

      this.themDichVuMultiselect.DichVuGois = [];
      this.dataSourceGoiKham.data.forEach(dvGoi => {
        this.themDichVuMultiselect.DichVuGois.push(Object.assign({}, dvGoi));
      });

      this.themDichVuMultiselect.HinhThucKhamBenh = this.hinhThucKham;
      this.themDichVuMultiselect.HopDongKhamSucKhoeId = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.HopDongKhamSucKhoeId;

      //BVHD-3618
      this.themDichVuMultiselect.HopDongKhamSucKhoeNhanVienId = this.id;
      
        //BVHD-3761
        //=======================================================================================================
        let arrDichVu = this.themDichVuMultiselect.DichVus.slice();
        arrDichVu.forEach(element => {
            let elementObj = JSON.parse(arrDichVu[0]);
            this.showbuttonLuuVaInPhieuXetNghiem = this.dichVuSarsCoVs.includes(elementObj.DichVuId);
            
        });
       
        if(this.showbuttonLuuVaInPhieuXetNghiem == true)
        {
            
            this.apiService.post
            this.dialog
            .open(XnSarsCov2PopupComponent, {
                width: "600px",
                data: { LoaiMauXetNghiem:this.loaiBenhPham,LoaiMauXetNghiemText:this.loaiBenhPhamText,BieuHienLamSang:this.bieuHienLamSang,DichTeSarsCoV2:this.dichTeSarsCoV2}
            })
            .afterClosed()
            .subscribe((result) => {
                if (result != undefined) {
                     this.themDichVuMultiselect.BieuHienLamSang = result.BieuHienLamSang;
                     this.themDichVuMultiselect.DichTeSarsCoV2 = result.DichTeSarsCoV2;
                     this.ThemDichVuSarsCov2();
                }
                else{
                    this.ThemDichVuSarsCov2();
                }

            });
        //=======================================================================================================
        }
        else{
          this.apiService.post<any>("KhamDoan/KiemTraThemDichVuKhamSucKhoeMultiselect", this.themDichVuMultiselect).subscribe(arrRes => {
            if (this.isChuaKham) {
              if(this.themDichVuMultiselect.GoiKhamSucKhoeId != null && this.themDichVuMultiselect.LaGoiPhatSinh !== true)
              {
                this.dataGoiKham = [];
                arrRes.forEach(element => {
                  this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois.push(Object.assign({}, element));
                });
                this.dataGoiKham = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois;
                this.setDataGridView();
              }
              else
              {
                this.hasDichVuThem = true;
                this.dataDichVuThem = [];
                arrRes.forEach(element => {
                  this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems.push(Object.assign({}, element));
                });
                this.dataDichVuThem = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems;
                this.setDataGridDichVuThemView();
              }
              this.xuLyHuyThemDichVuMultiselect();
            }
            else {
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
              this.xuLyHuyThemDichVuMultiselect();
              if(this.themDichVuMultiselect.GoiKhamSucKhoeId != null)
              {
                
              }
              else
              {
                this.hasDichVuThem = true;
              }
              if (this.gridGoiDichVuDaChiDinh !== undefined) {
                this.gridGoiDichVuDaChiDinh.search();
              }
              if (this.gridDichVuThemDaChiDinh !== undefined) {
                this.gridDichVuThemDaChiDinh.search();
              }
            }
            this.closePopupLoadingData();
          }, err => {
            this.validationDichVuErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
          });
        }
    
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyHuyThemDichVuMultiselect(){
    this.validationDichVuErrors = [];
    this.themDichVuMultiselect = new TiepNhanDichVuChiDinhMultiselect();
    this.themDichVuMultiselect.LoaiNhomDichVuId = 0;
  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // enter
    if (event.keyCode == 13) {
      if (this.dialog.openDialogs.length > 0) {
        return;
      }
      event.preventDefault();
      this.xuLyHuyThemDichVuMultiselect();
    }
  }

  tinhTongTienDichVuChuaBatDauKham() {
    return this.dataDichVuThem.reduce((sum, item) => sum + item.ThanhTien, 0) + this.dataGoiKham.reduce((sum, item) => sum + item.DonGiaUuDai, 0);
  };

  //============================================================================================================================

  //==================================== BVHD-3618 ==========================================
  xoaDichVuDaChiDinhTrongGoiChung(dataItem: any, xoaKemYeuCauDichVu: boolean= false) {
    this.showPopupLoadingData();

    if (xoaKemYeuCauDichVu) {
      this.xoaDichVuDaChiDinh(dataItem, true, false, true);
    }
    else {
      let xoaChiDinh = new DichVuGoiChungXoaChuaBatDauKham();
      xoaChiDinh.GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = dataItem.GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId;
      xoaChiDinh.GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = dataItem.GoiKhamSucKhoeChungDichVuKyThuatNhanVienId;

      this.apiService.post<any>("KhamDoan/XuLyXoaDichVuGoiChungChuaBatDauKham", xoaChiDinh).subscribe(result => {
        // this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        // xử lý xóa trên grid
        // if (xoaKemYeuCauDichVu) {
        //   this.xoaDichVuDaChiDinh(dataItem, true, false);
        // }
        // else {
          this.closePopupLoadingData();
        // }
      },
        (err: ApiError) => {
          this.notificationService.showError(err.Message);
          this.closePopupLoadingData();
        });
    }
  }
  //=========================================================================================
  //---------------------------------------- BVHD-3668 In dịch vụ phát sinh----------------------------------------
  public dataIn : any;
  public checkAll: boolean = null;
  public listChonDichVuChiDinh: any[] = [];
  public listChonDichVuChiDinhReLoad: any[] = [];
  public isCheckXacNhanIn: boolean = false;

  SelectcheckAllboxIn(event){
    let gridDataIn: any[] = [];
    if (this.dataIn.Data == undefined) {
        this.listChonDichVuChiDinh = [];
    }
    else {

        gridDataIn = this.gridDichVuThemDaChiDinh.getAllDataFromDatasource();
        this.listChonDichVuChiDinh = [];
    }
    if (event == true) {

        gridDataIn.forEach(element => {
            element.isCheckRowItem = true;
            this.checkAll = true;
            let index = this.listChonDichVuChiDinh.findIndex(x => x.DichVuChiDinhId == element.Id && x.NhomChiDinhId == element.NhomId);
            if (index == -1) {
                var chiDinh = new ListInChiDinh();
                chiDinh.NhomChiDinhId = element.NhomId;
                chiDinh.DichVuChiDinhId = element.Id;
                this.listChonDichVuChiDinh.push(chiDinh);
            }
        })
    }
    else {

        gridDataIn.forEach(element => {
            element.isCheckRowItem = false;
        });
        this.listChonDichVuChiDinh = [];
    }
    this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
  }
  checkboxIn(event: any, dataItem: any) {
    if (this.dataIn.Data == undefined) {
        this.listChonDichVuChiDinh = [];
    }
    let index = this.listChonDichVuChiDinh.findIndex(x => x.DichVuChiDinhId == dataItem.Id && x.NhomChiDinhId == dataItem.NhomId);
    if (event == true) {
        if (index == -1) {
            var chiDinh = new ListInChiDinh();
            chiDinh.NhomChiDinhId = dataItem.NhomId;
            chiDinh.DichVuChiDinhId = dataItem.Id;
            this.listChonDichVuChiDinh.push(chiDinh);
            if (this.listChonDichVuChiDinh.length == this.dataIn.length) {
                this.checkAll = true;
            }
        }
        else {
            if (this.listChonDichVuChiDinh.length == this.dataIn.length) {
                this.checkAll = true;
            }
            else {
                this.checkAll = false;
            }
        }

        dataItem.isCheckRowItem = true;
    }
    else {
        this.checkAll = false;
        if (index >= 0) {
            this.listChonDichVuChiDinh.splice(index, 1)
        }
    }
    if (this.listChonDichVuChiDinh.length == this.dataIn.Data.length) {
        this.checkAll = true;
    }
    else {
        this.checkAll = false;
    }
    this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
}
  // extOnDataBound(event){
  //   this.dataIn =event;
    
  // }
  //----------------------------------------------------------------------------------------
  //BVHD-3761
    //=======================================================================================================
    InPhieuXN(){

      
      let yeuCauDichVuKyThuatIds:any[] = [];
      let gridData = this.gridDichVuThemDaChiDinh.getAllDataFromDatasource();
      gridData.forEach(elements => {
          this.listChonDichVuChiDinh.forEach(lstChiDinh => {
              if (lstChiDinh.DichVuChiDinhId == elements.Id && 
                  lstChiDinh.NhomChiDinhId == elements.NhomId && 
                  lstChiDinh.NhomChiDinhId == 2) {
                      yeuCauDichVuKyThuatIds.push(lstChiDinh.DichVuChiDinhId);
              }
          });
      });
      
      let hosting = window.location.protocol + "//" + window.location.host;
      let model={
          YeuCauDichVuKyThuatIds:yeuCauDichVuKyThuatIds,
          Hosting:hosting,
          YeuCauTiepNhanId:this.thongTinHanhChinhNhanVien.Id
      };
      if(yeuCauDichVuKyThuatIds.length == 0)
      {
          let mess = "Chưa chọn dịch vụ xét nghiệm test nhanh Sars-Cov 2 cần in";
          this.notificationService.showError(mess);
      }
      else{
          this.apiService
          .post<any>(
            "TiepNhanBenhNhan/InPhieuXetNghiemCovidBacSiKhacChiDinh",model
          )
          
          .subscribe((resultData) => {
              if(resultData != null && resultData !="")
              {
                  let dialogRef = this.dialog.open(XnCovidSarscov2PopupComponent, {
                      width: '1000px',
                      height: 'auto',
                      data: { Model: resultData }
                    }).afterClosed().subscribe(result => {
                    });
              }
              else{
                  let mess = "Không có dịch vụ xét nghiệm test nhanh Sars-Cov 2 cần in";
                  this.notificationService.showError(mess);
              }
          });
      }
      // let hosting =window.location.protocol + "//" + window.location.host;
      // this.apiService
      // .get<any>(
      //   "TiepNhanBenhNhan/InPhieuXetNghiemCovid?id=" +
      //   this.benhNhanHienTai.YeuCauTiepNhanId +
      //   "&hostingName=" +
      //    hosting
      // )
      
      // .subscribe((resultData) => {
      //     if(resultData != null && resultData !="")
      //     {
      //         let dialogRef = this.dialog.open(XnCovidSarscov2PopupComponent, {
      //             width: '1000px',
      //             height: 'auto',
      //             data: { Model: resultData }
      //           }).afterClosed().subscribe(result => {
      //           });
      //     }
      //     else{
      //         let mess = "Không có dịch vụ xét nghiệm test nhanh Sars-Cov 2 cần in";
      //         this.notificationService.showError(mess);
      //     }
      // });
    }
    //=======================================================================================================
         // BVHD-3761
  //================================================================================================
  getListDichVuSarsCoVs(){
      this.apiService.get<DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham>("TiepNhanBenhNhan/GetSarsCoVs").subscribe(
          resultData => {
              this.dichVuSarsCoVs = [];
              this.dichVuSarsCoVs =resultData.Ids;
              this.loaiBenhPham = resultData.LoaiMauXetNghiem
              this.loaiBenhPhamText = resultData.LoaiMauXetNghiemText
          });
  }
  getInfoSarsCoVTheoYeuCauTiepNhans(){
      this.apiService.get<XetNghiemCovid>("TiepNhanBenhNhan/GetInfoSarsCoVTheoYeuCauTiepNhanNoiTru?id=" +  this.thongTinHanhChinhNhanVien.Id).subscribe(
          resultData => {
              this.bieuHienLamSang = resultData.BieuHienLamSang;
              this.dichTeSarsCoV2 = resultData.DichTeSarsCoV2;
          });
  }
  ThemDichVuSarsCov2(){
    this.apiService.post<any>("KhamDoan/KiemTraThemDichVuKhamSucKhoeMultiselect", this.themDichVuMultiselect).subscribe(arrRes => {
      if (this.isChuaKham) {
        if(this.themDichVuMultiselect.GoiKhamSucKhoeId != null && this.themDichVuMultiselect.LaGoiPhatSinh !== true)
        {
          this.dataGoiKham = [];
          arrRes.forEach(element => {
            this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois.push(Object.assign({}, element));
          });
          this.dataGoiKham = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois;
          this.setDataGridView();
        }
        else
        {
          this.hasDichVuThem = true;
          this.dataDichVuThem = [];
          arrRes.forEach(element => {
            this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems.push(Object.assign({}, element));
          });
          this.dataDichVuThem = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems;
          this.setDataGridDichVuThemView();
        }
        this.xuLyHuyThemDichVuMultiselect();
      }
      else {
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
        this.getInfoSarsCoVTheoYeuCauTiepNhans();
        this.xuLyHuyThemDichVuMultiselect();
        if(this.themDichVuMultiselect.GoiKhamSucKhoeId != null)
        {
          
        }
        else
        {
          this.hasDichVuThem = true;
        }
        if (this.gridGoiDichVuDaChiDinh !== undefined) {
          this.gridGoiDichVuDaChiDinh.search();
        }
        if (this.gridDichVuThemDaChiDinh !== undefined) {
          this.gridDichVuThemDaChiDinh.search();
        }
      }
      this.closePopupLoadingData();
    }, err => {
      this.validationDichVuErrors = err.ValidationErrors;
      if (err.Message != "Validation Failed") {
        this.notificationService.showError(err.Message);
      }
      this.closePopupLoadingData();
    });
  }
  //================================================================================================
}
