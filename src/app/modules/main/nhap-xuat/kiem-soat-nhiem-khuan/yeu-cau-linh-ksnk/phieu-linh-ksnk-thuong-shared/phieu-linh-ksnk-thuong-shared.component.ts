import { Component, OnInit, Input, ViewChild, TemplateRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icWarning from '@iconify/icons-ic/warning';
import { KSNKGridViewModelValidator, YeuCauLinhKSNK, YeuCauLinhKSNKChiTiet } from '../yeu-cau-linh-ksnk.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-phieu-linh-ksnk-thuong-shared',
  templateUrl: './phieu-linh-ksnk-thuong-shared.component.html',
  styleUrls: ['./phieu-linh-ksnk-thuong-shared.component.scss']
})
export class PhieuLinhKSNKThuongSharedComponent implements OnInit {
  yeuCauLinhKSNK: YeuCauLinhKSNK = new YeuCauLinhKSNK();
  KSNKGrid: YeuCauLinhKSNKChiTiet = new YeuCauLinhKSNKChiTiet();
  lstKSNKGrid: YeuCauLinhKSNKChiTiet[] = [];
  dataKSNKGrid: any = null;

  validationErrors: any;
  documentType: DocumentType;
  icDelete = icDelete;
  icEdit = icEdit;
  icWarning = icWarning;
  gridDataSource: any = {
    data: [],
    total: 0
  }
  gridColumns: any[] = [];
  phieuLinhId: number = null;
  isHidden: boolean = false;
  icDisable: any = null;
  isSelectDuocPham: boolean = false;
  duocPhamIds: Array<number> = null;
  groups: GroupDescriptor[] = [{ field: 'TenKhoLinh' }];
  loai :boolean = null;
  disableKhiVaoChiTiet = false;

  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('gridKSNK', { static: true }) gridKSNK: GridComponent;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('slYeuCauTemplate', { static: true }) slYeuCauTemplate: TemplateRef<any>;

  @Input() isDaTao: boolean = false;
  @Input() trangThaiVo: any;
  @Input() validationErrorsLinhThuong: any;
  @Input() isCreate: boolean;
  @Input() isDuyet: boolean = false;
  @Output() hideDuyetbtn: EventEmitter<any> = new EventEmitter<any>();
  @Output() disabledNguoiTaoPhieu: EventEmitter<any> = new EventEmitter<any>();
  @Output() loaiDuocPhamHayVatTu:  EventEmitter<any> = new EventEmitter<any>();
  

  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private dialog: MatDialog,

  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhThuongDuocPham;
    this.yeuCauLinhKSNK = new YeuCauLinhKSNK();
    this.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = new Array<YeuCauLinhKSNKChiTiet>();
    
