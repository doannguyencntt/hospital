import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoaiBenhAn } from 'src/app/shared/enum/dieu-tri-noi-tru.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { TiepNhanNoiTruChiDinhPopupComponent } from '../tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component';
import { TiepNhanNoiTruHuyNhapVienPopupComponent } from '../tiep-nhan-noi-tru-huy-nhap-vien-popup/tiep-nhan-noi-tru-huy-nhap-vien-popup.component';
import { TiepNhanNoiTruThongTinDoiTuongPopupComponent } from '../tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component';
import { ThongTinYeuCauTiepNoiTru } from '../tiep-nhan-noi-tru.model';

@Component({
  selector: 'app-tiep-nhan-noi-tru-benh-an-popup',
  templateUrl: './tiep-nhan-noi-tru-benh-an-popup.component.html',
  styleUrls: ['./tiep-nhan-noi-tru-benh-an-popup.component.scss']
})
export class TiepNhanNoiTruBenhAnPopupComponent implements OnInit {

  icClose = icClose;

  id: number;
  tenBenhNhan: string = "";
  documentType: DocumentType;
  validationErrors: any = [];

  dataYeuCauTiepNhan: ThongTinYeuCauTiepNoiTru = new ThongTinYeuCauTiepNoiTru();
  isDuoi6Tuoi: boolean = false;
  Duoi6TuoiDisplay: string = "";
  popupLoadingData: any;

  IsTreSoSinh: boolean = false;
  IsShowHuyNhapVien: boolean = false;

  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<TiepNhanNoiTruBenhAnPopupComponent>) { }

  ngOnInit() {
    this.id = this.data.Id;
    this.tenBenhNhan = this.data.TenBenhNhan;
    this.documentType = DocumentType.TiepNhanNoiTru;

    if(this.id != undefined && this.id != null)
    {
      this.getThongTinBenhAn(this.id);
    }
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

  getThongTinBenhAn(yeuCauTiepNhanId: number) {
    this.showPopupLoadingData();
    this.apiService
      .get<any>("DieuTriNoiTru/GetThongTinBenhAn?yeuCauTiepNhanId=" + yeuCauTiepNhanId)
      .subscribe(
        (resultData) => {
          if (resultData !== undefined && resultData != null) {
            this.dataYeuCauTiepNhan = resultData;
            if(this.dataYeuCauTiepNhan.NoiTruBenhAn.Id == 0)
            {
              this.IsShowHuyNhapVien = true;
            }
            if(this.dataYeuCauTiepNhan.NoiTruBenhAn.LoaiBenhAn == LoaiBenhAn.TreSoSinh)
            {
              this.IsTreSoSinh = true;
            }
            var ngaySinh = new Date(
              this.dataYeuCauTiepNhan.ThangSinh +
              "/" +
              this.dataYeuCauTiepNhan.NgaySinh +
              "/" +
              this.dataYeuCauTiepNhan.NamSinh +
              "/"
            );
            this.getAge(ngaySinh, new Date());
            this.closePopupLoadingData();
          } else {
            this.dataYeuCauTiepNhan = new ThongTinYeuCauTiepNoiTru();
            this.closePopupLoadingData();
          }
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        }
      );
  }

  getAge(date_1, date_2) {
    let yAppendix, mAppendix, dAppendix;
    let days = date_2.getDate() - date_1.getDate();//Thach edit

    if (days < 0) {
      date_2.setMonth(date_2.getMonth() - 1);
      days += this.DaysInMonth(date_2);
    }

    let months = date_2.getMonth() - date_1.getMonth();
    if (months < 0) {
      date_2.setFullYear(date_2.getFullYear() - 1);
      months += 12;
    }
    let years = date_2.getFullYear() - date_1.getFullYear();

    if (years > 1) yAppendix = " years";
    else yAppendix = " year";
    if (months > 1) mAppendix = " months";
    else mAppendix = " month";
    if (days > 1) dAppendix = " days";
    else dAppendix = " day";

    if ((years < 6 && years >= 0) || (years == 6 && months == 0 && days == 0)) {
      this.isDuoi6Tuoi = true;
    } else {
      this.isDuoi6Tuoi = false;
    }

    this.Duoi6TuoiDisplay =
      years + " Tuổi " + months + " Tháng " + days + " Ngày ";
  }

  DaysInMonth(date2_UTC) {
    let monthStart: any = new Date(
      date2_UTC.getFullYear(),
      date2_UTC.getMonth(),
      1
    );
    let monthEnd: any = new Date(
      date2_UTC.getFullYear(),
      date2_UTC.getMonth() + 1,
      1
    );
    let monthLength: any = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    return monthLength;
  }

  xuLyThem() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: CommonService.format("Bạn có chắc chắn muốn tạo bệnh án cho người bệnh {0} không?", [this.tenBenhNhan])
        },
      })
        .afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.validationErrors = [];
            this.apiService.post<any>("DieuTriNoiTru/XuLyTaoBenhAn", this.dataYeuCauTiepNhan)
              .subscribe(
                () => {
                  this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Tạo bệnh án"]));
                  this.xuLyChiDinhEkipVaDichVuGiuong();
                },
                (err: ApiError) => {
                  this.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                  }
                }
              );
          }
        });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyLuu(){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
      }).afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.validationErrors = [];
            this.apiService.put<any>("DieuTriNoiTru/XuLyCapNhatBenhAn", this.dataYeuCauTiepNhan)
              .subscribe(
                () => {
                  this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                  this.close(true);
                },
                (err: ApiError) => {
                  this.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                  }
                }
              );
          }
        });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  capNhatDoiTuong() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(TiepNhanNoiTruThongTinDoiTuongPopupComponent, {
        disableClose: false,
        width: '1600px',
        data: {
          "YeuCauTiepNhanId": this.id, 
          "IsBenhAnNhiKhoa": this.dataYeuCauTiepNhan.NoiTruBenhAn.LoaiBenhAn == LoaiBenhAn.NhiKhoa,
          "IsBenhAnSoSinh": this.dataYeuCauTiepNhan.NoiTruBenhAn.LoaiBenhAn == LoaiBenhAn.TreSoSinh
        }
      }).afterClosed().subscribe(result => {
        if(result)
        {
          // xử lý load lại thông tin đối tượng
          this.getThongTinBenhAn(this.id);
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  close(result = null)
  {
    this.dialogRef.close(result);
  }

  xuLyChiDinhEkipVaDichVuGiuong(){
    this.dialog.open(TiepNhanNoiTruChiDinhPopupComponent, {
      disableClose: false,
      width: '1300px',
      data: {
        KhoaId: this.dataYeuCauTiepNhan.ThongTinNhapVien.KhoaNhapVienId, 
        TenKhoa: this.dataYeuCauTiepNhan.ThongTinNhapVien.KhoaNhapVien, 
        YeuCauTiepNhanId: this.id,
        ThoiDiemNhapVien: this.dataYeuCauTiepNhan.NoiTruBenhAn.ThoiDiemNhapVien,
        BenhNhanId: this.dataYeuCauTiepNhan.BenhNhanId
      }
    }).afterClosed().subscribe(result => {
      this.close(true);
    });
  }

  xuLyHuyNhapVien(){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(TiepNhanNoiTruHuyNhapVienPopupComponent, {
        disableClose: false,
        width: '450px',
        data: {
          YeuCauTiepNhanId: this.id
        }
      }).afterClosed().subscribe(result => {
        if(result != undefined && result != null)
        {
          this.close(true);
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
