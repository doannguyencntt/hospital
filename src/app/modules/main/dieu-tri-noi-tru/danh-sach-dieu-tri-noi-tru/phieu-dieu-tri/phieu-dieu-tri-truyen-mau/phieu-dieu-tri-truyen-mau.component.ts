import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/border-color';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ChiTietDieuTriNoiTruViewModel, KeMauVaChePhamDieuTriNoiTru } from '../../../dieu-tri-noi-tru.model';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { SuaTruyenMauPopupComponent } from '../sua-truyen-mau-popup/sua-truyen-mau-popup.component';

@Component({
  selector: 'app-phieu-dieu-tri-truyen-mau',
  templateUrl: './phieu-dieu-tri-truyen-mau.component.html',
  styleUrls: ['./phieu-dieu-tri-truyen-mau.component.scss']
})
export class PhieuDieuTriTruyenMauComponent implements OnInit {

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  keMauVaCPNew: KeMauVaChePhamDieuTriNoiTru = new KeMauVaChePhamDieuTriNoiTru();
  keMauVaCPEdit: KeMauVaChePhamDieuTriNoiTru = new KeMauVaChePhamDieuTriNoiTru();
  keMauVaCPDelete: KeMauVaChePhamDieuTriNoiTru = new KeMauVaChePhamDieuTriNoiTru();
  validationErrors: any;
  isSelectDuocPham: boolean = false;
  yeuCauTiepNhanId: number = null;
  popupAddingData: any = null;
  icDelete = icDelete;
  icEdit = icEdit;
  gridTruyenMauColumns: any[] = [];
  additionString: any = null;
  isShowGrid: boolean = null;
  popupDeletingData: any = null;

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('nhomMauRHTemplate', { static: true }) nhomMauRHTemplate: TemplateRef<any>;
  @ViewChild('isFocus', { static: false }) isFocus: ComboboxComponent;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('gridTruyenMau', { static: false }) gridTruyenMau: GridComponent;
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('donGiaDVTemplate', { static: true }) donGiaDVTemplate: TemplateRef<any>;
  @ViewChild('donGiaBHTemplate', { static: true }) donGiaBHTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;

  laKhoaKhamBenhChiDinh: boolean = true;
  @Input() khoaChiDinh: any;
  @Input() phieuDieuTriHienTaiId: any;
  @Input() dataBenhNhan: any;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() disabledInPhieu: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef,
    private authService: AuthService,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.yeuCauTiepNhanId = id;
      this.additionString = this.yeuCauTiepNhanId + ";" + this.phieuDieuTriHienTaiId;
    }
    if (this.khoaChiDinh === this.dieuTriNoiTruModel.Khoa) {
      this.laKhoaKhamBenhChiDinh = true;
    }
    else {
      this.laKhoaKhamBenhChiDinh = false;
    }
    this.gridTruyenMauColumns = [

      { Field: "Action", Title: "", Width: 50, Sortable: false, Template: this.actionTemplate, Hidden: this.dataBenhNhan.KetThucBenhAn },
      // { Field: "STT", Title: "#", Width: 30, Sortable: false, Template: this.STTTemplate },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "Tên", Width: 170, Sortable: false, ShowTooltip: true },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 70, Sortable: false, Template: this.thanhTienTemplate },
      { Field: "NhomMau", Title: "Nhóm Máu", Width: 70, Sortable: false, Template: this.nhomMauRHTemplate },
      { Field: "DonGiaBan", Title: "Đơn Giá DV", Width: 70, Sortable: false, Template: this.donGiaDVTemplate },
      { Field: "DonGiaBaoHiem", Title: "Đơn Giá BH", Width: 100, Sortable: false, Template: this.donGiaBHTemplate },
      { Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "ThoiDiemChiDinhDisplay", Title: "Thời gian chỉ định", Width: 100, Sortable: false, ShowTooltip: true },
      { Field: "TrangThai", Title: "Trạng Thái", Width: 100, Sortable: false, Template: this.trangThaiTemplate },
    ];
    this.kiemTraPhieuDieuTriTheoKhoaChiDinh(this.yeuCauTiepNhanId, this.phieuDieuTriHienTaiId);

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['phieuDieuTriHienTaiId'] && changes['phieuDieuTriHienTaiId'].previousValue != null && changes['phieuDieuTriHienTaiId'].previousValue != changes['phieuDieuTriHienTaiId'].currentValue) {
      this.phieuDieuTriHienTaiId = changes.phieuDieuTriHienTaiId.currentValue;
      this.additionString = this.yeuCauTiepNhanId + ";" + this.phieuDieuTriHienTaiId;
      this.kiemTraPhieuDieuTriTheoKhoaChiDinh(this.yeuCauTiepNhanId, this.phieuDieuTriHienTaiId);
      this.gridTruyenMau._additionalSearchString = this.additionString;
      this.gridTruyenMau.search();
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


  onDataBoundChild(event: any) {
    if (event != undefined && event != null) {
      if (event.TotalRowCount == 0) {
        this.disabledInPhieu.emit(false);
      } else {
        this.disabledInPhieu.emit(true);
      }
    }
  }


  onkeyFocus() {
    this.isFocus.onKeytoFocus();
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
        this.themYeuCauTM();
        this.onkeyFocus();
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }

  chonMauVaChePham(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.keMauVaCPNew.TheTich = dataItem.TheTich;
      this.keMauVaCPNew.DonGia = dataItem.DonGia;
      this.keMauVaCPNew.ThanhTien = dataItem.ThanhTien;
    } else {
      this.keMauVaCPNew.TheTich = null;
    }
  }

  nhomMauRHChange(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      let nhomMauRHId = dataItem.split(";");
      this.keMauVaCPNew.NhomMau = nhomMauRHId[0];
      this.keMauVaCPNew.YeuToRh = nhomMauRHId[1];
    } else {
      this.keMauVaCPNew.NhomMau = null;
      this.keMauVaCPNew.YeuToRh = null;

    }
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

  huy() {
    this.keMauVaCPNew = new KeMauVaChePhamDieuTriNoiTru();
  }


  dangXuLy:boolean=false;
  themYeuCauTM() {
    if(this.dangXuLy)
        return;
    this.dangXuLy=true;
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    self.keMauVaCPNew.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.keMauVaCPNew.Id = self.phieuDieuTriHienTaiId;
    self.onkeyFocus();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      self.addingPage();
      self.apiService.post<any>("DieuTriNoiTru/ThemYeuCauTruyenMau", self.keMauVaCPNew).subscribe(
        () => {
          self.closePopupAddingData();
          let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
          self.notificationService.showSuccess(mess);
          self.gridTruyenMau.search();
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

  suaYeuCauTM(dataItem: any) {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    self.keMauVaCPEdit = Object.assign({}, dataItem);
    self.keMauVaCPEdit.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.dialog.open(SuaTruyenMauPopupComponent, {
        disableClose: false,
        width: '800px',
        data: self.keMauVaCPEdit,
      }).afterClosed().subscribe(() => {
        self.gridTruyenMau.search();
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
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

  xoaYeuCauTM(dataItem: any) {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    //self.gridThuoc.ngOnDestroy();
    self.keMauVaCPDelete = dataItem;
    self.keMauVaCPDelete.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    let comfirm = "xóa";
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "lần truyền máu"]) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.deletingPage();
          self.apiService.post("DieuTriNoiTru/XoaYeuCauTruyenMau", self.keMauVaCPDelete).subscribe(
            () => {
              self.closePopupDeletingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              self.gridTruyenMau.search();
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
}
