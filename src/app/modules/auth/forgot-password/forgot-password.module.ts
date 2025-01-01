import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordRoutingModule } from "./forgot-password-routing.module";
import { ForgotPasswordComponent } from './forgot-password.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatInputModule, MatCheckboxModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { IconModule } from '@visurel/iconify-angular';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatIconModule } from '@angular/material'

@NgModule({
    imports: [
        CommonModule,
        ForgotPasswordRoutingModule,
        SharedModule,
        FormsModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        FlexLayoutModule,
        MatButtonModule,
        ReactiveFormsModule
        // MatIconModule,
        // MatSnackBarModule,
        // IconModule,
        // MatTooltipModule,
    ],
    declarations: [
        ForgotPasswordComponent
    ]
})

export class  ForgotPasswordModule { }