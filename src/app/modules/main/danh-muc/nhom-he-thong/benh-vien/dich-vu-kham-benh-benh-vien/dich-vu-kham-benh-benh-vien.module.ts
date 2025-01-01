import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DichVuKhamBenhBenhVienRoutingModule } from './dich-vu-kham-benh-benh-vien-routing.module';
import { DichVuKhamBenhBenhVienListComponent } from './dich-vu-kham-benh-benh-vien-list/dich-vu-kham-benh-benh-vien-list.component';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DichVuKhamBenhBenhVienService } from './dich-vu-kham-benh-benh-vien.service';
import { BaseService } from 'src/app/core/services/base.service';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { DichVuKhamBenhBenhVienCreateComponent } from './dich-vu-kham-benh-benh-vien-create/dich-vu-kham-benh-benh-vien-create.component';
import { DichVuKhamBenhBenhVienSharedComponent } from './dich-vu-kham-benh-benh-vien-shared/dich-vu-kham-benh-benh-vien-shared.component';
import { DichVuKhamBenhBenhVienUpdatedComponent } from './dich-vu-kham-benh-benh-vien-updated/dich-vu-kham-benh-benh-vien-updated.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [DichVuKhamBenhBenhVienListComponent, DichVuKhamBenhBenhVienCreateComponent, DichVuKhamBenhBenhVienSharedComponent, DichVuKhamBenhBenhVienUpdatedComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PageLayoutModule,
    BreadcrumbsModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    FormsModule,
    SharedModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    ReactiveFormsModule,
    DichVuKhamBenhBenhVienRoutingModule, GridModule
  ],
  providers: [
    DichVuKhamBenhBenhVienService,
    { provide: BaseService, useClass: DichVuKhamBenhBenhVienService },
  ]
})
export class DichVuKhamBenhBenhVienModule { }
