import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';

import {  DuocPhamBenhVienService } from './duoc-pham-benh-vien.service';
import {  DuocPhamBenhVienRoutingModule } from './duoc-pham-benh-vien-routing.module';

import { DuocPhamBenhVienListComponent } from './duoc-pham-benh-vien-list/duoc-pham-benh-vien-list.component';
import { DuocPhamBenhVienCreateComponent } from './duoc-pham-benh-vien-create/duoc-pham-benh-vien-create.component';
import { DuocPhamBenhVienSharedComponent } from './duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component';
import { DuocPhamBenhVienUpdateComponent } from './duoc-pham-benh-vien-update/duoc-pham-benh-vien-update.component';



@NgModule({
  declarations: [DuocPhamBenhVienListComponent, DuocPhamBenhVienCreateComponent, DuocPhamBenhVienSharedComponent, DuocPhamBenhVienUpdateComponent],
  imports: [
    CommonModule,
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
    DuocPhamBenhVienRoutingModule
  ],
  providers: [
    DuocPhamBenhVienService,
    { provide: BaseService, useClass: DuocPhamBenhVienService },
]
})
export class DuocPhamBenhVienModule { }
