import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhMucChuanDoanRoutingModule } from './danh-muc-chuan-doan-routing.module';
import { DanhMucChuanDoanListComponent } from './danh-muc-chuan-doan-list/danh-muc-chuan-doan-list.component';
import { DanhMucChuanDoanCreateComponent } from './danh-muc-chuan-doan-create/danh-muc-chuan-doan-create.component';
import { DanhMucChuanDoanUpdateComponent } from './danh-muc-chuan-doan-update/danh-muc-chuan-doan-update.component';
import { DanhMucChuanDoanSharedComponent } from './danh-muc-chuan-doan-shared/danh-muc-chuan-doan-shared.component';

import { BaseService } from 'src/app/core/services/base.service';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { DanhMucChuanDoanService } from './danh-muc-chuan-doan.service';

@NgModule({
  declarations: [
    DanhMucChuanDoanListComponent, 
    DanhMucChuanDoanCreateComponent, 
    DanhMucChuanDoanUpdateComponent, 
    DanhMucChuanDoanSharedComponent],
  imports: [
    CommonModule,
    DanhMucChuanDoanRoutingModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  providers: [
    DanhMucChuanDoanService,
    { provide: BaseService, useClass: DanhMucChuanDoanService },
  ]
})
export class DanhMucChuanDoanModule { }
