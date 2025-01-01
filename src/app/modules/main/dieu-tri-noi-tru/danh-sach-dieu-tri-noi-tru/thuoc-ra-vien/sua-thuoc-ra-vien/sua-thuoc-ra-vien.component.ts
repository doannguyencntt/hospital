import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { parseNumber } from '@progress/kendo-angular-intl';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { NoiTruKeToaItem } from '../../../dieu-tri-noi-tru.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
@Component({
  selector: 'app-sua-thuoc-ra-vien',
  templateUrl: './sua-thuoc-ra-vien.component.html',
  styleUrls: ['./sua-thuoc-ra-vien.component.scss']
})
export class SuaThuocRaVienComponent implements OnInit {
  icClose = icClose;
  validationErrors: any[] = [];
  thoiGianDonThuocDataSource: any;
  ghiChuDonThuocChiTietDataSource: any;
  tongDungThuocTrongNgay: number = null;
  isSelectDuocPham: boolean = false;
  loaiDuocPhamHoacVatTu: number = 1;
  keToaEdit: NoiTruKeToaItem = new NoiTruKeToaItem();
  popupSavingData: any = null;

  validationErrorsUpdate: any = null;
  dataChanDoan = {
    data: [],
    total: 0
  }
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  constructor(
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SuaThuocRaVienComponent>
  ) { }

  ngOnInit() {
    this.keToaEdit = this.data;
    this.getThoiGianDonThuoc();
    this.tinhTongDungThuocTrongNgay();
    this.hienThiLieuDung();
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

  savingPage() {
    this.popupSavingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closepopupSavingData() {
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }


  dangXuLy:boolean=false;
  luuKeToa() {
    if(this.dangXuLy)
        return;
    this.dangXuLy=true;
    this.validationErrorsUpdate = null;
    this.ref.detectChanges();
    this.savingPage();
    this.apiService.post("DieuTriNoiTru/CapNhatNoiTruDonThuocChiTiet", this.keToaEdit).subscribe(
      (res) => {
        this.closepopupSavingData();
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
        this.closepopupSavingData();
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

  SoLuongChange() {
    if (this.keToaEdit.SoLuong != null && this.keToaEdit.LieuDung != null && this.keToaEdit.LieuDung != "") {
      let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaEdit.LieuDung));
      this.keToaEdit.SoNgayDung = Math.ceil(this.keToaEdit.SoLuong / lieuDung);
      this.keToaEdit.SangDisplay = null;
      this.keToaEdit.ThoiGianDungSang = null;
      this.keToaEdit.TruaDisplay = null;
      this.keToaEdit.ThoiGianDungTrua = null;
      this.keToaEdit.ChieuDisplay = null;
      this.keToaEdit.ThoiGianDungChieu = null;
      this.keToaEdit.ToiDisplay = null;
      this.keToaEdit.ThoiGianDungToi = null;
    }
    else if (this.keToaEdit.SoLuong == null) {
      this.keToaEdit.LieuDung = null;
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

  LieuDungChange() {
    if (this.keToaEdit.SoLuong != null && this.keToaEdit.LieuDung != null && this.keToaEdit.LieuDung != "") {
      let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaEdit.LieuDung));
      if (lieuDung > this.keToaEdit.SoLuong) {
        this.keToaEdit.SoLuong = lieuDung;
      }
      this.keToaEdit.SoNgayDung = Math.ceil(this.keToaEdit.SoLuong / lieuDung);
      this.keToaEdit.SangDisplay = null;
      this.keToaEdit.ThoiGianDungSang = null;
      this.keToaEdit.TruaDisplay = null;
      this.keToaEdit.ThoiGianDungTrua = null;
      this.keToaEdit.ChieuDisplay = null;
      this.keToaEdit.ThoiGianDungChieu = null;
      this.keToaEdit.ToiDisplay = null;
      this.keToaEdit.ThoiGianDungToi = null;
    } else if (this.keToaEdit.SoLuong == null && this.keToaEdit.SoNgayDung != null && (this.keToaEdit.LieuDung != null && this.keToaEdit.LieuDung != "")) {
      let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaEdit.LieuDung));
      this.keToaEdit.SoLuong = this.keToaEdit.SoNgayDung * lieuDung;
    } else if (this.keToaEdit.SoLuong != null && (this.keToaEdit.LieuDung == null || this.keToaEdit.LieuDung == "")) {
      this.keToaEdit.SoNgayDung = null;
    }
  }

  SoNgayDungChange() {
    if (this.keToaEdit.SoLuong != null && this.keToaEdit.SoNgayDung != null && this.keToaEdit.SoNgayDung > 0) {
      let lieuDung = Math.ceil(this.keToaEdit.SoLuong / this.keToaEdit.SoNgayDung);

      // this.apiService.post<any>("KhamBenh/FormatNumber?inputNumber=" + lieuDung).subscribe(
      //   resultData => {
      //     if (resultData != null) {
      //       this.keToaEdit.LieuDung = resultData;
      //     }
      //   })
      this.keToaEdit.LieuDung = lieuDung.toString();
      this.keToaEdit.SangDisplay = null;
      this.keToaEdit.ThoiGianDungSang = null;
      this.keToaEdit.TruaDisplay = null;
      this.keToaEdit.ThoiGianDungTrua = null;
      this.keToaEdit.ChieuDisplay = null;
      this.keToaEdit.ThoiGianDungChieu = null;
      this.keToaEdit.ToiDisplay = null;
      this.keToaEdit.ThoiGianDungToi = null;
    } else if (this.keToaEdit.SoLuong == null && this.keToaEdit.SoNgayDung != null && (this.keToaEdit.LieuDung != null && this.keToaEdit.LieuDung != "")) {
      let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaEdit.LieuDung));
      this.keToaEdit.SoLuong = this.keToaEdit.SoNgayDung * lieuDung;
    } else if (this.keToaEdit.SoLuong != null && this.keToaEdit.SoNgayDung == null || this.keToaEdit.SoNgayDung == 0) {
      this.keToaEdit.SoNgayDung = null;
      this.keToaEdit.LieuDung = null;
    }
  }

  tinhTongDungThuocTrongNgay() {
    let sang: any, trua: any, chieu: any, toi: any;
    if (this.keToaEdit.SangDisplay != null) {
      sang = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaEdit.SangDisplay));
    } else {
      sang = 0;
    }
    if (this.keToaEdit.TruaDisplay != null) {
      trua = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaEdit.TruaDisplay));
    }
    else {
      trua = 0;
    }
    if (this.keToaEdit.ChieuDisplay != null) {
      chieu = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaEdit.ChieuDisplay));
    }
    else {
      chieu = 0;
    }
    if (this.keToaEdit.ToiDisplay != null) {
      toi = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaEdit.ToiDisplay));
    }
    else {
      toi = 0;
    }
    this.tongDungThuocTrongNgay = sang + trua + chieu + toi;
  }

  hienThiLieuDung() {
    if (this.tongDungThuocTrongNgay != null && this.tongDungThuocTrongNgay != 0) {
      this.apiService.post<any>("KhamBenh/FormatNumber?inputNumber=" + this.tongDungThuocTrongNgay).subscribe(
        resultData => {
          if (resultData != null) {
            this.keToaEdit.LieuDung = resultData;
          }
        })
    }
    else if (this.keToaEdit.SoNgayDung != null) {
      let lieuDung = Math.ceil(this.keToaEdit.SoLuong / this.keToaEdit.SoNgayDung);
      this.keToaEdit.LieuDung = lieuDung.toString();
    }
    else {
      this.keToaEdit.LieuDung = null;
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
}
