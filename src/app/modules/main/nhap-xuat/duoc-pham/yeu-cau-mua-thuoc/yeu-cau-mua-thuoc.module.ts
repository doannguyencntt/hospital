import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YeuCauMuaThuocRoutingModule } from './yeu-cau-mua-thuoc-routing.module';
import { DanhSachDuTruMuaThuocComponent } from './danh-sach-du-tru-mua-thuoc/danh-sach-du-tru-mua-thuoc.component';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule,MatRadioModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { IconModule } from '@visurel/iconify-angular';

import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { LapPhieuMuaDuocPhamComponent } from './lap-phieu-mua-duoc-pham/lap-phieu-mua-duoc-pham.component';
import { LapPhieuMuaDuocPhamGuiLaiComponent } from './lap-phieu-mua-duoc-pham-gui-lai/lap-phieu-mua-duoc-pham-gui-lai.component';
import { LapPhieuMuaDuocPhamSharedComponent } from './lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component';
import { PhieuMuaDuocPhamComponent } from './phieu-mua-duoc-pham/phieu-mua-duoc-pham.component';
import { ThemDuocPhamDuTruMuaPopupComponent } from './them-duoc-pham-du-tru-mua-popup/them-duoc-pham-du-tru-mua-popup.component';
import { GuiPhieuMuaDuocPhamConfirmComponent } from './gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component';


@NgModule({
  declarations: [
    DanhSachDuTruMuaThuocComponent,
    LapPhieuMuaDuocPhamComponent, 
    LapPhieuMuaDuocPhamGuiLaiComponent, 
    LapPhieuMuaDuocPhamSharedComponent, 
    PhieuMuaDuocPhamComponent, ThemDuocPhamDuTruMuaPopupComponent, GuiPhieuMuaDuocPhamConfirmComponent
  ],
  imports: [
    CommonModule,
    YeuCauMuaThuocRoutingModule,
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
  exports:[
 
  ],
  entryComponents: [
    PhieuMuaDuocPhamComponent,
    ThemDuocPhamDuTruMuaPopupComponent,
    GuiPhieuMuaDuocPhamConfirmComponent
  ]
})
export class YeuCauMuaThuocModule { }
