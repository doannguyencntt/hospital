import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild,Output,EventEmitter } from '@angular/core';
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
import { BanKiemTiemChungTreEm, BanKiemTiemChungTreEmJSON, ChiTietDieuTriNoiTruViewModel, NoiTruHoSoKhacFileDinhKemViewModel } from '../../../dieu-tri-noi-tru.model';
import icClear from '@iconify/icons-ic/twotone-clear';
import { BanKiemTruocTiemChungTreEmPopupComponent } from '../ban-kiem-truoc-tiem-chung-tre-em-popup/ban-kiem-truoc-tiem-chung-tre-em-popup.component';

@Component({
  selector: 'app-ban-kiem-truoc-tiem-chung-tre-em',
  templateUrl: './ban-kiem-truoc-tiem-chung-tre-em.component.html',
  styleUrls: ['./ban-kiem-truoc-tiem-chung-tre-em.component.scss']
})
export class BanKiemTruocTiemChungTreEmComponent implements OnInit {
  banKiemTiemChungTreEm: BanKiemTiemChungTreEm = new BanKiemTiemChungTreEm();
  banKiemTiemChungTreEmJSON: BanKiemTiemChungTreEmJSON = new BanKiemTiemChungTreEmJSON();
  banKiemTiemChungTreEmPre: BanKiemTiemChungTreEm = new BanKiemTiemChungTreEm();
  icClear = icClear;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  validationErrors: any[] = [];
  popupSavingData: any = null;
  popupLoadingData: any = null;
  noiTruHoSoKhacId: number = 0;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
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
    this.banKiemTiemChungTreEm = new BanKiemTiemChungTreEm();
    const id: number = this.dieuTriNoiTruModel.Id;
    if (id != undefined && id != null) {
      this.banKiemTiemChungTreEm.YeuCauTiepNhanId = id;
      this.getById(id);
    }
    this.banKiemTiemChungTreEm.IsDataChange = false;
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

