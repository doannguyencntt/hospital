import { Component, OnInit ,Input, ChangeDetectorRef,Output,EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { GiayChungSinhMangThaiHo, NoiTruHoSoKhacGiayChungSinhMangThaiHo } from './chung-sinh-mang-thai-ho.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ChungSinhMangThaiHoPopupComponent } from './chung-sinh-mang-thai-ho-popup/chung-sinh-mang-thai-ho-popup.component';

@Component({
  selector: 'app-chung-sinh-mang-thai-ho',
  templateUrl: './chung-sinh-mang-thai-ho.component.html',
  styleUrls: ['./chung-sinh-mang-thai-ho.component.scss']
})
export class ChungSinhMangThaiHoComponent implements OnInit {
  giayChungSinhMangThaiHo ={} as GiayChungSinhMangThaiHo;
  noiTruHoSoKhacGiayChungSinhMangThaiHo : NoiTruHoSoKhacGiayChungSinhMangThaiHo;
  documentType : DocumentType;
  validationErrors:any;
  dataNhanVien:any;
  yeuCauTiepNhanId :number = 0;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachDieuTriNoiTru;
    this.noiTruHoSoKhacGiayChungSinhMangThaiHo = new NoiTruHoSoKhacGiayChungSinhMangThaiHo();
    const id: number = this.route.snapshot.params.id;
    this.yeuCauTiepNhanId = id;
    this.giayChungSinhMangThaiHo = new GiayChungSinhMangThaiHo();
    this.getNhanVien();
    this.getData();
  }
  getNhanVien() {
    this.apiService.post<any>("DieuTriNoiTru/GetChuToa").subscribe(
      (result) => {
        this.dataNhanVien = result;
      });
  }
  changeValueNgayThucHien(event){
    // if(this.giayChungSinhMangThaiHo.NgayThucHien != null)
    // {
    //   this.giayChungSinhMangThaiHo.NgayThucHienDisplay = CommonService.formatDateTimeSACH(new Date(this.giayChungSinhMangThaiHo.NgayThucHien), "mm/dd/yyyy");
    // }
  }
  getData(){
    var self = this;
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinGiayChungSinhMangThaiHo?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.giayChungSinhMangThaiHo = thongTinHoSo;
          self.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id = result.Id;
          self.returnId.emit(self.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id);
         
          if(self.giayChungSinhMangThaiHo.DacDiemTreSoSinhs != null)
          {
            self.apiService.post<any>("DieuTriNoiTru/GetDacDiemTreSoSinh?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
              (result) => {
                if (result != null){
                  self.giayChungSinhMangThaiHo.DacDiemTreSoSinhs =result;
                }
              });
          }
        }
        else {
          self.giayChungSinhMangThaiHo = new GiayChungSinhMangThaiHo();
          self.apiService.post<any>("DieuTriNoiTru/GetDataGiayChungSinhMangThaiHoCreate?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
            (result) => {

              self.giayChungSinhMangThaiHo = result;
              self.giayChungSinhMangThaiHo.NgayThucHienString =result.NgayThucHienString;
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
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinGiayChungSinhMangThaiHo?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.giayChungSinhMangThaiHo = thongTinHoSo;
          self.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id = result.Id;
          this.returnId.emit(this.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id);
          if(self.giayChungSinhMangThaiHo.NgayThucHien != null)
          {
            self.giayChungSinhMangThaiHo.NgayThucHienDisplay = CommonService.formatDateTimeSACH(new Date(self.giayChungSinhMangThaiHo.NgayThucHien), "mm/dd/yyyy");
          }
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
    const thongTinHoSo = JSON.stringify(this.giayChungSinhMangThaiHo);
    self.noiTruHoSoKhacGiayChungSinhMangThaiHo.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.noiTruHoSoKhacGiayChungSinhMangThaiHo.LoaiHoSoDieuTriNoiTru = 34;
    self.noiTruHoSoKhacGiayChungSinhMangThaiHo.ThongTinHoSo = thongTinHoSo;
    self.noiTruHoSoKhacGiayChungSinhMangThaiHo.NgayThucHien = self.giayChungSinhMangThaiHo.NgayThucHien;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu giấy chứng sinh mang thai hộ này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {

          self.apiService.post<any>("DieuTriNoiTru/LuuGiayChungSinhMangThaiHo", self.noiTruHoSoKhacGiayChungSinhMangThaiHo).subscribe(
            (result) => {
              if(result.Id != undefined)
              {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                this.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id  = result.Id;
              }
              else{
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                this.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id  = result;
              }
              self.returnId.emit(self.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id);
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
      NoiTruHoSoKhacId: this.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id,
      YeuCauTiepNhanId: this.yeuCauTiepNhanId,
      LoaiHoSoDieuTriNoiTru: 34,
    }
      if(this.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id == 0)
      {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có in phiếu chứng sinh mang thai hộ này không này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            const thongTinHoSo = JSON.stringify(this.giayChungSinhMangThaiHo);
            self.noiTruHoSoKhacGiayChungSinhMangThaiHo.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacGiayChungSinhMangThaiHo.LoaiHoSoDieuTriNoiTru = 34;
            self.noiTruHoSoKhacGiayChungSinhMangThaiHo.ThongTinHoSo = thongTinHoSo;
            self.noiTruHoSoKhacGiayChungSinhMangThaiHo.NgayThucHien = self.giayChungSinhMangThaiHo.NgayThucHien;
            self.apiService.post<any>("DieuTriNoiTru/LuuGiayChungSinhMangThaiHo", self.noiTruHoSoKhacGiayChungSinhMangThaiHo).subscribe(
              (result) => {
                
                if (result.Id != undefined) {
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  this.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id = result.Id;
                }
                else {
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                  this.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id = result;
                }
                
                dataIn.NoiTruHoSoKhacId =this.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id;
                self.returnId.emit(self.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id);
                self.Huy();
                self.apiService.post<any>("DieuTriNoiTru/InGiayChungSinhMangThaiHo", dataIn).subscribe(
                  (result) => {
                          self.dialog.open(ChungSinhMangThaiHoPopupComponent, {
                              disableClose: true,
                              width: '1250px',
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
            Message: "Bạn có in phiếu chứng sinh mang thai hộ này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {

            const thongTinHoSo = JSON.stringify(this.giayChungSinhMangThaiHo);
            self.noiTruHoSoKhacGiayChungSinhMangThaiHo.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacGiayChungSinhMangThaiHo.LoaiHoSoDieuTriNoiTru = 34;
            self.noiTruHoSoKhacGiayChungSinhMangThaiHo.ThongTinHoSo = thongTinHoSo;
            self.noiTruHoSoKhacGiayChungSinhMangThaiHo.NgayThucHien = self.giayChungSinhMangThaiHo.NgayThucHien;
            self.apiService.post<any>("DieuTriNoiTru/LuuGiayChungSinhMangThaiHo", self.noiTruHoSoKhacGiayChungSinhMangThaiHo).subscribe(
              (result) => {
                
                if (result.Id != undefined) {
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  this.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id = result.Id;
                }
                else {
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                  this.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id = result;
                }
                dataIn.NoiTruHoSoKhacId =this.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id;
                self.returnId.emit(self.noiTruHoSoKhacGiayChungSinhMangThaiHo.Id);
                self.Huy();
                self.apiService.post<any>("DieuTriNoiTru/InGiayChungSinhMangThaiHo", dataIn).subscribe(
                  (result) => {
                          self.dialog.open(ChungSinhMangThaiHoPopupComponent, {
                              disableClose: true,
                              width: '1250px',
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
  onChangeNamSinh(event){
  }
}
