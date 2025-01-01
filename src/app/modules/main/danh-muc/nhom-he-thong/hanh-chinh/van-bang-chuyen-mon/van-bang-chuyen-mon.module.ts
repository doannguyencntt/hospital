import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';

import { VanBangChuyenMonService } from './van-bang-chuyen-mon.service';
import { VanBangChuyenMonRoutingModule } from './van-bang-chuyen-mon-routing.module';
import { VanBangChuyenMonListComponent } from './van-bang-chuyen-mon-list/van-bang-chuyen-mon-list.component';
import { VanBangChuyenMonCreateComponent } from './van-bang-chuyen-mon-create/van-bang-chuyen-mon-create.component';
import { VanBangChuyenMonShareComponent } from './van-bang-chuyen-mon-share/van-bang-chuyen-mon-share.component';
import { VanBangChuyenMonUpdateComponent } from './van-bang-chuyen-mon-update/van-bang-chuyen-mon-update.component';


import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    VanBangChuyenMonListComponent,
    VanBangChuyenMonCreateComponent,
    VanBangChuyenMonShareComponent,
    VanBangChuyenMonUpdateComponent
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
    VanBangChuyenMonRoutingModule
  ],
  providers: [
    VanBangChuyenMonService,
    { provide: BaseService, useClass: VanBangChuyenMonService },
  ]
})
export class VanBangChuyenMonModule { }
