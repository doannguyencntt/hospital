import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { ErrorService } from 'src/app/core/error/error.service';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { MarketingSharedComponent } from '../marketing-shared/marketing-shared.component';

@Component({
  selector: 'app-marketing-create',
  templateUrl: './marketing-create.component.html',
  styleUrls: ['./marketing-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class MarketingCreateComponent implements OnInit {

    loading: boolean = false;
    confirm: any = null;

  @ViewChild(MarketingSharedComponent, { static: true }) shared;

  constructor(private route: ActivatedRoute, private router: Router, private baseService: BaseService, private ref: ChangeDetectorRef, private notificationService: NotificationService, private authService: AuthService,
    private errorService: ErrorService, private dialog: MatDialog,
    private apiService: ApiService) { }

  ngOnInit() {
  }

  onCreated(){
    //this.router.navigate(['marketing/dang-ky-goi-marketing/']);
    this.router.navigateByUrl('marketing/dang-ky-goi-marketing?holdQuery=true');
  }

  cancel(){
    this.onCreated();
  }
  
    // BVHD-3481
    //================================================================================================
    xuLyKiemTraDangKyGoiMarketing() {
        var data = this.shared.getSharedData();
        if (data.BenhNhanId == null || data.BenhNhanId == 0) {
            this.shared.validationErrors = null;
            this.ref.detectChanges();
            if (this.confirm != null) {
                this.dialog.closeAll();
                this.confirm = null;
            }
            this.apiService.post<any>("DanhMucMarketing/KiemTraBenhNhanTrongHeThong", data).subscribe(result => {
                if (result != null) {
                    this.dialog.open(ConfirmComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: result.Message }
                    }).afterClosed().subscribe(result => {
                        if (result == "Yes") {
                            this.xuLyLuuDangKyGoiMarketing();
                        }
                    });
                }
                else {
                    this.xuLyLuuDangKyGoiMarketing();
                }
            },
                (err: ApiError) => {
                    this.shared.validationErrors = err.ValidationErrors;
                    this.loading = false;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
        }
        else {
            this.xuLyLuuDangKyGoiMarketing();
        }
    }

    xuLyLuuDangKyGoiMarketing() {
        var self = this;
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
                self.loading = true;
                if (self.shared.validationErrors != null && self.shared.validationErrors.some(x => x)) {
                    self.loading = false;
                    return;
                }
                self.apiService.post<any>("DanhMucMarketing", self.shared.getSharedData()).subscribe(resultData => {
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
        });
    }
  //================================================================================================
}
