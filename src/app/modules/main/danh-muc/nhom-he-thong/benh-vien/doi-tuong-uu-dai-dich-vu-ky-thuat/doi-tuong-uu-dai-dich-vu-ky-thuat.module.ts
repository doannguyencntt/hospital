import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoiTuongUuDaiDichVuKyThuatRoutingModule } from './doi-tuong-uu-dai-dich-vu-ky-thuat-routing.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';


import { BaseService } from 'src/app/core/services/base.service';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { DoiTuongUuDaiDichVuKyThuatService } from './doi-tuong-uu-dai-dich-vu-ky-thuat.service';
import { DoiTuongUuDaiDichVuKyThuatListComponent } from './doi-tuong-uu-dai-dich-vu-ky-thuat-list/doi-tuong-uu-dai-dich-vu-ky-thuat-list.component';
import { DoiTuongUuDaiDichVuKyThuatSharedComponent } from './doi-tuong-uu-dai-dich-vu-ky-thuat-shared/doi-tuong-uu-dai-dich-vu-ky-thuat-shared.component';
import { DoiTuongUuDaiDichVuKyThuatCreateComponent } from './doi-tuong-uu-dai-dich-vu-ky-thuat-create/doi-tuong-uu-dai-dich-vu-ky-thuat-create.component';
import { DoiTuongUuDaiDichVuKyThuatUpdateComponent } from './doi-tuong-uu-dai-dich-vu-ky-thuat-update/doi-tuong-uu-dai-dich-vu-ky-thuat-update.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [DoiTuongUuDaiDichVuKyThuatListComponent, DoiTuongUuDaiDichVuKyThuatSharedComponent, DoiTuongUuDaiDichVuKyThuatCreateComponent, DoiTuongUuDaiDichVuKyThuatUpdateComponent],
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
    LayoutModule,
    FormsModule,
    MatDialogModule,
    DoiTuongUuDaiDichVuKyThuatRoutingModule
  ],
  providers: [
    DoiTuongUuDaiDichVuKyThuatService,
    { provide: BaseService, useClass: DoiTuongUuDaiDichVuKyThuatService },
  ]
})
export class DoiTuongUuDaiDichVuKyThuatModule { }
