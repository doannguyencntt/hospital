import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { DanhSachDuocPhamCanBuRoutingModule } from './danh-sach-duoc-pham-can-bu-routing.module';
import { DanhSachDuocPhamCanBuComponent } from '../danh-sach-duoc-pham-can-bu/danh-sach-duoc-pham-can-bu.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';


@NgModule({
  declarations: [
    DanhSachDuocPhamCanBuComponent
  ],
  imports: [
    CommonModule,
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    SharedModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,
    DanhSachDuocPhamCanBuRoutingModule
  ],
  entryComponents: [
    ConfirmComponent
  ]
})
export class DanhSachDuocPhamCanBuModule { }
