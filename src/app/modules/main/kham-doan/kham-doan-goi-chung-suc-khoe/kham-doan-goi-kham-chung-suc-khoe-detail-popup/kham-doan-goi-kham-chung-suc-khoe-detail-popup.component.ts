import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DichVuKhamSucKhoeDoanChungViewModel, GoiKhamSucKhoeNoiThucHienChungViewModel, KhamSucKhoeDoanChungViewModel } from '../kham-doan-goi-kham-chung-suc-khoe.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { MultiselectComponent } from 'src/app/shared/component/dropdowns/multiselect/multiselect.component';
import { MultiselectQueryInfo } from 'src/app/shared/models/common.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { KeyIdStringGoiDichVuKhamSucKhoeVo } from '../../kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.model';


@Component({
  selector: 'kham-doan-goi-kham-chung-suc-khoe-detail-popup',
  templateUrl: './kham-doan-goi-kham-chung-suc-khoe-detail-popup.component.html',
  styleUrls: ['./kham-doan-goi-kham-chung-suc-khoe-detail-popup.component.scss']
})
export class KhamDoanGoiKhamChungSucKhoeDetailPopupComponent implements OnInit {
  @Input() dataKhamDoan: any;
  @Output() afterChangedFromHopDongKham = new EventEmitter<any>();

  khamSucKhoeDoan: KhamSucKhoeDoanChungViewModel = new KhamSucKhoeDoanChungViewModel();
  dichVuKhamSucKhoeDoan: DichVuKhamSucKhoeDoanChungViewModel = new DichVuKhamSucKhoeDoanChungViewModel();
  lstDichVuKhamSucKhoeDoanGrid: DichVuKhamSucKhoeDoanChungViewModel[] = [];
  keyIdStringGoiDichVuKhamSucKhoeVo: KeyIdStringGoiDichVuKhamSucKhoeVo = new KeyIdStringGoiDichVuKhamSucKhoeVo();
  dichVuStringId: string = null;
  icClose = icClose;
  icDelete = icDelete;
  isSelectDuocPham: boolean = false;
  isUpdate: boolean = false;
  rowIndex: number = null;
  dataEdit: any = null;
  dichVuKhamBenhBvId: number = null;
  nhomGiaDichVuKhamBenhBenhVienId: number = null;
  tenDichVu: string = null;
  documentType: DocumentType;
  gridDataSource: any = {
    data: [],
    total: 0
  }
  validationErrors: any = [];
  format: string = 'n2';
  popupLoadingData: any;
  popupSavingData: any;

  id: number;
  laDichVuKham: boolean = null;
  gridColumns: any[] = [];
  isCreate: boolean = false;
  title: string = "";
  header: string = "";
  HopDongKhamId: number;
  IsHopDongKham: boolean = false;
  IsCopy: boolean = false;
  IsKetThucHopDong: boolean = false;
  disabled: boolean = false;
  groups: GroupDescriptor[] = [{ field: 'TenNhom', dir: null }];
  // groups: GroupDescriptor[] = [{ field: 'TenNhom' }];

  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  @ViewChild('gridDichVu', { static: true }) gridDichVu: GridComponent;