  nhanVienDangNhap() {
    var self = this;
    self.apiService.post<any>("DieuTriNoiTru/ThongTinNhanVienDangNhap").subscribe(
      (result) => {
        this.banKiemTiemChungTreEm.NhanVienDangNhap = result.NhanVienDangNhap;
        this.banKiemTiemChungTreEm.ThoiDiemThucHienDisplay = result.NgayThucHienDisplay;
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }

  dateChange(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.banKiemTiemChungTreEm.ThoiDiemThucHienDisplay = CommonService.formatDateTimeSACH(dataItem, "dd/mm/yyyy");
    } else {
      this.banKiemTiemChungTreEm.ThoiDiemThucHienDisplay = null;
    }
    this.isDataChange();
  }

  isDataChange() {
    this.banKiemTiemChungTreEm.IsDataChange = true;
  }
  huy() {
    this.ref.detectChanges();
    this.validationErrors = [];
    this.banKiemTiemChungTreEm.IsDataChange = false;
    this.banKiemTiemChungTreEm.DuocPhamIds = this.banKiemTiemChungTreEmPre.DuocPhamIds;
    this.banKiemTiemChungTreEm.SotHaThanNhiet = this.banKiemTiemChungTreEmPre.SotHaThanNhiet;
    this.banKiemTiemChungTreEm.NgheTimBatThuong = this.banKiemTiemChungTreEmPre.NgheTimBatThuong;
    this.banKiemTiemChungTreEm.NghePhoiBatThuong = this.banKiemTiemChungTreEmPre.NghePhoiBatThuong;
    this.banKiemTiemChungTreEm.TriGiacBatThuong = this.banKiemTiemChungTreEmPre.TriGiacBatThuong;
    this.banKiemTiemChungTreEm.CanNangDuoi2000g = this.banKiemTiemChungTreEmPre.CanNangDuoi2000g;
    this.banKiemTiemChungTreEm.CoCacChongChiDinhKhac = this.banKiemTiemChungTreEmPre.CoCacChongChiDinhKhac;
    this.banKiemTiemChungTreEm.DuDieuKienTiemChung = this.banKiemTiemChungTreEmPre.DuDieuKienTiemChung;
    this.banKiemTiemChungTreEm.TamHoanTiemChung = this.banKiemTiemChungTreEmPre.TamHoanTiemChung;
    this.banKiemTiemChungTreEm.NhanVienThucHienId = this.banKiemTiemChungTreEmPre.NhanVienThucHienId;
    this.banKiemTiemChungTreEm.TenNhanVienThucHien = this.banKiemTiemChungTreEmPre.TenNhanVienThucHien;
    this.banKiemTiemChungTreEm.ThoiDiemThucHienDisplay = null;
    if(this.banKiemTiemChungTreEm.ThoiDiemThucHienDisplay == null)
    {
      this.apiService.post<any>("DieuTriNoiTru/ThongTinNhanVienDangNhap").subscribe(
        (result) => {
          this.banKiemTiemChungTreEm.ThoiDiemThucHienDisplay = result.NgayThucHienDisplay;
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    }
    
    // this.banKiemTiemChungTreEm.ThoiDiemThucHien = this.banKiemTiemChungTreEmPre.ThoiDiemThucHien;
    // this.banKiemTiemChungTreEm.ThoiDiemThucHienDisplay = this.banKiemTiemChungTreEmPre.ThoiDiemThucHienDisplay;

    const noiTruHoSoKhacFileDinhKems = [];
    this.banKiemTiemChungTreEmPre.NoiTruHoSoKhacFileDinhKems.forEach(val => noiTruHoSoKhacFileDinhKems.push(Object.assign({}, val)));
    this.banKiemTiemChungTreEm.NoiTruHoSoKhacFileDinhKems = noiTruHoSoKhacFileDinhKems;
  }

  ganThongTinPre() {
    this.banKiemTiemChungTreEmPre = Object.assign({}, this.banKiemTiemChungTreEm);
    const fileChuKys = [];
    this.banKiemTiemChungTreEm.NoiTruHoSoKhacFileDinhKems.forEach(val => fileChuKys.push(Object.assign({}, val)));
    this.banKiemTiemChungTreEmPre.NoiTruHoSoKhacFileDinhKems = fileChuKys;
  }

  luuBanKiemTiemChung() {
    console.log("data result: ", this.banKiemTiemChungTreEm)
    var self = this;
    self.banKiemTiemChungTreEmJSON.DuocPhamIds = self.banKiemTiemChungTreEm.DuocPhamIds;
    self.banKiemTiemChungTreEmJSON.SotHaThanNhiet = self.banKiemTiemChungTreEm.SotHaThanNhiet;
    self.banKiemTiemChungTreEmJSON.NgheTimBatThuong = self.banKiemTiemChungTreEm.NgheTimBatThuong;
    self.banKiemTiemChungTreEmJSON.NghePhoiBatThuong = self.banKiemTiemChungTreEm.NghePhoiBatThuong;
    self.banKiemTiemChungTreEmJSON.TriGiacBatThuong = self.banKiemTiemChungTreEm.TriGiacBatThuong;
    self.banKiemTiemChungTreEmJSON.CanNangDuoi2000g = self.banKiemTiemChungTreEm.CanNangDuoi2000g;
    self.banKiemTiemChungTreEmJSON.CoCacChongChiDinhKhac = self.banKiemTiemChungTreEm.CoCacChongChiDinhKhac;
    self.banKiemTiemChungTreEmJSON.DuDieuKienTiemChung = self.banKiemTiemChungTreEm.DuDieuKienTiemChung;
    self.banKiemTiemChungTreEmJSON.TamHoanTiemChung = self.banKiemTiemChungTreEm.TamHoanTiemChung;
    self.banKiemTiemChungTreEm.ThongTinHoSo = JSON.stringify(self.banKiemTiemChungTreEmJSON);
    if (self.banKiemTiemChungTreEm.NoiTruHoSoKhacFileDinhKems == null) {
      self.banKiemTiemChungTreEm.NoiTruHoSoKhacFileDinhKems = new Array<NoiTruHoSoKhacFileDinhKemViewModel>();
    }

    console.log("data co thong tin ho so: ", this.banKiemTiemChungTreEm)
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
          self.apiService.post<any>("DieuTriNoiTru/ThemHoacCapNhatTiemChungTreEm", self.banKiemTiemChungTreEm).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.closePopupSavingData();
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.banKiemTiemChungTreEm.Id = result.Id;
                this.returnId.emit(self.banKiemTiemChungTreEm.Id);
                self.banKiemTiemChungTreEm.LastModified = result.LastModified;
                self.banKiemTiemChungTreEm.IsDataChange = false;
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
      self.apiService.get<BanKiemTiemChungTreEm>("DieuTriNoiTru/GetHoSoKhacTiemChungTreEm?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            console.log("resultData: ", resultData)
            self.banKiemTiemChungTreEm = resultData;
            self.noiTruHoSoKhacId = resultData.Id;
            this.returnId.emit(self.noiTruHoSoKhacId);
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

  inBanKiemTiemChung() {
    var self = this;
    if (this.IsKetThucBenhAn) {
      var showDialog = self.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải dữ liệu...' }
      });
      self.apiService.post<any>("DieuTriNoiTru/InBienKiemTruocTiemChungTE?noiTruHoSoKhacId=" + self.noiTruHoSoKhacId).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            showDialog.close();
            this.returnId.emit(self.noiTruHoSoKhacId);
            self.dialog.open(BanKiemTruocTiemChungTreEmPopupComponent, {
              disableClose: false,
              width: '1200px',
              data: resData,
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
    } else {
      self.banKiemTiemChungTreEmJSON.DuocPhamIds = self.banKiemTiemChungTreEm.DuocPhamIds;
      self.banKiemTiemChungTreEmJSON.SotHaThanNhiet = self.banKiemTiemChungTreEm.SotHaThanNhiet;
      self.banKiemTiemChungTreEmJSON.NgheTimBatThuong = self.banKiemTiemChungTreEm.NgheTimBatThuong;
      self.banKiemTiemChungTreEmJSON.NghePhoiBatThuong = self.banKiemTiemChungTreEm.NghePhoiBatThuong;
      self.banKiemTiemChungTreEmJSON.TriGiacBatThuong = self.banKiemTiemChungTreEm.TriGiacBatThuong;
      self.banKiemTiemChungTreEmJSON.CanNangDuoi2000g = self.banKiemTiemChungTreEm.CanNangDuoi2000g;
      self.banKiemTiemChungTreEmJSON.CoCacChongChiDinhKhac = self.banKiemTiemChungTreEm.CoCacChongChiDinhKhac;
      self.banKiemTiemChungTreEmJSON.DuDieuKienTiemChung = self.banKiemTiemChungTreEm.DuDieuKienTiemChung;
      self.banKiemTiemChungTreEmJSON.TamHoanTiemChung = self.banKiemTiemChungTreEm.TamHoanTiemChung;
      self.banKiemTiemChungTreEm.ThongTinHoSo = JSON.stringify(self.banKiemTiemChungTreEmJSON);
      if (self.banKiemTiemChungTreEm.NoiTruHoSoKhacFileDinhKems == null) {
        self.banKiemTiemChungTreEm.NoiTruHoSoKhacFileDinhKems = new Array<NoiTruHoSoKhacFileDinhKemViewModel>();
      }
      self.validationErrors = [];
      self.ref.detectChanges();
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
        var showDialog = self.dialog.open(LoadingComponent, {
          disableClose: true,
          width: '200px',
          height: '90px',
          data: { Title: 'Đang tải dữ liệu...' }
        });
        self.apiService.post<any>("DieuTriNoiTru/ThemHoacCapNhatTiemChungTreEm", self.banKiemTiemChungTreEm).subscribe(
          (result) => {
            if (result != undefined && result != null) {
              self.banKiemTiemChungTreEm.Id = result.Id;
              self.banKiemTiemChungTreEm.LastModified = result.LastModified;
              self.banKiemTiemChungTreEm.IsDataChange = false;
              self.ganThongTinPre();
              showDialog.close();
              self.apiService.post<any>("DieuTriNoiTru/InBienKiemTruocTiemChungTE?noiTruHoSoKhacId=" + self.banKiemTiemChungTreEm.Id).subscribe(
                resData => {
                  if (resData != undefined && resData != null) {
                    this.returnId.emit(self.banKiemTiemChungTreEm.Id);
                    self.dialog.open(BanKiemTruocTiemChungTreEmPopupComponent, {
                      disableClose: false,
                      width: '1200px',
                      data: resData,
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
}
