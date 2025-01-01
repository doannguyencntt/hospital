import { Component, OnInit, Input, ViewChild, TemplateRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icWarning from '@iconify/icons-ic/warning';
import { VatTuGridViewModelValidator, YeuCauLinhVatTu, YeuCauLinhVatTuChiTiet } from '../yeu-cau-linh-vat-tu.model';
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
  selector: 'app-phieu-linh-vat-tu-thuong-shared',
  templateUrl: './phieu-linh-vat-tu-thuong-shared.component.html',
  styleUrls: ['./phieu-linh-vat-tu-thuong-shared.component.scss']
})
export class PhieuLinhVatTuThuongSharedComponent implements OnInit {
  yeuCauLinhVatTu: YeuCauLinhVatTu = new YeuCauLinhVatTu();
  vatTuGrid: YeuCauLinhVatTuChiTiet = new YeuCauLinhVatTuChiTiet();
  lstVatTuGrid: YeuCauLinhVatTuChiTiet[] = [];
  dataVatTuGrid: any = null;

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
  groups: GroupDescriptor[] = [{ field: 'Nhom' }];

  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('gridVatTu', { static: true }) gridVatTu: GridComponent;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('slYeuCauTemplate', { static: true }) slYeuCauTemplate: TemplateRef<any>;

