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
import { NoiTruChiDinhPhaThuocTiem } from '../../../dieu-tri-noi-tru.model';
@Component({
  selector: 'app-sua-pha-thuoc-tiem-popup',
  templateUrl: './sua-pha-thuoc-tiem-popup.component.html',
  styleUrls: ['./sua-pha-thuoc-tiem-popup.component.scss']
})
export class SuaPhaThuocTiemPopupComponent implements OnInit {
  icClose = icClose;
  validationErrorsTiem: any[] = [];
  popupSavingData: any = null;
  isSelectDuocPham: boolean = false;
  loaiDuocPhamHoacVatTu: number = 1;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  format = "n2";
  keToaThuocTiemEdit: NoiTruChiDinhPhaThuocTiem = new NoiTruChiDinhPhaThuocTiem();

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
    public dialogRef: MatDialogRef<SuaPhaThuocTiemPopupComponent>
  ) { }

  ngOnInit() {
    console.log("data ", this.data)
    this.keToaThuocTiemEdit = this.data;
    this.thoiGianBDChange = this.keToaThuocTiemEdit.ThoiGianBatDauTiem;
    let timeRemain = (86400 - this.keToaThuocTiemEdit.ThoiGianBatDauTiem) / 3600;
    this.thoiGianConLai = parseNumber(timeRemain.toFixed(1));
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

  thoiGianBatDauPhaThuocTiemChange(dataItem: any) {
    this.keToaThuocTiemEdit.GioSuDung = null;
    this.keToaThuocTiemEdit.CachGioTiem = null;
    this.keToaThuocTiemEdit.SoLanTrenNgay = null;
    this.cachGioChange = null;
    this.soLanChange = null;
    if (dataItem != undefined && dataItem != null) {
      // let conVertTimeSACH = CommonService.convertTimeSACH(CommonService.sec2time((dataItem)));
      let conVertTimeSACH = CommonService.secToHourAndMinute(dataItem);

      this.keToaThuocTiemEdit.GioSuDung = conVertTimeSACH;
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
      this.keToaThuocTiemEdit.GioSuDung = null;
      this.thoiGianBDChange = null;
      // this.cachGioMax = 9999;
    }
    this.hienThiGioSuDungPhaThuocTiem();
  }


  soLanDungTrongNgayPhaThuocTiemChange(dataItem: any) {
    // this.keToaThuocTiemEdit.SoLanTrenNgay = null;
    this.keToaThuocTiemEdit.CachGioTiem = null;
    this.cachGioChange = null;
    if (dataItem != undefined && dataItem != null) {
      this.soLanChange = dataItem;
      if (dataItem == 2) {
        this.cachGioMax = this.thoiGianConLai
      } else {
        this.cachGioMax = parseNumber((this.thoiGianConLai / dataItem).toFixed(1));
      }
      if (this.keToaThuocTiemEdit.CachGioTiem == null) {
        this.keToaThuocTiemEdit.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      }
    } else {
      this.keToaThuocTiemEdit.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      this.cachGioMax = null;
      this.soLanChange = null;
    }
    this.hienThiGioSuDungPhaThuocTiem();
  }

  cachGioPhaThuocTiemChange(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      if (dataItem == 0) {
        this.cachGioChange = null;
        this.keToaThuocTiemEdit.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      } else {
        this.cachGioChange = dataItem;
      }
    } else {
      this.cachGioChange = null;
      this.keToaThuocTiemEdit.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

    }
    this.hienThiGioSuDungPhaThuocTiem();
  }

  hienThiGioSuDungPhaThuocTiem() {
    if (this.thoiGianBDChange != undefined && this.thoiGianBDChange != null
      && this.cachGioChange != undefined && this.cachGioChange != null
      && this.soLanChange != undefined && this.soLanChange != null) {
      this.keToaThuocTiemEdit.GioSuDung = "";
      var thoiGian = this.thoiGianBDChange;

      for (let i = 1; i <= this.soLanChange; i++) {
        let conVertTimeSACH = CommonService.secToHourAndMinute(thoiGian);
        thoiGian += (this.cachGioChange * 3600);
        if (thoiGian == 86400) {
          thoiGian = thoiGian - 60; // trừ đi 1p tránh trường hợp đúng 0:00 giờ
        }
        if (this.keToaThuocTiemEdit.GioSuDung == null) {
          this.keToaThuocTiemEdit.GioSuDung = "";
        }
        this.keToaThuocTiemEdit.GioSuDung += conVertTimeSACH + "; ";
      }
    }
  }


  dangXuLy:boolean=false;
  luuKeToa() {
    if(this.dangXuLy)
        return;
    this.dangXuLy=true;
    this.validationErrorsTiem = null;
    this.ref.detectChanges();
    if (this.keToaThuocTiemEdit.KhuVuc == 1) {
      this.savingPage();
      // this.keToaEdit.KhongTinhPhi = !this.keToaEdit.KhongTinhPhi;
      this.keToaThuocTiemEdit.NoiTruChiDinhDuocPhams.forEach(element => {
        element.LaDuocPhamBHYT = null;
      });
      this.apiService.post<any>("DieuTriNoiTru/CapNhatPhaThuocTiem", this.keToaThuocTiemEdit).subscribe(
        () => {
          this.closepopupSavingData();
          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
          this.dialogRef.close();
          this.dangXuLy=false;
        },
        (err: ApiError) => {
          this.validationErrorsTiem = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closepopupSavingData();
          this.dangXuLy=false;
        });
    }
    else {
      // this.savingPage();
      // this.apiService.post<any>("DieuTriNoiTru/CapNhatThuocNgoaiBenhVien", this.keToaThuocTiemEdit).subscribe(
      //   () => {
      //     this.closepopupSavingData();
      //     this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
      //     this.dialogRef.close();
      //   },
      //   (err: ApiError) => {
      //     this.validationErrorsTiem = err.ValidationErrors;
      //     if (err.Message != "Validation Failed") {
      //       this.notificationService.showError(err.Message);
      //     }
      //     this.closepopupSavingData();
      //   });
    }

  }
}
