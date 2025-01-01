import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ThongTinBenhNhans } from '../../../tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { Location } from '@angular/common';
import { KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent } from '../ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup/ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup.component';
import { KhamDoanChuaKetLuan } from '../kham-doan-ket-luan.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SoKhamSucKhoeDinhKyPopupComponent } from '../../kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component';
import { KetQuaKhamSucKhoePopupComponent } from '../../kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component';
import { KetLuanKskDoanDvChuaKhamListPopupComponent } from '../ket-luan-ksk-doan-dv-chua-kham-list-popup/ket-luan-ksk-doan-dv-chua-kham-list-popup.component';
import { PopupKetQuaKskEditComponent } from '../popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component';

@Component({
  selector: 'app-ket-luan-kham-suc-khoe-doan-chi-tiet',
  templateUrl: './ket-luan-kham-suc-khoe-doan-chi-tiet.component.html',
  styleUrls: ['./ket-luan-kham-suc-khoe-doan-chi-tiet.component.scss']
})
export class KetLuanKhamSucKhoeDoanChiTietComponent implements OnInit {
  thongTinBenhNhan: ThongTinBenhNhans = new ThongTinBenhNhans();
  khamDoanChuaKetLuan: KhamDoanChuaKetLuan = new KhamDoanChuaKetLuan();
  documentType: DocumentType;
  popupLoadingData: any;
  popupSavingData: any;
  isConclude: boolean = false;
  id: number = 0;
  yeuCauTiepNhanId: number;
  validationErrors: any = [];
  datas: any = [];
  from:string="";

  thongTinKhamTheoDichVuData: string = null;
  thongTinKhamTheoDichVuTemplate: any = null;
  thongTinKhamTheoDichVuDatas: any = [];

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private authService: AuthService,
    private apiService: ApiService,
    private ref: ChangeDetectorRef,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.KhamDoanKetLuanKhamSucKhoeDoan;
    this.route.queryParams.subscribe(param => {
      // console.log('param', param);
      this.id = param['Id'];
      this.yeuCauTiepNhanId = param['YeuCauTiepNhanId'];
      this.from =param['f'];
      this.getByYeuCauTiepNhanId(this.yeuCauTiepNhanId, this.id);
    });
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



