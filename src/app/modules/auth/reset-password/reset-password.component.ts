import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { MatDialog } from "@angular/material";

import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiService } from 'src/app/core/services/api.service';

import { ApiError } from 'src/app/shared/models/api-error.model';
import { ForgotPassword, EnumForgetPasswordStage } from 'src/app/shared/models/forgot-password.model';

import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        fadeInUp400ms
    ]
})

export class ResetPasswordComponent implements OnInit {
    request = {} as ForgotPassword;
    loading: boolean = false;
    validationErrors: any[] = [];

    isAnnouncement: boolean = null;

    constructor(private router: Router, private route: ActivatedRoute, private cdRef: ChangeDetectorRef, private dialog: MatDialog,
                private notificationService: NotificationService, private apiService: ApiService) { }

    ngOnInit() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải...' }
        });

        if(this.route.snapshot.params.email !== undefined && this.route.snapshot.params.email !== null) {
            this.request.Email = this.route.snapshot.params.email;
        }

        if(this.route.snapshot.params.code !== undefined && this.route.snapshot.params.code !== null) {
            this.request.Base64Data = this.route.snapshot.params.code;
        }

        this.request.ForgotPasswordStage = EnumForgetPasswordStage.IsVerify;

        this.apiService.post<any>("Auth/VerifyPassCodeForForgottenPassword", this.request).subscribe(res => {
            this.isAnnouncement = !res;
            this.cdRef.detectChanges();
            this.dialog.closeAll();
        }, err => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
            this.router.navigate(['/dang-nhap']);
        })
    }

    // On submit click, reset form fields
    onSubmit() {
        this.loading = true;
        this.request.ForgotPasswordStage = EnumForgetPasswordStage.IsReset;

        this.apiService.post<any>("Auth/ResetPassword", this.request).subscribe(res => {
            if(res == true) {
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thay đổi mật khẩu"]));
                this.router.navigate(['/dang-nhap']);
            } else {
                this.isAnnouncement = !res;
                this.loading = false;
                this.cdRef.detectChanges();
            }
        }, (err: ApiError) => {
            err.ValidationErrors === null ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            this.loading = false;
            this.cdRef.detectChanges();
        })
    }
}
