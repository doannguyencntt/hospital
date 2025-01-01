import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { VatTuYTeTaiBenhVienSharedComponent } from '../vat-tu-y-te-tai-benh-vien-shared/vat-tu-y-te-tai-benh-vien-shared.component';
import { Location } from '@angular/common';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-vat-tu-y-te-tai-benh-vien-create',
  templateUrl: './vat-tu-y-te-tai-benh-vien-create.component.html',
  styleUrls: ['./vat-tu-y-te-tai-benh-vien-create.component.scss']
})
export class VatTuYTeTaiBenhVienCreateComponent implements OnInit {

  loading: boolean = false;
  confirm: any = null;
  documentType: DocumentType = DocumentType.DanhMucVatTuYTeTaiBenhVien;

  constructor(private router: Router,
    private location: Location, 
    private notificationService: NotificationService, 
    private authService: AuthService,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef,
    private apiService: ApiService) { }
  validationErrors: any;
  @ViewChild(VatTuYTeTaiBenhVienSharedComponent, { static: true }) shared;
  ngOnInit() {
  }
  onCreated(){ 
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/vat-tu-y-te-tai-benh-vien']);

  }

  create() {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      self.shared.validationErrors = null;
      self.ref.detectChanges();
      if (self.confirm != null) {
        self.dialog.closeAll();
        self.confirm = null;
      }
      self.confirm = self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["thêm"]) }
      }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
          self.xuLyKiemTraTrungVatTu();
        }
      });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyKiemTraTrungVatTu() {
    var self = this;
    self.loading = true;
    if (self.shared.validationErrors != null && self.shared.validationErrors.some(x => x)) {
      self.loading = false;
      return;
    }
    self.apiService.post("VatTuBenhVien/KiemTraTrungVatTuBenhVien", self.shared.getSharedData()).subscribe(resultData => {
      if (resultData) {
        self.confirm = self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: "Vật tư này đã được thêm trước đó, bạn có muốn thêm mới?" }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
          if (result == "Yes") {
            self.xuLyThemVatTu();
          }
          else
          {
            self.loading = false;
          }
        });
      }
      else {
        self.xuLyThemVatTu();
      }
    },
      (err: ApiError) => {
        self.shared.validationErrors = err.ValidationErrors;
        self.loading = false;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }

  xuLyThemVatTu() {
    var self = this;
    self.loading = true;
    if (self.shared.validationErrors != null && self.shared.validationErrors.some(x => x)) {
      self.loading = false;
      return;
    }
    self.apiService.post<any>("VatTuBenhVien", self.shared.getSharedData()).subscribe(resultData => {
      self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
      self.loading = false;
      self.cancel();
    },
      (err: ApiError) => {
        self.shared.validationErrors = err.ValidationErrors;
        self.loading = false;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }

  cancel() {
      this.location.back();
  }
}
