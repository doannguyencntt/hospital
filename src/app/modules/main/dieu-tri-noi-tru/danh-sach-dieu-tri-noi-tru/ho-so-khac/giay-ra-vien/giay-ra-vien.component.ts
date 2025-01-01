import { ChangeDetectorRef, Component, Input, OnInit,Output ,EventEmitter} from '@angular/core';
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

import { ChiTietDieuTriNoiTruViewModel, HoSoKhacGiayRaVien, HoSoKhacGiayRaVienJSON, LookupItemVoGhiChuGiayRaVien } from '../../../dieu-tri-noi-tru.model';
import { GhiChuMauGrvPopupComponent } from './ghi-chu-mau-grv-popup/ghi-chu-mau-grv-popup.component';
import { GiayRaVienPopupComponent } from './giay-ra-vien-popup/giay-ra-vien-popup.component';
@Component({
  selector: 'app-giay-ra-vien',
  templateUrl: './giay-ra-vien.component.html',
  styleUrls: ['./giay-ra-vien.component.scss']
})
export class GiayRaVienComponent implements OnInit {
  hoSoKhacGiayRaVien: HoSoKhacGiayRaVien = new HoSoKhacGiayRaVien();
  hoSoKhacGiayRaVienJSON: HoSoKhacGiayRaVienJSON = new HoSoKhacGiayRaVienJSON();
  hoSoKhacGiayRaVienPre: HoSoKhacGiayRaVien = new HoSoKhacGiayRaVien();
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  validationErrors: any[] = [];
  popupSavingData: any = null;
  popupLoadingData: any = null;
  yeuCauTiepNhanId: number = 0;
  noiTruHoSoKhacId: number = 0;