  // @ViewChild('multiselectNoiThucHien', { static: true }) multiselectNoiThucHien: MultiselectComponent;
  @ViewChild('multiselectNoiThucHien', { read: MultiselectComponent, static: false }) multiselectNoiThucHien: MultiselectComponent;
  @ViewChild('comboBoxDichVu', { read: ComboboxComponent, static: false }) comboBoxDichVu: ComboboxComponent;


  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('tenDichVuTemplate', { static: true }) tenDichVuTemplate: TemplateRef<any>;
  @ViewChild('soLanTemplate', { static: true }) soLanTemplate: TemplateRef<any>;
  @ViewChild('donGiaBenhVienTemplate', { static: true }) donGiaBenhVienTemplate: TemplateRef<any>;
  @ViewChild('donGiaUuDaiTemplate', { static: true }) donGiaUuDaiTemplate: TemplateRef<any>;
  @ViewChild('donGiaChuaUuDaiTemplate', { static: true }) donGiaChuaUuDaiTemplate: TemplateRef<any>;
  @ViewChild('soTuoiTemplate', { static: true }) soTuoiTemplate: TemplateRef<any>;
  @ViewChild('dvKhamKetLuanTemplate', { static: true }) dvKhamKetLuanTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private location: Location,
    private ref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.documentType = DocumentType.KhamDoanGoiKhamSucKhoe;
    this.dichVuStringId = JSON.stringify(this.keyIdStringGoiDichVuKhamSucKhoeVo);
    this.route.queryParams.subscribe(param => {
      // console.log('param', param);
      this.id = param['Id'];
      this.HopDongKhamId = param['HopDongKhamId'];
      this.IsHopDongKham = this.HopDongKhamId != undefined && this.HopDongKhamId != null;
      this.IsCopy = param['IsCopy'] == 'true';
      this.khamSucKhoeDoan.IsCopy = this.IsCopy;
    });
    this.id = (this.id === undefined || this.id === null) ? 0 : this.id;

    if (this.id == 0) {
      this.isCreate = true;
      this.title = "Thêm gói khám chung  sức khỏe";
      this.header = "Thêm Gói Khám chung sức Khỏe";
    }
    else {
      this.title = "Chi tiết gói khám chung sức khỏe";
      this.header = "Chi Tiết gói khám chung Sức Khỏe";
      this.getById(this.id);
    }

    this.IsHopDongKham = false;// this.data.IsHopDongKham == true;
    this.IsKetThucHopDong = false; // cần cập nhật lại: sẽ get từ api
    this.dichVuKhamSucKhoeDoan.HinhThucKhamBenh = 1;

    //==============================hợp đồng khám qua bên gói khám======================================================      
    if (this.dataKhamDoan != undefined && this.dataKhamDoan != null && this.dataKhamDoan.LaHopDongKhamSucKhoe) {
      this.id = this.dataKhamDoan.GoiKhamChungId;
      if (this.dataKhamDoan.IsCreatedHopDongKhamSucKhoe) {
        this.isCreate = true;
        this.title = "Thêm gói khám sức khỏe";
        this.header = "Thêm Gói Khám Sức Khỏe";
      }
      else {
        this.title = "Chi tiết gói khám sức khỏe";
        this.header = "Chi Tiết Gói Khám Sức Khỏe";
        this.getById(this.dataKhamDoan.GoiKhamChungId);
      }
    }

    this.gridColumns = [
      { Field: "TenNhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDichVuKyThuatBenhVien", Title: "Tên dịch vụ", Width: 120, Template: this.tenDichVuTemplate },
      { Field: "NoiThucHienString", Title: "Nơi thực hiện", Width: 70, ShowTooltip: true },
      { Field: "LoaiGia", Title: "Loại giá", Width: 50 },
      { Field: "SoLan", Title: "SL", Width: 30, Template: this.soLanTemplate },
      { Field: "DonGiaBenhVien", Title: "Đơn giá BV", Width: 90, Template: this.donGiaBenhVienTemplate },
      { Field: "DonGiaUuDai", Title: "ĐG Ưu đãi", Width: 90, Template: this.donGiaUuDaiTemplate },
      { Field: "DonGiaChuaUuDai", Title: "ĐG Chưa ưu đãi", Width: 90, Template: this.donGiaChuaUuDaiTemplate },
      { Field: "GioiTinh", Title: "Giới tính", Width: 60 },
      { Field: "MangThai", Title: "Mang thai", Width: 60 },
      { Field: "TinhTrangHonNhan", Title: "Tình trạng hôn nhân", Width: 100 },
      { Field: "SoTuoiDisplay", Title: "Số tuổi", Width: 60 },
      { Field: "Action", Title: "", Width: 40, Template: this.actionTemplate }
    ]
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

