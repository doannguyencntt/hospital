import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { ChucDanhRoutingModule } from './chuc-danh-routing.module';
import { ChucDanhSharedComponent } from './chuc-danh-shared/chuc-danh-shared.component';
import { ChucDanhListComponent } from './chuc-danh-list/chuc-danh-list.component';
import { ChucDanhCreateComponent } from './chuc-danh-create/chuc-danh-create.component';

import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { ChucDanhUpdateComponent } from './chuc-danh-update/chuc-danh-update.component';

import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaseService } from 'src/app/core/services/base.service';
import { ChucDanhService } from './chuc-danh.service';





@NgModule({
  declarations: [ChucDanhSharedComponent, ChucDanhListComponent, ChucDanhCreateComponent, ChucDanhUpdateComponent],
  imports: [
    CommonModule,
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
    ChucDanhRoutingModule
  ],providers: [
    ChucDanhService,
    { provide: BaseService,    useClass: ChucDanhService },
  ]
})
export class ChucDanhModule { }
