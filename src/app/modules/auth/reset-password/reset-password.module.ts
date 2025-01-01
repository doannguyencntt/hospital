import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { ResetPasswordRoutingModule } from "./reset-password-routing.module";
import { ResetPasswordComponent } from './reset-password.component';

import { MatInputModule, MatCheckboxModule, MatSelectModule, MatButtonModule, MatIconModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ResetPasswordRoutingModule,
        FormsModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,        
        IconModule,
        // MatSnackBarModule,
        ReactiveFormsModule  
    ],
    declarations: [
        ResetPasswordComponent
    ]
})

export class  ResetPasswordModule { }