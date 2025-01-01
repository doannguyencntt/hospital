import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChucVuRoutingModule } from './chuc-vu-routing.module';
import { ChucVuListComponent } from './chuc-vu-list/chuc-vu-list.component';
import { ChucVuSharedComponent } from './chuc-vu-shared/chuc-vu-shared.component';
import { ChucVuCreateComponent } from './chuc-vu-create/chuc-vu-create.component';
import { ChucVuUpdateComponent } from './chuc-vu-update/chuc-vu-update.component';
import { ChucVuService } from './chuc-vu.service';
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
@NgModule({
  declarations: [
    ChucVuListComponent, 
    ChucVuSharedComponent, 
    ChucVuCreateComponent, 
    ChucVuUpdateComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    ChucVuRoutingModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  providers: [
    ChucVuService,
    { provide: BaseService,    useClass: ChucVuService },
  ]
})
export class ChucVuModule { }