    const valueChiTiet: boolean = this.route.snapshot.params.valueChiTiet;
    if (valueChiTiet !== undefined && valueChiTiet !== null) {
      
      this.disableKhiVaoChiTiet = true;
     
     }
    const loaiDPVT: boolean = this.route.snapshot.params.value;
    if (loaiDPVT != undefined && loaiDPVT != null) {
     this.loai =loaiDPVT;
    }
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.yeuCauLinhKSNK.LaNguoiTaoPhieu = false;
      this.getById(id);
      this.phieuLinhId = id;
    }
    this.getCurrentUser();
    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 30, Template: this.STTTemplate },
      {
        Field: 'TenKhoLinh',
        Title: '',
        Width: 150,
        Sortable: true,
        Hidden: true,
        TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Nhom", Title: "Loại", Width: 80, ShowTooltip: true },
      { Field: "Ma", Title: "Mã", Width: 80, ShowTooltip: true },
      { Field: "Ten", Title: "DP/VT/KSNk", Width: 120, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 100 },
      
      { Field: "NhaSX", Title: "Hãng SX", Width: 200 },
      { Field: "NuocSX", Title: "Nước SX", Width: 120 },
      { Field: "SLTon", Title: "SL Tồn", Width: 120, Hidden: !this.isCreate },
      // { Field: "SoLuongCoTheXuat", Title: "SL Có thể xuất", Width: 120, Hidden: this.isCreate },
      { Field: "SLYeuCau", Title: "SL Yêu Cầu", Width: 120, Template: this.slYeuCauTemplate },
      { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
    ]
  }

  getCurrentUser() {
    this.KSNKGrid.LoaiVatTu = 1;
    if (this.yeuCauLinhKSNK.LaNguoiTaoPhieu == null) {
      if (this.isCreate) {
        this.yeuCauLinhKSNK.NgayYeuCau = new Date();
      }
      this.apiService.get<any>("YeuCauLinhKSNK/GetCurrentUserKSNK").subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.yeuCauLinhKSNK.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
            this.yeuCauLinhKSNK.HoTenNguoiYeuCau = resultData.HoTen;
          }
        });
    }
  }

  chonKSNK(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.KSNKGrid.Ten = dataItem.Ten;
      this.KSNKGrid.Ma = dataItem.Ma;
      this.KSNKGrid.SLTon = dataItem.SLTon;
      this.KSNKGrid.DVT = dataItem.DVT;
      this.KSNKGrid.NhaSX = dataItem.NhaSanXuat;
      this.KSNKGrid.NuocSX = dataItem.NuocSanXuat;
      this.KSNKGrid.LaVatTuBHYT = dataItem.LaVatTuBHYT;
      this.KSNKGrid.LoaiDuocPhamHayVatTu = dataItem.LoaiDuocPhamHayVatTu;
      

    }
    else {
      this.validationErrors = [];
      this.KSNKGrid.Ten = null;
      this.KSNKGrid.Ma = null;
      this.KSNKGrid.SLTon = null;
      this.KSNKGrid.SLYeuCau = null
      this.KSNKGrid.DVT = null;
      this.KSNKGrid.NhaSX = null;
      this.KSNKGrid.NuocSX = null;
      this.KSNKGrid.LaVatTuBHYT = null;
      this.KSNKGrid.LoaiDuocPhamHayVatTu = null;
    }
  }

  getArrayKSNKBenhVienId() {
    this.KSNKGrid.VatTuBenhViens = new Array<KSNKGridViewModelValidator>();
    this.lstKSNKGrid.forEach(element => {
      let KSNKBenhVien = new KSNKGridViewModelValidator();
      KSNKBenhVien.VatTuBenhVienId = element.VatTuBenhVienId;
      KSNKBenhVien.LaVatTuBHYT = element.LaVatTuBHYT;
      this.KSNKGrid.VatTuBenhViens.push(KSNKBenhVien);
      console.log("data BenhViens: ", this.KSNKGrid.VatTuBenhViens)
        ;
    });
  }

  dangXuLy:boolean=false;
  themKSNK() {
    var self = this;
    //self.getArrayKSNKBenhVienId();
    self.validationErrors = [];
    self.validationErrorsLinhThuong = [];
    self.ref.detectChanges();
    if (self.KSNKGrid.LoaiVatTu == 1) {
      self.KSNKGrid.LaVatTuBHYT = false;
    } else {
      self.KSNKGrid.LaVatTuBHYT = true;
    }
    self.KSNKGrid.TenKhoLinh = this.yeuCauLinhKSNK.TenKhoXuat;
    self.KSNKGrid.KhoXuatId = self.yeuCauLinhKSNK.KhoXuatId;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if(this.dangXuLy)
          return;
      this.dangXuLy=true;
      self.apiService.post<YeuCauLinhKSNKChiTiet>("YeuCauLinhKSNK/ThemLinhThuongKSNKGridVo", self.KSNKGrid).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            self.lstKSNKGrid.push(resultData)
            self.setValueForGridKSNK();
            self.huy();
          }
          self.dangXuLy=false;
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.dangXuLy=false;
        });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  setValueForGridKSNK() {
    //this.lstKSNKGrid = this.lstKSNKGrid.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT|| a.Ten > b.Ten) ? 1 : -1)
    this.gridDataSource = {
      data: this.lstKSNKGrid,
      total: this.lstKSNKGrid.length
    }
    let STT = 1;
    this.lstKSNKGrid.forEach(element => {
      element.STT = STT;
      STT++;
    });
    this.getArrayKSNKBenhVienId();
    this.gridKSNK.gridDataSource = this.gridDataSource;
    this.gridKSNK.setDataSource();
    this.pushDataKSNK();
    console.log("this.list: ", this.lstKSNKGrid);
    if (this.lstKSNKGrid.length > 0) {
      this.hideDuyetbtn.emit(true);
      this.icDisable = true;
    } else {
      this.hideDuyetbtn.emit(false);
      this.icDisable = false;
    }
    //console.log(this.icDisable)
  }
  pushDataKSNK() {
    this.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = new Array<YeuCauLinhKSNKChiTiet>();
    this.lstKSNKGrid.forEach(obj => {
      let model = new YeuCauLinhKSNKChiTiet();
      model.YeuCauLinhVatTuId = obj.YeuCauLinhVatTuId;
      model.VatTuBenhVienId = obj.VatTuBenhVienId;
      model.LaVatTuBHYT = obj.LaVatTuBHYT;
      model.SoLuong = obj.SLYeuCau;
      model.Nhom = obj.Nhom;
      model.SoLuongCoTheXuat = obj.SoLuongCoTheXuat;
      model.STT = obj.STT
      model.SLTon = obj.SLTon;
      model.SLYeuCau = obj.SLYeuCau;
      model.KhoXuatId = obj.KhoXuatId;
      model.LoaiDuocPhamHayVatTu = obj.LoaiDuocPhamHayVatTu;
      model.Id = obj.Id;
      this.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.push(model);
    });

  }

  xoaKSNK(dataItem: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.lstKSNKGrid.splice(this.lstKSNKGrid.findIndex((x: any) => x == dataItem), 1);
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        this.validationErrorsLinhThuong = [];
        this.setValueForGridKSNK();
      }
    });
  }

  huy() {
    this.validationErrors = [];
    this.KSNKGrid.Ten = null;
    this.KSNKGrid.VatTuBenhVienId = null;
    this.KSNKGrid.SLTon = null;
    this.KSNKGrid.SLYeuCau = null
    this.KSNKGrid.DVT = null;
    this.KSNKGrid.NhaSX = null;
    this.KSNKGrid.NuocSX = null;
    this.KSNKGrid.LaVatTuBHYT = null;
    this.KSNKGrid.LoaiDuocPhamHayVatTu  = null;
  }

  clearGridKSNK() {
    this.huy();
    this.lstKSNKGrid = [];
    this.gridDataSource = {
      data: this.lstKSNKGrid,
      total: 0
    }
    this.gridKSNK.gridDataSource = this.gridDataSource;
    this.gridKSNK.setDataSource();
    this.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = [];
  }


  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      let model = {
        YeuCauLinhId :id,
        LoaiDuocPhamHayVatTu:this.loai
      };
      self.apiService.post<YeuCauLinhKSNK>("YeuCauLinhKSNK/GetPhieuLinhThuongKSNK",model).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.yeuCauLinhKSNK = resultData;
            if (this.yeuCauLinhKSNK.LaNguoiTaoPhieu) {
              this.disabledNguoiTaoPhieu.emit(true);
            } else {
              this.disabledNguoiTaoPhieu.emit(false);
            }
            // if (this.yeuCauLinhKSNK.DuocDuyet == null) {
            //   this.isCreate = true;
            // }
            this.lstKSNKGrid = [];
            resultData.YeuCauLinhVatTuChiTiets.forEach(element => {
              this.lstKSNKGrid.push(element)
            });
            //this.getArrayKSNKBenhVienId();
            this.setValueForGridKSNK();

          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
        });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  getSharedData() {
    this.setValueForGridKSNK();
    this.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
      if (element.SoLuongCoTheXuat == undefined || element.SoLuongCoTheXuat == null) {
        element.IsValidator = false;
      }
    });
    return this.yeuCauLinhKSNK;
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.themKSNK();
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }

  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }
}
