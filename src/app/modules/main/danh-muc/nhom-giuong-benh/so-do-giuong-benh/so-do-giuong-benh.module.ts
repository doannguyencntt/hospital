import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoDoGiuongBenhRoutingModule } from './so-do-giuong-benh-routing.module';
import { QuanLyGiuongBenhComponent } from './quan-ly-giuong-benh/quan-ly-giuong-benh.component';
import { SoDoGiuongPopupComponent } from './so-do-giuong-popup/so-do-giuong-popup.component';
import { QuanLyGiuongBenhKhoaComponent } from './quan-ly-giuong-benh-khoa/quan-ly-giuong-benh-khoa.component';
import { QuanLyGiuongBenhPhongComponent } from './quan-ly-giuong-benh-phong/quan-ly-giuong-benh-phong.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatTabsModule, MatCheckboxModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { SoDoGiuongBenhService } from './so-do-giuong-benh.service';
import { BaseService } from 'src/app/core/services/base.service';


@NgModule({
  declarations: [QuanLyGiuongBenhComponent, SoDoGiuongPopupComponent
    , QuanLyGiuongBenhKhoaComponent, QuanLyGiuongBenhPhongComponent],
  imports: [
    CommonModule,
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
    SoDoGiuongBenhRoutingModule,
    LayoutModule,
    MatDialogModule,
    MatTabsModule,
    SharedModule,
    GridModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [
    SoDoGiuongBenhService,
    { provide: BaseService, useClass: SoDoGiuongBenhService },
  ],
  entryComponents: [
    SoDoGiuongPopupComponent
],
})
export class SoDoGiuongBenhModule { }
