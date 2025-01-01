import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/search';
import icDone from '@iconify/icons-ic/check-circle';
import icClear from '@iconify/icons-ic/highlight-off';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { LayMauXetNghiemInPhieuGuiMauComponent } from '../lay-mau-xet-nghiem-in-phieu-gui-mau/lay-mau-xet-nghiem-in-phieu-gui-mau.component';
import { GuiMauXetNghiem, LayMauXetNghiemTimKiem, XacNhanLayMauXetNghiem } from '../lay-mau-xet-nghiem.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-lay-mau-xet-nghiem-create',
  templateUrl: './lay-mau-xet-nghiem-create.component.html',
  styleUrls: ['./lay-mau-xet-nghiem-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class LayMauXetNghiemCreateComponent implements OnInit {

  icDelete = icDelete;
  icClose = icClose;
  icSearch = icSearch;
  icDone = icDone;
  icClear = icClear;

  baseRoute = 'xet-nghiem/lay-mau';
  loading: boolean = false;
  validationErrors: any;
  popupLoadingData: any;

  documentType: DocumentType;
  gridNhomXetNghiemColumns: any[] = [];
  gridDichVuColumns: any[] = [];

  phieuGuiMau: GuiMauXetNghiem = new GuiMauXetNghiem();
  soLuongMauDeGui: number = null;
  strAdditionalSearchString: string = "";
  timKiemNangCaoObj: LayMauXetNghiemTimKiem = new LayMauXetNghiemTimKiem();

  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('actionNhomXetNghiemTemplate', { static: true }) actionNhomXetNghiemTemplate: TemplateRef<any>;

  @ViewChild('tenNhomTemplate', { static: true }) tenNhomTemplate: TemplateRef<any>;
  @ViewChild('loaiMauTemplate', { static: true }) loaiMauTemplate: TemplateRef<any>;
  @ViewChild('tenLoaiMauTemplate', { static: true }) tenLoaiMauTemplate: TemplateRef<any>;
  @ViewChild('thoiGianChiDinhTemplate', { static: true }) thoiGianChiDinhTemplate: TemplateRef<any>;
  @ViewChild('gridNhom', { read: GridComponent, static: false }) gridNhom: GridComponent;

  constructor(private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<LayMauXetNghiemCreateComponent>) { }

  ngOnInit() {
    this.showPopupLoadingData();
    this.documentType = DocumentType.LayMauXetNghiem;
    this.phieuGuiMau.ThoiDiemGuiMau = new Date();
    this.phieuGuiMau.NhanVienGuiMauId = this.authService.getAccessUser().Id;

    this.timKiemNangCaoObj.TrangThai.ChoLayMau = false;
    this.timKiemNangCaoObj.TrangThai.ChoKetQua = false;
    this.timKiemNangCaoObj.TrangThai.DaCoKetQUa = false;
    this.strAdditionalSearchString = JSON.stringify(this.timKiemNangCaoObj);

    this.gridNhomXetNghiemColumns = [
      { Field: "TenNhom", Title: "Xét nghiệm", Width: 120, Template: this.tenNhomTemplate},
      { Field: "Barcode", Title: "Mã barcode", Width: 100},
      { Field: "LoaiMau", Title: "Loại mẫu", Width: 160, Template: this.loaiMauTemplate},
      { Field: "MaTiepNhan", Title: "Mã TN", Width: 100},
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 100},
      { Field: "HoTen", Title: "Họ tên", Width: 160},
      { Field: "NamSinh", Title: "Năm sinh", Width: 100},
      { Field: "GioiTinh", Title: "Giới tính", Width: 100},
      { Field: "Action", Title: "", Width: 30, Template: this.actionNhomXetNghiemTemplate}
    ];

    this.gridDichVuColumns = [
      { Field: "MaDichVu", Title: "Mã DV", Width: 80},
      { Field: "TenDichVu", Title: "Tên DV", Width: 180},
      { Field: "ThoiGianChiDinh", Title: "Thời gian chỉ định", Width: 100, Template: this.thoiGianChiDinhTemplate},
      { Field: "NguoiChiDinh", Title: "Người chỉ định", Width: 120},
      { Field: "BenhPham", Title: "Bệnh phẩm", Width: 120},
      { Field: "LoaiMau", Title: "Loại mẫu", Width: 120, Template: this.tenLoaiMauTemplate}
    ];
  }

  guiVaInPhieu(){
    if (this.authService.hasPermission(DocumentType.GoiMauXetNghiem, SecurityOperation.Add)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửi các mẫu này không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.loading = true;
          self.validationErrors = [];

          // xử lý lặp, get list nhóm cần gửi
          self.phieuGuiMau.NhomMauGuis = [];
          if (self.gridNhom._gridDataSource != undefined) {
            self.gridNhom._gridDataSource.data.forEach(element => {
              let newNhomMauKhongGui = new XacNhanLayMauXetNghiem(
                element.YeuCauTiepNhanId,
                element.BenhNhanId,
                element.PhienXetNghiemId,
                element.NhomDichVuBenhVienId,
                element.BarcodeNumber,
                element.BarcodeId);

              self.phieuGuiMau.NhomMauGuis.push(newNhomMauKhongGui);
            });
          }
          self.apiService.post<string>("XetNghiem/XuLyGuiMauXetNghiem", self.phieuGuiMau).subscribe(resultData => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Gửi mẫu"]));
            self.loading = false;
            if (resultData != undefined && resultData != null) {
              self.dialog.open(LayMauXetNghiemInPhieuGuiMauComponent, {
                disableClose: false,
                width: '1200px',
                data: resultData,
              }).afterClosed().subscribe(result => {
                  self.quayLai(true);
              });
            }
          },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              self.loading = false;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });
          }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  quayLai(value: boolean = false) {
    this.dialogRef.close(value);
  }

  onDataBoundGridNhom(event){
    this.soLuongMauDeGui = event.Data.length;
    this.closePopupLoadingData();
  }

  thongTinTuChoi: any;
  tooltipCustom(loaiMauXetNghiem: any) {
    this.thongTinTuChoi = loaiMauXetNghiem;
  }

  xuLyKhongGuiNhomMauXetNghiem(dataItem)
  {
    if(dataItem != undefined && dataItem != null)
    {
      let index = this.gridNhom._gridDataSource.data.indexOf(dataItem);
      if(index != -1)
      {
        this.gridNhom._gridDataSource.data.splice(index, 1);
        if(this.soLuongMauDeGui > 0)
        {
          this.soLuongMauDeGui--;
        }
      }
    }
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
}
