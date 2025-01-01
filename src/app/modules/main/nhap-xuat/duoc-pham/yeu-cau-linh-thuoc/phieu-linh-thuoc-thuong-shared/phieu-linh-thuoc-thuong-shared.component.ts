import { Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import { ChangeDuocPhamBenhVienOrXetNghiem, DuocPhamGridViewModelValidator, YeuCauLinhDuocPham, YeuCauLinhDuocPhamChiTiet } from '../yeu-cau-linh-thuoc.model';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ActivatedRoute } from '@angular/router';
import icWarning from '@iconify/icons-ic/warning';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { isBuffer } from 'util';
import { isThisSecond } from 'date-fns';
import { MultiselectComponent } from 'src/app/shared/component/dropdowns/multiselect/multiselect.component';
import { LookupItemVo, MultiselectQueryInfo } from 'src/app/shared/models/common.model';

@Component({
  selector: 'app-phieu-linh-thuoc-thuong-shared',
  templateUrl: './phieu-linh-thuoc-thuong-shared.component.html',
  styleUrls: ['./phieu-linh-thuoc-thuong-shared.component.scss']
})
export class PhieuLinhThuocThuongSharedComponent implements OnInit {
  yeuCauLinhDuocPham: YeuCauLinhDuocPham = new YeuCauLinhDuocPham();
  duocPhamGrid: YeuCauLinhDuocPhamChiTiet = new YeuCauLinhDuocPhamChiTiet();
  validationErrors: any;
  documentType: DocumentType;
  icDelete = icDelete;
  icEdit = icEdit;
  icWarning = icWarning;
  icDisable: any = null;
  isSelectDuocPham: boolean = false;
  queryMayXetNghiem: MultiselectQueryInfo = new MultiselectQueryInfo();
  @Input() trangThaiVo: any;
  @Input() validationErrorsLinhThuong: any;
  @Input() isCreate: boolean;
  gridDataSource: any = {
    data: [],
    total: 0
  }
  gridColumns: any[] = [];
  dataDuocPhamGrid: any = null;
  lstDuocPhamGrid: YeuCauLinhDuocPhamChiTiet[] = [];
  phieuLinhId: number = null;
  isHidden: boolean = false;
  duocPhamIds: Array<number> = null;
  groups: GroupDescriptor[] = [{ field: 'Nhom' }];

