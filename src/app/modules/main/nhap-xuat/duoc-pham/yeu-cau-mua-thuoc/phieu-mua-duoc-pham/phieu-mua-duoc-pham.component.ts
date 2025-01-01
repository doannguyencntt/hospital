import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuYeuCauMuaThuoc } from '../yeu-cau-mua-thuoc.model';
import { NotificationService } from 'src/app/core/services/notification.service';
@Component({
  selector: 'app-phieu-mua-duoc-pham',
  templateUrl: './phieu-mua-duoc-pham.component.html',
  styleUrls: ['./phieu-mua-duoc-pham.component.scss']
})
export class PhieuMuaDuocPhamComponent implements OnInit {
  icClose = icClose;
  inPhieuDuocPham: PhieuYeuCauMuaThuoc = new PhieuYeuCauMuaThuoc();
  validationErrors: any[];
  src: string = "";
  dataHTML: string = "";
  constructor(
    private dialogRef: MatDialogRef<PhieuMuaDuocPhamComponent>,
    private apiService: ApiService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    //console.log(this.data)
    this.xem();
  }

  xem() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    self.inPhieuDuocPham.DuTruMuaDuocPhamId = self.data.Id;
    self.inPhieuDuocPham.Header = false;
    self.apiService.post<any>("YeuCauMuaDuocPham/InPhieuDuTruMuaDuocPham", self.inPhieuDuocPham).subscribe(
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
    if (this.data.Loai == 1) {
      var template = this.dataHTML.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
        "<th>PHIẾU DỰ TRÙ THUỐC, VẮC XIN</th>" +
        "</p>", "");
    } else {
      var template = this.dataHTML.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
        "<th>PHIẾU DỰ TRÙ HÓA CHẤT, HÓA CHẤT XÉT NGHIỆM</th>" +
        "</p>", "");
    }
    return new Promise(resolve => {
      resolve(template);
      //this.close();
    });
  }

  close() {
    this.dialogRef.close();
  }
}
