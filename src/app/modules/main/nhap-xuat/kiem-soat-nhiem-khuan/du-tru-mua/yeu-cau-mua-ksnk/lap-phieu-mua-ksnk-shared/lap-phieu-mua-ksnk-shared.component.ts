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

import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ThongTinVatTuChiTiet, YeuCauMuaVatTu, YeuCauMuaVatTuChiTiet, YeuCauMuaVatTuChiTietValidator } from '../yeu-cau-mua-ksnk.model';
import { ThemKSNKDuTruMuaPopupComponent } from '../them-ksnk-du-tru-mua-popup/them-ksnk-du-tru-mua-popup.component';
@Component({
  selector: 'app-lap-phieu-mua-ksnk-shared',
  templateUrl: './lap-phieu-mua-ksnk-shared.component.html',
  styleUrls: ['./lap-phieu-mua-ksnk-shared.component.scss']
})
export class LapPhieuMuaKSNKSharedComponent implements OnInit {

  yeuCauMuaVatTu: YeuCauMuaVatTu;
  vatTuGrid: ThongTinVatTuChiTiet = new ThongTinVatTuChiTiet();
  thongTinVatTu: ThongTinVatTuChiTiet = new ThongTinVatTuChiTiet();
  
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

  gridColumns: any[] = [];
  dataVatTuGrid: any = null;
  lstVatTuGrid: ThongTinVatTuChiTiet[] = [];
  phieuMuaVatTuDuTruId: number = null;

  groups: GroupDescriptor[] = [{ field: 'TenLoaiVatTu' }];
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('gridVatTu', { static: true }) gridVatTu: GridComponent;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('slDuTruVatTuTemplate', { static: true }) slDuTruVatTuTemplate: TemplateRef<any>;
  @ViewChild('slDuKienVatTuTemplate', { static: true }) slDuKienVatTuTemplate: TemplateRef<any>;
  @ViewChild('ghiChuChiTietTemplate', { static: true }) ghiChuChiTietTemplate: TemplateRef<any>;

