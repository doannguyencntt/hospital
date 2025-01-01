import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PhieuYeuCauMuaVatTu } from '../yeu-cau-mua-ksnk.model';


@Component({
  selector: 'app-phieu-mua-ksnk',
  templateUrl: './phieu-mua-ksnk.component.html',
  styleUrls: ['./phieu-mua-ksnk.component.scss']
})
export class PhieuMuaKSNKComponent implements OnInit {
  icClose = icClose;
  inPhieu: PhieuYeuCauMuaVatTu = new PhieuYeuCauMuaVatTu();
  validationErrors: any[];
  src: string = "";
  dataHTML: string = "";
  constructor(
    private dialogRef: MatDialogRef<PhieuMuaKSNKComponent>,
    private apiService: ApiService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.xemPhieuVatTu();
  }

  xemPhieuVatTuVaDuocPham() {
    const self = this;
    self.validationErrors = [];
    self.ref.detectChanges();

    self.inPhieu.DuTruMuaVatTuId = self.data.Id;
    self.inPhieu.DuTruMuaDuocPhamId = self.data.Id;
    self.inPhieu.Header = true;

    self.apiService.post<any>('YeuCauMuaKSNK/InPhieuMuaDuTruVatTuVaDuocPhamKSNK', self.inPhieu).subscribe(
      resData => {
        if (resData) {
          self.inPhieu.Header = false;
          self.dataHTML = resData;
          self.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(resData);
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message !== 'Validation Failed') {
          self.notificationService.showError(err.Message);
        }
      }
    );
  }

  xemPhieuVatTu() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    self.inPhieu.DuTruMuaVatTuId = self.data.Id;
    self.inPhieu.Header = false;
    self.apiService.post<any>("YeuCauMuaKSNK/InPhieuMuaDuTruKSNK", self.inPhieu).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.inPhieu.Header = false;
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

  xemPhieuDuocPham() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    self.inPhieu.DuTruMuaDuocPhamId = self.data.Id;
    self.inPhieu.Header = false;
    self.apiService.post<any>("YeuCauMuaKSNK/InPhieuMuaDuTruDuocPhamKSNK", self.inPhieu).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.inPhieu.Header = false;
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
      "<th>PHIẾU DỰ TRÙ KIỄM SOÁT NHIỄM KHUẨN</th>" +
      "</p>", "");
    return new Promise(resolve => {
      resolve(template);
      //this.close();
    });
  }

  close() {
    this.dialogRef.close();
  }
}
