import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAdd from '@iconify/icons-ic/twotone-add';
import { ChiTietDieuTriNoiTruViewModel, PhieuChamSocSoSinh, PhieuChamSocSoSinhJSON, ThongTinHoSoPhieuChamSocSoSinh } from '../../../dieu-tri-noi-tru.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

@Component({
  selector: 'app-phieu-cham-soc-so-sinh',
  templateUrl: './phieu-cham-soc-so-sinh.component.html',
  styleUrls: ['./phieu-cham-soc-so-sinh.component.scss']
})
export class PhieuChamSocSoSinhComponent implements OnInit {
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  phieuChamSocSoSinh: PhieuChamSocSoSinh = new PhieuChamSocSoSinh();
  phieuChamSocSoSinhJSON: PhieuChamSocSoSinhJSON = new PhieuChamSocSoSinhJSON();
  phieuChamSocSoSinhPre: PhieuChamSocSoSinh = new PhieuChamSocSoSinh();
  popupSavingData: any = null;
  popupLoadingData: any = null;
  gridDataSource: any = {
    data: [],
    total: 0
  }
  gridColumns: any[] = [];
  icAdd = icAdd;
  icDelete = icDelete;
  validationErrors: any[] = [];

  @ViewChild('ngayTemplate', { static: true }) ngayTemplate: TemplateRef<any>;
  @ViewChild('sLAnTemplate', { static: true }) sLAnTemplate: TemplateRef<any>;
  @ViewChild('nonChoTemplate', { static: true }) nonChoTemplate: TemplateRef<any>;
  @ViewChild('nuocTieuTemplate', { static: true }) nuocTieuTemplate: TemplateRef<any>;
  @ViewChild('vangDaTemplate', { static: true }) vangDaTemplate: TemplateRef<any>;
  @ViewChild('xaTriTemplate', { static: true }) xaTriTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('footerTemplate', { static: true }) footerTemplate: TemplateRef<any>;
  @ViewChild('gridPhieuSoSinh', { static: true }) gridPhieuSoSinh: GridComponent;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef,
    private authService: AuthService,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    const id: number = this.dieuTriNoiTruModel.Id;
    if (id != undefined && id != null) {
      this.phieuChamSocSoSinh.YeuCauTiepNhanId = id;
      this.getById(id);
    }
    this.phieuChamSocSoSinh.IsDataChange = false;
    this.gridColumns = [
      { Field: "Ngay", Title: "Ngày", Width: 75, Template: this.ngayTemplate },
      { Field: "SLAn", Title: "SL Ăn(ml)", Width: 50, Template: this.sLAnTemplate },
      { Field: "NonCho", Title: "Nôn chở", Width: 50, Template: this.nonChoTemplate },
      { Field: "NuocTieu", Title: "Nước tiểu", Width: 50, Template: this.nuocTieuTemplate, TemplateFooter: this.footerTemplate },
      { Field: "VangDa", Title: "Vàng da", Width: 50, Template: this.vangDaTemplate },
      { Field: "XaTriChamSocDanhGia", Title: "Xạ trị chăm sóc đánh giá", Width: 120, Template: this.xaTriTemplate },
      { Field: "Action", Title: "", Width: 30, Template: this.actionTemplate }
    ];
    this.nhanVienDangNhap();
  }

  nhanVienDangNhap() {
    var self = this;
    self.apiService.post<any>("DieuTriNoiTru/ThongTinNhanVienDangNhap").subscribe(
      (result) => {
        this.phieuChamSocSoSinh.NhanVienDangNhap = result.NhanVienDangNhap;
        this.phieuChamSocSoSinh.ThoiDiemThucHien = result.NgayThucHien;
        this.phieuChamSocSoSinh.ThoiDiemThucHienDisplay = result.NgayThucHienDisplay;
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
  savingPage() {
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

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }
  isDataChange() {
    this.phieuChamSocSoSinh.IsDataChange = true;
  }

  xoa(dataItem: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.validationErrors = [];
        this.gridDataSource.data.splice(this.gridDataSource.data.findIndex((x: any) => x == dataItem), 1);
        this.isDataChange();
      }
    });
  }

  themThongTinKhac() {
    this.validationErrors = [];
    this.gridDataSource.data.push(new ThongTinHoSoPhieuChamSocSoSinh());
    this.isDataChange();
  }

  huy() {
    this.ref.detectChanges();
    this.validationErrors = [];
    this.phieuChamSocSoSinh.IsDataChange = false;
    this.phieuChamSocSoSinh.ICDId = this.phieuChamSocSoSinhPre.ICDId;
    this.phieuChamSocSoSinh.TenICD = this.phieuChamSocSoSinhPre.TenICD;

    const thongTinHoSoPhieuChamSocSoSinhs = [];
    this.phieuChamSocSoSinhPre.ThongTinHoSoPhieuChamSocSoSinhs.forEach(val => thongTinHoSoPhieuChamSocSoSinhs.push(Object.assign({}, val)));
    this.phieuChamSocSoSinh.ThongTinHoSoPhieuChamSocSoSinhs = thongTinHoSoPhieuChamSocSoSinhs;
    this.gridDataSource.data = this.phieuChamSocSoSinh.ThongTinHoSoPhieuChamSocSoSinhs;
  }

  ganThongTinPre() {
    this.phieuChamSocSoSinhPre = Object.assign({}, this.phieuChamSocSoSinh);
    const thongTinHoSoPhieuChamSocSoSinhs = [];
    this.phieuChamSocSoSinh.ThongTinHoSoPhieuChamSocSoSinhs.forEach(val => thongTinHoSoPhieuChamSocSoSinhs.push(Object.assign({}, val)));
    this.phieuChamSocSoSinhPre.ThongTinHoSoPhieuChamSocSoSinhs = thongTinHoSoPhieuChamSocSoSinhs;
  }

  iCDSelectionChange(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.phieuChamSocSoSinh.TenICD = dataItem.DisplayName;
      this.phieuChamSocSoSinh.ICDId = dataItem.KeyId;
    }
    else {
      this.phieuChamSocSoSinh.TenICD = null;
      this.phieuChamSocSoSinh.ICDId = null;
    }
  }

  luuBienBan() {
    var self = this;
    if (self.phieuChamSocSoSinh.ThongTinHoSoPhieuChamSocSoSinhs.length != 0) {
      self.phieuChamSocSoSinh.ThongTinHoSoPhieuChamSocSoSinhs = [];
    }
    self.phieuChamSocSoSinh.ThongTinHoSoPhieuChamSocSoSinhs = self.gridDataSource.data;
    self.phieuChamSocSoSinhJSON.ThongTinHoSoPhieuChamSocSoSinhs = self.gridDataSource.data;
    self.phieuChamSocSoSinhJSON.ICDId = self.phieuChamSocSoSinh.ICDId;
    self.phieuChamSocSoSinhJSON.TenICD = self.phieuChamSocSoSinh.TenICD;
    self.phieuChamSocSoSinh.ThongTinHoSo = JSON.stringify(self.phieuChamSocSoSinhJSON);
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu những thông tin này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.savingPage();
          self.apiService.post<any>("DieuTriNoiTru/ThemHoacCapNhatPhieuChamSocSoSinh", self.phieuChamSocSoSinh).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.closePopupSavingData();
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.phieuChamSocSoSinh.Id = result.Id;
                self.phieuChamSocSoSinh.LastModified = result.LastModified;
                self.phieuChamSocSoSinh.IsDataChange = false;
                self.ganThongTinPre();

              }

            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupSavingData();
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })

  }

  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.loadingPage();
      self.apiService.get<PhieuChamSocSoSinh>("DieuTriNoiTru/GetPhieuChamSocSoSinh?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            //console.log("resultData: ", resultData)
            self.phieuChamSocSoSinh = resultData;
            self.gridDataSource.data = resultData.ThongTinHoSoPhieuChamSocSoSinhs;
            self.nhanVienDangNhap();
            self.ganThongTinPre();
          }
          self.closePopupLoadingData();

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
  inBienBan() {

  }
}
