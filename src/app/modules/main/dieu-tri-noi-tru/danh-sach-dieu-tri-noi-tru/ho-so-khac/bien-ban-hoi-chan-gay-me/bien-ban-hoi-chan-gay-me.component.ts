import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, TemplateRef, ViewChild, ViewRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/border-color';
import icClear from '@iconify/icons-ic/twotone-clear';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { BienBanGayMeGayTe, BienBanGayMeGayTeJSON, ChiTietDieuTriNoiTruViewModel, NoiTruHoSoKhacFileDinhKemViewModel, ThongTinQuanHeThanNhan } from '../../../dieu-tri-noi-tru.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { BienBanGayMePopupComponent } from '../bien-ban-gay-me-popup/bien-ban-gay-me-popup.component';

@Component({
  selector: 'app-bien-ban-hoi-chan-gay-me',
  templateUrl: './bien-ban-hoi-chan-gay-me.component.html',
  styleUrls: ['./bien-ban-hoi-chan-gay-me.component.scss']
})
export class BienBanHoiChanGayMeComponent implements OnInit {
  bienBanGayMeGayTe: BienBanGayMeGayTe = new BienBanGayMeGayTe();
  bienBanGayMeGayTeJSON: BienBanGayMeGayTeJSON = new BienBanGayMeGayTeJSON();
  bienBanGayMeGayTePre: BienBanGayMeGayTe = new BienBanGayMeGayTe();

