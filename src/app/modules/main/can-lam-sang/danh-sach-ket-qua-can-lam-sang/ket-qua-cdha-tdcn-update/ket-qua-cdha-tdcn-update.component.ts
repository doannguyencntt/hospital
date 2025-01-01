import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KetQuaCdhaTdcnSharedComponent } from '../ket-qua-cdha-tdcn-shared/ket-qua-cdha-tdcn-shared.component';
import { KetQuaCdhaTdcnInPhieuPopupComponent } from '../ket-qua-cdha-tdcn-in-phieu-popup/ket-qua-cdha-tdcn-in-phieu-popup.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ket-qua-cdha-tdcn-update',
  templateUrl: './ket-qua-cdha-tdcn-update.component.html',
  styleUrls: ['./ket-qua-cdha-tdcn-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ],
  encapsulation: ViewEncapsulation.None
})
export class KetQuaCdhaTdcnUpdateComponent implements OnInit {

  documentType: DocumentType;
  validationErrors: any;
  popupLoadingData: any;

  ktTrangThaiYeuCauTiepNhan: boolean = false;
  ktTrangThaiDaThucHien: boolean = false;
  ktNhanVienThucHien: boolean = false;
  nhanVienThucHienLai: boolean = true;
  tenNguoiSuaSauCung: any;
  thoiGianSuaSauCung: any;

  @ViewChild(KetQuaCdhaTdcnSharedComponent, { static: true }) shared: KetQuaCdhaTdcnSharedComponent;
  constructor(
    private location: Location,
    private authService: AuthService,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.CanLamSang;
  }

  trangThaiYeuCauTiepNhan(trangThaiYeuCauTiepNhan: any) {
    this.ktTrangThaiYeuCauTiepNhan = trangThaiYeuCauTiepNhan;
  }

  trangThaiDichVuDuocChon(trangThaiChuathucHien: any) {
    this.nhanVienThucHienLai = true;
    this.ktTrangThaiDaThucHien = trangThaiChuathucHien;
  }

  nhanVienThucHienKQ(nhanVienThuchien: any) {
    this.ktNhanVienThucHien = nhanVienThuchien;
  }

  tenNguoiSuaSauCungCDHA(tenNguoiSuaSauCung: any) {
    this.tenNguoiSuaSauCung = tenNguoiSuaSauCung;
  }

