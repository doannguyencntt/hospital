import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { NhomDichVuThuongDungRoutingModule } from './nhom-dich-vu-thuong-dung-routing.module';
import { DanhSachNhomDichVuThuongDungComponent } from './danh-sach-nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung.component';
import { NhomDichVuThuongDungCreateComponent } from './nhom-dich-vu-thuong-dung-create/nhom-dich-vu-thuong-dung-create.component';
import { NhomDichVuThuongDungUpdateComponent } from './nhom-dich-vu-thuong-dung-update/nhom-dich-vu-thuong-dung-update.component';
import { NhomDichVuThuongDungSharedComponent } from './nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component';
import { NhomDichVuThuongDungCreatePopupComponent } from './nhom-dich-vu-thuong-dung-create-popup/nhom-dich-vu-thuong-dung-create-popup.component';

@NgModule({
  declarations: [DanhSachNhomDichVuThuongDungComponent, NhomDichVuThuongDungCreateComponent, NhomDichVuThuongDungUpdateComponent, NhomDichVuThuongDungSharedComponent, NhomDichVuThuongDungCreatePopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
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
    NhomDichVuThuongDungRoutingModule,
  ],
  entryComponents: [
    NhomDichVuThuongDungCreatePopupComponent
  ]
})
export class NhomDichVuThuongDungModule { }

