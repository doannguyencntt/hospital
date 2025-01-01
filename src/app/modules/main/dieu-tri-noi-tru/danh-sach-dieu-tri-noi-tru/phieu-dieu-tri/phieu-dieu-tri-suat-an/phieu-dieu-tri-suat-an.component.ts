import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiTietDieuTriNoiTruViewModel, ThemSuatAn } from '../../../dieu-tri-noi-tru.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/border-color';
import { SuaSuatAnPopupComponent } from '../sua-suat-an-popup/sua-suat-an-popup.component';

@Component({
  selector: 'app-phieu-dieu-tri-suat-an',
  templateUrl: './phieu-dieu-tri-suat-an.component.html',
  styleUrls: ['./phieu-dieu-tri-suat-an.component.scss']
})
export class PhieuDieuTriSuatAnComponent implements OnInit {

  icDelete = icDelete;
  icEdit = icEdit;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  gridSuatAnColumns: any[] = [];
  validationErrors: any;
  suatAn: ThemSuatAn = new ThemSuatAn();
  suatAnEdit: ThemSuatAn = new ThemSuatAn();
  yeuCauTiepNhanId: number = null;
  isSelectDuocPham: boolean = false;
  popupAddingData: any = null;
  popupDeletingData: any = null;
  additionString: any = null;

