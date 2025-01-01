import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ThemDuocPhamNgoaiBV } from '../../../kham-benh.model';
import { parseNumber } from '@progress/kendo-angular-intl';

@Component({
  selector: 'app-them-thuoc-khong-bhyt',
  templateUrl: './them-thuoc-khong-bhyt.component.html',
  styleUrls: ['./them-thuoc-khong-bhyt.component.scss']
})
export class ThemThuocKhongBhytComponent implements OnInit {
  thuocNgoaiBenhVien: ThemDuocPhamNgoaiBV = new ThemDuocPhamNgoaiBV();
  validationErrors: any;
  icClose = icClose;
  documentType: DocumentType;
  popupLoadingData: any = null;
  nhaSanXuatDataSource: any;
  nuocSanXuatDataSource: any;
  isSelectDuocPham: boolean = false;
  thoiGianDonThuocDataSource: any;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    public dialogRef: MatDialogRef<ThemThuocKhongBhytComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    if (this.data != undefined && this.data != null && this.data.documentType != undefined) {
      this.documentType = this.data.documentType;
    }
    else {
      this.documentType = DocumentType.KhamBenh;
    }
    this.getThoiGianDonThuoc();
  }


  closePopup(result: any) {
    this.dialogRef.close(result);
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


  luuDuocPham() {
    var self = this;
    let comfirm = "thêm"
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '500px',
        data: { Title: "Xác nhận", Message: "Bạn có muốn thêm dược phẩm này vào toa thuốc không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.loadingPage();
          self.thuocNgoaiBenhVien.YeuCauKhamBenhId = self.data.yeuCauKhamBenhId;
          self.apiService.post<any>("KhamBenh/ThemDuocPhamKhongBHYT", self.thuocNgoaiBenhVien).subscribe(
            () => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
              self.closePopupLoadingData();
              self.closePopup(null);
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupLoadingData();
            });
        }
      });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  huy() {
    this.dialog.closeAll();
  }

  getThoiGianDonThuoc() {
    this.apiService.get<Array<string>>("KhamBenh/ThoiGianDonThuoc").subscribe(
      resultData => {
        this.thoiGianDonThuocDataSource = resultData;
      }
    )
  }

  SoLuongChange() {
    if (this.thuocNgoaiBenhVien.SoLuong != null && this.thuocNgoaiBenhVien.LieuDung != null && this.thuocNgoaiBenhVien.LieuDung != "") {
      let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.thuocNgoaiBenhVien.LieuDung));
      this.thuocNgoaiBenhVien.SoNgayDung = Math.ceil(this.thuocNgoaiBenhVien.SoLuong / lieuDung);
      this.thuocNgoaiBenhVien.SangDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungSang = null;
      this.thuocNgoaiBenhVien.TruaDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungTrua = null;
      this.thuocNgoaiBenhVien.ChieuDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungChieu = null;
      this.thuocNgoaiBenhVien.ToiDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungToi = null;
    }
    else if (this.thuocNgoaiBenhVien.SoLuong == null) {
      this.thuocNgoaiBenhVien.LieuDung = null;
      this.thuocNgoaiBenhVien.SoNgayDung = null;
      this.thuocNgoaiBenhVien.SangDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungSang = null;
      this.thuocNgoaiBenhVien.TruaDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungTrua = null;
      this.thuocNgoaiBenhVien.ChieuDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungChieu = null;
      this.thuocNgoaiBenhVien.ToiDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungToi = null;
    }
  }

  LieuDungChange() {
    if (this.thuocNgoaiBenhVien.SoLuong != null && this.thuocNgoaiBenhVien.LieuDung != null && this.thuocNgoaiBenhVien.LieuDung != "") {
      let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.thuocNgoaiBenhVien.LieuDung));
      if (lieuDung > this.thuocNgoaiBenhVien.SoLuong) {
        this.thuocNgoaiBenhVien.SoLuong = lieuDung;
      }
      this.thuocNgoaiBenhVien.SoNgayDung = Math.ceil(this.thuocNgoaiBenhVien.SoLuong / lieuDung);
      this.thuocNgoaiBenhVien.SangDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungSang = null;
      this.thuocNgoaiBenhVien.TruaDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungTrua = null;
      this.thuocNgoaiBenhVien.ChieuDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungChieu = null;
      this.thuocNgoaiBenhVien.ToiDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungToi = null;
    } else if (this.thuocNgoaiBenhVien.SoLuong == null && this.thuocNgoaiBenhVien.SoNgayDung != null && (this.thuocNgoaiBenhVien.LieuDung != null && this.thuocNgoaiBenhVien.LieuDung != "")) {
      let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.thuocNgoaiBenhVien.LieuDung));
      this.thuocNgoaiBenhVien.SoLuong = this.thuocNgoaiBenhVien.SoNgayDung * lieuDung;
    } else if (this.thuocNgoaiBenhVien.SoLuong != null && (this.thuocNgoaiBenhVien.LieuDung == null || this.thuocNgoaiBenhVien.LieuDung == "")) {
      this.thuocNgoaiBenhVien.SoNgayDung = null;
    }
  }

  SoNgayDungChange() {
    if (this.thuocNgoaiBenhVien.SoLuong != null && this.thuocNgoaiBenhVien.SoNgayDung != null && this.thuocNgoaiBenhVien.SoNgayDung > 0) {
      let lieuDung = Math.ceil(this.thuocNgoaiBenhVien.SoLuong / this.thuocNgoaiBenhVien.SoNgayDung);
      this.thuocNgoaiBenhVien.LieuDung = lieuDung.toString();
      this.thuocNgoaiBenhVien.SangDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungSang = null;
      this.thuocNgoaiBenhVien.TruaDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungTrua = null;
      this.thuocNgoaiBenhVien.ChieuDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungChieu = null;
      this.thuocNgoaiBenhVien.ToiDisplay = null;
      this.thuocNgoaiBenhVien.ThoiGianDungToi = null;
    } else if (this.thuocNgoaiBenhVien.SoLuong == null && this.thuocNgoaiBenhVien.SoNgayDung != null && (this.thuocNgoaiBenhVien.LieuDung != null && this.thuocNgoaiBenhVien.LieuDung != "")) {
      let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.thuocNgoaiBenhVien.LieuDung));
      this.thuocNgoaiBenhVien.SoLuong = this.thuocNgoaiBenhVien.SoNgayDung * lieuDung;
    } else if (this.thuocNgoaiBenhVien.SoLuong != null && this.thuocNgoaiBenhVien.SoNgayDung == null) {
      this.thuocNgoaiBenhVien.LieuDung = null;
    }
  }

  nhapDungCacBuoiTrongNgayThem(event: any, buoi: any) {
    switch (buoi) {
      case "Sang":
        if ((event == undefined && this.thuocNgoaiBenhVien.TruaDisplay == undefined && this.thuocNgoaiBenhVien.ChieuDisplay == undefined && this.thuocNgoaiBenhVien.ToiDisplay == undefined)
          || (event == "" && this.thuocNgoaiBenhVien.TruaDisplay == "" && this.thuocNgoaiBenhVien.ChieuDisplay == "" && this.thuocNgoaiBenhVien.ToiDisplay == "")
          || (event == "" && this.thuocNgoaiBenhVien.TruaDisplay == "" && this.thuocNgoaiBenhVien.ChieuDisplay == "" && this.thuocNgoaiBenhVien.ToiDisplay == null)
          || (event == "" && this.thuocNgoaiBenhVien.TruaDisplay == "" && this.thuocNgoaiBenhVien.ChieuDisplay == null && this.thuocNgoaiBenhVien.ToiDisplay == null)
          || (event == "" && this.thuocNgoaiBenhVien.TruaDisplay == null && this.thuocNgoaiBenhVien.ChieuDisplay == null && this.thuocNgoaiBenhVien.ToiDisplay == null)
        ) {
          this.thuocNgoaiBenhVien.SoNgayDung = this.TongSoNgaySuDung(this.thuocNgoaiBenhVien.SoLuong, event, this.thuocNgoaiBenhVien.TruaDisplay, this.thuocNgoaiBenhVien.ChieuDisplay, this.thuocNgoaiBenhVien.ToiDisplay);
          return null;
        }
        else {
          this.thuocNgoaiBenhVien.SoNgayDung = this.TongSoNgaySuDung(this.thuocNgoaiBenhVien.SoLuong, event, this.thuocNgoaiBenhVien.TruaDisplay, this.thuocNgoaiBenhVien.ChieuDisplay, this.thuocNgoaiBenhVien.ToiDisplay);
          return null;

        }
      case "Trua":
        if (
          (event == undefined && this.thuocNgoaiBenhVien.SangDisplay == undefined && this.thuocNgoaiBenhVien.ChieuDisplay == undefined && this.thuocNgoaiBenhVien.ToiDisplay == undefined)
          || (event == "" && this.thuocNgoaiBenhVien.SangDisplay == "" && this.thuocNgoaiBenhVien.ChieuDisplay == "" && this.thuocNgoaiBenhVien.ToiDisplay == "")
          || (event == "" && this.thuocNgoaiBenhVien.SangDisplay == "" && this.thuocNgoaiBenhVien.ChieuDisplay == "" && this.thuocNgoaiBenhVien.ToiDisplay == null)
          || (event == "" && this.thuocNgoaiBenhVien.SangDisplay == "" && this.thuocNgoaiBenhVien.ChieuDisplay == null && this.thuocNgoaiBenhVien.ToiDisplay == null)
          || (event == "" && this.thuocNgoaiBenhVien.SangDisplay == null && this.thuocNgoaiBenhVien.ChieuDisplay == null && this.thuocNgoaiBenhVien.ToiDisplay == null)
        ) {
          this.thuocNgoaiBenhVien.SoNgayDung = this.TongSoNgaySuDung(this.thuocNgoaiBenhVien.SoLuong, this.thuocNgoaiBenhVien.SangDisplay, event, this.thuocNgoaiBenhVien.ChieuDisplay, this.thuocNgoaiBenhVien.ToiDisplay);
          return null;

        }
        else {
          this.thuocNgoaiBenhVien.SoNgayDung = this.TongSoNgaySuDung(this.thuocNgoaiBenhVien.SoLuong, this.thuocNgoaiBenhVien.SangDisplay, event, this.thuocNgoaiBenhVien.ChieuDisplay, this.thuocNgoaiBenhVien.ToiDisplay);
          return null;

        }
      case "Chieu":
        if ((event == undefined && this.thuocNgoaiBenhVien.TruaDisplay == undefined && this.thuocNgoaiBenhVien.SangDisplay == undefined && this.thuocNgoaiBenhVien.ToiDisplay == undefined)
          || (event == "" && this.thuocNgoaiBenhVien.TruaDisplay == "" && this.thuocNgoaiBenhVien.SangDisplay == "" && this.thuocNgoaiBenhVien.ToiDisplay == "")
          || (event == "" && this.thuocNgoaiBenhVien.TruaDisplay == "" && this.thuocNgoaiBenhVien.SangDisplay == "" && this.thuocNgoaiBenhVien.ToiDisplay == null)
          || (event == "" && this.thuocNgoaiBenhVien.TruaDisplay == "" && this.thuocNgoaiBenhVien.SangDisplay == null && this.thuocNgoaiBenhVien.ToiDisplay == null)
          || (event == "" && this.thuocNgoaiBenhVien.TruaDisplay == null && this.thuocNgoaiBenhVien.SangDisplay == null && this.thuocNgoaiBenhVien.ToiDisplay == null)
        ) {
          this.thuocNgoaiBenhVien.SoNgayDung = this.TongSoNgaySuDung(this.thuocNgoaiBenhVien.SoLuong, this.thuocNgoaiBenhVien.SangDisplay, this.thuocNgoaiBenhVien.TruaDisplay, event, this.thuocNgoaiBenhVien.ToiDisplay);
          return null;

        }
        else {
          this.thuocNgoaiBenhVien.SoNgayDung = this.TongSoNgaySuDung(this.thuocNgoaiBenhVien.SoLuong, this.thuocNgoaiBenhVien.SangDisplay, this.thuocNgoaiBenhVien.TruaDisplay, event, this.thuocNgoaiBenhVien.ToiDisplay);
          return null;

        }
      case "Toi":
        if ((event == undefined && this.thuocNgoaiBenhVien.SangDisplay == undefined && this.thuocNgoaiBenhVien.ChieuDisplay == undefined && this.thuocNgoaiBenhVien.TruaDisplay == undefined)
          || (event == "" && this.thuocNgoaiBenhVien.SangDisplay == "" && this.thuocNgoaiBenhVien.ChieuDisplay == "" && this.thuocNgoaiBenhVien.TruaDisplay == "")
          || (event == "" && this.thuocNgoaiBenhVien.SangDisplay == "" && this.thuocNgoaiBenhVien.ChieuDisplay == "" && this.thuocNgoaiBenhVien.TruaDisplay == null)
          || (event == "" && this.thuocNgoaiBenhVien.SangDisplay == "" && this.thuocNgoaiBenhVien.ChieuDisplay == null && this.thuocNgoaiBenhVien.TruaDisplay == null)
          || (event == "" && this.thuocNgoaiBenhVien.SangDisplay == null && this.thuocNgoaiBenhVien.ChieuDisplay == null && this.thuocNgoaiBenhVien.TruaDisplay == null)
        ) {
          this.thuocNgoaiBenhVien.SoNgayDung = this.TongSoNgaySuDung(this.thuocNgoaiBenhVien.SoLuong, this.thuocNgoaiBenhVien.SangDisplay, this.thuocNgoaiBenhVien.TruaDisplay, this.thuocNgoaiBenhVien.ChieuDisplay, event);
          return null;

        }
        else {
          this.thuocNgoaiBenhVien.SoNgayDung = this.TongSoNgaySuDung(this.thuocNgoaiBenhVien.SoLuong, this.thuocNgoaiBenhVien.SangDisplay, this.thuocNgoaiBenhVien.TruaDisplay, this.thuocNgoaiBenhVien.ChieuDisplay, event);
          return null;

        }
    }
  }

  TongSoNgaySuDung(soLuong: number, dungSang: string, dungTrua: string, dungChieu: string, dungToi: string) {
    let sang: number, trua: number, chieu: number, toi: number, sum: number, result: number;
    if (dungSang == "" || dungSang == null || dungSang == undefined) {
      sang = 0;
    }
    else {
      sang = CommonService.FormatStringFractionToFloat(dungSang);
    }

    if (dungTrua == "" || dungTrua == null || dungTrua == undefined) {
      trua = 0;
    }
    else {
      trua = CommonService.FormatStringFractionToFloat(dungTrua);
    }

    if (dungChieu == "" || dungChieu == null || dungChieu == undefined) {
      chieu = 0;
    }
    else {
      chieu = CommonService.FormatStringFractionToFloat(dungChieu);
    }

    if (dungToi == "" || dungToi == null || dungToi == undefined) {
      toi = 0;
    }
    else {
      toi = CommonService.FormatStringFractionToFloat(dungToi);
    }
    sum = sang + trua + chieu + toi;
    if (sum > this.thuocNgoaiBenhVien.SoLuong) {
      this.thuocNgoaiBenhVien.SoLuong = sum;
      soLuong = this.thuocNgoaiBenhVien.SoLuong;
    }

    this.apiService.post<any>("KhamBenh/FormatNumber?inputNumber=" + sum).subscribe(
      resultData => {
        if (resultData != null) {
          if (resultData == "0") {
            this.thuocNgoaiBenhVien.LieuDung = null;
            //this.thuocNgoaiBenhVien.SoLuong = null;
          }
          else {
            this.thuocNgoaiBenhVien.LieuDung = resultData;
            if (soLuong != null) {
              let soNgayDung = (soLuong / parseNumber(CommonService.FormatStringFractionToFloat(this.thuocNgoaiBenhVien.LieuDung)));
              result = Math.ceil(soNgayDung);
              this.thuocNgoaiBenhVien.SoNgayDung = result;
            }
          }
          return result;
        }
      }
    );
    return null;
  }

  convertInt() {
    if (this.thuocNgoaiBenhVien.SoNgayDung != null)
      this.thuocNgoaiBenhVien.SoNgayDung = parseInt(this.thuocNgoaiBenhVien.SoNgayDung.toString());
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.luuDuocPham();
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }
  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }

  onValueChangeAdd(buoi: any) {
    if (buoi === "Sang" && this.validationErrors != undefined && this.validationErrors != null) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined) {
        for (let i = 0; i < lenValidate; i++) {
          if (this.validationErrors[i].Field === "SoLuong") {
            this.validationErrors.splice(i, 1);
            break;
          }
        }
      }
      else {
        return null;
      }
    }
    else if (buoi === "Trua" && this.validationErrors != undefined && this.validationErrors != null) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined) {
        for (let i = 0; i < lenValidate; i++) {
          if (this.validationErrors[i].Field === "SoLuong") {
            this.validationErrors.splice(i, 1);
            break;
          }
        }
      }
      else {
        return null;
      }
    }
    else if (buoi === "Chieu" && this.validationErrors != undefined && this.validationErrors != null) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined) {
        for (let i = 0; i < lenValidate; i++) {
          if (this.validationErrors[i].Field === "SoLuong") {
            this.validationErrors.splice(i, 1);
            break;
          }
        }
      }
      else {
        return null;
      }
    }
    else if (buoi === "Toi" && this.validationErrors != undefined && this.validationErrors != null) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined) {
        for (let i = 0; i < lenValidate; i++) {
          if (this.validationErrors[i].Field === "SoLuong") {
            this.validationErrors.splice(i, 1);
            break;
          }
        }
      }
      else {
        return null;
      }
    } else {
      return null;
    }

  }
}
