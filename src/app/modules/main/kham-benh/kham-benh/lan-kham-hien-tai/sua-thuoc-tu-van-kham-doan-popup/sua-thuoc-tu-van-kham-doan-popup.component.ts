import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { parseNumber } from '@progress/kendo-angular-intl';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { KeToaItem } from 'src/app/modules/main/kham-benh/kham-benh.model';

@Component({
  selector: 'app-sua-thuoc-tu-van-kham-doan-popup',
  templateUrl: './sua-thuoc-tu-van-kham-doan-popup.component.html',
  styleUrls: ['./sua-thuoc-tu-van-kham-doan-popup.component.scss']
})
export class SuaThuocTuVanKhamDoanPopupComponent implements OnInit {
  icClose = icClose;
  validationErrors: any[] = [];
  thoiGianDonThuocDataSource: any;
  popupSavingData: any = null;
  isSelectDuocPham: boolean = false;
  documentType: DocumentType = DocumentType.KhamBenh;
  keToaEdit: KeToaItem = new KeToaItem();

  constructor(
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SuaThuocTuVanKhamDoanPopupComponent>
  ) { }

  ngOnInit() {
    this.keToaEdit = this.data;
    this.getThoiGianDonThuoc();

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
  getThoiGianDonThuoc() {
    this.apiService.get<Array<string>>("KhamBenh/ThoiGianDonThuoc").subscribe(
      resultData => {
        this.thoiGianDonThuocDataSource = resultData;
      }
    )
  }

  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
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
    } else if (this.keToaEdit.SoLuong != null && this.keToaEdit.SoNgayDung == null) {
      this.keToaEdit.LieuDung = null;
    }
  }

  convertInt() {
    if (this.keToaEdit.SoNgayDung != null)
      this.keToaEdit.SoNgayDung = parseInt(this.keToaEdit.SoNgayDung.toString());
  }

  dangXuLy:boolean=false;
  luuKeToa() {
    if(this.dangXuLy)
        return;
    this.dangXuLy=true;
    this.validationErrors = [];
    this.ref.detectChanges();
    this.savingPage();
    this.apiService.post<any>("KhamBenh/CapNhatDonThuocTuVanSucKhoe", this.keToaEdit).subscribe(
      () => {
        this.closepopupSavingData();
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
        this.dialogRef.close();
        this.dangXuLy=false;
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closepopupSavingData();
        this.dangXuLy=false;
      });
  }
}