  showPopupSavingData() {
    this.popupSavingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closePopupSavingData() {
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }


  gioiTinhNuChange(event) {
    if (event == false) {
      this.dichVuKhamSucKhoeDoan.CoMangThai = null;
      this.dichVuKhamSucKhoeDoan.KhongMangThai = null;
    }
  }

  mangThaiChange(event, text) {
    if (text == 'Co') {
      if (event == true) {
        this.dichVuKhamSucKhoeDoan.KhongMangThai = null;
      }
    } else {
      if (event == true) {
        this.dichVuKhamSucKhoeDoan.CoMangThai = null;
      }
    }
  }

  lapGDChange(event, text) {
    if (text == 'Co') {
      if (event == true) {
        this.dichVuKhamSucKhoeDoan.ChuaLapGiaDinh = null;
      }
    } else {
      if (event == true) {
        this.dichVuKhamSucKhoeDoan.DaLapGiaDinh = null;
      }
    }
  }


  loaiGiaChange(event, text) {
    this.dichVuStringId = null;
    if (text == 'dichvu') {
      this.validationErrors = [];
      if (event != undefined && event != null) {

        //Update 29/11/2021
        let KeyIdString = JSON.parse(event.KeyId);
        this.dichVuKhamBenhBvId = KeyIdString.DichVuId;
        if (KeyIdString.Loai == 1) {
          this.laDichVuKham = true;
        } else {
          this.laDichVuKham = false;
          this.dichVuKhamSucKhoeDoan.SoLan = 1;
        }
        this.keyIdStringGoiDichVuKhamSucKhoeVo.DichVuId = KeyIdString.DichVuId;
        this.keyIdStringGoiDichVuKhamSucKhoeVo.Loai = KeyIdString.Loai;
        this.dichVuStringId = JSON.stringify(this.keyIdStringGoiDichVuKhamSucKhoeVo);
        // end
        this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVienCha = event.MaNhomDichVuBenhVienCha;
        this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVien = event.MaNhomDichVuBenhVien;
        this.dichVuKhamSucKhoeDoan.TenDichVuKyThuatBenhVien = event.Ten;
        this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds = [];
        this.dichVuKhamSucKhoeDoan.ChuyenKhoaKhamSucKhoe = event.ChuyenKhoaKhamSucKhoe;
      }
      else {
        this.dichVuKhamBenhBvId = null;
        this.dichVuKhamSucKhoeDoan.DonGiaBenhVien = null;
        this.dichVuKhamSucKhoeDoan.TenDichVuKyThuatBenhVien = null;
        this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVien = null;
        this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVienCha = null;
        this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds = [];
        this.laDichVuKham = null;

        //Update 29/11/2021
        this.keyIdStringGoiDichVuKhamSucKhoeVo.DichVuId = 0;
        this.keyIdStringGoiDichVuKhamSucKhoeVo.Loai = 1;
        this.dichVuStringId = JSON.stringify(this.keyIdStringGoiDichVuKhamSucKhoeVo);
      }
    }

    if (text == 'gia') {
      if (event != undefined && event != null) {
        this.nhomGiaDichVuKhamBenhBenhVienId = event;
      }
      else {
        this.nhomGiaDichVuKhamBenhBenhVienId = null;
      }
    }

    if (this.dichVuKhamBenhBvId != null && this.nhomGiaDichVuKhamBenhBenhVienId != null) {
      let obj = {
        DichVuKhamBenhHoacKyThuatBenhVienId: this.dichVuKhamBenhBvId,
        NhomGiaDichVuKhamBenhHoacKyThuatBenhVienId: this.nhomGiaDichVuKhamBenhBenhVienId,
        LaDichVuKham: this.laDichVuKham
      }
      this.apiService.post<any>("KhamDoan/GetDonGiaBenhVien", obj).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.dichVuKhamSucKhoeDoan.DonGiaBenhVien = resultData;
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

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.themDichVu();
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }

  changeHinhThucKhamBenh() {
    this.validationErrors = [];
    this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds = [];
  }

  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }

  getById(id: number) {
    //IsCopy
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.showPopupLoadingData();
      self.apiService.get<any>("KhamDoan/GetGoiKhamSucKhoeDoanChung?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            resultData.GoiKhamChungSucKhoeDichVuDichVuKyThuats = [];
            resultData.GoiKhamChungSucKhoeDichVuKhamBenhs = [];
            self.khamSucKhoeDoan = resultData;
            if (self.IsCopy == true) {
              self.khamSucKhoeDoan.CoSuDungGoiChung = false;
              self.disabled = false;
            }
            else {
              if (self.khamSucKhoeDoan.CoSuDungGoiChung == true) {
                self.disabled = true;
              }
              else {
                self.disabled = false;
              }
            }
            self.closePopupLoadingData();
            console.log("data: ", resultData)
            this.lstDichVuKhamSucKhoeDoanGrid = [];
            resultData.DichVuKhamSucKhoeDoans.forEach(element => {
              this.lstDichVuKhamSucKhoeDoanGrid.push(element)
            });
            this.setValueForGridDichVu();
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingData();
        });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  huyDichVu() {
    this.validationErrors = [];
    this.ref.detectChanges();
    // this.dichVuKhamSucKhoeDoan = new DichVuKhamSucKhoeDoanChungViewModel();
    this.dichVuKhamSucKhoeDoan.Nhom = null;
    this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVien = null;
    this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVienCha = null;
    this.dichVuKhamSucKhoeDoan.TenNhom = null;
    this.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId = null;
    this.dichVuKhamSucKhoeDoan.TenDichVuKyThuatBenhVien = null;
    this.dichVuKhamSucKhoeDoan.DonGiaBenhVien = null;
    this.dichVuKhamSucKhoeDoan.DonGiaUuDai = 0;
    this.dichVuKhamSucKhoeDoan.DonGiaChuaUuDai = 0;
    this.dichVuKhamSucKhoeDoan.HinhThucKhamBenh = 1;
    this.dichVuKhamSucKhoeDoan.GioiTinhNam = null;
    this.dichVuKhamSucKhoeDoan.GioiTinhNu = null;
    this.dichVuKhamSucKhoeDoan.CoMangThai = null;
    this.dichVuKhamSucKhoeDoan.KhongMangThai = null;
    this.dichVuKhamSucKhoeDoan.DaLapGiaDinh = null;
    this.dichVuKhamSucKhoeDoan.ChuaLapGiaDinh = null;
    this.dichVuKhamSucKhoeDoan.SoTuoiTu = null;
    this.dichVuKhamSucKhoeDoan.SoTuoiDen = null;
    this.dichVuKhamSucKhoeDoan.SoLan = 1;
    this.dichVuKhamSucKhoeDoan.NhomGiaDichVuKyThuatBenhVienId = 1;
    this.dichVuKhamSucKhoeDoan.SoTuoiDisplay = null;
    this.dichVuKhamSucKhoeDoan.ChuyenKhoaKhamSucKhoe = null;
    this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds = [];
    this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHiens = new Array<GoiKhamSucKhoeNoiThucHienChungViewModel>();
    this.nhomGiaDichVuKhamBenhBenhVienId = this.dichVuKhamSucKhoeDoan.NhomGiaDichVuKyThuatBenhVienId;
    this.laDichVuKham = null;
    this.dichVuKhamBenhBvId = null;
    this.isUpdate = false;
    this.rowIndex = null;
    this.dataEdit = null;
    this.laDichVuKham = null;
  }

  // dichVuKhamBenhVaKyThuatIds() {
  //   this.dichVuKhamSucKhoeDoan.DichVuKhamBenhVaKyThuatIds = new Array<number>();
  //   this.lstDichVuKhamSucKhoeDoanGrid.forEach(element => {
  //     this.dichVuKhamSucKhoeDoan.DichVuKhamBenhVaKyThuatIds.push(element.DichVuKyThuatBenhVienId);
  //   });
  // }

  setValueForGridDichVu() {
    this.gridDataSource = {
      data: this.lstDichVuKhamSucKhoeDoanGrid,
      total: this.lstDichVuKhamSucKhoeDoanGrid.length
    }
    // this.dichVuKhamBenhVaKyThuatIds();
    this.gridDichVu.gridDataSource = this.gridDataSource;
    this.gridDichVu.setDataSource();
    this.pushDataDichVu();
  }


  pushDataDichVu() {
    this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans = new Array<DichVuKhamSucKhoeDoanChungViewModel>();
    this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans.forEach(element => {
      element.GoiKhamSucKhoeChungNoiThucHienIds = new Array<number>();
      element.GoiKhamSucKhoeChungNoiThucHiens = new Array<GoiKhamSucKhoeNoiThucHienChungViewModel>();
    });
    this.lstDichVuKhamSucKhoeDoanGrid.forEach(obj => {
      let model = new DichVuKhamSucKhoeDoanChungViewModel();
      model.Id = obj.Id;
      model.DichVuKyThuatBenhVienId = obj.DichVuKyThuatBenhVienId;
      model.TenDichVuKyThuatBenhVien = obj.TenDichVuKyThuatBenhVien;
      model.GoiKhamSucKhoeChungNoiThucHienIds = obj.GoiKhamSucKhoeChungNoiThucHienIds;
      model.NhomGiaDichVuKyThuatBenhVienId = obj.NhomGiaDichVuKyThuatBenhVienId;
      model.DonGiaBenhVien = obj.DonGiaBenhVien;
      model.DonGiaUuDai = obj.DonGiaUuDai;
      model.DonGiaChuaUuDai = obj.DonGiaChuaUuDai;
      model.HinhThucKhamBenh = obj.HinhThucKhamBenh;
      model.GioiTinhNam = obj.GioiTinhNam;
      model.GioiTinhNu = obj.GioiTinhNu;
      model.CoMangThai = obj.CoMangThai;
      model.KhongMangThai = obj.KhongMangThai;
      model.DaLapGiaDinh = obj.DaLapGiaDinh;
      model.ChuaLapGiaDinh = obj.ChuaLapGiaDinh;
      model.SoTuoiTu = obj.SoTuoiTu;
      model.SoTuoiDen = obj.SoTuoiDen;
      model.Loai = obj.Loai;
      model.SoLan = obj.SoLan;
      model.LaDichVuKham = obj.LaDichVuKham;
      model.Nhom = obj.Nhom;
      model.ChuyenKhoaKhamSucKhoe = obj.ChuyenKhoaKhamSucKhoe;
      model.GoiKhamSucKhoeChungNoiThucHienIds.forEach(element => {
        let GoiKhamChung = new GoiKhamSucKhoeNoiThucHienChungViewModel();
        GoiKhamChung.PhongBenhVienId = element;
        model.GoiKhamSucKhoeChungNoiThucHiens.push(GoiKhamChung);
      });
      this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans.push(model);
      this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHiens = new Array<GoiKhamSucKhoeNoiThucHienChungViewModel>();
      //console.log("this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans: ", this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans)
    });
    // console.log("data luu: ", this.khamSucKhoeDoan)

  }

  themDichVu() {
    // console.log("dichVuKhamSucKhoeDoan.GoiKhamChungSucKhoeNoiThucHienIds: ", this.dichVuKhamSucKhoeDoan.GoiKhamChungSucKhoeNoiThucHienIds)
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHiens != []) {
      self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHiens = new Array<GoiKhamSucKhoeNoiThucHienChungViewModel>();
    }
    self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds.forEach(element => {
      let GoiKhamChung = new GoiKhamSucKhoeNoiThucHienChungViewModel();
      GoiKhamChung.PhongBenhVienId = element;
      self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHiens.push(GoiKhamChung);
    });
    if (self.laDichVuKham == null) {
      self.laDichVuKham = false;
    }
    let KeyIdString = JSON.parse(self.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId != null ? self.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId.toString() : null);
    self.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId = KeyIdString != null ? KeyIdString.DichVuId : null;
    self.dichVuKhamSucKhoeDoan.LaDichVuKham = self.laDichVuKham;
    // if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
    self.apiService.post<DichVuKhamSucKhoeDoanChungViewModel>("KhamDoan/ThemDichVuKhamDoanChung", self.dichVuKhamSucKhoeDoan).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          self.lstDichVuKhamSucKhoeDoanGrid.push(resultData)
          //Update 29/11/2021
          if (self.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.findIndex(id => id == Number(resultData.DichVuKyThuatBenhVienId)) == -1
            && self.dichVuKhamSucKhoeDoan.LaDichVuKham) {
            self.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.push(Number(resultData.DichVuKyThuatBenhVienId));
          }
          if (self.dichVuKhamSucKhoeDoan.DichVuKyThuatIds.findIndex(id => id == Number(resultData.DichVuKyThuatBenhVienId)) == -1
            && !self.dichVuKhamSucKhoeDoan.LaDichVuKham) {
            self.dichVuKhamSucKhoeDoan.DichVuKyThuatIds.push(Number(resultData.DichVuKyThuatBenhVienId));
          }
          self.setValueForGridDichVu();
          self.huyDichVu();
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
    // }
    // else {
    //   self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    // }
  }

