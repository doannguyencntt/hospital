import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import icClose from "@iconify/icons-ic/twotone-close";
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoaiHoSoKhamSucKhoe } from 'src/app/shared/enum/kham-doan.enum';
import { ThongTinInPhieuKhamSucKhoe } from '../kham-doan-tiep-nhan.model';

@Component({
  selector: 'app-kham-doan-tiep-nhan-file-popup',
  templateUrl: './kham-doan-tiep-nhan-file-popup.component.html',
  styleUrls: ['./kham-doan-tiep-nhan-file-popup.component.scss']
})
export class KhamDoanTiepNhanFilePopupComponent implements OnInit {

  icClose = icClose;
  popupLoadingData: any;
  arrFilePdf: Array<any> = [];
  arrFileUrl: Array<any> = [];
  arrLoaiHoSoKhamSucKhoe: Array<ThongTinInPhieuKhamSucKhoe> = new Array<ThongTinInPhieuKhamSucKhoe>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    var hosting = window.location.protocol + "//" + window.location.host;
    if (this.data.HoSoDaChon.SoKhamSucKhoeDinhKy) {
      let thongTin = new ThongTinInPhieuKhamSucKhoe(
        this.data.Id,
        "SoKhamSucKhoeDinhKy",
        hosting,
        LoaiHoSoKhamSucKhoe.SoKhamSucKhoeDinhKy,
        true
      );
      this.arrLoaiHoSoKhamSucKhoe.push(thongTin);
    }
    if (this.data.HoSoDaChon.PhieuDangKyKhamSucKhoe) {
      let thongTin = new ThongTinInPhieuKhamSucKhoe(
        this.data.Id,
        "PhieuDangKyKhamSucKhoe",
        hosting,
        LoaiHoSoKhamSucKhoe.PhieuDangKyKhamSucKhoe
      );
      this.arrLoaiHoSoKhamSucKhoe.push(thongTin);
    }
    if (this.data.HoSoDaChon.BangHuongDanKhamSucKhoe) {
      let thongTin = new ThongTinInPhieuKhamSucKhoe(
        this.data.Id,
        "BangHuongDanKhamSucKhoe",
        hosting,
        LoaiHoSoKhamSucKhoe.BangHuongDanKhamSucKhoe,
      );
      this.arrLoaiHoSoKhamSucKhoe.push(thongTin);
    }
    this.getALlFilePDFFromHtml(this.arrLoaiHoSoKhamSucKhoe);
  }

  getALlFilePDFFromHtml(hoSoDaChon) {
    this.showPopupLoadingData();
    let queryStringSearch = JSON.stringify(hoSoDaChon);
    this.apiService.postExportPdf<any>('KhamDoan/GetFilePDFHoSoKhamSucKhoeFromHtml?obj='+ queryStringSearch).subscribe(
      file => {
        let newBlob = new Blob([file], { type: "application/pdf" });
        let datalocalURL = window.URL.createObjectURL(newBlob);
        console.log('datalocalURL', datalocalURL);
        this.arrFileUrl.push(datalocalURL);
        this.arrFilePdf.push(file);

        if (this.arrFileUrl.length == hoSoDaChon.length) {
          this.closePopupLoadingData();
        }
        this.closePopupLoadingData();
      },
      (err: ApiError) => {
        if (err.Message !== 'Validation Failed') {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
    // hoSoDaChon.forEach(phieuInInfo => {
    //   this.apiService.postExportPdf<any>('KhamDoan/GetFilePDFHoSoKhamSucKhoeFromHtml', phieuInInfo).subscribe(
    //     file => {
    //       let newBlob = new Blob([file], { type: "application/pdf" });
    //       let datalocalURL = window.URL.createObjectURL(newBlob);
    //       console.log('datalocalURL', datalocalURL);
    //       this.arrFileUrl.push(datalocalURL);
    //       this.arrFilePdf.push(file);

    //       if (this.arrFileUrl.length == hoSoDaChon.length) {
    //         this.closePopupLoadingData();
    //       }
    //     },
    //     (err: ApiError) => {
    //       if (err.Message !== 'Validation Failed') {
    //         this.notificationService.showError(err.Message);
    //       }
    //       this.closePopupLoadingData();
    //     });
    // });
  }

  downloadAllFile() {
    const dateTimeNow = new Date();
    this.arrFilePdf.forEach(file => {
      CommonService.downLoadFile(file, 'application/pdf', 'HoSoKhamSucKhoe' + dateTimeNow.getFullYear() + '.pdf');
    });
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
}
