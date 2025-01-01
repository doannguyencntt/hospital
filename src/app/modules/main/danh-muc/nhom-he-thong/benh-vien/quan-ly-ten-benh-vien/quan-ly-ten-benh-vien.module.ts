import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { BaseService } from 'src/app/core/services/base.service';
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

import { QuanLyTenBenhVienService } from './quan-ly-ten-benh-vien.service';
import { QuanLyTenBenhVienRoutingModule } from './quan-ly-ten-benh-vien-routing.module';
import { QuanLyTenBenhVienListComponent } from './quan-ly-ten-benh-vien-list/quan-ly-ten-benh-vien-list.component';
import { QuanLyTenBenhVienShareComponent } from './quan-ly-ten-benh-vien-share/quan-ly-ten-benh-vien-share.component';
import { QuanLyTenBenhVienCreateComponent } from './quan-ly-ten-benh-vien-create/quan-ly-ten-benh-vien-create.component';
import { QuanLyTenBenhVienUpdateComponent } from './quan-ly-ten-benh-vien-update/quan-ly-ten-benh-vien-update.component';


@NgModule({
  declarations: 
  [
    QuanLyTenBenhVienListComponent,
    QuanLyTenBenhVienShareComponent,
    QuanLyTenBenhVienCreateComponent,
    QuanLyTenBenhVienUpdateComponent
  ],
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

    QuanLyTenBenhVienRoutingModule
  ],
  providers: [
    QuanLyTenBenhVienService,
    { provide: BaseService, useClass: QuanLyTenBenhVienService },
  ]
})
export class QuanLyTenBenhVienModule { }
