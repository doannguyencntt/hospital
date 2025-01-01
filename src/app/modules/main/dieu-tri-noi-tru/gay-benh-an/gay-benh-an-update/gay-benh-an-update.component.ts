import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router } from '@angular/router';
import { GayBenhAnSharedComponent } from '../gay-benh-an-shared/gay-benh-an-shared.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GayBenhAn } from '../gay-benh-an.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
@Component({
  selector: 'app-gay-benh-an-update',
  templateUrl: './gay-benh-an-update.component.html',
  styleUrls: ['./gay-benh-an-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class GayBenhAnUpdateComponent implements OnInit {
  @ViewChild(GayBenhAnSharedComponent, { static: true }) shared: any;
  gayBenhAn: GayBenhAn = new GayBenhAn();
  documentType: DocumentType = DocumentType.DanhMucGayBenhAn;
  popupLoadingData: any;
  validationErrors: any;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef,
    private router: Router,) { }
  ngOnInit() {
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  Luu() {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu dữ liệu này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.gayBenhAn = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.loadingPage();
          self.apiService.post<any>("BenhAnDienTu/CapNhatGayBenhAn", self.gayBenhAn).subscribe(
            () => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
              self.closePopupLoadingData();
              this.router.navigate(['/benh-an-dien-tu/gay-benh-an']);
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupLoadingData();
            }
          );
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })
  }
  cancel() {
    this.router.navigate(['/benh-an-dien-tu/gay-benh-an']);
  }

}
