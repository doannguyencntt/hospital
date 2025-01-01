import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';

import { ApiError } from 'src/app/shared/models/api-error.model';
import { EnumForgetPasswordStage, ForgotPassword } from 'src/app/shared/models/forgot-password.model';

import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        fadeInUp400ms
    ]
})

export class ForgotPasswordComponent implements OnInit {
    request: ForgotPassword = {
        UserName: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
        Base64Data: '',
        Domain: window.location.origin,
        ForgotPasswordStage: EnumForgetPasswordStage.IsForget
    };

    loading: boolean = false;
    validationErrors: any[] = [];
    email: string;

    isAnnouncement: boolean = false;

    constructor(private cdRef: ChangeDetectorRef, private notificationService: NotificationService, private apiService: ApiService) { }

    ngOnInit() {
    }

    onSubmit() {
        this.loading = true;
        this.validationErrors = [];

        this.apiService.post<any>("Auth/ForgetPassword", this.request).subscribe(res => {
            this.loading = false;
            this.isAnnouncement = true;
            this.cdRef.detectChanges();
        }, (err: ApiError) => {
            err.ValidationErrors === null ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;            
            this.loading = false;
            this.cdRef.detectChanges();
        });
    }
}