  DanhSachMayXetNghiemId: string;
  DanhSachTenMayXetNghiem: string;

  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('gridDuocPham', { static: true }) gridDuocPham: GridComponent;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('mayXetNgiemMultiselect', { static: false }) mayXetNgiemMultiselect: MultiselectComponent;
  @ViewChild('slYeuCauTemplate', { static: true }) slYeuCauTemplate: TemplateRef<any>;
  @Output() hideDuyetbtn: EventEmitter<any> = new EventEmitter<any>();
  @Output() disabledNguoiTaoPhieu: EventEmitter<any> = new EventEmitter<any>();

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
    this.yeuCauLinhDuocPham = new YeuCauLinhDuocPham();
    this.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = new Array<YeuCauLinhDuocPhamChiTiet>();

    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.yeuCauLinhDuocPham.LaNguoiTaoPhieu = false;
      this.getById(id);
      this.phieuLinhId = id;
    }
    this.getCurrentUser();


    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.STTTemplate },
      { Field: "Ten", Title: "Tên dược phẩm", Width: 120, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 170, ShowTooltip: true },
      { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
      { Field: "DuongDung", Title: "Đường Dùng", Width: 80 },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 80 },
      { Field: "NhaSX", Title: "Hãng SX", Width: 200 },
      { Field: "NuocSX", Title: "Nước SX", Width: 120 },
      { Field: "DanhSachTenMayXetNghiem", Title: "Máy XN", Width: 120 },
      {
        Field: "SLTon", Title: "SL Tồn", Width: 120,
        Hidden: !this.isCreate
      },
      {
        Field: "SoLuongCoTheXuat", Title: "SL Có thể xuất", Width: 120,
        Hidden: this.isCreate
      },
      { Field: "SLYeuCau", Title: "SL Yêu Cầu", Width: 120, Template: this.slYeuCauTemplate },
      { Field: "Action", Title: "", Width: 80, Template: this.actionTemplate },
    ]
  }


  getCurrentUser() {
    this.duocPhamGrid.LoaiDuocPham = 1;
    if (this.yeuCauLinhDuocPham.LaNguoiTaoPhieu == null) {
      if (this.isCreate) {
        this.yeuCauLinhDuocPham.NgayYeuCau = new Date();
      }
      this.apiService.get<any>("YeuCauLinhDuocPham/GetCurrentUser").subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.yeuCauLinhDuocPham.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
            this.yeuCauLinhDuocPham.HoTenNguoiYeuCau = resultData.HoTen;
          }
        });
      if (this.phieuLinhId != null) {
        this.apiService.get<any>("YeuCauLinhDuocPham/GetNhanVienDuyet?id=" + this.phieuLinhId).subscribe(
          resultData => {
            if (resultData != undefined && resultData != null) {
              this.yeuCauLinhDuocPham.NhanVienDuyetId = resultData.NhanVienDuyetId;
              this.yeuCauLinhDuocPham.HoTenNguoiDuyet = resultData.HoTenNguoiDuyet;
              this.yeuCauLinhDuocPham.NgayDuyet = resultData.NgayDuyet;
            }
          });
      }
    }
  }

  chonDuocPham(dataItem: any) {
    this.DanhSachMayXetNghiemId = null;
    this.DanhSachTenMayXetNghiem = null;

    //console.log("duoc pham: ", dataItem)
    if (dataItem != undefined && dataItem != null) {
      this.duocPhamGrid.Ten = dataItem.Ten;
      this.duocPhamGrid.HoatChat = dataItem.HoatChat;
      this.duocPhamGrid.SLTon = dataItem.SLTon;
      this.duocPhamGrid.DVT = dataItem.DVT;
      this.duocPhamGrid.DuongDung = dataItem.DuongDung;
      this.duocPhamGrid.NhaSX = dataItem.NhaSX;
      this.duocPhamGrid.NuocSX = dataItem.NuocSX;
      this.duocPhamGrid.HamLuong = dataItem.HamLuong;
      this.duocPhamGrid.LaDuocPhamBHYT = dataItem.LaDuocPhamBHYT;
      this.duocPhamGrid.MayXetNghiemTenVaIds = dataItem.MayXetNghiemTenVaIds;

      this.getDataXetNghiemWhenChangeDP(dataItem.KeyId);
    }
    else {
      this.validationErrors = [];
      this.duocPhamGrid.Ten = null;
      this.duocPhamGrid.HoatChat = null;
      this.duocPhamGrid.SLTon = null;
      this.duocPhamGrid.SLYeuCau = null
      this.duocPhamGrid.DVT = null;
      this.duocPhamGrid.DuongDung = null;
      this.duocPhamGrid.NhaSX = null;
      this.duocPhamGrid.NuocSX = null;
      this.duocPhamGrid.HamLuong = null;
      this.duocPhamGrid.LaDuocPhamBHYT = null;
      this.duocPhamGrid.MayXetNghiemTenVaIds = null;
    }

  }

  huy() {
    this.validationErrors = [];
    this.duocPhamGrid.Ten = null;
    this.duocPhamGrid.HoatChat = null;
    this.duocPhamGrid.DuocPhamBenhVienId = null;
    this.duocPhamGrid.SLTon = null;
    this.duocPhamGrid.SLYeuCau = null
    this.duocPhamGrid.DVT = null;
    this.duocPhamGrid.DuongDung = null;
    this.duocPhamGrid.NhaSX = null;
    this.duocPhamGrid.NuocSX = null;
    this.duocPhamGrid.HamLuong = null;
    this.duocPhamGrid.LaDuocPhamBHYT = null;
    this.duocPhamGrid.MayXetNghiemTenVaIds = null;
  }

  changeData(dataItem: any) {
    this.changeMayXetNghiem(dataItem);
  }

  getDataXetNghiemWhenChangeDP(duocPhamBenhVienId: any) {
    this.queryMayXetNghiem.ParameterDependencies = '{DuocPhamBenhVienId:' + duocPhamBenhVienId + '}';
    this.queryMayXetNghiem.Take = 50;
    this.apiService.post<Array<LookupItemVo>>("YeuCauLinhDuocPham/GetAllMayXetNghiemYeuCauLinh", this.queryMayXetNghiem).subscribe(
      resultData => {
        if (resultData !== undefined && resultData != null) {
          this.bindMayXNKhiChangeData(resultData, ChangeDuocPhamBenhVienOrXetNghiem.DuocPhamBenhVien);
          this.mayXetNgiemMultiselect._data = resultData;
        }
      },
      (err: any) => {
        //console.log(err);
      });
  }

  bindMayXNKhiChangeData(dataItem, changeDuocPhamBenhVienOrXetNghiem: ChangeDuocPhamBenhVienOrXetNghiem) {
    this.DanhSachMayXetNghiemId = null;
    this.DanhSachTenMayXetNghiem = null;
    let danhSachMayXetNghiemId = Array<string>();
    let danhSachMayXetNghiemTen = Array<string>();

    if (dataItem !== undefined && dataItem !== null && dataItem.length > 0) {
      if (changeDuocPhamBenhVienOrXetNghiem === ChangeDuocPhamBenhVienOrXetNghiem.DuocPhamBenhVien) {
        dataItem.forEach(element => {
          let tenVaIdMayXetNghiems = element.KeyId.split('-');
          if (tenVaIdMayXetNghiems !== undefined && dataItem !== null && tenVaIdMayXetNghiems.length > 0) {
            danhSachMayXetNghiemId.push(tenVaIdMayXetNghiems[0]);
            danhSachMayXetNghiemTen.push(tenVaIdMayXetNghiems[1]);
          }
        });
      }
      else {
        dataItem.forEach(element => {
          let tenVaIdMayXetNghiems = element.split('-');
          if (tenVaIdMayXetNghiems !== undefined && dataItem !== null && tenVaIdMayXetNghiems.length > 0) {
            danhSachMayXetNghiemId.push(tenVaIdMayXetNghiems[0]);
            danhSachMayXetNghiemTen.push(tenVaIdMayXetNghiems[1]);
          }
        });
      }
    }

    this.DanhSachMayXetNghiemId = danhSachMayXetNghiemId.join(';');
    this.DanhSachTenMayXetNghiem = danhSachMayXetNghiemTen.join(';');
  }

  clearGridDuocPham() {
    this.huy()
    this.lstDuocPhamGrid = [];
    this.gridDataSource = {
      data: this.lstDuocPhamGrid,
      total: 0
    }
    this.gridDuocPham.gridDataSource = this.gridDataSource;
    this.gridDuocPham.setDataSource();
    this.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = [];
  }

  getArrayDuocPhamBenhVienId() {
    this.duocPhamGrid.DuocPhamBenhViens = new Array<DuocPhamGridViewModelValidator>();
    this.lstDuocPhamGrid.forEach(element => {
      let duocPhamBenhVien = new DuocPhamGridViewModelValidator();
      duocPhamBenhVien.DuocPhamBenhVienId = element.DuocPhamBenhVienId;
      duocPhamBenhVien.LaDuocPhamBHYT = element.LaDuocPhamBHYT;
      this.duocPhamGrid.DuocPhamBenhViens.push(duocPhamBenhVien);
    });
    // console.log("this.duocPhamGrid.DuocPhamBenhViens: ", this.duocPhamGrid.DuocPhamBenhViens)
  }

  changeMayXetNghiem(dataItem: any) {
    if (dataItem !== undefined && dataItem !== null && dataItem.length > 0) {
      this.bindMayXNKhiChangeData(dataItem, ChangeDuocPhamBenhVienOrXetNghiem.XetNghiem);
    }
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
        this.validationErrorsLinhThuong = [];
        this.setValueForGridDuocPham();
      }
    });
  }

  dangXuLy:boolean=false;
  themDuocPham() {
    var self = this;
    //self.getArrayDuocPhamBenhVienId();
    self.validationErrors = [];
    self.validationErrorsLinhThuong = [];
    self.ref.detectChanges();
    if (self.duocPhamGrid.LoaiDuocPham == 1) {
      self.duocPhamGrid.LaDuocPhamBHYT = false;
    } else {
      self.duocPhamGrid.LaDuocPhamBHYT = true;
    }
    self.duocPhamGrid.KhoXuatId = self.yeuCauLinhDuocPham.KhoXuatId;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if(this.dangXuLy)
          return;
      this.dangXuLy=true;
      self.apiService.post<YeuCauLinhDuocPhamChiTiet>("YeuCauLinhDuocPham/ThemLinhThuongDuocPhamGridVo", self.duocPhamGrid).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {

            resultData.DanhSachMayXetNghiemId = null;
            resultData.DanhSachTenMayXetNghiem = null;

            resultData.DanhSachMayXetNghiemId = this.DanhSachMayXetNghiemId;
            resultData.DanhSachTenMayXetNghiem = this.DanhSachTenMayXetNghiem;

            self.lstDuocPhamGrid.push(resultData);

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
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  setValueForGridDuocPham() {
    this.gridDataSource = {
      data: this.lstDuocPhamGrid,
      total: this.lstDuocPhamGrid.length
    }
    this.lstDuocPhamGrid = this.lstDuocPhamGrid.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
    let STT = 1;
    this.lstDuocPhamGrid.forEach(element => {
      element.STT = STT;
      STT++;
    });

    this.getArrayDuocPhamBenhVienId();
    this.gridDuocPham.gridDataSource = this.gridDataSource;
    this.gridDuocPham.setDataSource();
    this.pushDataDuocPham();
    // console.log("this.list: ", this.lstDuocPhamGrid);
    if (this.lstDuocPhamGrid.length > 0) {
      this.hideDuyetbtn.emit(true);
      this.icDisable = true;
    } else {
      this.hideDuyetbtn.emit(false);
      this.icDisable = false;
    }
    //console.log(this.icDisable)
  }

  pushDataDuocPham() {
    this.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = new Array<YeuCauLinhDuocPhamChiTiet>();
    this.lstDuocPhamGrid.forEach(obj => {
      let model = new YeuCauLinhDuocPhamChiTiet();
      model.YeuCauLinhDuocPhamId = obj.YeuCauLinhDuocPhamId;
      model.DuocPhamBenhVienId = obj.DuocPhamBenhVienId;
      model.LaDuocPhamBHYT = obj.LaDuocPhamBHYT;
      model.SoLuong = obj.SLYeuCau;
      model.Nhom = obj.Nhom;
      model.SoLuongCoTheXuat = obj.SoLuongCoTheXuat;
      model.STT = obj.STT;
      model.SLTon = obj.SLTon;
      model.KhoXuatId = obj.KhoXuatId;

      model.DanhSachMayXetNghiemId = obj.DanhSachMayXetNghiemId;
      model.DanhSachTenMayXetNghiem = obj.DanhSachTenMayXetNghiem;

      this.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.push(model);
    });

  }

  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<YeuCauLinhDuocPham>("YeuCauLinhDuocPham/GetPhieuLinhThuongDuocPham?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.yeuCauLinhDuocPham = resultData;
            if (this.yeuCauLinhDuocPham.LaNguoiTaoPhieu) {
              this.disabledNguoiTaoPhieu.emit(true);
            } else {
              this.disabledNguoiTaoPhieu.emit(false);
            }
            if (this.yeuCauLinhDuocPham.DuocDuyet == null) {
              this.isCreate = true;
            }
            this.lstDuocPhamGrid = [];
            resultData.YeuCauLinhDuocPhamChiTiets.forEach(element => {
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

  getSharedData() {
    this.setValueForGridDuocPham();
    this.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.forEach(element => {
      if (element.SoLuongCoTheXuat == undefined || element.SoLuongCoTheXuat == null) {
        element.IsValidator = false;
      }
      element.KhoXuatId = this.yeuCauLinhDuocPham.KhoXuatId;
    });
    return this.yeuCauLinhDuocPham;
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
}