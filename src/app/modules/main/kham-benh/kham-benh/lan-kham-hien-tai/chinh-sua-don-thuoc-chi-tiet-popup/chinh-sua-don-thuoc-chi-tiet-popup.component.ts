import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { KeToaItem } from '../../../kham-benh.model';
import { parseNumber } from '@progress/kendo-angular-intl';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
  selector: 'app-chinh-sua-don-thuoc-chi-tiet-popup',
  templateUrl: './chinh-sua-don-thuoc-chi-tiet-popup.component.html',
  styleUrls: ['./chinh-sua-don-thuoc-chi-tiet-popup.component.scss']
})
export class ChinhSuaDonThuocChiTietPopupComponent implements OnInit {
  icClose = icClose;
  validationErrors: any[] = [];
  thoiGianDonThuocDataSource: any;
  ghiChuDonThuocChiTietDataSource: any;
  tongDungThuocTrongNgay: number = null;
  isSelectDuocPham: boolean = false;
  loaiDuocPhamHoacVatTu: number = 1;
  ghiChuKeToaDataSource: any = ["Chú ý sử dụng thuốc theo toa", "Không lạm dụng kháng sinh hoặc từ chối kháng sinh",
    "Tránh uống cùng lúc nhiều loại thuốc", "Uống trước khi ăn", "Uống sau khi ăn", "Để xa tầm tay trẻ em",
    "Thuốc dùng cho thử lâm sàng. Cấm dùng cho mục đích khác", "Thuốc dùng ngoài", "Lắc kỹ trước khi dùng"];
  keToaEdit: KeToaItem = new KeToaItem();
  IsKhamBenhDangKham: boolean = false;

  validationErrorsUpdate: any = null;
  dataChanDoan = {
    data: [],
    total: 0
  }
  documentType: DocumentType; //= DocumentType.KhamBenhDangKham;
  constructor(
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ChinhSuaDonThuocChiTietPopupComponent>
  ) {
  }

  ngOnInit() {
    console.log("data ", this.data)
    this.keToaEdit = this.data.Model;
    this.documentType = this.data.documentType;
    this.IsKhamBenhDangKham = this.data.IsKhamBenhDangKham != undefined && this.data.IsKhamBenhDangKham;
    this.getThoiGianDonThuoc();
    //this.getGhiChuDonThuocChiTiet();
    // this.tinhTongDungThuocTrongNgay();
    // this.hienThiLieuDung();
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.luuKeToa();
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }
  close() {
    this.dialog.closeAll();
  }
  closePopup(result: any) {
    this.dialogRef.close(result);
  }
  dangXuLy:boolean=false;
  luuKeToa() {
    if(this.dangXuLy)
        return;
    this.dangXuLy=true;
    this.validationErrorsUpdate = null;
    this.ref.detectChanges();
    if (this.documentType == DocumentType.KhamBenhDangKham || this.IsKhamBenhDangKham) {
      this.keToaEdit.IsKhamBenhDangKham = true;
    }
    this.apiService.post("KhamBenh/UpdateDonThuocChiTiet", this.keToaEdit).subscribe(
      (res) => {
        let obj = {
          KeToaEdit: this.keToaEdit,
          Status: "CapNhat",
          MucTranChiPhi: res
        }
        this.closePopup(obj);
        this.dangXuLy=false;
      },
      (err: ApiError) => {
        this.validationErrorsUpdate = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.dangXuLy=false;
      });
  }
  getThoiGianDonThuoc() {
    this.apiService.get<Array<string>>("KhamBenh/ThoiGianDonThuoc").subscribe(
      resultData => {
        this.thoiGianDonThuocDataSource = resultData;
      }
    )
  }