  @Input() trangThaiVo: any;
  @Input() validationErrorsVatTu: any;
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
    this.documentType = DocumentType.YeuCauDuTruMuaNhomKSNK;
    this.yeuCauMuaVatTu = new YeuCauMuaVatTu();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.phieuMuaVatTuDuTruId = id;
    }
    if (this.isCreate) {
      this.getCurrentUser();
    }

    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
      // { Field: "TenLoaiVatTu", Title: "Loại", Width: 60, ShowTooltip: true },
      { Field: "TenLoaiVatTu", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ten", Title: "Tên", MinWidth: 100, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 50 },
      { Field: "QuyCach", Title: "Quy cách", Width: 50 },
      { Field: "NhaSX", Title: "Nhà SX", Width: 100 },
      { Field: "NuocSX", Title: "Nước SX", Width: 100 },
      {
        Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 100
        , Template: this.slDuTruVatTuTemplate
      },
      {
        Field: "SoLuongDuKienSuDungTrongKy", Title: "SL D.Kiến Sử Dụng", Width: 100
        , Template: this.slDuKienVatTuTemplate
      },
      {
        Field: "SoLuongDuTruTruongKhoaDuyet", Title: "t.khoa duyệt", Width: 100,
        Hidden: (this.trangThaiVo != null && !(this.trangThaiVo.IsKhoaDuyet == true || this.trangThaiVo.TrangThai == true || this.trangThaiVo.TrangThai == false))
      },
      { Field: "GhiChu", Title: "Ghi chú", Width: 150, ShowTooltip: true, Template: this.ghiChuChiTietTemplate },
      {
        Field: "Action", Title: "", Width: 80, Template: this.actionTemplate,
        Hidden: !(this.trangThaiVo != null && this.trangThaiVo.IsKhoaDuyet == null && this.trangThaiVo.TrangThai == null)
      },

    ]
  }

  getCurrentUser() {
    this.vatTuGrid.LoaiVatTu = 1;
    if (this.isCreate) {
      let dateNow = new Date();
      this.yeuCauMuaVatTu.NgayYeuCau = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), dateNow.getHours(), dateNow.getMinutes());
    }
    this.apiService.get<any>("YeuCauLinhDuocPham/GetCurrentUser").subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.yeuCauMuaVatTu.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
          this.yeuCauMuaVatTu.TenNhanVienYeuCau = resultData.HoTen;
        }
      });
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
  chonVatTu(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.validationErrors = [];
      this.validationErrorsVatTu = [];
      this.vatTuGrid.KhoId = this.yeuCauMuaVatTu.KhoId;
      this.vatTuGrid.VatTuId = dataItem.KeyId;
      this.vatTuGrid.Ten = dataItem.Ten;
      this.vatTuGrid.Ma = dataItem.Ma;
      this.vatTuGrid.DVT = dataItem.DVT;
      this.vatTuGrid.NhaSX = dataItem.NhaSX;
      this.vatTuGrid.NuocSX = dataItem.NuocSX;
      this.apiService.post<any>("YeuCauMuaKSNK/ThongTinKSNK", this.vatTuGrid).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.thongTinVatTu = resultData;
          }
        });
    } else {
      this.huy();
      this.thongTinVatTu = new ThongTinVatTuChiTiet();
    }
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
        this.validationErrorsVatTu = [];
        this.setValueForGridVatTu();
      }
    });
  }

  dangXuLy:boolean=false;
  themVatTu() {
    if(this.dangXuLy)
        return;
    this.dangXuLy=true;
    var self = this;
    self.validationErrors = [];
    self.validationErrorsVatTu = [];
    if (self.vatTuGrid.LoaiVatTu == 1) {
      self.vatTuGrid.LaVatTuBHYT = false;
    } else {
      self.vatTuGrid.LaVatTuBHYT = true;
    }
    self.ref.detectChanges();
    self.apiService.post<ThongTinVatTuChiTiet>("YeuCauMuaKSNK/ThemKSNKChiTietGridVo", self.vatTuGrid).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          //console.log(resultData)
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

  setValueForGridVatTu() {
    this.gridDataSource = {
      data: this.lstVatTuGrid,
      total: this.lstVatTuGrid.length
    }

    let STT = 1;
    this.lstVatTuGrid.forEach(element => {
      element.STT = STT;
      STT++;
    });

    this.kiemTraValidators();
    this.gridVatTu.gridDataSource = this.gridDataSource;
    this.gridVatTu.setDataSource();
    this.pushDataVatTu();

    //console.log("this.list: ", this.lstDuocPhamGrid);
    if (this.lstVatTuGrid.length > 0) {
      this.hideGuibtn.emit(true);
      this.icDisable = true;
    } else {
      this.hideGuibtn.emit(false);
      this.icDisable = false;
    }
  }

  //Validators
  kiemTraValidators() {
    this.vatTuGrid.YeuCauMuaVatTuChiTietValidators = new Array<YeuCauMuaVatTuChiTietValidator>();
    this.lstVatTuGrid.forEach(element => {
      let vatTu = new YeuCauMuaVatTuChiTietValidator();
      vatTu.VatTuId = element.VatTuId;
      vatTu.LaVatTuBHYT = element.LaVatTuBHYT;
      this.vatTuGrid.YeuCauMuaVatTuChiTietValidators.push(vatTu);
    });
  }

  pushDataVatTu() {
    this.yeuCauMuaVatTu.DuTruMuaVatTuChiTiets = new Array<YeuCauMuaVatTuChiTiet>();
    this.lstVatTuGrid.forEach(obj => {
      let model = new YeuCauMuaVatTuChiTiet();
      model.VatTuId = obj.VatTuId;
      model.LaVatTuBHYT = obj.LaVatTuBHYT;
      model.SoLuongDuTru = obj.SoLuongDuTru;
      model.SoLuongDuKienSuDung = obj.SoLuongDuKienSuDung;
      model.GhiChu = obj.GhiChu;
      model.STT = obj.STT;
      this.yeuCauMuaVatTu.DuTruMuaVatTuChiTiets.push(model);
      //console.log("this.yeuCauMuaVatTu.YeuCauMuaVatTuChiTiets: ", this.yeuCauMuaVatTu.DuTruMuaDuocPhamChiTiets)
    });

  }

  getSharedData() {
    this.setValueForGridVatTu();
    return this.yeuCauMuaVatTu;
  }

  clearGridVatTu() {
    this.huy()
    this.lstVatTuGrid = [];
    this.gridDataSource = {
      data: this.lstVatTuGrid,
      total: 0
    }
    this.gridVatTu.gridDataSource = this.gridDataSource;
    this.gridVatTu.setDataSource();
    this.yeuCauMuaVatTu.DuTruMuaVatTuChiTiets = [];
  }

  huy() {
    this.validationErrors = [];
    this.validationErrorsVatTu = [];
    this.vatTuGrid.Ten = null;
    this.vatTuGrid.VatTuId = null;
    this.vatTuGrid.SoLuongDuTru = null;
    this.vatTuGrid.SoLuongDuKienSuDung = null
    this.vatTuGrid.DVT = null;
    this.vatTuGrid.QuyCach = null;
    this.vatTuGrid.NhaSX = null;
    this.vatTuGrid.NuocSX = null;
    this.vatTuGrid.LaVatTuBHYT = null;
    this.vatTuGrid.GhiChu = null;
  }

  themVatTuBV() {
    var self = this;
    self.dialog.open(ThemKSNKDuTruMuaPopupComponent, {
      disableClose: false,
      width: '900px',
      data: { LoaiVatTu: this.vatTuGrid.LoaiVatTu }
    }).afterClosed().subscribe(resultData => {
      if (resultData != undefined && resultData != null && resultData.trangThai == "Them") {
        self.lstVatTuGrid.push(resultData.data)
        self.setValueForGridVatTu();
      }
    });
  }

  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<any>("YeuCauMuaKSNK/GetPhieuMuaKSNKDuTru?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            //console.log(resultData)
            this.yeuCauMuaVatTu = resultData;
            if (this.yeuCauMuaVatTu.TruongKhoaDuyet == null) {
              this.isCreate = true;
            }
            this.lstVatTuGrid = [];
            resultData.DuTruMuaVatTuChiTiets.forEach(element => {
              this.lstVatTuGrid.push(element)
            });
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
}
