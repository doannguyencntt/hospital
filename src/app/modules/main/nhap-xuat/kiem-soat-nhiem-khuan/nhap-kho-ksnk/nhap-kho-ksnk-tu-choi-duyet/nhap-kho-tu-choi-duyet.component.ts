import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/app/core/error/error.service';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NhapKhoMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { NhapKhoVatTu } from 'src/app/modules/main/ke-toan/duyet-nhap-kho-vat-tu/duyet-nhap-kho.model';
import { NhapKhoKSNKShareComponent } from '../nhap-kho-ksnk-share/nhap-kho-ksnk-share.component';


@Component({
  selector: 'app-nhap-kho-tu-choi-duyet',
  templateUrl: './nhap-kho-tu-choi-duyet.component.html',
  styleUrls: ['./nhap-kho-tu-choi-duyet.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class NhapKhoKSNKTuChoiDuyetComponent implements OnInit {
  nhapKhoVatTu: NhapKhoVatTu = new NhapKhoVatTu();
  documentType: DocumentType;
  showToastNotifyError: boolean = false;
  loading: boolean = false;
  id: number;

  @ViewChild(NhapKhoKSNKShareComponent, { static: true }) shared;

  constructor(private router: Router, private route: ActivatedRoute, private baseService: BaseService
    , private apiService: ApiService, private authService: AuthService
    ,  private dialog: MatDialog, private notificationService: NotificationService
    , private errorService: ErrorService) { }

  ngOnInit() {
    this.documentType = DocumentType.NhapVatTuThuocNhomKSNK;
    this.id = this.route.snapshot.params.id;
  }

  huy() {
    this.router.navigateByUrl('nhap-xuat/ksnk/nhap-kho?holdQuery=true');
  }

  luu() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update))
    {
      var self = this;
      self.shared.validationErrors = null;
      self.loading = true;
      self.nhapKhoVatTu = self.shared.getSharedData();
      self.apiService.post<any>("NhapKhoVatTuKSNK/CapNhatYeuCauNhapKhoVatTu", self.nhapKhoVatTu).subscribe(
        resultData => {
          //self.router.navigate(['nhap-xuat/vat-tu-ksnk/nhap-kho']);
          self.router.navigateByUrl('nhap-xuat/ksnk/nhap-kho?holdQuery=true');
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
          self.loading = false;
        },
        (err: ApiError) => {
          self.shared.validationErrors = err.ValidationErrors;
          if (self.showToastNotifyError == true) {
            var mess = self.errorService.getValidationErrors(err);
            if (mess != null) {
              self.notificationService.showError(mess);
            }
          }
          self.loading = false;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
        });
    }
  }

  luuVaDuyetLai() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update))
    {
      var self = this;
      self.shared.validationErrors = null;
      self.loading = true;
      self.nhapKhoVatTu = self.shared.getSharedData();
      self.apiService.post<any>("NhapKhoVatTuKSNK/CapNhatYeuCauNhapKhoVatTu", self.nhapKhoVatTu).subscribe(
        resultData => {
          // self.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
          // self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
          // self.loading = false;
          self.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: NhapKhoMessage.MessageLuuVaGoiDuyet }
          }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result == "Yes") {

              self.apiService.post<any>("NhapKhoVatTuKSNK/GoiDuyetLai?id=" + self.id).subscribe(result => {
                  //self.router.navigate(['nhap-xuat/vat-tu-ksnk/nhap-kho']);
                  self.router.navigateByUrl('nhap-xuat/ksnk/nhap-kho?holdQuery=true');
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu và gửi duyệt lại"]));
                }, (err: ApiError) => {
                self.shared.validationErrors = err.ValidationErrors;
                if (self.showToastNotifyError == true) {
                  var mess = self.errorService.getValidationErrors(err);
                  if (mess != null) {
                    self.notificationService.showError(mess);
                  }
                }
                self.loading = false;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
              });
              //self.router.navigate(['tiep-nhan-trong-ngay/']);
              //self.router.navigateByUrl('danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/' + this.idYeuCauTiepNhan + "?loaiThanhToan=" + 1 + "&yctn=true");
            }
            else {
              //self.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
              //self.ngOnInit();
            }
          });
        },
        (err: ApiError) => {
          self.shared.validationErrors = err.ValidationErrors;
          if (self.showToastNotifyError == true) {
            var mess = self.errorService.getValidationErrors(err);
            if (mess != null) {
              self.notificationService.showError(mess);
            }
          }
          self.loading = false;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
        });


    }
  }
}
