import { Component, OnInit,Input, ChangeDetectorRef,Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GiayChungNhanNghiDuongThai, NoiTruHoSoKhacGiayChungNhanNghiDuongThai } from './giay-nghi-duong-noi-tru.model';
import { GiayNghiDuongThaiNoiTruPopupComponent } from './giay-nghi-duong-thai-noi-tru-popup/giay-nghi-duong-thai-noi-tru-popup.component';

@Component({
  selector: 'app-giay-nghi-duong-thai-noi-tru',
  templateUrl: './giay-nghi-duong-thai-noi-tru.component.html',
  styleUrls: ['./giay-nghi-duong-thai-noi-tru.component.scss']
})
export class GiayNghiDuongThaiNoiTruComponent implements OnInit {

  giayChungNhanNghiDuongThai = {} as GiayChungNhanNghiDuongThai;
  noiTruHoSoKhacGiayChungNhanNghiDuongThai : NoiTruHoSoKhacGiayChungNhanNghiDuongThai;
  documentType : DocumentType;
  validationErrors:any;
  dataNhanVien:any;
  yeuCauTiepNhanId :number = 0;
  getNhanVienId:any;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();  
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachDieuTriNoiTru;
    this.noiTruHoSoKhacGiayChungNhanNghiDuongThai = new NoiTruHoSoKhacGiayChungNhanNghiDuongThai();
    const id: number = this.route.snapshot.params.id;
    this.yeuCauTiepNhanId = id;
    this.getNhanVienId = this.authService.getAccessUser();
    this.giayChungNhanNghiDuongThai = new GiayChungNhanNghiDuongThai();
    this.getNhanVien();
    this.getData();
  }
  getNhanVien() {
    this.apiService.post<any>("DieuTriNoiTru/GetChuToa").subscribe(
      (result) => {
        this.dataNhanVien = result;
      });
  }
  changeValueNghiTuNgay(event) {
    if (event != null && this.giayChungNhanNghiDuongThai.NghiDenNgay != null) {
      let khoangCachTuNgayDenNgay = 0;
      let startDate = new Date(event);
      let endDate = new Date(this.giayChungNhanNghiDuongThai.NghiDenNgay);
      let seconds1Ngay = 24 * 60 * 60;
      let secondstuNgayDenNgay = (endDate.getTime() - startDate.getTime()) / 1000;
      khoangCachTuNgayDenNgay = secondstuNgayDenNgay / seconds1Ngay;
      
      if (khoangCachTuNgayDenNgay < 7) {
        this.notificationService.showError("Tổng số ngày nghỉ dưỡng thai không được nhỏ hơn 7 ngày");
        this.giayChungNhanNghiDuongThai.SoNgayNghi = 0;
        return;
      }
      else if (khoangCachTuNgayDenNgay > 30) {
        this.notificationService.showError("Tổng số ngày nghỉ dưỡng thai không được lớn hơn 30 ngày");
        this.giayChungNhanNghiDuongThai.SoNgayNghi = 0;
        return;
      }
      else{
        this.giayChungNhanNghiDuongThai.SoNgayNghi = khoangCachTuNgayDenNgay;
      }
    }
    else{
      this.giayChungNhanNghiDuongThai.SoNgayNghi = 0;
    }
   }
  onChangeSoNgayNghi(event){
  }
  changeValueNghiDenNgay(event){
    if (event != null && this.giayChungNhanNghiDuongThai.NghiTuNgay != null) {
      let khoangCachTuNgayDenNgay = 0;
      let startDate = new Date(this.giayChungNhanNghiDuongThai.NghiTuNgay);
      let endDate = new Date(event);
      let seconds1Ngay = 24 * 60 * 60;
      let secondstuNgayDenNgay = (endDate.getTime() - startDate.getTime()) / 1000;
      khoangCachTuNgayDenNgay = secondstuNgayDenNgay / seconds1Ngay;
      
      if (khoangCachTuNgayDenNgay < 7) {
        this.notificationService.showError("Tổng số ngày nghỉ dưỡng thai không được nhỏ hơn 7 ngày");
        this.giayChungNhanNghiDuongThai.SoNgayNghi = 0;
        return;
      }
      else if (khoangCachTuNgayDenNgay > 30) {
        this.notificationService.showError("Tổng số ngày nghỉ dưỡng thai không được lớn hơn 30 ngày");
        this.giayChungNhanNghiDuongThai.SoNgayNghi = 0;
        return;
      }
      else{
        this.giayChungNhanNghiDuongThai.SoNgayNghi = khoangCachTuNgayDenNgay;
      }
    }
    else{
      this.giayChungNhanNghiDuongThai.SoNgayNghi = 0;
    }
  }
  changeValueNgayThucHien(event){
    // if(this.giayChungNhanNghiDuongThai.NgayThucHien != null)
    // {
    //   this.giayChungNhanNghiDuongThai.NgayThucHienDisplay = CommonService.formatDateTimeSACH(new Date(this.giayChungNhanNghiDuongThai.NgayThucHien), "mm/dd/yyyy");
    // }
  }
  getData(){
    var self = this;
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinGiayChungNhanNghiDuongThai?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.giayChungNhanNghiDuongThai = thongTinHoSo;
          self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.Id = result.Id;
          self.returnId.emit(self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.Id);
        }
        else {
          self.giayChungNhanNghiDuongThai = new GiayChungNhanNghiDuongThai();
          let nhanVienThucHienId = self.getNhanVienId.Id;
          self.apiService.post<any>("DieuTriNoiTru/GetDataChungNhanNghiDuongThai?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
            (result) => {

              self.giayChungNhanNghiDuongThai.TaiKhoanDangNhap = result.TenNhanVien;
              self.giayChungNhanNghiDuongThai.ChanDoan = result.ChanDoanVaPhuongPhapDieuTri;
              self.giayChungNhanNghiDuongThai.NgayThucHienDisplay = result.NgayThucHienDisplay;
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
  Huy(){
    var self = this;
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinGiayChungNhanNghiDuongThai?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.giayChungNhanNghiDuongThai = thongTinHoSo;
          self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.Id = result.Id;
          self.returnId.emit(self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.Id);
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
  Luu(){
    var self = this; 
    if(this.giayChungNhanNghiDuongThai.NghiTuNgay  != null)
    {
      let tn = new Date(this.giayChungNhanNghiDuongThai.NghiTuNgay);
      this.giayChungNhanNghiDuongThai.NghiTuNgayDisplay = CommonService.formatDateTime(tn, "mm/dd/yyyy");
    }
    if(this.giayChungNhanNghiDuongThai.NghiDenNgay  != null)
    {
      let dn = new Date(this.giayChungNhanNghiDuongThai.NghiDenNgay);
      this.giayChungNhanNghiDuongThai.NghiDenNgayDisplay = CommonService.formatDateTime(dn, "mm/dd/yyyy");
    }
    const thongTinHoSo = JSON.stringify(this.giayChungNhanNghiDuongThai);
    self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.LoaiHoSoDieuTriNoiTru = 41;
    self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.ThongTinHoSo = thongTinHoSo;
    self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.NghiTuNgay = self.giayChungNhanNghiDuongThai.NghiTuNgay;
    self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.NghiDenNgay = self.giayChungNhanNghiDuongThai.NghiDenNgay;
    self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.NgayThucHien = self.giayChungNhanNghiDuongThai.NgayThucHien;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {

          self.apiService.post<any>("DieuTriNoiTru/LuuGiayChungNhanNghiDuongThai", self.noiTruHoSoKhacGiayChungNhanNghiDuongThai).subscribe(
            (result) => {
              if(result.Id == undefined)
              {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.Id  = result;
              }
              if(result.Id != undefined)
              {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.Id  = result.Id;
              }
              self.Huy();
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });
        } 
    },
    (err: ApiError) => {
      self.validationErrors = err.ValidationErrors;
      if (err.Message != "Validation Failed") {
        self.notificationService.showError(err.Message);
      }
    });
  }
  InPhieu(){
    var self = this;
    let dataIn = {
      Hosting: null,
      NoiTruHoSoKhacId: this.noiTruHoSoKhacGiayChungNhanNghiDuongThai.Id,
      YeuCauTiepNhanId: this.yeuCauTiepNhanId,
      LoaiHoSoDieuTriNoiTru: 41,
    }
      if(this.noiTruHoSoKhacGiayChungNhanNghiDuongThai.Id == 0)
      {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có in phiếu này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            if (this.giayChungNhanNghiDuongThai.NghiTuNgay != null) {
              let tn = new Date(this.giayChungNhanNghiDuongThai.NghiTuNgay);
              this.giayChungNhanNghiDuongThai.NghiTuNgayDisplay = CommonService.formatDateTime(tn, "mm/dd/yyyy");
            }
            if (this.giayChungNhanNghiDuongThai.NghiDenNgay != null) {
              let dn = new Date(this.giayChungNhanNghiDuongThai.NghiDenNgay);
              this.giayChungNhanNghiDuongThai.NghiDenNgayDisplay = CommonService.formatDateTime(dn, "mm/dd/yyyy");
            }
            const thongTinHoSo = JSON.stringify(this.giayChungNhanNghiDuongThai);
            self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.LoaiHoSoDieuTriNoiTru = 41;
            self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.ThongTinHoSo = thongTinHoSo;
            self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.NghiTuNgay = self.giayChungNhanNghiDuongThai.NghiTuNgay;
            self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.NghiDenNgay = self.giayChungNhanNghiDuongThai.NghiDenNgay;
            self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.NgayThucHien = self.giayChungNhanNghiDuongThai.NgayThucHien;
            self.apiService.post<any>("DieuTriNoiTru/LuuGiayChungNhanNghiDuongThai", self.noiTruHoSoKhacGiayChungNhanNghiDuongThai).subscribe(
              (result) => {
                dataIn.NoiTruHoSoKhacId =result.Id;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.Huy();
                self.apiService.post<any>("DieuTriNoiTru/InGiayChungNhanNghiDuongThai", dataIn).subscribe(
                  (result) => {
                          self.dialog.open(GiayNghiDuongThaiNoiTruPopupComponent, {
                              disableClose: true,
                              width: '1000px',
                              data: { Model: result }
                          }).afterClosed().subscribe(() => {
                          });
                  },
                  (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                      self.notificationService.showError(err.Message);
                    }
                  });
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
              });
           
          } 
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
      }
      else{
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có in phiếu này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            if (this.giayChungNhanNghiDuongThai.NghiTuNgay != null) {
              let tn = new Date(this.giayChungNhanNghiDuongThai.NghiTuNgay);
              this.giayChungNhanNghiDuongThai.NghiTuNgayDisplay = CommonService.formatDateTime(tn, "mm/dd/yyyy");
            }
            if (this.giayChungNhanNghiDuongThai.NghiDenNgay != null) {
              let dn = new Date(this.giayChungNhanNghiDuongThai.NghiDenNgay);
              this.giayChungNhanNghiDuongThai.NghiDenNgayDisplay = CommonService.formatDateTime(dn, "mm/dd/yyyy");
            }
            const thongTinHoSo = JSON.stringify(this.giayChungNhanNghiDuongThai);
            self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.LoaiHoSoDieuTriNoiTru = 41;
            self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.ThongTinHoSo = thongTinHoSo;
            self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.NghiTuNgay = self.giayChungNhanNghiDuongThai.NghiTuNgay;
            self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.NghiDenNgay = self.giayChungNhanNghiDuongThai.NghiDenNgay;
            self.noiTruHoSoKhacGiayChungNhanNghiDuongThai.NgayThucHien = self.giayChungNhanNghiDuongThai.NgayThucHien;
            self.apiService.post<any>("DieuTriNoiTru/LuuGiayChungNhanNghiDuongThai", self.noiTruHoSoKhacGiayChungNhanNghiDuongThai).subscribe(
              (result) => {
                dataIn.NoiTruHoSoKhacId =result;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                self.Huy();
                self.apiService.post<any>("DieuTriNoiTru/InGiayChungNhanNghiDuongThai", dataIn).subscribe(
                  (result) => {
                          self.dialog.open(GiayNghiDuongThaiNoiTruPopupComponent, {
                              disableClose: true,
                              width: '750px',
                              data: { Model: result }
                          }).afterClosed().subscribe(() => {
                          });
                  },
                  (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                      self.notificationService.showError(err.Message);
                    }
                  });
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
              });
          } 
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
      }
  }
  changeMa(event:any,so:any){
    if(event != undefined && event != null && event != "")
    {
     this.apiService.post<any>("DieuTriNoiTru/GetMaBacSi" ,{Searching:event}).subscribe(
       (result) => {
           if(result != undefined && result != null && result != "")
           {
             if(so == 1)
             {
               this.giayChungNhanNghiDuongThai.MaNguoiHanhNgheKBCB = result;
             }
             // if(so == 2)
             // {
             //   this.giayChungNhanNghiViecHuongBHXH.MaThuTruongDonVi = result;
             // }
           }
       },
       (err: ApiError) => {
         this.validationErrors = err.ValidationErrors;
         if (err.Message != "Validation Failed") {
           this.notificationService.showError(err.Message);
         }
       });
    }
    else{
     if(so == 1)
             {
               this.giayChungNhanNghiDuongThai.MaNguoiHanhNgheKBCB = null;
             }
             // if(so == 2)
             // {
             //   this.giayChungNhanNghiViecHuongBHXH.MaThuTruongDonVi = null;
             // }
    }
   }
}