  @ViewChild('isFocus', { static: false }) isFocus: ComboboxComponent;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('tenNhomGroupHeaderTemplate', { static: false }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('gridSuatAn', { static: false }) gridSuatAn: GridComponent;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('soLanTemplate', { static: true }) soLanTemplate: TemplateRef<any>;
  laKhoaKhamBenhChiDinh: boolean = true;
  @Input() khoaChiDinh: any;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Input() phieuDieuTriHienTaiId: any;

  constructor(private dialog: MatDialog
    , private cdRef: ChangeDetectorRef
    , private authService: AuthService
    , private apiService: ApiService, private notificationService: NotificationService) { }

  ngOnInit() {

    const id: number = this.dieuTriNoiTruModel.Id;
    this.yeuCauTiepNhanId = id;
    this.additionString = this.yeuCauTiepNhanId + ";" + this.phieuDieuTriHienTaiId;
    if (this.khoaChiDinh === this.dieuTriNoiTruModel.Khoa) {
      this.laKhoaKhamBenhChiDinh = true;
    }
    else {
      this.laKhoaKhamBenhChiDinh = false;
    }
    this.gridSuatAnColumns = [
      { Field: "Action", Title: "", Width: 35, Sortable: false, Template: this.actionTemplate },
      // { Field: "STT", Title: "#", Width: 30, Sortable: false, Template: this.STTTemplate },
      { Field: "Ma", Title: "Mã", Width: 100, ShowTooltip: true, Sortable: false },
      { Field: "Ten", Title: "Tên", Width: 100, ShowTooltip: true, Sortable: false },
      { Field: "BuaAnDisplay", Title: "Bữa ăn", Width: 100, ShowTooltip: true, Sortable: false },
      { Field: "SoLan", Title: "SL", Width: 100, Sortable: false, Template: this.soLanTemplate },
      { Field: "DoiTuong", Title: "Đối Tượng", Width: 100, Sortable: false },
      { Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: false, Template: this.donGiaTemplate },
      { Field: "ThanhTien", Title: "Thành Tiền", Width: 70, Sortable: false, Template: this.thanhTienTemplate },
      { Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "ThoiDiemChiDinhDisplay", Title: "Thời gian chỉ định", Width: 100, Sortable: false, ShowTooltip: true },
    ];
    this.kiemTraPhieuDieuTriTheoKhoaChiDinh(this.yeuCauTiepNhanId, this.phieuDieuTriHienTaiId);

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['phieuDieuTriHienTaiId'] && changes['phieuDieuTriHienTaiId'].previousValue != null 
    && changes['phieuDieuTriHienTaiId'].previousValue != changes['phieuDieuTriHienTaiId'].currentValue) {
      // console.log(changes)
      this.phieuDieuTriHienTaiId = changes.phieuDieuTriHienTaiId.currentValue;
      this.additionString = this.yeuCauTiepNhanId + ";" + this.phieuDieuTriHienTaiId;
      this.kiemTraPhieuDieuTriTheoKhoaChiDinh(this.yeuCauTiepNhanId, this.phieuDieuTriHienTaiId);
      this.gridSuatAn._additionalSearchString = this.additionString;
      this.gridSuatAn.search();
    }
  }
  kiemTraPhieuDieuTriTheoKhoaChiDinh(yeuCauTiepNhanId: number, phieuDieuTriId: number) {
    let params = {
      yeuCauTiepNhanId: yeuCauTiepNhanId,
      phieuDieuTriId: phieuDieuTriId
    };

    this.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuKham", params).subscribe(
      resultData => {
        if (resultData != null && resultData != undefined) {
          this.khoaChiDinh = resultData.KhoaChiDinh;
          if (this.khoaChiDinh === this.dieuTriNoiTruModel.Khoa) {
            this.laKhoaKhamBenhChiDinh = true;
          }
          else {
            this.laKhoaKhamBenhChiDinh = false;
          }
        }
      },
      (err: ApiError) => {
      });
  }

  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.them();
        this.onkeyFocus();
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }

  onkeyFocus() {
    this.isFocus.onKeytoFocus();
  }

  dangXuLy:boolean=false;
  them() {
    var self = this;
    self.validationErrors = null;
    self.cdRef.detectChanges();
    self.onkeyFocus();
    self.suatAn.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.suatAn.NoiTruPhieuDieuTriId = self.phieuDieuTriHienTaiId;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if(this.dangXuLy)
          return;
      this.dangXuLy=true;
      self.addingPage();
      self.apiService.post<any>("DieuTriNoiTru/ThemYeuCauSuatAn", self.suatAn).subscribe(
        () => {
          self.closePopupAddingData();
          let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
          self.notificationService.showSuccess(mess);
          self.gridSuatAn.search();
          self.huy();
          self.dangXuLy=false;
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupAddingData();
          self.dangXuLy=false;
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoaYeuCauTM(dataItem: any) {
    var self = this;
    self.validationErrors = null;
    self.cdRef.detectChanges();
    let comfirm = "xóa";
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "suất ăn"]) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.deletingPage();
          self.apiService.post("DieuTriNoiTru/XoaYeuCauSuatAn?yctnId=" + self.yeuCauTiepNhanId + "&ycdvktId=" + dataItem.Id).subscribe(
            () => {
              self.closePopupDeletingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              self.gridSuatAn.search();
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupDeletingData();
            });
        }
      });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  suaYeuCauTM(dataItem: any) {
    var self = this;
    self.validationErrors = null;
    self.cdRef.detectChanges();
    self.suatAnEdit = Object.assign({}, dataItem);
    self.suatAnEdit.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.suatAnEdit.NoiTruPhieuDieuTriId = self.phieuDieuTriHienTaiId;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.dialog.open(SuaSuatAnPopupComponent, {
        disableClose: false,
        width: '600px',
        data: self.suatAnEdit,
      }).afterClosed().subscribe(() => {
        self.gridSuatAn.search();
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  huy() {
    this.validationErrors = [];
    this.suatAn = new ThemSuatAn();
  }

  addingPage() {
    this.popupAddingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang thêm dữ liệu..." },
    });
  }

  closePopupAddingData() {
    if (this.popupAddingData != undefined && this.popupAddingData != null) {
      this.popupAddingData.close();
    }
  }

  deletingPage() {
    this.popupDeletingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang xóa dữ liệu..." },
    });
  }

  closePopupDeletingData() {
    if (this.popupDeletingData != undefined && this.popupDeletingData != null) {
      this.popupDeletingData.close();
    }
  }

  openDropDownList(event) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }

}
