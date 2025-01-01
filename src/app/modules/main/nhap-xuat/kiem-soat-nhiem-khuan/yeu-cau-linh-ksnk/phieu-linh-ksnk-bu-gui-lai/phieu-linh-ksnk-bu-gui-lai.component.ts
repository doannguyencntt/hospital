import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuLinhKSNKThuong, PhieuLinhKSNKThuongs, TrangThaiTaoPhieuLinh, YeuCauLinhKSNK } from '../yeu-cau-linh-ksnk.model';
import { PhieuLinhKSNKBuGuiLaiSharedComponent } from '../phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component';
import { PhieuLinhKSNKThuongPopupComponent } from '../phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component';

@Component({
  selector: 'app-phieu-linh-ksnk-bu-gui-lai',
  templateUrl: './phieu-linh-ksnk-bu-gui-lai.component.html',
  styleUrls: ['./phieu-linh-ksnk-bu-gui-lai.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PhieuLinhKSNKBuGuiLaiComponent implements OnInit {

  loading: boolean = false;
  hostingName: string = null;
  documentType: DocumentType;
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
  validationErrors: any;
  popupLoadingData: any;
  popupLoadingDataDaDuyet: any;
  yeuCauLinhKSNK: YeuCauLinhKSNK = new YeuCauLinhKSNK();
  isHideDuyet: boolean = false;
  phieuLinhId: number = null;
  flag: boolean = true;
  isDisabledNguoiTaoPhieu: boolean = false;
  trangThaiDanhSach: any;
  inPhieuLinhBu: PhieuLinhKSNKThuongs = new PhieuLinhKSNKThuongs();
  loai :boolean = false;
  @ViewChild('temp', { read: PhieuLinhKSNKBuGuiLaiSharedComponent, static: false }) shared: PhieuLinhKSNKBuGuiLaiSharedComponent;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhBuKSNK;
    this.route
      .queryParams
      .subscribe(v => {
        this.trangThaiDanhSach = v;
      });
    this.yeuCauLinhKSNK = new YeuCauLinhKSNK();
    const value: boolean = this.route.snapshot.params.value;
   
    if (value !== undefined && value !== null) {
      
      this.loai =value;
     }
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.GetTrangThaiPhieuLinh(id);
      this.phieuLinhId = id;
    }

    if (window.location.protocol == "http:") {
      this.inPhieuLinhBu.HostingName = "http://" + window.location.host;
    } else {
      this.inPhieuLinhBu.HostingName = "https://" + window.location.host;
    }
  }


  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }


  luuPhieuLinhBuKSNK(daGui: boolean) {
    var self = this;
    self.yeuCauLinhKSNK = self.shared.getSharedData();
    if (self.yeuCauLinhKSNK.YeuCauVatTuBenhViens.every(z => !z.CheckBox)) {
      if (daGui) {
        self.notificationService.showError("Vui lòng chọn ksnk muốn gửi phiếu.");
      }
      else {
        self.notificationService.showError("Vui lòng chọn ksnk muốn lưu phiếu.");
      }
    } else {
      var mess = "";
      if (daGui) {
        mess = "Bạn có muốn gửi phiếu lĩnh ksnk này không ?";
      }
      else {
        mess = "Bạn có muốn lưu phiếu lĩnh ksnk này không ?";
      }
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: mess,
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (daGui) {
            self.xacNhanGuiPhieuLinh();
          } else {
            self.xacNhanLuuPhieuLinh();
          }
        }
      })
    }

  }

  xacNhanLuuPhieuLinh() {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.loadingPage();
      self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1)
      self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
        element.DuocDuyet = null;
      });
      self.yeuCauLinhKSNK.DuocDuyet = null;
      self.apiService.post<any>("YeuCauLinhKSNK/GuiLaiPhieuLinhBu", self.yeuCauLinhKSNK).subscribe(
        (result) => {
          if (result != undefined && result != null) {
            self.yeuCauLinhKSNK.LastModified = result.LastModified;
            self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
            self.trangThaiVo.Ten = result.ten;
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
            self.shared.ganDieuKienLoadGridKSNK(self.yeuCauLinhKSNK.KhoXuatId, self.yeuCauLinhKSNK.KhoNhapId);
            self.closePopupLoadingData();
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingData();
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xacNhanGuiPhieuLinh() {
    debugger
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.yeuCauLinhKSNK.DaGui = true;
      self.loadingPage();
      self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1)
      self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
        element.DuocDuyet = null;
      });
      self.yeuCauLinhKSNK.DuocDuyet = null;
      self.apiService.post<any>("YeuCauLinhKSNK/GuiLaiPhieuLinhBu", self.yeuCauLinhKSNK).subscribe(
        (result) => {
          if (result != undefined && result != null) {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
            self.shared.ganDieuKienLoadGridKSNK(self.yeuCauLinhKSNK.KhoXuatId, self.yeuCauLinhKSNK.KhoNhapId);
            self.closePopupLoadingData();
            self.dialog.open(ConfirmComponent, {
              disableClose: false,
              width: "500px",
              data: {
                Title: "Xác nhận",
                Message: "Bạn có muốn in phiếu lĩnh ksnk này không ?",
              },
            }).afterClosed().subscribe((res) => {
              if (res == "Yes") {
                self.loadingPageDaDuyet();
                self.inPhieuLinhBu.Header = true;
                self.inPhieuLinhBu.YeuCauLinhVatTuIds = result;
                self.inPhieuLinhBu.LoaiPhieuLinh = 2;
                self.inPhieuLinhBu.TrangThai = self.trangThaiVo.TrangThai;
                self.apiService.post<any>("YeuCauLinhKSNK/InPhieuLinhBuKSNK", self.inPhieuLinhBu).subscribe(
                  resData => {
                    if (resData != undefined && resData != null) {
                      self.inPhieuLinhBu.Header = false;
                      self.closePopupLoadingDataDaDuyet();
                      self.dialog.open(PhieuLinhKSNKThuongPopupComponent, {
                        disableClose: false,
                        width: '1200px',
                        data: { Model: resData },
                      }).afterClosed().subscribe(() => {
                        self.closePopupLoadingDataDaDuyet();
                        self.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
                      });
                    }
                  },
                  (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                      self.notificationService.showError(err.Message);
                    }
                    self.closePopupLoadingDataDaDuyet();
                  }
                );
              } else {
                self.closePopupLoadingDataDaDuyet();
                self.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
              }
            });
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingData();
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  loadingPageDaDuyet() {
    this.popupLoadingDataDaDuyet = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closePopupLoadingDataDaDuyet() {
    if (this.popupLoadingDataDaDuyet != undefined && this.popupLoadingDataDaDuyet != null) {
      this.popupLoadingDataDaDuyet.close();
    }
  }

  // luuVaGuiDuyetLai() {
  //   this.dialog.open(ConfirmComponent, {
  //     disableClose: false,
  //     width: '400px',
  //     data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửu lại phê duyệt cho lần lĩnh ksnk này không?" }
  //   }).afterClosed().subscribe(result => {
  //     if (result === 'Yes') {

  //     }
  //   });
  // }

  anHienButtonDuyet(event: any) {
    if (event) {
      this.isHideDuyet = true;
    }
    else {
      this.isHideDuyet = false;
    }
  }

  disableNguoiTaoPhieu(event) {
    if (event) {
      this.isDisabledNguoiTaoPhieu = true;
    }
    else {
      this.isDisabledNguoiTaoPhieu = false;
    }
  }


  GetTrangThaiPhieuLinh(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      let newModel ={
        YeuCauLinhId:id,
        LoaiDuocPhamHayVatTu:this.loai
      };
      self.apiService.post<any>("YeuCauLinhKSNK/GetTrangThaiPhieuLinhKSNK",newModel).subscribe(
        (result) => {
          self.trangThaiVo = result;
        })
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  inPhieu() {
    var self = this;
    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == true) { //Đã duyệt
      self.loadingPageDaDuyet();
      self.inPhieuLinhBu.Header = true;
      self.inPhieuLinhBu.YeuCauLinhVatTuIds =[];
        let newPhieu = {
          YeuCauLinhVatTuId:self.phieuLinhId,
          LoaiDuocPhamHayVatTu:this.loai
        };
        self.inPhieuLinhBu.YeuCauLinhVatTuIds.push(newPhieu);
      self.inPhieuLinhBu.LoaiPhieuLinh = 2;
      self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
      self.apiService.post<any>("YeuCauLinhKSNK/InPhieuLinhBuKSNK", self.inPhieuLinhBu).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            self.inPhieuLinhBu.Header = false;
            self.closePopupLoadingDataDaDuyet();
            self.dialog.open(PhieuLinhKSNKThuongPopupComponent, {
              disableClose: false,
              width: '1200px',
              data: { Model: resData },
            }
            ).afterClosed().subscribe(() => {
              self.closePopupLoadingDataDaDuyet();
            }
            );
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingDataDaDuyet();
        }
      );
    }
    else if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) {
      self.yeuCauLinhKSNK = self.shared.getSharedData();
      self.validationErrors = [];
      self.ref.detectChanges();
      self.loadingPageDaDuyet();
      self.inPhieuLinhBu.Header = true;
      self.inPhieuLinhBu.YeuCauLinhVatTuIds =[];
        let newPhieu = {
          YeuCauLinhVatTuId:self.phieuLinhId,
          LoaiDuocPhamHayVatTu:this.loai
        };
        self.inPhieuLinhBu.YeuCauLinhVatTuIds.push(newPhieu);
      self.inPhieuLinhBu.LoaiPhieuLinh = 2;
      self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
      self.apiService.post<any>("YeuCauLinhKSNK/InPhieuLinhBuKSNK", self.inPhieuLinhBu).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            self.inPhieuLinhBu.Header = false;
            self.closePopupLoadingDataDaDuyet();
            self.dialog.open(PhieuLinhKSNKThuongPopupComponent, {
              disableClose: false,
              width: '1200px',
              data: { Model: resData },
            }
            ).afterClosed().subscribe(() => {
              self.closePopupLoadingDataDaDuyet();
            });
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingDataDaDuyet();
        }
      );
    } else {
      self.yeuCauLinhKSNK = self.shared.getSharedData();
      if (self.yeuCauLinhKSNK.YeuCauVatTuBenhViens.every(z => !z.CheckBox)) {
        self.notificationService.showError("Vui lòng chọn ksnk muốn in phiếu.");
      } else {
        self.validationErrors = [];
        self.ref.detectChanges();
        self.loadingPageDaDuyet();
        self.inPhieuLinhBu.Header = true;
        self.inPhieuLinhBu.YeuCauLinhVatTuIds =[];
        let newPhieu = {
          YeuCauLinhVatTuId:self.phieuLinhId,
          LoaiDuocPhamHayVatTu:this.loai
        };
        self.inPhieuLinhBu.YeuCauLinhVatTuIds.push(newPhieu);
        self.inPhieuLinhBu.LoaiPhieuLinh = 2;
        self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
        self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1)
        self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
          element.DuocDuyet = null;
        });
        self.yeuCauLinhKSNK.DuocDuyet = null;
        self.apiService.post<any>("YeuCauLinhKSNK/GuiLaiPhieuLinhBu", self.yeuCauLinhKSNK).subscribe(
          (result) => {
            if (result != undefined && result != null) {
              self.apiService.post<any>("YeuCauLinhKSNK/InPhieuLinhBuKSNK", self.inPhieuLinhBu).subscribe(
                resData => {
                  if (resData != undefined && resData != null) {
                    self.inPhieuLinhBu.Header = false;
                    self.closePopupLoadingDataDaDuyet();
                    self.dialog.open(PhieuLinhKSNKThuongPopupComponent, {
                      disableClose: false,
                      width: '1200px',
                      data: { Model: resData },
                    }
                    ).afterClosed().subscribe(() => {
                      self.closePopupLoadingDataDaDuyet();
                    });
                  }
                },
                (err: ApiError) => {
                  self.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                  }
                  self.closePopupLoadingDataDaDuyet();
                }
              );
            }
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
            self.closePopupLoadingDataDaDuyet();
          });
      }
    }
  }

  cancel() {
    let data: any;
    if (this.trangThaiDanhSach.holdQuery == '0') {
      data = 0;
    }
    if (this.trangThaiDanhSach.holdQuery == '1') {
      data = 1;
    }
    if (this.trangThaiDanhSach.holdQuery == '2') {
      data = 2;
    }
    if (this.trangThaiDanhSach.holdQuery == '3') {
      data = 3;
    }
    if (this.trangThaiDanhSach.holdQuery == '4') {
      data = 4;
    }
    if (this.trangThaiDanhSach.holdQuery == '5') {
      data = 5;
    }
    if (this.trangThaiDanhSach.holdQuery == '6') {
      data = 6;
    }
    if (this.trangThaiDanhSach.holdQuery == '7') {
      data = 7;
    }
    this.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk'], { queryParams: { holdQuery: data } });
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.cancel();
      event.preventDefault();
    }
  }
}
