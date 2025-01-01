import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PhieuYeuCauMuaVatTu } from '../yeu-cau-mua-vat-tu.model';
@Component({
  selector: 'app-phieu-mua-vat-tu',
  templateUrl: './phieu-mua-vat-tu.component.html',
  styleUrls: ['./phieu-mua-vat-tu.component.scss']
})
export class PhieuMuaVatTuComponent implements OnInit {
  icClose = icClose;
  inPhieuVatTu: PhieuYeuCauMuaVatTu = new PhieuYeuCauMuaVatTu();
  validationErrors: any[];
  src: string = "";
  dataHTML: string = "";
  constructor(
    private dialogRef: MatDialogRef<PhieuMuaVatTuComponent>,
    private apiService: ApiService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.xem();
  }
  
  xem() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    self.inPhieuVatTu.DuTruMuaVatTuId = self.data.Id;
    self.inPhieuVatTu.Header = false;
    self.apiService.post<any>("YeuCauMuaVatTu/InPhieuMuaDuTruVatTu", self.inPhieuVatTu).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.inPhieuVatTu.Header = false;
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
      "<th>PHIẾU DỰ TRÙ VẬT TƯ</th>" +
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
