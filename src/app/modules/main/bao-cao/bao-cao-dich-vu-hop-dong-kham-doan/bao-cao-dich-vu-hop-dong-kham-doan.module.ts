import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaoCaoDichVuHopDongKhamDoanRoutingModule } from './bao-cao-dich-vu-hop-dong-kham-doan-routing.module';
import { BaoCaoDichVuHopDongKhamDoanNhanVienListComponent } from './bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component';
import { BaoCaoDichVuHopDongKhamDoanHopDongListComponent } from './bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component';


import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { GridModule } from '@progress/kendo-angular-grid';
import { DieuTriNoiTruModule } from '../../dieu-tri-noi-tru/dieu-tri-noi-tru.module';

@NgModule({
  declarations: [
    BaoCaoDichVuHopDongKhamDoanNhanVienListComponent,
    BaoCaoDichVuHopDongKhamDoanHopDongListComponent,
  ],
  imports: [
    CommonModule,
    BaoCaoDichVuHopDongKhamDoanRoutingModule,
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
    GridModule,
    DieuTriNoiTruModule
  ],
  entryComponents: [
    BaoCaoDichVuHopDongKhamDoanNhanVienListComponent
  ]
})
export class BaoCaoDichVuHopDongKhamDoanModule { }
