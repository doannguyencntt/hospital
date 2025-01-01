import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DichVuKhamBenhRoutingModule } from './dich-vu-kham-benh-routing.module';
import { DichVuKhamBenhListComponent } from './dich-vu-kham-benh-list/dich-vu-kham-benh-list.component';
import { DichVuKhamBenhCreateComponent } from './dich-vu-kham-benh-create/dich-vu-kham-benh-create.component';
import { DichVuKhamBenhUpdateComponent } from './dich-vu-kham-benh-update/dich-vu-kham-benh-update.component';
import { DichVuKhamBenhSharedComponent } from './dich-vu-kham-benh-shared/dich-vu-kham-benh-shared.component';
import { DichVuKhamBenhService } from './dich-vu-kham-benh.service';
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
    DichVuKhamBenhListComponent,
    DichVuKhamBenhCreateComponent,
    DichVuKhamBenhUpdateComponent,
    DichVuKhamBenhSharedComponent],
  imports: [
    CommonModule,
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    SharedModule,
    DichVuKhamBenhRoutingModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  providers: [
    DichVuKhamBenhService,
    { provide: BaseService, useClass: DichVuKhamBenhService },
  ]
})
export class DichVuKhamBenhModule { }
