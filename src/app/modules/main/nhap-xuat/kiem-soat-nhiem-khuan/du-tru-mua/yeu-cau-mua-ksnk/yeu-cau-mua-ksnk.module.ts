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
import { DanhSachDuTruMuaKSNKComponent } from './danh-sach-du-tru-mua-ksnk/danh-sach-du-tru-mua-ksnk.component';
import { LapPhieuMuaKSNKSharedComponent } from './lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component';
import { LapPhieuMuaKSNKComponent } from './lap-phieu-mua-ksnk/lap-phieu-mua-ksnk.component';
import { LapPhieuMuaKSNKGuiLaiComponent } from './lap-phieu-mua-ksnk-gui-lai/lap-phieu-mua-ksnk-gui-lai.component';
import { GuiPhieuMuaKSNKConfirmComponent } from './gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component';
import { ThemKSNKDuTruMuaPopupComponent } from './them-ksnk-du-tru-mua-popup/them-ksnk-du-tru-mua-popup.component';
import { PhieuMuaKSNKComponent } from './phieu-mua-ksnk/phieu-mua-ksnk.component';
import { YeuCauMuaKSNKRoutingModule } from './yeu-cau-mua-ksnk-routing.module';




@NgModule({
  declarations: [
    DanhSachDuTruMuaKSNKComponent,
    LapPhieuMuaKSNKSharedComponent,
    LapPhieuMuaKSNKComponent,
    LapPhieuMuaKSNKGuiLaiComponent,
    GuiPhieuMuaKSNKConfirmComponent,
    ThemKSNKDuTruMuaPopupComponent,
    PhieuMuaKSNKComponent
  ],
  imports: [
    CommonModule,
    YeuCauMuaKSNKRoutingModule,
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
    GuiPhieuMuaKSNKConfirmComponent,
    ThemKSNKDuTruMuaPopupComponent,
    PhieuMuaKSNKComponent
  ]
})
export class YeuCauMuaKSNKSModule { }
