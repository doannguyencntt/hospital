import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaseService } from 'src/app/core/services/base.service';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { DichVuKyThuatRoutingModule } from './dich-vu-ky-thuat-routing.module';
import { DichVuKyThuatListComponent } from './dich-vu-ky-thuat-list/dich-vu-ky-thuat-list.component';
import { DichVuKyThuatService } from './dich-vu-ky-thuat.service';

@NgModule({
  declarations: [DichVuKyThuatListComponent],
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
    DichVuKyThuatRoutingModule
  ],
  providers: [
    DichVuKyThuatService,
    { provide: BaseService, useClass: DichVuKyThuatService },
  ]
})
export class DichVuKyThuatModule { }
