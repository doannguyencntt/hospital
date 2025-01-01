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
import { DichVuKhamSucKhoeDoanViewModel, GoiKhamChungViewModel, GoiKhamSucKhoeNoiThucHienViewModel, KeyIdStringGoiDichVuKhamSucKhoeVo, KhamSucKhoeDoanChungViewModel, KhamSucKhoeDoanViewModel } from '../kham-doan-goi-kham-suc-khoe.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { MultiselectComponent } from 'src/app/shared/component/dropdowns/multiselect/multiselect.component';
import { MultiselectQueryInfo } from 'src/app/shared/models/common.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { DichVuKhamSucKhoeDoanChungViewModel } from '../../kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe.model';


@Component({
  selector: 'app-kham-doan-goi-kham-suc-chung.',
  templateUrl: './kham-doan-goi-kham-suc-chung.component.html',
  styleUrls: ['./kham-doan-goi-kham-suc-chung.component.scss']
})

export class KhamDoanGoiKhamSucKhoeChungComponent implements OnInit {
  @Input() dataKhamDoan: any;
  @Output() afterChangedFromHopDongKham = new EventEmitter<any>();

  khamSucKhoeDoan: KhamSucKhoeDoanChungViewModel = new KhamSucKhoeDoanChungViewModel();
  dichVuKhamSucKhoeDoan: DichVuKhamSucKhoeDoanViewModel = new DichVuKhamSucKhoeDoanViewModel();
  goiKhamChungViewModel : GoiKhamChungViewModel = new GoiKhamChungViewModel();
  keyIdStringGoiDichVuKhamSucKhoeVo: KeyIdStringGoiDichVuKhamSucKhoeVo = new KeyIdStringGoiDichVuKhamSucKhoeVo();
  lstDichVuKhamSucKhoeDoanGrid: DichVuKhamSucKhoeDoanChungViewModel[] = [];

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
    this.id = (this.id === undefined || this.id === null) ? 0 : this.id;
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

  goiKhamChungChange(event: any) {
    if (event != undefined && event != null) {
      this.chonGoiKhamChung(event);
    }
  }

  chonGoiKhamChung(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      // self.showPopupLoadingData();
      self.apiService.get<any>("KhamDoan/GetGoiKhamSucKhoeDoanChung?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            resultData.GoiKhamSucKhoeDichVuDichVuKyThuats = [];
            resultData.GoiKhamSucKhoeDichVuKhamBenhs = [];
            self.khamSucKhoeDoan = resultData;
            this.lstDichVuKhamSucKhoeDoanGrid = [];
            resultData.DichVuKhamSucKhoeDoans.forEach(element => {
              this.lstDichVuKhamSucKhoeDoanGrid.push(element)
            });
            this.setValueForGridDichVu();
            // self.closePopupLoadingData();
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
    this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans = new Array<DichVuKhamSucKhoeDoanViewModel>();
    this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans.forEach(element => {
      element.GoiKhamSucKhoeNoiThucHienIds = new Array<number>();
      element.GoiKhamSucKhoeNoiThucHiens = new Array<GoiKhamSucKhoeNoiThucHienViewModel>();
    });

    this.lstDichVuKhamSucKhoeDoanGrid.forEach(obj => {
      let model = new DichVuKhamSucKhoeDoanViewModel();
      model.Id = obj.Id;
      model.DichVuKyThuatBenhVienId = obj.DichVuKyThuatBenhVienId;
      model.TenDichVuKyThuatBenhVien = obj.TenDichVuKyThuatBenhVien;
      model.GoiKhamSucKhoeNoiThucHienIds = obj.GoiKhamSucKhoeChungNoiThucHienIds;
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
      model.GoiKhamSucKhoeNoiThucHienIds.forEach(element => {
        let goiKham = new GoiKhamSucKhoeNoiThucHienViewModel();
        goiKham.PhongBenhVienId = element;
        model.GoiKhamSucKhoeNoiThucHiens.push(goiKham);
      });
      this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans.push(model);
      this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHiens = new Array<GoiKhamSucKhoeNoiThucHienViewModel>();
      //console.log("this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans: ", this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans)
    });
  }

  getDichVuGrid(dataItem: any) {
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
    if (this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds != []) {
      this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds = [];
    }
    dataItem.GoiKhamSucKhoeNoiThucHiens.forEach(element => {
      this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds.push(element.PhongBenhVienId);
    });
    this.dichVuKhamSucKhoeDoan.GioiTinhNam = dataItem.GioiTinhNam;
    this.dichVuKhamSucKhoeDoan.GioiTinhNu = dataItem.GioiTinhNu;
    this.dichVuKhamSucKhoeDoan.CoMangThai = dataItem.CoMangThai;
    this.dichVuKhamSucKhoeDoan.KhongMangThai = dataItem.KhongMangThai;
    this.dichVuKhamSucKhoeDoan.DaLapGiaDinh = dataItem.DaLapGiaDinh;
    this.dichVuKhamSucKhoeDoan.ChuaLapGiaDinh = dataItem.ChuaLapGiaDinh;
    this.dichVuKhamSucKhoeDoan.SoTuoiTu = dataItem.SoTuoiTu;
    this.dichVuKhamSucKhoeDoan.SoTuoiDen = dataItem.SoTuoiDen;
  }

  Luu() {
    var self = this;
    //câp nn nhập thông lưu gói khám
    self.khamSucKhoeDoan.CongTyKhamSucKhoeId = this.dataKhamDoan.CongTyKhamSucKhoeId;
    self.khamSucKhoeDoan.TenCongTy = this.dataKhamDoan.TenCongTyKhamSucKhoe;
    self.khamSucKhoeDoan.HopDongKhamSucKhoeId = this.dataKhamDoan.HopDongKhamSucKhoeId;
    self.khamSucKhoeDoan.SoHopDong = this.dataKhamDoan.TenHopDongKhamSucKhoe;
    self.khamSucKhoeDoan.NgayHieuLuc = this.dataKhamDoan.NgayHieuLuc;
    self.khamSucKhoeDoan.NgayKetThuc = this.dataKhamDoan.NgayKetThuc;

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
            self.apiService.post<any>("KhamDoan/CapNhatGoiKhamSucKhoeDoan", self.khamSucKhoeDoan).subscribe(
              () => {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                if (this.dataKhamDoan != undefined && this.dataKhamDoan != null) {
                  this.afterChangedFromHopDongKham.emit(true);
                }
                else {                 
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
            }
            self.khamSucKhoeDoan.Id = 0;
            self.apiService.post<any>("KhamDoan/ThemGoiKhamSucKhoeDoan", self.khamSucKhoeDoan).subscribe(
              () => {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                if (this.dataKhamDoan != undefined && this.dataKhamDoan != null) {
                  this.afterChangedFromHopDongKham.emit(true);
                } else {                
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

  quayLai() {
    if (this.dataKhamDoan != undefined && this.dataKhamDoan != null) {
      this.dialog.closeAll();
    } else {
      this.location.back();
    }
  }
}
