import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PhieuInDuTruMuaTaiKhoa } from '../tong-hop-du-tru-mua-thuoc-tai-khoa.model';
@Component({
  selector: 'app-phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet',
  templateUrl: './phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html',
  styleUrls: ['./phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss']
})
export class PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent implements OnInit {
  icClose = icClose;
  inPhieuDuocPhamTaiKhoaTaiKhoa: PhieuInDuTruMuaTaiKhoa = new PhieuInDuTruMuaTaiKhoa();
  validationErrors: any[];
  src: string = "";
  dataHTML: string = "";
  constructor(
    private dialogRef: MatDialogRef<PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent>,
    private apiService: ApiService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    console.log(this.data)
    this.xem();
  }

  xem() {
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    self.inPhieuDuocPhamTaiKhoaTaiKhoa.DuTruMuaDuocPhamTheoKhoaId = self.data.Id;
    self.inPhieuDuocPhamTaiKhoaTaiKhoa.Header = false;
    self.apiService.post<any>("YeuCauMuaDuocPham/InPhieuDuTruMuaTaiKhoa", self.inPhieuDuocPhamTaiKhoaTaiKhoa).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.inPhieuDuocPhamTaiKhoaTaiKhoa.Header = false;
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
    return new Promise(resolve => {
      resolve(this.dataHTML);
      this.close();
    });
  }

  close() {
    this.dialogRef.close();
  }
}
