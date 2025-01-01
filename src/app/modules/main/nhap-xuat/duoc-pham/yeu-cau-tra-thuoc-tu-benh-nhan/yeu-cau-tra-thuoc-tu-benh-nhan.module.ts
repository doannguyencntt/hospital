import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YeuCauTraThuocTuBenhNhanRoutingModule } from './yeu-cau-tra-thuoc-tu-benh-nhan-routing.module';
import { YeuCauTraThuocTuBenhNhanListComponent } from './yeu-cau-tra-thuoc-tu-benh-nhan-list/yeu-cau-tra-thuoc-tu-benh-nhan-list.component';
import { YeuCauTraThuocTuBenhNhanSharedComponent } from './yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component';
import { YeuCauTraThuocTuBenhNhanCreateComponent } from './yeu-cau-tra-thuoc-tu-benh-nhan-create/yeu-cau-tra-thuoc-tu-benh-nhan-create.component';
import { YeuCauTraThuocTuBenhNhanUpdateComponent } from './yeu-cau-tra-thuoc-tu-benh-nhan-update/yeu-cau-tra-thuoc-tu-benh-nhan-update.component';


import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { IconModule } from '@visurel/iconify-angular';

import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { PhieuTraThuocTuBenhNhanPopupComponent } from './phieu-tra-thuoc-tu-benh-nhan-popup/phieu-tra-thuoc-tu-benh-nhan-popup.component';
import { DuyetHoanTraDuocPhamModule } from '../duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module';

@NgModule({
  declarations: [
    YeuCauTraThuocTuBenhNhanListComponent,
    YeuCauTraThuocTuBenhNhanSharedComponent,
    YeuCauTraThuocTuBenhNhanCreateComponent,
    YeuCauTraThuocTuBenhNhanUpdateComponent,
    PhieuTraThuocTuBenhNhanPopupComponent],
  imports: [
    CommonModule,
    YeuCauTraThuocTuBenhNhanRoutingModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    LayoutModule,
    MatCheckboxModule,
    DropDownButtonModule,
    DuyetHoanTraDuocPhamModule
  ],
  entryComponents: [
    PhieuTraThuocTuBenhNhanPopupComponent
  ]

})
export class YeuCauTraThuocTuBenhNhanModule { }
