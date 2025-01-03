import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChuyenPhongRoutingModule } from './chuyen-phong-routing.module';
import { ChuyenPhongComponent } from './chuyen-phong/chuyen-phong.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IconModule } from '@visurel/iconify-angular';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule, MatDialogModule } from '@angular/material';

@NgModule({
  // declarations: [ChuyenPhongComponent],
  imports: [
    CommonModule,
    ChuyenPhongRoutingModule,
    FormsModule,
    SharedModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    IconModule,
    MatTooltipModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class ChuyenPhongModule { }
