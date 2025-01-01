import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChuanDoanRoutingModule } from './chuan-doan-routing.module';
import { ChuanDoanListComponent } from './chuan-doan-list/chuan-doan-list.component';
import { BaseService } from 'src/app/core/services/base.service';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChuanDoanService } from './chuan-doan.service';
import { ChuanDoanSharedComponent } from './chuan-doan-shared/chuan-doan-shared.component';
import { ChuanDoanCreateComponent } from './chuan-doan-create/chuan-doan-create.component';
import { ChuanDoanUpdateComponent } from './chuan-doan-update/chuan-doan-update.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ChuanDoanListComponent, ChuanDoanSharedComponent, ChuanDoanCreateComponent, ChuanDoanUpdateComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PageLayoutModule,
    BreadcrumbsModule,
    SharedModule,
    FormsModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    ChuanDoanRoutingModule,GridModule
  ],
  providers: [
    ChuanDoanService,
    { provide: BaseService, useClass: ChuanDoanService },
  ]
})
export class ChuanDoanModule { }
