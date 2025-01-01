import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyTaiKhoanRoutingModule } from './quan-ly-tai-khoan-routing.module';
import { QuanLyTaiKhoanListComponent } from './quan-ly-tai-khoan-list/quan-ly-tai-khoan-list.component';
import { QuanLyTaiKhoanCreateComponent } from './quan-ly-tai-khoan-create/quan-ly-tai-khoan-create.component';
import { PopupChangePasswordComponent } from './popup-change-password/popup-change-password.component';
import { PopupChangeRoleComponent } from './popup-change-role/popup-change-role.component';
import { PopupActiveComponent } from './popup-active/popup-active.component';
import { PopupRemoveComponent } from './popup-remove/popup-remove.component';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatTabsModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { QuanLyTaiKhoanService } from './quan-ly-tai-khoan.service';
import { BaseService } from 'src/app/core/services/base.service';
import { PopupTimNhanVienComponent } from './popup-tim-nhan-vien/popup-tim-nhan-vien.component';


@NgModule({
  declarations: [QuanLyTaiKhoanListComponent, QuanLyTaiKhoanCreateComponent
    , PopupChangePasswordComponent, PopupChangeRoleComponent
    , PopupActiveComponent, PopupRemoveComponent, PopupTimNhanVienComponent],
  imports: [
    CommonModule,
    QuanLyTaiKhoanRoutingModule,
    FormsModule,
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
    LayoutModule,
    MatDialogModule,
    MatTabsModule,
    SharedModule,
    GridModule,
  ],
  providers: [
    QuanLyTaiKhoanService,
    { provide: BaseService, useClass: QuanLyTaiKhoanService },
  ],
  entryComponents: [
    PopupChangePasswordComponent,
    PopupChangeRoleComponent,
    PopupActiveComponent,
    PopupRemoveComponent,
    PopupTimNhanVienComponent
],
})
export class QuanLyTaiKhoanModule { }