  thoiGianSuaSauCungCDHA(thoiGianSuaSauCungCDHA: any) {
    this.thoiGianSuaSauCung = thoiGianSuaSauCungCDHA;
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

  luu(isInKetQua: boolean = false) {
    let data = this.shared.getSharedData();
    data.ChiTietKetQuaObj.ThoiDiemLuu = CommonService.formatDateTime(new Date(), "yyyy-MM-dd hh:mm:ss");
    data.DataKetQuaCanLamSang = JSON.stringify(data.ChiTietKetQuaObj);

    this.validationErrors = [];
    this.cdRef.detectChanges();
    if (data.Id == undefined && data.Id == null) {
      this.validationErrors.push({
        Message: "Vui lòng chọn dịch vụ kỹ thuật.",
        Field: "YeuCauDichVuKyThuatId",
      });
      return;
    }


    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có chắc chắn muốn lưu kết quả này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          this.showPopupLoadingData();
          this.apiService.put<any>("CanLamSang/KiemTraLuuNoiDungKetQua", data).subscribe(res => {
            this.closePopupLoadingData();
            if (!isInKetQua) {
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
            }
            else {
              this.inKetQua();
            }
            this.shared.reloadDataSauKhiLuuThanhCong(data.Id);
            this.nhanVienThucHienLai = true;

          }, err => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
          })
        }
      })


    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  inKetQua() {
    //if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {   
    let data = this.shared.getSharedData();
    data.ChiTietKetQuaObj.ThoiDiemLuu = CommonService.formatDateTime(new Date(), "yyyy-MM-dd hh:mm:ss");
    data.DataKetQuaCanLamSang = JSON.stringify(data.ChiTietKetQuaObj);

    if (data.Id == undefined && data.Id == null) {
      this.validationErrors.push({
        Message: "Vui lòng chọn dịch vụ kỹ thuật.",
        Field: "YeuCauDichVuKyThuatId",
      });
      return;
    }
    this.showPopupLoadingData();
    let yeuCauDVKyThuatId = data.Id;
    var obj = {
      "Id": data.Id,
      "HostingName": window.location.protocol + "//" + window.location.host
    };

    if ((this.ktTrangThaiDaThucHien && !this.ktNhanVienThucHien)) {
      this.notificationService.showWarning("Bạn không phải là người cập nhật kết quả nên không được cập nhật kết quả và chỉ in kết quả cũ");
      this.apiService.post<string>("CanLamSang/XuLyInPhieuKetQua", obj).subscribe(res => {
        this.closePopupLoadingData();
        this.dialog.open(KetQuaCdhaTdcnInPhieuPopupComponent, {
          disableClose: false,
          width: '1200px',
          data: { res, yeuCauDVKyThuatId, dichVuKyThuatBenhVienId: data.DichVuKyThuatBenhVienId },
        }).afterClosed().subscribe(result => {
        });
      }, err => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
    }
    else {
      //Sửa hiện lên không cân kiểm tra in
      if (this.ktTrangThaiDaThucHien && this.ktNhanVienThucHien && this.nhanVienThucHienLai) {
        this.apiService.post<string>("CanLamSang/XuLyInPhieuKetQua", obj).subscribe(res => {
          this.closePopupLoadingData();
          this.dialog.open(KetQuaCdhaTdcnInPhieuPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: { res, yeuCauDVKyThuatId, dichVuKyThuatBenhVienId: data.DichVuKyThuatBenhVienId },
          }).afterClosed().subscribe(result => {
          });
        }, err => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
      } else {
        this.apiService.put<any>("CanLamSang/KiemTraLuuNoiDungKetQua", data).subscribe(res => {
          this.closePopupLoadingData();
          this.shared.reloadDataSauKhiLuuThanhCong(data.Id);
          this.nhanVienThucHienLai = true;

          this.apiService.post<string>("CanLamSang/XuLyInPhieuKetQua", obj).subscribe(res => {
            this.closePopupLoadingData();
            this.dialog.open(KetQuaCdhaTdcnInPhieuPopupComponent, {
              disableClose: false,
              width: '1200px',
              data: { res, yeuCauDVKyThuatId, dichVuKyThuatBenhVienId: data.DichVuKyThuatBenhVienId },
            }).afterClosed().subscribe(result => {
            });
          }, err => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
          });

        }, err => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        })
      }
    }
  }

  suaKetQua() {
    var self = this;

    if (self.ktTrangThaiYeuCauTiepNhan) {
      self.notificationService.showError("Người bệnh đã ra viện nên không được sửa kết quả");
      return true;
    }
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn sửa kết quả này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        this.nhanVienThucHienLai = false;
      }
    })
  }

  quayLai() {
    this.router.navigate(["/ket-qua-cdha-tdcn"], { queryParams: { holdQuery: true } });
  }

  clearData() {
    this.shared.clearData()
  }

  HuyKetQua() {
    var self = this;

    if (self.ktTrangThaiYeuCauTiepNhan) {
      self.notificationService.showError("Người bệnh đã ra viện nên không được hủy kết quả");
      return true;
    }

    var noiDungKetQua = this.shared.getSharedData();
    if (noiDungKetQua.Id == undefined && noiDungKetQua.Id == null) {
      self.validationErrors.push({
        Message: "Vui lòng chọn dịch vụ kỹ thuật.",
        Field: "YeuCauDichVuKyThuatId",
      });
      return;
    }
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn hủy kết quả này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.apiService.post<any>("CanLamSang/HuyKetQuaCDHA?id=" + noiDungKetQua.Id).subscribe(
            () => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy"]));
              this.shared.reloadDataSauKhiLuuThanhCong(noiDungKetQua.Id);
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }

  getSharedPrintForm() {
    return new Promise(resolve => {
      let data = this.shared.getSharedData();
      var obj = {
        "Id": data.Id,
        "HostingName": window.location.protocol + "//" + window.location.host
      };
      if ((this.ktTrangThaiDaThucHien && !this.ktNhanVienThucHien)) {
        this.apiService.post<string>("CanLamSang/XuLyInPhieuKetQua", obj).subscribe(res => {
          let source = this.replaceAll(res, "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU KẾT QUẢ</th></p>", "");
          source = this.replaceAll(source, "zoom:100%;", "zoom:73%;");
          setTimeout(function () {
            resolve(source);
          }, 100);
        }, err => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
      }
      else {
        //Sửa hiện lên không cân kiểm tra in
        if (this.ktTrangThaiDaThucHien && this.ktNhanVienThucHien && this.nhanVienThucHienLai) {
          this.apiService.post<string>("CanLamSang/XuLyInPhieuKetQua", obj).subscribe(res => {
            let source = this.replaceAll(res, "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU KẾT QUẢ</th></p>", "");
            source = this.replaceAll(source, "zoom:100%;", "zoom:73%;");
            setTimeout(function () {
              resolve(source);
            }, 100);
          }, err => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
          });
        } else {
          this.apiService.put<any>("CanLamSang/KiemTraLuuNoiDungKetQua", data).subscribe(res => {
            this.closePopupLoadingData();
            this.shared.reloadDataSauKhiLuuThanhCong(data.Id);
            this.nhanVienThucHienLai = true;
            this.apiService.post<string>("CanLamSang/XuLyInPhieuKetQua", obj).subscribe(res => {
              let source = this.replaceAll(res, "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU KẾT QUẢ</th></p>", "");
              source = this.replaceAll(source, "zoom:100%;", "zoom:73%;");
              setTimeout(function () {
                resolve(source);
              }, 100);
            }, err => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupLoadingData();
            });
          }, err => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
          })
        }

      }
    });
  }
}