  @Input() IsKetThucBenhAn: any;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

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
    if (this.hoSoKhacGiayRaVien.ThoiDiemThucHien == null) {
      this.hoSoKhacGiayRaVien.ThoiDiemThucHien = new Date();
    }
    const id: number = this.dieuTriNoiTruModel.Id;
    if (id != undefined && id != null) {
      this.hoSoKhacGiayRaVien.YeuCauTiepNhanId = id;
      this.yeuCauTiepNhanId = id;
      this.nhanVienDangNhap(id);
      this.getById(id);
    }
    this.hoSoKhacGiayRaVien.IsDataChange = false;
  }

  nhanVienDangNhap(id: number) {
    var self = this;
    self.apiService.post<any>("DieuTriNoiTru/ThongTinNhanVienDangNhapId?id=" + id).subscribe(
      (result) => {
        if (result != undefined && result != null) {
          this.hoSoKhacGiayRaVien.NhanVienDangNhap = result.NhanVienDangNhap;
          if (this.hoSoKhacGiayRaVien.ThoiDiemThucHienDisplay == null || this.hoSoKhacGiayRaVien.ThoiDiemThucHienDisplay == "") {
            this.hoSoKhacGiayRaVien.ThoiDiemThucHienDisplay = result.NgayThucHienDisplay;
          }
          this.hoSoKhacGiayRaVien.ChanDoan = result.ChanDoan;
          this.hoSoKhacGiayRaVien.PhuongPhapDieuTri = result.PhuongPhapDieuTri;
        }
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
  isDataChange(event:any) {
    this.hoSoKhacGiayRaVien.IsDataChange = true;
    if(event == 2)
    {
      this.hoSoKhacGiayRaVien.IdGhiChu = null;
    }
    
  }

  ganThongTinPre() {
    this.hoSoKhacGiayRaVienPre = Object.assign({}, this.hoSoKhacGiayRaVien);
  }

  huy() {
    this.ref.detectChanges();
    this.validationErrors = [];
    this.hoSoKhacGiayRaVien.IsDataChange = false;
    this.hoSoKhacGiayRaVien.ChanDoan = this.hoSoKhacGiayRaVienPre.ChanDoan;
    this.hoSoKhacGiayRaVien.PhuongPhapDieuTri = this.hoSoKhacGiayRaVienPre.PhuongPhapDieuTri;
    this.hoSoKhacGiayRaVien.GhiChu = this.hoSoKhacGiayRaVienPre.GhiChu;
    this.hoSoKhacGiayRaVien.ThoiDiemThucHien = this.hoSoKhacGiayRaVienPre.ThoiDiemThucHien;
    this.hoSoKhacGiayRaVien.TruongKhoaId = this.hoSoKhacGiayRaVienPre.TruongKhoaId;
    this.hoSoKhacGiayRaVien.TenTruongKhoa = this.hoSoKhacGiayRaVienPre.TenTruongKhoa;
    this.hoSoKhacGiayRaVien.GiamDocChuyenMonId = this.hoSoKhacGiayRaVienPre.GiamDocChuyenMonId;
    this.hoSoKhacGiayRaVien.TenGiamDocChuyenMon = this.hoSoKhacGiayRaVienPre.TenGiamDocChuyenMon;
  }

  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.loadingPage();
      self.apiService.get<HoSoKhacGiayRaVien>("DieuTriNoiTru/GetHoSoKhacGiayRaVien?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            console.log("resultData: ", resultData)
          
            self.hoSoKhacGiayRaVien = resultData;
            self.noiTruHoSoKhacId = resultData.Id;

            this.hoSoKhacGiayRaVien.YeuCauTiepNhanId =id;
            this.returnId.emit(self.noiTruHoSoKhacId);

            self.nhanVienDangNhap(this.yeuCauTiepNhanId);
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

  luuBienBan() {
    var self = this;
    self.hoSoKhacGiayRaVienJSON.ChanDoan = self.hoSoKhacGiayRaVien.ChanDoan;
    self.hoSoKhacGiayRaVienJSON.PhuongPhapDieuTri = self.hoSoKhacGiayRaVien.PhuongPhapDieuTri;
    self.hoSoKhacGiayRaVienJSON.GhiChu = self.hoSoKhacGiayRaVien.GhiChu;
    self.hoSoKhacGiayRaVienJSON.TruongKhoaId = self.hoSoKhacGiayRaVien.TruongKhoaId;
    self.hoSoKhacGiayRaVienJSON.GiamDocChuyenMonId = self.hoSoKhacGiayRaVien.GiamDocChuyenMonId;
    self.hoSoKhacGiayRaVien.ThongTinHoSo = JSON.stringify(self.hoSoKhacGiayRaVienJSON);
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
          self.apiService.post<any>("DieuTriNoiTru/ThemHoacCapNhatGiayRaVien", self.hoSoKhacGiayRaVien).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.closePopupSavingData();
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.hoSoKhacGiayRaVien.Id = result.Id;
                this.returnId.emit(self.hoSoKhacGiayRaVien.Id);
                self.hoSoKhacGiayRaVien.LastModified = result.LastModified;
                self.hoSoKhacGiayRaVien.IsDataChange = false;
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

  inGiayRaVien() {
    var self = this;

    if (this.IsKetThucBenhAn) {
      var showDialog = self.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải dữ liệu...' }
      });
      self.apiService.post<any>("DieuTriNoiTru/InGiayRaVien?noiTruHoSoKhacId=" + self.noiTruHoSoKhacId).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            this.returnId.emit(self.noiTruHoSoKhacId);
            showDialog.close();
            self.dialog.open(GiayRaVienPopupComponent, {
              disableClose: false,
              width: '500px',
              data: { Title: 'GIẤY RA VIỆN', Data: resData },
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
      self.hoSoKhacGiayRaVienJSON.ChanDoan = self.hoSoKhacGiayRaVien.ChanDoan;
      self.hoSoKhacGiayRaVienJSON.PhuongPhapDieuTri = self.hoSoKhacGiayRaVien.PhuongPhapDieuTri;
      self.hoSoKhacGiayRaVienJSON.GhiChu = self.hoSoKhacGiayRaVien.GhiChu;
      self.hoSoKhacGiayRaVienJSON.TruongKhoaId = self.hoSoKhacGiayRaVien.TruongKhoaId;
      self.hoSoKhacGiayRaVienJSON.GiamDocChuyenMonId = self.hoSoKhacGiayRaVien.GiamDocChuyenMonId;
      self.hoSoKhacGiayRaVien.ThongTinHoSo = JSON.stringify(self.hoSoKhacGiayRaVienJSON);
      self.validationErrors = [];
      self.ref.detectChanges();
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
        var showDialog = self.dialog.open(LoadingComponent, {
          disableClose: true,
          width: '200px',
          height: '90px',
          data: { Title: 'Đang tải dữ liệu...' }
        });
        self.apiService.post<any>("DieuTriNoiTru/ThemHoacCapNhatGiayRaVien", self.hoSoKhacGiayRaVien).subscribe(
          (result) => {
            if (result != undefined && result != null) {
              self.hoSoKhacGiayRaVien.Id = result.Id;
              self.hoSoKhacGiayRaVien.LastModified = result.LastModified;
              self.hoSoKhacGiayRaVien.IsDataChange = false;
              self.ganThongTinPre();
              showDialog.close();
              self.apiService.post<any>("DieuTriNoiTru/InGiayRaVien?noiTruHoSoKhacId=" + self.hoSoKhacGiayRaVien.Id).subscribe(
                resData => {
                  if (resData != undefined && resData != null) {
                    this.returnId.emit(self.hoSoKhacGiayRaVien.Id);
                    self.dialog.open(GiayRaVienPopupComponent, {
                      disableClose: false,
                      width: '1000px',
                      data: { Title: 'GIẤY RA VIỆN', Data: resData },
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
  GhiChuMau(){
    //GhiChuMauGrvPopupComponent
    let newOBJ = new LookupItemVoGhiChuGiayRaVien();
    newOBJ.KeyId = this.hoSoKhacGiayRaVien.IdGhiChu;
    newOBJ.DisplayName = this.hoSoKhacGiayRaVien.GhiChu;
    this.dialog
    .open(GhiChuMauGrvPopupComponent, {
      width: "600px",
      data: { Model: newOBJ }
    })
    .afterClosed()
    .subscribe((result) => {
      if(result != undefined)
      {
        this.hoSoKhacGiayRaVien.IdGhiChu =result.KeyId;
        this.hoSoKhacGiayRaVien.GhiChu =result.DisplayName;
      }
     
    });
    
  }
  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }
}
