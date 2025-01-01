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

import {  NhomDichVuKyThuatService } from './nhom-dich-vu-ky-thuat.service';
import {  NhomDichVuKyThuatRoutingModule } from './nhom-dich-vu-ky-thuat-routing.module';

import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { NhomDichVuKyThuatListComponent } from './nhom-dich-vu-ky-thuat-list/nhom-dich-vu-ky-thuat-list.component';




@NgModule({
  declarations: [NhomDichVuKyThuatListComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    TreeViewModule,
    NhomDichVuKyThuatRoutingModule
  ],
  providers: [
    NhomDichVuKyThuatService,
    { provide: BaseService, useClass: NhomDichVuKyThuatService },
]
})
export class NhomDichVuKyThuatModule { }