  thongTinQHTN: ThongTinQuanHeThanNhan = new ThongTinQuanHeThanNhan();
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  validationErrors: any[] = [];
  popupSavingData: any = null;
  popupLoadingData: any = null;
  noiTruHoSoKhacId: number = 0;
  gridDataSource: any = {
    data: [],
    total: 0
  }
  icAdd = icAdd;
  icDelete = icDelete;
  icEdit = icEdit;
  icClear = icClear;
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  gridColumns: any[] = [];
  @ViewChild('gridQHTN', { static: true }) gridQHTN: GridComponent;

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('footerTemplate', { static: true }) footerTemplate: TemplateRef<any>;
  @ViewChild('namSinhTemplate', { static: true }) namSinhTemplate: TemplateRef<any>;
  @ViewChild('quanHeTemplate', { static: true }) quanHeTemplate: TemplateRef<any>;
  @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;
  @ViewChild('diaChiTemplate', { static: true }) diaChiTemplate: TemplateRef<any>;
  @ViewChild('cMNDTemplate', { static: true }) cMNDTemplate: TemplateRef<any>;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Input() IsKetThucBenhAn: any;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();

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
      this.bienBanGayMeGayTe.YeuCauTiepNhanId = id;
      this.getById(id);
    }
    this.bienBanGayMeGayTe.IsDataChange = false;
    this.gridColumns = [
      { Field: "HoTen", Title: "Họ Tên", Width: 100, Template: this.hoTenTemplate },
      { Field: "NamSinh", Title: "Năm sinh", Width: 40, Template: this.namSinhTemplate },
      { Field: "CMND", Title: "CMND", Width: 70, Template: this.cMNDTemplate },
      { Field: "QuanHe", Title: "Quan hệ", Width: 50, Template: this.quanHeTemplate, TemplateFooter: this.footerTemplate },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 200, Template: this.diaChiTemplate },
      { Field: "Action", Title: "", Width: 30, Template: this.actionTemplate }
    ];
    this.nhanVienDangNhap();
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

  luuBienBan() {
    var self = this;
    if (self.bienBanGayMeGayTe.ThongTinQuanHeThanNhans.length != 0) {
      self.bienBanGayMeGayTe.ThongTinQuanHeThanNhans = [];
    }
    self.bienBanGayMeGayTe.ThongTinQuanHeThanNhans = self.gridDataSource.data;
    // self.bienBanGayMeGayTe.ThongTinQuanHeThanNhans.forEach((data, index) => {
    //   data.Id = index + 1;
    // });
    self.bienBanGayMeGayTeJSON.ThongTinQuanHeThanNhans = self.gridDataSource.data;
    // self.bienBanGayMeGayTeJSON.ThongTinQuanHeThanNhans.forEach((data, index) => {
    //   data.Id = index + 1;
    // });
    self.bienBanGayMeGayTeJSON.NhanVienGiaiThichId = self.bienBanGayMeGayTe.NhanVienGiaiThichId;
    self.bienBanGayMeGayTe.ThongTinHoSo = JSON.stringify(self.bienBanGayMeGayTeJSON);
    if (self.bienBanGayMeGayTe.NoiTruHoSoKhacFileDinhKems == null) {
      self.bienBanGayMeGayTe.NoiTruHoSoKhacFileDinhKems = new Array<NoiTruHoSoKhacFileDinhKemViewModel>();
    }

    //console.log("data :", self.bienBanGayMeGayTe)

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
          self.apiService.post<any>("DieuTriNoiTru/ThemHoacCapNhatGayMeGayTe", self.bienBanGayMeGayTe).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.closePopupSavingData();
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.bienBanGayMeGayTe.Id = result.Id;
                self.returnId.emit(self.bienBanGayMeGayTe.Id);
                self.bienBanGayMeGayTe.LastModified = result.LastModified;
                self.bienBanGayMeGayTe.IsDataChange = false;
                self.bienBanGayMeGayTe.ThongTinQuanHeThanNhans = result.ThongTinQuanHeThanNhans;
                self.ganLaiGridQuanHeThanNhan();
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

  ganLaiGridQuanHeThanNhan() {
    this.gridDataSource = [];
    this.gridDataSource = {
      data: this.bienBanGayMeGayTe.ThongTinQuanHeThanNhans,
      total: this.bienBanGayMeGayTe.ThongTinQuanHeThanNhans.length
    };

    if (!(this.ref as ViewRef).destroyed) {
      this.ref.detectChanges();
    }

    if (this.gridQHTN != undefined) {
      this.gridQHTN.setDataSource();
    }
  }

  inBienBan() {
    var self = this;
    if (this.IsKetThucBenhAn) {
      var showDialog = self.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải dữ liệu...' }
      });
      self.apiService.post<any>("DieuTriNoiTru/InBienBanGayMeGayTe?noiTruHoSoKhacId=" + self.bienBanGayMeGayTe.Id).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            showDialog.close();
            self.dialog.open(BienBanGayMePopupComponent, {
              disableClose: false,
              width: '1200px',
              data: { Title: 'BIÊN BẢN CAM KẾT ĐỒNG Ý GÂY MÊ/ GÂY TÊ', Data: resData },
            }
            ).afterClosed().subscribe(() => {
              showDialog.close();
            });
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          showDialog.close();

        }
      );
    }
    else {
      if (self.bienBanGayMeGayTe.ThongTinQuanHeThanNhans.length != 0) {
        self.bienBanGayMeGayTe.ThongTinQuanHeThanNhans = [];
      }
      self.bienBanGayMeGayTe.ThongTinQuanHeThanNhans = self.gridDataSource.data;
      self.bienBanGayMeGayTeJSON.ThongTinQuanHeThanNhans = self.gridDataSource.data;
      self.bienBanGayMeGayTeJSON.NhanVienGiaiThichId = self.bienBanGayMeGayTe.NhanVienGiaiThichId;
      self.bienBanGayMeGayTe.ThongTinHoSo = JSON.stringify(self.bienBanGayMeGayTeJSON);
      if (self.bienBanGayMeGayTe.NoiTruHoSoKhacFileDinhKems == null) {
        self.bienBanGayMeGayTe.NoiTruHoSoKhacFileDinhKems = new Array<NoiTruHoSoKhacFileDinhKemViewModel>();
      }
      // self.bienBanGayMeGayTe.ThongTinQuanHeThanNhans.forEach((data, index) => {
      //   data.Id = index++;
      // });
      self.validationErrors = [];
      self.ref.detectChanges();
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
        var showDialog = self.dialog.open(LoadingComponent, {
          disableClose: true,
          width: '200px',
          height: '90px',
          data: { Title: 'Đang tải dữ liệu...' }
        });
        self.apiService.post<any>("DieuTriNoiTru/ThemHoacCapNhatGayMeGayTe", self.bienBanGayMeGayTe).subscribe(
          (result) => {
            if (result != undefined && result != null) {
              self.bienBanGayMeGayTe.Id = result.Id;
              self.bienBanGayMeGayTe.LastModified = result.LastModified;
              self.bienBanGayMeGayTe.IsDataChange = false;
              self.bienBanGayMeGayTe.ThongTinQuanHeThanNhans = result.ThongTinQuanHeThanNhans;
              self.ganLaiGridQuanHeThanNhan();
              self.ganThongTinPre();
              showDialog.close();
              self.apiService.post<any>("DieuTriNoiTru/InBienBanGayMeGayTe?noiTruHoSoKhacId=" + self.bienBanGayMeGayTe.Id).subscribe(
                resData => {
                  if (resData != undefined && resData != null) {
                    self.dialog.open(BienBanGayMePopupComponent, {
                      disableClose: false,
                      width: '1200px',
                      data: { Title: 'BIÊN BẢN CAM KẾT ĐỒNG Ý GÂY MÊ/ GÂY TÊ', Data: resData },
                    }
                    ).afterClosed().subscribe(() => {
                    });
                  }
                },
                (err: ApiError) => {
                  self.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                  }
                }
              );

            }

          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
            showDialog.close();
          });
      } else {
        self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }

  }

  huy() {
    this.ref.detectChanges();
    this.validationErrors = [];
    this.bienBanGayMeGayTe.IsDataChange = false;
    this.bienBanGayMeGayTe.NhanVienGiaiThichId = this.bienBanGayMeGayTePre.NhanVienGiaiThichId;
    this.bienBanGayMeGayTe.TenNhanVienGiaiThich = this.bienBanGayMeGayTePre.TenNhanVienGiaiThich;
    this.bienBanGayMeGayTe.NhanVienThucHienId = this.bienBanGayMeGayTePre.NhanVienThucHienId;
    this.bienBanGayMeGayTe.TenNhanVienThucHien = this.bienBanGayMeGayTePre.TenNhanVienThucHien;
    this.bienBanGayMeGayTe.ThoiDiemThucHien = this.bienBanGayMeGayTePre.ThoiDiemThucHien;
    // this.bienBanGayMeGayTe.ThoiDiemThucHienDisplay = this.bienBanGayMeGayTePre.ThoiDiemThucHienDisplay;

    const thongTinQuanHeThanNhans = [];
    this.bienBanGayMeGayTePre.ThongTinQuanHeThanNhans.forEach(val => thongTinQuanHeThanNhans.push(Object.assign({}, val)));
    this.bienBanGayMeGayTe.ThongTinQuanHeThanNhans = thongTinQuanHeThanNhans;
    const noiTruHoSoKhacFileDinhKems = [];
    this.bienBanGayMeGayTePre.NoiTruHoSoKhacFileDinhKems.forEach(val => noiTruHoSoKhacFileDinhKems.push(Object.assign({}, val)));
    this.bienBanGayMeGayTe.NoiTruHoSoKhacFileDinhKems = noiTruHoSoKhacFileDinhKems;
    this.gridDataSource.data = this.bienBanGayMeGayTe.ThongTinQuanHeThanNhans;
  }

  themNguoiLienHe() {
    this.validationErrors = [];
    this.gridDataSource.data.push(new ThongTinQuanHeThanNhan());
    this.isDataChange();
  }

  xoa(dataItem: any) {
    this.validationErrors = [];
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        this.gridDataSource.data.splice(this.gridDataSource.data.findIndex((x: any) => x == dataItem), 1);
        this.isDataChange();
      }
    });
  }

  nhanVienDangNhap() {
    var self = this;
    self.apiService.post<any>("DieuTriNoiTru/ThongTinNhanVienDangNhap").subscribe(
      (result) => {
        this.bienBanGayMeGayTe.NhanVienDangNhap = result.NhanVienDangNhap;
        if (this.bienBanGayMeGayTe.ThoiDiemThucHienDisplay == null || this.bienBanGayMeGayTe.ThoiDiemThucHienDisplay == "") {
          this.bienBanGayMeGayTe.ThoiDiemThucHienDisplay = result.NgayThucHienDisplay;
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }

  // dateChange(dataItem: any) {
  //   if (dataItem != undefined && dataItem != null) {
  //     this.bienBanGayMeGayTe.ThoiDiemThucHienDisplay = CommonService.formatDateTimeSACH(dataItem, "dd/mm/yyyy");
  //   } else {
  //     this.bienBanGayMeGayTe.ThoiDiemThucHienDisplay = null;
  //   }
  //   this.isDataChange();
  // }

  isDataChange() {
    this.bienBanGayMeGayTe.IsDataChange = true;
  }

  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.loadingPage();
      self.apiService.get<BienBanGayMeGayTe>("DieuTriNoiTru/GetHoSoKhacGayMe?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            //console.log("resultData: ", resultData)
            self.bienBanGayMeGayTe = resultData;
            self.returnId.emit(self.bienBanGayMeGayTe.Id);
            self.gridDataSource.data = resultData.ThongTinQuanHeThanNhans;
            self.noiTruHoSoKhacId = resultData.Id;
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

  ganThongTinPre() {
    this.bienBanGayMeGayTePre = Object.assign({}, this.bienBanGayMeGayTe);
    const thongTinQuanHeThanNhans = [];
    this.bienBanGayMeGayTe.ThongTinQuanHeThanNhans.forEach(val => thongTinQuanHeThanNhans.push(Object.assign({}, val)));
    this.bienBanGayMeGayTePre.ThongTinQuanHeThanNhans = thongTinQuanHeThanNhans;
    const fileChuKys = [];
    this.bienBanGayMeGayTe.NoiTruHoSoKhacFileDinhKems.forEach(val => fileChuKys.push(Object.assign({}, val)));
    this.bienBanGayMeGayTePre.NoiTruHoSoKhacFileDinhKems = fileChuKys;
  }
}
