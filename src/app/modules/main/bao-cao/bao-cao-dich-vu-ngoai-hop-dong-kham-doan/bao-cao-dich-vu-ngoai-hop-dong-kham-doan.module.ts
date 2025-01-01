import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaoCaoDichVuNgoaiHopDongKhamDoanRoutingModule } from './bao-cao-dich-vu-ngoai-hop-dong-kham-doan-routing.module';
import { BaoCaoDichVuNgoaiHopDongKhamDoanListComponent } from './bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component';

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

@NgModule({
  declarations: [BaoCaoDichVuNgoaiHopDongKhamDoanListComponent],
  imports: [
    CommonModule,
    BaoCaoDichVuNgoaiHopDongKhamDoanRoutingModule,
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
  ]
})
export class BaoCaoDichVuNgoaiHopDongKhamDoanModule { }
