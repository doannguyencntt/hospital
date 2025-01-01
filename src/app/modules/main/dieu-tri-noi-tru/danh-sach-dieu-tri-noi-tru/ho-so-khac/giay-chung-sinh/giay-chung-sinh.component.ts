import { ChangeDetectorRef, Component, Input, OnInit, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BienBanHoiChanPhauThuatMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { BienBanGayMePopupComponent } from '../bien-ban-gay-me-popup/bien-ban-gay-me-popup.component';
import { GiayChungSinhPopupComponent } from '../giay-chung-sinh-popup/giay-chung-sinh-popup.component';

import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { GiayChungSinh, GiayChungSinhDS, NoiTruHoSoKhacGiayChungSinh } from './giay-chung-sinh.model';
import icDelete from '@iconify/icons-ic/delete';
import icClear from '@iconify/icons-ic/twotone-clear';

@Component({
  selector: 'app-giay-chung-sinh',
  templateUrl: './giay-chung-sinh.component.html',
  styleUrls: ['./giay-chung-sinh.component.scss']
})
export class GiayChungSinhComponent implements OnInit {
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  validationErrors: any[] = [];
  popupSavingData: any = null;
  popupLoadingData: any = null;
  yeuCauTiepNhanId: number = 0;
  noiTruHoSoKhacId: number = 0;
  //------------------BVHD-3705-----------------
  giayChungSinhObj: GiayChungSinh = new GiayChungSinh();
  noiTruHoSoKhacGiayChungSinh: NoiTruHoSoKhacGiayChungSinh = new NoiTruHoSoKhacGiayChungSinh();
  gridColumns: any[];
  gridDataSource: any = {
    data: [],
    total: 0
  };
  icDelete = icDelete;
  icClear = icClear;

  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  format: string = 'n2';
  //------------------end BVHD-3705-----------------
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
    const id: number = this.dieuTriNoiTruModel.Id;

    if (id != undefined && id != null) {
      this.getById(id);
      this.yeuCauTiepNhanId = id;
    }
    this.giayChungSinhObj.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
    this.gridColumns = [
      { Field: "", Title: "STT", Width: 35, Template: this.sttTemplate },
      { Field: "DuDinhDatTenCon", Title: "Tên con", Width: 180, Template: this.actionTemplate },
      { Field: "GioiTinh", Title: "Giới tính", Width: 100 },
      { Field: "CanNang", Title: "Cân nặng", Width: 100 },
      { Field: "So", Title: "Số", Width: 100 },
      { Field: "QuyenSo", Title: "Quyển số", Width: 100 },
      { Field: "TrangThaiLuu", Title: "Trạng thái", Width: 100, Template: this.trangThaiTemplate },
    ];
    this.giayChungSinhObj.TrangThaiLuu = 1;
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


  getById(id: number) {
    var self = this;
    if (self.noiTruHoSoKhacGiayChungSinh.Id != null && self.noiTruHoSoKhacGiayChungSinh.Id != 0) {
      if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
        self.loadingPage();
        self.apiService.get<GiayChungSinh>("DieuTriNoiTru/GetHoSoKhacGiayChungSinh?id=" + id + "&noiTruHoSoKhacId=" + self.noiTruHoSoKhacGiayChungSinh.Id).subscribe(
          resultData => {
            if (resultData != undefined && resultData != null) {
              self.giayChungSinhObj = resultData;
              if (resultData.NoiTruHoSoKhacId != undefined && resultData.NoiTruHoSoKhacId) {
                self.noiTruHoSoKhacGiayChungSinh.Id = resultData.NoiTruHoSoKhacId;
              }
              this.giayChungSinhObj.FileDinhKems = [...resultData.FileDinhKems];
              this.returnId.emit(self.noiTruHoSoKhacId);

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
    else {
      this.giayChungSinhObj = new GiayChungSinh();
      this.giayChungSinhObj.TrangThaiLuu = 1;
      this.giayChungSinhObj.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
      if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
        self.loadingPage();
        self.apiService.get<GiayChungSinh>("DieuTriNoiTru/GetHoSoKhacGiayChungSinh?id=" + id).subscribe(
          resultData => {
            if (resultData != undefined && resultData != null) {
              this.giayChungSinhObj = resultData;
              this.loadingDsGiayChungSinhCon(this.yeuCauTiepNhanId);
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
  }

  loadingDsGiayChungSinhCon(id) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<Array<GiayChungSinhDS>>("DieuTriNoiTru/GetDSGiayChungSinhCon?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.gridDataSource = {
              data: resultData,
              total: resultData.length
            };
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
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }


  huy() {
    this.ref.detectChanges();
    this.validationErrors = [];
    this.giayChungSinhObj = new GiayChungSinh();
    this.giayChungSinhObj.TrangThaiLuu = 1;
    this.noiTruHoSoKhacGiayChungSinh = new NoiTruHoSoKhacGiayChungSinh();
  }
  capLai() {
    // if (this.noiTruHoSoKhacGiayChungSinh.Id == 0) {
    //   this.notificationService.showError("Bạn phải chọn người cần cấp lại.");
    //   this.giayChungSinhObj.TrangThaiLuu = 1;
    // }
    // else {
    //   this.giayChungSinhObj.TrangThaiLuu = 2;
    //   //this.noiTruHoSoKhacGiayChungSinh.Id = 0;
    // }
   if (this.noiTruHoSoKhacGiayChungSinh.Id != 0) {
    this.giayChungSinhObj.TrangThaiLuu = 2;
    if(this.giayChungSinhObj.TrangThaiLuu == 2 && this.giayChungSinhObj.FileDinhKems.length == 0)
        {
          this.notificationService.showError("Khi nhấn vào nút Cấp lại thì file đính kèm là bắt buộc");
          return;
    }
    else{
      this.noiTruHoSoKhacGiayChungSinh.Id = 0;
    }
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: 'Xác nhận', Message: " Bạn có muốn cấp lại không? " }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.luu();
      }else{
        this.huy();
      }
    });
    
   }
   else{
    this.giayChungSinhObj.TrangThaiLuu = 1;
   }
  }
  luu() {
    
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu những thông tin này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        this.validationErrors = [];
        
        this.ref.detectChanges();
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
          this.savingPage();
          this.giayChungSinhObj.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
          //-------------- check validate----------------------------------------------------------------------
          this.apiService.post<any>("DieuTriNoiTru/CheckValidationSoChungSinhExit", this.giayChungSinhObj).subscribe(
            resDatas => {
              if (resDatas != undefined && resDatas != null) {
                if (resDatas == false) {
                  //------popup xác nhận cho lưu trùng số chứng sinh--------------------------------------------------------------------------
                  this.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: '400px',
                    data: { Title: 'Xác nhận', Message: " Đã tồn tại số chứng sinh này. Bạn có chắc muốn lưu? " }
                  }).afterClosed().subscribe(result => {
                    if (result === 'Yes') {
                      this.apiService.post<any>("DieuTriNoiTru/CheckValidationForChungSinh", this.giayChungSinhObj).subscribe(
                        resData => {
                          if (resData != undefined && resData != null) {
                            //------save--------------------------------------------------------------------------
                            // if(this.giayChungSinhObj.TrangThaiLuu == 2)
                            // {
                            //   this.noiTruHoSoKhacGiayChungSinh.Id = 0;
                            // }
                            // else{
                            //   this.noiTruHoSoKhacGiayChungSinh.Id = this.giayChungSinhObj.NoiTruHoSoKhacId;
                            // }
                            
                            this.noiTruHoSoKhacGiayChungSinh.LoaiHoSoDieuTriNoiTru = 31;
                            this.noiTruHoSoKhacGiayChungSinh.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                            const thongTinHoSo = JSON.stringify(this.giayChungSinhObj);
                            this.noiTruHoSoKhacGiayChungSinh.ThongTinHoSo = thongTinHoSo;
                            this.noiTruHoSoKhacGiayChungSinh.FileDinhKems = this.giayChungSinhObj.FileDinhKems;
                            this.apiService.post<any>("DieuTriNoiTru/ThemHoacCapNhatGiayChungSinh", this.noiTruHoSoKhacGiayChungSinh).subscribe(
                              (result) => {
                                if (result != undefined && result != null) {
                                  this.closePopupSavingData();
                                  this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                                  this.loadingDsGiayChungSinhCon(this.yeuCauTiepNhanId);
                                  this.getById(this.yeuCauTiepNhanId);
                                  this.huy();
                                }
    
                              },
                              (err: ApiError) => {
                                this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                  this.notificationService.showError(err.Message);
                                }
                                this.closePopupSavingData();
                              });
                            //------save--------------------------------------------------------------------------
                          }
                        },
                        (err: ApiError) => {
                          this.validationErrors = err.ValidationErrors;
                          if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                          }
                          this.closePopupSavingData();
    
                        }
                      );
                    }else{
                      this.closePopupSavingData();
                    }
                  });

                  //------popup xác nhận cho lưu trùng số chứng sinh--------------------------------------------------------------------------
                }
                else {
                  //------save bình thường--------------------------------------------------------------------------
                  this.apiService.post<any>("DieuTriNoiTru/CheckValidationForChungSinh", this.giayChungSinhObj).subscribe(
                    resData => {
                      if (resData != undefined && resData != null) {
                        //------save--------------------------------------------------------------------------
                        // if(this.giayChungSinhObj.TrangThaiLuu == 2)
                        // {
                        //   this.noiTruHoSoKhacGiayChungSinh.Id = 0;
                        // }
                        // else{
                        //   this.noiTruHoSoKhacGiayChungSinh.Id = this.giayChungSinhObj.NoiTruHoSoKhacId;
                        // }
                        this.noiTruHoSoKhacGiayChungSinh.LoaiHoSoDieuTriNoiTru = 31;
                        this.noiTruHoSoKhacGiayChungSinh.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                        const thongTinHoSo = JSON.stringify(this.giayChungSinhObj);
                        this.noiTruHoSoKhacGiayChungSinh.ThongTinHoSo = thongTinHoSo;
                        this.noiTruHoSoKhacGiayChungSinh.FileDinhKems = this.giayChungSinhObj.FileDinhKems;
                        this.apiService.post<any>("DieuTriNoiTru/ThemHoacCapNhatGiayChungSinh", this.noiTruHoSoKhacGiayChungSinh).subscribe(
                          (result) => {
                            if (result != undefined && result != null) {
                              this.closePopupSavingData();
                              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                              this.loadingDsGiayChungSinhCon(this.yeuCauTiepNhanId);
                              this.noiTruHoSoKhacGiayChungSinh.Id = 0;
                              this.getById(this.yeuCauTiepNhanId);
                              this.huy();
                            }

                          },
                          (err: ApiError) => {
                            this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                              this.notificationService.showError(err.Message);
                            }
                            this.closePopupSavingData();
                          });
                        //------save--------------------------------------------------------------------------
                      }
                    },
                    (err: ApiError) => {
                      this.validationErrors = err.ValidationErrors;
                      if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                      }
                      this.closePopupSavingData();

                    }
                  );
                }

                //------save--------------------------------------------------------------------------
              }
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupSavingData();

            }
          );
          //-------------- check validate----------------------------------------------------------------------

        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })



  }

  inGiayChungSinh() {
    if (this.IsKetThucBenhAn) {
      if (this.noiTruHoSoKhacGiayChungSinh.Id == undefined || this.noiTruHoSoKhacGiayChungSinh.Id == null || this.noiTruHoSoKhacGiayChungSinh.Id == 0) {
        this.notificationService.showError("Bạn cần phải chọn giấy chứng sinh cần in.");
      }
      else {
        var showDialog = this.dialog.open(LoadingComponent, {
          disableClose: true,
          width: '200px',
          height: '90px',
          data: { Title: 'Đang tải dữ liệu...' }
        });
        let hot: any;
        if (window.location.protocol == "http:") {
          hot = "http://" + window.location.host;
        } else {
          hot = "https://" + window.location.host;
        }
        this.apiService.post<any>("DieuTriNoiTru/InGiayChungSinh", { NoiTruHoSoKhacId: this.noiTruHoSoKhacGiayChungSinh.Id, Hosting: hot }).subscribe(
          resData => {
            if (resData != undefined && resData != null) {
              this.returnId.emit(this.noiTruHoSoKhacGiayChungSinh.Id);
              showDialog.close();
              this.dialog.open(GiayChungSinhPopupComponent, {
                disableClose: false,
                width: '1200px',
                data: { Title: 'GIẤY CHỨNG SINH', Data: resData },
              }
              ).afterClosed().subscribe(() => {
                showDialog.close();
              });
            }
          },
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            showDialog.close();

          }
        );
      }
    } else {
      if (this.noiTruHoSoKhacGiayChungSinh.Id == undefined || this.noiTruHoSoKhacGiayChungSinh.Id == null || this.noiTruHoSoKhacGiayChungSinh.Id == 0) {
        this.notificationService.showError("Bạn cần phải chọn giấy chứng sinh cần in.");
      }
      else {
        if(this.giayChungSinhObj.TrangThaiLuu == 2 && this.giayChungSinhObj.FileDinhKems.length == 0)
        {
          this.notificationService.showError("Khi nhấn vào nút Cấp lại thì file đính kèm là bắt buộc");
          return;
        }
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
          var showDialog = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' }
          });
          this.validationErrors = [];
          this.ref.detectChanges();
          this.savingPage();
          this.giayChungSinhObj.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
          //-------------- check validate----------------------------------------------------------------------\
          this.apiService.post<any>("DieuTriNoiTru/CheckValidationForChungSinh", this.giayChungSinhObj).subscribe(
            resDatas => {
              if (resDatas != undefined && resDatas != null) {
                if(resDatas == false){
                  this.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: '400px',
                    data: { Title: 'Xác nhận', Message: "Đã tồn tại số chứng sinh này. Bạn có chắc muốn lưu?" }
                  }).afterClosed().subscribe(result => {
                    if (result === 'Yes') {
                      this.apiService.post<any>("DieuTriNoiTru/CheckValidationForChungSinh", this.giayChungSinhObj).subscribe(
                        resData => {
                          if (resData != undefined && resData != null) {
                            //------save--------------------------------------------------------------------------
                            this.noiTruHoSoKhacGiayChungSinh.LoaiHoSoDieuTriNoiTru = 31;
                            this.noiTruHoSoKhacGiayChungSinh.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                            const thongTinHoSo = JSON.stringify(this.giayChungSinhObj);
                            this.noiTruHoSoKhacGiayChungSinh.ThongTinHoSo = thongTinHoSo;
                            this.noiTruHoSoKhacGiayChungSinh.FileDinhKems = this.giayChungSinhObj.FileDinhKems;
                            this.apiService.post<any>("DieuTriNoiTru/ThemHoacCapNhatGiayChungSinh", this.noiTruHoSoKhacGiayChungSinh).subscribe(
                              (result) => {
                                if (result != undefined && result != null) {
                                  this.closePopupSavingData();
                                  this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                                  this.loadingDsGiayChungSinhCon(this.yeuCauTiepNhanId);
                                  this.noiTruHoSoKhacGiayChungSinh.Id = 0;
                                  this.getById(this.yeuCauTiepNhanId);
                                  this.huy();
                                  let hot: any;
                                  if (window.location.protocol == "http:") {
                                    hot = "http://" + window.location.host;
                                  } else {
                                    hot = "https://" + window.location.host;
                                  }
                                  this.apiService.post<any>("DieuTriNoiTru/InGiayChungSinh", { NoiTruHoSoKhacId: result, Hosting: hot }).subscribe(
                                    resData => {
                                      if (resData != undefined && resData != null) {
                                        this.returnId.emit(this.noiTruHoSoKhacGiayChungSinh.Id);
                                        showDialog.close();
                                        this.dialog.open(GiayChungSinhPopupComponent, {
                                          disableClose: false,
                                          width: '1200px',
                                          data: { Title: 'GIẤY CHỨNG SINH', Data: resData },
                                        }
                                        ).afterClosed().subscribe(() => {
                                          showDialog.close();
                                        });
                                      }
                                    },
                                    (err: ApiError) => {
                                      this.validationErrors = err.ValidationErrors;
                                      if (err.Message != "Validation Failed") {
                                        this.notificationService.showError(err.Message);
                                      }
                                      showDialog.close();
            
                                    }
                                  );
                                }
            
                              },
                              (err: ApiError) => {
                                this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                  this.notificationService.showError(err.Message);
                                }
                                showDialog.close();
                                this.closePopupSavingData();
                              });
                            //------save--------------------------------------------------------------------------
                          }
                        },
                        (err: ApiError) => {
                          this.validationErrors = err.ValidationErrors;
                          if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                          }
                          this.closePopupSavingData();
            
                        }
                      );
                    }
                    else{
                      this.closePopupSavingData();
                    }
                  });
                }
                else{
                  this.apiService.post<any>("DieuTriNoiTru/CheckValidationForChungSinh", this.giayChungSinhObj).subscribe(
                    resData => {
                      if (resData != undefined && resData != null) {
                        //------save--------------------------------------------------------------------------
                        this.noiTruHoSoKhacGiayChungSinh.LoaiHoSoDieuTriNoiTru = 31;
                        this.noiTruHoSoKhacGiayChungSinh.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                        const thongTinHoSo = JSON.stringify(this.giayChungSinhObj);
                        this.noiTruHoSoKhacGiayChungSinh.ThongTinHoSo = thongTinHoSo;
                        this.noiTruHoSoKhacGiayChungSinh.FileDinhKems = this.giayChungSinhObj.FileDinhKems;
                        this.apiService.post<any>("DieuTriNoiTru/ThemHoacCapNhatGiayChungSinh", this.noiTruHoSoKhacGiayChungSinh).subscribe(
                          (result) => {
                            if (result != undefined && result != null) {
                              this.closePopupSavingData();
                              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                              this.loadingDsGiayChungSinhCon(this.yeuCauTiepNhanId);
                              this.noiTruHoSoKhacGiayChungSinh.Id = 0;
                              this.getById(this.yeuCauTiepNhanId);
                              this.huy();
                              let hot: any;
                              if (window.location.protocol == "http:") {
                                hot = "http://" + window.location.host;
                              } else {
                                hot = "https://" + window.location.host;
                              }
                              this.apiService.post<any>("DieuTriNoiTru/InGiayChungSinh", { NoiTruHoSoKhacId: result, Hosting: hot }).subscribe(
                                resData => {
                                  if (resData != undefined && resData != null) {
                                    this.returnId.emit(this.noiTruHoSoKhacGiayChungSinh.Id);
                                    showDialog.close();
                                    this.dialog.open(GiayChungSinhPopupComponent, {
                                      disableClose: false,
                                      width: '1200px',
                                      data: { Title: 'GIẤY CHỨNG SINH', Data: resData },
                                    }
                                    ).afterClosed().subscribe(() => {
                                      showDialog.close();
                                    });
                                  }
                                },
                                (err: ApiError) => {
                                  this.validationErrors = err.ValidationErrors;
                                  if (err.Message != "Validation Failed") {
                                    this.notificationService.showError(err.Message);
                                  }
                                  showDialog.close();
        
                                }
                              );
                            }
        
                          },
                          (err: ApiError) => {
                            this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                              this.notificationService.showError(err.Message);
                            }
                            showDialog.close();
                            this.closePopupSavingData();
                          });
                        //------save--------------------------------------------------------------------------
                      }
                    },
                    (err: ApiError) => {
                      this.validationErrors = err.ValidationErrors;
                      if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                      }
                      this.closePopupSavingData();
        
                    }
                  );
                }
              }
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupSavingData();

            }
          );



         
          //-------------- check validate----------------------------------------------------------------------
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }

    }
   
  }
  viewChungSinh(id: any) {
    this.noiTruHoSoKhacGiayChungSinh.Id = id;
    this.getById(this.yeuCauTiepNhanId);
  }
  xoaChungSinh(noiTruHoSoKhacId: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: 'Xác nhận', Message: BienBanHoiChanPhauThuatMessage.MessageConfirmDeleteChungSinh }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.savingPage();

        this.apiService.post<any>("DieuTriNoiTru/xoaChungSinh?id=" + noiTruHoSoKhacId).subscribe(
          () => {
            this.closePopupSavingData();
            this.loadingDsGiayChungSinhCon(this.yeuCauTiepNhanId);
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa ']));
          },
          (err: ApiError) => {
            this.notificationService.showError(err.Message);
            this.closePopupLoadingData();
          });
      }
    });
  }
  inTatCa() {
    if (this.IsKetThucBenhAn) {
      var showDialog = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải dữ liệu...' }
      });
      let hot: any;
      if (window.location.protocol == "http:") {
        hot = "http://" + window.location.host;
      } else {
        hot = "https://" + window.location.host;
      }
      this.apiService.post<any>("DieuTriNoiTru/InGiayChungSinhTatCa", { NoiTruHoSoKhacId: this.yeuCauTiepNhanId, Hosting: hot }).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            this.returnId.emit(this.noiTruHoSoKhacGiayChungSinh.Id);
            showDialog.close();
            this.dialog.open(GiayChungSinhPopupComponent, {
              disableClose: false,
              width: '1200px',
              data: { Title: 'GIẤY CHỨNG SINH', Data: resData },
            }
            ).afterClosed().subscribe(() => {
              showDialog.close();
            });
          }
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          showDialog.close();
        }
      );
    } else {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
        var showDialog = this.dialog.open(LoadingComponent, {
          disableClose: true,
          width: '200px',
          height: '90px',
          data: { Title: 'Đang tải dữ liệu...' }
        });
        this.validationErrors = [];
        this.ref.detectChanges();
        this.giayChungSinhObj.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
        //-------------- check validate----------------------------------------------------------------------
        let hot: any;
        if (window.location.protocol == "http:") {
          hot = "http://" + window.location.host;
        } else {
          hot = "https://" + window.location.host;
        }
        this.apiService.post<any>("DieuTriNoiTru/InGiayChungSinhTatCa", { NoiTruHoSoKhacId: this.yeuCauTiepNhanId, Hosting: hot }).subscribe(
          resData => {
            if (resData != undefined && resData != null) {
              this.returnId.emit(this.noiTruHoSoKhacGiayChungSinh.Id);
              showDialog.close();
              this.dialog.open(GiayChungSinhPopupComponent, {
                disableClose: false,
                width: '1200px',
                data: { Title: 'GIẤY CHỨNG SINH', Data: resData },
              }
              ).afterClosed().subscribe(() => {
                showDialog.close();
              });
            }
          },
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            showDialog.close();
          }
        );
        //-------------- check validate----------------------------------------------------------------------
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
  }
  selectionThongTinCon(event:any){
    if(event!=undefined && event != null && event !="")
    {
      this.giayChungSinhObj.DuDinhDatTenConId = event.KeyId;
      this.giayChungSinhObj.DuDinhDatTenCon = event.DuDinhDatTenCon;
      this.giayChungSinhObj.GioiTinh = event.GioiTinh;
      this.giayChungSinhObj.CanNang = event.CanNang;
      this.giayChungSinhObj.ThoiGianDe = event.ThoiGianDe;
    }
    else{
      this.giayChungSinhObj.DuDinhDatTenConId= null;
      this.giayChungSinhObj.DuDinhDatTenCon = null;
      this.giayChungSinhObj.GioiTinh = null;
      this.giayChungSinhObj.CanNang = null;
      this.giayChungSinhObj.ThoiGianDe = null;
    }
  }
  selectChangeNuoiDoDe(event){
    if(event !=undefined && event != null)
    {
      this.giayChungSinhObj.TenNhanVienDoDe =event.DisplayName;
    }
  }
  selectChangeNhanVienGhiPhieu(event){
    if(event !=undefined && event != null)
    {
      this.giayChungSinhObj.TenNhanVienGhiPhieu =event.DisplayName;
    }
  }
  selectChangeGiamDocChuyenMon(event){
    if(event !=undefined && event != null)
    {
      this.giayChungSinhObj.TenGiamDocChuyenMon =event.DisplayName;
    }
  }
}
