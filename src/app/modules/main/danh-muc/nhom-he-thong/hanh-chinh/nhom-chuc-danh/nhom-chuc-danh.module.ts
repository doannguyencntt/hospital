import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';

import { NhomChucDanhService } from './nhom-chuc-danh.service';
import { NhomChucDanhRoutingModule } from './nhom-chuc-danh-routing.module';
import { NhomChucDanhListComponent } from './nhom-chuc-danh-list/nhom-chuc-danh-list.component';
import { NhomChucDanhSharedComponent } from './nhom-chuc-danh-shared/nhom-chuc-danh-shared.component';
import { NhomChucDanhCreateComponent } from './nhom-chuc-danh-create/nhom-chuc-danh-create.component';
import { NhomChucDanhUpdateComponent } from './nhom-chuc-danh-update/nhom-chuc-danh-update.component';

@NgModule({
  declarations: [NhomChucDanhListComponent, NhomChucDanhSharedComponent, NhomChucDanhCreateComponent, NhomChucDanhUpdateComponent],
  imports: [
    CommonModule, 
    FormsModule,
    SharedModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    NhomChucDanhRoutingModule
  ],
  providers: [
    NhomChucDanhService,
    { provide: BaseService, useClass: NhomChucDanhService },
  ]
})
export class NhomChucDanhModule { }