  @Input() isDaTao: boolean = false;
  @Input() trangThaiVo: any;
  @Input() validationErrorsLinhThuong: any;
  @Input() isCreate: boolean;
  @Input() isDuyet: boolean = false;
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
    this.yeuCauLinhVatTu = new YeuCauLinhVatTu();
    this.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = new Array<YeuCauLinhVatTuChiTiet>();

    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.yeuCauLinhVatTu.LaNguoiTaoPhieu = false;
      this.getById(id);
      this.phieuLinhId = id;
    }
    this.getCurrentUser();
    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 30, Template: this.STTTemplate },
      { Field: "Ma", Title: "Mã", Width: 80, ShowTooltip: true },
      { Field: "Ten", Title: "Tên vật tư", Width: 120, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 100 },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "NhaSX", Title: "Hãng SX", Width: 200 },
      { Field: "NuocSX", Title: "Nước SX", Width: 120 },
      { Field: "SLTon", Title: "SL Tồn", Width: 120, Hidden: !this.isCreate },
      { Field: "SoLuongCoTheXuat", Title: "SL Có thể xuất", Width: 120, Hidden: this.isCreate },
      { Field: "SLYeuCau", Title: "SL Yêu Cầu", Width: 120, Template: this.slYeuCauTemplate },
      { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
    ]
  }

  getCurrentUser() {
    this.vatTuGrid.LoaiVatTu = 1;
    if (this.yeuCauLinhVatTu.LaNguoiTaoPhieu == null) {
      if (this.isCreate) {
        this.yeuCauLinhVatTu.NgayYeuCau = new Date();
      }
      this.apiService.get<any>("YeuCauLinhVatTu/GetCurrentUserVatTu").subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.yeuCauLinhVatTu.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
            this.yeuCauLinhVatTu.HoTenNguoiYeuCau = resultData.HoTen;
          }
        });
    }
  }

  chonVatTu(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.vatTuGrid.Ten = dataItem.Ten;
      this.vatTuGrid.Ma = dataItem.Ma;
      this.vatTuGrid.SLTon = dataItem.SLTon;
      this.vatTuGrid.DVT = dataItem.DVT;
      this.vatTuGrid.NhaSX = dataItem.NhaSanXuat;
      this.vatTuGrid.NuocSX = dataItem.NuocSanXuat;
      this.vatTuGrid.LaVatTuBHYT = dataItem.LaVatTuBHYT;
    }
    else {
      this.validationErrors = [];
      this.vatTuGrid.Ten = null;
      this.vatTuGrid.Ma = null;
      this.vatTuGrid.SLTon = null;
      this.vatTuGrid.SLYeuCau = null
      this.vatTuGrid.DVT = null;
      this.vatTuGrid.NhaSX = null;
      this.vatTuGrid.NuocSX = null;
      this.vatTuGrid.LaVatTuBHYT = null;
    }
  }

  getArrayVatTuBenhVienId() {
    this.vatTuGrid.VatTuBenhViens = new Array<VatTuGridViewModelValidator>();
    this.lstVatTuGrid.forEach(element => {
      let vatTuBenhVien = new VatTuGridViewModelValidator();
      vatTuBenhVien.VatTuBenhVienId = element.VatTuBenhVienId;
      vatTuBenhVien.LaVatTuBHYT = element.LaVatTuBHYT;
      this.vatTuGrid.VatTuBenhViens.push(vatTuBenhVien);
      console.log("data BenhViens: ", this.vatTuGrid.VatTuBenhViens)
        ;
    });
  }

  dangXuLy:boolean=false;
  themVatTu() {
    var self = this;
    //self.getArrayVatTuBenhVienId();
    self.validationErrors = [];
    self.validationErrorsLinhThuong = [];
    self.ref.detectChanges();
    if (self.vatTuGrid.LoaiVatTu == 1) {
      self.vatTuGrid.LaVatTuBHYT = false;
    } else {
      self.vatTuGrid.LaVatTuBHYT = true;
    }
    self.vatTuGrid.KhoXuatId = self.yeuCauLinhVatTu.KhoXuatId;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if(this.dangXuLy)
          return;
      this.dangXuLy=true;
      self.apiService.post<YeuCauLinhVatTuChiTiet>("YeuCauLinhVatTu/ThemLinhThuongVatTuGridVo", self.vatTuGrid).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            self.lstVatTuGrid.push(resultData)
            self.setValueForGridVatTu();
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

  setValueForGridVatTu() {
    //this.lstVatTuGrid = this.lstVatTuGrid.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT|| a.Ten > b.Ten) ? 1 : -1)
    this.gridDataSource = {
      data: this.lstVatTuGrid,
      total: this.lstVatTuGrid.length
    }
    let STT = 1;
    this.lstVatTuGrid.forEach(element => {
      element.STT = STT;
      STT++;
    });
    this.getArrayVatTuBenhVienId();
    this.gridVatTu.gridDataSource = this.gridDataSource;
    this.gridVatTu.setDataSource();
    this.pushDataVatTu();
    console.log("this.list: ", this.lstVatTuGrid);
    if (this.lstVatTuGrid.length > 0) {
      this.hideDuyetbtn.emit(true);
      this.icDisable = true;
    } else {
      this.hideDuyetbtn.emit(false);
      this.icDisable = false;
    }
    //console.log(this.icDisable)
  }
  pushDataVatTu() {
    this.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = new Array<YeuCauLinhVatTuChiTiet>();
    this.lstVatTuGrid.forEach(obj => {
      let model = new YeuCauLinhVatTuChiTiet();
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
      this.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.push(model);
    });

  }

  xoaVatTu(dataItem: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.lstVatTuGrid.splice(this.lstVatTuGrid.findIndex((x: any) => x == dataItem), 1);
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        this.validationErrorsLinhThuong = [];
        this.setValueForGridVatTu();
      }
    });
  }

  huy() {
    this.validationErrors = [];
    this.vatTuGrid.Ten = null;
    this.vatTuGrid.VatTuBenhVienId = null;
    this.vatTuGrid.SLTon = null;
    this.vatTuGrid.SLYeuCau = null
    this.vatTuGrid.DVT = null;
    this.vatTuGrid.NhaSX = null;
    this.vatTuGrid.NuocSX = null;
    this.vatTuGrid.LaVatTuBHYT = null;
  }

  clearGridVatTu() {
    this.huy();
    this.lstVatTuGrid = [];
    this.gridDataSource = {
      data: this.lstVatTuGrid,
      total: 0
    }
    this.gridVatTu.gridDataSource = this.gridDataSource;
    this.gridVatTu.setDataSource();
    this.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = [];
  }


  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<YeuCauLinhVatTu>("YeuCauLinhVatTu/GetPhieuLinhThuongVatTu?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.yeuCauLinhVatTu = resultData;
            if (this.yeuCauLinhVatTu.LaNguoiTaoPhieu) {
              this.disabledNguoiTaoPhieu.emit(true);
            } else {
              this.disabledNguoiTaoPhieu.emit(false);
            }
            // if (this.yeuCauLinhVatTu.DuocDuyet == null) {
            //   this.isCreate = true;
            // }
            this.lstVatTuGrid = [];
            resultData.YeuCauLinhVatTuChiTiets.forEach(element => {
              this.lstVatTuGrid.push(element)
            });
            //this.getArrayVatTuBenhVienId();
            this.setValueForGridVatTu();

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
    this.setValueForGridVatTu();
    this.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
      if (element.SoLuongCoTheXuat == undefined || element.SoLuongCoTheXuat == null) {
        element.IsValidator = false;
      }
    });
    return this.yeuCauLinhVatTu;
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.themVatTu();
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
