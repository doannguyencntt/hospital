import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YeuCauLinhKSNKRoutingModule } from './yeu-cau-linh-ksnk-routing.module';
import { DanhSachYeuCauLinhKSNKComponent } from './danh-sach-yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk.component';
import { PhieuLinhKSNKBuGuiLaiComponent } from './phieu-linh-ksnk-bu-gui-lai/phieu-linh-ksnk-bu-gui-lai.component';
import { PhieuLinhKSNKBuGuiLaiSharedComponent } from './phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component';
import { PhieuLinhKSNKThuongGuiLaiComponent } from './phieu-linh-ksnk-thuong-gui-lai/phieu-linh-ksnk-thuong-gui-lai.component';
import { PhieuLinhKSNKThuongSharedComponent } from './phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component';
import { TaoPhieuLinhKSNKBuComponent } from './tao-phieu-linh-ksnk-bu/tao-phieu-linh-ksnk-bu.component';
import { TaoPhieuLinhKSNKThuongComponent } from './tao-phieu-linh-ksnk-thuong/tao-phieu-linh-ksnk-thuong.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { InLinhKSNKComponent } from './in-linh-ksnk/in-linh-ksnk.component';
import { PhieuLinhKSNKThuongPopupComponent } from './phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component';
import { PopupThongBaoVtKhongTheTaoComponent } from './popup-thong-bao-ksnk-khong-the-tao/popup-thong-bao-ksnk-khong-the-tao.component';

@NgModule({
  declarations: [
    DanhSachYeuCauLinhKSNKComponent, 
    PhieuLinhKSNKBuGuiLaiComponent, 
    PhieuLinhKSNKBuGuiLaiSharedComponent, 
    PhieuLinhKSNKThuongGuiLaiComponent, 
    PhieuLinhKSNKThuongSharedComponent, 
  
    TaoPhieuLinhKSNKBuComponent, 
    TaoPhieuLinhKSNKThuongComponent, 
     InLinhKSNKComponent, PhieuLinhKSNKThuongPopupComponent, PopupThongBaoVtKhongTheTaoComponent],
  imports: [
    CommonModule,
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
    YeuCauLinhKSNKRoutingModule
  ],
  entryComponents: [
    ConfirmComponent,
    PhieuLinhKSNKThuongPopupComponent,
    InLinhKSNKComponent,
    PopupThongBaoVtKhongTheTaoComponent
  ]
})
export class YeuCauLinhKSNKModule { }
