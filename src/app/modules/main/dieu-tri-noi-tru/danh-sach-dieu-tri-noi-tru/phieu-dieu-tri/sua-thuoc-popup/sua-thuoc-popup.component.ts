import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { parseNumber } from '@progress/kendo-angular-intl';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { KeToaThuocDieuTriNoiTru } from '../../../dieu-tri-noi-tru.model';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { YeuCauDuocPhamChiDinh } from 'src/app/modules/main/kham-benh/kham-benh.model';

@Component({
  selector: 'app-sua-thuoc-popup',
  templateUrl: './sua-thuoc-popup.component.html',
  styleUrls: ['./sua-thuoc-popup.component.scss']
})
export class SuaThuocPopupComponent implements OnInit {
  icClose = icClose;
  validationErrors: any[] = [];
  thoiGianDonThuocDataSource: any;
  ghiChuDonThuocChiTietDataSource: any;
  tongDungThuocTrongNgay: number = null;
  popupSavingData: any = null;
  isSelectDuocPham: boolean = false;
  loaiDuocPhamHoacVatTu: number = 1;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  format = "n2";
  laTuTruc: boolean = null;
  laDuocPhamBHYT: boolean = false;
  keToaEdit: KeToaThuocDieuTriNoiTru = new KeToaThuocDieuTriNoiTru();
  thongTinDuocPham: YeuCauDuocPhamChiDinh = new YeuCauDuocPhamChiDinh();
  cachGioMax: number = 9999;

  constructor(
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SuaThuocPopupComponent>
  ) { }

  ngOnInit() {
    // console.log("data ", this.data)
    this.laTuTruc = this.data.LaTuTruc;
    this.keToaEdit = this.data;
    this.thongTinDuocPham = this.data;
    this.laDuocPhamBHYT = this.data.LaDuocPhamBHYT;
    // if (this.keToaEdit.SoLanDungTrongNgay != undefined && this.keToaEdit.SoLanDungTrongNgay != null) {
    //   this.keToaEdit.SoLanDungTrongNgayString = this.keToaEdit.SoLanDungTrongNgay.toString();
    // }
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

  SoLanLieuDungDisplayChange(event: any, text: any) {
    if (text == 'SoLanVien') {
      if (event != null && event != "") {
        this.keToaEdit.SoLanTrenVien = event;
      }
      else {
        this.keToaEdit.SoLanDungTrongNgay = null;
      }
    } else if (text == 'LieuDung') {
      if (event != null && event != "") {
        this.keToaEdit.LieuDungTrenNgay = parseNumber(CommonService.FormatStringFractionToFloat(event));
      }
      else {
        this.keToaEdit.SoLanDungTrongNgay = null;
      }
    }

    if (this.keToaEdit.SoLuong != null && this.keToaEdit.SoLanTrenVien != null && this.keToaEdit.LieuDungTrenNgay != null) {
      this.keToaEdit.SoLanDungTrongNgay = Math.ceil(this.keToaEdit.SoLuong / (this.keToaEdit.SoLanTrenVien * this.keToaEdit.LieuDungTrenNgay));
    }

  }

  SoLuongChange() {
    // if (this.keToaEdit.SoLuong != null && this.keToaEdit.SoLanDungTrongNgayString != null && this.keToaEdit.SoLanDungTrongNgayString != "") {
    //   this.keToaEdit.SoLanDungTrongNgay = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaEdit.SoLanDungTrongNgayString));
    //   this.keToaEdit.DungSang = null;
    //   this.keToaEdit.ThoiGianDungSang = null;
    //   this.keToaEdit.DungTrua = null;
    //   this.keToaEdit.ThoiGianDungTrua = null;
    //   this.keToaEdit.DungChieu = null;
    //   this.keToaEdit.ThoiGianDungChieu = null;
    //   this.keToaEdit.DungToi = null;
    //   this.keToaEdit.ThoiGianDungToi = null;
    // }
    // else if (this.keToaEdit.SoLuong == null) {
    //   this.keToaEdit.SoLanDungTrongNgayString = null;
    //   this.keToaEdit.DungSang = null;
    //   this.keToaEdit.ThoiGianDungSang = null;
    //   this.keToaEdit.DungTrua = null;
    //   this.keToaEdit.ThoiGianDungTrua = null;
    //   this.keToaEdit.DungChieu = null;
    //   this.keToaEdit.ThoiGianDungChieu = null;
    //   this.keToaEdit.DungToi = null;
    //   this.keToaEdit.ThoiGianDungToi = null;
    // }
    if (event == null) {
      this.keToaEdit.LieuDungTrenNgayDisplay = null;
      this.keToaEdit.LieuDungTrenNgay = null;
      this.keToaEdit.SoLanDungTrongNgayString = null;
      this.keToaEdit.SoLanTrenVien = null;
      this.keToaEdit.SoLanDungTrongNgay = null;
      this.keToaEdit.DungSang = null;
      this.keToaEdit.ThoiGianDungSang = null;
      this.keToaEdit.DungTrua = null;
      this.keToaEdit.ThoiGianDungTrua = null;
      this.keToaEdit.DungChieu = null;
      this.keToaEdit.ThoiGianDungChieu = null;
      this.keToaEdit.DungToi = null;
      this.keToaEdit.ThoiGianDungToi = null;
    }
  }

  // LieuDungChange() {
  //   if (this.keToaEdit.SoLuong != null && this.keToaEdit.SoLanDungTrongNgayString != null && this.keToaEdit.SoLanDungTrongNgayString != "") {
  //     this.keToaEdit.SoLanDungTrongNgay = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaEdit.SoLanDungTrongNgayString));
  //     if (this.keToaEdit.SoLanDungTrongNgay > this.keToaEdit.SoLuong) {
  //       this.keToaEdit.SoLuong = this.keToaEdit.SoLanDungTrongNgay;
  //     }
  //     this.keToaEdit.DungSang = null;
  //     this.keToaEdit.ThoiGianDungSang = null;
  //     this.keToaEdit.DungTrua = null;
  //     this.keToaEdit.ThoiGianDungTrua = null;
  //     this.keToaEdit.DungChieu = null;
  //     this.keToaEdit.ThoiGianDungChieu = null;
  //     this.keToaEdit.DungToi = null;
  //     this.keToaEdit.ThoiGianDungToi = null;
  //   }
  // }
  dangXuLy:boolean=false;
  luuKeToa() {
    if(this.dangXuLy)
        return;
    this.dangXuLy=true;
    this.validationErrors = null;
    this.ref.detectChanges();
    if (this.keToaEdit.KhuVuc == 1) {
      if (this.laDuocPhamBHYT) {
        this.keToaEdit.LaDuocPhamBHYT = 2;
      } else {
        this.keToaEdit.LaDuocPhamBHYT = 1;
      }
      this.savingPage();
      this.apiService.post("DieuTriNoiTru/CapNhatThuoc", this.keToaEdit).subscribe(
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
    else {
      this.savingPage();
      this.apiService.post("DieuTriNoiTru/CapNhatThuocNgoaiBenhVien", this.keToaEdit).subscribe(
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
}
