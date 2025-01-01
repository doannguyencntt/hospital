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
import { KeToaThuocDieuTriNoiTru, KeToaThuocTruyenDichDieuTriNoiTru } from '../../../dieu-tri-noi-tru.model';
import { DuocPhamTonKhos } from 'src/app/modules/main/kham-benh/kham-benh.model';
@Component({
  selector: 'app-sua-truyen-dich-popup',
  templateUrl: './sua-truyen-dich-popup.component.html',
  styleUrls: ['./sua-truyen-dich-popup.component.scss']
})
export class SuaTruyenDichPopupComponent implements OnInit {
  icClose = icClose;
  validationErrors: any[] = [];
  tongDungThuocTrongNgay: number = null;
  popupSavingData: any = null;
  isSelectDuocPham: boolean = false;
  loaiDuocPhamHoacVatTu: number = 1;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  thongTinDuocPham: DuocPhamTonKhos = new DuocPhamTonKhos();
  format = "n2";
  laTuTruc: boolean = null;

  keToaEdit: KeToaThuocDieuTriNoiTru = new KeToaThuocDieuTriNoiTru();

  //
  thoiGianBDChange: any = null;
  cachGioChange: any = null;
  thoiGianConLai: number = null;
  cachGioMax: number = 9999;
  soLanChange: any = null;
  soLanMax: number = 9999;
  laDuocPhamBHYT: boolean = false;
  //
  constructor(
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SuaTruyenDichPopupComponent>
  ) { }

  ngOnInit() {
    console.log("data ", this.data)
    this.laTuTruc = this.data.LaTuTruc;
    this.keToaEdit = this.data;
    this.keToaEdit.SoLanDungTrongNgay = this.data.SoLanTrenNgay;
    this.thongTinDuocPham = this.data;
    this.laDuocPhamBHYT = this.data.LaDuocPhamBHYT;
    this.xuLyLoad();

  }

  xuLyLoad() {
    this.thoiGianBDChange = this.keToaEdit.ThoiGianBatDauTruyen;
    if (this.thoiGianBDChange != null) {
      let timeRemain = (86400 - this.thoiGianBDChange) / 3600;
      if (timeRemain > 12) {
        timeRemain = 12;
      }
      this.thoiGianConLai = timeRemain;
      this.cachGioMax = parseNumber(timeRemain.toFixed(1));
    }
    this.cachGioChange = this.keToaEdit.CachGioTruyenDich;
    if (this.cachGioChange != null) {
      this.cachGioChange = this.cachGioChange;
      let timeRemain = (86400 - this.thoiGianBDChange) / 3600; // thời gian còn lại trong ngày
      if (timeRemain / this.cachGioChange == 1) {
        this.soLanMax = 2;
      } else {
        if (timeRemain / this.cachGioChange < 2) { // chia ra kết quả từ 1.1 ~ 1.9
          this.soLanMax = 2;
        } else {
          this.soLanMax = parseNumber((timeRemain / this.cachGioChange + 1).toFixed(0));
        }
      }
    }
    this.soLanChange = this.keToaEdit.SoLanDungTrongNgay;
  }

  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
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
  hienThiGioSuDung() {
    if (this.thoiGianBDChange != undefined && this.thoiGianBDChange != null
      && this.cachGioChange != undefined && this.cachGioChange != null
      && this.soLanChange != undefined && this.soLanChange != null) {
      this.keToaEdit.GioSuDung = "";
      var thoiGian = this.thoiGianBDChange;

      for (let i = 1; i <= this.soLanChange; i++) {
        let conVertTimeSACH = CommonService.secToHourAndMinute(thoiGian);
        // // CommonService.convertTimeSACH(CommonService.sec2time((thoiGian)));
        thoiGian += (this.cachGioChange * 3600);
        if (thoiGian == 86400) {
          thoiGian = thoiGian - 60; // trừ đi 1p tránh trường hợp đúng 0:00 giờ
        }
        if (this.keToaEdit.GioSuDung == null) {
          this.keToaEdit.GioSuDung = "";
        }
        this.keToaEdit.GioSuDung += conVertTimeSACH + "; ";
      }
    }
  }