  getDichVuGrid(dataItem: any) {
    this.dichVuStringId = null;
    this.huyDichVu();
    this.dataEdit = dataItem;
    this.validationErrors = [];
    this.ref.detectChanges();
    this.isUpdate = true;
    this.laDichVuKham = dataItem.LaDichVuKham;
    this.dichVuKhamBenhBvId = dataItem.DichVuKyThuatBenhVienId;
    this.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId = dataItem.DichVuKyThuatBenhVienId;
    this.dichVuKhamSucKhoeDoan.TenDichVuKyThuatBenhVien = dataItem.TenDichVuKyThuatBenhVien;
    this.dichVuKhamSucKhoeDoan.NhomGiaDichVuKyThuatBenhVienId = dataItem.NhomGiaDichVuKyThuatBenhVienId;
    this.dichVuKhamSucKhoeDoan.DonGiaBenhVien = dataItem.DonGiaBenhVien;
    this.dichVuKhamSucKhoeDoan.DonGiaUuDai = dataItem.DonGiaUuDai;
    this.dichVuKhamSucKhoeDoan.DonGiaChuaUuDai = dataItem.DonGiaChuaUuDai;
    this.dichVuKhamSucKhoeDoan.HinhThucKhamBenh = dataItem.HinhThucKhamBenh;
    this.dichVuKhamSucKhoeDoan.SoLan = dataItem.SoLan;
    if (this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds != []) {
      this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds = [];
    }
    dataItem.GoiKhamSucKhoeChungNoiThucHienIds.forEach(element => {
      this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds.push(element);
    });
    this.dichVuKhamSucKhoeDoan.GioiTinhNam = dataItem.GioiTinhNam;
    this.dichVuKhamSucKhoeDoan.GioiTinhNu = dataItem.GioiTinhNu;
    this.dichVuKhamSucKhoeDoan.CoMangThai = dataItem.CoMangThai;
    this.dichVuKhamSucKhoeDoan.KhongMangThai = dataItem.KhongMangThai;
    this.dichVuKhamSucKhoeDoan.DaLapGiaDinh = dataItem.DaLapGiaDinh;
    this.dichVuKhamSucKhoeDoan.ChuaLapGiaDinh = dataItem.ChuaLapGiaDinh;
    this.dichVuKhamSucKhoeDoan.SoTuoiTu = dataItem.SoTuoiTu;
    this.dichVuKhamSucKhoeDoan.SoTuoiDen = dataItem.SoTuoiDen;
    // console.log("this.dichVuKhamSucKhoeDoan: ", this.dichVuKhamSucKhoeDoan);

    // Update 29/11/2021
    this.keyIdStringGoiDichVuKhamSucKhoeVo.DichVuId = dataItem.DichVuKyThuatBenhVienId;
    this.keyIdStringGoiDichVuKhamSucKhoeVo.Loai = this.laDichVuKham == true ? 1 : 2;
    this.dichVuStringId = JSON.stringify(this.keyIdStringGoiDichVuKhamSucKhoeVo);
    this.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId = this.dichVuStringId;

    if (this.multiselectNoiThucHien != undefined) {
      this.multiselectNoiThucHien.queryInfo = new MultiselectQueryInfo();
      if (this.dichVuKhamSucKhoeDoan.HinhThucKhamBenh == 1) {
        this.multiselectNoiThucHien.queryInfo.ParameterDependencies =
          "{LaDichVuKham:" + this.laDichVuKham + ",HinhThucKhamBenh: " + 1 + ", DichVuStringId:"
          + this.dichVuStringId + ", Take: 50}";

        this.multiselectNoiThucHien.getDataForLookup();
      } else {
        this.multiselectNoiThucHien.queryInfo.ParameterDependencies =
          "{LaDichVuKham:" + this.laDichVuKham + ",HinhThucKhamBenh: " + 2 + ", DichVuStringId:"
          + this.dichVuStringId + ", HopDongKhamSucKhoeId:" + ", Take: 50}";
        this.multiselectNoiThucHien.getDataForLookup();
      }
    }

  }

