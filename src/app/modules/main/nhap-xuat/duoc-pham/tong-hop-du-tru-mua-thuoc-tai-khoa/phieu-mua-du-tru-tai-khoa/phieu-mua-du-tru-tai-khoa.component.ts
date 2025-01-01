import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiError } from 'src/app/shared/models/api-error.model';

import { NotificationService } from 'src/app/core/services/notification.service';
import { PhieuInDuTruMuaTaiKhoa } from '../tong-hop-du-tru-mua-thuoc-tai-khoa.model';
@Component({
  selector: 'app-phieu-mua-du-tru-tai-khoa',
  templateUrl: './phieu-mua-du-tru-tai-khoa.component.html',
  styleUrls: ['./phieu-mua-du-tru-tai-khoa.component.scss']
})
export class PhieuMuaTruTaiKhoaComponent implements OnInit {
  icClose = icClose;
  inPhieuDuocPham: PhieuInDuTruMuaTaiKhoa = new PhieuInDuTruMuaTaiKhoa();
  validationErrors: any[];
  src: string = "";
  dataHTML: string = "";
  constructor(
    private dialogRef: MatDialogRef<PhieuMuaTruTaiKhoaComponent>,
    private apiService: ApiService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.xem();
  }

  xem() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    self.inPhieuDuocPham.DuTruMuaDuocPhamTheoKhoaId = self.data.Id;
    self.inPhieuDuocPham.Header = false;
    
    self.apiService.post<any>("YeuCauMuaDuocPham/InPhieuDuTruMuaTaiKhoa", self.inPhieuDuocPham).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.inPhieuDuocPham.Header = false;
          self.dataHTML = resData;
          self.src = "data:text/html;charset=utf-8," + encodeURIComponent(resData);
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      }
    );
  }

  getSharedPrintForm() {
    var template = this.dataHTML.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
    "<th>PHIẾU TỔNG HỢP DỰ TRÙ THUỐC,VÁC XIN,HÓA CHẤT XÉT NGHIỆM</th>" +
    "</p>", "");
    return new Promise(resolve => {
      resolve(template);
      this.close();
    });
  }

  close() {
    this.dialogRef.close();
  }
}