  ketQuaMau() {
    var self = this;
    self.khamDoanChuaKetLuan.IsOnlySave = false;
    self.khamDoanChuaKetLuan.Id = this.yeuCauTiepNhanId;
    self.khamDoanChuaKetLuan.HopDongKhamSucKhoeId = this.id;
    self.khamDoanChuaKetLuan.LaGetKetQuaMau = true;
    self.loadingPage();
    self.apiService.post<any>("KhamDoan/GetKetQuaMaus", self.khamDoanChuaKetLuan).subscribe((resultData) => {
      self.closePopupLoadingData();
      if (resultData != undefined && resultData != null) {
        self.khamDoanChuaKetLuan.LaGetKetQuaMau = false;
        // console.log(resultData)
        self.dialog
          .open(KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent, {
            disableClose: false,
            width: "400px",
            data: resultData,
          }).afterClosed().subscribe(datas => {
            if (datas != undefined && datas != null && datas.length > 0) {
              console.log(datas)
              datas.forEach(element => {
                if (element.IsCheck) {
                  if (this.khamDoanChuaKetLuan.KSKKetLuanCacBenhTat == null) {
                    this.khamDoanChuaKetLuan.KSKKetLuanCacBenhTat = "";
                  }
                  this.khamDoanChuaKetLuan.KSKKetLuanCacBenhTat += element.Value + "; ";
                }
              });
            }
          });
      }
    }
      ,
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupLoadingData();
      });
  }


  getByYeuCauTiepNhanId(yeuCauTiepNhanId: number, hopDongKhamSucKhoeNhanVienId: number,) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.loadingPage();
      let obj = {
        Id: yeuCauTiepNhanId,
        HopDongKhamSucKhoeNhanVienId: hopDongKhamSucKhoeNhanVienId
      }
      this.apiService.post<any>("KhamDoan/GetGoiKhamSucKhoeDoanYeuCauTNYeuCauTN", obj).subscribe((resultData) => {
        this.closePopupLoadingData();
        if (resultData != undefined && resultData != null) {
          this.khamDoanChuaKetLuan = resultData;
          this.khamLamSanBindData(this.khamDoanChuaKetLuan.KetLuanKhamSucKhoeDoanDichVuKhamTemplates);
          console.log("resultData: ", resultData)
          if (this.thongTinKhamTheoDichVuDatas != []) {
            this.convertPhanLoai();
          }

        }
      }
        ,
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }

  }

  convertPhanLoai() {
    for (let i = 1; i < this.thongTinKhamTheoDichVuDatas.length; i += 2) {
      if (this.thongTinKhamTheoDichVuDatas[i].Type == 4 && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate == 2) {
        i += 4;
        continue;
      }
      else if (this.thongTinKhamTheoDichVuDatas[i].Type == 6 && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate == 3) {
        continue;
      }
      if (this.thongTinKhamTheoDichVuDatas[i].Value === 1 && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate === 5) {
        this.thongTinKhamTheoDichVuDatas[i].Value = "Loại I";
      }
      else if (this.thongTinKhamTheoDichVuDatas[i].Value === 2 && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate === 5) {
        this.thongTinKhamTheoDichVuDatas[i].Value = "Loại II";
      }
      else if (this.thongTinKhamTheoDichVuDatas[i].Value === 3 && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate === 5) {
        this.thongTinKhamTheoDichVuDatas[i].Value = "Loại III";
      }
      else if (this.thongTinKhamTheoDichVuDatas[i].Value === 4 && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate === 5) {
        this.thongTinKhamTheoDichVuDatas[i].Value = "Loại IV";
      }
      else if (this.thongTinKhamTheoDichVuDatas[i].Value === 5 && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate === 5) {
        this.thongTinKhamTheoDichVuDatas[i].Value = "Loại V";
      }
      else if (this.thongTinKhamTheoDichVuDatas[i].Value === null && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate === 5) {
        this.thongTinKhamTheoDichVuDatas[i].Value = null;
      }
    }
  }

  khamLamSanBindData(dataItem: any) {
    dataItem.forEach(element => {
      this.thongTinKhamTheoDichVuTemplate = JSON.parse(element.ThongTinKhamTheoDichVuTemplate);
      this.thongTinKhamTheoDichVuData = element.ThongTinKhamTheoDichVuData;
      if (this.thongTinKhamTheoDichVuData == null) {
        this.thongTinKhamTheoDichVuTemplate = undefined;
      }
      this.bindDataDynamicComponent(element.Type);
    });
    // console.log("tmplate: ", this.thongTinKhamTheoDichVuDatas)
  }

  bindDataDynamicComponent(type: number) {
    let strData = this.thongTinKhamTheoDichVuData;
    if (strData != undefined && strData != null) {
      let dataObj = JSON.parse(strData);
      let itemTemp = null;
      if (this.thongTinKhamTheoDichVuTemplate !== null) {
        this.thongTinKhamTheoDichVuTemplate.ComponentDynamics.forEach(item => {
          if (item.groupItems != undefined && item.groupItems != null && item.groupItems.length > 0) {
            if (item.Type == 4) {
              let dataGroups = {
                Type: type,
                Label: item.Label,
                TypeTemplate: item.Type,
                fxFlex: '10%',
              }
              this.thongTinKhamTheoDichVuDatas.push(dataGroups);
            }
            item.groupItems.forEach(element => {
              itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == element.Id);
              if (itemTemp != null) {
                element.Value = itemTemp.Value;
              }
              let data = {
                Type: type,
                Label: element.Label + ': ',
                Value: element.Value,
                TypeTemplate: element.Type,
                fxFlex: '20%',
              }
              this.thongTinKhamTheoDichVuDatas.push(data);
            });
          }
          else {
            itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == item.Id);
            if (itemTemp != null) {
              item.Value = itemTemp.Value;
            }
            let data = {
              Type: type,
              Label: item.Label + ': ',
              Value: item.Value,
              TypeTemplate: item.Type,
              fxFlex: '50%'
            }
            this.thongTinKhamTheoDichVuDatas.push(data);
          }
        });

      }
    }
  }

  luuVaHoanThanhKhamKSKDoan() {
    var self = this;
    if (self.khamDoanChuaKetLuan.CoDichVuChuaKham) {
      self.dialog.open(KetLuanKskDoanDvChuaKhamListPopupComponent, {
        disableClose: false,
        width: '750px',
        data: { Model: self.khamDoanChuaKetLuan, DichVuKhamChuaKhams: self.khamDoanChuaKetLuan.DichVuKhamChuaKhams, DichVuKyThuatChuaThucHiens: self.khamDoanChuaKetLuan.DichVuKyThuatChuaThucHiens },
      }).afterClosed().subscribe((result) => {
        if (result === 'Yes' && result != null) {
          self.hoanThanhKham();
        }
      });
    }
    else {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có chắn chắn muốn lưu và hoàn thành khám cho nhân viên này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          self.hoanThanhKham();
        }
      })
    }

  }

  hoanThanhKham() {
    
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.savingPage();
      self.validationErrors = [];
      self.ref.detectChanges();
      self.khamDoanChuaKetLuan.IsOnlySave = false;
      self.khamDoanChuaKetLuan.Id = this.yeuCauTiepNhanId;
      self.khamDoanChuaKetLuan.HopDongKhamSucKhoeId = this.id;
      self.apiService.post<any>("KhamDoan/LuuHoacLuuVaHoanThanhKhamKetLuanKSKDoan", self.khamDoanChuaKetLuan).subscribe(
        () => {
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
          self.closePopupSavingData();
          if(this.from=="ketluancls")
          {
            self.router.navigate(['/kham-doan/kham-doan-ket-luan-cls-ksk'],{queryParams:{"holdQuery":true}});
          }
          else
          {
            self.location.back();
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

  luuKSKDoan() {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu kết luận này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.savingPage();
          self.validationErrors = [];
          self.ref.detectChanges();
          self.khamDoanChuaKetLuan.IsOnlySave = true;
          self.khamDoanChuaKetLuan.Id = this.yeuCauTiepNhanId;
          self.khamDoanChuaKetLuan.HopDongKhamSucKhoeId = this.id;
          self.apiService.post<any>("KhamDoan/LuuHoacLuuVaHoanThanhKhamKetLuanKSKDoan", self.khamDoanChuaKetLuan).subscribe(
            (resData) => {
              if (resData != undefined && resData != null) {
                self.khamDoanChuaKetLuan.LastModified = resData;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.closePopupSavingData();
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

  huy() {
    // this.ngOnInit();
    this.location.back();
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.huy();
      event.preventDefault();
    }
  }


  inSoKSK() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.dialog.open(SoKhamSucKhoeDinhKyPopupComponent, {
        disableClose: false,
        width: '1000px',
        data: this.id
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  inKetQuaKSK() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      // this.dialog.open(KetQuaKhamSucKhoePopupComponent, {
      //   disableClose: false,
      //   width: '1000px',
      //   data: this.id
      // });

      this.apiService.post<any>("KhamDoan/GetDataKetQuaKSKDoanEdit?hopDongKhamSucKhoeId=" + this.id).subscribe(
        (resData) => {
          if (resData != undefined && resData != null) {
            let dialogRef = this.dialog.open(PopupKetQuaKskEditComponent, {
              disableClose: false,
              width: '1500px',
              data: { Model: resData, hopDongKhamSucKhoeId: this.id,ShowIn: true }
            });
            dialogRef.afterClosed().subscribe(result => {
            });
          }
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupSavingData();
        });


    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  redirectKetLuanCLS(){
    var self = this;
    if(this.khamDoanChuaKetLuan.TrangThaiYeuCauTiepNhan == 1)
    {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu kết luận và chuyển sang kết luận cls này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.savingPage();
            self.validationErrors = [];
            self.ref.detectChanges();
            self.khamDoanChuaKetLuan.IsOnlySave = true;
            self.khamDoanChuaKetLuan.Id = this.yeuCauTiepNhanId;
            self.khamDoanChuaKetLuan.HopDongKhamSucKhoeId = this.id;
            self.apiService.post<any>("KhamDoan/LuuHoacLuuVaHoanThanhKhamKetLuanKSKDoan", self.khamDoanChuaKetLuan).subscribe(
              (resData) => {
                if (resData != undefined && resData != null) {
                  self.khamDoanChuaKetLuan.LastModified = resData;
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  self.closePopupSavingData();
                  //self.router.navigate(['/kham-doan/kham-doan-ket-luan-cls-ksk/detail/'+this.yeuCauTiepNhanId+'/'+this.khamDoanChuaKetLuan.HopDongKhamSucKhoeId+'/'+this.khamDoanChuaKetLuan.CongTyKhamSucKhoeId],{queryParams:{"f":"ketluan"}});                
                  self.router.navigate(['/kham-doan/kham-doan-ket-luan-cls-ksk'],{queryParams:{"holdQuery":true}});
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
    else
    {
      self.router.navigate(['/kham-doan/kham-doan-ket-luan-cls-ksk'],{queryParams:{"holdQuery":true}});
    }
  }
 
}
