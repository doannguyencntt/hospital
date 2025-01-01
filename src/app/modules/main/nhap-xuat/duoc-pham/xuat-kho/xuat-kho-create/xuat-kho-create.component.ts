import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { XuatKhoSharedComponent } from '../xuat-kho-shared/xuat-kho-shared.component';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MatDialog } from '@angular/material';
import { ErrorService } from 'src/app/core/error/error.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { XuatKhoInPhieuPopupComponent } from '../xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component';

@Component({
  selector: 'app-xuat-kho-create',
  templateUrl: './xuat-kho-create.component.html',
  styleUrls: ['./xuat-kho-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class XuatKhoCreateComponent implements OnInit {

  loading: boolean = false;

  IsXuatKhac: boolean = false;

  @ViewChild(XuatKhoSharedComponent, { static: true }) shared;

  constructor(private route: ActivatedRoute, private router: Router, private baseService: BaseService, private ref: ChangeDetectorRef, private notificationService: NotificationService, private authService: AuthService,
    private errorService: ErrorService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onCreated(){
    this.router.navigate(['nhap-xuat/duoc-pham/xuat-kho/']);

  }

  cancel(){
    this.onCreated();
  }

  create(){
    var self = this;
    self.shared.validationErrors = null;
    self.ref.detectChanges();

    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["thêm"]) }
    }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
      if (result == "Yes") {
        self.loading = true;
        if (self.shared.validationErrors != null && self.shared.validationErrors.some(x => x)) {
          self.loading = false;
          return;
        }
        self.baseService.create(self.shared.getSharedData()).subscribe(resultData => {
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
          self.loading = false;
          //self.onCreated();
          if(resultData == null || resultData == undefined){
            self.onCreated();
          }
          else{
            self.dialog.open(XuatKhoInPhieuPopupComponent, {
              disableClose: false,
              width: '1200px',
              data: resultData,
            }).afterClosed().subscribe(result => {
              self.onCreated();
            });
          }

        },
          (err: ApiError) => {
            //console.log("err = ", err);
            self.loading = false;
            if(err != null && err != undefined && err.ValidationErrors != null){
              self.shared.validationErrors = err.ValidationErrors;
            }
            else{
              self.notificationService.showError(err.Message);
            }
          });
      }
    });
    
  }
}