  capNhatDichVu() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    self.dichVuStringId = null;
    self.rowIndex = self.lstDichVuKhamSucKhoeDoanGrid.findIndex((x: any) => x == self.dataEdit);
    let dataUpdate = self.lstDichVuKhamSucKhoeDoanGrid[self.rowIndex];
    dataUpdate.NhomGiaDichVuKyThuatBenhVienId = self.dichVuKhamSucKhoeDoan.NhomGiaDichVuKyThuatBenhVienId;
    dataUpdate.DonGiaBenhVien = self.dichVuKhamSucKhoeDoan.DonGiaBenhVien;
    dataUpdate.DonGiaUuDai = self.dichVuKhamSucKhoeDoan.DonGiaUuDai;
    dataUpdate.DonGiaChuaUuDai = self.dichVuKhamSucKhoeDoan.DonGiaChuaUuDai;
    dataUpdate.HinhThucKhamBenh = self.dichVuKhamSucKhoeDoan.HinhThucKhamBenh;
    dataUpdate.GioiTinhNam = self.dichVuKhamSucKhoeDoan.GioiTinhNam;
    dataUpdate.GioiTinhNu = self.dichVuKhamSucKhoeDoan.GioiTinhNu;
    dataUpdate.CoMangThai = self.dichVuKhamSucKhoeDoan.CoMangThai;
    dataUpdate.KhongMangThai = self.dichVuKhamSucKhoeDoan.KhongMangThai;
    dataUpdate.DaLapGiaDinh = self.dichVuKhamSucKhoeDoan.DaLapGiaDinh;
    dataUpdate.ChuaLapGiaDinh = self.dichVuKhamSucKhoeDoan.ChuaLapGiaDinh;
    dataUpdate.SoTuoiTu = self.dichVuKhamSucKhoeDoan.SoTuoiTu;
    dataUpdate.SoTuoiDen = self.dichVuKhamSucKhoeDoan.SoTuoiDen;
    dataUpdate.SoLan = self.dichVuKhamSucKhoeDoan.SoLan;
    dataUpdate.NoiThucHienString = null;
    if (dataUpdate.GoiKhamSucKhoeChungNoiThucHienIds != []) {
      dataUpdate.GoiKhamSucKhoeChungNoiThucHienIds = [];
    }

