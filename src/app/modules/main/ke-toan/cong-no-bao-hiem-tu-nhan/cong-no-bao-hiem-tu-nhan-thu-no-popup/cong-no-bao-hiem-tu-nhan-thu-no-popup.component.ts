import { Component, Inject, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/search';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CongNoBaoHiemTuNhanCongTyPopupComponent } from '../cong-no-bao-hiem-tu-nhan-cong-ty-popup/cong-no-bao-hiem-tu-nhan-cong-ty-popup.component';
import { GachNo } from '../cong-no-bao-hiem-tu-nhan.model';
import { LoaiTienTe, LoaiDoiTuong, TrangThaiGachNo } from 'src/app/shared/enum/gach-no.enum';
import { GachNoCongTyBaoHiemTuNhan, GachNoBenhNhan} from '../cong-no-bao-hiem-tu-nhan.model';
import { CongNoBaoHiemTuNhanBenhNhanPopupComponent } from '../cong-no-bao-hiem-tu-nhan-benh-nhan-popup/cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ApiService } from 'src/app/core/services/api.service';
import { format } from 'url';

@Component({
  selector: 'app-cong-no-bao-hiem-tu-nhan-thu-no-popup',
  templateUrl: './cong-no-bao-hiem-tu-nhan-thu-no-popup.component.html',
  styleUrls: ['./cong-no-bao-hiem-tu-nhan-thu-no-popup.component.scss']
})
export class CongNoBaoHiemTuNhanThuNoPopupComponent implements OnInit {

  icClose = icClose;
  icSearch = icSearch;

  id: number;
  documentType: DocumentType;
  validationErrors: any = [];
  format: string = 'n2';

  gachNo: GachNo = new GachNo();
  isDisabledTyGia: boolean = true;
  loaiDoiTuongBenhNhan: LoaiDoiTuong = LoaiDoiTuong.BenhNhan;
  isDisabledVAT: boolean = false;
  trangThaiDaXacNhan: TrangThaiGachNo = TrangThaiGachNo.XacNhanNhapLieu;
  loaiTienUSD: LoaiTienTe = LoaiTienTe.USD;
  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CongNoBaoHiemTuNhanThuNoPopupComponent>) { }

  ngOnInit() {
    this.documentType = DocumentType.CongNoBhtn;
    this.id = this.data.Id;
    this.getThongTinThuNo(this.id);
  }

  getThongTinThuNo(id: number)
  {
    this.apiService
      .get<GachNo>("GachNo/GetThongTinThuNo?id=" + id)
      .subscribe(
        (resultData) => {
          this.gachNo = resultData;

          if (this.gachNo.LoaiDoiTuong == this.loaiDoiTuongBenhNhan) {
            this.isDisabledVAT = true;
          }
          else {
            this.isDisabledVAT = false;
          }
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        }
      );
  }

  chonLoaiTienTe(event) {
    this.gachNo.TyGia = event.TyGia;
    this.gachNo.TenLoaiTienTe = event.DisplayName;

    this.tinhTongTienHachToan();
  }

  changeLoaiTienTe(event) {
    if(event == LoaiTienTe.VND)
    {
      this.isDisabledTyGia = true;
    }
    else
    {
      this.isDisabledTyGia = false;
    }
  }

  chonLoaiDoiTuong(event){
    this.gachNo.CongTyBaoHiemTuNhanId = null;
    this.gachNo.CongTyBaoHiemTuNhan = new GachNoCongTyBaoHiemTuNhan();
    this.gachNo.BenhNhanId = null;
    this.gachNo.BenhNhan = new GachNoBenhNhan();

    if(event.KeyId == this.loaiDoiTuongBenhNhan)
    {
      this.isDisabledVAT = true;
      this.gachNo.VAT = 0;
    }
    else
    {
      this.isDisabledVAT = false;
    }
  }

  changeVAT(event)
  {
    if(event)
    {
      this.gachNo.TienThueHachToan = this.gachNo.TienHachToan * event/100;
    }
    else
    {
      this.gachNo.TienThueHachToan = 0;
    }
    this.tinhTongTienHachToan();
  }

  changeTienHachToan(event){
    if(event)
    {
      this.gachNo.TienThueHachToan = event * this.gachNo.VAT/100;
    }
    else
    {
      this.gachNo.TienThueHachToan = 0;
    }
    this.tinhTongTienHachToan();
  }

  tinhTongTienHachToan()
  {
    if(this.gachNo.TyGia != undefined && this.gachNo.TyGia != null && this.validationErrors != undefined && this.validationErrors.length != 0)
    {
      this.validationErrors = this.validationErrors.filter(x => x.Field != "TyGia");
    }
    this.gachNo.TongTienHachToan = (this.gachNo.TienHachToan + this.gachNo.TienThueHachToan) * this.gachNo.TyGia;
  }

  changeNgayThucThu(event)
  {
    if(event != undefined && event != null && this.validationErrors != undefined && this.validationErrors.length != 0)
    {
      this.validationErrors = this.validationErrors.filter(x => x.Field != "NgayThucThu");
    }
  }

  chonCongTyBaoHiemTuNhan(event){
    if(event)
    {
      this.gachNo.CongTyBaoHiemTuNhan.Ten = event.Ten;
      this.gachNo.CongTyBaoHiemTuNhan.MaSoThue = event.MaSoThue;
      this.gachNo.CongTyBaoHiemTuNhan.DonVi = event.DonVi;
      this.gachNo.CongTyBaoHiemTuNhan.DiaChi = event.DiaChi;
    }
    else
    {
      this.gachNo.CongTyBaoHiemTuNhan = new GachNoCongTyBaoHiemTuNhan();
    }
  }
  
  chonBenhNhan(event){
    if(event)
    {
      this.gachNo.BenhNhan.HoTen = event.HoTen;
      this.gachNo.BenhNhan.NgayThangNamSinh = event.NgayThangNamSinh;
      this.gachNo.BenhNhan.TenGioiTinh = event.TenGioiTinh;
      this.gachNo.BenhNhan.SoChungMinhThu = event.SoChungMinhThu;
      this.gachNo.BenhNhan.SoDienThoaiDisplay = event.SoDienThoaiDisplay;
      this.gachNo.BenhNhan.DiaChiDayDu = event.DiaChiDayDu;
    }
    else
    {
      this.gachNo.BenhNhan = new GachNoBenhNhan();
    }
  }

  chonTaiKhoan(event)
  {
    this.gachNo.TaiKhoanLoaiTien = event.GhiChu;
  }

  changeNgayChungTu(event)
  {
    this.gachNo.NgayThucThu = event;
    this.changeNgayThucThu(event);
  }

  timKiemDoiTuongCongTy() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View) || this.authService.hasPermission(DocumentType.CongNoBhtnXacNhanNhapLieu, SecurityOperation.View)) {
      this.dialog.open(CongNoBaoHiemTuNhanCongTyPopupComponent, {
        disableClose: false,
        width: '1200px'
      }).afterClosed().subscribe(result => {
        if(result != undefined && result != null)
        {
          this.gachNo.CongTyBaoHiemTuNhanId = result.Id;
          this.gachNo.CongTyBaoHiemTuNhan = result;
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  timKiemDoiTuongBenhNhan() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View) || this.authService.hasPermission(DocumentType.CongNoBhtnXacNhanNhapLieu, SecurityOperation.View)) {
      this.dialog.open(CongNoBaoHiemTuNhanBenhNhanPopupComponent, {
        disableClose: false,
        width: '1400px',
      }).afterClosed().subscribe(result => {
        if(result != undefined && result != null)
        {
          this.gachNo.BenhNhanId = result.Id;
          this.gachNo.BenhNhan = result;
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyThem() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add) || this.authService.hasPermission(DocumentType.CongNoBhtnXacNhanNhapLieu, SecurityOperation.Add)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: CommonService.format("Bạn có chắc chắn xác nhận đã thu nợ của {0} này?", [this.gachNo.LoaiDoiTuong == this.loaiDoiTuongBenhNhan ? "người bệnh" : "công ty"])
        },
      })
        .afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.validationErrors = [];
            this.apiService.post<any>("GachNo/XuLyTaoThongTinThuNo", this.gachNo)
              .subscribe(
                () => {
                  this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
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

  xuLyLuu(){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update) || this.authService.hasPermission(DocumentType.CongNoBhtnXacNhanNhapLieu, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
      }).afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.validationErrors = [];
            this.apiService.put<any>("GachNo/XuLyCapNhatThongTinThuNo", this.gachNo)
              .subscribe(
                () => {
                  this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
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

  xacNhanNhapLieu(){
    if (this.authService.hasPermission(DocumentType.CongNoBhtnXacNhanNhapLieu, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn chắc chắn xác nhận nhập liệu này đã đúng không?" }
      }).afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.validationErrors = [];
            this.apiService.put<any>("GachNo/XuLyXacNhanNhapLieu", this.gachNo)
              .subscribe(
                () => {
                  this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xác nhận nhập liệu"]));
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

  close()
  {
    this.dialogRef.close();
  }
}
