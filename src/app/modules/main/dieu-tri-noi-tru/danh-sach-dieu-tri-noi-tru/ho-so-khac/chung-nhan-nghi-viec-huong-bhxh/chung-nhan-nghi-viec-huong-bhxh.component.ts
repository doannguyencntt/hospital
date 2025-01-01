import { Component, OnInit,Input, ChangeDetectorRef,Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { GiayChungNhanNghiViecHuongBHXH,NoiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH } from './chung-nhan-nghi-viec-huong-bhxh.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ChungNhanNghiViecHbhxhPopupComponent } from './chung-nhan-nghi-viec-hbhxh-popup/chung-nhan-nghi-viec-hbhxh-popup.component';

@Component({
  selector: 'app-chung-nhan-nghi-viec-huong-bhxh',
  templateUrl: './chung-nhan-nghi-viec-huong-bhxh.component.html',
  styleUrls: ['./chung-nhan-nghi-viec-huong-bhxh.component.scss']
})
export class ChungNhanNghiViecHuongBhxhComponent implements OnInit {
  giayChungNhanNghiViecHuongBHXH = {} as GiayChungNhanNghiViecHuongBHXH;
  noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH : NoiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH;
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
    this.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH = new NoiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH();
    const id: number = this.route.snapshot.params.id;
    this.yeuCauTiepNhanId = id;
    this.getNhanVienId = this.authService.getAccessUser();
    this.giayChungNhanNghiViecHuongBHXH = new GiayChungNhanNghiViecHuongBHXH();
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
   }
  onChangeSoNgayNghi(event){
  }
  changeValueNghiDenNgay(event){
  }
  changeValueNgayThucHien(event){
    // if(this.giayChungNhanNghiViecHuongBHXH.NgayThucHien != null)
    // {
    //   this.giayChungNhanNghiViecHuongBHXH.NgayThucHienDisplay = CommonService.formatDateTimeSACH(new Date(this.giayChungNhanNghiViecHuongBHXH.NgayThucHien), "mm/dd/yyyy");
    // }
  }
  getData(){
    var self = this;
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinGiayChungNhanNghiViecHuongBHXH?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.giayChungNhanNghiViecHuongBHXH = thongTinHoSo;
          self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.Id = result.Id;
          self.returnId.emit(self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.Id);
          // if(self.giayChungNhanNghiViecHuongBHXH.NgayThucHien != null)
          // {
          //   this.giayChungNhanNghiViecHuongBHXH.NgayThucHienDisplay = CommonService.formatDateTimeSACH(new Date(this.giayChungNhanNghiViecHuongBHXH.NgayThucHien), "mm/dd/yyyy");
          // }
        }
        else {
          self.giayChungNhanNghiViecHuongBHXH = new GiayChungNhanNghiViecHuongBHXH();
          let nhanVienThucHienId = self.getNhanVienId.Id;
          self.apiService.post<any>("DieuTriNoiTru/GetDataChungNhanNghiViecHuongBHXH?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
            (result) => {

              self.giayChungNhanNghiViecHuongBHXH.TaiKhoanDangNhap = result.TenNhanVien;
              self.giayChungNhanNghiViecHuongBHXH.ChanDoanVaPhuongPhapDieuTri = result.ChanDoanVaPhuongPhapDieuTri;
              self.giayChungNhanNghiViecHuongBHXH.NgayThucHienDisplay = result.NgayThucHienDisplay;
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
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinGiayChungNhanNghiViecHuongBHXH?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.giayChungNhanNghiViecHuongBHXH = thongTinHoSo;
          self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.Id = result.Id;
          self.returnId.emit(self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.Id);
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
    if (this.giayChungNhanNghiViecHuongBHXH.NghiTuNgay != null) {
      let tn =new Date(this.giayChungNhanNghiViecHuongBHXH.NghiTuNgay);
      this.giayChungNhanNghiViecHuongBHXH.NghiTuNgayDisplay = CommonService.formatDateTime(tn, "mm/dd/yyyy");
    }
    if (this.giayChungNhanNghiViecHuongBHXH.NghiDenNgay != null) {
      let dn =new Date(this.giayChungNhanNghiViecHuongBHXH.NghiDenNgay);
      this.giayChungNhanNghiViecHuongBHXH.NghiDenNgayDisplay = CommonService.formatDateTime(dn, "mm/dd/yyyy");
    }
    const thongTinHoSo = JSON.stringify(this.giayChungNhanNghiViecHuongBHXH);
    self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.LoaiHoSoDieuTriNoiTru = 33;
    self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.ThongTinHoSo = thongTinHoSo;
    self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.NghiTuNgay = self.giayChungNhanNghiViecHuongBHXH.NghiTuNgay;
    self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.NghiDenNgay = self.giayChungNhanNghiViecHuongBHXH.NghiDenNgay;
    self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.NgayThucHien = self.giayChungNhanNghiViecHuongBHXH.NgayThucHien;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu giấy chứng nhận nghỉ việc hưởng bảo hiểm xã hội này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {

          self.apiService.post<any>("DieuTriNoiTru/LuuGiayChungNhanNghiViecHuongBHXH", self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH).subscribe(
            (result) => {
              if(result.Id == undefined)
              {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.Id  = result;
              }
              if(result.Id != undefined)
              {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.Id  = result.Id;
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
      NoiTruHoSoKhacId: this.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.Id,
      YeuCauTiepNhanId: this.yeuCauTiepNhanId,
      LoaiHoSoDieuTriNoiTru: 33,
    }
      if(this.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.Id == 0)
      {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có in phiếu giấy chứng nhận nghỉ việc hưởng bảo hiểm xã hội này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            if (this.giayChungNhanNghiViecHuongBHXH.NghiTuNgay != null) {
              let tn =new Date(this.giayChungNhanNghiViecHuongBHXH.NghiTuNgay);
              this.giayChungNhanNghiViecHuongBHXH.NghiTuNgayDisplay = CommonService.formatDateTime(tn, "mm/dd/yyyy");
            }
            if (this.giayChungNhanNghiViecHuongBHXH.NghiDenNgay != null) {
              let dn =new Date(this.giayChungNhanNghiViecHuongBHXH.NghiDenNgay);
              this.giayChungNhanNghiViecHuongBHXH.NghiDenNgayDisplay = CommonService.formatDateTime(dn, "mm/dd/yyyy");
            }
            const thongTinHoSo = JSON.stringify(this.giayChungNhanNghiViecHuongBHXH);
            self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.LoaiHoSoDieuTriNoiTru = 33;
            self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.ThongTinHoSo = thongTinHoSo;
            self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.NghiTuNgay = self.giayChungNhanNghiViecHuongBHXH.NghiTuNgay;
            self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.NghiDenNgay = self.giayChungNhanNghiViecHuongBHXH.NghiDenNgay;
            self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.NgayThucHien = self.giayChungNhanNghiViecHuongBHXH.NgayThucHien;
            self.apiService.post<any>("DieuTriNoiTru/LuuGiayChungNhanNghiViecHuongBHXH", self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH).subscribe(
              (result) => {
                dataIn.NoiTruHoSoKhacId =result.Id;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.Huy();
                self.apiService.post<any>("DieuTriNoiTru/InGiayChungNhanNghiViecHuongBHXH", dataIn).subscribe(
                  (result) => {
                          self.dialog.open(ChungNhanNghiViecHbhxhPopupComponent, {
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
            Message: "Bạn có in phiếu giấy chứng nhận nghỉ việc hưởng bảo hiểm xã hội này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            if (this.giayChungNhanNghiViecHuongBHXH.NghiTuNgay != null) {
              let tn =new Date(this.giayChungNhanNghiViecHuongBHXH.NghiTuNgay);
              this.giayChungNhanNghiViecHuongBHXH.NghiTuNgayDisplay = CommonService.formatDateTime(tn, "mm/dd/yyyy");
            }
            if (this.giayChungNhanNghiViecHuongBHXH.NghiDenNgay != null) {
              let dn =new Date(this.giayChungNhanNghiViecHuongBHXH.NghiDenNgay);
              this.giayChungNhanNghiViecHuongBHXH.NghiDenNgayDisplay = CommonService.formatDateTime(dn, "mm/dd/yyyy");
            }
            const thongTinHoSo = JSON.stringify(this.giayChungNhanNghiViecHuongBHXH);
            self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.LoaiHoSoDieuTriNoiTru = 33;
            self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.ThongTinHoSo = thongTinHoSo;
            self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.NghiTuNgay = self.giayChungNhanNghiViecHuongBHXH.NghiTuNgay;
            self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.NghiDenNgay = self.giayChungNhanNghiViecHuongBHXH.NghiDenNgay;
            self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH.NgayThucHien = self.giayChungNhanNghiViecHuongBHXH.NgayThucHien;
            self.apiService.post<any>("DieuTriNoiTru/LuuGiayChungNhanNghiViecHuongBHXH", self.noiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH).subscribe(
              (result) => {
                dataIn.NoiTruHoSoKhacId =result;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                self.Huy();
                self.apiService.post<any>("DieuTriNoiTru/InGiayChungNhanNghiViecHuongBHXH", dataIn).subscribe(
                  (result) => {
                          self.dialog.open(ChungNhanNghiViecHbhxhPopupComponent, {
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
              this.giayChungNhanNghiViecHuongBHXH.MaHanhNgheKBCB = result;
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
              this.giayChungNhanNghiViecHuongBHXH.MaHanhNgheKBCB = null;
            }
            // if(so == 2)
            // {
            //   this.giayChungNhanNghiViecHuongBHXH.MaThuTruongDonVi = null;
            // }
   }
  }
  
  
}
