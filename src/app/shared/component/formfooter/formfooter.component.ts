import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';

import { CommonService } from '../../../core/utilities/common.helper';
import { ErrorService } from 'src/app/core/error/error.service';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';

@Component({
  selector: 'app-formfooter',
  templateUrl: './formfooter.component.html',
  styleUrls: ['./formfooter.component.scss']
})
export class FormfooterComponent implements OnInit {

  loading: boolean = false;
  confirm: any = null;

  @Input() buttonAccessText: string = "Lưu";

  @Input() popup: any = null;
  @Input() type: string = "create";
  @Input() read: boolean = false;
  @Input() bodyComponent: any;
  @Input() documentType: DocumentType;
  @Input() baseRoute: string;
  @Input() noneId: boolean = false;
  @Input() closePageLocationBack: boolean = false;

  @Output() created = new EventEmitter<any>();
  @Output() updated = new EventEmitter<any>();
  @Output() canceled = new EventEmitter<any>();

  @Output() validateClient: EventEmitter<any> = new EventEmitter<any>();
  @Input() idCustomize: number = null;
  @Input() showToastNotifyError: boolean = false;

  @Input() hiddenUpdateButton: boolean = false;


  constructor(private route: ActivatedRoute, private router: Router, private baseService: BaseService, private ref: ChangeDetectorRef,
    private location: Location, private notificationService: NotificationService, private authService: AuthService,
    private errorService: ErrorService, private dialog: MatDialog) { }

  ngOnInit() { }

  create() {
    var self = this;
    self.bodyComponent.validationErrors = null;
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
        self.loading = true;
        self.validateClient.emit(true);
        if (self.bodyComponent.validationErrors != null && self.bodyComponent.validationErrors.some(x => x)) {
          self.loading = false;
          return;
        }
        self.baseService.create(self.bodyComponent.getSharedData()).subscribe(resultData => {
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
          self.loading = false;
          self.created.emit(resultData);
        },
          (err: ApiError) => {
            self.bodyComponent.validationErrors = err.ValidationErrors;
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
    });
    // bootbox.confirm(
    //   {
    //     size: "small",
    //     message: CommonService.format(SystemMessage.MessConfirm, ["thêm"]),
    //     buttons: {
    //       confirm: {
    //           label: 'Có',
    //           className: 'btn-primary'
    //       },
    //       cancel: {
    //           label: 'Không',
    //           className: 'btn-default'
    //       }
    //     },
    //     callback: function (result) {
    //       if (result) {
    //       }
    //     }
    //   }).find('.modal-content').css({
    // });
  }

  update() {
    var self = this;
    self.bodyComponent.validationErrors = null;
    self.ref.detectChanges();
    if (self.confirm != null) {
      self.dialog.closeAll();
      self.confirm = null;
    }
    self.confirm = self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
    }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
      if (result == "Yes") {
        self.loading = true;
        self.validateClient.emit(true);

        if (self.bodyComponent.validationErrors != null && self.bodyComponent.validationErrors.some(x => x)) {
          self.loading = false;
          return;
        }

        self.baseService.update(self.bodyComponent.getSharedData()).subscribe(resultData => {
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
          self.loading = false;
          self.updated.emit(resultData);
        },
          (err: ApiError) => {
            self.bodyComponent.validationErrors = err.ValidationErrors;
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
    });

    // bootbox.confirm(
    //   {
    //     size: "small",
    //     message: CommonService.format(SystemMessage.MessConfirm, ["cập nhật"]),
    //     buttons: {
    //       confirm: {
    //           label: 'Có',
    //           className: 'btn-primary'
    //       },
    //       cancel: {
    //           label: 'Không',
    //           className: 'btn-default'
    //       }
    //     },
    //     callback: function (result) {
    //       if (result) {

    //       }
    //     }
    //   }).find('.modal-content').css({
    // });
  }
  showUpdate() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      const id: number = this.idCustomize != null ? this.idCustomize : this.route.snapshot.params.id;
      if (id !== undefined && id !== null) {
        this.router.navigate([this.baseRoute + "/cap-nhat/" + id]);
      }
      if (this.noneId) {
        this.router.navigate([this.baseRoute + "/cap-nhat"]);
      }
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  cancel() {
    if (this.idCustomize == null) {
      if (!this.closePageLocationBack) {
        this.location.back();
      }     
      this.canceled.emit();
    }
  }
}
