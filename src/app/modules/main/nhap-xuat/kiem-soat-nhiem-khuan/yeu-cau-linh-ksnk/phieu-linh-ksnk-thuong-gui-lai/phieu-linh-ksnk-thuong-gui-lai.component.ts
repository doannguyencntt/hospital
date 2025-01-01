import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PhieuLinhKSNKThuong, PhieuLinhKSNKThuongs, TrangThaiTaoPhieuLinh, YeuCauLinhKSNK } from '../yeu-cau-linh-ksnk.model';
import { PhieuLinhKSNKThuongSharedComponent } from '../phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { PhieuLinhKSNKThuongPopupComponent } from '../phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component';
@Component({
  selector: 'app-phieu-linh-ksnk-thuong-gui-lai',
  templateUrl: './phieu-linh-ksnk-thuong-gui-lai.component.html',
  styleUrls: ['./phieu-linh-ksnk-thuong-gui-lai.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PhieuLinhKSNKThuongGuiLaiComponent implements OnInit {
  hostingName: string = null;
  loading: boolean = false;
  documentType: DocumentType;
  trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
  inPhieuLinhThuongs: PhieuLinhKSNKThuongs = new PhieuLinhKSNKThuongs();
  validationErrors: any;
  popupLoadingData: any;
  popupLoadingDataDaDuyet: any;
  isHideDuyet: boolean = false;
  isDisabledNguoiTaoPhieu: boolean = false;
  phieuLinhId: number = null;
  inPhieuLinhThuong: PhieuLinhKSNKThuong = new PhieuLinhKSNKThuong();
  yeuCauLinhKSNK: YeuCauLinhKSNK = new YeuCauLinhKSNK();
  trangThaiDanhSach: any;
  loai :boolean = false;
 
  @ViewChild('temp', { read: PhieuLinhKSNKThuongSharedComponent, static: false }) shared: PhieuLinhKSNKThuongSharedComponent;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhThuongKSNK;
    this.route
      .queryParams
      .subscribe(v => {
        this.trangThaiDanhSach = v;
      });
      
    const id: number = this.route.snapshot.params.id;
    const value: boolean = this.route.snapshot.params.value;
   
    if (value !== undefined && value !== null) {
      
      this.loai =value;
     }
    if (id !== undefined && id !== null) {
      this.GetTrangThaiPhieuLinh(id);
      this.phieuLinhId = id;
    }
    

    if (window.location.protocol == "http:") {
      this.inPhieuLinhThuong.HostingName = "http://" + window.location.host;
    } else {
      this.inPhieuLinhThuong.HostingName = "https://" + window.location.host;
    }
    if (window.location.protocol == "http:") {
      this.inPhieuLinhThuongs.HostingName = "http://" + window.location.host;
    } else {
      this.inPhieuLinhThuongs.HostingName = "https://" + window.location.host;
    }
  }
  loaiDuocPhamHayVatTu(event:any){
    
    this.loai =event;
  }
  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  loadingPageDaDuyet() {
    this.popupLoadingDataDaDuyet = this.dialog.open(LoadingComponent, {
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

  closePopupLoadingDataDaDuyet() {
    if (this.popupLoadingDataDaDuyet != undefined && this.popupLoadingDataDaDuyet != null) {
      this.popupLoadingDataDaDuyet.close();
    }
  }


  luuPhieuLinhThuong() {
    
    var self = this;
    self.yeuCauLinhKSNK = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) { //Từ chối duyệt
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu phiếu lĩnh ksnk này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.loadingPage();
            self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
            self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
              element.DuocDuyet = false;
            });
            self.yeuCauLinhKSNK.IsLuu = true;
            self.yeuCauLinhKSNK.DuocDuyet = false;
            self.apiService.post<any>("YeuCauLinhKSNK/GuiLaiPhieuLinhThuongKSNK", self.yeuCauLinhKSNK).subscribe(
              (result) => {
                if (result != undefined && result != null) {
                  self.yeuCauLinhKSNK.LastModified = result.LastModified;
                  self.yeuCauLinhKSNK.IsLuu = false;
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
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
      })
    } else if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == null) {  // "Đang chờ duyệt"
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu phiếu lĩnh ksnk này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.loadingPage();
            self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
            self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
              element.DuocDuyet = null;
            });
            self.yeuCauLinhKSNK.DuocDuyet = null;
            self.apiService.post<any>("YeuCauLinhKSNK/GuiLaiPhieuLinhThuongKSNK", self.yeuCauLinhKSNK).subscribe(
              (result) => {
                if (result != undefined && result != null) {
                  self.yeuCauLinhKSNK.LastModified = result.LastModified;
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  self.closePopupLoadingData();
                }
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingData();
                self.closePopupLoadingDataDaDuyet();
              });
          } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
        }
      })

    }
  }

  guiPhieuLinhThuong() {
    var self = this;
    self.yeuCauLinhKSNK = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) { //Từ chối duyệt
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn gửi phiếu lĩnh ksnk này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.yeuCauLinhKSNK.DaGui = true;
            self.loadingPage();
            self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
            self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
              element.DuocDuyet = false;
            });
            self.yeuCauLinhKSNK.IsLuu = true;
            self.yeuCauLinhKSNK.DuocDuyet = false;
            self.apiService.post<any>("YeuCauLinhKSNK/GuiLaiPhieuLinhThuongKSNK", self.yeuCauLinhKSNK).subscribe(
              (result) => {
                if (result != undefined && result != null) {
                  self.yeuCauLinhKSNK.LastModified = result.LastModified;
                  self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                  self.trangThaiVo.Ten = result.ten;
                  self.yeuCauLinhKSNK.IsLuu = false;
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
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
      })
    } else if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == null) {  // "Đang chờ duyệt"
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn gửi phiếu lĩnh ksnk này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.yeuCauLinhKSNK.DaGui = true;
            self.loadingPage();
            self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
            self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
              element.DuocDuyet = null;
            });
            self.yeuCauLinhKSNK.DuocDuyet = null;
            self.apiService.post<any>("YeuCauLinhKSNK/GuiLaiPhieuLinhThuongKSNK", self.yeuCauLinhKSNK).subscribe(
              (result) => {
                if (result != undefined && result != null) {
                  self.yeuCauLinhKSNK.LastModified = result.LastModified;
                  self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                  self.trangThaiVo.Ten = result.ten;
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
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
                      
                      self.inPhieuLinhThuongs.Header = true;
                      self.inPhieuLinhThuongs.YeuCauLinhVatTuIds = result;

                      self.inPhieuLinhThuongs.LoaiPhieuLinh = 1;
                      self.inPhieuLinhThuongs.TrangThai = this.trangThaiVo.TrangThai;
                      self.apiService.post<any>("YeuCauLinhKSNK/InPhieuLinhThuongKSNK", self.inPhieuLinhThuongs).subscribe(
                        resData => {
                          if (resData != undefined && resData != null) {
                            self.closePopupLoadingDataDaDuyet();
                            self.inPhieuLinhThuong.Header = false;
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
                self.closePopupLoadingDataDaDuyet();
              });
          } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
        }
      })

    }
  }

  luuVaGuiDuyetLai() {
    
    var self = this;
    self.yeuCauLinhKSNK = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửi lại phê duyệt cho lần lĩnh ksnk này không?" }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.loadingPage();
          self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
          self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
            element.DuocDuyet = false;
          });
          self.yeuCauLinhKSNK.DuocDuyet = false;
          self.apiService.post<any>("YeuCauLinhKSNK/GuiLaiPhieuLinhThuongKSNK", self.yeuCauLinhKSNK).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.closePopupLoadingData();
                self.dialog.open(ConfirmComponent, {
                  disableClose: false,
                  width: "500px",
                  data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn in phiếu lĩnh dược phẩm này không ?",
                  },
                }).afterClosed().subscribe((res) => {
                  if (res == "Yes") {
                    self.loadingPageDaDuyet();
                    
                    self.inPhieuLinhThuongs.Header = true;
                    self.inPhieuLinhThuongs.YeuCauLinhVatTuIds = result;
                    self.inPhieuLinhThuongs.LoaiPhieuLinh = 1;
                    self.inPhieuLinhThuongs.TrangThai = this.trangThaiVo.TrangThai;
                    self.apiService.post<any>("YeuCauLinhKSNK/InPhieuLinhThuongKSNK", self.inPhieuLinhThuongs).subscribe(
                      resData => {
                        if (resData != undefined && resData != null) {
                          self.inPhieuLinhThuongs.Header = false;
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
                        self.closePopupLoadingData();
                        self.closePopupLoadingDataDaDuyet();
                      }
                    );
                  } else {
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
        }
      }
    });
  }


  inPhieu() {
    var self = this;
    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == true) { //Đã duyệt
      self.loadingPageDaDuyet();
      self.inPhieuLinhThuongs.Header = true;
      self.inPhieuLinhThuongs.YeuCauLinhVatTuIds = [];
      let newPhieuVo ={
        YeuCauLinhVatTuId:this.phieuLinhId,
        LoaiDuocPhamHayVatTu:this.loai
      };
      self.inPhieuLinhThuongs.YeuCauLinhVatTuIds.push(newPhieuVo) 
      self.inPhieuLinhThuongs.LoaiPhieuLinh = 1;
      self.inPhieuLinhThuongs.TrangThai = this.trangThaiVo.TrangThai;
      self.apiService.post<any>("YeuCauLinhKSNK/InPhieuLinhThuongKSNK", self.inPhieuLinhThuongs).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            self.inPhieuLinhThuong.Header = false;
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
    } else {
      self.loadingPageDaDuyet();
      self.inPhieuLinhThuongs.Header = true;
      self.inPhieuLinhThuongs.YeuCauLinhVatTuIds =[];
      let newPhieuVo ={
        YeuCauLinhVatTuId:this.phieuLinhId,
        LoaiDuocPhamHayVatTu:this.loai
      };
      self.inPhieuLinhThuongs.YeuCauLinhVatTuIds.push(newPhieuVo) 
      self.inPhieuLinhThuongs.LoaiPhieuLinh = 1;
      self.inPhieuLinhThuongs.TrangThai = this.trangThaiVo.TrangThai;
      self.apiService.post<any>("YeuCauLinhKSNK/InPhieuLinhThuongKSNK", self.inPhieuLinhThuongs).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            self.inPhieuLinhThuong.Header = false;
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
      // self.yeuCauLinhKSNK = self.shared.getSharedData();
      // self.validationErrors = [];
      // self.ref.detectChanges();
      // if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      //   // self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1)
      //   self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
      //   if (self.trangThaiVo.TrangThai == false) {
      //     self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
      //       element.DuocDuyet = false;
      //     });
      //   }
      //   self.yeuCauLinhKSNK.IsLuu = true;
      //   self.apiService.post<any>("YeuCauLinhKSNK/GuiLaiPhieuLinhThuongKSNK", self.yeuCauLinhKSNK).subscribe(
      //     (result) => {
      //       if (result != undefined && result != null) {
      //         self.yeuCauLinhKSNK.LastModified = result.LastModified;
      //         self.yeuCauLinhKSNK.IsLuu = false;
      //         self.loadingPageDaDuyet();
      //         self.inPhieuLinhThuongs.Header = true;
            
      //         self.inPhieuLinhThuongs.YeuCauLinhVatTuIds= result; 

      //         self.inPhieuLinhThuongs.LoaiPhieuLinh = 1;
      //         self.inPhieuLinhThuongs.TrangThai = this.trangThaiVo.TrangThai;
      //         self.apiService.post<any>("YeuCauLinhKSNK/InPhieuLinhThuongKSNK", self.inPhieuLinhThuongs).subscribe(
      //           resData => {
      //             if (resData != undefined && resData != null) {
      //               self.inPhieuLinhThuong.Header = false;
      //               self.closePopupLoadingDataDaDuyet();
      //               self.dialog.open(PhieuLinhKSNKThuongPopupComponent, {
      //                 disableClose: false,
      //                 width: '1200px',
      //                 data: { Model: resData },
      //               }
      //               ).afterClosed().subscribe(() => {
      //                 self.closePopupLoadingDataDaDuyet();
      //               }
      //               );
      //             }
      //           },
      //           (err: ApiError) => {
      //             self.validationErrors = err.ValidationErrors;
      //             if (err.Message != "Validation Failed") {
      //               self.notificationService.showError(err.Message);
      //             }
      //             self.closePopupLoadingDataDaDuyet();
      //           }
      //         );
      //       } else {
      //         self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
      //       }

      //     },
      //     (err: ApiError) => {
      //       self.validationErrors = err.ValidationErrors;
      //       if (err.Message != "Validation Failed") {
      //         self.notificationService.showError(err.Message);
      //       }
      //       self.closePopupLoadingDataDaDuyet();
      //     });
      // } else {
      //   self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      // }
    }
  }

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
          this.trangThaiVo = result;
        })
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
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
