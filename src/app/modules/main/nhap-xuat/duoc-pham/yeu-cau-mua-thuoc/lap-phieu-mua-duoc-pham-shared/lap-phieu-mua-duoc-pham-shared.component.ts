import { Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import icWarning from '@iconify/icons-ic/warning';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icInfo from '@iconify/icons-ic/twotone-info';
import icAdd from '@iconify/icons-ic/twotone-add';

import { ThongTinThuocChiTiet, YeuCauMuaThuoc, YeuCauMuaThuocChiTiet, YeuCauMuaThuocChiTietValidator } from '../yeu-cau-mua-thuoc.model';
import { ThemDuocPhamDuTruMuaPopupComponent } from '../them-duoc-pham-du-tru-mua-popup/them-duoc-pham-du-tru-mua-popup.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
@Component({
  selector: 'app-lap-phieu-mua-duoc-pham-shared',
  templateUrl: './lap-phieu-mua-duoc-pham-shared.component.html',
  styleUrls: ['./lap-phieu-mua-duoc-pham-shared.component.scss']
})
export class LapPhieuMuaDuocPhamSharedComponent implements OnInit {
  yeuCauMuaThuoc: YeuCauMuaThuoc;
  duocPhamGrid: ThongTinThuocChiTiet = new ThongTinThuocChiTiet();
  thongTinDuocPham: ThongTinThuocChiTiet = new ThongTinThuocChiTiet();

  validationErrors: any;
  documentType: DocumentType;
  icDelete = icDelete;
  icEdit = icEdit;
  icWarning = icWarning;
  icInfo = icInfo;
  icAdd = icAdd;

  icDisable: any = null;
  isSelectDuocPham: boolean = false;

  gridDataSource: any = {
    data: [],
    total: 0
  }
  gridDataSourceHoaChat: any = {
    data: [],
    total: 0
  }
  gridColumnsThuocVacxin: any[] = [];
  gridColumnsHoaChat: any[] = [];

  dataDuocPhamGrid: any = null;
  lstDuocPhamGrid: ThongTinThuocChiTiet[] = [];
  phieuMuaDuocPhamDuTruId: number = null;

  groups: GroupDescriptor[] = [{ field: 'TenLoaiDuocPham' }];
  @ViewChild('nhomGroupThuocVacxinHeaderTemplate', { static: true }) nhomGroupThuocVacxinHeaderTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHoachatHeaderTemplate', { static: true }) nhomGroupHoachatHeaderTemplate: TemplateRef<any>;

  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('gridDuocPhamThuocVacxin', { static: true }) gridDuocPhamThuocVacxin: GridComponent;
  @ViewChild('gridDuocPhamHoaChat', { static: true }) gridDuocPhamHoaChat: GridComponent;

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  @ViewChild('slDuTruThuocVacxinTemplate', { static: true }) slDuTruThuocVacxinTemplate: TemplateRef<any>;
  @ViewChild('slDuKienThuocVacxinTemplate', { static: true }) slDuKienThuocVacxinTemplate: TemplateRef<any>;

  @ViewChild('slDuTruHoaChatTemplate', { static: true }) slDuTruHoaChatTemplate: TemplateRef<any>;
  @ViewChild('slDuKienHoaChatTemplate', { static: true }) slDuKienHoaChatTemplate: TemplateRef<any>;
  @ViewChild('nhomDieuTriDuPhongTemplate', { static: true }) nhomDieuTriDuPhongTemplate: TemplateRef<any>;
  @ViewChild('ghiChuChiTietThuocVacxinTemplate', { static: true }) ghiChuChiTietThuocVacxinTemplate: TemplateRef<any>;
  @ViewChild('ghiChuChiTietHoaChatTemplate', { static: true }) ghiChuChiTietHoaChatTemplate: TemplateRef<any>;


  @Input() trangThaiVo: any;
  @Input() validationErrorsDuocPham: any;
  @Input() isCreate: boolean;
  @Output() hideGuibtn: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private dialog: MatDialog,

  ) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachYeuCauDuTruMuaDuocPham;
    this.yeuCauMuaThuoc = new YeuCauMuaThuoc();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.phieuMuaDuocPhamDuTruId = id;
    }
    if (this.isCreate) {
      this.getCurrentUser();
    }
    this.gridColumnsThuocVacxin = [
      { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
      // { Field: "TenLoaiDuocPham", Title: "Loại", Width: 60, ShowTooltip: true },
      { Field: "TenLoaiDuocPham", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupThuocVacxinHeaderTemplate },
      { Field: "Ten", Title: "Tên", Width: 100, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 100, ShowTooltip: true },
      { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 100 },
      { Field: "DVT", Title: "ĐVT", Width: 50 },
      { Field: "TenDuongDung", Title: "Đường Dùng", Width: 50 },
      { Field: "NhaSX", Title: "Nhà SX", Width: 50 },
      { Field: "NuocSX", Title: "Nước SX", Width: 50 },
      { Field: "NhomDieuTriDuTru", Title: "Nhóm đ.trị/ d.phòng ", Width: 150, Template: this.nhomDieuTriDuPhongTemplate },
      {
        Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 100
        , Template: this.slDuTruThuocVacxinTemplate
      },
      {
        Field: "SoLuongDuKienSuDungTrongKy", Title: "SL D.Kiến Sử Dụng", Width: 100
        , Template: this.slDuKienThuocVacxinTemplate
      },
      {
        Field: "SoLuongDuTruTruongKhoaDuyet", Title: "t.khoa duyệt", Width: 100,
        Hidden: (this.trangThaiVo != null && !(this.trangThaiVo.IsKhoaDuyet == true || this.trangThaiVo.TrangThai == true || this.trangThaiVo.TrangThai == false))
      },
      { Field: "GhiChu", Title: "Ghi chú", Width: 150, ShowTooltip: true, Template: this.ghiChuChiTietThuocVacxinTemplate },
      {
        Field: "Action", Title: "", Width: 80, Template: this.actionTemplate,
        Hidden: !(this.trangThaiVo != null && this.trangThaiVo.IsKhoaDuyet == null && this.trangThaiVo.TrangThai == null)
      },

    ]
    this.gridColumnsHoaChat = [
      { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
      // { Field: "TenLoaiDuocPham", Title: "Loại", Width: 60, ShowTooltip: true },
      { Field: "TenLoaiDuocPham", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHoachatHeaderTemplate },
      { Field: "Ten", Title: "Tên", MinWidth: 100, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 120, ShowTooltip: true },
      { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 100 },
      { Field: "DVT", Title: "ĐVT", Width: 50 },
      { Field: "TenDuongDung", Title: "Đường Dùng", Width: 50 },
      { Field: "NhaSX", Title: "Nhà SX", Width: 50 },
      { Field: "NuocSX", Title: "Nước SX", Width: 50 },
      {
        Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 100
        , Template: this.slDuTruHoaChatTemplate
      },
      {
        Field: "SoLuongDuKienSuDung", Title: "SL D.Kiến Sử Dụng", Width: 100
        , Template: this.slDuKienHoaChatTemplate
      },
      {
        Field: "SoLuongDuTruTruongKhoaDuyet", Title: "t.khoa duyệt", Width: 100,
        Hidden: (this.trangThaiVo != null && !(this.trangThaiVo.IsKhoaDuyet == true || this.trangThaiVo.TrangThai == true || this.trangThaiVo.TrangThai == false))
      },
      { Field: "GhiChu", Title: "Ghi chú", Width: 150, ShowTooltip: true, Template: this.ghiChuChiTietHoaChatTemplate },
      {
        Field: "Action", Title: "", Width: 80, Template: this.actionTemplate,
        Hidden: !(this.trangThaiVo != null && this.trangThaiVo.IsKhoaDuyet == null && this.trangThaiVo.TrangThai == null)
      },

    ]

  }
  getCurrentUser() {
    this.duocPhamGrid.LoaiDuocPham = 1;
    if (this.isCreate) {
      let dateNow = new Date();
      this.yeuCauMuaThuoc.NgayYeuCau = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), dateNow.getHours(), dateNow.getMinutes());
    }
    this.apiService.get<any>("YeuCauLinhDuocPham/GetCurrentUser").subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.yeuCauMuaThuoc.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
          this.yeuCauMuaThuoc.TenNhanVienYeuCau = resultData.HoTen;
        }
      });
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.themDuocPham();
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

  clearGridDuocPham() {
    this.huy()
    this.lstDuocPhamGrid = [];
    this.gridDataSource = {
      data: this.lstDuocPhamGrid,
      total: 0
    }
    this.gridDuocPhamThuocVacxin.gridDataSource = this.gridDataSource;
    this.gridDuocPhamThuocVacxin.setDataSource();
    this.yeuCauMuaThuoc.DuTruMuaDuocPhamChiTiets = [];
  }

  chonDuocPham(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.validationErrors = [];
      this.validationErrorsDuocPham = [];
      this.duocPhamGrid.KhoId = this.yeuCauMuaThuoc.KhoId;
      this.duocPhamGrid.DuocPhamId = dataItem.KeyId;
      this.duocPhamGrid.Ten = dataItem.Ten;
      this.duocPhamGrid.HoatChat = dataItem.HoatChat;
      this.duocPhamGrid.SoDangKy = dataItem.SoDangKy;
      this.duocPhamGrid.HamLuong = dataItem.HamLuong;
      this.duocPhamGrid.DVT = dataItem.DVT;
      this.duocPhamGrid.TenDuongDung = dataItem.DuongDung;
      this.duocPhamGrid.NhaSX = dataItem.NhaSX;
      this.duocPhamGrid.NuocSX = dataItem.NuocSX;
      this.apiService.post<any>("YeuCauMuaDuocPham/ThongTinDuocPham", this.duocPhamGrid).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.thongTinDuocPham = resultData;
          }
        });
    } else {
      this.huy();
      this.thongTinDuocPham = new ThongTinThuocChiTiet();
    }

  }
  //Validators
  kiemTraValidators() {
    this.duocPhamGrid.YeuCauMuaThuocChiTietValidators = new Array<YeuCauMuaThuocChiTietValidator>();
    this.lstDuocPhamGrid.forEach(element => {
      let duocPham = new YeuCauMuaThuocChiTietValidator();
      duocPham.DuocPhamId = element.DuocPhamId;
      duocPham.LaDuocPhamBHYT = element.LaDuocPhamBHYT;
      this.duocPhamGrid.YeuCauMuaThuocChiTietValidators.push(duocPham);
    });
  }

  dangXuLy:boolean=false;
  themDuocPham() {
    if(this.dangXuLy)
        return;
    this.dangXuLy=true;
    var self = this;
    self.validationErrors = [];
    self.validationErrorsDuocPham = [];
    if (self.duocPhamGrid.LoaiDuocPham == 1) {
      self.duocPhamGrid.LaDuocPhamBHYT = false;
    } else {
      self.duocPhamGrid.LaDuocPhamBHYT = true;
    }
    self.ref.detectChanges();
    self.apiService.post<ThongTinThuocChiTiet>("YeuCauMuaDuocPham/ThemDuocPhamChiTietGridVo", self.duocPhamGrid).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          //console.log(resultData)
          self.lstDuocPhamGrid.push(resultData)
          self.setValueForGridDuocPham();
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

  xoaDuocPham(dataItem: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.lstDuocPhamGrid.splice(this.lstDuocPhamGrid.findIndex((x: any) => x == dataItem), 1);
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        this.validationErrorsDuocPham = [];
        this.setValueForGridDuocPham();
      }
    });
  }

  setValueForGridDuocPham() {
    if (this.yeuCauMuaThuoc.NhomDuocPhamDuTru == 1) {
      this.gridDataSource = {
        data: this.lstDuocPhamGrid,
        total: this.lstDuocPhamGrid.length
      }

      let STT = 1;
      this.lstDuocPhamGrid.forEach(element => {
        element.STT = STT;
        STT++;
      });

      this.kiemTraValidators();
      this.gridDuocPhamThuocVacxin.gridDataSource = this.gridDataSource;
      this.gridDuocPhamThuocVacxin.setDataSource();
      this.pushDataDuocPham();
    } else {
      this.gridDataSourceHoaChat = {
        data: this.lstDuocPhamGrid,
        total: this.lstDuocPhamGrid.length
      }

      let STT = 1;
      this.lstDuocPhamGrid.forEach(element => {
        element.STT = STT;
        STT++;
      });

      this.kiemTraValidators();
      this.gridDuocPhamHoaChat.gridDataSource = this.gridDataSourceHoaChat;
      this.gridDuocPhamHoaChat.setDataSource();
      this.pushDataDuocPham();
    }

    //console.log("this.list: ", this.lstDuocPhamGrid);
    if (this.lstDuocPhamGrid.length > 0) {
      this.hideGuibtn.emit(true);
      this.icDisable = true;
    } else {
      this.hideGuibtn.emit(false);
      this.icDisable = false;
    }
  }

  pushDataDuocPham() {
    this.yeuCauMuaThuoc.DuTruMuaDuocPhamChiTiets = new Array<YeuCauMuaThuocChiTiet>();
    this.lstDuocPhamGrid.forEach(obj => {
      let model = new YeuCauMuaThuocChiTiet();
      model.DuocPhamId = obj.DuocPhamId;
      model.LaDuocPhamBHYT = obj.LaDuocPhamBHYT;
      model.SoLuongDuTru = obj.SoLuongDuTru;
      model.SoLuongDuKienSuDung = obj.SoLuongDuKienSuDung;
      model.NhomDieuTriDuPhong = obj.NhomDieuTriDuPhong;
      model.GhiChu = obj.GhiChu;
      model.STT = obj.STT;
      this.yeuCauMuaThuoc.DuTruMuaDuocPhamChiTiets.push(model);
      //console.log("this.yeuCauMuaThuoc.YeuCauMuaThuocChiTiets: ", this.yeuCauMuaThuoc.DuTruMuaDuocPhamChiTiets)
    });

  }

  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<any>("YeuCauMuaDuocPham/GetPhieuMuaDuocPhamDuTru?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            //console.log(resultData)
            this.yeuCauMuaThuoc = resultData;
            if (this.yeuCauMuaThuoc.TruongKhoaDuyet == null) {
              this.isCreate = true;
            }
            this.lstDuocPhamGrid = [];
            resultData.DuTruMuaDuocPhamChiTiets.forEach(element => {
              this.lstDuocPhamGrid.push(element)
            });
            this.setValueForGridDuocPham();

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

  huy() {
    this.validationErrors = [];
    this.validationErrorsDuocPham = [];
    this.duocPhamGrid.Ten = null;
    this.duocPhamGrid.HoatChat = null;
    this.duocPhamGrid.DuocPhamId = null;
    this.duocPhamGrid.SoLuongDuTru = null;
    this.duocPhamGrid.SoLuongDuKienSuDung = null
    this.duocPhamGrid.DVT = null;
    this.duocPhamGrid.TenDuongDung = null;
    this.duocPhamGrid.NhaSX = null;
    this.duocPhamGrid.NuocSX = null;
    this.duocPhamGrid.HamLuong = null;
    this.duocPhamGrid.LaDuocPhamBHYT = null;
    this.duocPhamGrid.NhomDieuTriDuPhong = null;
    this.duocPhamGrid.GhiChu = null;
  }

  themThuoc() {
    var self = this;
    self.dialog.open(ThemDuocPhamDuTruMuaPopupComponent, {
      disableClose: false,
      width: '900px',
      data: { NhomDuocPhamDuTru: this.yeuCauMuaThuoc.NhomDuocPhamDuTru, LoaiDuocPham: this.duocPhamGrid.LoaiDuocPham }
    }).afterClosed().subscribe(resultData => {
      if (resultData != undefined && resultData != null && resultData.trangThai == "Them") {
        self.lstDuocPhamGrid.push(resultData.data)
        self.setValueForGridDuocPham();
      }
    });
  }

  getSharedData() {
    this.setValueForGridDuocPham();
    return this.yeuCauMuaThuoc;
  }

}
