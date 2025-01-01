import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import icClose from "@iconify/icons-ic/twotone-close";
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { LoaiHoSoKhamSucKhoe } from 'src/app/shared/enum/kham-doan.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ThongTinInPhieuKhamSucKhoe } from '../kham-doan-tiep-nhan.model';

@Component({
  selector: 'app-bang-huong-dan-kham-suc-khoe-popup',
  templateUrl: './bang-huong-dan-kham-suc-khoe-popup.component.html',
  styleUrls: ['./bang-huong-dan-kham-suc-khoe-popup.component.scss']
})
export class BangHuongDanKhamSucKhoePopupComponent implements OnInit {

  icClose = icClose;
  popupLoadingData: any;
  file: any;
  fileUrl: any;
  title="Bảng hướng dẫn khám sức khỏe";
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.getALlFilePDFFromHtml();
  }

  getALlFilePDFFromHtml() {
    this.showPopupLoadingData();
    var hosting = window.location.protocol + "//" + window.location.host;
    let thongTin = new ThongTinInPhieuKhamSucKhoe(
      this.data,
      "BangHuongDanKhamSucKhoe",
      hosting,
      LoaiHoSoKhamSucKhoe.BangHuongDanKhamSucKhoe
    );
    let listPhieuIn =new Array<ThongTinInPhieuKhamSucKhoe>();
    listPhieuIn.push(thongTin);
    let queryStringSearch = JSON.stringify(listPhieuIn);
    this.apiService.postExportPdf<any>('KhamDoan/GetFilePDFHoSoKhamSucKhoeFromHtml?obj='+ queryStringSearch).subscribe(
      file => {
        let newBlob = new Blob([file], { type: "application/pdf" });
        let datalocalURL = window.URL.createObjectURL(newBlob);

        this.fileUrl = datalocalURL;

        this.closePopupLoadingData();
      },
      (err: ApiError) => {
        if (err.Message !== 'Validation Failed') {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
  }

  downloadFile() {
    const dateTimeNow = new Date();
    CommonService.downLoadFile(this.file, 'application/pdf', 'BangHuongDanKhamSucKhoe' + dateTimeNow.getFullYear() + '.pdf');
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