  getGhiChuDonThuocChiTiet() {
    this.apiService.get<Array<string>>("KhamBenh/GetGhiChuDonThuocChiTiet").subscribe(
      resultData => {
        this.ghiChuDonThuocChiTietDataSource = resultData;
      }
    )
  }
  nhapDungCacBuoiTrongNgayChinhSua(event: any, buoi: any) {
    switch (buoi) {
      case "Sang":
        if ((event == undefined && this.keToaEdit.TruaDisplay == undefined && this.keToaEdit.ChieuDisplay == undefined && this.keToaEdit.ToiDisplay == undefined)
          || (event == "" && this.keToaEdit.TruaDisplay == "" && this.keToaEdit.ChieuDisplay == "" && this.keToaEdit.ToiDisplay == "")
          || (event == "" && this.keToaEdit.TruaDisplay == "" && this.keToaEdit.ChieuDisplay == "" && this.keToaEdit.ToiDisplay == null)
          || (event == "" && this.keToaEdit.TruaDisplay == "" && this.keToaEdit.ChieuDisplay == null && this.keToaEdit.ToiDisplay == null)
          || (event == "" && this.keToaEdit.TruaDisplay == null && this.keToaEdit.ChieuDisplay == null && this.keToaEdit.ToiDisplay == null)
        ) {
          this.keToaEdit.SoNgayDung = this.TongSoNgaySuDung(this.keToaEdit.SoLuong, event, this.keToaEdit.TruaDisplay, this.keToaEdit.ChieuDisplay, this.keToaEdit.ToiDisplay);
          return null;
        }
        else {
          this.keToaEdit.SoNgayDung = this.TongSoNgaySuDung(this.keToaEdit.SoLuong, event, this.keToaEdit.TruaDisplay, this.keToaEdit.ChieuDisplay, this.keToaEdit.ToiDisplay);
          return null;

        }
      case "Trua":
        if (
          (event == undefined && this.keToaEdit.SangDisplay == undefined && this.keToaEdit.ChieuDisplay == undefined && this.keToaEdit.ToiDisplay == undefined)
          || (event == "" && this.keToaEdit.SangDisplay == "" && this.keToaEdit.ChieuDisplay == "" && this.keToaEdit.ToiDisplay == "")
          || (event == "" && this.keToaEdit.SangDisplay == "" && this.keToaEdit.ChieuDisplay == "" && this.keToaEdit.ToiDisplay == null)
          || (event == "" && this.keToaEdit.SangDisplay == "" && this.keToaEdit.ChieuDisplay == null && this.keToaEdit.ToiDisplay == null)
          || (event == "" && this.keToaEdit.SangDisplay == null && this.keToaEdit.ChieuDisplay == null && this.keToaEdit.ToiDisplay == null)
        ) {
          this.keToaEdit.SoNgayDung = this.TongSoNgaySuDung(this.keToaEdit.SoLuong, this.keToaEdit.SangDisplay, event, this.keToaEdit.ChieuDisplay, this.keToaEdit.ToiDisplay);
          return null;

        }
        else {
          this.keToaEdit.SoNgayDung = this.TongSoNgaySuDung(this.keToaEdit.SoLuong, this.keToaEdit.SangDisplay, event, this.keToaEdit.ChieuDisplay, this.keToaEdit.ToiDisplay);
          return null;

        }
      case "Chieu":
        if ((event == undefined && this.keToaEdit.TruaDisplay == undefined && this.keToaEdit.SangDisplay == undefined && this.keToaEdit.ToiDisplay == undefined)
          || (event == "" && this.keToaEdit.TruaDisplay == "" && this.keToaEdit.SangDisplay == "" && this.keToaEdit.ToiDisplay == "")
          || (event == "" && this.keToaEdit.TruaDisplay == "" && this.keToaEdit.SangDisplay == "" && this.keToaEdit.ToiDisplay == null)
          || (event == "" && this.keToaEdit.TruaDisplay == "" && this.keToaEdit.SangDisplay == null && this.keToaEdit.ToiDisplay == null)
          || (event == "" && this.keToaEdit.TruaDisplay == null && this.keToaEdit.SangDisplay == null && this.keToaEdit.ToiDisplay == null)
        ) {
          this.keToaEdit.SoNgayDung = this.TongSoNgaySuDung(this.keToaEdit.SoLuong, this.keToaEdit.SangDisplay, this.keToaEdit.TruaDisplay, event, this.keToaEdit.ToiDisplay);
          return null;

        }
        else {
          this.keToaEdit.SoNgayDung = this.TongSoNgaySuDung(this.keToaEdit.SoLuong, this.keToaEdit.SangDisplay, this.keToaEdit.TruaDisplay, event, this.keToaEdit.ToiDisplay);
          return null;

        }
      case "Toi":
        if ((event == undefined && this.keToaEdit.SangDisplay == undefined && this.keToaEdit.ChieuDisplay == undefined && this.keToaEdit.TruaDisplay == undefined)
          || (event == "" && this.keToaEdit.SangDisplay == "" && this.keToaEdit.ChieuDisplay == "" && this.keToaEdit.TruaDisplay == "")
          || (event == "" && this.keToaEdit.SangDisplay == "" && this.keToaEdit.ChieuDisplay == "" && this.keToaEdit.TruaDisplay == null)
          || (event == "" && this.keToaEdit.SangDisplay == "" && this.keToaEdit.ChieuDisplay == null && this.keToaEdit.TruaDisplay == null)
          || (event == "" && this.keToaEdit.SangDisplay == null && this.keToaEdit.ChieuDisplay == null && this.keToaEdit.TruaDisplay == null)
        ) {
          this.keToaEdit.SoNgayDung = this.TongSoNgaySuDung(this.keToaEdit.SoLuong, this.keToaEdit.SangDisplay, this.keToaEdit.TruaDisplay, this.keToaEdit.ChieuDisplay, event);
          return null;

        }
        else {
          this.keToaEdit.SoNgayDung = this.TongSoNgaySuDung(this.keToaEdit.SoLuong, this.keToaEdit.SangDisplay, this.keToaEdit.TruaDisplay, this.keToaEdit.ChieuDisplay, event);
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
    if (sum > this.keToaEdit.SoLuong) {
      this.keToaEdit.SoLuong = sum;
      soLuong = this.keToaEdit.SoLuong;
    }

    this.apiService.post<any>("KhamBenh/FormatNumber?inputNumber=" + sum).subscribe(
      resultData => {
        if (resultData != null) {
          if (resultData == "0") {
            this.keToaEdit.LieuDung = null;
          }
          else {
            this.keToaEdit.LieuDung = resultData;
            if (soLuong != null) {
              let soNgayDung = (soLuong / parseNumber(CommonService.FormatStringFractionToFloat(this.keToaEdit.LieuDung)));
              result = Math.ceil(soNgayDung);
              this.keToaEdit.SoNgayDung = result;
            }
          }
          return result;
        }
      }
    );
    return null;
  }

  convertInt() {
    if (this.keToaEdit.SoNgayDung != null)
      this.keToaEdit.SoNgayDung = parseInt(this.keToaEdit.SoNgayDung.toString());
  }

  // SoLuongChange() {
  //   if (this.keToaEdit.SoLuong != null && this.keToaEdit.LieuDung != null && this.keToaEdit.LieuDung != "") {
  //     let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaEdit.LieuDung));
  //     this.keToaEdit.SoNgayDung = Math.ceil(this.keToaEdit.SoLuong / lieuDung);
  //     this.keToaEdit.SangDisplay = null;
  //     this.keToaEdit.ThoiGianDungSang = null;
  //     this.keToaEdit.TruaDisplay = null;
  //     this.keToaEdit.ThoiGianDungTrua = null;
  //     this.keToaEdit.ChieuDisplay = null;
  //     this.keToaEdit.ThoiGianDungChieu = null;
  //     this.keToaEdit.ToiDisplay = null;
  //     this.keToaEdit.ThoiGianDungToi = null;
  //   }
  //   else if (this.keToaEdit.SoLuong == null) {
  //     this.keToaEdit.LieuDung = null;
  //     this.keToaEdit.SoNgayDung = null;
  //     this.keToaEdit.SangDisplay = null;
  //     this.keToaEdit.ThoiGianDungSang = null;
  //     this.keToaEdit.TruaDisplay = null;
  //     this.keToaEdit.ThoiGianDungTrua = null;
  //     this.keToaEdit.ChieuDisplay = null;
  //     this.keToaEdit.ThoiGianDungChieu = null;
  //     this.keToaEdit.ToiDisplay = null;
  //     this.keToaEdit.ThoiGianDungToi = null;
  //   }
  // }

  SoLuongChange(event: any) {
    // if (this.keToaEdit.SoLuong != null && this.keToaEdit.LieuDungTrenNgayDisplay != null && this.keToaEdit.LieuDungTrenNgayDisplay != "") {
    //   let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaEdit.LieuDungTrenNgayDisplay));
    //   this.keToaEdit.SoNgayDung = Math.ceil(this.keToaEdit.SoLuong / lieuDung);
    //   this.keToaEdit.SangDisplay = null;
    //   this.keToaEdit.ThoiGianDungSang = null;
    //   this.keToaEdit.TruaDisplay = null;
    //   this.keToaEdit.ThoiGianDungTrua = null;
    //   this.keToaEdit.ChieuDisplay = null;
    //   this.keToaEdit.ThoiGianDungChieu = null;
    //   this.keToaEdit.ToiDisplay = null;
    //   this.keToaEdit.ThoiGianDungToi = null;
    // }
    // else 
    if (event == null) {
      this.keToaEdit.LieuDungTrenNgayDisplay = null;
      this.keToaEdit.LieuDungTrenNgay = null;
      this.keToaEdit.SoLanTrenVienDisplay = null;
      this.keToaEdit.SoLanTrenVien = null;
      this.keToaEdit.SoNgayDung = null;
      this.keToaEdit.SangDisplay = null;
      this.keToaEdit.ThoiGianDungSang = null;
      this.keToaEdit.TruaDisplay = null;
      this.keToaEdit.ThoiGianDungTrua = null;
      this.keToaEdit.ChieuDisplay = null;
      this.keToaEdit.ThoiGianDungChieu = null;
      this.keToaEdit.ToiDisplay = null;
      this.keToaEdit.ThoiGianDungToi = null;
    }
  }

  SoLanLieuDungDisplayChange(event: any, text: any) {
    if (text == 'SoLanVien') {
      if (event != null && event != "") {
        this.keToaEdit.SoLanTrenVien = parseNumber(CommonService.FormatStringFractionToFloat(event));
      }
      else {
        this.keToaEdit.SoNgayDung = null;
      }
    } else if (text == 'LieuDung') {
      if (event != null && event != "") {
        this.keToaEdit.LieuDungTrenNgay = parseNumber(CommonService.FormatStringFractionToFloat(event));
      }
      else {
        this.keToaEdit.SoNgayDung = null;
      }
    }

    if (this.keToaEdit.SoLuong != null && this.keToaEdit.SoLanTrenVien != null && this.keToaEdit.LieuDungTrenNgay != null) {
      this.keToaEdit.SoNgayDung = Math.ceil(this.keToaEdit.SoLuong / (this.keToaEdit.SoLanTrenVien * this.keToaEdit.LieuDungTrenNgay));
    }

  }

  // hienThiLieuDung() {
  //   if (this.tongDungThuocTrongNgay != null && this.tongDungThuocTrongNgay != 0) {
  //     this.apiService.post<any>("KhamBenh/FormatNumber?inputNumber=" + this.tongDungThuocTrongNgay).subscribe(
  //       resultData => {
  //         if (resultData != null) {
  //           this.keToaEdit.LieuDung = resultData;
  //         }
  //       })
  //   }
  //   else if (this.keToaEdit.SoNgayDung != null) {
  //     let lieuDung = Math.ceil(this.keToaEdit.SoLuong / this.keToaEdit.SoNgayDung);
  //     this.keToaEdit.LieuDung = lieuDung.toString();
  //   }
  //   else {
  //     this.keToaEdit.LieuDung = null;
  //   }
  // }

  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }
}
