import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { YeuCauTraVatTuTuBenhNhanRoutingModule } from './yeu-cau-tra-vat-tu-tu-benh-nhan-routing.module';
import { YeuCauTraVatTuTuBenhNhanListComponent } from './yeu-cau-tra-vat-tu-tu-benh-nhan-list/yeu-cau-tra-vat-tu-tu-benh-nhan-list.component';
import { YeuCauTraVatTuTuBenhNhanCreateComponent } from './yeu-cau-tra-vat-tu-tu-benh-nhan-create/yeu-cau-tra-vat-tu-tu-benh-nhan-create.component';
import { YeuCauTraVatTuTuBenhNhanUpdateComponent } from './yeu-cau-tra-vat-tu-tu-benh-nhan-update/yeu-cau-tra-vat-tu-tu-benh-nhan-update.component';
import { YeuCauTraVatTuTuBenhNhanSharedComponent } from './yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component';
import { PhieuTraVatTuTuBenhNhanPopupComponent } from './phieu-tra-vat-tu-tu-benh-nhan-popup/phieu-tra-vat-tu-tu-benh-nhan-popup.component';
import { DuyetHoanTraDuocPhamModule } from '../../duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module';


@NgModule({
  declarations: [
    YeuCauTraVatTuTuBenhNhanListComponent,
    YeuCauTraVatTuTuBenhNhanCreateComponent,
    YeuCauTraVatTuTuBenhNhanUpdateComponent,
    YeuCauTraVatTuTuBenhNhanSharedComponent,
    PhieuTraVatTuTuBenhNhanPopupComponent],
  imports: [
    CommonModule,
    YeuCauTraVatTuTuBenhNhanRoutingModule,

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
    PhieuTraVatTuTuBenhNhanPopupComponent
  ]
})
export class YeuCauTraVatTuTuBenhNhanModule { }
