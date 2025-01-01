import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhMucGiuongBenhRoutingModule } from './danh-muc-giuong-benh-routing.module';
import { DanhMucGiuongBenhListComponent } from './danh-muc-giuong-benh-list/danh-muc-giuong-benh-list.component';
import { DanhMucGiuongBenhCreateComponent } from './danh-muc-giuong-benh-create/danh-muc-giuong-benh-create.component';
import { DanhMucGiuongBenhUpdateComponent } from './danh-muc-giuong-benh-update/danh-muc-giuong-benh-update.component';
import { DanhMucGiuongBenhSharedComponent } from './danh-muc-giuong-benh-shared/danh-muc-giuong-benh-shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatTabsModule, MatCheckboxModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { DanhMucGiuongBenhService } from './danh-muc-giuong-benh.service';
import { BaseService } from 'src/app/core/services/base.service';


@NgModule({
  declarations: [DanhMucGiuongBenhListComponent, DanhMucGiuongBenhCreateComponent
    , DanhMucGiuongBenhUpdateComponent, DanhMucGiuongBenhSharedComponent],
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    DanhMucGiuongBenhRoutingModule,
    LayoutModule,
    MatDialogModule,
    MatTabsModule,
    SharedModule,
    GridModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  providers: [
    DanhMucGiuongBenhService,
    { provide: BaseService, useClass: DanhMucGiuongBenhService },
  ],
})
export class DanhMucGiuongBenhModule { }
