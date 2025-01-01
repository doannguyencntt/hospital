import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';

import { FormsModule } from '@angular/forms';
import { BaseService } from 'src/app/core/services/base.service';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DoiTuongUuDaiDichVuKhamBenhRoutingModule } from './doi-tuong-uu-dai-dich-vu-kham-benh-routing.module';
import { DoiTuongUuDaiDichVuKhamBenhListComponent } from './doi-tuong-uu-dai-dich-vu-kham-benh-list/doi-tuong-uu-dai-dich-vu-kham-benh-list.component';
import { DoiTuongUuDaiDichVuKhamBenhService } from './doi-tuong-uu-dai-dich-vu-kham-benh.service';
import { DoiTuongUuDaiDichVuKhamBenhSharedComponent } from './doi-tuong-uu-dai-dich-vu-kham-benh-shared/doi-tuong-uu-dai-dich-vu-kham-benh-shared.component';
import { DoiTuongUuDaiDichVuKhamBenhCreateComponent } from './doi-tuong-uu-dai-dich-vu-kham-benh-create/doi-tuong-uu-dai-dich-vu-kham-benh-create.component';
import { DoiTuongUuDaiDichVuKhamBenhUpdateComponent } from './doi-tuong-uu-dai-dich-vu-kham-benh-update/doi-tuong-uu-dai-dich-vu-kham-benh-update.component';


@NgModule({
  declarations: [DoiTuongUuDaiDichVuKhamBenhListComponent, DoiTuongUuDaiDichVuKhamBenhSharedComponent, DoiTuongUuDaiDichVuKhamBenhCreateComponent, DoiTuongUuDaiDichVuKhamBenhUpdateComponent],
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
    DoiTuongUuDaiDichVuKhamBenhRoutingModule
  ],
  providers: [
    DoiTuongUuDaiDichVuKhamBenhService,
    { provide: BaseService, useClass: DoiTuongUuDaiDichVuKhamBenhService },
  ]
})
export class DoiTuongUuDaiDichVuKhamBenhModule { }