  thoiGianBatDauTruyenChange(dataItem: any) {
    this.keToaEdit.GioSuDung = null;
    this.keToaEdit.CachGioTruyenDich = null;
    this.keToaEdit.SoLanDungTrongNgay = null;
    this.cachGioChange = null;
    this.soLanChange = null;
    if (dataItem != undefined && dataItem != null) {
      // let conVertTimeSACH = CommonService.convertTimeSACH(CommonService.sec2time((dataItem)));
      let conVertTimeSACH = CommonService.secToHourAndMinute(dataItem);

      this.keToaEdit.GioSuDung = conVertTimeSACH;
      this.thoiGianBDChange = dataItem;
      // this.thoiGianBDChange = dataItem;
      // 86400s = 1 day
      let timeRemain = (86400 - dataItem) / 3600;
      // if (timeRemain > 12) {
      //   timeRemain = 12;
      // }
      // this.thoiGianConLai = timeRemain;
      this.thoiGianConLai = parseNumber(timeRemain.toFixed(1));
      // this.cachGioMax = parseNumber(timeRemain.toFixed(1));
    } else {
      this.keToaEdit.GioSuDung = null;
      this.thoiGianBDChange = null;
      // this.cachGioMax = 9999;
    }
    this.hienThiGioSuDung();
  }

  soLanDungTrongNgayChange(dataItem: any) {
    this.keToaEdit.SoLanDungTrongNgay = null;
    this.keToaEdit.CachGioTruyenDich = null;
    this.cachGioChange = null;
    if (dataItem != undefined && dataItem != null) {
      this.soLanChange = dataItem;
      // this.cachGioMax = this.thoiGianConLai / dataItem;
      if (dataItem == 2) {
        this.cachGioMax = this.thoiGianConLai
      } else {
        this.cachGioMax = parseNumber((this.thoiGianConLai / dataItem).toFixed(1));
      }
      if (this.keToaEdit.CachGioTruyenDich == null) {
        // this.keToaEdit.GioSuDung = CommonService.convertTimeSACH(CommonService.sec2time((this.thoiGianBDChange)));
        this.keToaEdit.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      }
    } else {
      // this.keToaEdit.GioSuDung = CommonService.convertTimeSACH(CommonService.sec2time((this.thoiGianBDChange)));
      this.keToaEdit.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      this.cachGioMax = null;
      this.soLanChange = null;
    }
    this.hienThiGioSuDung();
  }

  cachGioTruyenDichChange(dataItem: any) {
    //this.keToaEdit.GioSuDung = null;
    // this.soLanChange = null;
    if (dataItem != undefined && dataItem != null) {
      if (dataItem == 0) {
        this.cachGioChange = null;
        // this.keToaEdit.GioSuDung = CommonService.convertTimeSACH(CommonService.sec2time((this.thoiGianBDChange)));
        this.keToaEdit.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      } else {
        this.cachGioChange = dataItem;
      }
      // let timeRemain = (86400 - this.thoiGianBDChange) / 3600; // thời gian còn lại trong ngày
      // if (timeRemain / dataItem == 1) {
      //   this.soLanMax = 2;
      // } else {
      //   if (timeRemain / dataItem < 2) { // chia ra kết quả từ 1.1 ~ 1.9
      //     this.soLanMax = 2;
      //   } else {
      //     this.soLanMax = parseNumber((timeRemain / dataItem + 1).toFixed(0));
      //   }
      // }
    } else {
      this.cachGioChange = null;
      // this.soLanMax = 9999;
      // this.keToaEdit.GioSuDung = CommonService.convertTimeSACH(CommonService.sec2time((this.thoiGianBDChange)));
      this.keToaEdit.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

    }
    this.hienThiGioSuDung();
  }


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
      // this.keToaEdit.KhongTinhPhi = !this.keToaEdit.KhongTinhPhi;
      this.apiService.post<any>("DieuTriNoiTru/CapNhatThuoc", this.keToaEdit).subscribe(
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
      this.apiService.post<any>("DieuTriNoiTru/CapNhatThuocNgoaiBenhVien", this.keToaEdit).subscribe(
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