    self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds.forEach(element => {
      dataUpdate.GoiKhamSucKhoeChungNoiThucHienIds.push(element);
      let GoiKhamChung = new GoiKhamSucKhoeNoiThucHienChungViewModel();
      GoiKhamChung.PhongBenhVienId = element;
      self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHiens.push(GoiKhamChung);
      dataUpdate.GoiKhamSucKhoeChungNoiThucHiens = self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHiens;
    });

    this.keyIdStringGoiDichVuKhamSucKhoeVo.DichVuId = Number(dataUpdate.DichVuKyThuatBenhVienId);
    this.keyIdStringGoiDichVuKhamSucKhoeVo.Loai = this.laDichVuKham == true ? 1 : 2;
    this.dichVuStringId = JSON.stringify(this.keyIdStringGoiDichVuKhamSucKhoeVo);
    this.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId = this.dichVuStringId;

    if (self.multiselectNoiThucHien != undefined) {
      self.multiselectNoiThucHien.queryInfo = new MultiselectQueryInfo();
      if (self.dichVuKhamSucKhoeDoan.HinhThucKhamBenh == 1) {
        self.multiselectNoiThucHien.queryInfo.ParameterDependencies =
          "{LaDichVuKham:" + self.laDichVuKham + ",HinhThucKhamBenh: " + 1 + ", DichVuStringId:"
          + this.dichVuStringId + ", Take: 50}";
        self.multiselectNoiThucHien.getDataForLookup();
      } else {
        self.multiselectNoiThucHien.queryInfo.ParameterDependencies =
          "{LaDichVuKham:" + self.laDichVuKham + ",HinhThucKhamBenh: " + 2 + ", DichVuStringId:"
          + this.dichVuStringId + ", Take: 50}";
        self.multiselectNoiThucHien.getDataForLookup();
      }
    }
    self.apiService.post<DichVuKhamSucKhoeDoanChungViewModel>("KhamDoan/CapNhatDichVuKhamDoanChung", dataUpdate).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          self.lstDichVuKhamSucKhoeDoanGrid[self.rowIndex] = resultData;
          self.setValueForGridDichVu();
          self.huyDichVu();
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }

  xoaDichVu(dataItem: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        if (dataItem.Loai == 1) {
          this.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.splice(this.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.findIndex((x: any) => x == dataItem.DichVuKyThuatBenhVienId), 1);
        }
        else {
          this.dichVuKhamSucKhoeDoan.DichVuKyThuatIds.splice(this.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.findIndex((x: any) => x == dataItem.DichVuKyThuatBenhVienId), 1);
        }
        this.lstDichVuKhamSucKhoeDoanGrid.splice(this.lstDichVuKhamSucKhoeDoanGrid.findIndex((x: any) => x == dataItem), 1);
        this.validationErrors = [];
        this.setValueForGridDichVu();
      }
    });

  }

  Luu() {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn lưu gói khám sức khỏe đoàn này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.validationErrors = [];
        self.ref.detectChanges();
        if (this.id != null && this.id != 0 && !this.IsCopy) {
          if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            self.showPopupSavingData();

            self.khamSucKhoeDoan.GoiKhamSucKhoeChungDichVuKhamBenhs = [];
            self.khamSucKhoeDoan.GoiKhamSucKhoeChungDichVuDichVuKyThuats = [];

            self.apiService.post<any>("KhamDoan/CapNhatGoiKhamSucKhoeDoanChung", self.khamSucKhoeDoan).subscribe(
              () => {
                if (this.dataKhamDoan != undefined && this.dataKhamDoan != null) {
                  this.afterChangedFromHopDongKham.emit(true);
                }
                else {
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  this.router.navigate(['/kham-doan/goi-kham']);
                  // this.location.back();
                }
                self.closePopupSavingData();
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
                self.closePopupSavingData();
              });
          }
          else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
        } else {
          if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            self.showPopupSavingData();

            if (this.IsCopy) {
              self.khamSucKhoeDoan.Id = 0;
              self.khamSucKhoeDoan.GoiKhamSucKhoeChungDichVuKhamBenhs = [];
              self.khamSucKhoeDoan.GoiKhamSucKhoeChungDichVuDichVuKyThuats = [];
            }
            self.apiService.post<any>("KhamDoan/ThemGoiKhamSucKhoeDoanChung", self.khamSucKhoeDoan).subscribe(
              () => {
                if (this.dataKhamDoan != undefined && this.dataKhamDoan != null) {
                  this.afterChangedFromHopDongKham.emit(true);
                } else {
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  this.router.navigate(['/kham-doan/goi-kham']);
                }
                self.closePopupSavingData();
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
                self.closePopupSavingData();
              });
          }
          else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
        }
      }
    })

  }

  checkGoiChung(event: any) {
    this.khamSucKhoeDoan.GoiDichVuPhatSinh = false;
    this.khamSucKhoeDoan.GoiChung = event;
  }

  checkGoiDichVuPhatSinh(event: any) {
    this.khamSucKhoeDoan.GoiChung = false;
    this.khamSucKhoeDoan.GoiDichVuPhatSinh = event;
  }

  quayLai() {
    if (this.dataKhamDoan != undefined && this.dataKhamDoan != null) {
      this.dialog.closeAll();
    } else {
      this.location.back();
    }
  }
}
