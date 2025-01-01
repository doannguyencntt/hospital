import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { LanKhamHienTaiSuDungGoiDichVuPopupComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-su-dung-goi-dich-vu-popup/lan-kham-hien-tai-su-dung-goi-dich-vu-popup.component';
import { TiepNhanNoiTruSoDoGiuongPopupComponent } from '../tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component';
import { TiepNhanNoiTruChiDinh, TiepNhanNoiTruChiDinhChonGiuong } from '../tiep-nhan-noi-tru.model';

@Component({
  selector: 'app-tiep-nhan-noi-tru-chi-dinh-popup',
  templateUrl: './tiep-nhan-noi-tru-chi-dinh-popup.component.html',
  styleUrls: ['./tiep-nhan-noi-tru-chi-dinh-popup.component.scss']
})
export class TiepNhanNoiTruChiDinhPopupComponent implements OnInit {

  icClose = icClose;

  documentType: DocumentType;
  validationErrors: any = [];
  popupLoadingData: any;

  chiDinh: TiepNhanNoiTruChiDinh = new TiepNhanNoiTruChiDinh();
  dataPhong = new TiepNhanNoiTruChiDinhChonGiuong();
  isDisabledBaoPhong: boolean = true;
  dichVuGiuongQueryInfo: LookupQueryInfo = new LookupQueryInfo();
  benhNhanId: number = null;


  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<TiepNhanNoiTruChiDinhPopupComponent>) { }

  ngOnInit() {
    this.documentType = DocumentType.TiepNhanNoiTru;
    this.chiDinh.YeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
    this.chiDinh.TuNgay = this.chiDinh.ThoiGianNhan = this.data.ThoiDiemNhapVien;
    this.chiDinh.KhongCanChiDinhGiuong = this.data.KhongCanChiDinhGiuong;
    this.benhNhanId = this.data.BenhNhanId;
  }


  xuLyLuuChiDinh(){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: CommonService.format(SystemMessage.MessConfirm, ["Lưu"])
        },
      })
        .afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.validationErrors = [];
            this.apiService.post<any>("DieuTriNoiTru/XuLyChiDinhEkipVaDichVuGiuongNoiTru", this.chiDinh)
              .subscribe(
                () => {
                  this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  this.dialogRef.close();
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

  chonDichVuGiuong(event)
  {
    if(event != undefined && event != null)
    {
      this.isDisabledBaoPhong = event.LoaiGiaCoHieuLuc <= 1; //!this.chiDinh.BaoPhong || 

      this.chiDinh.LoaiGiuong = event.LoaiGiuong;
      this.chiDinh.BaoPhong = this.dataPhong.BaoPhong = event.BaoPhong;

      this.clearValidation('LoaiGiuong');
    }
  }

  chonGiuong() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.dataPhong.KhoaId = this.data.KhoaId;
      this.dataPhong.TenKhoa = this.data.TenKhoa;
      this.dataPhong.BaoPhong = this.chiDinh.BaoPhong;
      this.dataPhong.ThoiGianNhan = this.chiDinh.ThoiGianNhan;

      this.dialog.open(TiepNhanNoiTruSoDoGiuongPopupComponent, {
        disableClose: false,
        width: '1200px',
        data: Object.assign({}, this.dataPhong)
      }).afterClosed().subscribe(result => {
        if(result != undefined && result != null)
        {
          this.dataPhong = Object.assign({}, result);
          this.chiDinh.GiuongId = result.GiuongId;
          this.chiDinh.TenGiuong = result.TenGiuong + " - " + result.TenPhong;

          this.clearValidation('GiuongId');
        }
        // nhấn nút hủy
        // else if(result == null)
        // {

        // }
        // else
        // {
        //   // this.dataPhong = new TiepNhanNoiTruChiDinhChonGiuong();
        //   // this.dataPhong.KhoaId = this.data.KhoaId;
        //   // this.dataPhong.TenKhoa = this.data.TenKhoa;
        //   // this.dataPhong.BaoPhong = this.chiDinh.BaoPhong;
        //   this.clearObjThongTinTamGiuong();
        // }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  clearValidation(fieldName: string){
    if (this.validationErrors != undefined && this.validationErrors != null && this.validationErrors != []) {
      this.validationErrors = this.validationErrors.filter(x => x.Field != fieldName);
    }
  }

  changeDichVuGiuong(event) {
    this.chiDinh.GiuongId = null;
    this.chiDinh.TenGiuong = null;
    if(!event)
    {
      this.chiDinh.BaoPhong = null;
      this.chiDinh.LoaiGiuong = null;
    }
    this.clearObjThongTinTamGiuong();
  }

  clearObjThongTinTamGiuong() {
    this.dataPhong = new TiepNhanNoiTruChiDinhChonGiuong();
    this.dataPhong.KhoaId = this.data.KhoaId;
    this.dataPhong.TenKhoa = this.data.TenKhoa;
    this.dataPhong.BaoPhong = this.chiDinh.BaoPhong;
    this.dataPhong.ThoiGianNhan = this.chiDinh.ThoiGianNhan;
  }

  close(result = null){
    this.dialogRef.close(result);
  }

  getDichVuGiuongQueryInfo() {
    let thoiGianNhanTemp = this.convertToUTCDateTime();

    this.dichVuGiuongQueryInfo.ParameterDependencies = JSON.stringify({
      ThoiGianNhan: thoiGianNhanTemp
    });

    return this.dichVuGiuongQueryInfo;
  }

  convertToUTCDateTime() {
    if(this.chiDinh.TuNgay) {
      let chiDinhTuNgayTemp = new Date(this.chiDinh.TuNgay); 
      return new Date(Date.UTC(chiDinhTuNgayTemp.getFullYear(), chiDinhTuNgayTemp.getMonth(), chiDinhTuNgayTemp.getDate(), chiDinhTuNgayTemp.getHours(), chiDinhTuNgayTemp.getMinutes()));
    }
  }

  clearGiuongBenh() {
    this.chiDinh.GiuongId = null;
    this.chiDinh.TenGiuong = null;
  }

  // cập nhật xem giuonfg trong gói dv
  xemGoiDichVu() {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.dialog.open(LanKhamHienTaiSuDungGoiDichVuPopupComponent, {
        disableClose: false,
        width: '1800px',
        data: { DocumentType: self.documentType, BenhNhanId: self.benhNhanId, IsPTTT: false, IsNoiTru: true, IsCapGiuong: true }
      }).afterClosed().subscribe(dichVuGiuong => {
        if (dichVuGiuong) {
          var query = this.getDichVuGiuongQueryInfo();
          console.log('query', query);
          this.apiService.post<Array<any>>("KhamBenh/GetDichVuGiuongBenhVien", query).subscribe(res => {
            var dichVuBenhVien = res.find(x => x.KeyId == dichVuGiuong.DichVuBenhVienId);
            console.log('dichVuBenhVien', dichVuBenhVien);
            if (dichVuBenhVien) {
              this.chiDinh.YeuCauGoiDichVuId = dichVuGiuong.YeuCauGoiDichVuId;
              this.chiDinh.DichVuGiuongId = dichVuBenhVien.KeyId;
              this.chiDinh.DichVuGiuongDisplay = dichVuBenhVien.DisplayName;

              this.chiDinh.LoaiGiuong = dichVuBenhVien.LoaiGiuong;
              this.chiDinh.BaoPhong = dichVuBenhVien.BaoPhong;
              this.isDisabledBaoPhong = dichVuBenhVien.LoaiGiaCoHieuLuc <= 1;

              let loaiGiuongError = this.validationErrors.find(p => p.Field.includes('LoaiGiuong'));
              if (loaiGiuongError) {
                this.validationErrors.splice(loaiGiuongError, 1);
              }
            }
            else {
              this.notificationService.showError("Dịch vụ giường này không còn sử dụng, hoặc không có giá có hiệu lực.");
            }
          }, (err: ApiError) => {
            this.notificationService.showError(err.Message);
          });
        }
      });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
