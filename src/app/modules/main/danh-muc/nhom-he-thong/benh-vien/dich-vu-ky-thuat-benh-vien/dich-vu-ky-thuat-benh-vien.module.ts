import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DichVuKyThuatBenhVienRoutingModule } from './dich-vu-ky-thuat-benh-vien-routing.module';
import { DichVuKyThuatBenhVienListComponent } from './dich-vu-ky-thuat-benh-vien-list/dich-vu-ky-thuat-benh-vien-list.component';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { DichVuKyThuatBenhVienService } from './dich-vu-ky-thuat-benh-vien.service';
import { BaseService } from 'src/app/core/services/base.service';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DichVuKyThuatBenhVienSharedComponent } from './dich-vu-ky-thuat-benh-vien-shared/dich-vu-ky-thuat-benh-vien-shared.component';
import { DichVuKyThuatBenhVienCreateComponent } from './dich-vu-ky-thuat-benh-vien-create/dich-vu-ky-thuat-benh-vien-create.component';
import { DichVuKyThuatBenhVienUpdateComponent } from './dich-vu-ky-thuat-benh-vien-update/dich-vu-ky-thuat-benh-vien-update.component';

@NgModule({
  declarations: [DichVuKyThuatBenhVienListComponent, DichVuKyThuatBenhVienSharedComponent, DichVuKyThuatBenhVienCreateComponent, DichVuKyThuatBenhVienUpdateComponent],
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
    DichVuKyThuatBenhVienRoutingModule,
    LayoutModule
  ],
  providers: [
    DichVuKyThuatBenhVienService,
    { provide: BaseService, useClass: DichVuKyThuatBenhVienService },
  ]
})
export class DichVuKyThuatBenhVienModule { }
