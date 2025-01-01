import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/core/error/error.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DuocPhamBenhVienSharedComponent } from '../duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component';
import { Location } from '@angular/common';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiService } from 'src/app/core/services/api.service';


@Component({
  selector: 'app-duoc-pham-benh-vien-create',
  templateUrl: './duoc-pham-benh-vien-create.component.html',
  styleUrls: ['./duoc-pham-benh-vien-create.component.scss']
})
export class DuocPhamBenhVienCreateComponent implements OnInit {
  @ViewChild(DuocPhamBenhVienSharedComponent, { static: true }) shared;
  
  loading: boolean = false;
  confirm: any = null;
  documentType: DocumentType = DocumentType.DanhMucDuocPhamBenhVien;

  constructor(private router: Router,
    private location: Location, 
    private notificationService: NotificationService, 
    private authService: AuthService,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef,
    private apiService: ApiService) { }
  ngOnInit() {
  }
  
  onCreated() {
    this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien"], { queryParams: { holdQuery: true } });
  }
    
  create() {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
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
          self.xuLyKiemTraTrungDuocPham();
        }
      });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyKiemTraTrungDuocPham() {
    var self = this;
    self.loading = true;
    if (self.shared.validationErrors != null && self.shared.validationErrors.some(x => x)) {
      self.loading = false;
      return;
    }
    self.apiService.post("DuocPhamBenhVien/KiemTraTrungDuocPhamBenhVien", self.shared.getSharedData()).subscribe(resultData => {
      if (resultData) {
        self.confirm = self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: "Dược phẩm này đã được thêm trước đó, bạn có muốn thêm mới?" }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
          if (result == "Yes") {
            self.xuLyThemDuocPham();
          }
          else
          {
            self.loading = false;
          }
        });
      }
      else {
        self.xuLyThemDuocPham();
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

  xuLyThemDuocPham() {
    var self = this;
    self.loading = true;
    if (self.shared.validationErrors != null && self.shared.validationErrors.some(x => x)) {
      self.loading = false;
      return;
    }
    self.apiService.post<any>("DuocPhamBenhVien", self.shared.getSharedData()).subscribe(resultData => {
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
