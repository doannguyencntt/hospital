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

import { YeuCauMuaVatTuRoutingModule } from './yeu-cau-mua-vat-tu-routing.module';
import { DanhSachDuTruMuaVatTuComponent } from './danh-sach-du-tru-mua-vat-tu/danh-sach-du-tru-mua-vat-tu.component';
import { LapPhieuMuaVatTuSharedComponent } from './lap-phieu-mua-vat-tu-shared/lap-phieu-mua-vat-tu-shared.component';
import { LapPhieuMuaVatTuComponent } from './lap-phieu-mua-vat-tu/lap-phieu-mua-vat-tu.component';
import { LapPhieuMuaVatTuGuiLaiComponent } from './lap-phieu-mua-vat-tu-gui-lai/lap-phieu-mua-vat-tu-gui-lai.component';
import { GuiPhieuMuaVatTuConfirmComponent } from './gui-phieu-mua-vat-tu-confirm/gui-phieu-mua-vat-tu-confirm.component';
import { ThemVatTuDuTruMuaPopupComponent } from './them-vat-tu-du-tru-mua-popup/them-vat-tu-du-tru-mua-popup.component';
import { PhieuMuaVatTuComponent } from './phieu-mua-vat-tu/phieu-mua-vat-tu.component';


@NgModule({
  declarations: [
    DanhSachDuTruMuaVatTuComponent,
    LapPhieuMuaVatTuSharedComponent,
    LapPhieuMuaVatTuComponent,
    LapPhieuMuaVatTuGuiLaiComponent,
    GuiPhieuMuaVatTuConfirmComponent,
    ThemVatTuDuTruMuaPopupComponent,
    PhieuMuaVatTuComponent],
  imports: [
    CommonModule,
    YeuCauMuaVatTuRoutingModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    MatCheckboxModule,
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
    ReactiveFormsModule,
    MatRadioModule,
    DropDownButtonModule,
    LayoutModule
  ]
  ,
  exports: [

  ],
  entryComponents: [
    GuiPhieuMuaVatTuConfirmComponent,
    ThemVatTuDuTruMuaPopupComponent,
    PhieuMuaVatTuComponent
  ]
})
export class YeuCauMuaVatTuModule { }
